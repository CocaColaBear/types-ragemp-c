/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface _0xAA19F5572C38B564Result {
	p0: integer;
	result: integer;
}

interface _0xC64A06D939F826F5Result {
	p0: number;
	p1: number;
	p2: integer;
	result: boolean;
}

interface InterruptConversationResult {
	p1: integer;
	p2: integer;
}

interface GameAudioLegacy {
	/**
	 * Native: AUDIO::IS_MISSION_NEWS_STORY_UNLOCKED
	 *
	 * Hash: 0x66E49BF55B4B1874 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66E49BF55B4B1874)
	 */
	getNumberOfPassengerVoiceVariations(newsStory: integer): boolean;

	/**
	 * Native: AUDIO::_SET_VARIABLE_ON_CUTSCENE_AUDIO
	 *
	 * Hash: 0xBCC29F935ED07688 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCC29F935ED07688)
	 */
	getPlayerHeadsetSoundAlternate(variableName: string, value: number): void;

	/**
	 * Native: AUDIO::HINT_AMBIENT_AUDIO_BANK
	 * 
	 * p2 defaults to 0
	 *
	 * Hash: 0x8F8C0E370AE62F5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F8C0E370AE62F5C)
	 */
	hintAmbientAudioBank(p0: integer, p1: integer, p2?: integer): integer;

	/**
	 * Native: AUDIO::HINT_SCRIPT_AUDIO_BANK
	 * 
	 * p2 defaults to 0
	 *
	 * Hash: 0xFB380A29641EC31A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB380A29641EC31A)
	 */
	hintScriptAudioBank(p0: integer, p1: integer, p2?: integer): integer;

	/**
	 * Native: AUDIO::IS_AUDIO_SCENE_ACTIVE
	 *
	 * Hash: 0xB65B60556E2A9225 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB65B60556E2A9225)
	 */
	isAudioSceneActive(scene: string): boolean;

	/**
	 * Native: AUDIO::PLAY_AMBIENT_SPEECH_FROM_POSITION_NATIVE
	 *
	 * Hash: 0xED640017ED337E45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED640017ED337E45)
	 */
	playAmbientSpeechAtCoords(
		speechName: string,
		voiceName: string,
		x: number,
		y: number,
		z: number,
		speechParam: string
	): void;

	/**
	 * Native: AUDIO::PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE
	 *
	 * Hash: 0x3523634255FC3318 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3523634255FC3318)
	 */
	playAmbientSpeechWithVoice(
		ped: Handle,
		speechName: string,
		voiceName: string,
		speechParam: string,
		p4: boolean
	): void;

	/**
	 * Native: AUDIO::PLAY_MISSION_COMPLETE_AUDIO
	 *
	 * Hash: 0xB138AAB8A70D3C69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB138AAB8A70D3C69)
	 */
	playMissionCompleteAudio(audioName: string): void;

	/**
	 * Native: AUDIO::PLAY_SYNCHRONIZED_AUDIO_EVENT
	 *
	 * Hash: 0x8B2FD4560E55DD2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B2FD4560E55DD2D)
	 */
	playSynchronizedAudioEvent(p0: integer): boolean;

	/**
	 * Native: AUDIO::PREPARE_SYNCHRONIZED_AUDIO_EVENT
	 *
	 * Hash: 0xC7ABCACA4985A766 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7ABCACA4985A766)
	 */
	prepareSynchronizedAudioEvent(p0: string, p1: integer): integer;

	/**
	 * Native: AUDIO::PREPARE_SYNCHRONIZED_AUDIO_EVENT_FOR_SCENE
	 *
	 * Hash: 0x029FE7CD1B7E2E75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x029FE7CD1B7E2E75)
	 */
	prepareSynchronizedAudioEventForScene(p0: integer): integer;

	/**
	 * Native: AUDIO::REGISTER_SCRIPT_WITH_AUDIO
	 *
	 * Hash: 0xC6ED9D5092438D91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6ED9D5092438D91)
	 */
	registerScriptWithAudio(p0: integer): void;

	/**
	 * Native: AUDIO::RELEASE_NAMED_SCRIPT_AUDIO_BANK
	 *
	 * Hash: 0x77ED170667F50170 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77ED170667F50170)
	 */
	releaseNamedScriptAudioBank(audioBank: string): void;

	/**
	 * Native: AUDIO::REQUEST_AMBIENT_AUDIO_BANK
	 * 
	 * p2 defaults to 0.
	 *
	 * Hash: 0xFE02FFBED8CA9D99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE02FFBED8CA9D99)
	 */
	requestAmbientAudioBank(p0: string, p1: boolean, p2?: integer): boolean;

	/**
	 * Native: AUDIO::REQUEST_MISSION_AUDIO_BANK
	 *
	 * Hash: 0x7345BDD95E62E0F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7345BDD95E62E0F2)
	 */
	requestMissionAudioBank(p0: string, p1: boolean, p2: integer): boolean;

	/**
	 * Native: AUDIO::REQUEST_SCRIPT_AUDIO_BANK
	 * 
	 * p2 defaults to 0
	 *
	 * Hash: 0x2F844A8B08D76685 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F844A8B08D76685)
	 */
	requestScriptAudioBank(p0: string, p1: boolean, p2?: integer): boolean;

	/**
	 * Native: AUDIO::RESET_PED_AUDIO_FLAGS
	 *
	 * Hash: 0xF54BB7B61036F335 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF54BB7B61036F335)
	 */
	resetPedAudioFlags(ped: Handle): void;

	/**
	 * Native: AUDIO::SET_AUDIO_FLAG
	 *
	 * Hash: 0xB9EFD5C25018725A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9EFD5C25018725A)
	 */
	setAudioFlag(flagName: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_AUDIO_SCENE_VARIABLE
	 *
	 * Hash: 0xEF21A9EF089A2668 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF21A9EF089A2668)
	 */
	setAudioSceneVariable(scene: string, variable: string, value: number): void;

	/**
	 * Native: AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE
	 *
	 * Hash: 0x3B4BF5F0859204D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B4BF5F0859204D9)
	 */
	setCutsceneAudioOverride(name: string): void;

	/**
	 * Native: AUDIO::_SET_SYNCHRONIZED_AUDIO_EVENT_POSITION_THIS_FRAME
	 *
	 * Hash: 0x950A154B8DAB6185 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x950A154B8DAB6185)
	 */
	setSynchronizedAudioEventPositionThisFrame(p0: string, p1: Handle): void;

	/**
	 * Native: AUDIO::PLAY_STREAM_FROM_POSITION
	 *
	 * Hash: 0x21442F412E8DE56B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21442F412E8DE56B)
	 */
	specialFrontendEqual(x: number, y: number, z: number): void;

	/**
	 * Native: AUDIO::START_AUDIO_SCENE
	 *
	 * Hash: 0x013A80FC08F6E4F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x013A80FC08F6E4F2)
	 */
	startAudioScene(scene: string): boolean;

	/**
	 * Native: AUDIO::STOP_AUDIO_SCENE
	 *
	 * Hash: 0xDFE8422B3B94E688 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFE8422B3B94E688)
	 */
	stopAudioScene(scene: string): void;

	/**
	 * Native: AUDIO::STOP_SYNCHRONIZED_AUDIO_EVENT
	 *
	 * Hash: 0x92D6A88E64A94430 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92D6A88E64A94430)
	 */
	stopSynchronizedAudioEvent(p0: integer): boolean;
}

interface GameAudioUnk {
	/**
	 * Native: AUDIO::_0x02E93C796ABD3A97
	 *
	 * Hash: 0x02E93C796ABD3A97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02E93C796ABD3A97)
	 */
	_0x02E93C796ABD3A97(p0: boolean): void;

	/**
	 * Native: AUDIO::_0x0B568201DD99F0EB
	 *
	 * Hash: 0x0B568201DD99F0EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B568201DD99F0EB)
	 */
	_0x0B568201DD99F0EB(p0: boolean): void;

	/**
	 * Native: AUDIO::_0x11579D940949C49E
	 *
	 * Hash: 0x11579D940949C49E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11579D940949C49E)
	 */
	_0x11579D940949C49E(p0: integer): void;

	/**
	 * Native: AUDIO::_0x149AEE66F0CB3A99
	 *
	 * Hash: 0x149AEE66F0CB3A99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x149AEE66F0CB3A99)
	 */
	_0x149AEE66F0CB3A99(p0: number, p1: number): void;

	/**
	 * Native: AUDIO::_0x159B7318403A1CD8
	 *
	 * Hash: 0x159B7318403A1CD8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x159B7318403A1CD8)
	 */
	_0x159B7318403A1CD8(p0: integer): void;

	/**
	 * Native: AUDIO::_0x19AF7ED9B9D23058
	 *
	 * Hash: 0x19AF7ED9B9D23058 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19AF7ED9B9D23058)
	 */
	_0x19AF7ED9B9D23058(): void;

	/**
	 * Native: AUDIO::_0x1B7ABE26CBCBF8C7
	 *
	 * Hash: 0x1B7ABE26CBCBF8C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B7ABE26CBCBF8C7)
	 */
	_0x1B7ABE26CBCBF8C7(ped: Handle, p1: integer, p2: integer): void;

	/**
	 * Native: AUDIO::_0x2ACABED337622DF2
	 *
	 * Hash: 0x2ACABED337622DF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2ACABED337622DF2)
	 */
	_0x2ACABED337622DF2(p0: string): void;

	/**
	 * Native: AUDIO::_0x30CA2EF91D15ADF8
	 *
	 * Hash: 0x30CA2EF91D15ADF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30CA2EF91D15ADF8)
	 */
	_0x30CA2EF91D15ADF8(): integer;

