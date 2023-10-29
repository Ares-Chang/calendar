import { acceptHMRUpdate } from 'pinia'

export const useLogic = defineStore('logic', () => {
  const acMenus = ref('Gather') // 激活菜单

  const acTodo = ref('') // 激活 todo

  return {
    acMenus,
    acTodo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLogic, import.meta.hot))
