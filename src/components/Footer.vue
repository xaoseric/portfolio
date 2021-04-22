<template>
<v-footer :fixed="fixedFooter" class="mt-3">
  Developed with
  <v-icon small color="red" class="ml-2 mr-2">fas fa-heart</v-icon> and
  <v-icon small color="green" class="ml-2">fab fa-vuejs</v-icon>
  <v-spacer></v-spacer>
  &copy; {{ new Date().getFullYear() }}
</v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    fixedFooter() {
      if (this.$route.path === '/' || this.$route.path === '/contact') {
        return true;
      } else {
        return false;
      }
    }
  }

}
</script>
