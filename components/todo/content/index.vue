<script setup lang="ts">
const { acMenus } = storeToRefs(useLogic())
const { getDataList: getData, add } = useTodo()

const list = ref<TodoItem[]>([])

watchEffect(() => {
  acMenus.value && getDataList()
})

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
        @click="add"
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
