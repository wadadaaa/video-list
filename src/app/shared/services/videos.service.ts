import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private model = 'data'
  private videos = {
    "data": {
      "videos_log_by_ids": [
        {
          "id": "dJba7w1C9Vk",
          "platform": "ok",
          "published": "2020-07-11T08:30:00+00:00",
          "video_id": "ok.dJba7w1C9Vk",
          "operations_data": {
            "detection_date": "2020-07-12T10:29:33+00:00",
            "crawler_type": "textual",
            "text_queries": [
              "fortnite 2"
            ]
          }
        }
      ]
    }
  }
  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(`${BASE_URL}${this.model}`);
    // return this.videos.data;
  }
}
