<template>
  <div class="poster-container">
    <!-- Background selector buttons -->
    <div class="background-selector">
      <button
        :class="{ active: selectedYear === '2025' }"
        @click="selectedYear = '2025'"
      >
        2025
      </button>
      <button
        :class="{ active: selectedYear === '2026' }"
        @click="selectedYear = '2026'"
      >
        2026
      </button>
    </div>
    <div class="poster-wrapper">
      <img
        class="poster-background"
        :src="backgroundSrc"
        alt="Festival Poster"
      />
      <BandGrid />
    </div>
  </div>
</template>

<script>
import BandGrid from "./BandGrid/BandGrid.vue";

import bg2025 from "../../assets/background/trees-blank-2025.png";
import bg2026 from "../../assets/background/trees-blank-2026.png";

export default {
  name: "TreesPoster",
  components: { BandGrid },
  data() {
    return {
      selectedYear: "2026", // default
    };
  },
  computed: {
    backgroundSrc() {
      return this.selectedYear === "2025" ? bg2025 : bg2026;
    },
  },
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
  margin: auto; /* centers on mobile */
}

.poster-background {
  display: block;
  max-width: 98vw;
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
    height: auto; /* match image height */
    top: 0;
    transform: translateX(-50%);
  }
}

.background-selector {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  display: flex;
  gap: 0.5rem;              // space between buttons
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 6px;

  button {
    background: #333;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-family: sans-serif;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8); // darken on hover
    }

    &.active {
      background: #c67d0e;    // highlight active year
      color: white;
      filter: none;
    }
  }

  // MOBILE: move to top-right
  @media (max-width: 768px) {
    left: auto;
    right: 10px;
  }
}

</style>
