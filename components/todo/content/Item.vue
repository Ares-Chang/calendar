<script setup lang="ts">
const props = defineProps<{
  info: TodoInfo
}>()

const { acTodo } = storeToRefs(useLogic())
const { update } = useTodo()

function updateInfo(e: Partial<TodoInfo>) {
  update({ ...props.info, ...e })
}

function changeDone() {
  updateInfo({ done: !props.info.done })
}

const isEdit = ref(false)
const toogleEdit = useToggle(isEdit)

const value = ref(props.info.label)
function handleBlur() {
  if (!value.value.trim())
    return

  if (value.value !== props.info.label)
    updateInfo({ label: value.value })

  toogleEdit()
}

const isCheck = computed(() => acTodo.value === props.info.id)
const el = ref()
watch(isCheck, () => {
  if (!isCheck.value)
    return
  el.value.$el.scrollIntoView({
    behavior: 'auto',
    block: 'nearest',
  })
})
</script>

<template>
  <UCard
    ref="el"
    :class="{
      'border-2 border-green': isCheck,
    }"
    :ui="{ body: { padding: 'p-4' } }"
    @click="acTodo = props.info.id"
    @dblclick="toogleEdit()"
  >
    <div flex items-center gap-2>
      <UCheckbox :model-value="props.info.done" @change="changeDone" />
      <span v-if="!isEdit">{{ props.info.label }}</span>
      <UInput
        v-else
        v-model="value"
        placeholder="添加一个任务"
        autofocus p-0
        variant="none" size="xl" :ui="{ wrapper: 'w-full' }"
        @blur="handleBlur"
      />
    </div>
  </UCard>
</template>
