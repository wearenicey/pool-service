import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MailserviceService } from '../../mailservice.service';
import { fadeInAnimation } from '../../animations/index';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent {
  public subscription: Subscription;



  constructor(private MailService: MailserviceService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() { }


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

        // console.log(data, "success");
        this.toastr.success(msg, '', {
          closeButton: false,
          positionClass: 'toast-top-right'



        });

      }, error => {
        console.error(error, "error");
      });
    setTimeout(() => this.infoForm.reset(),
      5000);

  }
  ngOnDestroy() {
  }
}