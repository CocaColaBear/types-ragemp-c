/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetActiveScreenResolutionResult {
	x: integer;
	y: integer;
}

interface GetScreenCoordFromWorldCoordResult {
	screenX: number;
	screenY: number;
	result: boolean;
}

interface GetScreenResolutionResult {
	x: integer;
	y: integer;
}

interface GetScriptGfxPositionResult {
	calculatedX: number;
	calculatedY: number;
}

interface GetStatusOfLoadMissionCreatorPhotoResult {
	p0: integer;
	result: integer;
}

interface DrawTextOptions {
	font: integer;
	scale?: Array2d;
	centre?: boolean;
	color: RGBA;
	outline?: boolean;
}

interface GameGraphicsLegacy {
	/**
	 * Native: GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING
	 *
	 * Hash: 0x80338406F3475E55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80338406F3475E55)
	 */
	beginTextComponent(componentType: string): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER
	 *
	 * Hash: 0xD0837058AE2E4BEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0837058AE2E4BEE)
	 */
	callScaleformMovieFunctionFloatParams(
		scaleform: integer,
		methodName: string,
		param1: number,
		param2: number,
		param3: number,
		param4: number,
		param5: number
	): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING
	 *
	 * Hash: 0xEF662D8D57E290B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF662D8D57E290B1)
	 */
	callScaleformMovieFunctionMixedParams(
		scaleform: integer,
		methodName: string,
		floatParam1: number,
		floatParam2: number,
		floatParam3: number,
		floatParam4: number,
		floatParam5: number,
		stringParam1: string,
		stringParam2: string,
		stringParam3: string,
		stringParam4: string,
		stringParam5: string
	): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_STRING
	 *
	 * Hash: 0x51BC1ED3CC44E8F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51BC1ED3CC44E8F7)
	 */
	callScaleformMovieFunctionStringParams(
		scaleform: integer,
		methodName: string,
		param1: string,
		param2: string,
		param3: string,
		param4: string,
		param5: string
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE_3D_SOLID
	 *
	 * Hash: 0x1CE592FDC749D6F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CE592FDC749D6F5)
	 */
	drawScaleformMovie3dNonAdditive(
		scaleform: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: integer
	): void;

	/**
	 * Native: GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING
	 *
	 * Hash: 0x362E2D3FE93A9959 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x362E2D3FE93A9959)
	 */
	endTextComponent(): void;

	/**
	 * Native: GRAPHICS::_GET_ACTIVE_SCREEN_RESOLUTION
	 *
	 * Hash: 0x873C9F3104101DD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x873C9F3104101DD3)
	 */
	getScreenActiveResolution(): GetActiveScreenResolutionResult;

	/**
	 * Native: GRAPHICS::_GET_ASPECT_RATIO
	 *
	 * Hash: 0xF1307EF624A80D87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1307EF624A80D87)
	 */
	getScreenAspectRatio(b: boolean): number;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_IS_RUNNING
	 *
	 * Hash: 0x36AD3E690DA5ACEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36AD3E690DA5ACEB)
	 */
	getScreenEffectIsActive(effectName: string): boolean;

	/**
	 * Native: GRAPHICS::HAS_SCALEFORM_SCRIPT_HUD_MOVIE_LOADED
	 *
	 * Hash: 0xDF6E5987D2B4D140 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF6E5987D2B4D140)
	 */
	hasHudScaleformLoaded(hudComponent: integer): boolean;

	/**
	 * Native: GRAPHICS::HAS_SCALEFORM_MOVIE_FILENAME_LOADED
	 *
	 * Hash: 0x0C1C5D756FB5F337 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C1C5D756FB5F337)
	 */
	hasNamedScaleformMovieLoaded(scaleformName: string): boolean;

	/**
	 * Native: GRAPHICS::_IS_TV_PLAYLIST_ITEM_PLAYING
	 *
	 * Hash: 0x0AD973CA1E077B60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AD973CA1E077B60)
	 */
	loadTvChannel(videoCliphash: integer): boolean;

	/**
	 * Native: GRAPHICS::END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
	 *
	 * Hash: 0xC50AA39A577AF886 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC50AA39A577AF886)
	 */
	popScaleformMovieFunction(): integer;

	/**
	 * Native: GRAPHICS::END_SCALEFORM_MOVIE_METHOD
	 *
	 * Hash: 0xC6796A8FFA375E53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6796A8FFA375E53)
	 */
	popScaleformMovieFunctionVoid(): void;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD
	 *
	 * Hash: 0xF6E48914C7A8694E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6E48914C7A8694E)
	 */
	pushScaleformMovieFunction(scaleform: integer, methodName: string): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_SCRIPT_HUD_MOVIE_METHOD
	 *
	 * Hash: 0x98C494FD5BDFBFD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98C494FD5BDFBFD5)
	 */
	pushScaleformMovieFunctionFromHudComponent(hudComponent: integer, methodName: string): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND
	 *
	 * Hash: 0xAB58C27C2E6123C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB58C27C2E6123C6)
	 */
	pushScaleformMovieFunctionN(methodName: string): boolean;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_BOOL
	 *
	 * Hash: 0xC58424BA936EB458 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC58424BA936EB458)
	 */
	pushScaleformMovieFunctionParameterBool(value: boolean): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_FLOAT
	 *
	 * Hash: 0xD69736AAE04DB51A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD69736AAE04DB51A)
	 */
	pushScaleformMovieFunctionParameterFloat(value: number): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_INT
	 *
	 * Hash: 0xC3D0841A0CC546A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3D0841A0CC546A6)
	 */
	pushScaleformMovieFunctionParameterInt(value: integer): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
	 *
	 * Hash: 0xBA7148484BD90365 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA7148484BD90365)
	 */
	pushScaleformMovieFunctionParameterString(string: string): void;

	/**
	 * Native: GRAPHICS::REQUEST_SCALEFORM_SCRIPT_HUD_MOVIE
	 *
	 * Hash: 0x9304881D6F6537EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9304881D6F6537EA)
	 */
	requestHudScaleform(hudComponent: integer): void;

	/**
	 * Native: GRAPHICS::_REQUEST_SCALEFORM_MOVIE_INTERACTIVE
	 *
	 * Hash: 0xBD06C611BB9048C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD06C611BB9048C2)
	 */
	requestScaleformMovie3(scaleformName: string): integer;

	/**
	 * Native: GRAPHICS::SET_ARTIFICIAL_LIGHTS_STATE
	 *
	 * Hash: 0x1268615ACE24D504 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1268615ACE24D504)
	 */
	setBlackout(state: boolean): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER
	 *
	 * Hash: 0x80ECBC0C856D3B0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80ECBC0C856D3B0B)
	 */
	setFarShadowsSuppressed(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::TOGGLE_PAUSED_RENDERPHASES
	 *
	 * Hash: 0xDFC252D8A3E15AB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFC252D8A3E15AB7)
	 */
	setFrozenRenderingDisabled(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x5F6DF3D92271E8A1
	 *
	 * Hash: 0x5F6DF3D92271E8A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F6DF3D92271E8A1)
	 */
	setParticleFxBloodScale(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST
	 *
	 * Hash: 0xDCB194B85EF7B541 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCB194B85EF7B541)
	 */
	setParticleFxLoopedRange(ptfxHandle: integer, range: number): void;

	/**
	 * Native: GRAPHICS::USE_PARTICLE_FX_ASSET
	 *
	 * Hash: 0x6C38AF3693A69A91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C38AF3693A69A91)
	 */
	setPtfxAssetNextCall(name: string): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_OVERRIDE
	 *
	 * Hash: 0xEA1E2D93F6F75ED9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA1E2D93F6F75ED9)
	 */
	setPtfxAssetOldToNew(oldAsset: string, newAsset: string): void;

	/**
	 * Native: GRAPHICS::SET_SCRIPT_GFX_ALIGN
	 *
	 * Hash: 0xB8A850F20A067EB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8A850F20A067EB6)
	 */
	setScreenDrawPosition(horizontalAlign: integer, verticalAlign: integer): void;

	/**
	 * Native: GRAPHICS::GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING
	 *
	 * Hash: 0xE1E258829A885245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1E258829A885245)
	 */
	sittingTv(methodReturn: integer): string;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY
	 *
	 * Hash: 0x6F60E89A7B64EE1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F60E89A7B64EE1D)
	 */
	startParticleFxLoopedOnEntity2(
		effectName: string,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p12: integer,
		p13: integer,
		p14: integer,
		p15: integer
	): integer;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
	 *
	 * Hash: 0xDDE23F30CC5A0F03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDE23F30CC5A0F03)
	 */
	startParticleFxLoopedOnEntityBone2(
		effectName: string,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: integer,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p13: integer,
		p14: integer,
		p15: integer,
		p16: integer
	): integer;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD
	 *
	 * Hash: 0xF56B8137DF10135D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF56B8137DF10135D)
	 */
	startParticleFxNonLoopedAtCoord2(
		effectName: string,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p11: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY
	 *
	 * Hash: 0xC95EB1DB6E92113D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC95EB1DB6E92113D)
	 */
	startParticleFxNonLoopedOnEntity2(
		effectName: string,
		entity: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
	 *
	 * Hash: 0xA41B6A43642AC2CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA41B6A43642AC2CF)
	 */
	startParticleFxNonLoopedOnPedBone2(
		effectName: string,
		ped: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: integer,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_PLAY
	 *
	 * Hash: 0x2206BF9A37B7F724 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2206BF9A37B7F724)
	 */
	startScreenEffect(effectName: string, duration: integer, looped: boolean): void;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_STOP_ALL
	 *
	 * Hash: 0xB4EDDC19532BFB85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4EDDC19532BFB85)
	 */
	stopAllScreenEffects(): void;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_STOP
	 *
	 * Hash: 0x068E835A1D0DC0E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x068E835A1D0DC0E3)
	 */
	stopScreenEffect(effectName: string): void;

	/**
	 * Native: GRAPHICS::TRIGGER_SCREENBLUR_FADE_OUT
	 *
	 * Hash: 0xEFACC8AEF94430D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFACC8AEF94430D5)
	 */
	transitionFromBlurred(transitionTime: number): boolean;

	/**
	 * Native: GRAPHICS::TRIGGER_SCREENBLUR_FADE_IN
	 *
	 * Hash: 0xA328A24AAA6B7FDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA328A24AAA6B7FDC)
	 */
	transitionToBlurred(transitionTime: number): boolean;
}

interface GameGraphicsUnk {
	/**
	 * Native: GRAPHICS::_0x0218BA067D249DEA
	 *
	 * Hash: 0x0218BA067D249DEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0218BA067D249DEA)
	 */
	_0x0218BA067D249DEA(): void;

	/**
	 * Native: GRAPHICS::_0x02369D5C8A51FDCF
	 *
	 * Hash: 0x02369D5C8A51FDCF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02369D5C8A51FDCF)
	 */
	_0x02369D5C8A51FDCF(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x03300B57FCAC6DDB
	 *
	 * Hash: 0x03300B57FCAC6DDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03300B57FCAC6DDB)
	 */
	_0x03300B57FCAC6DDB(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0x0AE73D8DF3A762B2
	 *
	 * Hash: 0x0AE73D8DF3A762B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AE73D8DF3A762B2)
	 */
	_0x0AE73D8DF3A762B2(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0x0E4299C549F0D1F1
	 *
	 * Hash: 0x0E4299C549F0D1F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E4299C549F0D1F1)
	 */
	_0x0E4299C549F0D1F1(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x108BE26959A9D9BB
	 *
	 * Hash: 0x108BE26959A9D9BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x108BE26959A9D9BB)
	 */
	_0x108BE26959A9D9BB(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x14FC5833464340A8
	 *
	 * Hash: 0x14FC5833464340A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14FC5833464340A8)
	 */
	_0x14FC5833464340A8(): void;

	/**
	 * Native: GRAPHICS::_0x1612C45F9E3E0D44
	 *
	 * Hash: 0x1612C45F9E3E0D44 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1612C45F9E3E0D44)
	 */
	_0x1612C45F9E3E0D44(): void;

	/**
	 * Native: GRAPHICS::_0x1BBC135A4D25EDDE
	 *
	 * Hash: 0x1BBC135A4D25EDDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BBC135A4D25EDDE)
	 */
	_0x1BBC135A4D25EDDE(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0x1CBA05AE7BD7EE05
	 *
	 * Hash: 0x1CBA05AE7BD7EE05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CBA05AE7BD7EE05)
	 */
	_0x1CBA05AE7BD7EE05(p0: number): void;

	/**
	 * Native: GRAPHICS::_0x259BA6D4E6F808F1
	 *
	 * Hash: 0x259BA6D4E6F808F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x259BA6D4E6F808F1)
	 */
	_0x259BA6D4E6F808F1(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x25FC3E33A31AD0C9
	 *
	 * Hash: 0x25FC3E33A31AD0C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25FC3E33A31AD0C9)
	 */
	_0x25FC3E33A31AD0C9(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0x27CFB1B1E078CB2D
	 *
	 * Hash: 0x27CFB1B1E078CB2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27CFB1B1E078CB2D)
	 */
	_0x27CFB1B1E078CB2D(): void;

	/**
	 * Native: GRAPHICS::_0x27FEB5254759CDE3
	 *
	 * Hash: 0x27FEB5254759CDE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27FEB5254759CDE3)
	 */
	_0x27FEB5254759CDE3(textureDict: string, p1: boolean): boolean;

