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

<script lang="ts">
import Vue from 'vue';
import { getModule } from 'vuex-module-decorators';
import VideoStore from './store/modules/video';
import { Video } from './types';

export default Vue.extend({
  name: 'youtube-form',
  data() {
    return {
      valid: true,
      video: {} as Video,
    };
  },
  methods: {
    async onSubmit(evt: Event) {
      evt.preventDefault();
      try {
        VideoStore.addVideo(this.video);
        // this.VideoModule.addVideo(this.video);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
