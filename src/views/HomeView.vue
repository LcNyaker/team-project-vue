<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import MoviecardContainer from '../components/MoviecardContainer.vue';
<<<<<<< HEAD
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
=======
import TabletMoviecard from '@/components/TabletMoviecard.vue';
import DesktopMoviecard from '@/components/DesktopMoviecard.vue';

const screenSize = ref('desktop');

const updateScreenSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    screenSize.value = 'mobile';
  } else if (width < 1440) {
    screenSize.value = 'tablet';
  } else {
    screenSize.value = 'desktop';
  }
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
>>>>>>> c9f23a65894fa76aa498dab3b2276535ab4b615d
</script>

<template>
  <main>
<<<<<<< HEAD
    <ImageContainer />
    <BlockquoteContainer
      quote="Some things never go out of style – classic cars, popcorn, and drive-in movies."
    />
    <MoviecardContainer />
=======
    <HeroSection />
    <div>
      <MoviecardContainer v-if="screenSize === 'mobile'" />
      <TabletMoviecard v-else-if="screenSize === 'tablet'" />
      <DesktopMoviecard v-else />
    </div>
>>>>>>> c9f23a65894fa76aa498dab3b2276535ab4b615d
  </main>
</template>

<style>
.home {
  color: wheat;
}
</style>
