<template>
  <div class="band-grid-container">
      <!-- Thursday -->
      <div :class="`band-grid-thursday ${ coHeadliner.thursday ? 'headliners-two' : 'headliners-one' }`">
        <BandSection position="main-headliner" @click="openModal('thursdayHeadlinerOne', 'Thursday Headliner')" :band="bandPosition.thursdayHeadlinerOne" :size="size.thursdayHeadlinerOne" :chosenImage="chosenImages.thursdayHeadlinerOne" />
        <BandSection v-if="coHeadliner.thursday" position="main-headliner" @click="openModal('thursdayHeadlinerTwo', 'Thursday Headliner')" :band="bandPosition.thursdayHeadlinerTwo" :size="size.thursdayHeadlinerTwo" :chosenImage="chosenImages.thursdayHeadlinerTwo" />
      </div>

      <div class="sub-grid">
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowOne', 'Thursday Band')" :band="bandPosition.thursdaySecondRowOne" :size="size.thursdaySecondRowOne" />
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowTwo', 'Thursday Band')" :band="bandPosition.thursdaySecondRowTwo" :size="size.thursdaySecondRowTwo" />
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowThree', 'Thursday Band')" :band="bandPosition.thursdaySecondRowThree" :size="size.thursdaySecondRowThree" />
        <!-- <BandSection position="main-sub" @click="openModal('thursdaySecondRowFour', 'Thursday Band')" :band="bandPosition.thursdaySecondRowFour" :size="size.thursdaySecondRowFour" /> -->
      </div>
      <div class="sub-grid-four">
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowOne', 'Thursday Band')" :band="bandPosition.thursdayThirdRowOne" :size="size.thursdayThirdRowOne" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowTwo', 'Thursday Band')" :band="bandPosition.thursdayThirdRowTwo" :size="size.thursdayThirdRowTwo" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowThree', 'Thursday Band')" :band="bandPosition.thursdayThirdRowThree" :size="size.thursdayThirdRowThree" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowFour', 'Thursday Band')" :band="bandPosition.thursdayThirdRowFour" :size="size.thursdayThirdRowFour" />
      </div>

      <div class="input-grid">
        <BandInput size="medium" />
        <BandInput size="small" />
      </div>

      <!-- Friday -->
      <div :class="`band-grid-friday ${ coHeadliner.friday ? 'headliners-two' : 'headliners-one' }`">
        <BandSection position="main-headliner" @click="openModal('fridayHeadlinerOne', 'Friday Headliner')" :band="bandPosition.fridayHeadlinerOne" :size="size.fridayHeadlinerOne" />
        <BandSection v-if="coHeadliner.friday" position="main-headliner" @click="openModal('fridayHeadlinerTwo', 'Friday Headliner')" :band="bandPosition.fridayHeadlinerTwo" :size="size.fridayHeadlinerTwo" />
      </div>

      <div class="sub-grid">
        <BandSection position="main-sub" @click="openModal('fridaySecondRowOne', 'Friday Band')" :band="bandPosition.fridaySecondRowOne" :size="size.fridaySecondRowOne" />
        <BandSection position="main-sub" @click="openModal('fridaySecondRowTwo', 'Friday Band')" :band="bandPosition.fridaySecondRowTwo" :size="size.fridaySecondRowTwo" />
        <BandSection position="main-sub" @click="openModal('fridaySecondRowThree', 'Friday Band')" :band="bandPosition.fridaySecondRowThree" :size="size.fridaySecondRowThree" />
        <!-- <BandSection position="main-sub" @click="openModal('fridaySecondRowFour', 'Friday Band')" :band="bandPosition.fridaySecondRowFour" :size="size.fridaySecondRowFour" /> -->
      </div>
      <div class="sub-grid-four">
        <BandSection position="main-sub" @click="openModal('fridayThirdRowOne', 'Friday Band')" :band="bandPosition.fridayThirdRowOne" :size="size.fridayThirdRowOne" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowTwo', 'Friday Band')" :band="bandPosition.fridayThirdRowTwo" :size="size.fridayThirdRowTwo" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowThree', 'Friday Band')" :band="bandPosition.fridayThirdRowThree" :size="size.fridayThirdRowThree" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowFour', 'Friday Band')" :band="bandPosition.fridayThirdRowFour" :size="size.fridayThirdRowFour" />
      </div>

      <div class="input-grid">
          <BandInput size="medium" />
          <BandInput size="small" />
      </div>

      <!-- Saturday -->
      <div :class="`band-grid-saturday ${ coHeadliner.saturday ? 'headliners-two' : 'headliners-one'}`">
        <BandSection position="main-headliner" @click="openModal('saturdayHeadlinerOne', 'Saturday Headliner')" :band="bandPosition.saturdayHeadlinerOne" :size="size.saturdayHeadlinerOne" />
        <BandSection v-if="coHeadliner.saturday" position="main-headliner" @click="openModal('saturdayHeadlinerTwo', 'Saturday Headliner')" :band="bandPosition.saturdayHeadlinerTwo" :size="size.saturdayHeadlinerTwo" />
      </div>

      <div class="sub-grid">
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowOne', 'Saturday Band')" :band="bandPosition.saturdaySecondRowOne" :size="size.saturdaySecondRowOne" />
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowTwo', 'Saturday Band')" :band="bandPosition.saturdaySecondRowTwo" :size="size.saturdaySecondRowTwo" />
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowThree', 'Saturday Band')" :band="bandPosition.saturdaySecondRowThree" :size="size.saturdaySecondRowThree" />
        <!-- <BandSection position="main-sub" @click="openModal('saturdaySecondRowFour', 'Saturday Band')" :band="bandPosition.saturdaySecondRowFour" :size="size.saturdaySecondRowFour" /> -->
      </div>
      <div class="sub-grid-four">
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowOne', 'Saturday Band')" :band="bandPosition.saturdayThirdRowOne" :size="size.saturdayThirdRowOne" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowTwo', 'Saturday Band')" :band="bandPosition.saturdayThirdRowTwo" :size="size.saturdayThirdRowTwo" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowThree', 'Saturday Band')" :band="bandPosition.saturdayThirdRowThree" :size="size.saturdayThirdRowThree" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowFour', 'Saturday Band')" :band="bandPosition.saturdayThirdRowFour" :size="size.saturdayThirdRowFour" />
      </div>

      <div class="input-grid">
          <BandInput size="medium" />
          <BandInput size="small" />
      </div>

      <!-- Wednesday -->
      <div class="band-grid-wednesday">
        <BandSection position="main-third" @click="openModal('wednesdayHeadliner', 'Wednesday Headliner')" :band="bandPosition.wednesdayHeadliner" :size="size.wednesdayHeadliner" />
        <BandSection position="alt-third" @click="openModal('wednesdaySecondBand', 'Wednesday Band')" :band="bandPosition.wednesdaySecondBand" :size="size.wednesdaySecondBand" />
        <BandSection position="alt-third" @click="openModal('wednesdayThirdBand', 'Wednesday Band')" :band="bandPosition.wednesdayThirdBand" :size="size.wednesdayThirdBand" />
        <BandSection position="alt-third" @click="openModal('wednesdayFourthBand', 'Wednesday Band')" :band="bandPosition.wednesdayFourthBand" :size="size.wednesdayFourthBand" />
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
import BandSection from "../BandGrid/BandSection.vue"

