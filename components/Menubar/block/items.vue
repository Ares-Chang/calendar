<script setup lang="ts">
import { useLogic } from '~/stores/logic'

const { data } = defineProps<{
  data: MenusItem
}>()

const { acMenus } = storeToRefs(useLogic())
</script>

<template>
  <div
    bg="hover:gray-200 dark:hover:gray-800"
    flex cursor-pointer items-center gap-2 rd-2 p-3
    :class="{
      'bg-gray-200 dark:bg-gray-800': acMenus === data.id,
    }"
    @click="acMenus = data.id"
  >
    <i inline-block :class="data.icon" />
    <span v-if="data.label">{{ data.label }}</span>
    <UInput v-else variant="none" size="2xs" :ui="{ wrapper: 'w-full' }" />
  </div>
</template>
