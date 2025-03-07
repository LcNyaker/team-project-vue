<script setup lang="ts"></script>

<template>
  <div class="loginContainer">
    <h1>Log in</h1>
    <form class="loginInfo">
      <input type="email" placeholder="email@adress.com" class="emailInput" />
      <input type="password" placeholder="password" class="passwordInput" />
      <a href="" class="forgotPassword">forgot password?</a>
      <input type="submit" value="Log in" class="logIn" />
      <a href="" class="signUp">sign up</a>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.loginContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: $neon-teal;
    font-family: $font-grand-hotel;
    font-size: 48px;
    font-weight: 400;
  }
  .loginInfo {
    display: flex;
    flex-direction: column;
    gap: 25px;
    .emailInput {
      width: 280px;
      height: 44px;
      border: 3px solid $neon-teal;
      border-radius: 10px;
      transition: box-shadow 0.6s ease;
    }
    .emailInput::placeholder {
      color: $mels-black;
      font-size: 18px;
      font-family: $font-roboto;
      text-align: center;
    }
    .emailInput:hover {
      box-shadow: 0 0 20px $neon-pig;
    }
    .emailInput:active {
      box-shadow: 0 0 20px $neon-pig;
      border: 3px solid $aqua;
    }
    .passwordInput {
      width: 280px;
      height: 44px;
      border: 3px solid $neon-teal;
      border-radius: 10px;
      transition: box-shadow 0.6s ease;
    }
    .passwordInput::placeholder {
      color: $mels-black;
      font-size: 18px;
      font-family: $font-roboto;
      text-align: center;
    }
    .passwordInput:hover {
      box-shadow: 0 0 20px $neon-pig;
    }
    .passwordInput:active {
      box-shadow: 0 0 20px $neon-pig;
      border: 3px solid $aqua;
    }
    .forgotPassword {
      color: $mels-white;
      font-family: $font-tilt-neon;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      align-self: flex-end;
    }
    .logIn {
      width: 200px;
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
    .logIn:hover {
      box-shadow: 0 0 20px;
    }
    .logIn:active {
      box-shadow:
        0 0 20px,
        inset 0 0 30px;
    }
    .signUp {
      color: $mels-white;
      font-family: $font-tilt-neon;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      align-self: center;
    }
  }
}
</style>
