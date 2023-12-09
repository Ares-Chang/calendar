<script setup lang="ts">
import { removeTodo } from '~/composables/handle/todo'

const { acTodo } = storeToRefs(useLogic())
const { getInfo } = useTodo()

interface AnyKey { [key: string]: any }
const info = asyncComputed(() => getInfo(acTodo.value))

interface Cols {
  key: string
  label: string
  formatting?: (e: any) => any
}
const columns: Cols[] = [
  {
    key: 'date',
    label: '时间',
    formatting: (e: number) => useDateFormat(e, 'YYYY-MM-DD HH:mm:ss').value,
  },
  {
    key: 'label',
    label: '内容',
  },
  {
    key: 'done',
    label: '完成',
    formatting: (e: boolean) => e ? '✅' : '❌',
  },
]
</script>

<template>
  <UCard
    v-if="info"
    :ui="{
      header: {
        padding: 'py-2',
      },
    }"
    h-50 overflow-auto
  >
    <template #header>
      <div flex justify-between>
        <span>#{{ info.index }}</span>
        <UTooltip text="Delete" :shortcuts="['d', 'd']">
          <UButton
            icon="i-carbon-trash-can"
            size="2xs"
            color="red"
            square
            @click="removeTodo"
          />
        </UTooltip>
      </div>
    </template>

    <div v-for="{ key, label, formatting } in columns" :key="key" flex gap-2>
      <span>{{ label }}:</span>
      <span>{{ formatting ? formatting((info as AnyKey)[key]) : (info as AnyKey)[key] }}</span>
    </div>
  </UCard>
  <div v-else />
</template>
