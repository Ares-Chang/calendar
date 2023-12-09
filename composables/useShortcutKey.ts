import { moveMents } from './handle/menus'
import {
  addTodo,
  doneTodo,
  goTodoBottom,
  goTodoTop,
  moveTodo,
  removeTodo,
} from './handle/todo'

export function useShortcutKey() {
  defineShortcuts({
    'h': () => moveMents('h'),
    'l': () => moveMents('l'),
    'j': () => moveTodo('j'),
    'k': () => moveTodo('k'),
    'g-g': () => goTodoTop(),
    'shift_G': () => goTodoBottom(),
    'd-d': () => removeTodo(),
    ' ': () => doneTodo(),
    'Tab': () => addTodo(),
  })
}
