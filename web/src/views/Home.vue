/* es-lint-disable */
<template>
  <v-sheet
    height="100vh">
  <v-container fill-height fluid>
    <v-row
      align="center"
      justify="center">
      <v-col
        style="max-width: 61.8%"
        align="center"
        justify="center"><h3>
          The Federal Reserve Everyone Network is a protocol for enabling permissionless fractional reserve banking.</h3>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center">
      <v-col
        style="max-width: 61.8%"
        align="center"
        justify="center"><h3>
          FREN attempts to peg 1:1 to DAI, responding to demand by awarding the best lenders with the right to print the most FREN in the form of loans, and to supply with the inverse</h3>
      </v-col>
    </v-row>
  </v-container>
  </v-sheet>
</template>
<script>
export default {
  components: {
  },

  data: () => ({
    phi: (1 + Math.sqrt(5)) / 2,
  }),
  methods: {
    changeDashboard($event) {
      this.main = this.$options.components[$event]
    },
  },
};
</script>
<style>
.theme--dark.v-application {
  color: gainsboro;
}

</style>
