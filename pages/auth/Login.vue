<script setup lang="ts">
import Logo from "@/layouts/full/logo/LogoDark.vue";
import AuthLogin from "../authForms/AuthLogin.vue";
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useTheme } from "vuetify";

// Use Vuetify's theme detection
const theme = useTheme();
const authStore = useAuthStore();

// Form refs
const form = ref();
const loading = ref(false);
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const valid = ref(false);

// Logo paths
const logoLight = "/images/logos/black.png";
const logoDark = "/images/logos/white.png";
const currentLogo = computed(() =>
  theme.global.current.value.dark ? logoDark : logoLight
);

// Validation rules
const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const passwordRules = [
  (v: string) => !!v || "Password is required",
  (v: string) => v.length >= 6 || "Password must be at least 6 characters",
];

async function handleSubmit() {
  const { valid } = await form.value.validate();
  if (valid) {
    loading.value = true;
    try {
      await authStore.login(email.value, password.value);
      // Redirect after successful login
      navigateTo("/");
    } catch (error) {
      // Handle error
    } finally {
      loading.value = false;
    }
  }
}
</script>

<template>
  <v-container fluid class="fill-height bg-surface">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-2 rounded-lg">
          <v-card-text class="pa-6">
            <!-- Logo -->
            <div class="text-center mb-6">
              <v-img
                :src="currentLogo"
                alt="Victory Box"
                height="80"
                contain
                class="mx-auto"
              />
              <h2 class="text-h4 font-weight-bold mt-4">Welcome Back</h2>
              <p class="text-body-1 text-medium-emphasis mt-2">
                Sign in to your account to continue
              </p>
            </div>

            <!-- Login Form -->
            <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                required
              />

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                required
              />

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                :loading="loading"
                :disabled="!valid"
                class="mt-6"
              >
                Sign In
              </v-btn>
            </v-form>

            <div class="text-center mt-6">
              <p class="text-body-2 text-medium-emphasis">
                Don't have an account?
                <v-btn
                  variant="text"
                  to="/auth/register"
                  color="primary"
                  class="px-2"
                >
                  Sign up
                </v-btn>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  max-width: 100%;
}
</style>
