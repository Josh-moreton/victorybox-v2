<template>
  <v-chip color="primary" class="mt-2 font-parkinsans">
    Draw {{ formatClosingDate }}
  </v-chip>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Product {
  closingDate: string;
}

const props = defineProps<{
  product: Product;
}>();

const formatClosingDate = computed(() => {
  if (!props.product.closingDate) return "TBA";

  const closingDate = new Date(props.product.closingDate);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const timeStr = closingDate
    .toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    })
    .toLowerCase();

  if (closingDate.toDateString() === now.toDateString()) {
    return `today at ${timeStr}`;
  }

  if (closingDate.toDateString() === tomorrow.toDateString()) {
    return `tomorrow at ${timeStr}`;
  }

  const getWeekNumber = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(
      ((date - firstDay) / 86400000 + firstDay.getDay() + 1) / 7
    );
  };

  const currentWeek = getWeekNumber(now);
  const closingWeek = getWeekNumber(closingDate);

  if (currentWeek === closingWeek) {
    return (
      closingDate.toLocaleDateString("en-US", { weekday: "long" }) +
      ` at ${timeStr}`
    );
  }

  if (closingWeek === currentWeek + 1) {
    return "next week";
  }

  return closingDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
});
</script>
