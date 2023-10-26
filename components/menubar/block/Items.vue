<script setup lang="ts">
const props = defineProps<{
  info: MenusItem
}>()

const { updateMenu } = useMenus()
const { acMenus } = storeToRefs(useLogic())

const isEdit = ref(!props.info.label)
const toogleEdit = useToggle(isEdit)

const value = ref(props.info.label)
function handleBlur() {
  if (!value.value.trim())
    return

  if (value.value !== props.info.label) // 修改数据
    updateMenu({ ...props.info, label: value.value })

  toogleEdit()
}

const color = ref(props.info.color || '')
watch(color, () => {
  updateMenu({
    ...props.info,
    color: color.value,
  })
})
</script>

<template>
  <div
    bg="hover:gray-200 dark:hover:gray-800"
    flex cursor-pointer items-center justify-between rd-2 p-3
    :class="{
      'bg-gray-200 dark:bg-gray-800': acMenus === props.info.id,
    }"
    @click="acMenus = props.info.id"
    @dblclick="toogleEdit()"
  >
    <div flex="~ 1" items-center gap-2 overflow-hidden>
      <UIcon :name="props.info.icon" />
      <span v-if="!props.info.editable || !isEdit" flex-1 truncate>{{ props.info.label }}</span>
      <UInput
        v-else
        v-model="value"
        placeholder="添加一个分组"
        autofocus p-0
        variant="none" size="xl" :ui="{ wrapper: 'w-full' }"
        @blur="handleBlur"
      />
    </div>

    <ColorPicker v-if="props.info.color" v-model="color" :disabled="!props.info.editable" />
  </div>
</template>
