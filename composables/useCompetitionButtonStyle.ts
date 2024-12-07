// Create new composable: composables/useCompetitionButtonStyle.ts
export const useCompetitionButtonStyle = () => {
  return {
    color: "primary",
    variant: "elevated",
    rounded: "lg", // Changed from LG to 'lg'
    elevation: 4,
  };
};
