<script setup lang="ts">
import { useLogic } from '~/stores/logic'
import { useMenus } from '~/stores/menus'

const { id } = defineProps<{
  id: string
}>()

const { acMenus } = storeToRefs(useLogic())
const { getMenuInfo, deleteMenu } = useMenus()

const info = computed(() => getMenuInfo(id))

const isEdit = ref(!info.value.label)
const toogleEdit = useToggle(isEdit)

function handleBlur() {
  if (!info.value.label.trim())
    deleteMenu(id)

  toogleEdit()
}
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
      <i inline-block :class="info.icon" />
      <span v-if="!info.editable || !isEdit" flex-1 truncate>{{ info.label }}</span>
      <UInput
        v-else
        v-model="info.label"
        placeholder="添加一个分组"
        autofocus p-0
        variant="none" size="xl" :ui="{ wrapper: 'w-full' }"
        @blur="handleBlur"
      />
    </div>
    <ColorPicker v-if="info.color" v-model="info.color" :disabled="!info.editable" />
  </div>
</template>
