<script setup lang="ts">
import FilmRebel from '../assets/movies/rebel-without-a-cause.jpg';
import FilmPsycho from '../assets/movies/psycho.jpg';
import FilmHot from '../assets/movies/some-like-it-hot.png';
import FilmDesire from '../assets/movies/a-streetcar-named-desire.jpg';
import FilmAlligator from '../assets/movies/an-alligator-named-daisy.jpg';
</script>

<template>
  <div class="main-film-container">
    <figure class="film-container">
      <img :src="FilmRebel" alt="" width="1910" height="2935" loading="eager" />
      <section class="film-cover">
        <h2>Rebel Without A Cause</h2>
        <div class="film-info">
          <span>Drama</span>
          <span>1h 51m</span>
          <span>Sunday, 20:00</span>
        </div>
      </section>
    </figure>
    <figure class="film-container">
      <img :src="FilmPsycho" class="film-psycho" alt="" width="1024" height="1517" loading="lazy" />
      <section class="film-cover">
        <h2>Psycho</h2>
        <div class="film-info">
          <span>Drama</span>
          <span>1h 51m</span>
          <span>Sunday, 20:00</span>
        </div>
      </section>
    </figure>
    <figure class="film-container">
      <img :src="FilmHot" class="film-hot" alt="" width="1992" height="3124" loading="lazy" />
      <section class="film-cover">
        <h2>Some like it hot</h2>
        <div class="film-info">
          <span>Drama</span>
          <span>1h 51m</span>
          <span>Sunday, 20:00</span>
        </div>
      </section>
    </figure>
    <figure class="film-container">
      <img :src="FilmDesire" class="film-desire" alt="" width="1024" height="1555" loading="lazy" />
      <section class="film-cover">
        <h2>A Streetcar Named Desire</h2>
        <div class="film-info">
          <span>Drama</span>
          <span>1h 51m</span>
          <span>Sunday, 20:00</span>
        </div>
      </section>
    </figure>
    <figure class="film-container">
      <img
        :src="FilmAlligator"
        class="film-alligator"
        alt=""
        width="1920"
        height="2935"
        loading="lazy"
      />
      <section class="film-cover">
        <h2>An Alligator Named Daisy</h2>
        <div class="film-info">
          <span>Drama</span>
          <span>1h 51m</span>
          <span>Sunday, 20:00</span>
        </div>
      </section>
    </figure>
  </div>
</template>

<style lang="scss">
.main-film-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
}
.film-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  overflow: hidden;
  cursor: pointer;
}
.film-container img {
  max-width: 100%;
  height: auto;
  border-radius: inherit;
  display: block;
}
.film-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: $mels-white;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: inherit;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.film-container:hover .film-cover {
  opacity: 1;
  pointer-events: auto;
}
.film-cover h2 {
  font-family: $font-grand-hotel;
  font-size: 2.2rem;
  font-weight: 200;
}
.film-info span {
  font-family: $font-tilt-neon;
  margin: 10px;
}
</style>
