import { acceptHMRUpdate, skipHydrate } from 'pinia'
import { nanoid } from 'nanoid'

export const useMenus = defineStore('menus', () => {
  const userMenus = useLocalStorage<MenusItem[]>('calendar-user-menus', [])
  const menus = reactive<MenusList[]>([
    {
      label: '区域',
      children: [
        {
          id: 'Gather',
          icon: 'i-carbon-folder',
          color: '#f472b6',
          label: 'Gather',
          editable: true,
        },
      ],
    },
    {
      label: 'Setting',
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
        editable: true,
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

    return info
  }

  /**
   * 添加菜单项
   * @param index 下标
   */
  function addMenu() {
    userMenus.value.push({
      id: nanoid(),
      icon: 'i-carbon-folder',
      label: '',
      color: '#f472b6',
      editable: true,
    })
  }

  return {
    menus: skipHydrate(menus),
    addMenu,
    getMenuInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
