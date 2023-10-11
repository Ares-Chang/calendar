import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'
import { db } from '~/composables/db'

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
