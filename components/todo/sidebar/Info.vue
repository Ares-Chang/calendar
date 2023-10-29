<script setup lang="ts">
const { acTodo } = storeToRefs(useLogic())
const { getInfo } = useTodo()

const info = asyncComputed(() => getInfo(acTodo.value))
</script>

<template>
  <UCard h-50>
    {{ info }}
  </UCard>
</template>
