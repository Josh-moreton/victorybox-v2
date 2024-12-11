// composables/useCompetitionTabs.ts
export const useCompetitionTabs = () => {
  const tab = ref("all");

  const tabs = [
    {
      icon: "mdi-view-grid",
      text: "All Competitions",
      value: "all",
    },
    {
      icon: "mdi-trophy",
      text: "Featured",
      value: "featured",
    },
    {
      icon: "mdi-clock-outline",
      text: "Cars",
      value: "cars",
    },
    {
      icon: "mdi-new-box",
      text: "Tech",
      value: "tech",
    },
  ];

  return {
    tab,
    tabs,
  };
};
