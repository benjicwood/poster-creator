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
  height: 25%;
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
  // height: 50px;
  height: 15%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.main-sub:hover {
    border: solid #C67D0E 1px;
}

.second-stage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // height: 50px;
  height: 30%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.second-stage.smaller {
  height: 15%;
}

.second-stage:hover {
    border: solid #C67D0E 1px;
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

.third-stage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.third-stage:hover {
    border: solid #C67D0E 1px;
}

.fourth-stage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.fourth-stage:hover {
    border: solid #C67D0E 1px;
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
