import type { Table } from 'dexie'
import Dexie from 'dexie'

export class MyDexie extends Dexie {
  menus!: Table<MenusInfo>
  todo!: Table<TodoInfo>

  constructor() {
    super('database')
    this.version(0.5).stores({
      menus: 'id, index',
      todo: 'id, index, menus, done, date',
    }).upgrade(async (trans) => {
      // 在版本更新函数中执行升级操作
      const todo = trans.table<TodoInfo, string>('todo')
      await todo.toCollection().modify((item: TodoInfo) => {
        item.menus = item.menus || ''
        item.done = item.done || false
        item.date = item.date || Date.now()
      })
    })
  }
}

let db: MyDexie | null
export function useDB() {
  if (!db)
    db = new MyDexie()

  return db
}
