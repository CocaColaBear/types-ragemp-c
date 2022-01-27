/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameCutsceneLegacy {
	/**
	 * Native: CUTSCENE::DOES_CUTSCENE_ENTITY_EXIST
	 *
	 * Hash: 0x499EF20C5DB25C59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x499EF20C5DB25C59)
	 */
	doesCutsceneEntityExist(cutsceneEntName: string, modelHash: integer): boolean;

	/**
	 * Native: CUTSCENE::GET_ENTITY_INDEX_OF_CUTSCENE_ENTITY
	 *
	 * Hash: 0x0A2E9FDB9A8C62F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A2E9FDB9A8C62F6)
	 */
	getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: integer): Handle;

	/**
	 * Native: CUTSCENE::HAS_THIS_CUTSCENE_LOADED
	 *
	 * Hash: 0x228D3D94F8A11C3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x228D3D94F8A11C3C)
	 */
	hasThisCutsceneLoaded(cutsceneName: string): boolean;

	/**
	 * Native: CUTSCENE::REGISTER_ENTITY_FOR_CUTSCENE
	 *
	 * Hash: 0xE40C1C56DF95C2E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE40C1C56DF95C2E8)
	 */
	registerEntityForCutscene(
		cutscenePed: Handle,
		cutsceneEntName: string,
		p2: integer,
		modelHash: integer,
		p4: integer
	): void;

	/**
	 * Native: CUTSCENE::REQUEST_CUTSCENE
	 *
	 * Hash: 0x7A86743F475D9E09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A86743F475D9E09)
	 */
	requestCutscene(cutsceneName: string, flags: integer): void;

	/**
	 * Native: CUTSCENE::REQUEST_CUTSCENE_WITH_PLAYBACK_LIST
	 *
	 * Hash: 0xC23DE0E91C30B58C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC23DE0E91C30B58C)
	 */
	requestCutscene2(cutsceneName: string, playbackFlags: integer, flags: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_FADE_VALUES
	 *
	 * Hash: 0x8093F23ABACCC7D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8093F23ABACCC7D4)
	 */
	setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_ORIGIN
	 *
	 * Hash: 0xB812B3FD1C01CF27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB812B3FD1C01CF27)
	 */
	setCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_PED_COMPONENT_VARIATION
	 *
	 * Hash: 0xBA01E7B6DEEFBBC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA01E7B6DEEFBBC9)
	 */
	setCutscenePedComponentVariation(
		cutsceneEntName: string,
		p1: integer,
		p2: integer,
		p3: integer,
		modelHash: integer
	): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_PED_PROP_VARIATION
	 *
	 * Hash: 0x0546524ADE2E9723 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0546524ADE2E9723)
	 */
	setCutscenePedPropVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_TRIGGER_AREA
	 *
	 * Hash: 0x9896CE4721BE84BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9896CE4721BE84BA)
	 */
	setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

	/**
	 * Native: CUTSCENE::START_CUTSCENE
	 *
	 * Hash: 0x186D5CB5E7B0FF7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x186D5CB5E7B0FF7B)
	 */
	startCutscene(flags: integer): void;

	/**
	 * Native: CUTSCENE::START_CUTSCENE_AT_COORDS
	 *
	 * Hash: 0x1C9ADDA3244A1FBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C9ADDA3244A1FBF)
	 */
	startCutsceneAtCoords(x: number, y: number, z: number, flags: integer): void;

	/**
	 * Native: CUTSCENE::STOP_CUTSCENE
	 *
	 * Hash: 0xC7272775B4DC786E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7272775B4DC786E)
	 */
	stopCutscene(p0: boolean): void;
}

interface GameCutsceneUnk {
	/**
	 * Native: CUTSCENE::_0x011883F41211432A
	 *
	 * Hash: 0x011883F41211432A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x011883F41211432A)
	 */
	_0x011883F41211432A(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: integer): void;

	/**
	 * Native: CUTSCENE::_0x06EE9048FD080382
	 *
	 * Hash: 0x06EE9048FD080382 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06EE9048FD080382)
	 */
	_0x06EE9048FD080382(p0: boolean): void;

	/**
	 * Native: CUTSCENE::_0x20746F7B1032A3C7
	 *
	 * Hash: 0x20746F7B1032A3C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20746F7B1032A3C7)
	 */
	_0x20746F7B1032A3C7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

