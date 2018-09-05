import { Component } from '@angular/core';
import { LoginService } from './login/loginservice/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csr-wow';
  constructor(private app: LoginService, private http: HttpClient, private router: Router) {
  }
  authenticated() { return this.app.authenticated; }

  logout() {
    this.http.post('logout', {}).pipe(
      finalize(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
      })).subscribe();
  }
}
