<script setup lang="ts">
const color = useColorMode()

const isDark = computed({
  get() {
    return color.value === 'dark'
  },
  set() {
    color.preference = color.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <UButton
    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
    color="gray"
    variant="ghost"
    @click="isDark = !isDark"
  />
</template>