	/**
	 * Native: AUDIO::_0x33E3C6C6F2F0B506
	 *
	 * Hash: 0x33E3C6C6F2F0B506 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33E3C6C6F2F0B506)
	 */
	_0x33E3C6C6F2F0B506(p0: integer, p1: number, p2: number, p3: number): void;

	/**
	 * Native: AUDIO::_0x34D66BC058019CE0
	 *
	 * Hash: 0x34D66BC058019CE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34D66BC058019CE0)
	 */
	_0x34D66BC058019CE0(radioStationName: string): integer;

	/**
	 * Native: AUDIO::_0x40763EA7B9B783E7
	 *
	 * Hash: 0x40763EA7B9B783E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40763EA7B9B783E7)
	 */
	_0x40763EA7B9B783E7(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: AUDIO::_0x43FA0DFC5DF87815
	 *
	 * Hash: 0x43FA0DFC5DF87815 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43FA0DFC5DF87815)
	 */
	_0x43FA0DFC5DF87815(vehicle: Handle, p1: boolean): void;

	/**
	 * Native: AUDIO::_0x55ECF4D13D9903B0
	 *
	 * Hash: 0x55ECF4D13D9903B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55ECF4D13D9903B0)
	 */
	_0x55ECF4D13D9903B0(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: AUDIO::_0x58BB377BEC7CD5F4
	 *
	 * Hash: 0x58BB377BEC7CD5F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58BB377BEC7CD5F4)
	 */
	_0x58BB377BEC7CD5F4(p0: boolean, p1: boolean): void;

	/**
	 * Native: AUDIO::_0x5B9853296731E88D
	 *
	 * Hash: 0x5B9853296731E88D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B9853296731E88D)
	 */
	_0x5B9853296731E88D(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: AUDIO::_0x5D2BFAAB8D956E0E
	 *
	 * Hash: 0x5D2BFAAB8D956E0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D2BFAAB8D956E0E)
	 */
	_0x5D2BFAAB8D956E0E(): void;

	/**
	 * Native: AUDIO::_0x61631F5DF50D1C34
	 *
	 * Hash: 0x61631F5DF50D1C34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61631F5DF50D1C34)
	 */
	_0x61631F5DF50D1C34(p0: boolean): void;

	/**
	 * Native: AUDIO::_0x6FDDAD856E36988A
	 *
	 * Hash: 0x6FDDAD856E36988A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FDDAD856E36988A)
	 */
	_0x6FDDAD856E36988A(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::_0x70B8EC8FC108A634
	 *
	 * Hash: 0x70B8EC8FC108A634 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70B8EC8FC108A634)
	 */
	_0x70B8EC8FC108A634(p0: boolean, p1: integer): void;

	/**
	 * Native: AUDIO::_0x7EC3C679D0E7E46B
	 *
	 * Hash: 0x7EC3C679D0E7E46B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EC3C679D0E7E46B)
	 */
	_0x7EC3C679D0E7E46B(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: AUDIO::_0x892B6AB8F33606F5
	 *
	 * Hash: 0x892B6AB8F33606F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x892B6AB8F33606F5)
	 */
	_0x892B6AB8F33606F5(p0: integer, entity: Handle): void;

	/**
	 * Native: AUDIO::_0x8BF907833BE275DE
	 *
	 * Hash: 0x8BF907833BE275DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BF907833BE275DE)
	 */
	_0x8BF907833BE275DE(p0: number, p1: number): void;

	/**
	 * Native: AUDIO::_0x97FFB4ADEED08066
	 *
	 * Hash: 0x97FFB4ADEED08066 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97FFB4ADEED08066)
	 */
	_0x97FFB4ADEED08066(p0: integer, p1: integer): void;

	/**
	 * Native: AUDIO::_0x9AC92EED5E4793AB
	 *
	 * Hash: 0x9AC92EED5E4793AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AC92EED5E4793AB)
	 */
	_0x9AC92EED5E4793AB(): void;

	/**
	 * Native: AUDIO::_0x9BD7BD55E4533183
	 *
	 * Hash: 0x9BD7BD55E4533183 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BD7BD55E4533183)
	 */
	_0x9BD7BD55E4533183(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: AUDIO::_0xA8A7D434AFB4B97B
	 *
	 * Hash: 0xA8A7D434AFB4B97B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8A7D434AFB4B97B)
	 */
	_0xA8A7D434AFB4B97B(p0: string, p1: integer): void;

	/**
	 * Native: AUDIO::_0xAA19F5572C38B564
	 *
	 * Hash: 0xAA19F5572C38B564 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA19F5572C38B564)
	 */
	_0xAA19F5572C38B564(): _0xAA19F5572C38B564Result;

	/**
	 * Native: AUDIO::_0xAB6781A5F3101470
	 *
	 * Hash: 0xAB6781A5F3101470 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB6781A5F3101470)
	 */
	_0xAB6781A5F3101470(p0: integer, p1: integer): void;

	/**
	 * Native: AUDIO::_0xB542DE8C3D1CB210
	 *
	 * Hash: 0xB542DE8C3D1CB210 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB542DE8C3D1CB210)
	 */
	_0xB542DE8C3D1CB210(p0: boolean): void;

	/**
	 * Native: AUDIO::_0xB81CF134AEB56FFB
	 *
	 * Hash: 0xB81CF134AEB56FFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB81CF134AEB56FFB)
	 */
	_0xB81CF134AEB56FFB(): void;

	/**
	 * Native: AUDIO::_0xBEF34B1D9624D5DD
	 *
	 * Hash: 0xBEF34B1D9624D5DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBEF34B1D9624D5DD)
	 */
	_0xBEF34B1D9624D5DD(p0: boolean): void;

	/**
	 * Native: AUDIO::_0xBF4DC1784BE94DFA
	 *
	 * Hash: 0xBF4DC1784BE94DFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF4DC1784BE94DFA)
	 */
	_0xBF4DC1784BE94DFA(ped: Handle, p1: boolean, hash: integer): void;

	/**
	 * Native: AUDIO::_0xC1805D05E6D4FE10
	 *
	 * Hash: 0xC1805D05E6D4FE10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1805D05E6D4FE10)
	 */
	_0xC1805D05E6D4FE10(vehicle: Handle): void;

	/**
	 * Native: AUDIO::_0xC64A06D939F826F5
	 *
	 * Hash: 0xC64A06D939F826F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC64A06D939F826F5)
	 */
	_0xC64A06D939F826F5(): _0xC64A06D939F826F5Result;

	/**
	 * Native: AUDIO::_0xC8B1B2425604CDD0
	 *
	 * Hash: 0xC8B1B2425604CDD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8B1B2425604CDD0)
	 */
	_0xC8B1B2425604CDD0(): boolean;

	/**
	 * Native: AUDIO::_0xC8EDE9BDBCCBA6D4
	 *
	 * Hash: 0xC8EDE9BDBCCBA6D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8EDE9BDBCCBA6D4)
	 */
	_0xC8EDE9BDBCCBA6D4(p1: number, p2: number, p3: number): integer;

	/**
	 * Native: AUDIO::_0xDA07819E452FFE8F
	 *
	 * Hash: 0xDA07819E452FFE8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA07819E452FFE8F)
	 */
	_0xDA07819E452FFE8F(p0: integer): void;

	/**
	 * Native: AUDIO::_0xDD6BCF9E94425DF9
	 *
	 * Hash: 0xDD6BCF9E94425DF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD6BCF9E94425DF9)
	 */
	_0xDD6BCF9E94425DF9(): void;

	/**
	 * Native: AUDIO::_0xE4E6DD5566D28C82
	 *
	 * Hash: 0xE4E6DD5566D28C82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4E6DD5566D28C82)
	 */
	_0xE4E6DD5566D28C82(): void;

	/**
	 * Native: AUDIO::_0xF3365489E0DD50F9
	 *
	 * Hash: 0xF3365489E0DD50F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3365489E0DD50F9)
	 */
	_0xF3365489E0DD50F9(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::_0xF8AD2EED7C47E8FE
	 *
	 * Hash: 0xF8AD2EED7C47E8FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8AD2EED7C47E8FE)
	 */
	_0xF8AD2EED7C47E8FE(ped: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: AUDIO::_0xFF266D1D0EB1195D
	 *
	 * Hash: 0xFF266D1D0EB1195D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF266D1D0EB1195D)
	 */
	_0xFF266D1D0EB1195D(): void;
}

interface GameAudio extends GameAudioLegacy {
	/**
	 * Native: AUDIO::ACTIVATE_AUDIO_SLOWMO_MODE
	 *
	 * Hash: 0xD01005D2BA2EB778 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD01005D2BA2EB778)
	 */
	activateSlowmoMode(p0: string): void;

	/**
	 * Native: AUDIO::ADD_ENTITY_TO_AUDIO_MIX_GROUP
	 *
	 * Hash: 0x153973AB99FE8980 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x153973AB99FE8980)
	 */
	addEntityToMixGroup(entity: Handle, groupName: string, p2: number): void;

	/**
	 * Native: AUDIO::ADD_LINE_TO_CONVERSATION
	 *
	 * Hash: 0xC5EF963405593646 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5EF963405593646)
	 */
	addLineToConversation(
		index: integer,
		p1: string,
		p2: string,
		p3: integer,
		p4: integer,
		p5: boolean,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: integer,
		p10: boolean,
		p11: boolean,
		p12: boolean
	): void;

