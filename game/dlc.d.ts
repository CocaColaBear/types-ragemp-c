/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameDlcLegacy {
	/**
	 * Native: DLC::IS_DLC_PRESENT
	 *
	 * Hash: 0x812595A0644CE1DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x812595A0644CE1DE)
	 */
	isDlcPresent(dlcHash: integer): boolean;

	/**
	 * Native: DLC::HAS_CLOUD_REQUESTS_FINISHED
	 *
	 * Hash: 0x46E2B844905BC5F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46E2B844905BC5F0)
	 */
	nullify(unused: integer): boolean;
}

interface GameDlcUnk {
	/**
	 * Native: DLC::_0x241FCA5B1AA14F75
	 *
	 * Hash: 0x241FCA5B1AA14F75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x241FCA5B1AA14F75)
	 */
	_0x241FCA5B1AA14F75(): boolean;

	/**
	 * Native: DLC::_0x9489659372A81585
	 *
	 * Hash: 0x9489659372A81585 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9489659372A81585)
	 */
	_0x9489659372A81585(): boolean;

	/**
	 * Native: DLC::_0xA213B11DFF526300
	 *
	 * Hash: 0xA213B11DFF526300 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA213B11DFF526300)
	 */
	_0xA213B11DFF526300(): boolean;

	/**
	 * Native: DLC::_0xC4637A6D03C24CC3
	 *
	 * Hash: 0xC4637A6D03C24CC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4637A6D03C24CC3)
	 */
	_0xC4637A6D03C24CC3(): boolean;

	/**
	 * Native: DLC::_0xF2E07819EF1A5289
	 *
	 * Hash: 0xF2E07819EF1A5289 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2E07819EF1A5289)
	 */
	_0xF2E07819EF1A5289(): boolean;
}

interface GameDlc extends GameDlcLegacy {
	/**
	 * Native: DLC::_GET_EXTRA_CONTENT_PACK_HAS_BEEN_INSTALLED
	 *
	 * Hash: 0x8D30F648014A92B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D30F648014A92B5)
	 */
	getExtraContentPackHasBeenInstalled(): boolean;

	/**
	 * Native: DLC::GET_IS_LOADING_SCREEN_ACTIVE
	 *
	 * Hash: 0x10D0A8F259E93EC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10D0A8F259E93EC9)
	 */
	getIsLoadingScreenActive(): boolean;

	/**
	 * Native: DLC::HAS_CLOUD_REQUESTS_FINISHED
	 *
	 * Hash: 0x46E2B844905BC5F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46E2B844905BC5F0)
	 */
	hasCloudRequestsFinished(unused: integer): boolean;

	/**
	 * Native: DLC::IS_DLC_PRESENT
	 *
	 * Hash: 0x812595A0644CE1DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x812595A0644CE1DE)
	 */
	isPresent(dlcHash: integer): boolean;

	/**
	 * Native: DLC::ON_ENTER_MP
	 *
	 * Hash: 0x0888C3502DBBEEF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0888C3502DBBEEF5)
	 */
	onEnterMp(): void;

	/**
	 * Native: DLC::ON_ENTER_SP
	 *
	 * Hash: 0xD7C10C4A637992C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7C10C4A637992C9)
	 */
	onEnterSp(): void;

	unk: GameDlcUnk;
}

interface GameDlcMp extends GameDlc {}
