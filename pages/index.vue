<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div h-full flex>
    <div flex-1>
      content
      <UBadge color="white" variant="solid">
        Badge
      </UBadge>
    </div>
    <div w-80 flex="~ col gap-2" justify-between>
      <div h-50 border="~ gray-4 rd-2" />
      <Calendar />
    </div>
  </div>
</template>