	/**
	 * Native: AUDIO::ADD_PED_TO_CONVERSATION
	 *
	 * Hash: 0x95D9F4BC443956E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95D9F4BC443956E7)
	 */
	addPedToConversation(index: integer, ped: Handle, p2: string): void;

	/**
	 * Native: AUDIO::BLIP_SIREN
	 *
	 * Hash: 0x1B9025BDA76822B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B9025BDA76822B6)
	 */
	blipSiren(vehicle: Handle): void;

	/**
	 * Native: AUDIO::BLOCK_DEATH_JINGLE
	 *
	 * Hash: 0xF154B8D1775B2DEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF154B8D1775B2DEC)
	 */
	blockDeathJingle(toggle: boolean): void;

	/**
	 * Native: AUDIO::_CANCEL_CURRENT_POLICE_REPORT
	 *
	 * Hash: 0xB4F90FAF7670B16F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4F90FAF7670B16F)
	 */
	cancelCurrentPoliceReport(): void;

	/**
	 * Native: AUDIO::CANCEL_MUSIC_EVENT
	 *
	 * Hash: 0x5B17A90291133DA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B17A90291133DA5)
	 */
	cancelMusicEvent(eventName: string): boolean;

	/**
	 * Native: AUDIO::_CAN_PED_SPEAK
	 *
	 * Hash: 0x49B99BF3FDA89A7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49B99BF3FDA89A7A)
	 */
	canPedSpeak(ped: Handle, speechName: string, unk: boolean): boolean;

	/**
	 * Native: AUDIO::CLEAR_ALL_BROKEN_GLASS
	 *
	 * Hash: 0xB32209EFFDC04913 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB32209EFFDC04913)
	 */
	clearAllBrokenGlass(): void;

	/**
	 * Native: AUDIO::CLEAR_AMBIENT_ZONE_LIST_STATE
	 *
	 * Hash: 0x120C48C614909FA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x120C48C614909FA4)
	 */
	clearAmbientZoneListState(p1: boolean): integer;

	/**
	 * Native: AUDIO::CLEAR_AMBIENT_ZONE_STATE
	 *
	 * Hash: 0x218DD44AAAC964FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x218DD44AAAC964FF)
	 */
	clearAmbientZoneState(zoneName: string, p1: boolean): void;

	/**
	 * Native: AUDIO::CLEAR_CUSTOM_RADIO_TRACK_LIST
	 *
	 * Hash: 0x1654F24A88A8E3FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1654F24A88A8E3FE)
	 */
	clearCustomRadioTrackList(radioStation: string): void;

	/**
	 * Native: AUDIO::CREATE_NEW_SCRIPTED_CONVERSATION
	 *
	 * Hash: 0xD2C91A0B572AAE56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2C91A0B572AAE56)
	 */
	createNewScriptedConversation(): void;

	/**
	 * Native: AUDIO::DEACTIVATE_AUDIO_SLOWMO_MODE
	 *
	 * Hash: 0xDDC635D5B3262C56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDC635D5B3262C56)
	 */
	deactivateSlowmoMode(p0: string): void;

	/**
	 * Native: AUDIO::DISABLE_PED_PAIN_AUDIO
	 *
	 * Hash: 0xA9A41C1E940FB0E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9A41C1E940FB0E8)
	 */
	disablePedPain(ped: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::DISTANT_COP_CAR_SIRENS
	 *
	 * Hash: 0x552369F549563AD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x552369F549563AD5)
	 */
	distantCopCarSirens(value: boolean): void;

	/**
	 * Native: AUDIO::DOES_PLAYER_VEH_HAVE_RADIO
	 *
	 * Hash: 0x109697E2FFBAC8A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x109697E2FFBAC8A1)
	 */
	doesPlayerVehHaveRadio(): boolean;

	/**
	 * Native: AUDIO::ENABLE_STALL_WARNING_SOUNDS
	 *
	 * Hash: 0xC15907D667F7CFB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC15907D667F7CFB2)
	 */
	enableStallWarningSounds(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::ENABLE_VEHICLE_EXHAUST_POPS
	 *
	 * Hash: 0x2BE4BC731D039D5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BE4BC731D039D5A)
	 */
	enableVehicleExhaustPops(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::ENABLE_VEHICLE_FANBELT_DAMAGE
	 *
	 * Hash: 0x1C073274E065C6D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C073274E065C6D2)
	 */
	enableVehicleFanbeltDamage(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::FIND_RADIO_STATION_INDEX
	 *
	 * Hash: 0x8D67489793FF428B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D67489793FF428B)
	 */
	findRadioStationIndex(stationNameHash: integer): integer;

	/**
	 * Native: AUDIO::FORCE_PED_PANIC_WALLA
	 *
	 * Hash: 0x062D5EAD4DA2FA6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x062D5EAD4DA2FA6A)
	 */
	forcePedPanicWalla(): void;

	/**
	 * Native: AUDIO::_FORCE_RADIO_TRACK_LIST_POSITION
	 *
	 * Hash: 0x4E0AF9114608257C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E0AF9114608257C)
	 */
	forceRadioTrackListPosition(radioStation: string, trackListName: string, milliseconds: integer): void;

	/**
	 * Native: AUDIO::_FORCE_VEHICLE_ENGINE_AUDIO
	 *
	 * Hash: 0x4F0C413926060B38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F0C413926060B38)
	 */
	forceVehicleEngine(vehicle: Handle, audioName: string): void;

	/**
	 * Native: AUDIO::FREEZE_MICROPHONE
	 *
	 * Hash: 0xD57AAAE0E2214D11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD57AAAE0E2214D11)
	 */
	freezeMicrophone(): void;

	/**
	 * Native: AUDIO::FREEZE_RADIO_STATION
	 *
	 * Hash: 0x344F393B027E38C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x344F393B027E38C3)
	 */
	freezeRadioStation(radioStation: string): void;

	/**
	 * Native: AUDIO::_GET_AMBIENT_VOICE_NAME_HASH
	 *
	 * Hash: 0x5E203DA2BA15D436 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E203DA2BA15D436)
	 */
	getAmbientVoiceNameHash(ped: Handle): integer;

	/**
	 * Native: AUDIO::GET_AUDIBLE_MUSIC_TRACK_TEXT_ID
	 *
	 * Hash: 0x50B196FC9ED6545B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50B196FC9ED6545B)
	 */
	getAudibleMusicTrackTextId(): integer;

	/**
	 * Native: AUDIO::_GET_CURRENT_RADIO_STATION_HASH
	 *
	 * Hash: 0x3E65CDE5215832C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E65CDE5215832C1)
	 */
	getCurrentRadioStationHash(radioStationName: string): integer;

	/**
	 * Native: AUDIO::GET_CURRENT_SCRIPTED_CONVERSATION_LINE
	 *
	 * Hash: 0x480357EE890C295A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x480357EE890C295A)
	 */
	getCurrentScriptedConversationLine(): integer;

	/**
	 * Native: AUDIO::GET_IS_PRELOADED_CONVERSATION_READY
	 *
	 * Hash: 0xE73364DB90778FFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE73364DB90778FFA)
	 */
	getIsPreloadedConversationReady(): boolean;

	/**
	 * Native: AUDIO::GET_MUSIC_PLAYTIME
	 *
	 * Hash: 0xE7A0D23DC414507B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7A0D23DC414507B)
	 */
	getMusicPlaytime(): integer;

	/**
	 * Native: AUDIO::GET_MUSIC_VOL_SLIDER
	 *
	 * Hash: 0x3A48AB4445D499BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A48AB4445D499BE)
	 */
	getMusicVolSlider(): integer;

	/**
	 * Native: AUDIO::GET_NETWORK_ID_FROM_SOUND_ID
	 *
	 * Hash: 0x2DE3F0A134FFBC0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DE3F0A134FFBC0D)
	 */
	getNetworkIdFromSoundId(soundId: integer): integer;

	/**
	 * Native: AUDIO::GET_NUM_UNLOCKED_RADIO_STATIONS
	 *
	 * Hash: 0xF1620ECB50E01DE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1620ECB50E01DE7)
	 */
	getNumUnlockedRadioStations(): integer;

	/**
	 * Native: AUDIO::GET_PLAYER_RADIO_STATION_GENRE
	 *
	 * Hash: 0xA571991A7FE6CCEB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA571991A7FE6CCEB)
	 */
	getPlayerRadioStationGenre(): integer;

	/**
	 * Native: AUDIO::GET_PLAYER_RADIO_STATION_INDEX
	 *
	 * Hash: 0xE8AF77C4C06ADC93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8AF77C4C06ADC93)
	 */
	getPlayerRadioStationIndex(): integer;

	/**
	 * Native: AUDIO::GET_PLAYER_RADIO_STATION_NAME
	 *
	 * Hash: 0xF6D733C32076AD03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6D733C32076AD03)
	 */
	getPlayerRadioStationName(): string;

	/**
	 * Native: AUDIO::GET_RADIO_STATION_NAME
	 *
	 * Hash: 0xB28ECA15046CA8B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB28ECA15046CA8B9)
	 */
	getRadioStationName(radioStation: integer): string;

	/**
	 * Native: AUDIO::GET_SOUND_ID
	 *
	 * Hash: 0x430386FE9BF80B45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x430386FE9BF80B45)
	 */
	getSoundId(): integer;

	/**
	 * Native: AUDIO::GET_SOUND_ID_FROM_NETWORK_ID
	 *
	 * Hash: 0x75262FD12D0A1C84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75262FD12D0A1C84)
	 */
	getSoundIdFromNetworkId(netId: integer): integer;

