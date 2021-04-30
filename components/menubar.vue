<template>
    <div>
        <b-navbar type="dark" variant="dark" fixed="top">
            
            <b-navbar-brand to="/">Blog</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="justify-content-center aling-margin-left">

                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav>

                    <b-nav-item-dropdown text="Blog" right>
                        <b-dropdown-item to="/">Blog profile</b-dropdown-item>
                        <b-dropdown-item to="/">Blog cards</b-dropdown-item>
                        <b-dropdown-item to="/">Blog notice</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Portfolio" right>

                        <b-dropdown-item to="/">Projects</b-dropdown-item>

                    </b-nav-item-dropdown>

                </b-navbar-nav>

            </b-collapse>

            <b-form inline class="justify-content-right pad" v-if="!isLogin">
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <b-form-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-3 mb-sm-0"
                    placeholder="Nome"
                    type="text" 
                    v-model="nomeLogin">
                </b-form-input>
                
                <label class="sr-only" for="inline-form-input-name">Password</label>
                <b-form-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-3 mb-sm-0"
                    placeholder="Senha"
                    type="password" 
                    v-model="senhaLogin">
                </b-form-input>

                <b-button class="mr-3" variant="primary" @click="Login">Logar</b-button>

                <b-navbar-nav>
                    <b-nav-item to="/">Cadastrar</b-nav-item>
                </b-navbar-nav>

            </b-form>

            <div class="color mr-3" v-if="isLogin">
                <b-link to="/"><b-avatar class="mr-1 mb-1 mt-1"></b-avatar></b-link>
                <span class="mr-auto">{{ usuario }}</span>
            </div>

        </b-navbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nomeLogin: '',
            senhaLogin: '',
            isLogin: false
        }
    },

    computed: {
        usuario() {
            return this.nomeLogin
        }
    },

    methods: {
        Login() {
            if(this.nomeLogin == '' || this.senhaLogin == '') { alert("Nome ou senha não inseridos!") }
            else{
                console.log("Nome: " + this.nomeLogin + " Senha: " + this.senhaLogin)
                this.isLogin = !this.isLogin
            }
        }
    }
}
</script>