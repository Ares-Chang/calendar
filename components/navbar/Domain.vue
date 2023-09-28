<script setup lang="ts">
import { useLogic } from '~/stores/logic'
import { useMenus } from '~/stores/menus'

const { acMenus } = storeToRefs(useLogic())
const { getMenuInfo } = useMenus()

const info = computed(() => getMenuInfo(acMenus.value))
</script>

<template>
  <div>
    <h2 text-xl font-bold>
      {{ info.label }}
    </h2>
  </div>
</template>
