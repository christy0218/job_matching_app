import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { BaseApp } from '../core/base-app';
import { Config } from '../config';
import { Utils } from '../core/providers/utils';
import { Api } from '../providers';

import { MenuComponent } from '../components/menu/menu';

@Component({
	templateUrl: 'app.html'
})
export class MyApp extends BaseApp {
	
	constructor(platform: Platform, api: Api, utils: Utils) {
		super(platform, api, utils);
		Config.DEBUG_VERBOSE && console.log('MyApp constructor');
	}

	// override parent
	protected onAppLoaded() {
		// set rootpage only when the app is ready
		Config.DEBUG_VERBOSE && console.log('MyApp onAppLoaded');
		
		// load default page
		if (typeof this.nav.getActive() == 'undefined') {
			// this.rootPage = MenuComponent;
			this.initPage();
		}
	}

	initPage() {
		// Check preferred language
		this.utils.getLocal('UI_LANGUAGE').then(language => {
			console.log('language', language);
			if (language) {
				this.utils.getLocal('USER_AUTH').then(auth => {
					console.log('auth', auth);
					if (auth) {
						this.rootPage = MenuComponent;
					} else {
						this.rootPage = 'WelcomePage';
					}
				})
			} else {
				// Ask user to select language
				this.rootPage = 'LanguagePage';
			}
		})
	}
}