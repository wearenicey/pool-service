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

	// activeStepIndex: number;
	// currentFormContent: Array<any>;
	formData: any;
	// formFields: Array<Array<string>>;
	// masterFormFields: Array<string>;
	// stepItems: Array<any>;
	// masterForm: Array<FormGroup>;

	public subscription: Subscription;
	public dataProcessDetail;



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
			imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
			id: 'Izgradnja',
			isChecked: false
		},
		{
			usluga: 'Projektovanje',
			imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
			id: 'Projektovanje',
			isChecked: false


		},
		{
			usluga: 'Renoviranje',
			imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
			id: 'Renoviranje',
			isChecked: false


		},
		{
			usluga: 'Odrzavanje',
			imageUrl: 'https://www.volimsvojdom.rs/wf-proizvodiPics/89179/bazen-za-decu-steel-pool-bestway-300x201x66cm-56404-1.jpg',
			id: 'Odrzavanje',
			isChecked: false


		},
		{
			usluga: 'Dodatna Oprema',
			imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
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
		if (this.variable > 0)
			this.variable = this.variable - 1;
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



	//event handler for the select element's change event
	selectChangeHandler(event: any) {
		//update the ui
		console.log(event.target.value);

	}



	get name() { return this.form.get('name'); }
	get email() { return this.form.get('email'); }
	get telefon() { return this.form.get('telefon'); }
	get city() { return this.form.get('city'); }
	get text() { return this.form.get('text'); }


	// submitForm() {
	//   this.formSubmit.emit(this.form);
	//   console.log(JSON.stringify(this.form));
	//   // this.MailService.sendEmail(this.formData);
	//   this.formData.reset();




	//   console.log('Inputi', this.form.value);


	// }


	// TODO: add interfaces and enums wherever appropriate

	// this.formContent = LISTA_KORAKA;
	// this.formData = {};


	// this.activeStepIndex = 0;
	// this.masterForm = [];
	// this.currentFormContent = [];
	// this.formFields = [];
	// this.stepItems = this.formContent;

	// this.stepItems.forEach((data, i) => {
	//   this.currentFormContent.push(this.stepItems[i]['data']); // holds name, validators, placeholder of all steps
	//   this.formFields.push(Object.keys(this.currentFormContent[i])); // holds string values for each field of all steps
	//   this.masterForm.push(this.buildForm(this.currentFormContent[i])); // holds all form groups
	//   });
	// }

	// build separate FormGroups for each form
	// buildForm(currentFormContent: any): FormGroup {
	//   const formDetails = Object.keys(currentFormContent).reduce(
	//     (obj, key) => {
	//       obj[key] = ['', this.getValidators(currentFormContent[key])];

	//       return obj;
	//     },
	//     {}
	//   );
	//   return this._formBuilder.group(formDetails);
	// }


	// // get validator(s) for each field, if any
	// getValidators(formField: any): Validators {
	//   const fieldValidators = Object.keys(formField.validations).map(validator => {
	//     if (validator === 'required') {
	//       return Validators[validator];
	//     } else {
	//       return Validators[validator](formField.validations[validator]);
	//     }
	//   });

	//   return fieldValidators;
	// }


	// getValidationMessage(formIndex: number, formFieldName: string): string {
	//   const formErrors = this.masterForm[formIndex].get(formFieldName).errors;
	//   const errorMessages = this.currentFormContent[formIndex][formFieldName]
	//     .errors;
	//   const validationError = errorMessages[Object.keys(formErrors)[0]];

	//   return validationError;
	// }


	// goToStep(step: string): void {
	//   this.activeStepIndex =
	//     step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;

	//   this.setFormPreview();
	// }

	// setFormPreview(): void {


	//   this.formData = this.masterForm.reduce(
	//     (masterForm, currentForm) => ({ ...masterForm, ...currentForm.value }),
	//     {}
	//   );

	//   this.masterFormFields = Object.keys(this.formData);
	// }

	// onFormSubmit(): void {
	//   // emit aggregate form data to parent component, where we POST
	//   this.formSubmit.emit(this.formData);
	//   console.log(JSON.stringify(this.formData));
	//   this.MailService.sendEmail(this.formData);
	//   this.formData.reset();
	// }

	// trackByFn(index: number): number {
	//   return index;
	// }
	// eventCheck(event) {
	//   console.log(event.target.checked)
	// }


	// infoForm = this.fb.group({
	//   name: ['', [
	//     Validators.required,
	//     Validators.minLength(3)
	//   ]
	//   ],
	//   email: ['', [
	//     Validators.required,
	//     Validators.email
	//   ]
	//   ],
	//   subject: ['', [
	//     Validators.required,
	//     Validators.minLength(5)
	//   ]
	//   ],

	//   message: ['', [
	//     Validators.required,
	//     Validators.minLength(20)
	//   ]
	//   ],

	//   checkbox: ['', [
	//     Validators.required,
	//   ]
	//   ],


	// });

	// get name() { return this.infoForm.get('name'); }
	// get email() { return this.infoForm.get('email'); }
	// get subject() { return this.infoForm.get('subject'); }
	// get message() { return this.infoForm.get('message'); }

	// get checkbox() { return this.infoForm.get('checkbox').value }


	sendMail() {
		console.log(this.form.value);
		this.subscription = this.MailService.sendEmail(this.form.value).
			subscribe(data => {
				let msg = data['message']
				this.toastr.success(msg);
				// console.log(data, "success");
				setTimeout(() => this.router.navigate(['']),
					2000);
			}, error => {
				console.error(error, "error");
			});


		this.MailService.sendEmail(JSON.stringify(this.form.value));
		// this.router.navigate(['/contact'])
	}





	ngOnInit() {

	}




}
