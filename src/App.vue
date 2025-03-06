<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import CookieBar from '@/components/CookieBar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <div>
    <CookieBar />
  </div>
</template>
