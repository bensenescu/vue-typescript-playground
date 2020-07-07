<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row>
        <v-flex xs12 class="px-5">
          <v-text-field v-model="video.embedLink" label="Embed Link" required />
          <v-textarea v-model="video.description" label="Description" />
          <v-btn v-on:click="onSubmit">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'youtube-form',
  data() {
    return {
      valid: true,
      video: {},
    };
  },
  methods: {
    ...mapMutations({
      addVideo: 'addVideo',
    }),
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        this.addVideo(this.video);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