	/**
	 * Native: AUDIO::GET_STREAM_PLAY_TIME
	 *
	 * Hash: 0x4E72BBDBCA58A3DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E72BBDBCA58A3DB)
	 */
	getStreamPlayTime(): integer;

	/**
	 * Native: AUDIO::GET_VEHICLE_DEFAULT_HORN
	 *
	 * Hash: 0x02165D55000219AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02165D55000219AC)
	 */
	getVehicleDefaultHorn(vehicle: Handle): integer;

	/**
	 * Native: AUDIO::GET_VEHICLE_DEFAULT_HORN_IGNORE_MODS
	 *
	 * Hash: 0xACB5DCCA1EC76840 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACB5DCCA1EC76840)
	 */
	getVehicleDefaultHornIgnoreMods(vehicle: Handle): integer;

	/**
	 * Native: AUDIO::_GET_VEHICLE_DEFAULT_HORN_VARIATION
	 *
	 * Hash: 0xD53F3A29BCE2580E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD53F3A29BCE2580E)
	 */
	getVehicleDefaultHornVariation(vehicle: Handle): integer;

	/**
	 * Native: AUDIO::_HAS_MULTIPLAYER_AUDIO_DATA_LOADED
	 *
	 * Hash: 0x544810ED9DB6BBE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x544810ED9DB6BBE6)
	 */
	hasMultiplayerDataLoaded(): boolean;

	/**
	 * Native: AUDIO::_HAS_MULTIPLAYER_AUDIO_DATA_UNLOADED
	 *
	 * Hash: 0x5B50ABB1FE3746F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B50ABB1FE3746F4)
	 */
	hasMultiplayerDataUnloaded(): boolean;

	/**
	 * Native: AUDIO::HAS_SOUND_FINISHED
	 *
	 * Hash: 0xFCBDCE714A7C88E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCBDCE714A7C88E5)
	 */
	hasSoundFinished(soundId: integer): boolean;

	/**
	 * Native: AUDIO::HINT_AMBIENT_AUDIO_BANK
	 *
	 * Hash: 0x8F8C0E370AE62F5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F8C0E370AE62F5C)
	 */
	hintAmbientBank(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: AUDIO::HINT_SCRIPT_AUDIO_BANK
	 *
	 * Hash: 0xFB380A29641EC31A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB380A29641EC31A)
	 */
	hintScriptBank(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: AUDIO::INTERRUPT_CONVERSATION
	 *
	 * Hash: 0xA018A12E5C5C2FA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA018A12E5C5C2FA6)
	 */
	interruptConversation(p0: integer): InterruptConversationResult;

	/**
	 * Native: AUDIO::INTERRUPT_CONVERSATION_AND_PAUSE
	 *
	 * Hash: 0x8A694D7A68F8DC38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A694D7A68F8DC38)
	 */
	interruptConversationAndPause(ped: Handle, p1: string, p2: string): void;

	/**
	 * Native: AUDIO::IS_ALARM_PLAYING
	 *
	 * Hash: 0x226435CB96CCFC8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x226435CB96CCFC8C)
	 */
	isAlarmPlaying(alarmName: string): boolean;

	/**
	 * Native: AUDIO::IS_AMBIENT_SPEECH_DISABLED
	 *
	 * Hash: 0x932C2D096A2C3FFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x932C2D096A2C3FFF)
	 */
	isAmbientSpeechDisabled(ped: Handle): boolean;

	/**
	 * Native: AUDIO::IS_AMBIENT_SPEECH_PLAYING
	 *
	 * Hash: 0x9072C8B49907BFAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9072C8B49907BFAD)
	 */
	isAmbientSpeechPlaying(ped: Handle): boolean;

	/**
	 * Native: AUDIO::IS_AMBIENT_ZONE_ENABLED
	 *
	 * Hash: 0x01E2817A479A7F9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01E2817A479A7F9B)
	 */
	isAmbientZoneEnabled(ambientZone: string): boolean;

	/**
	 * Native: AUDIO::IS_ANIMAL_VOCALIZATION_PLAYING
	 *
	 * Hash: 0xC265DF9FB44A9FBD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC265DF9FB44A9FBD)
	 */
	isAnimalVocalizationPlaying(pedHandle: Handle): boolean;

	/**
	 * Native: AUDIO::IS_ANY_SPEECH_PLAYING
	 *
	 * Hash: 0x729072355FA39EC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x729072355FA39EC9)
	 */
	isAnySpeechPlaying(ped: Handle): boolean;

	/**
	 * Native: AUDIO::IS_GAME_IN_CONTROL_OF_MUSIC
	 *
	 * Hash: 0x6D28DC1671E334FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D28DC1671E334FD)
	 */
	isGameInControlOfMusic(): boolean;

	/**
	 * Native: AUDIO::IS_HORN_ACTIVE
	 *
	 * Hash: 0x9D6BFC12B05C6121 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D6BFC12B05C6121)
	 */
	isHornActive(vehicle: Handle): boolean;

	/**
	 * Native: AUDIO::IS_MISSION_COMPLETE_PLAYING
	 *
	 * Hash: 0x19A30C23F5827F8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19A30C23F5827F8A)
	 */
	isMissionCompletePlaying(): boolean;

	/**
	 * Native: AUDIO::IS_MISSION_COMPLETE_READY_FOR_UI
	 *
	 * Hash: 0x6F259F82D873B8B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F259F82D873B8B8)
	 */
	isMissionCompleteReadyForUi(): boolean;

	/**
	 * Native: AUDIO::IS_MISSION_NEWS_STORY_UNLOCKED
	 *
	 * Hash: 0x66E49BF55B4B1874 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66E49BF55B4B1874)
	 */
	isMissionNewsStoryUnlocked(newsStory: integer): boolean;

	/**
	 * Native: AUDIO::IS_MOBILE_PHONE_CALL_ONGOING
	 *
	 * Hash: 0x7497D2CE2C30D24C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7497D2CE2C30D24C)
	 */
	isMobilePhoneCallOngoing(): boolean;

	/**
	 * Native: AUDIO::IS_MOBILE_PHONE_RADIO_ACTIVE
	 *
	 * Hash: 0xB35CE999E8EF317E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB35CE999E8EF317E)
	 */
	isMobilePhoneRadioActive(): boolean;

	/**
	 * Native: AUDIO::IS_MUSIC_ONESHOT_PLAYING
	 *
	 * Hash: 0xA097AB275061FB21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA097AB275061FB21)
	 */
	isMusicOneshotPlaying(): boolean;

	/**
	 * Native: AUDIO::IS_PED_IN_CURRENT_CONVERSATION
	 *
	 * Hash: 0x049E937F18F4020C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x049E937F18F4020C)
	 */
	isPedInCurrentConversation(ped: Handle): boolean;

	/**
	 * Native: AUDIO::IS_PED_RINGTONE_PLAYING
	 *
	 * Hash: 0x1E8E5E20937E3137 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E8E5E20937E3137)
	 */
	isPedRingtonePlaying(ped: Handle): boolean;

	/**
	 * Native: AUDIO::IS_PLAYER_VEH_RADIO_ENABLE
	 *
	 * Hash: 0x5F43D83FD6738741 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F43D83FD6738741)
	 */
	isPlayerVehRadioEnable(): boolean;

	/**
	 * Native: AUDIO::IS_RADIO_FADED_OUT
	 *
	 * Hash: 0x0626A247D2405330 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0626A247D2405330)
	 */
	isRadioFadedOut(): boolean;

	/**
	 * Native: AUDIO::IS_RADIO_RETUNING
	 *
	 * Hash: 0xA151A7394A214E65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA151A7394A214E65)
	 */
	isRadioRetuning(): boolean;

	/**
	 * Native: AUDIO::IS_AUDIO_SCENE_ACTIVE
	 *
	 * Hash: 0xB65B60556E2A9225 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB65B60556E2A9225)
	 */
	isSceneActive(scene: string): boolean;

	/**
	 * Native: AUDIO::IS_SCRIPTED_CONVERSATION_LOADED
	 *
	 * Hash: 0xDF0D54BE7A776737 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF0D54BE7A776737)
	 */
	isScriptedConversationLoaded(): boolean;

	/**
	 * Native: AUDIO::IS_SCRIPTED_CONVERSATION_ONGOING
	 *
	 * Hash: 0x16754C556D2EDE3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16754C556D2EDE3D)
	 */
	isScriptedConversationOngoing(): boolean;

	/**
	 * Native: AUDIO::AUDIO_IS_SCRIPTED_MUSIC_PLAYING
	 *
	 * Hash: 0x845FFC3A4FEEFA3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x845FFC3A4FEEFA3E)
	 */
	isScriptedMusicPlaying(): boolean;

	/**
	 * Native: AUDIO::_AUDIO_IS_SCRIPTED_MUSIC_PLAYING_2
	 *
	 * Hash: 0x2DD39BF3E2F9C47F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DD39BF3E2F9C47F)
	 */
	isScriptedMusicPlaying2(): integer;

	/**
	 * Native: AUDIO::IS_SCRIPTED_SPEECH_PLAYING
	 *
	 * Hash: 0xCC9AA18DCC7084F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC9AA18DCC7084F4)
	 */
	isScriptedSpeechPlaying(p0: integer): boolean;

	/**
	 * Native: AUDIO::IS_STREAM_PLAYING
	 *
	 * Hash: 0xD11FA52EB849D978 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD11FA52EB849D978)
	 */
	isStreamPlaying(): boolean;

