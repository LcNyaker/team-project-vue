<script setup lang="ts">
import ImageContainer from '../components/ImageContainer.vue';
import MoviecardContainer from '../components/MoviecardContainer.vue';
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
</script>

<template>
  <main>
    <ImageContainer />
    <BlockquoteContainer
      quote="Some things never go out of style – classic cars, popcorn, and drive-in movies."
    />
    <MoviecardContainer />
  </main>
</template>
<style>
.home {
  color: wheat;
}
</style>
