/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameStreamingLegacy {
	/**
	 * Native: STREAMING::NEW_LOAD_SCENE_START_SPHERE
	 *
	 * Hash: 0xACCFB4ACF53551B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACCFB4ACF53551B0)
	 */
	newLoadSceneStartSafe(x: number, y: number, z: number, radius: number, p4: integer): boolean;

	/**
	 * Native: STREAMING::REQUEST_MENU_PED_MODEL
	 *
	 * Hash: 0xA0261AEF7ACFC51E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0261AEF7ACFC51E)
	 */
	requestModel2(model: integer): void;

	/**
	 * Native: STREAMING::SET_FOCUS_POS_AND_VEL
	 *
	 * Hash: 0xBB7454BAFF08FE25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB7454BAFF08FE25)
	 */
	setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;

	/**
	 * Native: STREAMING::SET_GAME_PAUSES_FOR_STREAMING
	 *
	 * Hash: 0x717CD6E6FAEBBEDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x717CD6E6FAEBBEDC)
	 */
	setGamePausesForStreaming(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_PLAYER_SWITCH_OUTRO
	 *
	 * Hash: 0xC208B673CE446B61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC208B673CE446B61)
	 */
	setPlayerSwitchLocation(
		cameraCoordX: number,
		cameraCoordY: number,
		cameraCoordZ: number,
		camRotationX: number,
		camRotationY: number,
		camRotationZ: number,
		camFov: number,
		camFarClip: number,
		rotationOrder: integer
	): void;

	/**
	 * Native: STREAMING::SET_STREAMING
	 *
	 * Hash: 0x6E0C692677008888 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E0C692677008888)
	 */
	setStreaming(toggle: boolean): void;

	/**
	 * Native: STREAMING::STREAMVOL_CREATE_SPHERE
	 *
	 * Hash: 0x219C7B8D53E429FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x219C7B8D53E429FD)
	 */
	setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: integer, p5: integer): integer;
}

interface GameStreamingUnk {
	/**
	 * Native: STREAMING::_0x03F1A106BDA7DD3E
	 *
	 * Hash: 0x03F1A106BDA7DD3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03F1A106BDA7DD3E)
	 */
	_0x03F1A106BDA7DD3E(): void;

	/**
	 * Native: STREAMING::_0x0811381EF5062FEC
	 *
	 * Hash: 0x0811381EF5062FEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0811381EF5062FEC)
	 */
	_0x0811381EF5062FEC(p0: Handle): void;

	/**
	 * Native: STREAMING::_0x1E9057A74FD73E23
	 *
	 * Hash: 0x1E9057A74FD73E23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E9057A74FD73E23)
	 */
	_0x1E9057A74FD73E23(): void;

	/**
	 * Native: STREAMING::_0x20C6C7E4EB082A7F
	 *
	 * Hash: 0x20C6C7E4EB082A7F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20C6C7E4EB082A7F)
	 */
	_0x20C6C7E4EB082A7F(p0: boolean): void;

	/**
	 * Native: STREAMING::_0x472397322E92A856
	 *
	 * Hash: 0x472397322E92A856 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x472397322E92A856)
	 */
	_0x472397322E92A856(): void;

	/**
	 * Native: STREAMING::_0x4E52E752C76E7E7A
	 *
	 * Hash: 0x4E52E752C76E7E7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E52E752C76E7E7A)
	 */
	_0x4E52E752C76E7E7A(p0: integer): void;

	/**
	 * Native: STREAMING::_0x5068F488DDB54DD8
	 *
	 * Hash: 0x5068F488DDB54DD8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5068F488DDB54DD8)
	 */
	_0x5068F488DDB54DD8(): integer;

	/**
	 * Native: STREAMING::_0x5F2013F8BC24EE69
	 *
	 * Hash: 0x5F2013F8BC24EE69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F2013F8BC24EE69)
	 */
	_0x5F2013F8BC24EE69(p0: integer): void;

