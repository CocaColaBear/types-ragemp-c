/// <reference path="game/system.d.ts" />
/// <reference path="game/app.d.ts" />
/// <reference path="game/audio.d.ts" />
/// <reference path="game/brain.d.ts" />
/// <reference path="game/cam.d.ts" />
/// <reference path="game/clock.d.ts" />
/// <reference path="game/cutscene.d.ts" />
/// <reference path="game/datafile.d.ts" />
/// <reference path="game/decorator.d.ts" />
/// <reference path="game/dlc.d.ts" />
/// <reference path="game/entity.d.ts" />
/// <reference path="game/event.d.ts" />
/// <reference path="game/files.d.ts" />
/// <reference path="game/fire.d.ts" />
/// <reference path="game/graphics.d.ts" />
/// <reference path="game/hud.d.ts" />
/// <reference path="game/interior.d.ts" />
/// <reference path="game/itemset.d.ts" />
/// <reference path="game/legacy.d.ts" />
/// <reference path="game/loadingscreen.d.ts" />
/// <reference path="game/localization.d.ts" />
/// <reference path="game/misc.d.ts" />
/// <reference path="game/mobile.d.ts" />
/// <reference path="game/network.d.ts" />
/// <reference path="game/object.d.ts" />
/// <reference path="game/pad.d.ts" />
/// <reference path="game/pathfind.d.ts" />
/// <reference path="game/ped.d.ts" />
/// <reference path="game/physics.d.ts" />
/// <reference path="game/player.d.ts" />
/// <reference path="game/recording.d.ts" />
/// <reference path="game/replay.d.ts" />
/// <reference path="game/savemigration.d.ts" />
/// <reference path="game/script.d.ts" />
/// <reference path="game/shapetest.d.ts" />
/// <reference path="game/stats.d.ts" />
/// <reference path="game/streaming.d.ts" />
/// <reference path="game/task.d.ts" />
/// <reference path="game/vehicle.d.ts" />
/// <reference path="game/water.d.ts" />
/// <reference path="game/weapon.d.ts" />
/// <reference path="game/zone.d.ts" />
/// <reference path="game/gxt.d.ts" />
/// <reference path="game/decisionevent.d.ts" />
/// <reference path="game/dlc1.d.ts" />
/// <reference path="game/dlc2.d.ts" />
/// <reference path="game/unk.d.ts" />
/// <reference path="game/recorder.d.ts" />

interface GameMp extends GameMpShared {
	ai: GameTaskMp;
	app: GameAppMp;
	audio: GameAudioMp;
	brain: GameBrainMp;
	cam: GameCamMp;
	clock: GameClockMp;
	controls: GamePadMp;
	cutscene: GameCutsceneMp;
	datafile: GameDatafileMp;
	decisionevent: GameDecisioneventMp;
	decorator: GameDecoratorMp;
	dlc: GameDlcMp;
	dlc1: GameDlc1Mp;
	dlc2: GameDlc2Mp;
	entity: GameEntityMp;
	event: GameEventMp;
	files: GameFilesMp;
	fire: GameFireMp;
	gameplay: GameMiscMp;
	graphics: GameGraphicsMp;
	gxt: GameGxtMp;
	hud: GameHudMp;
	interior: GameInteriorMp;
	itemset: GameItemsetMp;
	loadingscreen: GameLoadingscreenMp;
	localization: GameLocalizationMp;
	misc: GameMiscMp;
	mobile: GameMobileMp;
	network: GameNetworkMp;
	object: GameObjectMp;
	pad: GamePadMp;
	pathfind: GamePathfindMp;
	ped: GamePedMp;
	physics: GamePhysicsMp;
	player: GamePlayerMp;
	recorder: GameRecorderMp;
	recording: GameRecordingMp;
	replay: GameReplayMp;
	rope: GamePhysicsMp;
	savemigration: GameSavemigrationMp;
	script: GameScriptMp;
	shapetest: GameShapetestMp;
	stats: GameStatsMp;
	streaming: GameStreamingMp;
	system: GameSystemMp;
	task: GameTaskMp;
	time: GameClockMp;
	ui: GameHudMp;
	unk: GameUnkMp;
	vehicle: GameVehicleMp;
	water: GameWaterMp;
	weapon: GameWeaponMp;
	zone: GameZoneMp;

	enableInvokeDebug: boolean;
	enableResultObjCache: boolean;
}

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
