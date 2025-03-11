<script setup lang="ts">
import Heroheader from '@/assets/Cinematic Nights Beneath Starlit.svg';
</script>

<template>
  <section>
    <div class="hero">
      <img :src="Heroheader" />
    </div>
    <div class="title-wrapper">
      <h1>Join Us For Films Under The Stars</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-top: 25px;
  display: grid;
  justify-items: center;
  position: relative;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  background-image: url('../assets/superhero1.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 30vh;
  border: 5px solid $neon-teal;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  overflow: hidden;
  transition: min-height 1s ease-in-out;
  position: relative;
  z-index: -1;
}
.hero img {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  width: 100%;
}
.title-wrapper {
  width: auto;
  height: 28px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: $midnight-sky;
  border-top-left-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -17px;
  z-index: -1;
}
h1 {
  all: unset;
  color: $neon-teal;
  font-family: $font-tilt-neon;
  font-size: 16px;
  z-index: 0;
}
@media (min-width: 768px) {
  section {
    padding-left: 1.5%;
    padding-right: 1.5%;
  }
  .hero {
    min-height: 40vh;
    border: 10px solid $neon-teal;
    border-top-right-radius: 150px;
    border-bottom-left-radius: 150px;
  }
  .hero img {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
  .title-wrapper {
    height: 76px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: $midnight-sky;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    margin-top: -45px;
  }
  h1 {
    font-size: 32px;
  }
}
@media (min-width: 1024px) {
  section {
    padding-left: 8%;
    padding-right: 8%;
  }
  .hero {
    min-height: 50vh;
  }
  .title-wrapper {
    height: 80px;
    padding-left: 60px;
    padding-right: 60px;
    background-color: $midnight-sky;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    margin-top: -45px;
  }
  h1 {
    font-size: 36px;
  }
}
</style>