	/**
	 * Native: STREAMING::_0x63EB2B972A218CAC
	 *
	 * Hash: 0x63EB2B972A218CAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63EB2B972A218CAC)
	 */
	_0x63EB2B972A218CAC(): void;

	/**
	 * Native: STREAMING::_0x71E7B2E657449AAD
	 *
	 * Hash: 0x71E7B2E657449AAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71E7B2E657449AAD)
	 */
	_0x71E7B2E657449AAD(): integer;

	/**
	 * Native: STREAMING::_0x933BBEEB8C61B5F4
	 *
	 * Hash: 0x933BBEEB8C61B5F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x933BBEEB8C61B5F4)
	 */
	_0x933BBEEB8C61B5F4(): boolean;

	/**
	 * Native: STREAMING::_0x95A7DABDDBB78AE7
	 *
	 * Hash: 0x95A7DABDDBB78AE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95A7DABDDBB78AE7)
	 */
	_0x95A7DABDDBB78AE7(iplName1: string, iplName2: string): void;

	/**
	 * Native: STREAMING::_0xBEB2D9A1D9A8F55A
	 *
	 * Hash: 0xBEB2D9A1D9A8F55A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBEB2D9A1D9A8F55A)
	 */
	_0xBEB2D9A1D9A8F55A(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STREAMING::_0xBED8CA5FF5E04113
	 *
	 * Hash: 0xBED8CA5FF5E04113 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBED8CA5FF5E04113)
	 */
	_0xBED8CA5FF5E04113(p0: number, p1: number, p2: number, p3: number): void;

	/**
	 * Native: STREAMING::_0xEF39EE20C537E98C
	 *
	 * Hash: 0xEF39EE20C537E98C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF39EE20C537E98C)
	 */
	_0xEF39EE20C537E98C(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: STREAMING::_0xF4A0DADB70F57FA6
	 *
	 * Hash: 0xF4A0DADB70F57FA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4A0DADB70F57FA6)
	 */
	_0xF4A0DADB70F57FA6(): void;

	/**
	 * Native: STREAMING::_0xF8155A7F03DDFC8E
	 *
	 * Hash: 0xF8155A7F03DDFC8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8155A7F03DDFC8E)
	 */
	_0xF8155A7F03DDFC8E(p0: integer): void;

	/**
	 * Native: STREAMING::_0xFB199266061F820A
	 *
	 * Hash: 0xFB199266061F820A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB199266061F820A)
	 */
	_0xFB199266061F820A(): boolean;
}

interface GameStreaming extends GameStreamingLegacy {
	/**
	 * Native: STREAMING::ADD_MODEL_TO_CREATOR_BUDGET
	 *
	 * Hash: 0x0BC3144DEB678666 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BC3144DEB678666)
	 */
	addModelToCreatorBudget(modelHash: integer): boolean;

	/**
	 * Native: STREAMING::ALLOW_PLAYER_SWITCH_ASCENT
	 *
	 * Hash: 0x8E2A065ABDAE6994 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E2A065ABDAE6994)
	 */
	allowPlayerSwitchAscent(): void;

	/**
	 * Native: STREAMING::ALLOW_PLAYER_SWITCH_DESCENT
	 *
	 * Hash: 0xAD5FDF34B81BFE79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD5FDF34B81BFE79)
	 */
	allowPlayerSwitchDescent(): void;

	/**
	 * Native: STREAMING::ALLOW_PLAYER_SWITCH_OUTRO
	 *
	 * Hash: 0x74DE2E8739086740 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74DE2E8739086740)
	 */
	allowPlayerSwitchOutro(): void;

	/**
	 * Native: STREAMING::ALLOW_PLAYER_SWITCH_PAN
	 *
	 * Hash: 0x43D1680C6D19A8E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43D1680C6D19A8E9)
	 */
	allowPlayerSwitchPan(): void;

	/**
	 * Native: STREAMING::BEGIN_SRL
	 *
	 * Hash: 0x9BADDC94EF83B823 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BADDC94EF83B823)
	 */
	beginSrl(): void;

