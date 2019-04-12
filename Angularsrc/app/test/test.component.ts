import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> 
  Hello {{myvar}}
  </h2>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myvar = 'apples';

  constructor() { }

  ngOnInit() {
  }

}
