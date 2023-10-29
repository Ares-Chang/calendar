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

    if (key === 'Gather')
      list.value = await db.todo.orderBy('index').toArray() // 查询全部数据
    else list.value = await db.todo.where('menus').equals(key).sortBy('index') // 查询指定菜单数据
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
    getDataList()
  }

  function update(item: TodoInfo) {
    db.todo.update(item.id, item)
    getDataList()
  }

  async function getInfo(id: string) {
    return await db.todo.where('id').equals(id).first()
  }

  return {
    list,
    add,
    update,
    getInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTodo, import.meta.hot))
