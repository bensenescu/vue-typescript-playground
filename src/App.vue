<template>
  <v-app>
    <v-main>
      <youtube-form />
      <video-list />
    </v-main>
  </v-app>
</template>

<script>
import YoutubeForm from './YoutubeForm.vue';
import VideoList from './VideoList.vue';

export default {
  name: 'App',
  components: {
    YoutubeForm,
    VideoList,
  },
};
</script>
