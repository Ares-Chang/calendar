<script setup lang="ts">
const { acMenus } = storeToRefs(useLogic())
const { list, getDataList, add } = useTodo()

watchEffect(() => {
  acMenus.value && getDataList()
})

watchEffect(() => {
  console.log(list.value, 3)
})
</script>

<template>
  <div class="content" flex="~ col" h-full gap-3 overflow-auto p="0.5 r-2">
    <div flex justify-end>
      <UButton
        size="xs"
        icon="i-carbon-add"
        color="gray"
        @click="add"
      />
    </div>
    <div v-for="item in list" :key="item.id">
      <TodoContentItem :info="item" />
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