	/**
	 * Native: AUDIO::IS_VEHICLE_AUDIBLY_DAMAGED
	 *
	 * Hash: 0x5DB8010EE71FDEF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DB8010EE71FDEF2)
	 */
	isVehicleAudiblyDamaged(vehicle: Handle): boolean;

	/**
	 * Native: AUDIO::_IS_VEHICLE_RADIO_ENABLED
	 *
	 * Hash: 0x0BE4BE946463F917 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BE4BE946463F917)
	 */
	isVehicleRadioEnabled(vehicle: Handle): boolean;

	/**
	 * Native: AUDIO::_IS_VEHICLE_RADIO_LOUD
	 *
	 * Hash: 0x032A116663A4D5AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x032A116663A4D5AC)
	 */
	isVehicleRadioLoud(vehicle: Handle): boolean;

	/**
	 * Native: AUDIO::_LINK_STATIC_EMITTER_TO_ENTITY
	 *
	 * Hash: 0x651D3228960D08AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x651D3228960D08AF)
	 */
	linkStaticEmitterToEntity(emitterName: string, entity: Handle): void;

	/**
	 * Native: AUDIO::LOAD_STREAM
	 *
	 * Hash: 0x1F1F957154EC51DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F1F957154EC51DF)
	 */
	loadStream(streamName: string, soundSet: string): boolean;

	/**
	 * Native: AUDIO::LOAD_STREAM_WITH_START_OFFSET
	 *
	 * Hash: 0x59C16B79F53B3712 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59C16B79F53B3712)
	 */
	loadStreamWithStartOffset(streamName: string, startOffset: integer, soundSet: string): boolean;

	/**
	 * Native: AUDIO::_LOCK_RADIO_STATION
	 *
	 * Hash: 0x477D9DB48F889591 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x477D9DB48F889591)
	 */
	lockRadioStation(radioStationName: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::_LOCK_RADIO_STATION_TRACK_LIST
	 *
	 * Hash: 0xFF5E5EA2DCEEACF3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF5E5EA2DCEEACF3)
	 */
	lockRadioStationTrackList(radioStation: string, trackListName: string): void;

	/**
	 * Native: AUDIO::_OVERRIDE_MICROPHONE_SETTINGS
	 *
	 * Hash: 0x75773E11BA459E90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75773E11BA459E90)
	 */
	overrideMicrophoneSettings(hash: integer, toggle: boolean): void;

	/**
	 * Native: AUDIO::OVERRIDE_PLAYER_GROUND_MATERIAL
	 *
	 * Hash: 0xD2CC78CD3D0B50F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2CC78CD3D0B50F9)
	 */
	overridePlayerGroundMaterial(hash: integer, toggle: boolean): void;

	/**
	 * Native: AUDIO::OVERRIDE_TREVOR_RAGE
	 *
	 * Hash: 0x13AD665062541A7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13AD665062541A7E)
	 */
	overrideTrevorRage(voiceEffect: string): void;

	/**
	 * Native: AUDIO::OVERRIDE_UNDERWATER_STREAM
	 *
	 * Hash: 0xF2A9CDABCEA04BD6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2A9CDABCEA04BD6)
	 */
	overrideUnderwaterStream(p1: boolean): integer;

	/**
	 * Native: AUDIO::OVERRIDE_VEH_HORN
	 *
	 * Hash: 0x3CDC1E622CCE0356 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3CDC1E622CCE0356)
	 */
	overrideVehHorn(vehicle: Handle, override: boolean, hornHash: integer): void;

	/**
	 * Native: AUDIO::PAUSE_SCRIPTED_CONVERSATION
	 *
	 * Hash: 0x8530AD776CD72B12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8530AD776CD72B12)
	 */
	pauseScriptedConversation(p0: boolean): void;

	/**
	 * Native: AUDIO::PLAY_AMBIENT_SPEECH_FROM_POSITION_NATIVE
	 *
	 * Hash: 0xED640017ED337E45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED640017ED337E45)
	 */
	playAmbientSpeechFromPositionNative(
		speechName: string,
		voiceName: string,
		x: number,
		y: number,
		z: number,
		speechParam: string
	): void;

	/**
	 * Native: AUDIO::PLAY_ANIMAL_VOCALIZATION
	 *
	 * Hash: 0xEE066C7006C49C0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE066C7006C49C0A)
	 */
	playAnimalVocalization(pedHandle: Handle, p1: integer, speechName: string): void;

	/**
	 * Native: AUDIO::PLAY_DEFERRED_SOUND_FRONTEND
	 *
	 * Hash: 0xCADA5A0D0702381E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCADA5A0D0702381E)
	 */
	playDeferredSoundFrontend(soundName: string, soundsetName: string): void;

	/**
	 * Native: AUDIO::PLAY_END_CREDITS_MUSIC
	 *
	 * Hash: 0xCD536C4D33DCC900 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD536C4D33DCC900)
	 */
	playEndCreditsMusic(play: boolean): void;

	/**
	 * Native: AUDIO::PLAY_MISSION_COMPLETE_AUDIO
	 *
	 * Hash: 0xB138AAB8A70D3C69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB138AAB8A70D3C69)
	 */
	playMissionComplete(audioName: string): void;

	/**
	 * Native: AUDIO::PLAY_PAIN
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0xBC9AE166038A5CEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC9AE166038A5CEC)
	 */
	playPain(ped: Handle, painID: integer, p1: integer, p3?: integer): void;

	/**
	 * Native: AUDIO::PLAY_PED_AMBIENT_SPEECH_AND_CLONE_NATIVE
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0xC6941B4A3A8FBBB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6941B4A3A8FBBB9)
	 */
	playPedAmbientSpeechAndCloneNative(ped: Handle, speechName: string, speechParam: string, p3?: integer): void;

	/**
	 * Native: AUDIO::PLAY_PED_AMBIENT_SPEECH_NATIVE
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0x8E04FEDD28D42462 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E04FEDD28D42462)
	 */
	playPedAmbientSpeechNative(ped: Handle, speechName: string, speechParam: string, p3?: integer): void;

	/**
	 * Native: AUDIO::PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE
	 *
	 * Hash: 0x3523634255FC3318 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3523634255FC3318)
	 */
	playPedAmbientSpeechWithVoiceNative(
		ped: Handle,
		speechName: string,
		voiceName: string,
		speechParam: string,
		p4: boolean
	): void;

	/**
	 * Native: AUDIO::PLAY_PED_RINGTONE
	 *
	 * Hash: 0xF9E56683CA8E11A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9E56683CA8E11A5)
	 */
	playPedRingtone(ringtoneName: string, ped: Handle, p2: boolean): void;

	/**
	 * Native: AUDIO::PLAY_POLICE_REPORT
	 *
	 * Hash: 0xDFEBD56D9BD1EB16 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFEBD56D9BD1EB16)
	 */
	playPoliceReport(name: string, p1: number): integer;

	/**
	 * Native: AUDIO::PLAY_SOUND
	 *
	 * Hash: 0x7FF4944CC209192D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FF4944CC209192D)
	 */
	playSound(soundId: integer, audioName: string, audioRef: string, p3: boolean, p4: integer, p5: boolean): void;

	/**
	 * Native: AUDIO::PLAY_SOUND_FROM_COORD
	 *
	 * Hash: 0x8D8686B622B88120 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D8686B622B88120)
	 */
	playSoundFromCoord(
		soundId: integer,
		audioName: string,
		x: number,
		y: number,
		z: number,
		audioRef: string,
		isNetwork: boolean,
		range: integer,
		p8: boolean
	): void;

	/**
	 * Native: AUDIO::PLAY_SOUND_FROM_ENTITY
	 *
	 * Hash: 0xE65F427EB70AB1ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE65F427EB70AB1ED)
	 */
	playSoundFromEntity(
		soundId: integer,
		audioName: string,
		entity: Handle,
		audioRef: string,
		isNetwork: boolean,
		p5: integer
	): void;

	/**
	 * Native: AUDIO::PLAY_SOUND_FRONTEND
	 *
	 * Hash: 0x67C540AA08E4A6F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67C540AA08E4A6F5)
	 */
	playSoundFrontend(soundId: integer, audioName: string, audioRef: string, p3: boolean): void;

	/**
	 * Native: AUDIO::PLAY_STREAM_FROM_OBJECT
	 *
	 * Hash: 0xEBAA9B64D76356FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBAA9B64D76356FD)
	 */
	playStreamFromObject(object: Handle): void;

	/**
	 * Native: AUDIO::PLAY_STREAM_FROM_PED
	 *
	 * Hash: 0x89049DD63C08B5D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89049DD63C08B5D1)
	 */
	playStreamFromPed(ped: Handle): void;

	/**
	 * Native: AUDIO::PLAY_STREAM_FROM_POSITION
	 *
	 * Hash: 0x21442F412E8DE56B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21442F412E8DE56B)
	 */
	playStreamFromPosition(x: number, y: number, z: number): void;

	/**
	 * Native: AUDIO::PLAY_STREAM_FROM_VEHICLE
	 *
	 * Hash: 0xB70374A758007DFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB70374A758007DFA)
	 */
	playStreamFromVehicle(vehicle: Handle): void;

	/**
	 * Native: AUDIO::PLAY_STREAM_FRONTEND
	 *
	 * Hash: 0x58FCE43488F9F5F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58FCE43488F9F5F4)
	 */
	playStreamFrontend(): void;

	/**
	 * Native: AUDIO::PLAY_SYNCHRONIZED_AUDIO_EVENT
	 *
	 * Hash: 0x8B2FD4560E55DD2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B2FD4560E55DD2D)
	 */
	playSynchronizedEvent(p0: integer): boolean;

