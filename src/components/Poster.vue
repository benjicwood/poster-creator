<template>
  <div class="poster-container">
    <div class="poster-wrapper">
      <img
        class="poster-background"
        src="../assets/background/trees-blank-2026.png"
        alt="Festival Poster"
      />
      <BandGrid />
    </div>
  </div>
</template>

<script>
import BandGrid from "./BandGrid/BandGrid.vue";

export default {
  name: "Poster",
  components: { BandGrid },
};
</script>

<style scoped lang="scss">
.poster-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // background: #000;
}

.poster-wrapper {
  position: relative;
  display: inline-block; /* shrink-wraps image */
  margin: auto;          /* centers on mobile */
}

.poster-background {
  display: block;
  max-width: 90vw;
  max-height: 100vh;
  width: auto;
  height: auto;
}

/* MOBILE ONLY: fix grid overflowing */
@media (max-width: 768px) {
  .poster-wrapper {
    display: flex;
    justify-content: center; /* centers poster */
  }

  .poster-content {
    height: auto;           /* match image height */
    top: 0;
    transform: translateX(-50%);
  }
}
</style>
