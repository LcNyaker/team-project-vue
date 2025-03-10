<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderAndMenu from './components/fixtures/header/HeaderAndMenu.vue';
import CookieBar from '@/components/CookieBar.vue';
import FooterContainer from './components/FooterContainer.vue';
</script>
<template>
  <HeaderAndMenu />
  <RouterView />
  <div>
    <CookieBar />
  </div>
  <div>
    <FooterContainer />
  </div>
</template>
