<template>
  <div class="flex flex-1">
    <textarea
      v-model="participants"
      aria-label="Add a comma-separated list of participants ..."
      class="w-full flex-1 p-4 lg:p-6 font-medium text-blue-500 placeholder-blue-500 bg-teal-100 border-3 border-blue-500 shadow-blue rounded-md focus:outline-none focus:shadow-outline-pink transition ease-in-out duration-150"
      placeholder="Add a list of participants ..."
    />
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  data() {
    return {
      participants: ''
    }
  },
  watch: {
    participants() {
      this.debouncedSetParticipants()
    }
  },
  created() {
    this.participants = this.$store.getters['raffle/getParticipants'].join(',')
    this.debouncedSetParticipants = debounce(this.setParticipants, 300)
  },
  methods: {
    setParticipants() {
      this.$store.dispatch('raffle/setParticipants', this.participants)
    }
  }
}
</script>

<style></style>
