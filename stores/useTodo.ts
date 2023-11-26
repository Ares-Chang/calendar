import { acceptHMRUpdate } from 'pinia'
import { nanoid } from 'nanoid'
import { useDB } from '~/composables/useDB'

export const useTodo = defineStore('todo', () => {
  const db = useDB()
  const { acMenus, acTodo } = storeToRefs(useLogic())

  const list = ref<TodoInfo[]>([])

  watch(acMenus, async () => {
    await getDataList()

    acTodo.value = list.value[0]?.id || '' // 默认选中第一个
  }, { immediate: true })

  async function getDataList() {
    const key = acMenus.value

    let _list = []

    if (key === 'Gather')
      _list = await db.todo.orderBy('index').toArray() // 查询全部数据
    else _list = await db.todo.where('menus').equals(key).sortBy('index') // 查询指定菜单数据

    // 完成情况排序
    list.value = _list.sort((a, b) => {
      if (a.done === b.done)
        return a.index - b.index

      return a.done ? 1 : -1
    })
  }

  async function add(label: string | null) {
    if (!label?.trim())
      return

    const count = await db.todo.count()
    db.todo.add({
      menus: acMenus.value,
      id: nanoid(),
      index: count,
      date: Date.now(),
      label,
      done: false,
    })
    getDataList()
  }

  function update(item: TodoInfo) {
    db.todo.update(item.id, item)
    getDataList()
  }

  async function getInfo(id: string) {
    return await db.todo.where('id').equals(id).first()
  }

  function remove(id: string) {
    db.todo.delete(id)
    getDataList()
  }

  return {
    list,
    add,
    update,
    remove,
    getInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTodo, import.meta.hot))
