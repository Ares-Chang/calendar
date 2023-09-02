<script setup lang="ts">

</script>

<template>
  <div flex items-center justify-between p-4 border="b gray-400/50 dark:gray-700/50">
    <h2 text-xl font-bold>
      Titlebar
    </h2>

    <div flex>
      <DarkToggle />

      <UButton
        icon="i-carbon-logo-github"
        color="gray"
        variant="ghost"
        to="https://github.com/Ares-Chang/calendar"
        target="_blank"
        :ui="{ icon: { size: { sm: 'h-5 w-5' } } }"
      />
    </div>
  </div>
</template>
