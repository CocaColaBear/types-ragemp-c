/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameWeaponLegacy {
	/**
	 * Native: WEAPON::CAN_USE_WEAPON_ON_PARACHUTE
	 *
	 * Hash: 0xBC7BE5ABC0879F74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC7BE5ABC0879F74)
	 */
	canUseWeaponOnParachute(weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::CREATE_WEAPON_OBJECT
	 *
	 * Hash: 0x9541D3CF0D398F36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9541D3CF0D398F36)
	 */
	createWeaponObject(
		weaponHash: integer,
		ammoCount: integer,
		x: number,
		y: number,
		z: number,
		showWorldModel: boolean,
		scale: number,
		p7: integer,
		p8: integer,
		p9: integer
	): Handle;

	/**
	 * Native: WEAPON::DOES_WEAPON_TAKE_WEAPON_COMPONENT
	 *
	 * Hash: 0x5CEE3DF569CECAB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CEE3DF569CECAB0)
	 */
	doesWeaponTakeWeaponComponent(weaponHash: integer, componentHash: integer): boolean;

	/**
	 * Native: WEAPON::GET_WEAPON_CLIP_SIZE
	 *
	 * Hash: 0x583BE370B1EC6EB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x583BE370B1EC6EB4)
	 */
	getWeaponClipSize(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_COMPONENT_HUD_STATS
	 *
	 * Hash: 0xB3CAF387AE12E9F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3CAF387AE12E9F8)
	 */
	getWeaponComponentHudStats(componentHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL
	 *
	 * Hash: 0x0DB57B41EC1DB083 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0DB57B41EC1DB083)
	 */
	getWeaponComponentTypeModel(componentHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_DAMAGE_TYPE
	 *
	 * Hash: 0x3BE0BB12D25FB305 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BE0BB12D25FB305)
	 */
	getWeaponDamageType(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_HUD_STATS
	 *
	 * Hash: 0xD92C739EE34C9EBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD92C739EE34C9EBA)
	 */
	getWeaponHudStats(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_OBJECT_TINT_INDEX
	 *
	 * Hash: 0xCD183314F7CD2E57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD183314F7CD2E57)
	 */
	getWeaponObjectTintIndex(weapon: Handle): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_TINT_COUNT
	 *
	 * Hash: 0x5DCF6C5CAB2E9BF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DCF6C5CAB2E9BF7)
	 */
	getWeaponTintCount(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPONTYPE_GROUP
	 *
	 * Hash: 0xC3287EE3050FB74C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3287EE3050FB74C)
	 */
	getWeapontypeGroup(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPONTYPE_MODEL
	 *
	 * Hash: 0xF46CDC33180FDA94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF46CDC33180FDA94)
	 */
	getWeapontypeModel(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPONTYPE_SLOT
	 *
	 * Hash: 0x4215460B9B8B7FA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4215460B9B8B7FA0)
	 */
	getWeapontypeSlot(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT
	 *
	 * Hash: 0x33E179436C0B31DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33E179436C0B31DB)
	 */
	giveWeaponComponentToWeaponObject(weaponObject: Handle, addonHash: integer): void;

	/**
	 * Native: WEAPON::GIVE_WEAPON_OBJECT_TO_PED
	 *
	 * Hash: 0xB1FA61371AF7C4B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1FA61371AF7C4B7)
	 */
	giveWeaponObjectToPed(weaponObject: Handle, ped: Handle): void;

	/**
	 * Native: WEAPON::HAS_WEAPON_ASSET_LOADED
	 *
	 * Hash: 0x36E353271F0E90EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36E353271F0E90EE)
	 */
	hasWeaponAssetLoaded(weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::HAS_WEAPON_GOT_WEAPON_COMPONENT
	 *
	 * Hash: 0x76A18844E743BF91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76A18844E743BF91)
	 */
	hasWeaponGotWeaponComponent(weapon: Handle, addonHash: integer): boolean;

	/**
	 * Native: WEAPON::IS_WEAPON_VALID
	 *
	 * Hash: 0x937C71165CF334B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x937C71165CF334B3)
	 */
	isWeaponValid(weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::REMOVE_WEAPON_ASSET
	 *
	 * Hash: 0xAA08EF13F341C8FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA08EF13F341C8FC)
	 */
	removeWeaponAsset(weaponHash: integer): void;

	/**
	 * Native: WEAPON::REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT
	 *
	 * Hash: 0xF7D82B0D66777611 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7D82B0D66777611)
	 */
	removeWeaponComponentFromWeaponObject(p0: integer, p1: integer): void;

	/**
	 * Native: WEAPON::REQUEST_WEAPON_ASSET
	 *
	 * Hash: 0x5443438F033E29C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5443438F033E29C3)
	 */
	requestWeaponAsset(weaponHash: integer, p1: integer, p2: integer): void;

	/**
	 * Native: WEAPON::REQUEST_WEAPON_HIGH_DETAIL_MODEL
	 *
	 * Hash: 0x48164DBB970AC3F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48164DBB970AC3F0)
	 */
	requestWeaponHighDetailModel(weaponObject: Handle): void;

	/**
	 * Native: WEAPON::SET_PED_DROPS_WEAPONS_WHEN_DEAD
	 *
	 * Hash: 0x476AE72C1D19D1A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x476AE72C1D19D1A8)
	 */
	setPedDropsWeaponsWhenDead(ped: Handle, toggle: boolean): void;

	/**
	 * Native: WEAPON::SET_WEAPON_OBJECT_TINT_INDEX
	 *
	 * Hash: 0xF827589017D4E4A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF827589017D4E4A9)
	 */
	setWeaponObjectTintIndex(weapon: Handle, tintIndex: integer): void;
}

