import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/shared/services/videos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  styles: [`
  :host {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  `]
})
export class VideoComponent implements OnInit {
  welcomeMessage = "Video List";  
  videos = null;

  constructor(private videosService: VideosService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videos = this.videosService.getAllVideoData()
    .subscribe(videos => this.videos = videos)
  }

  getEmbedUrl(videoUrl: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

}