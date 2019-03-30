import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './users.routing';
import { CountdownTimerModule } from 'ngx-countdown-timer';

import { UsersComponent } from './users.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from '../_shared/settings/settings.component';
import { ProfileComponent } from '../_shared/profile/profile.component';
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

@NgModule({
	imports: [
		CommonModule,
		routing,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
    	CountdownTimerModule.forRoot()
	],
	declarations: [
		UsersComponent,
		OrdersComponent,
		SettingsComponent,
		ProfileComponent,
		OrdersCreateComponent,
		MyordersComponent,
		OrdersDetailsComponent
	]
})
export class UsersModule { }
