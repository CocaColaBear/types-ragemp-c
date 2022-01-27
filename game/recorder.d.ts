/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameRecorderLegacy {
	/**
	 * Native: RECORDING::_STOP_RECORDING_AND_SAVE_CLIP
	 *
	 * Hash: 0x071A5197D6AFC8B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x071A5197D6AFC8B3)
	 */
	stop(): void;
}

interface GameRecorder extends GameRecorderLegacy {
	/**
	 * Native: RECORDING::_IS_RECORDING
	 *
	 * Hash: 0x1897CA71995A90B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1897CA71995A90B4)
	 */
	isRecording(): boolean;

	/**
	 * Native: RECORDING::_START_RECORDING
	 *
	 * Hash: 0xC3AC2FFF9612AC81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3AC2FFF9612AC81)
	 */
	start(mode: integer): void;
}

interface GameRecorderMp extends GameRecorder {}
