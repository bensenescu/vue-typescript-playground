<template>
  <v-list>
    <v-list-item v-for="(video, index) in videos" :key="index">
      <video-item :video="video" />
    </v-list-item>
  </v-list>
</template>

<script>
import VideoItem from './VideoItem.vue';

export default {
  name: 'video-list',
  components: {
    VideoItem,
  },
  computed: {
    videos() {
      return this.$store.state.videos;
    },
  },
};
</script>
