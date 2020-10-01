import { VideoService } from './../../shared/video-service.service';
import { Video } from './../../shared/video.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit, OnDestroy {
  videoList: Video[] = [];
  page = 1;
  activeVideo: Video;

  videoListSubscription: Subscription;
  activeVideoSubscription: Subscription;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoListSubscription = this.videoService.videosSubject.subscribe(
      (videos: Video[]) => {
        if (videos !== null) {
          this.videoList = videos;
          this.videoService.updateActiveVideo(this.videoList[0]);
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.videoListSubscription) {
      this.videoListSubscription.unsubscribe();
    }
  }
}
