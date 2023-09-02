<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div h-full flex gap-4>
    <div flex-1>
      content
      <UBadge color="white" variant="solid">
        Badge
      </UBadge>
    </div>
    <div w-80 flex="~ col gap-2" justify-between>
      <UCard h-50>
        Body
      </UCard>

      <Calendar />
    </div>
  </div>
</template>
