import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from 'src/video/video.component';

const routes: Routes = [
  {path: 'video', component: VideoComponent},
  { path: '', redirectTo: 'video', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
