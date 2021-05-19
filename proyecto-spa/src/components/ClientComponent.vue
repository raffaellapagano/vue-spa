<template>
    <div>
        <div class="card bg-warning">
            <h5 class="mt-3">{{ client.nom }} {{ client.cognom }}</h5>
            <hr>
            <div class="card-body">
                <p>Id: {{ client.id}}</p>
                <p>Prime: {{ client.prime}}</p>
                <button @click="anterior" type="button" class="btn btn-success">Anterior</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cliente',
    props: {
    client: Object
  },
    methods:{
        anterior(){
            this.$router.go(-1);
        }
    }
}
</script>