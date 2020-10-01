import { VideoService } from './../../shared/video-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  constructor(
    private videoService: VideoService
  ) {}

  ngOnInit(): void {}

  search(query: string): void {
    this.videoService.fetchVideos(query);
  }
}
