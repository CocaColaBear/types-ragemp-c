/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetRandomVehicleModelInMemoryResult {
	modelHash: integer;
	successIndicator: integer;
}

interface _0xA4822F1CF23F4810Result {
	outVec: Vector3Mp;
	outVec1: Vector3Mp;
	result: boolean;
}

interface GetAllVehiclesResult {
	vehsStruct: integer;
	result: integer;
}

interface GetVehicleColorResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleColoursResult {
	colorPrimary: integer;
	colorSecondary: integer;
}

interface GetVehicleCustomPrimaryColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleCustomSecondaryColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleExtraColoursResult {
	pearlescentColor: integer;
	wheelColor: integer;
}

interface GetVehicleLightsStateResult {
	lightsOn: boolean;
	highbeamsOn: boolean;
	result: boolean;
}

interface GetVehicleModColor1Result {
	paintType: integer;
	color: integer;
	pearlescentColor: integer;
}

interface GetVehicleModColor2Result {
	paintType: integer;
	color: integer;
}

interface GetVehicleNeonLightsColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleSuspensionBoundsResult {
	out1: Vector3Mp;
	out2: Vector3Mp;
}

interface GetVehicleTyreSmokeColorResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GameVehicleLegacy {
	/**
	 * Native: VEHICLE::ADD_VEHICLE_STUCK_CHECK_WITH_WARP
	 *
	 * Hash: 0x2FA9923062DD396C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FA9923062DD396C)
	 */
	addVehicleStuckCheckWithWarp(
		p0: integer,
		p1: number,
		p2: integer,
		p3: boolean,
		p4: boolean,
		p5: boolean,
		p6: integer
	): void;

	/**
	 * Native: VEHICLE::CREATE_SCRIPT_VEHICLE_GENERATOR
	 *
	 * Hash: 0x9DEF883114668116 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DEF883114668116)
	 */
	createScriptVehicleGenerator(
		x: number,
		y: number,
		z: number,
		heading: number,
		p4: number,
		p5: number,
		modelHash: integer,
		p7: integer,
		p8: integer,
		p9: integer,
		p10: integer,
		p11: boolean,
		p12: boolean,
		p13: boolean,
		p14: boolean,
		p15: boolean,
		p16: integer
	): integer;

	/**
	 * Native: VEHICLE::CREATE_VEHICLE
	 *
	 * Hash: 0xAF35D0D2583051B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF35D0D2583051B0)
	 */
	createVehicle(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		heading: number,
		isNetwork: boolean,
		bScriptHostVeh: boolean,
		p7: boolean
	): Handle;

	/**
	 * Native: VEHICLE::DELETE_SCRIPT_VEHICLE_GENERATOR
	 *
	 * Hash: 0x22102C9ABFCF125D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22102C9ABFCF125D)
	 */
	deleteScriptVehicleGenerator(vehicleGenerator: integer): void;

	/**
	 * Native: VEHICLE::DISABLE_VEHICLE_WEAPON
	 *
	 * Hash: 0xF4FC6A6F67D8D856 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4FC6A6F67D8D856)
	 */
	disableVehicleWeapon(disabled: boolean, weaponHash: integer, vehicle: Handle, owner: Handle): void;

	/**
	 * Native: VEHICLE::SET_DISTANT_CARS_ENABLED
	 *
	 * Hash: 0xF796359A959DF65D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF796359A959DF65D)
	 */
	displayDistantVehicles(toggle: boolean): void;

	/**
	 * Native: VEHICLE::DOES_SCRIPT_VEHICLE_GENERATOR_EXIST
	 *
	 * Hash: 0xF6086BC836400876 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6086BC836400876)
	 */
	doesScriptVehicleGeneratorExist(vehicleGenerator: integer): boolean;

	/**
	 * Native: VEHICLE::DOES_VEHICLE_EXIST_WITH_DECORATOR
	 *
	 * Hash: 0x956B409B984D9BF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x956B409B984D9BF7)
	 */
	doesVehicleExistWithDecorator(decorator: string): boolean;

	/**
	 * Native: VEHICLE::GET_CLOSEST_VEHICLE
	 *
	 * Hash: 0xF73EB622C4F1689B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF73EB622C4F1689B)
	 */
	getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): Handle;

	/**
	 * Native: VEHICLE::GET_CURRENT_PLAYBACK_FOR_VEHICLE
	 *
	 * Hash: 0x42BC05C27A946054 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42BC05C27A946054)
	 */
	getCurrentPlaybackForVehicle(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_DISPLAY_NAME_FROM_VEHICLE_MODEL
	 *
	 * Hash: 0xB215AAC32D25D019 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB215AAC32D25D019)
	 */
	getDisplayNameFromVehicleModel(modelHash: integer): string;

	/**
	 * Native: VEHICLE::GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME
	 *
	 * Hash: 0xD242728AA6F0FBA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD242728AA6F0FBA2)
	 */
	getPositionOfVehicleRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_BACK_BUMPER_IN_SPHERE
	 *
	 * Hash: 0xB50807EABE20A8DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB50807EABE20A8DC)
	 */
	getRandomVehicleBackBumperInSphere(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p6: integer
	): Handle;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_FRONT_BUMPER_IN_SPHERE
	 *
	 * Hash: 0xC5574E0AEB86BA68 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5574E0AEB86BA68)
	 */
	getRandomVehicleFrontBumperInSphere(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p6: integer
	): Handle;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_IN_SPHERE
	 *
	 * Hash: 0x386F6CE5BAF6091C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x386F6CE5BAF6091C)
	 */
	getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): Handle;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_MODEL_IN_MEMORY
	 *
	 * Hash: 0x055BF0AC0C34F4FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x055BF0AC0C34F4FD)
	 */
	getRandomVehicleModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;

	/**
	 * Native: VEHICLE::GET_ROTATION_OF_VEHICLE_RECORDING_AT_TIME
	 *
	 * Hash: 0x2058206FBE79A8AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2058206FBE79A8AD)
	 */
	getRotationOfVehicleRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_TOTAL_DURATION_OF_VEHICLE_RECORDING
	 *
	 * Hash: 0x0E48D1C262390950 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E48D1C262390950)
	 */
	getTotalDurationOfVehicleRecording(recording: integer, script: string): number;

	/**
	 * Native: VEHICLE::GET_TOTAL_DURATION_OF_VEHICLE_RECORDING_ID
	 *
	 * Hash: 0x102D125411A7B6E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x102D125411A7B6E6)
	 */
	getTotalDurationOfVehicleRecordingId(id: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS
	 *
	 * Hash: 0x29439776AAA00A62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29439776AAA00A62)
	 */
	getVehicleClass(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_FROM_NAME
	 *
	 * Hash: 0xDEDF1C8BD47C2200 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEDF1C8BD47C2200)
	 */
	getVehicleClassFromName(modelHash: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_ACCELERATION
	 *
	 * Hash: 0x2F83E7E45D9EA7AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F83E7E45D9EA7AE)
	 */
	getVehicleClassMaxAcceleration(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_AGILITY
	 *
	 * Hash: 0x4F930AD022D6DE3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F930AD022D6DE3B)
	 */
	getVehicleClassMaxAgility(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_BRAKING
	 *
	 * Hash: 0x4BF54C16EC8FEC03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4BF54C16EC8FEC03)
	 */
	getVehicleClassMaxBraking(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_TRACTION
	 *
	 * Hash: 0xDBC86D85C5059461 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBC86D85C5059461)
	 */
	getVehicleClassMaxTraction(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD
	 *
	 * Hash: 0x772960298DA26FDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x772960298DA26FDB)
	 */
	getVehicleMod(vehicle: Handle, modType: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_ACCELERATION
	 *
	 * Hash: 0x8C044C5C84505B6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C044C5C84505B6A)
	 */
	getVehicleModelAcceleration(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_MAX_BRAKING
	 *
	 * Hash: 0xDC53FD41B4ED944C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC53FD41B4ED944C)
	 */
	getVehicleModelMaxBraking(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_NUMBER_OF_SEATS
	 *
	 * Hash: 0x2AD93716F184EDA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AD93716F184EDA4)
	 */
	getVehicleModelMaxNumberOfPassengers(modelHash: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_ESTIMATED_MAX_SPEED
	 *
	 * Hash: 0xF417C2502FFFED43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF417C2502FFFED43)
	 */
	getVehicleModelMaxSpeed(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_MAX_TRACTION
	 *
	 * Hash: 0x539DE94D44FDFD0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x539DE94D44FDFD0D)
	 */
	getVehicleModelMaxTraction(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_RECORDING_ID
	 *
	 * Hash: 0x21543C612379DB3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21543C612379DB3C)
	 */
	getVehicleRecordingId(recording: integer, script: string): integer;

	/**
	 * Native: VEHICLE::HAS_VEHICLE_ASSET_LOADED
	 *
	 * Hash: 0x1BBE0523B8DB9A21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BBE0523B8DB9A21)
	 */
	hasVehicleAssetLoaded(vehicleAsset: integer): boolean;

	/**
	 * Native: VEHICLE::HAS_VEHICLE_RECORDING_BEEN_LOADED
	 *
	 * Hash: 0x300D614A4C785FC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x300D614A4C785FC4)
	 */
	hasVehicleRecordingBeenLoaded(recording: integer, script: string): boolean;

	/**
	 * Native: VEHICLE::IS_ANY_VEHICLE_NEAR_POINT
	 *
	 * Hash: 0x61E1DD6125A3EEE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61E1DD6125A3EEE6)
	 */
	isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: VEHICLE::IS_COP_VEHICLE_IN_AREA_3D
	 *
	 * Hash: 0x7EEF65D5F153E26A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EEF65D5F153E26A)
	 */
	isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;

	/**
	 * Native: VEHICLE::IS_PLAYBACK_GOING_ON_FOR_VEHICLE
	 *
	 * Hash: 0x1C8A4C2C19E68EEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C8A4C2C19E68EEC)
	 */
	isPlaybackGoingOnForVehicle(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_PLAYBACK_USING_AI_GOING_ON_FOR_VEHICLE
	 *
	 * Hash: 0xAEA8FD591FAD4106 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEA8FD591FAD4106)
	 */
	isPlaybackUsingAiGoingOnForVehicle(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_JETSKI
	 *
	 * Hash: 0x9537097412CF75FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9537097412CF75FE)
	 */
	isThisModelAnEmergencyBoat(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_IN_GARAGE_AREA
	 *
	 * Hash: 0xCEE4490CD57BB3C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEE4490CD57BB3C2)
	 */
	isVehicleInGarageArea(garageName: string, vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::PAUSE_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x632A689BF42301B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x632A689BF42301B1)
	 */
	pausePlaybackRecordedVehicle(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::PRELOAD_VEHICLE_MOD
	 *
	 * Hash: 0x758F49C24925568A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x758F49C24925568A)
	 */
	preloadVehicleMod(p0: integer, modType: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_ASSET
	 *
	 * Hash: 0xACE699C71AB9DEB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACE699C71AB9DEB5)
	 */
	removeVehicleAsset(vehicleAsset: integer): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_RECORDING
	 *
	 * Hash: 0xF1160ACCF98A3FC8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1160ACCF98A3FC8)
	 */
	removeVehicleRecording(recording: integer, script: string): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLES_FROM_GENERATORS_IN_AREA
	 *
	 * Hash: 0x46A1E1A299EC4BBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46A1E1A299EC4BBA)
	 */
	removeVehiclesFromGeneratorsInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		unk: integer
	): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_STUCK_CHECK
	 *
	 * Hash: 0x8386BFB614D06749 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8386BFB614D06749)
	 */
	removeVehicleStuckCheck(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REQUEST_VEHICLE_ASSET
	 *
	 * Hash: 0x81A15811460FAB3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81A15811460FAB3A)
	 */
	requestVehicleAsset(vehicleHash: integer, vehicleAsset: integer): void;

	/**
	 * Native: VEHICLE::REQUEST_VEHICLE_RECORDING
	 *
	 * Hash: 0xAF514CABE74CBF15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF514CABE74CBF15)
	 */
	requestVehicleRecording(recording: integer, script: string): void;

	/**
	 * Native: VEHICLE::SET_ALL_LOW_PRIORITY_VEHICLE_GENERATORS_ACTIVE
	 *
	 * Hash: 0x608207E7A8FB787C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x608207E7A8FB787C)
	 */
	setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;

	/**
	 * Native: VEHICLE::SET_ALL_VEHICLE_GENERATORS_ACTIVE
	 *
	 * Hash: 0x34AD89078831A4BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34AD89078831A4BC)
	 */
	setAllVehicleGeneratorsActive(): void;

	/**
	 * Native: VEHICLE::SET_ALL_VEHICLE_GENERATORS_ACTIVE_IN_AREA
	 *
	 * Hash: 0xC12321827687FE4D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC12321827687FE4D)
	 */
	setAllVehicleGeneratorsActiveInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: VEHICLE::SET_PICKUP_ROPE_LENGTH_FOR_CARGOBOB
	 *
	 * Hash: 0x877C1EAEAC531023 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x877C1EAEAC531023)
	 */
	setCargobobHookPosition(cargobob: Handle, length1: number, length2: number, p3: boolean): void;

	/**
	 * Native: VEHICLE::SET_FAR_DRAW_VEHICLES
	 *
	 * Hash: 0x26324F33423F3CC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26324F33423F3CC3)
	 */
	setFarDrawVehicles(toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_NUMBER_OF_PARKED_VEHICLES
	 *
	 * Hash: 0xCAA15F13EBD417FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCAA15F13EBD417FF)
	 */
	setNumberOfParkedVehicles(value: integer): void;

	/**
	 * Native: VEHICLE::SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0xEAE6DCC7EEE3DB1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAE6DCC7EEE3DB1D)
	 */
	setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0xB3B3359379FE77D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3B3359379FE77D3)
	 */
	setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_SCRIPT_VEHICLE_GENERATOR
	 *
	 * Hash: 0xD9D620E0AC6DC4B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9D620E0AC6DC4B0)
	 */
	setScriptVehicleGenerator(vehicleGenerator: integer, enabled: boolean): void;

	/**
	 * Native: VEHICLE::_SET_UNK_BOOL_0x102_FOR_SUBMARINE_VEHICLE_TASK
	 *
	 * Hash: 0x41B9FB92EDED32A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41B9FB92EDED32A6)
	 */
	setUnkBool0X102ForSubmarineTask(vehicle: Handle, value: boolean): void;

	/**
	 * Native: VEHICLE::_SET_UNK_FLOAT_0x104_FOR_SUBMARINE_VEHICLE_TASK
	 *
	 * Hash: 0x498218259FB7C72D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x498218259FB7C72D)
	 */
	setUnkFloat0X104ForSubmarineTask(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DAMAGE
	 *
	 * Hash: 0xA1DD317EA8FD4F29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1DD317EA8FD4F29)
	 */
	setVehicleDamage(
		vehicle: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		damage: number,
		radius: number,
		focusOnModel: boolean
	): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x245A6883D966D537 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x245A6883D966D537)
	 */
	setVehicleDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MOD
	 *
	 * Hash: 0x6AF0636DDEDCB6DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6AF0636DDEDCB6DD)
	 */
	setVehicleMod(vehicle: Handle, modType: integer, modIndex: integer, customTires: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MODEL_IS_SUPPRESSED
	 *
	 * Hash: 0x0FC2D89AC25A5814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FC2D89AC25A5814)
	 */
	setVehicleModelIsSuppressed(model: integer, suppressed: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_SHOOT_AT_TARGET
	 *
	 * Hash: 0x74CD9A9327A282EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74CD9A9327A282EA)
	 */
	setVehicleShootAtTarget(driver: Handle, entity: Handle, xTarget: number, yTarget: number, zTarget: number): void;

	/**
	 * Native: VEHICLE::SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x9438F7AD68771A20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9438F7AD68771A20)
	 */
	skipTimeInPlaybackRecordedVehicle(vehicle: Handle, time: number): void;

	/**
	 * Native: VEHICLE::SKIP_TO_END_AND_STOP_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0xAB8E2EDA0C0A5883 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB8E2EDA0C0A5883)
	 */
	skipToEndAndStopPlaybackRecordedVehicle(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::START_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x3F878F92B3A7A071 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F878F92B3A7A071)
	 */
	startPlaybackRecordedVehicle(vehicle: Handle, recording: integer, script: string, p3: boolean): void;

	/**
	 * Native: VEHICLE::START_PLAYBACK_RECORDED_VEHICLE_USING_AI
	 *
	 * Hash: 0x29DE5FA52D00428C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29DE5FA52D00428C)
	 */
	startPlaybackRecordedVehicleUsingAi(
		vehicle: Handle,
		recording: integer,
		script: string,
		speed: number,
		drivingStyle: integer
	): void;

	/**
	 * Native: VEHICLE::START_PLAYBACK_RECORDED_VEHICLE_WITH_FLAGS
	 *
	 * Hash: 0x7D80FD645D4DA346 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D80FD645D4DA346)
	 */
	startPlaybackRecordedVehicleWithFlags(
		vehicle: Handle,
		recording: integer,
		script: string,
		flags: integer,
		time: integer,
		drivingStyle: integer
	): void;

	/**
	 * Native: VEHICLE::STOP_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x54833611C17ABDEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54833611C17ABDEA)
	 */
	stopPlaybackRecordedVehicle(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::UNPAUSE_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x8879EE09268305D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8879EE09268305D5)
	 */
	unpausePlaybackRecordedVehicle(vehicle: Handle): void;
}

interface GameVehicleUnk {
	/**
	 * Native: VEHICLE::_0x0205F5365292D2EB
	 *
	 * Hash: 0x0205F5365292D2EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0205F5365292D2EB)
	 */
	_0x0205F5365292D2EB(vehicle: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::_0x0419B167EE128F33
	 *
	 * Hash: 0x0419B167EE128F33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0419B167EE128F33)
	 */
	_0x0419B167EE128F33(p0: integer, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0x0581730AB9380412
	 *
	 * Hash: 0x0581730AB9380412 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0581730AB9380412)
	 */
	_0x0581730AB9380412(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: VEHICLE::_0x063AE2B2CC273588
	 *
	 * Hash: 0x063AE2B2CC273588 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x063AE2B2CC273588)
	 */
	_0x063AE2B2CC273588(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x065D03A9D6B2C6B5
	 *
	 * Hash: 0x065D03A9D6B2C6B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x065D03A9D6B2C6B5)
	 */
	_0x065D03A9D6B2C6B5(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x0A3F820A9A9A9AC5
	 *
	 * Hash: 0x0A3F820A9A9A9AC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A3F820A9A9A9AC5)
	 */
	_0x0A3F820A9A9A9AC5(vehicle: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: VEHICLE::_0x0A436B8643716D14
	 *
	 * Hash: 0x0A436B8643716D14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A436B8643716D14)
	 */
	_0x0A436B8643716D14(): void;

	/**
	 * Native: VEHICLE::_0x0AD9E8F87FF7C16F
	 *
	 * Hash: 0x0AD9E8F87FF7C16F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AD9E8F87FF7C16F)
	 */
	_0x0AD9E8F87FF7C16F(p0: integer, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x0BBB9A7A8FFE931B
	 *
	 * Hash: 0x0BBB9A7A8FFE931B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BBB9A7A8FFE931B)
	 */
	_0x0BBB9A7A8FFE931B(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::_0x107A473D7A6647A9
	 *
	 * Hash: 0x107A473D7A6647A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x107A473D7A6647A9)
	 */
	_0x107A473D7A6647A9(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_0x1312DDD8385AEE4E
	 *
	 * Hash: 0x1312DDD8385AEE4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1312DDD8385AEE4E)
	 */
	_0x1312DDD8385AEE4E(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x182F266C2D9E2BEB
	 *
	 * Hash: 0x182F266C2D9E2BEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x182F266C2D9E2BEB)
	 */
	_0x182F266C2D9E2BEB(vehicle: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::_0x1B212B26DD3C04DF
	 *
	 * Hash: 0x1B212B26DD3C04DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B212B26DD3C04DF)
	 */
	_0x1B212B26DD3C04DF(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x1CF38D529D7441D9
	 *
	 * Hash: 0x1CF38D529D7441D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CF38D529D7441D9)
	 */
	_0x1CF38D529D7441D9(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x1F34B0626C594380
	 *
	 * Hash: 0x1F34B0626C594380 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F34B0626C594380)
	 */
	_0x1F34B0626C594380(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x1F9FB66F3A3842D2
	 *
	 * Hash: 0x1F9FB66F3A3842D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F9FB66F3A3842D2)
	 */
	_0x1F9FB66F3A3842D2(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x2310A8F9421EBF43
	 *
	 * Hash: 0x2310A8F9421EBF43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2310A8F9421EBF43)
	 */
	_0x2310A8F9421EBF43(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x2311DD7159F00582
	 *
	 * Hash: 0x2311DD7159F00582 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2311DD7159F00582)
	 */
	_0x2311DD7159F00582(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x26D99D5A82FD18E8
	 *
	 * Hash: 0x26D99D5A82FD18E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26D99D5A82FD18E8)
	 */
	_0x26D99D5A82FD18E8(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x26E13D440E7F6064
	 *
	 * Hash: 0x26E13D440E7F6064 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26E13D440E7F6064)
	 */
	_0x26E13D440E7F6064(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::_0x2C1D8B3B19E517CC
	 *
	 * Hash: 0x2C1D8B3B19E517CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C1D8B3B19E517CC)
	 */
	_0x2C1D8B3B19E517CC(p0: integer, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0x2C4A1590ABF43E8B
	 *
	 * Hash: 0x2C4A1590ABF43E8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C4A1590ABF43E8B)
	 */
	_0x2C4A1590ABF43E8B(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x2FA2494B47FDD009
	 *
	 * Hash: 0x2FA2494B47FDD009 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FA2494B47FDD009)
	 */
	_0x2FA2494B47FDD009(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x3441CAD2F2231923
	 *
	 * Hash: 0x3441CAD2F2231923 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3441CAD2F2231923)
	 */
	_0x3441CAD2F2231923(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x35BB21DE06784373
	 *
	 * Hash: 0x35BB21DE06784373 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35BB21DE06784373)
	 */
	_0x35BB21DE06784373(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x35E0654F4BAD7971
	 *
	 * Hash: 0x35E0654F4BAD7971 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35E0654F4BAD7971)
	 */
	_0x35E0654F4BAD7971(p0: boolean): void;

