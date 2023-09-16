import { acceptHMRUpdate, skipHydrate } from 'pinia'
import { nanoid } from 'nanoid'

export const useMenus = defineStore('menus', () => {
  const menus = useLocalStorage<MenusList[]>('calendar-menus', [
    {
      id: nanoid(),
      label: '区域',
      children: [
        {
          id: nanoid(),
          icon: 'i-carbon-folder',
          label: 'Gather',
          focus: false,
          editable: true,
        },
      ],
    },
    {
      id: nanoid(),
      label: 'Setting',
      children: [
        {
          id: nanoid(),
          icon: 'i-carbon-folder',
          label: '网站',
          focus: false,
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
      focus: true,
      editable: true,
    })
  }

  return {
    menus: skipHydrate(menus),
    addMenu,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
