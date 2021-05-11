<template>
    <div>
        <div class="bg-image o-hidden position-relative config-home" id="blog-profile">
            <section class="min-vh-50 o-hidden d-flex flex-column padd">
                <div class="container">
                    <div class="row justify-content-center text-center align-items-center">
                        <div class="col-xl-5 col-lg-9 col-md-10 layer-3 aos-init aos-animate text-light">
                            <h1 class="display-3">{{titulo}}</h1>
                            <div class="mb-4">
                                <h6 class="lead px-xl-5">{{subtitulo}}</h6>
                            </div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        titulo:{
            default:"titulo de foto"
        },
        subtitulo:{
            default:"subtitulo"
        }
    },
}
</script>