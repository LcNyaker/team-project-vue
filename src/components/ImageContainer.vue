<script setup lang="ts"></script>

<template>
  <section>
    <div class="hero">
      <img src="../assets/superhero 1.jpg" />
      <h1>Cinematic Nights Beneath Starlit Lights</h1>
      <p>Cinematic Nights Beneath Starlit Lights</p>
      <div class="anchor">
        <a>Join Us For Films Under The Stars</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
}
.hero {
  position: relative;
  text-align: center;
}
img {
  max-width: 98%;
  height: auto;
  border: 5px solid $neon-teal;
  border-top-left-radius: 0;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0;
  z-index: -1;
}
.hero h1 {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 55%;
  transform: translate(-50%, 60%);
  color: $mels-white;
  font-family: $font-grand-hotel;
  font-size: 24px;
  font-weight: 10;
  letter-spacing: 11%;
  line-height: 150%;
  z-index: 2;
}
p {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 55%;
  transform: translate(-50%, 60%);
  color: black;
  font-family: $font-grand-hotel;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 11%;
  line-height: 150%;
  z-index: 1;
  text-shadow:
    2px 2px 0 black,
    -2px -2px 0 black,
    2px -2px 0 black,
    -2px 2px 0 black,
    1px 0 0 black,
    0 1px 0 black,
    -1px 0 0 black,
    0 -1px 0 black;
}
.anchor {
  position: absolute;
  width: 255px;
  height: 28px;
  top: 50%;
  left: 55%;
  transform: translate(-50%, 310%);
  background-color: $midnight-sky;
  border-top-left-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  color: $neon-teal;
  font-family: $font-tilt-neon;
  font-size: 16px;
}
</style>
