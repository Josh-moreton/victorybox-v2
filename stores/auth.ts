import { defineStore } from "pinia";
import { useStrapi } from "#imports";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  }),

  actions: {
    async login(identifier: string, password: string) {
      const strapi = useStrapi();
      this.loading = true;
      this.error = null;

      try {
        const response = await strapi.login({
          identifier,
          password,
        });
        this.user = response.user;
        this.isAuthenticated = true;
        return response;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async register(data: { email: string; password: string }) {
      const strapi = useStrapi();
      this.loading = true;
      this.error = null;

      try {
        const response = await strapi.register(data);
        return response;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      const strapi = useStrapi();
      await strapi.logout();
      this.user = null;
      this.isAuthenticated = false;
      navigateTo("/auth/login");
    },

    async checkAuth() {
      const strapi = useStrapi();
      try {
        const user = await strapi.fetchUser();
        this.user = user;
        this.isAuthenticated = !!user;
        return user;
      } catch {
        this.user = null;
        this.isAuthenticated = false;
      }
    },
  },
});
