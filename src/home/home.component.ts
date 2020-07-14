import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/shared/services/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeMessage = "Video List";  
  // videoData = [
  //     { title: 'Hello Video loooosers' },
  // ];
  videos = null;

  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.videos = this.videosService.all()
    .subscribe(videos => this.videos = videos)
  }

}