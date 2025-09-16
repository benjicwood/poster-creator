<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> Select your {{ title }} </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <!-- Search for band... -->
          <SearchDropdown
            :options="bands"
            v-on:selected="onSelectedOption($event)"
            placeholder="Start typing band name"
          >
          </SearchDropdown>
        </slot>

        <!-- 🔥 Preview + selection -->
        <div v-if="selectedBand" class="band-preview">
          <!-- <h4>{{ selectedBand.name }}</h4> -->

          <!-- currently selected image -->
          <div v-if="chosenImage" class="band-logo">
            <img
              :src="chosenImage"
              :alt="`${selectedBand.name} selected logo`"
            />
          </div>

          <!-- thumbnails -->
          <div v-if="allImages.length > 1" class="band-images">
            <div
              v-for="(img, idx) in allImages"
              :key="idx"
              class="band-image"
              :class="{ active: img === chosenImage }"
              @click="selectImage(img)"
            >
              <img :src="img" :alt="`${selectedBand.name} option ${idx + 1}`" />
            </div>
          </div>
        </div>
      </section>

      <template v-if="title && title === 'Thursday Headliner'">
        <div style="margin: auto; padding-bottom: 1rem">
          <label>
            <input
              type="checkbox"
              v-model="thursdayCoHeadlinerModel"
              @change="emitCoHeadliner('Thursday', thursdayCoHeadliner)"
            />
            is Co-Headliner (Thursday)
          </label>
        </div>
      </template>

      <template v-if="title && title === 'Friday Headliner'">
        <div style="margin: auto; padding-bottom: 1rem">
          <label>
            <input
              type="checkbox"
              v-model="fridayCoHeadlinerModel"
              @change="emitCoHeadliner('Friday', fridayCoHeadliner)"
            />
            is Co-Headliner (Friday)
          </label>
        </div>
      </template>

      <template v-if="title && title === 'Saturday Headliner'">
        <div style="margin: auto; padding-bottom: 1rem">
          <label>
            <input
              type="checkbox"
              v-model="saturdayCoHeadlinerModel"
              @change="emitCoHeadliner('Saturday', saturdayCoHeadliner)"
            />
            is Co-Headliner (Saturday)
          </label>
        </div>
      </template>

      <template v-if="bandSelected || hasBand">
        <div class="slider-container">
          <label for="slider">Size: {{ getSize(sliderValue) }}</label>
          <input
            :onChange="onSelectSize(sliderValue)"
            type="range"
            id="slider"
            v-model="sliderValue"
            :min="minValue"
            :max="maxValue"
            :step="stepValue"
          />
        </div>
      </template>

      <!-- <button type="button" class="btn-red" @click="close">Close Modal</button> -->
    </div>
  </div>
</template>

<script>
// import SearchDropdown from 'search-dropdown-vue'
import SearchDropdown from "./SearchDropdown.vue";
import { bands } from "@benjicwood/artist-assets";

console.log(bands);

