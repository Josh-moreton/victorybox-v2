interface UseCircularTextOptions {
  rotationAngle?: number;
}

export default function useCircularText(options: UseCircularTextOptions) {
  const textRef = ref<HTMLDivElement | null>(null);
  const { rotationAngle = 8 } = options;

  onMounted(() => {
    if (textRef.value) {
      const text = textRef.value;
      const originalText = text.innerText;
      text.innerHTML = originalText
        .split("")
        .map((char, i) => `<span style="transform:rotate(${i * rotationAngle}deg)">${char}</span>`)
        .join("");
    }
  });

  return textRef;
}
