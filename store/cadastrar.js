// state
export const state = () => ({
    count: 0
})

// mutations
export const mutations = {
    Update(state) {
        
        state.count++
    }
}

// actions
export const actions = {
    testando({commit}) {
        commit('Update')
    }
}

// getters
export const getters = {
    get(state) {
        return state.count
    }
}