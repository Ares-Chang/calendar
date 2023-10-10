import { liveQuery } from 'dexie'
import { from, useObservable } from '@vueuse/rxjs'

export function GETMENUSLIST() {
  return useObservable(
    from(
      liveQuery(async () =>
        await db.menus.where('id').equals('Domain').toArray(),
      ),
    ),
  )
}
