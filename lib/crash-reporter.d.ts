// https://github.com/electron/electron/blob/master/docs/api/crash-reporter.md

declare namespace Electron {
	/**
	 * This module enables sending your app's crash reports.
	 */
	interface CrashReporter {
		/**
		 * You are required to call this method before using other crashReporter APIs.
		 *
		 * Note: On OS X, Electron uses a new crashpad client, which is different from breakpad
		 * on Windows and Linux. To enable the crash collection feature, you are required to call
		 * the crashReporter.start API to initialize crashpad in the main process and in each
		 * renderer process from which you wish to collect crash reports.
		 */
		start(options: CrashReporterStartOptions): void;
		/**
		 * @returns The crash report. When there was no crash report
		 * sent or the crash reporter is not started, null will be returned.
		 */
		getLastCrashReport(): CrashReport;
		/**
		 * @returns All uploaded crash reports.
		 */
		getUploadedReports(): CrashReport[];
	}

	interface CrashReporterStartOptions {
		/**
		 * Default: Electron
		 */
		productName?: string;
		companyName: string;
		/**
		 * URL that crash reports would be sent to as POST.
		 */
		submitURL: string;
		/**
		 * Send the crash report without user interaction.
		 * Default: true.
		 */
		autoSubmit?: boolean;
		/**
		 * Default: false.
		 */
		ignoreSystemCrashHandler?: boolean;
		/**
		 * An object you can define that will be sent along with the report.
		 * Only string properties are sent correctly, nested objects are not supported.
		 */
		extra?: {[prop: string]: string};
	}

	interface CrashReport {
		id: string;
		date: Date;
	}
}
