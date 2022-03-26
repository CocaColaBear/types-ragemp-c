/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameMobileLegacy {
	/**
	 * Native: MOBILE::CREATE_MOBILE_PHONE
	 *
	 * Hash: 0xA4E8E696C532FBC7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4E8E696C532FBC7)
	 */
	createMobilePhone(phoneType: integer): void;

	/**
	 * Native: MOBILE::GET_MOBILE_PHONE_POSITION
	 *
	 * Hash: 0x584FDFDA48805B86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x584FDFDA48805B86)
	 */
	getMobilePhonePosition(): Vector3Mp;

	/**
	 * Native: MOBILE::GET_MOBILE_PHONE_RENDER_ID
	 *
	 * Hash: 0xB4A53E05F68B6FA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4A53E05F68B6FA1)
	 */
	getMobilePhoneRenderId(): integer;

	/**
	 * Native: MOBILE::GET_MOBILE_PHONE_ROTATION
	 *
	 * Hash: 0x1CEFB61F193070AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CEFB61F193070AE)
	 */
	getMobilePhoneRotation(p1: Handle): Vector3Mp;

	/**
	 * Native: MOBILE::_CELL_CAM_MOVE_FINGER
	 *
	 * Hash: 0x95C9E72F3D7DEC9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95C9E72F3D7DEC9B)
	 */
	moveFinger(direction: integer): void;

	/**
	 * Native: MOBILE::SCRIPT_IS_MOVING_MOBILE_PHONE_OFFSCREEN
	 *
	 * Hash: 0xF511F759238A5122 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF511F759238A5122)
	 */
	scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;

	/**
	 * Native: MOBILE::SET_MOBILE_PHONE_POSITION
	 *
	 * Hash: 0x693A5C6D6734085B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x693A5C6D6734085B)
	 */
	setMobilePhonePosition(posX: number, posY: number, posZ: number): void;

	/**
	 * Native: MOBILE::SET_MOBILE_PHONE_ROTATION
	 *
	 * Hash: 0xBB779C0CA917E865 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB779C0CA917E865)
	 */
	setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: integer): void;

	/**
	 * Native: MOBILE::SET_MOBILE_PHONE_SCALE
	 *
	 * Hash: 0xCBDD322A73D6D932 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBDD322A73D6D932)
	 */
	setMobilePhoneScale(scale: number): void;

	/**
	 * Native: MOBILE::_CELL_CAM_SET_LEAN
	 *
	 * Hash: 0x44E44169EF70138E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44E44169EF70138E)
	 */
	setPhoneLean(toggle: boolean): void;
}

interface GameMobileUnk {
	/**
	 * Native: MOBILE::_0x15E69E2802C24B8D
	 *
	 * Hash: 0x15E69E2802C24B8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15E69E2802C24B8D)
	 */
	_0x15E69E2802C24B8D(p0: number): void;

	/**
	 * Native: MOBILE::_0x1B0B4AEED5B9B41C
	 *
	 * Hash: 0x1B0B4AEED5B9B41C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B0B4AEED5B9B41C)
	 */
	_0x1B0B4AEED5B9B41C(p0: number): void;

	/**
	 * Native: MOBILE::_0x3117D84EFA60F77B
	 *
	 * Hash: 0x3117D84EFA60F77B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3117D84EFA60F77B)
	 */
	_0x3117D84EFA60F77B(p0: number): void;

	/**
	 * Native: MOBILE::_0x466DA42C89865553
	 *
	 * Hash: 0x466DA42C89865553 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x466DA42C89865553)
	 */
	_0x466DA42C89865553(p0: number): void;

	/**
	 * Native: MOBILE::_0x53F4892D18EC90A4
	 *
	 * Hash: 0x53F4892D18EC90A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53F4892D18EC90A4)
	 */
	_0x53F4892D18EC90A4(p0: number): void;

	/**
	 * Native: MOBILE::_0xA2CCBE62CD4C91A4
	 *
	 * Hash: 0xA2CCBE62CD4C91A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2CCBE62CD4C91A4)
	 */
	_0xA2CCBE62CD4C91A4(): integer;

	/**
	 * Native: MOBILE::_0xAC2890471901861C
	 *
	 * Hash: 0xAC2890471901861C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC2890471901861C)
	 */
	_0xAC2890471901861C(p0: number): void;

	/**
	 * Native: MOBILE::_0xD6ADE981781FCA09
	 *
	 * Hash: 0xD6ADE981781FCA09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6ADE981781FCA09)
	 */
	_0xD6ADE981781FCA09(p0: number): void;

