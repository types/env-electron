// https://github.com/atom/electron/blob/master/docs/api/ipc-main.md

declare namespace Electron {
	/**
	 * This module handles asynchronous and synchronous messages
	 * sent from a renderer process (web page).
	 * Messages sent from a renderer will be emitted to this module.
	 */
	interface IpcMain extends NodeJS.EventEmitter {
		addListener(channel: string, listener: IpcMainEventListener): this;
		on(channel: string, listener: IpcMainEventListener): this;
		once(channel: string, listener: IpcMainEventListener): this;
		removeListener(channel: string, listener: IpcMainEventListener): this;
		removeAllListeners(channel?: string): this;
	}

	type IpcMainEventListener = (event: IpcMainEvent, ...args: any[]) => void;

	interface IpcMainEvent {
		/**
		 * Set this to the value to be returned in a synchronous message.
		 */
		returnValue?: any;
		/**
		 * Returns the webContents that sent the message, you can call sender.send
		 * to reply to the asynchronous message.
		 */
		sender: WebContents;
	}
}
