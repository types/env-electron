// https://github.com/atom/electron/blob/master/docs/api/remote.md

declare namespace Electron {
	/**
	 * This module provides a simple way to do inter-process communication (IPC)
	 * between the renderer process (web page) and the main process.
	 */
	interface Remote extends CommonElectron {
		/**
		 * @returns The object returned by require(module) in the main process.
		 */
		require(module: string): any;
		/**
		 * @returns The BrowserWindow object which this web page belongs to.
		 */
		getCurrentWindow(): BrowserWindow;
		/**
		 * @returns The WebContents object of this web page.
		 */
		getCurrentWebContents(): WebContents;
		/**
		 * @returns The global variable of name (e.g. global[name]) in the main process.
		 */
		getGlobal(name: string): any;
		/**
		 * Returns the process object in the main process. This is the same as
		 * remote.getGlobal('process'), but gets cached.
		 */
		process: NodeJS.Process;
	}
}
