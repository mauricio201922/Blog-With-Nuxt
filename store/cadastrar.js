// actions
export const actions = {
    salvarCadastro({}, todos) {
        this.$axios.$post('https://localhost:5001/Login/Salvar/cadastro?nome=' 
            + todos.nome
            + '&senha='
            + todos.senha
        )
    }
}