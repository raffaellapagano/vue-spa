<template>
    <div>
        <h1 class="text-success">Lista de clientes</h1>
            <div class="row d-flex flex-row justify-content-center">
                <div class="col-3">
                    <router-link :to="{ name: 'clients', params: {id: client.id} }" 
                    v-for="(client, index) of cleintesArreglo" :key="index">
                    
                        <div class="mb-3">
                            <div class="card m-3 d-flex flex-row justify-content-around bg-light">
                                <h5 class="mt-2">cliente {{client.id}}</h5>
                                <div class="my-1">
                                    <button type="button" class="btn btn-success btn-sm" @click="showClient=true; clienteId= client">
                                        info
                                    </button>
                                </div>
                            </div>       
                        </div> 
                    </router-link>
                </div>

            <div class="col-3 text-center mt-3">
            
            <Cliente v-if="showClient" :client="clienteId"></Cliente>

            </div>

            </div>
        </div>
    </div>
</template>

<script>
import Cliente from '../components/ClientComponent'

export default {
    components: {
        Cliente
    },
    data(){
        return{
            cleintesArreglo: [{
                id: 1,
                nom: "Albert",
                cognom: "Einstein",
                prime: true
                },
                {
                id: 2,
                nom: "Sonia",
                cognom: "Perez",
                prime: false
                },
                {
                id: 3,
                nom: "Mark",
                cognom: "Lin",
                prime: true
                },
                {
                id: 4,
                nom: "Peter",
                cognom: "Pan",
                prime: false
                }
            ],
            showClient: false,
            clienteId: Object
        }
    },
    methods:{
        home(){
            this.$router.push('/');
        },
        anterior(){
            this.$router.go(-1);
        },
        siguiente(){
            this.$router.go(1);
        }
    }
}
</script>