	/**
	 * Native: CUTSCENE::_0x2F137B508DE238F2
	 *
	 * Hash: 0x2F137B508DE238F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F137B508DE238F2)
	 */
	_0x2F137B508DE238F2(p0: boolean): void;

	/**
	 * Native: CUTSCENE::_0x4CEBC1ED31E8925E
	 *
	 * Hash: 0x4CEBC1ED31E8925E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CEBC1ED31E8925E)
	 */
	_0x4CEBC1ED31E8925E(cutsceneName: string): boolean;

	/**
	 * Native: CUTSCENE::_0x4FCD976DA686580C
	 *
	 * Hash: 0x4FCD976DA686580C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4FCD976DA686580C)
	 */
	_0x4FCD976DA686580C(p0: integer): integer;

	/**
	 * Native: CUTSCENE::_0x583DF8E3D4AFBD98
	 *
	 * Hash: 0x583DF8E3D4AFBD98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x583DF8E3D4AFBD98)
	 */
	_0x583DF8E3D4AFBD98(): integer;

	/**
	 * Native: CUTSCENE::_0x5EDEF0CF8C1DAB3C
	 *
	 * Hash: 0x5EDEF0CF8C1DAB3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EDEF0CF8C1DAB3C)
	 */
	_0x5EDEF0CF8C1DAB3C(): integer;

	/**
	 * Native: CUTSCENE::_0x7F96F23FA9B73327
	 *
	 * Hash: 0x7F96F23FA9B73327 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F96F23FA9B73327)
	 */
	_0x7F96F23FA9B73327(modelHash: integer): void;

	/**
	 * Native: CUTSCENE::_0x8D9DF6ECA8768583
	 *
	 * Hash: 0x8D9DF6ECA8768583 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D9DF6ECA8768583)
	 */
	_0x8D9DF6ECA8768583(threadId: integer): void;

	/**
	 * Native: CUTSCENE::_0x971D7B15BCDBEF99
	 *
	 * Hash: 0x971D7B15BCDBEF99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x971D7B15BCDBEF99)
	 */
	_0x971D7B15BCDBEF99(): integer;

	/**
	 * Native: CUTSCENE::_0xA0FE76168A189DDB
	 *
	 * Hash: 0xA0FE76168A189DDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0FE76168A189DDB)
	 */
	_0xA0FE76168A189DDB(): integer;

	/**
	 * Native: CUTSCENE::_0xC61B86C9F61EB404
	 *
	 * Hash: 0xC61B86C9F61EB404 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC61B86C9F61EB404)
	 */
	_0xC61B86C9F61EB404(toggle: boolean): void;

	/**
	 * Native: CUTSCENE::_0xE36A98D8AB3D3C66
	 *
	 * Hash: 0xE36A98D8AB3D3C66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE36A98D8AB3D3C66)
	 */
	_0xE36A98D8AB3D3C66(p0: boolean): void;
}

interface GameCutscene extends GameCutsceneLegacy {
	/**
	 * Native: CUTSCENE::CAN_REQUEST_ASSETS_FOR_CUTSCENE_ENTITY
	 *
	 * Hash: 0xB56BBBCC2955D9CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB56BBBCC2955D9CB)
	 */
	canRequestAssetsForEntity(): boolean;

