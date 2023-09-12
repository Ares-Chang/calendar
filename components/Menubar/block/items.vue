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
  <UInput
    ref="block"
    :value="data.label"
    :disabled="!data.editable"
    :icon="data.icon" variant="none" size="xl"
    bg="hover:gray-200 dark:hover:gray-800"
    focus:outline="1 green solid" cursor-pointer="!"
  />
</template>
