import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'
import { nanoid } from 'nanoid'
import { useDB } from '~/composables/useDB'

const db = useDB()
export function useMenus() {
  const menus = useObservable(
    from(
      liveQuery(async () => await db.menus.orderBy('index').toArray()),
    ),
  )

  function addMenu() {
    db.menus.add({
      id: nanoid(),
      index: menus.value!.length,
      icon: 'i-carbon-folder',
      label: '',
      color: useRandomColor(),
      editable: true,
    })
  }

  function updateMenu(item: MenusInfo) {
    db.menus.update(item.id, item)
  }

  function deleteMenu(id: string) {
    db.menus.delete(id)
  }

  return {
    menus,
    addMenu,
    updateMenu,
    deleteMenu,
  }
}
