<template>
  <div :class="{ zigs: !hasWinners }">
    <div
      v-if="!hasWinners"
      class="min-h-screen p-8 pt-5 sm:p-24 sm:pt-20 flex flex-col lg:flex-row"
    >
      <Logo />
      <Raffle />
    </div>
    <div
      v-if="hasWinners"
      class="min-h-screen p-8 pt-5 sm:p-24 sm:pt-20 flex flex-col lg:flex-row"
    >
      <Winners />
    </div>
  </div>
</template>

<script>
import Raffle from '~/components/Raffle.vue'
import Logo from '~/components/Logo.vue'
import Winners from '~/components/Winners.vue'

export default {
  components: {
    Raffle,
    Logo,
    Winners
  },
  computed: {
    hasWinners() {
      return this.$store.getters['raffle/hasWinners']
    }
  }
}
</script>

<style>
@screen lg {
  .zigs {
    background-image: url('~assets/img/zigs-top-right.svg'),
      url('~assets/img/zigs-bottom-left.svg');
    background-repeat: no-repeat;
    background-position: calc(100% + 20px) 20%, 80px calc(100% - 100px);
  }
}
</style>
