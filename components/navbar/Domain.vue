<script setup lang="ts">
const { acMenus } = storeToRefs(useLogic())
const { menus } = storeToRefs(useMenus())

const info = computed(() => {
  const info = menus.value.map(item =>
    item.children.find(item => item.id === acMenus.value),
  ).filter(Boolean)[0] as MenusInfo

  return info || {}
})
</script>

<template>
  <div>
    <h2 text-xl font-bold>
      {{ info.label }}
    </h2>
  </div>
</template>
