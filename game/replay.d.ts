/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameReplayLegacy {}

interface GameReplayUnk {
	/**
	 * Native: REPLAY::_0x5AD3932DAEB1E5D3
	 *
	 * Hash: 0x5AD3932DAEB1E5D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AD3932DAEB1E5D3)
	 */
	_0x5AD3932DAEB1E5D3(): void;

	/**
	 * Native: REPLAY::_0x7E2BD3EF6C205F09
	 *
	 * Hash: 0x7E2BD3EF6C205F09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E2BD3EF6C205F09)
	 */
	_0x7E2BD3EF6C205F09(p0: string, p1: boolean): void;

	/**
	 * Native: REPLAY::_0xE058175F8EAFE79A
	 *
	 * Hash: 0xE058175F8EAFE79A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE058175F8EAFE79A)
	 */
	_0xE058175F8EAFE79A(p0: boolean): void;
}

interface GameReplay extends GameReplayLegacy {
	/**
	 * Native: REPLAY::_ACTIVATE_ROCKSTAR_EDITOR
	 *
	 * Hash: 0x49DA8145672B2725 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49DA8145672B2725)
	 */
	activateRockstarEditor(p0: integer): void;

	/**
	 * Native: REPLAY::_IS_INTERIOR_RENDERING_DISABLED
	 *
	 * Hash: 0x95AB8B5C992C7B58 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95AB8B5C992C7B58)
	 */
	isInteriorRenderingDisabled(): boolean;

	/**
	 * Native: REPLAY::_RESET_EDITOR_VALUES
	 *
	 * Hash: 0x3353D13F09307691 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3353D13F09307691)
	 */
	resetEditorValues(): void;

	unk: GameReplayUnk;
}

interface GameReplayMp extends GameReplay {}
