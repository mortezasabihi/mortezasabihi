export const state = () => ({
  github: null,
})

export const mutations = {
  SET_GITHUB(state, payload) {
    state.github = payload
  },
}

export const getters = {
  getGithub: (state) => state.github,
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let response = await fetch('https://api.github.com/users/mortezasabihi')
    response = await response.json()

    commit('SET_GITHUB', response)
  },
}
