/**
 * 移动菜单
 * @param type h: 向上移动 l: 向下移动
 */
export function moveMents(type: string) {
  const { acMenus } = storeToRefs(useLogic())
  const step = type === 'h' ? -1 : 1

  const { menus } = storeToRefs(useMenus())
  const list = menus.value[0].children

  // 获取 list 中 id 为 acMenus 的下标
  const index = list.findIndex(item => item.id === acMenus.value)
  const id = list[index + step]?.id || acMenus.value

  acMenus.value = id
}
