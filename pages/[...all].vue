<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center gray-500 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <UButton
        color="gray"
        text-sm p="2 x-4" m="3 t8"
        @click="router.back()"
      >
        Back
      </UButton>
    </div>
  </main>
</template>
