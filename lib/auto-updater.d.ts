// https://github.com/electron/electron/blob/master/docs/api/auto-updater.md

declare namespace Electron {
	/**
	 * This module provides an interface for the Squirrel auto-updater framework.
	 */
	interface AutoUpdater extends NodeJS.EventEmitter {
		/**
		 * Emitted when there is an error while updating.
		 */
		on(event: 'error', listener: (error: Error) => void): this;
		/**
		 * Emitted when checking if an update has started.
		 */
		on(event: 'checking-for-update', listener: Function): this;
		/**
		 * Emitted when there is an available update. The update is downloaded automatically.
		 */
		on(event: 'update-available', listener: Function): this;
		/**
		 * Emitted when there is no available update.
		 */
		on(event: 'update-not-available', listener: Function): this;
		/**
		 * Emitted when an update has been downloaded.
		 * Note: On Windows only releaseName is available.
		 */
		on(event: 'update-downloaded', listener: (event: Event, releaseNotes: string, releaseName: string, releaseDate: Date, updateURL: string) => void): this;
		on(event: string, listener: Function): this;
		/**
		 * Set the url and initialize the auto updater.
		 * The url cannot be changed once it is set.
		 */
		setFeedURL(url: string): void;
		/**
		 * Ask the server whether there is an update, you have to call setFeedURL
		 * before using this API
		 */
		checkForUpdates(): void;
		/**
		 * Restarts the app and installs the update after it has been downloaded.
		 * It should only be called after update-downloaded has been emitted.
		 */
		quitAndInstall(): void;
	}
}
