<template>
    <div>
        <div id="footer">
            <div class="container">
                <nav class="row">

                    <!-- Navbar Final - links 1 -->
                    <div class="col-md-4 text-light">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <dt>Blog Inicial</dt>
                            </div>
                            <dl class="col-sm-6">
                                <a href="#" class="desactive-link-light"><dd>Home</dd></a>
                                <a href="#" class="desactive-link-light"><dd>Sobre nós</dd></a>
                                <b-navbar-nav v-b-modal.fale-conosco>
                                    <span class="desactive-link-light">Fale Conosco</span>
                                </b-navbar-nav>
                            </dl>
                            <dl class="col-sm-6"></dl>
                        </div>
                    </div>

                    <!-- Navbar Final - links 2 -->
                    <div class="col-md-4 text-light">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <dt>Serviços</dt>
                            </div>
                            <dl class="col-sm-6">
                                <a href="#" class="desactive-link-light"><dd>teste</dd></a>
                                <a href="#" class="desactive-link-light"><dd>teste</dd></a>
                            </dl>
                            <dl class="col-sm-6"></dl>
                        </div>
                    </div>

                    <!-- Navbar Final - links 3 -->
                    <div class="col-md-4 text-light">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <dt>teste</dt>
                            </div>
                            <dl class="col-sm-6">
                                <a href="#" class="desactive-link-light"><dd>teste</dd></a>
                                <a href="#" class="desactive-link-light"><dd>teste</dd></a>
                            </dl>
                            <dl class="col-sm-6"></dl>
                        </div>
                    </div>
                    
                </nav>
                <div class="border-top border-light w-100 mt-3">
                    <span class="text-light">© 2021 - 2021 | Blog - Todos os direitos seguindo.</span>
                </div>
            </div>
        </div>

        <!-------------------------------------------------------------------------------------------------->

        <!-- Modals -->
        <!-- Modal para Fale Conosco -->
        <b-modal id="fale-conosco" ref="modal" title="Fale Conosco">
            <form ref="form" @submit.stop.prevent="faleConoscoSubmitado">
                <b-form-group 
                label="Nome"
                label-for="nome-user"
                invalid-feedback="Name is required">
                    <b-input id="nome-user"></b-input>
                </b-form-group>

                <b-form-group 
                label="Comentario"
                label-for="comentario-user">
                    <b-textarea id="comentario-user"></b-textarea>
                </b-form-group>
            </form>
        </b-modal>

        <!----------------------------------------------------------------->

        
    </div>
</template>

<script>
export default {
    
}
</script>