import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { HttpClientModule } from '@angular/common/http'
import { MyWorkService } from './my-work/my-work.service';
import { HeaderComponent } from './header/header.component';
import { MyResumeComponent } from './my-resume/my-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    MyWorkComponent,
    HeaderComponent,
    MyResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyWorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
