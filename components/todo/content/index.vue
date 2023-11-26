<script setup lang="ts">
const { list } = storeToRefs(useTodo())
</script>

<template>
  <div flex="~ col" h-full gap-3>
    <TodoContentHeader />

    <div class="content" flex="~ col" gap-3 overflow-auto p="0.5 r-2">
      <div v-for="item in list" :key="item.id">
        <TodoContentItem :info="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content::-webkit-scrollbar {
  display: none;
}
.content:hover::-webkit-scrollbar {
  display: block;
}
</style>