	/**
	 * Native: CUTSCENE::CAN_SET_ENTER_STATE_FOR_REGISTERED_ENTITY
	 *
	 * Hash: 0x645D0B458D8E17B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x645D0B458D8E17B5)
	 */
	canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: integer): boolean;

	/**
	 * Native: CUTSCENE::CAN_SET_EXIT_STATE_FOR_CAMERA
	 *
	 * Hash: 0xB2CBCD0930DFB420 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2CBCD0930DFB420)
	 */
	canSetExitStateForCamera(p0: boolean): boolean;

	/**
	 * Native: CUTSCENE::CAN_SET_EXIT_STATE_FOR_REGISTERED_ENTITY
	 *
	 * Hash: 0x4C6A6451C79E4662 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C6A6451C79E4662)
	 */
	canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: integer): boolean;

	/**
	 * Native: CUTSCENE::DOES_CUTSCENE_ENTITY_EXIST
	 *
	 * Hash: 0x499EF20C5DB25C59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x499EF20C5DB25C59)
	 */
	doesEntityExist(cutsceneEntName: string, modelHash: integer): boolean;

	/**
	 * Native: CUTSCENE::_GET_CUT_FILE_NUM_SECTIONS
	 *
	 * Hash: 0x0ABC54DE641DC0FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0ABC54DE641DC0FC)
	 */
	getCutFileNumSections(cutsceneName: string): integer;

	/**
	 * Native: CUTSCENE::GET_ENTITY_INDEX_OF_CUTSCENE_ENTITY
	 *
	 * Hash: 0x0A2E9FDB9A8C62F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A2E9FDB9A8C62F6)
	 */
	getEntityIndexOfEntity(cutsceneEntName: string, modelHash: integer): Handle;

	/**
	 * Native: CUTSCENE::GET_ENTITY_INDEX_OF_REGISTERED_ENTITY
	 *
	 * Hash: 0xC0741A26499654CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0741A26499654CD)
	 */
	getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: integer): Handle;

	/**
	 * Native: CUTSCENE::GET_CUTSCENE_SECTION_PLAYING
	 *
	 * Hash: 0x49010A6A396553D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49010A6A396553D8)
	 */
	getSectionPlaying(): integer;

	/**
	 * Native: CUTSCENE::GET_CUTSCENE_TIME
	 *
	 * Hash: 0xE625BEABBAFFDAB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE625BEABBAFFDAB9)
	 */
	getTime(): integer;

	/**
	 * Native: CUTSCENE::GET_CUTSCENE_TOTAL_DURATION
	 *
	 * Hash: 0xEE53B14A19E480D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE53B14A19E480D4)
	 */
	getTotalDuration(): integer;

	/**
	 * Native: CUTSCENE::HAS_CUT_FILE_LOADED
	 *
	 * Hash: 0xA1C996C2A744262E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1C996C2A744262E)
	 */
	hasCutFileLoaded(cutsceneName: string): boolean;

	/**
	 * Native: CUTSCENE::_HAS_CUTSCENE_CUT_THIS_FRAME
	 *
	 * Hash: 0x708BDD8CD795B043 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x708BDD8CD795B043)
	 */
	hasCutThisFrame(): boolean;

	/**
	 * Native: CUTSCENE::HAS_CUTSCENE_FINISHED
	 *
	 * Hash: 0x7C0A893088881D57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C0A893088881D57)
	 */
	hasFinished(): boolean;

	/**
	 * Native: CUTSCENE::HAS_CUTSCENE_LOADED
	 *
	 * Hash: 0xC59F528E9AB9F339 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC59F528E9AB9F339)
	 */
	hasLoaded(): boolean;

	/**
	 * Native: CUTSCENE::HAS_THIS_CUTSCENE_LOADED
	 *
	 * Hash: 0x228D3D94F8A11C3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x228D3D94F8A11C3C)
	 */
	hasThisLoaded(cutsceneName: string): boolean;

	/**
	 * Native: CUTSCENE::IS_CUTSCENE_ACTIVE
	 *
	 * Hash: 0x991251AFC3981F84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x991251AFC3981F84)
	 */
	isActive(): boolean;

	/**
	 * Native: CUTSCENE::IS_CUTSCENE_PLAYBACK_FLAG_SET
	 *
	 * Hash: 0x71B74D2AE19338D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71B74D2AE19338D0)
	 */
	isPlaybackFlagSet(flag: integer): boolean;

	/**
	 * Native: CUTSCENE::IS_CUTSCENE_PLAYING
	 *
	 * Hash: 0xD3C2E180A40F031E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3C2E180A40F031E)
	 */
	isPlaying(): boolean;

	/**
	 * Native: CUTSCENE::REGISTER_ENTITY_FOR_CUTSCENE
	 *
	 * Hash: 0xE40C1C56DF95C2E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE40C1C56DF95C2E8)
	 */
	registerEntityFor(cutscenePed: Handle, cutsceneEntName: string, p2: integer, modelHash: integer, p4: integer): void;

	/**
	 * Native: CUTSCENE::REGISTER_SYNCHRONISED_SCRIPT_SPEECH
	 *
	 * Hash: 0x2131046957F31B04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2131046957F31B04)
	 */
	registerSynchronisedScriptSpeech(): void;

	/**
	 * Native: CUTSCENE::REMOVE_CUTSCENE
	 *
	 * Hash: 0x440AF51A3462B86F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x440AF51A3462B86F)
	 */
	remove(): void;

	/**
	 * Native: CUTSCENE::REMOVE_CUT_FILE
	 *
	 * Hash: 0xD00D76A7DFC9D852 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD00D76A7DFC9D852)
	 */
	removeCutFile(cutsceneName: string): void;

	/**
	 * Native: CUTSCENE::REQUEST_CUTSCENE
	 *
	 * Hash: 0x7A86743F475D9E09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A86743F475D9E09)
	 */
	request(cutsceneName: string, flags: integer): void;

	/**
	 * Native: CUTSCENE::REQUEST_CUT_FILE
	 *
	 * Hash: 0x06A3524161C502BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06A3524161C502BA)
	 */
	requestCutFile(cutsceneName: string): void;

	/**
	 * Native: CUTSCENE::REQUEST_CUTSCENE_WITH_PLAYBACK_LIST
	 *
	 * Hash: 0xC23DE0E91C30B58C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC23DE0E91C30B58C)
	 */
	requestWithPlaybackList(cutsceneName: string, playbackFlags: integer, flags: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_CAN_BE_SKIPPED
	 *
	 * Hash: 0x41FAA8FB2ECE8720 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41FAA8FB2ECE8720)
	 */
	setCanBeSkipped(p0: boolean): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_ENTITY_STREAMING_FLAGS
	 *
	 * Hash: 0x4C61C75BEE8184C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C61C75BEE8184C2)
	 */
	setEntityStreamingFlags(cutsceneEntName: string, p1: integer, p2: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_FADE_VALUES
	 *
	 * Hash: 0x8093F23ABACCC7D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8093F23ABACCC7D4)
	 */
	setFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_ORIGIN
	 *
	 * Hash: 0xB812B3FD1C01CF27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB812B3FD1C01CF27)
	 */
	setOrigin(x: number, y: number, z: number, p3: number, p4: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_PED_COMPONENT_VARIATION
	 *
	 * Hash: 0xBA01E7B6DEEFBBC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA01E7B6DEEFBBC9)
	 */
	setPedComponentVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_PED_COMPONENT_VARIATION_FROM_PED
	 *
	 * Hash: 0x2A56C06EBEF2B0D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A56C06EBEF2B0D9)
	 */
	setPedComponentVariationFromPed(cutsceneEntName: string, ped: Handle, modelHash: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_PED_PROP_VARIATION
	 *
	 * Hash: 0x0546524ADE2E9723 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0546524ADE2E9723)
	 */
	setPedPropVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;

	/**
	 * Native: CUTSCENE::SET_CUTSCENE_TRIGGER_AREA
	 *
	 * Hash: 0x9896CE4721BE84BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9896CE4721BE84BA)
	 */
	setTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

	/**
	 * Native: CUTSCENE::START_CUTSCENE
	 *
	 * Hash: 0x186D5CB5E7B0FF7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x186D5CB5E7B0FF7B)
	 */
	start(flags: integer): void;

	/**
	 * Native: CUTSCENE::START_CUTSCENE_AT_COORDS
	 *
	 * Hash: 0x1C9ADDA3244A1FBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C9ADDA3244A1FBF)
	 */
	startAtCoords(x: number, y: number, z: number, flags: integer): void;

	/**
	 * Native: CUTSCENE::STOP_CUTSCENE
	 *
	 * Hash: 0xC7272775B4DC786E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7272775B4DC786E)
	 */
	stop(p0: boolean): void;

	/**
	 * Native: CUTSCENE::STOP_CUTSCENE_IMMEDIATELY
	 *
	 * Hash: 0xD220BDD222AC4A1E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD220BDD222AC4A1E)
	 */
	stopImmediately(): void;

	/**
	 * Native: CUTSCENE::WAS_CUTSCENE_SKIPPED
	 *
	 * Hash: 0x40C8656EDAEDD569 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40C8656EDAEDD569)
	 */
	wasSkipped(): boolean;

	unk: GameCutsceneUnk;
}

interface GameCutsceneMp extends GameCutscene {}
