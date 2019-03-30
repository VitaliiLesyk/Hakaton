import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getInfo() {
		return this.http.get<User>("http://localhost:5000/Account/GetInfo", {
			headers: this.getHeader()
		});
	}

	getHeader(): HttpHeaders{
		let headers: HttpHeaders = new HttpHeaders;
		headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('loggedInUser'));

		return headers;
	}
}
