/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface StartNewScriptWithNameHashAndArgsResult {
	args: integer;
	result: integer;
}

interface StartNewScriptWithArgsResult {
	args: integer;
	result: integer;
}

interface GameSystemLegacy {
	/**
	 * Native: SYSTEM::START_NEW_SCRIPT_WITH_NAME_HASH
	 *
	 * Hash: 0xEB1C67C3A5333A92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB1C67C3A5333A92)
	 */
	startNewStreamedScript(scriptHash: integer, stackSize: integer): integer;

	/**
	 * Native: SYSTEM::START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS
	 *
	 * Hash: 0xC4BB298BD441BE78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4BB298BD441BE78)
	 */
	startNewStreamedScriptWithArgs(
		scriptHash: integer,
		argCount: integer,
		stackSize: integer
	): StartNewScriptWithNameHashAndArgsResult;
}

interface GameSystemUnk {}

interface GameSystem extends GameSystemLegacy {
	/**
	 * Native: SYSTEM::CEIL
	 *
	 * Hash: 0x11E019C8F43ACC8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11E019C8F43ACC8A)
	 */
	ceil(value: number): integer;

	/**
	 * Native: SYSTEM::COS
	 *
	 * Hash: 0xD0FFB162F40A139C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0FFB162F40A139C)
	 */
	cos(value: number): number;

	/**
	 * Native: SYSTEM::FLOOR
	 *
	 * Hash: 0xF34EE736CF047844 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF34EE736CF047844)
	 */
	floor(value: number): integer;

	/**
	 * Native: SYSTEM::_LOG10
	 *
	 * Hash: 0xE816E655DE37FE20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE816E655DE37FE20)
	 */
	log10(value: number): number;

	/**
	 * Native: SYSTEM::POW
	 *
	 * Hash: 0xE3621CC40F31FE2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3621CC40F31FE2E)
	 */
	pow(base: number, exponent: number): number;

	/**
	 * Native: SYSTEM::ROUND
	 *
	 * Hash: 0xF2DB717A73826179 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2DB717A73826179)
	 */
	round(value: number): integer;

	/**
	 * Native: SYSTEM::SET_THREAD_PRIORITY
	 *
	 * Hash: 0x42B65DEEF2EDF2A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42B65DEEF2EDF2A1)
	 */
	setThreadPriority(priority: integer): void;

	/**
	 * Native: SYSTEM::SETTIMERA
	 *
	 * Hash: 0xC1B1E9A034A63A62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1B1E9A034A63A62)
	 */
	settimera(value: integer): void;

	/**
	 * Native: SYSTEM::SETTIMERB
	 *
	 * Hash: 0x5AE11BC36633DE4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AE11BC36633DE4E)
	 */
	settimerb(value: integer): void;

	/**
	 * Native: SYSTEM::SHIFT_LEFT
	 *
	 * Hash: 0xEDD95A39E5544DE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDD95A39E5544DE8)
	 */
	shiftLeft(value: integer, bitShift: integer): integer;

	/**
	 * Native: SYSTEM::SHIFT_RIGHT
	 *
	 * Hash: 0x97EF1E5BCE9DC075 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97EF1E5BCE9DC075)
	 */
	shiftRight(value: integer, bitShift: integer): integer;

	/**
	 * Native: SYSTEM::SIN
	 *
	 * Hash: 0x0BADBFA3B172435F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BADBFA3B172435F)
	 */
	sin(value: number): number;

	/**
	 * Native: SYSTEM::SQRT
	 *
	 * Hash: 0x71D93B57D07F9804 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71D93B57D07F9804)
	 */
	sqrt(value: number): number;

	/**
	 * Native: SYSTEM::START_NEW_SCRIPT
	 *
	 * Hash: 0xE81651AD79516E48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE81651AD79516E48)
	 */
	startNewScript(scriptName: string, stackSize: integer): integer;

	/**
	 * Native: SYSTEM::START_NEW_SCRIPT_WITH_ARGS
	 *
	 * Hash: 0xB8BA7F44DF1575E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8BA7F44DF1575E1)
	 */
	startNewScriptWithArgs(scriptName: string, argCount: integer, stackSize: integer): StartNewScriptWithArgsResult;

	/**
	 * Native: SYSTEM::START_NEW_SCRIPT_WITH_NAME_HASH
	 *
	 * Hash: 0xEB1C67C3A5333A92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB1C67C3A5333A92)
	 */
	startNewScriptWithNameHash(scriptHash: integer, stackSize: integer): integer;

	/**
	 * Native: SYSTEM::START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS
	 *
	 * Hash: 0xC4BB298BD441BE78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4BB298BD441BE78)
	 */
	startNewScriptWithNameHashAndArgs(
		scriptHash: integer,
		argCount: integer,
		stackSize: integer
	): StartNewScriptWithNameHashAndArgsResult;

	/**
	 * Native: SYSTEM::TIMERA
	 *
	 * Hash: 0x83666F9FB8FEBD4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83666F9FB8FEBD4B)
	 */
	timera(): integer;

	/**
	 * Native: SYSTEM::TIMERB
	 *
	 * Hash: 0xC9D9444186B5A374 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9D9444186B5A374)
	 */
	timerb(): integer;

	/**
	 * Native: SYSTEM::TIMESTEP
	 *
	 * Hash: 0x0000000050597EE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0000000050597EE2)
	 */
	timestep(): number;

	/**
	 * Native: SYSTEM::TO_FLOAT
	 *
	 * Hash: 0xBBDA792448DB5A89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBDA792448DB5A89)
	 */
	toFloat(value: integer): number;

	/**
	 * Native: SYSTEM::VDIST
	 *
	 * Hash: 0x2A488C176D52CCA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A488C176D52CCA5)
	 */
	vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

	/**
	 * Native: SYSTEM::VDIST2
	 *
	 * Hash: 0xB7A628320EFF8E47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7A628320EFF8E47)
	 */
	vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

	/**
	 * Native: SYSTEM::VMAG
	 *
	 * Hash: 0x652D2EEEF1D3E62C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x652D2EEEF1D3E62C)
	 */
	vmag(x: number, y: number, z: number): number;

	/**
	 * Native: SYSTEM::VMAG2
	 *
	 * Hash: 0xA8CEACB4F35AE058 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8CEACB4F35AE058)
	 */
	vmag2(x: number, y: number, z: number): number;

	/**
	 * Native: SYSTEM::WAIT
	 *
	 * Hash: 0x4EDE34FBADD967A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EDE34FBADD967A6)
	 */
	wait(ms: integer): void;

	unk: GameSystemUnk;
}

interface GameSystemMp extends GameSystem {}
