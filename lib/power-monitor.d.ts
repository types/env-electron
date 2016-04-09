// https://github.com/electron/electron/blob/master/docs/api/power-monitor.md

declare namespace Electron {
	/**
	 * This module is used to monitor power state changes.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	interface PowerMonitor extends NodeJS.EventEmitter {
		/**
		 * Emitted when the system is suspending.
		 */
		on(event: 'suspend', listener: Function): this;
		/**
		 * Emitted when system is resuming.
		 */
		on(event: 'resume', listener: Function): this;
		/**
		 * Emitted when the system changes to AC power.
		 */
		on(event: 'on-ac', listener: Function): this;
		/**
		 * Emitted when system changes to battery power.
		 */
		on(event: 'on-battery', listener: Function): this;
		on(event: string, listener: Function): this;
	}
}