	/**
	 * Native: GRAPHICS::_0x2A251AA48B2B46DB
	 *
	 * Hash: 0x2A251AA48B2B46DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A251AA48B2B46DB)
	 */
	_0x2A251AA48B2B46DB(): void;

	/**
	 * Native: GRAPHICS::_0x2A893980E96B659A
	 *
	 * Hash: 0x2A893980E96B659A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A893980E96B659A)
	 */
	_0x2A893980E96B659A(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_0x2B40A97646381508
	 *
	 * Hash: 0x2B40A97646381508 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B40A97646381508)
	 */
	_0x2B40A97646381508(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x2C42340F916C5930
	 *
	 * Hash: 0x2C42340F916C5930 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C42340F916C5930)
	 */
	_0x2C42340F916C5930(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_0x2D3B147AFAD49DE0
	 *
	 * Hash: 0x2D3B147AFAD49DE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D3B147AFAD49DE0)
	 */
	_0x2D3B147AFAD49DE0(
		textureDict: string,
		textureName: string,
		x: number,
		y: number,
		width: number,
		height: number,
		p6: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		p11: integer
	): void;

	/**
	 * Native: GRAPHICS::_0x2FCB133CA50A49EB
	 *
	 * Hash: 0x2FCB133CA50A49EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FCB133CA50A49EB)
	 */
	_0x2FCB133CA50A49EB(val: integer): boolean;

	/**
	 * Native: GRAPHICS::_0x30432A0118736E00
	 *
	 * Hash: 0x30432A0118736E00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30432A0118736E00)
	 */
	_0x30432A0118736E00(): integer;

	/**
	 * Native: GRAPHICS::_0x32F34FF7F617643B
	 *
	 * Hash: 0x32F34FF7F617643B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32F34FF7F617643B)
	 */
	_0x32F34FF7F617643B(p0: integer, p1: integer): void;

	/**
	 * Native: GRAPHICS::_0x346EF3ECAAAB149E
	 *
	 * Hash: 0x346EF3ECAAAB149E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x346EF3ECAAAB149E)
	 */
	_0x346EF3ECAAAB149E(): void;

	/**
	 * Native: GRAPHICS::_0x36F6626459D91457
	 *
	 * Hash: 0x36F6626459D91457 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36F6626459D91457)
	 */
	_0x36F6626459D91457(p0: number): void;

	/**
	 * Native: GRAPHICS::_0x393BD2275CEB7793
	 *
	 * Hash: 0x393BD2275CEB7793 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x393BD2275CEB7793)
	 */
	_0x393BD2275CEB7793(): integer;

	/**
	 * Native: GRAPHICS::_0x3C788E7F6438754D
	 *
	 * Hash: 0x3C788E7F6438754D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C788E7F6438754D)
	 */
	_0x3C788E7F6438754D(checkpoint: integer, posX: number, posY: number, posZ: number): void;

	/**
	 * Native: GRAPHICS::_0x43FA7CBE20DAB219
	 *
	 * Hash: 0x43FA7CBE20DAB219 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43FA7CBE20DAB219)
	 */
	_0x43FA7CBE20DAB219(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x46D1A61A21F566FC
	 *
	 * Hash: 0x46D1A61A21F566FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46D1A61A21F566FC)
	 */
	_0x46D1A61A21F566FC(p0: number): void;

	/**
	 * Native: GRAPHICS::_0x4AF92ACD3141D96C
	 *
	 * Hash: 0x4AF92ACD3141D96C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AF92ACD3141D96C)
	 */
	_0x4AF92ACD3141D96C(): void;

	/**
	 * Native: GRAPHICS::_0x54E22EA2C1956A8D
	 *
	 * Hash: 0x54E22EA2C1956A8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54E22EA2C1956A8D)
	 */
	_0x54E22EA2C1956A8D(p0: number): void;

	/**
	 * Native: GRAPHICS::_0x5B0316762AFD4A64
	 *
	 * Hash: 0x5B0316762AFD4A64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B0316762AFD4A64)
	 */
	_0x5B0316762AFD4A64(): integer;

	/**
	 * Native: GRAPHICS::_0x5DBF05DB5926D089
	 *
	 * Hash: 0x5DBF05DB5926D089 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DBF05DB5926D089)
	 */
	_0x5DBF05DB5926D089(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x5DEBD9C4DC995692
	 *
	 * Hash: 0x5DEBD9C4DC995692 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DEBD9C4DC995692)
	 */
	_0x5DEBD9C4DC995692(): void;

	/**
	 * Native: GRAPHICS::_0x5F6DF3D92271E8A1
	 *
	 * Hash: 0x5F6DF3D92271E8A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F6DF3D92271E8A1)
	 */
	_0x5F6DF3D92271E8A1(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x615D3925E87A3B26
	 *
	 * Hash: 0x615D3925E87A3B26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x615D3925E87A3B26)
	 */
	_0x615D3925E87A3B26(checkpoint: integer): void;

	/**
	 * Native: GRAPHICS::_0x61F95E5BB3E0A8C6
	 *
	 * Hash: 0x61F95E5BB3E0A8C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61F95E5BB3E0A8C6)
	 */
	_0x61F95E5BB3E0A8C6(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x649C97D52332341A
	 *
	 * Hash: 0x649C97D52332341A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x649C97D52332341A)
	 */
	_0x649C97D52332341A(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x6A51F78772175A51
	 *
	 * Hash: 0x6A51F78772175A51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A51F78772175A51)
	 */
	_0x6A51F78772175A51(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x759650634F07B6B4
	 *
	 * Hash: 0x759650634F07B6B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x759650634F07B6B4)
	 */
	_0x759650634F07B6B4(p0: integer): boolean;

	/**
	 * Native: GRAPHICS::_0x7A42B2E236E71415
	 *
	 * Hash: 0x7A42B2E236E71415 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A42B2E236E71415)
	 */
	_0x7A42B2E236E71415(): void;

	/**
	 * Native: GRAPHICS::_0x7AC24EAB6D74118D
	 *
	 * Hash: 0x7AC24EAB6D74118D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AC24EAB6D74118D)
	 */
	_0x7AC24EAB6D74118D(p0: boolean): boolean;

	/**
	 * Native: GRAPHICS::_0x7FA5D82B8F58EC06
	 *
	 * Hash: 0x7FA5D82B8F58EC06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FA5D82B8F58EC06)
	 */
	_0x7FA5D82B8F58EC06(): integer;

	/**
	 * Native: GRAPHICS::_0x814AF7DCAACC597B
	 *
	 * Hash: 0x814AF7DCAACC597B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x814AF7DCAACC597B)
	 */
	_0x814AF7DCAACC597B(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x82ACC484FFA3B05F
	 *
	 * Hash: 0x82ACC484FFA3B05F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82ACC484FFA3B05F)
	 */
	_0x82ACC484FFA3B05F(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_0x851CD923176EBA7C
	 *
	 * Hash: 0x851CD923176EBA7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x851CD923176EBA7C)
	 */
	_0x851CD923176EBA7C(): void;

	/**
	 * Native: GRAPHICS::_0x86255B1FC929E33E
	 *
	 * Hash: 0x86255B1FC929E33E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x86255B1FC929E33E)
	 */
	_0x86255B1FC929E33E(val: integer): boolean;

	/**
	 * Native: GRAPHICS::_0x8CDE909A0370BB3A
	 *
	 * Hash: 0x8CDE909A0370BB3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8CDE909A0370BB3A)
	 */
	_0x8CDE909A0370BB3A(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0x908311265D42A820
	 *
	 * Hash: 0x908311265D42A820 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x908311265D42A820)
	 */
	_0x908311265D42A820(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x949F397A288B28B3
	 *
	 * Hash: 0x949F397A288B28B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x949F397A288B28B3)
	 */
	_0x949F397A288B28B3(p0: number): void;

	/**
	 * Native: GRAPHICS::_0x9641588DAB93B4B5
	 *
	 * Hash: 0x9641588DAB93B4B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9641588DAB93B4B5)
	 */
	_0x9641588DAB93B4B5(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0x98C4FE6EC34154CA
	 *
	 * Hash: 0x98C4FE6EC34154CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98C4FE6EC34154CA)
	 */
	_0x98C4FE6EC34154CA(presetName: string, ped: Handle, p2: integer, posX: number, posY: number, posZ: number): boolean;

	/**
	 * Native: GRAPHICS::_0x98D18905BF723B99
	 *
	 * Hash: 0x98D18905BF723B99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98D18905BF723B99)
	 */
	_0x98D18905BF723B99(): integer;

	/**
	 * Native: GRAPHICS::_0x98EDF76A7271E4F2
	 *
	 * Hash: 0x98EDF76A7271E4F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98EDF76A7271E4F2)
	 */
	_0x98EDF76A7271E4F2(): void;

	/**
	 * Native: GRAPHICS::_0x9B079E5221D984D3
	 *
	 * Hash: 0x9B079E5221D984D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B079E5221D984D3)
	 */
	_0x9B079E5221D984D3(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0xA46B73FAA3460AE1
	 *
	 * Hash: 0xA46B73FAA3460AE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA46B73FAA3460AE1)
	 */
	_0xA46B73FAA3460AE1(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0xAAE9BE70EC7C69AB
	 *
	 * Hash: 0xAAE9BE70EC7C69AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAE9BE70EC7C69AB)
	 */
	_0xAAE9BE70EC7C69AB(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer
	): void;

	/**
	 * Native: GRAPHICS::_0xADD6627C4D325458
	 *
	 * Hash: 0xADD6627C4D325458 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADD6627C4D325458)
	 */
	_0xADD6627C4D325458(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0xAE51BC858F32BA66
	 *
	 * Hash: 0xAE51BC858F32BA66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE51BC858F32BA66)
	 */
	_0xAE51BC858F32BA66(p0: integer, p1: number, p2: number, p3: number, p4: number): void;

	/**
	 * Native: GRAPHICS::_0xB2EBE8CBC58B90E9
	 *
	 * Hash: 0xB2EBE8CBC58B90E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2EBE8CBC58B90E9)
	 */
	_0xB2EBE8CBC58B90E9(): integer;

	/**
	 * Native: GRAPHICS::_0xB3C641F3630BF6DA
	 *
	 * Hash: 0xB3C641F3630BF6DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3C641F3630BF6DA)
	 */
	_0xB3C641F3630BF6DA(p0: number): void;

	/**
	 * Native: GRAPHICS::_0xB569F41F3E7E83A4
	 *
	 * Hash: 0xB569F41F3E7E83A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB569F41F3E7E83A4)
	 */
	_0xB569F41F3E7E83A4(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0xBA0127DA25FD54C9
	 *
	 * Hash: 0xBA0127DA25FD54C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA0127DA25FD54C9)
	 */
	_0xBA0127DA25FD54C9(p0: integer, p1: integer): void;

	/**
	 * Native: GRAPHICS::_0xBA3D194057C79A7B
	 *
	 * Hash: 0xBA3D194057C79A7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA3D194057C79A7B)
	 */
	_0xBA3D194057C79A7B(p0: string): void;

	/**
	 * Native: GRAPHICS::_0xBB90E12CAC1DAB25
	 *
	 * Hash: 0xBB90E12CAC1DAB25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB90E12CAC1DAB25)
	 */
	_0xBB90E12CAC1DAB25(p0: number): void;

	/**
	 * Native: GRAPHICS::_0xBCEDB009461DA156
	 *
	 * Hash: 0xBCEDB009461DA156 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCEDB009461DA156)
	 */
	_0xBCEDB009461DA156(): integer;

	/**
	 * Native: GRAPHICS::_0xBE197EAA669238F4
	 *
	 * Hash: 0xBE197EAA669238F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE197EAA669238F4)
	 */
	_0xBE197EAA669238F4(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: GRAPHICS::_0xC0416B061F2B7E5E
	 *
	 * Hash: 0xC0416B061F2B7E5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0416B061F2B7E5E)
	 */
	_0xC0416B061F2B7E5E(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0xC35A6D07C93802B2
	 *
	 * Hash: 0xC35A6D07C93802B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC35A6D07C93802B2)
	 */
	_0xC35A6D07C93802B2(): void;

	/**
	 * Native: GRAPHICS::_0xC5C8F970D4EDFF71
	 *
	 * Hash: 0xC5C8F970D4EDFF71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5C8F970D4EDFF71)
	 */
	_0xC5C8F970D4EDFF71(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0xCA465D9CC0D231BA
	 *
	 * Hash: 0xCA465D9CC0D231BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA465D9CC0D231BA)
	 */
	_0xCA465D9CC0D231BA(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0xCA4AE345A153D573
	 *
	 * Hash: 0xCA4AE345A153D573 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA4AE345A153D573)
	 */
	_0xCA4AE345A153D573(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0xCB82A0BF0E3E3265
	 *
	 * Hash: 0xCB82A0BF0E3E3265 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB82A0BF0E3E3265)
	 */
	_0xCB82A0BF0E3E3265(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_0xCFD16F0DB5A3535C
	 *
	 * Hash: 0xCFD16F0DB5A3535C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFD16F0DB5A3535C)
	 */
	_0xCFD16F0DB5A3535C(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_0xD1C55B110E4DF534
	 *
	 * Hash: 0xD1C55B110E4DF534 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1C55B110E4DF534)
	 */
	_0xD1C55B110E4DF534(p0: integer): void;

	/**
	 * Native: GRAPHICS::_0xD1C7CB175E012964
	 *
	 * Hash: 0xD1C7CB175E012964 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1C7CB175E012964)
	 */
	_0xD1C7CB175E012964(scaleformHandle: integer): boolean;

