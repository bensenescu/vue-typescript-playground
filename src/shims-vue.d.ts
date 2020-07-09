/* eslint-disable import/extensions */
declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'vuetify/lib' {
  // eslint-disable-next-line import/no-unresolved
  import 'vuetify/types/lib';
}
