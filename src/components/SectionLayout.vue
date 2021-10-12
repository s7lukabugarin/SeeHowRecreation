<template>
  <section :id="id" ref="element" >
    <slot></slot>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useSetClassToggle from '../composables/useSetClassToggle';

export default defineComponent({
  name: 'SectionLayout',
  props: {
    id: {
      type: String,
      default: '#',
    },
  },
  setup() {
    const element = ref();

    useSetClassToggle(element);

    return {
      element,
    };
  },
});
</script>
