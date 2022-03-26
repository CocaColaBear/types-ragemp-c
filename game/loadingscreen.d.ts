/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameLoadingscreenLegacy {
	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_SET_LOAD_FREEMODE
	 *
	 * Hash: 0xB0C56BD3D808D863 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0C56BD3D808D863)
	 */
	getBroadcastFinshedLosSound(toggle: boolean): void;
}

interface GameLoadingscreenUnk {
	/**
	 * Native: LOADINGSCREEN::_0xF2CA003F167E21D2
	 *
	 * Hash: 0xF2CA003F167E21D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2CA003F167E21D2)
	 */
	_0xF2CA003F167E21D2(): integer;

	/**
	 * Native: LOADINGSCREEN::_0xFA1E0E893D915215
	 *
	 * Hash: 0xFA1E0E893D915215 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA1E0E893D915215)
	 */
	_0xFA1E0E893D915215(toggle: boolean): void;
}

interface GameLoadingscreen extends GameLoadingscreenLegacy {
	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_GET_LOAD_FREEMODE
	 *
	 * Hash: 0xEF7D17BC6C85264C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF7D17BC6C85264C)
	 */
	getLoadFreemode(): boolean;

	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_GET_LOAD_FREEMODE_WITH_EVENT_NAME
	 *
	 * Hash: 0x8AA464D4E0F6ACCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8AA464D4E0F6ACCD)
	 */
	getLoadFreemodeWithEventName(): boolean;

	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_IS_LOADING_FREEMODE
	 *
	 * Hash: 0xC6DC823253FBB366 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6DC823253FBB366)
	 */
	isLoadingFreemode(): boolean;

	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_SET_IS_LOADING_FREEMODE
	 *
	 * Hash: 0xC7E7181C09F33B69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7E7181C09F33B69)
	 */
	setIsLoadingFreemode(toggle: boolean): void;

	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_SET_LOAD_FREEMODE
	 *
	 * Hash: 0xB0C56BD3D808D863 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0C56BD3D808D863)
	 */
	setLoadFreemode(toggle: boolean): void;

	/**
	 * Native: LOADINGSCREEN::_LOADINGSCREEN_SET_LOAD_FREEMODE_WITH_EVENT_NAME
	 *
	 * Hash: 0xFC309E94546FCDB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC309E94546FCDB5)
	 */
	setLoadFreemodeWithEventName(toggle: boolean): void;

	unk: GameLoadingscreenUnk;
}

interface GameLoadingscreenMp extends GameLoadingscreen {}
