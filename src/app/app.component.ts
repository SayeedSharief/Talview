import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public showLogin=true;
  public showHome=false;
  public showCapture = false;

  constructor(private http : HttpClient, private router: Router){

  }

  login(name, password){
    console.log('Login() clicked !', name, password);

    this.http.get('https://api.github.com/users/sayeedsharief').subscribe(res => {
      console.log(res)
    });

    this.router.navigate(['/home']);
  }
}
