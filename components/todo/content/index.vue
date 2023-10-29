<script setup lang="ts">
const { acMenus, acTodo } = storeToRefs(useLogic())
const { getDataList: getData, add } = useTodo()

const list = ref<TodoInfo[]>([])

watch(acMenus, async () => {
  await getDataList()
  acTodo.value = list.value[0].id // 默认选中第一个
}, { immediate: true })

async function getDataList() {
  list.value = await getData()
}
</script>

<template>
  <div class="content" flex="~ col" h-full gap-3 overflow-auto p="0.5 r-2">
    <div flex justify-end>
      <UButton
        size="xs"
        icon="i-carbon-add"
        color="gray"
        @click="async () => {
          await add()
          getDataList()
        }"
      />
    </div>
    <div v-for="item in list" :key="item.id">
      <TodoContentItem :info="item" @update="getDataList" />
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
