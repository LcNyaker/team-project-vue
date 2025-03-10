<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderAndMenu from './components/fixtures/header/HeaderAndMenu.vue';
import CookieBar from '@/components/CookieBar.vue';
<<<<<<< HEAD
=======
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
import FooterContainer from './components/FooterContainer.vue';
>>>>>>> c9f23a65894fa76aa498dab3b2276535ab4b615d
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
