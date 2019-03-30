import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainComponent
	],
	imports: [
		AuthenticationModule,
		UsersModule,
		BrowserModule,
		routing
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
