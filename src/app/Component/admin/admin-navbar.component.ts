import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent implements OnInit {
  username = '';
  constructor(public coo: CookieService, private router: Router) {}

  ngOnInit(): void {
    if (this.coo.get('UserName') != '') {
      if (this.coo.get('Role').localeCompare('Admin')) {
        this.router.navigateByUrl('/movies');
      } else {
        // this.router.navigateByUrl('/Admin/allusers');
        this.username = this.coo.get('UserName');
      }
    } else {
      this.router.navigateByUrl('/Login');
    }
  }

  logout() {
    this.coo.deleteAll('/');
    this.router.navigateByUrl('/Login');
  }
}
