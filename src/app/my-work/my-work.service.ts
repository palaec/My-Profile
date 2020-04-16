import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGitRepo } from './IGitRepo';
import { Observable } from 'rxjs';

@Injectable()
export class MyWorkService {

  constructor(private http: HttpClient) {}

  private _gitRepoUrl: string = "https://api.github.com/users/palaec/repos";

  getMyWork(): Observable<IGitRepo[]>{
    return this.http.get<IGitRepo[]>(this._gitRepoUrl);
  }

}