interface GameWeaponUnk {
	/**
	 * Native: WEAPON::_0x24C024BA8379A70A
	 *
	 * Hash: 0x24C024BA8379A70A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24C024BA8379A70A)
	 */
	_0x24C024BA8379A70A(p0: integer, p1: integer): void;

	/**
	 * Native: WEAPON::_0x50276EF8172F5F12
	 *
	 * Hash: 0x50276EF8172F5F12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50276EF8172F5F12)
	 */
	_0x50276EF8172F5F12(ped: Handle): void;

	/**
	 * Native: WEAPON::_0x977CA98939E82E4B
	 *
	 * Hash: 0x977CA98939E82E4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x977CA98939E82E4B)
	 */
	_0x977CA98939E82E4B(weaponObject: Handle, p1: integer): void;

	/**
	 * Native: WEAPON::_0xA2C9AC24B4061285
	 *
	 * Hash: 0xA2C9AC24B4061285 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2C9AC24B4061285)
	 */
	_0xA2C9AC24B4061285(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: WEAPON::_0xE4DCEC7FD5B739A5
	 *
	 * Hash: 0xE4DCEC7FD5B739A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4DCEC7FD5B739A5)
	 */
	_0xE4DCEC7FD5B739A5(ped: Handle): void;

	/**
	 * Native: WEAPON::_0xE6D2CEDD370FF98E
	 *
	 * Hash: 0xE6D2CEDD370FF98E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6D2CEDD370FF98E)
	 */
	_0xE6D2CEDD370FF98E(p0: integer, p1: integer): void;
}

interface GameWeapon extends GameWeaponLegacy {
	/**
	 * Native: WEAPON::ADD_AMMO_TO_PED
	 *
	 * Hash: 0x78F0424C34306220 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78F0424C34306220)
	 */
	addAmmoToPed(ped: Handle, weaponHash: integer, ammo: integer): void;

	/**
	 * Native: WEAPON::_ADD_AMMO_TO_PED_BY_TYPE
	 *
	 * Hash: 0x2472622CE1F2D45F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2472622CE1F2D45F)
	 */
	addAmmoToPedByType(ped: Handle, ammoTypeHash: integer, ammo: integer): void;

	/**
	 * Native: WEAPON::CAN_USE_WEAPON_ON_PARACHUTE
	 *
	 * Hash: 0xBC7BE5ABC0879F74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC7BE5ABC0879F74)
	 */
	canUseOnParachute(weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::CLEAR_ENTITY_LAST_WEAPON_DAMAGE
	 *
	 * Hash: 0xAC678E40BE7C74D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC678E40BE7C74D2)
	 */
	clearEntityLastDamage(entity: Handle): void;

	/**
	 * Native: WEAPON::CLEAR_PED_LAST_WEAPON_DAMAGE
	 *
	 * Hash: 0x0E98F88A24C5F4B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E98F88A24C5F4B8)
	 */
	clearPedLastDamage(ped: Handle): void;

	/**
	 * Native: WEAPON::_CREATE_AIR_DEFENSE_AREA
	 *
	 * Hash: 0x9DA58CDBF6BDBC08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DA58CDBF6BDBC08)
	 */
	createAirDefenseArea(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		weaponHash: integer
	): integer;

	/**
	 * Native: WEAPON::_CREATE_AIR_DEFENSE_SPHERE
	 *
	 * Hash: 0x91EF34584710BE99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91EF34584710BE99)
	 */
	createAirDefenseSphere(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: number,
		p5: number,
		p6: number,
		weaponHash: integer
	): integer;

