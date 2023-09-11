<script setup lang="ts">

</script>

<template>
  <div class="content" flex="~ col" h-full gap-3 overflow-auto p="0.5 r-2">
    <div v-for="item in 10" :key="item">
      <ContentInfoItem />
    </div>
  </div>
</template>

<style scoped>
.content::-webkit-scrollbar {
  display: none;
}
.content:hover::-webkit-scrollbar {
  display: block;
}
</style>
