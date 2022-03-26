/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameLocalizationLegacy {}

interface GameLocalizationUnk {}

interface GameLocalization extends GameLocalizationLegacy {
	/**
	 * Native: LOCALIZATION::GET_CURRENT_LANGUAGE
	 *
	 * Hash: 0x2BDD44CC428A7EAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BDD44CC428A7EAE)
	 */
	getCurrentLanguage(): integer;

	/**
	 * Native: LOCALIZATION::_LOCALIZATION_GET_SYSTEM_DATE_FORMAT
	 *
	 * Hash: 0xA8AE43AEC1A61314 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8AE43AEC1A61314)
	 */
	getSystemDateFormat(): integer;

	/**
	 * Native: LOCALIZATION::_LOCALIZATION_GET_SYSTEM_LANGUAGE
	 *
	 * Hash: 0x497420E022796B3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x497420E022796B3F)
	 */
	getSystemLanguage(): integer;

	unk: GameLocalizationUnk;
}

interface GameLocalizationMp extends GameLocalization {}
