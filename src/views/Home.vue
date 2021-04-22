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

    <v-flex xs12 sm6 md4 lg4 xl4 class="mt-3">
      <v-card flat color="transparent" max-width="500px">
        <v-card-title>
          <h3 class="headline mb-0">
            <span>About</span>
            <span class="green--text"> Me</span>
          </h3>
        </v-card-title>
        <v-card-text>
          Hello, I'm Eric Hocking. I'm a System Administrator and self taught
          developer who is passionate about technology.
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn fab href="https://github.com/xaoseric" target="_blank">
            <v-icon>fab fa-github</v-icon>
          </v-btn>
          <v-btn fab href="https://www.linkedin.com/in/eric-hocking-4a5943123/" target="_blank">
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
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

<style>
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}
.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}

</style>
