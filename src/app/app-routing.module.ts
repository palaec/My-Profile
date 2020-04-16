import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyResumeComponent } from './my-resume/my-resume.component';


const routes: Routes = [
  {path:'' , component:MyWorkComponent},
  {path:'myResume/:id' , component:MyResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
