// https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md

declare namespace Electron {
	/**
	 * This module can register/unregister a global keyboard shortcut
	 * with the operating system so that you can customize the operations for various shortcuts.
	 * Note: The shortcut is global; it will work even if the app does not have the keyboard focus.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	interface GlobalShortcut {
		/**
		 * Registers a global shortcut of accelerator.
		 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
		 * and key codes, combined by the "+" character.
		 * @param callback Called when the registered shortcut is pressed by the user.
		 */
		register(accelerator: string, callback: Function): void;
		/**
		 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
		 * and key codes, combined by the "+" character.
		 * @returns Whether the accelerator is registered.
		 */
		isRegistered(accelerator: string): boolean;
		/**
		 * Unregisters the global shortcut of keycode.
		 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
		 * and key codes, combined by the "+" character.
		 */
		unregister(accelerator: string): void;
		/**
		 * Unregisters all the global shortcuts.
		 */
		unregisterAll(): void;
	}
}