	/**
	 * Native: GRAPHICS::_0xD9454B5752C857DC
	 *
	 * Hash: 0xD9454B5752C857DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9454B5752C857DC)
	 */
	_0xD9454B5752C857DC(): void;

	/**
	 * Native: GRAPHICS::_0xDB1EA9411C8911EC
	 *
	 * Hash: 0xDB1EA9411C8911EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB1EA9411C8911EC)
	 */
	_0xDB1EA9411C8911EC(checkpoint: integer): void;

	/**
	 * Native: GRAPHICS::_0xE2892E7E55D7073A
	 *
	 * Hash: 0xE2892E7E55D7073A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2892E7E55D7073A)
	 */
	_0xE2892E7E55D7073A(p0: number): void;

	/**
	 * Native: GRAPHICS::_0xE3E2C1B4C59DBC77
	 *
	 * Hash: 0xE3E2C1B4C59DBC77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3E2C1B4C59DBC77)
	 */
	_0xE3E2C1B4C59DBC77(unk: integer): void;

	/**
	 * Native: GRAPHICS::_0xE59343E9E96529E7
	 *
	 * Hash: 0xE59343E9E96529E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE59343E9E96529E7)
	 */
	_0xE59343E9E96529E7(): number;

	/**
	 * Native: GRAPHICS::_0xE791DF1F73ED2C8B
	 *
	 * Hash: 0xE791DF1F73ED2C8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE791DF1F73ED2C8B)
	 */
	_0xE791DF1F73ED2C8B(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_0xEC72C258667BE5EA
	 *
	 * Hash: 0xEC72C258667BE5EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC72C258667BE5EA)
	 */
	_0xEC72C258667BE5EA(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_0xEF398BEEE4EF45F9
	 *
	 * Hash: 0xEF398BEEE4EF45F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF398BEEE4EF45F9)
	 */
	_0xEF398BEEE4EF45F9(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_0xEFABC7722293DA7C
	 *
	 * Hash: 0xEFABC7722293DA7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFABC7722293DA7C)
	 */
	_0xEFABC7722293DA7C(): void;

	/**
	 * Native: GRAPHICS::_0xF3F776ADA161E47D
	 *
	 * Hash: 0xF3F776ADA161E47D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3F776ADA161E47D)
	 */
	_0xF3F776ADA161E47D(p0: integer, p1: integer): void;

	/**
	 * Native: GRAPHICS::_0xF51D36185993515D
	 *
	 * Hash: 0xF51D36185993515D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF51D36185993515D)
	 */
	_0xF51D36185993515D(
		checkpoint: integer,
		posX: number,
		posY: number,
		posZ: number,
		unkX: number,
		unkY: number,
		unkZ: number
	): void;

	/**
	 * Native: GRAPHICS::_0xF78B803082D4386F
	 *
	 * Hash: 0xF78B803082D4386F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF78B803082D4386F)
	 */
	_0xF78B803082D4386F(p0: number): void;

	/**
	 * Native: GRAPHICS::_0xFCF6788FC4860CD4
	 *
	 * Hash: 0xFCF6788FC4860CD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCF6788FC4860CD4)
	 */
	_0xFCF6788FC4860CD4(checkpoint: integer): void;
}

interface GameGraphics extends GameGraphicsLegacy {
	/**
	 * Native: GRAPHICS::ADD_DECAL
	 *
	 * Hash: 0xB302244A1839BDAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB302244A1839BDAD)
	 */
	addDecal(
		decalType: integer,
		posX: number,
		posY: number,
		posZ: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		width: number,
		height: number,
		rCoef: number,
		gCoef: number,
		bCoef: number,
		opacity: number,
		timeout: number,
		p17: boolean,
		p18: boolean,
		p19: boolean
	): integer;

	/**
	 * Native: GRAPHICS::ADD_ENTITY_ICON
	 *
	 * Hash: 0x9CD43EEE12BF4DD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CD43EEE12BF4DD0)
	 */
	addEntityIcon(entity: Handle, icon: string): integer;

