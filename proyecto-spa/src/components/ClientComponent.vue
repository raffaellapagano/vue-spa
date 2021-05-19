<template>
    <div>
        <div class="card bg-warning">
            <h5 class="mt-3">{{ client.nom }} {{ client.cognom }}</h5>
            <hr>
            <div class="card-body">
                <p>Id: {{ client.id}}</p>
                <p>Prime: {{ client.prime}}</p>
                <button @click="ShowClients(false); Anterior()" type="button" class="btn btn-success">Anterior</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: 'Cliente',
    props: {
    client: Object
  },
    methods:{
        Anterior(){
            this.$router.go(-1);
        },
        ...Vuex.mapMutations(['ShowClients'])
    },
    computed:{
        ...Vuex.mapState(['showClient'])
    }
}
</script>