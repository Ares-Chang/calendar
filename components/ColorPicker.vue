<script setup lang="ts">
const { modelValue, disabled } = defineProps<{
  modelValue: string
  disabled?: boolean
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div relative h-4 w-4 rd-full :style="{ backgroundColor: modelValue }">
    <input
      v-if="!disabled"
      value="color" type="color"
      absolute h-full w-full op-0
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>
