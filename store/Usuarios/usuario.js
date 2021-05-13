export const state = () => {
    usuario: ''
}

export const mutations = {
    setUsuario(state, payload) {
        state.usuario = payload
    }
}

export const actions = {
    getUserLogado({}, id){
        return this.$axios.$get('https://localhost:5001/Login/Usuario/' + id)
    }
}

export const getters = {
    getUser: (state) => {
        return state.usuario
    }
}