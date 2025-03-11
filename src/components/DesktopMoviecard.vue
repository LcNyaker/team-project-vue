<template>
  <div class="movie-container">
    <h2 class="title">Films</h2>
    <div class="content">
      <div class="movie-details">
        <img :src="currentMovie.image" :alt="currentMovie.title" class="movie-poster" />
        <div class="movie-info">
          <h3>{{ currentMovie.title }}</h3>
          <p class="details">
            <span>{{ currentMovie.genre }}</span>
            <span>{{ currentMovie.duration }}</span>
            <span>{{ currentMovie.time }}</span>
          </p>
          <p class="description">{{ currentMovie.description }}</p>
          <div class="info-box">
            <div class="actor-container">
              <p>Actors:</p>
              <p v-for="actor in currentMovie.actors" :key="actor">{{ actor }}</p>
            </div>
            <div class="director-container">
              <p>Director:</p>
              <p>{{ currentMovie.director }}</p>
              <p>Release year:</p>
              <p>{{ currentMovie.year }}</p>
            </div>
          </div>
          <button class="book-tickets">Book tickets now!</button>
        </div>
      </div>

      <div class="movie-list">
        <img
          v-for="movie in otherMovies"
          :key="movie.title"
          :src="movie.image"
          :alt="movie.title"
          class="movie-thumbnail"
          @click="swapMovie(movie)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import rebelFilm from '@/assets/movies/rebel-without-a-cause.jpg';
import alligatorFilm from '@/assets/movies/an-alligator-named-daisy.jpg';
import streetCar from '@/assets/movies/a-streetcar-named-desire.jpg';
import hotFilm from '@/assets/movies/some-like-it-hot.png';
import psychoFilm from '@/assets/movies/psycho.jpg';

interface Movie {
  title: string;
  image: string;
  genre: string;
  duration: string;
  time: string;
  description: string;
  actors: string[];
  director: string;
  year: string;
}

const movies = ref<Movie[]>([
  {
    title: 'Rebel Without a Cause',
    image: rebelFilm,
    genre: 'Drama',
    duration: '1h 51m',
    time: 'Sunday, 20:00',
    description:
      'A rebellious young man with a troubled past comes to a new town, finding friends and enemies.',
    actors: ['James Dean', 'Natalie Wood', 'Sal Mineo'],
    director: 'Nicholas Ray',
    year: '1955',
  },
  {
    title: 'A Streetcar Named Desire',
    image: streetCar,
    genre: 'Drama',
    duration: '2h 2m',
    time: 'Friday, 19:00',
    description:
      'Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.',
    actors: ['Vivien Leigh', 'Marlon Brando', 'Kim Hunter'],
    director: 'Elia Kazan',
    year: '1951',
  },
  {
    title: 'Some Like It Hot',
    image: hotFilm,
    genre: 'Comedy',
    duration: '2h 1m',
    time: 'Saturday, 21:00',
    description:
      'After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.',
    actors: ['Marilyn Monroe', 'Tony Curtis', 'Jack Lemmon'],
    director: 'Billy Wilder',
    year: '1959',
  },
  {
    title: 'Psycho',
    image: psychoFilm,
    genre: 'Horror',
    duration: '1h 49m',
    time: 'Wednesday, 22:00',
    description:
      'A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.',
    actors: ['Anthony Perkins', 'Janet Leigh', 'Vera Miles'],
    director: 'Alfred Hitchcock',
    year: '1960',
  },
  {
    title: 'An Alligator Named Daisy',
    image: alligatorFilm,
    genre: 'Comedy',
    duration: '1h 28m',
    time: 'Monday, 18:30',
    description:
      'An Englishman is left with an abandoned, very tame, and domesticated pet alligator, who helps him develop a bond with a young Irishwoman.',
    actors: ['Donald Sinden', 'Diana Dors', 'Jeannie Carson'],
    director: 'J. Lee Thompson',
    year: '1955',
  },
]);

const currentMovie = ref(movies.value[0]);

const otherMovies = computed(() => movies.value.filter((movie) => movie !== currentMovie.value));

const swapMovie = (newMovie: Movie) => {
  currentMovie.value = newMovie;
};
</script>

<style lang="scss" scoped>
.movie-container {
  text-align: center;
  background: $mels-black;
  color: $mels-white;
  padding: 20px;
  border: 4px solid $neon-teal;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  max-width: 90vw;
  margin: auto;

  .title {
    font-family: $font-grand-hotel;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 70px;

    .movie-details {
      width: 627px;
      height: 546px;
      background: $mels-black;
      border: 4px solid $neon-teal;
      border-radius: 50px;
      display: flex;
      align-items: flex-start;
      gap: 20px;

      .movie-poster {
        width: 100%;
        max-width: 230px;
        border-radius: 10px;
        margin-left: 20px;
        display: flex;
        align-self: center;
      }

      .movie-info {
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        h3 {
          font-size: 1.8rem;
          font-family: $font-grand-hotel;
        }
      }

      .details {
        display: flex;
        justify-content: center;
        gap: 10px;
        font-size: 1.12rem;
        font-family: $font-tilt-neon;
        margin-bottom: 10px;
      }

      .description {
        font-family: $font-tilt-neon;
        font-size: 0.9rem;
      }

      .info-box {
        display: flex;
        justify-content: space-around;
        background: $midnight-sky;
        padding: 6px;
        border-radius: 20px;
        margin-top: 25px;

        .actor-container {
          line-height: 1;
        }

        .director-container {
          line-height: 1;
        }
      }

      .book-tickets {
        width: 150px;
        height: 44px;
        border: 3px solid $neon-teal;
        border-radius: 10px;
        padding: 8px;
        background-color: $mels-black;
        color: $neon-teal;
        font-family: $font-tilt-neon;
        font-size: 1rem;
        align-self: center;
        margin-top: 50px;
        transition: box-shadow 0.6s ease;
      }
      .book-tickets:hover {
        box-shadow: 0 0 20px;
      }
      .book-tickets:active {
        box-shadow:
          0 0 20px,
          inset 0 0 30px;
      }
    }

    .movie-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 15px;
      margin-left: 50px;
      padding-top: 20px;
    }
    .movie-thumbnail {
      width: 230px;
      height: 346px;
      cursor: pointer;
      border-radius: 10px;
      transition: transform 0.2s;
    }

    .movie-thumbnail:hover {
      transform: scale(1.1);
    }
  }
}
</style>