	/**
	 * Native: VEHICLE::_0x36DE109527A2C0C4
	 *
	 * Hash: 0x36DE109527A2C0C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36DE109527A2C0C4)
	 */
	_0x36DE109527A2C0C4(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x3A9128352EAC9E85
	 *
	 * Hash: 0x3A9128352EAC9E85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A9128352EAC9E85)
	 */
	_0x3A9128352EAC9E85(p0: integer): integer;

	/**
	 * Native: VEHICLE::_0x3B458DDB57038F08
	 *
	 * Hash: 0x3B458DDB57038F08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B458DDB57038F08)
	 */
	_0x3B458DDB57038F08(vehicle: Handle, doorId: integer, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x3DE51E9C80B116CF
	 *
	 * Hash: 0x3DE51E9C80B116CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DE51E9C80B116CF)
	 */
	_0x3DE51E9C80B116CF(p0: integer): integer;

	/**
	 * Native: VEHICLE::_0x407DC5E97DB1A4D3
	 *
	 * Hash: 0x407DC5E97DB1A4D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x407DC5E97DB1A4D3)
	 */
	_0x407DC5E97DB1A4D3(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x41062318F23ED854
	 *
	 * Hash: 0x41062318F23ED854 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41062318F23ED854)
	 */
	_0x41062318F23ED854(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x41290B40FA63E6DA
	 *
	 * Hash: 0x41290B40FA63E6DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41290B40FA63E6DA)
	 */
	_0x41290B40FA63E6DA(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x428AD3E26C8D9EB0
	 *
	 * Hash: 0x428AD3E26C8D9EB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x428AD3E26C8D9EB0)
	 */
	_0x428AD3E26C8D9EB0(vehicle: Handle, x: number, y: number, z: number, p4: number): void;

	/**
	 * Native: VEHICLE::_0x430A7631A84C9BE7
	 *
	 * Hash: 0x430A7631A84C9BE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x430A7631A84C9BE7)
	 */
	_0x430A7631A84C9BE7(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x4419966C9936071A
	 *
	 * Hash: 0x4419966C9936071A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4419966C9936071A)
	 */
	_0x4419966C9936071A(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_0x4AD280EB48B2D8E6
	 *
	 * Hash: 0x4AD280EB48B2D8E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AD280EB48B2D8E6)
	 */
	_0x4AD280EB48B2D8E6(vehicle: Handle, togle: boolean): void;

	/**
	 * Native: VEHICLE::_0x4D9D109F63FEE1D4
	 *
	 * Hash: 0x4D9D109F63FEE1D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D9D109F63FEE1D4)
	 */
	_0x4D9D109F63FEE1D4(p0: integer, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x4E74E62E0A97E901
	 *
	 * Hash: 0x4E74E62E0A97E901 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E74E62E0A97E901)
	 */
	_0x4E74E62E0A97E901(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x51DB102F4A3BA5E0
	 *
	 * Hash: 0x51DB102F4A3BA5E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51DB102F4A3BA5E0)
	 */
	_0x51DB102F4A3BA5E0(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x51F30DB60626A20E
	 *
	 * Hash: 0x51F30DB60626A20E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51F30DB60626A20E)
	 */
	_0x51F30DB60626A20E(
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: integer,
		p8: integer
	): boolean;

	/**
	 * Native: VEHICLE::_0x56EB5E94318D3FB6
	 *
	 * Hash: 0x56EB5E94318D3FB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56EB5E94318D3FB6)
	 */
	_0x56EB5E94318D3FB6(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x5845066D8A1EA7F7
	 *
	 * Hash: 0x5845066D8A1EA7F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5845066D8A1EA7F7)
	 */
	_0x5845066D8A1EA7F7(vehicle: Handle, x: number, y: number, z: number, p4: integer): void;

	/**
	 * Native: VEHICLE::_0x59C3757B3B7408E8
	 *
	 * Hash: 0x59C3757B3B7408E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59C3757B3B7408E8)
	 */
	_0x59C3757B3B7408E8(vehicle: Handle, toggle: boolean, p2: number): void;

	/**
	 * Native: VEHICLE::_0x5BA68A0840D546AC
	 *
	 * Hash: 0x5BA68A0840D546AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BA68A0840D546AC)
	 */
	_0x5BA68A0840D546AC(p0: integer, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0x5BBCF35BF6E456F7
	 *
	 * Hash: 0x5BBCF35BF6E456F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BBCF35BF6E456F7)
	 */
	_0x5BBCF35BF6E456F7(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x5E569EC46EC21CAE
	 *
	 * Hash: 0x5E569EC46EC21CAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E569EC46EC21CAE)
	 */
	_0x5E569EC46EC21CAE(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x6501129C9E0FFA05
	 *
	 * Hash: 0x6501129C9E0FFA05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6501129C9E0FFA05)
	 */
	_0x6501129C9E0FFA05(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x65B080555EA48149
	 *
	 * Hash: 0x65B080555EA48149 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65B080555EA48149)
	 */
	_0x65B080555EA48149(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x66E3AAFACE2D1EB8
	 *
	 * Hash: 0x66E3AAFACE2D1EB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66E3AAFACE2D1EB8)
	 */
	_0x66E3AAFACE2D1EB8(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::_0x6A973569BA094650
	 *
	 * Hash: 0x6A973569BA094650 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A973569BA094650)
	 */
	_0x6A973569BA094650(vehicle: Handle, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x6A98C2ECF57FA5D4
	 *
	 * Hash: 0x6A98C2ECF57FA5D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A98C2ECF57FA5D4)
	 */
	_0x6A98C2ECF57FA5D4(vehicle: Handle, entity: Handle): void;

	/**
	 * Native: VEHICLE::_0x6EAAEFC76ACC311F
	 *
	 * Hash: 0x6EAAEFC76ACC311F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EAAEFC76ACC311F)
	 */
	_0x6EAAEFC76ACC311F(p0: integer): integer;

	/**
	 * Native: VEHICLE::_0x6EBFB22D646FFC18
	 *
	 * Hash: 0x6EBFB22D646FFC18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EBFB22D646FFC18)
	 */
	_0x6EBFB22D646FFC18(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x72BECCF4B829522E
	 *
	 * Hash: 0x72BECCF4B829522E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72BECCF4B829522E)
	 */
	_0x72BECCF4B829522E(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x73561D4425A021A2
	 *
	 * Hash: 0x73561D4425A021A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73561D4425A021A2)
	 */
	_0x73561D4425A021A2(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x737E398138550FFF
	 *
	 * Hash: 0x737E398138550FFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x737E398138550FFF)
	 */
	_0x737E398138550FFF(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x76D26A22750E849E
	 *
	 * Hash: 0x76D26A22750E849E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76D26A22750E849E)
	 */
	_0x76D26A22750E849E(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_0x78CEEE41F49F421F
	 *
	 * Hash: 0x78CEEE41F49F421F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78CEEE41F49F421F)
	 */
	_0x78CEEE41F49F421F(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x796A877E459B99EA
	 *
	 * Hash: 0x796A877E459B99EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x796A877E459B99EA)
	 */
	_0x796A877E459B99EA(p0: integer, p1: number, p2: number, p3: number): void;

	/**
	 * Native: VEHICLE::_0x7BBE7FF626A591FE
	 *
	 * Hash: 0x7BBE7FF626A591FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7BBE7FF626A591FE)
	 */
	_0x7BBE7FF626A591FE(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x7D6F9A3EF26136A0
	 *
	 * Hash: 0x7D6F9A3EF26136A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D6F9A3EF26136A0)
	 */
	_0x7D6F9A3EF26136A0(vehicle: Handle, toggle: boolean, p2: boolean): void;

	/**
	 * Native: VEHICLE::_0x80E3357FDEF45C21
	 *
	 * Hash: 0x80E3357FDEF45C21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80E3357FDEF45C21)
	 */
	_0x80E3357FDEF45C21(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x8235F1BEAD557629
	 *
	 * Hash: 0x8235F1BEAD557629 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8235F1BEAD557629)
	 */
	_0x8235F1BEAD557629(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x82E0AC411E41A5B4
	 *
	 * Hash: 0x82E0AC411E41A5B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82E0AC411E41A5B4)
	 */
	_0x82E0AC411E41A5B4(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x8533CAFDE1F0F336
	 *
	 * Hash: 0x8533CAFDE1F0F336 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8533CAFDE1F0F336)
	 */
	_0x8533CAFDE1F0F336(p0: integer): integer;

	/**
	 * Native: VEHICLE::_0x8664170EF165C4A6
	 *
	 * Hash: 0x8664170EF165C4A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8664170EF165C4A6)
	 */
	_0x8664170EF165C4A6(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0x870B8B7A766615C8
	 *
	 * Hash: 0x870B8B7A766615C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x870B8B7A766615C8)
	 */
	_0x870B8B7A766615C8(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::_0x8821196D91FA2DE5
	 *
	 * Hash: 0x8821196D91FA2DE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8821196D91FA2DE5)
	 */
	_0x8821196D91FA2DE5(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x887FA38787DE8C72
	 *
	 * Hash: 0x887FA38787DE8C72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x887FA38787DE8C72)
	 */
	_0x887FA38787DE8C72(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_0x88BC673CA9E0AE99
	 *
	 * Hash: 0x88BC673CA9E0AE99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88BC673CA9E0AE99)
	 */
	_0x88BC673CA9E0AE99(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x8AA9180DE2FEDD45
	 *
	 * Hash: 0x8AA9180DE2FEDD45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8AA9180DE2FEDD45)
	 */
	_0x8AA9180DE2FEDD45(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x8F0D5BA1C2CC91D7
	 *
	 * Hash: 0x8F0D5BA1C2CC91D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F0D5BA1C2CC91D7)
	 */
	_0x8F0D5BA1C2CC91D7(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x9640E30A7F395E4B
	 *
	 * Hash: 0x9640E30A7F395E4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9640E30A7F395E4B)
	 */
	_0x9640E30A7F395E4B(vehicle: Handle, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: VEHICLE::_0x97841634EF7DF1D6
	 *
	 * Hash: 0x97841634EF7DF1D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97841634EF7DF1D6)
	 */
	_0x97841634EF7DF1D6(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x9849DE24FCF23CCC
	 *
	 * Hash: 0x9849DE24FCF23CCC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9849DE24FCF23CCC)
	 */
	_0x9849DE24FCF23CCC(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x99A05839C46CE316
	 *
	 * Hash: 0x99A05839C46CE316 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99A05839C46CE316)
	 */
	_0x99A05839C46CE316(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0x99CAD8E7AFDB60FA
	 *
	 * Hash: 0x99CAD8E7AFDB60FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99CAD8E7AFDB60FA)
	 */
	_0x99CAD8E7AFDB60FA(vehicle: Handle, p1: number, p2: number): void;

	/**
	 * Native: VEHICLE::_0x9A75585FB2E54FAD
	 *
	 * Hash: 0x9A75585FB2E54FAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A75585FB2E54FAD)
	 */
	_0x9A75585FB2E54FAD(x: number, y: number, z: number, radius: number): void;

	/**
	 * Native: VEHICLE::_0x9BDDC73CC6A115D4
	 *
	 * Hash: 0x9BDDC73CC6A115D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BDDC73CC6A115D4)
	 */
	_0x9BDDC73CC6A115D4(vehicle: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: VEHICLE::_0x9BECD4B9FEF3F8A6
	 *
	 * Hash: 0x9BECD4B9FEF3F8A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BECD4B9FEF3F8A6)
	 */
	_0x9BECD4B9FEF3F8A6(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0x9D30687C57BAA0BB
	 *
	 * Hash: 0x9D30687C57BAA0BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D30687C57BAA0BB)
	 */
	_0x9D30687C57BAA0BB(p0: integer): void;

	/**
	 * Native: VEHICLE::_0x9F3F689B814F2599
	 *
	 * Hash: 0x9F3F689B814F2599 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F3F689B814F2599)
	 */
	_0x9F3F689B814F2599(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xA01BC64DD4BFBBAC
	 *
	 * Hash: 0xA01BC64DD4BFBBAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA01BC64DD4BFBBAC)
	 */
	_0xA01BC64DD4BFBBAC(vehicle: Handle, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0xA247F9EF01D8082E
	 *
	 * Hash: 0xA247F9EF01D8082E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA247F9EF01D8082E)
	 */
	_0xA247F9EF01D8082E(p0: integer): void;

	/**
	 * Native: VEHICLE::_0xA4822F1CF23F4810
	 *
	 * Hash: 0xA4822F1CF23F4810 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4822F1CF23F4810)
	 */
	_0xA4822F1CF23F4810(
		p1: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer
	): _0xA4822F1CF23F4810Result;

	/**
	 * Native: VEHICLE::_0xA4A9A4C40E615885
	 *
	 * Hash: 0xA4A9A4C40E615885 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4A9A4C40E615885)
	 */
	_0xA4A9A4C40E615885(p0: integer): void;

	/**
	 * Native: VEHICLE::_0xA7DCDF4DED40A8F4
	 *
	 * Hash: 0xA7DCDF4DED40A8F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7DCDF4DED40A8F4)
	 */
	_0xA7DCDF4DED40A8F4(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xAA653AE61924B0A0
	 *
	 * Hash: 0xAA653AE61924B0A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA653AE61924B0A0)
	 */
	_0xAA653AE61924B0A0(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0xAB04325045427AAE
	 *
	 * Hash: 0xAB04325045427AAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB04325045427AAE)
	 */
	_0xAB04325045427AAE(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xAB31EF4DE6800CE9
	 *
	 * Hash: 0xAB31EF4DE6800CE9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB31EF4DE6800CE9)
	 */
	_0xAB31EF4DE6800CE9(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xAF60E6A2936F982A
	 *
	 * Hash: 0xAF60E6A2936F982A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF60E6A2936F982A)
	 */
	_0xAF60E6A2936F982A(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xB264C4D2F2B0A78B
	 *
	 * Hash: 0xB264C4D2F2B0A78B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB264C4D2F2B0A78B)
	 */
	_0xB264C4D2F2B0A78B(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_0xB28B1FE5BFADD7F5
	 *
	 * Hash: 0xB28B1FE5BFADD7F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB28B1FE5BFADD7F5)
	 */
	_0xB28B1FE5BFADD7F5(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xB2E0C0D6922D31F2
	 *
	 * Hash: 0xB2E0C0D6922D31F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2E0C0D6922D31F2)
	 */
	_0xB2E0C0D6922D31F2(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0xB68CFAF83A02768D
	 *
	 * Hash: 0xB68CFAF83A02768D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB68CFAF83A02768D)
	 */
	_0xB68CFAF83A02768D(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0xB93B2867F7B479D1
	 *
	 * Hash: 0xB93B2867F7B479D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB93B2867F7B479D1)
	 */
	_0xB93B2867F7B479D1(vehicle: Handle, index: integer): void;

	/**
	 * Native: VEHICLE::_0xB9562064627FF9DB
	 *
	 * Hash: 0xB9562064627FF9DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9562064627FF9DB)
	 */
	_0xB9562064627FF9DB(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xBA91D045575699AD
	 *
	 * Hash: 0xBA91D045575699AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA91D045575699AD)
	 */
	_0xBA91D045575699AD(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_0xBB2333BB87DDD87F
	 *
	 * Hash: 0xBB2333BB87DDD87F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB2333BB87DDD87F)
	 */
	_0xBB2333BB87DDD87F(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xBE5C1255A1830FF5
	 *
	 * Hash: 0xBE5C1255A1830FF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE5C1255A1830FF5)
	 */
	_0xBE5C1255A1830FF5(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_0xC0ED6438E6D39BA8
	 *
	 * Hash: 0xC0ED6438E6D39BA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0ED6438E6D39BA8)
	 */
	_0xC0ED6438E6D39BA8(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::_0xC361AA040D6637A8
	 *
	 * Hash: 0xC361AA040D6637A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC361AA040D6637A8)
	 */
	_0xC361AA040D6637A8(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xC4B3347BD68BD609
	 *
	 * Hash: 0xC4B3347BD68BD609 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4B3347BD68BD609)
	 */
	_0xC4B3347BD68BD609(p0: integer): void;

	/**
	 * Native: VEHICLE::_0xC50CE861B55EAB8B
	 *
	 * Hash: 0xC50CE861B55EAB8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC50CE861B55EAB8B)
	 */
	_0xC50CE861B55EAB8B(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xC67DB108A9ADE3BE
	 *
	 * Hash: 0xC67DB108A9ADE3BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC67DB108A9ADE3BE)
	 */
	_0xC67DB108A9ADE3BE(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xCF9159024555488C
	 *
	 * Hash: 0xCF9159024555488C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF9159024555488C)
	 */
	_0xCF9159024555488C(p0: integer): void;

	/**
	 * Native: VEHICLE::_0xCFD778E7904C255E
	 *
	 * Hash: 0xCFD778E7904C255E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFD778E7904C255E)
	 */
	_0xCFD778E7904C255E(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_0xD3301660A57C9272
	 *
	 * Hash: 0xD3301660A57C9272 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3301660A57C9272)
	 */
	_0xD3301660A57C9272(p0: integer): void;

	/**
	 * Native: VEHICLE::_0xD3E51C0AB8C26EEE
	 *
	 * Hash: 0xD3E51C0AB8C26EEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3E51C0AB8C26EEE)
	 */
	_0xD3E51C0AB8C26EEE(p0: integer, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0xD4196117AF7BB974
	 *
	 * Hash: 0xD4196117AF7BB974 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4196117AF7BB974)
	 */
	_0xD4196117AF7BB974(p0: integer, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0xD4C4642CB7F50B5D
	 *
	 * Hash: 0xD4C4642CB7F50B5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4C4642CB7F50B5D)
	 */
	_0xD4C4642CB7F50B5D(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_0xD565F438137F0E10
	 *
	 * Hash: 0xD565F438137F0E10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD565F438137F0E10)
	 */
	_0xD565F438137F0E10(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xDBC631F109350B8C
	 *
	 * Hash: 0xDBC631F109350B8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBC631F109350B8C)
	 */
	_0xDBC631F109350B8C(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xDCE97BDF8A0EABC8
	 *
	 * Hash: 0xDCE97BDF8A0EABC8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCE97BDF8A0EABC8)
	 */
	_0xDCE97BDF8A0EABC8(vehicle: Handle, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xE05DD0E9707003A3
	 *
	 * Hash: 0xE05DD0E9707003A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE05DD0E9707003A3)
	 */
	_0xE05DD0E9707003A3(p0: integer, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xE16142B94664DEFD
	 *
	 * Hash: 0xE16142B94664DEFD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE16142B94664DEFD)
	 */
	_0xE16142B94664DEFD(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xE2F53F172B45EDE1
	 *
	 * Hash: 0xE2F53F172B45EDE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2F53F172B45EDE1)
	 */
	_0xE2F53F172B45EDE1(): void;

	/**
	 * Native: VEHICLE::_0xE5810AC70602F2F5
	 *
	 * Hash: 0xE5810AC70602F2F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5810AC70602F2F5)
	 */
	_0xE5810AC70602F2F5(vehicle: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::_0xE851E480B814D4BA
	 *
	 * Hash: 0xE851E480B814D4BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE851E480B814D4BA)
	 */
	_0xE851E480B814D4BA(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_0xE8718FAF591FD224
	 *
	 * Hash: 0xE8718FAF591FD224 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8718FAF591FD224)
	 */
	_0xE8718FAF591FD224(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_0xED5EDE9E676643C9
	 *
	 * Hash: 0xED5EDE9E676643C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED5EDE9E676643C9)
	 */
	_0xED5EDE9E676643C9(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xEDBC8405B3895CC9
	 *
	 * Hash: 0xEDBC8405B3895CC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDBC8405B3895CC9)
	 */
	_0xEDBC8405B3895CC9(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xEEBFC7A7EFDC35B4
	 *
	 * Hash: 0xEEBFC7A7EFDC35B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEBFC7A7EFDC35B4)
	 */
	_0xEEBFC7A7EFDC35B4(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_0xF051D9BFB6BA39C0
	 *
	 * Hash: 0xF051D9BFB6BA39C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF051D9BFB6BA39C0)
	 */
	_0xF051D9BFB6BA39C0(p0: integer): void;

	/**
	 * Native: VEHICLE::_0xF25E02CB9C5818F8
	 *
	 * Hash: 0xF25E02CB9C5818F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF25E02CB9C5818F8)
	 */
	_0xF25E02CB9C5818F8(): void;

	/**
	 * Native: VEHICLE::_0xF3B0E0AED097A3F5
	 *
	 * Hash: 0xF3B0E0AED097A3F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3B0E0AED097A3F5)
	 */
	_0xF3B0E0AED097A3F5(p0: integer, p1: integer): integer;

