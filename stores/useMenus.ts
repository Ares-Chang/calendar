// 以下 magic comment 用于 unocss 强制扫描，生成 icon
// @unocss-include

import { acceptHMRUpdate } from 'pinia'
import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'
import { nanoid } from 'nanoid'
import { useDB } from '~/composables/useDB'

export const useMenus = defineStore('menus', () => {
  const db = useDB()
  const list = useObservable(
    from(
      liveQuery(async () => await db.menus.orderBy('index').toArray()),
    ),
  )

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

  function add() {
    db.menus.add({
      id: nanoid(),
      index: list.value!.length,
      icon: 'i-carbon-folder',
      label: '',
      color: useRandomColor(),
      editable: true,
    })
  }

  function update(item: MenusInfo) {
    db.menus.update(item.id, item)
  }

  function remove(id: string) {
    db.menus.delete(id)
  }

  return {
    menus,
    add,
    update,
    remove,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenus, import.meta.hot))
