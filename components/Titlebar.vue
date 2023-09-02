<script setup lang="ts">

</script>

<template>
  <div flex items-center justify-between p-4 border="b gray-400/50 dark:gray-700/50">
    <h2 text-xl font-bold>
      Titlebar
    </h2>

    <div>
      <UButton
        icon="i-carbon-logo-github"
        color="gray"
        variant="ghost"
        to="https://github.com/Ares-Chang/calendar"
        target="_blank"
      />
      <DarkToggle />
    </div>
  </div>
</template>
