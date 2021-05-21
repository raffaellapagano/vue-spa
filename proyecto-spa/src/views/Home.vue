<template>
  <div>
    <HomeComponent class="mb-5"></HomeComponent>
    <hr>
    <Product v-for="item in items"
    :item="item"
    :key="item.id"></Product>
  </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent'
import Product from '../components/Product'

export default {
  name: 'Home',
  data(){
    return{
      items:[
        {id: 'alimentacio', name: "Alimentacio Component"},
        {id: 'congelats', name: "Congelats Component"}
      ]
    }
  },
  components: {
    HomeComponent,
    Product
  }
}
</script>
