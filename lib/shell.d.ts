// https://github.com/atom/electron/blob/master/docs/api/shell.md

declare namespace Electron {
	/**
	 * This module provides functions related to desktop integration.
	 */
	interface Shell {
		/**
		 * Show the given file in a file manager. If possible, select the file.
		 */
		showItemInFolder(fullPath: string): void;
		/**
		 * Open the given file in the desktop's default manner.
		 */
		openItem(fullPath: string): void;
		/**
		 * Open the given external protocol URL in the desktop's default manner
		 * (e.g., mailto: URLs in the default mail user agent).
		 * @returns true if an application was available to open the URL, false otherwise.
		 */
		openExternal(url: string, options?: {
			/**
			 * Bring the opened application to the foreground.
			 * Default: true.
			 */
			activate: boolean;
		}): boolean;
		/**
		 * Move the given file to trash.
		 * @returns boolean status for the operation.
		 */
		moveItemToTrash(fullPath: string): boolean;
		/**
		 * Play the beep sound.
		 */
		beep(): void;
	}
}
