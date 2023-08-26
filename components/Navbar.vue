<script setup lang="ts">
const list = ref([
  {
    label: '区域',
    children: [
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
    ],
  },
  {
    label: 'Setting',
    children: [
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
      {
        icon: 'i-carbon-folder',
        label: '网站',
      },
    ],
  },
])
</script>

<template>
  <div
    bg="gray-100/80 dark:truegray-600/40"
    color="gray-800 dark:gray-300"
    select-none
    p-3 text-left
  >
    <h2 bg="slate-400/50 dark:gray-600/60" rd-1 p-2 text="center xl" font-bold>
      Todo
    </h2>
    <div
      v-for="({ label: name, children }, index) in list" :key="index"
      flex="~ col" mt-2 gap-2
    >
      <h4 font-bold>
        {{ name }}
      </h4>
      <div
        v-for="({ icon, label }, _index) in children" :key="_index"
        bg="hover:gray-200 dark:hover:truegray-700"
        ml-2 flex cursor-pointer items-center gap-2 rd-1 p-2
      >
        <i inline-block :class="icon" />
        <span>{{ label }}</span>
      </div>
    </div>
  </div>
</template>
