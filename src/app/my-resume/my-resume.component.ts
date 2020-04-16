import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public id:string;

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("View",this.id);
    if(this.id === "aboutMe"){
      document.getElementById(this.id).scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
    }else{
      document.getElementById(this.id).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    }

  }

}
