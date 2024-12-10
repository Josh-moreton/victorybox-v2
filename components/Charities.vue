<template>
  <v-container
    fluid
    class="pa-4 px-4 px-md-16"
    :class="[
      $vuetify.theme.current.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-2',
    ]"
  >
    <v-row align="center" justify="space-between">
      <!-- Left side: Charity logos -->
      <v-col cols="12" sm="6" class="d-flex align-center justify-start">
        <!-- Added justify-start -->
        <span
          class="text-h6 font-weight-bold font-parkinsans me-4 text-wrap"
          style="max-width: 150px"
        >
          Charities we support:
        </span>
        <v-img
          src="/images/bhf.png"
          alt="British Heart Foundation"
          height="60"
          width="60"
          contain
          class="charity-logo mx-2"
        />
        <v-img
          src="/images/gosh.png"
          alt="Great Ormond Street Hospital"
          height="60"
          width="60"
          contain
          class="charity-logo mx-2"
        />
      </v-col>

      <!-- Right side: Trustpilot -->
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <v-img
          src="/images/trustpilot-logo.png"
          alt="Trustpilot"
          height="60"
          width="120"
          contain
          class="charity-logo"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.charity-logo {
  transition: transform 0.3s ease;
}
.charity-logo:hover {
  transform: scale(1.1);
}
</style>
