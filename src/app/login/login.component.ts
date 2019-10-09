import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name;
  public password;
  public errorMsg = false;
  constructor(private http: HttpClient, private router: Router, private app: AppComponent) {

  }

  login() {
    console.log('Login() clicked !', this.name, this.password);

    if (this.name === undefined || this.password === undefined) {
      console.log('Enter values')
    }
    else {
      this.app.showHome = true;
      this.app.showLogin = false;
      const url = 'https://api.github.com/users/' + this.name;
      this.http.get(url).subscribe(res => {
        console.log(res)
      });

      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    console.log('btoa() =', btoa('sayeed'))
  }

}
