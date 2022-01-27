/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameScriptLegacy {
	/**
	 * Native: SCRIPT::DOES_SCRIPT_EXIST
	 *
	 * Hash: 0xFC04745FBE67C19A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC04745FBE67C19A)
	 */
	doesScriptExist(scriptName: string): boolean;

	/**
	 * Native: SCRIPT::_GET_NUMBER_OF_REFERENCES_OF_SCRIPT_WITH_NAME_HASH
	 *
	 * Hash: 0x2C83A9DA6BFFC4F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C83A9DA6BFFC4F9)
	 */
	getNumberOfInstancesOfStreamedScript(scriptHash: integer): integer;

	/**
	 * Native: SCRIPT::_GET_NAME_OF_THREAD
	 *
	 * Hash: 0x05A42BA9FC8DA96B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05A42BA9FC8DA96B)
	 */
	getThreadName(threadId: integer): string;

	/**
	 * Native: SCRIPT::HAS_SCRIPT_LOADED
	 *
	 * Hash: 0xE6CC9F3BA0FB9EF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6CC9F3BA0FB9EF1)
	 */
	hasScriptLoaded(scriptName: string): boolean;

	/**
	 * Native: SCRIPT::HAS_SCRIPT_WITH_NAME_HASH_LOADED
	 *
	 * Hash: 0x5F0F0C783EB16C04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F0F0C783EB16C04)
	 */
	hasStreamedScriptLoaded(scriptHash: integer): boolean;

	/**
	 * Native: SCRIPT::DOES_SCRIPT_WITH_NAME_HASH_EXIST
	 *
	 * Hash: 0xF86AA3C56BA31381 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF86AA3C56BA31381)
	 */
	isStreamedScriptRunning(scriptHash: integer): boolean;

	/**
	 * Native: SCRIPT::REQUEST_SCRIPT
	 *
	 * Hash: 0x6EB5F71AA68F2E8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EB5F71AA68F2E8E)
	 */
	requestScript(scriptName: string): void;

	/**
	 * Native: SCRIPT::REQUEST_SCRIPT_WITH_NAME_HASH
	 *
	 * Hash: 0xD62A67D26D9653E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD62A67D26D9653E6)
	 */
	requestStreamedScript(scriptHash: integer): void;

	/**
	 * Native: SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xC90D2DCACD56184C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC90D2DCACD56184C)
	 */
	setScriptAsNoLongerNeeded(scriptName: string): void;

	/**
	 * Native: SCRIPT::SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xC5BC038960E9DB27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5BC038960E9DB27)
	 */
	setStreamedScriptAsNoLongerNeeded(scriptHash: integer): void;

	/**
	 * Native: SCRIPT::TRIGGER_SCRIPT_EVENT
	 *
	 * Hash: 0x5AE99C571D5BBE5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AE99C571D5BBE5D)
	 */
	triggerScriptEvent(eventGroup: integer, eventDataSize: integer, playerBits: integer): integer;
}

interface GameScriptUnk {
	/**
	 * Native: SCRIPT::_0x0F6F1EBBC4E1D5E6
	 *
	 * Hash: 0x0F6F1EBBC4E1D5E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F6F1EBBC4E1D5E6)
	 */
	_0x0F6F1EBBC4E1D5E6(scriptIndex: integer, p1: string): boolean;

	/**
	 * Native: SCRIPT::_0x22E21FBCFC88C149
	 *
	 * Hash: 0x22E21FBCFC88C149 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22E21FBCFC88C149)
	 */
	_0x22E21FBCFC88C149(scriptIndex: integer, p1: string): integer;

	/**
	 * Native: SCRIPT::_0x760910B49D2B98EA
	 *
	 * Hash: 0x760910B49D2B98EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x760910B49D2B98EA)
	 */
	_0x760910B49D2B98EA(): void;

	/**
	 * Native: SCRIPT::_0x829CD22E043A2577
	 *
	 * Hash: 0x829CD22E043A2577 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x829CD22E043A2577)
	 */
	_0x829CD22E043A2577(p0: integer): integer;

