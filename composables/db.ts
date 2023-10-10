import type { Table } from 'dexie'
import Dexie from 'dexie'

class MyDexie extends Dexie {
  menus!: Table<MenusList>

  constructor() {
    super('database')
    this.version(0.1).stores({
      menus: '++index, id, label',
    })
  }
}

export const db = new MyDexie()