	/**
	 * Native: VEHICLE::_0xF78F94D60248C737
	 *
	 * Hash: 0xF78F94D60248C737 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF78F94D60248C737)
	 */
	_0xF78F94D60248C737(vehicle: Handle, p1: boolean): boolean;

	/**
	 * Native: VEHICLE::_0xF8B49F5BA7F850E7
	 *
	 * Hash: 0xF8B49F5BA7F850E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8B49F5BA7F850E7)
	 */
	_0xF8B49F5BA7F850E7(vehicle: Handle, p1: integer): void;

	/**
	 * Native: VEHICLE::_0xFAF2A78061FD9EF4
	 *
	 * Hash: 0xFAF2A78061FD9EF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAF2A78061FD9EF4)
	 */
	_0xFAF2A78061FD9EF4(p0: integer, p1: number, p2: number, p3: number): void;
}

interface GameVehicle extends GameVehicleLegacy {
	/**
	 * Native: VEHICLE::ADD_VEHICLE_COMBAT_ANGLED_AVOIDANCE_AREA
	 *
	 * Hash: 0x54B0F614960F4A5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54B0F614960F4A5F)
	 */
	addCombatAngledAvoidanceArea(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number
	): integer;

	/**
	 * Native: VEHICLE::ADD_VEHICLE_PHONE_EXPLOSIVE_DEVICE
	 *
	 * Hash: 0x99AD4CCCB128CBC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99AD4CCCB128CBC9)
	 */
	addPhoneExplosiveDevice(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::ADD_ROAD_NODE_SPEED_ZONE
	 *
	 * Hash: 0x2CE544C68FB812A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CE544C68FB812A0)
	 */
	addRoadNodeSpeedZone(x: number, y: number, z: number, radius: number, speed: number, p5: boolean): integer;

	/**
	 * Native: VEHICLE::ADD_VEHICLE_STUCK_CHECK_WITH_WARP
	 *
	 * Hash: 0x2FA9923062DD396C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FA9923062DD396C)
	 */
	addStuckCheckWithWarp(p0: integer, p1: number, p2: integer, p3: boolean, p4: boolean, p5: boolean, p6: integer): void;

	/**
	 * Native: VEHICLE::ADD_VEHICLE_UPSIDEDOWN_CHECK
	 *
	 * Hash: 0xB72E26D81006005B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB72E26D81006005B)
	 */
	addUpsidedownCheck(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::ARE_ALL_VEHICLE_WINDOWS_INTACT
	 *
	 * Hash: 0x11D862A3E977A9EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11D862A3E977A9EF)
	 */
	areAllWindowsIntact(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::ARE_ANY_VEHICLE_SEATS_FREE
	 *
	 * Hash: 0x2D34FC3BC4ADB780 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D34FC3BC4ADB780)
	 */
	areAnySeatsFree(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_ARE_BOMB_BAY_DOORS_OPEN
	 *
	 * Hash: 0xD0917A423314BBA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0917A423314BBA8)
	 */
	areBombBayDoorsOpen(aircraft: Handle): boolean;

	/**
	 * Native: VEHICLE::_ARE_HELI_STUB_WINGS_DEPLOYED
	 *
	 * Hash: 0xAEF12960FA943792 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEF12960FA943792)
	 */
	areHeliStubWingsDeployed(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::ARE_PLANE_PROPELLERS_INTACT
	 *
	 * Hash: 0x755D6D5267CBBD7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x755D6D5267CBBD7E)
	 */
	arePlanePropellersIntact(plane: Handle): boolean;

	/**
	 * Native: VEHICLE::_ARE_PLANE_WINGS_INTACT
	 *
	 * Hash: 0x5991A01434CE9677 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5991A01434CE9677)
	 */
	arePlaneWingsIntact(plane: Handle): boolean;

	/**
	 * Native: VEHICLE::_ATTACH_ENTITY_TO_CARGOBOB
	 *
	 * Hash: 0xA1DD82F3CCF9A01E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1DD82F3CCF9A01E)
	 */
	attachEntityToCargobob(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: VEHICLE::ATTACH_VEHICLE_ON_TO_TRAILER
	 *
	 * Hash: 0x16B5E274BDE402F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16B5E274BDE402F8)
	 */
	attachOnToTrailer(
		vehicle: Handle,
		trailer: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		coordsX: number,
		coordsY: number,
		coordsZ: number,
		rotationX: number,
		rotationY: number,
		rotationZ: number,
		disableCollisions: number
	): void;

	/**
	 * Native: VEHICLE::ATTACH_VEHICLE_TO_CARGOBOB
	 *
	 * Hash: 0x4127F1D84E347769 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4127F1D84E347769)
	 */
	attachToCargobob(vehicle: Handle, cargobob: Handle, p2: integer, x: number, y: number, z: number): void;

	/**
	 * Native: VEHICLE::ATTACH_VEHICLE_TO_TOW_TRUCK
	 *
	 * Hash: 0x29A16F8D621C4508 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29A16F8D621C4508)
	 */
	attachToTowTruck(
		towTruck: Handle,
		vehicle: Handle,
		rear: boolean,
		hookOffsetX: number,
		hookOffsetY: number,
		hookOffsetZ: number
	): void;

	/**
	 * Native: VEHICLE::ATTACH_VEHICLE_TO_TRAILER
	 *
	 * Hash: 0x3C7D42D58F770B54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C7D42D58F770B54)
	 */
	attachToTrailer(vehicle: Handle, trailer: Handle, radius: number): void;

	/**
	 * Native: VEHICLE::BRING_VEHICLE_TO_HALT
	 *
	 * Hash: 0x260BE8F09E326A20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x260BE8F09E326A20)
	 */
	bringToHalt(vehicle: Handle, distance: number, duration: integer, unknown: boolean): void;

	/**
	 * Native: VEHICLE::CAN_ANCHOR_BOAT_HERE
	 *
	 * Hash: 0x26C10ECBDA5D043B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26C10ECBDA5D043B)
	 */
	canAnchorBoatHere(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_CAN_ANCHOR_BOAT_HERE_2
	 *
	 * Hash: 0x24F4121D07579880 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24F4121D07579880)
	 */
	canAnchorBoatHere2(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::CAN_SHUFFLE_SEAT
	 *
	 * Hash: 0x30785D90C956BF35 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30785D90C956BF35)
	 */
	canShuffleSeat(vehicle: Handle, seatIndex: integer): boolean;

	/**
	 * Native: VEHICLE::CLEAR_VEHICLE_CUSTOM_PRIMARY_COLOUR
	 *
	 * Hash: 0x55E1D2758F34E437 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55E1D2758F34E437)
	 */
	clearCustomPrimaryColour(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::CLEAR_VEHICLE_CUSTOM_SECONDARY_COLOUR
	 *
	 * Hash: 0x5FFBDEEC3E8E2009 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FFBDEEC3E8E2009)
	 */
	clearCustomSecondaryColour(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::CLEAR_LAST_DRIVEN_VEHICLE
	 *
	 * Hash: 0xE01903C47C7AC89E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE01903C47C7AC89E)
	 */
	clearLastDriven(): void;

	/**
	 * Native: VEHICLE::_CLEAR_VEHICLE_PHONE_EXPLOSIVE_DEVICE
	 *
	 * Hash: 0xAA3F739ABDDCF21F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA3F739ABDDCF21F)
	 */
	clearPhoneExplosiveDevice(): void;

	/**
	 * Native: VEHICLE::CLEAR_VEHICLE_ROUTE_HISTORY
	 *
	 * Hash: 0x6D6AF961B72728AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D6AF961B72728AE)
	 */
	clearRouteHistory(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::CLOSE_BOMB_BAY_DOORS
	 *
	 * Hash: 0x3556041742A0DC74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3556041742A0DC74)
	 */
	closeBombBayDoors(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::CONTROL_LANDING_GEAR
	 *
	 * Hash: 0xCFC8BE9A5E1FE575 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFC8BE9A5E1FE575)
	 */
	controlLandingGear(vehicle: Handle, state: integer): void;

	/**
	 * Native: VEHICLE::COPY_VEHICLE_DAMAGES
	 *
	 * Hash: 0xE44A982368A4AF23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE44A982368A4AF23)
	 */
	copyDamages(sourceVehicle: Handle, targetVehicle: Handle): void;

	/**
	 * Native: VEHICLE::CREATE_VEHICLE
	 *
	 * Hash: 0xAF35D0D2583051B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF35D0D2583051B0)
	 */
	create(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		heading: number,
		isNetwork: boolean,
		bScriptHostVeh: boolean,
		p7: boolean
	): Handle;

	/**
	 * Native: VEHICLE::CREATE_MISSION_TRAIN
	 *
	 * Hash: 0x63C6CCA8E68AE8C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63C6CCA8E68AE8C8)
	 */
	createMissionTrain(
		variation: integer,
		x: number,
		y: number,
		z: number,
		direction: boolean,
		p5: integer,
		p6: integer
	): Handle;

	/**
	 * Native: VEHICLE::CREATE_PICK_UP_ROPE_FOR_CARGOBOB
	 *
	 * Hash: 0x7BEB0C7A235F6F3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7BEB0C7A235F6F3B)
	 */
	createPickUpRopeForCargobob(cargobob: Handle, state: integer): void;

	/**
	 * Native: VEHICLE::CREATE_SCRIPT_VEHICLE_GENERATOR
	 *
	 * Hash: 0x9DEF883114668116 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DEF883114668116)
	 */
	createScriptGenerator(
		x: number,
		y: number,
		z: number,
		heading: number,
		p4: number,
		p5: number,
		modelHash: integer,
		p7: integer,
		p8: integer,
		p9: integer,
		p10: integer,
		p11: boolean,
		p12: boolean,
		p13: boolean,
		p14: boolean,
		p15: boolean,
		p16: integer
	): integer;

	/**
	 * Native: VEHICLE::DELETE_VEHICLE
	 *
	 * Hash: 0xEA386986E786A54F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA386986E786A54F)
	 */
	delete(vehicle: Handle): Handle;

	/**
	 * Native: VEHICLE::DELETE_ALL_TRAINS
	 *
	 * Hash: 0x736A718577F39C7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x736A718577F39C7D)
	 */
	deleteAllTrains(): void;

	/**
	 * Native: VEHICLE::DELETE_MISSION_TRAIN
	 *
	 * Hash: 0x5B76B14AE875C795 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B76B14AE875C795)
	 */
	deleteMissionTrain(train: Handle): Handle;

	/**
	 * Native: VEHICLE::DELETE_SCRIPT_VEHICLE_GENERATOR
	 *
	 * Hash: 0x22102C9ABFCF125D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22102C9ABFCF125D)
	 */
	deleteScriptGenerator(vehicleGenerator: integer): void;

	/**
	 * Native: VEHICLE::DETACH_CONTAINER_FROM_HANDLER_FRAME
	 *
	 * Hash: 0x7C0043FDFF6436BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C0043FDFF6436BC)
	 */
	detachContainerFromHandlerFrame(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_DETACH_ENTITY_FROM_CARGOBOB
	 *
	 * Hash: 0xAF03011701811146 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF03011701811146)
	 */
	detachEntityFromCargobob(cargobob: Handle, entity: Handle): integer;

	/**
	 * Native: VEHICLE::DETACH_VEHICLE_FROM_ANY_CARGOBOB
	 *
	 * Hash: 0xADF7BE450512C12F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADF7BE450512C12F)
	 */
	detachFromAnyCargobob(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DETACH_VEHICLE_FROM_ANY_TOW_TRUCK
	 *
	 * Hash: 0xD0E9CE05A1E68CD8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0E9CE05A1E68CD8)
	 */
	detachFromAnyTowTruck(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DETACH_VEHICLE_FROM_CARGOBOB
	 *
	 * Hash: 0x0E21D3DF1051399D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E21D3DF1051399D)
	 */
	detachFromCargobob(vehicle: Handle, cargobob: Handle): void;

	/**
	 * Native: VEHICLE::DETACH_VEHICLE_FROM_TOW_TRUCK
	 *
	 * Hash: 0xC2DB6B6708350ED8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2DB6B6708350ED8)
	 */
	detachFromTowTruck(towTruck: Handle, vehicle: Handle): void;

	/**
	 * Native: VEHICLE::DETACH_VEHICLE_FROM_TRAILER
	 *
	 * Hash: 0x90532EDF0D2BDD86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90532EDF0D2BDD86)
	 */
	detachFromTrailer(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::DETONATE_VEHICLE_PHONE_EXPLOSIVE_DEVICE
	 *
	 * Hash: 0xEF49CF0270307CBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF49CF0270307CBE)
	 */
	detonatePhoneExplosiveDevice(): void;

	/**
	 * Native: VEHICLE::DISABLE_INDIVIDUAL_PLANE_PROPELLER
	 *
	 * Hash: 0x500873A45724C863 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x500873A45724C863)
	 */
	disableIndividualPlanePropeller(vehicle: Handle, propeller: integer): void;

	/**
	 * Native: VEHICLE::_DISABLE_VEHICLE_NEON_LIGHTS
	 *
	 * Hash: 0x83F813570FF519DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83F813570FF519DE)
	 */
	disableNeonLights(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::DISABLE_PLANE_AILERON
	 *
	 * Hash: 0x23428FC53C60919C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23428FC53C60919C)
	 */
	disablePlaneAileron(vehicle: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: VEHICLE::_DISABLE_VEHICLE_TURRET_MOVEMENT_THIS_FRAME
	 *
	 * Hash: 0x32CAEDF24A583345 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32CAEDF24A583345)
	 */
	disableTurretMovementThisFrame(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::DISABLE_VEHICLE_WEAPON
	 *
	 * Hash: 0xF4FC6A6F67D8D856 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4FC6A6F67D8D856)
	 */
	disableWeapon(disabled: boolean, weaponHash: integer, vehicle: Handle, owner: Handle): void;

	/**
	 * Native: VEHICLE::_DISABLE_VEHICLE_WORLD_COLLISION
	 *
	 * Hash: 0x75627043C6AA90AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75627043C6AA90AD)
	 */
	disableWorldCollision(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_DOES_VEHICLE_ALLOW_RAPPEL
	 *
	 * Hash: 0x4E417C547182C84D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E417C547182C84D)
	 */
	doesAllowRappel(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_CARGOBOB_HAVE_PICKUP_MAGNET
	 *
	 * Hash: 0x6E08BF5B3722BAC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E08BF5B3722BAC9)
	 */
	doesCargobobHavePickupMagnet(cargobob: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_CARGOBOB_HAVE_PICK_UP_ROPE
	 *
	 * Hash: 0x1821D91AD4B56108 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1821D91AD4B56108)
	 */
	doesCargobobHavePickUpRope(cargobob: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_VEHICLE_EXIST_WITH_DECORATOR
	 *
	 * Hash: 0x956B409B984D9BF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x956B409B984D9BF7)
	 */
	doesExistWithDecorator(decorator: string): boolean;

	/**
	 * Native: VEHICLE::DOES_EXTRA_EXIST
	 *
	 * Hash: 0x1262D55792428154 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1262D55792428154)
	 */
	doesExtraExist(vehicle: Handle, extraId: integer): boolean;

	/**
	 * Native: VEHICLE::_DOES_VEHICLE_HAVE_LANDING_GEAR
	 *
	 * Hash: 0xE43701C36CAFF1A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE43701C36CAFF1A4)
	 */
	doesHaveLandingGear(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_VEHICLE_HAVE_ROOF
	 *
	 * Hash: 0x8AC862B0B32C5B80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8AC862B0B32C5B80)
	 */
	doesHaveRoof(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_DOES_VEHICLE_HAVE_SEARCHLIGHT
	 *
	 * Hash: 0x99015ED7DBEA5113 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99015ED7DBEA5113)
	 */
	doesHaveSearchlight(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_VEHICLE_HAVE_STUCK_VEHICLE_CHECK
	 *
	 * Hash: 0x57E4C39DE5EE8470 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57E4C39DE5EE8470)
	 */
	doesHaveStuckVehicleCheck(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_VEHICLE_HAVE_WEAPONS
	 *
	 * Hash: 0x25ECB9F8017D98E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25ECB9F8017D98E0)
	 */
	doesHaveWeapons(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::DOES_SCRIPT_VEHICLE_GENERATOR_EXIST
	 *
	 * Hash: 0xF6086BC836400876 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6086BC836400876)
	 */
	doesScriptGeneratorExist(vehicleGenerator: integer): boolean;

	/**
	 * Native: VEHICLE::_DOES_VEHICLE_TYRE_EXIST
	 *
	 * Hash: 0x534E36D4DB9ECC5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x534E36D4DB9ECC5D)
	 */
	doesTyreExist(vehicle: Handle, tyreIndex: integer): boolean;

	/**
	 * Native: VEHICLE::_EJECT_JB700_ROOF
	 *
	 * Hash: 0xE38CB9D7D39FDBCC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE38CB9D7D39FDBCC)
	 */
	ejectJb700Roof(vehicle: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: VEHICLE::EXPLODE_VEHICLE
	 *
	 * Hash: 0xBA71116ADF5B514C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA71116ADF5B514C)
	 */
	explode(vehicle: Handle, isAudible: boolean, isInvisible: boolean): void;

	/**
	 * Native: VEHICLE::EXPLODE_VEHICLE_IN_CUTSCENE
	 *
	 * Hash: 0x786A4EB67B01BF0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x786A4EB67B01BF0B)
	 */
	explodeInCutscene(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_FIND_VEHICLE_CARRYING_THIS_ENTITY
	 *
	 * Hash: 0x375E7FC44F21C8AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x375E7FC44F21C8AB)
	 */
	findCarryingThisEntity(entity: Handle): Handle;

	/**
	 * Native: VEHICLE::_FIND_RANDOM_POINT_IN_SPACE
	 *
	 * Hash: 0x8DC9675797123522 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DC9675797123522)
	 */
	findRandomPointInSpace(ped: Handle): Vector3Mp;

	/**
	 * Native: VEHICLE::FIX_VEHICLE_WINDOW
	 *
	 * Hash: 0x772282EBEB95E682 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x772282EBEB95E682)
	 */
	fixWindow(vehicle: Handle, index: integer): void;

	/**
	 * Native: VEHICLE::FORCE_PLAYBACK_RECORDED_VEHICLE_UPDATE
	 *
	 * Hash: 0x1F2E4E06DEA8992B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F2E4E06DEA8992B)
	 */
	forcePlaybackRecordedUpdate(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::FORCE_SUBMARINE_SURFACE_MODE
	 *
	 * Hash: 0x33506883545AC0DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33506883545AC0DF)
	 */
	forceSubmarineSurfaceMode(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::GET_VEHICLE_ACCELERATION
	 *
	 * Hash: 0x5DD35C8D074E57AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DD35C8D074E57AE)
	 */
	getAcceleration(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::_GET_ALL_VEHICLES
	 *
	 * Hash: 0x9B8E1BF04B51F2E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B8E1BF04B51F2E8)
	 */
	getAllS(): GetAllVehiclesResult;

	/**
	 * Native: VEHICLE::GET_VEHICLE_ATTACHED_TO_CARGOBOB
	 *
	 * Hash: 0x873B82D42AC2B9E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x873B82D42AC2B9E5)
	 */
	getAttachedToCargobob(cargobob: Handle): Handle;

