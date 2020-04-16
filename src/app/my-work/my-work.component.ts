import { Component, OnInit } from '@angular/core';
import { MyWorkService } from './my-work.service';
import { IGitRepo } from './IGitRepo';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor(private myWorkService : MyWorkService) { }

public myWork : IGitRepo[];

  ngOnInit(): void {
    this.myWorkService.getMyWork().subscribe(data => {
      this.myWork = data;
    });

  }

}
