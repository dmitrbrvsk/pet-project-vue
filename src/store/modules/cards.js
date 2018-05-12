import axios from 'axios'

const state = {
  endpoint: '/api/tiles',
  cards: []
}

const getters = {
  cards: state => state.cards
}

const actions = {
  getCards({ commit, state }) {
    commit('getCardsRequest')
    axios.get(state.endpoint)
      .then(response => {
        const cards = response.data.tiles
        commit('getCardsSuccess', cards)
      })
      .catch(error => {
        commit('getCardsFailed')
        console.log('error: ', error);
      })
  }
}

const mutations = {
  getCardsRequest(state) {
    state.cards = []
  },
  getCardsSuccess(state, cards) {
    state.cards = cards
  },
  getCardsFailed(state) {
    state.cards = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}