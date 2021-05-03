<template>
    <div>
        <div class="bg-image o-hidden position-relative config-home" id="blog-profile">
            <section class="min-vh-50 o-hidden d-flex flex-column padd">
                <div class="container">
                    <div class="row justify-content-center text-center align-items-center">
                        <div class="col-xl-5 col-lg-9 col-md-10 layer-3 aos-init aos-animate text-light">
                            <h1 class="display-3">Blog Profile</h1>
                            <div class="mb-4">
                                <h6 class="lead px-xl-5">Meu site pessoal e todos os meus projetos serão postados aqui!</h6>
                            </div>
                            <a href="https://github.com/mauricio201922/" class="btn btn-lg btn-light mx-1">GitHub</a>
                            <a href="https://www.linkedin.com/in/mauriciorubiale/" class="btn btn-lg btn-light mx-1">Linkedin</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="o-hidden position-relative mt-5 altura-max" id="cards">
            <div class="align-items-center padd text-center">
                <section class="d-flex">
                    <div class="container">
                        <h1 class="display-5 mb-4">Cards do Blog</h1>
                        <p class="mb-6">Cards de assuntos voltados ao blog</p>
                        
                        <hr/>

                        <div class="container shadow p-3 mb-5 bg-body rounded">
                            <div class="row row-cols-4 p-3">
                                <div class="col">
                                    <b-card
                                    title="Design Grafico"
                                    img-src="https://www.unicesumar.edu.br/blog/wp-content/uploads/2020/10/post_thumbnail-11ac20212963acf691a3fe31abe4f07f.jpeg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Com um design grafico, pode desenvolver uma tela visual e bonita.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card
                                    title="Computação"
                                    img-src="https://miro.medium.com/max/1000/1*c34daw_rg89UAh4uFCZ96w.jpeg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Um card para programadores profissionais da computação.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card
                                    title="Agricultura"
                                    img-src="https://myfarm.com.br/wp-content/uploads/2020/07/agricultura-no-brasil.jpeg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Para aquele que curte cultivar plantações, aqui é para você agricultor.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card
                                    title="Arquitetura"
                                    img-src="https://inscricaoucb.catolica.edu.br/hubfs/Imported_Blog_Media/arquitetura%20ucb-844163-edited.jpg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Para o pessoal que desenvolve projetos de Arquitetura, podem usar este card.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                            </div>

                            <div class="row row-cols-4 p-3">
                                <div class="col">
                                    <b-card
                                    title="Medicina"
                                    img-src="https://apmtsp.org.br/wp-content/uploads/2017/01/news_secundaria3_jan17.jpg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Projetos voltada para Medicinas, clique no link abaixo para visualizar os prjetos para medicina.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card
                                    title="Nuxt"
                                    img-src="data:image/png;base64,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"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Nuxt é um framework do vue, uma ferramenta super prático e fácil.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card
                                    title="Exercícios de Corrida"
                                    img-src="https://cms.rockymountain.com.br/runners/wp-content/uploads/sites/4/2019/06/dicas-para-voltar-a-correr-1280x720.jpg"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Pessoas que gostam de correr e querem correr, podem entrar na comunidade.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                                <div class="col">
                                    <b-card
                                    title="Meu Blog"
                                    img-src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/09/Como-Criar-um-Blog-%E2%80%93-Guia-Completo-1280x720.png"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;">
                                        <b-card-text>
                                            Quem quiserem ver seus projetos feitos e adicionados aqui, clique no link abaixo.
                                        </b-card-text>

                                        <b-button href="#" variant="primary">Go somewhere</b-button>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="container main-container category-list tag-list is_tag ">
            
            <section class="list">
                <header class="list-header">
                    <h1 class="list-title">Noticias voltada para Tecnologias</h1>
                </header>

                <hr/>

                <div class="row">
                    <div class="col">
                        <a href="https://veja.abril.com.br/economia/verizon-vendera-aol-e-yahoo-por-5-bilhoes-de-dolares/">
                            <figure class="figure">
                                <img class="w-50 p-2" src="https://veja.abril.com.br/wp-content/uploads/2021/05/GettyImages-645846618.jpg?quality=70&strip=info&w=680&h=453&crop=1" alt="verizon">
                            </figure>
                        </a>
                        <span class="position-absolute top-0 start-0 category">
                            <a class="desactive-link" href="https://veja.abril.com.br/economia/">Economia</a>
                        </span>
                        <a style="text-decoration: none; color: black;" class="position-absolute bottom-50 start-75 translate-middle-x" href="https://veja.abril.com.br/economia/verizon-vendera-aol-e-yahoo-por-5-bilhoes-de-dolares/">
                            <h2>Verizon venderá AOL e Yahoo por 5 bilhões de dólares</h2>
                        </a>
                        <span class="author">
                            Por 
                            <strong>
                                <span> Da Redação</span>
                            </strong>
                            <span> Atualizado em 3 Maio 2021, 11h05 - Publicado em 3 Maio 2021, 10h14</span>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>