<template>
  <div id="app">
    <Poster />
  </div>
</template>

<script>
import Poster from "./components/Poster.vue";
import BandGrid from "./components/BandGrid/BandGrid.vue";

export default {
  name: "App",
  components: { Poster }
};
</script>

<style>

.app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* background-image: url(../assets/background/trees-blank-2026-feb-17-25.png); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 0.5rem;
  box-sizing: border-box;
}
/* Make the app fill the viewport */
</style>
