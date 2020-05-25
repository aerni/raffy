<template>
  <div class="h-full flex flex-col justify-between">
    <textarea
      v-model="participantsInput"
      class="w-full h-full block p-6 font-medium text-blue-500 placeholder-blue-500 bg-teal-100 border-3 border-blue-500 shadow-blue rounded-md focus:outline-none focus:shadow-outline-pink transition ease-in-out duration-150"
      placeholder="Add a comma-separated list of participants ..."
    />
    <div>
      <div class="mt-12 flex items-center justify-between">
        <h3 class="text-2xl font-bold text-purple-800">Number of winners</h3>
        <div class="flex items-center">
          <button
            :disabled="!canDecrementNumberOfWinners"
            :class="
              canDecrementNumberOfWinners
                ? 'opacity-100'
                : 'opacity-50 cursor-not-allowed'
            "
            type="button"
            class="h-8 w-8 p-1 border-3 rounded-md bg-pink-500 border-purple-800 shadow-purple text-purple-800 focus:outline-none focus:shadow-outline-pink hover:translate-x-2px hover:translate-y-2px focus:translate-x-2px focus:translate-y-2px hover:shadow-none focus:shadow-none transform transition ease-in-out duration-150"
            @click="decrementNumberOfWinners"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H4C3.73478 9 3.48043 9.10536 3.29289 9.29289C3.10536 9.48043 3 9.73478 3 10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11H16C16.2652 11 16.5196 10.8946 16.7071 10.7071C16.8946 10.5196 17 10.2652 17 10C17 9.73478 16.8946 9.48043 16.7071 9.29289Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <span class="mx-4 text-2xl font-bold text-purple-800">{{
            numberOfWinners
          }}</span>
          <button
            type="button"
            class="h-8 w-8 p-1 border-3 rounded-md bg-pink-500 border-purple-800 shadow-purple text-purple-800 focus:outline-none focus:shadow-outline-pink hover:translate-x-2px hover:translate-y-2px focus:translate-x-2px focus:translate-y-2px hover:shadow-none focus:shadow-none transform transition ease-in-out duration-150"
            @click="incrementNumberOfWinners"
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
      <div class="mt-12">
        <button
          :disabled="!canPickWinners"
          :class="
            canPickWinners ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
          "
          type="button"
          class="w-full inline-flex items-center justify-center px-6 py-6 border-3 border-purple-800 text-2xl leading-5 font-bold rounded-md shadow-purple-lg text-purple-800 bg-pink-500 focus:outline-none focus:shadow-outline-pink hover:translate-x-6px hover:translate-y-6px focus:translate-x-6px focus:translate-y-6px hover:shadow-none focus:shadow-none transform transition ease-in-out duration-150"
          @click="pickWinners"
        >
          Draw the {{ 'winner' | pluralize(numberOfWinners) }}
        </button>
      </div>
      <div v-if="winners.length === 1">
        The winner is:
        <div>{{ winners[0] }}</div>
      </div>
      <div v-else-if="winners.length > 1">
        The winners are:
        <div v-for="(winner, index) in winners" :key="index">
          {{ winner }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const debounce = require('lodash.debounce')

export default {
  data() {
    return {
      numberOfWinners: 1,
      participantsInput: '',
      participants: [],
      winners: []
    }
  },
  computed: {
    canDecrementNumberOfWinners() {
      return this.numberOfWinners > 1
    },
    canPickWinners() {
      return this.participants.length > this.numberOfWinners
    }
  },
  watch: {
    participantsInput() {
      this.debouncedAddParticipant()
    }
  },
  created() {
    this.debouncedAddParticipant = debounce(this.addParticipant, 500)
  },
  methods: {
    incrementNumberOfWinners() {
      this.numberOfWinners += 1
    },
    decrementNumberOfWinners() {
      if (!this.canDecrementNumberOfWinners) return
      this.numberOfWinners -= 1
    },
    addParticipant() {
      const participantsArray = this.participantsInput.split(',')
      this.participants = participantsArray.filter(
        (entry) => entry.trim() !== ''
      )
    },
    pickWinners() {
      if (!this.canPickWinners) return
      const shuffled = this.shuffle([...this.participants])
      this.winners = shuffled.slice(0, this.numberOfWinners)
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
