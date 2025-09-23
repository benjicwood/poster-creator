<template>
  <div
    :class="`${position} ${band} ${band && size ? size : ''}`"
    :style="chosenImage ? { backgroundImage: `url(${chosenImage})` } : {}"
  >
    <!-- fallback text if no image -->
    <span v-if="!chosenImage">{{ band }}</span>
  </div>
</template>

<script>
export default {
  name: "BandSection",
  props: {
    band: String,
    position: String,
    size: String,
    chosenImage: String,
  },
};
</script>

<style scoped lang="scss">
.mainstage-headliner {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 70px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.mainstage-headliner:hover {
    border: solid #C67D0E 1px;
}

.main-sub {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.main-third {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 38px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.second-sub {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.fourth-headliner {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}
</style>
