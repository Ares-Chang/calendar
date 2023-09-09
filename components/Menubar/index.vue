<script setup lang="ts">
import { useMenus } from '~/stores/menus'

const { list } = useMenus()

const menus = ref<MenusList[]>([
  {
    label: '区域',
    children: list,
  },
  {
    label: 'Setting',
    children: [
      {
        icon: 'i-carbon-folder',
        label: '网站',
        focus: false,
      },
    ],
  },
])

function addMenuItem() {
  list.push({
    icon: 'i-carbon-folder',
    label: '',
    focus: true,
  })
}
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
    <div
      v-for="(item, index) in menus" :key="index"
    >
      <MenubarItems :list="item" :line="index !== menus.length - 1">
        <template v-if="item.label === '区域'" #titleBtn>
          <div flex gap-2>
            <UButton
              size="xs"
              icon="i-carbon-add"
              color="gray"
              @click="addMenuItem"
            />
          </div>
        </template>
      </MenubarItems>
    </div>
  </div>
</template>