import BandSelectModal from "../BandSelectModal/BandSelectModal.vue"
import BandInput from "../BandGrid/BandInput.vue"

export default {
  name: 'TreesPoster',
  components: { BandSection, BandSelectModal, BandInput },
  props: {
    msg: String
  },
    data() {
      return {
          isModalVisible: false,
          modalTitle: '',
          bandPosition: {
            thursdayHeadlinerOne: '',
            thursdayHeadlinerTwo: '',
            thursdaySecondRowOne: '',
            thursdaySecondRowTwo: '',
            thursdaySecondRowThree: '',
            thursdaySecondRowFour: '',
            thursdayThirdRowOne: '',
            thursdayThirdRowTwo: '',
            thursdayThirdRowThree: '',
            thursdayThirdRowFour: '',
            fridayHeadlinerOne: '',
            fridayHeadlinerTwo: '',
            fridaySecondRowOne: '',
            fridaySecondRowTwo: '',
            fridaySecondRowThree: '',
            fridaySecondRowFour: '',
            fridayThirdRowOne: '',
            fridayThirdRowTwo: '',
            fridayThirdRowThree: '',
            fridayThirdRowFour: '',
            saturdayHeadlinerOne: '',
            saturdayHeadlinerTwo: '',
            saturdaySecondRowOne: '',
            saturdaySecondRowTwo: '',
            saturdaySecondRowThree: '',
            saturdaySecondRowFour: '',
            saturdayThirdRowOne: '',
            saturdayThirdRowTwo: '',
            saturdayThirdRowThree: '',
            saturdayThirdRowFour: '',
            wednesdayHeadliner: '',
            wednesdaySecondBand: '',
            wednesdayThirdBand: '',
            wednesdayFourthBand: '',
          },
          size: {
            thursdayHeadlinerOne: '',
            thursdayHeadlinerTwo: '',
            thursdaySecondRowOne: '',
            thursdaySecondRowTwo: '',
            thursdaySecondRowThree: '',
            thursdaySecondRowFour: '',
            thursdayThirdRowOne: '',
            thursdayThirdRowTwo: '',
            thursdayThirdRowThree: '',
            thursdayThirdRowFour: '',
            fridayHeadlinerOne: '',
            fridayHeadlinerTwo: '',
            fridaySecondRowOne: '',
            fridaySecondRowTwo: '',
            fridaySecondRowThree: '',
            fridaySecondRowFour: '',
            fridayThirdRowOne: '',
            fridayThirdRowTwo: '',
            fridayThirdRowThree: '',
            fridayThirdRowFour: '',
            saturdayHeadlinerOne: '',
            saturdayHeadlinerTwo: '',
            saturdaySecondRowOne: '',
            saturdaySecondRowTwo: '',
            saturdaySecondRowThree: '',
            saturdaySecondRowFour: '',
            saturdayThirdRowOne: '',
            saturdayThirdRowTwo: '',
            saturdayThirdRowThree: '',
            saturdayThirdRowFour: '',
            wednesdayHeadliner: '',
            wednesdaySecondBand: '',
            wednesdayThirdBand: '',
            wednesdayFourthBand: '',
          },
          coHeadliner: {
            thursday: false,
            friday: false,
            saturday: false,
          },
              chosenImages: {
      thursdayHeadlinerOne: null,
      thursdayHeadlinerTwo: null,
    },
          key: 0,
          activeBand: null,
        //   activeBandSize: null,
      }
    },
  methods: {
    openModal(position, title) {
        this.modalPosition = position
        this.modalTitle = title
        this.key = position
        this.activeBand = !!this.bandPosition[this.modalPosition]
        // this.activeBandSize = this.getSizeInverse(this.size[this.modalPosition].split('-')[0]);
        this.isModalVisible = true
    },
    // getSizeInverse(size) {
    //     const logoSizes = {
    //         1: 'smallest',
    //         2: 'smaller',
    //         3: 'small',
    //         4: 'normal',
    //         5: 'large',
    //         6: 'larger',
    //         7: 'largest',
    //     };
    //     const entry = Object.entries(logoSizes).find((value) => value === size);
    //     return entry ? parseInt(entry[0]) : 4;
    // },
    onSelect(selected) {
        const selectedBand = selected.id ?? ''
        this.bandPosition[this.modalPosition] = selectedBand;
        this.chosenImages[this.modalPosition] = selected.chosenImage;
    },
    onResize(size) {
        this.size[this.modalPosition] = `${size}-band-logo`
    },
    handleCoHeadliner({ day, value }) {
        // console.log(`${day} Co-Headliner: ${value}`);
        if (day === 'Thursday') {
            this.coHeadliner.thursday = value;
        }
        if (day === 'Friday') {
            this.coHeadliner.friday = value;
        }
        if (day === 'Saturday') {
            this.coHeadliner.saturday = value;
        }
    },
    closeModal() {
        this.isModalVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
@use '../../assets/scss/bands.scss';
@use '../../assets/scss/styles.scss';

.band-grid-container {
  width: 705px;
}

.input-grid div:hover {
  border: solid #F1B826 1px;
}

.smallest-band-logo {
    transform:scale(0.7);
}
.smaller-band-logo {
    transform:scale(0.8);

}
.small-band-logo {
    transform:scale(0.9);
}

.normal-band-logo {
    transform:scale(1);
}

.large-band-logo {
    transform:scale(1.1);
}

.larger-band-logo {
    transform:scale(1.2);
}

.largest-band-logo {
    transform:scale(1.3);
}
</style>