declare namespace Electron {

	class EventEmitter extends NodeJS.EventEmitter {
	}

	interface Event {
		preventDefault: Function;
		sender: EventEmitter;
	}
}
