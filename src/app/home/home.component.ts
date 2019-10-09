import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public repoUrl = 'https://api.github.com/users/sayeedsharief/repos';
  public repoContentUrl = 'https://api.github.com/repos/sayeedsharief/EmployeeManagement/contents'
  public respositories;
  public repoContents;

  constructor(private router: Router, private app: AppComponent, private httpClient: HttpClient, private login: LoginComponent) { }

  ngOnInit() {
    this.httpClient.get(this.repoUrl).subscribe(res=> {
      this.respositories = res;
      console.log('Repos =', this.respositories);
      console.log('Name = ', this.login.name);
    })
  }

  showContents(repoName){
    console.log('Repo Name =', repoName)
    this.repoContentUrl = 'https://api.github.com/repos/sayeedsharief/' + repoName + '/contents';
    this.httpClient.get(this.repoContentUrl).subscribe( res => {
      this.repoContents = res;
      console.log('Repo Contents =', this.repoContents);
    })
  }

}
