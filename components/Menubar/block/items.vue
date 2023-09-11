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
    ref="block"
    tabindex="0" hidefocu
    bg="hover:gray-200 dark:hover:gray-800"
    ml-2 flex cursor-pointer items-center gap-2 rd-1 p-2
    focus:outline="1 green solid"
  >
    <i inline-block :class="data.icon" />
    <span>{{ data.label }}</span>
  </div>
</template>
