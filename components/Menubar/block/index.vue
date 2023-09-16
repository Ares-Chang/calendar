<script setup lang="ts">
const { list, line } = defineProps<{
  list: MenusList
  line: boolean
}>()
</script>

<template>
  <div flex="~ col" mt-2 gap-2>
    <div flex items-center justify-between>
      <h4 font-bold>
        {{ list.label }}
      </h4>

      <slot name="titleBtn" />
    </div>

    <div flex="~ col" gap-1>
      <MenubarBlockItems
        v-for="item in list.children" :key="item.id"
        v-model="item.label" :data="item"
        ml-2
      />
    </div>

    <div v-if="line" mt-1 border="b gray-400/50 dark:gray-700/50" />
  </div>
</template>
