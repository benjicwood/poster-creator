<template>
  <div
    :class="[
      'download-band-grid',
      `download-band-grid-${slug}`,
      coHeadliner ? 'headliners-two' : 'headliners-one',
    ]"
  >
    <!-- Headliner(s) -->
    <div
      class="headliners-row"
      :class="coHeadliner ? 'headliners-two' : 'headliners-one'"
    >
      <BandSection
        position="mainstage-headliner"
        @click="emitOpen('headliner', `${day} Headliner`)"
        :band="bands.headliner.band"
        :size="bands.headliner.size"
        :chosenImage="bands.headliner.chosenImage"
      />
    </div>

    <!-- Main stage undercard -->
    <div class="sub-grid">
      <BandSection
        v-for="(slot, i) in bands.secondRow"
        :key="`second-${i}`"
        position="main-sub"
        @click="emitOpen(`secondRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
      />
    </div>

    <div class="input-grid">
      <BandInput size="medium" />
      <BandInput size="small" />
      <BandInput size="small" />
      <BandInput size="small" />
    </div>

    <!-- Second stage -->
    <div class="sub-grid-four">
      <BandSection
        v-for="(slot, i) in bands.thirdRow"
        :key="`third-${i}`"
        position="main-sub"
        @click="emitOpen(`thirdRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
      />
    </div>

    <div class="input-grid">
      <BandInput size="medium" />
      <BandInput size="small" />
      <BandInput size="small" />
      <BandInput size="small" />
    </div>

    <!-- third stage -->
    <div class="sub-grid-four">
      <BandSection
        v-for="(slot, i) in bands.fourthRow"
        :key="`fourth-${i}`"
        position="main-sub"
        @click="emitOpen(`fourthRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
      />
    </div>

      <!-- fourth stage -->
    <div class="sub-grid-four">
      <BandSection
        v-for="(slot, i) in bands.fifthRow"
        :key="`fourth-${i}`"
        position="main-sub"
        @click="emitOpen(`fourthRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
      />
    </div>

    <!-- Inputs (optional, could also be slotted in) -->
    <div class="input-grid">
      <BandInput size="medium" />
      <BandInput size="small" />
    </div>
  </div>
</template>

<script>
import BandSection from "../BandGrid/BandSection.vue";
import BandInput from "../BandGrid/BandInput.vue";

export default {
  name: "DayGrid",
  components: { BandSection, BandInput },
  props: {
    day: { type: String, required: true }, // e.g. "Thursday"
    slug: { type: String, required: true }, // e.g. "dayOne"
    bands: { type: Object, required: true }, // includes headliner, coHeadliner, secondRow, thirdRow, fourthRow
    coHeadliner: { type: Boolean, default: false },
  },
  emits: ["open"],
  methods: {
    emitOpen(position, title) {
      this.$emit("open", { slug: this.slug, position, title });
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../../assets/scss/styles.scss";

.download-band-grid {
  height: 100%;
  box-sizing: border-box;
  border: 2px solid pink;
}

.smallest-band-logo {
  transform: scale(0.7);
}
.smaller-band-logo {
  transform: scale(0.8);
}
.small-band-logo {
  transform: scale(0.9);
}
.normal-band-logo {
  transform: scale(1);
}
.large-band-logo {
  transform: scale(1.1);
}
.larger-band-logo {
  transform: scale(1.2);
}
.largest-band-logo {
  transform: scale(1.3);
}

.headliners-row.headliners-one {
  display: grid;
  grid-template-columns: 1fr; /* single column */
}

.sub-grid,
.sub-grid-four {
  display: flex;
  flex-direction: column;
}
</style>
