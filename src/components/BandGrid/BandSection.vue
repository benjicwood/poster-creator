<template>
  <div
    :class="[position, size]"
    :style="bandStyle"
    @click="$emit('click')"
  ></div>
</template>

<script>
import { bands } from "@benjicwood/artist-assets";

export default {
  name: "BandSection",
  props: {
    band: String,        // band id
    position: String,
    size: String,
    chosenImage: String, // NEW: direct image URL
  },
  computed: {
    bandData() {
      return bands.find((b) => b.id === this.band) || null;
    },
    bandStyle() {
      // priority: chosenImage → logo → nothing
      const img = this.chosenImage || this.bandData?.logo;
      if (img) {
        return {
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        };
      }
      return {};
    },
  },
};
</script>
