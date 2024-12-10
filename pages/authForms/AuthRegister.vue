<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useTheme } from "vuetify";

const theme = useTheme();
const authStore = useAuthStore();

// Form refs
const form = ref();
const loading = ref(false);
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const firstName = ref("");
const lastName = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
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

const nameRules = [
  (v: string) => !!v || "Name is required",
  (v: string) => v.length >= 2 || "Name must be at least 2 characters",
];

const passwordRules = [
  (v: string) => !!v || "Password is required",
  (v: string) => v.length >= 6 || "Password must be at least 6 characters",
];

const confirmPasswordRules = [
  (v: string) => !!v || "Please confirm your password",
  (v: string) => v === password.value || "Passwords must match",
];

async function handleSubmit() {
  const { valid } = await form.value.validate();
  if (valid) {
    loading.value = true;
    try {
      await authStore.register({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
      });
      navigateTo("/auth/login");
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  }
}

definePageMeta({
  layout: "auth",
});
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
              <h2 class="text-h4 font-weight-bold mt-4">Create Account</h2>
              <p class="text-body-1 text-medium-emphasis mt-2">
                Sign up to get started
              </p>
            </div>

            <!-- Register Form -->
            <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="firstName"
                    :rules="nameRules"
                    label="First Name"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    required
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="lastName"
                    :rules="nameRules"
                    label="Last Name"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    required
                  />
                </v-col>
              </v-row>

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

              <v-text-field
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                label="Confirm Password"
                prepend-inner-icon="mdi-lock-check"
                :type="showConfirmPassword ? 'text' : 'password'"
                :append-inner-icon="
                  showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                "
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
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
                Create Account
              </v-btn>
            </v-form>

            <div class="text-center mt-6">
              <p class="text-body-2 text-medium-emphasis">
                Already have an account?
                <v-btn
                  variant="text"
                  to="/auth/login"
                  color="primary"
                  class="px-2"
                >
                  Sign in
                </v-btn>
              </p>
            </div>
          </v-card-text>
        </v-card>

        <div class="text-center mt-4">
          <v-btn
            to="/"
            variant="text"
            color="primary"
            prepend-icon="mdi-arrow-left"
            class="text-body-1"
          >
            Back to Home
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  max-width: 100%;
}
</style>
