<template>
    <div>
        <h3>{{ item.name }} dinamico</h3>
        <button@click="Show(item.id)">Ver</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props:{
        item: Object
    },
    methods:{
        Show(proId)
        {
            this.$router.push(
                {
                    name: 'details',
                    params:{
                        Pid: proId
                    }
                }
            );
        }
    }
}
</script>