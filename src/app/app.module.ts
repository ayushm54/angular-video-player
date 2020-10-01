import { VideoSafePipe } from './shared/video.safe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchBoxComponent } from './nav/search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { VideoListItemComponent } from './videos/video-list/video-list-item/video-list-item.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBoxComponent,
    VideosComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoListItemComponent,
    VideoSafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
