// Ionic / Angular / 3rd-party dependencies
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Network } from '@ionic-native/network';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { OneSignal } from '@ionic-native/onesignal';

// Core dependencies
import { MyApp } from './app.component';
import { NewVersionPage } from '../core/components/new-version/new-version';
import { Utils } from '../core/providers/utils';
import { ApiService } from '../providers/api-service/api-service';
import { EscapeHtml } from '../core/pipes/escape-html';
import { InappHref } from '../core/components/inapp-href/inapp-href';

/**
 * The Pages array lists all of the pages we want to use in our app.
 * We then take these pages and inject them into our NgModule so Angular
 * can find them. As you add and remove pages, make sure to keep this list up to date.
 */
let pages = [
	MyApp
];

let components = [
	NewVersionPage
];

let directives = [
	InappHref
];

let pipes = [
	EscapeHtml
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
		// Ionic Native
		StatusBar,
		SplashScreen,
		AppVersion,
		GoogleAnalytics,
		Network,
		ThemeableBrowser,
		OneSignal,

		// ngx-translate
		TranslateService,

		// Custom
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
		BrowserModule,
		FormsModule,
		HttpModule,
		IonicModule.forRoot(MyApp, {
			prodMode: false,
			tabsPlacement: 'bottom'
		}),
		IonicStorageModule.forRoot(),
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