<template>
  <div>
    <h2>{{ band.name }}</h2>
    <!-- This will now show the logo -->
    <img v-if="band.logo" :src="band.logo" :alt="band.name + ' logo'" />
  </div>
</template>

<script>
import { bands } from "@benjicwood/artist-assets";

export default {
  data() {
    return {
      band: bands[0], // Alexisonfire
    };
  },
};
</script>
