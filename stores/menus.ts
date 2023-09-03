import { acceptHMRUpdate } from 'pinia'

export const useMenus = defineStore('menus', () => {
  const list = ref<MenusList[]>([
    {
      label: '区域',
      children: [
        {
          icon: 'i-carbon-folder',
          label: 'Gather',
        },
      ],
    },
  ])

  return {
    list,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
