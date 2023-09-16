<script setup lang="ts">
const { data } = defineProps<{
  data: MenusItem
}>()

const block = ref(null)
const { focused } = useFocus(block)

onMounted(() => {
  focused.value = data.focus
})
</script>

<template>
  <div
    bg="hover:gray-200 dark:hover:gray-800"
    flex cursor-pointer items-center gap-2 rd-2 p-3
    border="~ green solid"
  >
    <i inline-block :class="data.icon" />
    <span v-if="data.label">{{ data.label }}</span>
    <UInput v-else variant="none" size="2xs" :ui="{ wrapper: 'w-full' }" />
  </div>
</template>
