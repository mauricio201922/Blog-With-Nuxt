<template>
    <div>
        <b-navbar-nav>
            <b-nav-item v-b-modal.modal-prevent-closing>Cadastrar</b-nav-item>
        </b-navbar-nav>

        <!-- Cadastro do Usuário -->
        <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Cadastro"
        @ok="Cadastro">
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required">

                    <b-form-input id="name-input" v-model="nomeLogin" required></b-form-input>
                    
                    
                </b-form-group>

                <b-form-group
                label="Senha"
                label-for="senha-input"
                invalid-feedback="Name is required">

                    <b-form-input type="password" v-model="senhaLogin" id="senha-input" required></b-form-input>
                    
                </b-form-group>

                <b-form-group
                label="Confirme sua Senha"
                label-for="confirme-senha-input"
                invalid-feedback="Name is required">

                    <b-form-input type="password" v-model="senhaConfirme" id="confirme-senha-input" required></b-form-input>
                    
                </b-form-group>
            </form>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nomeLogin: '',
            senhaLogin: '',

            /* variavel para saber se as senhas são iguais */
            senhaConfirme: ''
        }
    },

    methods: {
        Cadastro() {
            if(this.nomeLogin != '' && this.senhaLogin != ''){
                if(this.senhaLogin == this.senhaConfirme){

                    this.users = {nome: this.nomeLogin, senha: this.senhaLogin}

                    this.$store.dispatch('Usuarios/cadastrar/salvarCadastro', this.users)

                    alert("Cadastrado com sucesso!")

                }
                else {
                    alert("Senha invalida!")
                }
            }
            else{
                alert("Cadastro não foi preenchido")
            }
        },
    }
}
</script>