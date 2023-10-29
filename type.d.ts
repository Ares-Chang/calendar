interface MenusList {
  id: string
  label: string
  children: MenusInfo[]
}

interface MenusInfo {
  id: string
  index: number
  icon: string
  label: string
  color?: string
  editable: boolean
}

interface TodoInfo {
  menus: string
  id: string
  index: number
  date: number
  label: string
  done: boolean
}
