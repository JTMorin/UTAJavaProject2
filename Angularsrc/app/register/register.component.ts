import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
              '../styles/global/common.css',
              '../styles/global/login.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User('Robby', 'Robby', 'Robby', 'Robby', 'Robby');

  constructor(private _registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {

    this._registerService.enroll(this.userModel).subscribe(
      data => console.log('success ', data),
      error => console.log('failed', error)
    )

  }

}
