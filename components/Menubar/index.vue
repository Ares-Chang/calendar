<script setup lang="ts">
import { nanoid } from 'nanoid'
import { useMenus } from '~/stores/menus'

const { list } = useMenus()

const menus = ref<MenusList[]>([
  {
    id: nanoid(),
    label: '区域',
    children: list,
  },
  {
    id: nanoid(),
    label: 'Setting',
    children: [
      {
        id: nanoid(),
        icon: 'i-carbon-folder',
        label: '网站',
        focus: false,
        editable: false,
      },
    ],
  },
])

function addMenuItem() {
  list.push({
    id: nanoid(),
    icon: 'i-carbon-folder',
    label: '',
    focus: true,
    editable: true,
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
                @click="addMenuItem"
              />
            </div>
          </template>
        </MenubarBlock>
      </div>
    </div>
  </div>
</template>