	/**
	 * Native: MOBILE::_0xF1E22DC13F5EEBAD
	 *
	 * Hash: 0xF1E22DC13F5EEBAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1E22DC13F5EEBAD)
	 */
	_0xF1E22DC13F5EEBAD(p0: number): void;
}

interface GameMobile extends GameMobileLegacy {
	/**
	 * Native: MOBILE::CAN_PHONE_BE_SEEN_ON_SCREEN
	 *
	 * Hash: 0xC4E2813898C97A4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4E2813898C97A4B)
	 */
	canPhoneBeSeenOnScreen(): boolean;

	/**
	 * Native: MOBILE::CELL_CAM_ACTIVATE
	 *
	 * Hash: 0xFDE8F069C542D126 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDE8F069C542D126)
	 */
	cellCamActivate(p0: boolean, p1: boolean): void;

	/**
	 * Native: MOBILE::_CELL_CAM_DISABLE_THIS_FRAME
	 *
	 * Hash: 0x015C49A93E3E086E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x015C49A93E3E086E)
	 */
	cellCamDisableThisFrame(toggle: boolean): void;

	/**
	 * Native: MOBILE::CELL_CAM_IS_CHAR_VISIBLE_NO_FACE_CHECK
	 *
	 * Hash: 0x439E9BC95B7E7FBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x439E9BC95B7E7FBE)
	 */
	cellCamIsCharVisibleNoFaceCheck(entity: Handle): boolean;

	/**
	 * Native: MOBILE::_CELL_CAM_MOVE_FINGER
	 *
	 * Hash: 0x95C9E72F3D7DEC9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95C9E72F3D7DEC9B)
	 */
	cellCamMoveFinger(direction: integer): void;

	/**
	 * Native: MOBILE::_CELL_CAM_SET_LEAN
	 *
	 * Hash: 0x44E44169EF70138E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44E44169EF70138E)
	 */
	cellCamSetLean(toggle: boolean): void;

	/**
	 * Native: MOBILE::CREATE_MOBILE_PHONE
	 *
	 * Hash: 0xA4E8E696C532FBC7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4E8E696C532FBC7)
	 */
	createPhone(phoneType: integer): void;

	/**
	 * Native: MOBILE::DESTROY_MOBILE_PHONE
	 *
	 * Hash: 0x3BC861DF703E5097 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BC861DF703E5097)
	 */
	destroyPhone(): void;

	/**
	 * Native: MOBILE::GET_MOBILE_PHONE_POSITION
	 *
	 * Hash: 0x584FDFDA48805B86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x584FDFDA48805B86)
	 */
	getPhonePosition(): Vector3Mp;

	/**
	 * Native: MOBILE::GET_MOBILE_PHONE_RENDER_ID
	 *
	 * Hash: 0xB4A53E05F68B6FA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4A53E05F68B6FA1)
	 */
	getPhoneRenderId(): integer;

	/**
	 * Native: MOBILE::GET_MOBILE_PHONE_ROTATION
	 *
	 * Hash: 0x1CEFB61F193070AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CEFB61F193070AE)
	 */
	getPhoneRotation(p1: Handle): Vector3Mp;

	/**
	 * Native: MOBILE::SCRIPT_IS_MOVING_MOBILE_PHONE_OFFSCREEN
	 *
	 * Hash: 0xF511F759238A5122 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF511F759238A5122)
	 */
	scriptIsMovingPhoneOffscreen(toggle: boolean): void;

	/**
	 * Native: MOBILE::SET_MOBILE_PHONE_POSITION
	 *
	 * Hash: 0x693A5C6D6734085B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x693A5C6D6734085B)
	 */
	setPhonePosition(posX: number, posY: number, posZ: number): void;

	/**
	 * Native: MOBILE::SET_MOBILE_PHONE_ROTATION
	 *
	 * Hash: 0xBB779C0CA917E865 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB779C0CA917E865)
	 */
	setPhoneRotation(rotX: number, rotY: number, rotZ: number, p3: integer): void;

	/**
	 * Native: MOBILE::SET_MOBILE_PHONE_SCALE
	 *
	 * Hash: 0xCBDD322A73D6D932 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBDD322A73D6D932)
	 */
	setPhoneScale(scale: number): void;

	/**
	 * Native: MOBILE::_SET_MOBILE_PHONE_UNK
	 *
	 * Hash: 0x375A706A5C2FD084 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x375A706A5C2FD084)
	 */
	setPhoneUnk(toggle: boolean): void;

	unk: GameMobileUnk;
}

interface GameMobileMp extends GameMobile {}
