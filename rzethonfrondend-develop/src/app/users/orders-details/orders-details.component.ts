import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdersDetails } from '../../_models';
import { OrderService } from '../../_services';

import * as $ from 'jquery';

@Component({
	selector: 'app-orders-details',
	templateUrl: './orders-details.component.html',
	styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {
	private routeSubscription: Subscription;

	order: OrdersDetails;
	checkPreloader: boolean = true;
	id: string;
	ROOT: string = "http://localhost:5000/";

	constructor(
		private orderService: OrderService,
		private route: ActivatedRoute,
		private router: Router) {
			this.routeSubscription = this.route.params.subscribe(params => this.id = params['id']);
		 }

	ngOnInit() {
		//JQuery Code
		$(document).ready(function(){
			$(".money_info ").click( function() {
				$(".information").toggleClass("active");
				$(".money_info").toggleClass("active");
			});
	   })

		this.getDetails();
	}

	private getDetails() {
		this.orderService.detailsOrder(this.id)
			.subscribe((
				data: OrdersDetails) => {
				this.order = this.setImagesPath(data);

				this.checkPreloader = false;
			});
	}

	enter() {
		this.orderService.enter(this.id)
			.subscribe(
				data => {
					this.router.navigate(['users/orders'])
				},
				error => {
					console.log(error);
				}
			);
	}

	private setImagesPath(order: OrdersDetails): OrdersDetails {
		if (order.orderImagePath) {
			order.orderImagePath = this.ROOT + order.orderImagePath;
		} else {
			order.orderImagePath = "https://pp.userapi.com/c849424/v849424926/bd069/w07IILprOc0.jpg";
		}

		if (order.organizatorProfileImagePath) {
			order.organizatorProfileImagePath = this.ROOT + order.organizatorProfileImagePath;
		} else {
			order.organizatorProfileImagePath = "../../../assets/images/icons/profile.jpg";
		}

		return order;
	}
}
