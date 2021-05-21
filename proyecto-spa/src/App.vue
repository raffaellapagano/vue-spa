<template>
  <div id="app">
    <div id="nav">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">SPA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/clients/general">Clients</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/proveidors">Proveïdors</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/magatzem">Magatzem</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Botiga
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="Show('botiga/alimentacio')">Alimentació</a>
                <a class="dropdown-item" @click="Show('botiga/congelats')">Congelats</a>
                <!-- <a class="dropdown-item" href="/botiga/alimentacio">Alimentació</a>
                <a class="dropdown-item" href="/botiga/congelats">Congelats</a> -->
              </div>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:
  {
    Show(item){
      item = '/' + item;
      this.$router.push(item);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
