<template>
    <div>
        <!-- Desktop -->
        <b-navbar v-if="!isMobile" type="dark" variant="dark" fixed="top" class="shadow mb-5">
            
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
                <b-button v-if="!isLoading" class="mr-3" variant="primary" @click="Logar">Logar</b-button>
                <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>


                <!------------------------------------------------------------------------------>

                

                <cadastro></cadastro>

            </b-form>

            <div class="color mr-3" v-if="isLogin">
                <b-link to="/"><b-avatar class="mr-1 mb-1 mt-1"></b-avatar></b-link>
                <span class="mr-auto">{{ nomeLogin }}</span>
                <b-button 
                class="bg-transparent border-0" 
                @click="logout">
                    <img 
                    src="@/assets/img/logout.png" 
                    width="32" 
                    height="32">
                </b-button>
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
                                <b-button v-if="!isLoading" class="mr-3" variant="primary" @click="Logar">Logar</b-button>
                                <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>

                                <!------------------------------------------------------------------------------>
                                
                                <cadastroMobile></cadastroMobile>

                            </b-form>

                            <div class="color mr-3" v-if="isLogin">
                                <b-link to="/"><b-avatar class="mr-1 mb-1 mt-1"></b-avatar></b-link>
                                <span class="mr-auto">{{ nomeLogin }}</span>
                                <b-button 
                                class="bg-transparent border-0" 
                                @click="logout">
                                    <img 
                                    src="@/assets/img/logout.png" 
                                    width="32" 
                                    height="32">
                                </b-button>
                            </div>

                        </b-nav>
                    </nav>
                </div>
            </b-sidebar>
        </b-navbar>
    </div>
</template>

<script>
import cadastro from './Modals/cadastro'
import cadastroMobile from './Modals/Mobiles/cadastroMobile'
export default {
    components: {
        cadastro,
        cadastroMobile
    },

    data() {
        return {
            users: [],
            nomeLogin: '',
            senhaLogin: '',
            isLogin: false,
            isMobile: false,
            isLoading: false
        }
    },

    created() {
        if(window.localStorage.getItem('id') != null){
            this.$store.dispatch('Usuarios/usuario/getUserLogado', parseInt(window.localStorage.getItem('id'))).then(res => {
                console.log(res)

                this.$store.commit('Usuarios/usuario/setUsuario', res)

                this.nomeLogin = this.$store.getters['Usuarios/usuario/getUser']
                this.isLogin = !this.isLogin
            })
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
        logout() {
            window.localStorage.clear()
            this.isLogin = !this.isLogin
        },

        Logar() {
            this.users = {nome: this.nomeLogin, senha: this.senhaLogin}
            this.$store.dispatch('Usuarios/login/GetUserLogin', this.users).then(res => {
                this.$store.commit('Usuarios/login/setUsers', res)

                let name =  this.$store.getters['Usuarios/login/getUsers']
                
                if(name.usuarioId != null){
                    this.isLoading = true
                    window.localStorage.setItem('id', name.usuarioId)
                    setTimeout(() => {
                        this.isLogin = !this.isLogin
                        this.isLoading = false
                    }, 1000)
                } else{
                    alert("Login inválido!")
                }
                
            })
            

            
        },
        
        onResize() {
            this.isMobile = window.innerWidth < 800
        }
    }
}
</script>