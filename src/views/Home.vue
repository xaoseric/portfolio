<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <h2 class="green--text">Eric Hocking</h2>
    <vue-typer
        :text="typerText"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="erasing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="250"
        erase-style="select-back"
        :erase-on-complete="false"
        caret-animation="smooth"
    ></vue-typer>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Eric's Space"
  },
  comments: {
    "vue-typer": VueTyper
  },
  data() {
    return {
      typerText: ["System Administrator", "Software Developer", "Backend Developer"]
    }
  }
}
</script>
