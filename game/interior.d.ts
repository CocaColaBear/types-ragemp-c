/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetInteriorInfoResult {
	position: Vector3Mp;
	nameHash: integer;
}

interface GameInteriorLegacy {
	/**
	 * Native: INTERIOR::ADD_PICKUP_TO_INTERIOR_ROOM_BY_NAME
	 *
	 * Hash: 0x3F6167F351168730 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F6167F351168730)
	 */
	addPickupToInteriorRoomByName(pickup: Handle, roomName: string): void;

	/**
	 * Native: INTERIOR::IS_COLLISION_MARKED_OUTSIDE
	 *
	 * Hash: 0xEEA5AC2EDA7C33E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEA5AC2EDA7C33E8)
	 */
	areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;

	/**
	 * Native: INTERIOR::CAP_INTERIOR
	 *
	 * Hash: 0xD9175F941610DB54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9175F941610DB54)
	 */
	capInterior(interior: Handle, toggle: boolean): void;

	/**
	 * Native: INTERIOR::DISABLE_INTERIOR
	 *
	 * Hash: 0x6170941419D7D8EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6170941419D7D8EC)
	 */
	disableInterior(interior: Handle, toggle: boolean): void;

	/**
	 * Native: INTERIOR::DEACTIVATE_INTERIOR_ENTITY_SET
	 *
	 * Hash: 0x420BD37289EEE162 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x420BD37289EEE162)
	 */
	disableInteriorProp(interior: Handle, entitySetName: string): void;

	/**
	 * Native: INTERIOR::ACTIVATE_INTERIOR_ENTITY_SET
	 *
	 * Hash: 0x55E86AF2712B36A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55E86AF2712B36A1)
	 */
	enableInteriorProp(interior: Handle, entitySetName: string): void;

	/**
	 * Native: INTERIOR::GET_INTERIOR_AT_COORDS
	 *
	 * Hash: 0xB0F7F8663821D9C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0F7F8663821D9C3)
	 */
	getInteriorAtCoords(x: number, y: number, z: number): Handle;

	/**
	 * Native: INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE
	 *
	 * Hash: 0x05B7A89BD78797FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05B7A89BD78797FC)
	 */
	getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): Handle;

	/**
	 * Native: INTERIOR::GET_INTERIOR_FROM_COLLISION
	 *
	 * Hash: 0xEC4CF9FCB29A4424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC4CF9FCB29A4424)
	 */
	getInteriorFromCollision(x: number, y: number, z: number): integer;

	/**
	 * Native: INTERIOR::GET_INTERIOR_GROUP_ID
	 *
	 * Hash: 0xE4A84ABF135EF91A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4A84ABF135EF91A)
	 */
	getInteriorGroupId(interior: Handle): integer;

	/**
	 * Native: INTERIOR::GET_OFFSET_FROM_INTERIOR_IN_WORLD_COORDS
	 *
	 * Hash: 0x9E3B3E6D66F6E22F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E3B3E6D66F6E22F)
	 */
	getOffsetFromInteriorInWorldCoords(interior: Handle, x: number, y: number, z: number): Vector3Mp;

	/**
	 * Native: INTERIOR::ENABLE_EXTERIOR_CULL_MODEL_THIS_FRAME
	 *
	 * Hash: 0xA97F257D0151A6AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA97F257D0151A6AB)
	 */
	hideMapObjectThisFrame(mapObjectHash: integer): void;

	/**
	 * Native: INTERIOR::IS_INTERIOR_CAPPED
	 *
	 * Hash: 0x92BAC8ACF88CEC26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92BAC8ACF88CEC26)
	 */
	isInteriorCapped(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_DISABLED
	 *
	 * Hash: 0xBC5115A5A939DD15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC5115A5A939DD15)
	 */
	isInteriorDisabled(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_ENTITY_SET_ACTIVE
	 *
	 * Hash: 0x35F7DD45E8C0A16D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35F7DD45E8C0A16D)
	 */
	isInteriorPropEnabled(interior: Handle, entitySetName: string): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_READY
	 *
	 * Hash: 0x6726BDCCC1932F0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6726BDCCC1932F0E)
	 */
	isInteriorReady(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::IS_VALID_INTERIOR
	 *
	 * Hash: 0x26B0E73D7EAAF4D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26B0E73D7EAAF4D3)
	 */
	isValidInterior(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::REFRESH_INTERIOR
	 *
	 * Hash: 0x41F37C3427C75AE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41F37C3427C75AE0)
	 */
	refreshInterior(interior: Handle): void;

	/**
	 * Native: INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPEHASH
	 *
	 * Hash: 0xF0F77ADB9F67E79D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0F77ADB9F67E79D)
	 */
	unkGetInteriorAtCoords(x: number, y: number, z: number, typeHash: integer): Handle;

	/**
	 * Native: INTERIOR::UNPIN_INTERIOR
	 *
	 * Hash: 0x261CCE7EED010641 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x261CCE7EED010641)
	 */
	unpinInterior(interior: Handle): void;
}

