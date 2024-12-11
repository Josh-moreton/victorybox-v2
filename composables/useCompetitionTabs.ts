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
      text: "Ending Soon",
      value: "ending-soon",
    },
    {
      icon: "mdi-new-box",
      text: "New",
      value: "new",
    },
  ];

  return {
    tab,
    tabs,
  };
};
