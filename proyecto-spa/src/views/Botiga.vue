<template>
    <div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Alimentacio from "../components/AlimentacioComponent"
import Congelat from "../components/CongelatComponent"
import Vuex from 'vuex'

export default {
    props: {
   },
    components:{
        Alimentacio,
        Congelat
    },
    computed:{
       ...Vuex.mapState(['current'])
    }
}
</script>