declare namespace Electron {
  import { EventEmitter } from "events";
	class EventEmitter extends EventEmitter {
	}

	interface Event {
		preventDefault: Function;
		sender: EventEmitter;
	}
}
