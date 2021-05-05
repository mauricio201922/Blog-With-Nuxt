<template>
    <div>
        <!-- Desktop -->
        <b-navbar v-if="!isMobile" type="dark" variant="dark" fixed="top">
            
            <b-navbar-brand to="/">Blog</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="justify-content-center aling-margin-left">

                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav>

                    <b-nav-item-dropdown text="Blog" right>
                        <b-dropdown-item to="/">Blog profile</b-dropdown-item>
                        <b-dropdown-item to="/#cards">Blog cards</b-dropdown-item>
                        <b-dropdown-item to="/#notices">Blog notice</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item to="/portfolio" right>Portfolio</b-nav-item>

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
                    <b-nav-item v-b-modal.modal-prevent-closing>Cadastrar</b-nav-item>
                </b-navbar-nav>

                <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Cadastro">
                    <form ref="form" @submit.stop.prevent="handleSubmit">
                        <b-form-group
                        label="Name"
                        label-for="name-input"
                        invalid-feedback="Name is required">

                            <b-form-input id="name-input" required></b-form-input>
                            
                            
                        </b-form-group>

                        <b-form-group
                        label="Senha"
                        label-for="senha-input"
                        invalid-feedback="Name is required">

                            <b-form-input id="senha-input" required></b-form-input>
                            
                        </b-form-group>

                        <b-form-group
                        label="Confirme sua Senha"
                        label-for="confirme-senha-input"
                        invalid-feedback="Name is required">

                            <b-form-input id="confirme-senha-input" required></b-form-input>
                            
                        </b-form-group>
                    </form>
                </b-modal>

            </b-form>

            <div class="color mr-3" v-if="isLogin">
                <b-link to="/"><b-avatar class="mr-1 mb-1 mt-1"></b-avatar></b-link>
                <span class="mr-auto">{{ usuario }}</span>
            </div>

        </b-navbar>

        <!-- Mobile -->
        <b-navbar v-if="isMobile" type="dark" variant="dark" fixed="top">
            
            <b-navbar-brand to="/">Blog</b-navbar-brand>

            <b-button class="ml-auto bg-transparent border-0" v-b-toggle.sidebar-right><img class="ml-auto" src="..\assets\img\testando.png" style="color: white;"></b-button>
            
            <b-sidebar id="sidebar-right" bg-variant="dark" text-variant="light" title="Blog" right shadow>
                <div class="px-3 py-2">
                    <nav class="mb-3">
                        <b-nav vertical>
                            <b-navbar-nav>
                                <b-nav-item to="/">Home</b-nav-item>
                            </b-navbar-nav>
                            
                            <b-navbar-nav>

                                <b-nav-item-dropdown text="Blog" left>
                                    <b-dropdown-item to="/">Blog profile</b-dropdown-item>
                                    <b-dropdown-item to="/#cards">Blog cards</b-dropdown-item>
                                    <b-dropdown-item to="/#notices">Blog notice</b-dropdown-item>
                                </b-nav-item-dropdown>

                            </b-navbar-nav>

                            <b-navbar-nav>

                                <b-nav-item to="/portfolio" right>Portfolio</b-nav-item>

                            </b-navbar-nav>

                            <hr/>

                            <h2>Login</h2>

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
                                    <b-nav-item v-b-modal.modal-prevent-closing>Cadastrar</b-nav-item>
                                </b-navbar-nav>

                                <b-modal
                                id="modal-prevent-closing"
                                ref="modal"
                                title="Cadastro">
                                    <form ref="form" @submit.stop.prevent="handleSubmit">
                                        <b-form-group
                                        label="Name"
                                        label-for="name-input"
                                        invalid-feedback="Name is required">

                                            <b-form-input id="name-input" required></b-form-input>
                                            
                                            
                                        </b-form-group>

                                        <b-form-group
                                        label="Senha"
                                        label-for="senha-input"
                                        invalid-feedback="Name is required">

                                            <b-form-input id="senha-input" required></b-form-input>
                                            
                                        </b-form-group>

                                        <b-form-group
                                        label="Confirme sua Senha"
                                        label-for="confirme-senha-input"
                                        invalid-feedback="Name is required">

                                            <b-form-input id="confirme-senha-input" required></b-form-input>
                                            
                                        </b-form-group>
                                    </form>
                                </b-modal>

                            </b-form>

                            <div class="color mr-3" v-if="isLogin">
                                <b-link to="/"><b-avatar class="mr-1 mb-1 mt-1"></b-avatar></b-link>
                                <span class="mr-auto">{{ usuario }}</span>
                            </div>

                        </b-nav>
                    </nav>
                </div>
            </b-sidebar>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nomeLogin: '',
            senhaLogin: '',
            isLogin: false,
            isMobile: false
        }
    },

    computed: {
        usuario() {
            return this.nomeLogin
        }
    },

    beforeDestroy () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, { passive: true })
        }
    },

    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
        Login() {
            if(this.nomeLogin == '' || this.senhaLogin == '') { alert("Nome ou senha não inseridos!") }
            else{
                console.log("Nome: " + this.nomeLogin + " Senha: " + this.senhaLogin)
                this.isLogin = !this.isLogin
            }
        },

        

        onResize() {
            this.isMobile = window.innerWidth < 720
        }
    }
}
</script>