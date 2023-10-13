import type { Table } from 'dexie'
import Dexie from 'dexie'

export class MyDexie extends Dexie {
  menus!: Table<MenusList>

  constructor() {
    super('database')
    this.version(0.1).stores({
      menus: '++index, id, label',
    })
  }
}

let db: MyDexie | null
export function useDB() {
  if (!db)
    db = new MyDexie()

  return db
}
