<template>
  <v-container
    fluid
    class="pa-4 px-4 px-md-16"
    :class="[
      $vuetify.theme.current.dark ? 'bg-grey-darken-3' : 'bg-grey-lighten-2',
    ]">
    <v-row
      align="center"
      justify="space-between"
      class="charity-row"
      no-gutters>
      <!-- Left side - Charity Logos -->
      <v-col cols="auto" class="d-flex align-center charity-logos">
        <span
          class="text-h6 font-weight-bold me-4 text-wrap font-parkinsans"
          style="max-width: 100px">
          Charities we support:
        </span>
        <div class="d-flex align-center gap-4 logos-scroll">
          <v-img
            src="/images/bhf.png"
            alt="British Heart Foundation"
            height="100"
            contain
            class="charity-logo" />
          <v-img
            src="/images/gosh.png"
            alt="Great Ormond Street Hospital"
            height="100"
            contain
            class="charity-logo" />
        </div>
      </v-col>

      <!-- Right side - Trustpilot Logo -->
      <v-col
        cols="auto"
        class="d-flex justify-end"
        charity-logos
        style="min-width: 120px">
        <v-img
          src="/images/trustpilot-logo.png"
          alt="Trustpilot"
          height="100"
          contain
          class="charity-logo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.charity-row {
  flex-wrap: nowrap !important;
  overflow-x: auto;
  scrollbar-width: none;
}

.charity-row::-webkit-scrollbar {
  display: none;
}

.logos-scroll {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
}

.charity-logo {
  min-width: 200px;
}

@media (max-width: 600px) {
  .text-body-1 {
    font-size: 0.875rem;
  }
}
.font-parkinsans {
  font-family: "Parkinsans", sans-serif !important;
}
</style>
