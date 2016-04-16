// https://github.com/electron/electron/blob/master/docs/api/session.md

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
		resolveProxy(url: URL, callback: (proxy: string) => void): void;
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
		 * Sets the certificate verify proc for session, the proc will be called
		 * whenever a server certificate verification is requested.
		 *
		 * Calling setCertificateVerifyProc(null) will revert back to default certificate verify proc.
		 */
		setCertificateVerifyProc(proc: (hostname: string, cert: Certificate, callback: (accepted: boolean) => void) => void): void;
		/**
		 * Sets the handler which can be used to respond to permission requests for the session.
		 */
		setPermissionRequestHandler(handler: (webContents: WebContents, permission: Permission, callback: (allow: boolean) => void) => void): void;
		/**
		 * Clears the host resolver cache.
		 */
		clearHostResolverCache(callback: Function): void;
		/**
		 * The webRequest API set allows to intercept and modify contents of a request at various stages of its lifetime.
		 */
		webRequest: WebRequest;
	}

	type Permission = 'media' | 'geolocation' | 'notifications' | 'midiSysex' | 'pointerLock' | 'fullscreen';

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

	/**
	 * Each API accepts an optional filter and a listener, the listener will be called when the API's event has happened.
	 * Passing null as listener will unsubscribe from the event.
	 *
	 * The filter will be used to filter out the requests that do not match the URL patterns.
	 * If the filter is omitted then all requests will be matched.
	 *
	 * For certain events the listener is passed with a callback,
	 * which should be called with an response object when listener has done its work.
	 */
	interface WebRequest {
		/**
		 * The listener will be called when a request is about to occur.
		 */
		onBeforeRequest(listener: (details: WebRequest.BeforeRequestDetails, callback: WebRequest.BeforeRequestCallback) => void): void;
		/**
		 * The listener will be called when a request is about to occur.
		 */
		onBeforeRequest(filter: WebRequest.Filter, listener: (details: WebRequest.BeforeRequestDetails, callback: WebRequest.BeforeRequestCallback) => void): void;
		/**
		 * The listener will be called before sending an HTTP request, once the request headers are available.
		 * This may occur after a TCP connection is made to the server, but before any http data is sent.
		 */
		onBeforeSendHeaders(listener: (details: WebRequest.BeforeSendHeadersDetails, callback: WebRequest.BeforeSendHeadersCallback) => void): void;
		/**
		 * The listener will be called before sending an HTTP request, once the request headers are available.
		 * This may occur after a TCP connection is made to the server, but before any http data is sent.
		 */
		onBeforeSendHeaders(filter: WebRequest.Filter, listener: (details: WebRequest.BeforeSendHeadersDetails, callback: WebRequest.BeforeSendHeadersCallback) => void): void;
		/**
		 * The listener will be called just before a request is going to be sent to the server,
		 * modifications of previous onBeforeSendHeaders response are visible by the time this listener is fired.
		 */
		onSendHeaders(listener: (details: WebRequest.SendHeadersDetails) => void): void;
		/**
		 * The listener will be called just before a request is going to be sent to the server,
		 * modifications of previous onBeforeSendHeaders response are visible by the time this listener is fired.
		 */
		onSendHeaders(filter: WebRequest.Filter, listener: (details: WebRequest.SendHeadersDetails) => void): void;
		/**
		 * The listener will be called when HTTP response headers of a request have been received.
		 */
		onHeadersReceived(listener: (details: WebRequest.HeadersReceivedDetails, callback: WebRequest.HeadersReceivedCallback) => void): void;
		/**
		 * The listener will be called when HTTP response headers of a request have been received.
		 */
		onHeadersReceived(filter: WebRequest.Filter, listener: (details: WebRequest.HeadersReceivedDetails, callback: WebRequest.HeadersReceivedCallback) => void): void;
		/**
		 * The listener will be called when first byte of the response body is received.
		 * For HTTP requests, this means that the status line and response headers are available.
		 */
		onResponseStarted(listener: (details: WebRequest.ResponseStartedDetails) => void): void;
		/**
		 * The listener will be called when first byte of the response body is received.
		 * For HTTP requests, this means that the status line and response headers are available.
		 */
		onResponseStarted(filter: WebRequest.Filter, listener: (details: WebRequest.ResponseStartedDetails) => void): void;
		/**
		 * The listener will be called when a server initiated redirect is about to occur.
		 */
		onBeforeRedirect(listener: (details: WebRequest.BeforeRedirectDetails) => void): void;
		/**
		 * The listener will be called when a server initiated redirect is about to occur.
		 */
		onBeforeRedirect(filter: WebRequest.Filter, listener: (details: WebRequest.BeforeRedirectDetails) => void): void;
		/**
		 * The listener will be called when a request is completed.
		 */
		onCompleted(listener: (details: WebRequest.CompletedDetails) => void): void;
		/**
		 * The listener will be called when a request is completed.
		 */
		onCompleted(filter: WebRequest.Filter, listener: (details: WebRequest.CompletedDetails) => void): void;
		/**
		 * The listener will be called when an error occurs.
		 */
		onErrorOccurred(listener: (details: WebRequest.ErrorOccurredDetails) => void): void;
		/**
		 * The listener will be called when an error occurs.
		 */
		onErrorOccurred(filter: WebRequest.Filter, listener: (details: WebRequest.ErrorOccurredDetails) => void): void;
	}

	namespace WebRequest {
		interface Filter {
			urls: string[];
		}

		interface Details {
			id: number;
			url: string;
			method: string;
			resourceType: string;
			timestamp: number;
		}

		interface UploadData {
			/**
			 * Content being sent.
			 */
			bytes: Buffer;
			/**
			 * Path of file being uploaded.
			 */
			file: string;
		}

		interface BeforeRequestDetails extends Details {
			uploadData?: UploadData[];
		}

		type BeforeRequestCallback = (response: {
			cancel?: boolean;
			/**
			 * The original request is prevented from being sent or completed, and is instead redirected to the given URL.
			 */
			redirectURL?: string;
		}) => void;

		interface BeforeSendHeadersDetails extends Details {
			requestHeaders: Object;
		}

		type BeforeSendHeadersCallback = (response: {
			cancel?: boolean;
			/**
			 * When provided, request will be made with these headers.
			 */
			requestHeaders?: Object;
		}) => void;

		interface SendHeadersDetails extends Details {
			requestHeaders: Object;
		}

		interface HeadersReceivedDetails extends Details {
			statusLine: string;
			statusCode: number;
			responseHeaders: Object;
		}

		type HeadersReceivedCallback = (response: {
			cancel?: boolean;
			/**
			 * When provided, the server is assumed to have responded with these headers.
			 */
			responseHeaders?: Object;
			/**
			 * Should be provided when overriding responseHeaders to change header status
			 * otherwise original response header's status will be used.
			 */
			statusLine?: string;
		}) => void;

		interface ResponseStartedDetails extends Details {
			responseHeaders: Object;
			fromCache: boolean;
			statusCode: number;
			statusLine: string;
		}

		interface BeforeRedirectDetails extends Details {
			redirectURL: string;
			statusCode: number;
			ip?: string;
			fromCache: boolean;
			responseHeaders: Object;
		}

		interface CompletedDetails extends Details {
			responseHeaders: Object;
			fromCache: boolean;
			statusCode: number;
			statusLine: string;
		}

		interface ErrorOccurredDetails extends Details {
			fromCache: boolean;
			error: string;
		}
	}
}
