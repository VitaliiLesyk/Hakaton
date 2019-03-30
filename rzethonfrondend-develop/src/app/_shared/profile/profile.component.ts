import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services';
import { User } from '../../_models';

import * as $ from 'jquery';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: User;
	path: string;
	ROOT: string = "http://localhost:5000/";

	constructor(private userService: UserService) { }

	ngOnInit() {
		//JQuery Code
		$(document).ready(function () {
			$(".arrow").click(function () {
				$("#profile, .arrow").toggleClass("active");
				$("#main_content").toggleClass("active");
			});
			$(".creating_event_decr input").click(function () {
				$(this).toggleClass("active");
			});

			$(window).scroll(function () {
				var scrolled = $(this).scrollTop();
				if (scrolled >= 10) {
					$('#profile').addClass('sticked');
				}
				if (scrolled <= 10) {
					$('#profile').removeClass('sticked');
				}
			});
		})

		this.getInfo();
	}

	private getInfo() {
		this.userService.getInfo()
			.subscribe((
				data: User) => {
					this.user = data;
					this.setImagePath();
				},
				error => {
					console.log(error)
				});
	}

	private setImagePath() {
		if (this.user.profileImagePath) {
			this.path = this.ROOT + this.user.profileImagePath;
		} else {
			this.path = "../../../assets/images/icons/profile.jpg";
		}
	}
}
