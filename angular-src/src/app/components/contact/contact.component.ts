import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MailserviceService } from '../../mailservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public subscription: Subscription;


  constructor(private MailService: MailserviceService, private fb: FormBuilder) { }




  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ],
    subject: ['', [
      Validators.required,
      Validators.minLength(5)
    ]
    ],

    message: ['', [
      Validators.required,
      Validators.minLength(20)
    ]
    ],


  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }
  get subject() { return this.infoForm.get('subject'); }
  get message() { return this.infoForm.get('message'); }



  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.MailService.sendEmail(this.infoForm.value).
      subscribe(data => {
        let msg = data['message']
        alert(msg);
        // console.log(data, "success");
      }, error => {
        console.error(error, "error");
      });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}