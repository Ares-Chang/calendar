<script setup lang="ts">
const { acMenusInfo: info } = storeToRefs(useLogic())
</script>

<template>
  <div>
    <h2 text-xl font-bold>
      {{ info.label }}
    </h2>
  </div>
</template>
