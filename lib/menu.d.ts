// https://github.com/atom/electron/blob/master/docs/api/menu.md

declare namespace Electron {
	/**
	 * The Menu class is used to create native menus that can be used as application
	 * menus and context menus. This module is a main process module which can be used
	 * in a render process via the remote module.
	 *
	 * Each menu consists of multiple menu items, and each menu item can have a submenu.
	 */
	class Menu extends EventEmitter {
		/**
		 * Creates a new menu.
		 */
		constructor();
		/**
		 * Sets menu as the application menu on OS X. On Windows and Linux, the menu
		 * will be set as each window's top menu.
		 */
		static setApplicationMenu(menu: Menu): void;
		/**
		 * Sends the action to the first responder of application.
		 * This is used for emulating default Cocoa menu behaviors,
		 * usually you would just use the role property of MenuItem.
		 *
		 * Note: This method is OS X only.
		 */
		static sendActionToFirstResponder(action: string): void;
		/**
		 * @param template Generally, just an array of options for constructing MenuItem.
		 * You can also attach other fields to element of the template, and they will
		 * become properties of the constructed menu items.
		 */
		static buildFromTemplate(template: MenuItemOptions[]): Menu;
		/**
		 * Popups this menu as a context menu in the browserWindow. You can optionally
		 * provide a (x,y) coordinate to place the menu at, otherwise it will be placed
		 * at the current mouse cursor position.
		 * @param x Horizontal coordinate where the menu will be placed.
		 * @param y Vertical coordinate where the menu will be placed.
		 */
		popup(browserWindow?: BrowserWindow, x?: number, y?: number): void;
		/**
		 * Appends the menuItem to the menu.
		 */
		append(menuItem: MenuItem): void;
		/**
		 * Inserts the menuItem to the pos position of the menu.
		 */
		insert(position: number, menuItem: MenuItem): void;
		/**
		 * @returns an array containing the menu’s items.
		 */
		items: MenuItem[];
	}
}