interface GameInteriorUnk {
	/**
	 * Native: INTERIOR::_0x38C1CB1CB119A016
	 *
	 * Hash: 0x38C1CB1CB119A016 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38C1CB1CB119A016)
	 */
	_0x38C1CB1CB119A016(p0: integer, p1: integer): void;

	/**
	 * Native: INTERIOR::_0x405DC2AEF6AF95B9
	 *
	 * Hash: 0x405DC2AEF6AF95B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x405DC2AEF6AF95B9)
	 */
	_0x405DC2AEF6AF95B9(roomHashKey: integer): void;

	/**
	 * Native: INTERIOR::_0x483ACA1176CA93F1
	 *
	 * Hash: 0x483ACA1176CA93F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x483ACA1176CA93F1)
	 */
	_0x483ACA1176CA93F1(): void;

	/**
	 * Native: INTERIOR::_0x4C2330E61D3DEB56
	 *
	 * Hash: 0x4C2330E61D3DEB56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C2330E61D3DEB56)
	 */
	_0x4C2330E61D3DEB56(interior: Handle): integer;

	/**
	 * Native: INTERIOR::_0x7241CCB7D020DB69
	 *
	 * Hash: 0x7241CCB7D020DB69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7241CCB7D020DB69)
	 */
	_0x7241CCB7D020DB69(entity: Handle, toggle: boolean): void;

	/**
	 * Native: INTERIOR::_0x7ECDF98587E92DEC
	 *
	 * Hash: 0x7ECDF98587E92DEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7ECDF98587E92DEC)
	 */
	_0x7ECDF98587E92DEC(p0: integer): void;

	/**
	 * Native: INTERIOR::_0x82EBB79E258FA2B7
	 *
	 * Hash: 0x82EBB79E258FA2B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82EBB79E258FA2B7)
	 */
	_0x82EBB79E258FA2B7(entity: Handle, interior: Handle): void;

	/**
	 * Native: INTERIOR::_0x9E6542F0CE8E70A3
	 *
	 * Hash: 0x9E6542F0CE8E70A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E6542F0CE8E70A3)
	 */
	_0x9E6542F0CE8E70A3(toggle: boolean): void;

	/**
	 * Native: INTERIOR::_0xAF348AFCB575A441
	 *
	 * Hash: 0xAF348AFCB575A441 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF348AFCB575A441)
	 */
	_0xAF348AFCB575A441(roomName: string): void;
}

interface GameInterior extends GameInteriorLegacy {
	/**
	 * Native: INTERIOR::ACTIVATE_INTERIOR_ENTITY_SET
	 *
	 * Hash: 0x55E86AF2712B36A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55E86AF2712B36A1)
	 */
	activateEntitySet(interior: Handle, entitySetName: string): void;

	/**
	 * Native: INTERIOR::ADD_PICKUP_TO_INTERIOR_ROOM_BY_NAME
	 *
	 * Hash: 0x3F6167F351168730 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F6167F351168730)
	 */
	addPickupToRoomByName(pickup: Handle, roomName: string): void;

	/**
	 * Native: INTERIOR::CAP_INTERIOR
	 *
	 * Hash: 0xD9175F941610DB54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9175F941610DB54)
	 */
	cap(interior: Handle, toggle: boolean): void;

