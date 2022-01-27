/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameZoneLegacy {
	/**
	 * Native: ZONE::GET_NAME_OF_ZONE
	 *
	 * Hash: 0xCD90657D4C30E1CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD90657D4C30E1CA)
	 */
	getNameOfZone(x: number, y: number, z: number): string;

	/**
	 * Native: ZONE::GET_ZONE_AT_COORDS
	 *
	 * Hash: 0x27040C25DE6CB2F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27040C25DE6CB2F4)
	 */
	getZoneAtCoords(x: number, y: number, z: number): integer;

	/**
	 * Native: ZONE::GET_ZONE_FROM_NAME_ID
	 *
	 * Hash: 0x98CD1D2934B76CC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98CD1D2934B76CC1)
	 */
	getZoneFromNameId(zoneName: string): integer;

	/**
	 * Native: ZONE::GET_ZONE_POPSCHEDULE
	 *
	 * Hash: 0x4334BC40AA0CB4BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4334BC40AA0CB4BB)
	 */
	getZonePopschedule(zoneId: integer): integer;

	/**
	 * Native: ZONE::GET_ZONE_SCUMMINESS
	 *
	 * Hash: 0x5F7B268D15BA0739 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F7B268D15BA0739)
	 */
	getZoneScumminess(zoneId: integer): integer;

	/**
	 * Native: ZONE::SET_ZONE_ENABLED
	 *
	 * Hash: 0xBA5ECEEA120E5611 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA5ECEEA120E5611)
	 */
	setZoneEnabled(zoneId: integer, toggle: boolean): void;
}

interface GameZoneUnk {}

interface GameZone extends GameZoneLegacy {
	/**
	 * Native: ZONE::CLEAR_POPSCHEDULE_OVERRIDE_VEHICLE_MODEL
	 *
	 * Hash: 0x5C0DE367AA0D911C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C0DE367AA0D911C)
	 */
	clearPopscheduleOverrideVehicleModel(scheduleId: integer): void;

	/**
	 * Native: ZONE::GET_ZONE_AT_COORDS
	 *
	 * Hash: 0x27040C25DE6CB2F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27040C25DE6CB2F4)
	 */
	getAtCoords(x: number, y: number, z: number): integer;

	/**
	 * Native: ZONE::GET_ZONE_FROM_NAME_ID
	 *
	 * Hash: 0x98CD1D2934B76CC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98CD1D2934B76CC1)
	 */
	getFromNameId(zoneName: string): integer;

	/**
	 * Native: ZONE::GET_HASH_OF_MAP_AREA_AT_COORDS
	 *
	 * Hash: 0x7EE64D51E8498728 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EE64D51E8498728)
	 */
	getHashOfMapAreaAtCoords(x: number, y: number, z: number): integer;

	/**
	 * Native: ZONE::GET_NAME_OF_ZONE
	 *
	 * Hash: 0xCD90657D4C30E1CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD90657D4C30E1CA)
	 */
	getNameOf(x: number, y: number, z: number): string;

	/**
	 * Native: ZONE::GET_ZONE_POPSCHEDULE
	 *
	 * Hash: 0x4334BC40AA0CB4BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4334BC40AA0CB4BB)
	 */
	getPopschedule(zoneId: integer): integer;

	/**
	 * Native: ZONE::GET_ZONE_SCUMMINESS
	 *
	 * Hash: 0x5F7B268D15BA0739 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F7B268D15BA0739)
	 */
	getScumminess(zoneId: integer): integer;

	/**
	 * Native: ZONE::OVERRIDE_POPSCHEDULE_VEHICLE_MODEL
	 *
	 * Hash: 0x5F7D596BAC2E7777 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F7D596BAC2E7777)
	 */
	overridePopscheduleVehicleModel(scheduleId: integer, vehicleHash: integer): void;

	/**
	 * Native: ZONE::SET_ZONE_ENABLED
	 *
	 * Hash: 0xBA5ECEEA120E5611 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA5ECEEA120E5611)
	 */
	setEnabled(zoneId: integer, toggle: boolean): void;

	unk: GameZoneUnk;
}

interface GameZoneMp extends GameZone {}
