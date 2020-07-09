<template>
  <v-list>
    <v-list-item v-for="(video, index) in videos" :key="index">
      <video-item :video="video" />
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import VideoStore from './store/modules/video';
import { Video } from './types';
import VideoItem from './VideoItem.vue';

export default Vue.extend({
  name: 'video-list',
  components: {
    VideoItem,
  },
  computed: {
    videos(): Array<Video> {
      return VideoStore.videos;
    },
  },
});
</script>
