// Ionic / Angular / 3rd-party dependencies
import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Custom dependencies
import { MyApp } from './app.component';
import { MyNavbar } from '../components/my-navbar/my-navbar';
import { HomePage } from '../pages/home/home';
import { NewVersionPage } from '../pages/new-version/new-version';
import { Utils } from '../core/providers/utils';
import { ApiService } from '../providers/api-service/api-service';

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
	MyApp,
	HomePage,
	NewVersionPage
];

let components = [
	MyNavbar 
];

let directives = [
];

let pipes = [
];

export function createTranslateLoader(http: Http) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function declarations() {
	return [pages, ...components, ...directives, ...pipes];
}

export function entryComponents() {
	return [pages, ...components];
}

export function providers() {
	return [
		Storage,

		ApiService,
		Utils,
		
		// Here we tell the Angular ErrorHandling class
		// that it should be using the IonicErrorHandler class for any errors
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	];
}

@NgModule({
	declarations: declarations(),
	imports: [
		FormsModule,
		IonicModule.forRoot(MyApp, {
			prodMode: false,
			tabsPlacement: 'bottom'
		}),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [Http]
			}
		})
	],
	bootstrap: [IonicApp],
	entryComponents: entryComponents(),
	providers: providers()
})
export class AppModule { }