	/**
	 * Native: STREAMING::CLEAR_FOCUS
	 *
	 * Hash: 0x31B73D1EA9F01DA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31B73D1EA9F01DA2)
	 */
	clearFocus(): void;

	/**
	 * Native: STREAMING::CLEAR_HD_AREA
	 *
	 * Hash: 0xCE58B1CFB9290813 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE58B1CFB9290813)
	 */
	clearHdArea(): void;

	/**
	 * Native: STREAMING::DISABLE_SWITCH_OUTRO_FX
	 *
	 * Hash: 0xBD605B8E0E18B3BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD605B8E0E18B3BB)
	 */
	disableSwitchOutroFx(): void;

	/**
	 * Native: STREAMING::DOES_ANIM_DICT_EXIST
	 *
	 * Hash: 0x2DA49C3B79856961 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DA49C3B79856961)
	 */
	doesAnimDictExist(animDict: string): boolean;

	/**
	 * Native: STREAMING::ENABLE_SWITCH_PAUSE_BEFORE_DESCENT
	 *
	 * Hash: 0xD4793DFF3AF2ABCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4793DFF3AF2ABCD)
	 */
	enableSwitchPauseBeforeDescent(): void;

	/**
	 * Native: STREAMING::END_SRL
	 *
	 * Hash: 0x0A41540E63C9EE17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A41540E63C9EE17)
	 */
	endSrl(): void;

	/**
	 * Native: STREAMING::_GET_GLOBAL_WATER_TYPE
	 *
	 * Hash: 0xF741BD853611592D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF741BD853611592D)
	 */
	getGlobalWaterType(): integer;

