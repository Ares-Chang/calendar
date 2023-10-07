import { acceptHMRUpdate } from 'pinia'
import { useMenus } from '~/stores/menus'

export const useLogic = defineStore('logic', () => {
  const acMenus = ref('Gather') // 激活菜单

  const { getMenuInfo } = useMenus()
  const acMenuInfo = computed(() => getMenuInfo(acMenus.value))

  return {
    acMenus,
    acMenuInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLogic, import.meta.hot))
