<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="340">
      <v-list class="pt-4">
        <v-list-item active-class="green--text" to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="green--text" to="/resume">
          <v-list-item-title>Resume</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="green--text" to="/portfolio">
          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="green--text" to="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar flat dense color="transparent">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Eric</span>
        <span class="green--text"> Hocking</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-sm-and-down">
        <v-btn to="/" active-class="green--text headline">Home</v-btn>
        <v-btn to="/resume" active-class="green--text headline">Resume</v-btn>
        <v-btn to="/portfolio" active-class="green--text headline">Portfolio</v-btn>
        <v-btn to="/contact" active-class="green--text headline">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style scoped>

</style>
