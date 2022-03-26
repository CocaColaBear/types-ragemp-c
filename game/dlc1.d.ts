/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameDlc1Legacy {
	/**
	 * Native: FILES::GET_SHOP_PED_APPAREL_FORCED_COMPONENT_COUNT
	 *
	 * Hash: 0xC6B9DB42C04DD8C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6B9DB42C04DD8C3)
	 */
	getNumForcedComponents(componentHash: integer): integer;

	/**
	 * Native: FILES::SETUP_SHOP_PED_APPAREL_QUERY_TU
	 *
	 * Hash: 0x9BDF59818B1E38C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BDF59818B1E38C1)
	 */
	getNumPropsFromOutfit(
		character: integer,
		p1: integer,
		p2: integer,
		p3: boolean,
		p4: integer,
		componentId: integer
	): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_OUTFIT_COMPONENT_VARIANT
	 *
	 * Hash: 0x19F2A026EDF0013F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19F2A026EDF0013F)
	 */
	getPropFromOutfit(outfitHash: integer, variantIndex: integer): integer;

	/**
	 * Native: FILES::IS_CONTENT_ITEM_LOCKED
	 *
	 * Hash: 0xD4D7B033C3AA243C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4D7B033C3AA243C)
	 */
	isDlcDataEmpty(itemHash: integer): boolean;
}

interface GameDlc1 extends GameDlc1Legacy {
	/**
	 * Native: FILES::GET_DLC_VEHICLE_DATA
	 *
	 * Hash: 0x33468EDC08E371F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33468EDC08E371F6)
	 */
	getDlcVehicleData(dlcVehicleIndex: integer): integer;

	/**
	 * Native: FILES::GET_DLC_VEHICLE_FLAGS
	 *
	 * Hash: 0x5549EE11FA22FCF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5549EE11FA22FCF2)
	 */
	getDlcVehicleFlags(dlcVehicleIndex: integer): integer;

	/**
	 * Native: FILES::GET_DLC_VEHICLE_MODEL
	 *
	 * Hash: 0xECC01B7C5763333C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xECC01B7C5763333C)
	 */
	getDlcVehicleModel(dlcVehicleIndex: integer): integer;

	/**
	 * Native: FILES::GET_DLC_WEAPON_COMPONENT_DATA
	 *
	 * Hash: 0x6CF598A2957C2BF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CF598A2957C2BF8)
	 */
	getDlcWeaponComponentData(dlcWeaponIndex: integer, dlcWeapCompIndex: integer): integer;

	/**
	 * Native: FILES::GET_DLC_WEAPON_DATA
	 *
	 * Hash: 0x79923CD21BECE14E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79923CD21BECE14E)
	 */
	getDlcWeaponData(dlcWeaponIndex: integer): integer;

	/**
	 * Native: FILES::GET_FORCED_COMPONENT
	 *
	 * Hash: 0x6C93ED8C2F74859B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C93ED8C2F74859B)
	 */
	getForcedComponent(componentHash: integer, forcedComponentIndex: integer): GetForcedComponentResult;

	/**
	 * Native: FILES::GET_NUM_DLC_WEAPON_COMPONENTS
	 *
	 * Hash: 0x405425358A7D61FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x405425358A7D61FE)
	 */
	getNumDlcWeaponComponents(dlcWeaponIndex: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_COMPONENT
	 *
	 * Hash: 0x74C0E2A57EC66760 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74C0E2A57EC66760)
	 */
	getShopPedComponent(componentHash: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_OUTFIT
	 *
	 * Hash: 0xB7952076E444979D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7952076E444979D)
	 */
	getShopPedOutfit(p0: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_QUERY_COMPONENT
	 *
	 * Hash: 0x249E310B2D920699 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x249E310B2D920699)
	 */
	getShopPedQueryComponent(componentId: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_QUERY_OUTFIT
	 *
	 * Hash: 0x6D793F03A631FE56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D793F03A631FE56)
	 */
	getShopPedQueryOutfit(outfitIndex: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_QUERY_PROP
	 *
	 * Hash: 0xDE44A00999B2837D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE44A00999B2837D)
	 */
	getShopPedQueryProp(componentId: integer): integer;

	/**
	 * Native: FILES::GET_VARIANT_COMPONENT
	 *
	 * Hash: 0x6E11F282F11863B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E11F282F11863B6)
	 */
	getVariantComponent(componentHash: integer, variantComponentIndex: integer): GetVariantComponentResult;

	/**
	 * Native: FILES::INIT_SHOP_PED_COMPONENT
	 *
	 * Hash: 0x1E8C308FD312C036 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E8C308FD312C036)
	 */
	initShopPedComponent(): integer;

	/**
	 * Native: FILES::INIT_SHOP_PED_PROP
	 *
	 * Hash: 0xEB0A2B758F7B850F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB0A2B758F7B850F)
	 */
	initShopPedProp(): integer;
}

interface GameDlc1Mp extends GameDlc1 {}
