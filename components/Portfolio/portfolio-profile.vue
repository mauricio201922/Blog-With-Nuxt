<template>
    <div>
        <div class="bg-image o-hidden position-relative config-home" id="blog-profile">
            <section class="min-vh-50 o-hidden d-flex flex-column padd">
                <div class="container">
                    <div class="row justify-content-center text-center align-items-center">
                        <div class="col-xl-5 col-lg-9 col-md-10 layer-3 aos-init aos-animate text-light">
                            <h1 class="display-3">Portfólio</h1>
                            <div class="mb-4">
                                <h6 class="lead px-xl-5">Nessa seção, o usuário terá seu portfólio pessoal, poderá salvar seus projetos aqui!</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <b-form-file ref="file" v-model="file" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
        <button @click="selectFile">teste</button>
        <img v-bind:src="imagePreview" v-show="showPreview">
    </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null,
        showPreview: false,
        imagePreview: ''
      }
    },

    methods: {
        selectFile() {
            
            this.file2 = this.$refs.file.files[0];

            console.log(this.file)

            /*
            Initialize a File Reader object
            */
            let reader  = new FileReader();

            /*
            Add an event listener to the reader that when the file
            has been loaded, we flag the show preview as true and set the
            image to be what was read from the reader.
            */
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.imagePreview = reader.result;
            }.bind(this), false);

            

            /*
            Check to see if the file is not empty.
            */
            if(this.file){
            /*
                Ensure the file is an image file.
            */
                if ( /\.(jpe?g|png|gif)$/.test( this.file.name ) ) {
                    /*
                    Fire the readAsDataURL method which will read the file in and
                    upon completion fire a 'load' event which we will listen to and
                    display the image in the preview.
                    */
                    reader.readAsDataURL(this.file);
                }
            }
        }
    }
  }
</script>