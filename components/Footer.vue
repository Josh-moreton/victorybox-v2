<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">© All rights reserved</div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Victorybox - Design by rwxt.org</strong>
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-youtube',
        'mdi-instagram',
      ],
    }),
  }
</script>