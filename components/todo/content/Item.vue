<script setup lang="ts">
const props = defineProps<{
  info: TodoItem
}>()

const { update, getDataList } = useTodo()

function changeDone(e: any) {
  update({ ...props.info, done: e.target.checked })
  getDataList()
}
</script>

<template>
  <UCard :ui="{ body: { padding: 'p-4' } }">
    <div flex items-center gap-2>
      {{ props.info.done }}
      <UCheckbox :checked="props.info.done" @change="changeDone" />
      <!-- <UInput v-model="value" variant="none" :ui="{ wrapper: 'w-full' }" /> -->
      <UInput :value="props.info.label" variant="none" :ui="{ wrapper: 'w-full' }" />
    </div>
  </UCard>
</template>
