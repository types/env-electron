// https://github.com/electron/electron/blob/master/docs/api/power-save-blocker.md

declare namespace Electron {
	/**
	 * This module is used to block the system from entering low-power (sleep)
	 * mode and thus allowing the app to keep the system and screen active.
	 */
	interface PowerSaveBlocker {
		/**
		 * Starts preventing the system from entering lower-power mode.
		 * @returns an integer identifying the power save blocker.
		 * Note: prevent-display-sleep has higher has precedence over prevent-app-suspension.
		 */
		start(type: 'prevent-app-suspension' | 'prevent-display-sleep'): number;
		/**
		 * @param id The power save blocker id returned by powerSaveBlocker.start.
		 * Stops the specified power save blocker.
		 */
		stop(id: number): void;
		/**
		 * @param id The power save blocker id returned by powerSaveBlocker.start.
		 * @returns a boolean whether the corresponding powerSaveBlocker has started.
		 */
		isStarted(id: number): boolean;
	}
}
