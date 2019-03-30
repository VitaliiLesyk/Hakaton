import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Orders } from '../../_models';
import { OrderService } from '../../_services';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	ordersList: Orders[];
	selectedId: string;
	checkPreloader: boolean = true;
	checkEmpty: boolean = false;

	ROOT: string = "http://localhost:5000/";

	constructor(private ordersService: OrderService, private router: Router) { }

	ngOnInit() {
		this.loadOrganizedOrders();
	}

	onSelectDetails(selected: Orders) {
		this.router.navigate(["users/details", selected.id]);
	}

	enter(selected: Orders) {
		this.ordersService.enter(selected.id)
			.subscribe(
				data => {
					this.router.navigate(['users/orders'])
				},
				error => {
					console.log(error);
				}
			);
	}

	// onSelectEdit(selected: EventList) {
	// 	this.router.navigate(["event/edit", selected.id]);
	// }

	private loadOrganizedOrders() {
		this.ordersService.getOrders()
			.subscribe(
				(data: Orders[]) => {
					this.ordersList = this.setImagePath(data);

					if(data.length == 0)
						this.checkEmpty = true;

					this.checkPreloader = false;
				});
	}

	private setImagePath(orders: Orders[]): Orders[] {
		for (let order of orders) {
			if (order.orderImagePath) {
				order.orderImagePath = this.ROOT + order.orderImagePath;
			} else {
				order.orderImagePath = "../../../assets/images/backgrounds/event1.jpg";
			}
		}

		return orders;
	}
}
