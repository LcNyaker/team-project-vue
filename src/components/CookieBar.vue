<script setup lang="ts">
import { ref } from 'vue';
import CookieSvg from '@/assets/Cookie.svg';

const showCookieBar = ref(true);

function hideCookieBar() {
  showCookieBar.value = false;
}
</script>

<template>
  <div v-if="showCookieBar" class="cookie-bar">
    <div class="cookie-content">
      <h2>We use cookies</h2>
      <p>This website use cookies to ensure you get the best experience on our website.</p>
      <div class="cookie-footer">
        <img :src="CookieSvg" alt="Cookie icon" class="cookie-icon" />
        <button @click="hideCookieBar">Accept</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cookie-bar {
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: 148px;
  background-color: $midnight-sky;
  color: $mels-white;
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1000;

  .cookie-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-family: $font-grand-hotel;
    font-size: 1.5rem;
    margin: 0;
    color: $mels-white;
    text-align: center;
    font-weight: 400;
    line-height: 1.5;
  }

  p {
    font-family: $font-tilt-neon;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: $mels-white;
    text-align: center;
    width: 315px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 19rem;
  }

  .cookie-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 0.75rem;
  }

  .cookie-icon {
    width: 3rem;
    height: auto;
  }

  button {
    background-color: transparent;
    border: 4px solid $neon-teal;
    color: $neon-teal;
    padding: 1px 10px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.75rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 20px rgba(40, 250, 239, 1);
    }
  }
}

@media (min-width: 768px) {
  .cookie-bar {
    width: 87vw;
    max-width: 60rem;
    height: 95px;
    padding: 1rem 3rem 2rem 3rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .cookie-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-top: -10px;
  }

  .cookie-icon {
    width: 120px !important;
    height: auto;
    position: absolute;
    left: 13%;
    top: 50%;
    transform: translateY(-50%);
  }

  h2,
  p {
    text-align: center;
    max-width: 60%;
  }

  .cookie-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  button {
    min-width: 100px;
    height: auto;
    padding: 10px !important;
    box-sizing: content-box;
    flex-shrink: 0;
    border-radius: 10px !important;
  }
}

@media (min-width: 1024px) {
  .cookie-bar {
    width: 95w;
    max-width: 100rem;
    height: 150px;
    padding: 1.5rem 5rem 0.3rem 5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .cookie-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-top: -10px;
  }

  .cookie-icon {
    width: 150px !important;
    height: auto;
    left: 19%;
    top: 53%;
    transform: translateY(-50%);
  }

  h2,
  p {
    text-align: center;
    max-width: 50%;
  }

  .cookie-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  button {
    min-width: 180px;
    height: auto;
    padding: 10px !important;
    box-sizing: content-box;
    flex-shrink: 0;
    border-radius: 8px !important;
    font-size: 1.3rem !important;
  }
}
</style>
