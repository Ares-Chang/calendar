<script setup lang="ts">
const { info } = defineProps<{
  info: MenusItem
}>()

const { updateMenu } = useMenus()
const { acMenus } = storeToRefs(useLogic())

const isEdit = ref(!info.label)
const toogleEdit = useToggle(isEdit)

const value = ref(info.label)
function handleBlur() {
  if (!value.value.trim())
    return

  if (value.value !== info.label) // 修改数据
    updateMenu({ ...info, label: value.value })

  toogleEdit()
}

const color = ref(info.color || '')
watchEffect(() => {
  updateMenu({
    ...info,
    color: color.value,
  })
})
</script>

<template>
  <div
    bg="hover:gray-200 dark:hover:gray-800"
    flex cursor-pointer items-center justify-between rd-2 p-3
    :class="{
      'bg-gray-200 dark:bg-gray-800': acMenus === info.id,
    }"
    @click="acMenus = info.id"
    @dblclick="toogleEdit()"
  >
    <div flex="~ 1" items-center gap-2 overflow-hidden>
      <UIcon :name="info.icon" />
      <span v-if="!info.editable || !isEdit" flex-1 truncate>{{ info.label }}</span>
      <UInput
        v-else
        v-model="value"
        placeholder="添加一个分组"
        autofocus p-0
        variant="none" size="xl" :ui="{ wrapper: 'w-full' }"
        @blur="handleBlur"
      />
    </div>
    <ColorPicker v-if="info.color" v-model="color" :disabled="!info.editable" />
  </div>
</template>
