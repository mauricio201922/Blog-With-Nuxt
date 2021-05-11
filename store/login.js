import { BIconLayoutTextSidebarReverse } from "bootstrap-vue"

// state
export const state = () => ({
    users: []
})

// mutations
export const mutations = {
    setUsers(state, payload) {
        state.users = payload
    }
}

// actions
export const actions = {
    GetUserLogin({ commit }, todos) {
        const api = this.$axios.$get('https://localhost:5001/Login/Get?nome=' + todos.nome + '&senha=' + todos.senha)

        commit('setUsers', api)
        
    }
}

// getters
export const getters = {
    getUsers(state) {
        return state.users
    }
}