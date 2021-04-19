<template>
  <v-alert :type="type" v-show="show">{{ message }}</v-alert>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      show: false,
      type: '',
      message: ''
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>
