interface MenusList {
  id: string
  label: string
  children: MenusItem[]
}

interface MenusItem {
  id: string
  index: number
  icon: string
  label: string
  color?: string
  editable: boolean
}

interface TodoItem {
  menus: string
  id: string
  index: number
  label: string
  done: boolean
}
