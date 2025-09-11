<template>
    <Poster msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Poster from './components/Poster.vue'

export default {
    name: 'App',
    components: {
        Poster,
    }
}
</script>

<style>
body {
    margin: 0;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
    background-color: black;
}
</style>
