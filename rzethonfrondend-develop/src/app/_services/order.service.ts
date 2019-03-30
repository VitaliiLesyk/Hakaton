import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Orders, OrdersDetails } from '../_models';

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	constructor(private http: HttpClient) { }

	createOrder(order: FormData) {
		return this.http.post("http://localhost:5000/Manager/CreateOrder", order, {
			headers: this.getHeader()
		});
	}

	getOrders() {
		return this.http.get<Orders[]>('http://localhost:5000/Order/GetOrdersList');
	}

	getMyOrders() {
		return this.http.get<Orders[]>('http://localhost:5000/Manager/MyOrderList', {
			headers: this.getHeader()
		});
	}

	detailsOrder(id: string) {
		const urlParams = new HttpParams().set("id", id);
		return this.http.get<OrdersDetails>('http://localhost:5000/Order/GetOrder', { params: urlParams });
	}

	enter(id: string) {
		const urlParams = new HttpParams().set("id", id);
		return this.http.post("http://localhost:5000/Order/PickOrder", {
			params: urlParams,
			headers: this.getHeader()
		});
	}

	getHeader(): HttpHeaders {
		let headers: HttpHeaders = new HttpHeaders;
		headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('loggedInUser'));

		return headers;
	}
}
