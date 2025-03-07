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
      <img :src="FilmRebel" class="film-rebel" alt="" width="1910" height="2935" loading="eager" />
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
.film-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  color: $mels-white;
  border: 2px solid red;
  background: rgba(0, 0, 0, 0.5); // Lägg till en mörk overlay om du vill ha en effekt
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
}
.film-cover h2 {
  font-family: $font-grand-hotel;
}
.film-info span {
  font-family: $font-tilt-neon;
  margin: 10px;
}
.main-film-container {
  display: flex;
  flex-direction: column;
}
.film-container {
  position: relative; // För att .film-cover ska positioneras relativt detta element
  display: inline-block; // Håller innehållet tight runt bilde
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-width: 100%;
}
.film-rebel {
  min-width: 236px;
  height: auto;
  margin: 30px;
  border-radius: 10px;
}
.film-psycho {
  min-width: 236px;
  height: auto;
  margin: 30px;
  margin-top: 0;

  border-radius: 10px;
}
.film-hot {
  min-width: 236px;
  height: auto;
  margin: 30px;
  margin-top: 0;
  border-radius: 10px;
}
.film-desire {
  min-width: 236px;
  height: auto;
  margin: 30px;
  margin-top: 0;
  border-radius: 10px;
}
.film-alligator {
  min-width: 236px;
  height: auto;
  margin: 30px;
  margin-top: 0;
  border-radius: 10px;
}
</style>