	/**
	 * Native: GRAPHICS::ADD_PETROL_DECAL
	 *
	 * Hash: 0x4F5212C7AD880DF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F5212C7AD880DF8)
	 */
	addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): integer;

	/**
	 * Native: GRAPHICS::ADD_PETROL_TRAIL_DECAL_INFO
	 *
	 * Hash: 0x967278682CB6967A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x967278682CB6967A)
	 */
	addPetrolTrailDecalInfo(x: number, y: number, z: number, p3: number): void;

	/**
	 * Native: GRAPHICS::ADD_TCMODIFIER_OVERRIDE
	 *
	 * Hash: 0x1A8E2C8B9CF4549C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A8E2C8B9CF4549C)
	 */
	addTcmodifierOverride(modifierName1: string, modifierName2: string): void;

	/**
	 * Native: GRAPHICS::ADD_VEHICLE_CREW_EMBLEM
	 *
	 * Hash: 0x428BDCB9DA58DA53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x428BDCB9DA58DA53)
	 */
	addVehicleCrewEmblem(
		vehicle: Handle,
		ped: Handle,
		boneIndex: integer,
		x1: number,
		x2: number,
		x3: number,
		y1: number,
		y2: number,
		y3: number,
		z1: number,
		z2: number,
		z3: number,
		scale: number,
		p13: integer,
		alpha: integer
	): boolean;

	/**
	 * Native: GRAPHICS::_ANIMPOSTFX_GET_UNK
	 *
	 * Hash: 0xE35B38A27E8E7179 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE35B38A27E8E7179)
	 */
	animpostfxGetUnk(effectName: string): number;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_IS_RUNNING
	 *
	 * Hash: 0x36AD3E690DA5ACEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36AD3E690DA5ACEB)
	 */
	animpostfxIsRunning(effectName: string): boolean;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_PLAY
	 *
	 * Hash: 0x2206BF9A37B7F724 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2206BF9A37B7F724)
	 */
	animpostfxPlay(effectName: string, duration: integer, looped: boolean): void;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_STOP
	 *
	 * Hash: 0x068E835A1D0DC0E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x068E835A1D0DC0E3)
	 */
	animpostfxStop(effectName: string): void;

	/**
	 * Native: GRAPHICS::ANIMPOSTFX_STOP_ALL
	 *
	 * Hash: 0xB4EDDC19532BFB85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4EDDC19532BFB85)
	 */
	animpostfxStopAll(): void;

	/**
	 * Native: GRAPHICS::_ANIMPOSTFX_STOP_AND_DO_UNK
	 *
	 * Hash: 0xD2209BE128B5418C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2209BE128B5418C)
	 */
	animpostfxStopAndDoUnk(effectName: string): void;

	/**
	 * Native: GRAPHICS::ATTACH_TV_AUDIO_TO_ENTITY
	 *
	 * Hash: 0x845BAD77CC770633 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x845BAD77CC770633)
	 */
	attachTvAudioToEntity(entity: Handle): void;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD
	 *
	 * Hash: 0xF6E48914C7A8694E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6E48914C7A8694E)
	 */
	beginScaleformMovieMethod(scaleform: integer, methodName: string): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND
	 *
	 * Hash: 0xAB58C27C2E6123C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB58C27C2E6123C6)
	 */
	beginScaleformMovieMethodOnFrontend(methodName: string): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_MOVIE_METHOD_ON_FRONTEND_HEADER
	 *
	 * Hash: 0xB9449845F73F5E9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9449845F73F5E9C)
	 */
	beginScaleformMovieMethodOnFrontendHeader(methodName: string): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_SCALEFORM_SCRIPT_HUD_MOVIE_METHOD
	 *
	 * Hash: 0x98C494FD5BDFBFD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98C494FD5BDFBFD5)
	 */
	beginScaleformScriptHudMovieMethod(hudComponent: integer, methodName: string): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_TAKE_HIGH_QUALITY_PHOTO
	 *
	 * Hash: 0xA67C35C56EB1BD9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA67C35C56EB1BD9D)
	 */
	beginTakeHighQualityPhoto(): boolean;

	/**
	 * Native: GRAPHICS::BEGIN_TAKE_MISSION_CREATOR_PHOTO
	 *
	 * Hash: 0x1DD2139A9A20DCE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DD2139A9A20DCE8)
	 */
	beginTakeMissionCreatorPhoto(): integer;

	/**
	 * Native: GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING
	 *
	 * Hash: 0x80338406F3475E55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80338406F3475E55)
	 */
	beginTextCommandScaleformString(componentType: string): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD
	 *
	 * Hash: 0xFBD96D87AC96D533 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBD96D87AC96D533)
	 */
	callScaleformMovieMethod(scaleform: integer, method: string): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER
	 *
	 * Hash: 0xD0837058AE2E4BEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0837058AE2E4BEE)
	 */
	callScaleformMovieMethodWithNumber(
		scaleform: integer,
		methodName: string,
		param1: number,
		param2: number,
		param3: number,
		param4: number,
		param5: number
	): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_NUMBER_AND_STRING
	 *
	 * Hash: 0xEF662D8D57E290B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF662D8D57E290B1)
	 */
	callScaleformMovieMethodWithNumberAndString(
		scaleform: integer,
		methodName: string,
		floatParam1: number,
		floatParam2: number,
		floatParam3: number,
		floatParam4: number,
		floatParam5: number,
		stringParam1: string,
		stringParam2: string,
		stringParam3: string,
		stringParam4: string,
		stringParam5: string
	): void;

	/**
	 * Native: GRAPHICS::CALL_SCALEFORM_MOVIE_METHOD_WITH_STRING
	 *
	 * Hash: 0x51BC1ED3CC44E8F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51BC1ED3CC44E8F7)
	 */
	callScaleformMovieMethodWithString(
		scaleform: integer,
		methodName: string,
		param1: string,
		param2: string,
		param3: string,
		param4: string,
		param5: string
	): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_CLEAR_SHADOW_SAMPLE_TYPE
	 *
	 * Hash: 0x27CB772218215325 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27CB772218215325)
	 */
	cascadeShadowsClearShadowSampleType(): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER
	 *
	 * Hash: 0x80ECBC0C856D3B0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80ECBC0C856D3B0B)
	 */
	cascadeShadowsEnableEntityTracker(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_INIT_SESSION
	 *
	 * Hash: 0x03FC694AE06C5A20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03FC694AE06C5A20)
	 */
	cascadeShadowsInitSession(): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_AIRCRAFT_MODE
	 *
	 * Hash: 0x6DDBF9DFFC4AC080 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DDBF9DFFC4AC080)
	 */
	cascadeShadowsSetAircraftMode(p0: boolean): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_CASCADE_BOUNDS
	 *
	 * Hash: 0xD2936CAB8B58FCBD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2936CAB8B58FCBD)
	 */
	cascadeShadowsSetCascadeBounds(
		p0: integer,
		p1: boolean,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: number
	): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_CASCADE_BOUNDS_SCALE
	 *
	 * Hash: 0x5F0F3F56635809EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F0F3F56635809EF)
	 */
	cascadeShadowsSetCascadeBoundsScale(p0: number): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_MODE
	 *
	 * Hash: 0xD39D13C9FEBF0511 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD39D13C9FEBF0511)
	 */
	cascadeShadowsSetDynamicDepthMode(p0: boolean): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_DYNAMIC_DEPTH_VALUE
	 *
	 * Hash: 0x02AC28F3A01FA04A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02AC28F3A01FA04A)
	 */
	cascadeShadowsSetDynamicDepthValue(p0: number): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_ENTITY_TRACKER_SCALE
	 *
	 * Hash: 0x5E9DAF5A20F15908 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E9DAF5A20F15908)
	 */
	cascadeShadowsSetEntityTrackerScale(p0: number): void;

	/**
	 * Native: GRAPHICS::CASCADE_SHADOWS_SET_SHADOW_SAMPLE_TYPE
	 *
	 * Hash: 0xB11D94BC55F41932 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB11D94BC55F41932)
	 */
	cascadeShadowsSetShadowSampleType(type: string): void;

	/**
	 * Native: GRAPHICS::CLEAR_DRAW_ORIGIN
	 *
	 * Hash: 0xFF0B610F6BE0D7AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF0B610F6BE0D7AF)
	 */
	clearDrawOrigin(): void;

	/**
	 * Native: GRAPHICS::_CLEAR_EXTRA_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x92CCC17A7A2285DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92CCC17A7A2285DA)
	 */
	clearExtraTimecycleModifier(): void;

	/**
	 * Native: GRAPHICS::CLEAR_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x0F07E7745A236711 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F07E7745A236711)
	 */
	clearTimecycleModifier(): void;

	/**
	 * Native: GRAPHICS::CLEAR_TV_CHANNEL_PLAYLIST
	 *
	 * Hash: 0xBEB3D46BB7F043C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBEB3D46BB7F043C0)
	 */
	clearTvChannelPlaylist(tvChannel: integer): void;

	/**
	 * Native: GRAPHICS::CREATE_CHECKPOINT
	 *
	 * Hash: 0x0134F0835AB6BFCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0134F0835AB6BFCB)
	 */
	createCheckpoint(
		type: integer,
		posX1: number,
		posY1: number,
		posZ1: number,
		posX2: number,
		posY2: number,
		posZ2: number,
		diameter: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		reserved: integer
	): integer;

	/**
	 * Native: GRAPHICS::CREATE_TRACKED_POINT
	 *
	 * Hash: 0xE2C9439ED45DEA60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2C9439ED45DEA60)
	 */
	createTrackedPoint(): integer;

	/**
	 * Native: GRAPHICS::DELETE_CHECKPOINT
	 *
	 * Hash: 0xF5ED37F54CD4D52E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5ED37F54CD4D52E)
	 */
	deleteCheckpoint(checkpoint: integer): void;

	/**
	 * Native: GRAPHICS::DESTROY_TRACKED_POINT
	 *
	 * Hash: 0xB25DC90BAD56CA42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB25DC90BAD56CA42)
	 */
	destroyTrackedPoint(point: integer): void;

	/**
	 * Native: GRAPHICS::DISABLE_OCCLUSION_THIS_FRAME
	 *
	 * Hash: 0x3669F1B198DCAA4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3669F1B198DCAA4F)
	 */
	disableOcclusionThisFrame(): void;

	/**
	 * Native: GRAPHICS::DISABLE_SCREENBLUR_FADE
	 *
	 * Hash: 0xDE81239437E8C5A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE81239437E8C5A8)
	 */
	disableScreenblurFade(): void;

	/**
	 * Native: GRAPHICS::_DISABLE_SCRIPT_AMBIENT_EFFECTS
	 *
	 * Hash: 0xEFD97FF47B745B8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFD97FF47B745B8D)
	 */
	disableScriptAmbientEffects(p0: integer): void;

	/**
	 * Native: GRAPHICS::DISABLE_VEHICLE_DISTANTLIGHTS
	 *
	 * Hash: 0xC9F98AC1884E73A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9F98AC1884E73A2)
	 */
	disableVehicleDistantlights(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::DOES_LATEST_BRIEF_STRING_EXIST
	 *
	 * Hash: 0x5E657EF1099EDD65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E657EF1099EDD65)
	 */
	doesLatestBriefStringExist(p0: integer): boolean;

	/**
	 * Native: GRAPHICS::DOES_PARTICLE_FX_LOOPED_EXIST
	 *
	 * Hash: 0x74AFEF0D2E1E409B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74AFEF0D2E1E409B)
	 */
	doesParticleFxLoopedExist(ptfxHandle: integer): boolean;

	/**
	 * Native: GRAPHICS::DOES_VEHICLE_HAVE_CREW_EMBLEM
	 *
	 * Hash: 0x060D935D3981A275 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x060D935D3981A275)
	 */
	doesVehicleHaveCrewEmblem(vehicle: Handle, p1: integer): boolean;

	/**
	 * Native: GRAPHICS::DONT_RENDER_IN_GAME_UI
	 *
	 * Hash: 0x22A249A53034450A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22A249A53034450A)
	 */
	dontRenderInGameUi(p0: boolean): void;

	/**
	 * Native: GRAPHICS::_DRAW_BINK_MOVIE
	 *
	 * Hash: 0x7118E83EEB9F7238 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7118E83EEB9F7238)
	 */
	drawBinkMovie(
		binkMovie: integer,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		r: integer,
		g: integer,
		b: integer,
		a: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_BOX
	 *
	 * Hash: 0xD3A9971CADAC7252 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3A9971CADAC7252)
	 */
	drawBox(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_BOX
	 *
	 * Hash: 0x083A2CA4F2E573BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x083A2CA4F2E573BD)
	 */
	drawDebugBox(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_CROSS
	 *
	 * Hash: 0x73B1189623049839 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73B1189623049839)
	 */
	drawDebugCross(
		x: number,
		y: number,
		z: number,
		size: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_LINE
	 *
	 * Hash: 0x7FDFADE676AA3CB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FDFADE676AA3CB0)
	 */
	drawDebugLine(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_LINE_WITH_TWO_COLOURS
	 *
	 * Hash: 0xD8B9A8AC5608FF94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8B9A8AC5608FF94)
	 */
	drawDebugLineWithTwoColours(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		r1: integer,
		g1: integer,
		b1: integer,
		r2: integer,
		g2: integer,
		b2: integer,
		alpha1: integer,
		alpha2: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_SPHERE
	 *
	 * Hash: 0xAAD68E1AB39DA632 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAD68E1AB39DA632)
	 */
	drawDebugSphere(
		x: number,
		y: number,
		z: number,
		radius: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_TEXT
	 *
	 * Hash: 0x3903E216620488E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3903E216620488E8)
	 */
	drawDebugText(
		text: string,
		x: number,
		y: number,
		z: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_TEXT_2D
	 *
	 * Hash: 0xA3BB2E9555C05A8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3BB2E9555C05A8F)
	 */
	drawDebugText2d(
		text: string,
		x: number,
		y: number,
		z: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_DEBUG_TEXT_2D
	 *
	 * Hash: 0xA3BB2E9555C05A8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3BB2E9555C05A8F)
	 */
	drawDebugText2D(
		text: string,
		x: number,
		y: number,
		z: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_INTERACTIVE_SPRITE
	 *
	 * Hash: 0x2BC54A8188768488 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BC54A8188768488)
	 */
	drawInteractiveSprite(
		textureDict: string,
		textureName: string,
		screenX: number,
		screenY: number,
		width: number,
		height: number,
		heading: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_LIGHT_WITH_RANGE
	 *
	 * Hash: 0xF2A1B2771A01DBD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2A1B2771A01DBD4)
	 */
	drawLightWithRange(
		posX: number,
		posY: number,
		posZ: number,
		colorR: integer,
		colorG: integer,
		colorB: integer,
		range: number,
		intensity: number
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_LIGHT_WITH_RANGE_AND_SHADOW
	 *
	 * Hash: 0xF49E9A9716A04595 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF49E9A9716A04595)
	 */
	drawLightWithRangeAndShadow(
		x: number,
		y: number,
		z: number,
		r: integer,
		g: integer,
		b: integer,
		range: number,
		intensity: number,
		shadow: number
	): void;

	/**
	 * Native: GRAPHICS::DRAW_LINE
	 *
	 * Hash: 0x6B7256074AE34680 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B7256074AE34680)
	 */
	drawLine(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_LOW_QUALITY_PHOTO_TO_PHONE
	 *
	 * Hash: 0x1072F115DAB0717E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1072F115DAB0717E)
	 */
	drawLowQualityPhotoToPhone(p0: boolean, p1: boolean): void;

	/**
	 * Native: GRAPHICS::DRAW_MARKER
	 *
	 * Hash: 0x28477EC23D892089 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28477EC23D892089)
	 */
	drawMarker(
		type: integer,
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		bobUpAndDown: boolean,
		faceCamera: boolean,
		p19: integer,
		rotate: boolean,
		textureDict: string,
		textureName: string,
		drawOnEnts: boolean
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_MARKER_2
	 *
	 * Hash: 0xE82728F0DE75D13A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE82728F0DE75D13A)
	 */
	drawMarker2(
		type: integer,
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		bobUpAndDown: boolean,
		faceCamera: boolean,
		p19: integer,
		rotate: boolean,
		textureDict: string,
		textureName: string,
		drawOnEnts: boolean,
		p24: boolean,
		p25: boolean
	): void;

	/**
	 * Native: GRAPHICS::DRAW_POLY
	 *
	 * Hash: 0xAC26716048436851 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC26716048436851)
	 */
	drawPoly(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_RECT
	 *
	 * Hash: 0x3A618A217E5154F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A618A217E5154F0)
	 */
	drawRect(
		x: number,
		y: number,
		width: number,
		height: number,
		r: integer,
		g: integer,
		b: integer,
		a: integer,
		p8: boolean
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE
	 *
	 * Hash: 0x54972ADAF0294A93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54972ADAF0294A93)
	 */
	drawScaleformMovie(
		scaleformHandle: integer,
		x: number,
		y: number,
		width: number,
		height: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		unk: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE_3D
	 *
	 * Hash: 0x87D51D72255D4E78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87D51D72255D4E78)
	 */
	drawScaleformMovie3d(
		scaleform: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE_3D
	 *
	 * Hash: 0x87D51D72255D4E78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87D51D72255D4E78)
	 */
	drawScaleformMovie3D(
		scaleform: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE_3D_SOLID
	 *
	 * Hash: 0x1CE592FDC749D6F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CE592FDC749D6F5)
	 */
	drawScaleformMovie3DSolid(
		scaleform: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p7: number,
		p8: number,
		p9: number,
		scaleX: number,
		scaleY: number,
		scaleZ: number,
		p13: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE_FULLSCREEN
	 *
	 * Hash: 0x0DF606929C105BE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0DF606929C105BE1)
	 */
	drawScaleformMovieFullscreen(
		scaleform: integer,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		unk: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SCALEFORM_MOVIE_FULLSCREEN_MASKED
	 *
	 * Hash: 0xCF537FDE4FBD4CE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF537FDE4FBD4CE5)
	 */
	drawScaleformMovieFullscreenMasked(
		scaleform1: integer,
		scaleform2: integer,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_SPHERE
	 *
	 * Hash: 0x799017F9E3B10112 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x799017F9E3B10112)
	 */
	drawSphere(
		x: number,
		y: number,
		z: number,
		radius: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: number
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SPOT_LIGHT
	 *
	 * Hash: 0xD0F64B265C8C8B33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0F64B265C8C8B33)
	 */
	drawSpotLight(
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		colorR: integer,
		colorG: integer,
		colorB: integer,
		distance: number,
		brightness: number,
		hardness: number,
		radius: number,
		falloff: number
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_SPOT_LIGHT_WITH_SHADOW
	 *
	 * Hash: 0x5BCA583A583194DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BCA583A583194DB)
	 */
	drawSpotLightWithShadow(
		posX: number,
		posY: number,
		posZ: number,
		dirX: number,
		dirY: number,
		dirZ: number,
		colorR: integer,
		colorG: integer,
		colorB: integer,
		distance: number,
		brightness: number,
		roundness: number,
		radius: number,
		falloff: number,
		shadowId: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_SPRITE
	 *
	 * Hash: 0xE7FFAE5EBF23D890 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7FFAE5EBF23D890)
	 */
	drawSprite(
		textureDict: string,
		textureName: string,
		screenX: number,
		screenY: number,
		width: number,
		height: number,
		heading: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		p11: boolean
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_SPRITE_POLY
	 *
	 * Hash: 0x29280002282F1928 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29280002282F1928)
	 */
	drawSpritePoly(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer,
		textureDict: string,
		textureName: string,
		u1: number,
		v1: number,
		w1: number,
		u2: number,
		v2: number,
		w2: number,
		u3: number,
		v3: number,
		w3: number
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_SPRITE_POLY_2
	 *
	 * Hash: 0x736D7AA1B750856B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x736D7AA1B750856B)
	 */
	drawSpritePoly2(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number,
		red1: number,
		green1: number,
		blue1: number,
		alpha1: integer,
		red2: number,
		green2: number,
		blue2: number,
		alpha2: integer,
		red3: number,
		green3: number,
		blue3: number,
		alpha3: integer,
		textureDict: string,
		textureName: string,
		u1: number,
		v1: number,
		w1: number,
		u2: number,
		v2: number,
		w2: number,
		u3: number,
		v3: number,
		w3: number
	): void;

	/**
	 * Native: GRAPHICS::_DRAW_SPRITE_UV
	 *
	 * Hash: 0x95812F9B26074726 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95812F9B26074726)
	 */
	drawSpriteUv(
		textureDict: string,
		textureName: string,
		x: number,
		y: number,
		width: number,
		height: number,
		u1: number,
		v1: number,
		u2: number,
		v2: number,
		heading: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::DRAW_TV_CHANNEL
	 *
	 * Hash: 0xFDDC2B4ED3C69DF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDDC2B4ED3C69DF0)
	 */
	drawTvChannel(
		xPos: number,
		yPos: number,
		xScale: number,
		yScale: number,
		rotation: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::ENABLE_ALIEN_BLOOD_VFX
	 *
	 * Hash: 0x9DCE1F0F78260875 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DCE1F0F78260875)
	 */
	enableAlienBloodVfx(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::ENABLE_CLOWN_BLOOD_VFX
	 *
	 * Hash: 0xD821490579791273 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD821490579791273)
	 */
	enableClownBloodVfx(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::ENABLE_MOVIE_KEYFRAME_WAIT
	 *
	 * Hash: 0x74C180030FDE4B69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74C180030FDE4B69)
	 */
	enableMovieKeyframeWait(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::ENABLE_MOVIE_SUBTITLES
	 *
	 * Hash: 0x873FA65C778AD970 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x873FA65C778AD970)
	 */
	enableMovieSubtitles(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::END_PETROL_TRAIL_DECALS
	 *
	 * Hash: 0x0A123435A26C36CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A123435A26C36CD)
	 */
	endPetrolTrailDecals(): void;

	/**
	 * Native: GRAPHICS::END_SCALEFORM_MOVIE_METHOD
	 *
	 * Hash: 0xC6796A8FFA375E53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6796A8FFA375E53)
	 */
	endScaleformMovieMethod(): void;

	/**
	 * Native: GRAPHICS::END_SCALEFORM_MOVIE_METHOD_RETURN_VALUE
	 *
	 * Hash: 0xC50AA39A577AF886 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC50AA39A577AF886)
	 */
	endScaleformMovieMethodReturnValue(): integer;

	/**
	 * Native: GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING
	 *
	 * Hash: 0x362E2D3FE93A9959 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x362E2D3FE93A9959)
	 */
	endTextCommandScaleformString(): void;

	/**
	 * Native: GRAPHICS::_END_TEXT_COMMAND_SCALEFORM_STRING_2
	 *
	 * Hash: 0xAE4E8157D9ECF087 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE4E8157D9ECF087)
	 */
	endTextCommandScaleformString2(): void;

	/**
	 * Native: GRAPHICS::FADE_DECALS_IN_RANGE
	 *
	 * Hash: 0xD77EDADB0420E6E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD77EDADB0420E6E0)
	 */
	fadeDecalsInRange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: GRAPHICS::FADE_UP_PED_LIGHT
	 *
	 * Hash: 0xC9B18B4619F48F7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9B18B4619F48F7B)
	 */
	fadeUpPedLight(p0: number): void;

	/**
	 * Native: GRAPHICS::FORCE_RENDER_IN_GAME_UI
	 *
	 * Hash: 0xDC459CFA0CCE245B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC459CFA0CCE245B)
	 */
	forceRenderInGameUi(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO
	 *
	 * Hash: 0xD801CC02177FA3F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD801CC02177FA3F1)
	 */
	freeMemoryForHighQualityPhoto(): void;

	/**
	 * Native: GRAPHICS::FREE_MEMORY_FOR_LOW_QUALITY_PHOTO
	 *
	 * Hash: 0x6A12D88881435DCA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A12D88881435DCA)
	 */
	freeMemoryForLowQualityPhoto(): void;

	/**
	 * Native: GRAPHICS::FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO
	 *
	 * Hash: 0x0A46AF8A78DC5E0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A46AF8A78DC5E0A)
	 */
	freeMemoryForMissionCreatorPhoto(): void;

	/**
	 * Native: GRAPHICS::_GET_ACTIVE_SCREEN_RESOLUTION
	 *
	 * Hash: 0x873C9F3104101DD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x873C9F3104101DD3)
	 */
	getActiveScreenResolution(): GetActiveScreenResolutionResult;

	/**
	 * Native: GRAPHICS::_GET_ASPECT_RATIO
	 *
	 * Hash: 0xF1307EF624A80D87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1307EF624A80D87)
	 */
	getAspectRatio(b: boolean): number;

	/**
	 * Native: GRAPHICS::_GET_BINK_MOVIE_TIME
	 *
	 * Hash: 0x8E17DDD6B9D5BF29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E17DDD6B9D5BF29)
	 */
	getBinkMovieTime(binkMovie: integer): number;

	/**
	 * Native: GRAPHICS::GET_CURRENT_NUMBER_OF_CLOUD_PHOTOS
	 *
	 * Hash: 0x473151EBC762C6DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x473151EBC762C6DA)
	 */
	getCurrentNumberOfCloudPhotos(): integer;

	/**
	 * Native: GRAPHICS::GET_DECAL_WASH_LEVEL
	 *
	 * Hash: 0x323F647679A09103 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x323F647679A09103)
	 */
	getDecalWashLevel(decal: integer): number;

	/**
	 * Native: GRAPHICS::_GET_EXTRA_TIMECYCLE_MODIFIER_INDEX
	 *
	 * Hash: 0xBB0527EC6341496D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB0527EC6341496D)
	 */
	getExtraTimecycleModifierIndex(): integer;

	/**
	 * Native: GRAPHICS::GET_IS_HIDEF
	 *
	 * Hash: 0x84ED31191CC5D2C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84ED31191CC5D2C9)
	 */
	getIsHidef(): boolean;

	/**
	 * Native: GRAPHICS::GET_IS_PETROL_DECAL_IN_RANGE
	 *
	 * Hash: 0x2F09F7976C512404 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F09F7976C512404)
	 */
	getIsPetrolDecalInRange(xCoord: number, yCoord: number, zCoord: number, radius: number): boolean;

	/**
	 * Native: GRAPHICS::GET_IS_WIDESCREEN
	 *
	 * Hash: 0x30CF4BDA4FCB1905 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30CF4BDA4FCB1905)
	 */
	getIsWidescreen(): boolean;

	/**
	 * Native: GRAPHICS::GET_MAXIMUM_NUMBER_OF_CLOUD_PHOTOS
	 *
	 * Hash: 0xDC54A7AF8B3A14EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC54A7AF8B3A14EF)
	 */
	getMaximumNumberOfCloudPhotos(): integer;

	/**
	 * Native: GRAPHICS::GET_MAXIMUM_NUMBER_OF_PHOTOS
	 *
	 * Hash: 0x34D23450F028B0BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34D23450F028B0BF)
	 */
	getMaximumNumberOfPhotos(): integer;

	/**
	 * Native: GRAPHICS::GET_REQUESTINGNIGHTVISION
	 *
	 * Hash: 0x35FB78DC42B7BD21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35FB78DC42B7BD21)
	 */
	getRequestingnightvision(): boolean;

	/**
	 * Native: GRAPHICS::GET_SAFE_ZONE_SIZE
	 *
	 * Hash: 0xBAF107B6BB2C97F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAF107B6BB2C97F0)
	 */
	getSafeZoneSize(): number;

	/**
	 * Native: GRAPHICS::_GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_BOOL
	 *
	 * Hash: 0xD80A80346A45D761 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD80A80346A45D761)
	 */
	getScaleformMovieMethodReturnValueBool(methodReturn: integer): boolean;

	/**
	 * Native: GRAPHICS::GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_INT
	 *
	 * Hash: 0x2DE7EFA66B906036 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DE7EFA66B906036)
	 */
	getScaleformMovieMethodReturnValueInt(methodReturn: integer): integer;

	/**
	 * Native: GRAPHICS::GET_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_STRING
	 *
	 * Hash: 0xE1E258829A885245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1E258829A885245)
	 */
	getScaleformMovieMethodReturnValueString(methodReturn: integer): string;

	/**
	 * Native: GRAPHICS::GET_SCREENBLUR_FADE_CURRENT_TIME
	 *
	 * Hash: 0x5CCABFFCA31DDE33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CCABFFCA31DDE33)
	 */
	getScreenblurFadeCurrentTime(): number;

	/**
	 * Native: GRAPHICS::GET_SCREEN_COORD_FROM_WORLD_COORD
	 *
	 * Hash: 0x34E82F05DF2974F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34E82F05DF2974F5)
	 */
	getScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): GetScreenCoordFromWorldCoordResult;

	/**
	 * Native: GRAPHICS::GET_SCREEN_RESOLUTION
	 *
	 * Hash: 0x888D57E407E63624 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x888D57E407E63624)
	 */
	getScreenResolution(): GetScreenResolutionResult;

	/**
	 * Native: GRAPHICS::_GET_SCRIPT_GFX_POSITION
	 *
	 * Hash: 0x6DD8F5AA635EB4B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DD8F5AA635EB4B2)
	 */
	getScriptGfxPosition(x: number, y: number): GetScriptGfxPositionResult;

	/**
	 * Native: GRAPHICS::GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO
	 *
	 * Hash: 0x1670F8D05056F257 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1670F8D05056F257)
	 */
	getStatusOfLoadMissionCreatorPhoto(): GetStatusOfLoadMissionCreatorPhotoResult;

	/**
	 * Native: GRAPHICS::GET_STATUS_OF_SAVE_HIGH_QUALITY_PHOTO
	 *
	 * Hash: 0x0C0C4E81E1AC60A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C0C4E81E1AC60A0)
	 */
	getStatusOfSaveHighQualityPhoto(): integer;

	/**
	 * Native: GRAPHICS::GET_STATUS_OF_SORTED_LIST_OPERATION
	 *
	 * Hash: 0xF5BED327CEA362B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5BED327CEA362B1)
	 */
	getStatusOfSortedListOperation(p0: integer): integer;

	/**
	 * Native: GRAPHICS::GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO
	 *
	 * Hash: 0x0D6CA79EEEBD8CA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D6CA79EEEBD8CA3)
	 */
	getStatusOfTakeHighQualityPhoto(): integer;

	/**
	 * Native: GRAPHICS::GET_STATUS_OF_TAKE_MISSION_CREATOR_PHOTO
	 *
	 * Hash: 0x90A78ECAA4E78453 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90A78ECAA4E78453)
	 */
	getStatusOfTakeMissionCreatorPhoto(): integer;

	/**
	 * Native: GRAPHICS::GET_TEXTURE_RESOLUTION
	 *
	 * Hash: 0x35736EE65BD00C11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35736EE65BD00C11)
	 */
	getTextureResolution(textureDict: string, textureName: string): Vector3Mp;

	/**
	 * Native: GRAPHICS::GET_TIMECYCLE_MODIFIER_INDEX
	 *
	 * Hash: 0xFDF3D97C674AFB66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDF3D97C674AFB66)
	 */
	getTimecycleModifierIndex(): integer;

	/**
	 * Native: GRAPHICS::GET_TIMECYCLE_TRANSITION_MODIFIER_INDEX
	 *
	 * Hash: 0x459FD2C8D0AB78BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x459FD2C8D0AB78BC)
	 */
	getTimecycleTransitionModifierIndex(): integer;

	/**
	 * Native: GRAPHICS::GET_TOGGLE_PAUSED_RENDERPHASES_STATUS
	 *
	 * Hash: 0xEB3DAC2C86001E5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB3DAC2C86001E5E)
	 */
	getTogglePausedRenderphasesStatus(): boolean;

	/**
	 * Native: GRAPHICS::GET_TV_CHANNEL
	 *
	 * Hash: 0xFC1E275A90D39995 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC1E275A90D39995)
	 */
	getTvChannel(): integer;

	/**
	 * Native: GRAPHICS::GET_TV_VOLUME
	 *
	 * Hash: 0x2170813D3DD8661B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2170813D3DD8661B)
	 */
	getTvVolume(): number;

	/**
	 * Native: GRAPHICS::GET_USINGNIGHTVISION
	 *
	 * Hash: 0x2202A3F42C8E5F79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2202A3F42C8E5F79)
	 */
	getUsingnightvision(): boolean;

	/**
	 * Native: GRAPHICS::GET_USINGSEETHROUGH
	 *
	 * Hash: 0x44B80ABAB9D80BD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44B80ABAB9D80BD3)
	 */
	getUsingseethrough(): boolean;

	/**
	 * Native: GRAPHICS::GET_VEHICLE_CREW_EMBLEM_REQUEST_STATE
	 *
	 * Hash: 0xFE26117A5841B2FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE26117A5841B2FF)
	 */
	getVehicleCrewEmblemRequestState(vehicle: Handle, p1: integer): integer;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_GET_MAX_HEIGHT
	 *
	 * Hash: 0xA4819F5E23E2FFAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4819F5E23E2FFAD)
	 */
	golfTrailGetMaxHeight(): number;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_GET_VISUAL_CONTROL_POINT
	 *
	 * Hash: 0xA4664972A9B8F8BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4664972A9B8F8BA)
	 */
	golfTrailGetVisualControlPoint(p0: integer): Vector3Mp;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_COLOUR
	 *
	 * Hash: 0x12995F2E53FFA601 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12995F2E53FFA601)
	 */
	golfTrailSetColour(
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
		p11: integer
	): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_ENABLED
	 *
	 * Hash: 0xA51C4B86B71652AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA51C4B86B71652AE)
	 */
	golfTrailSetEnabled(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_FACING
	 *
	 * Hash: 0x06F761EA47C1D3ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06F761EA47C1D3ED)
	 */
	golfTrailSetFacing(p0: boolean): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_FIXED_CONTROL_POINT
	 *
	 * Hash: 0xB1BB03742917A5D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1BB03742917A5D6)
	 */
	golfTrailSetFixedControlPoint(
		type: integer,
		xPos: number,
		yPos: number,
		zPos: number,
		p4: number,
		red: integer,
		green: integer,
		blue: integer,
		alpha: integer
	): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_PATH
	 *
	 * Hash: 0x312342E1A4874F3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x312342E1A4874F3F)
	 */
	golfTrailSetPath(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: boolean
	): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_RADIUS
	 *
	 * Hash: 0x2485D34E50A22E84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2485D34E50A22E84)
	 */
	golfTrailSetRadius(p0: number, p1: number, p2: number): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_SHADER_PARAMS
	 *
	 * Hash: 0x9CFDD90B2B844BF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CFDD90B2B844BF7)
	 */
	golfTrailSetShaderParams(p0: number, p1: number, p2: number, p3: number, p4: number): void;

	/**
	 * Native: GRAPHICS::GOLF_TRAIL_SET_TESSELLATION
	 *
	 * Hash: 0xDBAA5EC848BA2D46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBAA5EC848BA2D46)
	 */
	golfTrailSetTessellation(p0: integer, p1: integer): void;

	/**
	 * Native: GRAPHICS::_GRASS_LOD_RESET_SCRIPT_AREAS
	 *
	 * Hash: 0x302C91AB2D477F7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x302C91AB2D477F7E)
	 */
	grassLodResetScriptAreas(): void;

	/**
	 * Native: GRAPHICS::_GRASS_LOD_SHRINK_SCRIPT_AREAS
	 *
	 * Hash: 0x6D955F6A9E0295B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D955F6A9E0295B1)
	 */
	grassLodShrinkScriptAreas(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number): void;

	/**
	 * Native: GRAPHICS::HAS_SCALEFORM_CONTAINER_MOVIE_LOADED_INTO_PARENT
	 *
	 * Hash: 0x8217150E1217EBFD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8217150E1217EBFD)
	 */
	hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: integer): boolean;

	/**
	 * Native: GRAPHICS::HAS_SCALEFORM_MOVIE_FILENAME_LOADED
	 *
	 * Hash: 0x0C1C5D756FB5F337 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C1C5D756FB5F337)
	 */
	hasScaleformMovieFilenameLoaded(scaleformName: string): boolean;

	/**
	 * Native: GRAPHICS::HAS_SCALEFORM_MOVIE_LOADED
	 *
	 * Hash: 0x85F01B8D5B90570E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85F01B8D5B90570E)
	 */
	hasScaleformMovieLoaded(scaleformHandle: integer): boolean;

	/**
	 * Native: GRAPHICS::HAS_SCALEFORM_SCRIPT_HUD_MOVIE_LOADED
	 *
	 * Hash: 0xDF6E5987D2B4D140 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF6E5987D2B4D140)
	 */
	hasScaleformScriptHudMovieLoaded(hudComponent: integer): boolean;

	/**
	 * Native: GRAPHICS::HAS_STREAMED_TEXTURE_DICT_LOADED
	 *
	 * Hash: 0x0145F696AAAAD2E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0145F696AAAAD2E4)
	 */
	hasStreamedTextureDictLoaded(textureDict: string): boolean;

	/**
	 * Native: GRAPHICS::IS_DECAL_ALIVE
	 *
	 * Hash: 0xC694D74949CAFD0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC694D74949CAFD0C)
	 */
	isDecalAlive(decal: integer): boolean;

	/**
	 * Native: GRAPHICS::_IS_PLAYLIST_UNK
	 *
	 * Hash: 0x1F710BFF7DAE6261 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F710BFF7DAE6261)
	 */
	isPlaylistUnk(tvChannel: integer, p1: integer): boolean;

	/**
	 * Native: GRAPHICS::IS_SCALEFORM_MOVIE_METHOD_RETURN_VALUE_READY
	 *
	 * Hash: 0x768FF8961BA904D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x768FF8961BA904D6)
	 */
	isScaleformMovieMethodReturnValueReady(methodReturn: integer): boolean;

	/**
	 * Native: GRAPHICS::IS_SCREENBLUR_FADE_RUNNING
	 *
	 * Hash: 0x7B226C785A52A0A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B226C785A52A0A9)
	 */
	isScreenblurFadeRunning(): boolean;

	/**
	 * Native: GRAPHICS::IS_TRACKED_POINT_VISIBLE
	 *
	 * Hash: 0xC45CCDAAC9221CA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC45CCDAAC9221CA8)
	 */
	isTrackedPointVisible(point: integer): boolean;

	/**
	 * Native: GRAPHICS::_IS_TV_PLAYLIST_ITEM_PLAYING
	 *
	 * Hash: 0x0AD973CA1E077B60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AD973CA1E077B60)
	 */
	isTvPlaylistItemPlaying(videoCliphash: integer): boolean;

	/**
	 * Native: GRAPHICS::LOAD_MISSION_CREATOR_PHOTO
	 *
	 * Hash: 0x4862437A486F91B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4862437A486F91B0)
	 */
	loadMissionCreatorPhoto(p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: GRAPHICS::LOAD_MOVIE_MESH_SET
	 *
	 * Hash: 0xB66064452270E8F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB66064452270E8F1)
	 */
	loadMovieMeshSet(movieMeshSetName: string): integer;

	/**
	 * Native: GRAPHICS::MOVE_VEHICLE_DECALS
	 *
	 * Hash: 0x84C8D7C2D30D3280 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84C8D7C2D30D3280)
	 */
	moveVehicleDecals(p0: integer, p1: integer): void;

	/**
	 * Native: GRAPHICS::OVERRIDE_INTERIOR_SMOKE_END
	 *
	 * Hash: 0xEFB55E7C25D3B3BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFB55E7C25D3B3BE)
	 */
	overrideInteriorSmokeEnd(): void;

	/**
	 * Native: GRAPHICS::OVERRIDE_INTERIOR_SMOKE_LEVEL
	 *
	 * Hash: 0x1600FD8CF72EBC12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1600FD8CF72EBC12)
	 */
	overrideInteriorSmokeLevel(level: number): void;

	/**
	 * Native: GRAPHICS::OVERRIDE_INTERIOR_SMOKE_NAME
	 *
	 * Hash: 0x2A2A52824DB96700 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A2A52824DB96700)
	 */
	overrideInteriorSmokeName(name: string): void;

	/**
	 * Native: GRAPHICS::_OVERRIDE_PED_BADGE_TEXTURE
	 *
	 * Hash: 0x95EB5E34F821BABE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95EB5E34F821BABE)
	 */
	overridePedBadgeTexture(ped: Handle, txd: string, txn: string): boolean;

	/**
	 * Native: GRAPHICS::PATCH_DECAL_DIFFUSE_MAP
	 *
	 * Hash: 0x8A35C742130C6080 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A35C742130C6080)
	 */
	patchDecalDiffuseMap(decalType: integer, textureDict: string, textureName: string): void;

	/**
	 * Native: GRAPHICS::_PLAY_BINK_MOVIE
	 *
	 * Hash: 0x70D2CC8A542A973C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70D2CC8A542A973C)
	 */
	playBinkMovie(binkMovie: integer): void;

	/**
	 * Native: GRAPHICS::POP_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x3C8938D7D872211E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C8938D7D872211E)
	 */
	popTimecycleModifier(): void;

	/**
	 * Native: GRAPHICS::PRESET_INTERIOR_AMBIENT_CACHE
	 *
	 * Hash: 0xD7021272EB0A451E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7021272EB0A451E)
	 */
	presetInteriorAmbientCache(timecycleModifierName: string): void;

	/**
	 * Native: GRAPHICS::PUSH_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x58F735290861E6B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58F735290861E6B4)
	 */
	pushTimecycleModifier(): void;

	/**
	 * Native: GRAPHICS::QUERY_MOVIE_MESH_SET_STATE
	 *
	 * Hash: 0x9B6E70C5CEEF4EEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B6E70C5CEEF4EEB)
	 */
	queryMovieMeshSetState(p0: integer): integer;

	/**
	 * Native: GRAPHICS::_REGISTER_NOIR_SCREEN_EFFECT_THIS_FRAME
	 *
	 * Hash: 0xA44FF770DFBC5DAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA44FF770DFBC5DAE)
	 */
	registerNoirScreenEffectThisFrame(): void;

	/**
	 * Native: GRAPHICS::_RELEASE_BINK_MOVIE
	 *
	 * Hash: 0x04D950EEFA4EED8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04D950EEFA4EED8C)
	 */
	releaseBinkMovie(binkMovie: integer): void;

	/**
	 * Native: GRAPHICS::RELEASE_MOVIE_MESH_SET
	 *
	 * Hash: 0xEB119AA014E89183 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB119AA014E89183)
	 */
	releaseMovieMeshSet(movieMeshSet: integer): void;

	/**
	 * Native: GRAPHICS::REMOVE_DECAL
	 *
	 * Hash: 0xED3F346429CCD659 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED3F346429CCD659)
	 */
	removeDecal(decal: integer): void;

	/**
	 * Native: GRAPHICS::REMOVE_DECALS_FROM_OBJECT
	 *
	 * Hash: 0xCCF71CBDDF5B6CB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCF71CBDDF5B6CB9)
	 */
	removeDecalsFromObject(obj: Handle): void;

	/**
	 * Native: GRAPHICS::REMOVE_DECALS_FROM_OBJECT_FACING
	 *
	 * Hash: 0xA6F6F70FDC6D144C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6F6F70FDC6D144C)
	 */
	removeDecalsFromObjectFacing(obj: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: GRAPHICS::REMOVE_DECALS_FROM_VEHICLE
	 *
	 * Hash: 0xE91F1B65F2B48D57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE91F1B65F2B48D57)
	 */
	removeDecalsFromVehicle(vehicle: Handle): void;

	/**
	 * Native: GRAPHICS::REMOVE_DECALS_IN_RANGE
	 *
	 * Hash: 0x5D6B2D4830A67C62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D6B2D4830A67C62)
	 */
	removeDecalsInRange(x: number, y: number, z: number, range: number): void;

	/**
	 * Native: GRAPHICS::REMOVE_PARTICLE_FX
	 *
	 * Hash: 0xC401503DFE8D53CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC401503DFE8D53CF)
	 */
	removeParticleFx(ptfxHandle: integer, p1: boolean): void;

	/**
	 * Native: GRAPHICS::REMOVE_PARTICLE_FX_FROM_ENTITY
	 *
	 * Hash: 0xB8FEAEEBCC127425 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8FEAEEBCC127425)
	 */
	removeParticleFxFromEntity(entity: Handle): void;

	/**
	 * Native: GRAPHICS::REMOVE_PARTICLE_FX_IN_RANGE
	 *
	 * Hash: 0xDD19FA1C6D657305 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD19FA1C6D657305)
	 */
	removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;

	/**
	 * Native: GRAPHICS::REMOVE_SCALEFORM_SCRIPT_HUD_MOVIE
	 *
	 * Hash: 0xF44A5456AC3F4F97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF44A5456AC3F4F97)
	 */
	removeScaleformScriptHudMovie(hudComponent: integer): void;

	/**
	 * Native: GRAPHICS::REMOVE_TCMODIFIER_OVERRIDE
	 *
	 * Hash: 0x15E33297C3E8DC60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15E33297C3E8DC60)
	 */
	removeTcmodifierOverride(p0: string): void;

	/**
	 * Native: GRAPHICS::REMOVE_VEHICLE_CREW_EMBLEM
	 *
	 * Hash: 0xD2300034310557E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2300034310557E4)
	 */
	removeVehicleCrewEmblem(vehicle: Handle, p1: integer): void;

	/**
	 * Native: GRAPHICS::REQUEST_SCALEFORM_MOVIE
	 *
	 * Hash: 0x11FE353CF9733E6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11FE353CF9733E6F)
	 */
	requestScaleformMovie(scaleformName: string): integer;

	/**
	 * Native: GRAPHICS::_REQUEST_SCALEFORM_MOVIE_2
	 *
	 * Hash: 0x65E7E78842E74CDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65E7E78842E74CDB)
	 */
	requestScaleformMovie2(scaleformName: string): integer;

	/**
	 * Native: GRAPHICS::REQUEST_SCALEFORM_MOVIE_INSTANCE
	 *
	 * Hash: 0xC514489CFB8AF806 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC514489CFB8AF806)
	 */
	requestScaleformMovieInstance(scaleformName: string): integer;

	/**
	 * Native: GRAPHICS::_REQUEST_SCALEFORM_MOVIE_INTERACTIVE
	 *
	 * Hash: 0xBD06C611BB9048C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD06C611BB9048C2)
	 */
	requestScaleformMovieInteractive(scaleformName: string): integer;

	/**
	 * Native: GRAPHICS::REQUEST_SCALEFORM_SCRIPT_HUD_MOVIE
	 *
	 * Hash: 0x9304881D6F6537EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9304881D6F6537EA)
	 */
	requestScaleformScriptHudMovie(hudComponent: integer): void;

	/**
	 * Native: GRAPHICS::REQUEST_STREAMED_TEXTURE_DICT
	 *
	 * Hash: 0xDFA2EF8E04127DD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFA2EF8E04127DD5)
	 */
	requestStreamedTextureDict(textureDict: string, p1: boolean): void;

	/**
	 * Native: GRAPHICS::_RESET_EXTRA_TIMECYCLE_MODIFIER_STRENGTH
	 *
	 * Hash: 0x2BF72AD5B41AA739 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BF72AD5B41AA739)
	 */
	resetExtraTimecycleModifierStrength(): void;

	/**
	 * Native: GRAPHICS::RESET_PARTICLE_FX_OVERRIDE
	 *
	 * Hash: 0x89C8553DD3274AAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89C8553DD3274AAE)
	 */
	resetParticleFxOverride(name: string): void;

	/**
	 * Native: GRAPHICS::RESET_PAUSED_RENDERPHASES
	 *
	 * Hash: 0xE1C8709406F2C41C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1C8709406F2C41C)
	 */
	resetPausedRenderphases(): void;

	/**
	 * Native: GRAPHICS::RESET_SCRIPT_GFX_ALIGN
	 *
	 * Hash: 0xE3A3DB414A373DAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3A3DB414A373DAB)
	 */
	resetScriptGfxAlign(): void;

	/**
	 * Native: GRAPHICS::_RETURN_TWO
	 *
	 * Hash: 0x40AFB081F8ADD4EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40AFB081F8ADD4EE)
	 */
	returnTwo(p0: integer): integer;

	/**
	 * Native: GRAPHICS::SAVE_HIGH_QUALITY_PHOTO
	 *
	 * Hash: 0x3DEC726C25A11BAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DEC726C25A11BAC)
	 */
	saveHighQualityPhoto(unused: integer): boolean;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_BOOL
	 *
	 * Hash: 0xC58424BA936EB458 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC58424BA936EB458)
	 */
	scaleformMovieMethodAddParamBool(value: boolean): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_FLOAT
	 *
	 * Hash: 0xD69736AAE04DB51A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD69736AAE04DB51A)
	 */
	scaleformMovieMethodAddParamFloat(value: number): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_INT
	 *
	 * Hash: 0xC3D0841A0CC546A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3D0841A0CC546A6)
	 */
	scaleformMovieMethodAddParamInt(value: integer): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_LATEST_BRIEF_STRING
	 *
	 * Hash: 0xEC52C631A1831C03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC52C631A1831C03)
	 */
	scaleformMovieMethodAddParamLatestBriefString(value: integer): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_PLAYER_NAME_STRING
	 *
	 * Hash: 0xE83A3E3557A56640 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE83A3E3557A56640)
	 */
	scaleformMovieMethodAddParamPlayerNameString(string: string): void;

	/**
	 * Native: GRAPHICS::SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING
	 *
	 * Hash: 0xBA7148484BD90365 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA7148484BD90365)
	 */
	scaleformMovieMethodAddParamTextureNameString(string: string): void;

	/**
	 * Native: GRAPHICS::_SCALEFORM_MOVIE_METHOD_ADD_PARAM_TEXTURE_NAME_STRING_2
	 *
	 * Hash: 0x77FE3402004CD1B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77FE3402004CD1B0)
	 */
	scaleformMovieMethodAddParamTextureNameString2(string: string): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_GET_MAX_THICKNESS
	 *
	 * Hash: 0x43DBAE39626CE83F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43DBAE39626CE83F)
	 */
	seethroughGetMaxThickness(): number;

	/**
	 * Native: GRAPHICS::SEETHROUGH_RESET
	 *
	 * Hash: 0x70A64C0234EF522C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70A64C0234EF522C)
	 */
	seethroughReset(): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_COLOR_NEAR
	 *
	 * Hash: 0x1086127B3A63505E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1086127B3A63505E)
	 */
	seethroughSetColorNear(red: integer, green: integer, blue: integer): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_FADE_END_DISTANCE
	 *
	 * Hash: 0x9D75795B9DC6EBBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D75795B9DC6EBBF)
	 */
	seethroughSetFadeEndDistance(distance: number): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_FADE_START_DISTANCE
	 *
	 * Hash: 0xA78DE25577300BA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA78DE25577300BA1)
	 */
	seethroughSetFadeStartDistance(distance: number): void;

	/**
	 * Native: GRAPHICS::SEETHROUGH_SET_HEATSCALE
	 *
	 * Hash: 0xD7D0B00177485411 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7D0B00177485411)
	 */
	seethroughSetHeatscale(index: integer, heatScale: number): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_HI_LIGHT_INTENSITY
	 *
	 * Hash: 0x19E50EB6E33E1D28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19E50EB6E33E1D28)
	 */
	seethroughSetHiLightIntensity(intensity: number): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_HI_LIGHT_NOISE
	 *
	 * Hash: 0x1636D7FC127B10D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1636D7FC127B10D2)
	 */
	seethroughSetHiLightNoise(noise: number): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_MAX_THICKNESS
	 *
	 * Hash: 0x0C8FAC83902A62DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C8FAC83902A62DF)
	 */
	seethroughSetMaxThickness(thickness: number): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_NOISE_AMOUNT_MAX
	 *
	 * Hash: 0xFEBFBFDFB66039DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEBFBFDFB66039DE)
	 */
	seethroughSetNoiseAmountMax(amount: number): void;

	/**
	 * Native: GRAPHICS::_SEETHROUGH_SET_NOISE_AMOUNT_MIN
	 *
	 * Hash: 0xFF5992E1C9E65D05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF5992E1C9E65D05)
	 */
	seethroughSetNoiseAmountMin(amount: number): void;

	/**
	 * Native: GRAPHICS::SET_ARTIFICIAL_LIGHTS_STATE
	 *
	 * Hash: 0x1268615ACE24D504 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1268615ACE24D504)
	 */
	setArtificialLightsState(state: boolean): void;

	/**
	 * Native: GRAPHICS::_SET_ARTIFICIAL_LIGHTS_STATE_AFFECTS_VEHICLES
	 *
	 * Hash: 0xE2B187C0939B3D32 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2B187C0939B3D32)
	 */
	setArtificialLightsStateAffectsVehicles(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_BACKFACECULLING
	 *
	 * Hash: 0x23BA6B0C2AD7B0D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23BA6B0C2AD7B0D3)
	 */
	setBackfaceculling(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_SET_BINK_MOVIE
	 *
	 * Hash: 0x338D9F609FD632DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x338D9F609FD632DB)
	 */
	setBinkMovie(name: string): integer;

	/**
	 * Native: GRAPHICS::_SET_BINK_MOVIE_TIME
	 *
	 * Hash: 0x0CB6B3446855B57A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CB6B3446855B57A)
	 */
	setBinkMovieTime(binkMovie: integer, progress: number): void;

	/**
	 * Native: GRAPHICS::_SET_BINK_MOVIE_UNK_2
	 *
	 * Hash: 0xF816F2933752322D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF816F2933752322D)
	 */
	setBinkMovieUnk2(binkMovie: integer, p1: boolean): void;

	/**
	 * Native: GRAPHICS::_SET_BINK_MOVIE_VOLUME
	 *
	 * Hash: 0xAFF33B1178172223 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFF33B1178172223)
	 */
	setBinkMovieVolume(binkMovie: integer, value: number): void;

	/**
	 * Native: GRAPHICS::_SET_BINK_SHOULD_SKIP
	 *
	 * Hash: 0x6805D58CAA427B72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6805D58CAA427B72)
	 */
	setBinkShouldSkip(binkMovie: integer, bShouldSkip: boolean): void;

	/**
	 * Native: GRAPHICS::SET_CHECKPOINT_CYLINDER_HEIGHT
	 *
	 * Hash: 0x2707AAE9D9297D89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2707AAE9D9297D89)
	 */
	setCheckpointCylinderHeight(checkpoint: integer, nearHeight: number, farHeight: number, radius: number): void;

	/**
	 * Native: GRAPHICS::_SET_CHECKPOINT_ICON_SCALE
	 *
	 * Hash: 0x44621483FF966526 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44621483FF966526)
	 */
	setCheckpointIconScale(checkpoint: integer, scale: number): void;

	/**
	 * Native: GRAPHICS::SET_CHECKPOINT_RGBA
	 *
	 * Hash: 0x7167371E8AD747F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7167371E8AD747F7)
	 */
	setCheckpointRgba(checkpoint: integer, red: integer, green: integer, blue: integer, alpha: integer): void;

	/**
	 * Native: GRAPHICS::SET_CHECKPOINT_RGBA2
	 *
	 * Hash: 0xB9EA40907C680580 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9EA40907C680580)
	 */
	setCheckpointRgba2(checkpoint: integer, red: integer, green: integer, blue: integer, alpha: integer): void;

	/**
	 * Native: GRAPHICS::_SET_CHECKPOINT_SCALE
	 *
	 * Hash: 0x4B5B4DA5D79F1943 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B5B4DA5D79F1943)
	 */
	setCheckpointScale(checkpoint: integer, p0: number): void;

	/**
	 * Native: GRAPHICS::SET_CURRENT_PLAYER_TCMODIFIER
	 *
	 * Hash: 0xBBF327DED94E4DEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBF327DED94E4DEB)
	 */
	setCurrentPlayerTcmodifier(modifierName: string): void;

	/**
	 * Native: GRAPHICS::SET_DEBUG_LINES_AND_SPHERES_DRAWING_ACTIVE
	 *
	 * Hash: 0x175B6BFC15CDD0C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x175B6BFC15CDD0C5)
	 */
	setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;

	/**
	 * Native: GRAPHICS::SET_DISABLE_DECAL_RENDERING_THIS_FRAME
	 *
	 * Hash: 0x4B5CFC83122DF602 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B5CFC83122DF602)
	 */
	setDisableDecalRenderingThisFrame(): void;

	/**
	 * Native: GRAPHICS::SET_DRAW_ORIGIN
	 *
	 * Hash: 0xAA0008F3BBB8F416 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA0008F3BBB8F416)
	 */
	setDrawOrigin(x: number, y: number, z: number, p3: integer): void;

	/**
	 * Native: GRAPHICS::SET_ENTITY_ICON_COLOR
	 *
	 * Hash: 0x1D5F595CCAE2E238 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D5F595CCAE2E238)
	 */
	setEntityIconColor(entity: Handle, red: integer, green: integer, blue: integer, alpha: integer): void;

	/**
	 * Native: GRAPHICS::SET_ENTITY_ICON_VISIBILITY
	 *
	 * Hash: 0xE0E8BEECCA96BA31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0E8BEECCA96BA31)
	 */
	setEntityIconVisibility(entity: Handle, toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_SET_EXTRA_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x5096FD9CCB49056D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5096FD9CCB49056D)
	 */
	setExtraTimecycleModifier(modifierName: string): void;

	/**
	 * Native: GRAPHICS::_SET_EXTRA_TIMECYCLE_MODIFIER_STRENGTH
	 *
	 * Hash: 0x2C328AF17210F009 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C328AF17210F009)
	 */
	setExtraTimecycleModifierStrength(strength: number): void;

	/**
	 * Native: GRAPHICS::SET_FLASH
	 *
	 * Hash: 0x0AB84296FED9CFC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AB84296FED9CFC6)
	 */
	setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;

	/**
	 * Native: GRAPHICS::_SET_FORCE_PED_FOOTSTEPS_TRACKS
	 *
	 * Hash: 0xAEEDAD1420C65CC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEEDAD1420C65CC0)
	 */
	setForcePedFootstepsTracks(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_SET_FORCE_VEHICLE_TRAILS
	 *
	 * Hash: 0x4CC7F0FEA5283FE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CC7F0FEA5283FE0)
	 */
	setForceVehicleTrails(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::_SET_HIDOF_ENV_BLUR_PARAMS
	 *
	 * Hash: 0xBA3D65906822BED5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA3D65906822BED5)
	 */
	setHidofEnvBlurParams(
		p0: boolean,
		p1: boolean,
		nearplaneOut: number,
		nearplaneIn: number,
		farplaneOut: number,
		farplaneIn: number
	): void;

	/**
	 * Native: GRAPHICS::SET_NEXT_PLAYER_TCMODIFIER
	 *
	 * Hash: 0xBF59707B3E5ED531 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF59707B3E5ED531)
	 */
	setNextPlayerTcmodifier(modifierName: string): void;

	/**
	 * Native: GRAPHICS::SET_NIGHTVISION
	 *
	 * Hash: 0x18F621F7A5B1F85D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18F621F7A5B1F85D)
	 */
	setNightvision(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_NOISEOVERIDE
	 *
	 * Hash: 0xE787BF1C5CF823C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE787BF1C5CF823C9)
	 */
	setNoiseoveride(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_NOISINESSOVERIDE
	 *
	 * Hash: 0xCB6A7C3BB17A0C67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB6A7C3BB17A0C67)
	 */
	setNoisinessoveride(value: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_BULLET_IMPACT_SCALE
	 *
	 * Hash: 0x27E32866E9A5C416 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27E32866E9A5C416)
	 */
	setParticleFxBulletImpactScale(scale: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_CAM_INSIDE_NONPLAYER_VEHICLE
	 *
	 * Hash: 0xACEE6F360FC1F6B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACEE6F360FC1F6B6)
	 */
	setParticleFxCamInsideNonplayerVehicle(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_CAM_INSIDE_VEHICLE
	 *
	 * Hash: 0xEEC4047028426510 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEC4047028426510)
	 */
	setParticleFxCamInsideVehicle(p0: boolean): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_ALPHA
	 *
	 * Hash: 0x726845132380142E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x726845132380142E)
	 */
	setParticleFxLoopedAlpha(ptfxHandle: integer, alpha: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_COLOUR
	 *
	 * Hash: 0x7F8F65877F88783B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F8F65877F88783B)
	 */
	setParticleFxLoopedColour(ptfxHandle: integer, r: number, g: number, b: number, p4: boolean): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_EVOLUTION
	 *
	 * Hash: 0x5F0C4B5B1C393BE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F0C4B5B1C393BE2)
	 */
	setParticleFxLoopedEvolution(ptfxHandle: integer, propertyName: string, amount: number, noNetwork: boolean): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST
	 *
	 * Hash: 0xDCB194B85EF7B541 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCB194B85EF7B541)
	 */
	setParticleFxLoopedFarClipDist(ptfxHandle: integer, range: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_OFFSETS
	 *
	 * Hash: 0xF7DDEBEC43483C43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7DDEBEC43483C43)
	 */
	setParticleFxLoopedOffsets(
		ptfxHandle: integer,
		x: number,
		y: number,
		z: number,
		rotX: number,
		rotY: number,
		rotZ: number
	): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_LOOPED_SCALE
	 *
	 * Hash: 0xB44250AAA456492D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB44250AAA456492D)
	 */
	setParticleFxLoopedScale(ptfxHandle: integer, scale: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_NON_LOOPED_ALPHA
	 *
	 * Hash: 0x77168D722C58B2FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77168D722C58B2FC)
	 */
	setParticleFxNonLoopedAlpha(alpha: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_NON_LOOPED_COLOUR
	 *
	 * Hash: 0x26143A59EF48B262 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26143A59EF48B262)
	 */
	setParticleFxNonLoopedColour(r: number, g: number, b: number): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_OVERRIDE
	 *
	 * Hash: 0xEA1E2D93F6F75ED9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA1E2D93F6F75ED9)
	 */
	setParticleFxOverride(oldAsset: string, newAsset: string): void;

	/**
	 * Native: GRAPHICS::SET_PARTICLE_FX_SHOOTOUT_BOAT
	 *
	 * Hash: 0x96EF97DAEB89BEF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96EF97DAEB89BEF5)
	 */
	setParticleFxShootoutBoat(p0: integer): void;

	/**
	 * Native: GRAPHICS::SET_PLAYER_TCMODIFIER_TRANSITION
	 *
	 * Hash: 0xBDEB86F4D5809204 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDEB86F4D5809204)
	 */
	setPlayerTcmodifierTransition(value: number): void;

	/**
	 * Native: GRAPHICS::_SET_SCALEFORM_FIT_RENDERTARGET
	 *
	 * Hash: 0xE6A9F00D4240B519 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6A9F00D4240B519)
	 */
	setScaleformFitRendertarget(scaleformHandle: integer, toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_SCALEFORM_MOVIE_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0x1D132D614DD86811 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D132D614DD86811)
	 */
	setScaleformMovieAsNoLongerNeeded(scaleformHandle: integer): integer;

	/**
	 * Native: GRAPHICS::SET_SCALEFORM_MOVIE_TO_USE_SYSTEM_TIME
	 *
	 * Hash: 0x6D8EB211944DCE08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D8EB211944DCE08)
	 */
	setScaleformMovieToUseSystemTime(scaleform: integer, toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_SCRIPT_GFX_ALIGN
	 *
	 * Hash: 0xB8A850F20A067EB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8A850F20A067EB6)
	 */
	setScriptGfxAlign(horizontalAlign: integer, verticalAlign: integer): void;

	/**
	 * Native: GRAPHICS::SET_SCRIPT_GFX_ALIGN_PARAMS
	 *
	 * Hash: 0xF5A2C681787E579D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5A2C681787E579D)
	 */
	setScriptGfxAlignParams(x: number, y: number, w: number, h: number): void;

	/**
	 * Native: GRAPHICS::SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU
	 *
	 * Hash: 0xC6372ECD45D73BCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6372ECD45D73BCD)
	 */
	setScriptGfxDrawBehindPausemenu(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_SCRIPT_GFX_DRAW_ORDER
	 *
	 * Hash: 0x61BB1D9B3A95D802 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61BB1D9B3A95D802)
	 */
	setScriptGfxDrawOrder(drawOrder: integer): void;

	/**
	 * Native: GRAPHICS::SET_SEETHROUGH
	 *
	 * Hash: 0x7E08924259E08CE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E08924259E08CE0)
	 */
	setSeethrough(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xBE2CACCF5A8AA805 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE2CACCF5A8AA805)
	 */
	setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;

	/**
	 * Native: GRAPHICS::SET_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x2C933ABF17A1DF41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C933ABF17A1DF41)
	 */
	setTimecycleModifier(modifierName: string): void;

	/**
	 * Native: GRAPHICS::SET_TIMECYCLE_MODIFIER_STRENGTH
	 *
	 * Hash: 0x82E7FFCD5B2326B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82E7FFCD5B2326B3)
	 */
	setTimecycleModifierStrength(strength: number): void;

	/**
	 * Native: GRAPHICS::SET_TRACKED_POINT_INFO
	 *
	 * Hash: 0x164ECBB3CF750CB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x164ECBB3CF750CB0)
	 */
	setTrackedPointInfo(point: integer, x: number, y: number, z: number, radius: number): void;

	/**
	 * Native: GRAPHICS::SET_TRANSITION_TIMECYCLE_MODIFIER
	 *
	 * Hash: 0x3BCF567485E1971C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BCF567485E1971C)
	 */
	setTransitionTimecycleModifier(modifierName: string, transition: number): void;

	/**
	 * Native: GRAPHICS::SET_TV_AUDIO_FRONTEND
	 *
	 * Hash: 0x113D2C5DC57E1774 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x113D2C5DC57E1774)
	 */
	setTvAudioFrontend(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::SET_TV_CHANNEL
	 *
	 * Hash: 0xBAABBB23EB6E484E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAABBB23EB6E484E)
	 */
	setTvChannel(channel: integer): void;

	/**
	 * Native: GRAPHICS::SET_TV_CHANNEL_PLAYLIST
	 *
	 * Hash: 0xF7B38B8305F1FE8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7B38B8305F1FE8B)
	 */
	setTvChannelPlaylist(tvChannel: integer, playlistName: string, restart: boolean): void;

	/**
	 * Native: GRAPHICS::SET_TV_CHANNEL_PLAYLIST_AT_HOUR
	 *
	 * Hash: 0x2201C576FACAEBE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2201C576FACAEBE8)
	 */
	setTvChannelPlaylistAtHour(tvChannel: integer, playlistName: string, hour: integer): void;

	/**
	 * Native: GRAPHICS::SET_TV_VOLUME
	 *
	 * Hash: 0x2982BF73F66E9DDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2982BF73F66E9DDC)
	 */
	setTvVolume(volume: number): void;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY
	 *
	 * Hash: 0x6F60E89A7B64EE1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F60E89A7B64EE1D)
	 */
	startNetworkedParticleFxLoopedOnEntity(
		effectName: string,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p12: integer,
		p13: integer,
		p14: integer,
		p15: integer
	): integer;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
	 *
	 * Hash: 0xDDE23F30CC5A0F03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDE23F30CC5A0F03)
	 */
	startNetworkedParticleFxLoopedOnEntityBone(
		effectName: string,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: integer,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p13: integer,
		p14: integer,
		p15: integer,
		p16: integer
	): integer;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD
	 *
	 * Hash: 0xF56B8137DF10135D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF56B8137DF10135D)
	 */
	startNetworkedParticleFxNonLoopedAtCoord(
		effectName: string,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p11: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY
	 *
	 * Hash: 0xC95EB1DB6E92113D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC95EB1DB6E92113D)
	 */
	startNetworkedParticleFxNonLoopedOnEntity(
		effectName: string,
		entity: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::_START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY_BONE
	 *
	 * Hash: 0x02B1F2A72E0F5325 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02B1F2A72E0F5325)
	 */
	startNetworkedParticleFxNonLoopedOnEntityBone(
		effectName: string,
		entity: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: integer,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
	 *
	 * Hash: 0xA41B6A43642AC2CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA41B6A43642AC2CF)
	 */
	startNetworkedParticleFxNonLoopedOnPedBone(
		effectName: string,
		ped: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: integer,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_LOOPED_AT_COORD
	 *
	 * Hash: 0xE184F4F0DC5910E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE184F4F0DC5910E7)
	 */
	startParticleFxLoopedAtCoord(
		effectName: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		p11: boolean
	): integer;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_LOOPED_ON_ENTITY
	 *
	 * Hash: 0x1AE42C1660FD6517 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1AE42C1660FD6517)
	 */
	startParticleFxLoopedOnEntity(
		effectName: string,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): integer;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_LOOPED_ON_ENTITY_BONE
	 *
	 * Hash: 0xC6EB449E33977F0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6EB449E33977F0B)
	 */
	startParticleFxLoopedOnEntityBone(
		effectName: string,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: integer,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): integer;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_LOOPED_ON_PED_BONE
	 *
	 * Hash: 0xF28DA9F38CD1787C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF28DA9F38CD1787C)
	 */
	startParticleFxLoopedOnPedBone(
		effectName: string,
		ped: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		xRot: number,
		yRot: number,
		zRot: number,
		boneIndex: integer,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): integer;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_NON_LOOPED_AT_COORD
	 *
	 * Hash: 0x25129531F77B9ED3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25129531F77B9ED3)
	 */
	startParticleFxNonLoopedAtCoord(
		effectName: string,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		scale: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): integer;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_ENTITY
	 *
	 * Hash: 0x0D53A3B8DA0809D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D53A3B8DA0809D2)
	 */
	startParticleFxNonLoopedOnEntity(
		effectName: string,
		entity: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
	 *
	 * Hash: 0x0E7E72961BA18619 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E7E72961BA18619)
	 */
	startParticleFxNonLoopedOnPedBone(
		effectName: string,
		ped: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		boneIndex: integer,
		scale: number,
		axisX: boolean,
		axisY: boolean,
		axisZ: boolean
	): boolean;

	/**
	 * Native: GRAPHICS::START_PETROL_TRAIL_DECALS
	 *
	 * Hash: 0x99AC7F0D8B9C893D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99AC7F0D8B9C893D)
	 */
	startPetrolTrailDecals(p0: number): void;

	/**
	 * Native: GRAPHICS::_STOP_BINK_MOVIE
	 *
	 * Hash: 0x63606A61DE68898A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63606A61DE68898A)
	 */
	stopBinkMovie(binkMovie: integer): void;

	/**
	 * Native: GRAPHICS::STOP_PARTICLE_FX_LOOPED
	 *
	 * Hash: 0x8F75998877616996 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F75998877616996)
	 */
	stopParticleFxLooped(ptfxHandle: integer, p1: boolean): void;

	/**
	 * Native: GRAPHICS::TERRAINGRID_ACTIVATE
	 *
	 * Hash: 0xA356990E161C9E65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA356990E161C9E65)
	 */
	terraingridActivate(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::TERRAINGRID_SET_COLOURS
	 *
	 * Hash: 0x5CE62918F8D703C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CE62918F8D703C7)
	 */
	terraingridSetColours(
		lowR: integer,
		lowG: integer,
		lowB: integer,
		lowAlpha: integer,
		r: integer,
		g: integer,
		b: integer,
		alpha: integer,
		highR: integer,
		highG: integer,
		highB: integer,
		highAlpha: integer
	): void;

	/**
	 * Native: GRAPHICS::TERRAINGRID_SET_PARAMS
	 *
	 * Hash: 0x1C4FC5752BCD8E48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C4FC5752BCD8E48)
	 */
	terraingridSetParams(
		x: number,
		y: number,
		z: number,
		p3: number,
		rotation: number,
		p5: number,
		width: number,
		height: number,
		p8: number,
		scale: number,
		glowIntensity: number,
		normalHeight: number,
		heightDiff: number
	): void;

	/**
	 * Native: GRAPHICS::TOGGLE_PAUSED_RENDERPHASES
	 *
	 * Hash: 0xDFC252D8A3E15AB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFC252D8A3E15AB7)
	 */
	togglePausedRenderphases(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::TOGGLE_PLAYER_DAMAGE_OVERLAY
	 *
	 * Hash: 0xE63D7C6EECECB66B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE63D7C6EECECB66B)
	 */
	togglePlayerDamageOverlay(toggle: boolean): void;

	/**
	 * Native: GRAPHICS::TRIGGER_SCREENBLUR_FADE_IN
	 *
	 * Hash: 0xA328A24AAA6B7FDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA328A24AAA6B7FDC)
	 */
	triggerScreenblurFadeIn(transitionTime: number): boolean;

	/**
	 * Native: GRAPHICS::TRIGGER_SCREENBLUR_FADE_OUT
	 *
	 * Hash: 0xEFACC8AEF94430D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFACC8AEF94430D5)
	 */
	triggerScreenblurFadeOut(transitionTime: number): boolean;

	/**
	 * Native: GRAPHICS::UI3DSCENE_IS_AVAILABLE
	 *
	 * Hash: 0xD3A10FC7FD8D98CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3A10FC7FD8D98CD)
	 */
	ui3DsceneIsAvailable(): boolean;

	/**
	 * Native: GRAPHICS::UI3DSCENE_PUSH_PRESET
	 *
	 * Hash: 0xF1CEA8A4198D8E9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1CEA8A4198D8E9A)
	 */
	ui3DscenePushPreset(presetName: string): boolean;

	/**
	 * Native: GRAPHICS::UNPATCH_DECAL_DIFFUSE_MAP
	 *
	 * Hash: 0xB7ED70C49521A61D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7ED70C49521A61D)
	 */
	unpatchDecalDiffuseMap(decalType: integer): void;

	/**
	 * Native: GRAPHICS::UPDATE_LIGHTS_ON_ENTITY
	 *
	 * Hash: 0xDEADC0DEDEADC0DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEADC0DEDEADC0DE)
	 */
	updateLightsOnEntity(entity: Handle): void;

	/**
	 * Native: GRAPHICS::USE_PARTICLE_FX_ASSET
	 *
	 * Hash: 0x6C38AF3693A69A91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C38AF3693A69A91)
	 */
	useParticleFxAsset(name: string): void;

	/**
	 * Native: GRAPHICS::WASH_DECALS_FROM_VEHICLE
	 *
	 * Hash: 0x5B712761429DBC14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B712761429DBC14)
	 */
	washDecalsFromVehicle(vehicle: Handle, p1: number): void;

	/**
	 * Native: GRAPHICS::WASH_DECALS_IN_RANGE
	 *
	 * Hash: 0x9C30613D50A6ADEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C30613D50A6ADEF)
	 */
	washDecalsInRange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	unk: GameGraphicsUnk;
}

interface GameGraphicsMp extends GameGraphics {
	/**
	 * Draw text on screen with properties for font, color, scale and outline.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Graphics::drawText)
	 */
	drawText(text: string, pos: Array3d | Array2d, add: DrawTextOptions): void;

	getLightsState(id: integer): integer;

	/**
	 * This functions sends a notification message to the player.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Graphics::notify)
	 */
	notify(message: string): void;

	resetLightsState(): void;

	/**
	 * Returns world position from screen position.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Graphics::screen2dToWorld3d)
	 */
	screen2dToWorld3d(coords2d: Vector3Mp): Vector3Mp;

	/**
	 * Sets a layer for a rectangle to be drawn on the screen.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Graphics::set2dLayer)
	 */
	set2dLayer(layer: integer): void;

	setLightsState(id: integer, toggle: boolean): void;

	/**
	 * Converts a world coordinate to its relative screen coordinate.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Graphics::world3dToScreen2d)
	 */
	world3dToScreen2d(worldPosition: Vector3Mp): { x: number; y: number } | undefined;
}
