/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameSavemigrationLegacy {}

interface GameSavemigrationUnk {
	/**
	 * Native: SAVEMIGRATION::_0x690B76BD2763E068
	 *
	 * Hash: 0x690B76BD2763E068 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x690B76BD2763E068)
	 */
	_0x690B76BD2763E068(): integer;

	/**
	 * Native: SAVEMIGRATION::_0x84B418E93894AC1C
	 *
	 * Hash: 0x84B418E93894AC1C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84B418E93894AC1C)
	 */
	_0x84B418E93894AC1C(): integer;

	/**
	 * Native: SAVEMIGRATION::_0xE5E9746A66359F9D
	 *
	 * Hash: 0xE5E9746A66359F9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5E9746A66359F9D)
	 */
	_0xE5E9746A66359F9D(): integer;
}

interface GameSavemigration extends GameSavemigrationLegacy {
	unk: GameSavemigrationUnk;
}

interface GameSavemigrationMp extends GameSavemigration {}
