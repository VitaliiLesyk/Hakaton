import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationComponent } from './authentication.component';

export const appRoutes: Routes = [
	{
		path: "authentication",
		component: AuthenticationComponent,
		children: [
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
			{ path: '**', redirectTo: 'login'}
		  ]
	}
];

export const routing = RouterModule.forChild(appRoutes);