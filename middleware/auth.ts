export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const user = await authStore.checkAuth();

  if (!user && to.path !== "/auth/login" && to.path !== "/auth/register") {
    return navigateTo("/auth/login");
  }

  if (user && (to.path === "/auth/login" || to.path === "/auth/register")) {
    return navigateTo("/account");
  }
});
