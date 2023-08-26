<template>
  <main h-full flex>
    <Navbar h-full w-80 />
    <div w-full p-4>
      <slot />
      <Footer />
    </div>
  </main>
</template>
