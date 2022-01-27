/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameEventLegacy {
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
	 * Native: EVENT::SUPPRESS_AGITATION_EVENTS_NEXT_FRAME
	 *
	 * Hash: 0x5F3B7749C112D552 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F3B7749C112D552)
	 */
	suppressAgitationEventsNextFrame(): void;

	/**
	 * Native: EVENT::SUPPRESS_SHOCKING_EVENTS_NEXT_FRAME
	 *
	 * Hash: 0x2F9A292AD0A3BD89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F9A292AD0A3BD89)
	 */
	suppressShockingEventsNextFrame(): void;

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

interface GameEventUnk {}

interface GameEvent extends GameEventLegacy {
	/**
	 * Native: EVENT::ADD_SHOCKING_EVENT_AT_POSITION
	 *
	 * Hash: 0xD9F8455409B525E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9F8455409B525E9)
	 */
	addShockingAtPosition(eventType: integer, x: number, y: number, z: number, duration: number): Handle;

	/**
	 * Native: EVENT::ADD_SHOCKING_EVENT_FOR_ENTITY
	 *
	 * Hash: 0x7FD8F3BE76F89422 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FD8F3BE76F89422)
	 */
	addShockingForEntity(eventType: integer, entity: Handle, duration: number): Handle;

	/**
	 * Native: EVENT::BLOCK_DECISION_MAKER_EVENT
	 *
	 * Hash: 0xE42FCDFD0E4196F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE42FCDFD0E4196F7)
	 */
	blockDecisionMaker(name: integer, eventType: integer): void;

	/**
	 * Native: EVENT::CLEAR_DECISION_MAKER_EVENT_RESPONSE
	 *
	 * Hash: 0x4FC9381A7AEE8968 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4FC9381A7AEE8968)
	 */
	clearDecisionMakerResponse(name: integer, eventType: integer): void;

	/**
	 * Native: EVENT::IS_SHOCKING_EVENT_IN_SPHERE
	 *
	 * Hash: 0x1374ABB7C15BAB92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1374ABB7C15BAB92)
	 */
	isShockingInSphere(eventType: integer, x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: EVENT::REMOVE_ALL_SHOCKING_EVENTS
	 *
	 * Hash: 0xEAABE8FDFA21274C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAABE8FDFA21274C)
	 */
	removeAllShockingS(p0: boolean): void;

	/**
	 * Native: EVENT::REMOVE_SHOCKING_EVENT
	 *
	 * Hash: 0x2CDA538C44C6CCE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CDA538C44C6CCE5)
	 */
	removeShocking(event: Handle): boolean;

	/**
	 * Native: EVENT::REMOVE_SHOCKING_EVENT_SPAWN_BLOCKING_AREAS
	 *
	 * Hash: 0x340F1415B68AEADE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x340F1415B68AEADE)
	 */
	removeShockingSpawnBlockingAreas(): void;

	/**
	 * Native: EVENT::SET_DECISION_MAKER
	 *
	 * Hash: 0xB604A2942ADED0EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB604A2942ADED0EE)
	 */
	setDecisionMaker(ped: Handle, name: integer): void;

	/**
	 * Native: EVENT::SUPPRESS_SHOCKING_EVENT_TYPE_NEXT_FRAME
	 *
	 * Hash: 0x3FD2EC8BF1F1CF30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FD2EC8BF1F1CF30)
	 */
	suppressShockingTypeNextFrame(eventType: integer): void;

	/**
	 * Native: EVENT::UNBLOCK_DECISION_MAKER_EVENT
	 *
	 * Hash: 0xD7CD9CF34F2C99E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7CD9CF34F2C99E8)
	 */
	unblockDecisionMaker(name: integer, eventType: integer): void;

	unk: GameEventUnk;
}

interface GameEventMp extends GameEvent {}
