import type { Table } from 'dexie'
import Dexie from 'dexie'

export class MyDexie extends Dexie {
  menus!: Table<MenusInfo>
  todo!: Table<TodoInfo>

  constructor() {
    super('database')
    this.version(0.3).stores({
      menus: 'id, index',
      todo: 'id, index, menus',
    }).upgrade(async (trans) => {
      // 在版本更新函数中执行升级操作
      const todo = trans.table<TodoInfo, string>('todo')
      await todo.toCollection().modify((item: TodoInfo) => {
        item.menus = ''
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
