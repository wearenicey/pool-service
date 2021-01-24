import {Component, OnInit, ViewChild, Input, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn} from '@angular/forms';
import {MailService} from '../../mail.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // activeStepIndex: number;
  // currentFormContent: Array<any>;
  formData: any;
  // formFields: Array<Array<string>>;
  // masterFormFields: Array<string>;
  // stepItems: Array<any>;
  // masterForm: Array<FormGroup>;

  public subscription: Subscription;
  public dataProcessDetail;


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private MailService: MailService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {


  }

  get f() {

    return this.form.get('gender');

  }

  selection = {};


  //   form: FormGroup;


  websiteList: any = [
    {
      usluga: 'Izgradnja',
      imageUrl: 'assets/img/kontakt/checkbox-izgradnja.jpg',
      id: 'Izgradnja',
      isChecked: false
    },
    {
      usluga: 'Projektovanje',
      imageUrl: 'assets/img/kontakt/checkbox-projektovanje.jpg',
      id: 'Projektovanje',
      isChecked: false
    },
    {
      usluga: 'Renoviranje',
      imageUrl: 'assets/img/kontakt/checkbox-renoviranje.jpg',
      id: 'Renoviranje',
      isChecked: false
    },
    {
      usluga: 'Odrzavanje',
      imageUrl: 'assets/img/kontakt/checkbox-odrzavanje.jpg',
      id: 'Odrzavanje',
      isChecked: false
    },
    {
      usluga: 'Dodatna Oprema',
      imageUrl: 'assets/img/kontakt/checkbox-dodatna-oprema.jpg',
      id: 'Dodatna Oprema',
      isChecked: false
    },

  ];


  variable = 0;


  multi = false;


  // @ViewChild(ToastContainerDirective, { static: true })
  // toastContainer: ToastContainerDirective;


  form = this.formBuilder.group(
    {
      website: this.formBuilder.array([], [Validators.required]),

      gender: ['', [Validators.required]],
      name: ['', [
        Validators.minLength(3)
      ]
      ],
      email: ['', [
        Validators.email,
      ]],

      select: ['', [Validators.required]],
      telefon: ['', [Validators.minLength(9), Validators.required]],
      city: ['', [Validators.minLength(2), Validators.required]],
      text: ['', [Validators.required]]
    }
  );


  nextStep() {
    if (this.variable < 3) {
      this.variable = this.variable + 1;
    }
    console.log(this.variable);
  }


  backStep() {
    if (this.variable > 0) {
      this.variable = this.variable - 1;
    }
    console.log(this.variable);
  }


  changeGender(e) {
    console.log(e.target.value);
  }


  onCheckboxChange(e) {

    const website: FormArray = this.form.get('website') as FormArray;


    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      website.removeAt(index);
    }
  }


  // event handler for the select element's change event
  selectChangeHandler(event: any) {
    // update the ui
    console.log(event.target.value);
  }


  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get telefon() {
    return this.form.get('telefon');
  }

  get city() {
    return this.form.get('city');
  }

  get text() {
    return this.form.get('text');
  }


  // TODO: add interfaces and enums wherever appropriate

  // this.formContent = LISTA_KORAKA;
  // this.formData = {};


  sendMail() {
    console.log(this.form.value);
    this.subscription = this.MailService.sendEmail(this.form.value).subscribe(data => {
      const msg = data.message;
      this.toastr.success(msg);
      // console.log(data, "success");
      setTimeout(() => this.router.navigate(['']),
        2000);
    }, error => {
      console.error(error, 'error');
    });


    this.MailService.sendEmail(JSON.stringify(this.form.value));
    // this.router.navigate(['/contact'])
  }


  ngOnInit() {

  }


}
