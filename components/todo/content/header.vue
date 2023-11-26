<script setup lang="ts">
const todo = useTodo()
const value = ref('')

function addTodo() {
  todo.add(value.value)
  value.value = ''
}
</script>

<template>
  <div flex gap-2>
    <UInput
      v-model="value"
      placeholder="添加一个任务"
      color="gray"
      size="md"
      :ui="{ wrapper: 'w-full' }"
    />

    <UButton
      icon="i-carbon-add"
      label="Add"
      @click="addTodo"
    />
  </div>
</template>
