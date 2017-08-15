import { Component } from '@angular/core';
import { GetGitService } from './get-git.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username=""
  factor = []

  constructor(private _GetGitService: GetGitService) {}
  
  onSubmit() {
    console.log("submit")
    this._GetGitService.getgetGit(this.username)
    .then(data => {this.factor = data})
    .catch(err=>{console.log(err)})
  }
}
