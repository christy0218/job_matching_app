import {Component} from '@angular/core';
import {Platform, ViewController, NavController} from 'ionic-angular';
import {BasePage} from '../../core/base-page';
import {Config} from '../../config';
import {Utils} from '../../core/providers/utils';

@Component({
	templateUrl: 'build/pages/home/home.html'
})
export class HomePage extends BasePage {
	
	constructor(
		// dependencies required by parent
		protected platform: Platform,
		protected view: ViewController,
		protected nav: NavController,
		protected utils: Utils
	) {
		super(platform, view, nav, utils);
		Config.DEBUG_VERBOSE && console.log('HomePage constructor');
	}
	
	onPageLoaded() {
		// TODO: download initial data
		Config.DEBUG_VERBOSE && console.log('HomePage onPageLoaded');
	}
}