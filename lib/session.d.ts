// https://github.com/atom/electron/blob/master/docs/api/session.md

declare namespace Electron {
	/**
	 * This module can be used to create new Session objects.
	 * You can also access the session of existing pages by using
	 * the session property of webContents which is a property of BrowserWindow.
	 */
	class Session extends EventEmitter {
		/**
		 * @returns a new Session instance from partition string.
		 */
		static fromPartition(partition: string): Session;
		/**
		 * @returns the default session object of the app.
		 */
		static defaultSession: Session;
		/**
		 * Emitted when Electron is about to download item in webContents.
		 * Calling event.preventDefault() will cancel the download
		 * and item will not be available from next tick of the process.
		 */
		on(event: 'will-download', listener: (event: Event, item: DownloadItem, webContents: WebContents) => void): this;
		on(event: string, listener: Function): this;
		/**
		 * The cookies gives you ability to query and modify cookies.
		 */
		cookies: SessionCookies;
		/**
		 * @returns the session’s current cache size.
		 */
		getCacheSize(callback: (size: number) => void): void;
		/**
		 * Clears the session’s HTTP cache.
		 */
		clearCache(callback: Function): void;
		/**
		 * Clears the data of web storages.
		 */
		clearStorageData(callback: Function): void;
		/**
		 * Clears the data of web storages.
		 */
		clearStorageData(options: ClearStorageDataOptions, callback: Function): void;
		/**
		 * Writes any unwritten DOMStorage data to disk.
		 */
		flushStorageData(): void;
		/**
		 * Sets the proxy settings.
		 */
		setProxy(config: string, callback: Function): void;
		/**
		 * Resolves the proxy information for url.
		 */
		resolveProxy(url: URL, callback: (proxy: any) => any): void;
		/**
		 * Sets download saving directory.
		 * By default, the download directory will be the Downloads under the respective app folder.
		 */
		setDownloadPath(path: string): void;
		/**
		 * Emulates network with the given configuration for the session.
		 */
		enableNetworkEmulation(options: NetworkEmulationOptions): void;
		/**
		 * Disables any network emulation already active for the session.
		 * Resets to the original network configuration.
		 */
		disableNetworkEmulation(): void;
		/**
		 * Sets the certificate verify proc for session.
		 */
		setCertificateVerifyProc(proc: CertificateVerifyProc): void;
		/**
		 * Clears the host resolver cache.
		 */
		clearHostResolverCache(callback: Function): void;
		/**
		 * The webRequest API set allows to intercept and modify contents of a request at various stages of its lifetime.
		 */
		webRequest: any;
	}

	interface ClearStorageDataOptions {
		/**
		 * Should follow window.location.origin’s representation scheme://host:port.
		 */
		origin?: string;
		/**
		 *  The types of storages to clear.
		 */
		storages?: ('appcache' | 'cookies' | 'filesystem' | 'indexdb' | 'localstorage' | 'shadercache' | 'websql' | 'serviceworkers')[];
		/**
		 * The types of quotas to clear.
		 */
		quotas?: ('temporary' | 'persistent' | 'syncable')[];
	}

	interface NetworkEmulationOptions {
		/**
		 * Whether to emulate network outage.
		 */
		offline?: boolean;
		/**
		 * RTT in ms.
		 */
		latency?: number;
		/**
		 * Download rate in Bps.
		 */
		downloadThroughput?: number;
		/**
		 * Upload rate in Bps.
		 */
		uploadThroughput?: number;
	}

	interface CertificateVerifyProc {
		(hostname: string, cert: any, callback: (accepted: boolean) => any): any;
	}

	interface CookieFilter {
		/**
		 * Retrieves cookies which are associated with url. Empty implies retrieving cookies of all urls.
		 */
		url?: string;
		/**
		 * Filters cookies by name.
		 */
		name?: string;
		/**
		 * Retrieves cookies whose domains match or are subdomains of domains.
		 */
		domain?: string;
		/**
		 * Retrieves cookies whose path matches path.
		 */
		path?: string;
		/**
		 * Filters cookies by their Secure property.
		 */
		secure?: boolean;
		/**
		 * Filters out session or persistent cookies.
		 */
		session?: boolean;
	}

	interface Cookie {
		/**
		 * The name of the cookie.
		 */
		name: string;
		/**
		 * The value of the cookie.
		 */
		value: string;
		/**
		 * The domain of the cookie.
		 */
		domain: string;
		/**
		 * Whether the cookie is a host-only cookie.
		 */
		hostOnly: string;
		/**
		 * The path of the cookie.
		 */
		path: string;
		/**
		 * Whether the cookie is marked as secure.
		 */
		secure: boolean;
		/**
		 * Whether the cookie is marked as HTTP only.
		 */
		httpOnly: boolean;
		/**
		 * Whether the cookie is a session cookie or a persistent cookie with an expiration date.
		 */
		session: boolean;
		/**
		 * The expiration date of the cookie as the number of seconds since the UNIX epoch.
		 * Not provided for session cookies.
		 */
		expirationDate?: number;
	}

	interface CookieDetails {
		/**
		 * The URL associated with the cookie.
		 */
		url: string;
		/**
		 * The name of the cookie.
		 * Default: empty.
		 */
		name?: string;
		/**
		 * The value of the cookie.
		 * Default: empty.
		 */
		value?: string;
		/**
		 * The domain of the cookie.
		 * Default: empty.
		 */
		domain?: string;
		/**
		 * The path of the cookie.
		 * Default: empty.
		 */
		path?: string;
		/**
		 * Whether the cookie should be marked as secure.
		 * Default: false.
		 */
		secure?: boolean;
		/**
		 * Whether the cookie should be marked as HTTP only.
		 * Default: false.
		 */
		httpOnly?: boolean;
		/**
		 * The expiration date of the cookie as the number of seconds since the UNIX epoch.
		 * If omitted, the cookie becomes a session cookie.
		 */
		expirationDate?: number;
	}

	interface SessionCookies {
		/**
		 * Sends a request to get all cookies matching filter.
		 */
		get(filter: CookieFilter, callback: (error: Error, cookies: Cookie[]) => void): void;
		/**
		 * Sets the cookie with details.
		 */
		set(details: CookieDetails, callback: (error: Error) => void): void;
		/**
		 * Removes the cookies matching url and name.
		 */
		remove(url: string, name: string, callback: (error: Error) => void): void;
	}
}
