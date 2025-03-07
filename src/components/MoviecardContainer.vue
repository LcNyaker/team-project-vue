<template>
  <section>
    <div class="carousel-container">
      <h2 class="title">{{ movies[currentIndex].title }}</h2>
      <div class="carousel" id="anchor-path">
        <button @click="prev" class="nav-button">
          <span class="material-icons">chevron_left</span>
        </button>
        <img
          :src="movies[currentIndex].image"
          :alt="movies[currentIndex].title"
          class="movie-poster"
        />
        <button @click="next" class="nav-button">
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
      <p class="details">
        <span>{{ movies[currentIndex].genre }}</span>
        <span>{{ movies[currentIndex].duration }}</span>
        <span>{{ movies[currentIndex].time }}</span>
      </p>
      <input type="submit" value="Read more" class="read-more" />
    </div>
  </section>
</template>

<script lang="ts">
import rebelFilm from '@/assets/movies/rebel-without-a-cause.jpg';
import alligatorFilm from '@/assets/movies/an-alligator-named-daisy.jpg';
import streetCat from '@/assets/movies/a-streetcar-named-desire.jpg';
import hotFilm from '@/assets/movies/some-like-it-hot.png';
import psychoFilm from '@/assets/movies/psycho.jpg';

export default {
  data() {
    return {
      currentIndex: 0,
      movies: [
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
          title: 'A streetcat named Desire',
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
      ],
    };
  },
  methods: {
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.movies.length;
    },
  },
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
      font-size: 32px;
    }

    .carousel {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .movie-poster {
      width: 128px;
      height: auto;
    }

    //TODO: ändra till pilarna från figma 
    .nav-button {
      background: none;
      border: none;
      color: $neon-teal;
      cursor: pointer;
      transition: color 0.3s ease, transform 0.2s ease, text-shadow 0.2s ease;

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
        font-size: 80px;
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
      border: 3px solid $neon-teal;
      border-radius: 10px;
      background-color: $mels-black;
      color: $neon-teal;
      font-family: $font-tilt-neon;
      font-size: 18px;
      align-self: center;
      transition: box-shadow 0.6s ease;
    }
    .read-more:hover {
      box-shadow: 0 0 20px;
    }
    .read-more:active {
      box-shadow:
        0 0 20px,
        inset 0 0 30px;
    }
  }
}
</style>
