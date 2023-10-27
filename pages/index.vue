<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <ClientOnly>
    <Todo />
  </ClientOnly>
</template>
