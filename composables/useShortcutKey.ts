export function useShortcutKey() {
  const { acMenus, acTodo } = storeToRefs(useLogic())

  defineShortcuts({
    'h': () => moveMents('h'),
    'l': () => moveMents('l'),
    'j': () => moveTodo('j'),
    'k': () => moveTodo('k'),
    'g-g': () => goTodoTop(),
    'shift_G': () => goTodoBottom(),
    'd-d': () => removeTodo(),
    ' ': () => doneTodo(),
    'Tab': () => addTodo(),
  })

  /**
   * 移动菜单
   * @param type h: 向上移动 l: 向下移动
   */
  function moveMents(type: string) {
    const step = type === 'h' ? -1 : 1

    const { menus } = storeToRefs(useMenus())
    const list = menus.value[0].children

    // 获取 list 中 id 为 acMenus 的下标
    const index = list.findIndex(item => item.id === acMenus.value)
    const id = list[index + step]?.id || acMenus.value

    acMenus.value = id
  }

  /**
   * 移动 Todo
   * @param type j: 向下移动 k: 向上移动
   */
  function moveTodo(type: string) {
    const step = type === 'j' ? 1 : -1

    const { list } = storeToRefs(useTodo())

    // 获取 list 中 id 为 acTodo 的下标
    const index = list.value.findIndex(item => item.id === acTodo.value)
    const id = list.value[index + step]?.id || acTodo.value

    acTodo.value = id
  }

  /**
   * 添加 Todo
   */
  function addTodo() {
    useTodo().add(`${Date.now()}`)
  }

  /**
   * 完成 Todo
   */
  async function doneTodo() {
    const { getInfo, update } = useTodo()
    const info = await getInfo(acTodo.value)

    if (!info)
      return

    update({
      ...info,
      done: !info.done,
    })
  }

  /**
   * Todo 跳转到顶部
   */
  function goTodoTop() {
    const { list } = storeToRefs(useTodo())
    acTodo.value = list.value[0].id
  }

  /**
   * Todo 跳转到底部
   */
  function goTodoBottom() {
    const { list } = storeToRefs(useTodo())
    acTodo.value = list.value[list.value.length - 1].id
  }

  /**
   * 删除 Todo
   */
  function removeTodo() {
    if (!acTodo.value)
      return

    const { remove } = useTodo()
    remove(acTodo.value)
  }
}
