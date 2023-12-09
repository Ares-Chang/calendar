<script setup lang="ts">
import { addTodo } from '~/composables/handle/todo'

const value = ref('')

function handleAdd() {
  addTodo(value.value)
  value.value = ''
}
</script>

<template>
  <div flex gap-3>
    <UInput
      v-model="value"
      placeholder="添加一个任务"
      color="gray"
      size="md"
      :ui="{ wrapper: 'w-full' }"
    />

    <UTooltip text="Add" :shortcuts="['Tab']">
      <UButton
        icon="i-carbon-add"
        label="Add"
        @click="handleAdd"
      />
    </UTooltip>
  </div>
</template>
