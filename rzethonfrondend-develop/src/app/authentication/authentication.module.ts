import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { routing } from "./authentication.routing";

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
	CommonModule,
	ReactiveFormsModule,
	HttpClientModule,
	routing
  ],
  declarations: [
	LoginComponent,
	RegisterComponent,
	AuthenticationComponent
  ]
})
export class AuthenticationModule { }
