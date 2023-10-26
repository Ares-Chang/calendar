import type { Table } from 'dexie'
import Dexie from 'dexie'

export class MyDexie extends Dexie {
  menus!: Table<MenusItem>

  constructor() {
    super('database')
    this.version(0.1).stores({
      menus: 'id, index',
    })
  }
}

let db: MyDexie | null
export function useDB() {
  if (!db)
    db = new MyDexie()

  return db
}
