/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface _0xA4A0065E39C9F25CResult {
	p0: Vector3Mp;
	p1: number;
	fadeInAfterLoad: boolean;
	p3: boolean;
	result: boolean;
}

interface CopyMemoryResult {
	dst: integer;
	src: integer;
}

interface GetBaseElementMetadataResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface GetGroundZAndNormalFor3dCoordResult {
	groundZ: number;
	normal: Vector3Mp;
	result: boolean;
}

interface GetModelDimensionsResult {
	minimum: Vector3Mp;
	maximum: Vector3Mp;
}

interface GetProjectileNearPedResult {
	outCoords: Vector3Mp;
	outProjectile: Handle;
	result: boolean;
}

interface GetWeatherTypeTransitionResult {
	weatherType1: integer;
	weatherType2: integer;
	percentWeather2: number;
}

interface RegisterSaveHouseResult {
	p4: integer;
	result: integer;
}

interface ScriptRaceGetPlayerSplitTimeResult {
	p1: integer;
	p2: integer;
	result: boolean;
}

interface SlerpNearQuaternionResult {
	outX: number;
	outY: number;
	outZ: number;
	outW: number;
}

interface GameMiscLegacy {
	/**
	 * Native: MISC::CLEAR_AREA_LEAVE_VEHICLE_HEALTH
	 *
	 * Hash: 0x957838AAF91BD12D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x957838AAF91BD12D)
	 */
	clearAreaOfEverything(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: MISC::PAUSE_DEATH_ARREST_RESTART
	 *
	 * Hash: 0x2C2B3493FBF51C71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C2B3493FBF51C71)
	 */
	disableAutomaticRespawn(toggle: boolean): void;

	/**
	 * Native: MISC::SET_INSTANCE_PRIORITY_MODE
	 *
	 * Hash: 0x9BAE5AD2508DF078 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BAE5AD2508DF078)
	 */
	enableMpDlcMaps(p0: integer): void;

	/**
	 * Native: MISC::GET_NUMBER_OF_FREE_STACKS_OF_THIS_SIZE
	 *
	 * Hash: 0xFEAD16FC8F9DFC0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEAD16FC8F9DFC0F)
	 */
	getFreeStackSlotsCount(stackSize: integer): integer;

	/**
	 * Native: MISC::LOAD_CLOUD_HAT
	 *
	 * Hash: 0xFC4842A34657BFCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC4842A34657BFCB)
	 */
	setCloudHatTransition(name: string, transitionTime: number): void;

	/**
	 * Native: MISC::_SET_RAIN_LEVEL
	 *
	 * Hash: 0x643E26EA6E024D92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x643E26EA6E024D92)
	 */
	setRainFxIntensity(intensity: number): void;

	/**
	 * Native: MISC::SET_INSTANCE_PRIORITY_HINT
	 *
	 * Hash: 0xC5F0A8EBD3F361CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5F0A8EBD3F361CE)
	 */
	setUnkMapFlag(flag: integer): void;

	/**
	 * Native: MISC::SET_WEATHER_TYPE_OVERTIME_PERSIST
	 *
	 * Hash: 0xFB5045B7C42B75BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB5045B7C42B75BF)
	 */
	setWeatherTypeOverTime(weatherType: string, time: number): void;

	/**
	 * Native: MISC::START_SAVE_ARRAY_WITH_SIZE
	 *
	 * Hash: 0x60FE567DF1B1AF9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60FE567DF1B1AF9D)
	 */
	startSaveArray(size: integer, arrayName: string): integer;

	/**
	 * Native: MISC::START_SAVE_STRUCT_WITH_SIZE
	 *
	 * Hash: 0xBF737600CDDBEADD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF737600CDDBEADD)
	 */
	startSaveStruct(size: integer, structName: string): integer;
}

interface GameMiscUnk {
	/**
	 * Native: MISC::_0x02DEAAC8F8EA7FE7
	 *
	 * Hash: 0x02DEAAC8F8EA7FE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02DEAAC8F8EA7FE7)
	 */
	_0x02DEAAC8F8EA7FE7(p0: string): void;

	/**
	 * Native: MISC::_0x1178E104409FE58C
	 *
	 * Hash: 0x1178E104409FE58C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1178E104409FE58C)
	 */
	_0x1178E104409FE58C(weatherType: string, p1: boolean): void;

	/**
	 * Native: MISC::_0x19BFED045C647C49
	 *
	 * Hash: 0x19BFED045C647C49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19BFED045C647C49)
	 */
	_0x19BFED045C647C49(ped: Handle): boolean;

	/**
	 * Native: MISC::_0x1BB299305C3E8C13
	 *
	 * Hash: 0x1BB299305C3E8C13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BB299305C3E8C13)
	 */
	_0x1BB299305C3E8C13(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: MISC::_0x1EAE0A6E978894A2
	 *
	 * Hash: 0x1EAE0A6E978894A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EAE0A6E978894A2)
	 */
	_0x1EAE0A6E978894A2(p0: integer, p1: boolean): void;

	/**
	 * Native: MISC::_0x21C235BC64831E5A
	 *
	 * Hash: 0x21C235BC64831E5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21C235BC64831E5A)
	 */
	_0x21C235BC64831E5A(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean
	): Vector3Mp;

	/**
	 * Native: MISC::_0x23227DF0B2115469
	 *
	 * Hash: 0x23227DF0B2115469 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23227DF0B2115469)
	 */
	_0x23227DF0B2115469(): void;

	/**
	 * Native: MISC::_0x31125FD509D9043F
	 *
	 * Hash: 0x31125FD509D9043F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31125FD509D9043F)
	 */
	_0x31125FD509D9043F(p0: string): void;

	/**
	 * Native: MISC::_0x39455BF4F4F55186
	 *
	 * Hash: 0x39455BF4F4F55186 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39455BF4F4F55186)
	 */
	_0x39455BF4F4F55186(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer,
		p10: integer,
		p11: integer,
		p12: integer
	): integer;

	/**
	 * Native: MISC::_0x397BAA01068BAA96
	 *
	 * Hash: 0x397BAA01068BAA96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x397BAA01068BAA96)
	 */
	_0x397BAA01068BAA96(): integer;

	/**
	 * Native: MISC::_0x48F069265A0E4BEC
	 *
	 * Hash: 0x48F069265A0E4BEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48F069265A0E4BEC)
	 */
	_0x48F069265A0E4BEC(name: string): integer;

	/**
	 * Native: MISC::_0x4DCDF92BF64236CD
	 *
	 * Hash: 0x4DCDF92BF64236CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4DCDF92BF64236CD)
	 */
	_0x4DCDF92BF64236CD(p0: string, p1: string): void;

	/**
	 * Native: MISC::_0x54F157E0336A3822
	 *
	 * Hash: 0x54F157E0336A3822 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54F157E0336A3822)
	 */
	_0x54F157E0336A3822(ped: Handle, p1: string, p2: number): void;

	/**
	 * Native: MISC::_0x65D2EBB47E1CEC21
	 *
	 * Hash: 0x65D2EBB47E1CEC21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65D2EBB47E1CEC21)
	 */
	_0x65D2EBB47E1CEC21(toggle: boolean): void;

	/**
	 * Native: MISC::_0x693478ACBD7F18E7
	 *
	 * Hash: 0x693478ACBD7F18E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x693478ACBD7F18E7)
	 */
	_0x693478ACBD7F18E7(): void;

	/**
	 * Native: MISC::_0x6F2135B6129620C1
	 *
	 * Hash: 0x6F2135B6129620C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F2135B6129620C1)
	 */
	_0x6F2135B6129620C1(toggle: boolean): void;

	/**
	 * Native: MISC::_0x6FDDF453C0C756EC
	 *
	 * Hash: 0x6FDDF453C0C756EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FDDF453C0C756EC)
	 */
	_0x6FDDF453C0C756EC(): boolean;

	/**
	 * Native: MISC::_0x703CC7F60CBB2B57
	 *
	 * Hash: 0x703CC7F60CBB2B57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x703CC7F60CBB2B57)
	 */
	_0x703CC7F60CBB2B57(p0: string): void;

	/**
	 * Native: MISC::_0x7EC6F9A478A6A512
	 *
	 * Hash: 0x7EC6F9A478A6A512 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EC6F9A478A6A512)
	 */
	_0x7EC6F9A478A6A512(): void;

	/**
	 * Native: MISC::_0x7F8F6405F4777AF6
	 *
	 * Hash: 0x7F8F6405F4777AF6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F8F6405F4777AF6)
	 */
	_0x7F8F6405F4777AF6(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean
	): number;

	/**
	 * Native: MISC::_0x8269816F6CFD40F8
	 *
	 * Hash: 0x8269816F6CFD40F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8269816F6CFD40F8)
	 */
	_0x8269816F6CFD40F8(name: string): integer;

	/**
	 * Native: MISC::_0x8951EB9C6906D3C8
	 *
	 * Hash: 0x8951EB9C6906D3C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8951EB9C6906D3C8)
	 */
	_0x8951EB9C6906D3C8(): void;

	/**
	 * Native: MISC::_0x8D74E26F54B4E5C3
	 *
	 * Hash: 0x8D74E26F54B4E5C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D74E26F54B4E5C3)
	 */
	_0x8D74E26F54B4E5C3(p0: string): void;

	/**
	 * Native: MISC::_0x916CA67D26FD1E37
	 *
	 * Hash: 0x916CA67D26FD1E37 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x916CA67D26FD1E37)
	 */
	_0x916CA67D26FD1E37(p0: string): void;

	/**
	 * Native: MISC::_0x97E7E2C04245115B
	 *
	 * Hash: 0x97E7E2C04245115B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97E7E2C04245115B)
	 */
	_0x97E7E2C04245115B(p0: integer): void;

	/**
	 * Native: MISC::_0xA0AD167E4B39D9A2
	 *
	 * Hash: 0xA0AD167E4B39D9A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0AD167E4B39D9A2)
	 */
	_0xA0AD167E4B39D9A2(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer,
		p10: integer,
		p11: integer,
		p12: integer,
		p13: integer
	): integer;

	/**
	 * Native: MISC::_0xA4A0065E39C9F25C
	 *
	 * Hash: 0xA4A0065E39C9F25C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4A0065E39C9F25C)
	 */
	_0xA4A0065E39C9F25C(): _0xA4A0065E39C9F25CResult;

	/**
	 * Native: MISC::_0xB51B9AB9EF81868C
	 *
	 * Hash: 0xB51B9AB9EF81868C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB51B9AB9EF81868C)
	 */
	_0xB51B9AB9EF81868C(toggle: boolean): void;

	/**
	 * Native: MISC::_0xBA4B8D83BDC75551
	 *
	 * Hash: 0xBA4B8D83BDC75551 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA4B8D83BDC75551)
	 */
	_0xBA4B8D83BDC75551(p0: string): void;

