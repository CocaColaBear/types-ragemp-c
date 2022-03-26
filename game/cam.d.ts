/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameCamLegacy {
	/**
	 * Native: CAM::ADD_CAM_SPLINE_NODE
	 *
	 * Hash: 0x8609C75EC438FB3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8609C75EC438FB3B)
	 */
	addCamSplineNode(
		camera: Handle,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		length: integer,
		smoothingStyle: integer,
		rotationOrder: integer
	): void;

	/**
	 * Native: CAM::_ANIMATE_GAMEPLAY_CAM_ZOOM
	 *
	 * Hash: 0xDF2E1F7742402E81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF2E1F7742402E81)
	 */
	animateGameplayCamZoom(p0: number, distance: number): void;

	/**
	 * Native: CAM::_CLAMP_GAMEPLAY_CAM_PITCH
	 *
	 * Hash: 0xA516C198B7DCA1E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA516C198B7DCA1E1)
	 */
	clampGameplayCamPitch(minimum: number, maximum: number): void;

	/**
	 * Native: CAM::_CLAMP_GAMEPLAY_CAM_YAW
	 *
	 * Hash: 0x8F993D26E0CA5E8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F993D26E0CA5E8E)
	 */
	clampGameplayCamYaw(minimum: number, maximum: number): void;

	/**
	 * Native: CAM::CREATE_CAM
	 *
	 * Hash: 0xC3981DCE61D9E13F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3981DCE61D9E13F)
	 */
	createCam(camName: string, p1: boolean): Handle;

	/**
	 * Native: CAM::CREATE_CAMERA
	 *
	 * Hash: 0x5E3CF89C6BCCA67D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E3CF89C6BCCA67D)
	 */
	createCamera(camHash: integer, p1: boolean): Handle;

	/**
	 * Native: CAM::CREATE_CAMERA_WITH_PARAMS
	 *
	 * Hash: 0x6ABFA3E16460F22D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6ABFA3E16460F22D)
	 */
	createCameraWithParams(
		camHash: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: integer
	): Handle;

	/**
	 * Native: CAM::CREATE_CAM_WITH_PARAMS
	 *
	 * Hash: 0xB51194800B257161 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB51194800B257161)
	 */
	createCamWithParams(
		camName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: integer
	): Handle;

	/**
	 * Native: CAM::DESTROY_ALL_CAMS
	 *
	 * Hash: 0x8E5FB15663F79120 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E5FB15663F79120)
	 */
	destroyAllCams(bScriptHostCam: boolean): void;

	/**
	 * Native: CAM::GET_CAM_SPLINE_NODE_INDEX
	 *
	 * Hash: 0xB22B17DF858716A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB22B17DF858716A6)
	 */
	getCamSplineNodeIndex(cam: Handle): integer;

	/**
	 * Native: CAM::GET_CAM_SPLINE_NODE_PHASE
	 *
	 * Hash: 0xD9D0E694C8282C96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9D0E694C8282C96)
	 */
	getCamSplineNodePhase(cam: Handle): number;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_RELATIVE_HEADING
	 *
	 * Hash: 0x743607648ADD4587 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x743607648ADD4587)
	 */
	getGameplayCamRelativeHeading(): number;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_ROT
	 *
	 * Hash: 0x837765A25378F0BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x837765A25378F0BB)
	 */
	getGameplayCamRot(rotationOrder: integer): Vector3Mp;

	/**
	 * Native: CAM::_SET_GAMEPLAY_HINT_ANIM_CLOSEUP
	 *
	 * Hash: 0xE3433EADAAF7EE40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3433EADAAF7EE40)
	 */
	getIsMultiplayerBrief(toggle: boolean): void;

	/**
	 * Native: CAM::IS_CAM_SPLINE_PAUSED
	 *
	 * Hash: 0x0290F35C0AD97864 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0290F35C0AD97864)
	 */
	isCamSplinePaused(p0: integer): boolean;

	/**
	 * Native: CAM::OVERRIDE_CAM_SPLINE_MOTION_BLUR
	 *
	 * Hash: 0x7DCF7C708D292D55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DCF7C708D292D55)
	 */
	overrideCamSplineMotionBlur(cam: Handle, p1: integer, p2: number, p3: number): void;

	/**
	 * Native: CAM::OVERRIDE_CAM_SPLINE_VELOCITY
	 *
	 * Hash: 0x40B62FA033EB0346 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40B62FA033EB0346)
	 */
	overrideCamSplineVelocity(cam: Handle, p1: integer, p2: number, p3: number): void;

	/**
	 * Native: CAM::PLAY_SYNCHRONIZED_CAM_ANIM
	 *
	 * Hash: 0xE32EFE9AB4A9AA0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE32EFE9AB4A9AA0C)
	 */
	playSynchronizedCamAnim(p0: integer, p1: integer, animName: string, animDictionary: string): boolean;

	/**
	 * Native: CAM::RENDER_SCRIPT_CAMS
	 *
	 * p5 defaults to 0
	 *
	 * Hash: 0x07E5B515DB0636FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07E5B515DB0636FC)
	 */
	renderScriptCams(render: boolean, ease: boolean, easeTime: integer, p3: boolean, p4: boolean, p5?: integer): void;

	/**
	 * Native: CAM::_SET_CAM_EFFECT
	 *
	 * Hash: 0x80C8B1846639BB19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80C8B1846639BB19)
	 */
	setCamEffect(p0: integer): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_DURATION
	 *
	 * Hash: 0x1381539FEE034CDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1381539FEE034CDA)
	 */
	setCamSplineDuration(cam: Handle, timeDuration: integer): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_PHASE
	 *
	 * Hash: 0x242B5874F0A4E052 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x242B5874F0A4E052)
	 */
	setCamSplinePhase(cam: Handle, p1: number): void;

	/**
	 * Native: CAM::SET_CINEMATIC_CAM_SHAKE_AMPLITUDE
	 *
	 * Hash: 0xC724C701C30B2FE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC724C701C30B2FE7)
	 */
	setCinematicCamShakeAmplitude(p0: number): void;

	/**
	 * Native: CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE
	 *
	 * Hash: 0x44A113DD6FFC48D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44A113DD6FFC48D1)
	 */
	setFollowPedCamCutsceneChat(camName: string, p1: integer): boolean;

	/**
	 * Native: CAM::SET_FOLLOW_PED_CAM_VIEW_MODE
	 *
	 * Hash: 0x5A4F9EDF1673F704 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A4F9EDF1673F704)
	 */
	setFollowPedCamViewMode(viewMode: integer): void;

	/**
	 * Native: CAM::SET_FOLLOW_VEHICLE_CAM_VIEW_MODE
	 *
	 * Hash: 0xAC253D7842768F48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC253D7842768F48)
	 */
	setFollowVehicleCamViewMode(viewMode: integer): void;

	/**
	 * Native: CAM::SET_FOLLOW_VEHICLE_CAM_ZOOM_LEVEL
	 *
	 * Hash: 0x19464CB6E4078C8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19464CB6E4078C8A)
	 */
	setFollowVehicleCamZoomLevel(zoomLevel: integer): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_RAW_PITCH
	 *
	 * Hash: 0x759E13EBC1C15C5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x759E13EBC1C15C5A)
	 */
	setGameplayCamRawPitch(pitch: number): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_RAW_YAW
	 *
	 * Hash: 0x103991D4A307D472 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x103991D4A307D472)
	 */
	setGameplayCamRawYaw(yaw: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_RELATIVE_HEADING
	 *
	 * Hash: 0xB4EC2312F4E5B1F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4EC2312F4E5B1F1)
	 */
	setGameplayCamRelativeHeading(heading: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_RELATIVE_PITCH
	 *
	 * Hash: 0x6D0858B8EDFD2B7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D0858B8EDFD2B7D)
	 */
	setGameplayCamRelativePitch(angle: number, scalingFactor: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_SHAKE_AMPLITUDE
	 *
	 * Hash: 0xA87E00932DB4D85D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA87E00932DB4D85D)
	 */
	setGameplayCamShakeAmplitude(amplitude: number): void;

	/**
	 * Native: CAM::_0x9DFE13ECDC1EC196
	 *
	 * Hash: 0x9DFE13ECDC1EC196 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DFE13ECDC1EC196)
	 */
	setTimeIdleDrop(p0: boolean, p1: boolean): void;

	/**
	 * Native: CAM::SHAKE_CINEMATIC_CAM
	 *
	 * Hash: 0xDCE214D9ED58F3CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCE214D9ED58F3CF)
	 */
	shakeCinematicCam(p0: string, p1: number): void;

	/**
	 * Native: CAM::SHAKE_GAMEPLAY_CAM
	 *
	 * Hash: 0xFD55E49555E017CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD55E49555E017CF)
	 */
	shakeGameplayCam(shakeName: string, intensity: number): void;

	/**
	 * Native: CAM::STOP_CINEMATIC_CAM_SHAKING
	 *
	 * Hash: 0x2238E588E588A6D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2238E588E588A6D7)
	 */
	stopCinematicCamShaking(p0: boolean): void;

	/**
	 * Native: CAM::STOP_GAMEPLAY_CAM_SHAKING
	 *
	 * Hash: 0x0EF93E9F3D08C178 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EF93E9F3D08C178)
	 */
	stopGameplayCamShaking(p0: boolean): void;

	/**
	 * Native: CAM::STOP_RENDERING_SCRIPT_CAMS_USING_CATCH_UP
	 *
	 * Hash: 0xC819F3CBB62BF692 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC819F3CBB62BF692)
	 */
	stopRenderingScriptCamsUsingCatchUp(render: boolean, p1: number, p2: integer, p3: integer): void;
}

