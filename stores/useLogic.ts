// 以下 magic comment 用于 unocss 强制扫描，生成 icon
// @unocss-include

import { acceptHMRUpdate } from 'pinia'

export const useLogic = defineStore('logic', () => {
  const { menus: list, addMenu } = useMenus()

  const menus = reactive<MenusList[]>([
    {
      id: 'Domain',
      label: '区域',
      children: [],
    },
    {
      id: 'Setting',
      label: '设置',
      children: [
        {
          id: 'Website',
          index: -1,
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
        index: -1,
        icon: 'i-carbon-folder',
        color: '#f472b6',
        label: 'Gather',
        editable: false,
      },
      ...list.value || [],
    ]
  })

  const acMenus = ref('Gather') // 激活菜单
  const acMenusInfo = computed(() => {
    const info = menus.map(item =>
      item.children.find(item => item.id === acMenus.value),
    ).filter(Boolean)[0] as MenusInfo

    return info || {}
  })

  const acTodo = ref('') // 激活 todo

  return {
    acMenus,
    menus,
    acMenusInfo,
    acTodo,
    addMenu,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLogic, import.meta.hot))
