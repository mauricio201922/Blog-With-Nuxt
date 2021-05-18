<template>
    <div class="container">
        <b-form-file ref="file" v-model="file" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <button @click="selectFile">Enviar</button>
        <br><br>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Download</th>
                </tr>
            </thead>
            <thead v-for="i in this.$store.getters['Upload/Arquivos/uploadArquivos/getArquivo']" :key="i">
                <tr>
                    <td>{{ i.id }}</td>
                    <td>{{ i.nome }}</td>
                    <td>{{ i.type }}</td>
                    <td><button @click="download(i)">Download</button></td>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
  export default {
    
    data() {
      return {
        file: null,
        uploads: []
      }
    },

    created() {
        this.$store.dispatch("Upload/Arquivos/uploadArquivos/getFilesUpload").then(res => {

            this.$store.commit('Upload/Arquivos/uploadArquivos/setUpload', res)

            
        })
    },

    methods: {
        selectFile() {
            
            this.file = this.$refs.file.files[0];

            console.log(this.file)

            /*
            Check to see if the file is not empty.
            */
            if(this.file){
            /*
                Ensure the file is an image file.
            */
                if ( /\.(jpe?g|png|gif|pdf)$/i.test( this.file.name ) ) {
                    /*
                    Fire the readAsDataURL method which will read the file in and
                    upon completion fire a 'load' event which we will listen to and
                    display the image in the preview.
                    
                    reader.readAsDataURL(this.file);
                    */

                    
                    this.$store.dispatch("Upload/Arquivos/salvandoArquivo/enviandoArquivos", this.file)
                    
                }
            }
            
        },

        download(down) {
            window.location.href = "https://localhost:5001/Upload/downloadFile/" + down.nome
        }
    }
  }
</script>