<template>
  <div class="flex flex-col lg:flex-row min-h-screen p-8 pt-5 sm:p-24 sm:pt-20">
    <Logo />
    <Drawing />
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
@screen lg {
  body {
    background-image: url('~assets/img/zigs-top-right.svg'),
      url('~assets/img/zigs-bottom-left.svg');
    background-repeat: no-repeat;
    background-position: calc(100% + 20px) 20%, 80px calc(100% - 100px);
  }
}
</style>
