import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	agree: boolean = true;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService: AuthenticationService) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});

		this.authenticationService.logout();
	}

	onSubmit() {
		if (this.loginForm.invalid || this.agree == false) return;

		this.authenticationService.login(this.toFormData())
			.subscribe(
				data => {
					console.log(localStorage.getItem('loggedInUser'));
					this.router.navigate(['users/orders'])
				},
				error => {
					console.log(error);
				});
	}

	private toFormData(): FormData {
		const user = this.loginForm.value;

		let formData = new FormData();
		formData.append('username', user.username);
		formData.append('password', user.password);
		formData.append('grand_type', 'password');

		return formData;
	}
}
