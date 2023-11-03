<script setup lang="ts">
useShortcutKey() // 注册快捷键
</script>

<template>
  <div h-full flex gap-4>
    <TodoContent flex-1 />

    <TodoSidebar w-80 />
  </div>
</template>
