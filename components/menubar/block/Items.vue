<script setup lang="ts">
import { useLogic } from '~/stores/logic'
import { useMenus } from '~/stores/menus'

const { id } = defineProps<{
  id: string
}>()

const { acMenus } = storeToRefs(useLogic())
const { getMenuInfo } = useMenus()

const info = computed(() => getMenuInfo(id))

const isEdit = ref(false)
const toogleEdit = useToggle(isEdit)
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
    <div flex items-center gap-2>
      <i inline-block :class="info.icon" />
      <span v-if="!info.editable || !isEdit">{{ info.label }}</span>
      <UInput
        v-else
        v-model="info.label"
        autofocus
        variant="none" size="2xs" :ui="{ wrapper: 'w-full' }"
        @blur="toogleEdit()"
      />
    </div>
    <ColorPicker v-if="info.color" v-model="info.color" :disabled="!info.editable" />
  </div>
</template>