export default {
  name: "BandSelectModal",
  props: {
    title: String,
    id: String,
    hasBand: Boolean,
    thursdayCoHeadliner: Boolean,
    fridayCoHeadliner: Boolean,
    saturdayCoHeadliner: Boolean,
    currentBand: String, // band id
    currentImage: String, // chosen image URL
  },
  components: {
    SearchDropdown,
  },
  data() {
    return {
      bands,
      bandSelected: false,
      selectedBand: null,
      chosenImage: null,
      sliderValue: 4, // Initial value
      minValue: 1,
      maxValue: 7,
      stepValue: 1, // Step size for each movement
      logoSize: "",
      // thursdayCoHeadliner: this.thursdayCoHeadliner, // 1 or 2 headliner slots
      // fridayCoHeadliner: this.fridayCoHeadliner,
      // saturdayCoHeadliner: this.saturdaCoHeadliner,
      // isCoHeadliner: false,
    };
  },
  computed: {
    thursdayCoHeadlinerModel: {
      get() {
        return this.thursdayCoHeadliner;
      },
      set(value) {
        this.$emit("co-headliner", { day: "Thursday", value });
      },
    },
    fridayCoHeadlinerModel: {
      get() {
        return this.fridayCoHeadliner;
      },
      set(value) {
        this.$emit("co-headliner", { day: "Friday", value });
      },
    },
    saturdayCoHeadlinerModel: {
      get() {
        return this.saturdayCoHeadliner;
      },
      set(value) {
        this.$emit("co-headliner", { day: "Saturday", value });
      },
    },
    allImages() {
      if (!this.selectedBand) return [];
      const images = [];

      // main logo first
      if (this.selectedBand.logo) images.push(this.selectedBand.logo);

      // add alt1, alt2... dynamically
      if (this.selectedBand.images?.length) {
        images.push(...this.selectedBand.images);
      }

      return images;
    },
  },
  mounted() {
    if (this.currentBand) {
      const band = this.bands.find((b) => b.id === this.currentBand);
      if (band) {
        this.selectedBand = band;
        this.chosenImage =
          this.currentImage || band.logo || band.images?.[0] || null;
      }
    }
  },
  methods: {
    onSelectedOption(selected) {
      this.bandSelected = selected.id ? true : false;
      this.selectedBand = selected;
      // default to logo if available
      this.chosenImage = selected.logo || selected.images?.[0] || null;
      this.$emit("selected", { ...selected, chosenImage: this.chosenImage });
      // this.$emit('selected', selected);

      // if (selected?.name) {
      //     window.gtag('event', 'band_selected', {
      //     band_name: selected.name,
      //     value: 1,
      // });
      //     window.gtag('event', 'band_selected', {
      //     event_category: 'interaction',
      //     event_label: selected.name,
      //     value: 1,
      // });
      // }
    },
    selectImage(img) {
      this.chosenImage = img;
      this.$emit("selected", { ...this.selectedBand, chosenImage: img });
    },

    getSize(size) {
      const logoSizes = {
        1: "smallest",
        2: "smaller",
        3: "small",
        4: "normal",
        5: "large",
        6: "larger",
        7: "largest",
      };
      return logoSizes[size] || "normal";
    },
    onSelectSize(size) {
      this.logoSize = this.getSize(size);
      this.$emit("size", this.logoSize);
    },
    emitCoHeadliner(day, value) {
      this.$emit("co-headliner", { day, value });
      // if (this.title === 'Thursday Headliner') {
      //     this.$emit('co-headliner', this.thursdayCoHeadliner);
      // }
      // if (this.title === 'Friday Headliner') {
      //     this.$emit('co-headliner', this.fridayCoHeadliner);
      // }
      // if (this.title === 'Saturday Headliner') {
      //     this.$emit('co-headliner', this.saturdayCoHeadliner);
      // }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* allows scrolling if modal taller than viewport */
  padding: 1rem;    /* space around modal on small screens */
  box-sizing: border-box;
}

.modal {
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  border-radius: 10px;
  font-family: "Soleil", sans-serif;
  position: relative;
  animation: fadeInScale 0.2s ease-out;
  border: 2px solid #711214;
}

@keyframes fadeInScale {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

.modal-header,
.modal-footer {
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}

.modal-header {
  border-bottom: 1px solid #e0e0e0;
  background-color: #711214;
  color: white;
  justify-content: space-between;
  border-top-left-radius:6px;
  border-top-right-radius: 6px;
}

.modal-footer {
  border-top: 1px solid #e0e0e0;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5rem;
}

.modal-body {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 70vh;       /* prevents modal from exceeding viewport */
  position: relative;   /* needed for absolute children */
  overflow: visible;
}

.modal-body .dropdown .dropdown-toggle {
  width: 100%;
}

.modal-body .dropdown .dropdown-toggle input {
  width: 100%;
}


/* Close button */
.btn-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background: transparent;
  transition: color 0.2s;
}
.btn-close:hover {
  color: #ff8c8c;
}

/* Primary button */
.btn-red {
  color: white;
  background: #711214;
  border: 1px solid #711214;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-red:hover {
  background: #a31f2c;
}

/* Slider styling */
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
input[type="range"] {
  width: 100%;
  max-width: 300px;
}

/* Band preview */
.band-preview {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.band-logo img {
  max-width: 200px;
  height: auto;
  /* border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2); */
}

.band-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
.band-images img {
  max-width: 80px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border 0.2s, transform 0.2s;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.band-images img:hover {
  transform: scale(1.05);
}
.band-image.active {
  border-color: #711214; /* highlight selected */
}

</style>
