/**
 * Struct for app version object
 */
export interface NewVersionList {
	latest_version: string;
	force_upgrade: string | boolean;
	new_versions: NewVersion[];
}

export interface NewVersion {
	platform: string;
	code: string;
	release_notes: string;
	force_upgrade: string | boolean;
	publish_date: string;
}