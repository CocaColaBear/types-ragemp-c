/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameWaterLegacy {
	/**
	 * Native: WATER::GET_WATER_HEIGHT
	 *
	 * Hash: 0xF6829842C06AE524 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6829842C06AE524)
	 */
	getWaterHeight(x: number, y: number, z: number): number;

	/**
	 * Native: WATER::GET_WATER_HEIGHT_NO_WAVES
	 *
	 * Hash: 0x8EE6B53CE13A9794 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EE6B53CE13A9794)
	 */
	getWaterHeightNoWaves(x: number, y: number, z: number): number;

	/**
	 * Native: WATER::MODIFY_WATER
	 *
	 * Hash: 0xC443FD757C3BA637 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC443FD757C3BA637)
	 */
	modifyWater(x: number, y: number, radius: number, height: number): void;

	/**
	 * Native: WATER::SET_DEEP_OCEAN_SCALER
	 *
	 * Hash: 0xB96B00E976BE977F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB96B00E976BE977F)
	 */
	setWavesIntensity(intensity: number): void;

	/**
	 * Native: WATER::TEST_PROBE_AGAINST_ALL_WATER
	 *
	 * Hash: 0x8974647ED222EA5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8974647ED222EA5F)
	 */
	testProbeAgainstAllWater(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer
	): boolean;

	/**
	 * Native: WATER::TEST_PROBE_AGAINST_WATER
	 *
	 * Hash: 0xFFA5D878809819DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFFA5D878809819DB)
	 */
	testProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Vector3Mp;

	/**
	 * Native: WATER::TEST_VERTICAL_PROBE_AGAINST_ALL_WATER
	 *
	 * Hash: 0x2B3451FA1E3142E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B3451FA1E3142E2)
	 */
	testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: integer): number;
}

interface GameWaterUnk {
	/**
	 * Native: WATER::_0x547237AA71AB44DE
	 *
	 * Hash: 0x547237AA71AB44DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x547237AA71AB44DE)
	 */
	_0x547237AA71AB44DE(p0: number): void;
}

interface GameWater extends GameWaterLegacy {
	/**
	 * Native: WATER::ADD_EXTRA_CALMING_QUAD
	 *
	 * Hash: 0xFDBF4CDBC07E1706 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDBF4CDBC07E1706)
	 */
	addExtraCalmingQuad(xLow: number, yLow: number, xHigh: number, yHigh: number, height: number): integer;

	/**
	 * Native: WATER::GET_DEEP_OCEAN_SCALER
	 *
	 * Hash: 0x2B2A2CC86778B619 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B2A2CC86778B619)
	 */
	getDeepOceanScaler(): number;

	/**
	 * Native: WATER::GET_WATER_HEIGHT
	 *
	 * Hash: 0xF6829842C06AE524 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6829842C06AE524)
	 */
	getHeight(x: number, y: number, z: number): number;

	/**
	 * Native: WATER::GET_WATER_HEIGHT_NO_WAVES
	 *
	 * Hash: 0x8EE6B53CE13A9794 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EE6B53CE13A9794)
	 */
	getHeightNoWaves(x: number, y: number, z: number): number;

	/**
	 * Native: WATER::MODIFY_WATER
	 *
	 * Hash: 0xC443FD757C3BA637 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC443FD757C3BA637)
	 */
	modify(x: number, y: number, radius: number, height: number): void;

	/**
	 * Native: WATER::REMOVE_EXTRA_CALMING_QUAD
	 *
	 * Hash: 0xB1252E3E59A82AAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1252E3E59A82AAF)
	 */
	removeExtraCalmingQuad(p0: integer): void;

	/**
	 * Native: WATER::RESET_DEEP_OCEAN_SCALER
	 *
	 * Hash: 0x5E5E99285AE812DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E5E99285AE812DB)
	 */
	resetDeepOceanScaler(): void;

	/**
	 * Native: WATER::SET_DEEP_OCEAN_SCALER
	 *
	 * Hash: 0xB96B00E976BE977F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB96B00E976BE977F)
	 */
	setDeepOceanScaler(intensity: number): void;

	/**
	 * Native: WATER::TEST_PROBE_AGAINST_WATER
	 *
	 * Hash: 0xFFA5D878809819DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFFA5D878809819DB)
	 */
	testProbeAgainst(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Vector3Mp;

	/**
	 * Native: WATER::TEST_PROBE_AGAINST_ALL_WATER
	 *
	 * Hash: 0x8974647ED222EA5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8974647ED222EA5F)
	 */
	testProbeAgainstAll(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer
	): boolean;

	/**
	 * Native: WATER::TEST_VERTICAL_PROBE_AGAINST_ALL_WATER
	 *
	 * Hash: 0x2B3451FA1E3142E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B3451FA1E3142E2)
	 */
	testVerticalProbeAgainstAll(x: number, y: number, z: number, p3: integer): number;

	unk: GameWaterUnk;
}

interface GameWaterMp extends GameWater {}
