import {
  Module,
  VuexModule,
  getModule,
  Mutation,
} from 'vuex-module-decorators';
import store from '../store';
import { Video } from '../../types';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'video',
  store,
})
class VideoModule extends VuexModule {
  videos: Video[] = [];

  @Mutation
  addVideo(video: Video) {
    this.videos.push(video);
  }
}

export default getModule(VideoModule);
