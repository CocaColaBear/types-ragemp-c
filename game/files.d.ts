/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetForcedComponentResult {
	nameHash: integer;
	enumValue: integer;
	componentType: integer;
}

interface GetForcedPropResult {
	nameHash: integer;
	enumValue: integer;
	anchorPoint: integer;
}

interface GetVariantComponentResult {
	nameHash: integer;
	enumValue: integer;
	componentType: integer;
}

interface GetVariantPropResult {
	nameHash: integer;
	enumValue: integer;
	anchorPoint: integer;
}

interface GameFilesLegacy {
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

interface GameFilesUnk {
	/**
	 * Native: FILES::_0x10144267DD22866C
	 *
	 * Hash: 0x10144267DD22866C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10144267DD22866C)
	 */
	_0x10144267DD22866C(overlayHash: integer, p1: integer, character: integer): integer;

	/**
	 * Native: FILES::_0x6CEBE002E58DEE97
	 *
	 * Hash: 0x6CEBE002E58DEE97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CEBE002E58DEE97)
	 */
	_0x6CEBE002E58DEE97(componentHash: integer): integer;

	/**
	 * Native: FILES::_0x96E2929292A4DB77
	 *
	 * Hash: 0x96E2929292A4DB77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96E2929292A4DB77)
	 */
	_0x96E2929292A4DB77(componentHash: integer): integer;
}

interface GameFiles extends GameFilesLegacy {
	/**
	 * Native: FILES::DOES_SHOP_PED_APPAREL_HAVE_RESTRICTION_TAG
	 *
	 * Hash: 0x341DE7ED1D2A1BFD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x341DE7ED1D2A1BFD)
	 */
	doesShopPedApparelHaveRestrictionTag(
		componentHash: integer,
		restrictionTagHash: integer,
		componentId: integer
	): boolean;

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
	 * Native: FILES::GET_DLC_VEHICLE_MOD_LOCK_HASH
	 *
	 * Hash: 0xC098810437312FFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC098810437312FFF)
	 */
	getDlcVehicleModLockHash(hash: integer): integer;

	/**
	 * Native: FILES::GET_DLC_WEAPON_COMPONENT_DATA
	 *
	 * Hash: 0x6CF598A2957C2BF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CF598A2957C2BF8)
	 */
	getDlcWeaponComponentData(dlcWeaponIndex: integer, dlcWeapCompIndex: integer): integer;

	/**
	 * Native: FILES::_GET_DLC_WEAPON_COMPONENT_DATA_SP
	 *
	 * Hash: 0x31D5E073B6F93CDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31D5E073B6F93CDC)
	 */
	getDlcWeaponComponentDataSp(dlcWeaponIndex: integer, dlcWeapCompIndex: integer): integer;

	/**
	 * Native: FILES::GET_DLC_WEAPON_DATA
	 *
	 * Hash: 0x79923CD21BECE14E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79923CD21BECE14E)
	 */
	getDlcWeaponData(dlcWeaponIndex: integer): integer;

	/**
	 * Native: FILES::_GET_DLC_WEAPON_DATA_SP
	 *
	 * Hash: 0x310836EE7129BA33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x310836EE7129BA33)
	 */
	getDlcWeaponDataSp(dlcWeaponIndex: integer): integer;

	/**
	 * Native: FILES::GET_FORCED_COMPONENT
	 *
	 * Hash: 0x6C93ED8C2F74859B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C93ED8C2F74859B)
	 */
	getForcedComponent(componentHash: integer, forcedComponentIndex: integer): GetForcedComponentResult;

	/**
	 * Native: FILES::GET_FORCED_PROP
	 *
	 * Hash: 0xE1CA84EBF72E691D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1CA84EBF72E691D)
	 */
	getForcedProp(componentHash: integer, forcedPropIndex: integer): GetForcedPropResult;

	/**
	 * Native: FILES::GET_HASH_NAME_FOR_COMPONENT
	 *
	 * Hash: 0x0368B3A838070348 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0368B3A838070348)
	 */
	getHashNameForComponent(
		entity: Handle,
		componentId: integer,
		drawableVariant: integer,
		textureVariant: integer
	): integer;

	/**
	 * Native: FILES::GET_HASH_NAME_FOR_PROP
	 *
	 * Hash: 0x5D6160275CAEC8DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D6160275CAEC8DD)
	 */
	getHashNameForProp(entity: Handle, componentId: integer, propIndex: integer, propTextureIndex: integer): integer;

	/**
	 * Native: FILES::GET_NUM_DLC_VEHICLES
	 *
	 * Hash: 0xA7A866D21CD2329B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7A866D21CD2329B)
	 */
	getNumDlcVehicles(): integer;

	/**
	 * Native: FILES::GET_NUM_DLC_WEAPON_COMPONENTS
	 *
	 * Hash: 0x405425358A7D61FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x405425358A7D61FE)
	 */
	getNumDlcWeaponComponents(dlcWeaponIndex: integer): integer;

	/**
	 * Native: FILES::_GET_NUM_DLC_WEAPON_COMPONENTS_SP
	 *
	 * Hash: 0xAD2A7A6DFF55841B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD2A7A6DFF55841B)
	 */
	getNumDlcWeaponComponentsSp(dlcWeaponIndex: integer): integer;

	/**
	 * Native: FILES::GET_NUM_DLC_WEAPONS
	 *
	 * Hash: 0xEE47635F352DA367 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE47635F352DA367)
	 */
	getNumDlcWeapons(): integer;

