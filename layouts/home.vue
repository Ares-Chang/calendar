<template>
  <main h-full flex>
    <Navbar h-full w-80 />
    <div w-full flex="~ col">
      <Titlebar />
      <div flex-1 overflow-auto p-4>
        <slot />
      </div>
    </div>
  </main>
</template>
