import { acceptHMRUpdate, skipHydrate } from 'pinia'
import { nanoid } from 'nanoid'

export const useMenus = defineStore('menus', () => {
  const menus = useLocalStorage<MenusList[]>('calendar-menus', [
    {
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

  /**
   * 添加菜单项
   * @param index 下标
   */
  function addMenu(index: number) {
    menus.value[index].children.push({
      id: nanoid(),
      icon: 'i-carbon-folder',
      label: '',
      editable: false,
    })
  }

  return {
    menus: skipHydrate(menus),
    addMenu,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
