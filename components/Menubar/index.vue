<script setup lang="ts">
import { useMenus } from '~/stores/menus'

const Menus = useMenus()
const { menus } = storeToRefs(Menus)
</script>

<template>
  <div
    bg="gray-100/80 dark:gray-800/40"
    color="gray-800 dark:gray-300"
    select-none p-3
    flex="~ col gap-2"
  >
    <h2 bg="slate-400/50 dark:gray-600/60" rd-1 p-2 text="center xl" font-bold>
      Todo
    </h2>
    <div overflow-auto pr-2>
      <div
        v-for="(item, index) in menus" :key="item.id"
      >
        <MenubarBlock :list="item" :index="index" :line="index !== menus.length - 1">
          <template v-if="item.label === '区域'" #titleBtn>
            <div flex gap-2>
              <UButton
                size="xs"
                icon="i-carbon-add"
                color="gray"
                @click="Menus.addMenu(index)"
              />
            </div>
          </template>
        </MenubarBlock>
      </div>
    </div>
  </div>
</template>
