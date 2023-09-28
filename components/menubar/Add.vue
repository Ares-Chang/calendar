<script setup lang="ts">
defineEmits<{
  close: []
}>()
</script>

<template>
  <UModal>
    <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div flex items-center justify-between>
          <h3 text-base font-semibold leading-6 text-gray-900 dark:text-white>
            Modal
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" my--1 @click="$emit('close')" />
        </div>
      </template>
      test
      <template #footer>
        <div flex justify-end>
          <UButton label="Submit" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
