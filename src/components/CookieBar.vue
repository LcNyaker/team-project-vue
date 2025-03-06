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
