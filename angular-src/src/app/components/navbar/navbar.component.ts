import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private http: Http,
    public authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() { }

  onLogoutClick() {

    this.authService.logout().subscribe(res => {
      if (res.success) {
        this.authService.testLogin = false;
        this.flashMessage.show('You are logged out', {
          cssClass: 'alert-success',
          timeout: 3000
        });
      }
    });
  }

}