	/**
	 * Native: SCRIPT::_0x836B62713E0534CA
	 *
	 * Hash: 0x836B62713E0534CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x836B62713E0534CA)
	 */
	_0x836B62713E0534CA(): boolean;

	/**
	 * Native: SCRIPT::_0xB1577667C3708F9B
	 *
	 * Hash: 0xB1577667C3708F9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1577667C3708F9B)
	 */
	_0xB1577667C3708F9B(): void;
}

interface GameScript extends GameScriptLegacy {
	/**
	 * Native: SCRIPT::BG_END_CONTEXT
	 *
	 * Hash: 0xDC2BACD920D0A0DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC2BACD920D0A0DD)
	 */
	bgEndContext(contextName: string): void;

	/**
	 * Native: SCRIPT::BG_END_CONTEXT_HASH
	 *
	 * Hash: 0x107E5CC7CA942BC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x107E5CC7CA942BC1)
	 */
	bgEndContextHash(contextHash: integer): void;

	/**
	 * Native: SCRIPT::BG_START_CONTEXT
	 *
	 * Hash: 0x9D5A25BADB742ACD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D5A25BADB742ACD)
	 */
	bgStartContext(contextName: string): void;

	/**
	 * Native: SCRIPT::BG_START_CONTEXT_HASH
	 *
	 * Hash: 0x75B18E49607874C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75B18E49607874C7)
	 */
	bgStartContextHash(contextHash: integer): void;

	/**
	 * Native: SCRIPT::DOES_SCRIPT_EXIST
	 *
	 * Hash: 0xFC04745FBE67C19A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC04745FBE67C19A)
	 */
	doesExist(scriptName: string): boolean;

	/**
	 * Native: SCRIPT::DOES_SCRIPT_WITH_NAME_HASH_EXIST
	 *
	 * Hash: 0xF86AA3C56BA31381 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF86AA3C56BA31381)
	 */
	doesWithNameHashExist(scriptHash: integer): boolean;

	/**
	 * Native: SCRIPT::GET_EVENT_AT_INDEX
	 *
	 * Hash: 0xD8F66A3A60C62153 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8F66A3A60C62153)
	 */
	getEventAtIndex(eventGroup: integer, eventIndex: integer): integer;

	/**
	 * Native: SCRIPT::GET_EVENT_DATA
	 *
	 * Hash: 0x2902843FCD2B2D79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2902843FCD2B2D79)
	 */
	getEventData(eventGroup: integer, eventIndex: integer, eventDataSize: integer): integer;

	/**
	 * Native: SCRIPT::GET_EVENT_EXISTS
	 *
	 * Hash: 0x936E6168A9BCEDB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x936E6168A9BCEDB5)
	 */
	getEventExists(eventGroup: integer, eventIndex: integer): boolean;

	/**
	 * Native: SCRIPT::GET_HASH_OF_THIS_SCRIPT_NAME
	 *
	 * Hash: 0x8A1C8B1738FFE87E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A1C8B1738FFE87E)
	 */
	getHashOfThisName(): integer;

	/**
	 * Native: SCRIPT::GET_ID_OF_THIS_THREAD
	 *
	 * Hash: 0xC30338E8088E2E21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC30338E8088E2E21)
	 */
	getIdOfThisThread(): integer;

	/**
	 * Native: SCRIPT::_GET_NAME_OF_THREAD
	 *
	 * Hash: 0x05A42BA9FC8DA96B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05A42BA9FC8DA96B)
	 */
	getNameOfThread(threadId: integer): string;

	/**
	 * Native: SCRIPT::GET_NO_LOADING_SCREEN
	 *
	 * Hash: 0x18C1270EA7F199BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18C1270EA7F199BC)
	 */
	getNoLoadingScreen(): boolean;

	/**
	 * Native: SCRIPT::GET_NUMBER_OF_EVENTS
	 *
	 * Hash: 0x5F92A689A06620AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F92A689A06620AA)
	 */
	getNumberOfEvents(eventGroup: integer): integer;

	/**
	 * Native: SCRIPT::_GET_NUMBER_OF_REFERENCES_OF_SCRIPT_WITH_NAME_HASH
	 *
	 * Hash: 0x2C83A9DA6BFFC4F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C83A9DA6BFFC4F9)
	 */
	getNumberOfReferencesOfWithNameHash(scriptHash: integer): integer;