	/**
	 * Native: INTERIOR::_CLEAR_INTERIOR_FOR_ENTITY
	 *
	 * Hash: 0x85D5422B2039A70D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85D5422B2039A70D)
	 */
	clearForEntity(entity: Handle): void;

	/**
	 * Native: INTERIOR::CLEAR_ROOM_FOR_ENTITY
	 *
	 * Hash: 0xB365FC0C4E27FFA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB365FC0C4E27FFA7)
	 */
	clearRoomForEntity(entity: Handle): void;

	/**
	 * Native: INTERIOR::CLEAR_ROOM_FOR_GAME_VIEWPORT
	 *
	 * Hash: 0x23B59D8912F94246 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23B59D8912F94246)
	 */
	clearRoomForGameViewport(): void;

	/**
	 * Native: INTERIOR::DEACTIVATE_INTERIOR_ENTITY_SET
	 *
	 * Hash: 0x420BD37289EEE162 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x420BD37289EEE162)
	 */
	deactivateEntitySet(interior: Handle, entitySetName: string): void;

	/**
	 * Native: INTERIOR::DISABLE_INTERIOR
	 *
	 * Hash: 0x6170941419D7D8EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6170941419D7D8EC)
	 */
	disable(interior: Handle, toggle: boolean): void;

	/**
	 * Native: INTERIOR::ENABLE_EXTERIOR_CULL_MODEL_THIS_FRAME
	 *
	 * Hash: 0xA97F257D0151A6AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA97F257D0151A6AB)
	 */
	enableExteriorCullModelThisFrame(mapObjectHash: integer): void;

	/**
	 * Native: INTERIOR::_ENABLE_SCRIPT_CULL_MODEL_THIS_FRAME
	 *
	 * Hash: 0x50C375537449F369 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50C375537449F369)
	 */
	enableScriptCullModelThisFrame(mapObjectHash: integer): void;

	/**
	 * Native: INTERIOR::FORCE_ROOM_FOR_ENTITY
	 *
	 * Hash: 0x52923C4710DD9907 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52923C4710DD9907)
	 */
	forceRoomForEntity(entity: Handle, interior: Handle, roomHashKey: integer): void;

	/**
	 * Native: INTERIOR::FORCE_ROOM_FOR_GAME_VIEWPORT
	 *
	 * Hash: 0x920D853F3E17F1DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x920D853F3E17F1DA)
	 */
	forceRoomForGameViewport(interiorID: integer, roomHashKey: integer): void;

	/**
	 * Native: INTERIOR::GET_INTERIOR_AT_COORDS
	 *
	 * Hash: 0xB0F7F8663821D9C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0F7F8663821D9C3)
	 */
	getAtCoords(x: number, y: number, z: number): Handle;

	/**
	 * Native: INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE
	 *
	 * Hash: 0x05B7A89BD78797FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05B7A89BD78797FC)
	 */
	getAtCoordsWithType(x: number, y: number, z: number, interiorType: string): Handle;

	/**
	 * Native: INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPEHASH
	 *
	 * Hash: 0xF0F77ADB9F67E79D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0F77ADB9F67E79D)
	 */
	getAtCoordsWithTypehash(x: number, y: number, z: number, typeHash: integer): Handle;

	/**
	 * Native: INTERIOR::GET_INTERIOR_FROM_COLLISION
	 *
	 * Hash: 0xEC4CF9FCB29A4424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC4CF9FCB29A4424)
	 */
	getFromCollision(x: number, y: number, z: number): integer;

	/**
	 * Native: INTERIOR::GET_INTERIOR_FROM_ENTITY
	 *
	 * Hash: 0x2107BA504071A6BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2107BA504071A6BB)
	 */
	getFromEntity(entity: Handle): Handle;

	/**
	 * Native: INTERIOR::_GET_INTERIOR_FROM_GAMEPLAY_CAM
	 *
	 * Hash: 0xE7D267EC6CA966C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7D267EC6CA966C3)
	 */
	getFromGameplayCam(): Handle;

	/**
	 * Native: INTERIOR::GET_INTERIOR_GROUP_ID
	 *
	 * Hash: 0xE4A84ABF135EF91A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4A84ABF135EF91A)
	 */
	getGroupId(interior: Handle): integer;

