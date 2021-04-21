<template>
  <v-app>
    <v-main>
      <v-container align-center>
        <Header />

        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster">
          <router-view></router-view>
        </transition>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
