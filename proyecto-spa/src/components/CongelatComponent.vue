<template>
    <div>
        <button @click="anterior" type="button" class="btn btn-success">Congelats</button>
        <h1>Congelats Component</h1>
    </div>
</template>

<script>
export default {
    methods:{
        anterior(){
            this.$router.push('/botiga/alimentacio');
        }
    }
}
</script>