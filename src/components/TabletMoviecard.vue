<template>
  <div class="movie-container">
    <h2 class="title">Films</h2>
    <div class="movie-details">
      <img :src="currentMovie.image" :alt="currentMovie.title" class="movie-poster" />
      <div class="movie-info">
        <h3>{{ currentMovie.title }}</h3>
        <p class="details">
          <span>{{ currentMovie.genre }}</span>
          <span>{{ currentMovie.duration }}</span>
          <span>{{ currentMovie.time }}</span>
        </p>
        <p class="description">
          {{ currentMovie.description }}
        </p>
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

    <div class="carousel">
      <button @click="prev" class="arrow-button">
        <span class="material-icons">chevron_left</span>
      </button>
      <div class="movies">
        <img
          v-for="movie in visibleMovies"
          :key="movie.title"
          :src="movie.image"
          :alt="movie.title"
          class="more-posters"
          @click="selectMovie(movie)"
        />
      </div>
      <button @click="next" class="arrow-button">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
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

export default {
  data() {
    return {
      movies: [
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
          title: 'An alligator named Daisy',
          image: alligatorFilm,
          genre: 'Comedy',
          duration: '1h 28m',
          time: 'Monday, 18:30',
          description:
            'An Englishman is left with an abandoned, very tame, and domesticated pet alligator, who helps him develop a bond with a young Irishwoman. Plans to get rid of the animal cause mayhem and produce a surprising outcome for all.',
          actors: ['Donald Sinden', 'Diana Dors', 'Jeannie Carson'],
          director: 'J. Lee Thompson',
          year: '1955',
        },
      ],
      currentMovie: {},
      startIndex: 0,
    };
  },
  computed: {
    visibleMovies() {
      return this.movies.slice(this.startIndex, this.startIndex + 3);
    },
  },
  created() {
    this.currentMovie = this.movies[0];
  },
  methods: {
    selectMovie(movie: Movie) {
      this.currentMovie = movie;
    },
    prev() {
      if (this.startIndex > 0) {
        this.startIndex--;
      } else {
        this.startIndex = this.movies.length - 3;
      }
    },
    next() {
      if (this.startIndex < this.movies.length - 3) {
        this.startIndex++;
      } else {
        this.startIndex = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-container {
  text-align: center;
  background: $mels-black;
  color: $mels-white;
  padding: 20px;
  border: 3px solid $neon-teal;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;

  .title {
    font-family: $font-grand-hotel;
    font-size: 48px;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .movie-details {
    display: flex;
    padding: 15px;
    justify-content: center;
    gap: 20px;
    background: $mels-black;
    border: 4px solid $neon-teal;
    border-radius: 50px;
  }

  .movie-poster {
    width: 230px;
    border-radius: 10px;
  }

  .movie-info {
    h3 {
      font-family: $font-grand-hotel;
      font-size: 32px;
    }

    .details {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 10px 0;
      font-family: $font-tilt-neon;
      font-size: 18px;
    }

    .description {
      font-family: $font-tilt-neon;
      font-size: 15px;
    }
  }

  .info-box {
    display: flex;
    justify-content: space-around;
    background: $midnight-sky;
    border-radius: 20px;
    font-family: $font-tilt-neon;
    font-size: 15px;

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
    font-size: 16px;
    align-self: center;
    margin-top: 15px;
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

  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 30px;

    .arrow-button {
      background: none;
      border: none;
      margin: -30px;
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
        font-size: 80px;
      }
    }
  }

  .movies {
    display: flex;
    gap: 30px;
  }

  .more-posters {
    display: flex;
    width: 200px;
    border-radius: 10px;
    height: auto;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
