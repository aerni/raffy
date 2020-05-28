<template>
  <div
    class="w-full lg:max-w-5xl mx-auto flex flex-col flex-1 mt-8 lg:pl-24 lg:pr-40 lg:mt-9"
  >
    <Participants />
    <WinnersCount />
    <DrawWinners />
  </div>
</template>

<script>
import DrawWinners from '~/components/DrawWinners.vue'
import Participants from '~/components/Participants.vue'
import WinnersCount from '~/components/WinnersCount.vue'

export default {
  components: {
    DrawWinners,
    Participants,
    WinnersCount
  }
}
</script>
