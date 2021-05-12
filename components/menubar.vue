<template>
    <div>
        <!-- Desktop -->
        <b-navbar v-if="!isMobile" type="dark" variant="dark" fixed="top">
            
            <!-- Menu na parte de start -->
            <b-navbar-brand to="/">Blog</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="justify-content-center aling-margin-left">

                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                </b-navbar-nav>

                <!-- Botões para mudar os posicionamentos da tela -->
                <b-navbar-nav>

                    <b-nav-item-dropdown text="Blog" right>
                        <b-dropdown-item to="/">Blog profile</b-dropdown-item>
                        <b-dropdown-item to="/#cards">Blog cards</b-dropdown-item>
                        <b-dropdown-item to="/#notices">Blog notice</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item to="/portfolio" right>Portfolio</b-nav-item>

                </b-navbar-nav>

            </b-collapse>

            <!------------------------------------------------------------------------------------------>

            <!-- Fomulários para fazer Login ou Cadastro -->
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

                <!-- Botão Logar -->
                <b-button class="mr-3" variant="primary" @click="Logar">Logar</b-button>


                <!------------------------------------------------------------------------------>

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
            </b-form>

            <div class="color mr-3" v-if="isLogin">
                <b-link to="/"><b-avatar class="mr-1 mb-1 mt-1"></b-avatar></b-link>
                <span class="mr-auto">{{ nomeLogin }}</span>
            </div>
        </b-navbar>


        <!--^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!---------------------------------------------------------------------------------------------------------------------->
        <!--vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv-->


        <!-- Mobile -->
        <b-navbar v-if="isMobile" type="dark" variant="dark" fixed="top">
            
            <!-- Menu na parte de start -->
            <b-navbar-brand to="/">Blog</b-navbar-brand>

            <!-- Botão para ativar uma transiction -->
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

                            <!------------------------------------------------------------------------------------------>

                            <!-- Fomulários para fazer Login ou Cadastro -->
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

                                <!-- Botão para Logar no formato mobile -->
                                <b-button class="mr-3" variant="primary" @click="Logar">Logar</b-button>

                                <!------------------------------------------------------------------------------>

                                <b-navbar-nav>
                                    <b-nav-item v-b-modal.modal-prevent-closing>Cadastrar</b-nav-item>
                                </b-navbar-nav>
                                
                                <!-- Cadastro do usuário no formato mobile -->
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
                                <span class="mr-auto">{{ nomeLogin }}</span>
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
            users: [],
            nomeLogin: '',
            senhaLogin: '',
            isLogin: false,
            isMobile: false,

            /* variavel para saber se as senhas são iguais */
            senhaConfirme: ''
        }
    },

    computed: {
        getUsers() {
            return this.$store.getters['login/getUsers']
        }
    },

    /**************************************************************************************/

    /* Config para tamanho de Tela */
    beforeDestroy () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, { passive: true })
        }
    },

    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
    },

    /**************************************************************************************/



    methods: {
        Cadastro() {
            if(this.nomeLogin != '' && this.senhaLogin != ''){
                if(this.senhaLogin == this.senhaConfirme){

                    this.users = {nome: this.nomeLogin, senha: this.senhaLogin}

                    this.$store.dispatch('cadastrar/salvarCadastro', this.users)

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

        Logar() {
            this.users = {nome: this.nomeLogin, senha: this.senhaLogin}
            this.$store.dispatch('login/GetUserLogin', this.users).then(res => {
                this.$store.commit('login/setUsers', res)

                let name =  this.$store.getters['login/getUsers']

                if(this.nomeLogin == name.nome){
                    this.isLogin = !this.isLogin
                }
            })
        },
        
        onResize() {
            this.isMobile = window.innerWidth < 800
        }
    }
}
</script>