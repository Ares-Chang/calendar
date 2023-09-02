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
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="h-8 w-8" />
    </template>
  </ClientOnly>
</template>
