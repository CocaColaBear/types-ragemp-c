interface LegacyGameMp extends GameMpShared {
	app: LegacyGameAppMp;
	audio: LegacyGameAudioMp;
	brain: LegacyGameBrainMp;
	cam: LegacyGameCamMp;
	controls: LegacyGameControlsMp;
	cutscene: LegacyGameCutsceneMp;
	datafile: LegacyGameDatafileMp;
	decisionevent: LegacyGameDecisioneventMp;
	decorator: LegacyGameDecoratorMp;
	dlc1: LegacyGameDlc1Mp;
	dlc2: LegacyGameDlc2Mp;
	entity: LegacyGameEntityMp;
	fire: LegacyGameFireMp;
	gameplay: LegacyGameGameplayMp;
	graphics: LegacyGameGraphicsMp;
	gxt: GameGxtMp;
	interior: LegacyGameInteriorMp;
	itemset: LegacyGameItemsetMp;
	mobile: LegacyGameMobileMp;
	object: LegacyGameObjectMp;
	pathfind: LegacyGamePathfindMp;
	ped: LegacyGamePedMp;
	player: LegacyGamePlayerMp;
	rope: LegacyGameRopeMp;
	script: LegacyGameScriptMp;
	stats: LegacyGameStatsMp;
	streaming: LegacyGameStreamingMp;
	system: LegacyGameSystemMp;
	time: LegacyGameTimeMp;
	ui: LegacyGameUiMp;
	unk: LegacyGameUnkMp;
	recorder: LegacyGameRecorderMp;
	vehicle: LegacyGameVehicleMp;
	water: LegacyGameWaterMp;
	weapon: LegacyGameWeaponMp;
	worldprobe: LegacyGameWorldprobeMp;
	zone: LegacyGameZoneMp;
}

interface GameMpShared {
	invoke(hash: string, ...args: any[]): any;
	invokeFloat(hash: string, ...args: any[]): any;
	invokeString(hash: string, ...args: any[]): any;
	invokeVector3(hash: string, ...args: any[]): any;
	joaat(text: string): Hash;
	joaat(textArray: string[]): Hash[];
	wait(ms: number): void;
	waitAsync(ms: number): Promise<void>;
}