	/**
	 * Native: FILES::_GET_NUM_DLC_WEAPONS_SP
	 *
	 * Hash: 0x4160B65AE085B5A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4160B65AE085B5A9)
	 */
	getNumDlcWeaponsSp(): integer;

	/**
	 * Native: FILES::GET_NUM_TATTOO_SHOP_DLC_ITEMS
	 *
	 * Hash: 0x278F76C3B0A8F109 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x278F76C3B0A8F109)
	 */
	getNumTattooShopDlcItems(character: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_APPAREL_FORCED_COMPONENT_COUNT
	 *
	 * Hash: 0xC6B9DB42C04DD8C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6B9DB42C04DD8C3)
	 */
	getShopPedApparelForcedComponentCount(componentHash: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_APPAREL_FORCED_PROP_COUNT
	 *
	 * Hash: 0x017568A8182D98A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x017568A8182D98A6)
	 */
	getShopPedApparelForcedPropCount(componentHash: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_APPAREL_VARIANT_COMPONENT_COUNT
	 *
	 * Hash: 0xC17AD0E5752BECDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC17AD0E5752BECDA)
	 */
	getShopPedApparelVariantComponentCount(componentHash: integer): integer;

	/**
	 * Native: FILES::_GET_SHOP_PED_APPAREL_VARIANT_PROP_COUNT
	 *
	 * Hash: 0xD40AAC51E8E4C663 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD40AAC51E8E4C663)
	 */
	getShopPedApparelVariantPropCount(propHash: integer): integer;

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
	 * Native: FILES::GET_SHOP_PED_OUTFIT_COMPONENT_VARIANT
	 *
	 * Hash: 0x19F2A026EDF0013F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19F2A026EDF0013F)
	 */
	getShopPedOutfitComponentVariant(outfitHash: integer, variantIndex: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_OUTFIT_LOCATE
	 *
	 * Hash: 0x073CA26B079F956E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x073CA26B079F956E)
	 */
	getShopPedOutfitLocate(p0: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_OUTFIT_PROP_VARIANT
	 *
	 * Hash: 0xA9F9C2E0FDE11CBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9F9C2E0FDE11CBB)
	 */
	getShopPedOutfitPropVariant(outfitHash: integer, variantIndex: integer): integer;

	/**
	 * Native: FILES::GET_SHOP_PED_PROP
	 *
	 * Hash: 0x5D5CAFF661DDF6FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D5CAFF661DDF6FC)
	 */
	getShopPedProp(componentHash: integer): integer;

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
	 * Native: FILES::GET_TATTOO_SHOP_DLC_ITEM_DATA
	 *
	 * Hash: 0xFF56381874F82086 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF56381874F82086)
	 */
	getTattooShopDlcItemData(characterType: integer, decorationIndex: integer): integer;

	/**
	 * Native: FILES::GET_VARIANT_COMPONENT
	 *
	 * Hash: 0x6E11F282F11863B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E11F282F11863B6)
	 */
	getVariantComponent(componentHash: integer, variantComponentIndex: integer): GetVariantComponentResult;

	/**
	 * Native: FILES::_GET_VARIANT_PROP
	 *
	 * Hash: 0xD81B7F27BC773E66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD81B7F27BC773E66)
	 */
	getVariantProp(componentHash: integer, variantPropIndex: integer): GetVariantPropResult;

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

	/**
	 * Native: FILES::IS_CONTENT_ITEM_LOCKED
	 *
	 * Hash: 0xD4D7B033C3AA243C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4D7B033C3AA243C)
	 */
	isContentItemLocked(itemHash: integer): boolean;

	/**
	 * Native: FILES::IS_DLC_VEHICLE_MOD
	 *
	 * Hash: 0x0564B9FF9631B82C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0564B9FF9631B82C)
	 */
	isDlcVehicleMod(hash: integer): boolean;

	/**
	 * Native: FILES::_LOAD_CONTENT_CHANGE_SET_GROUP
	 *
	 * Hash: 0x6BEDF5769AC2DC07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BEDF5769AC2DC07)
	 */
	loadContentChangeSetGroup(hash: integer): void;

	/**
	 * Native: FILES::SETUP_SHOP_PED_APPAREL_QUERY
	 *
	 * Hash: 0x50F457823CE6EB5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50F457823CE6EB5F)
	 */
	setupShopPedApparelQuery(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: FILES::SETUP_SHOP_PED_APPAREL_QUERY_TU
	 *
	 * Hash: 0x9BDF59818B1E38C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BDF59818B1E38C1)
	 */
	setupShopPedApparelQueryTu(
		character: integer,
		p1: integer,
		p2: integer,
		p3: boolean,
		p4: integer,
		componentId: integer
	): integer;

	/**
	 * Native: FILES::SETUP_SHOP_PED_OUTFIT_QUERY
	 *
	 * Hash: 0xF3FBE2D50A6A8C28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3FBE2D50A6A8C28)
	 */
	setupShopPedOutfitQuery(character: integer, p1: boolean): integer;

	/**
	 * Native: FILES::_UNLOAD_CONTENT_CHANGE_SET_GROUP
	 *
	 * Hash: 0x3C1978285B036B25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C1978285B036B25)
	 */
	unloadContentChangeSetGroup(hash: integer): void;

	unk: GameFilesUnk;
}

interface GameFilesMp extends GameFiles {}
