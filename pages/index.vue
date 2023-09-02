<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div h-full flex gap-4>
    <Content flex-1 />

    <Sidebar w-80 />
  </div>
</template>
