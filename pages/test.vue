<script setup lang="ts">
const { menus, addMenus } = useMenus()
watchEffect(() => {
  console.log(menus.value)
})

function add() {
  addMenus({
    id: 'Domain',
    label: 'Domain',
    children: [],
  })
}
</script>

<template>
  <div>
    {{ menus }}
    <button @click="add">
      add
    </button>
  </div>
</template>
