export const state = () =>  ({
    upl: []
})

export const mutations = {
    setUpload(state, payload) {
        state.upl = payload
    }
}

export const actions = {
    enviandoArquivos({}, upload) {

        this.$axios.$post('https://localhost:5001/Upload/uploadFile', upload, {'Content-Type': 'application/x-www-form-urlencoded'})

    },

    getFilesUpload({ commit }){
        return this.$axios.$get("https://localhost:5001/Upload/GetFiles")
    }
}

export const getters = {
    getArquivo(state) {
        return state.upl
    }
}