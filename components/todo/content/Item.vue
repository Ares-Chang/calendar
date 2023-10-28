<script setup lang="ts">
const props = defineProps<{
  info: TodoItem
}>()

const exmit = defineEmits<{
  update: []
}>()

const { update } = useTodo()
const done = ref(props.info.done)

// 同步状态，避免更新失败
watchEffect(() => done.value = props.info.done)

function changeDone() {
  update({ ...props.info, done: done.value })
  exmit('update')
}
</script>

<template>
  <UCard :ui="{ body: { padding: 'p-4' } }">
    <div flex items-center gap-2>
      <UCheckbox v-model="done" @change="changeDone" />
      <UInput :value="props.info.label" variant="none" :ui="{ wrapper: 'w-full' }" />
    </div>
  </UCard>
</template>
