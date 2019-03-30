import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from './users.component';
import { OrdersComponent } from './orders/orders.component';
import { MyordersComponent } from "./myorders/myorders.component";
import { OrdersCreateComponent } from "./orders-create/orders-create.component";
import { AuthGuard } from "../_guards/auth.guard";
import { SettingsComponent } from "../_shared/settings/settings.component";
import { OrdersDetailsComponent } from "./orders-details/orders-details.component";

export const appRoutes: Routes = [
	{
		path: "users",
		component: UsersComponent,
		children: [
			{ path: '', redirectTo: 'orders', pathMatch: 'full' },
			{ path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
			{ path: 'myorders', component: MyordersComponent, canActivate: [AuthGuard] },
			{ path: 'create', component: OrdersCreateComponent, canActivate: [AuthGuard] },
			{ path: 'details/:id', component: OrdersDetailsComponent, canActivate: [AuthGuard] },
			{ path: '**', redirectTo: 'orders' }
		]
	},
	{
		path: "settings",
		component: SettingsComponent,
	},
];

export const routing = RouterModule.forChild(appRoutes);