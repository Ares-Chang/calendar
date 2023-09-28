<template>
  <main h-full flex>
    <Menubar h-full w-80 />
    <div flex="~ 1 col" overflow-hidden>
      <Navbar />
      <div flex-1 overflow-auto p-4>
        <slot />
      </div>
    </div>
  </main>
</template>
