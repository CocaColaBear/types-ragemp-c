/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameRecordingLegacy {
	/**
	 * Native: RECORDING::_IS_RECORDING
	 *
	 * Hash: 0x1897CA71995A90B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1897CA71995A90B4)
	 */
	isRecording(): boolean;
}

interface GameRecordingUnk {
	/**
	 * Native: RECORDING::_0x13B350B8AD0EEE10
	 *
	 * Hash: 0x13B350B8AD0EEE10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13B350B8AD0EEE10)
	 */
	_0x13B350B8AD0EEE10(): void;

	/**
	 * Native: RECORDING::_0x208784099002BC30
	 *
	 * Hash: 0x208784099002BC30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x208784099002BC30)
	 */
	_0x208784099002BC30(missionNameLabel: string, p1: integer): void;

	/**
	 * Native: RECORDING::_0x293220DA1B46CEBC
	 *
	 * Hash: 0x293220DA1B46CEBC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x293220DA1B46CEBC)
	 */
	_0x293220DA1B46CEBC(p0: number, p1: number, p2: integer): void;

	/**
	 * Native: RECORDING::_0x33D47E85B476ABCD
	 *
	 * Hash: 0x33D47E85B476ABCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33D47E85B476ABCD)
	 */
	_0x33D47E85B476ABCD(p0: boolean): boolean;

	/**
	 * Native: RECORDING::_0x4282E08174868BE3
	 *
	 * Hash: 0x4282E08174868BE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4282E08174868BE3)
	 */
	_0x4282E08174868BE3(): integer;

	/**
	 * Native: RECORDING::_0x48621C9FCA3EBD28
	 *
	 * Hash: 0x48621C9FCA3EBD28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48621C9FCA3EBD28)
	 */
	_0x48621C9FCA3EBD28(p0: integer): void;

	/**
	 * Native: RECORDING::_0x66972397E0757E7A
	 *
	 * Hash: 0x66972397E0757E7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66972397E0757E7A)
	 */
	_0x66972397E0757E7A(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: RECORDING::_0x81CBAE94390F9F89
	 *
	 * Hash: 0x81CBAE94390F9F89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81CBAE94390F9F89)
	 */
	_0x81CBAE94390F9F89(): void;

	/**
	 * Native: RECORDING::_0xDF4B952F7D381B95
	 *
	 * Hash: 0xDF4B952F7D381B95 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF4B952F7D381B95)
	 */
	_0xDF4B952F7D381B95(): integer;

	/**
	 * Native: RECORDING::_0xF854439EFBB3B583
	 *
	 * Hash: 0xF854439EFBB3B583 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF854439EFBB3B583)
	 */
	_0xF854439EFBB3B583(): void;
}

interface GameRecording extends GameRecordingLegacy {
	/**
	 * Native: RECORDING::_DISABLE_ROCKSTAR_EDITOR_CAMERA_CHANGES
	 *
	 * Hash: 0xAF66DCEE6609B148 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF66DCEE6609B148)
	 */
	disableRockstarEditorCameraChanges(): void;

	/**
	 * Native: RECORDING::_IS_RECORDING
	 *
	 * Hash: 0x1897CA71995A90B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1897CA71995A90B4)
	 */
	is(): boolean;

	/**
	 * Native: RECORDING::_SAVE_RECORDING_CLIP
	 *
	 * Hash: 0x644546EC5287471B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x644546EC5287471B)
	 */
	saveClip(): boolean;

	/**
	 * Native: RECORDING::_START_RECORDING
	 *
	 * Hash: 0xC3AC2FFF9612AC81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3AC2FFF9612AC81)
	 */
	start(mode: integer): void;

	/**
	 * Native: RECORDING::_STOP_RECORDING_AND_DISCARD_CLIP
	 *
	 * Hash: 0x88BB3507ED41A240 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88BB3507ED41A240)
	 */
	stopAndDiscardClip(): void;

	/**
	 * Native: RECORDING::_STOP_RECORDING_AND_SAVE_CLIP
	 *
	 * Hash: 0x071A5197D6AFC8B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x071A5197D6AFC8B3)
	 */
	stopAndSaveClip(): void;

	/**
	 * Native: RECORDING::_STOP_RECORDING_THIS_FRAME
	 *
	 * Hash: 0xEB2D525B57F42B40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB2D525B57F42B40)
	 */
	stopThisFrame(): void;

	unk: GameRecordingUnk;
}

interface GameRecordingMp extends GameRecording {}
