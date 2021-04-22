<template>
<v-layout column justify-center align-center wrap class="mt-4 pt-2">
  <v-layout row>
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
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Experience</h2>
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

  <h2 class="mt-4">
    <span>My</span>
    <span class="green--text"> Skills</span>
  </h2>

  <div class="d-flex flex-wrap flex-row mt-3">
    <v-card class="mr-3 mb-2 pa-2" width="125" v-for="skill in skills" v-bind:key="skill.name">
      <v-img class="imgLogo mt-2" :src="getImgUrl(skill.image)" />
      <v-card-title class="justify-center align-center">{{ skill.name }}</v-card-title>
    </v-card>
  </div>

  <h2 class="mt-4">
    <span>My</span>
    <span class="green--text"> Certifications</span>
  </h2>

  <div class="d-flex flex-wrap flex-fow mt-3">
    <v-card class="mr-3 mb-2 pa-2" width="125" href="https://training.fortinet.com/badges/badge.php?hash=d739bd0fa413b181dc8b8368af7515f180613475" target="_blank">
      <v-img width="120px" :src="getCertImg('fortinet/1-associate-logo.png')" />
    </v-card>
    <v-card class="mr-3 mb-2 pa-2" width="125" href="https://training.fortinet.com/badges/badge.php?hash=8d45b4133a1808576d7b975e159711026c14efed" target="_blank">
      <v-img width="120px" :src="getCertImg('fortinet/2-associate-logo.png')" />
    </v-card>
    <v-card class="mr-3 mb-2 pa-2" width="125" href="https://training.fortinet.com/badges/badge.php?hash=8a09285106704259214b8209f455a6b7ea9e5a6b" target="_blank">
      <v-img width="120px" :src="getCertImg('fortinet/3-associate-logo.png')" />
    </v-card>
  </div>
</v-layout>
</template>

<script>
export default {
  name: "Resume",
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s - Eric's Space"
  },
  data() {
    return {
      skills: [
        {
          name: 'C#',
          image: 'Csharp.png'
        },
        {
          name: 'Java',
          image: 'java.png'
        },
        {
          name: 'PHP',
          image: 'php.png'
        },
        {
          name: 'Android',
          image: 'android.png'
        },
        {
          name: 'Laravel',
          image: 'laravel.png'
        },
        {
          name: 'VueJS',
          image: 'vuejs.png'
        },
        {
          name: 'Linux',
          image: 'linux.png'
        }
      ]
    }
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/images/logos/'+img);
    },
    getCertImg(img) {
      return require('../assets/images/certs/'+img);
    }
  }
}
</script>

<style scoped>
.imgLogo {
  max-width: 120px;
}
</style>
