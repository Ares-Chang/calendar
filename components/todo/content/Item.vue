<script setup lang="ts">
const props = defineProps<{
  info: TodoInfo
}>()

const { acTodo } = storeToRefs(useLogic())

const { update } = useTodo()
const done = ref(props.info.done)

function updateInfo(e: Partial<TodoInfo>) {
  update({ ...props.info, ...e })
}

function changeDone() {
  updateInfo({ done: done.value })
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
watchEffect(() => {
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
      <UCheckbox v-model="done" @change="changeDone" />
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
