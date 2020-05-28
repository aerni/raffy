<template>
  <div
    class="w-full flex flex-col flex-1 items-center justify-between space-y-24 pt-2"
  >
    <p class="font-medium text-purple-800 text-xl">
      {{ winnersSentence }}
    </p>
    <div>
      <div v-for="(winner, index) in winners" :key="index">
        <div class="text-center relative">
          <span
            class="font-bold leading-none text-teal-400"
            style="font-size:10rem"
          >
            {{ index + 1 }}
          </span>
          <span
            class="absolute inset-0 flex items-center justify-center text-4xl font-bold leading-none text-pink-500"
          >
            {{ winner }}
          </span>
        </div>
      </div>
    </div>
    <v-button class="w-full lg:w-auto" @click.native="resetWinners">
      New raffle
    </v-button>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'
import Button from '~/components/Button.vue'

export default {
  components: {
    'v-button': Button
  },
  computed: {
    hasWinners() {
      return this.$store.getters['raffle/hasWinners']
    },
    winners() {
      return this.$store.getters['raffle/getWinners']
    },
    winnersCount() {
      return this.$store.getters['raffle/getWinnersCount']
    },
    winnersSentence() {
      if (this.winnersCount === 1) return 'And the winner is'
      return 'And the winners are'
    }
  },
  mounted() {
    this.confetti()
  },
  methods: {
    resetWinners() {
      this.resetConfetti()
      this.$store.commit('raffle/SET_WINNERS', [])
    },
    resetConfetti() {
      confetti.reset()
    },
    confetti() {
      const count = 400
      const defaults = {
        colors: ['#5AFADF', '#FF98FB', '#7A35D2'],
        origin: { y: 0.7 }
      }

      function fire(particleRatio, opts) {
        confetti(
          Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
          })
        )
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55
      })
      fire(0.2, {
        spread: 60
      })
      fire(0.35, {
        spread: 100,
        decay: 0.91
      })
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92
      })
      fire(0.1, {
        spread: 120,
        startVelocity: 45
      })
    }
  }
}
</script>

<style></style>
