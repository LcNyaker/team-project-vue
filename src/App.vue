<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderAndMenu from './components/fixtures/header/HeaderAndMenu.vue';
import CookieBar from '@/components/CookieBar.vue';
import FooterContainer from './components/FooterContainer.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LogIn">Log in</RouterLink>
        <RouterLink to="/Films">Films</RouterLink>
      </nav>
    </div>
  </header>
  <HeaderAndMenu />

  <RouterView />

  <div>
    <CookieBar />
  </div>
  <div>
    <FooterContainer />
  </div>
</template>
