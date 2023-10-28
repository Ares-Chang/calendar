import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'
import { nanoid } from 'nanoid'
import { useDB } from '~/composables/useDB'

const db = useDB()
export function useTodo() {
  const { acMenus } = storeToRefs(useLogic())

  const count = useObservable(
    from(
      liveQuery(async () => await db.todo.count()),
    ),
  )

  async function getDataList() {
    const key = acMenus.value

    if (key === 'Gather')
      return await db.todo.orderBy('index').toArray() // 查询全部数据
    else return await db.todo.where('menus').equals(key).sortBy('index') // 查询指定菜单数据
  }

  function add() {
    db.todo.add({
      menus: acMenus.value,
      id: nanoid(),
      index: count.value as number,
      label: `${count.value}`,
      done: false,
    })
    getDataList()
  }

  function update(item: TodoItem) {
    db.todo.update(item.id, item)
  }

  return {
    add,
    update,
    getDataList,
  }
}
