import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthenticationService } from '../../_services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

	private isAuthenticated: boolean = false;

	constructor(
		private authenticationService: AuthenticationService) { }

	ngOnInit() { }

	ngDoCheck() {
		if (localStorage.getItem('loggedInUser')) {
			this.isAuthenticated = true;
		} else {
			this.isAuthenticated = false;
		}
	}

	logout() {
		this.isAuthenticated = false;
		this.authenticationService.logout();
	}
}
