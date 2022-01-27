/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameDlc2Legacy {
	/**
	 * Native: DLC::HAS_CLOUD_REQUESTS_FINISHED
	 *
	 * Hash: 0x46E2B844905BC5F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46E2B844905BC5F0)
	 */
	nullify(unused: integer): boolean;
}

interface GameDlc2 extends GameDlc2Legacy {
	/**
	 * Native: DLC::IS_DLC_PRESENT
	 *
	 * Hash: 0x812595A0644CE1DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x812595A0644CE1DE)
	 */
	isDlcPresent(dlcHash: integer): boolean;
}

interface GameDlc2Mp extends GameDlc2 {}
