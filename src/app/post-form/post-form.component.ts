import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';
  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  onSubmit(event) {
    event.preventDefault();

    const fields = document.getElementsByClassName('.validate-form .input100') as HTMLCollectionOf<HTMLInputElement>;
    let failed = false;

    for (const input in fields) {
      if (!this.validate(input)) {
        failed = true;
      }
    }
    if (failed) {
      return;
    }

    const values = {
      authorId: sessionStorage.getItem('userId'),
      postBody: (document.querySelector('#exampleFormControlTextarea1') as HTMLInputElement).value,
      userId: sessionStorage.getItem('userId')

    };

    const values2 = JSON.stringify(values);

    const self = this;

    console.log('these: ' + values2);

    $.ajax({
      url: this.APP_URL + '/insertPost.app',
      type: 'POST',
      data: values2,
      contentType: 'application/json; charset=utf-8',
      async: false,
      cache: false,
      processData: false,
      success: function (data) {

        const response = JSON.parse(data);
        console.log(response);
        if (response.success) {
          //self.router.navigate(['/result'], { state: { message: 'Register Success!!' } });
        } else {
          //self.router.navigate(['/result'], { state: { message: 'Register Fail!!'  } });
        }
        },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }
  validate(input) {

    let check = true;
    if ((input as HTMLInputElement).id === 'exampleFormControlTextarea1') {
      if ((input as HTMLInputElement).value.length < 8) {
        this.showValidate(input, 'Message must be 8 characters long.');
        check = false;
      }
    }

    return check;
  }

  showValidate(input, message) {
    const thisAlert = (input as HTMLInputElement).parentElement;
    thisAlert.setAttribute('data-validate', message);
    thisAlert.classList.add('alert-validate');
  }

  hideValidate(input) {
    const thisAlert = (input as HTMLInputElement).parentElement;
    thisAlert.classList.remove('alert-validate');
  }

  focus(event) {
    const input = (event as Event).target;
    this.hideValidate(input);
  }

  blur(event) {
    const input = (event as Event).target;
    this.validate(input);
  }

}
