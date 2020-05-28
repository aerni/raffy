<template>
  <div class="mt-8 lg:mt-12 flex flex-row items-center justify-between">
    <p class="text-xl lg:text-2xl leading-tight font-bold text-purple-800">
      Number of winners
    </p>
    <div class="flex items-center justify-between">
      <button
        aria-label="Decrement number of winners"
        :disabled="!canDecrementWinnersCount"
        :class="
          canDecrementWinnersCount
            ? 'opacity-100'
            : 'opacity-50 cursor-not-allowed'
        "
        type="button"
        class="h-8 w-8 p-1 border-3 rounded-md bg-pink-500 border-purple-800 shadow-purple text-purple-800 focus:outline-none focus:shadow-outline-pink hover:translate-x-2px hover:translate-y-2px focus:translate-x-2px focus:translate-y-2px hover:shadow-none focus:shadow-none transform transition ease-in-out duration-150"
        @click="decrementWinnersCount"
      >
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H4C3.73478 9 3.48043 9.10536 3.29289 9.29289C3.10536 9.48043 3 9.73478 3 10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11H16C16.2652 11 16.5196 10.8946 16.7071 10.7071C16.8946 10.5196 17 10.2652 17 10C17 9.73478 16.8946 9.48043 16.7071 9.29289Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <span
        class="mx-4 w-6 inline-flex justify-center text-xl lg:text-2xl font-bold text-purple-800"
        >{{ winnersCount }}</span
      >
      <button
        aria-label="Increment number of winners"
        type="button"
        class="h-8 w-8 p-1 border-3 rounded-md bg-pink-500 border-purple-800 shadow-purple text-purple-800 focus:outline-none focus:shadow-outline-pink hover:translate-x-2px hover:translate-y-2px focus:translate-x-2px focus:translate-y-2px hover:shadow-none focus:shadow-none transform transition ease-in-out duration-150"
        @click="incrementWinnersCount"
      >
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 3C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4V9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8946 16.2652 11 16 11H11V16C11 16.2652 10.8946 16.5196 10.7071 16.7071C10.5196 16.8946 10.2652 17 10 17C9.73478 17 9.48043 16.8946 9.29289 16.7071C9.10536 16.5196 9 16.2652 9 16V11H4C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H9V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3V3Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    winnersCount() {
      return this.$store.getters['raffle/getWinnersCount']
    },
    canDecrementWinnersCount() {
      return this.$store.getters['raffle/canDecrementWinnersCount']
    }
  },
  methods: {
    incrementWinnersCount() {
      this.$store.commit('raffle/INCREMENT_WINNERS_COUNT')
    },
    decrementWinnersCount() {
      this.$store.dispatch('raffle/decrementWinnersCount')
    }
  }
}
</script>

<style></style>