	/**
	 * Native: AUDIO::PLAY_VEHICLE_DOOR_CLOSE_SOUND
	 *
	 * Hash: 0x62A456AA4769EF34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62A456AA4769EF34)
	 */
	playVehicleDoorCloseSound(vehicle: Handle, doorId: integer): void;

	/**
	 * Native: AUDIO::PLAY_VEHICLE_DOOR_OPEN_SOUND
	 *
	 * Hash: 0x3A539D52857EA82D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A539D52857EA82D)
	 */
	playVehicleDoorOpenSound(vehicle: Handle, doorId: integer): void;

	/**
	 * Native: AUDIO::PRELOAD_SCRIPT_CONVERSATION
	 *
	 * Hash: 0x3B3CAD6166916D87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B3CAD6166916D87)
	 */
	preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

	/**
	 * Native: AUDIO::PRELOAD_SCRIPT_PHONE_CONVERSATION
	 *
	 * Hash: 0x6004BCB0E226AAEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6004BCB0E226AAEA)
	 */
	preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;

	/**
	 * Native: AUDIO::_PRELOAD_VEHICLE_AUDIO
	 *
	 * Hash: 0xCA4CEA6AE0000A7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA4CEA6AE0000A7E)
	 */
	preloadVehicle(vehicleModel: integer): void;

	/**
	 * Native: AUDIO::PREPARE_ALARM
	 *
	 * Hash: 0x9D74AE343DB65533 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D74AE343DB65533)
	 */
	prepareAlarm(alarmName: string): boolean;

	/**
	 * Native: AUDIO::PREPARE_MUSIC_EVENT
	 *
	 * Hash: 0x1E5185B72EF5158A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E5185B72EF5158A)
	 */
	prepareMusicEvent(eventName: string): boolean;

	/**
	 * Native: AUDIO::PREPARE_SYNCHRONIZED_AUDIO_EVENT
	 *
	 * Hash: 0xC7ABCACA4985A766 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7ABCACA4985A766)
	 */
	prepareSynchronizedEvent(p0: string, p1: integer): integer;

	/**
	 * Native: AUDIO::PREPARE_SYNCHRONIZED_AUDIO_EVENT_FOR_SCENE
	 *
	 * Hash: 0x029FE7CD1B7E2E75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x029FE7CD1B7E2E75)
	 */
	prepareSynchronizedEventForScene(p0: integer): integer;

	/**
	 * Native: AUDIO::RECORD_BROKEN_GLASS
	 *
	 * Hash: 0xFBE20329593DEC9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBE20329593DEC9D)
	 */
	recordBrokenGlass(x: number, y: number, z: number, radius: number): void;

	/**
	 * Native: AUDIO::REGISTER_SCRIPT_WITH_AUDIO
	 *
	 * Hash: 0xC6ED9D5092438D91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6ED9D5092438D91)
	 */
	registerScriptWith(p0: integer): void;

	/**
	 * Native: AUDIO::RELEASE_AMBIENT_AUDIO_BANK
	 *
	 * Hash: 0x65475A218FFAA93D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65475A218FFAA93D)
	 */
	releaseAmbientBank(): void;

	/**
	 * Native: AUDIO::RELEASE_MISSION_AUDIO_BANK
	 *
	 * Hash: 0x0EC92A1BF0857187 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EC92A1BF0857187)
	 */
	releaseMissionBank(): void;

	/**
	 * Native: AUDIO::RELEASE_NAMED_SCRIPT_AUDIO_BANK
	 *
	 * Hash: 0x77ED170667F50170 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77ED170667F50170)
	 */
	releaseNamedScriptBank(audioBank: string): void;

	/**
	 * Native: AUDIO::RELEASE_SCRIPT_AUDIO_BANK
	 *
	 * Hash: 0x7A2D8AD0A9EB9C3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A2D8AD0A9EB9C3F)
	 */
	releaseScriptBank(): void;

	/**
	 * Native: AUDIO::RELEASE_SOUND_ID
	 *
	 * Hash: 0x353FC880830B88FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x353FC880830B88FA)
	 */
	releaseSoundId(soundId: integer): void;

	/**
	 * Native: AUDIO::RELEASE_WEAPON_AUDIO
	 *
	 * Hash: 0xCE4AC0439F607045 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE4AC0439F607045)
	 */
	releaseWeapon(): void;

	/**
	 * Native: AUDIO::REMOVE_ENTITY_FROM_AUDIO_MIX_GROUP
	 *
	 * Hash: 0x18EB48CFC41F2EA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18EB48CFC41F2EA0)
	 */
	removeEntityFromMixGroup(entity: Handle, p1: number): void;

	/**
	 * Native: AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE
	 *
	 * Hash: 0xB4BBFD9CD8B3922B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4BBFD9CD8B3922B)
	 */
	removePortalSettingsOverride(p0: string): void;

	/**
	 * Native: AUDIO::REQUEST_AMBIENT_AUDIO_BANK
	 *
	 * Hash: 0xFE02FFBED8CA9D99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE02FFBED8CA9D99)
	 */
	requestAmbientBank(p0: string, p1: boolean, p2: integer): boolean;

	/**
	 * Native: AUDIO::REQUEST_MISSION_AUDIO_BANK
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x7345BDD95E62E0F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7345BDD95E62E0F2)
	 */
	requestMissionBank(p0: string, p1: boolean, p2?: integer): boolean;

	/**
	 * Native: AUDIO::REQUEST_SCRIPT_AUDIO_BANK
	 *
	 * Hash: 0x2F844A8B08D76685 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F844A8B08D76685)
	 */
	requestScriptBank(p0: string, p1: boolean, p2: integer): boolean;

	/**
	 * Native: AUDIO::REQUEST_TENNIS_BANKS
	 *
	 * Hash: 0x4ADA3F19BE4A6047 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4ADA3F19BE4A6047)
	 */
	requestTennisBanks(ped: Handle): void;

	/**
	 * Native: AUDIO::RESET_PED_AUDIO_FLAGS
	 *
	 * Hash: 0xF54BB7B61036F335 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF54BB7B61036F335)
	 */
	resetPedFlags(ped: Handle): void;

	/**
	 * Native: AUDIO::RESET_TREVOR_RAGE
	 *
	 * Hash: 0xE78503B10C4314E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE78503B10C4314E0)
	 */
	resetTrevorRage(): void;

	/**
	 * Native: AUDIO::_RESET_VEHICLE_STARTUP_REV_SOUND
	 *
	 * Hash: 0xD2DCCD8E16E20997 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2DCCD8E16E20997)
	 */
	resetVehicleStartupRevSound(vehicle: Handle): void;

	/**
	 * Native: AUDIO::RESTART_SCRIPTED_CONVERSATION
	 *
	 * Hash: 0x9AEB285D1818C9AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AEB285D1818C9AC)
	 */
	restartScriptedConversation(): void;

	/**
	 * Native: AUDIO::SET_AGGRESSIVE_HORNS
	 *
	 * Hash: 0x395BF71085D1B1D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x395BF71085D1B1D9)
	 */
	setAggressiveHorns(toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_AMBIENT_VOICE_NAME
	 *
	 * Hash: 0x6C8065A3B780185B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C8065A3B780185B)
	 */
	setAmbientVoiceName(ped: Handle, name: string): void;

	/**
	 * Native: AUDIO::_SET_AMBIENT_VOICE_NAME_HASH
	 *
	 * Hash: 0x9A53DED9921DE990 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A53DED9921DE990)
	 */
	setAmbientVoiceNameHash(ped: Handle, hash: integer): void;

	/**
	 * Native: AUDIO::SET_AMBIENT_ZONE_LIST_STATE
	 *
	 * Hash: 0x9748FA4DE50CCE3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9748FA4DE50CCE3E)
	 */
	setAmbientZoneListState(p1: boolean, p2: boolean): integer;

	/**
	 * Native: AUDIO::SET_AMBIENT_ZONE_LIST_STATE_PERSISTENT
	 *
	 * Hash: 0xF3638DAE8C4045E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3638DAE8C4045E1)
	 */
	setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

	/**
	 * Native: AUDIO::SET_AMBIENT_ZONE_STATE
	 *
	 * Hash: 0xBDA07E5950085E46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDA07E5950085E46)
	 */
	setAmbientZoneState(zoneName: string, p1: boolean, p2: boolean): void;

	/**
	 * Native: AUDIO::SET_AMBIENT_ZONE_STATE_PERSISTENT
	 *
	 * Hash: 0x1D6650420CEC9D3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D6650420CEC9D3B)
	 */
	setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

	/**
	 * Native: AUDIO::SET_ANIMAL_MOOD
	 *
	 * Hash: 0xCC97B29285B1DC3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC97B29285B1DC3B)
	 */
	setAnimalMood(animal: Handle, mood: integer): void;

	/**
	 * Native: AUDIO::SET_CUSTOM_RADIO_TRACK_LIST
	 *
	 * Hash: 0x4E404A9361F75BB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E404A9361F75BB2)
	 */
	setCustomRadioTrackList(radioStation: string, trackListName: string, p2: boolean): void;

	/**
	 * Native: AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE
	 *
	 * Hash: 0x3B4BF5F0859204D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B4BF5F0859204D9)
	 */
	setCutsceneOverride(name: string): void;

	/**
	 * Native: AUDIO::SET_EMITTER_RADIO_STATION
	 *
	 * Hash: 0xACF57305B12AF907 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACF57305B12AF907)
	 */
	setEmitterRadioStation(emitterName: string, radioStation: string): void;

