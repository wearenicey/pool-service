import { Component, OnInit, ViewChild, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { MailService } from '../../mail.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

//varijabla forme
  formData: any;
 
  public subscription: Subscription;
  public dataProcessDetail;


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private MailService: MailService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {


  }


// objekat gdje smjestaju selektovane vrijednosti
  selection = {};



// niz objekata untar forme chekbox-ovi
  websiteList: any = [
    {
      usluga: 'Konsultacije',
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

// validator forme
  form = this.formBuilder.group(
    {
      website: this.formBuilder.array([], [Validators.required]),

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

// sledeci korak untar forme
  nextStep() {
    if (this.variable < 2) {
      this.variable = this.variable + 1;
    }
    console.log(this.variable);
  }

// korak unazad untar forme
  backStep() {
    if (this.variable > 0) {
      this.variable = this.variable - 1;
    }
    console.log(this.variable);
  }

// ispitivanje da li target radi
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


  // event za promejnenju  vrijednost
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

// funkcija za slanje mejla sa podacima iz forme
  sendMail() {
    console.log(this.form.value);
    this.subscription = this.MailService.sendEmail(this.form.value).subscribe(data => {
      const msg = data.message;
      this.toastr.success(msg);
      // odgovor sa servera sa zakasnjenem od 2s radi boljeg ux
      setTimeout(() => window.location.reload(),
        2000);
      //greska sa servera
    }, error => {
      console.error(error, 'error');
    });

// formatiranje mejla u json i slanje na modemailer
    this.MailService.sendEmail(JSON.stringify(this.form.value));
    // this.router.navigate(['/contact'])
  }


  ngOnInit() {

  }


}