	/**
	 * Native: WEAPON::CREATE_WEAPON_OBJECT
	 *
	 * Hash: 0x9541D3CF0D398F36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9541D3CF0D398F36)
	 */
	createObject(
		weaponHash: integer,
		ammoCount: integer,
		x: number,
		y: number,
		z: number,
		showWorldModel: boolean,
		scale: number,
		p7: integer,
		p8: integer,
		p9: integer
	): Handle;

	/**
	 * Native: WEAPON::_DOES_AIR_DEFENSE_ZONE_EXIST
	 *
	 * Hash: 0xCD79A550999D7D4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD79A550999D7D4F)
	 */
	doesAirDefenseZoneExist(zoneId: integer): boolean;

	/**
	 * Native: WEAPON::DOES_WEAPON_TAKE_WEAPON_COMPONENT
	 *
	 * Hash: 0x5CEE3DF569CECAB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CEE3DF569CECAB0)
	 */
	doesTakeWeaponComponent(weaponHash: integer, componentHash: integer): boolean;

	/**
	 * Native: WEAPON::ENABLE_LASER_SIGHT_RENDERING
	 *
	 * Hash: 0xC8B46D7727D864AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8B46D7727D864AA)
	 */
	enableLaserSightRendering(toggle: boolean): void;

	/**
	 * Native: WEAPON::EXPLODE_PROJECTILES
	 *
	 * Hash: 0xFC4BD125DE7611E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC4BD125DE7611E4)
	 */
	explodeProjectiles(ped: Handle, weaponHash: integer, p2: boolean): void;

	/**
	 * Native: WEAPON::_FIRE_AIR_DEFENSE_WEAPON
	 *
	 * Hash: 0x44F1012B69313374 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44F1012B69313374)
	 */
	fireAirDefense(zoneId: integer, x: number, y: number, z: number): void;

	/**
	 * Native: WEAPON::GET_AMMO_IN_CLIP
	 *
	 * Hash: 0x2E1202248937775C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E1202248937775C)
	 */
	getAmmoInClip(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_AMMO_IN_PED_WEAPON
	 *
	 * Hash: 0x015A522136D7F951 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x015A522136D7F951)
	 */
	getAmmoInPed(ped: Handle, weaponhash: integer): integer;

