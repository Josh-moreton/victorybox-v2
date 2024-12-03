// useCountdownTwo.ts
import { onMounted, onUnmounted, ref } from "vue";

interface CountdownState {
  days: Ref<number>;
  hours: Ref<number>;
  minutes: Ref<number>;
  seconds: Ref<number>;
}

export default function useCountdownTwo(deadline: string): CountdownState {
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toString());
    if (time < 0) {
      days.value = 0;
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
    } else {
      days.value = Math.floor(time / (1000 * 60 * 60 * 24));
      hours.value = Math.floor((time / (1000 * 60 * 60)) % 24);
      minutes.value = Math.floor((time / 1000 / 60) % 60);
      seconds.value = Math.floor((time / 1000) % 60);
    }
  };

  let intervalId: NodeJS.Timeout;

  onMounted(() => {
    intervalId = setInterval(() => getTimeUntil(deadline), 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return { days, hours, minutes, seconds };
}
