// stores/auth.ts
import { defineStore } from "pinia";
import { useStrapi } from "#imports";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
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
        return response;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
