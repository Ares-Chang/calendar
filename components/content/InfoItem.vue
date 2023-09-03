<script setup lang="ts">
const selected = ref(true)
const value = ref('')
</script>

<template>
  <UCard :ui="{ body: { padding: 'p-4' } }">
    <div flex items-center gap-2>
      <UCheckbox v-model="selected" name="notifications" />
      <UInput v-model="value" variant="none" :ui="{ wrapper: 'w-full' }" />
    </div>
  </UCard>
</template>
