<script setup lang="ts">
import { useLogic } from '~/stores/logic'

const { acMenuInfo: info } = storeToRefs(useLogic())
</script>

<template>
  <div>
    <h2 text-xl font-bold>
      {{ info.label }}
    </h2>
  </div>
</template>
