<script setup lang="ts">

</script>

<template>
  <div flex="~ col" h-full gap-3 overflow-auto p-0.5>
    <div v-for="item in 10" :key="item">
      <ContentInfoItem />
    </div>
  </div>
</template>
