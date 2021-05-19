<template>
    <div>
        <h1 class="text-success">Lista de clientes</h1>
            <div class="row d-flex flex-row justify-content-center">
                <div class="col-3">
                    <router-link :to="{ name: 'clients', params: {id: client.id} }" 
                    v-for="(client, index) of clientesArreglo" :key="index">
                    
                        <div class="mb-3">
                            <div class="card m-3 d-flex flex-row justify-content-around bg-light">
                                <h5 class="mt-2">cliente {{client.id}}</h5>
                                <div class="my-1">
                                    <button type="button" class="btn btn-success btn-sm" @click="ShowClients(true); clienteId= client">
                                        info
                                    </button>
                                </div>
                            </div>       
                        </div> 
                    </router-link>
                </div>

            <div class="col-3 text-center mt-3">
            
            <Cliente v-show="showClient" :client="clienteId"></Cliente>

            </div>

            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import Cliente from '../components/ClientComponent'

export default {
    components: {
        Cliente
    },
    computed:{
        ...Vuex.mapState(['clientesArreglo', 'showClient'])
    },
    data(){
        return{
            clienteId: {
                type: Object,
                required: true
            }
        }
    },
    methods:{
        ...Vuex.mapMutations(['ShowClients'])
    }
}
</script>