import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private http: HttpClient) { }

	login(auth: FormData) {
		return this.http.post<any>("http://localhost:5000/Auth", auth)
			.pipe(map(user => {
				if (user) {
					localStorage.setItem('loggedInUser', user);
				}
			}));
	}

	logout() {
		localStorage.removeItem('loggedInUser');
	}

	register(user: FormData) {
		return this.http.post("http://localhost:5000/Account/Create", user);
	}
}
