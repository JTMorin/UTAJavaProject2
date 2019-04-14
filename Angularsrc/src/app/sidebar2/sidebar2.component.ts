import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  state: number = 1;
  toggleNav() {
    if (this.state) {
      document.getElementById("mySidebar").style.width = "200px";
      document.getElementById("button").style.right = "200px";
      document.getElementById("button").innerHTML = '->';
      this.state = 0;
    } else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("button").style.right = "0px";
      document.getElementById("button").innerHTML = '<-';
      this.state = 1;
    }
  }
  constructor() { }


  ngOnInit() {

  }

}
