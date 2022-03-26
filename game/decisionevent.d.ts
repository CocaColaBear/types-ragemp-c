/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameDecisioneventLegacy {}

interface GameDecisionevent extends GameDecisioneventLegacy {
	/**
	 * Native: EVENT::ADD_SHOCKING_EVENT_AT_POSITION
	 *
	 * Hash: 0xD9F8455409B525E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9F8455409B525E9)
	 */
	addShockingEventAtPosition(eventType: integer, x: number, y: number, z: number, duration: number): Handle;

	/**
	 * Native: EVENT::ADD_SHOCKING_EVENT_FOR_ENTITY
	 *
	 * Hash: 0x7FD8F3BE76F89422 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FD8F3BE76F89422)
	 */
	addShockingEventForEntity(eventType: integer, entity: Handle, duration: number): Handle;

	/**
	 * Native: EVENT::BLOCK_DECISION_MAKER_EVENT
	 *
	 * Hash: 0xE42FCDFD0E4196F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE42FCDFD0E4196F7)
	 */
	blockDecisionMakerEvent(name: integer, eventType: integer): void;

	/**
	 * Native: EVENT::CLEAR_DECISION_MAKER_EVENT_RESPONSE
	 *
	 * Hash: 0x4FC9381A7AEE8968 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4FC9381A7AEE8968)
	 */
	clearDecisionMakerEventResponse(name: integer, eventType: integer): void;

	/**
	 * Native: EVENT::IS_SHOCKING_EVENT_IN_SPHERE
	 *
	 * Hash: 0x1374ABB7C15BAB92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1374ABB7C15BAB92)
	 */
	isShockingEventInSphere(eventType: integer, x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: EVENT::REMOVE_ALL_SHOCKING_EVENTS
	 *
	 * Hash: 0xEAABE8FDFA21274C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAABE8FDFA21274C)
	 */
	removeAllShockingEvents(p0: boolean): void;

	/**
	 * Native: EVENT::REMOVE_SHOCKING_EVENT
	 *
	 * Hash: 0x2CDA538C44C6CCE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CDA538C44C6CCE5)
	 */
	removeShockingEvent(event: Handle): boolean;

	/**
	 * Native: EVENT::SUPPRESS_SHOCKING_EVENT_TYPE_NEXT_FRAME
	 *
	 * Hash: 0x3FD2EC8BF1F1CF30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FD2EC8BF1F1CF30)
	 */
	suppressShockingEventTypeNextFrame(eventType: integer): void;

	/**
	 * Native: EVENT::UNBLOCK_DECISION_MAKER_EVENT
	 *
	 * Hash: 0xD7CD9CF34F2C99E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7CD9CF34F2C99E8)
	 */
	unblockDecisionMakerEvent(name: integer, eventType: integer): void;
}

interface GameDecisioneventMp extends GameDecisionevent {}
