// https://github.com/atom/electron/blob/master/docs/api/window-open.md

declare namespace Electron {
	/**
	 * The BrowserWindowProxy object is returned from window.open and provides limited functionality with the child window.
	 */
	interface BrowserWindowProxy {
		/**
		 * Removes focus from the child window.
		 */
		blur(): void;
		/**
		 * Forcefully closes the child window without calling its unload event.
		 */
		close(): void;
		/**
		 * Set to true after the child window gets closed.
		 */
		closed: boolean;
		/**
		 * Evaluates the code in the child window.
		 */
		eval(code: string): void;
		/**
		 * Focuses the child window (brings the window to front).
		 */
		focus(): void;
		/**
		 * Sends a message to the child window with the specified origin or * for no origin preference.
		 * In addition to these methods, the child window implements window.opener object with no
		 * properties and a single method.
		 */
		postMessage(message: string, targetOrigin: string): void;
	}
}

interface Window {
	/**
	 * Creates a new window.
	 */
	open(url: string, frameName?: string, features?: string): Electron.BrowserWindowProxy;
}