	/**
	 * Native: MISC::_0xD10282B6E3751BA0
	 *
	 * Hash: 0xD10282B6E3751BA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD10282B6E3751BA0)
	 */
	_0xD10282B6E3751BA0(): integer;

	/**
	 * Native: MISC::_0xD9F692D349249528
	 *
	 * Hash: 0xD9F692D349249528 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9F692D349249528)
	 */
	_0xD9F692D349249528(): void;

	/**
	 * Native: MISC::_0xE3D969D2785FFB5E
	 *
	 * Hash: 0xE3D969D2785FFB5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3D969D2785FFB5E)
	 */
	_0xE3D969D2785FFB5E(): void;

	/**
	 * Native: MISC::_0xE532EC1A63231B4F
	 *
	 * Hash: 0xE532EC1A63231B4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE532EC1A63231B4F)
	 */
	_0xE532EC1A63231B4F(p0: integer, p1: integer): void;

	/**
	 * Native: MISC::_0xE95B0C7D5BA3B96B
	 *
	 * Hash: 0xE95B0C7D5BA3B96B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE95B0C7D5BA3B96B)
	 */
	_0xE95B0C7D5BA3B96B(ped: Handle): boolean;

	/**
	 * Native: MISC::_0xEB078CA2B5E82ADD
	 *
	 * Hash: 0xEB078CA2B5E82ADD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB078CA2B5E82ADD)
	 */
	_0xEB078CA2B5E82ADD(p0: string, p1: string): void;

	/**
	 * Native: MISC::_0xEB2104E905C6F2E9
	 *
	 * Hash: 0xEB2104E905C6F2E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB2104E905C6F2E9)
	 */
	_0xEB2104E905C6F2E9(): integer;

	/**
	 * Native: MISC::_0xEBD3205A207939ED
	 *
	 * Hash: 0xEBD3205A207939ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBD3205A207939ED)
	 */
	_0xEBD3205A207939ED(p0: string): void;

	/**
	 * Native: MISC::_0xF56DFB7B61BE7276
	 *
	 * Hash: 0xF56DFB7B61BE7276 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF56DFB7B61BE7276)
	 */
	_0xF56DFB7B61BE7276(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number
	): number;

	/**
	 * Native: MISC::_0xFA3FFB0EEBC288A3
	 *
	 * Hash: 0xFA3FFB0EEBC288A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA3FFB0EEBC288A3)
	 */
	_0xFA3FFB0EEBC288A3(p0: boolean): void;

	/**
	 * Native: MISC::_0xFAA457EF263E8763
	 *
	 * Hash: 0xFAA457EF263E8763 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAA457EF263E8763)
	 */
	_0xFAA457EF263E8763(name: string): integer;

	/**
	 * Native: MISC::_0xFB00CA71DA386228
	 *
	 * Hash: 0xFB00CA71DA386228 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB00CA71DA386228)
	 */
	_0xFB00CA71DA386228(): void;

	/**
	 * Native: MISC::_0xFB80AB299D2EE1BD
	 *
	 * Hash: 0xFB80AB299D2EE1BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB80AB299D2EE1BD)
	 */
	_0xFB80AB299D2EE1BD(toggle: boolean): void;
}

interface GameMisc extends GameMiscLegacy {
	/**
	 * Native: MISC::ABSF
	 *
	 * Hash: 0x73D57CFFDD12C355 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73D57CFFDD12C355)
	 */
	absf(value: number): number;

	/**
	 * Native: MISC::ABSI
	 *
	 * Hash: 0xF0D31AD191A74F87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0D31AD191A74F87)
	 */
	absi(value: integer): integer;

	/**
	 * Native: MISC::ACOS
	 *
	 * Hash: 0x1D08B970013C34B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D08B970013C34B6)
	 */
	acos(p0: number): number;

	/**
	 * Native: MISC::ACTION_MANAGER_ENABLE_ACTION
	 *
	 * Hash: 0xA6A12939F16D85BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6A12939F16D85BE)
	 */
	actionManagerEnableAction(hash: integer, enable: boolean): void;

