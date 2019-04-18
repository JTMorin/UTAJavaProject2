import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: string;
  userName: string = null;

  constructor() { }

  ngOnInit() {
    this.loggedIn = sessionStorage.getItem('logged-in');
    this.userName = sessionStorage.getItem('username');
  }

  logout() {
    sessionStorage.setItem('logged-in', '0');
    sessionStorage.setItem('username', '');
    window.location.href = '/';
    
  }

}