interface GameCamUnk {
	/**
	 * Native: CAM::_0x0225778816FDC28C
	 *
	 * Hash: 0x0225778816FDC28C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0225778816FDC28C)
	 */
	_0x0225778816FDC28C(p0: number): void;

	/**
	 * Native: CAM::_0x0AA27680A0BD43FA
	 *
	 * Hash: 0x0AA27680A0BD43FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AA27680A0BD43FA)
	 */
	_0x0AA27680A0BD43FA(): void;

	/**
	 * Native: CAM::_0x12DED8CA53D47EA5
	 *
	 * Hash: 0x12DED8CA53D47EA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12DED8CA53D47EA5)
	 */
	_0x12DED8CA53D47EA5(p0: number): void;

	/**
	 * Native: CAM::_0x17FCA7199A530203
	 *
	 * Hash: 0x17FCA7199A530203 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17FCA7199A530203)
	 */
	_0x17FCA7199A530203(): integer;

	/**
	 * Native: CAM::_0x1F2300CB7FA7B7F6
	 *
	 * Hash: 0x1F2300CB7FA7B7F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F2300CB7FA7B7F6)
	 */
	_0x1F2300CB7FA7B7F6(): integer;

	/**
	 * Native: CAM::_0x202A5ED9CE01D6E7
	 *
	 * Hash: 0x202A5ED9CE01D6E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x202A5ED9CE01D6E7)
	 */
	_0x202A5ED9CE01D6E7(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer
	): void;

	/**
	 * Native: CAM::_0x247ACBC4ABBC9D1C
	 *
	 * Hash: 0x247ACBC4ABBC9D1C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x247ACBC4ABBC9D1C)
	 */
	_0x247ACBC4ABBC9D1C(p0: boolean): void;

	/**
	 * Native: CAM::_0x271017B9BA825366
	 *
	 * Hash: 0x271017B9BA825366 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x271017B9BA825366)
	 */
	_0x271017B9BA825366(p0: integer, p1: boolean): void;

	/**
	 * Native: CAM::_0x271401846BD26E92
	 *
	 * Hash: 0x271401846BD26E92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x271401846BD26E92)
	 */
	_0x271401846BD26E92(p0: boolean, p1: boolean): void;

	/**
	 * Native: CAM::_0x28B022A17B068A3A
	 *
	 * Hash: 0x28B022A17B068A3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28B022A17B068A3A)
	 */
	_0x28B022A17B068A3A(p0: number, p1: number): void;

	/**
	 * Native: CAM::_0x2F7F2B26DD3F18EE
	 *
	 * Hash: 0x2F7F2B26DD3F18EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F7F2B26DD3F18EE)
	 */
	_0x2F7F2B26DD3F18EE(p0: number, p1: number): void;

	/**
	 * Native: CAM::_0x3044240D2E0FA842
	 *
	 * Hash: 0x3044240D2E0FA842 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3044240D2E0FA842)
	 */
	_0x3044240D2E0FA842(): boolean;

	/**
	 * Native: CAM::_0x324C5AA411DA7737
	 *
	 * Hash: 0x324C5AA411DA7737 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x324C5AA411DA7737)
	 */
	_0x324C5AA411DA7737(p0: integer): void;

	/**
	 * Native: CAM::_0x380B4968D1E09E55
	 *
	 * Hash: 0x380B4968D1E09E55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x380B4968D1E09E55)
	 */
	_0x380B4968D1E09E55(): void;

	/**
	 * Native: CAM::_0x4008EDF7D6E48175
	 *
	 * Hash: 0x4008EDF7D6E48175 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4008EDF7D6E48175)
	 */
	_0x4008EDF7D6E48175(p0: boolean): void;

	/**
	 * Native: CAM::_0x469F2ECDEC046337
	 *
	 * Hash: 0x469F2ECDEC046337 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x469F2ECDEC046337)
	 */
	_0x469F2ECDEC046337(p0: boolean): void;

	/**
	 * Native: CAM::_0x4879E4FE39074CDF
	 *
	 * Hash: 0x4879E4FE39074CDF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4879E4FE39074CDF)
	 */
	_0x4879E4FE39074CDF(): boolean;

	/**
	 * Native: CAM::_0x487A82C650EB7799
	 *
	 * Hash: 0x487A82C650EB7799 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x487A82C650EB7799)
	 */
	_0x487A82C650EB7799(p0: number): void;

	/**
	 * Native: CAM::_0x59424BD75174C9B1
	 *
	 * Hash: 0x59424BD75174C9B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59424BD75174C9B1)
	 */
	_0x59424BD75174C9B1(): void;

	/**
	 * Native: CAM::_0x5A43C76F7FC7BA5F
	 *
	 * Hash: 0x5A43C76F7FC7BA5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A43C76F7FC7BA5F)
	 */
	_0x5A43C76F7FC7BA5F(): void;

	/**
	 * Native: CAM::_0x5C41E6BABC9E2112
	 *
	 * Hash: 0x5C41E6BABC9E2112 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C41E6BABC9E2112)
	 */
	_0x5C41E6BABC9E2112(p0: integer): void;

	/**
	 * Native: CAM::_0x5C48A1D6E3B33179
	 *
	 * Hash: 0x5C48A1D6E3B33179 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C48A1D6E3B33179)
	 */
	_0x5C48A1D6E3B33179(cam: Handle): boolean;

	/**
	 * Native: CAM::_0x5D96CFB59DA076A0
	 *
	 * Hash: 0x5D96CFB59DA076A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D96CFB59DA076A0)
	 */
	_0x5D96CFB59DA076A0(vehicle: Handle, p1: integer, p2: number): void;

	/**
	 * Native: CAM::_0x62374889A4D59F72
	 *
	 * Hash: 0x62374889A4D59F72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62374889A4D59F72)
	 */
	_0x62374889A4D59F72(): void;

	/**
	 * Native: CAM::_0x62ECFCFDEE7885D6
	 *
	 * Hash: 0x62ECFCFDEE7885D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62ECFCFDEE7885D6)
	 */
	_0x62ECFCFDEE7885D6(): void;

	/**
	 * Native: CAM::_0x661B5C8654ADD825
	 *
	 * Hash: 0x661B5C8654ADD825 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x661B5C8654ADD825)
	 */
	_0x661B5C8654ADD825(cam: Handle, p1: boolean): void;

	/**
	 * Native: CAM::_0x705A276EBFF3133D
	 *
	 * Hash: 0x705A276EBFF3133D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x705A276EBFF3133D)
	 */
	_0x705A276EBFF3133D(): boolean;

	/**
	 * Native: CAM::_0x79C0E43EB9B944E2
	 *
	 * Hash: 0x79C0E43EB9B944E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79C0E43EB9B944E2)
	 */
	_0x79C0E43EB9B944E2(hash: integer): boolean;

	/**
	 * Native: CAM::_0x7B8A361C1813FBEF
	 *
	 * Hash: 0x7B8A361C1813FBEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B8A361C1813FBEF)
	 */
	_0x7B8A361C1813FBEF(): void;

	/**
	 * Native: CAM::_0x91EF6EE6419E5B97
	 *
	 * Hash: 0x91EF6EE6419E5B97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91EF6EE6419E5B97)
	 */
	_0x91EF6EE6419E5B97(p0: boolean): void;

	/**
	 * Native: CAM::_0x9DFE13ECDC1EC196
	 *
	 * Hash: 0x9DFE13ECDC1EC196 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DFE13ECDC1EC196)
	 */
	_0x9DFE13ECDC1EC196(p0: boolean, p1: boolean): void;

