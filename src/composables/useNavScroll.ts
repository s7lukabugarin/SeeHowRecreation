import { ref, onMounted, onUnmounted } from 'vue';

export default function useNavScroll(classnameParam: string) {
  const classname = ref();

  const scrollHandler = () => {
    console.log(document.body.scrollTop);
    if (document.documentElement.scrollTop > 70) {
      classname.value = classnameParam;
    } else {
      classname.value = '';
    }
  };

  onMounted(() => {
    document.addEventListener('scroll', scrollHandler);
  });

  onUnmounted(() => {
    document.removeEventListener('scroll', scrollHandler);
  });

  return {
    classname,
  };
}
