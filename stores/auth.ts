// stores/auth.ts
import { defineStore } from "pinia";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthResponse {
  user: User;
  jwt: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
    isAuthenticated: false,
    token: null as string | null,
  }),

  actions: {
    async register(data: {
      username: string;
      email: string;
      password: string;
    }) {
      this.loading = true;
      this.error = null;
      const config = useRuntimeConfig();

      try {
        const { data: response, error } = await useFetch<AuthResponse>(
          "/api/auth/local/register",
          {
            baseURL: config.public.strapiUrl,
            method: "POST",
            body: {
              username: data.username,
              email: data.email,
              password: data.password,
            },
          }
        );

        if (error.value) throw error.value;
        if (!response.value) throw new Error("No response from server");

        this.user = response.value.user;
        this.token = response.value.jwt;
        this.isAuthenticated = true;

        // Store JWT in localStorage
        localStorage.setItem("jwt", response.value.jwt);

        return response.value;
      } catch (error: any) {
        this.error = error?.data?.error?.message || "Registration failed";
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async login(identifier: string, password: string) {
      this.loading = true;
      this.error = null;
      const config = useRuntimeConfig();

      try {
        const { data: response, error } = await useFetch<AuthResponse>(
          "/api/auth/local",
          {
            baseURL: config.public.strapiUrl,
            method: "POST",
            body: {
              identifier,
              password,
            },
          }
        );

        if (error.value) throw error.value;
        if (!response.value) throw new Error("No response from server");

        this.user = response.value.user;
        this.token = response.value.jwt;
        this.isAuthenticated = true;
        localStorage.setItem("jwt", response.value.jwt);

        return response.value;
      } catch (error: any) {
        this.error = error?.data?.error?.message || "Login failed";
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      localStorage.removeItem("jwt");
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      navigateTo("/auth/login");
    },

    async checkAuth() {
      const token = localStorage.getItem("jwt");
      if (!token) {
        this.isAuthenticated = false;
        return null;
      }

      try {
        const { data: user } = await useFetch("/api/users/me", {
          baseURL: useRuntimeConfig().public.strapiUrl,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (user.value) {
          this.user = user.value;
          this.isAuthenticated = true;
          return user.value;
        }

        return null;
      } catch {
        this.user = null;
        this.isAuthenticated = false;
        return null;
      }
    },
  },
});
