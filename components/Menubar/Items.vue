<script setup lang="ts">
const { list, line } = defineProps<{
  list: MenusList
  line: boolean
}>()

type Items = Element | ComponentPublicInstance | null

const items = ref<Record<string, Items>>({})

watch(items, () => {
  list.children.forEach((item, index) => {
    if (item.focus)
      (items.value[index] as HTMLElement).focus()
  })
}, {
  deep: true,
})
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
      :ref="(el: Items) => items[index] = el"
      tabindex="0" hidefocu
      bg="hover:gray-200 dark:hover:gray-800"
      ml-2 flex cursor-pointer items-center gap-2 rd-1 p-2
      focus:outline="1 green solid"
    >
      <i inline-block :class="icon" />
      <span>{{ label }}</span>
    </div>

    <div v-if="line" mt-1 border="b gray-400/50 dark:gray-700/50" />
  </div>
</template>
