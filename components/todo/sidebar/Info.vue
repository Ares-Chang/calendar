<script setup lang="ts">
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
    key: 'id',
    label: 'ID',
  },
  {
    key: 'index',
    label: '序号',
  },
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
  <UCard h-50 overflow-auto>
    <div v-for="{ key, label, formatting } in columns" :key="key" flex gap-2>
      <span>{{ label }}:</span>
      <span v-html="formatting ? formatting((info as AnyKey)?.[key]) : (info as AnyKey)?.[key]" />
    </div>
  </UCard>
</template>