	/**
	 * Native: MISC::_ADD_DISPATCH_SPAWN_BLOCKING_ANGLED_AREA
	 *
	 * Hash: 0x918C7B2D2FF3928B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x918C7B2D2FF3928B)
	 */
	addDispatchSpawnBlockingAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number
	): integer;

	/**
	 * Native: MISC::_ADD_DISPATCH_SPAWN_BLOCKING_AREA
	 *
	 * Hash: 0x2D4259F1FEB81DA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D4259F1FEB81DA9)
	 */
	addDispatchSpawnBlockingArea(x1: number, y1: number, x2: number, y2: number): integer;

	/**
	 * Native: MISC::ADD_HOSPITAL_RESTART
	 *
	 * Hash: 0x1F464EF988465A81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F464EF988465A81)
	 */
	addHospitalRestart(x: number, y: number, z: number, p3: number, p4: integer): integer;

	/**
	 * Native: MISC::ADD_POLICE_RESTART
	 *
	 * Hash: 0x452736765B31FC4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x452736765B31FC4B)
	 */
	addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: integer): integer;

	/**
	 * Native: MISC::ADD_POP_MULTIPLIER_AREA
	 *
	 * Hash: 0x67F6413D3220E18D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67F6413D3220E18D)
	 */
	addPopMultiplierArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: boolean
	): integer;

	/**
	 * Native: MISC::ADD_POP_MULTIPLIER_SPHERE
	 *
	 * Hash: 0x32C7A7E8C43A1F80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32C7A7E8C43A1F80)
	 */
	addPopMultiplierSphere(
		x: number,
		y: number,
		z: number,
		radius: number,
		pedMultiplier: number,
		vehicleMultiplier: number,
		p6: boolean,
		p7: boolean
	): integer;

	/**
	 * Native: MISC::ADD_REPLAY_STAT_VALUE
	 *
	 * Hash: 0x69FE6DC87BD2A5E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69FE6DC87BD2A5E9)
	 */
	addReplayStatValue(value: integer): void;

	/**
	 * Native: MISC::ADD_STUNT_JUMP
	 *
	 * Hash: 0x1A992DA297A4630C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A992DA297A4630C)
	 */
	addStuntJump(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		x4: number,
		y4: number,
		z4: number,
		camX: number,
		camY: number,
		camZ: number,
		p15: integer,
		p16: integer,
		p17: integer
	): integer;

	/**
	 * Native: MISC::ADD_STUNT_JUMP_ANGLED
	 *
	 * Hash: 0xBBE5D803A5360CBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBE5D803A5360CBF)
	 */
	addStuntJumpAngled(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius1: number,
		x3: number,
		y3: number,
		z3: number,
		x4: number,
		y4: number,
		z4: number,
		radius2: number,
		camX: number,
		camY: number,
		camZ: number,
		p17: integer,
		p18: integer,
		p19: integer
	): integer;

	/**
	 * Native: MISC::_ADD_TACTICAL_ANALYSIS_POINT
	 *
	 * Hash: 0xB8721407EE9C3FF6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8721407EE9C3FF6)
	 */
	addTacticalAnalysisPoint(x: number, y: number, z: number): void;

	/**
	 * Native: MISC::ALLOW_MISSION_CREATOR_WARP
	 *
	 * Hash: 0xDEA36202FC3382DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEA36202FC3382DF)
	 */
	allowMissionCreatorWarp(toggle: boolean): void;

	/**
	 * Native: MISC::ARE_PROFILE_SETTINGS_VALID
	 *
	 * Hash: 0x5AA3BEFA29F03AD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AA3BEFA29F03AD4)
	 */
	areProfileSettingsValid(): boolean;

	/**
	 * Native: MISC::ARE_STRINGS_EQUAL
	 *
	 * Hash: 0x0C515FAB3FF9EA92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C515FAB3FF9EA92)
	 */
	areStringsEqual(string1: string, string2: string): boolean;

	/**
	 * Native: MISC::ASIN
	 *
	 * Hash: 0xC843060B5765DCE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC843060B5765DCE7)
	 */
	asin(p0: number): number;

	/**
	 * Native: MISC::ATAN
	 *
	 * Hash: 0xA9D1795CD5043663 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9D1795CD5043663)
	 */
	atan(p0: number): number;

	/**
	 * Native: MISC::ATAN2
	 *
	 * Hash: 0x8927CBF9D22261A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8927CBF9D22261A4)
	 */
	atan2(p0: number, p1: number): number;

	/**
	 * Native: MISC::BEGIN_REPLAY_STATS
	 *
	 * Hash: 0xE0E500246FF73D66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0E500246FF73D66)
	 */
	beginReplayStats(p0: integer, p1: integer): void;

	/**
	 * Native: MISC::BLOCK_DISPATCH_SERVICE_RESOURCE_CREATION
	 *
	 * Hash: 0x9B2BD3773123EA2F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B2BD3773123EA2F)
	 */
	blockDispatchServiceResourceCreation(dispatchService: integer, toggle: boolean): void;

	/**
	 * Native: MISC::_CANCEL_ONSCREEN_KEYBOARD
	 *
	 * Hash: 0x58A39BE597CE99CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58A39BE597CE99CD)
	 */
	cancelOnscreenKeyboard(): void;

	/**
	 * Native: MISC::CANCEL_STUNT_JUMP
	 *
	 * Hash: 0xE6B7B0ACD4E4B75E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6B7B0ACD4E4B75E)
	 */
	cancelStuntJump(): void;

	/**
	 * Native: MISC::_CLEANUP_ASYNC_INSTALL
	 *
	 * Hash: 0xC79AE21974B01FB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC79AE21974B01FB2)
	 */
	cleanupAsyncInstall(): void;

	/**
	 * Native: MISC::CLEAR_ANGLED_AREA_OF_VEHICLES
	 *
	 * Hash: 0x11DB3500F042A8AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11DB3500F042A8AA)
	 */
	clearAngledAreaOfVehicles(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p7: boolean,
		p8: boolean,
		p9: boolean,
		p10: boolean,
		p11: boolean,
		p12: integer
	): void;

	/**
	 * Native: MISC::CLEAR_AREA
	 *
	 * Hash: 0xA56F01F3765B93A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA56F01F3765B93A0)
	 */
	clearArea(
		X: number,
		Y: number,
		Z: number,
		radius: number,
		p4: boolean,
		ignoreCopCars: boolean,
		ignoreObjects: boolean,
		p7: boolean
	): void;

	/**
	 * Native: MISC::CLEAR_AREA_LEAVE_VEHICLE_HEALTH
	 *
	 * Hash: 0x957838AAF91BD12D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x957838AAF91BD12D)
	 */
	clearAreaLeaveVehicleHealth(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: MISC::CLEAR_AREA_OF_COPS
	 *
	 * Hash: 0x04F8FC8FCF58F88D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04F8FC8FCF58F88D)
	 */
	clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: integer): void;

	/**
	 * Native: MISC::CLEAR_AREA_OF_OBJECTS
	 *
	 * Hash: 0xDD9B9B385AAC7F5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD9B9B385AAC7F5B)
	 */
	clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: integer): void;

	/**
	 * Native: MISC::CLEAR_AREA_OF_PEDS
	 *
	 * Hash: 0xBE31FD6CE464AC59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE31FD6CE464AC59)
	 */
	clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: integer): void;

	/**
	 * Native: MISC::CLEAR_AREA_OF_PROJECTILES
	 *
	 * Hash: 0x0A1CB9094635D1A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A1CB9094635D1A6)
	 */
	clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: integer): void;

	/**
	 * Native: MISC::CLEAR_AREA_OF_VEHICLES
	 *
	 * Hash: 0x01C7B9B38428AEB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01C7B9B38428AEB6)
	 */
	clearAreaOfVehicles(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean
	): void;

	/**
	 * Native: MISC::CLEAR_BIT
	 *
	 * Hash: 0xE80492A9AC099A93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE80492A9AC099A93)
	 */
	clearBit(offset: integer): integer;

	/**
	 * Native: MISC::_CLEAR_CLOUD_HAT
	 *
	 * Hash: 0x957E790EA1727B64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x957E790EA1727B64)
	 */
	clearCloudHat(): void;

	/**
	 * Native: MISC::CLEAR_CODE_REQUESTED_AUTOSAVE
	 *
	 * Hash: 0x06462A961E94B67C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06462A961E94B67C)
	 */
	clearCodeRequestedAutosave(): void;

	/**
	 * Native: MISC::CLEAR_OVERRIDE_WEATHER
	 *
	 * Hash: 0x338D2E3477711050 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x338D2E3477711050)
	 */
	clearOverrideWeather(): void;

	/**
	 * Native: MISC::CLEAR_REPLAY_STATS
	 *
	 * Hash: 0x1B1AB132A16FDA55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B1AB132A16FDA55)
	 */
	clearReplayStats(): void;

	/**
	 * Native: MISC::_CLEAR_RESTART_CUSTOM_POSITION
	 *
	 * Hash: 0xA2716D40842EAF79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2716D40842EAF79)
	 */
	clearRestartCustomPosition(): void;

	/**
	 * Native: MISC::_CLEAR_TACTICAL_ANALYSIS_POINTS
	 *
	 * Hash: 0xB3CD58CCA6CDA852 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3CD58CCA6CDA852)
	 */
	clearTacticalAnalysisPoints(): void;

	/**
	 * Native: MISC::_CLEAR_WEATHER_TYPE_OVERTIME_PERSIST
	 *
	 * Hash: 0x0CF97F497FE7D048 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CF97F497FE7D048)
	 */
	clearWeatherTypeOvertimePersist(milliseconds: integer): void;

	/**
	 * Native: MISC::CLEAR_WEATHER_TYPE_PERSIST
	 *
	 * Hash: 0xCCC39339BEF76CF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCC39339BEF76CF5)
	 */
	clearWeatherTypePersist(): void;

	/**
	 * Native: MISC::COMPARE_STRINGS
	 *
	 * Hash: 0x1E34710ECD4AB0EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E34710ECD4AB0EB)
	 */
	compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: integer): integer;

	/**
	 * Native: MISC::_COPY_MEMORY
	 *
	 * Hash: 0x213AEB2B90CBA7AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x213AEB2B90CBA7AC)
	 */
	copyMemory(size: integer): CopyMemoryResult;

	/**
	 * Native: MISC::CREATE_INCIDENT
	 *
	 * Hash: 0x3F892CAF67444AE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F892CAF67444AE7)
	 */
	createIncident(
		dispatchService: integer,
		x: number,
		y: number,
		z: number,
		numUnits: integer,
		radius: number,
		p7: integer,
		p8: integer
	): integer;

	/**
	 * Native: MISC::CREATE_INCIDENT_WITH_ENTITY
	 *
	 * Hash: 0x05983472F0494E60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05983472F0494E60)
	 */
	createIncidentWithEntity(
		dispatchService: integer,
		ped: Handle,
		numUnits: integer,
		radius: number,
		p5: integer,
		p6: integer
	): integer;

	/**
	 * Native: MISC::DELETE_INCIDENT
	 *
	 * Hash: 0x556C1AA270D5A207 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x556C1AA270D5A207)
	 */
	deleteIncident(incidentId: integer): void;

	/**
	 * Native: MISC::DELETE_STUNT_JUMP
	 *
	 * Hash: 0xDC518000E39DAE1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC518000E39DAE1F)
	 */
	deleteStuntJump(p0: integer): void;

	/**
	 * Native: MISC::DISABLE_HOSPITAL_RESTART
	 *
	 * Hash: 0xC8535819C450EBA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8535819C450EBA8)
	 */
	disableHospitalRestart(hospitalIndex: integer, toggle: boolean): void;

	/**
	 * Native: MISC::DISABLE_POLICE_RESTART
	 *
	 * Hash: 0x23285DED6EBD7EA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23285DED6EBD7EA3)
	 */
	disablePoliceRestart(policeIndex: integer, toggle: boolean): void;

	/**
	 * Native: MISC::DISABLE_STUNT_JUMP_SET
	 *
	 * Hash: 0xA5272EBEDD4747F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5272EBEDD4747F6)
	 */
	disableStuntJumpSet(p0: integer): void;

	/**
	 * Native: MISC::DISPLAY_ONSCREEN_KEYBOARD
	 *
	 * Hash: 0x00DC833F2568DBF6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00DC833F2568DBF6)
	 */
	displayOnscreenKeyboard(
		p0: integer,
		windowTitle: string,
		p2: string,
		defaultText: string,
		defaultConcat1: string,
		defaultConcat2: string,
		defaultConcat3: string,
		maxInputLength: integer
	): void;

	/**
	 * Native: MISC::DISPLAY_ONSCREEN_KEYBOARD_WITH_LONGER_INITIAL_STRING
	 *
	 * Hash: 0xCA78CFA0366592FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA78CFA0366592FE)
	 */
	displayOnscreenKeyboardWithLongerInitialString(
		p0: integer,
		windowTitle: string,
		defaultText: string,
		defaultConcat1: string,
		defaultConcat2: string,
		defaultConcat3: string,
		defaultConcat4: string,
		defaultConcat5: string,
		defaultConcat6: string,
		defaultConcat7: string,
		maxInputLength: integer
	): integer;

	/**
	 * Native: MISC::DO_AUTO_SAVE
	 *
	 * Hash: 0x50EEAAD86232EE55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50EEAAD86232EE55)
	 */
	doAutoSave(): void;

	/**
	 * Native: MISC::DOES_POP_MULTIPLIER_AREA_EXIST
	 *
	 * Hash: 0x1327E2FE9746BAEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1327E2FE9746BAEE)
	 */
	doesPopMultiplierAreaExist(id: integer): boolean;

	/**
	 * Native: MISC::DOES_POP_MULTIPLIER_SPHERE_EXIST
	 *
	 * Hash: 0x171BAFB3C60389F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x171BAFB3C60389F4)
	 */
	doesPopMultiplierSphereExist(id: integer): boolean;

	/**
	 * Native: MISC::ENABLE_DISPATCH_SERVICE
	 *
	 * Hash: 0xDC0F817884CDD856 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC0F817884CDD856)
	 */
	enableDispatchService(dispatchService: integer, toggle: boolean): void;

	/**
	 * Native: MISC::ENABLE_STUNT_JUMP_SET
	 *
	 * Hash: 0xE369A5783B866016 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE369A5783B866016)
	 */
	enableStuntJumpSet(p0: integer): void;

	/**
	 * Native: MISC::ENABLE_TENNIS_MODE
	 *
	 * Hash: 0x28A04B411933F8A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28A04B411933F8A6)
	 */
	enableTennisMode(ped: Handle, toggle: boolean, p2: boolean): void;

	/**
	 * Native: MISC::END_REPLAY_STATS
	 *
	 * Hash: 0xA23E821FBDF8A5F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA23E821FBDF8A5F2)
	 */
	endReplayStats(): void;

	/**
	 * Native: MISC::FIND_SPAWN_POINT_IN_DIRECTION
	 *
	 * Hash: 0x6874E2190B0C1972 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6874E2190B0C1972)
	 */
	findSpawnPointInDirection(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		distance: number
	): Vector3Mp;

	/**
	 * Native: MISC::FORCE_GAME_STATE_PLAYING
	 *
	 * Hash: 0xC0AA53F866B3134D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0AA53F866B3134D)
	 */
	forceGameStatePlaying(): void;

	/**
	 * Native: MISC::FORCE_LIGHTNING_FLASH
	 *
	 * Hash: 0xF6062E089251C898 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6062E089251C898)
	 */
	forceLightningFlash(): void;

	/**
	 * Native: MISC::_FORCE_SOCIAL_CLUB_UPDATE
	 *
	 * Hash: 0xEB6891F03362FB12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB6891F03362FB12)
	 */
	forceSocialClubUpdate(): void;

	/**
	 * Native: MISC::GET_ALLOCATED_STACK_SIZE
	 *
	 * Hash: 0x8B3CA62B1EF19B62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B3CA62B1EF19B62)
	 */
	getAllocatedStackSize(): integer;

	/**
	 * Native: MISC::GET_ANGLE_BETWEEN_2D_VECTORS
	 *
	 * Hash: 0x186FC4BE848E1C92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x186FC4BE848E1C92)
	 */
	getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;

	/**
	 * Native: MISC::GET_ANGLE_BETWEEN_2D_VECTORS
	 *
	 * Hash: 0x186FC4BE848E1C92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x186FC4BE848E1C92)
	 */
	getAngleBetween2DVectors(x1: number, y1: number, x2: number, y2: number): number;

	/**
	 * Native: MISC::_GET_BASE_ELEMENT_METADATA
	 *
	 * Hash: 0xB335F761606DB47C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB335F761606DB47C)
	 */
	getBaseElementMetadata(p2: integer, p3: boolean): GetBaseElementMetadataResult;

	/**
	 * Native: MISC::_GET_BENCHMARK_ITERATIONS_FROM_COMMAND_LINE
	 *
	 * Hash: 0x4750FC27570311EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4750FC27570311EC)
	 */
	getBenchmarkIterationsFromCommandLine(): integer;

	/**
	 * Native: MISC::_GET_BENCHMARK_PASS_FROM_COMMAND_LINE
	 *
	 * Hash: 0x1B2366C3F2A5C8DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B2366C3F2A5C8DF)
	 */
	getBenchmarkPassFromCommandLine(): integer;

	/**
	 * Native: MISC::_GET_BENCHMARK_TIME
	 *
	 * Hash: 0xE599A503B3837E1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE599A503B3837E1B)
	 */
	getBenchmarkTime(): number;

	/**
	 * Native: MISC::GET_BITS_IN_RANGE
	 *
	 * Hash: 0x53158863FCC0893A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53158863FCC0893A)
	 */
	getBitsInRange(variable: integer, rangeStart: integer, rangeEnd: integer): integer;

	/**
	 * Native: MISC::_GET_CLOUD_HAT_OPACITY
	 *
	 * Hash: 0x20AC25E781AE4A84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20AC25E781AE4A84)
	 */
	getCloudHatOpacity(): number;

	/**
	 * Native: MISC::GET_COORDS_OF_PROJECTILE_TYPE_IN_AREA
	 *
	 * Hash: 0x8D7A43EC6A5FEA45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D7A43EC6A5FEA45)
	 */
	getCoordsOfProjectileTypeInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		projectileHash: integer,
		ownedByPlayer: boolean
	): Vector3Mp;

	/**
	 * Native: MISC::GET_COORDS_OF_PROJECTILE_TYPE_WITHIN_DISTANCE
	 *
	 * Hash: 0xDFB4138EEFED7B81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFB4138EEFED7B81)
	 */
	getCoordsOfProjectileTypeWithinDistance(ped: Handle, weaponHash: integer, distance: number, p4: boolean): Vector3Mp;

	/**
	 * Native: MISC::GET_DISTANCE_BETWEEN_COORDS
	 *
	 * Hash: 0xF1B760881820C952 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1B760881820C952)
	 */
	getDistanceBetweenCoords(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		useZ: boolean
	): number;

	/**
	 * Native: MISC::GET_FAKE_WANTED_LEVEL
	 *
	 * Hash: 0x4C9296CBCD1B971E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C9296CBCD1B971E)
	 */
	getFakeWantedLevel(): integer;

	/**
	 * Native: MISC::GET_FRAME_COUNT
	 *
	 * Hash: 0xFC8202EFC642E6F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC8202EFC642E6F2)
	 */
	getFrameCount(): integer;

	/**
	 * Native: MISC::GET_FRAME_TIME
	 *
	 * Hash: 0x15C40837039FFAF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15C40837039FFAF7)
	 */
	getFrameTime(): number;

	/**
	 * Native: MISC::GET_GAME_TIMER
	 *
	 * Hash: 0x9CD27B0045628463 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CD27B0045628463)
	 */
	getGameTimer(): integer;

	/**
	 * Native: MISC::_GET_GLOBAL_CHAR_BUFFER
	 *
	 * Hash: 0x24DA7D7667FD7B09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24DA7D7667FD7B09)
	 */
	getGlobalCharBuffer(): string;

	/**
	 * Native: MISC::GET_GROUND_Z_AND_NORMAL_FOR_3D_COORD
	 *
	 * Hash: 0x8BDC7BFC57A81E76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BDC7BFC57A81E76)
	 */
	getGroundZAndNormalFor3DCoord(x: number, y: number, z: number): GetGroundZAndNormalFor3dCoordResult;

	/**
	 * Native: MISC::GET_GROUND_Z_FOR_3D_COORD
	 *
	 * Hash: 0xC906A7DAB05C8D2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC906A7DAB05C8D2B)
	 */
	getGroundZFor3dCoord(x: number, y: number, z: number, ignoreWater: boolean, p5: boolean): number;

	/**
	 * Native: MISC::GET_GROUND_Z_FOR_3D_COORD
	 *
	 * Hash: 0xC906A7DAB05C8D2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC906A7DAB05C8D2B)
	 */
	getGroundZFor3DCoord(x: number, y: number, z: number, ignoreWater: boolean, p5: boolean): number;

	/**
	 * Native: MISC::_GET_GROUND_Z_FOR_3D_COORD_2
	 *
	 * Hash: 0x9E82F0F362881B29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E82F0F362881B29)
	 */
	getGroundZFor3DCoord2(x: number, y: number, z: number, p4: boolean, p5: boolean): number;

	/**
	 * Native: MISC::GET_HASH_KEY
	 *
	 * Hash: 0xD24D37CC275948CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD24D37CC275948CC)
	 */
	getHashKey(string: string): integer;

	/**
	 * Native: MISC::GET_HEADING_FROM_VECTOR_2D
	 *
	 * Hash: 0x2FFB6B224F4B2926 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FFB6B224F4B2926)
	 */
	getHeadingFromVector2d(dx: number, dy: number): number;

	/**
	 * Native: MISC::GET_HEADING_FROM_VECTOR_2D
	 *
	 * Hash: 0x2FFB6B224F4B2926 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FFB6B224F4B2926)
	 */
	getHeadingFromVector2D(dx: number, dy: number): number;

	/**
	 * Native: MISC::GET_INDEX_OF_CURRENT_LEVEL
	 *
	 * Hash: 0xCBAD6729F7B1F4FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBAD6729F7B1F4FC)
	 */
	getIndexOfCurrentLevel(): integer;

	/**
	 * Native: MISC::GET_IS_AUTO_SAVE_OFF
	 *
	 * Hash: 0x6E04F06094C87047 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E04F06094C87047)
	 */
	getIsAutoSaveOff(): boolean;

	/**
	 * Native: MISC::GET_IS_PLAYER_IN_ANIMAL_FORM
	 *
	 * Hash: 0x9689123E3F213AA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9689123E3F213AA5)
	 */
	getIsPlayerInAnimalForm(): boolean;

	/**
	 * Native: MISC::GET_MISSION_FLAG
	 *
	 * Hash: 0xA33CDCCDA663159E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA33CDCCDA663159E)
	 */
	getMissionFlag(): boolean;

	/**
	 * Native: MISC::GET_MODEL_DIMENSIONS
	 *
	 * Hash: 0x03E8D3D5F549087A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03E8D3D5F549087A)
	 */
	getModelDimensions(modelHash: integer): GetModelDimensionsResult;

	/**
	 * Native: MISC::GET_NEXT_WEATHER_TYPE_HASH_NAME
	 *
	 * Hash: 0x711327CD09C8F162 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x711327CD09C8F162)
	 */
	getNextWeatherTypeHashName(): integer;

	/**
	 * Native: MISC::GET_NUMBER_OF_FREE_STACKS_OF_THIS_SIZE
	 *
	 * Hash: 0xFEAD16FC8F9DFC0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEAD16FC8F9DFC0F)
	 */
	getNumberOfFreeStacksOfThisSize(stackSize: integer): integer;

	/**
	 * Native: MISC::_GET_NUM_DISPATCHED_UNITS_FOR_PLAYER
	 *
	 * Hash: 0xEB4A0C2D56441717 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB4A0C2D56441717)
	 */
	getNumDispatchedUnitsForPlayer(dispatchService: integer): integer;

	/**
	 * Native: MISC::GET_NUM_SUCCESSFUL_STUNT_JUMPS
	 *
	 * Hash: 0x996DD1E1E02F1008 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x996DD1E1E02F1008)
	 */
	getNumSuccessfulStuntJumps(): integer;

	/**
	 * Native: MISC::GET_ONSCREEN_KEYBOARD_RESULT
	 *
	 * Hash: 0x8362B09B91893647 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8362B09B91893647)
	 */
	getOnscreenKeyboardResult(): string;

	/**
	 * Native: MISC::_GET_POWER_SAVING_MODE_DURATION
	 *
	 * Hash: 0xABB2FA71C83A1B72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xABB2FA71C83A1B72)
	 */
	getPowerSavingModeDuration(): integer;

	/**
	 * Native: MISC::GET_PREV_WEATHER_TYPE_HASH_NAME
	 *
	 * Hash: 0x564B884A05EC45A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x564B884A05EC45A3)
	 */
	getPrevWeatherTypeHashName(): integer;

	/**
	 * Native: MISC::GET_PROFILE_SETTING
	 *
	 * Hash: 0xC488FF2356EA7791 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC488FF2356EA7791)
	 */
	getProfileSetting(profileSetting: integer): integer;

	/**
	 * Native: MISC::_GET_PROJECTILE_NEAR_PED
	 *
	 * Hash: 0x82FDE6A57EE4EE44 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82FDE6A57EE4EE44)
	 */
	getProjectileNearPed(ped: Handle, weaponHash: integer, distance: number, p5: boolean): GetProjectileNearPedResult;

	/**
	 * Native: MISC::GET_RAIN_LEVEL
	 *
	 * Hash: 0x96695E368AD855F3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96695E368AD855F3)
	 */
	getRainLevel(): number;

	/**
	 * Native: MISC::GET_RANDOM_EVENT_FLAG
	 *
	 * Hash: 0xD2D57F1D764117B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2D57F1D764117B1)
	 */
	getRandomEventFlag(): boolean;

	/**
	 * Native: MISC::GET_RANDOM_FLOAT_IN_RANGE
	 *
	 * Hash: 0x313CE5879CEB6FCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x313CE5879CEB6FCD)
	 */
	getRandomFloatInRange(startRange: number, endRange: number): number;

	/**
	 * Native: MISC::GET_RANDOM_INT_IN_RANGE
	 *
	 * Hash: 0xD53343AA4FB7DD28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD53343AA4FB7DD28)
	 */
	getRandomIntInRange(startRange: integer, endRange: integer): integer;

	/**
	 * Native: MISC::_GET_RANDOM_INT_IN_RANGE_2
	 *
	 * Hash: 0xF2D49816A804D134 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2D49816A804D134)
	 */
	getRandomIntInRange2(startRange: integer, endRange: integer): integer;

	/**
	 * Native: MISC::GET_REPLAY_STAT_AT_INDEX
	 *
	 * Hash: 0x8098C8D6597AAE18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8098C8D6597AAE18)
	 */
	getReplayStatAtIndex(index: integer): integer;

	/**
	 * Native: MISC::GET_REPLAY_STAT_COUNT
	 *
	 * Hash: 0xDC9274A7EF6B2867 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC9274A7EF6B2867)
	 */
	getReplayStatCount(): integer;

	/**
	 * Native: MISC::GET_REPLAY_STAT_MISSION_ID
	 *
	 * Hash: 0x5B1F2E327B6B6FE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B1F2E327B6B6FE1)
	 */
	getReplayStatMissionId(): integer;

	/**
	 * Native: MISC::GET_REPLAY_STAT_MISSION_TYPE
	 *
	 * Hash: 0x2B626A0150E4D449 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B626A0150E4D449)
	 */
	getReplayStatMissionType(): integer;

	/**
	 * Native: MISC::GET_SIZE_OF_SAVE_DATA
	 *
	 * Hash: 0xA09F896CE912481F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA09F896CE912481F)
	 */
	getSizeOfSaveData(p0: boolean): integer;

	/**
	 * Native: MISC::GET_SNOW_LEVEL
	 *
	 * Hash: 0xC5868A966E5BE3AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5868A966E5BE3AE)
	 */
	getSnowLevel(): number;

	/**
	 * Native: MISC::GET_STATUS_OF_MISSION_REPEAT_SAVE
	 *
	 * Hash: 0x2B5E102E4A42F2BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B5E102E4A42F2BF)
	 */
	getStatusOfMissionRepeatSave(): integer;

	/**
	 * Native: MISC::GET_TENNIS_SWING_ANIM_COMPLETE
	 *
	 * Hash: 0x17DF68D720AA77F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17DF68D720AA77F8)
	 */
	getTennisSwingAnimComplete(ped: Handle): boolean;

	/**
	 * Native: MISC::GET_TOTAL_SUCCESSFUL_STUNT_JUMPS
	 *
	 * Hash: 0x6856EC3D35C81EA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6856EC3D35C81EA4)
	 */
	getTotalSuccessfulStuntJumps(): integer;

	/**
	 * Native: MISC::_GET_WEATHER_TYPE_TRANSITION
	 *
	 * Hash: 0xF3BBE884A14BB413 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3BBE884A14BB413)
	 */
	getWeatherTypeTransition(): GetWeatherTypeTransitionResult;

	/**
	 * Native: MISC::GET_WIND_DIRECTION
	 *
	 * Hash: 0x1F400FEF721170DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F400FEF721170DA)
	 */
	getWindDirection(): Vector3Mp;

	/**
	 * Native: MISC::GET_WIND_SPEED
	 *
	 * Hash: 0xA8CF1CC0AFCD3F12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8CF1CC0AFCD3F12)
	 */
	getWindSpeed(): number;

	/**
	 * Native: MISC::_HAS_ASYNC_INSTALL_FINISHED
	 *
	 * Hash: 0x14832BF2ABA53FC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14832BF2ABA53FC5)
	 */
	hasAsyncInstallFinished(): boolean;

	/**
	 * Native: MISC::HAS_BULLET_IMPACTED_IN_AREA
	 *
	 * Hash: 0x9870ACFB89A90995 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9870ACFB89A90995)
	 */
	hasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): boolean;

	/**
	 * Native: MISC::HAS_BULLET_IMPACTED_IN_BOX
	 *
	 * Hash: 0xDC8C5D7CFEAB8394 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC8C5D7CFEAB8394)
	 */
	hasBulletImpactedInBox(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean
	): boolean;

	/**
	 * Native: MISC::_HAS_BUTTON_COMBINATION_JUST_BEEN_ENTERED
	 *
	 * Hash: 0x071E2A839DE82D90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x071E2A839DE82D90)
	 */
	hasButtonCombinationJustBeenEntered(hash: integer, amount: integer): boolean;

	/**
	 * Native: MISC::_HAS_CHEAT_STRING_JUST_BEEN_ENTERED
	 *
	 * Hash: 0x557E43C447E700A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x557E43C447E700A8)
	 */
	hasCheatStringJustBeenEntered(hash: integer): boolean;

	/**
	 * Native: MISC::HAS_CODE_REQUESTED_AUTOSAVE
	 *
	 * Hash: 0x2107A3773771186D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2107A3773771186D)
	 */
	hasCodeRequestedAutosave(): boolean;

	/**
	 * Native: MISC::_HAS_RESUMED_FROM_SUSPEND
	 *
	 * Hash: 0xE8B9C0EC9E183F35 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8B9C0EC9E183F35)
	 */
	hasResumedFromSuspend(): boolean;

	/**
	 * Native: MISC::HAVE_CREDITS_REACHED_END
	 *
	 * Hash: 0x075F1D57402C93BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x075F1D57402C93BA)
	 */
	haveCreditsReachedEnd(): boolean;

	/**
	 * Native: MISC::HAVE_REPLAY_STATS_BEEN_STORED
	 *
	 * Hash: 0xD642319C54AADEB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD642319C54AADEB6)
	 */
	haveReplayStatsBeenStored(): integer;

	/**
	 * Native: MISC::IGNORE_NEXT_RESTART
	 *
	 * Hash: 0x21FFB63D8C615361 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21FFB63D8C615361)
	 */
	ignoreNextRestart(toggle: boolean): void;

	/**
	 * Native: MISC::IS_AREA_OCCUPIED
	 *
	 * Hash: 0xA61B4DF533DCB56E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA61B4DF533DCB56E)
	 */
	isAreaOccupied(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean,
		p10: boolean,
		p11: integer,
		p12: boolean
	): boolean;

	/**
	 * Native: MISC::IS_AUSSIE_VERSION
	 *
	 * Hash: 0x9F1935CA1F724008 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F1935CA1F724008)
	 */
	isAussieVersion(): boolean;

	/**
	 * Native: MISC::IS_AUTO_SAVE_IN_PROGRESS
	 *
	 * Hash: 0x69240733738C19A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69240733738C19A0)
	 */
	isAutoSaveInProgress(): boolean;

	/**
	 * Native: MISC::IS_BIT_SET
	 *
	 * Hash: 0xA921AA820C25702F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA921AA820C25702F)
	 */
	isBitSet(address: integer, offset: integer): boolean;

	/**
	 * Native: MISC::IS_BULLET_IN_ANGLED_AREA
	 *
	 * Hash: 0x1A8B5F3C01E2B477 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A8B5F3C01E2B477)
	 */
	isBulletInAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		ownedByPlayer: boolean
	): boolean;

	/**
	 * Native: MISC::IS_BULLET_IN_AREA
	 *
	 * Hash: 0x3F2023999AD51C1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F2023999AD51C1F)
	 */
	isBulletInArea(x: number, y: number, z: number, radius: number, ownedByPlayer: boolean): boolean;

	/**
	 * Native: MISC::IS_BULLET_IN_BOX
	 *
	 * Hash: 0xDE0F6D7450D37351 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE0F6D7450D37351)
	 */
	isBulletInBox(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		ownedByPlayer: boolean
	): boolean;

	/**
	 * Native: MISC::_IS_COMMAND_LINE_BENCHMARK_VALUE_SET
	 *
	 * Hash: 0xA049A5BE0F04F2F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA049A5BE0F04F2F8)
	 */
	isCommandLineBenchmarkValueSet(): boolean;

	/**
	 * Native: MISC::IS_DURANGO_VERSION
	 *
	 * Hash: 0x4D982ADB1978442D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D982ADB1978442D)
	 */
	isDurangoVersion(): boolean;

	/**
	 * Native: MISC::IS_FRONTEND_FADING
	 *
	 * Hash: 0x7EA2B6AF97ECA6ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EA2B6AF97ECA6ED)
	 */
	isFrontendFading(): boolean;

	/**
	 * Native: MISC::IS_INCIDENT_VALID
	 *
	 * Hash: 0xC8BC6461E629BEAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8BC6461E629BEAA)
	 */
	isIncidentValid(incidentId: integer): boolean;

	/**
	 * Native: MISC::_IS_IN_POWER_SAVING_MODE
	 *
	 * Hash: 0x684A41975F077262 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x684A41975F077262)
	 */
	isInPowerSavingMode(): boolean;

	/**
	 * Native: MISC::IS_MEMORY_CARD_IN_USE
	 *
	 * Hash: 0x8A75CE2956274ADD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A75CE2956274ADD)
	 */
	isMemoryCardInUse(): boolean;

	/**
	 * Native: MISC::IS_MINIGAME_IN_PROGRESS
	 *
	 * Hash: 0x2B4A15E44DE0F478 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B4A15E44DE0F478)
	 */
	isMinigameInProgress(): boolean;

	/**
	 * Native: MISC::IS_NEXT_WEATHER_TYPE
	 *
	 * Hash: 0x2FAA3A30BEC0F25D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FAA3A30BEC0F25D)
	 */
	isNextWeatherType(weatherType: string): boolean;

	/**
	 * Native: MISC::IS_ORBIS_VERSION
	 *
	 * Hash: 0xA72BC0B675B1519E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA72BC0B675B1519E)
	 */
	isOrbisVersion(): boolean;

	/**
	 * Native: MISC::IS_PC_VERSION
	 *
	 * Hash: 0x48AF36444B965238 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48AF36444B965238)
	 */
	isPcVersion(): boolean;

	/**
	 * Native: MISC::IS_POINT_OBSCURED_BY_A_MISSION_ENTITY
	 *
	 * Hash: 0xE54E209C35FFA18D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE54E209C35FFA18D)
	 */
	isPointObscuredByAMissionEntity(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: integer
	): boolean;

	/**
	 * Native: MISC::_IS_POP_MULTIPLIER_AREA_UNK
	 *
	 * Hash: 0x1312F4B242609CE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1312F4B242609CE3)
	 */
	isPopMultiplierAreaUnk(id: integer): boolean;

	/**
	 * Native: MISC::IS_POSITION_OCCUPIED
	 *
	 * Hash: 0xADCDE75E1C60F32D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADCDE75E1C60F32D)
	 */
	isPositionOccupied(
		x: number,
		y: number,
		z: number,
		range: number,
		p4: boolean,
		checkVehicles: boolean,
		checkPeds: boolean,
		p7: boolean,
		p8: boolean,
		ignoreEntity: Handle,
		p10: boolean
	): boolean;

	/**
	 * Native: MISC::IS_PREV_WEATHER_TYPE
	 *
	 * Hash: 0x44F28F86433B10A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44F28F86433B10A9)
	 */
	isPrevWeatherType(weatherType: string): boolean;

	/**
	 * Native: MISC::IS_PROJECTILE_IN_AREA
	 *
	 * Hash: 0x5270A8FBC098C3F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5270A8FBC098C3F8)
	 */
	isProjectileInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		ownedByPlayer: boolean
	): boolean;

	/**
	 * Native: MISC::IS_PROJECTILE_TYPE_IN_ANGLED_AREA
	 *
	 * Hash: 0xF0BC12401061DEA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0BC12401061DEA0)
	 */
	isProjectileTypeInAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p7: integer,
		ownedByPlayer: boolean
	): boolean;

	/**
	 * Native: MISC::IS_PROJECTILE_TYPE_IN_AREA
	 *
	 * Hash: 0x2E0DC353342C4A6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E0DC353342C4A6D)
	 */
	isProjectileTypeInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		type: integer,
		ownedByPlayer: boolean
	): boolean;

	/**
	 * Native: MISC::IS_PROJECTILE_TYPE_WITHIN_DISTANCE
	 *
	 * Hash: 0x34318593248C8FB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34318593248C8FB2)
	 */
	isProjectileTypeWithinDistance(
		x: number,
		y: number,
		z: number,
		projectileHash: integer,
		radius: number,
		ownedByPlayer: boolean
	): boolean;

	/**
	 * Native: MISC::IS_PS3_VERSION
	 *
	 * Hash: 0xCCA1072C29D096C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCA1072C29D096C2)
	 */
	isPs3Version(): boolean;

	/**
	 * Native: MISC::IS_SNIPER_BULLET_IN_AREA
	 *
	 * Hash: 0xFEFCF11B01287125 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEFCF11B01287125)
	 */
	isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

	/**
	 * Native: MISC::IS_SNIPER_INVERTED
	 *
	 * Hash: 0x61A23B7EDA9BDA24 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61A23B7EDA9BDA24)
	 */
	isSniperInverted(): boolean;

	/**
	 * Native: MISC::IS_STRING_NULL
	 *
	 * Hash: 0xF22B6C47C6EAB066 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF22B6C47C6EAB066)
	 */
	isStringNull(string: string): boolean;

	/**
	 * Native: MISC::IS_STRING_NULL_OR_EMPTY
	 *
	 * Hash: 0xCA042B6957743895 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA042B6957743895)
	 */
	isStringNullOrEmpty(string: string): boolean;

	/**
	 * Native: MISC::IS_STUNT_JUMP_IN_PROGRESS
	 *
	 * Hash: 0x7A3F19700A4D0525 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A3F19700A4D0525)
	 */
	isStuntJumpInProgress(): boolean;

	/**
	 * Native: MISC::IS_STUNT_JUMP_MESSAGE_SHOWING
	 *
	 * Hash: 0x2272B0A1343129F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2272B0A1343129F4)
	 */
	isStuntJumpMessageShowing(): boolean;

	/**
	 * Native: MISC::IS_TENNIS_MODE
	 *
	 * Hash: 0x5D5479D115290C3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D5479D115290C3F)
	 */
	isTennisMode(ped: Handle): boolean;

	/**
	 * Native: MISC::IS_THIS_A_MINIGAME_SCRIPT
	 *
	 * Hash: 0x7B30F65D7B710098 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B30F65D7B710098)
	 */
	isThisAMinigameScript(): boolean;

	/**
	 * Native: MISC::IS_XBOX360_VERSION
	 *
	 * Hash: 0xF6201B4DAF662A9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6201B4DAF662A9D)
	 */
	isXbox360Version(): boolean;

	/**
	 * Native: MISC::_LANDING_MENU_IS_ACTIVE
	 *
	 * Hash: 0x3BBBD13E5041A79E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BBBD13E5041A79E)
	 */
	landingMenuIsActive(): boolean;

	/**
	 * Native: MISC::LOAD_CLOUD_HAT
	 *
	 * Hash: 0xFC4842A34657BFCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC4842A34657BFCB)
	 */
	loadCloudHat(name: string, transitionTime: number): void;

	/**
	 * Native: MISC::NETWORK_SET_SCRIPT_IS_SAFE_FOR_NETWORK_GAME
	 *
	 * Hash: 0x9243BAC96D64C050 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9243BAC96D64C050)
	 */
	networkSetScriptIsSafeForNetworkGame(): void;

	/**
	 * Native: MISC::NEXT_ONSCREEN_KEYBOARD_RESULT_WILL_DISPLAY_USING_THESE_FONTS
	 *
	 * Hash: 0x3ED1438C1F5C6612 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3ED1438C1F5C6612)
	 */
	nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(p0: integer): void;

	/**
	 * Native: MISC::OVERRIDE_SAVE_HOUSE
	 *
	 * Hash: 0x1162EA8AE9D24EEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1162EA8AE9D24EEA)
	 */
	overrideSaveHouse(
		p0: boolean,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: boolean,
		p6: number,
		p7: number
	): boolean;

	/**
	 * Native: MISC::PAUSE_DEATH_ARREST_RESTART
	 *
	 * Hash: 0x2C2B3493FBF51C71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C2B3493FBF51C71)
	 */
	pauseDeathArrestRestart(toggle: boolean): void;

	/**
	 * Native: MISC::PLAY_TENNIS_DIVE_ANIM
	 *
	 * Hash: 0x8FA9C42FC5D7C64B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FA9C42FC5D7C64B)
	 */
	playTennisDiveAnim(ped: Handle, p1: integer, p2: number, p3: number, p4: number, p5: boolean): void;

	/**
	 * Native: MISC::PLAY_TENNIS_SWING_ANIM
	 *
	 * Hash: 0xE266ED23311F24D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE266ED23311F24D4)
	 */
	playTennisSwingAnim(ped: Handle, animDict: string, animName: string, p3: number, p4: number, p5: boolean): void;

	/**
	 * Native: MISC::POPULATE_NOW
	 *
	 * Hash: 0x7472BB270D7B4F3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7472BB270D7B4F3E)
	 */
	populateNow(): void;

	/**
	 * Native: MISC::PRELOAD_CLOUD_HAT
	 *
	 * Hash: 0x11B56FBBF7224868 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11B56FBBF7224868)
	 */
	preloadCloudHat(name: string): void;

	/**
	 * Native: MISC::QUEUE_MISSION_REPEAT_LOAD
	 *
	 * Hash: 0x72DE52178C291CB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72DE52178C291CB5)
	 */
	queueMissionRepeatLoad(): boolean;

	/**
	 * Native: MISC::QUEUE_MISSION_REPEAT_SAVE
	 *
	 * Hash: 0x44A0BDC559B35F6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44A0BDC559B35F6E)
	 */
	queueMissionRepeatSave(): boolean;

	/**
	 * Native: MISC::REGISTER_BOOL_TO_SAVE
	 *
	 * Hash: 0xC8F4131414C835A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8F4131414C835A1)
	 */
	registerBoolToSave(name: string): integer;

	/**
	 * Native: MISC::REGISTER_ENUM_TO_SAVE
	 *
	 * Hash: 0x10C2FA78D0E128A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10C2FA78D0E128A1)
	 */
	registerEnumToSave(name: string): integer;

	/**
	 * Native: MISC::REGISTER_FLOAT_TO_SAVE
	 *
	 * Hash: 0x7CAEC29ECB5DFEBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CAEC29ECB5DFEBB)
	 */
	registerFloatToSave(name: string): integer;

	/**
	 * Native: MISC::_REGISTER_INT64_TO_SAVE
	 *
	 * Hash: 0xA735353C77334EA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA735353C77334EA0)
	 */
	registerInt64ToSave(name: string): integer;

	/**
	 * Native: MISC::REGISTER_INT_TO_SAVE
	 *
	 * Hash: 0x34C9EE5986258415 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34C9EE5986258415)
	 */
	registerIntToSave(name: string): integer;

	/**
	 * Native: MISC::REGISTER_SAVE_HOUSE
	 *
	 * Hash: 0xC0714D0A7EEECA54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0714D0A7EEECA54)
	 */
	registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p5: integer, p6: integer): RegisterSaveHouseResult;

	/**
	 * Native: MISC::REGISTER_TEXT_LABEL_TO_SAVE
	 *
	 * Hash: 0xEDB1232C5BEAE62F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDB1232C5BEAE62F)
	 */
	registerTextLabelToSave(name: string): integer;

	/**
	 * Native: MISC::_REGISTER_TEXT_LABEL_TO_SAVE_2
	 *
	 * Hash: 0x6F7794F28C6B2535 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F7794F28C6B2535)
	 */
	registerTextLabelToSave2(name: string): integer;

	/**
	 * Native: MISC::REMOVE_DISPATCH_SPAWN_BLOCKING_AREA
	 *
	 * Hash: 0x264AC28B01B353A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x264AC28B01B353A5)
	 */
	removeDispatchSpawnBlockingArea(p0: integer): void;

	/**
	 * Native: MISC::REMOVE_POP_MULTIPLIER_AREA
	 *
	 * Hash: 0xB129E447A2EDA4BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB129E447A2EDA4BF)
	 */
	removePopMultiplierArea(id: integer, p1: boolean): void;

	/**
	 * Native: MISC::REMOVE_POP_MULTIPLIER_SPHERE
	 *
	 * Hash: 0xE6869BECDD8F2403 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6869BECDD8F2403)
	 */
	removePopMultiplierSphere(id: integer, p1: boolean): void;

	/**
	 * Native: MISC::_RESET_BENCHMARK_RECORDING
	 *
	 * Hash: 0x437138B6A830166A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x437138B6A830166A)
	 */
	resetBenchmarkRecording(): void;

	/**
	 * Native: MISC::RESET_DISPATCH_IDEAL_SPAWN_DISTANCE
	 *
	 * Hash: 0x77A84429DD9F0A15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77A84429DD9F0A15)
	 */
	resetDispatchIdealSpawnDistance(): void;

	/**
	 * Native: MISC::RESET_DISPATCH_SPAWN_BLOCKING_AREAS
	 *
	 * Hash: 0xAC7BFD5C1D83EA75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC7BFD5C1D83EA75)
	 */
	resetDispatchSpawnBlockingAreas(): void;

	/**
	 * Native: MISC::_RESET_DISPATCH_SPAWN_LOCATION
	 *
	 * Hash: 0x5896F2BD5683A4E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5896F2BD5683A4E1)
	 */
	resetDispatchSpawnLocation(): void;

	/**
	 * Native: MISC::RESET_DISPATCH_TIME_BETWEEN_SPAWN_ATTEMPTS
	 *
	 * Hash: 0xEB2DB0CAD13154B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB2DB0CAD13154B3)
	 */
	resetDispatchTimeBetweenSpawnAttempts(p0: integer): void;

	/**
	 * Native: MISC::_RESTART_GAME
	 *
	 * Hash: 0xE574A662ACAEFBB1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE574A662ACAEFBB1)
	 */
	restartGame(): void;

	/**
	 * Native: MISC::_SAVE_BENCHMARK_RECORDING
	 *
	 * Hash: 0x37DEB0AA183FB6D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37DEB0AA183FB6D8)
	 */
	saveBenchmarkRecording(): void;

	/**
	 * Native: MISC::SCRIPT_RACE_GET_PLAYER_SPLIT_TIME
	 *
	 * Hash: 0x8EF5573A1F801A5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EF5573A1F801A5C)
	 */
	scriptRaceGetPlayerSplitTime(player: Handle): ScriptRaceGetPlayerSplitTimeResult;

	/**
	 * Native: MISC::SCRIPT_RACE_INIT
	 *
	 * Hash: 0x0A60017F841A54F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A60017F841A54F2)
	 */
	scriptRaceInit(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: MISC::SCRIPT_RACE_SHUTDOWN
	 *
	 * Hash: 0x1FF6BF9A63E5757F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1FF6BF9A63E5757F)
	 */
	scriptRaceShutdown(): void;

	/**
	 * Native: MISC::_SET_BEAST_MODE_ACTIVE
	 *
	 * Hash: 0x438822C279B73B93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x438822C279B73B93)
	 */
	setBeastModeActive(player: Handle): void;

	/**
	 * Native: MISC::SET_BIT
	 *
	 * Hash: 0x933D6A9EEC1BACD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x933D6A9EEC1BACD0)
	 */
	setBit(offset: integer): integer;

	/**
	 * Native: MISC::SET_BITS_IN_RANGE
	 *
	 * Hash: 0x8EF07E15701D61ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EF07E15701D61ED)
	 */
	setBitsInRange(rangeStart: integer, rangeEnd: integer, p3: integer): integer;

	/**
	 * Native: MISC::_SET_CLOUD_HAT_OPACITY
	 *
	 * Hash: 0xF36199225D6D8C86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF36199225D6D8C86)
	 */
	setCloudHatOpacity(opacity: number): void;

	/**
	 * Native: MISC::SET_CREDITS_ACTIVE
	 *
	 * Hash: 0xB938B7E6D3C0620C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB938B7E6D3C0620C)
	 */
	setCreditsActive(toggle: boolean): void;

	/**
	 * Native: MISC::SET_DISPATCH_IDEAL_SPAWN_DISTANCE
	 *
	 * Hash: 0x6FE601A64180D423 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FE601A64180D423)
	 */
	setDispatchIdealSpawnDistance(p0: number): void;

	/**
	 * Native: MISC::SET_DISPATCH_SPAWN_LOCATION
	 *
	 * Hash: 0xD10F442036302D50 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD10F442036302D50)
	 */
	setDispatchSpawnLocation(x: number, y: number, z: number): void;

	/**
	 * Native: MISC::SET_DISPATCH_TIME_BETWEEN_SPAWN_ATTEMPTS
	 *
	 * Hash: 0x44F7CBC1BEB3327D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44F7CBC1BEB3327D)
	 */
	setDispatchTimeBetweenSpawnAttempts(p0: integer, p1: number): void;

	/**
	 * Native: MISC::SET_DISPATCH_TIME_BETWEEN_SPAWN_ATTEMPTS_MULTIPLIER
	 *
	 * Hash: 0x48838ED9937A15D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48838ED9937A15D1)
	 */
	setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: integer, p1: number): void;

	/**
	 * Native: MISC::SET_EXPLOSIVE_AMMO_THIS_FRAME
	 *
	 * Hash: 0xA66C71C98D5F2CFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA66C71C98D5F2CFB)
	 */
	setExplosiveAmmoThisFrame(player: Handle): void;

	/**
	 * Native: MISC::SET_EXPLOSIVE_MELEE_THIS_FRAME
	 *
	 * Hash: 0xFF1BED81BFDC0FE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF1BED81BFDC0FE0)
	 */
	setExplosiveMeleeThisFrame(player: Handle): void;

	/**
	 * Native: MISC::SET_FADE_IN_AFTER_DEATH_ARREST
	 *
	 * Hash: 0xDA66D2796BA33F12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA66D2796BA33F12)
	 */
	setFadeInAfterDeathArrest(toggle: boolean): void;

	/**
	 * Native: MISC::SET_FADE_IN_AFTER_LOAD
	 *
	 * Hash: 0xF3D78F59DFE18D79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3D78F59DFE18D79)
	 */
	setFadeInAfterLoad(toggle: boolean): void;

	/**
	 * Native: MISC::SET_FADE_OUT_AFTER_ARREST
	 *
	 * Hash: 0x1E0B4DC0D990A4E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E0B4DC0D990A4E7)
	 */
	setFadeOutAfterArrest(toggle: boolean): void;

	/**
	 * Native: MISC::SET_FADE_OUT_AFTER_DEATH
	 *
	 * Hash: 0x4A18E01DF2C87B86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A18E01DF2C87B86)
	 */
	setFadeOutAfterDeath(toggle: boolean): void;

	/**
	 * Native: MISC::SET_FAKE_WANTED_LEVEL
	 *
	 * Hash: 0x1454F2448DE30163 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1454F2448DE30163)
	 */
	setFakeWantedLevel(fakeWantedLevel: integer): void;

	/**
	 * Native: MISC::SET_FIRE_AMMO_THIS_FRAME
	 *
	 * Hash: 0x11879CDD803D30F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11879CDD803D30F4)
	 */
	setFireAmmoThisFrame(player: Handle): void;

	/**
	 * Native: MISC::_SET_FORCE_PLAYER_TO_JUMP
	 *
	 * Hash: 0xA1183BCFEE0F93D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1183BCFEE0F93D1)
	 */
	setForcePlayerToJump(player: Handle): void;

	/**
	 * Native: MISC::SET_GAME_PAUSED
	 *
	 * Hash: 0x577D1284D6873711 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x577D1284D6873711)
	 */
	setGamePaused(toggle: boolean): void;

	/**
	 * Native: MISC::SET_GRAVITY_LEVEL
	 *
	 * Hash: 0x740E14FAD5842351 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x740E14FAD5842351)
	 */
	setGravityLevel(level: integer): void;

	/**
	 * Native: MISC::SET_INCIDENT_REQUESTED_UNITS
	 *
	 * Hash: 0xB08B85D860E7BA3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB08B85D860E7BA3C)
	 */
	setIncidentRequestedUnits(incidentId: integer, dispatchService: integer, numUnits: integer): void;

	/**
	 * Native: MISC::_SET_INCIDENT_UNK
	 *
	 * Hash: 0xD261BA3E7E998072 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD261BA3E7E998072)
	 */
	setIncidentUnk(incidentId: integer, p1: number): void;

	/**
	 * Native: MISC::SET_INSTANCE_PRIORITY_HINT
	 *
	 * Hash: 0xC5F0A8EBD3F361CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5F0A8EBD3F361CE)
	 */
	setInstancePriorityHint(flag: integer): void;

	/**
	 * Native: MISC::SET_INSTANCE_PRIORITY_MODE
	 *
	 * Hash: 0x9BAE5AD2508DF078 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BAE5AD2508DF078)
	 */
	setInstancePriorityMode(p0: integer): void;

	/**
	 * Native: MISC::SET_MINIGAME_IN_PROGRESS
	 *
	 * Hash: 0x19E00D7322C6F85B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19E00D7322C6F85B)
	 */
	setMinigameInProgress(toggle: boolean): void;

	/**
	 * Native: MISC::SET_MISSION_FLAG
	 *
	 * Hash: 0xC4301E5121A0ED73 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4301E5121A0ED73)
	 */
	setMissionFlag(toggle: boolean): void;

	/**
	 * Native: MISC::SET_OVERRIDE_WEATHER
	 *
	 * Hash: 0xA43D5C6FE51ADBEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA43D5C6FE51ADBEF)
	 */
	setOverrideWeather(weatherType: string): void;

	/**
	 * Native: MISC::_SET_PLAYER_IS_IN_ANIMAL_FORM
	 *
	 * Hash: 0x4EBB7E87AA0DBED4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EBB7E87AA0DBED4)
	 */
	setPlayerIsInAnimalForm(toggle: boolean): void;

	/**
	 * Native: MISC::_SET_PLAYER_ROCKSTAR_EDITOR_DISABLED
	 *
	 * Hash: 0x9D8D44ADBBA61EF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D8D44ADBBA61EF2)
	 */
	setPlayerRockstarEditorDisabled(toggle: boolean): void;

	/**
	 * Native: MISC::_SET_RAIN_LEVEL
	 *
	 * Hash: 0x643E26EA6E024D92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x643E26EA6E024D92)
	 */
	setRainLevel(intensity: number): void;

	/**
	 * Native: MISC::SET_RANDOM_EVENT_FLAG
	 *
	 * Hash: 0x971927086CFD2158 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x971927086CFD2158)
	 */
	setRandomEventFlag(toggle: boolean): void;

	/**
	 * Native: MISC::SET_RANDOM_SEED
	 *
	 * Hash: 0x444D98F98C11F3EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x444D98F98C11F3EC)
	 */
	setRandomSeed(seed: integer): void;

	/**
	 * Native: MISC::SET_RANDOM_WEATHER_TYPE
	 *
	 * Hash: 0x8B05F884CF7E8020 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B05F884CF7E8020)
	 */
	setRandomWeatherType(): void;

	/**
	 * Native: MISC::_SET_RESTART_CUSTOM_POSITION
	 *
	 * Hash: 0x706B5EDCAA7FA663 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x706B5EDCAA7FA663)
	 */
	setRestartCustomPosition(x: number, y: number, z: number, heading: number): void;

	/**
	 * Native: MISC::SET_RIOT_MODE_ENABLED
	 *
	 * Hash: 0x2587A48BC88DFADF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2587A48BC88DFADF)
	 */
	setRiotModeEnabled(toggle: boolean): void;

	/**
	 * Native: MISC::SET_SAVE_HOUSE
	 *
	 * Hash: 0x4F548CABEAE553BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F548CABEAE553BC)
	 */
	setSaveHouse(p0: integer, p1: boolean, p2: boolean): void;

	/**
	 * Native: MISC::SET_SAVE_MENU_ACTIVE
	 *
	 * Hash: 0xC9BF75D28165FF77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9BF75D28165FF77)
	 */
	setSaveMenuActive(ignoreVehicle: boolean): void;

	/**
	 * Native: MISC::_SET_SNOW_LEVEL
	 *
	 * Hash: 0x7F06937B0CDCBC1A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F06937B0CDCBC1A)
	 */
	setSnowLevel(level: number): void;

	/**
	 * Native: MISC::SET_STUNT_JUMPS_CAN_TRIGGER
	 *
	 * Hash: 0xD79185689F8FD5DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD79185689F8FD5DF)
	 */
	setStuntJumpsCanTrigger(toggle: boolean): void;

	/**
	 * Native: MISC::SET_SUPER_JUMP_THIS_FRAME
	 *
	 * Hash: 0x57FFF03E423A4C0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57FFF03E423A4C0B)
	 */
	setSuperJumpThisFrame(player: Handle): void;

	/**
	 * Native: MISC::SET_THIS_SCRIPT_CAN_BE_PAUSED
	 *
	 * Hash: 0xAA391C728106F7AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA391C728106F7AF)
	 */
	setThisScriptCanBePaused(toggle: boolean): void;

	/**
	 * Native: MISC::SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT
	 *
	 * Hash: 0xB98236CAAECEF897 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB98236CAAECEF897)
	 */
	setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;

	/**
	 * Native: MISC::SET_TIME_SCALE
	 *
	 * Hash: 0x1D408577D440E81E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D408577D440E81E)
	 */
	setTimeScale(timeScale: number): void;

	/**
	 * Native: MISC::SET_WEATHER_TYPE_NOW
	 *
	 * Hash: 0x29B487C359E19889 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29B487C359E19889)
	 */
	setWeatherTypeNow(weatherType: string): void;

	/**
	 * Native: MISC::SET_WEATHER_TYPE_NOW_PERSIST
	 *
	 * Hash: 0xED712CA327900C8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED712CA327900C8A)
	 */
	setWeatherTypeNowPersist(weatherType: string): void;

	/**
	 * Native: MISC::SET_WEATHER_TYPE_OVERTIME_PERSIST
	 *
	 * Hash: 0xFB5045B7C42B75BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB5045B7C42B75BF)
	 */
	setWeatherTypeOvertimePersist(weatherType: string, time: number): void;

	/**
	 * Native: MISC::SET_WEATHER_TYPE_PERSIST
	 *
	 * Hash: 0x704983DF373B198F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x704983DF373B198F)
	 */
	setWeatherTypePersist(weatherType: string): void;

	/**
	 * Native: MISC::_SET_WEATHER_TYPE_TRANSITION
	 *
	 * Hash: 0x578C752848ECFA0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x578C752848ECFA0C)
	 */
	setWeatherTypeTransition(weatherType1: integer, weatherType2: integer, percentWeather2: number): void;

	/**
	 * Native: MISC::SET_WIND
	 *
	 * Hash: 0xAC3A74E8384A9919 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC3A74E8384A9919)
	 */
	setWind(speed: number): void;

	/**
	 * Native: MISC::SET_WIND_DIRECTION
	 *
	 * Hash: 0xEB0F4468467B4528 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB0F4468467B4528)
	 */
	setWindDirection(direction: number): void;

	/**
	 * Native: MISC::SET_WIND_SPEED
	 *
	 * Hash: 0xEE09ECEDBABE47FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE09ECEDBABE47FC)
	 */
	setWindSpeed(speed: number): void;

	/**
	 * Native: MISC::SHOOT_SINGLE_BULLET_BETWEEN_COORDS
	 *
	 * Hash: 0x867654CBC7606F2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x867654CBC7606F2C)
	 */
	shootSingleBulletBetweenCoords(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		damage: integer,
		p7: boolean,
		weaponHash: integer,
		ownerPed: Handle,
		isAudible: boolean,
		isInvisible: boolean,
		speed: number
	): void;

	/**
	 * Native: MISC::SHOOT_SINGLE_BULLET_BETWEEN_COORDS_IGNORE_ENTITY
	 *
	 * Hash: 0xE3A7742E0B7A2F8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3A7742E0B7A2F8B)
	 */
	shootSingleBulletBetweenCoordsIgnoreEntity(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		damage: integer,
		p7: boolean,
		weaponHash: integer,
		ownerPed: Handle,
		isAudible: boolean,
		isInvisible: boolean,
		speed: number,
		entity: Handle,
		p14: integer
	): void;

	/**
	 * Native: MISC::SHOOT_SINGLE_BULLET_BETWEEN_COORDS_IGNORE_ENTITY_NEW
	 *
	 * Hash: 0xBFE5756E7407064A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFE5756E7407064A)
	 */
	shootSingleBulletBetweenCoordsIgnoreEntityNew(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		damage: integer,
		p7: boolean,
		weaponHash: integer,
		ownerPed: Handle,
		isAudible: boolean,
		isInvisible: boolean,
		speed: number,
		entity: Handle,
		p14: boolean,
		p15: boolean,
		p16: boolean,
		p17: boolean,
		p18: integer,
		p19: integer,
		p20: integer
	): void;

	/**
	 * Native: MISC::SHOULD_USE_METRIC_MEASUREMENTS
	 *
	 * Hash: 0xD3D15555431AB793 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3D15555431AB793)
	 */
	shouldUseMetricMeasurements(): boolean;

	/**
	 * Native: MISC::SLERP_NEAR_QUATERNION
	 *
	 * Hash: 0xF2F6A2FA49278625 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2F6A2FA49278625)
	 */
	slerpNearQuaternion(
		t: number,
		x: number,
		y: number,
		z: number,
		w: number,
		x1: number,
		y1: number,
		z1: number,
		w1: number
	): SlerpNearQuaternionResult;

	/**
	 * Native: MISC::_START_BENCHMARK_RECORDING
	 *
	 * Hash: 0x92790862E36C2ADA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92790862E36C2ADA)
	 */
	startBenchmarkRecording(): void;

	/**
	 * Native: MISC::START_SAVE_ARRAY_WITH_SIZE
	 *
	 * Hash: 0x60FE567DF1B1AF9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60FE567DF1B1AF9D)
	 */
	startSaveArrayWithSize(size: integer, arrayName: string): integer;

	/**
	 * Native: MISC::START_SAVE_DATA
	 *
	 * Hash: 0xA9575F812C6A7997 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9575F812C6A7997)
	 */
	startSaveData(p1: integer, p2: boolean): integer;

	/**
	 * Native: MISC::START_SAVE_STRUCT_WITH_SIZE
	 *
	 * Hash: 0xBF737600CDDBEADD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF737600CDDBEADD)
	 */
	startSaveStructWithSize(size: integer, structName: string): integer;

	/**
	 * Native: MISC::_STOP_BENCHMARK_RECORDING
	 *
	 * Hash: 0xC7DB36C24634F52B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7DB36C24634F52B)
	 */
	stopBenchmarkRecording(): void;

	/**
	 * Native: MISC::STOP_SAVE_ARRAY
	 *
	 * Hash: 0x04456F95153C6BE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04456F95153C6BE4)
	 */
	stopSaveArray(): void;

	/**
	 * Native: MISC::STOP_SAVE_DATA
	 *
	 * Hash: 0x74E20C9145FB66FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74E20C9145FB66FD)
	 */
	stopSaveData(): void;

	/**
	 * Native: MISC::STOP_SAVE_STRUCT
	 *
	 * Hash: 0xEB1774DF12BB9F12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB1774DF12BB9F12)
	 */
	stopSaveStruct(): void;

	/**
	 * Native: MISC::STRING_TO_INT
	 *
	 * Hash: 0x5A5F40FE637EB584 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A5F40FE637EB584)
	 */
	stringToInt(string: string): integer;

	/**
	 * Native: MISC::TAN
	 *
	 * Hash: 0x632106CC96E82E91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x632106CC96E82E91)
	 */
	tan(p0: number): number;

	/**
	 * Native: MISC::TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME
	 *
	 * Hash: 0x9DC711BC69C548DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DC711BC69C548DF)
	 */
	terminateAllScriptsWithThisName(scriptName: string): void;

	/**
	 * Native: MISC::_UI_IS_SINGLEPLAYER_PAUSE_MENU_ACTIVE
	 *
	 * Hash: 0xEA2F2061875EED90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA2F2061875EED90)
	 */
	uiIsSingleplayerPauseMenuActive(): boolean;

	/**
	 * Native: MISC::UNLOAD_CLOUD_HAT
	 *
	 * Hash: 0xA74802FB8D0B7814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA74802FB8D0B7814)
	 */
	unloadCloudHat(name: string, p1: number): void;

	/**
	 * Native: MISC::UPDATE_ONSCREEN_KEYBOARD
	 *
	 * Hash: 0x0CF2B696BBF945AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CF2B696BBF945AE)
	 */
	updateOnscreenKeyboard(): integer;

	/**
	 * Native: MISC::USING_MISSION_CREATOR
	 *
	 * Hash: 0xF14878FC50BEC6EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF14878FC50BEC6EE)
	 */
	usingMissionCreator(toggle: boolean): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_FADE_IN
	 *
	 * Hash: 0xA8434F1DFF41D6E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8434F1DFF41D6E7)
	 */
	waterOverrideFadeIn(p0: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_FADE_OUT
	 *
	 * Hash: 0xC3C221ADDDE31A11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3C221ADDDE31A11)
	 */
	waterOverrideFadeOut(p0: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_OCEANNOISEMINAMPLITUDE
	 *
	 * Hash: 0x31727907B2C43C55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31727907B2C43C55)
	 */
	waterOverrideSetOceannoiseminamplitude(minAmplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_OCEANWAVEAMPLITUDE
	 *
	 * Hash: 0x405591EC8FD9096D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x405591EC8FD9096D)
	 */
	waterOverrideSetOceanwaveamplitude(amplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_OCEANWAVEMAXAMPLITUDE
	 *
	 * Hash: 0xB3E6360DDE733E82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3E6360DDE733E82)
	 */
	waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_OCEANWAVEMINAMPLITUDE
	 *
	 * Hash: 0xF751B16FB32ABC1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF751B16FB32ABC1D)
	 */
	waterOverrideSetOceanwaveminamplitude(minAmplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_RIPPLEBUMPINESS
	 *
	 * Hash: 0x7C9C0B1EEB1F9072 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C9C0B1EEB1F9072)
	 */
	waterOverrideSetRipplebumpiness(bumpiness: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_RIPPLEDISTURB
	 *
	 * Hash: 0xB9854DFDE0D833D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9854DFDE0D833D6)
	 */
	waterOverrideSetRippledisturb(disturb: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_RIPPLEMAXBUMPINESS
	 *
	 * Hash: 0x9F5E6BB6B34540DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F5E6BB6B34540DA)
	 */
	waterOverrideSetRipplemaxbumpiness(maxBumpiness: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_RIPPLEMINBUMPINESS
	 *
	 * Hash: 0x6216B116083A7CB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6216B116083A7CB4)
	 */
	waterOverrideSetRippleminbumpiness(minBumpiness: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_SHOREWAVEAMPLITUDE
	 *
	 * Hash: 0xB8F87EAD7533B176 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8F87EAD7533B176)
	 */
	waterOverrideSetShorewaveamplitude(amplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_SHOREWAVEMAXAMPLITUDE
	 *
	 * Hash: 0xA7A1127490312C36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7A1127490312C36)
	 */
	waterOverrideSetShorewavemaxamplitude(maxAmplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_SHOREWAVEMINAMPLITUDE
	 *
	 * Hash: 0xC3EAD29AB273ECE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3EAD29AB273ECE8)
	 */
	waterOverrideSetShorewaveminamplitude(minAmplitude: number): void;

	/**
	 * Native: MISC::WATER_OVERRIDE_SET_STRENGTH
	 *
	 * Hash: 0xC54A08C85AE4D410 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC54A08C85AE4D410)
	 */
	waterOverrideSetStrength(strength: number): void;

	unk: GameMiscUnk;
}

interface GameMiscMp extends GameMisc {}
