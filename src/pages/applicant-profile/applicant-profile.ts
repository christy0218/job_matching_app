import { Component } from '@angular/core';
import { Platform, ViewController, NavController, App } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { BasePage } from '../../core/base-page';
import { Config } from '../../config';
import { Utils } from '../../core/providers/utils';
import { Api } from '../../providers';

@IonicPage()
@Component({
	selector: 'page-applicant-profile',
	templateUrl: 'applicant-profile.html'
})
export class ApplicantProfilePage extends BasePage {

	name: string = 'ApplicantProfilePage';
	language: string = '';
	user_profile: any;

	constructor(
		protected platform: Platform,
		protected view: ViewController,
		protected nav: NavController,
		protected utils: Utils,
		private app: App,
		private api: Api
	) {
		super(platform, view, nav, utils);
		Config.DEBUG_VERBOSE && console.log('ApplicantProfilePage constructor');
	}

	ngOnInit() {
		this.language = this.utils.currentLang();

		this.initApplicantProfile();
	}

	ionViewWillEnter() {
		Config.ACTIVE_TAB = 'profile';
	}

	initApplicantProfile() {
		this.api.startQueue([
			this.api.getApplicantProfile()
		]).then(response => {
			this.user_profile = response[0]; 
		});
	}

	openProfileDetailPage(detail_type) {
		let params = { content: detail_type };
		this.nav.push('ApplicantProfileDetailPage', params);
	}

	openApplicantPreferencePage() {
		this.nav.push('ApplicantPreferencePage');
	}

	openApplicantRecordPage() {
		this.nav.push('ApplicantRecordPage');
	}

	openApplicantReviewPage() {
		this.nav.push('ApplicantReviewPage');
	}

	openApplicantFavouritePage() {
		this.nav.push('ApplicantFavouritePage');
	}

	openAboutPage() {
		this.nav.push('AboutPage');
	}

	openTncPage() {
		this.nav.push('TncPage');
	}

	resetPassword() {
		this.utils.showConfirm('', this.utils.instantLang('MSG.FORGET_PASSWORD'), () => {
			this.app.getRootNav().setRoot('ResetPasswordPage');
		});
	}

	updateMobile() {
		this.utils.showConfirm('', this.utils.instantLang('MSG.UPDATE_MOBILE'), () => {
			this.app.getRootNav().setRoot('UpdateMobilePage');
		});
	}

	logout() {
		this.utils.showConfirm('', this.utils.instantLang('MSG.LOGOUT'), () => {
			this.utils.clearLocal();
			this.app.getRootNav().setRoot('WelcomePage');
		});
	}

	setLanguage(language) {
		console.log('Changing language to ', language);
		this.language = language;
		this.utils.changeLang(this.language);
	}
}