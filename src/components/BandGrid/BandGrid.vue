<template>
  <div class="band-grid-container">
    <!-- Thursday -->
    <div
      :class="`band-grid-thursday ${
        coHeadliner.thursday ? 'headliners-two' : 'headliners-one'
      }`"
    >
      <BandSection
        position="main-headliner"
        @click="openModal('dayOneHeadliner', 'Thursday Headliner')"
        :band="bandPosition.dayOneHeadliner"
        :size="size.dayOneHeadliner"
        :chosenImage="chosenImages.dayOneHeadliner"
      />
      <BandSection
        v-if="coHeadliner.thursday"
        position="main-headliner"
        @click="openModal('dayOneCoHeadliner', 'Thursday Headliner')"
        :band="bandPosition.dayOneCoHeadliner"
        :size="size.dayOneCoHeadliner"
        :chosenImage="chosenImages.dayOneCoHeadliner"
      />
    </div>

    <div class="sub-grid">
      <BandSection
        position="main-sub"
        @click="openModal('dayOneSecondRowOne', 'Thursday Band')"
        :band="bandPosition.dayOneSecondRowOne"
        :size="size.dayOneSecondRowOne"
        :chosenImage="chosenImages.dayOneSecondRowOne"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayOneSecondRowTwo', 'Thursday Band')"
        :band="bandPosition.dayOneSecondRowTwo"
        :size="size.dayOneSecondRowTwo"
        :chosenImage="chosenImages.dayOneSecondRowTwo"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayOneSecondRowThree', 'Thursday Band')"
        :band="bandPosition.dayOneSecondRowThree"
        :size="size.dayOneSecondRowThree"
        :chosenImage="chosenImages.dayOneSecondRowThree"
      />
      <!-- <BandSection position="main-sub" @click="openModal('dayOneSecondRowFour', 'Thursday Band')" :band="bandPosition.dayOneSecondRowFour" :size="size.dayOneSecondRowFour" /> -->
    </div>
    <div class="sub-grid-four">
      <BandSection
        position="main-sub"
        @click="openModal('dayOneThirdRowOne', 'Thursday Band')"
        :band="bandPosition.dayOneThirdRowOne"
        :size="size.dayOneThirdRowOne"
        :chosenImage="chosenImages.dayOneThirdRowOne"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayOneThirdRowTwo', 'Thursday Band')"
        :band="bandPosition.dayOneThirdRowTwo"
        :size="size.dayOneThirdRowTwo"
        :chosenImage="chosenImages.dayOneThirdRowTwo"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayOneThirdRowThree', 'Thursday Band')"
        :band="bandPosition.dayOneThirdRowThree"
        :size="size.dayOneThirdRowThree"
        :chosenImage="chosenImages.dayOneThirdRowThree"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayOneThirdRowFour', 'Thursday Band')"
        :band="bandPosition.dayOneThirdRowFour"
        :size="size.dayOneThirdRowFour"
        :chosenImage="chosenImages.dayOneThirdRowFour"
      />
    </div>

    <div class="input-grid">
      <BandInput size="medium" />
      <BandInput size="small" />
    </div>

    <!-- Friday -->
    <div
      :class="`band-grid-friday ${
        coHeadliner.friday ? 'headliners-two' : 'headliners-one'
      }`"
    >
      <BandSection
        position="main-headliner"
        @click="openModal('dayTwoHeadliner', 'Friday Headliner')"
        :band="bandPosition.dayTwoHeadliner"
        :size="size.dayTwoHeadliner"
        :chosenImage="chosenImages.dayTwoHeadliner"
      />
      <BandSection
        v-if="coHeadliner.friday"
        position="main-headliner"
        @click="openModal('dayTwoCoHeadliner', 'Friday Headliner')"
        :band="bandPosition.dayTwoCoHeadliner"
        :size="size.dayTwoCoHeadliner"
        :chosenImage="chosenImages.dayTwoCoHeadliner"
      />
    </div>

    <div class="sub-grid">
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoSecondRowOne', 'Friday Band')"
        :band="bandPosition.dayTwoSecondRowOne"
        :size="size.dayTwoSecondRowOne"
        :chosenImage="chosenImages.dayTwoSecondRowOne"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoSecondRowTwo', 'Friday Band')"
        :band="bandPosition.dayTwoSecondRowTwo"
        :size="size.dayTwoSecondRowTwo"
        :chosenImage="chosenImages.dayTwoSecondRowTwo"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoSecondRowThree', 'Friday Band')"
        :band="bandPosition.dayTwoSecondRowThree"
        :size="size.dayTwoSecondRowThree"
        :chosenImage="chosenImages.dayTwoSecondRowThree"
      />
      <!-- <BandSection position="main-sub" @click="openModal('dayTwoSecondRowFour', 'Friday Band')" :band="bandPosition.dayTwoSecondRowFour" :size="size.dayTwoSecondRowFour" /> -->
    </div>
    <div class="sub-grid-four">
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoThirdRowOne', 'Friday Band')"
        :band="bandPosition.dayTwoThirdRowOne"
        :size="size.dayTwoThirdRowOne"
        :chosenImage="chosenImages.dayTwoThirdRowOne"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoThirdRowTwo', 'Friday Band')"
        :band="bandPosition.dayTwoThirdRowTwo"
        :size="size.dayTwoThirdRowTwo"
        :chosenImage="chosenImages.dayTwoThirdRowTwo"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoThirdRowThree', 'Friday Band')"
        :band="bandPosition.dayTwoThirdRowThree"
        :size="size.dayTwoThirdRowThree"
        :chosenImage="chosenImages.dayTwoThirdRowThree"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayTwoThirdRowFour', 'Friday Band')"
        :band="bandPosition.dayTwoThirdRowFour"
        :size="size.dayTwoThirdRowFour"
        :chosenImage="chosenImages.dayTwoThirdRowThree"
      />
    </div>

    <div class="input-grid">
      <BandInput size="medium" />
      <BandInput size="small" />
    </div>

    <!-- Saturday -->
    <div
      :class="`band-grid-saturday ${
        coHeadliner.saturday ? 'headliners-two' : 'headliners-one'
      }`"
    >
      <BandSection
        position="main-headliner"
        @click="openModal('dayThreeHeadliner', 'Saturday Headliner')"
        :band="bandPosition.dayThreeHeadliner"
        :size="size.dayThreeHeadliner"
        :chosenImage="chosenImages.dayThreeHeadliner"
      />
      <BandSection
        v-if="coHeadliner.saturday"
        position="main-headliner"
        @click="openModal('dayThreeCoHeadliner', 'Saturday Headliner')"
        :band="bandPosition.dayThreeCoHeadliner"
        :size="size.dayThreeCoHeadliner"
        :chosenImage="chosenImages.dayThreeCoHeadliner"
      />
    </div>

    <div class="sub-grid">
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeSecondRowOne', 'Saturday Band')"
        :band="bandPosition.dayThreeSecondRowOne"
        :size="size.dayThreeSecondRowOne"
        :chosenImage="chosenImages.dayThreeSecondRowOne"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeSecondRowTwo', 'Saturday Band')"
        :band="bandPosition.dayThreeSecondRowTwo"
        :size="size.dayThreeSecondRowTwo"
        :chosenImage="chosenImages.dayThreeSecondRowTwo"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeSecondRowThree', 'Saturday Band')"
        :band="bandPosition.dayThreeSecondRowThree"
        :size="size.dayThreeSecondRowThree"
        :chosenImage="chosenImages.dayThreeSecondRowThree"
      />
      <!-- <BandSection position="main-sub" @click="openModal('dayThreeSecondRowFour', 'Saturday Band')" :band="bandPosition.dayThreeSecondRowFour" :size="size.dayThreeSecondRowFour" /> -->
    </div>
    <div class="sub-grid-four">
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeThirdRowOne', 'Saturday Band')"
        :band="bandPosition.dayThreeThirdRowOne"
        :size="size.dayThreeThirdRowOne"
        :chosenImage="chosenImages.dayThreeThirdRowOne"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeThirdRowTwo', 'Saturday Band')"
        :band="bandPosition.dayThreeThirdRowTwo"
        :size="size.dayThreeThirdRowTwo"
        :chosenImage="chosenImages.dayThreeThirdRowTwo"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeThirdRowThree', 'Saturday Band')"
        :band="bandPosition.dayThreeThirdRowThree"
        :size="size.dayThreeThirdRowThree"
        :chosenImage="chosenImages.dayThreeThirdRowThree"
      />
      <BandSection
        position="main-sub"
        @click="openModal('dayThreeThirdRowFour', 'Saturday Band')"
        :band="bandPosition.dayThreeThirdRowFour"
        :size="size.dayThreeThirdRowFour"
        :chosenImage="chosenImages.dayThreeThirdRowFour"
      />
    </div>

    <div class="input-grid">
      <BandInput size="medium" />
      <BandInput size="small" />
    </div>

    <!-- Wednesday -->
    <div class="band-grid-wednesday">
      <BandSection
        position="main-third"
        @click="openModal('dayFourHeadliner', 'Wednesday Headliner')"
        :band="bandPosition.dayFourHeadliner"
        :size="size.dayFourHeadliner"
        :chosenImage="chosenImages.dayFourHeadliner"
      />
      <BandSection
        position="alt-third"
        @click="openModal('dayFourSecondRowOne', 'Wednesday Band')"
        :band="bandPosition.dayFourSecondRowOne"
        :size="size.dayFourSecondRowOne"
        :chosenImage="chosenImages.dayFourSecondRowOne"
      />
      <BandSection
        position="alt-third"
        @click="openModal('dayFourSecondRowTwo', 'Wednesday Band')"
        :band="bandPosition.dayFourSecondRowTwo"
        :size="size.dayFourSecondRowTwo"
        :chosenImage="chosenImages.dayFourSecondRowTwo"
      />
      <BandSection
        position="alt-third"
        @click="openModal('dayFourSecondRowThree', 'Wednesday Band')"
        :band="bandPosition.dayFourSecondRowThree"
        :size="size.dayFourSecondRowThree"
        :chosenImage="chosenImages.dayFourSecondRowThree"
      />
    </div>
  </div>
  <BandSelectModal
    v-show="isModalVisible"
    @selected="onSelect"
    @size="onResize"
    @close="closeModal"
    @coHeadliner="handleCoHeadliner"
    :title="modalTitle"
    :key="key ? key.toString() : ''"
    :hasBand="activeBand"
    :thursdayCoHeadliner="coHeadliner.thursday"
    :fridayCoHeadliner="coHeadliner.friday"
    :saturdayCoHeadliner="coHeadliner.saturday"
    :currentBand="bandPosition[modalPosition]"
    :currentImage="chosenImages[modalPosition]"
  />
</template>

<script>
import BandSection from "../BandGrid/BandSection.vue";

import BandSelectModal from "../BandSelectModal/BandSelectModal.vue";
import BandInput from "../BandGrid/BandInput.vue";

export default {
  name: "TreesPoster",
  components: { BandSection, BandSelectModal, BandInput },
  props: {
    msg: String,
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: "",
      bandPosition: {
        dayOneHeadliner: "",
        dayOneCoHeadliner: "",
        dayOneSecondRowOne: "",
        dayOneSecondRowTwo: "",
        dayOneSecondRowThree: "",
        dayOneSecondRowFour: "",
        dayOneThirdRowOne: "",
        dayOneThirdRowTwo: "",
        dayOneThirdRowThree: "",
        dayOneThirdRowFour: "",
        dayTwoHeadliner: "",
        dayTwoCoHeadliner: "",
        dayTwoSecondRowOne: "",
        dayTwoSecondRowTwo: "",
        dayTwoSecondRowThree: "",
        dayTwoSecondRowFour: "",
        dayTwoThirdRowOne: "",
        dayTwoThirdRowTwo: "",
        dayTwoThirdRowThree: "",
        dayTwoThirdRowFour: "",
        dayThreeHeadliner: "",
        dayThreeCoHeadliner: "",
        dayThreeSecondRowOne: "",
        dayThreeSecondRowTwo: "",
        dayThreeSecondRowThree: "",
        dayThreeSecondRowFour: "",
        dayThreeThirdRowOne: "",
        dayThreeThirdRowTwo: "",
        dayThreeThirdRowThree: "",
        dayThreeThirdRowFour: "",
        dayFourHeadliner: "",
        dayFourSecondRowOne: "",
        dayFourSecondRowTwo: "",
        dayFourSecondRowThree: "",
      },
      size: {
        dayOneHeadliner: "",
        dayOneCoHeadliner: "",
        dayOneSecondRowOne: "",
        dayOneSecondRowTwo: "",
        dayOneSecondRowThree: "",
        dayOneSecondRowFour: "",
        dayOneThirdRowOne: "",
        dayOneThirdRowTwo: "",
        dayOneThirdRowThree: "",
        dayOneThirdRowFour: "",
        dayTwoHeadliner: "",
        dayTwoCoHeadliner: "",
        dayTwoSecondRowOne: "",
        dayTwoSecondRowTwo: "",
        dayTwoSecondRowThree: "",
        dayTwoSecondRowFour: "",
        dayTwoThirdRowOne: "",
        dayTwoThirdRowTwo: "",
        dayTwoThirdRowThree: "",
        dayTwoThirdRowFour: "",
        dayThreeHeadliner: "",
        dayThreeCoHeadliner: "",
        dayThreeSecondRowOne: "",
        dayThreeSecondRowTwo: "",
        dayThreeSecondRowThree: "",
        dayThreeSecondRowFour: "",
        dayThreeThirdRowOne: "",
        dayThreeThirdRowTwo: "",
        dayThreeThirdRowThree: "",
        dayThreeThirdRowFour: "",
        dayFourHeadliner: "",
        dayFourSecondRowOne: "",
        dayFourSecondRowTwo: "",
        dayFourSecondRowThree: "",
      },
      coHeadliner: {
        thursday: false,
        friday: false,
        saturday: false,
      },
      chosenImages: {
        dayOneHeadliner: null,
        dayOneCoHeadliner: null,
      },
      key: 0,
      activeBand: null,
    };
  },
  methods: {
    openModal(position, title) {
      this.modalPosition = position;
      this.modalTitle = title;
      this.key = position;
      this.activeBand = !!this.bandPosition[this.modalPosition];
      this.isModalVisible = true;
    },
    onSelect(selected) {
      const selectedBand = selected.id ?? "";
      this.bandPosition[this.modalPosition] = selectedBand;
      this.chosenImages[this.modalPosition] = selected.chosenImage;
    },
    onResize(size) {
      this.size[this.modalPosition] = `${size}-band-logo`;
    },
    handleCoHeadliner({ day, value }) {
      if (day === "Thursday") {
        this.coHeadliner.thursday = value;
      }
      if (day === "Friday") {
        this.coHeadliner.friday = value;
      }
      if (day === "Saturday") {
        this.coHeadliner.saturday = value;
      }
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../assets/scss/styles.scss";

.band-grid-container {
  width: 705px;
}

.input-grid div:hover {
  border: solid #f1b826 1px;
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
</style>
