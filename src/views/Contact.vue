<template>
<v-container grid-list-xl>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md6 lg6 xl6>
      <h2 class="pb-4 mt-2">
        <span>Get In</span>
        <span class="green--text"> Touch</span>
      </h2>

      <v-alert type="success" v-show="success">Thanks for your submission!</v-alert>

      <form method="POST" action="https://formspree.io/f/myylzjdl" v-on:submit.prevent="submit">
        <v-text-field
            name="name"
            color="green"
            background-color="transparent"
            v-model="name"
            :error-messages="nameErrors"
            label="Name"
            required
            @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          type="email"
          color="green"
          background-color="transparent"
          name="email"
          v-model="email"
          :error-messages="emailErrors"
          label="Email"
          required
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-textarea
          color="green"
          background-color="transparent"
          :counter="10000"
          :error-messages="bodyErrors"
          v-model="body"
          label="Message"
          name="body"
          @blur="$v.body.$touch()"
        ></v-textarea>
        <v-btn
          @click="submit"
          type="submit"
          color="blue"
          class="white--text mr-2"
          :disabled="(body.length<=20)"
          rounded
          >Send Message</v-btn>
        <v-btn rounded @click="clear">Clear</v-btn>
      </form>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'
import axios from 'axios';

export default {
  metaInfo: {
    title: "Contact",
    titleTemplate: "%s - Eric's Space"
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(100) },
    email: { required, email },
    body: { required, minLength: minLength(20) }
  },
  data() {
    return {
      name: "",
      email: "",
      body: "",
      success: false
    }
  },
  methods: {
    submit() {
      this.$v.$touch();

      axios({
        url: 'https://formspree.io/f/myylzjdl',
        method: 'post',
        headers: {
          'Accept': 'application/json'
        },
        data: {
          name: this.name,
          email: this.email,
          message: this.body
        }
      }).then(() => {
        this.success = true;
        this.clear();

        setTimeout(this.resetAlert, 5000)
      }).catch((err) => {
        console.log(err);
      })
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    },
    resetAlert() {
      this.success = false;
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
          errors.push("Name must be at most 100 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be a valid email.");
      !this.$v.email.required && errors.push("Email is required");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
          errors.push("Message must be at least 20 characters long.");
      !this.$v.body.required && errors.push("Message is required");
      return  errors;
    }
  }
}
</script>

<style scoped>

</style>
