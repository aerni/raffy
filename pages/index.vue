<template>
  <div class="flex min-h-screen p-24">
    <div class="w-3/12 max-w-xs">
      <Logo />
    </div>
    <div class="flex-1 pl-24 pr-40 pt-9">
      <div class="max-w-3xl h-full mx-auto">
        <Drawing />
      </div>
    </div>
  </div>
</template>

<script>
import Drawing from '~/components/Drawing.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Drawing,
    Logo
  }
}
</script>

<style>
body {
  background-image: url('~assets/img/zigs-top-right.svg'),
    url('~assets/img/zigs-bottom-left.svg');
  background-repeat: no-repeat;
  background-position: calc(100% + 20px) 20%, 80px calc(100% - 100px);
}
</style>
