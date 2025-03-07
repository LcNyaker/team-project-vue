<script setup lang="ts">
import DrinkSvg from '@/assets/Drink-glow.svg';
import DriveInSvg from '@/assets/Drive in Films.svg';
import PopcornSvg from '@/assets/Popcorn-glow.svg';
</script>

<template>
  <div class="main-svg-container">
    <div class="svg-container">
      <img :src="DrinkSvg" alt="" class="drink-icon" />
    </div>
    <div class="svg-container">
      <img :src="DriveInSvg" alt="" class="drivein-icon" />
    </div>
    <div class="svg-container">
      <img :src="PopcornSvg" alt="" class="popcorn-icon" />
    </div>
  </div>
</template>

<style lang="scss">
.main-svg-container {
  display: flex;
  height: 136px;
  min-width: 320px;
  padding-top: 20px;
}
.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
}
.drink-icon {
  height: 80%;
}
.drivein-icon {
  height: 80%;
}
.popcorn-icon {
  height: 80%;
}
</style>
