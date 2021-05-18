export const actions = {
    enviandoArquivos({}, upload) {
        let file = new FormData()
        file.append('file', upload)

        this.$axios.$post('https://localhost:5001/Upload/uploadFile', file)

    },
}