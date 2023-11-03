export function useShortcutKey() {
  const { acMenus, acTodo } = storeToRefs(useLogic())

  useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.type !== 'keydown')
        return

      moveTodo(e.key)
      moveMents(e.key)
    },
  })

  /**
   * 移动菜单
   * @param type h: 向上移动 l: 向下移动
   */
  function moveMents(type: string) {
    if (!['h', 'l'].includes(type))
      return

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
    if (!['j', 'k'].includes(type))
      return

    const step = type === 'j' ? 1 : -1

    const { list } = storeToRefs(useTodo())

    // 获取 list 中 id 为 acTodo 的下标
    const index = list.value.findIndex(item => item.id === acTodo.value)
    const id = list.value[index + step]?.id || acTodo.value

    acTodo.value = id
  }
}