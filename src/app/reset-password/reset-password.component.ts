import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  uuid: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // get param
        this.uuid = this.route.snapshot.queryParams.uuid;

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
  
      const data = {
        password: (document.querySelector('#pass') as HTMLInputElement).value,
        uuid: this.uuid
      };

      const self = this;
  
      const values = JSON.stringify(data);
  
      $.ajax({
        url: this.APP_URL + '/insertUser2.app',
        type: 'POST',
        data: values,
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        processData: false,
        success(data) {
          const response = JSON.parse(data);
          console.log(response);

          if(response.success)
          {
            self.router.navigate(['/result'], { state: { message: 'Change Password Success!!' } });
          }
          else{
            self.router.navigate(['/result'], { state: { message: 'Change Password failure!!' } });
          }
        },
        error(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    }

    validate(input) {

      let check = true;
      if ((input as HTMLInputElement).id === 'pass') {
        if ((input as HTMLInputElement).value.length < 8) {
          this.showValidate(input, 'Password must be 8 characters long.');
          check = false;
        }
      } else if ((input as HTMLInputElement).id === 'passRe') {
        if ((input as HTMLInputElement).value != (document.querySelector('#pass') as HTMLInputElement).value) {
          this.showValidate(input, 'Passwords do not match.');
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