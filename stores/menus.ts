export const useMenus = defineStore('menus', () => {
  const list = ref([
    {
      label: '区域',
      children: [
        {
          icon: 'i-carbon-folder',
          label: 'Gather',
        },
        {
          icon: 'i-carbon-folder',
          label: '网站',
        },
        {
          icon: 'i-carbon-folder',
          label: '网站',
        },
        {
          icon: 'i-carbon-folder',
          label: '网站',
        },
      ],
    },
  ])

  return {
    list,
  }
})