	/**
	 * Native: CAM::_0x9F97DA93681F87EA
	 *
	 * Hash: 0x9F97DA93681F87EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F97DA93681F87EA)
	 */
	_0x9F97DA93681F87EA(): void;

	/**
	 * Native: CAM::_0xA2767257A320FC82
	 *
	 * Hash: 0xA2767257A320FC82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2767257A320FC82)
	 */
	_0xA2767257A320FC82(p0: integer, p1: boolean): void;

	/**
	 * Native: CAM::_0xA7092AFE81944852
	 *
	 * Hash: 0xA7092AFE81944852 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7092AFE81944852)
	 */
	_0xA7092AFE81944852(): void;

	/**
	 * Native: CAM::_0xAABD62873FFB1A33
	 *
	 * Hash: 0xAABD62873FFB1A33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAABD62873FFB1A33)
	 */
	_0xAABD62873FFB1A33(p0: integer, p1: integer): void;

	/**
	 * Native: CAM::_0xB1381B97F70C7B30
	 *
	 * Hash: 0xB1381B97F70C7B30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1381B97F70C7B30)
	 */
	_0xB1381B97F70C7B30(): void;

	/**
	 * Native: CAM::_0xBF72910D0F26F025
	 *
	 * Hash: 0xBF72910D0F26F025 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF72910D0F26F025)
	 */
	_0xBF72910D0F26F025(): integer;

	/**
	 * Native: CAM::_0xC8391C309684595A
	 *
	 * Hash: 0xC8391C309684595A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8391C309684595A)
	 */
	_0xC8391C309684595A(): void;

	/**
	 * Native: CAM::_0xC8B5C4A79CC18B94
	 *
	 * Hash: 0xC8B5C4A79CC18B94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8B5C4A79CC18B94)
	 */
	_0xC8B5C4A79CC18B94(cam: Handle): void;

	/**
	 * Native: CAM::_0xCCD078C2665D2973
	 *
	 * Hash: 0xCCD078C2665D2973 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCD078C2665D2973)
	 */
	_0xCCD078C2665D2973(p0: boolean): void;

	/**
	 * Native: CAM::_0xCED08CBE8EBB97C7
	 *
	 * Hash: 0xCED08CBE8EBB97C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCED08CBE8EBB97C7)
	 */
	_0xCED08CBE8EBB97C7(p0: number, p1: number): void;

	/**
	 * Native: CAM::_0xD7360051C885628B
	 *
	 * Hash: 0xD7360051C885628B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7360051C885628B)
	 */
	_0xD7360051C885628B(): integer;

	/**
	 * Native: CAM::_0xDB90C6CCA48940F1
	 *
	 * Hash: 0xDB90C6CCA48940F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB90C6CCA48940F1)
	 */
	_0xDB90C6CCA48940F1(p0: boolean): void;

	/**
	 * Native: CAM::_0xDC9DA9E8789F5246
	 *
	 * Hash: 0xDC9DA9E8789F5246 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC9DA9E8789F5246)
	 */
	_0xDC9DA9E8789F5246(): void;

	/**
	 * Native: CAM::_0xDD79DF9F4D26E1C9
	 *
	 * Hash: 0xDD79DF9F4D26E1C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD79DF9F4D26E1C9)
	 */
	_0xDD79DF9F4D26E1C9(): void;

	/**
	 * Native: CAM::_0xE111A7C0D200CBC5
	 *
	 * Hash: 0xE111A7C0D200CBC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE111A7C0D200CBC5)
	 */
	_0xE111A7C0D200CBC5(p0: integer, p1: number): void;

	/**
	 * Native: CAM::_0xEAF0FA793D05C592
	 *
	 * Hash: 0xEAF0FA793D05C592 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAF0FA793D05C592)
	 */
	_0xEAF0FA793D05C592(): integer;

	/**
	 * Native: CAM::_0xF55E4046F6F831DC
	 *
	 * Hash: 0xF55E4046F6F831DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF55E4046F6F831DC)
	 */
	_0xF55E4046F6F831DC(p0: integer, p1: number): void;

	/**
	 * Native: CAM::_0xFD3151CD37EA2245
	 *
	 * Hash: 0xFD3151CD37EA2245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD3151CD37EA2245)
	 */
	_0xFD3151CD37EA2245(entity: Handle): void;
}

interface GameCam extends GameCamLegacy {
	/**
	 * Native: CAM::ADD_CAM_SPLINE_NODE
	 *
	 * Hash: 0x8609C75EC438FB3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8609C75EC438FB3B)
	 */
	addSplineNode(
		camera: Handle,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		length: integer,
		smoothingStyle: integer,
		rotationOrder: integer
	): void;

	/**
	 * Native: CAM::ADD_CAM_SPLINE_NODE_USING_CAMERA
	 *
	 * Hash: 0x0FB82563989CF4FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FB82563989CF4FB)
	 */
	addSplineNodeUsingCamera(cam: Handle, cam2: Handle, p2: integer, p3: integer): void;

	/**
	 * Native: CAM::ADD_CAM_SPLINE_NODE_USING_CAMERA_FRAME
	 *
	 * Hash: 0x0A9F2A468B328E74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A9F2A468B328E74)
	 */
	addSplineNodeUsingCameraFrame(cam: Handle, cam2: Handle, p2: integer, p3: integer): void;

	/**
	 * Native: CAM::ADD_CAM_SPLINE_NODE_USING_GAMEPLAY_FRAME
	 *
	 * Hash: 0x609278246A29CA34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x609278246A29CA34)
	 */
	addSplineNodeUsingGameplayFrame(cam: Handle, p1: integer, p2: integer): void;

	/**
	 * Native: CAM::ANIMATED_SHAKE_CAM
	 *
	 * Hash: 0xA2746EEAE3E577CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2746EEAE3E577CD)
	 */
	animatedShake(cam: Handle, p1: string, p2: string, p3: string, amplitude: number): void;

	/**
	 * Native: CAM::ANIMATED_SHAKE_SCRIPT_GLOBAL
	 *
	 * Hash: 0xC2EAE3FB8CDBED31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2EAE3FB8CDBED31)
	 */
	animatedShakeScriptGlobal(p0: string, p1: string, p2: string, p3: number): void;

	/**
	 * Native: CAM::_ANIMATE_GAMEPLAY_CAM_ZOOM
	 *
	 * Hash: 0xDF2E1F7742402E81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF2E1F7742402E81)
	 */
	animateGameplayZoom(p0: number, distance: number): void;

	/**
	 * Native: CAM::ATTACH_CAM_TO_ENTITY
	 *
	 * Hash: 0xFEDB7D269E8C60E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEDB7D269E8C60E3)
	 */
	attachToEntity(
		cam: Handle,
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		isRelative: boolean
	): void;

	/**
	 * Native: CAM::ATTACH_CAM_TO_PED_BONE
	 *
	 * Hash: 0x61A3DBA14AB7F411 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61A3DBA14AB7F411)
	 */
	attachToPedBone(
		cam: Handle,
		ped: Handle,
		boneIndex: integer,
		x: number,
		y: number,
		z: number,
		heading: boolean
	): void;

	/**
	 * Native: CAM::_ATTACH_CAM_TO_PED_BONE_2
	 *
	 * Hash: 0x149916F50C34A40D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x149916F50C34A40D)
	 */
	attachToPedBone2(
		cam: Handle,
		ped: Handle,
		boneIndex: integer,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean
	): void;

	/**
	 * Native: CAM::_ATTACH_CAM_TO_VEHICLE_BONE
	 *
	 * Hash: 0x8DB3F12A02CAEF72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DB3F12A02CAEF72)
	 */
	attachToVehicleBone(
		cam: Handle,
		vehicle: Handle,
		boneIndex: integer,
		relativeRotation: boolean,
		rotX: number,
		rotY: number,
		rotZ: number,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		fixedDirection: boolean
	): void;

	/**
	 * Native: CAM::_CLAMP_GAMEPLAY_CAM_PITCH
	 *
	 * Hash: 0xA516C198B7DCA1E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA516C198B7DCA1E1)
	 */
	clampGameplayPitch(minimum: number, maximum: number): void;

	/**
	 * Native: CAM::_CLAMP_GAMEPLAY_CAM_YAW
	 *
	 * Hash: 0x8F993D26E0CA5E8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F993D26E0CA5E8E)
	 */
	clampGameplayYaw(minimum: number, maximum: number): void;

	/**
	 * Native: CAM::CREATE_CAM
	 *
	 * Hash: 0xC3981DCE61D9E13F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3981DCE61D9E13F)
	 */
	create(camName: string, p1: boolean): Handle;

