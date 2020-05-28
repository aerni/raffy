<template>
  <button
    type="button"
    class="text-xl lg:text-2xl font-bold leading-tight px-8 py-4 lg:px-12 lg:py-6 rounded-md border-3 border-purple-800 shadow-purple-lg text-purple-800 bg-pink-500 focus:outline-none focus:shadow-outline-pink hover:translate-x-6px hover:translate-y-6px focus:translate-x-6px focus:translate-y-6px hover:shadow-none focus:shadow-none transform transition ease-in-out duration-150"
  >
    <slot>Button</slot>
  </button>
</template>

<style scoped>
button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
