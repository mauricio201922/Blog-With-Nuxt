<template>
    <div class="container">
        <b-form-file ref="file" v-model="file" class="mt-3" plain></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <button @click="selectFile">Enviar</button>
        <img v-bind:src="imagePreview" v-show="showPreview">
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
            <thead v-for="i in dados" :key="i">
                <tr>
                    <td>{{ i.id }}</td>
                    <td>{{ i.name }}</td>
                    <td>{{ i.type }}</td>
                    <td>{{ i.dow }}</td>
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
        showPreview: false,
        imagePreview: '',
        dados: [{id: 1, name: 'teste', type: '.img', dow: 'faz'},
                {id: 2, name: 'teste', type: '.img', dow: 'faz'},
                {id: 3, name: 'teste', type: '.img', dow: 'faz'},
                {id: 4, name: 'teste', type: '.img', dow: 'faz'},
                {id: 5, name: 'teste', type: '.img', dow: 'faz'}]
      }
    },

    methods: {
        selectFile() {
            
            this.file = this.$refs.file.files[0];

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
                if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
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