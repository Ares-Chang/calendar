/**
 * 移动 Todo
 * @param type j: 向下移动 k: 向上移动
 */
export function moveTodo(type: string) {
  const { acTodo } = storeToRefs(useLogic())
  const { list } = storeToRefs(useTodo())

  const step = type === 'j' ? 1 : -1

  // 获取 list 中 id 为 acTodo 的下标
  const index = list.value.findIndex(item => item.id === acTodo.value)
  const id = list.value[index + step]?.id || acTodo.value

  acTodo.value = id
}

/**
 * 添加 Todo
 */
export function addTodo(value?: string | undefined) {
  useTodo().add(`${value || Date.now()}`)
}

/**
 * 完成 Todo
 */
export async function doneTodo() {
  const { acTodo } = storeToRefs(useLogic())
  const { getInfo, update } = useTodo()

  const info = await getInfo(acTodo.value)

  if (!info)
    return

  update({
    ...info,
    done: !info.done,
  })
}

/**
 * Todo 跳转到顶部
 */
export function goTodoTop() {
  const { acTodo } = storeToRefs(useLogic())
  const { list } = storeToRefs(useTodo())

  acTodo.value = list.value[0].id
}

/**
 * Todo 跳转到底部
 */
export function goTodoBottom() {
  const { acTodo } = storeToRefs(useLogic())
  const { list } = storeToRefs(useTodo())

  acTodo.value = list.value[list.value.length - 1].id
}

/**
 * 删除 Todo
 */
export function removeTodo() {
  const { acTodo } = storeToRefs(useLogic())

  if (!acTodo.value)
    return

  const { remove } = useTodo()
  remove(acTodo.value)
}
