import { Video } from './video.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videoList: Video[] = [];
  activeVideo: Video;

  videosSubject = new BehaviorSubject<Video[]>(null);
  activeVideoSubject = new BehaviorSubject<Video>(null);

  constructor(private http: HttpClient) {}

  fetchVideos(query: string): any {
    this.http
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
          '&maxResults=50' +
          '&type=video' +
          '&key=' +
          environment.YOUTUBE_KEY
      )
      .subscribe((data: any) => {
        this.videoList = data.items.map((item) => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.high.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            moment(item.snippet.publishedAt).fromNow(),
            item.snippet.description
          );
        });
        this.videosSubject.next(this.videoList);
      });
  }

  updateActiveVideo(video: Video): any{
    this.activeVideo = video;
    this.activeVideoSubject.next(this.activeVideo);
  }
}
