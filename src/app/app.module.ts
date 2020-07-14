import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from 'src/video/video.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideosService } from './shared/services/videos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
