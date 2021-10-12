<template>
  <header :class="classname">
    <div class="container">
      <nav>
        <a href="/" class="logo" >
          <img src="https://seehow.ch/img/logo.svg" alt="" />
        </a>
        <div class="navbar">
          <ul>
            <li>
              <a href="#home" :class="'home' === activeNavLink && 'active'">
                Home
              </a>
            </li>
            <li>
              <a href="#solution" :class="'solution' === activeNavLink && 'active'">
                Solution
              </a>
            </li>
            <li>
              <a href="#mission" :class="'mission' === activeNavLink && 'active'">
                Mission
              </a>
            </li>
            <li>
              <a href="#news" :class="'news' === activeNavLink && 'active'">
                News
              </a>
            </li>
          </ul>
          <Tilt
            :perspective="300"
            :max="10"
          >
            <a class="btn" href="">
              <span class="laptop-icon">
                <font-awesome-icon icon="laptop" />
              </span>
              <span class="button-text">
                Request a demo
              </span>
            </a>
          </Tilt>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import useNavScroll from '../composables/useNavScroll';
import Tilt from './Tilt.vue';

export default defineComponent({
  name: 'Nav',
  computed: {
    ...mapState({
      activeNavLink: (state: any) => state.activeNavLink,
    }),
  },
  components: {
    Tilt,
  },
  setup() {
    const { classname } = useNavScroll('animated');

    return {
      classname,
    };
  },
});
</script>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100%;
  margin-top: 30px;
  transition: all 300ms ease-out;
  &.animated {
    box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.12);
    margin-top: 0;
    nav {
      .logo {
        height: 36px;
      }
    }
  }
}

nav {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  align-items: center;
  .logo {
    height: 42px;
    position: relative;
    width: 223px;
    display: block;
    transition: all 0.3s ease-out;
    img {
      height: 100%;
      width: auto;
      display: block;
    }
  }
}

nav,
.navbar,
.navbar > ul {
  display: flex;
}

.navbar {
  flex-grow: 1;
  align-items: center;
  ul {
    margin: 0 auto;
    li {
      margin: 20px;
      a {
        padding: 15px 0;
        display: inline-block;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #d5d1da;
          opacity: 0;
          transition: all 250ms linear;
        }
        &:hover, &.active {
          color: #111;
          &::before {
            bottom: 0;
            opacity: 1;
          }
        }
      }
    }
  }
  .btn {
    border-radius: 4px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    transition: all 200ms linear;
    padding: 0 30px;
    display: inline-flex;
    align-items: center;
    border: none;
    color: #111;
    background-color: #f7f5f9;
    perspective: 300;
    &:hover {
      background-color: #c51946;
      color: #fff;
      box-shadow: 0 12px 25px 0 rgba(0, 0, 0, 0.15);
    }
    .laptop-icon {
      display: inline-block;
      padding-right: 5px;
      margin-right: 10px;
    }
  }
}
</style>
