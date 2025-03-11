<script setup lang="ts">
//import FilmRebel from '../assets/movies/rebel-without-a-cause.jpg';
import FilmPsycho from '../assets/movies/psycho.jpg';
import FilmHot from '../assets/movies/some-like-it-hot.png';
import FilmDesire from '../assets/movies/a-streetcar-named-desire.jpg';
import FilmAlligator from '../assets/movies/an-alligator-named-daisy.jpg';
import DefaultButton from './atoms/DefaultButton.vue';
</script>

<template>
  <div class="main-film-container">
    <!-- <section class="film-container">
      <div class="film-poster">
        <img
          :src="FilmRebel"
          class="film-rebel"
          alt=""
          width="1910"
          height="2935"
          loading="eager"
        />
        <div class="film-cover">
          <h2>Rebel Without A Cause</h2>
          <div class="film-info">
            <span>Drama</span>
            <span>1h 51m</span>
            <span>Sunday, 20:00</span>
          </div>
          <DefaultButton button-text="Read More" />
        </div>
      </div>
    </section>-->
    <section class="film-container">
      <div class="film-poster">
        <img
          :src="FilmPsycho"
          class="film-psycho"
          alt=""
          width="1024"
          height="1517"
          loading="lazy"
        />
        <div class="film-cover">
          <h2>Psycho</h2>
          <div class="film-info">
            <span>Drama</span>
            <span>1h 51m</span>
            <span>Sunday, 20:00</span>
          </div>
          <DefaultButton button-text="Read More" />
        </div>
      </div>
    </section>
    <section class="film-container">
      <div class="film-poster">
        <img :src="FilmHot" class="film-hot" alt="" width="1992" height="3124" loading="lazy" />
        <div class="film-cover">
          <h2>Some like it hot</h2>
          <div class="film-info">
            <span>Drama</span>
            <span>1h 51m</span>
            <span>Sunday, 20:00</span>
          </div>
          <DefaultButton button-text="Read More" />
        </div>
      </div>
    </section>
    <section class="film-container">
      <div class="film-poster">
        <img
          :src="FilmDesire"
          class="film-desire"
          alt=""
          width="1024"
          height="1555"
          loading="lazy"
        />
        <div class="film-cover">
          <h2>A Streetcar Named Desire</h2>
          <div class="film-info">
            <span>Drama</span>
            <span>1h 51m</span>
            <span>Sunday, 20:00</span>
          </div>
          <DefaultButton button-text="Read More" />
        </div>
      </div>
    </section>
    <section class="film-container">
      <div class="film-poster">
        <img :src="FilmAlligator" alt="" width="1920" height="2935" loading="lazy" />
        <div class="film-cover">
          <h2>An Alligator Named Daisy</h2>
          <div class="film-info">
            <span>Drama</span>
            <span>1h 51m</span>
            <span>Sunday, 20:00</span>
          </div>
          <DefaultButton button-text="Read More" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  height: 500px;
  width: 100vh;
}
.main-film-container {
  min-height: 100vh;
  --gridWidth: calc(432px - 3rem * 2);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--gridWidth), 1fr));
  gap: 5rem;
  margin-top: 5vh;
  justify-items: center;
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
  padding-left: 5vh;
  padding-right: 5vh;
  overflow: hidden;
  cursor: pointer;
}
.film-poster {
  min-width: 50%;
  height: auto;
  display: flex;
}
.film-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}
.film-cover {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  color: $mels-white;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.film-container:hover .film-cover {
  opacity: 1;
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
.info-button {
  width: 120px;
  height: 44px;
  border: 3px solid $neon-teal;
  border-radius: 10px;
  background-color: transparent;
  color: $neon-teal;
  font-family: $font-tilt-neon;
  font-size: 1.1rem;
  align-self: center;
  transition: box-shadow 0.6s ease;
  margin-top: 20px;
  cursor: pointer;
}
.info-button:hover {
  box-shadow: 0 0 20px;
}
.info-button:active {
  box-shadow:
    0 0 20px,
    inset 0 0 30px;
}
@media (min-width: 768px) {
  .main-film-container {
    margin-top: 10vh;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  .film-poster {
    height: 500px;
    min-width: 100%;
    display: flex;
  }
  .film-poster img {
    width: auto;
    min-height: 100%;
  }
}
@media (min-width: 1024px) {
  .main-film-container {
    grid-template-columns: repeat(2, 0.5fr);
    min-width: 50vw;
    gap: 5vh;
    margin-top: 0;
  }
  .film-container {
    padding-left: 0;
    padding-right: 0;
  }
}
.film-poster {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
