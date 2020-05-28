<template>
  <div class="mt-8 lg:mt-12">
    <v-button
      aria-label="Draw the winners"
      class="w-full"
      :disabled="!canPickWinners"
      @click.native="pickWinners"
    >
      Draw the {{ 'winner' | pluralize(winnersCount) }}
    </v-button>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: {
    'v-button': Button
  },
  computed: {
    canPickWinners() {
      return this.$store.getters['raffle/canPickWinners']
    },
    participants() {
      return this.$store.getters['raffle/getParticipants']
    },
    winnersCount() {
      return this.$store.getters['raffle/getWinnersCount']
    }
  },
  methods: {
    pickWinners() {
      if (!this.canPickWinners) return
      const shuffled = this.shuffle([...this.participants])
      const winners = shuffled.slice(0, this.winnersCount)
      this.$store.commit('raffle/SET_WINNERS', winners)
    },
    shuffle(array) {
      // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?page=2&tab=votes#tab-top

      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
  }
}
</script>

<style></style>
