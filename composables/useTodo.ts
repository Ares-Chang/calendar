import { nanoid } from 'nanoid'
import { useDB } from '~/composables/useDB'

const db = useDB()
export function useTodo() {
  const { acMenus } = storeToRefs(useLogic())

  async function getDataList() {
    const key = acMenus.value

    if (key === 'Gather')
      return await db.todo.orderBy('index').toArray() // 查询全部数据
    else return await db.todo.where('menus').equals(key).sortBy('index') // 查询指定菜单数据
  }

  async function add() {
    const count = await db.todo.count()
    db.todo.add({
      menus: acMenus.value,
      id: nanoid(),
      index: count,
      label: `${count}`,
      done: false,
    })
  }

  function update(item: TodoInfo) {
    db.todo.update(item.id, item)
  }

  return {
    add,
    update,
    getDataList,
  }
}