	/**
	 * Native: AUDIO::SET_AUDIO_FLAG
	 *
	 * Hash: 0xB9EFD5C25018725A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9EFD5C25018725A)
	 */
	setFlag(flagName: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_FRONTEND_RADIO_ACTIVE
	 *
	 * Hash: 0xF7F26C6E9CC9EBB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7F26C6E9CC9EBB8)
	 */
	setFrontendRadioActive(active: boolean): void;

	/**
	 * Native: AUDIO::SET_GPS_ACTIVE
	 *
	 * Hash: 0x3BD3F52BA9B1E4E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BD3F52BA9B1E4E8)
	 */
	setGpsActive(active: boolean): void;

	/**
	 * Native: AUDIO::SET_HORN_ENABLED
	 *
	 * Hash: 0x76D683C108594D0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76D683C108594D0E)
	 */
	setHornEnabled(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_HORN_PERMANENTLY_ON
	 *
	 * Hash: 0x9C11908013EA4715 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C11908013EA4715)
	 */
	setHornPermanentlyOn(vehicle: Handle): void;

	/**
	 * Native: AUDIO::SET_HORN_PERMANENTLY_ON_TIME
	 *
	 * Hash: 0x9D3AF56E94C9AE98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D3AF56E94C9AE98)
	 */
	setHornPermanentlyOnTime(vehicle: Handle, time: number): void;

	/**
	 * Native: AUDIO::SET_INITIAL_PLAYER_STATION
	 *
	 * Hash: 0x88795F13FACDA88D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88795F13FACDA88D)
	 */
	setInitialPlayerStation(radioStation: string): void;

	/**
	 * Native: AUDIO::SET_MICROPHONE_POSITION
	 *
	 * Hash: 0xB6AE90EDDE95C762 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6AE90EDDE95C762)
	 */
	setMicrophonePosition(
		p0: boolean,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		x3: number,
		y3: number,
		z3: number
	): void;

	/**
	 * Native: AUDIO::SET_MOBILE_PHONE_RADIO_STATE
	 *
	 * Hash: 0xBF286C554784F3DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF286C554784F3DF)
	 */
	setMobilePhoneRadioState(state: boolean): void;

	/**
	 * Native: AUDIO::SET_MOBILE_RADIO_ENABLED_DURING_GAMEPLAY
	 *
	 * Hash: 0x1098355A16064BB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1098355A16064BB3)
	 */
	setMobileRadioEnabledDuringGameplay(toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_PED_AUDIO_FOOTSTEP_LOUD
	 *
	 * Hash: 0x0653B735BFBDFE87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0653B735BFBDFE87)
	 */
	setPedFootstepLoud(ped: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_PED_AUDIO_FOOTSTEP_QUIET
	 *
	 * Hash: 0x29DA3CA8D8B2692D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29DA3CA8D8B2692D)
	 */
	setPedFootstepQuiet(ped: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_PED_AUDIO_GENDER
	 *
	 * Hash: 0xA5342D390CDA41D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5342D390CDA41D6)
	 */
	setPedGender(ped: Handle, p1: boolean): void;

	/**
	 * Native: AUDIO::SET_PED_IS_DRUNK
	 *
	 * Hash: 0x95D2D383D5396B8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95D2D383D5396B8A)
	 */
	setPedIsDrunk(ped: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_PED_SCREAM
	 *
	 * Hash: 0x40CF0D12D142A9E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40CF0D12D142A9E8)
	 */
	setPedScream(ped: Handle): void;

	/**
	 * Native: AUDIO::_SET_PED_VOICE_GROUP
	 *
	 * Hash: 0x7CDC8C3B89F661B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CDC8C3B89F661B3)
	 */
	setPedVoiceGroup(ped: Handle, voiceGroupHash: integer): void;

	/**
	 * Native: AUDIO::SET_PLAYER_ANGRY
	 *
	 * Hash: 0xEA241BB04110F091 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA241BB04110F091)
	 */
	setPlayerAngry(ped: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_PORTAL_SETTINGS_OVERRIDE
	 *
	 * Hash: 0x044DBAD7A7FA2BE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x044DBAD7A7FA2BE5)
	 */
	setPortalSettingsOverride(p0: string, p1: string): void;

	/**
	 * Native: AUDIO::SET_RADIO_AUTO_UNFREEZE
	 *
	 * Hash: 0xC1AA9F53CE982990 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1AA9F53CE982990)
	 */
	setRadioAutoUnfreeze(toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_RADIO_FRONTEND_FADE_TIME
	 *
	 * Hash: 0x2C96CDB04FCA358E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C96CDB04FCA358E)
	 */
	setRadioFrontendFadeTime(fadeTime: number): void;

	/**
	 * Native: AUDIO::_SET_RADIO_STATION_IS_VISIBLE
	 *
	 * Hash: 0x4CAFEBFA21EC188D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CAFEBFA21EC188D)
	 */
	setRadioStationIsVisible(radioStation: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_RADIO_STATION_MUSIC_ONLY
	 *
	 * Hash: 0x774BD811F656A122 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x774BD811F656A122)
	 */
	setRadioStationMusicOnly(radioStation: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_RADIO_TO_STATION_INDEX
	 *
	 * Hash: 0xA619B168B8A8570F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA619B168B8A8570F)
	 */
	setRadioToStationIndex(radioStation: integer): void;

	/**
	 * Native: AUDIO::SET_RADIO_TO_STATION_NAME
	 *
	 * Hash: 0xC69EDA28699D5107 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC69EDA28699D5107)
	 */
	setRadioToStationName(stationName: string): void;

	/**
	 * Native: AUDIO::SET_RADIO_TRACK
	 *
	 * Hash: 0xB39786F201FEE30B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB39786F201FEE30B)
	 */
	setRadioTrack(radioStation: string, radioTrack: string): void;

	/**
	 * Native: AUDIO::_SET_RADIO_TRACK_MIX
	 *
	 * Hash: 0x2CB0075110BE1E56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CB0075110BE1E56)
	 */
	setRadioTrackMix(radioStationName: string, mixName: string, p2: integer): void;

	/**
	 * Native: AUDIO::SET_AUDIO_SCENE_VARIABLE
	 *
	 * Hash: 0xEF21A9EF089A2668 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF21A9EF089A2668)
	 */
	setSceneVariable(scene: string, variable: string, value: number): void;

	/**
	 * Native: AUDIO::SET_AUDIO_SCRIPT_CLEANUP_TIME
	 *
	 * Hash: 0xA5F377B175A699C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5F377B175A699C5)
	 */
	setScriptCleanupTime(time: integer): void;

	/**
	 * Native: AUDIO::SET_SCRIPT_UPDATE_DOOR_AUDIO
	 *
	 * Hash: 0x06C0023BED16DD6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06C0023BED16DD6B)
	 */
	setScriptUpdateDoor(doorHash: integer, toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_SIREN_KEEP_ON
	 *
	 * Hash: 0xF584CF8529B51434 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF584CF8529B51434)
	 */
	setSirenKeepOn(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_SIREN_WITH_NO_DRIVER
	 *
	 * Hash: 0x1FEF0683B96EBCF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1FEF0683B96EBCF2)
	 */
	setSirenWithNoDriver(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_AUDIO_SPECIAL_EFFECT_MODE
	 *
	 * Hash: 0x12561FCBB62D5B9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12561FCBB62D5B9C)
	 */
	setSpecialEffectMode(mode: integer): void;

