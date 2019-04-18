import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: any; 

  state: number = 1;
  toggleNav() {
    if (this.state) {
      document.getElementById("mySidebar").style.width = "200px";
      document.getElementById("button").style.right = "200px";
      document.getElementById("button").innerHTML = 'Search Friends ⮞';
      this.state = 0;
    } else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("button").style.right = "0px";
      document.getElementById("button").innerHTML = 'Search Friends ⮜';
      this.state = 1;
    }
  }
  constructor() { }


  ngOnInit() {
    this.user = sessionStorage.getItem('username');
    console.log(this.user);
    // if (this.user) {
    //   this.toggleNav();
    // };
  }

}
