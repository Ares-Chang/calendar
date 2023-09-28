interface MenusList {
  label: string
  children: MenusItem[]
}

interface MenusItem {
  id: string
  icon: string
  label: string
  color?: string
  editable: boolean
}