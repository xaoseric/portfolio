<template>
<v-layout row justify-center align-center wrap class="mt-4 pt-2">
  <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
    <h2 class="mb-4 pl-4 pt-2">Education</h2>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item color="green" small>
          <v-layout pt-3>
            <v-flex xs4>
              <div class="caption font-weight-bold green--text">June 2013 -</div>
              <div class="caption font-weight-bold green--text">2017</div>
            </v-flex>
            <v-flex class="pl-2">
              <strong>Associates in Computer Science</strong>
              <div class="caption mb-2">Macomb Community College</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-flex>
  <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
    <h2 class="mb-4 pl-4">Experience</h2>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item color="green" small>
          <v-layout pt-3>
            <v-flex xs4>
              <div class="caption font-weight-bold green--text">April 2018 -</div>
              <div class="caption font-weight-bold green--text">Present</div>
            </v-flex>
            <v-flex class="pl-2">
              <strong>System Administrator/Support Engineer</strong>
              <div class="caption mb-2">Henderson Communications</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: "Resume"
}
</script>

<style scoped>

</style>
