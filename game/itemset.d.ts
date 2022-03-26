/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameItemsetLegacy {
	/**
	 * Native: ITEMSET::ADD_TO_ITEMSET
	 *
	 * Hash: 0xE3945201F14637DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3945201F14637DD)
	 */
	addToItemset(p0: integer, p1: integer): boolean;

	/**
	 * Native: ITEMSET::CLEAN_ITEMSET
	 *
	 * Hash: 0x41BC0D722FC04221 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41BC0D722FC04221)
	 */
	cleanItemset(p0: integer): void;

	/**
	 * Native: ITEMSET::CREATE_ITEMSET
	 *
	 * Hash: 0x35AD299F50D91B24 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35AD299F50D91B24)
	 */
	createItemset(p0: boolean): Handle;

	/**
	 * Native: ITEMSET::DESTROY_ITEMSET
	 *
	 * Hash: 0xDE18220B1C183EDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE18220B1C183EDA)
	 */
	destroyItemset(p0: integer): void;

	/**
	 * Native: ITEMSET::GET_INDEXED_ITEM_IN_ITEMSET
	 *
	 * Hash: 0x7A197E2521EE2BAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A197E2521EE2BAB)
	 */
	getIndexedItemInItemset(p0: integer, p1: integer): integer;

	/**
	 * Native: ITEMSET::GET_ITEMSET_SIZE
	 *
	 * Hash: 0xD9127E83ABF7C631 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9127E83ABF7C631)
	 */
	getItemsetSize(x: Handle): integer;

	/**
	 * Native: ITEMSET::IS_IN_ITEMSET
	 *
	 * Hash: 0x2D0FC594D1E9C107 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D0FC594D1E9C107)
	 */
	isInItemset(p0: integer, p1: integer): boolean;

	/**
	 * Native: ITEMSET::IS_ITEMSET_VALID
	 *
	 * Hash: 0xB1B1EA596344DFAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1B1EA596344DFAB)
	 */
	isItemsetValid(p0: integer): boolean;

	/**
	 * Native: ITEMSET::REMOVE_FROM_ITEMSET
	 *
	 * Hash: 0x25E68244B0177686 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25E68244B0177686)
	 */
	removeFromItemset(p0: integer, p1: integer): void;
}

interface GameItemsetUnk {}

interface GameItemset extends GameItemsetLegacy {
	/**
	 * Native: ITEMSET::ADD_TO_ITEMSET
	 *
	 * Hash: 0xE3945201F14637DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3945201F14637DD)
	 */
	addTo(p0: integer, p1: integer): boolean;

	/**
	 * Native: ITEMSET::CLEAN_ITEMSET
	 *
	 * Hash: 0x41BC0D722FC04221 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41BC0D722FC04221)
	 */
	clean(p0: integer): void;

	/**
	 * Native: ITEMSET::CREATE_ITEMSET
	 *
	 * Hash: 0x35AD299F50D91B24 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35AD299F50D91B24)
	 */
	create(p0: boolean): Handle;

	/**
	 * Native: ITEMSET::DESTROY_ITEMSET
	 *
	 * Hash: 0xDE18220B1C183EDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE18220B1C183EDA)
	 */
	destroy(p0: integer): void;

	/**
	 * Native: ITEMSET::GET_INDEXED_ITEM_IN_ITEMSET
	 *
	 * Hash: 0x7A197E2521EE2BAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A197E2521EE2BAB)
	 */
	getIndexedItemIn(p0: integer, p1: integer): integer;

	/**
	 * Native: ITEMSET::GET_ITEMSET_SIZE
	 *
	 * Hash: 0xD9127E83ABF7C631 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9127E83ABF7C631)
	 */
	getSize(x: Handle): integer;

	/**
	 * Native: ITEMSET::IS_IN_ITEMSET
	 *
	 * Hash: 0x2D0FC594D1E9C107 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D0FC594D1E9C107)
	 */
	isIn(p0: integer, p1: integer): boolean;

	/**
	 * Native: ITEMSET::IS_ITEMSET_VALID
	 *
	 * Hash: 0xB1B1EA596344DFAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1B1EA596344DFAB)
	 */
	isValid(p0: integer): boolean;

	/**
	 * Native: ITEMSET::REMOVE_FROM_ITEMSET
	 *
	 * Hash: 0x25E68244B0177686 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25E68244B0177686)
	 */
	removeFrom(p0: integer, p1: integer): void;

	unk: GameItemsetUnk;
}

interface GameItemsetMp extends GameItemset {}
