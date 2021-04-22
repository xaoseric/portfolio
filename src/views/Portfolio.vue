<template>
<v-layout row wrap justify-center align-center class="mt-4 pt-2">
  <v-card href="https://github.com/LoboBrowser/LoboBrowser" target="_blank"
          max-width="250px" class="pa-2 mr-2 mb-2">
    <v-img :src="getProjectImg('lobobrowser.png')" />
    <v-card-title>LoboBrowser</v-card-title>
    <v-card-subtitle>Maintainer & Lead Developer</v-card-subtitle>
    <v-card-text>I took over as a maintainer of the LoboBrowser project a couple years ago</v-card-text>
  </v-card>
  <v-card href="https://github.com/holoirc/HoloIRC" target="_blank"
          max-width="250px" class="pa-2 mr-2 mb-2">
    <v-img :src="getProjectImg('holoirc.png')" max-height="120" />
    <v-card-title>HoloIRC</v-card-title>
    <v-card-subtitle>Maintainer & Lead Developer</v-card-subtitle>
    <v-card-text>HoloIRC is an open source Android IRC app that I forked and updated to run
    on modern versions of Android.</v-card-text>
  </v-card>
  <v-card href="https://github.com/skimurio/Skimur" target="_blank"
          max-width="250px" class="pa-2 mr-2 mb-2">
    <v-img max-height="120" />
    <v-card-title>Skimur</v-card-title>
    <v-card-subtitle>Maintainer & Lead Developer</v-card-subtitle>
    <v-card-text>Skimur is an open source C# implementation of Reddit. I forked the old version of
    it and updated it to run on .NET Core 3.1</v-card-text>
  </v-card>
  <v-card href="https://github.com/PyDNS/PyDNS" target="_blank"
          max-width="250px" class="pa-2 mr-2 mb-2">
    <v-card-title>PyDNS</v-card-title>
    <v-card-subtitle>Maintainer & Lead Developer</v-card-subtitle>
    <v-card-text>Python 3 based dns server, currently a work in progress</v-card-text>
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
