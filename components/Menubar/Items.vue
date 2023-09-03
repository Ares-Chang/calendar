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

    <div
      v-for="({ icon, label }, index) in list.children" :key="index"
      bg="hover:gray-200 dark:hover:gray-800"
      ml-2 flex cursor-pointer items-center gap-2 rd-1 p-2
    >
      <i inline-block :class="icon" />
      <span>{{ label }}</span>
    </div>

    <div v-if="line" mt-1 border="b gray-400/50 dark:gray-700/50" />
  </div>
</template>