	/**
	 * Native: INTERIOR::_GET_INTERIOR_HEADING
	 *
	 * Hash: 0xF49B58631D9E22D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF49B58631D9E22D9)
	 */
	getHeading(interior: Handle): number;

	/**
	 * Native: INTERIOR::_GET_INTERIOR_INFO
	 *
	 * Hash: 0x252BDC06B73FA6EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x252BDC06B73FA6EA)
	 */
	getInfo(interior: Handle): GetInteriorInfoResult;

	/**
	 * Native: INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM
	 *
	 * Hash: 0x399685DB942336BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x399685DB942336BC)
	 */
	getKeyForEntityInRoom(entity: Handle): integer;

	/**
	 * Native: INTERIOR::GET_OFFSET_FROM_INTERIOR_IN_WORLD_COORDS
	 *
	 * Hash: 0x9E3B3E6D66F6E22F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E3B3E6D66F6E22F)
	 */
	getOffsetFromInWorldCoords(interior: Handle, x: number, y: number, z: number): Vector3Mp;

	/**
	 * Native: INTERIOR::GET_ROOM_KEY_FOR_GAME_VIEWPORT
	 *
	 * Hash: 0xA6575914D2A0B450 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6575914D2A0B450)
	 */
	getRoomKeyForGameViewport(): integer;

	/**
	 * Native: INTERIOR::GET_ROOM_KEY_FROM_ENTITY
	 *
	 * Hash: 0x47C2A06D4F5F424B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47C2A06D4F5F424B)
	 */
	getRoomKeyFromEntity(entity: Handle): integer;

	/**
	 * Native: INTERIOR::IS_INTERIOR_CAPPED
	 *
	 * Hash: 0x92BAC8ACF88CEC26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92BAC8ACF88CEC26)
	 */
	isCapped(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::IS_COLLISION_MARKED_OUTSIDE
	 *
	 * Hash: 0xEEA5AC2EDA7C33E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEA5AC2EDA7C33E8)
	 */
	isCollisionMarkedOutside(x: number, y: number, z: number): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_DISABLED
	 *
	 * Hash: 0xBC5115A5A939DD15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC5115A5A939DD15)
	 */
	isDisabled(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_ENTITY_SET_ACTIVE
	 *
	 * Hash: 0x35F7DD45E8C0A16D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35F7DD45E8C0A16D)
	 */
	isEntitySetActive(interior: Handle, entitySetName: string): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_READY
	 *
	 * Hash: 0x6726BDCCC1932F0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6726BDCCC1932F0E)
	 */
	isReady(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::IS_INTERIOR_SCENE
	 *
	 * Hash: 0xBC72B5D7A1CBD54D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC72B5D7A1CBD54D)
	 */
	isScene(): boolean;

	/**
	 * Native: INTERIOR::IS_VALID_INTERIOR
	 *
	 * Hash: 0x26B0E73D7EAAF4D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26B0E73D7EAAF4D3)
	 */
	isValid(interior: Handle): boolean;

	/**
	 * Native: INTERIOR::PIN_INTERIOR_IN_MEMORY
	 *
	 * Hash: 0x2CA429C029CCF247 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CA429C029CCF247)
	 */
	pinInMemory(interior: Handle): void;

	/**
	 * Native: INTERIOR::REFRESH_INTERIOR
	 *
	 * Hash: 0x41F37C3427C75AE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41F37C3427C75AE0)
	 */
	refresh(interior: Handle): void;

	/**
	 * Native: INTERIOR::_SET_INTERIOR_ENTITY_SET_COLOR
	 *
	 * Hash: 0xC1F1920BAF281317 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1F1920BAF281317)
	 */
	setEntitySetColor(interior: Handle, entitySetName: string, color: integer): void;

	/**
	 * Native: INTERIOR::UNPIN_INTERIOR
	 *
	 * Hash: 0x261CCE7EED010641 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x261CCE7EED010641)
	 */
	unpin(interior: Handle): void;

	unk: GameInteriorUnk;
}

interface GameInteriorMp extends GameInterior {}