	/**
	 * Native: CAM::CREATE_CINEMATIC_SHOT
	 *
	 * Hash: 0x741B0129D4560F31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x741B0129D4560F31)
	 */
	createCinematicShot(p0: integer, p1: integer, p2: integer, entity: Handle): void;

	/**
	 * Native: CAM::CREATE_CAMERA
	 *
	 * Hash: 0x5E3CF89C6BCCA67D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E3CF89C6BCCA67D)
	 */
	createEra(camHash: integer, p1: boolean): Handle;

	/**
	 * Native: CAM::CREATE_CAMERA_WITH_PARAMS
	 *
	 * Hash: 0x6ABFA3E16460F22D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6ABFA3E16460F22D)
	 */
	createEraWithParams(
		camHash: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: integer
	): Handle;

	/**
	 * Native: CAM::CREATE_CAM_WITH_PARAMS
	 *
	 * Hash: 0xB51194800B257161 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB51194800B257161)
	 */
	createWithParams(
		camName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fov: number,
		p8: boolean,
		p9: integer
	): Handle;

	/**
	 * Native: CAM::DESTROY_CAM
	 *
	 * Hash: 0x865908C81A2C22E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x865908C81A2C22E9)
	 */
	destroy(cam: Handle, bScriptHostCam: boolean): void;

	/**
	 * Native: CAM::DESTROY_ALL_CAMS
	 *
	 * Hash: 0x8E5FB15663F79120 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E5FB15663F79120)
	 */
	destroyAllS(bScriptHostCam: boolean): void;

	/**
	 * Native: CAM::DETACH_CAM
	 *
	 * Hash: 0xA2FABBE87F4BAD82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2FABBE87F4BAD82)
	 */
	detach(cam: Handle): void;

	/**
	 * Native: CAM::DISABLE_AIM_CAM_THIS_UPDATE
	 *
	 * Hash: 0x1A31FE0049E542F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A31FE0049E542F6)
	 */
	disableAimThisUpdate(): void;

	/**
	 * Native: CAM::_DISABLE_CAM_COLLISION_FOR_ENTITY
	 *
	 * Hash: 0x2AED6301F67007D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AED6301F67007D5)
	 */
	disableCollisionForEntity(entity: Handle): void;

	/**
	 * Native: CAM::DISABLE_CAM_COLLISION_FOR_OBJECT
	 *
	 * Hash: 0x49482F9FCD825AAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49482F9FCD825AAA)
	 */
	disableCollisionForObject(entity: Handle): void;

	/**
	 * Native: CAM::_DISABLE_FIRST_PERSON_CAM_THIS_FRAME
	 *
	 * Hash: 0xDE2EF5DA284CC8DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE2EF5DA284CC8DF)
	 */
	disableFirstPersonThisFrame(): void;

	/**
	 * Native: CAM::_DISABLE_VEHICLE_FIRST_PERSON_CAM_THIS_FRAME
	 *
	 * Hash: 0xADFF1B2A555F5FBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADFF1B2A555F5FBA)
	 */
	disableVehicleFirstPersonThisFrame(): void;

	/**
	 * Native: CAM::DOES_CAM_EXIST
	 *
	 * Hash: 0xA7A932170592B50E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7A932170592B50E)
	 */
	doesExist(cam: Handle): boolean;

	/**
	 * Native: CAM::DO_SCREEN_FADE_IN
	 *
	 * Hash: 0xD4E8E24955024033 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4E8E24955024033)
	 */
	doScreenFadeIn(duration: integer): void;

	/**
	 * Native: CAM::DO_SCREEN_FADE_OUT
	 *
	 * Hash: 0x891B5B39AC6302AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x891B5B39AC6302AF)
	 */
	doScreenFadeOut(duration: integer): void;

	/**
	 * Native: CAM::_ENABLE_CROSSHAIR_THIS_FRAME
	 *
	 * Hash: 0xEA7F0AD7E9BA676F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA7F0AD7E9BA676F)
	 */
	enableCrosshairThisFrame(): void;

	/**
	 * Native: CAM::FORCE_CINEMATIC_RENDERING_THIS_UPDATE
	 *
	 * Hash: 0xA41BCD7213805AAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA41BCD7213805AAC)
	 */
	forceCinematicRenderingThisUpdate(p0: boolean): void;

	/**
	 * Native: CAM::_GET_CAM_ACTIVE_VIEW_MODE_CONTEXT
	 *
	 * Hash: 0x19CAFA3C87F7C2FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19CAFA3C87F7C2FF)
	 */
	getActiveViewModeContext(): integer;

	/**
	 * Native: CAM::GET_CAM_ANIM_CURRENT_PHASE
	 *
	 * Hash: 0xA10B2DB49E92A6B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA10B2DB49E92A6B0)
	 */
	getAnimCurrentPhase(cam: Handle): number;

	/**
	 * Native: CAM::GET_CAM_COORD
	 *
	 * Hash: 0xBAC038F7459AE5AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAC038F7459AE5AE)
	 */
	getCoord(cam: Handle): Vector3Mp;

	/**
	 * Native: CAM::_GET_DEBUG_CAMERA
	 *
	 * Hash: 0x77C3CEC46BE286F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77C3CEC46BE286F6)
	 */
	getDebugEra(): Handle;

	/**
	 * Native: CAM::GET_CAM_FAR_CLIP
	 *
	 * Hash: 0xB60A9CFEB21CA6AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB60A9CFEB21CA6AA)
	 */
	getFarClip(cam: Handle): number;

