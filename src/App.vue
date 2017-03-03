<template>
  <div id="app">
    <h4>{{ msg }}</h4>
    {{ msg }}
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <div class="row">
        teste
    </div>

    <div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>

    <a class="waves-effect waves-light btn">button</a>

    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vueify" target="_blank">vueify</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Metrics'
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: "Roboto", sans-serif;
    text-align: center;
    width: 400px; 
    height: auto;
  }

  img {
    width: 200px;
    height: 200px;
  }
/*
  h1, h2 {
    font-weight: normal;
  }*/

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
