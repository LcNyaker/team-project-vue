<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderAndMenu from './components/fixtures/header/HeaderAndMenu.vue';
import CookieBar from '@/components/CookieBar.vue';
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
</script>

<template>
  <HeaderAndMenu />

  <RouterView />
  <main>
    <BlockquoteContainer
      quote="Some things never go out of style – classic cars, popcorn, and drive-in movies."
    />
  </main>
  <div>
    <CookieBar />
  </div>
</template>