	/**
	 * Native: VEHICLE::GET_BOAT_BOOM_POSITION_RATIO
	 *
	 * Hash: 0x6636C535F6CC2725 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6636C535F6CC2725)
	 */
	getBoatBoomPositionRatio(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::_GET_BOAT_BOOM_POSITION_RATIO_2
	 *
	 * Hash: 0xC1F981A6F74F0C23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1F981A6F74F0C23)
	 */
	getBoatBoomPositionRatio2(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_GET_BOAT_BOOM_POSITION_RATIO_3
	 *
	 * Hash: 0x0F3B4D4E43177236 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F3B4D4E43177236)
	 */
	getBoatBoomPositionRatio3(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::GET_VEHICLE_BODY_HEALTH
	 *
	 * Hash: 0xF271147EB7B40F12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF271147EB7B40F12)
	 */
	getBodyHealth(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_BODY_HEALTH_2
	 *
	 * Hash: 0xB8EF61207C2393A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8EF61207C2393A9)
	 */
	getBodyHealth2(
		vehicle: Handle,
		maxEngineHealth: number,
		maxPetrolTankHealth: number,
		maxBodyHealth: number,
		maxMainRotorHealth: number,
		maxTailRotorHealth: number,
		maxUnkHealth: number
	): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_BOMB_COUNT
	 *
	 * Hash: 0xEA12BD130D7569A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA12BD130D7569A1)
	 */
	getBombCount(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_CAN_ACTIVATE_PARACHUTE
	 *
	 * Hash: 0xA916396DF4154EE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA916396DF4154EE3)
	 */
	getCanActivateParachute(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_CAN_VEHICLE_JUMP
	 *
	 * Hash: 0x9078C0C5EF8C19E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9078C0C5EF8C19E9)
	 */
	getCanJump(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_CARGOBOB_HOOK_POSITION
	 *
	 * Hash: 0xCBDB9B923CACC92D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBDB9B923CACC92D)
	 */
	getCargobobHookPosition(cargobob: Handle): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CAUSE_OF_DESTRUCTION
	 *
	 * Hash: 0xE495D1EF4C91FD20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE495D1EF4C91FD20)
	 */
	getCauseOfDestruction(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS
	 *
	 * Hash: 0x29439776AAA00A62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29439776AAA00A62)
	 */
	getClass(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_ESTIMATED_MAX_SPEED
	 *
	 * Hash: 0x00C09F246ABEDD82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00C09F246ABEDD82)
	 */
	getClassEstimatedMaxSpeed(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_FROM_NAME
	 *
	 * Hash: 0xDEDF1C8BD47C2200 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEDF1C8BD47C2200)
	 */
	getClassFromName(modelHash: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_ACCELERATION
	 *
	 * Hash: 0x2F83E7E45D9EA7AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F83E7E45D9EA7AE)
	 */
	getClassMaxAcceleration(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_AGILITY
	 *
	 * Hash: 0x4F930AD022D6DE3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F930AD022D6DE3B)
	 */
	getClassMaxAgility(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_BRAKING
	 *
	 * Hash: 0x4BF54C16EC8FEC03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4BF54C16EC8FEC03)
	 */
	getClassMaxBraking(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CLASS_MAX_TRACTION
	 *
	 * Hash: 0xDBC86D85C5059461 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBC86D85C5059461)
	 */
	getClassMaxTraction(vehicleClass: integer): number;

	/**
	 * Native: VEHICLE::GET_CLOSEST_VEHICLE
	 *
	 * Hash: 0xF73EB622C4F1689B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF73EB622C4F1689B)
	 */
	getClosest(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): Handle;

	/**
	 * Native: VEHICLE::GET_VEHICLE_COLOR
	 *
	 * Hash: 0xF3CC740D36221548 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3CC740D36221548)
	 */
	getColor(vehicle: Handle): GetVehicleColorResult;

	/**
	 * Native: VEHICLE::GET_VEHICLE_COLOUR_COMBINATION
	 *
	 * Hash: 0x6A842D197F845D56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A842D197F845D56)
	 */
	getColourCombination(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_COLOURS
	 *
	 * Hash: 0xA19435F193E081AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA19435F193E081AC)
	 */
	getColours(vehicle: Handle): GetVehicleColoursResult;

	/**
	 * Native: VEHICLE::GET_CONVERTIBLE_ROOF_STATE
	 *
	 * Hash: 0xF8C397922FC03F41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8C397922FC03F41)
	 */
	getConvertibleRoofState(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_COUNTERMEASURE_COUNT
	 *
	 * Hash: 0xF846AA63DF56B804 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF846AA63DF56B804)
	 */
	getCountermeasureCount(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_CURRENT_PLAYBACK_FOR_VEHICLE
	 *
	 * Hash: 0x42BC05C27A946054 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42BC05C27A946054)
	 */
	getCurrentPlaybackFor(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_CURRENT_SLIPSTREAM_DRAFT
	 *
	 * Hash: 0x36492C2F0D134C56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36492C2F0D134C56)
	 */
	getCurrentSlipstreamDraft(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CUSTOM_PRIMARY_COLOUR
	 *
	 * Hash: 0xB64CF2CCA9D95F52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB64CF2CCA9D95F52)
	 */
	getCustomPrimaryColour(vehicle: Handle): GetVehicleCustomPrimaryColourResult;

	/**
	 * Native: VEHICLE::GET_VEHICLE_CUSTOM_SECONDARY_COLOUR
	 *
	 * Hash: 0x8389CD56CA8072DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8389CD56CA8072DC)
	 */
	getCustomSecondaryColour(vehicle: Handle): GetVehicleCustomSecondaryColourResult;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_DASHBOARD_COLOR
	 *
	 * Hash: 0xB7635E80A5C31BFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7635E80A5C31BFF)
	 */
	getDashboardColor(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS
	 *
	 * Hash: 0x4EC6CFBC7B2E9536 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EC6CFBC7B2E9536)
	 */
	getDeformationAtPos(vehicle: Handle, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_VEHICLE_DIRT_LEVEL
	 *
	 * Hash: 0x8F17BC8BA08DA62B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F17BC8BA08DA62B)
	 */
	getDirtLevel(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_DISPLAY_NAME_FROM_VEHICLE_MODEL
	 *
	 * Hash: 0xB215AAC32D25D019 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB215AAC32D25D019)
	 */
	getDisplayNameFromModel(modelHash: integer): string;

	/**
	 * Native: VEHICLE::_GET_DOES_VEHICLE_HAVE_TOMBSTONE
	 *
	 * Hash: 0x71AFB258CCED3A27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71AFB258CCED3A27)
	 */
	getDoesHaveTombstone(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_VEHICLE_DOOR_ANGLE_RATIO
	 *
	 * Hash: 0xFE3F9C29F7B32BD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE3F9C29F7B32BD5)
	 */
	getDoorAngleRatio(vehicle: Handle, doorId: integer): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_DOOR_DESTROY_TYPE
	 *
	 * Hash: 0xCA4AC3EAAE46EC7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA4AC3EAAE46EC7B)
	 */
	getDoorDestroyType(vehicle: Handle, doorId: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_DOOR_LOCK_STATUS
	 *
	 * Hash: 0x25BC98A59C2EA962 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25BC98A59C2EA962)
	 */
	getDoorLockStatus(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
	 *
	 * Hash: 0xF6AF6CB341349015 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6AF6CB341349015)
	 */
	getDoorsLockedForPlayer(vehicle: Handle, player: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_DRIFT_TYRES_ENABLED
	 *
	 * Hash: 0x2F5A72430E78C8D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F5A72430E78C8D3)
	 */
	getDriftTyresEnabled(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_VEHICLE_ENGINE_HEALTH
	 *
	 * Hash: 0xC45D23BAF168AAB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC45D23BAF168AAB8)
	 */
	getEngineHealth(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::_GET_ENTITY_ATTACHED_TO_CARGOBOB
	 *
	 * Hash: 0x99093F60746708CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99093F60746708CA)
	 */
	getEntityAttachedToCargobob(p0: integer): integer;

	/**
	 * Native: VEHICLE::GET_ENTITY_ATTACHED_TO_TOW_TRUCK
	 *
	 * Hash: 0xEFEA18DCF10F8F75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFEA18DCF10F8F75)
	 */
	getEntityAttachedToTowTruck(towTruck: Handle): Handle;

	/**
	 * Native: VEHICLE::_GET_ENTRY_POSITION_OF_DOOR
	 *
	 * Hash: 0xC0572928C0ABFDA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0572928C0ABFDA3)
	 */
	getEntryPositionOfDoor(vehicle: Handle, doorId: integer): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_VEHICLE_ENVEFF_SCALE
	 *
	 * Hash: 0xA82819CAC9C4C403 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA82819CAC9C4C403)
	 */
	getEnveffScale(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_ESTIMATED_MAX_SPEED
	 *
	 * Hash: 0x53AF99BAA671CA47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53AF99BAA671CA47)
	 */
	getEstimatedMaxSpeed(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_EXTRA_COLOURS
	 *
	 * Hash: 0x3BC4245933A166F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BC4245933A166F7)
	 */
	getExtraColours(vehicle: Handle): GetVehicleExtraColoursResult;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_FLIGHT_NOZZLE_POSITION
	 *
	 * Hash: 0xDA62027C8BDB326E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA62027C8BDB326E)
	 */
	getFlightNozzlePosition(plane: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_HAS_KERS
	 *
	 * Hash: 0x50634E348C8D44EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50634E348C8D44EF)
	 */
	getHasKers(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_HAS_PARACHUTE
	 *
	 * Hash: 0xBC9CFF381338CB4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC9CFF381338CB4F)
	 */
	getHasParachute(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_HAS_RETRACTABLE_WHEELS
	 *
	 * Hash: 0xDCA174A42133F08C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCA174A42133F08C)
	 */
	getHasRetractableWheels(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_HAS_ROCKET_BOOST
	 *
	 * Hash: 0x36D782F68B309BDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36D782F68B309BDA)
	 */
	getHasRocketBoost(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_HELI_MAIN_ROTOR_HEALTH
	 *
	 * Hash: 0xE4CB7541F413D2C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4CB7541F413D2C5)
	 */
	getHeliMainRotorHealth(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_HELI_TAIL_BOOM_HEALTH
	 *
	 * Hash: 0xAC51915D27E4A5F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC51915D27E4A5F7)
	 */
	getHeliTailBoomHealth(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_HELI_TAIL_ROTOR_HEALTH
	 *
	 * Hash: 0xAE8CE82A4219AC8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE8CE82A4219AC8C)
	 */
	getHeliTailRotorHealth(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_HOMING_LOCKON_STATE
	 *
	 * Hash: 0xE6B0E8CFC3633BF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6B0E8CFC3633BF0)
	 */
	getHomingLockonState(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_HYDRAULIC_WHEEL_VALUE
	 *
	 * Hash: 0x0BB5CBDDD0F25AE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BB5CBDDD0F25AE3)
	 */
	getHydraulicWheelValue(vehicle: Handle, wheelId: integer): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_INTERIOR_COLOR
	 *
	 * Hash: 0x7D1464D472D32136 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D1464D472D32136)
	 */
	getInteriorColor(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_IS_DOOR_VALID
	 *
	 * Hash: 0x645F4B6E8499F632 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x645F4B6E8499F632)
	 */
	getIsDoorValid(vehicle: Handle, doorId: integer): boolean;

	/**
	 * Native: VEHICLE::_GET_IS_VEHICLE_EMP_DISABLED
	 *
	 * Hash: 0x0506ED94363AD905 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0506ED94363AD905)
	 */
	getIsEmpDisabled(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_IS_VEHICLE_ENGINE_RUNNING
	 *
	 * Hash: 0xAE31E7DF9B5B132E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE31E7DF9B5B132E)
	 */
	getIsEngineRunning(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_IS_LEFT_VEHICLE_HEADLIGHT_DAMAGED
	 *
	 * Hash: 0x5EF77C9ADD3B11A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EF77C9ADD3B11A3)
	 */
	getIsLeftHeadlightDamaged(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_IS_VEHICLE_PRIMARY_COLOUR_CUSTOM
	 *
	 * Hash: 0xF095C0405307B21B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF095C0405307B21B)
	 */
	getIsPrimaryColourCustom(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_IS_RIGHT_VEHICLE_HEADLIGHT_DAMAGED
	 *
	 * Hash: 0xA7ECB73355EB2F20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7ECB73355EB2F20)
	 */
	getIsRightHeadlightDamaged(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_IS_VEHICLE_SECONDARY_COLOUR_CUSTOM
	 *
	 * Hash: 0x910A32E7AAD2656C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x910A32E7AAD2656C)
	 */
	getIsSecondaryColourCustom(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_IS_VEHICLE_SHUNT_BOOST_ACTIVE
	 *
	 * Hash: 0xA2459F72C14E2E8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2459F72C14E2E8D)
	 */
	getIsShuntBoostActive(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_IS_SUBMARINE_VEHICLE_TRANSFORMED
	 *
	 * Hash: 0xA77DC70BD689A1E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA77DC70BD689A1E5)
	 */
	getIsSubmarineTransformed(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_IS_WHEELS_LOWERED_STATE_ACTIVE
	 *
	 * Hash: 0x1DA0DA9CB3F0C8BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DA0DA9CB3F0C8BF)
	 */
	getIsWheelsLoweredStateActive(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_LANDING_GEAR_STATE
	 *
	 * Hash: 0x9B0F3DCA3DB0F4CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B0F3DCA3DB0F4CD)
	 */
	getLandingGearState(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_LAST_DRIVEN_VEHICLE
	 *
	 * Hash: 0xB2D06FAEDE65B577 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2D06FAEDE65B577)
	 */
	getLastDriven(): Handle;

	/**
	 * Native: VEHICLE::GET_LAST_PED_IN_VEHICLE_SEAT
	 *
	 * Hash: 0x83F969AA1EE2A664 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83F969AA1EE2A664)
	 */
	getLastPedInSeat(vehicle: Handle, seatIndex: integer): Handle;

	/**
	 * Native: VEHICLE::_GET_LAST_RAMMED_VEHICLE
	 *
	 * Hash: 0x04F2FA6E234162F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04F2FA6E234162F7)
	 */
	getLastRammed(vehicle: Handle): Handle;

	/**
	 * Native: VEHICLE::GET_VEHICLE_LAYOUT_HASH
	 *
	 * Hash: 0x28D37D4F71AC5C58 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28D37D4F71AC5C58)
	 */
	getLayoutHash(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_LIGHTS_STATE
	 *
	 * Hash: 0xB91B4C20085BD12F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB91B4C20085BD12F)
	 */
	getLightsState(vehicle: Handle): GetVehicleLightsStateResult;

	/**
	 * Native: VEHICLE::GET_VEHICLE_LIVERY
	 *
	 * Hash: 0x2BB9230590DA5E8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BB9230590DA5E8A)
	 */
	getLivery(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_LIVERY_COUNT
	 *
	 * Hash: 0x87B63E25A529D526 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87B63E25A529D526)
	 */
	getLiveryCount(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_LIVERY_NAME
	 *
	 * Hash: 0xB4C7A93837C91A1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4C7A93837C91A1F)
	 */
	getLiveryName(vehicle: Handle, liveryIndex: integer): string;

	/**
	 * Native: VEHICLE::GET_VEHICLE_LOCK_ON_TARGET
	 *
	 * Hash: 0x8F5EBAB1F260CFCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F5EBAB1F260CFCE)
	 */
	getLockOnTarget(vehicle: Handle): Handle;

	/**
	 * Native: VEHICLE::_GET_MAKE_NAME_FROM_VEHICLE_MODEL
	 *
	 * Hash: 0xF7AF4F159FF99F97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7AF4F159FF99F97)
	 */
	getMakeNameFromModel(modelHash: integer): string;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MAX_BRAKING
	 *
	 * Hash: 0xAD7E85FC227197C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD7E85FC227197C4)
	 */
	getMaxBraking(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS
	 *
	 * Hash: 0xA7C4F2C6E744A550 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7C4F2C6E744A550)
	 */
	getMaxNumberOfPassengers(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MAX_TRACTION
	 *
	 * Hash: 0xA132FB5370554DB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA132FB5370554DB0)
	 */
	getMaxTraction(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD
	 *
	 * Hash: 0x772960298DA26FDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x772960298DA26FDB)
	 */
	getMod(vehicle: Handle, modType: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_COLOR_1
	 *
	 * Hash: 0xE8D65CA700C9A693 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8D65CA700C9A693)
	 */
	getModColor1(vehicle: Handle): GetVehicleModColor1Result;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_COLOR_1_NAME
	 *
	 * Hash: 0xB45085B721EFD38C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB45085B721EFD38C)
	 */
	getModColor1Name(vehicle: Handle, p1: boolean): string;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_COLOR_2
	 *
	 * Hash: 0x81592BE4E3878728 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81592BE4E3878728)
	 */
	getModColor2(vehicle: Handle): GetVehicleModColor2Result;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_COLOR_2_NAME
	 *
	 * Hash: 0x4967A516ED23A5A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4967A516ED23A5A1)
	 */
	getModColor2Name(vehicle: Handle): string;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_ACCELERATION
	 *
	 * Hash: 0x8C044C5C84505B6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C044C5C84505B6A)
	 */
	getModelAcceleration(modelHash: integer): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_MODEL_ESTIMATED_AGILITY
	 *
	 * Hash: 0x53409B5163D5B846 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53409B5163D5B846)
	 */
	getModelEstimatedAgility(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_ESTIMATED_MAX_SPEED
	 *
	 * Hash: 0xF417C2502FFFED43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF417C2502FFFED43)
	 */
	getModelEstimatedMaxSpeed(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_MAX_BRAKING
	 *
	 * Hash: 0xDC53FD41B4ED944C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC53FD41B4ED944C)
	 */
	getModelMaxBraking(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_MAX_BRAKING_MAX_MODS
	 *
	 * Hash: 0xBFBA3BA79CFF7EBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFBA3BA79CFF7EBF)
	 */
	getModelMaxBrakingMaxMods(modelHash: integer): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_MODEL_MAX_KNOTS
	 *
	 * Hash: 0xC6AD107DDC9054CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6AD107DDC9054CC)
	 */
	getModelMaxKnots(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_MAX_TRACTION
	 *
	 * Hash: 0x539DE94D44FDFD0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x539DE94D44FDFD0D)
	 */
	getModelMaxTraction(modelHash: integer): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_MODEL_MONETARY_VALUE
	 *
	 * Hash: 0x5873C14A52D74236 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5873C14A52D74236)
	 */
	getModelMonetaryValue(vehicleModel: integer): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_MODEL_MOVE_RESISTANCE
	 *
	 * Hash: 0x5AA3F878A178C4FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AA3F878A178C4FC)
	 */
	getModelMoveResistance(modelHash: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MODEL_NUMBER_OF_SEATS
	 *
	 * Hash: 0x2AD93716F184EDA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AD93716F184EDA4)
	 */
	getModelNumberOfSeats(modelHash: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_IDENTIFIER_HASH
	 *
	 * Hash: 0x4593CF82AA179706 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4593CF82AA179706)
	 */
	getModIdentifierHash(vehicle: Handle, modType: integer, modIndex: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_KIT
	 *
	 * Hash: 0x6325D1A044AE510D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6325D1A044AE510D)
	 */
	getModKit(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_KIT_TYPE
	 *
	 * Hash: 0xFC058F5121E54C32 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC058F5121E54C32)
	 */
	getModKitType(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_MODIFIER_VALUE
	 *
	 * Hash: 0x90A38E9838E0A8C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90A38E9838E0A8C1)
	 */
	getModModifierValue(vehicle: Handle, modType: integer, modIndex: integer): integer;

	/**
	 * Native: VEHICLE::GET_MOD_SLOT_NAME
	 *
	 * Hash: 0x51F0FEB9F6AE98C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51F0FEB9F6AE98C0)
	 */
	getModSlotName(vehicle: Handle, modType: integer): string;

	/**
	 * Native: VEHICLE::GET_MOD_TEXT_LABEL
	 *
	 * Hash: 0x8935624F8C5592CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8935624F8C5592CC)
	 */
	getModTextLabel(vehicle: Handle, modType: integer, modValue: integer): string;

	/**
	 * Native: VEHICLE::GET_VEHICLE_MOD_VARIATION
	 *
	 * Hash: 0xB3924ECD70E095DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3924ECD70E095DC)
	 */
	getModVariation(vehicle: Handle, modType: integer): boolean;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_NEON_LIGHTS_COLOUR
	 *
	 * Hash: 0x7619EEE8C886757F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7619EEE8C886757F)
	 */
	getNeonLightsColour(vehicle: Handle): GetVehicleNeonLightsColourResult;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_NUMBER_OF_BROKEN_BONES
	 *
	 * Hash: 0x2C8CBFE1EA5FC631 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C8CBFE1EA5FC631)
	 */
	getNumberOfBrokenBones(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_NUMBER_OF_BROKEN_OFF_BONES
	 *
	 * Hash: 0x42A4BEB35D372407 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42A4BEB35D372407)
	 */
	getNumberOfBrokenOffBones(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_NUMBER_OF_VEHICLE_COLOURS
	 *
	 * Hash: 0x3B963160CD65D41E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B963160CD65D41E)
	 */
	getNumberOfColours(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_NUMBER_OF_VEHICLE_DOORS
	 *
	 * Hash: 0x92922A607497B14D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92922A607497B14D)
	 */
	getNumberOfDoors(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_NUMBER_OF_VEHICLE_NUMBER_PLATES
	 *
	 * Hash: 0x4C4D6B2644F458CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C4D6B2644F458CB)
	 */
	getNumberOfNumberPlates(): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_NUMBER_OF_PASSENGERS
	 *
	 * Hash: 0x24CB2137731FFE89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24CB2137731FFE89)
	 */
	getNumberOfPassengers(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_NUMBER_PLATE_TEXT
	 *
	 * Hash: 0x7CE1CCB9B293020E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CE1CCB9B293020E)
	 */
	getNumberPlateText(vehicle: Handle): string;

	/**
	 * Native: VEHICLE::GET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
	 *
	 * Hash: 0xF11BC2DD9A3E7195 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF11BC2DD9A3E7195)
	 */
	getNumberPlateTextIndex(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_NUM_MOD_COLORS
	 *
	 * Hash: 0xA551BE18C11A476D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA551BE18C11A476D)
	 */
	getNumModColors(paintType: integer, p1: boolean): integer;

	/**
	 * Native: VEHICLE::GET_NUM_MOD_KITS
	 *
	 * Hash: 0x33F2E3FE70EAAE1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33F2E3FE70EAAE1D)
	 */
	getNumModKits(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_NUM_VEHICLE_MODS
	 *
	 * Hash: 0xE38E9162A2500646 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE38E9162A2500646)
	 */
	getNumMods(vehicle: Handle, modType: integer): integer;

	/**
	 * Native: VEHICLE::GET_NUM_VEHICLE_WINDOW_TINTS
	 *
	 * Hash: 0x9D1224004B3A6707 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D1224004B3A6707)
	 */
	getNumWindowTints(): integer;

	/**
	 * Native: VEHICLE::GET_PED_IN_VEHICLE_SEAT
	 *
	 * Hash: 0xBB40DD2270B65366 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB40DD2270B65366)
	 */
	getPedInSeat(vehicle: Handle, seatIndex: integer, p2: boolean): Handle;

	/**
	 * Native: VEHICLE::GET_PED_USING_VEHICLE_DOOR
	 *
	 * Hash: 0x218297BF0CFD853B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x218297BF0CFD853B)
	 */
	getPedUsingDoor(vehicle: Handle, doord: integer): Handle;

	/**
	 * Native: VEHICLE::GET_VEHICLE_PETROL_TANK_HEALTH
	 *
	 * Hash: 0x7D5DABE888D2D074 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D5DABE888D2D074)
	 */
	getPetrolTankHealth(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_PLATE_TYPE
	 *
	 * Hash: 0x9CCC9525BF2408E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CCC9525BF2408E0)
	 */
	getPlateType(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_POSITION_IN_RECORDING
	 *
	 * Hash: 0x2DACD605FC681475 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DACD605FC681475)
	 */
	getPositionInRecording(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME
	 *
	 * Hash: 0xD242728AA6F0FBA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD242728AA6F0FBA2)
	 */
	getPositionOfRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_POSITION_OF_VEHICLE_RECORDING_ID_AT_TIME
	 *
	 * Hash: 0x92523B76657A517D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92523B76657A517D)
	 */
	getPositionOfRecordingIdAtTime(id: integer, time: number): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_BACK_BUMPER_IN_SPHERE
	 *
	 * Hash: 0xB50807EABE20A8DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB50807EABE20A8DC)
	 */
	getRandomBackBumperInSphere(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p6: integer
	): Handle;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_FRONT_BUMPER_IN_SPHERE
	 *
	 * Hash: 0xC5574E0AEB86BA68 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5574E0AEB86BA68)
	 */
	getRandomFrontBumperInSphere(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p6: integer
	): Handle;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_IN_SPHERE
	 *
	 * Hash: 0x386F6CE5BAF6091C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x386F6CE5BAF6091C)
	 */
	getRandomInSphere(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): Handle;

	/**
	 * Native: VEHICLE::GET_RANDOM_VEHICLE_MODEL_IN_MEMORY
	 *
	 * Hash: 0x055BF0AC0C34F4FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x055BF0AC0C34F4FD)
	 */
	getRandomModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;

	/**
	 * Native: VEHICLE::GET_VEHICLE_RECORDING_ID
	 *
	 * Hash: 0x21543C612379DB3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21543C612379DB3C)
	 */
	getRecordingId(recording: integer, script: string): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_ROOF_LIVERY
	 *
	 * Hash: 0x60190048C0764A26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60190048C0764A26)
	 */
	getRoofLivery(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_ROOF_LIVERY_COUNT
	 *
	 * Hash: 0x5ECB40269053C0D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5ECB40269053C0D4)
	 */
	getRoofLiveryCount(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_ROTATION_OF_VEHICLE_RECORDING_AT_TIME
	 *
	 * Hash: 0x2058206FBE79A8AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2058206FBE79A8AD)
	 */
	getRotationOfRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;

	/**
	 * Native: VEHICLE::GET_ROTATION_OF_VEHICLE_RECORDING_ID_AT_TIME
	 *
	 * Hash: 0xF0F2103EFAF8CBA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0F2103EFAF8CBA7)
	 */
	getRotationOfRecordingIdAtTime(id: integer, time: number): Vector3Mp;

	/**
	 * Native: VEHICLE::_GET_SUBMARINE_CRUSH_DEPTH_WARNING_STATE
	 *
	 * Hash: 0x093D6DDCA5B8FBAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x093D6DDCA5B8FBAE)
	 */
	getSubmarineCrushDepthWarningState(submarine: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_SUBMARINE_IS_BELOW_FIRST_CRUSH_DEPTH
	 *
	 * Hash: 0x3E71D0B300B7AA79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E71D0B300B7AA79)
	 */
	getSubmarineIsBelowFirstCrushDepth(submarine: Handle): boolean;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_SUSPENSION_BOUNDS
	 *
	 * Hash: 0xDF7E3EEB29642C38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF7E3EEB29642C38)
	 */
	getSuspensionBounds(vehicle: Handle): GetVehicleSuspensionBoundsResult;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_SUSPENSION_HEIGHT
	 *
	 * Hash: 0x53952FD2BAA19F17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53952FD2BAA19F17)
	 */
	getSuspensionHeight(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_TIME_POSITION_IN_RECORDING
	 *
	 * Hash: 0x5746F3A7AB7FE544 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5746F3A7AB7FE544)
	 */
	getTimePositionInRecording(vehicle: Handle): number;

	/**
	 * Native: VEHICLE::GET_TOTAL_DURATION_OF_VEHICLE_RECORDING
	 *
	 * Hash: 0x0E48D1C262390950 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E48D1C262390950)
	 */
	getTotalDurationOfRecording(recording: integer, script: string): number;

	/**
	 * Native: VEHICLE::GET_TOTAL_DURATION_OF_VEHICLE_RECORDING_ID
	 *
	 * Hash: 0x102D125411A7B6E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x102D125411A7B6E6)
	 */
	getTotalDurationOfRecordingId(id: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_TRAILER_VEHICLE
	 *
	 * Hash: 0x1CDD6BADC297830D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CDD6BADC297830D)
	 */
	getTrailerVehicle(vehicle: Handle): Handle;

	/**
	 * Native: VEHICLE::GET_TRAIN_CARRIAGE
	 *
	 * Hash: 0x08AAFD0814722BC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x08AAFD0814722BC3)
	 */
	getTrainCarriage(train: Handle, trailerNumber: integer): Handle;

	/**
	 * Native: VEHICLE::_GET_TYRE_HEALTH
	 *
	 * Hash: 0x55EAB010FAEE9380 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55EAB010FAEE9380)
	 */
	getTyreHealth(vehicle: Handle, wheelIndex: integer): number;

	/**
	 * Native: VEHICLE::GET_VEHICLE_TYRES_CAN_BURST
	 *
	 * Hash: 0x678B9BB8C3F58FEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x678B9BB8C3F58FEB)
	 */
	getTyresCanBurst(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::GET_VEHICLE_TYRE_SMOKE_COLOR
	 *
	 * Hash: 0xB635392A4938B3C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB635392A4938B3C3)
	 */
	getTyreSmokeColor(vehicle: Handle): GetVehicleTyreSmokeColorResult;

	/**
	 * Native: VEHICLE::_GET_TYRE_WEAR_MULTIPLIER
	 *
	 * Hash: 0x6E387895952F4F71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E387895952F4F71)
	 */
	getTyreWearMultiplier(vehicle: Handle, wheelIndex: integer): number;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_WEAPON_CAPACITY
	 *
	 * Hash: 0x8181CE2F25CB9BB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8181CE2F25CB9BB7)
	 */
	getWeaponCapacity(vehicle: Handle, weaponIndex: integer): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_WHEEL_TYPE
	 *
	 * Hash: 0xB3ED1BFB4BE636DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3ED1BFB4BE636DC)
	 */
	getWheelType(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::GET_VEHICLE_WINDOW_TINT
	 *
	 * Hash: 0x0EE21293DAD47C95 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EE21293DAD47C95)
	 */
	getWindowTint(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::_GET_VEHICLE_XENON_LIGHTS_COLOR
	 *
	 * Hash: 0x3DFF319A831E0CDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DFF319A831E0CDB)
	 */
	getXenonLightsColor(vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::HAS_VEHICLE_ASSET_LOADED
	 *
	 * Hash: 0x1BBE0523B8DB9A21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BBE0523B8DB9A21)
	 */
	hasAssetLoaded(vehicleAsset: integer): boolean;

	/**
	 * Native: VEHICLE::_HAS_FILLED_VEHICLE_POPULATION
	 *
	 * Hash: 0x91D6DD290888CBAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91D6DD290888CBAB)
	 */
	hasFilledPopulation(): boolean;

	/**
	 * Native: VEHICLE::HAS_VEHICLE_PHONE_EXPLOSIVE_DEVICE
	 *
	 * Hash: 0x6ADAABD3068C5235 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6ADAABD3068C5235)
	 */
	hasPhoneExplosiveDevice(): boolean;

	/**
	 * Native: VEHICLE::HAS_PRELOAD_MODS_FINISHED
	 *
	 * Hash: 0x06F43E5175EB6D96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06F43E5175EB6D96)
	 */
	hasPreloadModsFinished(p0: integer): boolean;

	/**
	 * Native: VEHICLE::HAS_VEHICLE_RECORDING_BEEN_LOADED
	 *
	 * Hash: 0x300D614A4C785FC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x300D614A4C785FC4)
	 */
	hasRecordingBeenLoaded(recording: integer, script: string): boolean;

	/**
	 * Native: VEHICLE::HAVE_VEHICLE_MODS_STREAMED_IN
	 *
	 * Hash: 0x9A83F5F9963775EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A83F5F9963775EF)
	 */
	haveModsStreamedIn(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_HIDE_VEHICLE_TOMBSTONE
	 *
	 * Hash: 0xAE71FB656C600587 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE71FB656C600587)
	 */
	hideTombstone(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::INSTANTLY_FILL_VEHICLE_POPULATION
	 *
	 * Hash: 0x48ADC8A773564670 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48ADC8A773564670)
	 */
	instantlyFillPopulation(): void;

	/**
	 * Native: VEHICLE::IS_VEHICLE_A_CONVERTIBLE
	 *
	 * Hash: 0x52F357A30698BCCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52F357A30698BCCE)
	 */
	isAConvertible(vehicle: Handle, p1: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_ALARM_ACTIVATED
	 *
	 * Hash: 0x4319E335B71FFF34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4319E335B71FFF34)
	 */
	isAlarmActivated(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_ANY_ENTITY_ATTACHED_TO_HANDLER_FRAME
	 *
	 * Hash: 0x62CA17B74C435651 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62CA17B74C435651)
	 */
	isAnyEntityAttachedToHandlerFrame(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_ANY_VEHICLE_NEAR_POINT
	 *
	 * Hash: 0x61E1DD6125A3EEE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61E1DD6125A3EEE6)
	 */
	isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: VEHICLE::IS_ANY_PED_RAPPELLING_FROM_HELI
	 *
	 * Hash: 0x291E373D483E7EE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x291E373D483E7EE7)
	 */
	isAnyPedRappellingFromHeli(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_ATTACHED_TO_CARGOBOB
	 *
	 * Hash: 0xD40148F22E81A1D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD40148F22E81A1D9)
	 */
	isAttachedToCargobob(cargobob: Handle, vehicleAttached: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_ATTACHED_TO_TOW_TRUCK
	 *
	 * Hash: 0x146DF9EC4C4B9FD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x146DF9EC4C4B9FD4)
	 */
	isAttachedToTowTruck(towTruck: Handle, vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_ATTACHED_TO_TRAILER
	 *
	 * Hash: 0xE7CF3C4F9F489F0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7CF3C4F9F489F0C)
	 */
	isAttachedToTrailer(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_BEING_HALTED
	 *
	 * Hash: 0xC69BB1D832A710EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC69BB1D832A710EF)
	 */
	isBeingHalted(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_BIG_VEHICLE
	 *
	 * Hash: 0x9F243D3919F442FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F243D3919F442FE)
	 */
	isBig(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_BOAT_ANCHORED_AND_FROZEN
	 *
	 * Hash: 0xB0AD1238A709B1A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0AD1238A709B1A2)
	 */
	isBoatAnchoredAndFrozen(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_BUMPER_BOUNCING
	 *
	 * Hash: 0x27B926779DEB502D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27B926779DEB502D)
	 */
	isBumperBouncing(vehicle: Handle, frontBumper: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_BUMPER_BROKEN_OFF
	 *
	 * Hash: 0x468056A6BB6F3846 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x468056A6BB6F3846)
	 */
	isBumperBrokenOff(vehicle: Handle, front: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_COP_VEHICLE_IN_AREA_3D
	 *
	 * Hash: 0x7EEF65D5F153E26A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EEF65D5F153E26A)
	 */
	isCopInArea3D(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_DAMAGED
	 *
	 * Hash: 0xBCDC5017D3CE1E9E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCDC5017D3CE1E9E)
	 */
	isDamaged(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_DOOR_DAMAGED
	 *
	 * Hash: 0xB8E181E559464527 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8E181E559464527)
	 */
	isDoorDamaged(veh: Handle, doorID: integer): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_DOOR_FULLY_OPEN
	 *
	 * Hash: 0x3E933CFF7B111C22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E933CFF7B111C22)
	 */
	isDoorFullyOpen(vehicle: Handle, doorId: integer): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_DRIVEABLE
	 *
	 * Hash: 0x4C241E39B23DF959 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C241E39B23DF959)
	 */
	isDriveable(vehicle: Handle, isOnFireCheck: boolean): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_ENGINE_ON_FIRE
	 *
	 * Hash: 0xEC69ADF931AAE0C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC69ADF931AAE0C3)
	 */
	isEngineOnFire(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_ENTITY_ATTACHED_TO_HANDLER_FRAME
	 *
	 * Hash: 0x57715966069157AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57715966069157AD)
	 */
	isEntityAttachedToHandlerFrame(vehicle: Handle, entity: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_EXTRA_TURNED_ON
	 *
	 * Hash: 0xD2E6822DBFD6C8BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2E6822DBFD6C8BD)
	 */
	isExtraTurnedOn(vehicle: Handle, extraId: integer): boolean;

	/**
	 * Native: VEHICLE::_IS_HANDLER_FRAME_ABOVE_CONTAINER
	 *
	 * Hash: 0x89D630CF5EA96D23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89D630CF5EA96D23)
	 */
	isHandlerFrameAboveContainer(vehicle: Handle, entity: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_HELI_LANDING_AREA_BLOCKED
	 *
	 * Hash: 0x634148744F385576 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x634148744F385576)
	 */
	isHeliLandingAreaBlocked(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_HELI_PART_BROKEN
	 *
	 * Hash: 0xBC74B4BE25EB6C8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC74B4BE25EB6C8A)
	 */
	isHeliPartBroken(vehicle: Handle, p1: boolean, p2: boolean, p3: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_HIGH_DETAIL
	 *
	 * Hash: 0x1F25887F3C104278 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F25887F3C104278)
	 */
	isHighDetail(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_IN_BURNOUT
	 *
	 * Hash: 0x1297A88E081430EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1297A88E081430EB)
	 */
	isInBurnout(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_IN_GARAGE_AREA
	 *
	 * Hash: 0xCEE4490CD57BB3C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEE4490CD57BB3C2)
	 */
	isInGarageArea(garageName: string, vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_MISSION_TRAIN
	 *
	 * Hash: 0xAD464F2E18836BFC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD464F2E18836BFC)
	 */
	isMissionTrain(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_MODEL
	 *
	 * Hash: 0x423E8DE37D934D89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x423E8DE37D934D89)
	 */
	isModel(vehicle: Handle, model: integer): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_NEON_LIGHT_ENABLED
	 *
	 * Hash: 0x8C4B92553E4766A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C4B92553E4766A5)
	 */
	isNeonLightEnabled(vehicle: Handle, index: integer): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_ON_ALL_WHEELS
	 *
	 * Hash: 0xB104CD1BABF302E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB104CD1BABF302E2)
	 */
	isOnAllWheels(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_PED_EXCLUSIVE_DRIVER_OF_VEHICLE
	 *
	 * Hash: 0xB09D25E77C33EB3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB09D25E77C33EB3F)
	 */
	isPedExclusiveDriverOf(ped: Handle, vehicle: Handle): integer;

	/**
	 * Native: VEHICLE::IS_PLANE_LANDING_GEAR_INTACT
	 *
	 * Hash: 0x4198AB0022B15F87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4198AB0022B15F87)
	 */
	isPlaneLandingGearIntact(plane: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_PLAYBACK_GOING_ON_FOR_VEHICLE
	 *
	 * Hash: 0x1C8A4C2C19E68EEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C8A4C2C19E68EEC)
	 */
	isPlaybackGoingOnFor(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_PLAYBACK_USING_AI_GOING_ON_FOR_VEHICLE
	 *
	 * Hash: 0xAEA8FD591FAD4106 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEA8FD591FAD4106)
	 */
	isPlaybackUsingAiGoingOnFor(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_ROCKET_BOOST_ACTIVE
	 *
	 * Hash: 0x3D34E80EED4AE3BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D34E80EED4AE3BE)
	 */
	isRocketBoostActive(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_SEARCHLIGHT_ON
	 *
	 * Hash: 0xC0F97FCE55094987 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0F97FCE55094987)
	 */
	isSearchlightOn(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_SEAT_ACCESSIBLE
	 *
	 * Hash: 0x639431E895B9AA57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x639431E895B9AA57)
	 */
	isSeatAccessible(ped: Handle, vehicle: Handle, seatIndex: integer, side: boolean, onEnter: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_SEAT_FREE
	 *
	 * Hash: 0x22AC59A870E6A669 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22AC59A870E6A669)
	 */
	isSeatFree(vehicle: Handle, seatIndex: integer, isTaskRunning: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_SEAT_WARP_ONLY
	 *
	 * Hash: 0xF7F203E31F96F6A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7F203E31F96F6A1)
	 */
	isSeatWarpOnly(vehicle: Handle, seatIndex: integer): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_SIREN_AUDIO_ON
	 *
	 * Hash: 0xB5CC40FBCB586380 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5CC40FBCB586380)
	 */
	isSirenAudioOn(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_SIREN_ON
	 *
	 * Hash: 0x4C9BF537BE2634B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C9BF537BE2634B2)
	 */
	isSirenOn(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_SLIPSTREAM_LEADER
	 *
	 * Hash: 0x48C633E94A8142A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48C633E94A8142A7)
	 */
	isSlipstreamLeader(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_SPRAYABLE
	 *
	 * Hash: 0x8D474C8FAEFF6CDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D474C8FAEFF6CDE)
	 */
	isSprayable(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_STOLEN
	 *
	 * Hash: 0x4AF9BD80EEBEB453 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AF9BD80EEBEB453)
	 */
	isStolen(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_STOPPED
	 *
	 * Hash: 0x5721B434AD84D57A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5721B434AD84D57A)
	 */
	isStopped(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_STOPPED_AT_TRAFFIC_LIGHTS
	 *
	 * Hash: 0x2959F696AE390A99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2959F696AE390A99)
	 */
	isStoppedAtTrafficLights(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_STUCK_ON_ROOF
	 *
	 * Hash: 0xB497F06B288DCFDF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB497F06B288DCFDF)
	 */
	isStuckOnRoof(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_STUCK_TIMER_UP
	 *
	 * Hash: 0x679BE1DAF71DA874 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x679BE1DAF71DA874)
	 */
	isStuckTimerUp(vehicle: Handle, p1: integer, p2: integer): boolean;

	/**
	 * Native: VEHICLE::IS_TAXI_LIGHT_ON
	 *
	 * Hash: 0x7504C0F113AB50FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7504C0F113AB50FC)
	 */
	isTaxiLightOn(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_BICYCLE
	 *
	 * Hash: 0xBF94DD42F63BDED2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF94DD42F63BDED2)
	 */
	isThisModelABicycle(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_BIKE
	 *
	 * Hash: 0xB50C0B0CEDC6CE84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB50C0B0CEDC6CE84)
	 */
	isThisModelABike(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_BOAT
	 *
	 * Hash: 0x45A9187928F4B9E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45A9187928F4B9E3)
	 */
	isThisModelABoat(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_CAR
	 *
	 * Hash: 0x7F6DB52EEFC96DF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F6DB52EEFC96DF8)
	 */
	isThisModelACar(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_HELI
	 *
	 * Hash: 0xDCE4334788AF94EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCE4334788AF94EA)
	 */
	isThisModelAHeli(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_JETSKI
	 *
	 * Hash: 0x9537097412CF75FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9537097412CF75FE)
	 */
	isThisModelAJetski(model: integer): boolean;

	/**
	 * Native: VEHICLE::_IS_THIS_MODEL_AN_AMPHIBIOUS_CAR
	 *
	 * Hash: 0x633F6F44A537EBB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x633F6F44A537EBB6)
	 */
	isThisModelAnAmphibiousCar(model: integer): boolean;

	/**
	 * Native: VEHICLE::_IS_THIS_MODEL_AN_AMPHIBIOUS_QUADBIKE
	 *
	 * Hash: 0xA1A9FC1C76A6730D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1A9FC1C76A6730D)
	 */
	isThisModelAnAmphibiousQuadbike(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_PLANE
	 *
	 * Hash: 0xA0948AB42D7BA0DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0948AB42D7BA0DE)
	 */
	isThisModelAPlane(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_QUADBIKE
	 *
	 * Hash: 0x39DAC362EE65FA28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39DAC362EE65FA28)
	 */
	isThisModelAQuadbike(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_THIS_MODEL_A_TRAIN
	 *
	 * Hash: 0xAB935175B22E822B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB935175B22E822B)
	 */
	isThisModelATrain(model: integer): boolean;

	/**
	 * Native: VEHICLE::IS_TOGGLE_MOD_ON
	 *
	 * Hash: 0x84B233A8C8FC8AE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84B233A8C8FC8AE7)
	 */
	isToggleModOn(vehicle: Handle, modType: integer): boolean;

	/**
	 * Native: VEHICLE::IS_TURRET_SEAT
	 *
	 * Hash: 0xE33FFA906CE74880 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE33FFA906CE74880)
	 */
	isTurretSeat(vehicle: Handle, seatIndex: integer): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_TYRE_BURST
	 *
	 * Hash: 0xBA291848A0815CA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA291848A0815CA9)
	 */
	isTyreBurst(vehicle: Handle, wheelID: integer, completely: boolean): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_VISIBLE
	 *
	 * Hash: 0xAA0A52D24FB98293 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA0A52D24FB98293)
	 */
	isVisible(vehicle: Handle): boolean;

	/**
	 * Native: VEHICLE::_IS_VEHICLE_WEAPON_DISABLED
	 *
	 * Hash: 0x563B65A643ED072E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x563B65A643ED072E)
	 */
	isWeaponDisabled(weaponHash: integer, vehicle: Handle, owner: Handle): boolean;

	/**
	 * Native: VEHICLE::IS_VEHICLE_WINDOW_INTACT
	 *
	 * Hash: 0x46E571A0E20D01F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46E571A0E20D01F1)
	 */
	isWindowIntact(vehicle: Handle, windowIndex: integer): boolean;

	/**
	 * Native: VEHICLE::LOWER_CONVERTIBLE_ROOF
	 *
	 * Hash: 0xDED51F703D0FA83D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDED51F703D0FA83D)
	 */
	lowerConvertibleRoof(vehicle: Handle, instantlyLower: boolean): void;

	/**
	 * Native: VEHICLE::_LOWER_RETRACTABLE_WHEELS
	 *
	 * Hash: 0x5335BE58C083E74E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5335BE58C083E74E)
	 */
	lowerRetractableWheels(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::MODIFY_VEHICLE_TOP_SPEED
	 *
	 * Hash: 0x93A3996368C94158 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93A3996368C94158)
	 */
	modifyTopSpeed(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::_NETWORK_USE_HIGH_PRECISION_VEHICLE_BLENDING
	 *
	 * Hash: 0xEC0C1D4922AF9754 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC0C1D4922AF9754)
	 */
	networkUseHighPrecisionBlending(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::OPEN_BOMB_BAY_DOORS
	 *
	 * Hash: 0x87E7F24270732CB1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87E7F24270732CB1)
	 */
	openBombBayDoors(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_OVERRIDE_OVERHEAT_HEALTH
	 *
	 * Hash: 0x5EE5632F47AE9695 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EE5632F47AE9695)
	 */
	overrideOverheatHealth(vehicle: Handle, health: number): void;

	/**
	 * Native: VEHICLE::PAUSE_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x632A689BF42301B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x632A689BF42301B1)
	 */
	pausePlaybackRecorded(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::POP_OUT_VEHICLE_WINDSCREEN
	 *
	 * Hash: 0x6D645D59FB5F5AD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D645D59FB5F5AD3)
	 */
	popOutWindscreen(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::PRELOAD_VEHICLE_MOD
	 *
	 * Hash: 0x758F49C24925568A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x758F49C24925568A)
	 */
	preloadMod(p0: integer, modType: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::RAISE_CONVERTIBLE_ROOF
	 *
	 * Hash: 0x8F5FB35D7E88FC70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F5FB35D7E88FC70)
	 */
	raiseConvertibleRoof(vehicle: Handle, instantlyRaise: boolean): void;

	/**
	 * Native: VEHICLE::_RAISE_RETRACTABLE_WHEELS
	 *
	 * Hash: 0xF660602546D27BA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF660602546D27BA8)
	 */
	raiseRetractableWheels(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::RELEASE_PRELOAD_MODS
	 *
	 * Hash: 0x445D79F995508307 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x445D79F995508307)
	 */
	releasePreloadMods(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_ASSET
	 *
	 * Hash: 0xACE699C71AB9DEB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACE699C71AB9DEB5)
	 */
	removeAsset(vehicleAsset: integer): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_COMBAT_AVOIDANCE_AREA
	 *
	 * Hash: 0xE30524E1871F481D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE30524E1871F481D)
	 */
	removeCombatAvoidanceArea(p0: integer): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_HIGH_DETAIL_MODEL
	 *
	 * Hash: 0x00689CDE5F7C6787 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00689CDE5F7C6787)
	 */
	removeHighDetailModel(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_MOD
	 *
	 * Hash: 0x92D619E420858204 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92D619E420858204)
	 */
	removeMod(vehicle: Handle, modType: integer): void;

	/**
	 * Native: VEHICLE::REMOVE_PICK_UP_ROPE_FOR_CARGOBOB
	 *
	 * Hash: 0x9768CF648F54C804 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9768CF648F54C804)
	 */
	removePickUpRopeForCargobob(cargobob: Handle): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_RECORDING
	 *
	 * Hash: 0xF1160ACCF98A3FC8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1160ACCF98A3FC8)
	 */
	removeRecording(recording: integer, script: string): void;

	/**
	 * Native: VEHICLE::REMOVE_ROAD_NODE_SPEED_ZONE
	 *
	 * Hash: 0x1033371FC8E842A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1033371FC8E842A7)
	 */
	removeRoadNodeSpeedZone(speedzone: integer): boolean;

	/**
	 * Native: VEHICLE::_REMOVE_VEHICLE_SHADOW_EFFECT
	 *
	 * Hash: 0xF87D9F2301F7D206 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF87D9F2301F7D206)
	 */
	removeShadowEffect(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_STUCK_CHECK
	 *
	 * Hash: 0x8386BFB614D06749 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8386BFB614D06749)
	 */
	removeStuckCheck(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_UPSIDEDOWN_CHECK
	 *
	 * Hash: 0xC53EB42A499A7E90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC53EB42A499A7E90)
	 */
	removeUpsidedownCheck(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REMOVE_VEHICLE_WINDOW
	 *
	 * Hash: 0xA711568EEDB43069 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA711568EEDB43069)
	 */
	removeWindow(vehicle: Handle, windowIndex: integer): void;

	/**
	 * Native: VEHICLE::REQUEST_VEHICLE_ASSET
	 *
	 * Hash: 0x81A15811460FAB3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81A15811460FAB3A)
	 */
	requestAsset(vehicleHash: integer, vehicleAsset: integer): void;

	/**
	 * Native: VEHICLE::_REQUEST_VEHICLE_DASHBOARD_SCALEFORM_MOVIE
	 *
	 * Hash: 0xDBA3C090E3D74690 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBA3C090E3D74690)
	 */
	requestDashboardScaleformMovie(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REQUEST_VEHICLE_HIGH_DETAIL_MODEL
	 *
	 * Hash: 0xA6E9FDCB2C76785E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6E9FDCB2C76785E)
	 */
	requestHighDetailModel(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::REQUEST_VEHICLE_RECORDING
	 *
	 * Hash: 0xAF514CABE74CBF15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF514CABE74CBF15)
	 */
	requestRecording(recording: integer, script: string): void;

	/**
	 * Native: VEHICLE::RESET_VEHICLE_STUCK_TIMER
	 *
	 * Hash: 0xD7591B0065AFAA7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7591B0065AFAA7A)
	 */
	resetStuckTimer(vehicle: Handle, nullAttributes: integer): void;

	/**
	 * Native: VEHICLE::RESET_VEHICLE_WHEELS
	 *
	 * Hash: 0x21D2E5662C1F6FED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21D2E5662C1F6FED)
	 */
	resetWheels(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::ROLL_DOWN_WINDOW
	 *
	 * Hash: 0x7AD9E6CE657D69E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AD9E6CE657D69E3)
	 */
	rollDownWindow(vehicle: Handle, windowIndex: integer): void;

	/**
	 * Native: VEHICLE::ROLL_DOWN_WINDOWS
	 *
	 * Hash: 0x85796B0549DDE156 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85796B0549DDE156)
	 */
	rollDownWindows(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::ROLL_UP_WINDOW
	 *
	 * Hash: 0x602E548F46E24D59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x602E548F46E24D59)
	 */
	rollUpWindow(vehicle: Handle, windowIndex: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ACTIVE_DURING_PLAYBACK
	 *
	 * Hash: 0xDFFCEF48E511DB48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFFCEF48E511DB48)
	 */
	setActiveDuringPlayback(p0: integer, p1: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ACTIVE_FOR_PED_NAVIGATION
	 *
	 * Hash: 0x21115BCD6E44656A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21115BCD6E44656A)
	 */
	setActiveForPedNavigation(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ALARM
	 *
	 * Hash: 0xCDE5E70C1DDB954C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCDE5E70C1DDB954C)
	 */
	setAlarm(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_ALL_VEHICLE_GENERATORS_ACTIVE
	 *
	 * Hash: 0x34AD89078831A4BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34AD89078831A4BC)
	 */
	setAllGeneratorsActive(): void;

	/**
	 * Native: VEHICLE::SET_ALL_VEHICLE_GENERATORS_ACTIVE_IN_AREA
	 *
	 * Hash: 0xC12321827687FE4D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC12321827687FE4D)
	 */
	setAllGeneratorsActiveInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: VEHICLE::SET_ALL_LOW_PRIORITY_VEHICLE_GENERATORS_ACTIVE
	 *
	 * Hash: 0x608207E7A8FB787C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x608207E7A8FB787C)
	 */
	setAllLowPriorityGeneratorsActive(active: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ALLOW_NO_PASSENGERS_LOCKON
	 *
	 * Hash: 0x5D14D4154BFE7B2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D14D4154BFE7B2C)
	 */
	setAllowNoPassengersLockon(veh: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x90B6DA738A9A25DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90B6DA738A9A25DA)
	 */
	setAmbientRangeMultiplierThisFrame(value: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_AUTOMATICALLY_ATTACHES
	 *
	 * Hash: 0x8BA6F76BC53A1493 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BA6F76BC53A1493)
	 */
	setAutomaticallyAttaches(vehicle: Handle, p1: boolean, p2: integer): integer;

	/**
	 * Native: VEHICLE::SET_BIKE_ON_STAND
	 *
	 * Hash: 0x9CFA4896C3A53CBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CFA4896C3A53CBB)
	 */
	setBikeOnStand(vehicle: Handle, x: number, y: number): void;

	/**
	 * Native: VEHICLE::SET_BOAT_ANCHOR
	 *
	 * Hash: 0x75DBEC174AEEAD10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75DBEC174AEEAD10)
	 */
	setBoatAnchor(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_BOAT_BOOM_POSITION_RATIO
	 *
	 * Hash: 0xF488C566413B4232 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF488C566413B4232)
	 */
	setBoatBoomPositionRatio(vehicle: Handle, ratio: number): void;

	/**
	 * Native: VEHICLE::SET_BOAT_DISABLE_AVOIDANCE
	 *
	 * Hash: 0x0A6A279F3AA4FD70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A6A279F3AA4FD70)
	 */
	setBoatDisableAvoidance(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_SET_BOAT_FROZEN_WHEN_ANCHORED
	 *
	 * Hash: 0xE3EBAAE484798530 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3EBAAE484798530)
	 */
	setBoatFrozenWhenAnchored(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_BOAT_IS_SINKING
	 *
	 * Hash: 0xBD32E46AA95C1DD2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD32E46AA95C1DD2)
	 */
	setBoatIsSinking(p0: integer): void;

	/**
	 * Native: VEHICLE::_SET_BOAT_MOVEMENT_RESISTANCE
	 *
	 * Hash: 0xE842A9398079BD82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE842A9398079BD82)
	 */
	setBoatMovementResistance(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::SET_BOAT_SINKS_WHEN_WRECKED
	 *
	 * Hash: 0x8F719973E1445BA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F719973E1445BA2)
	 */
	setBoatSinksWhenWrecked(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_BODY_HEALTH
	 *
	 * Hash: 0xB77D05AC8C78AADB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB77D05AC8C78AADB)
	 */
	setBodyHealth(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_BOMB_COUNT
	 *
	 * Hash: 0xF4B2ED59DEB5D774 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4B2ED59DEB5D774)
	 */
	setBombCount(vehicle: Handle, bombCount: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_BRAKE
	 *
	 * Hash: 0xE4E2FD323574965C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4E2FD323574965C)
	 */
	setBrake(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_BRAKE_LIGHTS
	 *
	 * Hash: 0x92B35082E0B42F66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92B35082E0B42F66)
	 */
	setBrakeLights(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_BULLDOZER_ARM_POSITION
	 *
	 * Hash: 0xF8EBCCC96ADB9FB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8EBCCC96ADB9FB7)
	 */
	setBulldozerArmPosition(vehicle: Handle, position: number, p2: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_BURNOUT
	 *
	 * Hash: 0xFB8794444A7D60FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB8794444A7D60FB)
	 */
	setBurnout(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_CAMBERED_WHEELS_DISABLED
	 *
	 * Hash: 0x1201E8A3290A3B98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1201E8A3290A3B98)
	 */
	setCamberedWheelsDisabled(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_CAN_BE_LOCKED_ON
	 *
	 * Hash: 0x1DDA078D12879EEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DDA078D12879EEE)
	 */
	setCanBeLockedOn(vehicle: Handle, canBeLockedOn: boolean, unk: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_BE_TARGETTED
	 *
	 * Hash: 0x3750146A28097A82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3750146A28097A82)
	 */
	setCanBeTargetted(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_BE_USED_BY_FLEEING_PEDS
	 *
	 * Hash: 0x300504B23BD3B711 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x300504B23BD3B711)
	 */
	setCanBeUsedByFleeingPeds(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_BE_VISIBLY_DAMAGED
	 *
	 * Hash: 0x4C7028F78FFD3681 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C7028F78FFD3681)
	 */
	setCanBeVisiblyDamaged(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_BREAK
	 *
	 * Hash: 0x59BF8C3D52C92F66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59BF8C3D52C92F66)
	 */
	setCanBreak(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_DEFORM_WHEELS
	 *
	 * Hash: 0x0CDDA42F9E360CA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CDDA42F9E360CA6)
	 */
	setCanDeformWheels(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_CAN_ENGINE_OPERATE_ON_FIRE
	 *
	 * Hash: 0x206BC5DC9D1AC70A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x206BC5DC9D1AC70A)
	 */
	setCanEngineOperateOnFire(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_LEAK_OIL
	 *
	 * Hash: 0x51BB2D88D31A914B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51BB2D88D31A914B)
	 */
	setCanLeakOil(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_LEAK_PETROL
	 *
	 * Hash: 0x192547247864DFDD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x192547247864DFDD)
	 */
	setCanLeakPetrol(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_CAN_RESPRAY_VEHICLE
	 *
	 * Hash: 0x52BBA29D5EC69356 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52BBA29D5EC69356)
	 */
	setCanRespray(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CAN_SAVE_IN_GARAGE
	 *
	 * Hash: 0x428BACCDF5E26EAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x428BACCDF5E26EAD)
	 */
	setCanSaveInGarage(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_CAR_BOOT_OPEN
	 *
	 * Hash: 0xFC40CBF7B90CA77C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC40CBF7B90CA77C)
	 */
	setCarBootOpen(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_SET_CARGOBOB_HOOK_CAN_ATTACH
	 *
	 * Hash: 0x94A68DA412C4007D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94A68DA412C4007D)
	 */
	setCargobobHookCanAttach(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_CARGOBOB_HOOK_CAN_DETACH
	 *
	 * Hash: 0x571FEB383F629926 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x571FEB383F629926)
	 */
	setCargobobHookCanDetach(cargobob: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_ACTIVE
	 *
	 * Hash: 0x9A665550F8DA349B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A665550F8DA349B)
	 */
	setCargobobPickupMagnetActive(cargobob: Handle, isActive: boolean): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_EFFECT_RADIUS
	 *
	 * Hash: 0xA17BAD153B51547E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA17BAD153B51547E)
	 */
	setCargobobPickupMagnetEffectRadius(cargobob: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_FALLOFF
	 *
	 * Hash: 0x685D5561680D088B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x685D5561680D088B)
	 */
	setCargobobPickupMagnetFalloff(vehicle: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_PULL_ROPE_LENGTH
	 *
	 * Hash: 0x6D8EAC07506291FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D8EAC07506291FB)
	 */
	setCargobobPickupMagnetPullRopeLength(cargobob: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_PULL_STRENGTH
	 *
	 * Hash: 0xED8286F71A819BAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED8286F71A819BAA)
	 */
	setCargobobPickupMagnetPullStrength(cargobob: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_REDUCED_FALLOFF
	 *
	 * Hash: 0x66979ACF5102FD2F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66979ACF5102FD2F)
	 */
	setCargobobPickupMagnetReducedFalloff(cargobob: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_REDUCED_STRENGTH
	 *
	 * Hash: 0xE301BD63E9E13CF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE301BD63E9E13CF0)
	 */
	setCargobobPickupMagnetReducedStrength(vehicle: Handle, cargobob: Handle): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_MAGNET_STRENGTH
	 *
	 * Hash: 0xBCBFCD9D1DAC19E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCBFCD9D1DAC19E2)
	 */
	setCargobobPickupMagnetStrength(cargobob: Handle, strength: number): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_ROPE_DAMPING_MULTIPLIER
	 *
	 * Hash: 0xCF1182F682F65307 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF1182F682F65307)
	 */
	setCargobobPickupRopeDampingMultiplier(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::SET_CARGOBOB_PICKUP_ROPE_TYPE
	 *
	 * Hash: 0x0D5F65A8F4EBDAB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D5F65A8F4EBDAB5)
	 */
	setCargobobPickupRopeType(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER
	 *
	 * Hash: 0x84FD40F56075E816 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84FD40F56075E816)
	 */
	setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CEILING_HEIGHT
	 *
	 * Hash: 0xA46413066687A328 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA46413066687A328)
	 */
	setCeilingHeight(vehicle: Handle, height: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CHEAT_POWER_INCREASE
	 *
	 * Hash: 0xB59E4BD37AE292DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB59E4BD37AE292DB)
	 */
	setCheatPowerIncrease(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_COLOUR_COMBINATION
	 *
	 * Hash: 0x33E8CD3322E2FE31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33E8CD3322E2FE31)
	 */
	setColourCombination(vehicle: Handle, colorCombination: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_COLOURS
	 *
	 * Hash: 0x4F1D4BE3A7F24601 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F1D4BE3A7F24601)
	 */
	setColours(vehicle: Handle, colorPrimary: integer, colorSecondary: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_CONTROLS_INVERTED
	 *
	 * Hash: 0x5B91B229243351A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B91B229243351A8)
	 */
	setControlsInverted(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_CONVERTIBLE_ROOF
	 *
	 * Hash: 0xF39C4F538B5124C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF39C4F538B5124C2)
	 */
	setConvertibleRoof(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::SET_CONVERTIBLE_ROOF_LATCH_STATE
	 *
	 * Hash: 0x1A78AD3D8240536F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A78AD3D8240536F)
	 */
	setConvertibleRoofLatchState(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_COUNTERMEASURE_COUNT
	 *
	 * Hash: 0x9BDA23BF666F0855 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BDA23BF666F0855)
	 */
	setCountermeasureCount(vehicle: Handle, counterMeasureCount: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CUSTOM_PRIMARY_COLOUR
	 *
	 * Hash: 0x7141766F91D15BEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7141766F91D15BEA)
	 */
	setCustomPrimaryColour(vehicle: Handle, r: integer, g: integer, b: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_CUSTOM_SECONDARY_COLOUR
	 *
	 * Hash: 0x36CED73BFED89754 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36CED73BFED89754)
	 */
	setCustomSecondaryColour(vehicle: Handle, r: integer, g: integer, b: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DAMAGE
	 *
	 * Hash: 0xA1DD317EA8FD4F29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1DD317EA8FD4F29)
	 */
	setDamage(
		vehicle: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		damage: number,
		radius: number,
		focusOnModel: boolean
	): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_DAMAGE_MODIFIER
	 *
	 * Hash: 0x4E20D2A627011E8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E20D2A627011E8E)
	 */
	setDamageModifier(vehicle: Handle, p1: number): integer;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_DASHBOARD_COLOR
	 *
	 * Hash: 0x6089CDF6A57F326C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6089CDF6A57F326C)
	 */
	setDashboardColor(vehicle: Handle, color: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DEFORMATION_FIXED
	 *
	 * Hash: 0x953DA1E1B12C0491 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x953DA1E1B12C0491)
	 */
	setDeformationFixed(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x245A6883D966D537 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x245A6883D966D537)
	 */
	setDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: VEHICLE::_SET_DEPLOY_HELI_STUB_WINGS
	 *
	 * Hash: 0xB251E0B33E58B424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB251E0B33E58B424)
	 */
	setDeployHeliStubWings(vehicle: Handle, deploy: boolean, p2: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DIRT_LEVEL
	 *
	 * Hash: 0x79D3B596FE44EE8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79D3B596FE44EE8B)
	 */
	setDirtLevel(vehicle: Handle, dirtLevel: number): void;

	/**
	 * Native: VEHICLE::SET_DISABLE_VEHICLE_ENGINE_FIRES
	 *
	 * Hash: 0x91A0BD635321F145 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91A0BD635321F145)
	 */
	setDisableEngineFires(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_DISABLE_VEHICLE_FLIGHT_NOZZLE_POSITION
	 *
	 * Hash: 0xCE2B43770B655F8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE2B43770B655F8F)
	 */
	setDisableFlightNozzlePosition(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_DISABLE_VEHICLE_PETROL_TANK_DAMAGE
	 *
	 * Hash: 0x37C8252A7C92D017 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37C8252A7C92D017)
	 */
	setDisablePetrolTankDamage(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_DISABLE_VEHICLE_PETROL_TANK_FIRES
	 *
	 * Hash: 0x465BF26AB9684352 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x465BF26AB9684352)
	 */
	setDisablePetrolTankFires(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_DISABLE_PRETEND_OCCUPANTS
	 *
	 * Hash: 0x25367DE49D64CF16 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25367DE49D64CF16)
	 */
	setDisablePretendOccupants(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_DISABLE_RANDOM_TRAINS_THIS_FRAME
	 *
	 * Hash: 0xD4B8E3D1917BC86B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4B8E3D1917BC86B)
	 */
	setDisableRandomTrainsThisFrame(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_DISABLE_SUPERDUMMY_MODE
	 *
	 * Hash: 0xB088E9A47AE6EDD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB088E9A47AE6EDD5)
	 */
	setDisableSuperdummyMode(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DISABLE_TOWING
	 *
	 * Hash: 0x2B6747FAA9DB9D6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B6747FAA9DB9D6B)
	 */
	setDisableTowing(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_DISABLE_TURRET_MOVEMENT_THIS_FRAME
	 *
	 * Hash: 0xE615BB7A7752C76A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE615BB7A7752C76A)
	 */
	setDisableTurretMovementThisFrame(vehicle: Handle, turretId: integer): void;

	/**
	 * Native: VEHICLE::_SET_DISABLE_VEHICLE_UNK
	 *
	 * Hash: 0x143921E45EC44D62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x143921E45EC44D62)
	 */
	setDisableUnk(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_DISABLE_VEHICLE_UNK_2
	 *
	 * Hash: 0x211E95CE9903940C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x211E95CE9903940C)
	 */
	setDisableUnk2(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_DISABLE_VEHICLE_WINDOW_COLLISIONS
	 *
	 * Hash: 0x1087BC8EC540DAEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1087BC8EC540DAEB)
	 */
	setDisableWindowCollisions(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_DISTANT_CARS_ENABLED
	 *
	 * Hash: 0xF796359A959DF65D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF796359A959DF65D)
	 */
	setDistantCarsEnabled(toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOOR_BROKEN
	 *
	 * Hash: 0xD4D4F6A4AB575A33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4D4F6A4AB575A33)
	 */
	setDoorBroken(vehicle: Handle, doorId: integer, deleteDoor: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_DOOR_CAN_BREAK
	 *
	 * Hash: 0x2FA133A4A9D37ED8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FA133A4A9D37ED8)
	 */
	setDoorCanBreak(vehicle: Handle, doorId: integer, isBreakable: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOOR_CONTROL
	 *
	 * Hash: 0xF2BFA0430F0A0FCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2BFA0430F0A0FCB)
	 */
	setDoorControl(vehicle: Handle, doorId: integer, speed: integer, angle: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOOR_LATCHED
	 *
	 * Hash: 0xA5A9653A8D2CAF48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5A9653A8D2CAF48)
	 */
	setDoorLatched(vehicle: Handle, doorId: integer, p2: boolean, p3: boolean, p4: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOOR_OPEN
	 *
	 * Hash: 0x7C65DAC73C35C862 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C65DAC73C35C862)
	 */
	setDoorOpen(vehicle: Handle, doorId: integer, loose: boolean, openInstantly: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOOR_SHUT
	 *
	 * Hash: 0x93D9BD300D7789E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93D9BD300D7789E5)
	 */
	setDoorShut(vehicle: Handle, doorId: integer, closeInstantly: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOORS_LOCKED
	 *
	 * Hash: 0xB664292EAECF7FA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB664292EAECF7FA6)
	 */
	setDoorsLocked(vehicle: Handle, doorLockStatus: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS
	 *
	 * Hash: 0xA2F80B8D040727CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2F80B8D040727CC)
	 */
	setDoorsLockedForAllPlayers(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_NON_SCRIPT_PLAYERS
	 *
	 * Hash: 0x9737A37136F07E75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9737A37136F07E75)
	 */
	setDoorsLockedForNonScriptPlayers(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
	 *
	 * Hash: 0x517AAF684BB50CD1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x517AAF684BB50CD1)
	 */
	setDoorsLockedForPlayer(vehicle: Handle, player: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_TEAM
	 *
	 * Hash: 0xB81F6D4A8F5EEBA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB81F6D4A8F5EEBA8)
	 */
	setDoorsLockedForTeam(vehicle: Handle, team: integer, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_DOORS_LOCKED_FOR_UNK
	 *
	 * Hash: 0x203B527D1B77904C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x203B527D1B77904C)
	 */
	setDoorsLockedForUnk(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DOORS_SHUT
	 *
	 * Hash: 0x781B3D62BB013EF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x781B3D62BB013EF5)
	 */
	setDoorsShut(vehicle: Handle, closeInstantly: boolean): void;

	/**
	 * Native: VEHICLE::_SET_DRIFT_TYRES_ENABLED
	 *
	 * Hash: 0x5AC79C98C5C17F05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AC79C98C5C17F05)
	 */
	setDriftTyresEnabled(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_DROPS_MONEY_WHEN_BLOWN_UP
	 *
	 * Hash: 0x068F64F2470F9656 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x068F64F2470F9656)
	 */
	setDropsMoneyWhenBlownUp(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_ENABLE_VEHICLE_SLIPSTREAMING
	 *
	 * Hash: 0xE6C0C80B8C867537 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6C0C80B8C867537)
	 */
	setEnableSlipstreaming(toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ENGINE_CAN_DEGRADE
	 *
	 * Hash: 0x983765856F2564F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x983765856F2564F9)
	 */
	setEngineCanDegrade(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ENGINE_HEALTH
	 *
	 * Hash: 0x45F6D8EEF34ABEF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45F6D8EEF34ABEF1)
	 */
	setEngineHealth(vehicle: Handle, health: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ENGINE_ON
	 *
	 * Hash: 0x2497C4717C8B881E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2497C4717C8B881E)
	 */
	setEngineOn(vehicle: Handle, value: boolean, instantly: boolean, disableAutoStart: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ENVEFF_SCALE
	 *
	 * Hash: 0x3AFDC536C3D01674 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3AFDC536C3D01674)
	 */
	setEnveffScale(vehicle: Handle, fade: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_EXCLUSIVE_DRIVER
	 *
	 * Hash: 0xB5C51B5502E85E83 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5C51B5502E85E83)
	 */
	setExclusiveDriver(vehicle: Handle, ped: Handle, index: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_EXPLODES_ON_HIGH_EXPLOSION_DAMAGE
	 *
	 * Hash: 0x71B0892EC081D60A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71B0892EC081D60A)
	 */
	setExplodesOnHighExplosionDamage(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_EXTENDED_REMOVAL_RANGE
	 *
	 * Hash: 0x79DF7E806202CE01 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79DF7E806202CE01)
	 */
	setExtendedRemovalRange(vehicle: Handle, range: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_EXTRA
	 *
	 * Hash: 0x7EE3A3C5E4A40CC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EE3A3C5E4A40CC9)
	 */
	setExtra(vehicle: Handle, extraId: integer, disable: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_EXTRA_COLOURS
	 *
	 * Hash: 0x2036F561ADD12E33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2036F561ADD12E33)
	 */
	setExtraColours(vehicle: Handle, pearlescentColor: integer, wheelColor: integer): void;

	/**
	 * Native: VEHICLE::SET_FAR_DRAW_VEHICLES
	 *
	 * Hash: 0x26324F33423F3CC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26324F33423F3CC3)
	 */
	setFarDrawS(toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FIXED
	 *
	 * Hash: 0x115722B1B9C14C1C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x115722B1B9C14C1C)
	 */
	setFixed(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FLIGHT_NOZZLE_POSITION
	 *
	 * Hash: 0x30D779DE7C4F6DD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30D779DE7C4F6DD3)
	 */
	setFlightNozzlePosition(vehicle: Handle, angleRatio: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FLIGHT_NOZZLE_POSITION_IMMEDIATE
	 *
	 * Hash: 0x9AA47FFF660CB932 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AA47FFF660CB932)
	 */
	setFlightNozzlePositionImmediate(vehicle: Handle, angle: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FORCE_AFTERBURNER
	 *
	 * Hash: 0xB055A34527CB8FD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB055A34527CB8FD7)
	 */
	setForceAfterburner(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_FORCE_HD_VEHICLE
	 *
	 * Hash: 0x97CE68CB032583F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97CE68CB032583F0)
	 */
	setForceHd(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_FORKLIFT_FORK_HEIGHT
	 *
	 * Hash: 0x37EBBF3117BD6A25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37EBBF3117BD6A25)
	 */
	setForkliftForkHeight(vehicle: Handle, height: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FORWARD_SPEED
	 *
	 * Hash: 0xAB54A438726D25D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB54A438726D25D5)
	 */
	setForwardSpeed(vehicle: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FRICTION_OVERRIDE
	 *
	 * Hash: 0x1837AF7C627009BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1837AF7C627009BA)
	 */
	setFrictionOverride(vehicle: Handle, friction: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_FULLBEAM
	 *
	 * Hash: 0x8B7FD87F0DDB421E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B7FD87F0DDB421E)
	 */
	setFullbeam(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_GARBAGE_TRUCKS
	 *
	 * Hash: 0x2AFD795EEAC8D30D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AFD795EEAC8D30D)
	 */
	setGarbageTrucks(toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_GENERATES_ENGINE_SHOCKING_EVENTS
	 *
	 * Hash: 0x279D50DE5652D935 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x279D50DE5652D935)
	 */
	setGeneratesEngineShockingEvents(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_GRAVITY
	 *
	 * Hash: 0x89F149B6131E57DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89F149B6131E57DA)
	 */
	setGravity(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_HANDBRAKE
	 *
	 * Hash: 0x684785568EF26A22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x684785568EF26A22)
	 */
	setHandbrake(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_HANDLING_HASH_FOR_AI
	 *
	 * Hash: 0x10655FAB9915623D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10655FAB9915623D)
	 */
	setHandlingHashForAi(vehicle: Handle, hash: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_HAS_BEEN_DRIVEN_FLAG
	 *
	 * Hash: 0x02398B627547189C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02398B627547189C)
	 */
	setHasBeenDrivenFlag(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_HAS_BEEN_OWNED_BY_PLAYER
	 *
	 * Hash: 0x2B5F9D2AF1F1722D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B5F9D2AF1F1722D)
	 */
	setHasBeenOwnedByPlayer(vehicle: Handle, owned: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_HAS_MUTED_SIRENS
	 *
	 * Hash: 0xD8050E0EB60CF274 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8050E0EB60CF274)
	 */
	setHasMutedSirens(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_HAS_STRONG_AXLES
	 *
	 * Hash: 0x92F0CF722BC4202F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92F0CF722BC4202F)
	 */
	setHasStrongAxles(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_HAS_UNBREAKABLE_LIGHTS
	 *
	 * Hash: 0x1AA8A837D2169D94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1AA8A837D2169D94)
	 */
	setHasUnbreakableLights(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::SET_HELI_BLADES_FULL_SPEED
	 *
	 * Hash: 0xA178472EBB8AE60D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA178472EBB8AE60D)
	 */
	setHeliBladesFullSpeed(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SET_HELI_BLADES_SPEED
	 *
	 * Hash: 0xFD280B4D7F3ABC4D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD280B4D7F3ABC4D)
	 */
	setHeliBladesSpeed(vehicle: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::_SET_HELICOPTER_ROLL_PITCH_YAW_MULT
	 *
	 * Hash: 0x6E0859B530A365CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E0859B530A365CC)
	 */
	setHelicopterRollPitchYawMult(helicopter: Handle, multiplier: number): void;

	/**
	 * Native: VEHICLE::_SET_HELI_MAIN_ROTOR_HEALTH
	 *
	 * Hash: 0x4056EA1105F5ABD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4056EA1105F5ABD7)
	 */
	setHeliMainRotorHealth(vehicle: Handle, health: number): void;

	/**
	 * Native: VEHICLE::SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD
	 *
	 * Hash: 0x3EC8BF18AA453FE9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EC8BF18AA453FE9)
	 */
	setHeliTailExplodeThrowDashboard(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: VEHICLE::_SET_HELI_TAIL_ROTOR_HEALTH
	 *
	 * Hash: 0xFE205F38AAA58E5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE205F38AAA58E5B)
	 */
	setHeliTailRotorHealth(vehicle: Handle, health: number): void;

	/**
	 * Native: VEHICLE::SET_HELI_TURBULENCE_SCALAR
	 *
	 * Hash: 0xE6F13851780394DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6F13851780394DA)
	 */
	setHeliTurbulenceScalar(vehicle: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_HOVER_TRANSFORM_ACTIVE
	 *
	 * Hash: 0x2D55FE374D5FDB91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D55FE374D5FDB91)
	 */
	setHoverTransformActive(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_HOVER_TRANSFORM_ENABLED
	 *
	 * Hash: 0xF1211889DF15A763 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1211889DF15A763)
	 */
	setHoverTransformEnabled(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_HOVER_TRANSFORM_PERCENTAGE
	 *
	 * Hash: 0x438B3D7CA026FE91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x438B3D7CA026FE91)
	 */
	setHoverTransformPercentage(vehicle: Handle, percentage: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_HOVER_TRANSFORM_RATIO
	 *
	 * Hash: 0xD138FA15C9776837 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD138FA15C9776837)
	 */
	setHoverTransformRatio(vehicle: Handle, ratio: number): void;

	/**
	 * Native: VEHICLE::_SET_HYDRAULIC_RAISED
	 *
	 * Hash: 0x28B18377EB6E25F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28B18377EB6E25F6)
	 */
	setHydraulicRaised(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_SET_HYDRAULIC_WHEEL_STATE
	 *
	 * Hash: 0x8EA86DF356801C7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EA86DF356801C7D)
	 */
	setHydraulicWheelState(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_SET_HYDRAULIC_WHEEL_STATE_TRANSITION
	 *
	 * Hash: 0xC24075310A8B9CD1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC24075310A8B9CD1)
	 */
	setHydraulicWheelStateTransition(vehicle: Handle, wheelId: integer, state: integer, value: number, p4: integer): void;

	/**
	 * Native: VEHICLE::_SET_HYDRAULIC_WHEEL_VALUE
	 *
	 * Hash: 0x84EA99C62CB3EF0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84EA99C62CB3EF0C)
	 */
	setHydraulicWheelValue(vehicle: Handle, wheelId: integer, value: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_INACTIVE_DURING_PLAYBACK
	 *
	 * Hash: 0x06582AFF74894C75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06582AFF74894C75)
	 */
	setInactiveDuringPlayback(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_INDICATOR_LIGHTS
	 *
	 * Hash: 0xB5D45264751B7DF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5D45264751B7DF0)
	 */
	setIndicatorLights(vehicle: Handle, turnSignal: integer, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_INDIVIDUAL_DOORS_LOCKED
	 *
	 * Hash: 0xBE70724027F85BCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE70724027F85BCD)
	 */
	setIndividualDoorsLocked(vehicle: Handle, doorId: integer, doorLockStatus: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_INTERIOR_COLOR
	 *
	 * Hash: 0xF40DD601A65F7F19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF40DD601A65F7F19)
	 */
	setInteriorColor(vehicle: Handle, color: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_INTERIORLIGHT
	 *
	 * Hash: 0xBC2042F090AF6AD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC2042F090AF6AD3)
	 */
	setInteriorlight(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_IS_CONSIDERED_BY_PLAYER
	 *
	 * Hash: 0x31B927BBC44156CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31B927BBC44156CD)
	 */
	setIsConsideredByPlayer(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_IS_RACING
	 *
	 * Hash: 0x07116E24E9D1929D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07116E24E9D1929D)
	 */
	setIsRacing(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_IS_STOLEN
	 *
	 * Hash: 0x67B2C79AA7FF5738 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67B2C79AA7FF5738)
	 */
	setIsStolen(vehicle: Handle, isStolen: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_IS_WANTED
	 *
	 * Hash: 0xF7EC25A3EBEEC726 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7EC25A3EBEEC726)
	 */
	setIsWanted(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_JET_ENGINE_ON
	 *
	 * Hash: 0xB8FBC8B1330CA9B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8FBC8B1330CA9B4)
	 */
	setJetEngineOn(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_KERS_ALLOWED
	 *
	 * Hash: 0x99C82F8A139F3E4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99C82F8A139F3E4E)
	 */
	setKersAllowed(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_LAST_DRIVEN_VEHICLE
	 *
	 * Hash: 0xACFB2463CC22BED2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACFB2463CC22BED2)
	 */
	setLastDriven(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_LIGHT_MULTIPLIER
	 *
	 * Hash: 0xB385454F8791F57C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB385454F8791F57C)
	 */
	setLightMultiplier(vehicle: Handle, multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_LIGHTS
	 *
	 * Hash: 0x34E710FF01247C5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34E710FF01247C5A)
	 */
	setLights(vehicle: Handle, state: integer): void;

	/**
	 * Native: VEHICLE::SET_LIGHTS_CUTOFF_DISTANCE_TWEAK
	 *
	 * Hash: 0xBC3CCA5844452B06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC3CCA5844452B06)
	 */
	setLightsCutoffDistanceTweak(distance: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_LIGHTS_MODE
	 *
	 * Hash: 0x1FD09E7390A74D54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1FD09E7390A74D54)
	 */
	setLightsMode(vehicle: Handle, p1: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_LIVERY
	 *
	 * Hash: 0x60BF608F1B8CD1B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60BF608F1B8CD1B6)
	 */
	setLivery(vehicle: Handle, livery: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_LOD_MULTIPLIER
	 *
	 * Hash: 0x93AE6A61BE015BF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93AE6A61BE015BF1)
	 */
	setLodMultiplier(vehicle: Handle, multiplier: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_MAX_SPEED
	 *
	 * Hash: 0xBAA045B4E42F3C06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAA045B4E42F3C06)
	 */
	setMaxSpeed(vehicle: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xBBE7648349B49BE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBE7648349B49BE8)
	 */
	setMissionTrainAsNoLongerNeeded(train: Handle, p1: boolean): Handle;

	/**
	 * Native: VEHICLE::SET_MISSION_TRAIN_COORDS
	 *
	 * Hash: 0x591CA673AA6AB736 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x591CA673AA6AB736)
	 */
	setMissionTrainCoords(train: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MOD
	 *
	 * Hash: 0x6AF0636DDEDCB6DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6AF0636DDEDCB6DD)
	 */
	setMod(vehicle: Handle, modType: integer, modIndex: integer, customTires: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MOD_COLOR_1
	 *
	 * Hash: 0x43FEB945EE7F85B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43FEB945EE7F85B8)
	 */
	setModColor1(vehicle: Handle, paintType: integer, color: integer, pearlescentColor: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MOD_COLOR_2
	 *
	 * Hash: 0x816562BADFDEC83E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x816562BADFDEC83E)
	 */
	setModColor2(vehicle: Handle, paintType: integer, color: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MODEL_IS_SUPPRESSED
	 *
	 * Hash: 0x0FC2D89AC25A5814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FC2D89AC25A5814)
	 */
	setModelIsSuppressed(model: integer, suppressed: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_MOD_KIT
	 *
	 * Hash: 0x1F2AA07F00B3217A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F2AA07F00B3217A)
	 */
	setModKit(vehicle: Handle, modKit: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_NAME_DEBUG
	 *
	 * Hash: 0xBFDF984E2C22B94F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFDF984E2C22B94F)
	 */
	setNameDebug(vehicle: Handle, name: string): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_NEEDS_TO_BE_HOTWIRED
	 *
	 * Hash: 0xFBA550EA44404EE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBA550EA44404EE6)
	 */
	setNeedsToBeHotwired(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_NEON_LIGHT_ENABLED
	 *
	 * Hash: 0x2AA720E4287BF269 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AA720E4287BF269)
	 */
	setNeonLightEnabled(vehicle: Handle, index: integer, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_NEON_LIGHTS_COLOUR
	 *
	 * Hash: 0x8E0A582209A62695 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E0A582209A62695)
	 */
	setNeonLightsColour(vehicle: Handle, r: integer, g: integer, b: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_NITRO_ENABLED
	 *
	 * Hash: 0xC8E9B6B71B8E660D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8E9B6B71B8E660D)
	 */
	setNitroEnabled(
		vehicle: Handle,
		toggle: boolean,
		level: number,
		power: number,
		rechargeTime: number,
		disableSound: boolean
	): void;

	/**
	 * Native: VEHICLE::SET_NUMBER_OF_PARKED_VEHICLES
	 *
	 * Hash: 0xCAA15F13EBD417FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCAA15F13EBD417FF)
	 */
	setNumberOfParkedS(value: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT
	 *
	 * Hash: 0x95A88F0B409CDA47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95A88F0B409CDA47)
	 */
	setNumberPlateText(vehicle: Handle, plateText: string): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
	 *
	 * Hash: 0x9088EB5A43FFB0A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9088EB5A43FFB0A1)
	 */
	setNumberPlateTextIndex(vehicle: Handle, plateIndex: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_ON_GROUND_PROPERLY
	 *
	 * Hash: 0x49733E92263139D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49733E92263139D1)
	 */
	setOnGroundProperly(vehicle: Handle, p1: number): boolean;

	/**
	 * Native: VEHICLE::_SET_OPPRESSOR_TRANSFORM_STATE
	 *
	 * Hash: 0x544996C0081ABDEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x544996C0081ABDEB)
	 */
	setOppressorTransformState(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_OUT_OF_CONTROL
	 *
	 * Hash: 0xF19D095E42D430CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF19D095E42D430CC)
	 */
	setOutOfControl(vehicle: Handle, killDriver: boolean, explodeOnImpact: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_PARACHUTE_ACTIVE
	 *
	 * Hash: 0x0BFFB028B3DD0A97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BFFB028B3DD0A97)
	 */
	setParachuteActive(vehicle: Handle, active: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_PARACHUTE_MODEL
	 *
	 * Hash: 0x4D610C6B56031351 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D610C6B56031351)
	 */
	setParachuteModel(vehicle: Handle, modelHash: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_PARACHUTE_TEXTURE_VARIATION
	 *
	 * Hash: 0xA74AD2439468C883 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA74AD2439468C883)
	 */
	setParachuteTextureVariation(vehicle: Handle, textureVariation: integer): void;

	/**
	 * Native: VEHICLE::SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0xEAE6DCC7EEE3DB1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAE6DCC7EEE3DB1D)
	 */
	setParkedDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_PETROL_TANK_HEALTH
	 *
	 * Hash: 0x70DB57649FA8D0D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70DB57649FA8D0D8)
	 */
	setPetrolTankHealth(vehicle: Handle, health: number): void;

	/**
	 * Native: VEHICLE::SET_PICKUP_ROPE_LENGTH_FOR_CARGOBOB
	 *
	 * Hash: 0x877C1EAEAC531023 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x877C1EAEAC531023)
	 */
	setPickupRopeLengthForCargobob(cargobob: Handle, length1: number, length2: number, p3: boolean): void;

	/**
	 * Native: VEHICLE::_SET_PLANE_ENGINE_HEALTH
	 *
	 * Hash: 0x2A86A0475B6A1434 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A86A0475B6A1434)
	 */
	setPlaneEngineHealth(vehicle: Handle, health: number): void;

	/**
	 * Native: VEHICLE::_SET_PLANE_PROPELLERS_HEALTH
	 *
	 * Hash: 0x4C815EB175086F84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C815EB175086F84)
	 */
	setPlanePropellersHealth(plane: Handle, health: number): void;

	/**
	 * Native: VEHICLE::SET_PLANE_TURBULENCE_MULTIPLIER
	 *
	 * Hash: 0xAD2D28A1AFDFF131 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD2D28A1AFDFF131)
	 */
	setPlaneTurbulenceMultiplier(vehicle: Handle, multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_PLAYBACK_SPEED
	 *
	 * Hash: 0x6683AB880E427778 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6683AB880E427778)
	 */
	setPlaybackSpeed(vehicle: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::SET_PLAYBACK_TO_USE_AI
	 *
	 * Hash: 0xA549C3B37EA28131 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA549C3B37EA28131)
	 */
	setPlaybackToUseAi(vehicle: Handle, drivingStyle: integer): void;

	/**
	 * Native: VEHICLE::SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER
	 *
	 * Hash: 0x6E63860BBB190730 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E63860BBB190730)
	 */
	setPlaybackToUseAiTryToRevertBackLater(vehicle: Handle, time: integer, drivingStyle: integer, p3: boolean): void;

	/**
	 * Native: VEHICLE::SET_PLAYERS_LAST_VEHICLE
	 *
	 * Hash: 0xBCDF8BAF56C87B6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCDF8BAF56C87B6A)
	 */
	setPlayersLast(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_PROVIDES_COVER
	 *
	 * Hash: 0x5AFEEDD9BB2899D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AFEEDD9BB2899D7)
	 */
	setProvidesCover(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_RAMP_LAUNCH_MODIFIER
	 *
	 * Hash: 0xEFC13B1CE30D755D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFC13B1CE30D755D)
	 */
	setRampLaunchModifier(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_RAMP_SIDEWAYS_LAUNCH_MOTION
	 *
	 * Hash: 0x1BBAC99C0BC53656 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BBAC99C0BC53656)
	 */
	setRampSidewaysLaunchMotion(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_RAMP_UPWARDS_LAUNCH_MOTION
	 *
	 * Hash: 0x756AE6E962168A04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x756AE6E962168A04)
	 */
	setRampUpwardsLaunchMotion(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::SET_RANDOM_BOATS
	 *
	 * Hash: 0x84436EC293B1415F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84436EC293B1415F)
	 */
	setRandomBoats(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_RANDOM_BOATS_IN_MP
	 *
	 * Hash: 0xDA5E12F728DB30CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA5E12F728DB30CA)
	 */
	setRandomBoatsInMp(toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0xB3B3359379FE77D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3B3359379FE77D3)
	 */
	setRandomDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_RANDOM_TRAINS
	 *
	 * Hash: 0x80D9F74197EA47D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80D9F74197EA47D9)
	 */
	setRandomTrains(toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_RECEIVES_RAMP_DAMAGE
	 *
	 * Hash: 0x28D034A93FE31BF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28D034A93FE31BF5)
	 */
	setReceivesRampDamage(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_REDUCE_DRIFT_VEHICLE_SUSPENSION
	 *
	 * Hash: 0x3A375167F5782A65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A375167F5782A65)
	 */
	setReduceDriftSuspension(vehicle: Handle, enable: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_REDUCE_GRIP
	 *
	 * Hash: 0x222FF6A823D122E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x222FF6A823D122E2)
	 */
	setReduceGrip(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_REDUCE_TRACTION
	 *
	 * Hash: 0x6DEE944E1EE90CFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DEE944E1EE90CFB)
	 */
	setReduceTraction(vehicle: Handle, val: integer): void;

	/**
	 * Native: VEHICLE::SET_RENDER_TRAIN_AS_DERAILED
	 *
	 * Hash: 0x317B11A312DF5534 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x317B11A312DF5534)
	 */
	setRenderTrainAsDerailed(train: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_ROCKET_BOOST_ACTIVE
	 *
	 * Hash: 0x81E1552E35DC3839 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81E1552E35DC3839)
	 */
	setRocketBoostActive(vehicle: Handle, active: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_ROCKET_BOOST_PERCENTAGE
	 *
	 * Hash: 0xFEB2DDED3509562E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEB2DDED3509562E)
	 */
	setRocketBoostPercentage(vehicle: Handle, percentage: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_ROCKET_BOOST_REFILL_TIME
	 *
	 * Hash: 0xE00F2AB100B76E89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE00F2AB100B76E89)
	 */
	setRocketBoostRefillTime(vehicle: Handle, seconds: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_ROOF_LIVERY
	 *
	 * Hash: 0xA6D3A8750DC73270 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6D3A8750DC73270)
	 */
	setRoofLivery(vehicle: Handle, livery: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_RUDDER_BROKEN
	 *
	 * Hash: 0x09606148B6C71DEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x09606148B6C71DEF)
	 */
	setRudderBroken(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_SCRIPT_VEHICLE_GENERATOR
	 *
	 * Hash: 0xD9D620E0AC6DC4B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9D620E0AC6DC4B0)
	 */
	setScriptGenerator(vehicleGenerator: integer, enabled: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_SEARCHLIGHT
	 *
	 * Hash: 0x14E85C5EE7A4D542 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14E85C5EE7A4D542)
	 */
	setSearchlight(heli: Handle, toggle: boolean, canBeUsedByAI: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_SHADOW_EFFECT
	 *
	 * Hash: 0xF0E4BA16D1DB546C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0E4BA16D1DB546C)
	 */
	setShadowEffect(vehicle: Handle, p1: integer, p2: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_SHOOT_AT_TARGET
	 *
	 * Hash: 0x74CD9A9327A282EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74CD9A9327A282EA)
	 */
	setShootAtTarget(driver: Handle, entity: Handle, xTarget: number, yTarget: number, zTarget: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_SILENT
	 *
	 * Hash: 0x9D44FCCE98450843 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D44FCCE98450843)
	 */
	setSilent(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_SIREN
	 *
	 * Hash: 0xF4924635A19EB37D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4924635A19EB37D)
	 */
	setSiren(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_SPECIALFLIGHT_WING_RATIO
	 *
	 * Hash: 0x70A252F60A3E036B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70A252F60A3E036B)
	 */
	setSpecialflightWingRatio(vehicle: Handle, ratio: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_STEER_BIAS
	 *
	 * Hash: 0x42A8EC77D5150CBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42A8EC77D5150CBE)
	 */
	setSteerBias(vehicle: Handle, value: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_STEERING_BIAS_SCALAR
	 *
	 * Hash: 0x9007A2F21DC108D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9007A2F21DC108D4)
	 */
	setSteeringBiasScalar(p0: integer, p1: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_STRONG
	 *
	 * Hash: 0x3E8C8727991A8A0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E8C8727991A8A0B)
	 */
	setStrong(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_SUBMARINE_CRUSH_DEPTHS
	 *
	 * Hash: 0xC59872A5134879C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC59872A5134879C7)
	 */
	setSubmarineCrushDepths(vehicle: Handle, p1: boolean, depth1: number, depth2: number, depth3: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TANK_TURRET_POSITION
	 *
	 * Hash: 0x56B94C6D7127DFBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56B94C6D7127DFBA)
	 */
	setTankTurretPosition(vehicle: Handle, position: number, p2: boolean): void;

	/**
	 * Native: VEHICLE::SET_TASK_VEHICLE_GOTO_PLANE_MIN_HEIGHT_ABOVE_TERRAIN
	 *
	 * Hash: 0xB893215D8D4C015B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB893215D8D4C015B)
	 */
	setTaskGotoPlaneMinHeightAboveTerrain(plane: Handle, height: integer): void;

	/**
	 * Native: VEHICLE::SET_TAXI_LIGHTS
	 *
	 * Hash: 0x598803E85E8448D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x598803E85E8448D9)
	 */
	setTaxiLights(vehicle: Handle, state: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TIMED_EXPLOSION
	 *
	 * Hash: 0x2E0A74E1002380B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E0A74E1002380B1)
	 */
	setTimedExplosion(vehicle: Handle, ped: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TOW_TRUCK_ARM_POSITION
	 *
	 * Hash: 0xFE54B92A344583CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE54B92A344583CA)
	 */
	setTowTruckArmPosition(vehicle: Handle, position: number): void;

	/**
	 * Native: VEHICLE::SET_TRAILER_INVERSE_MASS_SCALE
	 *
	 * Hash: 0x2A8F319B392E7B3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A8F319B392E7B3F)
	 */
	setTrailerInverseMassScale(vehicle: Handle, p1: number): void;

	/**
	 * Native: VEHICLE::_SET_TRAILER_LEGS_LOWERED
	 *
	 * Hash: 0x878C75C09FBDB942 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x878C75C09FBDB942)
	 */
	setTrailerLegsLowered(p0: integer): void;

	/**
	 * Native: VEHICLE::SET_TRAILER_LEGS_RAISED
	 *
	 * Hash: 0x95CF53B3D687F9FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95CF53B3D687F9FA)
	 */
	setTrailerLegsRaised(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SET_TRAIN_CRUISE_SPEED
	 *
	 * Hash: 0x16469284DB8C62B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16469284DB8C62B5)
	 */
	setTrainCruiseSpeed(train: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::SET_TRAIN_SPEED
	 *
	 * Hash: 0xAA0BC91BE0B796E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA0BC91BE0B796E3)
	 */
	setTrainSpeed(train: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::SET_TRAIN_TRACK_SPAWN_FREQUENCY
	 *
	 * Hash: 0x21973BBF8D17EDFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21973BBF8D17EDFA)
	 */
	setTrainTrackSpawnFrequency(trackIndex: integer, frequency: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TURRET_SPEED_THIS_FRAME
	 *
	 * Hash: 0x1093408B4B9D1146 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1093408B4B9D1146)
	 */
	setTurretSpeedThisFrame(vehicle: Handle, speed: number): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_TURRET_UNK
	 *
	 * Hash: 0xC60060EB0D8AC7B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC60060EB0D8AC7B1)
	 */
	setTurretUnk(vehicle: Handle, index: integer, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TYRE_BURST
	 *
	 * Hash: 0xEC6A202EE4960385 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC6A202EE4960385)
	 */
	setTyreBurst(vehicle: Handle, index: integer, onRim: boolean, p3: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TYRE_FIXED
	 *
	 * Hash: 0x6E13FC662B882D1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E13FC662B882D1D)
	 */
	setTyreFixed(vehicle: Handle, tyreIndex: integer): void;

	/**
	 * Native: VEHICLE::_SET_TYRE_HEALTH
	 *
	 * Hash: 0x74C68EF97645E79D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74C68EF97645E79D)
	 */
	setTyreHealth(vehicle: Handle, wheelIndex: integer, health: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TYRES_CAN_BURST
	 *
	 * Hash: 0xEB9DC3C7D8596C46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB9DC3C7D8596C46)
	 */
	setTyresCanBurst(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_TYRE_SMOKE_COLOR
	 *
	 * Hash: 0xB5BA80F839791C0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5BA80F839791C0F)
	 */
	setTyreSmokeColor(vehicle: Handle, r: integer, g: integer, b: integer): void;

	/**
	 * Native: VEHICLE::_SET_TYRE_SOFTNESS_MULTIPLIER
	 *
	 * Hash: 0x392183BB9EA57697 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x392183BB9EA57697)
	 */
	setTyreSoftnessMultiplier(vehicle: Handle, wheelIndex: integer, multiplier: number): void;

	/**
	 * Native: VEHICLE::_SET_TYRE_TRACTION_LOSS_MULTIPLIER
	 *
	 * Hash: 0xC970D0E0FC31D768 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC970D0E0FC31D768)
	 */
	setTyreTractionLossMultiplier(vehicle: Handle, wheelIndex: integer, multiplier: number): void;

	/**
	 * Native: VEHICLE::_SET_TYRE_WEAR_MULTIPLIER
	 *
	 * Hash: 0x01894E2EDE923CA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01894E2EDE923CA2)
	 */
	setTyreWearMultiplier(vehicle: Handle, wheelIndex: integer, multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_UNDRIVEABLE
	 *
	 * Hash: 0x8ABA6AF54B942B95 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8ABA6AF54B942B95)
	 */
	setUndriveable(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_UNK_DAMAGE_MULTIPLIER
	 *
	 * Hash: 0x45A561A9421AB6AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45A561A9421AB6AD)
	 */
	setUnkDamageMultiplier(vehicle: Handle, multiplier: number): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_USE_ALTERNATE_HANDLING
	 *
	 * Hash: 0x1D97D1E3A70A649F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D97D1E3A70A649F)
	 */
	setUseAlternateHandling(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_USE_CUTSCENE_WHEEL_COMPRESSION
	 *
	 * Hash: 0xE023E8AC4EF7C117 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE023E8AC4EF7C117)
	 */
	setUseCutsceneWheelCompression(p0: Handle, p1: boolean, p2: boolean, p3: boolean): integer;

	/**
	 * Native: VEHICLE::_SET_USE_HIGHER_VEHICLE_JUMP_FORCE
	 *
	 * Hash: 0xF06A16CA55D138D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF06A16CA55D138D8)
	 */
	setUseHigherJumpForce(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_USE_PLAYER_LIGHT_SETTINGS
	 *
	 * Hash: 0xC45C27EF50F36ADC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC45C27EF50F36ADC)
	 */
	setUsePlayerLightSettings(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_USES_LARGE_REAR_RAMP
	 *
	 * Hash: 0xCAC66558B944DA67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCAC66558B944DA67)
	 */
	setUsesLargeRearRamp(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_WEAPON_CAPACITY
	 *
	 * Hash: 0x44CD1F493DB2A0A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44CD1F493DB2A0A6)
	 */
	setWeaponCapacity(vehicle: Handle, weaponIndex: integer, capacity: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_WEAPONS_DISABLED
	 *
	 * Hash: 0x86B4B6212CB8B627 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x86B4B6212CB8B627)
	 */
	setWeaponsDisabled(p0: integer, p1: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_WHEELS_CAN_BREAK
	 *
	 * Hash: 0x29B18B4FD460CA8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29B18B4FD460CA8F)
	 */
	setWheelsCanBreak(vehicle: Handle, enabled: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_WHEELS_CAN_BREAK_OFF_WHEN_BLOW_UP
	 *
	 * Hash: 0xA37B9A517B133349 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA37B9A517B133349)
	 */
	setWheelsCanBreakOffWhenBlowUp(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_WHEELS_DEAL_DAMAGE
	 *
	 * Hash: 0x2970EAA18FD5E42F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2970EAA18FD5E42F)
	 */
	setWheelsDealDamage(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_WHEEL_TYPE
	 *
	 * Hash: 0x487EB21CC7295BA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x487EB21CC7295BA1)
	 */
	setWheelType(vehicle: Handle, WheelType: integer): void;

	/**
	 * Native: VEHICLE::SET_VEHICLE_WINDOW_TINT
	 *
	 * Hash: 0x57C51E6BAD752696 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57C51E6BAD752696)
	 */
	setWindowTint(vehicle: Handle, tint: integer): void;

	/**
	 * Native: VEHICLE::_SET_VEHICLE_XENON_LIGHTS_COLOR
	 *
	 * Hash: 0xE41033B25D003A07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE41033B25D003A07)
	 */
	setXenonLightsColor(vehicle: Handle, colorIndex: integer): void;

	/**
	 * Native: VEHICLE::SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x9438F7AD68771A20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9438F7AD68771A20)
	 */
	skipTimeInPlaybackRecorded(vehicle: Handle, time: number): void;

	/**
	 * Native: VEHICLE::SKIP_TO_END_AND_STOP_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0xAB8E2EDA0C0A5883 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB8E2EDA0C0A5883)
	 */
	skipToEndAndStopPlaybackRecorded(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SMASH_VEHICLE_WINDOW
	 *
	 * Hash: 0x9E5B5E4D2CCD2259 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E5B5E4D2CCD2259)
	 */
	smashWindow(vehicle: Handle, index: integer): void;

	/**
	 * Native: VEHICLE::STABILISE_ENTITY_ATTACHED_TO_HELI
	 *
	 * Hash: 0x374706271354CB18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x374706271354CB18)
	 */
	stabiliseEntityAttachedToHeli(vehicle: Handle, entity: Handle, p2: number): void;

	/**
	 * Native: VEHICLE::START_VEHICLE_ALARM
	 *
	 * Hash: 0xB8FF7AB45305C345 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8FF7AB45305C345)
	 */
	startAlarm(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::START_VEHICLE_HORN
	 *
	 * Hash: 0x9C8C6504B5B63D2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C8C6504B5B63D2C)
	 */
	startHorn(vehicle: Handle, duration: integer, mode: integer, forever: boolean): void;

	/**
	 * Native: VEHICLE::START_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x3F878F92B3A7A071 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F878F92B3A7A071)
	 */
	startPlaybackRecorded(vehicle: Handle, recording: integer, script: string, p3: boolean): void;

	/**
	 * Native: VEHICLE::START_PLAYBACK_RECORDED_VEHICLE_USING_AI
	 *
	 * Hash: 0x29DE5FA52D00428C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29DE5FA52D00428C)
	 */
	startPlaybackRecordedUsingAi(
		vehicle: Handle,
		recording: integer,
		script: string,
		speed: number,
		drivingStyle: integer
	): void;

	/**
	 * Native: VEHICLE::START_PLAYBACK_RECORDED_VEHICLE_WITH_FLAGS
	 *
	 * Hash: 0x7D80FD645D4DA346 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D80FD645D4DA346)
	 */
	startPlaybackRecordedWithFlags(
		vehicle: Handle,
		recording: integer,
		script: string,
		flags: integer,
		time: integer,
		drivingStyle: integer
	): void;

	/**
	 * Native: VEHICLE::STOP_ALL_GARAGE_ACTIVITY
	 *
	 * Hash: 0x0F87E938BDF29D66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F87E938BDF29D66)
	 */
	stopAllGarageActivity(): void;

	/**
	 * Native: VEHICLE::_STOP_BRING_VEHICLE_TO_HALT
	 *
	 * Hash: 0x7C06330BFDDA182E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C06330BFDDA182E)
	 */
	stopBringToHalt(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::STOP_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x54833611C17ABDEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54833611C17ABDEA)
	 */
	stopPlaybackRecorded(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::SWITCH_TRAIN_TRACK
	 *
	 * Hash: 0xFD813BB7DB977F20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD813BB7DB977F20)
	 */
	switchTrainTrack(trackId: integer, state: boolean): void;

	/**
	 * Native: VEHICLE::TOGGLE_VEHICLE_MOD
	 *
	 * Hash: 0x2A1F4F37F95BAD08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A1F4F37F95BAD08)
	 */
	toggleMod(vehicle: Handle, modType: integer, toggle: boolean): void;

	/**
	 * Native: VEHICLE::TRACK_VEHICLE_VISIBILITY
	 *
	 * Hash: 0x64473AEFDCF47DCA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x64473AEFDCF47DCA)
	 */
	trackVisibility(vehicle: Handle): void;

	/**
	 * Native: VEHICLE::_TRANSFORM_SUBMARINE_TO_VEHICLE
	 *
	 * Hash: 0x2A69FFD1B42BFF9E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A69FFD1B42BFF9E)
	 */
	transformSubmarineTo(vehicle: Handle, noAnimation: boolean): void;

	/**
	 * Native: VEHICLE::_TRANSFORM_VEHICLE_TO_SUBMARINE
	 *
	 * Hash: 0xBE4C854FFDB6EEBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE4C854FFDB6EEBE)
	 */
	transformToSubmarine(vehicle: Handle, noAnimation: boolean): void;

	/**
	 * Native: VEHICLE::UNPAUSE_PLAYBACK_RECORDED_VEHICLE
	 *
	 * Hash: 0x8879EE09268305D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8879EE09268305D5)
	 */
	unpausePlaybackRecorded(vehicle: Handle): void;

	unk: GameVehicleUnk;
}

interface GameVehicleMp extends GameVehicle {
	defaultEngineBehaviour: boolean;
	repairOnExtraToggle: boolean;

	/**
	 * Replaces a vehicle model with another for a local player while inheriting the original model's handling.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Vehicle::addModelOverride)
	 */
	addModelOverride(model: string, replaceToModel: string): void;

	/**
	 * Clears all overrides set for vehicle models.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Vehicle::clearModelOverrides)
	 */
	clearModelOverrides(): void;

	/**
	 * Clears an override set for the specified model.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Vehicle::removeModelOverride)
	 */
	removeModelOverride(model: string): void;

	/**
	 * Toggles experimental vehicle attachment synchronisation.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Vehicle::setExperimentalAttachmentSyncEnabled)
	 */
	setExperimentalAttachmentSyncEnabled(enabled: boolean): void;

	/**
	 * Toggles experimental vehicle horn synchronisation.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Vehicle::setExperimentalHornSyncEnabled)
	 */
	setExperimentalHornSyncEnabled(enabled: boolean): void;
}
