import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const appRoutes: Routes = [
	{
		path: "",
		redirectTo: "main",
		pathMatch: "full"
	},
	{
		path: "authentication",
		component: AuthenticationComponent
	},
	{
		path: "main",
		component: MainComponent
	},
	{
		path: "users",
		component: UsersComponent
	},
	{
		path: '**',
		redirectTo: 'main'
	}
];

export const routing = RouterModule.forRoot(appRoutes);