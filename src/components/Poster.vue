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
    background-color: black;
    background-image: url(../assets/background/trees-blank-2026-feb-17-25.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
    min-height: 1000px;
    display: flex;
    min-width: 709px;
}
</style>
