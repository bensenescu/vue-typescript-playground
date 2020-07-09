<template>
  <v-app>
    <v-main>
      <youtube-form />
      <video-list />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import YoutubeForm from './YoutubeForm.vue';
import VideoList from './VideoList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    YoutubeForm,
    VideoList,
  },
});
</script>
