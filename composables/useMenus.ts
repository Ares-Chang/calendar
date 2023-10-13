import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'
import { useDB } from '~/composables/useDB'

const db = useDB()
export function useMenus() {
  const menus = useObservable(
    from(
      liveQuery(async () =>
        await db.menus.where('id').equals('Domain').toArray(),
      ),
    ),
  )

  function addMenus(data: MenusList) {
    db.menus.add(data)
  }

  return {
    menus,
    addMenus,
  }
}