	/**
	 * Native: SCRIPT::GET_THIS_SCRIPT_NAME
	 *
	 * Hash: 0x442E0A7EDE4A738A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x442E0A7EDE4A738A)
	 */
	getThisName(): string;

	/**
	 * Native: SCRIPT::HAS_SCRIPT_LOADED
	 *
	 * Hash: 0xE6CC9F3BA0FB9EF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6CC9F3BA0FB9EF1)
	 */
	hasLoaded(scriptName: string): boolean;

	/**
	 * Native: SCRIPT::HAS_SCRIPT_WITH_NAME_HASH_LOADED
	 *
	 * Hash: 0x5F0F0C783EB16C04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F0F0C783EB16C04)
	 */
	hasWithNameHashLoaded(scriptHash: integer): boolean;

	/**
	 * Native: SCRIPT::IS_THREAD_ACTIVE
	 *
	 * Hash: 0x46E9AE36D8FA6417 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46E9AE36D8FA6417)
	 */
	isThreadActive(threadId: integer): boolean;

	/**
	 * Native: SCRIPT::REQUEST_SCRIPT
	 *
	 * Hash: 0x6EB5F71AA68F2E8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EB5F71AA68F2E8E)
	 */
	request(scriptName: string): void;

	/**
	 * Native: SCRIPT::REQUEST_SCRIPT_WITH_NAME_HASH
	 *
	 * Hash: 0xD62A67D26D9653E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD62A67D26D9653E6)
	 */
	requestWithNameHash(scriptHash: integer): void;

	/**
	 * Native: SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xC90D2DCACD56184C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC90D2DCACD56184C)
	 */
	setAsNoLongerNeeded(scriptName: string): void;

	/**
	 * Native: SCRIPT::SET_NO_LOADING_SCREEN
	 *
	 * Hash: 0x5262CC1995D07E09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5262CC1995D07E09)
	 */
	setNoLoadingScreen(toggle: boolean): void;

	/**
	 * Native: SCRIPT::SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xC5BC038960E9DB27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5BC038960E9DB27)
	 */
	setWithNameHashAsNoLongerNeeded(scriptHash: integer): void;

	/**
	 * Native: SCRIPT::SHUTDOWN_LOADING_SCREEN
	 *
	 * Hash: 0x078EBE9809CCD637 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x078EBE9809CCD637)
	 */
	shutdownLoadingScreen(): void;

	/**
	 * Native: SCRIPT::TERMINATE_THIS_THREAD
	 *
	 * Hash: 0x1090044AD1DA76FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1090044AD1DA76FA)
	 */
	terminateThisThread(): void;

	/**
	 * Native: SCRIPT::TERMINATE_THREAD
	 *
	 * Hash: 0xC8B189ED9138BCD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8B189ED9138BCD4)
	 */
	terminateThread(threadId: integer): void;

	/**
	 * Native: SCRIPT::SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID
	 *
	 * Hash: 0x30B4FA1C82DD4B9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30B4FA1C82DD4B9F)
	 */
	threadIteratorGetNextThreadId(): integer;

	/**
	 * Native: SCRIPT::SCRIPT_THREAD_ITERATOR_RESET
	 *
	 * Hash: 0xDADFADA5A20143A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDADFADA5A20143A8)
	 */
	threadIteratorReset(): void;

	/**
	 * Native: SCRIPT::TRIGGER_SCRIPT_EVENT
	 *
	 * Hash: 0x5AE99C571D5BBE5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AE99C571D5BBE5D)
	 */
	triggerEvent(eventGroup: integer, eventDataSize: integer, playerBits: integer): integer;

	/**
	 * Native: SCRIPT::_TRIGGER_SCRIPT_EVENT_2
	 *
	 * Hash: 0xA40CC53DF8E50837 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA40CC53DF8E50837)
	 */
	triggerEvent2(eventGroup: integer, eventDataSize: integer, playerBits: integer): integer;

	unk: GameScriptUnk;
}

interface GameScriptMp extends GameScript {}
