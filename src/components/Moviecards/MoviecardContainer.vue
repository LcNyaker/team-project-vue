<template>
  <section>
    <div class="carousel-container">
      <h2 class="title">{{ movies[currentIndex].title }}</h2>
      <div class="carousel">
        <button @click="prev" class="arrow-button">
          <span class="material-icons">chevron_left</span>
        </button>
        <figure>
          <img
            :src="movies[currentIndex].image"
            :alt="movies[currentIndex].title"
            class="movie-poster"
          />
        </figure>
        <button @click="next" class="arrow-button">
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
      <p class="details">
        <span>{{ movies[currentIndex].genre }}</span>
        <span>{{ movies[currentIndex].duration }}</span>
        <span>{{ movies[currentIndex].time }}</span>
      </p>
      <DefaultButton button-text="Read more" aria-label="Read more" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import rebelFilm from '@/assets/movies/rebel-without-a-cause.jpg';
import alligatorFilm from '@/assets/movies/an-alligator-named-daisy.jpg';
import streetCat from '@/assets/movies/a-streetcar-named-desire.jpg';
import hotFilm from '@/assets/movies/some-like-it-hot.png';
import psychoFilm from '@/assets/movies/psycho.jpg';
import DefaultButton from '../buttons/DefaultButton.vue';

interface Movie {
  title: string;
  image: string;
  genre: string;
  duration: string;
  time: string;
}

const movies = ref<Movie[]>([
  {
    title: 'Rebel without a cause',
    image: rebelFilm,
    genre: 'Drama',
    duration: '1h 51m',
    time: 'Sunday, 20:00',
  },
  {
    title: 'An alligator named Daisy',
    image: alligatorFilm,
    genre: 'Comedy',
    duration: '1h 28m',
    time: 'Monday, 18:30',
  },
  {
    title: 'A streetcar named Desire',
    image: streetCat,
    genre: 'Drama',
    duration: '2h 2m',
    time: 'Wednesday, 21:00',
  },
  {
    title: 'Some like it hot',
    image: hotFilm,
    genre: 'Comedy',
    duration: '2h 1m',
    time: 'Friday, 19:00',
  },
  {
    title: 'Psycho',
    image: psychoFilm,
    genre: 'Horror',
    duration: '1h 49m',
    time: 'Saturday, 22:00',
  },
]);

const currentIndex = ref(0);

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + movies.value.length) % movies.value.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % movies.value.length;
};
</script>

<style lang="scss" scoped>
section {
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .carousel-container {
    width: 264px;
    text-align: center;
    padding-bottom: 10px;
    background: $mels-black;
    color: $mels-white;
    border: 3px solid $neon-teal;
    border-top-left-radius: 0;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 0;

    .title {
      margin-bottom: 10px;
      margin-top: 10px;
      font-family: $font-grand-hotel;
      font-size: 2rem;
    }
    .carousel {
      display: flex;
      align-items: center;
      justify-items: center;
      width: 100%;
    }
    figure {
      width: 128px;
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    figure {
      margin: 0;
      padding: 20px;
    }
    .movie-poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .arrow-button {
      background: none;
      border: none;
      min-width: 40px;
      color: $neon-teal;
      cursor: pointer;
      transition:
        color 0.3s ease,
        transform 0.2s ease,
        text-shadow 0.2s ease;

      &:hover {
        color: $neon-teal;
        transform: scale(1.2);
        text-shadow: 2px 2px 10px $neon-teal;
      }

      &:active {
        color: $neon-teal;
        transform: scale(1.2);
        text-shadow: 2px 2px 10px $neon-pig;
      }

      .material-icons {
        display: flex;
        justify-content: center;
        font-size: 5rem;
        width: 100%;
      }
    }
    .details {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 10px 0;
      font-family: $font-tilt-neon;
    }

    .read-more {
      width: 102px;
      height: 44px;
      font-size: 1.12rem;
      align-self: center;
    }
  }
}
</style>
