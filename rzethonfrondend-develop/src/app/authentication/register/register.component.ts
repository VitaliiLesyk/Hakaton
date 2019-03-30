import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../_services';

import * as $ from 'jquery';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService: AuthenticationService) { }

	ngOnInit() {
		//jQuery Code
		$(document).ready(function () {
			$(".form ").click(function () {
				$(this).toggleClass("active");
			})
			$(".form ").focusout(function () {
				$(this).removeClass("active");
			});
		})

		this.registerForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
			confirmpass: ['', [Validators.required, Validators.minLength(6)]],
			email: ['', Validators.required],
			publicAddress: ['', Validators.required],
			profileImage: []
		});
	}

	onSubmit() {

		if (this.registerForm.invalid) return;

		this.authenticationService.register(this.toFormData())
			.subscribe(
				data => {
					this.router.navigate(['authentication/login']);
				},
				error => {
					console.log(error);
				});
	}

	fileChange(files: FileList) {
		if (files && files[0].size > 0) {
			this.registerForm.patchValue({
				profileImage: files[0]
			});
		}
	}

	private toFormData(): FormData {
		const user = this.registerForm.value;

		let formData = new FormData();
		formData.append('Username', user.username);
		formData.append('Email', user.email);
		formData.append('PublicAddress', user.publicAddress);
		formData.append('Password', user.password);
		formData.append('Confirmpass', user.confirmpass);
		formData.append('ProfileImage', user.profileImage);

		return formData;
	}
}