	/**
	 * Native: CAM::GET_CAM_FAR_DOF
	 *
	 * Hash: 0x255F8DAFD540D397 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x255F8DAFD540D397)
	 */
	getFarDof(cam: Handle): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_COORD
	 *
	 * Hash: 0xA200EB1EE790F448 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA200EB1EE790F448)
	 */
	getFinalRenderedCoord(): Vector3Mp;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_FAR_CLIP
	 *
	 * Hash: 0xDFC8CBC606FDB0FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFC8CBC606FDB0FC)
	 */
	getFinalRenderedFarClip(): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_FAR_DOF
	 *
	 * Hash: 0x9780F32BCAF72431 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9780F32BCAF72431)
	 */
	getFinalRenderedFarDof(): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_FOV
	 *
	 * Hash: 0x80EC114669DAEFF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80EC114669DAEFF4)
	 */
	getFinalRenderedFov(): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_IN_WHEN_FRIENDLY_FOV
	 *
	 * Hash: 0x5F35F6732C3FBBA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F35F6732C3FBBA0)
	 */
	getFinalRenderedInWhenFriendlyFov(player: Handle): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_IN_WHEN_FRIENDLY_ROT
	 *
	 * Hash: 0x26903D9CD1175F2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26903D9CD1175F2C)
	 */
	getFinalRenderedInWhenFriendlyRot(player: Handle, rotationOrder: integer): Vector3Mp;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_MOTION_BLUR_STRENGTH
	 *
	 * Hash: 0x162F9D995753DC19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x162F9D995753DC19)
	 */
	getFinalRenderedMotionBlurStrength(): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_NEAR_CLIP
	 *
	 * Hash: 0xD0082607100D7193 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0082607100D7193)
	 */
	getFinalRenderedNearClip(): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_NEAR_DOF
	 *
	 * Hash: 0xA03502FC581F7D9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA03502FC581F7D9B)
	 */
	getFinalRenderedNearDof(): number;

	/**
	 * Native: CAM::GET_FINAL_RENDERED_CAM_ROT
	 *
	 * Hash: 0x5B4E4C817FCC2DFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B4E4C817FCC2DFB)
	 */
	getFinalRenderedRot(rotationOrder: integer): Vector3Mp;

	/**
	 * Native: CAM::GET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR
	 *
	 * Hash: 0x7EC52CC40597D170 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EC52CC40597D170)
	 */
	getFirstPersonAimZoomFactor(): number;

	/**
	 * Native: CAM::GET_FOCUS_PED_ON_SCREEN
	 *
	 * Hash: 0x89215EC747DF244A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89215EC747DF244A)
	 */
	getFocusPedOnScreen(
		p0: number,
		p1: integer,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: integer,
		p8: integer
	): Handle;

	/**
	 * Native: CAM::GET_FOLLOW_PED_CAM_VIEW_MODE
	 *
	 * Hash: 0x8D4D46230B2C353A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D4D46230B2C353A)
	 */
	getFollowPedViewMode(): integer;

	/**
	 * Native: CAM::GET_FOLLOW_PED_CAM_ZOOM_LEVEL
	 *
	 * Hash: 0x33E6C8EFD0CD93E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33E6C8EFD0CD93E9)
	 */
	getFollowPedZoomLevel(): integer;

	/**
	 * Native: CAM::GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
	 *
	 * Hash: 0xA4FF579AC0E3AAAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4FF579AC0E3AAAE)
	 */
	getFollowVehicleViewMode(): integer;

	/**
	 * Native: CAM::GET_FOLLOW_VEHICLE_CAM_ZOOM_LEVEL
	 *
	 * Hash: 0xEE82280AB767B690 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE82280AB767B690)
	 */
	getFollowVehicleZoomLevel(): integer;

	/**
	 * Native: CAM::GET_CAM_FOV
	 *
	 * Hash: 0xC3330A45CCCDB26A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3330A45CCCDB26A)
	 */
	getFov(cam: Handle): number;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_COORD
	 *
	 * Hash: 0x14D6F5678D8F1B37 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14D6F5678D8F1B37)
	 */
	getGameplayCoord(): Vector3Mp;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_FOV
	 *
	 * Hash: 0x65019750A0324133 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65019750A0324133)
	 */
	getGameplayFov(): number;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_RELATIVE_HEADING
	 *
	 * Hash: 0x743607648ADD4587 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x743607648ADD4587)
	 */
	getGameplayRelativeHeading(): number;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_RELATIVE_PITCH
	 *
	 * Hash: 0x3A6867B4845BEDA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A6867B4845BEDA2)
	 */
	getGameplayRelativePitch(): number;

	/**
	 * Native: CAM::GET_GAMEPLAY_CAM_ROT
	 *
	 * Hash: 0x837765A25378F0BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x837765A25378F0BB)
	 */
	getGameplayRot(rotationOrder: integer): Vector3Mp;

	/**
	 * Native: CAM::GET_CAM_NEAR_CLIP
	 *
	 * Hash: 0xC520A34DAFBF24B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC520A34DAFBF24B1)
	 */
	getNearClip(cam: Handle): number;

	/**
	 * Native: CAM::GET_RENDERING_CAM
	 *
	 * Hash: 0x5234F9F10919EABA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5234F9F10919EABA)
	 */
	getRendering(): Handle;

	/**
	 * Native: CAM::GET_CAM_ROT
	 *
	 * Hash: 0x7D304C1C955E3E12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D304C1C955E3E12)
	 */
	getRot(cam: Handle, rotationOrder: integer): Vector3Mp;

	/**
	 * Native: CAM::GET_CAM_SPLINE_NODE_INDEX
	 *
	 * Hash: 0xB22B17DF858716A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB22B17DF858716A6)
	 */
	getSplineNodeIndex(cam: Handle): integer;

	/**
	 * Native: CAM::GET_CAM_SPLINE_NODE_PHASE
	 *
	 * Hash: 0xD9D0E694C8282C96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9D0E694C8282C96)
	 */
	getSplineNodePhase(cam: Handle): number;

	/**
	 * Native: CAM::GET_CAM_SPLINE_PHASE
	 *
	 * Hash: 0xB5349E36C546509A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5349E36C546509A)
	 */
	getSplinePhase(cam: Handle): number;

	/**
	 * Native: CAM::GET_CAM_VIEW_MODE_FOR_CONTEXT
	 *
	 * Hash: 0xEE778F8C7E1142E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE778F8C7E1142E2)
	 */
	getViewModeForContext(context: integer): integer;

	/**
	 * Native: CAM::INVALIDATE_IDLE_CAM
	 *
	 * Hash: 0xF4F2C0D4EE209E20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4F2C0D4EE209E20)
	 */
	invalidateIdle(): void;

	/**
	 * Native: CAM::_INVALIDATE_VEHICLE_IDLE_CAM
	 *
	 * Hash: 0x9E4CFFF989258472 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E4CFFF989258472)
	 */
	invalidateVehicleIdle(): void;

	/**
	 * Native: CAM::IS_CAM_ACTIVE
	 *
	 * Hash: 0xDFB2B516207D3534 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFB2B516207D3534)
	 */
	isActive(cam: Handle): boolean;

	/**
	 * Native: CAM::IS_AIM_CAM_ACTIVE
	 *
	 * Hash: 0x68EDDA28A5976D07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68EDDA28A5976D07)
	 */
	isAimActive(): boolean;

	/**
	 * Native: CAM::_IS_AIM_CAM_THIRD_PERSON_ACTIVE
	 *
	 * Hash: 0x74BD83EA840F6BC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74BD83EA840F6BC9)
	 */
	isAimThirdPersonActive(): boolean;

	/**
	 * Native: CAM::_IS_CINEMATIC_CAM_ACTIVE
	 *
	 * Hash: 0xF5F1E89A970B7796 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5F1E89A970B7796)
	 */
	isCinematicActive(): boolean;

	/**
	 * Native: CAM::IS_CINEMATIC_IDLE_CAM_RENDERING
	 *
	 * Hash: 0xCA9D2AA3E326D720 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA9D2AA3E326D720)
	 */
	isCinematicIdleRendering(): boolean;

	/**
	 * Native: CAM::IS_CINEMATIC_CAM_RENDERING
	 *
	 * Hash: 0xB15162CB5826E9E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB15162CB5826E9E8)
	 */
	isCinematicRendering(): boolean;

	/**
	 * Native: CAM::IS_CINEMATIC_CAM_SHAKING
	 *
	 * Hash: 0xBBC08F6B4CB8FF0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBC08F6B4CB8FF0A)
	 */
	isCinematicShaking(): boolean;

	/**
	 * Native: CAM::IS_CINEMATIC_SHOT_ACTIVE
	 *
	 * Hash: 0xCC9F3371A7C28BC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC9F3371A7C28BC9)
	 */
	isCinematicShotActive(p0: integer): boolean;

	/**
	 * Native: CAM::IS_FIRST_PERSON_AIM_CAM_ACTIVE
	 *
	 * Hash: 0x5E346D934122613F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E346D934122613F)
	 */
	isFirstPersonAimActive(): boolean;

	/**
	 * Native: CAM::IS_FOLLOW_PED_CAM_ACTIVE
	 *
	 * Hash: 0xC6D3D26810C8E0F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6D3D26810C8E0F9)
	 */
	isFollowPedActive(): boolean;

	/**
	 * Native: CAM::IS_FOLLOW_VEHICLE_CAM_ACTIVE
	 *
	 * Hash: 0xCBBDE6D335D6D496 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBBDE6D335D6D496)
	 */
	isFollowVehicleActive(): boolean;

	/**
	 * Native: CAM::IS_GAMEPLAY_HINT_ACTIVE
	 *
	 * Hash: 0xE520FF1AD2785B40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE520FF1AD2785B40)
	 */
	isGameplayHintActive(): boolean;

	/**
	 * Native: CAM::IS_GAMEPLAY_CAM_LOOKING_BEHIND
	 *
	 * Hash: 0x70FDA869F3317EA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70FDA869F3317EA9)
	 */
	isGameplayLookingBehind(): boolean;

	/**
	 * Native: CAM::IS_GAMEPLAY_CAM_RENDERING
	 *
	 * Hash: 0x39B5D1B10383F0C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39B5D1B10383F0C8)
	 */
	isGameplayRendering(): boolean;

	/**
	 * Native: CAM::IS_GAMEPLAY_CAM_SHAKING
	 *
	 * Hash: 0x016C090630DF1F89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x016C090630DF1F89)
	 */
	isGameplayShaking(): boolean;

	/**
	 * Native: CAM::IS_CAM_INTERPOLATING
	 *
	 * Hash: 0x036F97C908C2B52C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x036F97C908C2B52C)
	 */
	isInterpolating(cam: Handle): boolean;

	/**
	 * Native: CAM::_IS_IN_VEHICLE_CAM_DISABLED
	 *
	 * Hash: 0x4F32C0D5A90A9B40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F32C0D5A90A9B40)
	 */
	isInVehicleDisabled(): boolean;

	/**
	 * Native: CAM::IS_CAM_PLAYING_ANIM
	 *
	 * Hash: 0xC90621D8A0CEECF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC90621D8A0CEECF2)
	 */
	isPlayingAnim(cam: Handle, animName: string, animDictionary: string): boolean;

	/**
	 * Native: CAM::IS_CAM_RENDERING
	 *
	 * Hash: 0x02EC0AF5C5A49B7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02EC0AF5C5A49B7A)
	 */
	isRendering(cam: Handle): boolean;

	/**
	 * Native: CAM::IS_SCREEN_FADED_IN
	 *
	 * Hash: 0x5A859503B0C08678 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A859503B0C08678)
	 */
	isScreenFadedIn(): boolean;

	/**
	 * Native: CAM::IS_SCREEN_FADED_OUT
	 *
	 * Hash: 0xB16FCE9DDC7BA182 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB16FCE9DDC7BA182)
	 */
	isScreenFadedOut(): boolean;

	/**
	 * Native: CAM::IS_SCREEN_FADING_IN
	 *
	 * Hash: 0x5C544BC6C57AC575 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C544BC6C57AC575)
	 */
	isScreenFadingIn(): boolean;

	/**
	 * Native: CAM::IS_SCREEN_FADING_OUT
	 *
	 * Hash: 0x797AC7CB535BA28F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x797AC7CB535BA28F)
	 */
	isScreenFadingOut(): boolean;

	/**
	 * Native: CAM::IS_SCRIPT_GLOBAL_SHAKING
	 *
	 * Hash: 0xC912AF078AF19212 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC912AF078AF19212)
	 */
	isScriptGlobalShaking(): boolean;

	/**
	 * Native: CAM::IS_CAM_SHAKING
	 *
	 * Hash: 0x6B24BFE83A2BE47B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B24BFE83A2BE47B)
	 */
	isShaking(cam: Handle): boolean;

	/**
	 * Native: CAM::IS_SPHERE_VISIBLE
	 *
	 * Hash: 0xE33D59DA70B58FDF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE33D59DA70B58FDF)
	 */
	isSphereVisible(x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: CAM::IS_CAM_SPLINE_PAUSED
	 *
	 * Hash: 0x0290F35C0AD97864 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0290F35C0AD97864)
	 */
	isSplinePaused(p0: integer): boolean;

	/**
	 * Native: CAM::OVERRIDE_CAM_SPLINE_MOTION_BLUR
	 *
	 * Hash: 0x7DCF7C708D292D55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DCF7C708D292D55)
	 */
	overrideSplineMotionBlur(cam: Handle, p1: integer, p2: number, p3: number): void;

	/**
	 * Native: CAM::OVERRIDE_CAM_SPLINE_VELOCITY
	 *
	 * Hash: 0x40B62FA033EB0346 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40B62FA033EB0346)
	 */
	overrideSplineVelocity(cam: Handle, p1: integer, p2: number, p3: number): void;

	/**
	 * Native: CAM::PLAY_CAM_ANIM
	 *
	 * Hash: 0x9A2D0FB2E7852392 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A2D0FB2E7852392)
	 */
	playAnim(
		cam: Handle,
		animName: string,
		animDictionary: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p9: boolean,
		p10: integer
	): boolean;

	/**
	 * Native: CAM::PLAY_SYNCHRONIZED_CAM_ANIM
	 *
	 * Hash: 0xE32EFE9AB4A9AA0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE32EFE9AB4A9AA0C)
	 */
	playSynchronizedAnim(p0: integer, p1: integer, animName: string, animDictionary: string): boolean;

	/**
	 * Native: CAM::POINT_CAM_AT_COORD
	 *
	 * Hash: 0xF75497BB865F0803 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF75497BB865F0803)
	 */
	pointAtCoord(cam: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: CAM::POINT_CAM_AT_ENTITY
	 *
	 * Hash: 0x5640BFF86B16E8DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5640BFF86B16E8DC)
	 */
	pointAtEntity(cam: Handle, entity: Handle, p2: number, p3: number, p4: number, p5: boolean): void;

	/**
	 * Native: CAM::POINT_CAM_AT_PED_BONE
	 *
	 * Hash: 0x68B2B5F33BA63C41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68B2B5F33BA63C41)
	 */
	pointAtPedBone(cam: Handle, ped: Handle, boneIndex: integer, x: number, y: number, z: number, p6: boolean): void;

	/**
	 * Native: CAM::RENDER_SCRIPT_CAMS
	 *
	 * Hash: 0x07E5B515DB0636FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07E5B515DB0636FC)
	 */
	renderScriptS(render: boolean, ease: boolean, easeTime: integer, p3: boolean, p4: boolean, p5: integer): void;

	/**
	 * Native: CAM::_REPLAY_FREE_CAM_GET_MAX_RANGE
	 *
	 * Hash: 0x8BFCEB5EA1B161B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BFCEB5EA1B161B6)
	 */
	replayFreeGetMaxRange(): number;

	/**
	 * Native: CAM::SET_CAM_ACTIVE
	 *
	 * Hash: 0x026FB97D0A425F84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x026FB97D0A425F84)
	 */
	setActive(cam: Handle, active: boolean): void;

	/**
	 * Native: CAM::SET_CAM_ACTIVE_WITH_INTERP
	 *
	 * Hash: 0x9FBDA379383A52A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FBDA379383A52A4)
	 */
	setActiveWithInterp(
		camTo: Handle,
		camFrom: Handle,
		duration: integer,
		easeLocation: integer,
		easeRotation: integer
	): void;

	/**
	 * Native: CAM::SET_CAM_AFFECTS_AIMING
	 *
	 * Hash: 0x8C1DC7770C51DC8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C1DC7770C51DC8D)
	 */
	setAffectsAiming(cam: Handle, toggle: boolean): void;

	/**
	 * Native: CAM::SET_CAM_ANIM_CURRENT_PHASE
	 *
	 * Hash: 0x4145A4C44FF3B5A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4145A4C44FF3B5A6)
	 */
	setAnimCurrentPhase(cam: Handle, phase: number): void;

	/**
	 * Native: CAM::SET_CINEMATIC_BUTTON_ACTIVE
	 *
	 * Hash: 0x51669F7D1FB53D9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51669F7D1FB53D9F)
	 */
	setCinematicButtonActive(p0: boolean): void;

	/**
	 * Native: CAM::SET_CINEMATIC_MODE_ACTIVE
	 *
	 * Hash: 0xDCF0754AC3D6FD4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCF0754AC3D6FD4E)
	 */
	setCinematicModeActive(toggle: boolean): void;

	/**
	 * Native: CAM::SET_CINEMATIC_CAM_SHAKE_AMPLITUDE
	 *
	 * Hash: 0xC724C701C30B2FE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC724C701C30B2FE7)
	 */
	setCinematicShakeAmplitude(p0: number): void;

	/**
	 * Native: CAM::SET_CAM_COORD
	 *
	 * Hash: 0x4D41783FB745E42E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D41783FB745E42E)
	 */
	setCoord(cam: Handle, posX: number, posY: number, posZ: number): void;

	/**
	 * Native: CAM::SET_CAM_DEBUG_NAME
	 *
	 * Hash: 0x1B93E0107865DD40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B93E0107865DD40)
	 */
	setDebugName(camera: Handle, name: string): void;

	/**
	 * Native: CAM::_SET_CAM_DOF_FNUMBER_OF_LENS
	 *
	 * Hash: 0x7DD234D6F3914C5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DD234D6F3914C5B)
	 */
	setDofFnumberOfLens(camera: Handle, p1: number): void;

	/**
	 * Native: CAM::_SET_CAM_DOF_FOCAL_LENGTH_MULTIPLIER
	 *
	 * Hash: 0x47B595D60664CFFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47B595D60664CFFA)
	 */
	setDofFocalLengthMultiplier(camera: Handle, multiplier: number): void;

	/**
	 * Native: CAM::_SET_CAM_DOF_FOCUS_DISTANCE_BIAS
	 *
	 * Hash: 0xC669EEA5D031B7DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC669EEA5D031B7DE)
	 */
	setDofFocusDistanceBias(camera: Handle, p1: number): void;

	/**
	 * Native: CAM::_SET_CAM_DOF_MAX_NEAR_IN_FOCUS_DISTANCE
	 *
	 * Hash: 0xC3654A441402562D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3654A441402562D)
	 */
	setDofMaxNearInFocusDistance(camera: Handle, p1: number): void;

	/**
	 * Native: CAM::_SET_CAM_DOF_MAX_NEAR_IN_FOCUS_DISTANCE_BLEND_LEVEL
	 *
	 * Hash: 0x2C654B4943BDDF7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C654B4943BDDF7C)
	 */
	setDofMaxNearInFocusDistanceBlendLevel(camera: Handle, p1: number): void;

	/**
	 * Native: CAM::SET_CAM_DOF_PLANES
	 *
	 * Hash: 0x3CF48F6F96E749DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3CF48F6F96E749DC)
	 */
	setDofPlanes(cam: Handle, p1: number, p2: number, p3: number, p4: number): void;

	/**
	 * Native: CAM::SET_CAM_DOF_STRENGTH
	 *
	 * Hash: 0x5EE29B4D7D5DF897 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EE29B4D7D5DF897)
	 */
	setDofStrength(cam: Handle, dofStrength: number): void;

	/**
	 * Native: CAM::_SET_CAM_EFFECT
	 *
	 * Hash: 0x80C8B1846639BB19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80C8B1846639BB19)
	 */
	setEffect(p0: integer): void;

	/**
	 * Native: CAM::SET_CAM_FAR_CLIP
	 *
	 * Hash: 0xAE306F2A904BF86E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE306F2A904BF86E)
	 */
	setFarClip(cam: Handle, farClip: number): void;

	/**
	 * Native: CAM::SET_CAM_FAR_DOF
	 *
	 * Hash: 0xEDD91296CD01AEE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDD91296CD01AEE0)
	 */
	setFarDof(cam: Handle, farDOF: number): void;

	/**
	 * Native: CAM::SET_FIRST_PERSON_AIM_CAM_NEAR_CLIP_THIS_UPDATE
	 *
	 * Hash: 0x0AF7B437918103B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AF7B437918103B3)
	 */
	setFirstPersonAimNearClipThisUpdate(p0: number): void;

	/**
	 * Native: CAM::SET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR
	 *
	 * Hash: 0x70894BD0915C5BCA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70894BD0915C5BCA)
	 */
	setFirstPersonAimZoomFactor(zoomFactor: number): void;

	/**
	 * Native: CAM::_SET_FIRST_PERSON_CAM_PITCH_RANGE
	 *
	 * Hash: 0xBCFC632DB7673BF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCFC632DB7673BF0)
	 */
	setFirstPersonPitchRange(p0: number, p1: number): void;

	/**
	 * Native: CAM::SET_FLY_CAM_COORD_AND_CONSTRAIN
	 *
	 * Hash: 0xC91C6C55199308CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC91C6C55199308CA)
	 */
	setFlyCoordAndConstrain(cam: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: CAM::SET_FLY_CAM_HORIZONTAL_RESPONSE
	 *
	 * Hash: 0x503F5920162365B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x503F5920162365B2)
	 */
	setFlyHorizontalResponse(cam: Handle, p1: number, p2: number, p3: number): void;

	/**
	 * Native: CAM::SET_FLY_CAM_MAX_HEIGHT
	 *
	 * Hash: 0xF9D02130ECDD1D77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9D02130ECDD1D77)
	 */
	setFlyMaxHeight(cam: Handle, height: number): void;

	/**
	 * Native: CAM::_SET_FLY_CAM_VERTICAL_SPEED_MULTIPLIER
	 *
	 * Hash: 0xE827B9382CFB41BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE827B9382CFB41BA)
	 */
	setFlyVerticalSpeedMultiplier(cam: Handle, p1: number, p2: number, p3: number): void;

	/**
	 * Native: CAM::SET_FOLLOW_PED_CAM_THIS_UPDATE
	 *
	 * Hash: 0x44A113DD6FFC48D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44A113DD6FFC48D1)
	 */
	setFollowPedThisUpdate(camName: string, p1: integer): boolean;

	/**
	 * Native: CAM::SET_FOLLOW_PED_CAM_VIEW_MODE
	 *
	 * Hash: 0x5A4F9EDF1673F704 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A4F9EDF1673F704)
	 */
	setFollowPedViewMode(viewMode: integer): void;

	/**
	 * Native: CAM::_SET_FOLLOW_TURRET_SEAT_CAM
	 *
	 * Hash: 0x5C90CAB09951A12F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C90CAB09951A12F)
	 */
	setFollowTurretSeat(seatIndex: integer): void;

	/**
	 * Native: CAM::SET_FOLLOW_VEHICLE_CAM_VIEW_MODE
	 *
	 * Hash: 0xAC253D7842768F48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC253D7842768F48)
	 */
	setFollowVehicleViewMode(viewMode: integer): void;

	/**
	 * Native: CAM::SET_FOLLOW_VEHICLE_CAM_ZOOM_LEVEL
	 *
	 * Hash: 0x19464CB6E4078C8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19464CB6E4078C8A)
	 */
	setFollowVehicleZoomLevel(zoomLevel: integer): void;

	/**
	 * Native: CAM::SET_CAM_FOV
	 *
	 * Hash: 0xB13C14F66A00D047 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB13C14F66A00D047)
	 */
	setFov(cam: Handle, fieldOfView: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_COORD_HINT
	 *
	 * Hash: 0xD51ADCD2D8BC0FB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD51ADCD2D8BC0FB3)
	 */
	setGameplayCoordHint(
		x: number,
		y: number,
		z: number,
		duration: integer,
		blendOutDuration: integer,
		blendInDuration: integer,
		unk: integer
	): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_ENTITY_HINT
	 *
	 * Hash: 0x189E955A8313E298 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x189E955A8313E298)
	 */
	setGameplayEntityHint(
		entity: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		p4: boolean,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer
	): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_FOLLOW_PED_THIS_UPDATE
	 *
	 * Hash: 0x8BBACBF51DA047A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BBACBF51DA047A8)
	 */
	setGameplayFollowPedThisUpdate(ped: Handle): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_HASH
	 *
	 * Hash: 0x425A920FDB9A0DDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x425A920FDB9A0DDA)
	 */
	setGameplayHash(camName: string): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_HINT_ANIM_CLOSEUP
	 *
	 * Hash: 0xE3433EADAAF7EE40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3433EADAAF7EE40)
	 */
	setGameplayHintAnimCloseup(toggle: boolean): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_HINT_ANIM_OFFSETX
	 *
	 * Hash: 0x5D7B620DAE436138 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D7B620DAE436138)
	 */
	setGameplayHintAnimOffsetx(xOffset: number): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_HINT_ANIM_OFFSETY
	 *
	 * Hash: 0xC92717EF615B6704 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC92717EF615B6704)
	 */
	setGameplayHintAnimOffsety(yOffset: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_HINT_BASE_ORBIT_PITCH_OFFSET
	 *
	 * Hash: 0xD1F8363DFAD03848 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1F8363DFAD03848)
	 */
	setGameplayHintBaseOrbitPitchOffset(value: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_HINT_FOLLOW_DISTANCE_SCALAR
	 *
	 * Hash: 0xF8BDBF3D573049A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8BDBF3D573049A1)
	 */
	setGameplayHintFollowDistanceScalar(value: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_HINT_FOV
	 *
	 * Hash: 0x513403FB9C56211F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x513403FB9C56211F)
	 */
	setGameplayHintFov(FOV: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_OBJECT_HINT
	 *
	 * Hash: 0x83E87508A2CA2AC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83E87508A2CA2AC6)
	 */
	setGameplayObjectHint(
		p0: integer,
		p1: number,
		p2: number,
		p3: number,
		p4: boolean,
		p5: integer,
		p6: integer,
		p7: integer
	): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_PED_HINT
	 *
	 * Hash: 0x2B486269ACD548D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B486269ACD548D3)
	 */
	setGameplayPedHint(
		p0: Handle,
		x1: number,
		y1: number,
		z1: number,
		p4: boolean,
		duration: integer,
		blendOutDuration: integer,
		blendInDuration: integer
	): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_RAW_PITCH
	 *
	 * Hash: 0x759E13EBC1C15C5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x759E13EBC1C15C5A)
	 */
	setGameplayRawPitch(pitch: number): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_RAW_YAW
	 *
	 * Hash: 0x103991D4A307D472 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x103991D4A307D472)
	 */
	setGameplayRawYaw(yaw: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_RELATIVE_HEADING
	 *
	 * Hash: 0xB4EC2312F4E5B1F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4EC2312F4E5B1F1)
	 */
	setGameplayRelativeHeading(heading: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_RELATIVE_PITCH
	 *
	 * Hash: 0x6D0858B8EDFD2B7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D0858B8EDFD2B7D)
	 */
	setGameplayRelativePitch(angle: number, scalingFactor: number): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_RELATIVE_ROTATION
	 *
	 * Hash: 0x48608C3464F58AB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48608C3464F58AB4)
	 */
	setGameplayRelativeRotation(roll: number, pitch: number, yaw: number): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_CAM_SHAKE_AMPLITUDE
	 *
	 * Hash: 0xA87E00932DB4D85D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA87E00932DB4D85D)
	 */
	setGameplayShakeAmplitude(amplitude: number): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_VEHICLE_CAMERA
	 *
	 * Hash: 0x21E253A7F8DA5DFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21E253A7F8DA5DFB)
	 */
	setGameplayVehicleCamera(vehicleName: string): void;

	/**
	 * Native: CAM::_SET_GAMEPLAY_CAM_VEHICLE_CAMERA_NAME
	 *
	 * Hash: 0x11FA5D3479C7DD47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11FA5D3479C7DD47)
	 */
	setGameplayVehicleCameraName(vehicleModel: integer): void;

	/**
	 * Native: CAM::SET_GAMEPLAY_VEHICLE_HINT
	 *
	 * Hash: 0xA2297E18F3E71C2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2297E18F3E71C2E)
	 */
	setGameplayVehicleHint(
		vehicle: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		p4: boolean,
		time: integer,
		easeInTime: integer,
		easeOutTime: integer
	): void;

	/**
	 * Native: CAM::SET_CAM_INHERIT_ROLL_VEHICLE
	 *
	 * Hash: 0x45F1DE9C34B93AE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45F1DE9C34B93AE6)
	 */
	setInheritRollVehicle(cam: Handle, p1: boolean): void;

	/**
	 * Native: CAM::SET_IN_VEHICLE_CAM_STATE_THIS_UPDATE
	 *
	 * Hash: 0xE9EA16D6E54CDCA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE9EA16D6E54CDCA4)
	 */
	setInVehicleStateThisUpdate(p0: Handle, p1: integer): void;

	/**
	 * Native: CAM::SET_CAM_MOTION_BLUR_STRENGTH
	 *
	 * Hash: 0x6F0F77FBA9A8F2E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F0F77FBA9A8F2E6)
	 */
	setMotionBlurStrength(cam: Handle, strength: number): void;

	/**
	 * Native: CAM::SET_CAM_NEAR_CLIP
	 *
	 * Hash: 0xC7848EFCCC545182 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7848EFCCC545182)
	 */
	setNearClip(cam: Handle, nearClip: number): void;

	/**
	 * Native: CAM::SET_CAM_NEAR_DOF
	 *
	 * Hash: 0x3FA4BF0A7AB7DE2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FA4BF0A7AB7DE2C)
	 */
	setNearDof(cam: Handle, nearDOF: number): void;

	/**
	 * Native: CAM::SET_CAM_PARAMS
	 *
	 * Hash: 0xBFD8727AEA3CCEBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFD8727AEA3CCEBA)
	 */
	setParams(
		cam: Handle,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		fieldOfView: number,
		p8: integer,
		p9: integer,
		p10: integer,
		p11: integer
	): void;

	/**
	 * Native: CAM::SET_CAM_ROT
	 *
	 * Hash: 0x85973643155D0B07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85973643155D0B07)
	 */
	setRot(cam: Handle, rotX: number, rotY: number, rotZ: number, rotationOrder: integer): void;

	/**
	 * Native: CAM::SET_CAM_SHAKE_AMPLITUDE
	 *
	 * Hash: 0xD93DB43B82BC0D00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD93DB43B82BC0D00)
	 */
	setShakeAmplitude(cam: Handle, amplitude: number): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_DURATION
	 *
	 * Hash: 0x1381539FEE034CDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1381539FEE034CDA)
	 */
	setSplineDuration(cam: Handle, timeDuration: integer): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_NODE_EASE
	 *
	 * Hash: 0x83B8201ED82A9A2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83B8201ED82A9A2D)
	 */
	setSplineNodeEase(cam: Handle, easingFunction: integer, p2: integer, p3: number): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_NODE_EXTRA_FLAGS
	 *
	 * Hash: 0x7BF1A54AE67AC070 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7BF1A54AE67AC070)
	 */
	setSplineNodeExtraFlags(cam: Handle, p1: integer, flags: integer): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_NODE_VELOCITY_SCALE
	 *
	 * Hash: 0xA6385DEB180F319F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6385DEB180F319F)
	 */
	setSplineNodeVelocityScale(cam: Handle, p1: integer, scale: number): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_PHASE
	 *
	 * Hash: 0x242B5874F0A4E052 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x242B5874F0A4E052)
	 */
	setSplinePhase(cam: Handle, p1: number): void;

	/**
	 * Native: CAM::SET_CAM_SPLINE_SMOOTHING_STYLE
	 *
	 * Hash: 0xD1B0F412F109EA5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1B0F412F109EA5D)
	 */
	setSplineSmoothingStyle(cam: Handle, smoothingStyle: integer): void;

	/**
	 * Native: CAM::SET_THIRD_PERSON_AIM_CAM_NEAR_CLIP_THIS_UPDATE
	 *
	 * Hash: 0x42156508606DE65E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42156508606DE65E)
	 */
	setThirdPersonAimNearClipThisUpdate(p0: number): void;

	/**
	 * Native: CAM::SET_USE_HI_DOF
	 *
	 * Hash: 0xA13B0222F3D94A94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA13B0222F3D94A94)
	 */
	setUseHiDof(): void;

	/**
	 * Native: CAM::SET_CAM_USE_SHALLOW_DOF_MODE
	 *
	 * Hash: 0x16A96863A17552BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16A96863A17552BB)
	 */
	setUseShallowDofMode(cam: Handle, toggle: boolean): void;

	/**
	 * Native: CAM::SET_CAM_VIEW_MODE_FOR_CONTEXT
	 *
	 * Hash: 0x2A2173E46DAECD12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A2173E46DAECD12)
	 */
	setViewModeForContext(context: integer, viewMode: integer): void;

	/**
	 * Native: CAM::SET_WIDESCREEN_BORDERS
	 *
	 * Hash: 0xDCD4EA924F42D01A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCD4EA924F42D01A)
	 */
	setWidescreenBorders(p0: boolean, p1: integer): void;

	/**
	 * Native: CAM::SHAKE_CAM
	 *
	 * Hash: 0x6A25241C340D3822 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A25241C340D3822)
	 */
	shake(cam: Handle, type: string, amplitude: number): void;

	/**
	 * Native: CAM::SHAKE_CINEMATIC_CAM
	 *
	 * Hash: 0xDCE214D9ED58F3CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCE214D9ED58F3CF)
	 */
	shakeCinematic(p0: string, p1: number): void;

	/**
	 * Native: CAM::SHAKE_GAMEPLAY_CAM
	 *
	 * Hash: 0xFD55E49555E017CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD55E49555E017CF)
	 */
	shakeGameplay(shakeName: string, intensity: number): void;

	/**
	 * Native: CAM::SHAKE_SCRIPT_GLOBAL
	 *
	 * Hash: 0xF4C8CF9E353AFECA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4C8CF9E353AFECA)
	 */
	shakeScriptGlobal(p0: string, p1: number): void;

	/**
	 * Native: CAM::STOP_CINEMATIC_CAM_SHAKING
	 *
	 * Hash: 0x2238E588E588A6D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2238E588E588A6D7)
	 */
	stopCinematicShaking(p0: boolean): void;

	/**
	 * Native: CAM::STOP_CINEMATIC_SHOT
	 *
	 * Hash: 0x7660C6E75D3A078E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7660C6E75D3A078E)
	 */
	stopCinematicShot(p0: integer): void;

	/**
	 * Native: CAM::STOP_CUTSCENE_CAM_SHAKING
	 *
	 * Hash: 0xDB629FFD9285FA06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB629FFD9285FA06)
	 */
	stopCutsceneShaking(): void;

	/**
	 * Native: CAM::STOP_GAMEPLAY_HINT
	 *
	 * Hash: 0xF46C581C61718916 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF46C581C61718916)
	 */
	stopGameplayHint(p0: boolean): void;

	/**
	 * Native: CAM::STOP_GAMEPLAY_CAM_SHAKING
	 *
	 * Hash: 0x0EF93E9F3D08C178 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EF93E9F3D08C178)
	 */
	stopGameplayShaking(p0: boolean): void;

	/**
	 * Native: CAM::STOP_CAM_POINTING
	 *
	 * Hash: 0xF33AB75780BA57DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF33AB75780BA57DE)
	 */
	stopPointing(cam: Handle): void;

	/**
	 * Native: CAM::STOP_SCRIPT_GLOBAL_SHAKING
	 *
	 * Hash: 0x1C9D7949FA533490 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C9D7949FA533490)
	 */
	stopScriptGlobalShaking(p0: boolean): void;

	/**
	 * Native: CAM::STOP_CAM_SHAKING
	 *
	 * Hash: 0xBDECF64367884AC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDECF64367884AC3)
	 */
	stopShaking(cam: Handle, p1: boolean): void;

	/**
	 * Native: CAM::_USE_STUNT_CAMERA_THIS_FRAME
	 *
	 * Hash: 0x6493CF69859B116A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6493CF69859B116A)
	 */
	useStuntEraThisFrame(): void;

	unk: GameCamUnk;
}

interface GameCamMp extends GameCam {}
