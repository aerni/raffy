export const state = () => ({
  participants: [],
  winners: [],
  winnersCount: 1
})

export const mutations = {
  INCREMENT_WINNERS_COUNT(state) {
    state.winnersCount++
  },
  DECREMENT_WINNERS_COUNT(state) {
    state.winnersCount--
  },
  SET_PARTICIPANTS(state, participants) {
    state.participants = participants
  },
  SET_WINNERS(state, winners) {
    state.winners = winners
  }
}

export const getters = {
  getParticipants(state) {
    return state.participants
  },
  getWinners(state) {
    return state.winners
  },
  getWinnersCount(state) {
    return state.winnersCount
  },
  hasWinners(state) {
    return state.winners.length >= 1
  },
  canDecrementWinnersCount(state) {
    return state.winnersCount > 1
  },
  canPickWinners(state) {
    return state.participants.length > state.winnersCount
  }
}

export const actions = {
  decrementWinnersCount({ commit, getters }) {
    if (!getters.canDecrementWinnersCount) return
    commit('DECREMENT_WINNERS_COUNT')
  },
  setParticipants({ commit }, payload) {
    const participantsArray = payload.split(/[\n,;.:]+/)
    const filtered = participantsArray
      .map((entry) => entry.trim())
      .filter((entry) => entry.trim() !== '')

    commit('SET_PARTICIPANTS', filtered)
  }
}
