import { acceptHMRUpdate, skipHydrate } from 'pinia'
import { nanoid } from 'nanoid'
import { useLogic } from '~/stores/logic'

export const useMenus = defineStore('menus', () => {
  const userMenus = useLocalStorage<MenusItem[]>('calendar-user-menus', [])
  const menus = reactive<MenusList[]>([
    {
      id: 'Domain',
      label: '区域',
      children: [
        {
          id: 'Gather',
          icon: 'i-carbon-folder',
          color: '#f472b6',
          label: 'Gather',
          editable: false,
        },
      ],
    },
    {
      id: 'Setting',
      label: '设置',
      children: [
        {
          id: 'Website',
          icon: 'i-carbon-settings',
          label: '网站',
          editable: false,
        },
      ],
    },
  ])

  watchEffect(() => {
    menus[0].children = [
      {
        id: 'Gather',
        icon: 'i-carbon-folder',
        color: '#f472b6',
        label: 'Gather',
        editable: false,
      },
      ...userMenus.value,
    ]
  })

  /**
   * 通过 ID 获取菜单详情
   * @param id 菜单 id
   * @returns info 详情
   */
  function getMenuInfo(id: string) {
    const info = menus.map(item =>
      item.children.find(item => item.id === id),
    ).filter(Boolean)[0] as MenusItem

    return info || {}
  }

  /**
   * 通过 ID 删除指定菜单
   * @param id 菜单 id
   */
  function deleteMenu(id: string) {
    const index = userMenus.value.findIndex(item => item.id === id)
    if (index === -1)
      return

    userMenus.value.splice(index, 1)
  }

  /**
   * 添加菜单项
   * @param index 下标
   */
  function addMenu() {
    const id = nanoid()
    userMenus.value.push({
      id,
      icon: 'i-carbon-folder',
      label: '',
      color: useRandomColor(),
      editable: true,
    })

    const { acMenus } = storeToRefs(useLogic())
    acMenus.value = id
  }

  return {
    menus: skipHydrate(menus),
    addMenu,
    deleteMenu,
    getMenuInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
