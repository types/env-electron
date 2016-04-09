/// <reference path="lib/app.d.ts" />
/// <reference path="lib/auto-updater.d.ts" />
/// <reference path="lib/browser-window.d.ts" />
/// <reference path="lib/clipboard.d.ts" />
/// <reference path="lib/content-tracing.d.ts" />
/// <reference path="lib/crash-reporter.d.ts" />
/// <reference path="lib/desktop-capturer.d.ts" />
/// <reference path="lib/dialog.d.ts" />
/// <reference path="lib/download-item.d.ts" />
/// <reference path="lib/event-emitter.d.ts" />
/// <reference path="lib/file-object.d.ts" />
/// <reference path="lib/global-shortcut.d.ts" />
/// <reference path="lib/ipc-main.d.ts" />
/// <reference path="lib/ipc-renderer.d.ts" />
/// <reference path="lib/menu-item.d.ts" />
/// <reference path="lib/menu.d.ts" />
/// <reference path="lib/native-image.d.ts" />
/// <reference path="lib/power-monitor.d.ts" />
/// <reference path="lib/power-save-blocker.d.ts" />
/// <reference path="lib/protocol.d.ts" />
/// <reference path="lib/remote.d.ts" />
/// <reference path="lib/screen.d.ts" />
/// <reference path="lib/session.d.ts" />
/// <reference path="lib/shell.d.ts" />
/// <reference path="lib/tray.d.ts" />
/// <reference path="lib/web-contents.d.ts" />
/// <reference path="lib/web-frame.d.ts" />
/// <reference path="lib/web-view.d.ts" />
/// <reference path="lib/window-open.d.ts" />

// https://github.com/electron/electron/blob/master/docs/api/synopsis.md

declare namespace Electron {

	interface CommonElectron {
		clipboard: Electron.Clipboard;
		crashReporter: Electron.CrashReporter;
		nativeImage: typeof Electron.NativeImage;
		shell: Electron.Shell;

		app: Electron.App;
		autoUpdater: Electron.AutoUpdater;
		BrowserWindow: typeof Electron.BrowserWindow;
		contentTracing: Electron.ContentTracing;
		dialog: Electron.Dialog;
		ipcMain: Electron.IpcMain;
		globalShortcut: Electron.GlobalShortcut;
		Menu: typeof Electron.Menu;
		MenuItem: typeof Electron.MenuItem;
		powerMonitor: Electron.PowerMonitor;
		powerSaveBlocker: Electron.PowerSaveBlocker;
		protocol: Electron.Protocol;
		screen: Electron.Screen;
		session: typeof Electron.Session;
		Tray: Electron.Tray;
		hideInternalModules(): void;
	}

	interface ElectronMainAndRenderer extends CommonElectron {
		desktopCapturer: Electron.DesktopCapturer;
		ipcRenderer: Electron.IpcRenderer;
		remote: Electron.Remote;
		webFrame: Electron.WebFrame;
	}
}

declare namespace ElectronPrivate {
	type GlobalEvent = Event;
}

interface NodeRequireFunction {
	(moduleName: 'electron'): Electron.ElectronMainAndRenderer;
}

declare module 'electron' {
  var electron: Electron.ElectronMainAndRenderer;
  export = electron;
}
