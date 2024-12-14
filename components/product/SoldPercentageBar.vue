<script setup lang="ts">
interface Props {
  totalTickets: number;
  availableTickets: number;
  showLabel?: boolean;
  height?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  showLabel: true,
  height: 10,
  totalTickets: 0,
  availableTickets: 0,
});

const soldPercentage = computed(() => {
  if (!props.totalTickets || !props.availableTickets) return 0;
  const sold = props.totalTickets - props.availableTickets;
  return Math.ceil((sold / props.totalTickets) * 100);
});

const getColor = (percentage: number) => {
  if (percentage > 75) return "deep-orange";
  if (percentage > 50) return "lime";
  if (percentage > 25) return "light-green-darken-4";
  return "light-blue";
};
</script>

<template>
  <div>
    <div v-if="showLabel" class="text-left text-caption mb-2">
      Sold: {{ soldPercentage }}%
    </div>
    <v-progress-linear
      :model-value="soldPercentage"
      :color="getColor(soldPercentage)"
      :height="height"
      class="mb-4"
      striped
      rounded
    />
  </div>
</template>
