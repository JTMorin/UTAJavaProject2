import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
              '../styles/global/common.css',
              '../styles/global/login.css']
})
export class RegisterComponent implements OnInit {

  constructor(private elem: ElementRef) { 

  }

  ngOnInit() {
  }
  
}