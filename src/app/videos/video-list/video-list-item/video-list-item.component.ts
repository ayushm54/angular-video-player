import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video-service.service';
import { Video } from 'src/app/shared/video.model';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input() video: Video;

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.videoService.updateActiveVideo(this.video);
  }
}
