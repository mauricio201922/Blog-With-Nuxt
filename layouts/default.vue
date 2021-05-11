<template>
<div>
    <menubar></menubar>
    <Nuxt />
    <footerLay></footerLay>
    
</div>
</template>

<script>
import menubar from '~/components/menubar.vue'
import footerLay from '~/components/footer.vue'

export default {
    components: {
        menubar,
        footerLay
    }
}
</script>
