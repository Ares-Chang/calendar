import { acceptHMRUpdate } from 'pinia'
import { nanoid } from 'nanoid'

export const useMenus = defineStore('menus', () => {
  const list = useLocalStorage<MenusItem[]>('calendar-menus', [
    {
      id: nanoid(),
      icon: 'i-carbon-folder',
      label: 'Gather',
      focus: false,
      editable: true,
    },
  ])

  return {
    list,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
