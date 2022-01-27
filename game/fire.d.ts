/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameFireLegacy {
	/**
	 * Native: FIRE::ADD_EXPLOSION_WITH_USER_VFX
	 *
	 * Hash: 0x36DD3FE58B5E5212 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36DD3FE58B5E5212)
	 */
	addSpecfxExplosion(
		x: number,
		y: number,
		z: number,
		explosionType: integer,
		explosionFx: integer,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number
	): void;

	/**
	 * Native: FIRE::GET_CLOSEST_FIRE_POS
	 *
	 * Hash: 0x352A9F6BCF90081F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x352A9F6BCF90081F)
	 */
	getClosestFirePos(x: number, y: number, z: number): Vector3Mp;

	/**
	 * Native: FIRE::GET_NUMBER_OF_FIRES_IN_RANGE
	 *
	 * Hash: 0x50CAD495A460B305 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50CAD495A460B305)
	 */
	getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): integer;

	/**
	 * Native: FIRE::GET_OWNER_OF_EXPLOSION_IN_ANGLED_AREA
	 *
	 * Hash: 0x14BA4BA137AF6CEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14BA4BA137AF6CEC)
	 */
	getPedInsideExplosionArea(
		explosionType: integer,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number
	): Handle;

	/**
	 * Native: FIRE::REMOVE_SCRIPT_FIRE
	 *
	 * Hash: 0x7FF548385680673F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FF548385680673F)
	 */
	removeScriptFire(fireHandle: Handle): void;

	/**
	 * Native: FIRE::START_SCRIPT_FIRE
	 *
	 * Hash: 0x6B83617E04503888 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B83617E04503888)
	 */
	startScriptFire(X: number, Y: number, Z: number, maxChildren: integer, isGasFire: boolean): Handle;

	/**
	 * Native: FIRE::STOP_FIRE_IN_RANGE
	 *
	 * Hash: 0x056A8A219B8E829F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x056A8A219B8E829F)
	 */
	stopFireInRange(x: number, y: number, z: number, radius: number): void;
}

interface GameFireUnk {}

interface GameFire extends GameFireLegacy {
	/**
	 * Native: FIRE::ADD_EXPLOSION
	 *
	 * Hash: 0xE3AD2BDBAEE269AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3AD2BDBAEE269AC)
	 */
	addExplosion(
		x: number,
		y: number,
		z: number,
		explosionType: integer,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number,
		noDamage: boolean
	): void;

	/**
	 * Native: FIRE::ADD_EXPLOSION_WITH_USER_VFX
	 *
	 * Hash: 0x36DD3FE58B5E5212 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36DD3FE58B5E5212)
	 */
	addExplosionWithUserVfx(
		x: number,
		y: number,
		z: number,
		explosionType: integer,
		explosionFx: integer,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number
	): void;

	/**
	 * Native: FIRE::ADD_OWNED_EXPLOSION
	 *
	 * Hash: 0x172AA1B624FA1013 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x172AA1B624FA1013)
	 */
	addOwnedExplosion(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		explosionType: integer,
		damageScale: number,
		isAudible: boolean,
		isInvisible: boolean,
		cameraShake: number
	): void;

	/**
	 * Native: FIRE::GET_CLOSEST_FIRE_POS
	 *
	 * Hash: 0x352A9F6BCF90081F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x352A9F6BCF90081F)
	 */
	getClosestPos(x: number, y: number, z: number): Vector3Mp;

	/**
	 * Native: FIRE::_GET_ENTITY_INSIDE_EXPLOSION_SPHERE
	 *
	 * Hash: 0xB3CD51E3DB86F176 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3CD51E3DB86F176)
	 */
	getEntityInsideExplosionSphere(explosionType: integer, x: number, y: number, z: number, radius: number): Handle;

	/**
	 * Native: FIRE::GET_OWNER_OF_EXPLOSION_IN_ANGLED_AREA
	 *
	 * Hash: 0x14BA4BA137AF6CEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14BA4BA137AF6CEC)
	 */
	getOwnerOfExplosionInAngledArea(
		explosionType: integer,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number
	): Handle;

	/**
	 * Native: FIRE::IS_ENTITY_ON_FIRE
	 *
	 * Hash: 0x28D3FED7190D3A0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28D3FED7190D3A0B)
	 */
	isEntityOn(entity: Handle): boolean;

	/**
	 * Native: FIRE::IS_EXPLOSION_ACTIVE_IN_AREA
	 *
	 * Hash: 0x6070104B699B2EF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6070104B699B2EF4)
	 */
	isExplosionActiveInArea(
		explosionType: integer,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number
	): boolean;

	/**
	 * Native: FIRE::IS_EXPLOSION_IN_ANGLED_AREA
	 *
	 * Hash: 0xA079A6C51525DC4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA079A6C51525DC4B)
	 */
	isExplosionInAngledArea(
		explosionType: integer,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number
	): boolean;

	/**
	 * Native: FIRE::IS_EXPLOSION_IN_AREA
	 *
	 * Hash: 0x2E2EBA0EE7CED0E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E2EBA0EE7CED0E0)
	 */
	isExplosionInArea(
		explosionType: integer,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number
	): boolean;

	/**
	 * Native: FIRE::IS_EXPLOSION_IN_SPHERE
	 *
	 * Hash: 0xAB0F816885B0E483 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB0F816885B0E483)
	 */
	isExplosionInSphere(explosionType: integer, x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: FIRE::REMOVE_SCRIPT_FIRE
	 *
	 * Hash: 0x7FF548385680673F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FF548385680673F)
	 */
	removeScript(fireHandle: Handle): void;

	/**
	 * Native: FIRE::_SET_FIRE_SPREAD_RATE
	 *
	 * Hash: 0x8F390AC4155099BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F390AC4155099BA)
	 */
	setSpreadRate(p0: number): void;

	/**
	 * Native: FIRE::START_ENTITY_FIRE
	 *
	 * Hash: 0xF6A9D9708F6F23DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6A9D9708F6F23DF)
	 */
	startEntity(entity: Handle): Handle;

	/**
	 * Native: FIRE::START_SCRIPT_FIRE
	 *
	 * Hash: 0x6B83617E04503888 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B83617E04503888)
	 */
	startScript(X: number, Y: number, Z: number, maxChildren: integer, isGasFire: boolean): Handle;

	/**
	 * Native: FIRE::STOP_ENTITY_FIRE
	 *
	 * Hash: 0x7F0DD2EBBB651AFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F0DD2EBBB651AFF)
	 */
	stopEntity(entity: Handle): void;

	/**
	 * Native: FIRE::STOP_FIRE_IN_RANGE
	 *
	 * Hash: 0x056A8A219B8E829F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x056A8A219B8E829F)
	 */
	stopInRange(x: number, y: number, z: number, radius: number): void;

	unk: GameFireUnk;
}

interface GameFireMp extends GameFire {}
