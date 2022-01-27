/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameBrainLegacy {
	/**
	 * Native: BRAIN::DISABLE_SCRIPT_BRAIN_SET
	 *
	 * Hash: 0x14D8518E9760F08F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14D8518E9760F08F)
	 */
	disableScriptBrainSet(brainSet: integer): void;

	/**
	 * Native: BRAIN::ENABLE_SCRIPT_BRAIN_SET
	 *
	 * Hash: 0x67AA4D73F0CFA86B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67AA4D73F0CFA86B)
	 */
	enableScriptBrainSet(brainSet: integer): void;

	/**
	 * Native: BRAIN::IS_OBJECT_WITHIN_BRAIN_ACTIVATION_RANGE
	 *
	 * Hash: 0xCCBA154209823057 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCBA154209823057)
	 */
	isObjectWithinBrainActivationRange(object: Handle): boolean;

	/**
	 * Native: BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN
	 *
	 * Hash: 0x0BE84C318BA6EC22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BE84C318BA6EC22)
	 */
	registerObjectScriptBrain(
		scriptName: string,
		modelHash: integer,
		p2: integer,
		activationRange: number,
		p4: integer,
		p5: integer
	): void;

	/**
	 * Native: BRAIN::REGISTER_WORLD_POINT_SCRIPT_BRAIN
	 *
	 * Hash: 0x3CDC7136613284BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3CDC7136613284BD)
	 */
	registerWorldPointScriptBrain(scriptName: string, activationRange: number, p2: integer): void;
}

interface GameBrainUnk {
	/**
	 * Native: BRAIN::_0x0B40ED49D7D6FF84
	 *
	 * Hash: 0x0B40ED49D7D6FF84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B40ED49D7D6FF84)
	 */
	_0x0B40ED49D7D6FF84(): void;

	/**
	 * Native: BRAIN::_0x4D953DF78EBF8158
	 *
	 * Hash: 0x4D953DF78EBF8158 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D953DF78EBF8158)
	 */
	_0x4D953DF78EBF8158(): void;

	/**
	 * Native: BRAIN::_0x6D6840CEE8845831
	 *
	 * Hash: 0x6D6840CEE8845831 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D6840CEE8845831)
	 */
	_0x6D6840CEE8845831(scriptName: string): void;

	/**
	 * Native: BRAIN::_0x6E91B04E08773030
	 *
	 * Hash: 0x6E91B04E08773030 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E91B04E08773030)
	 */
	_0x6E91B04E08773030(scriptName: string): void;
}

interface GameBrain extends GameBrainLegacy {
	/**
	 * Native: BRAIN::ADD_SCRIPT_TO_RANDOM_PED
	 *
	 * Hash: 0x4EE5367468A65CCC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EE5367468A65CCC)
	 */
	addScriptToRandomPed(name: string, model: integer, p2: number, p3: number): void;

	/**
	 * Native: BRAIN::DISABLE_SCRIPT_BRAIN_SET
	 *
	 * Hash: 0x14D8518E9760F08F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14D8518E9760F08F)
	 */
	disableScriptSet(brainSet: integer): void;

	/**
	 * Native: BRAIN::ENABLE_SCRIPT_BRAIN_SET
	 *
	 * Hash: 0x67AA4D73F0CFA86B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67AA4D73F0CFA86B)
	 */
	enableScriptSet(brainSet: integer): void;

	/**
	 * Native: BRAIN::IS_OBJECT_WITHIN_BRAIN_ACTIVATION_RANGE
	 *
	 * Hash: 0xCCBA154209823057 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCBA154209823057)
	 */
	isObjectWithinActivationRange(object: Handle): boolean;

	/**
	 * Native: BRAIN::IS_WORLD_POINT_WITHIN_BRAIN_ACTIVATION_RANGE
	 *
	 * Hash: 0xC5042CC6F5E3D450 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5042CC6F5E3D450)
	 */
	isWorldPointWithinActivationRange(): boolean;

	/**
	 * Native: BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN
	 *
	 * Hash: 0x0BE84C318BA6EC22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BE84C318BA6EC22)
	 */
	registerObjectScript(
		scriptName: string,
		modelHash: integer,
		p2: integer,
		activationRange: number,
		p4: integer,
		p5: integer
	): void;

	/**
	 * Native: BRAIN::REGISTER_WORLD_POINT_SCRIPT_BRAIN
	 *
	 * Hash: 0x3CDC7136613284BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3CDC7136613284BD)
	 */
	registerWorldPointScript(scriptName: string, activationRange: number, p2: integer): void;

	unk: GameBrainUnk;
}

interface GameBrainMp extends GameBrain {}
