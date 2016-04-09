// https://github.com/electron/electron/blob/master/docs/api/download-item.md

declare namespace Electron {
	/**
	 * DownloadItem represents a download item in Electron.
	 */
	interface DownloadItem extends NodeJS.EventEmitter {
		/**
		 * Emits when the downloadItem gets updated.
		 */
		on(event: 'updated', listener: Function): this;
		/**
		 * Emits when the download is in a terminal state. This includes a completed download,
		 * a cancelled download (via downloadItem.cancel()), and interrupted download that can’t be resumed.
		 */
		on(event: 'done', listener: (event: Event, state: 'completed' | 'cancelled' | 'interrupted') => void): this;
		on(event: string, listener: Function): this;
		/**
		 * Set the save file path of the download item.
		 * Note: The API is only available in session’s will-download callback function.
		 * If user doesn’t set the save path via the API, Electron will use the original
		 * routine to determine the save path (Usually prompts a save dialog).
		 */
		setSavePath(path: string): void;
		/**
		 * Pauses the download.
		 */
		pause(): void;
		/**
		 * Resumes the download that has been paused.
		 */
		resume(): void;
		/**
		 * Cancels the download operation.
		 */
		cancel(): void;
		/**
		 * @returns The origin url where the item is downloaded from.
		 */
		getURL(): string;
		/**
		 * @returns The mime type.
		 */
		getMimeType(): string;
		/**
		 * @returns Whether the download has user gesture.
		 */
		hasUserGesture(): boolean;
		/**
		 * @returns The file name of the download item.
		 * Note: The file name is not always the same as the actual one saved in local disk.
		 * If user changes the file name in a prompted download saving dialog,
		 * the actual name of saved file will be different.
		 */
		getFilename(): string;
		/**
		 * @returns The total size in bytes of the download item. If the size is unknown, it returns 0.
		 */
		getTotalBytes(): number;
		/**
		 * @returns The received bytes of the download item.
		 */
		getReceivedBytes(): number;
		/**
		 * @returns The Content-Disposition field from the response header.
		 */
		getContentDisposition(): string;
	}
}
