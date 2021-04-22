<template>
<v-layout row wrap justify-center align-center class="mt-4 pt-2">
  <v-card href="https://github.com/LoboBrowser/LoboBrowser" target="_blank"
          max-width="250px" class="pa-2">
    <v-img :src="getProjectImg('lobobrowser.png')" />
    <v-card-title>LoboBrowser</v-card-title>
    <v-card-subtitle>Maintainer & Lead Developer</v-card-subtitle>
    <v-card-text>I took over as a maintainer of the LoboBrowser project a couple years ago</v-card-text>
  </v-card>
</v-layout>
</template>

<script>
export default {
  name: "Portfolio",
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "%s - Eric's Space"
  },
  methods: {
    getProjectImg(img) {
      return require('../assets/images/projects/'+img);
    }
  }
}
</script>

<style scoped>

</style>
