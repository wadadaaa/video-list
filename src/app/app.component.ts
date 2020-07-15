import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'video-test';
  links = [
    { path: '/video', icon: 'video', title: 'Video' }
  ];
}
