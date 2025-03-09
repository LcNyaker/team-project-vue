<script setup lang="ts">
import { defineProps } from 'vue';
import quoteLeft from '@/assets/quote-left.png';
import quoteRight from '@/assets/quote-right.png';

defineProps<{
  quote: string;
}>();
</script>

<template>
  <div class="blockquote-container">
    <blockquote>
      <img :src="quoteLeft" alt="Left Quote" class="quote-icon left" />
      <p>{{ quote }}</p>
      <img :src="quoteRight" alt="Right Quote" class="quote-icon right" />
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
.blockquote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  background: url('@/assets/popcorn-background.jpg') no-repeat center center/cover;

  blockquote {
    width: 90%;
    max-width: 400px;
    padding: 1.5rem;
    background: url('@/assets/quotation.jpg') no-repeat center center / cover;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: $mels-white;
    font-size: 1.2rem;
    font-family: $font-tilt-neon;
    font-style: italic;
    position: relative;

    .quote-icon {
      width: 50px;
      height: 50px;
      position: absolute;
    }

    .left {
      top: -10px;
      left: -10px;
    }

    .right {
      bottom: -10px;
      right: -10px;
    }
  }
}
</style>