	/**
	 * Native: STREAMING::GET_IDEAL_PLAYER_SWITCH_TYPE
	 *
	 * Hash: 0xB5D7B26B45720E05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5D7B26B45720E05)
	 */
	getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): integer;

	/**
	 * Native: STREAMING::GET_LODSCALE
	 *
	 * Hash: 0x0C15B0E443B2349D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C15B0E443B2349D)
	 */
	getLodscale(): number;

	/**
	 * Native: STREAMING::GET_NUMBER_OF_STREAMING_REQUESTS
	 *
	 * Hash: 0x4060057271CEBC89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4060057271CEBC89)
	 */
	getNumberOfRequests(): integer;

	/**
	 * Native: STREAMING::GET_PLAYER_SHORT_SWITCH_STATE
	 *
	 * Hash: 0x20F898A5D9782800 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20F898A5D9782800)
	 */
	getPlayerShortSwitchState(): integer;

	/**
	 * Native: STREAMING::GET_PLAYER_SWITCH_INTERP_OUT_CURRENT_TIME
	 *
	 * Hash: 0x5B48A06DD0E792A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B48A06DD0E792A5)
	 */
	getPlayerSwitchInterpOutCurrentTime(): integer;

	/**
	 * Native: STREAMING::GET_PLAYER_SWITCH_INTERP_OUT_DURATION
	 *
	 * Hash: 0x08C2D6C52A3104BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x08C2D6C52A3104BB)
	 */
	getPlayerSwitchInterpOutDuration(): integer;

	/**
	 * Native: STREAMING::GET_PLAYER_SWITCH_JUMP_CUT_INDEX
	 *
	 * Hash: 0x78C0D93253149435 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78C0D93253149435)
	 */
	getPlayerSwitchJumpCutIndex(): integer;

	/**
	 * Native: STREAMING::GET_PLAYER_SWITCH_STATE
	 *
	 * Hash: 0x470555300D10B2A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x470555300D10B2A5)
	 */
	getPlayerSwitchState(): integer;

	/**
	 * Native: STREAMING::GET_PLAYER_SWITCH_TYPE
	 *
	 * Hash: 0xB3C94A90D9FC9E62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3C94A90D9FC9E62)
	 */
	getPlayerSwitchType(): integer;

	/**
	 * Native: STREAMING::_GET_USED_CREATOR_MODEL_MEMORY_PERCENTAGE
	 *
	 * Hash: 0x3D3D8B3BE5A83D35 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D3D8B3BE5A83D35)
	 */
	getUsedCreatorModelMemoryPercentage(): number;

	/**
	 * Native: STREAMING::HAS_ANIM_DICT_LOADED
	 *
	 * Hash: 0xD031A9162D01088C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD031A9162D01088C)
	 */
	hasAnimDictLoaded(animDict: string): boolean;

	/**
	 * Native: STREAMING::HAS_ANIM_SET_LOADED
	 *
	 * Hash: 0xC4EA073D86FB29B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4EA073D86FB29B0)
	 */
	hasAnimSetLoaded(animSet: string): boolean;

	/**
	 * Native: STREAMING::HAS_CLIP_SET_LOADED
	 *
	 * Hash: 0x318234F4F3738AF3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x318234F4F3738AF3)
	 */
	hasClipSetLoaded(clipSet: string): boolean;

	/**
	 * Native: STREAMING::HAS_COLLISION_FOR_MODEL_LOADED
	 *
	 * Hash: 0x22CCA434E368F03A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22CCA434E368F03A)
	 */
	hasCollisionForModelLoaded(model: integer): boolean;

	/**
	 * Native: STREAMING::HAS_MODEL_LOADED
	 *
	 * Hash: 0x98A4EB5D89A0C952 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98A4EB5D89A0C952)
	 */
	hasModelLoaded(model: integer): boolean;

	/**
	 * Native: STREAMING::HAS_NAMED_PTFX_ASSET_LOADED
	 *
	 * Hash: 0x8702416E512EC454 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8702416E512EC454)
	 */
	hasNamedPtfxAssetLoaded(fxName: string): boolean;

	/**
	 * Native: STREAMING::HAS_PTFX_ASSET_LOADED
	 *
	 * Hash: 0xCA7D9B86ECA7481B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA7D9B86ECA7481B)
	 */
	hasPtfxAssetLoaded(): boolean;

	/**
	 * Native: STREAMING::INIT_CREATOR_BUDGET
	 *
	 * Hash: 0xB5A4DB34FE89B88A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5A4DB34FE89B88A)
	 */
	initCreatorBudget(): void;

	/**
	 * Native: STREAMING::IS_ENTITY_FOCUS
	 *
	 * Hash: 0x2DDFF3FB9075D747 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DDFF3FB9075D747)
	 */
	isEntityFocus(entity: Handle): boolean;

	/**
	 * Native: STREAMING::IS_IPL_ACTIVE
	 *
	 * Hash: 0x88A741E44A2B3495 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88A741E44A2B3495)
	 */
	isIplActive(iplName: string): boolean;

	/**
	 * Native: STREAMING::IS_MODEL_A_PED
	 *
	 * Hash: 0x75816577FEA6DAD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75816577FEA6DAD5)
	 */
	isModelAPed(model: integer): boolean;

	/**
	 * Native: STREAMING::IS_MODEL_A_VEHICLE
	 *
	 * Hash: 0x19AAC8F07BFEC53E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19AAC8F07BFEC53E)
	 */
	isModelAVehicle(model: integer): boolean;

	/**
	 * Native: STREAMING::IS_MODEL_IN_CDIMAGE
	 *
	 * Hash: 0x35B9E0803292B641 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35B9E0803292B641)
	 */
	isModelInCdimage(model: integer): boolean;

	/**
	 * Native: STREAMING::IS_MODEL_VALID
	 *
	 * Hash: 0xC0296A2EDF545E92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0296A2EDF545E92)
	 */
	isModelValid(model: integer): boolean;

	/**
	 * Native: STREAMING::IS_NETWORK_LOADING_SCENE
	 *
	 * Hash: 0x41CA5A33160EA4AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41CA5A33160EA4AB)
	 */
	isNetworkLoadingScene(): boolean;

	/**
	 * Native: STREAMING::IS_NEW_LOAD_SCENE_ACTIVE
	 *
	 * Hash: 0xA41A05B6CB741B85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA41A05B6CB741B85)
	 */
	isNewLoadSceneActive(): boolean;

	/**
	 * Native: STREAMING::IS_NEW_LOAD_SCENE_LOADED
	 *
	 * Hash: 0x01B8247A7A8B9AD1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01B8247A7A8B9AD1)
	 */
	isNewLoadSceneLoaded(): boolean;

	/**
	 * Native: STREAMING::IS_PLAYER_SWITCH_IN_PROGRESS
	 *
	 * Hash: 0xD9D2CFFF49FAB35F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9D2CFFF49FAB35F)
	 */
	isPlayerSwitchInProgress(): boolean;

	/**
	 * Native: STREAMING::IS_SRL_LOADED
	 *
	 * Hash: 0xD0263801A4C5B0BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0263801A4C5B0BB)
	 */
	isSrlLoaded(): boolean;

	/**
	 * Native: STREAMING::IS_STREAMVOL_ACTIVE
	 *
	 * Hash: 0xBC9823AB80A3DCAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC9823AB80A3DCAC)
	 */
	isStreamvolActive(): boolean;

	/**
	 * Native: STREAMING::IS_SWITCH_READY_FOR_DESCENT
	 *
	 * Hash: 0xDFA80CB25D0A19B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFA80CB25D0A19B3)
	 */
	isSwitchReadyForDescent(): boolean;

	/**
	 * Native: STREAMING::IS_SWITCH_SKIPPING_DESCENT
	 *
	 * Hash: 0x5B74EA8CFD5E3E7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B74EA8CFD5E3E7E)
	 */
	isSwitchSkippingDescent(): boolean;

	/**
	 * Native: STREAMING::LOAD_ALL_OBJECTS_NOW
	 *
	 * Hash: 0xBD6E84632DD4CB3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD6E84632DD4CB3F)
	 */
	loadAllObjectsNow(): void;

	/**
	 * Native: STREAMING::_LOAD_GLOBAL_WATER_TYPE
	 *
	 * Hash: 0x7E3F55ED251B76D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E3F55ED251B76D3)
	 */
	loadGlobalWaterType(waterType: integer): void;

	/**
	 * Native: STREAMING::LOAD_SCENE
	 *
	 * Hash: 0x4448EB75B4904BDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4448EB75B4904BDB)
	 */
	loadScene(x: number, y: number, z: number): void;

	/**
	 * Native: STREAMING::NETWORK_UPDATE_LOAD_SCENE
	 *
	 * Hash: 0xC4582015556D1C46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4582015556D1C46)
	 */
	networkUpdateLoadScene(): boolean;

	/**
	 * Native: STREAMING::NEW_LOAD_SCENE_START
	 *
	 * Hash: 0x212A8D0D2BABFAC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x212A8D0D2BABFAC2)
	 */
	newLoadSceneStart(
		posX: number,
		posY: number,
		posZ: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		radius: number,
		p7: integer
	): boolean;

	/**
	 * Native: STREAMING::NEW_LOAD_SCENE_START_SPHERE
	 *
	 * Hash: 0xACCFB4ACF53551B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACCFB4ACF53551B0)
	 */
	newLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: integer): boolean;

	/**
	 * Native: STREAMING::NEW_LOAD_SCENE_STOP
	 *
	 * Hash: 0xC197616D221FF4A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC197616D221FF4A4)
	 */
	newLoadSceneStop(): void;

	/**
	 * Native: STREAMING::OVERRIDE_LODSCALE_THIS_FRAME
	 *
	 * Hash: 0xA76359FC80B2438E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA76359FC80B2438E)
	 */
	overrideLodscaleThisFrame(scaling: number): void;

	/**
	 * Native: STREAMING::PREFETCH_SRL
	 *
	 * Hash: 0x3D245789CE12982C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D245789CE12982C)
	 */
	prefetchSrl(srl: string): void;

	/**
	 * Native: STREAMING::REMOVE_ANIM_DICT
	 *
	 * Hash: 0xF66A602F829E2A06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF66A602F829E2A06)
	 */
	removeAnimDict(animDict: string): void;

	/**
	 * Native: STREAMING::REMOVE_ANIM_SET
	 *
	 * Hash: 0x16350528F93024B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16350528F93024B3)
	 */
	removeAnimSet(animSet: string): void;

	/**
	 * Native: STREAMING::REMOVE_CLIP_SET
	 *
	 * Hash: 0x01F73A131C18CD94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01F73A131C18CD94)
	 */
	removeClipSet(clipSet: string): void;

	/**
	 * Native: STREAMING::REMOVE_IPL
	 *
	 * Hash: 0xEE6C5AD3ECE0A82D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE6C5AD3ECE0A82D)
	 */
	removeIpl(iplName: string): void;

	/**
	 * Native: STREAMING::REMOVE_MODEL_FROM_CREATOR_BUDGET
	 *
	 * Hash: 0xF086AD9354FAC3A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF086AD9354FAC3A3)
	 */
	removeModelFromCreatorBudget(modelHash: integer): void;

	/**
	 * Native: STREAMING::REMOVE_NAMED_PTFX_ASSET
	 *
	 * Hash: 0x5F61EBBE1A00F96D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F61EBBE1A00F96D)
	 */
	removeNamedPtfxAsset(fxName: string): void;

	/**
	 * Native: STREAMING::REMOVE_PTFX_ASSET
	 *
	 * Hash: 0x88C6814073DD4A73 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88C6814073DD4A73)
	 */
	removePtfxAsset(): void;

	/**
	 * Native: STREAMING::REQUEST_ADDITIONAL_COLLISION_AT_COORD
	 *
	 * Hash: 0xC9156DC11411A9EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9156DC11411A9EA)
	 */
	requestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;

	/**
	 * Native: STREAMING::REQUEST_ANIM_DICT
	 *
	 * Hash: 0xD3BD40951412FEF6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3BD40951412FEF6)
	 */
	requestAnimDict(animDict: string): void;

	/**
	 * Native: STREAMING::REQUEST_ANIM_SET
	 *
	 * Hash: 0x6EA47DAE7FAD0EED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EA47DAE7FAD0EED)
	 */
	requestAnimSet(animSet: string): void;

	/**
	 * Native: STREAMING::REQUEST_CLIP_SET
	 *
	 * Hash: 0xD2A71E1A77418A49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2A71E1A77418A49)
	 */
	requestClipSet(clipSet: string): void;

	/**
	 * Native: STREAMING::REQUEST_COLLISION_AT_COORD
	 *
	 * Hash: 0x07503F7948F491A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07503F7948F491A7)
	 */
	requestCollisionAtCoord(x: number, y: number, z: number): void;

	/**
	 * Native: STREAMING::REQUEST_COLLISION_FOR_MODEL
	 *
	 * Hash: 0x923CB32A3B874FCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x923CB32A3B874FCB)
	 */
	requestCollisionForModel(model: integer): void;

	/**
	 * Native: STREAMING::REQUEST_IPL
	 *
	 * Hash: 0x41B4893843BBDB74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41B4893843BBDB74)
	 */
	requestIpl(iplName: string): void;

	/**
	 * Native: STREAMING::REQUEST_MENU_PED_MODEL
	 *
	 * Hash: 0xA0261AEF7ACFC51E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0261AEF7ACFC51E)
	 */
	requestMenuPedModel(model: integer): void;

	/**
	 * Native: STREAMING::REQUEST_MODEL
	 *
	 * Hash: 0x963D27A58DF860AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x963D27A58DF860AC)
	 */
	requestModel(model: integer): void;

	/**
	 * Native: STREAMING::REQUEST_MODELS_IN_ROOM
	 *
	 * Hash: 0x8A7A40100EDFEC58 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A7A40100EDFEC58)
	 */
	requestModelsInRoom(interior: Handle, roomName: string): void;

	/**
	 * Native: STREAMING::REQUEST_NAMED_PTFX_ASSET
	 *
	 * Hash: 0xB80D8756B4668AB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB80D8756B4668AB6)
	 */
	requestNamedPtfxAsset(fxName: string): void;

	/**
	 * Native: STREAMING::REQUEST_PTFX_ASSET
	 *
	 * Hash: 0x944955FB2A3935C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x944955FB2A3935C8)
	 */
	requestPtfxAsset(): void;

	/**
	 * Native: STREAMING::SET_STREAMING
	 *
	 * Hash: 0x6E0C692677008888 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E0C692677008888)
	 */
	set(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_DITCH_POLICE_MODELS
	 *
	 * Hash: 0x42CBE54462D92634 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42CBE54462D92634)
	 */
	setDitchPoliceModels(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_FOCUS_ENTITY
	 *
	 * Hash: 0x198F77705FA0931D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x198F77705FA0931D)
	 */
	setFocusEntity(entity: Handle): void;

	/**
	 * Native: STREAMING::SET_FOCUS_POS_AND_VEL
	 *
	 * Hash: 0xBB7454BAFF08FE25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB7454BAFF08FE25)
	 */
	setFocusPosAndVel(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;

	/**
	 * Native: STREAMING::SET_GAME_PAUSES_FOR_STREAMING
	 *
	 * Hash: 0x717CD6E6FAEBBEDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x717CD6E6FAEBBEDC)
	 */
	setGamePausesFor(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_HD_AREA
	 *
	 * Hash: 0xB85F26619073E775 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB85F26619073E775)
	 */
	setHdArea(x: number, y: number, z: number, radius: number): void;

	/**
	 * Native: STREAMING::SET_INTERIOR_ACTIVE
	 *
	 * Hash: 0xE37B76C387BE28ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE37B76C387BE28ED)
	 */
	setInteriorActive(interiorID: integer, toggle: boolean): void;

	/**
	 * Native: STREAMING::_SET_ISLAND_HOPPER_ENABLED
	 *
	 * Hash: 0x9A9D1BA639675CF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A9D1BA639675CF1)
	 */
	setIslandHopperEnabled(name: string, toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_MAPDATACULLBOX_ENABLED
	 *
	 * Hash: 0xAF12610C644A35C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF12610C644A35C9)
	 */
	setMapdatacullboxEnabled(name: string, toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_MODEL_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xE532F5D78798DAAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE532F5D78798DAAB)
	 */
	setModelAsNoLongerNeeded(model: integer): void;

	/**
	 * Native: STREAMING::SET_PED_POPULATION_BUDGET
	 *
	 * Hash: 0x8C95333CFC3340F3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C95333CFC3340F3)
	 */
	setPedPopulationBudget(p0: integer): void;

	/**
	 * Native: STREAMING::SET_PLAYER_SWITCH_ESTABLISHING_SHOT
	 *
	 * Hash: 0x0FDE9DBFC0A6BC65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FDE9DBFC0A6BC65)
	 */
	setPlayerSwitchEstablishingShot(name: string): void;

	/**
	 * Native: STREAMING::SET_PLAYER_SWITCH_OUTRO
	 *
	 * Hash: 0xC208B673CE446B61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC208B673CE446B61)
	 */
	setPlayerSwitchOutro(
		cameraCoordX: number,
		cameraCoordY: number,
		cameraCoordZ: number,
		camRotationX: number,
		camRotationY: number,
		camRotationZ: number,
		camFov: number,
		camFarClip: number,
		rotationOrder: integer
	): void;

	/**
	 * Native: STREAMING::SET_REDUCE_PED_MODEL_BUDGET
	 *
	 * Hash: 0x77B5F9A36BF96710 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77B5F9A36BF96710)
	 */
	setReducePedModelBudget(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_REDUCE_VEHICLE_MODEL_BUDGET
	 *
	 * Hash: 0x80C527893080CCF3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80C527893080CCF3)
	 */
	setReduceVehicleModelBudget(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_RENDER_HD_ONLY
	 *
	 * Hash: 0x40AEFD1A244741F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40AEFD1A244741F2)
	 */
	setRenderHdOnly(toggle: boolean): void;

	/**
	 * Native: STREAMING::SET_SRL_TIME
	 *
	 * Hash: 0xA74A541C6884E7B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA74A541C6884E7B8)
	 */
	setSrlTime(p0: number): void;

	/**
	 * Native: STREAMING::SET_VEHICLE_POPULATION_BUDGET
	 *
	 * Hash: 0xCB9E1EB3BE2AF4E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB9E1EB3BE2AF4E9)
	 */
	setVehiclePopulationBudget(p0: integer): void;

	/**
	 * Native: STREAMING::SHUTDOWN_CREATOR_BUDGET
	 *
	 * Hash: 0xCCE26000E9A6FAD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCE26000E9A6FAD7)
	 */
	shutdownCreatorBudget(): void;

	/**
	 * Native: STREAMING::START_PLAYER_SWITCH
	 *
	 * Hash: 0xFAA23F2CBA159D67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAA23F2CBA159D67)
	 */
	startPlayerSwitch(from: Handle, to: Handle, flags: integer, switchType: integer): void;

	/**
	 * Native: STREAMING::STOP_PLAYER_SWITCH
	 *
	 * Hash: 0x95C0A5BBDC189AA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95C0A5BBDC189AA1)
	 */
	stopPlayerSwitch(): void;

	/**
	 * Native: STREAMING::STREAMVOL_CREATE_FRUSTUM
	 *
	 * Hash: 0x1F3F018BC3AFA77C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F3F018BC3AFA77C)
	 */
	streamvolCreateFrustum(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: integer,
		p8: integer
	): integer;

	/**
	 * Native: STREAMING::STREAMVOL_CREATE_LINE
	 *
	 * Hash: 0x0AD9710CEE2F590F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AD9710CEE2F590F)
	 */
	streamvolCreateLine(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer): integer;

	/**
	 * Native: STREAMING::STREAMVOL_CREATE_SPHERE
	 *
	 * Hash: 0x219C7B8D53E429FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x219C7B8D53E429FD)
	 */
	streamvolCreateSphere(x: number, y: number, z: number, rad: number, p4: integer, p5: integer): integer;

	/**
	 * Native: STREAMING::STREAMVOL_DELETE
	 *
	 * Hash: 0x1EE7D8DF4425F053 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EE7D8DF4425F053)
	 */
	streamvolDelete(unused: integer): void;

	/**
	 * Native: STREAMING::STREAMVOL_HAS_LOADED
	 *
	 * Hash: 0x7D41E9D2D17C5B2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D41E9D2D17C5B2D)
	 */
	streamvolHasLoaded(unused: integer): boolean;

	/**
	 * Native: STREAMING::STREAMVOL_IS_VALID
	 *
	 * Hash: 0x07C313F94746702C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07C313F94746702C)
	 */
	streamvolIsValid(unused: integer): boolean;

	/**
	 * Native: STREAMING::_SWITCH_IN_PLAYER
	 *
	 * Hash: 0xD8295AF639FD9CB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8295AF639FD9CB8)
	 */
	switchInPlayer(ped: Handle): void;

	/**
	 * Native: STREAMING::_SWITCH_OUT_PLAYER
	 *
	 * Hash: 0xAAB3200ED59016BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAB3200ED59016BC)
	 */
	switchOutPlayer(ped: Handle, flags: integer, switchType: integer): void;

	unk: GameStreamingUnk;
}

interface GameStreamingMp extends GameStreaming {
	/**
	 * Forces a streamer update.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Streaming::forceStreamingUpdate)
	 */
	forceStreamingUpdate(): void;

	/**
	 * Returns all model hashes.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Streaming::getAllModelHashes)
	 */
	getAllModelHashes(type: any): any;

	/**
	 * Returns all model names.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Streaming::getAllModelNames)
	 */
	getAllModelNames(type: any): any;

	/**
	 * Returns the name of a model from its hash.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Streaming::getModelNameFromHash)
	 */
	getModelNameFromHash(hash: integer): string;
}
