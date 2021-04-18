<template>
  <v-app>
    <Header />

    <v-content>
      <v-container align-center>
        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
