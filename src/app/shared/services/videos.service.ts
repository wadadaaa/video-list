import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Video } from './videos.interface';

const BASE_URL = 'http://localhost:3000/videos_log';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor(private http: HttpClient) { }

  getAllVideoData() {
    return this.http.get(BASE_URL);
  }
}
