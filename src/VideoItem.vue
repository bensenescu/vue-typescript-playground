<template>
  <v-card>
    <iframe
      width="560"
      height="315"
      :src="video.embedLink"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
    <div class="text-h3" v-text="video.description" />
    <v-row>
      <v-col><v-btn v-on:click="sub(dec)">-{{dec}}</v-btn></v-col>
      <v-col><div class="text-body-2" v-text="counter" /></v-col>
      <v-col><v-btn v-on:click="add(inc)">+{{inc}}</v-btn></v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'video-item',
  props: {
    video: { type: Object, required: true },
  },
  data() {
    return {
      counter: 0,
      inc: 3,
      dec: 1,
    };
  },
  methods: {
    sub(val) {
      this.counter = this.counter - val;
    },
    add(val) {
      this.counter = this.counter + val;
    },
  },
};
</script>
