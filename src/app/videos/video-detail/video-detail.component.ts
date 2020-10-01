import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoService } from 'src/app/shared/video-service.service';
import { Video } from 'src/app/shared/video.model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  activeVideo: Video;
  activeVideoSubscription: Subscription;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.activeVideoSubscription = this.videoService.activeVideoSubject.subscribe(
      (video: Video) => {
        if (video !== null) {
          this.activeVideo = video;
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.activeVideoSubscription) {
      this.activeVideoSubscription.unsubscribe();
    }
  }
}
