import { ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export default function useSetClassToggle(element: any): void{
  const activeMenuItem = ref('');
  const store = useStore();

  const elementInViewportLogic = () => {
    const elementDistanceFromTop = element.value?.getBoundingClientRect().top;
    const elementHeight = element.value?.offsetHeight;
    const id = element.value?.id;

    if (elementDistanceFromTop <= 0 && -elementDistanceFromTop < elementHeight) {
      activeMenuItem.value = id;
      store.commit('SET_ACTIVE_NAV_LINK', activeMenuItem.value);
    } else {
      activeMenuItem.value = '';
    }
  };

  const scrollHandler = () => {
    elementInViewportLogic();
  };

  onMounted(() => {
    elementInViewportLogic();
    document.addEventListener('scroll', scrollHandler);
  });

  onUnmounted(() => {
    elementInViewportLogic();
    document.removeEventListener('scroll', scrollHandler);
  });
}