	/**
	 * Native: AUDIO::SET_STATIC_EMITTER_ENABLED
	 *
	 * Hash: 0x399D2D3B33F1B8EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x399D2D3B33F1B8EB)
	 */
	setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_SYNCHRONIZED_AUDIO_EVENT_POSITION_THIS_FRAME
	 *
	 * Hash: 0x950A154B8DAB6185 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x950A154B8DAB6185)
	 */
	setSynchronizedEventPositionThisFrame(p0: string, p1: Handle): void;

	/**
	 * Native: AUDIO::SET_USER_RADIO_CONTROL_ENABLED
	 *
	 * Hash: 0x19F21E63AE6EAE4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19F21E63AE6EAE4E)
	 */
	setUserRadioControlEnabled(toggle: boolean): void;

	/**
	 * Native: AUDIO::_SET_VARIABLE_ON_CUTSCENE_AUDIO
	 *
	 * Hash: 0xBCC29F935ED07688 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCC29F935ED07688)
	 */
	setVariableOnCutscene(variableName: string, value: number): void;

	/**
	 * Native: AUDIO::SET_VARIABLE_ON_SOUND
	 *
	 * Hash: 0xAD6B3148A78AE9B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD6B3148A78AE9B6)
	 */
	setVariableOnSound(soundId: integer, p2: number): integer;

	/**
	 * Native: AUDIO::SET_VARIABLE_ON_STREAM
	 *
	 * Hash: 0x2F9D3834AEB9EF79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F9D3834AEB9EF79)
	 */
	setVariableOnStream(p0: string, p1: number): void;

	/**
	 * Native: AUDIO::SET_VARIABLE_ON_UNDER_WATER_STREAM
	 *
	 * Hash: 0x733ADF241531E5C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x733ADF241531E5C2)
	 */
	setVariableOnUnderWaterStream(variableName: string, value: number): void;

	/**
	 * Native: AUDIO::_SET_VEH_HAS_RADIO_OVERRIDE
	 *
	 * Hash: 0x3E45765F3FBB582F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E45765F3FBB582F)
	 */
	setVehHasRadioOverride(vehicle: Handle): void;

	/**
	 * Native: AUDIO::SET_VEHICLE_AUDIO_BODY_DAMAGE_FACTOR
	 *
	 * Hash: 0x01BB4D577D38BD9E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01BB4D577D38BD9E)
	 */
	setVehicleBodyDamageFactor(vehicle: Handle, intensity: number): void;

	/**
	 * Native: AUDIO::SET_VEHICLE_BOOST_ACTIVE
	 *
	 * Hash: 0x4A04DE7CAB2739A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A04DE7CAB2739A1)
	 */
	setVehicleBoostActive(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_VEHICLE_AUDIO_ENGINE_DAMAGE_FACTOR
	 *
	 * Hash: 0x59E7B488451F4D3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59E7B488451F4D3A)
	 */
	setVehicleEngineDamageFactor(vehicle: Handle, damageFactor: number): void;

	/**
	 * Native: AUDIO::_SET_VEHICLE_HORN_VARIATION
	 *
	 * Hash: 0x0350E7E17BA767D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0350E7E17BA767D0)
	 */
	setVehicleHornVariation(vehicle: Handle, value: integer): void;

	/**
	 * Native: AUDIO::SET_AUDIO_VEHICLE_PRIORITY
	 *
	 * Hash: 0xE5564483E407F914 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5564483E407F914)
	 */
	setVehiclePriority(vehicle: Handle, p1: integer): void;

	/**
	 * Native: AUDIO::SET_VEHICLE_RADIO_ENABLED
	 *
	 * Hash: 0x3B988190C0AA6C0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B988190C0AA6C0B)
	 */
	setVehicleRadioEnabled(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_VEHICLE_RADIO_LOUD
	 *
	 * Hash: 0xBB6F1CAEC68B0BCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB6F1CAEC68B0BCE)
	 */
	setVehicleRadioLoud(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: AUDIO::SET_VEHICLE_STARTUP_REV_SOUND
	 *
	 * Hash: 0xF1F8157B8C3F171C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1F8157B8C3F171C)
	 */
	setVehicleStartupRevSound(vehicle: Handle, p1: string, p2: string): void;

	/**
	 * Native: AUDIO::SET_VEH_RADIO_STATION
	 *
	 * Hash: 0x1B9C0099CB942AC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B9C0099CB942AC6)
	 */
	setVehRadioStation(vehicle: Handle, radioStation: string): void;

	/**
	 * Native: AUDIO::SKIP_RADIO_FORWARD
	 *
	 * Hash: 0x6DDBBDD98E2E9C25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DDBBDD98E2E9C25)
	 */
	skipRadioForward(): void;

	/**
	 * Native: AUDIO::SKIP_TO_NEXT_SCRIPTED_CONVERSATION_LINE
	 *
	 * Hash: 0x9663FE6B7A61EB00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9663FE6B7A61EB00)
	 */
	skipToNextScriptedConversationLine(): void;

	/**
	 * Native: AUDIO::START_ALARM
	 *
	 * Hash: 0x0355EF116C4C97B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0355EF116C4C97B2)
	 */
	startAlarm(alarmName: string, p2: boolean): void;

	/**
	 * Native: AUDIO::START_PRELOADED_CONVERSATION
	 *
	 * Hash: 0x23641AFE870AF385 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23641AFE870AF385)
	 */
	startPreloadedConversation(): void;

	/**
	 * Native: AUDIO::START_AUDIO_SCENE
	 *
	 * Hash: 0x013A80FC08F6E4F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x013A80FC08F6E4F2)
	 */
	startScene(scene: string): boolean;

	/**
	 * Native: AUDIO::START_SCRIPT_CONVERSATION
	 *
	 * Hash: 0x6B17C62C9635D2DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B17C62C9635D2DC)
	 */
	startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

	/**
	 * Native: AUDIO::START_SCRIPT_PHONE_CONVERSATION
	 *
	 * Hash: 0x252E5F915EABB675 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x252E5F915EABB675)
	 */
	startScriptPhoneConversation(p0: boolean, p1: boolean): void;

	/**
	 * Native: AUDIO::STOP_ALARM
	 *
	 * Hash: 0xA1CADDCD98415A41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1CADDCD98415A41)
	 */
	stopAlarm(alarmName: string, toggle: boolean): void;

	/**
	 * Native: AUDIO::STOP_ALL_ALARMS
	 *
	 * Hash: 0x2F794A877ADD4C92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F794A877ADD4C92)
	 */
	stopAllAlarms(stop: boolean): void;

	/**
	 * Native: AUDIO::STOP_CURRENT_PLAYING_AMBIENT_SPEECH
	 *
	 * Hash: 0xB8BEC0CA6F0EDB0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8BEC0CA6F0EDB0F)
	 */
	stopCurrentPlayingAmbientSpeech(ped: Handle): void;

	/**
	 * Native: AUDIO::STOP_CURRENT_PLAYING_SPEECH
	 *
	 * Hash: 0x7A73D05A607734C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A73D05A607734C7)
	 */
	stopCurrentPlayingSpeech(ped: Handle): void;

	/**
	 * Native: AUDIO::STOP_CUTSCENE_AUDIO
	 *
	 * Hash: 0x806058BBDC136E06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x806058BBDC136E06)
	 */
	stopCutscene(): void;

	/**
	 * Native: AUDIO::STOP_PED_RINGTONE
	 *
	 * Hash: 0x6C5AE23EFA885092 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C5AE23EFA885092)
	 */
	stopPedRingtone(ped: Handle): void;

	/**
	 * Native: AUDIO::STOP_PED_SPEAKING
	 *
	 * Hash: 0x9D64D7405520E3D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D64D7405520E3D3)
	 */
	stopPedSpeaking(ped: Handle, shaking: boolean): void;

	/**
	 * Native: AUDIO::STOP_AUDIO_SCENE
	 *
	 * Hash: 0xDFE8422B3B94E688 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFE8422B3B94E688)
	 */
	stopScene(scene: string): void;

	/**
	 * Native: AUDIO::STOP_AUDIO_SCENES
	 *
	 * Hash: 0xBAC7FC81A75EC1A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAC7FC81A75EC1A1)
	 */
	stopScenes(): void;

	/**
	 * Native: AUDIO::STOP_SCRIPTED_CONVERSATION
	 *
	 * Hash: 0xD79DEEFB53455EBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD79DEEFB53455EBA)
	 */
	stopScriptedConversation(p0: boolean): integer;

	/**
	 * Native: AUDIO::STOP_SOUND
	 *
	 * Hash: 0xA3B0C41BA5CC0BB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3B0C41BA5CC0BB5)
	 */
	stopSound(soundId: integer): void;

	/**
	 * Native: AUDIO::STOP_STREAM
	 *
	 * Hash: 0xA4718A1419D18151 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4718A1419D18151)
	 */
	stopStream(): void;

	/**
	 * Native: AUDIO::STOP_SYNCHRONIZED_AUDIO_EVENT
	 *
	 * Hash: 0x92D6A88E64A94430 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92D6A88E64A94430)
	 */
	stopSynchronizedEvent(p0: integer): boolean;

	/**
	 * Native: AUDIO::TRIGGER_MUSIC_EVENT
	 *
	 * Hash: 0x706D57B0F50DA710 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x706D57B0F50DA710)
	 */
	triggerMusicEvent(eventName: string): boolean;

	/**
	 * Native: AUDIO::_TRIGGER_SIREN
	 *
	 * Hash: 0x66C3FB05206041BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66C3FB05206041BA)
	 */
	triggerSiren(vehicle: Handle): void;

	/**
	 * Native: AUDIO::UNFREEZE_RADIO_STATION
	 *
	 * Hash: 0xFC00454CF60B91DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC00454CF60B91DD)
	 */
	unfreezeRadioStation(radioStation: string): void;

	/**
	 * Native: AUDIO::UNLOCK_MISSION_NEWS_STORY
	 *
	 * Hash: 0xB165AB7C248B2DC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB165AB7C248B2DC1)
	 */
	unlockMissionNewsStory(newsStory: integer): void;

	/**
	 * Native: AUDIO::UNLOCK_RADIO_STATION_TRACK_LIST
	 *
	 * Hash: 0x031ACB6ABA18C729 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x031ACB6ABA18C729)
	 */
	unlockRadioStationTrackList(radioStation: string, trackListName: string): void;

	/**
	 * Native: AUDIO::UNREGISTER_SCRIPT_WITH_AUDIO
	 *
	 * Hash: 0xA8638BE228D4751A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8638BE228D4751A)
	 */
	unregisterScriptWith(): void;

	/**
	 * Native: AUDIO::UNREQUEST_TENNIS_BANKS
	 *
	 * Hash: 0x0150B6FF25A9E2E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0150B6FF25A9E2E5)
	 */
	unrequestTennisBanks(): void;

	/**
	 * Native: AUDIO::_UPDATE_LSUR
	 *
	 * Hash: 0x47AED84213A47510 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47AED84213A47510)
	 */
	updateLsur(enableMixes: boolean): void;

	/**
	 * Native: AUDIO::USE_SIREN_AS_HORN
	 *
	 * Hash: 0xFA932DE350266EF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA932DE350266EF8)
	 */
	useSirenAsHorn(vehicle: Handle, toggle: boolean): void;

	unk: GameAudioUnk;
}

interface GameAudioMp extends GameAudio {
	/**
	 * Same as mp.game.audio.playSound (0x7FF4944CC209192D) but audio* parameters take hashes instead of strings.
	 * 
	 * See [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Audio::playSound)
	 */
	playSoundHash(soundId: integer, audioNameHash: Hash, audioRefHash: Hash, p3: boolean, p4: integer, p5: boolean): void;
}
