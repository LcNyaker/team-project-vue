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
  width: 100%;
  padding: 1rem;

  blockquote {
    position: relative;
    width: 90%;
    max-width: 284px;
    height: 213px;
    padding: 1.1rem 1rem;
    border-radius: 10px;
    color: $mels-white;
    border: 3px solid $neon-teal;
    background:
      linear-gradient(rgba(85, 83, 123, 0.6), rgba(85, 83, 123, 0.6)),
      url('@/assets/quotation.jpg') no-repeat center center / cover;

    background-size: 318% auto;
    background-position: center 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.25rem;
      font-family: 'Tilt Neon', sans-serif;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.011em;
      text-align: center;
      vertical-align: middle;
      width: 184px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .quote-icon {
      width: 50px;
      height: 50px;
      position: absolute;
    }

    .left {
      top: 10px;
      left: 10px;
    }

    .right {
      bottom: 10px;
      right: 10px;
    }
  }
}

@media (min-width: 768px) {
  .blockquote-container {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 310px !important;
  }
  blockquote {
    width: 90% !important;
    max-width: 973px !important;
    height: 307px !important;
    border-radius: 25px !important;
    padding: 3rem 3rem !important;
    background-size: 140% auto !important;
    background-position: center 100% !important;
  }

  p {
    font-size: 1.9rem !important;
    width: 736px !important;
    height: 120px !important;
    text-align: center !important;
    line-height: 1.5 !important;
    margin: 0 auto !important;
  }

  .quote-icon {
    width: 60px !important;
    height: 60px !important;
  }

  .left {
    top: 15px !important;
    left: 15px !important;
  }

  .right {
    bottom: 15px !important;
    right: 15px !important;
  }
}

@media (min-width: 1024px) {
  .blockquote-container {
    position: relative;
    height: 713px;
    width: 75%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('@/assets/quotation.jpg') no-repeat center center / cover;
  }
  blockquote {
    position: relative !important;
    width: 897px !important;
    height: 614px !important;
    max-width: 90vw !important;
    background: linear-gradient(rgba(85, 83, 123, 0.6), rgba(85, 83, 123, 0.6)) !important;
    border-radius: 50px !important;
    font-size: 1.8rem !important;
    padding: 0rem 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }

  p {
    font-size: 2.5rem !important;
    line-height: 1.5 !important;
    text-align: center !important;
    width: 653px !important;
    height: 204px !important;
  }

  .quote-icon {
    width: 70px !important;
    height: 70px !important;
    position: absolute !important;
  }

  .left {
    top: 20px !important;
    left: 20px !important;
  }

  .right {
    bottom: 20px !important;
    right: 20px !important;
  }
}
</style>
