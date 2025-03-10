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

<style lang="scss" scoped>
.main-svg-container {
  display: flex;
  height: 136px;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.svg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}
.popcorn-icon {
  height: 12vh;
  margin-bottom: 3vh;
}
.drink-icon {
  height: 15vh;
}
div img {
  margin-top: 10vh;
  height: 20vh;
}
@media (min-width: 768px) {
  .svg-container {
    width: 30%;
  }
  .drivein-icon {
    height: 25vh;
  }
  .popcorn-icon {
    height: 18vh;
    margin-bottom: 0;
  }
  .drink-icon {
    height: 18vh;
  }
}
@media (min-width: 1024px) {
  .main-svg-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    align-items: center;
    gap: 20px;
    height: auto;
    margin-top: 3vh;
  }
  .svg-container {
    width: 100%;
  }
  @media (min-width: 1024px) {
    .main-svg-container {
      display: grid;
      grid-template-areas:
        'drivein drivein'
        'drink popcorn';
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
      justify-items: center;
      align-items: center;
      padding-right: 40px;
    }
    .svg-container:nth-child(2) {
      grid-area: drivein;
      justify-content: center;
    }

    .svg-container:nth-child(1) {
      grid-area: drink;
    }

    .svg-container:nth-child(3) {
      grid-area: popcorn;
    }
    .drivein-icon {
      min-height: 46vh;
    }
    .popcorn-icon {
      min-height: 30vh;
      padding-bottom: 100px;
    }
    .drink-icon {
      min-height: 30vh;
      padding-top: 100px;
    }
  }
}
</style>