	/**
	 * Native: WEAPON::GET_BEST_PED_WEAPON
	 *
	 * Hash: 0x8483E98E8B888AE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8483E98E8B888AE2)
	 */
	getBestPed(ped: Handle, p1: boolean): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_CLIP_SIZE
	 *
	 * Hash: 0x583BE370B1EC6EB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x583BE370B1EC6EB4)
	 */
	getClipSize(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_COMPONENT_HUD_STATS
	 *
	 * Hash: 0xB3CAF387AE12E9F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3CAF387AE12E9F8)
	 */
	getComponentHudStats(componentHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL
	 *
	 * Hash: 0x0DB57B41EC1DB083 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0DB57B41EC1DB083)
	 */
	getComponentTypeModel(componentHash: integer): integer;

	/**
	 * Native: WEAPON::_GET_WEAPON_COMPONENT_VARIANT_EXTRA_COMPONENT_COUNT
	 *
	 * Hash: 0x6558AC7C17BFEF58 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6558AC7C17BFEF58)
	 */
	getComponentVariantExtraComponentCount(componentHash: integer): integer;

	/**
	 * Native: WEAPON::_GET_WEAPON_COMPONENT_VARIANT_EXTRA_COMPONENT_MODEL
	 *
	 * Hash: 0x4D1CB8DC40208A17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D1CB8DC40208A17)
	 */
	getComponentVariantExtraComponentModel(componentHash: integer, extraComponentIndex: integer): integer;

	/**
	 * Native: WEAPON::GET_CURRENT_PED_WEAPON
	 *
	 * Hash: 0x3A87E44BB9A01D54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A87E44BB9A01D54)
	 */
	getCurrentPed(ped: Handle, p2: boolean): integer;

	/**
	 * Native: WEAPON::GET_CURRENT_PED_WEAPON_ENTITY_INDEX
	 *
	 * Hash: 0x3B390A939AF0B5FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B390A939AF0B5FC)
	 */
	getCurrentPedEntityIndex(ped: Handle, p1: integer): Handle;

	/**
	 * Native: WEAPON::GET_CURRENT_PED_VEHICLE_WEAPON
	 *
	 * Hash: 0x1017582BCD3832DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1017582BCD3832DC)
	 */
	getCurrentPedVehicle(ped: Handle): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_DAMAGE
	 *
	 * Hash: 0x3133B907D8B32053 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3133B907D8B32053)
	 */
	getDamage(weaponHash: integer, componentHash: integer): number;

	/**
	 * Native: WEAPON::GET_WEAPON_DAMAGE_TYPE
	 *
	 * Hash: 0x3BE0BB12D25FB305 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BE0BB12D25FB305)
	 */
	getDamageType(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_HUD_STATS
	 *
	 * Hash: 0xD92C739EE34C9EBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD92C739EE34C9EBA)
	 */
	getHudStats(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_IS_PED_GADGET_EQUIPPED
	 *
	 * Hash: 0xF731332072F5156C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF731332072F5156C)
	 */
	getIsPedGadgetEquipped(ped: Handle, gadgetHash: integer): boolean;

	/**
	 * Native: WEAPON::GET_LOCKON_DISTANCE_OF_CURRENT_PED_WEAPON
	 *
	 * Hash: 0x840F03E9041E2C9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x840F03E9041E2C9C)
	 */
	getLockonDistanceOfCurrentPed(ped: Handle): number;

	/**
	 * Native: WEAPON::GET_MAX_AMMO
	 *
	 * Hash: 0xDC16122C7A20C933 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC16122C7A20C933)
	 */
	getMaxAmmo(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: WEAPON::_GET_MAX_AMMO_BY_TYPE
	 *
	 * Hash: 0x585847C5E4E11709 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x585847C5E4E11709)
	 */
	getMaxAmmoByType(ped: Handle, ammoTypeHash: integer): integer;

	/**
	 * Native: WEAPON::GET_MAX_AMMO_IN_CLIP
	 *
	 * Hash: 0xA38DCFFCEA8962FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA38DCFFCEA8962FA)
	 */
	getMaxAmmoInClip(ped: Handle, weaponHash: integer, p2: boolean): integer;

	/**
	 * Native: WEAPON::GET_MAX_RANGE_OF_CURRENT_PED_WEAPON
	 *
	 * Hash: 0x814C9D19DFD69679 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x814C9D19DFD69679)
	 */
	getMaxRangeOfCurrentPed(ped: Handle): number;

	/**
	 * Native: WEAPON::GET_WEAPON_OBJECT_FROM_PED
	 *
	 * Hash: 0xCAE1DC9A0E22A16D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCAE1DC9A0E22A16D)
	 */
	getObjectFromPed(ped: Handle, p1: boolean): Handle;

	/**
	 * Native: WEAPON::_GET_WEAPON_OBJECT_LIVERY_COLOR
	 *
	 * Hash: 0xB3EA4FEABF41464B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3EA4FEABF41464B)
	 */
	getObjectLiveryColor(weaponObject: Handle, camoComponentHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPON_OBJECT_TINT_INDEX
	 *
	 * Hash: 0xCD183314F7CD2E57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD183314F7CD2E57)
	 */
	getObjectTintIndex(weapon: Handle): integer;

	/**
	 * Native: WEAPON::GET_PED_AMMO_BY_TYPE
	 *
	 * Hash: 0x39D22031557946C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39D22031557946C1)
	 */
	getPedAmmoByType(ped: Handle, ammoTypeHash: integer): integer;

	/**
	 * Native: WEAPON::GET_PED_AMMO_TYPE_FROM_WEAPON
	 *
	 * Hash: 0x7FEAD38B326B9F74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FEAD38B326B9F74)
	 */
	getPedAmmoTypeFrom(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: WEAPON::_GET_PED_AMMO_TYPE_FROM_WEAPON_2
	 *
	 * Hash: 0xF489B44DD5AF4BD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF489B44DD5AF4BD9)
	 */
	getPedAmmoTypeFrom2(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_PED_LAST_WEAPON_IMPACT_COORD
	 *
	 * Hash: 0x6C4D0409BA1A2BC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C4D0409BA1A2BC2)
	 */
	getPedLastImpactCoord(ped: Handle): Vector3Mp;

	/**
	 * Native: WEAPON::_GET_PED_WEAPON_LIVERY_COLOR
	 *
	 * Hash: 0xF0A60040BE558F2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0A60040BE558F2D)
	 */
	getPedLiveryColor(ped: Handle, weaponHash: integer, camoComponentHash: integer): integer;

	/**
	 * Native: WEAPON::GET_PED_WEAPON_TINT_INDEX
	 *
	 * Hash: 0x2B9EEDC07BD06B9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B9EEDC07BD06B9F)
	 */
	getPedTintIndex(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_PED_WEAPONTYPE_IN_SLOT
	 *
	 * Hash: 0xEFFED78E9011134D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFFED78E9011134D)
	 */
	getPedTypeInSlot(ped: Handle, weaponSlot: integer): integer;

	/**
	 * Native: WEAPON::GET_SELECTED_PED_WEAPON
	 *
	 * Hash: 0x0A6DB4965674D243 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A6DB4965674D243)
	 */
	getSelectedPed(ped: Handle): integer;

	/**
	 * Native: WEAPON::_GET_WEAPON_TIME_BETWEEN_SHOTS
	 *
	 * Hash: 0x065D2AACAD8CF7A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x065D2AACAD8CF7A4)
	 */
	getTimeBetweenShots(weaponHash: integer): number;

	/**
	 * Native: WEAPON::GET_WEAPON_TINT_COUNT
	 *
	 * Hash: 0x5DCF6C5CAB2E9BF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DCF6C5CAB2E9BF7)
	 */
	getTintCount(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPONTYPE_GROUP
	 *
	 * Hash: 0xC3287EE3050FB74C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3287EE3050FB74C)
	 */
	getTypeGroup(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPONTYPE_MODEL
	 *
	 * Hash: 0xF46CDC33180FDA94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF46CDC33180FDA94)
	 */
	getTypeModel(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GET_WEAPONTYPE_SLOT
	 *
	 * Hash: 0x4215460B9B8B7FA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4215460B9B8B7FA0)
	 */
	getTypeSlot(weaponHash: integer): integer;

	/**
	 * Native: WEAPON::GIVE_WEAPON_COMPONENT_TO_PED
	 *
	 * Hash: 0xD966D51AA5B28BB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD966D51AA5B28BB9)
	 */
	giveComponentToPed(ped: Handle, weaponHash: integer, componentHash: integer): void;

	/**
	 * Native: WEAPON::GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT
	 *
	 * Hash: 0x33E179436C0B31DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33E179436C0B31DB)
	 */
	giveComponentToWeaponObject(weaponObject: Handle, addonHash: integer): void;

	/**
	 * Native: WEAPON::GIVE_DELAYED_WEAPON_TO_PED
	 *
	 * Hash: 0xB282DC6EBD803C75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB282DC6EBD803C75)
	 */
	giveDelayedToPed(ped: Handle, weaponHash: integer, ammoCount: integer, bForceInHand: boolean): void;

	/**
	 * Native: WEAPON::_GIVE_LOADOUT_TO_PED
	 *
	 * Hash: 0x68F8BE6AF5CDF8A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68F8BE6AF5CDF8A6)
	 */
	giveLoadoutToPed(ped: Handle, loadoutHash: integer): void;

	/**
	 * Native: WEAPON::GIVE_WEAPON_OBJECT_TO_PED
	 *
	 * Hash: 0xB1FA61371AF7C4B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1FA61371AF7C4B7)
	 */
	giveObjectToPed(weaponObject: Handle, ped: Handle): void;

	/**
	 * Native: WEAPON::GIVE_WEAPON_TO_PED
	 *
	 * Hash: 0xBF0FD6E56C964FCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF0FD6E56C964FCB)
	 */
	giveToPed(ped: Handle, weaponHash: integer, ammoCount: integer, isHidden: boolean, bForceInHand: boolean): void;

	/**
	 * Native: WEAPON::HAS_WEAPON_ASSET_LOADED
	 *
	 * Hash: 0x36E353271F0E90EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36E353271F0E90EE)
	 */
	hasAssetLoaded(weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON
	 *
	 * Hash: 0x131D401334815E94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x131D401334815E94)
	 */
	hasEntityBeenDamagedBy(entity: Handle, weaponHash: integer, weaponType: integer): boolean;

	/**
	 * Native: WEAPON::HAS_WEAPON_GOT_WEAPON_COMPONENT
	 *
	 * Hash: 0x76A18844E743BF91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76A18844E743BF91)
	 */
	hasGotWeaponComponent(weapon: Handle, addonHash: integer): boolean;

	/**
	 * Native: WEAPON::HAS_PED_BEEN_DAMAGED_BY_WEAPON
	 *
	 * Hash: 0x2D343D2219CD027A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D343D2219CD027A)
	 */
	hasPedBeenDamagedBy(ped: Handle, weaponHash: integer, weaponType: integer): boolean;

	/**
	 * Native: WEAPON::HAS_PED_GOT_WEAPON
	 *
	 * Hash: 0x8DECB02F88F428BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DECB02F88F428BC)
	 */
	hasPedGot(ped: Handle, weaponHash: integer, p2: boolean): boolean;

	/**
	 * Native: WEAPON::HAS_PED_GOT_WEAPON_COMPONENT
	 *
	 * Hash: 0xC593212475FAE340 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC593212475FAE340)
	 */
	hasPedGotComponent(ped: Handle, weaponHash: integer, componentHash: integer): boolean;

	/**
	 * Native: WEAPON::HAS_VEHICLE_GOT_PROJECTILE_ATTACHED
	 *
	 * Hash: 0x717C8481234E3B88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x717C8481234E3B88)
	 */
	hasVehicleGotProjectileAttached(driver: Handle, vehicle: Handle, weaponHash: integer, p3: integer): boolean;

	/**
	 * Native: WEAPON::HIDE_PED_WEAPON_FOR_SCRIPTED_CUTSCENE
	 *
	 * Hash: 0x6F6981D2253C208F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F6981D2253C208F)
	 */
	hidePedForScriptedCutscene(ped: Handle, toggle: boolean): void;

	/**
	 * Native: WEAPON::_IS_ANY_AIR_DEFENSE_ZONE_INSIDE_SPHERE
	 *
	 * Hash: 0xDAB963831DBFD3F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAB963831DBFD3F4)
	 */
	isAnyAirDefenseZoneInsideSphere(x: number, y: number, z: number, radius: number): integer;

	/**
	 * Native: WEAPON::IS_FLASH_LIGHT_ON
	 *
	 * Hash: 0x4B7620C47217126C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B7620C47217126C)
	 */
	isFlashLightOn(ped: Handle): boolean;

	/**
	 * Native: WEAPON::IS_PED_ARMED
	 *
	 * Hash: 0x475768A975D5AD17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x475768A975D5AD17)
	 */
	isPedArmed(ped: Handle, typeFlags: integer): boolean;

	/**
	 * Native: WEAPON::IS_PED_WEAPON_COMPONENT_ACTIVE
	 *
	 * Hash: 0x0D78DE0572D3969E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D78DE0572D3969E)
	 */
	isPedComponentActive(ped: Handle, weaponHash: integer, componentHash: integer): boolean;

	/**
	 * Native: WEAPON::IS_PED_CURRENT_WEAPON_SILENCED
	 *
	 * Hash: 0x65F0C5AE05943EC7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65F0C5AE05943EC7)
	 */
	isPedCurrentSilenced(ped: Handle): boolean;

	/**
	 * Native: WEAPON::IS_PED_WEAPON_READY_TO_SHOOT
	 *
	 * Hash: 0xB80CA294F2F26749 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB80CA294F2F26749)
	 */
	isPedReadyToShoot(ped: Handle): boolean;

	/**
	 * Native: WEAPON::IS_WEAPON_VALID
	 *
	 * Hash: 0x937C71165CF334B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x937C71165CF334B3)
	 */
	isValid(weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::MAKE_PED_RELOAD
	 *
	 * Hash: 0x20AE33F3AC9C0033 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20AE33F3AC9C0033)
	 */
	makePedReload(ped: Handle): boolean;

	/**
	 * Native: WEAPON::REFILL_AMMO_INSTANTLY
	 *
	 * Hash: 0x8C0D57EA686FAD87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C0D57EA686FAD87)
	 */
	refillAmmoInstantly(ped: Handle): boolean;

	/**
	 * Native: WEAPON::_REMOVE_AIR_DEFENSE_ZONE
	 *
	 * Hash: 0x0ABF535877897560 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0ABF535877897560)
	 */
	removeAirDefenseZone(zoneId: integer): boolean;

	/**
	 * Native: WEAPON::_REMOVE_ALL_AIR_DEFENSE_ZONES
	 *
	 * Hash: 0x1E45B34ADEBEE48E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E45B34ADEBEE48E)
	 */
	removeAllAirDefenseZones(): void;

	/**
	 * Native: WEAPON::REMOVE_ALL_PED_WEAPONS
	 *
	 * Hash: 0xF25DF915FA38C5F3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF25DF915FA38C5F3)
	 */
	removeAllPedS(ped: Handle, p1: boolean): void;

	/**
	 * Native: WEAPON::REMOVE_ALL_PROJECTILES_OF_TYPE
	 *
	 * Hash: 0xFC52E0F37E446528 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC52E0F37E446528)
	 */
	removeAllProjectilesOfType(weaponHash: integer, explode: boolean): void;

	/**
	 * Native: WEAPON::REMOVE_WEAPON_ASSET
	 *
	 * Hash: 0xAA08EF13F341C8FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA08EF13F341C8FC)
	 */
	removeAsset(weaponHash: integer): void;

	/**
	 * Native: WEAPON::REMOVE_WEAPON_COMPONENT_FROM_PED
	 *
	 * Hash: 0x1E8BE90C74FB4C09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E8BE90C74FB4C09)
	 */
	removeComponentFromPed(ped: Handle, weaponHash: integer, componentHash: integer): void;

	/**
	 * Native: WEAPON::REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT
	 *
	 * Hash: 0xF7D82B0D66777611 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7D82B0D66777611)
	 */
	removeComponentFromWeaponObject(p0: integer, p1: integer): void;

	/**
	 * Native: WEAPON::REMOVE_WEAPON_FROM_PED
	 *
	 * Hash: 0x4899CB088EDF59B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4899CB088EDF59B8)
	 */
	removeFromPed(ped: Handle, weaponHash: integer): void;

	/**
	 * Native: WEAPON::REQUEST_WEAPON_ASSET
	 *
	 * Hash: 0x5443438F033E29C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5443438F033E29C3)
	 */
	requestAsset(weaponHash: integer, p1: integer, p2: integer): void;

	/**
	 * Native: WEAPON::REQUEST_WEAPON_HIGH_DETAIL_MODEL
	 *
	 * Hash: 0x48164DBB970AC3F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48164DBB970AC3F0)
	 */
	requestHighDetailModel(weaponObject: Handle): void;

	/**
	 * Native: WEAPON::SET_AMMO_IN_CLIP
	 *
	 * Hash: 0xDCD2A934D65CB497 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCD2A934D65CB497)
	 */
	setAmmoInClip(ped: Handle, weaponHash: integer, ammo: integer): boolean;

	/**
	 * Native: WEAPON::SET_WEAPON_ANIMATION_OVERRIDE
	 *
	 * Hash: 0x1055AC3A667F09D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1055AC3A667F09D9)
	 */
	setAnimationOverride(ped: Handle, animStyle: integer): void;

	/**
	 * Native: WEAPON::_SET_CAN_PED_EQUIP_WEAPON
	 *
	 * Hash: 0xB4771B9AAF4E68E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4771B9AAF4E68E4)
	 */
	setCanPedEquip(ped: Handle, weaponHash: integer, toggle: boolean): void;

	/**
	 * Native: WEAPON::_SET_CAN_PED_EQUIP_ALL_WEAPONS
	 *
	 * Hash: 0xEFF296097FF1E509 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFF296097FF1E509)
	 */
	setCanPedEquipAllS(ped: Handle, toggle: boolean): void;

	/**
	 * Native: WEAPON::SET_CURRENT_PED_WEAPON
	 *
	 * Hash: 0xADF692B254977C0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADF692B254977C0C)
	 */
	setCurrentPed(ped: Handle, weaponHash: integer, bForceInHand: boolean): void;

	/**
	 * Native: WEAPON::SET_CURRENT_PED_VEHICLE_WEAPON
	 *
	 * Hash: 0x75C55983C2C39DAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75C55983C2C39DAA)
	 */
	setCurrentPedVehicle(ped: Handle, weaponHash: integer): boolean;

	/**
	 * Native: WEAPON::_SET_WEAPON_DAMAGE_MODIFIER_THIS_FRAME
	 *
	 * Hash: 0x4757F00BC6323CFE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4757F00BC6323CFE)
	 */
	setDamageModifierThisFrame(weaponHash: integer, damageMultiplier: number): void;

	/**
	 * Native: WEAPON::_SET_WEAPON_EXPLOSION_RADIUS_MULTIPLIER
	 *
	 * Hash: 0x4AE5AC8B852D642C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AE5AC8B852D642C)
	 */
	setExplosionRadiusMultiplier(weaponHash: integer, multiplier: number): void;

	/**
	 * Native: WEAPON::_SET_FLASH_LIGHT_ENABLED
	 *
	 * Hash: 0x988DB6FE9B3AC000 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x988DB6FE9B3AC000)
	 */
	setFlashLightEnabled(ped: Handle, toggle: boolean): void;

	/**
	 * Native: WEAPON::SET_FLASH_LIGHT_FADE_DISTANCE
	 *
	 * Hash: 0xCEA66DAD478CD39B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEA66DAD478CD39B)
	 */
	setFlashLightFadeDistance(distance: number): integer;

	/**
	 * Native: WEAPON::_SET_WEAPON_OBJECT_LIVERY_COLOR
	 *
	 * Hash: 0x5DA825A85D0EA6E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DA825A85D0EA6E6)
	 */
	setObjectLiveryColor(weaponObject: Handle, camoComponentHash: integer, colorIndex: integer): void;

	/**
	 * Native: WEAPON::SET_WEAPON_OBJECT_TINT_INDEX
	 *
	 * Hash: 0xF827589017D4E4A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF827589017D4E4A9)
	 */
	setObjectTintIndex(weapon: Handle, tintIndex: integer): void;

	/**
	 * Native: WEAPON::SET_PED_AMMO
	 *
	 * Hash: 0x14E56BC5B5DB6A19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14E56BC5B5DB6A19)
	 */
	setPedAmmo(ped: Handle, weaponHash: integer, ammo: integer, p3: boolean): void;

	/**
	 * Native: WEAPON::SET_PED_AMMO_BY_TYPE
	 *
	 * Hash: 0x5FD1E1F011E76D7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FD1E1F011E76D7E)
	 */
	setPedAmmoByType(ped: Handle, ammoTypeHash: integer, ammo: integer): void;

	/**
	 * Native: WEAPON::SET_PED_AMMO_TO_DROP
	 *
	 * Hash: 0xA4EFEF9440A5B0EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4EFEF9440A5B0EF)
	 */
	setPedAmmoToDrop(ped: Handle, p1: integer): void;

	/**
	 * Native: WEAPON::SET_PED_CHANCE_OF_FIRING_BLANKS
	 *
	 * Hash: 0x8378627201D5497D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8378627201D5497D)
	 */
	setPedChanceOfFiringBlanks(ped: Handle, xBias: number, yBias: number): void;

	/**
	 * Native: WEAPON::SET_PED_CURRENT_WEAPON_VISIBLE
	 *
	 * Hash: 0x0725A4CCFDED9A70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0725A4CCFDED9A70)
	 */
	setPedCurrentVisible(ped: Handle, visible: boolean, deselectWeapon: boolean, p3: boolean, p4: boolean): void;

	/**
	 * Native: WEAPON::SET_PED_DROPS_WEAPON
	 *
	 * Hash: 0x6B7513D9966FBEC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B7513D9966FBEC0)
	 */
	setPedDrops(ped: Handle): void;

	/**
	 * Native: WEAPON::SET_PED_DROPS_INVENTORY_WEAPON
	 *
	 * Hash: 0x208A1888007FC0E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x208A1888007FC0E6)
	 */
	setPedDropsInventory(
		ped: Handle,
		weaponHash: integer,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		ammoCount: integer
	): void;

	/**
	 * Native: WEAPON::SET_PED_GADGET
	 *
	 * Hash: 0xD0D7B1E680ED4A1A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0D7B1E680ED4A1A)
	 */
	setPedGadget(ped: Handle, gadgetHash: integer, p2: boolean): void;

	/**
	 * Native: WEAPON::SET_PED_INFINITE_AMMO
	 *
	 * Hash: 0x3EDCB0505123623B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EDCB0505123623B)
	 */
	setPedInfiniteAmmo(ped: Handle, toggle: boolean, weaponHash: integer): void;

	/**
	 * Native: WEAPON::SET_PED_INFINITE_AMMO_CLIP
	 *
	 * Hash: 0x183DADC6AA953186 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x183DADC6AA953186)
	 */
	setPedInfiniteAmmoClip(ped: Handle, toggle: boolean): void;

	/**
	 * Native: WEAPON::_SET_PED_WEAPON_LIVERY_COLOR
	 *
	 * Hash: 0x9FE5633880ECD8ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FE5633880ECD8ED)
	 */
	setPedLiveryColor(ped: Handle, weaponHash: integer, camoComponentHash: integer, colorIndex: integer): void;

	/**
	 * Native: WEAPON::SET_PED_SHOOT_ORDNANCE_WEAPON
	 *
	 * Hash: 0xB4C8D77C80C0421E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4C8D77C80C0421E)
	 */
	setPedShootOrdnance(ped: Handle, p1: number): Handle;

	/**
	 * Native: WEAPON::SET_PED_WEAPON_TINT_INDEX
	 *
	 * Hash: 0x50969B9B89ED5738 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50969B9B89ED5738)
	 */
	setPedTintIndex(ped: Handle, weaponHash: integer, tintIndex: integer): void;

	/**
	 * Native: WEAPON::SET_PICKUP_AMMO_AMOUNT_SCALER
	 *
	 * Hash: 0xE620FD3512A04F18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE620FD3512A04F18)
	 */
	setPickupAmmoAmountScaler(p0: number): void;

	/**
	 * Native: WEAPON::_SET_PLAYER_AIR_DEFENSE_ZONE_FLAG
	 *
	 * Hash: 0xECDC202B25E5CF48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xECDC202B25E5CF48)
	 */
	setPlayerAirDefenseZoneFlag(player: Handle, zoneId: integer, enable: boolean): void;

	unk: GameWeaponUnk;
}

interface GameWeaponMp extends GameWeapon {
	unequipEmptyWeapons: boolean;

	/**
	 * Cancels **outgoing** damage locally.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Weapon::cancelCurrentDamageEvent)
	 */
	cancelCurrentDamageEvent(): void;

	/**
	 * Sets current **incoming/outgoing** damage value.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Weapon::setCurrentDamageEventAmount)
	 */
	setCurrentDamageEventAmount(value: number): void;

	/**
	 * Sets whether the current damage event should be a critical hit or not?
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Weapon::setCurrentDamageEventCritical)
	 */
	setCurrentDamageEventCritical(toggle: boolean): void;

	/**
	 * Toggles outgoingDamage event calls when issuing weapon damage to locally controlled entities.
	 *
	 * To enable, call the function in playerReady.
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Weapon::setEnableLocalOutgoingDamage)
	 */
	setEnableLocalOutgoingDamage(toggle: boolean): void;
}
