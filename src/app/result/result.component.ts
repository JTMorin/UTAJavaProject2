import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  message: string;

  constructor(private router: Router) {
    this.message = this.router.getCurrentNavigation().extras.state.message;
  }

  ngOnInit() {
  }

}