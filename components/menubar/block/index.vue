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
      <ClientOnly>
        <MenubarBlockItems
          v-for="item in list.children" :id="item.id"
          :key="item.id" ml-2
        />

        <template #fallback>
          <div v-if="list.id === 'Domain'" ml-2 flex items-center gap-2 p-3>
            <i i-carbon-cloud-auditing />
            <p>
              Sync Loading...
            </p>
          </div>
          <template v-else>
            <MenubarBlockItems
              v-for="item in list.children" :id="item.id"
              :key="item.id" ml-2
            />
          </template>
        </template>
      </ClientOnly>
    </div>

    <div v-if="line" mt-1 border="b gray-400/50 dark:gray-700/50" />
  </div>
</template>
