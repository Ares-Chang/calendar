import type { Table } from 'dexie'
import Dexie from 'dexie'

export class MyDexie extends Dexie {
  menus!: Table<MenusItem>
  todo!: Table<TodoItem>

  constructor() {
    super('database')
    this.version(0.3).stores({
      menus: 'id, index',
      todo: 'id, index, menus',
    }).upgrade(async (trans) => {
      // 在版本更新函数中执行升级操作
      const todo = trans.table<TodoItem, string>('todo')
      await todo.toCollection().modify((item: TodoItem) => {
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
