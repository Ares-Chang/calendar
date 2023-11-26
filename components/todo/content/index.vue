<script setup lang="ts">
const todo = useTodo()
const { list } = storeToRefs(useTodo())
</script>

<template>
  <div flex="~ col" h-full gap-3>
    <div flex justify-end>
      <UButton
        size="xs"
        icon="i-carbon-add"
        color="gray"
        @click="todo.add"
      />
    </div>
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
