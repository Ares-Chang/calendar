<script setup lang="ts">
const { disabled } = defineProps<{
  disabled?: boolean
}>()

const modelValue = defineModel()
</script>

<template>
  <div
    relative h-4 w-4 rd-full
    :class="{ 'cursor-not-allowed': disabled }"
    :style="{ backgroundColor: modelValue }"
  >
    <input
      v-if="!disabled"
      v-model="modelValue" type="color"
      absolute h-full w-full cursor-pointer op-0
    >
  </div>
</template>
