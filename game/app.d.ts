/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameAppLegacy {
	/**
	 * Native: APP::APP_DELETE_APP_DATA
	 *
	 * Hash: 0x44151AEA95C8A003 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44151AEA95C8A003)
	 */
	appDeleteAppData(appName: string): boolean;

	/**
	 * Native: APP::APP_GET_FLOAT
	 *
	 * Hash: 0x1514FB24C02C2322 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1514FB24C02C2322)
	 */
	appGetFloat(property: string): number;

	/**
	 * Native: APP::APP_GET_INT
	 *
	 * Hash: 0xD3A58A12C77D9D4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3A58A12C77D9D4B)
	 */
	appGetInt(property: string): integer;

	/**
	 * Native: APP::APP_GET_STRING
	 *
	 * Hash: 0x749B023950D2311C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x749B023950D2311C)
	 */
	appGetString(property: string): string;

	/**
	 * Native: APP::APP_HAS_SYNCED_DATA
	 *
	 * Hash: 0xCA52279A7271517F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA52279A7271517F)
	 */
	appHasSyncedData(appName: string): boolean;

	/**
	 * Native: APP::APP_SET_APP
	 *
	 * Hash: 0xCFD0406ADAF90D2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFD0406ADAF90D2B)
	 */
	appSetApp(appName: string): void;

	/**
	 * Native: APP::APP_SET_BLOCK
	 *
	 * Hash: 0x262AB456A3D21F93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x262AB456A3D21F93)
	 */
	appSetBlock(blockName: string): void;

	/**
	 * Native: APP::APP_SET_FLOAT
	 *
	 * Hash: 0x25D7687C68E0DAA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25D7687C68E0DAA4)
	 */
	appSetFloat(property: string, value: number): void;

	/**
	 * Native: APP::APP_SET_INT
	 *
	 * Hash: 0x607E8E3D3E4F9611 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x607E8E3D3E4F9611)
	 */
	appSetInt(property: string, value: integer): void;

	/**
	 * Native: APP::APP_SET_STRING
	 *
	 * Hash: 0x3FF2FCEC4B7721B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FF2FCEC4B7721B4)
	 */
	appSetString(property: string, value: string): void;
}

interface GameAppUnk {}

interface GameApp extends GameAppLegacy {
	/**
	 * Native: APP::APP_CLEAR_BLOCK
	 *
	 * Hash: 0x5FE1DF3342DB7DBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FE1DF3342DB7DBA)
	 */
	clearBlock(): void;

	/**
	 * Native: APP::APP_CLOSE_APP
	 *
	 * Hash: 0xE41C65E07A5F05FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE41C65E07A5F05FC)
	 */
	closeApp(): void;

	/**
	 * Native: APP::APP_CLOSE_BLOCK
	 *
	 * Hash: 0xE8E3FCF72EAC0EF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8E3FCF72EAC0EF8)
	 */
	closeBlock(): void;

	/**
	 * Native: APP::APP_DATA_VALID
	 *
	 * Hash: 0x846AA8E7D55EE5B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x846AA8E7D55EE5B6)
	 */
	dataValid(): boolean;

	/**
	 * Native: APP::APP_DELETE_APP_DATA
	 *
	 * Hash: 0x44151AEA95C8A003 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44151AEA95C8A003)
	 */
	deleteAppData(appName: string): boolean;

	/**
	 * Native: APP::APP_GET_DELETED_FILE_STATUS
	 *
	 * Hash: 0xC9853A2BE3DED1A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9853A2BE3DED1A6)
	 */
	getDeletedFileStatus(): integer;

	/**
	 * Native: APP::APP_GET_FLOAT
	 *
	 * Hash: 0x1514FB24C02C2322 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1514FB24C02C2322)
	 */
	getFloat(property: string): number;

	/**
	 * Native: APP::APP_GET_INT
	 *
	 * Hash: 0xD3A58A12C77D9D4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3A58A12C77D9D4B)
	 */
	getInt(property: string): integer;

	/**
	 * Native: APP::APP_GET_STRING
	 *
	 * Hash: 0x749B023950D2311C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x749B023950D2311C)
	 */
	getString(property: string): string;

	/**
	 * Native: APP::APP_HAS_LINKED_SOCIAL_CLUB_ACCOUNT
	 *
	 * Hash: 0x71EEE69745088DA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71EEE69745088DA0)
	 */
	hasLinkedSocialClubAccount(): boolean;

	/**
	 * Native: APP::APP_HAS_SYNCED_DATA
	 *
	 * Hash: 0xCA52279A7271517F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA52279A7271517F)
	 */
	hasSyncedData(appName: string): boolean;

	/**
	 * Native: APP::APP_SAVE_DATA
	 *
	 * Hash: 0x95C5D356CDA6E85F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95C5D356CDA6E85F)
	 */
	saveData(): void;

	/**
	 * Native: APP::APP_SET_APP
	 *
	 * Hash: 0xCFD0406ADAF90D2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFD0406ADAF90D2B)
	 */
	setApp(appName: string): void;

	/**
	 * Native: APP::APP_SET_BLOCK
	 *
	 * Hash: 0x262AB456A3D21F93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x262AB456A3D21F93)
	 */
	setBlock(blockName: string): void;

	/**
	 * Native: APP::APP_SET_FLOAT
	 *
	 * Hash: 0x25D7687C68E0DAA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25D7687C68E0DAA4)
	 */
	setFloat(property: string, value: number): void;

	/**
	 * Native: APP::APP_SET_INT
	 *
	 * Hash: 0x607E8E3D3E4F9611 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x607E8E3D3E4F9611)
	 */
	setInt(property: string, value: integer): void;

	/**
	 * Native: APP::APP_SET_STRING
	 *
	 * Hash: 0x3FF2FCEC4B7721B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FF2FCEC4B7721B4)
	 */
	setString(property: string, value: string): void;

	unk: GameAppUnk;
}

interface GameAppMp extends GameApp {}
