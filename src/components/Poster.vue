<template>
  <div class="poster-style">
    <BandGrid />
    <!-- <SidePanel /> -->
  </div>
</template>

<script>
import BandGrid from "./BandGrid/BandGrid.vue";
// import SidePanel from "./SidePanel.vue";

export default {
  name: "Poster",
  components: {
    BandGrid,
    // SidePanel
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.poster-style {
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
  padding: 2rem;
  box-sizing: border-box;
}

/* Inner wrapper for BandGrid or other content */
.poster-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Adjust vertical alignment on smaller screens */
@media (max-height: 800px) {
  .poster-style {
    align-items: flex-start;  /* push content to top if viewport is short */
  }
}

/* Smaller screens tweaks */
@media (max-width: 768px) {
  .poster-style {
    background-size: cover; /* fill smaller screens */
    padding: 1rem;
  }
  .poster-content {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .poster-style {
    padding: 0.5rem;
  }
  .poster-content {
    max-width: 100%;
  }
}

</style>
