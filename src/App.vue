<template>
  <Nav />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <SectionLayout id='home'>

  </SectionLayout>
  <SectionLayout id='solution'>

  </SectionLayout>
  <SectionLayout id='mission'>

  </SectionLayout>
  <SectionLayout id='news'>

  </SectionLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
import SectionLayout from '@/components/SectionLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    SectionLayout,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 200vh;
}

section {
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik';
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.container {
  padding: 0 20px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1440px;
  }
}

</style>
