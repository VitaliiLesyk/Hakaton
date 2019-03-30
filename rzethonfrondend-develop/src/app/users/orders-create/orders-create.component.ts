import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../_services';

import * as $ from 'jquery';

@Component({
	selector: 'app-orders-create',
	templateUrl: './orders-create.component.html',
	styleUrls: ['./orders-create.component.css',
				'categories-create.css']
})
export class OrdersCreateComponent implements OnInit {
	createOrderForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private orderService: OrderService) { }

	ngOnInit() {
		//JQuery
		$(function() {
			$('.toggles button').click(function(){
			  var get_id = this.id;
			  var get_current = $('.posts .' + get_id);
				$('.post').not( get_current ).hide(500);
				get_current.show(500);
			});

			$('#showall').click(function() {
				$('.post').show(500);
			});
		});

		this.createOrderForm = this.formBuilder.group({
			description: ['', Validators.required],
			name: ['', Validators.required],
			city: ['', Validators.required],
			reward: ['', Validators.required],
			charges: ['', Validators.required],
			country: ['', Validators.required],
			address: ['', Validators.required],
			orderDate: [],
			finishOrderDate: [],
			organization: ['', Validators.required],
			orderImage: []
		});
	}

	onSubmit() {
		if (this.createOrderForm.invalid) return;

		this.orderService.createOrder(this.toFormData())
			.subscribe(
				data => {
					this.router.navigate(['users/myorders']);
				},
				error => {
					console.log(error);
				});
	}

	fileChange(files: FileList) {
		if (files && files[0].size > 0) {
			this.createOrderForm.patchValue({
				orderImage: files[0]
			});
		}
	}

	private toFormData(): FormData {
		const order = this.createOrderForm.value;

		let formData = new FormData();
		formData.append('Name', order.name);
		formData.append('Country', order.country);
		formData.append('City', order.city);
		formData.append('Address', order.address);
		formData.append('OrderDate', order.orderDate);
		formData.append('FinishOrderDate', order.finishOrderDate);
		formData.append('Description', order.description);
		formData.append('Reward', order.reward);
		formData.append('Charges', order.charges);
		formData.append('Organization', order.organization);
		formData.append('OrderImage', order.orderImage);

		return formData;
	}
}
