<script setup lang="ts">
const { menus, addMenus } = useMenus()
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
