interface LegacyGameAppMp {
	appDeleteAppData(appName: string): boolean;
	appGetFloat(property: string): number;
	appGetString(property: string): string;
	appGetInt(property: string): number;
	appHasSyncedData(property: string): boolean;
	appSetApp(appName: string): void;
	appSetBlock(blockName: string): void;
	appSetFloat(property: string, value: number): void;
	appSetInt(property: string, value: number): void;
	appSetString(property: string, value: string): void;
}

interface LegacyGameAudioMp {
	addLineToConversation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: boolean, p6: boolean,
		p7: boolean, p8: boolean, p9: any, p10: boolean, p11: boolean, p12: boolean): void;
	addPedToConversation(p0: any, p1: any, p2: string): void;
	cancelMusicEvent(eventName: string): boolean;
	clearAmbientZoneListState(p0: any, p1: boolean): void;
	clearAmbientZoneState(p0: any, p1: boolean): void;
	findRadioStationIndex(station: number): number;
	freezeRadioStation(radioStation: string): void;
	getNetworkIdFromSoundId(soundId: number): number;
	getNumberOfPassengerVoiceVariations(p0: any): number;
	getPlayerHeadsetSoundAlternate(p0: string, p1: number): void;
	getRadioStationName(radioStation: number): string;
	getSoundIdFromNetworkId(netId: number): number;
	getSynchronizedAudioEventPositionThisFrame(p0: string, p1: Handle): void;
	getVehicleDefaultHorn(vehicle: Handle): Hash;
	hasSoundFinished(soundId: number): boolean;
	hintAmbientAudioBank(p0: any, p1: any): void;
	hintScriptAudioBank(p0: any, p1: any): void;
	interruptConversation(p0: any, p1: any, p2: any): void;
	isAlarmPlayer(alarmName: string): boolean;
	isAmbientSpeechPlaying(p0: Handle): boolean;
	isAmbientZoneEnabled(ambientZone: string): boolean;
	isAudioSceneActive(scene: string): boolean;
	isScriptedSpeechPlaying(p0: any): boolean;
	loadStream(streamName: string, soundSet: string): boolean;
	loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;
	overrideTrevorRage(p0: any): void;
	overrideUnderwaterStream(p0: any, p1: boolean): void;
	pauseScriptedConversation(p0: boolean): void;
	playAmbientSpeechAtCoords(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string): void;
	playAmbientSpeechWithVoice(p0: Handle, speechName: string, voiceName: string, speechParam: string,
		p4: boolean): void;
	playEndCreditsMusic(play: boolean): void;
	playMissionCompleteAudio(audioName: string): void;
	playPain(painId: number, p1: number, p2: number): void;
	playPedRingtone(ringtoneName: string, ped: Handle, p2: boolean): void;
	playPoliceReport(name: string, p1: number): void;
	playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: any, p5: boolean): void;
	playSoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, p6: boolean,
		p7: any, p8: boolean): void;
	playSoundFromEntity(soundId: number, audioName: string, entity: Handle, audioRef: string, p4: boolean, p5: any): void;
	playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;
	playStreamFromObject(object: Handle): void;
	playSynchronizedAudioEvent(p0: any): boolean;
	preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
	prepareAlarm(alarmName: string): boolean;
	prepareMusicEvent(eventName: string): boolean;
	prepareSynchronizedAudioEvent(p0: string, p1: any): void;
	prepareSynchronizedAudioEventForScene(p0: any, p1: any): boolean;
	registerScriptWithAudio(p0: any): void;
	releasedNamedScriptAudioBank(audioBank: string): void;
	releaseSoundId(soundId: number): void;
	requestAmbientAudioBank(p0: string, p1: boolean): boolean;
	requestMissionAudioBank(p0: string, p1: boolean): boolean;
	requestScriptAudioBank(p0: string, p1: boolean): boolean;
	resetPedAudioFlags(p0: any): void;
	setAggressiveHorns(toggle: boolean): void;
	setAmbientZoneListState(p0: any, p1: boolean, p2: boolean): void;
	setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
	setAmbientZoneState(p0: any, p1: boolean, p2: boolean): void;
	setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
	setAnimalMood(p0: any, p1: any): void;
	setAudioFlag(flagName: string, toggle: boolean): void;
	setAudioSceneVariable(p0: any, p1: any, p2: number): void;
	setCutsceneAudioOverride(p0: string): void;
	setEmitterRadioStation(emitterName: string, radioStation: string): void;
	setFrontendRadioActive(active: boolean): void;
	setGpsActive(active: boolean): void;
	setInitialPlayerStation(radioStation: string): void;
	setMicrophonePosition(p0: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number,
		y3: number, z3: number): void;
	setMobilePhoneRadioState(state: boolean): void;
	setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
	setPlayerAngry(playerPed: Handle, disabled: boolean): void;
	setRadioAutoUnfreeze(p0: boolean): void;
	setRadioToStationIndex(radioStation: number): void;
	setRadioToStationName(stationName: string): void;
	setRadioTrack(radioStation: string, radioTrack: string): void;
	setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;
	setUserRadioControlEnabled(p0: boolean): void;
	setVariableOnSound(soundId: number, p1: any, p2: number): void;
	setVariableOnStream(p0: string, p1: number): void;
	specialFrontendEqual(x: number, y: number, z: number): void;
	startAlarm(alarmName: string, p2: boolean): void;
	startAudioScene(sceneName: string): boolean;
	startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	startScriptPhoneConversation(p0: boolean, p1: boolean): void;
	stopAlarm(alarmName: string, toggle: boolean): void;
	stopAllAlarms(stop: boolean): void;
	stopAudioScene(scene: string): void;
	stopCurrentPlayerAmbientSpeech(p0: Handle): void;
	stopScriptedConversation(p0: boolean): void;
	stopSound(soundId: number): void;
	stopSynchronizedAudioEvent(p0: any): boolean;
	triggerMusicEvent(eventName: string): boolean;
	unfreezeRadioStation(radioStation: string): void;
	unlockMissionNewsStory(newsStory: number): void;
}

interface LegacyGameBrainMp {
	addScriptToRandom(name: string, model: Hash, p2: number, p3: number): void;
	disableScriptBrainSet(brainSet: number): void;
	enableScriptBrainSet(brainSet: number): void;
	isObjectWithinBrainActivationRange(object: Handle): boolean;
	registerObjectScriptBrain(stringName: string, p1: Hash, p2: number, p3: number, p4: number, p5: number): void;
	registerWorldPointScriptBrain(p0: any, p1: number, p2: any): void;
}

interface LegacyGameCamMp {
	addCamSplineNode(camera: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number,
		length: number, p8: number, p9: number): void;
	animateGameplayCamZoom(p0: number, distance: number): void;
	clampGameplayCamPitch(minimum: number, maximum: number): void;
	clampGameplayCamYaw(minimum: number, maximum: number): void;
	createCam(camName: string, p1: boolean): Handle;
	createCamera(camHash: number, p1: boolean): Handle;
	createCameraWithParams(camHash: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number,
		rotZ: number, fov: number, p8: boolean, p9: any): Handle;
	createCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number,
		rotZ: number, fov: number, p8: boolean, p9: any): Handle;
	createCinematicShot(p0: any, p1: number, p2: any, entity: Handle): void;
	destroyAllCams(destroy: boolean): void;
	doScreenFadeIn(duration: number): void;
	doScreenFadeOut(duration: number): void;
	getCamSplineNodeIndex(cam: number): boolean;
	getCamSplineNodePhase(p0: any): number;
	getGameplayCamRelativeHeading(): number;
	getGameplayCamRot(p0: number): Vector3Mp;
	getGameplayCamRot(p0: number): Vector3Mp;
	getIsMultiplayerBrief(p0: boolean): void;
	isCamSplinePaused(p0: any): boolean;
	isCinematicShotActive(p0: any): boolean;
	isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
	overrideCamSplineMotionBlur(p0: any, p1: any, p2: number, p3: number): void;
	overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
	playSynchronizedCamAnim(p0: any, p1: any, animName: string, animDictionary: string): boolean;
	renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean): void;
	setCamEffect(p0: number): void;
	setCamSplineDuration(cam: number, timeDuration: number): void;
	setCamSplinePhase(cam: number, p1: number): void;
	setCinematicButtonActive(p0: boolean): void;
	setCinematicCamShakeAmplitude(p0: number): void;
	setCinematicModeActive(p0: boolean): void;
	setFollowPedCamCutsceneChat(p0: string, p1: number): void;
	setFollowPedCamViewMode(viewMode: number): void;
	setFollowVehicleCamViewMode(viewMode: number): void;
	setFollowVehicleCamZoomLevel(zoomLevel: number): void;
	setGameplayCamRawPitch(pitch: number): void;
	setGameplayCamRawYaw(yaw: number): void;
	setGameplayCamRelativeHeading(heading: number): void;
	setGameplayCamRelativePitch(x: number, p1: number): void;
	setGameplayCamShakeAmplitude(amplitude: number): void;
	setGameplayCoordHint(p0: number, p1: number, p2: number, p3: any, p4: any, p5: any, p6: any): void;
	setGameplayEntityHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any, p7: any,
		p8: any): void;
	setGameplayHintFov(fov: number): void;
	setGameplayObjectHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any,
		p7: any): void;
	setGameplayPedHint(p0: Handle, x1: number, y1: number, z1: number, p4: boolean, p5: any, p6: any, p7: any): void;
	setGameplayVehicleHint(p0: any, p1: number, p2: number, p3: number, p4: boolean, p5: any, p6: any,
		p7: any): void;
	setTimeIdleDrop(p0: boolean, p1: boolean): void;
	setWidescreenBorders(p0: boolean, p1: number): void;
	shakeCinematicCam(p0: string, p1: number): void;
	shakeGameplayCam(shakeName: string, intensity: number): void;
	stopCinematicCamShaking(p0: boolean): void;
	stopCinematicShot(p0: any): void;
	stopGameplayCamShaking(p0: boolean): void;
	stopGameplayHint(p0: boolean): void;
}

interface LegacyGameControlsMp {
	useDefaultVehicleEntering: boolean;

	disableAllControlActions(inputGroup: number | RageEnums.InputGroup): void;
	disableControlAction(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls, disable: boolean): void;
	enableAllControlActions(inputGroup: number | RageEnums.InputGroup): void;
	enableControlAction(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls, enable: boolean): void;
	getControlActionName(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls, p2: boolean): string;
	getControlNormal(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): number;
	getControlValue(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): number;
	getDisabledControlNormal(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): number;
	isControlEnabled(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isControlJustPressed(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isControlJustReleased(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isControlPressed(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isControlReleased(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isDisabledControlJustPressed(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isDisabledControlJustReleased(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isDisabledControlPressed(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): boolean;
	isInputDisabled(inputGroup: number | RageEnums.InputGroup): boolean;
	isInputJustDisabled(inputGroup: number | RageEnums.InputGroup): boolean;
	setControlNormal(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls, amount: number): boolean;
	setInputExclusive(inputGroup: number | RageEnums.InputGroup, control: number | RageEnums.Controls): void;
	setPadShake(p0: number, duration: number, frequency: number): void;
	setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
	stopPadShake(p0: any): void;
}

interface LegacyGameCutsceneMp {
	setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: Hash): void;
	getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: Hash): EntityMp;
	startCutscene(p0: number): void;
	startCutsceneAtCoords(x: number, y: number, z: number, p3: number): void;
	hasThisCutsceneLoaded(cutsceneName: string): boolean;
	doesCutsceneEntityExist(cutsceneEntName: string, modelHash: Hash): boolean;
	canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: Hash): boolean;
	canSetEnterForRegisteredEntity(cutsceneEntName: string, modelHash: Hash): boolean;
	requestCutscene(cutsceneName: string, p1: number): void;
	setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	canSetExitStateForCamera(p0: boolean): boolean;
	setCutsceneOrigin(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	setCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: number): void;
	getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: Hash): EntityMp;
	requestCutscene2(cutsceneName: string, p1: number, p2: number): void;
	stopCutscene(p0: boolean): void;
	registerEntityForCutscene(cutscenePed: Handle, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
}

interface LegacyGameDatafileMp {
	arrayValueAddBoolean(arrayData: any, value: boolean): void;
	arrayValueAddFloat(arrayData: any, value: number): void;
	arrayValueAddInteger(arrayData: any, value: number): void;
	arrayValueAddObject(arrayData: any): void;
	arrayValueAddString(arrayData: any, value: string): void;
	arrayValueAddVector3(arrayData: any, valueX: number, valueY: number, valueZ: number): void;
	arrayValueGetBoolean(arrayData: any, arrayIndex: number): boolean;
	arrayValueGetFloat(arrayData: any, arrayIndex: number): number;
	arrayValueGetInteger(arrayData: any, arrayIndex: number): number;
	arrayValueGetObject(arrayData: any, arrayIndex: number): any;
	arrayValueGetSize(arrayData: any): number;
	arrayValueGetString(arrayData: any, arrayIndex: number): string;
	arrayValueGetType(arrayData: any, arrayIndex: number): number;
	arrayValueGetVector3(arrayData: any, arraayIndex: number): Vector3Mp;
	loadUgcFile(filename: string): boolean;
	objectValueAddArray(objectData: any, key: string): void;
	objectValueAddBoolean(arrayData: any, key: string, value: boolean): void;
	objectValueAddFloat(objectData: any, key: string, value: number): void;
	objectValueAddInteger(objectData: any, key: string, value: number): void;
	objectValueAddObject(objectData: any, key: string): void;
	objectValueAddString(objectData: any, key: string, value: string): void;
	objectValueAddVector3(objectData: any, key: string, valueX: number, valueY: number, valueZ: number): void;
	objectValueGetArray(objectData: any, key: string): any;
	objectValueGetBoolean(objectData: any, key: string): boolean;
	objectValueGetFloat(objectData: any, key: string): number;
	objectValueGetInteger(objectData: any, key: string): number;
	objectValueGetObject(objectData: any, key: string): void;
	objectValueGetString(objectData: any, key: string): string;
	objectValueGetType(objectData: any, key: string): number;
	objectValueGetVector3(objectData: any, key: string): Vector3Mp;

}

interface LegacyGameDecisioneventMp {
	addShockingEventAtPosition(type: number, x: number, y: number, z: number, duration: number): Handle;
	addShockingEventForEntity(type: number, entity: Handle, duration: number): Handle;
	blockDecisionMakerEvent(name: Hash, type: number): void;
	clearDecisionMakerEventResponse(name: Hash, type: number): void;
	isShockingEventInSphere(type: number, x: number, y: number, z: number, radius: number): boolean;
	removeAllShockingEvents(p0: boolean): void;
	removeShockingEvent(event: Handle): boolean;
	suppressShockingEvent(type: number): void;
	unblockDecisionMakerEvent(name: Hash, type: number): void;
}

interface LegacyGameDecoratorMp {
	decorIsRegisteredAsType(propertyName: string, type: number): boolean;
	decorRegister(propertyName: string, type: number): void;
}

interface LegacyGameDlc1Mp {
	getDlcVehicleData(dlcVehicleIndex: number, outData: any): boolean;
	getDlcVehicleFlags(p0: number): number;
	getDlcVehicleModel(dlcVehicleIndex: number): Hash;
	getDlcWeaponComponentData(p0: any, p1: any,
		componentDataPtr: {
			attachBone: number;
			padding1: number;
			bActiveByDefault: number;
			padding2: number;
			unk: number;
			padding3: number;
			componentHash: number;
			padding4: number;
			unk2: number;
			padding5: number;
			componentCost: number;
			padding6: number;
			nameLabel: string;
			descLabel: string;
		}
	): boolean;
	getDlcWeaponData(dlcWeaponIndex: number,
		outData: {
			emptyCheck: number;
			padding1: number;
			weaponHash: number;
			padding2: number;
			unk: number;
			padding3: number;
			weaponCost: number;
			padding4: number;
			ammoCost: number;
			padding5: number;
			ammoType: number;
			padding6: number;
			defaultClipSize: number;
			padding7: number;
			nameLabel: string;
			descLabel: string;
			desc2Label: string;
			upperCaseNameLabel: string;
		}
	): boolean;
	getForcedComponent(componentHash: Hash, componentId: number, p2: any, p3: any, p4: any): void;
	getNumDlcWeaponComponents(dlcWeaponIndex: number): number;
	getNumForcedComponents(componentHash: Hash): number;
	getNumPropsFromOutfit(p0: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
	getPropFromOutfit(outfit: any, slot: number, item: any): boolean;
	getShopPedComponent(p0: any, p1: any): void;
	getShopPedOutfit(p0: any, p1: any): void;
	getShopPedQueryComponent(componentId: number, outComponent: number): number;
	getShopPedQueryOutput(p0: any,
		outfit: {
			mask: number;
			torso: number;
			pants: number;
			parachute: number;
			shoes: number;
			misc1: number;
			tops1: number;
			armour: number;
			crew: number;
			tops2: number;
			hat: number;
			glasses: number;
			earpiece: number;
			maskTexture: number;
			torsoTexture: number;
			pantsTexture: number;
			parachuteTexture: number;
			shoesTexture: number;
			misc1Texture: number;
			tops1Texture: number;
			armourTexture: number;
			crewTexture: number;
			tops2Texture: number;
			hatTexture: number;
			glassesTexture: number;
			earpiceTexture: number;
		}
	): void;
	getShopPedQueryProp(p0: any, p1: any): void;
	getVariantComponent(componentHash: Hash, componentId: number, p2: any, p3: any, p4: any): void;
	initShopPedComponent(outComponent: number): number;
	initShopPedProp(outProp: number): number;
	isDlcDataEmpty(dlcData: number): boolean;
}

interface LegacyGameDlc2Mp {
	isDlcPresent(dlcHash: Hash): boolean;
	nullify(variable: any, unused: any): boolean;
}

interface LegacyGameEntityMp {
	createForcedObject(x: number, y: number, z: number, p3: any, modelHash: Hash, p5: boolean): void;
	createModelHide(x: number, y: number, z: number, radius: number, model: Hash, p5: boolean): void;
	createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: Hash,
		p5: boolean): void;
	createModelSwap(x: number, y: number, z: number, radius: number, originalModel: Hash,
		newModel: Hash, p6: boolean): void;
	findAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: any, p4: any): boolean;
	getEntityAnimDuration(animDict: string, animName: string): number;
	isAnEntity(handle: Handle): boolean;
	playSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: any, p5: any, p6: any,
		p7: any, p8: number, p9: number, p10: any, p11: number): boolean;
	removeForcedObject(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	removeModelHide(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
	removeModelSwap(x: number, y: number, z: number, radius: number, originModel: Hash,
		newModel: Hash, p6: boolean): void;
	setObjectAsNoLongerNeeded(object: Handle): void;
	stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: any, p5: number): boolean;
	wouldEntityBeOccluded(hash: Hash, x: number, y: number, z: number, p4: boolean): boolean;
}

interface LegacyGameFireMp {
	addSpecfxExplosion(x: number, y: number, z: number, explosionType: number, explosionFx: Hash,
		damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
	getClosestFirePos(outPosition: Vector3Mp, x: number, y: number, z: number): Vector3Mp;
	getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
	getPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number,
		z2: number, radius: number): EntityMp;
	isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number,
		angle: number): boolean;
	isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;
	removeScriptFire(fireHandle: Handle): void;
	startScriptFire(x: number, y: number, z: number, maxChildren: number, isGasFire: boolean): number;
	stopFireInRange(x: number, y: number, z: number, radius: number): void;
}

interface LegacyGameGameplayMp {
	enableSnow: boolean;
	
	absf(value: number): number;
	absi(value: number): number;
	acos(p0: number): number;
	addHospitalRestart(x: number, y: number, z: number, p3: number, p4: any): number;
	addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: any): void;
	addStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number,
		p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: any, p16: any): number;
	addStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number,
		p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number,
		p17: any, p18: any): number
	areStringsEqual(string1: string, string2: string): boolean;
	asin(p0: number): number;
	atan(p0: number): number;
	atan2(p0: number, p1: number): number;
	beginReplayStats(p0: any, p1: any): void;
	clearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
		p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean): void;
	clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean,
		p7: boolean): void;
	clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean,
		p7: boolean): void;
	clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;
	clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean,
		p7: boolean, p8: boolean): void;
	clearBit(address: number, offset: number): number;
	compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;
	createIncident(p0: number, p2: number, p3: number, p4: number, p5: number, p6: number, outIncident: number): number;
	createIncidentWithEntity(p0: number, p1: EntityMp, p2: number, p3: number, outIncident: number): number;
	deleteIncident(incidentId: number): number;
	deleteStuntJump(p0: number): void;
	disableAutomaticRespawn(disableRespawn: boolean): void;
	disableHospitalRestart(hospitalIndex: number, toggle: boolean): void;
	disablePoliceRestart(policeIndex: number, toggle: boolean): void;
	disableStuntJumpSet(p0: number): void;
	displayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string,
		defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void;
	enableDispatchService(dispatchType: number, toggle: boolean): void;
	enableMpDlcMaps(toggle: boolean): void;
	enableStuntJumpSet(p0: number): void;
	findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number,
		spawnPoint: Vector3Mp): Vector3Mp;
	getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
	getBitsInRange(vars: number, rangeStart: number, rangeEnd: number): number;
	getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
	getFreeStackSlotsCount(stackSize: number): number;
	getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: boolean): number;
	getHashKey(value: string): Hash;
	getHeadingFromVector2d(dx: number, dy: number): number;
	getModelDimensions(modelHash: Hash): {
		min: Vector3Mp;
		max: Vector3Mp;
	};
	getProfileSetting(profileSetting: number): number;
	getRandomFloatInRange(startRange: number, endRange: number): number;
	getRandomIntInRange(startRange: number, endRange: number): number;
	getWeatherTypeTransition(p0: any, p1: any, progress_or_time: number): number;
	hasBulletImpactedInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean): boolean;
	hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean,
		p7: boolean): boolean;
	hasButtonCombinationJustBeenEntered(hash: Hash, amount: number): boolean;
	hasCheatStringJustBeenEntered(hash: Hash): boolean;
	ignoreNextRestart(toggle: boolean): void;
	isAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean,
		p8: boolean, p9: boolean, p10: boolean, p11: any, p12: boolean): boolean;
	isBitSet(address: number, offset: number): boolean;
	isBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): boolean;
	isBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
	isBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): boolean;
	isIncidentValid(incidentId: number): number;
	isNextWeatherType(weatherType: string): boolean;
	isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: any): boolean;
	isPositionOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean,
		p8: boolean, p9: any, p10: boolean): boolean;
	isPrevWeatherType(weatherType: string): boolean;
	isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
	isProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
		p7: any, p8: boolean): boolean;
	isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number,
		p7: boolean): boolean;
	isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isStringNull(string: string): boolean;
	isStringNullOrEmpty(string: string): boolean;
	overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
	registerBoolToSave(p0: any, name: string): void;
	registerEnumToSave(p0: any, name: string): void;
	registerFloatToSave(p0: any, name: string): void;
	registerIntToSave(p0: any, name: string): void;
	registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: any, p5: any, p6: any): void;
	registerTextLabelToSave(p0: any, name: string): void;
	removeDispatchSpawnBlockingArea(p0: any): void;
	setBit(address: number, offset: number): number;
	setBitsInRange(vars: number, rangeStart: number, rangeEnd: number, p3: number): number;
	setCloudHatTransition(type: string, transitionTime: number): void;
	setCreditsActive(toggle: boolean): void;
	setDispatchIdealSpawnDistance(p0: number): void;
	setDispatchTimeBetweenSpawnAttempts(p0: any, p1: number): void;
	setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: any, p1: number): void;
	setExplosiveAmmoThisFrame(): void;
	setExplosiveMeleeThisFrame(): void;
	setFadeInAfterDeathArrest(toggle: boolean): void;
	setFadeInAfterLoad(toggle: boolean): void;
	setFadeOutAfterArrest(toggle: boolean): void;
	setFadeOutAfterDeath(toggle: boolean): void;
	setFakeWantedLevel(fakeWantedLevel: number): void;
	setFireAmmoThisFrame(): void;
	setGamePaused(toggle: boolean): void;
	setGravityLevel(level: number): void;
	setMinigameInProgress(toggle: boolean): void;
	setMissionFlag(toggle: boolean): void;
	setOverrideWeather(weatherType: string): void;
	setRainFxIntensity(intensity: number): void;
	setRandomEventFlag(p0: boolean): void;
	setRandomSeed(time: number): void;
	setSaveHouse(p0: any, p1: boolean, p2: boolean): void;
	setSaveMenuActive(unk: boolean): void;
	setSuperJumpThisFrame(): void;
	setThisScriptCanBePaused(toggle: boolean): void;
	setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
	setTimeScale(time: number): void;
	setUnkMapFlag(flag: number): void;
	setWeatherTypeNow(weatherType: string): void;
	setWeatherTypeNowPersist(weatherType: string): void;
	setWeatherTypeOverTime(weatherType: string, time: number): void;
	setWeatherTypePersist(weatherType: string): void;
	setWeatherTypeTransition(sourceWeather: Hash, targetWeather: Hash, transitionTime: number): void;
	setWind(p0: number): void;
	setWindDirection(direction: number): void;
	setWindSpeed(speed: number): void;
	shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number,
		p7: boolean, weaponHash: Hash, ownerPed: Handle, isAudible: boolean, isInvisible: boolean, speed: number): void;
	startSaveArray(p0: any, p1: number, arrayName: string): void;
	startSaveData(p0: any, p1: any, p2: boolean): void;
	startSaveStruct(p0: any, p1: number, structName: string): void;
	stringToInt(string: string, outInteger: number): number;
	tan(p0: number): number;
	terminateAllScriptsWithThisName(scriptName: string): void;
	usingMissionCreator(toggle: boolean): void;
}

interface LegacyGameGraphicsMp {
	addDecal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number,
		p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: boolean,
		p18: boolean, p19: boolean): number;
	addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): void;
	beginTextComponent(componentType: string): void;
	callScaleformMovieFunctionFloatParams(scaleform: number, functionName: string, param1: number, param2: number,
		param3: number, param4: number, param5: number): void;
	callScaleformMovieFunctionMixedParams(scaleform: number, functionName: string, floatParam1: number,
		floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string,
		stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;
	callScaleformMovieFunctionStringParams(scaleform: number, functionName: string, param1: string, param2: string,
		param3: string, param4: string, param5: string): void;
	callScaleformMovieMethod(scaleform: number, method: string): void;
	createCheckpoint(type: number, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number,
		posZ2: number, radius: number, colorR: number, colorG: number, colorB: number, alpha: number, reserved: number): number;
	destroyTrackedPoint(point: Handle): void;
	disableVehicleDistantlights(toggle: boolean): void;
	doesParticleFxLoopedExist(ptfxHandle: number): boolean;
	drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number,
		alpha: number): void;
	drawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number,
		alpha: number): void;
	drawDebugCross(x: number, y: number, z: number, size: number, r: number, g: number, b: number, alpha: number): void;
	drawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number,
		alpha: number): void;
	drawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number,
		g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number): void;
	drawDebugSphere(x: number, y: number, z: number, radius: number, r: number, g: number, b: number, alpha: number): void;
	drawDebugText(text: string, x: number, y: number, z: number, r: number, g: number, b: number, alpha: number): void;
	drawDebugText2d(text: string, x: number, y: number, z: number, r: number, g: number, b: number, alpha: number): void;
	drawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number,
		range: number, intensity: number): void;
	drawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number,
		intensity: number, shadow: number): void;
	drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number,
		alpha: number): void;
	drawMarker(type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number,
		rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, colorR: number,
		colorG: number, colorB: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, p19: number,
		rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean): void;
	drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number,
		r: number, g: number, b: number, alpha: number): void;
	drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;
	drawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number,
		green: number, blue: number, alpha: number, p9: number): void;
	drawScaleformMovie3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number,
		rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: any): void;
	drawScaleformMovie3dNonAdditive(scaleform: number, posX: number, posY: number, posZ: number, rotX: number,
		rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number,
		p13: any): void;
	drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number,
		unk: boolean): void;
	drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number,
		alpha: number): void;
	drawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number,
		colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number,
		falloff: number): void;
	drawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number,
		colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number,
		radius: number, falloff: number, shadow: number): void;
	drawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, scaleX: number,
		scaleY: number,heading: number, colorR: number, colorG: number, colorB: number, alpha: number): void;
	drawText(text: string, position: Array3d | Array2d,
		data?: {
			font: number,
			color: RGBA,
			scale: Array2d,
			outline: boolean,
			centre?: boolean,
		}
	): void;
	drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, r: number, g: number,
		b: number, alpha: number): void;
	enableAlienBloodVfx(toggle: boolean): void;
	enableClownBloodVfx(toggle: boolean): void;
	enableMovieSubtitles(toggle: boolean): void;
	enableLights(toggle: boolean): void;
	fadeDecalsInRange(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	getDecalWashLevel(decal: number): number;
	getSafeZoneSize(): number;
	getScreenActiveResolution(x: number, y: number): {
		x: number;
		y: number;
	};
	getScreenAspectRatio(b: boolean): number;
	getScreenEffectIsActive(effectName: string): number;
	getScreenResolution(x: number, y: number): {
		x: number;
		y: number;
	};
	getTextureResolution(textureDict: string, textureName: string): Vector3Mp;
	hasHudScaleformLoaded(componentIndex: RageEnums.HudComponent | number): boolean;
	hasNamedScaleformMovieLoaded(scaleformName: string): boolean;
	hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): boolean;
	hasScaleformMovieLoaded(scaleformHandle: number): boolean;
	hasStreamedTextureDictLoaded(textureDict: string): boolean;
	isDecalAlive(decal: number):boolean;
	isTrackedPointVisible(point: Handle): boolean;
	loadMovieMeshSet(movieMeshSetName: string): number;
	loadTvChannel(tvChannel: Hash): boolean;
	moveVehicleDecals(p0: any, p1: any): void;
	notify(text: string): void;
	pushScaleformMovieFunction(scaleform: number, functionName: string): boolean;
	pushScaleformMovieFunctionFromHudComponent(componentIndex: RageEnums.HudComponent | number, functionName: string): boolean;
	pushScaleformMovieFunctionN(functionName: string): boolean;
	popScaleformMovieFunctionVoid(): void;
	pushScaleformMovieFunctionParameterBool(value: boolean): void;
	pushScaleformMovieFunctionParameterFloat(value: number): void;
	pushScaleformMovieFunctionParameterInt(value: number): void;
	pushScaleformMovieFunctionParameterString(value: string): void;
	releaseMovieMeshSet(movieMeshSet: number): void;
	removeDecal(decal: number): void;
	removeDecalsFromObject(obj: Handle): void;
	removeDecalsFromObjectFacing(obj: Handle, x: number, y: number, z: number): void;
	removeDecalsInRange(x: number, y: number, z: number, range: number): void;
	removeParticleFx(ptfxHandle: number, p1: boolean): void;
	removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
	requestHudScaleform(componentIndex: RageEnums.HudComponent | number): void;
	requestScaleformMovie(scaleformName: string): number;
	requestScaleformMovie3(scaleformName: string): number;
	requestScaleformMovieInstance(scaleformName: string): number;
	requestStreamedTextureDict(textureDict: string, p1: boolean): void;
	screen2dToWorld3d(vector2: Vector3Mp): Vector3Mp;
	set2dLayer(layer: number): void;
	setBlackout(enable: boolean): void;
	setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;
	setDrawOrigin(x: number, y: number, z: number, p3: any): void;
	setFarShadowsSuppressed(toggle: boolean): void;
	setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
	setForcePedFootstepsTracks(toggle: boolean): void;
	setForceVehicleTrails(toggle: boolean): void;
	setFrozenRenderingDisabled(enabled: boolean): void;
	setNightvision(toggle: boolean): void;
	setNoiseoveride(toggle: boolean): void;
	setNoisinessoveride(value: number): void;
	setParticleFxBloodScale(p0: boolean): void;
	setParticleFxCamInsideNonplayerVehicle(p0: any, p1: boolean): void;
	setParticleFxCamInsideVehicle(p0: boolean): void;
	setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
	setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;
	setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: boolean): void;
	setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number,
		rotZ: number): void;
	setParticleFxLoopedRange(ptfxHandle: number, range: number): void;
	setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
	setParticleFxNonLoopedAlpha(alpha: number): void;
	setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
	setParticleFxShootoutBoat(p0: any): void;
	setPtfxAssetNextCall(name: string): void;
	setPtfxAssetOldToNew(oldAsset: string, newAsset: string): void;
	setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): number;
	setScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;
	setScreenDrawPosition(x: number, y: number): void;
	setSeethrough(toggle: boolean): void;
	setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
	setTimecycleModifier(modifierName: string): void;
	setTimecycleModifierStrength(strength: number): void;
	setTrackedPointInfo(point: Handle, x: number, y: number, z: number, radius: number): void;
	setTransitionTimecycleModifier(modifierName: string, transition: number): void;
	setTvAudioFrontend(toggle: boolean): void;
	setTvChannel(channel: number): void;
	setTvVolume(volume: number): void;
	sittingTv(scaleform: number): string;
	startParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number,
		zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): number;
	startParticleFxLoopedOnEntity(effectName: string, entity: Handle, xOffset: number, yOffset: number,
		zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean,
		zAxis: boolean): number;
	startParticleFxLoopedOnEntity2(effectName: string, entity: Handle, xOffset: number, yOffset: number, zOffset: number,
		xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
	startParticleFxLoopedOnEntityBone(effectName: string, entity: Handle, xOffset: number, yOffset: number,
		zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean,
		yAxis: boolean, zAxis: boolean): number;
	startParticleFxLoopedOnEntityBone2(effectName: string, entity: Handle, xOffset: number, yOffset: number,
		zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean,
		yAxis: boolean, zAxis: boolean): number;
	startParticleFxLoopedOnPedBone(effectName: string, ped: Handle, xOffset: number, yOffset: number, zOffset: number,
		xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean,
		zAxis: boolean): number;
	startParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number,
		yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): boolean;
	startParticleFxNonLoopedAtCoord2(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number,
		yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): boolean;
	startParticleFxNonLoopedOnEntity(effectName: string, entity: Handle, offsetX: number, offsetY: number,
		offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean,
		axisZ: boolean): boolean;
	startParticleFxNonLoopedOnEntity2(effectName: string, entity: Handle, xOffset: number, yOffset: number,
		zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean,
		yAxis: boolean, zAxis: boolean): boolean;
	startParticleFxNonLoopedOnPedBone(effectName: string, ped: Handle, offsetX: number, offsetY: number, offsetZ: number,
		rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean,
		axisZ: boolean): boolean;
	startParticleFxNonLoopedOnPedBone2(effectName: string, ped: Handle, offsetX: number, offsetY: number, offsetZ: number,
		rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean,
		axisZ: boolean): boolean;
	startScreenEffect(effectName: string, duration: number, looped: boolean): void;
	stopParticleFxLooped(ptfxHandle: number, p1: boolean): void;
	stopScreenEffect(effectName: string): void;
	transitionFromBlurred(transitionTime: number): boolean;
	transitionToBlurred(transitionTime: number): boolean;
	washDecalsInRange(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	world3dToScreen2d(worldX: number, worldY: number, worldZ: number): {
		x: number; y: number;
	};
	setLightsState(id: number, toggle: boolean): void;
}

interface LegacyGameInteriorMp {
	addPickupToInteriorRoomByName(pickup: PickupMp, roomName: string): void;
	areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
	capInterior(interiorId: number, toggle: boolean): void;
	disableInterior(interiorId: number, toggle: boolean): void;
	disableInteriorProp(interiorId: number, propName: string): void;
	enableInteriorProp(interiorId: number, propName: string): void;
	getInteriorAtCoords(x: number, y: number, z: number): number;
	getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
	getInteriorFromCollision(x: number, y: number, z: number): number;
	getInteriorGroupId(interiorId: number): number;
	getOffsetFromInteriorInWorldCoords(interiorId: number, x: number, y: number, z: number): Vector3Mp;
	hideMapObjectThisFrame(mapObjectHash: number): void;
	hideMapObjectThisFrame(mapObjectHash: string): void;
	isInteriorCapped(interiorId: number): boolean;
	isInteriorDisabled(interiorId: number): boolean;
	isInteriorPropEnabled(interiorId: number, propName: string): boolean;
	isInteriorReady(interiorId: number): boolean;
	isValidInterior(interiorId: number): boolean;
	refreshInterior(interiorId: number): void;
	unkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): number;
	unpinInterior(interiorId: number): void;
}

interface LegacyGameItemsetMp {
	addToItemset(itemset: number, p1: any): boolean;
	cleanItemset(itemset: number): void;
	createItemset(p0: boolean): number;
	destroyItemset(itemset: number): void;
	getIndexedItemInItemset(itemset: number, p1: any): any;
	getItemsetSize(itemset: number): number;
	isInItemset(itemset: number, p1: any): boolean;
	isItemsetValid(itemset: number): boolean;
	removeFromItemset(itemset: number, p1: any): void;
}

interface LegacyGameMobileMp {
	cellCamActivate(p0: boolean, p1: boolean): void;
	createMobilePhone(phoneType: number): void;
	getMobilePhonePosition(position: Vector3Mp): Vector3Mp;
	getMobilePhoneRenderId(renderId: number): number;
	getMobilePhoneRotation(rotation: Vector3Mp, p1: any): Vector3Mp;
	moveFinger(direction: number): void;
	scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
	setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
	setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: any): void;
	setMobilePhoneScale(scale: number): void;
	setPhoneLean(toggle: boolean): void;
}

interface LegacyGameObjectMp {
	addDoorToSystem(doorHash: Hash, modelHash: Hash, x: number, y: number, z: number, p5: number,
		p6: number, p7: number): void;
	createAmbientPickup(pickupHash: Hash, posX: number, posY: number, posZ: number, p4: number, value: number,
		modelHash: Hash, p7: boolean, p8: boolean): PickupMp;
	createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: Hash): void;
	/**
	 * Creates an object (prop) with the specified model centered at the specified position.
	 This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
	 *
	 * @param {Hash} modelHash - The model to spawn.
	 *
	 * @param {number} x - Spawn coordinate X component.
	 * @param {number} y - Spawn coordinate Y component.
	 * @param {number} z - Spawn coordinate Z component.
	 * @param {boolean} networkHandle - Whether to create a network object for the object. If false, the object exists only locally.
	 * @param {boolean} createHandle - Whether to register the object as pinned to the script host in the R\* network model.
	 * @param {boolean} dynamic - False to create a door archetype (archetype flag bit 26 set) as a door. Required to be set to true to create door models in network mode.
	 *
	 * @return {Handle} - A script handle (fwScriptGuid index) for the object, or `0` if the object failed to be created.
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Object::createObject|Object::createObject}
	 */
	createObject(modelHash: Hash, x: number, y: number, z: number, networkHandle: boolean,
		createHandle: boolean,dynamic: boolean): Handle;
	createObjectNoOffset(modelHash: Hash, x: number, y: number, z: number, networkHandle: boolean,
		createHandle: boolean, dynamic: boolean): Handle;
	createPickup(pickupHash: Hash, posX: number, posY: number, posZ: number, p4: number, value: number,
		p6: boolean, modelHash: Hash): PickupMp;
	createPickupRotate(pickupHash: Hash, posX: number, posY: number, posZ: number, rotX: number, rotY: number,
		rotZ: number, flag: number, amount: number, p9: any, p10: boolean, modelHash: Hash): PickupMp;
	createPortablePickup(pickupHash: Hash, x: number, y: number, z: number, placeOnGround: boolean,
		modelHash: Hash): PickupMp;
	createPortablePickup2(pickupHash: Hash, x: number, y: number, z: number, placeOnGround: boolean,
		modelHash: Hash): PickupMp;
	deleteObject(object: Handle): Handle;
	doesDoorExist(doorHash: Hash): boolean;
	doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: Hash, p5: boolean): boolean;
	doesPickupExist(p0: any): boolean;
	doesPickupObjectExist(p0: any): boolean;
	doorControl(doorHash: Hash, x: number, y: number, z: number, locked: boolean, p5: number, p6: number,
		p7: number): void;
	getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: Hash,
		isMissing: boolean, p6: boolean, p7: boolean): Handle;
	getObjectFragmentDamageHealth(p0: any, p1: boolean): number;
	getObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number,
		zOffset: number): Vector3Mp;
	getPickupCoords(p0: any): number;
	getSafePickupCoords(x: number, y: number, z: number, p3: any, p4: any): Vector3Mp;
	getStateOfClosestDoorOfType(type: Hash, x: number, y: number, z: number, locked: number, heading: number): {
		locked: number;
		heading: number;
	};
	hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: Hash,
		p5: any): boolean;
	hasPickupBeenCollected(p0: any): boolean;
	highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
	isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
	isDoorClosed(door: Hash): boolean;
	isGarageEmpty(garage: any, p1: boolean, p2: number): boolean;
	isObjectNearPoint(objectHash: Hash, x: number, y: number, z: number, range: number): boolean;
	isPickupWithinRadius(pickupHash: Hash, x: number, y: number, z: number, radius: number): boolean;
	isPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number,
		p8: number, p9: number, p10: boolean, p11: boolean): boolean;
	removeAllPickupsOfType(p0: any): void;
	removeDoorFromSystem(doorHash: Hash): void;
	removePickup(pickup: PickupMp): void;
	setDoorAccelerationLimit(doorHash: Hash, limit: number, p2: boolean, p3: boolean): void;
	setDoorAjarAngle(doorHash: Hash, ajar: number, p2: boolean, p3: boolean): void;
	setForceObjectThisFrame(p0: any, p1: any, p2: any, p3: any): void;
	setPickupRegenerationTime(p0: any, p1: any): void;
	setStateOfClosestDoorOfType(type: Hash, x: number, y: number, z: number, locked: boolean, heading: number,
		p6: boolean): void;
	setTeamPickupObject(p0: any, p1: any, p2: any): void;
	trackObjectVisibility(p0: any): void;
}

interface LegacyGamePathfindMp {
	addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
		p7: boolean, p8: any): void;
	addNavmeshRequiredRegion(p0: number, p1: number, p2: number): void;
	calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	disableNavmeshInArea(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
	generateDirectionsToCoord(x: number, y: number, z: number, p3: any, p4: number, vehicle: Handle, p6: number): {
		p4: number;
		vehicle: Handle;
		p6: number;
	};
	getClosestMajorVehicleNode(x: number, y: number, z: number, outPosition: Vector3Mp, unknown1: number,
		unknown2: number): Vector3Mp;
	getClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, p7: number,
		p8: number, p9: number, p10: boolean): boolean;
	getClosestVehicleNode(x: number, y: number, z: number, outPosition: Vector3Mp, nodeType: number, p5: number,
		p6: number): Vector3Mp;
	getClosestVehicleNodeWithHeading(x: number, y: number, z: number, outPosition: Vector3Mp, outHeading: number,
		nodeType: number, p6: number, p7: number): {
			outPosition: Vector3Mp;
			outHeading: number;
	};
	getIsSlowRoadFlag(nodeID: number): boolean;
	getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3Mp,
		unknown1: any, unknown2: any, unknown3: any): Vector3Mp;
	getNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number,
		desiredZ: number, nthClosest: number, outPosition: Vector3Mp, outHeading: number, nodetype: number, p10: any,
		p11: any): {
			outPosition: Vector3Mp;
			outHeading: number;
	};
	getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
	getNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3Mp,
		outHeading: number, p6: any, p7: number, p8: number): Vector3Mp;
	getNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3Mp,
		heading: number, unknown1: any, unknown2: number, unknown3: number, unknown4: number): {
			outPosition: Vector3Mp;
			heading: number;
			unknown1: any;
	};
	getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean,
		outPosition: Vector3Mp, heading: number): {
			outPosition: Vector3Mp;
			outHeading: number;
	};
	getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, outPosition: Vector3Mp, flags: number): Vector3Mp;
	getStreetNameAtCoord(x: number, y: number, z: number, streetName: number, crossingRoad: number): {
		streetName: number;
		crossingRoad: number;
	};
	getSupportsGpsRouteFlag(nodeID: number): boolean;
	getVehicleNodePosition(nodeId: number, outPosition: Vector3Mp): Vector3Mp;
	getVehicleNodeProperties(x: number, y: number, z: number, density: number, flags: number):{
		density: number;
		flags: number;
	};
	isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isPointOnRoad(x: number, y: number, z: number, vehicle: Handle): boolean;
	isVehicleNodeIdValid(vehicleNodeId: number): boolean;
	loadAllPathNodes(keepInMemory: boolean): boolean;
	removeNavmeshBlockingObject(p0: any): void;
	setGpsDisabledZone(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
	setIgnoreNoGpsFlag(ignore: boolean): void;
	setPedPathsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
	setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean): void;
	setRoadsBackToOriginal(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
	setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number,
		p6: number): void;
	setRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number,
		unknown1: boolean, unknown2: boolean, unknown3: boolean): void;
	setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: boolean,
		unknown2: boolean): void;
	updateNavmeshBlockingObject(p0: any, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
		p7: number, p8: any): void;
}

interface LegacyGamePedMp {
	addRelationshipGroup(name: string, groupHash: Hash): Hash;
	addScenarioBlockingArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean,
		p7: boolean, p8: boolean, p9: boolean): void;
	attachSynchronizedSceneToEntity(sceneId: number, entity: Handle, boneIndexId: number): void;
	canCreateRandomPed(unk: boolean): boolean;
	clearPedAlternateWalkAnim(p0: any, p1: number): void;
	clearRelationshipBetweenGroups(relationship: number, group1: Hash, group2: Hash): void;
	createGroup(unused: number): number;
	createNmMessage(startImmediately: boolean, messageId: number): void;
	createPed(pedType: number, modelHash: Hash, x: number, y: number, z: number, heading: number,
		networkHandle: boolean, pedHandle: boolean): Handle;
	createRandomPed(posX: number, posY: number, posZ: number): Handle;
	createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;
	detachSynchronizedScene(sceneId: number): void;
	disposeSynchronizedScene(scene: number): void;
	doesGroupExist(groupId: number): boolean;
	getAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number,
		yRot: number, zRot: number, p8: number, p9: number): Vector3Mp;
	getAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number,
		yRot: number, zRot: number, p8: number, p9: number): Vector3Mp;
	getClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, outPed: Handle, p7: boolean,
		p8: boolean, pedType: number): Handle;
	getFirstParentIdForPedType(type: number): number;
	getGroupSize(groupId: number, unknown: any, sizeInMembers: number): number;
	getNumHeadOverlayValues(overlayId: number): number;
	getNumParentPedsOfType(type: number): number;
	getPeadheadshotTxdString(handle: number): string;
	getPedAsGroupLeader(groupId: number): Handle;
	getPedAsGroupMember(groupId: number, memberNumber: number): Handle;
	getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number,
		pedType: number): Handle;
	getRelationshipBetweenGroups(group1: Hash, group2: Hash): number;
	getSynchronizedScenePhase(sceneId: number): number;
	getSynchronizedSceneRate(sceneId: number): number;
	getTattooZone(collection: Hash, overlay: Hash): number;
	hasActionModeAssetLoaded(asset: string): boolean;
	hasPedReceivedEvent(p0: any, p1: any): boolean;
	hasStealthModeAssetLoaded(asset: string): boolean;
	isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
	isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean,
		p7: boolean): boolean;
	isAValidBlushColor(colorId: number): boolean;
	isAValidHairColor(colorId: number): boolean;
	isAValidLipstickColor(colorId: number): boolean;
	isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isPedheadshotReady(handle: number): boolean;
	isPedheadshotValid(handle: number): number;
	isPedRespondingToEvent(p0: any, p1: any): boolean;
	isSynchronizedSceneLooped(sceneId: number): boolean;
	isSynchronizedSceneRunning(sceneId: number): boolean;
	removeActionModeAsset(asset: string): void;
	removeGroup(groupId: number): void;
	removeRelationshipGroup(groupHash: Hash): void;
	removeScenarioBlockingArea(p0: any, p1: boolean): void;
	removeStealthModeAsset(asset: string): void;
	requestActionModeAsset(asset: string): void;
	requestStealthModeAsset(asset: string): void;
	resetGroupFormationDefaultSpacing(groupHandle: number): void;
	setAiMeleeWeaponDamageModifier(modifier: number): void;
	setAiWeaponDamageModifier(value: number): void;
	setCreateRandomCops(toggle: boolean): void;
	setCreateRandomCopsNotOnScenarios(toggle: boolean): void;
	setCreateRandomCopsOnScenarios(toggle: boolean): void;
	setGroupFormation(groupId: number, formationType: number): void;
	setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
	setGroupSeparationRange(groundHandle: number, separationRange: number): void;
	setPedAlternateWalkAnim(p0: any, p1: any, p2: any, p3: number, p4: boolean): void;
	setPedDensityMultiplierThisFrame(multiplier: number): void;
	setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	setPedReserveParachuteTintIndex(p0: any, p1: any): void;
	setPedToRagdollWithFall(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any,
		p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any): boolean;
	setRelationshipBetweenGroups(relationship: number, group1: Hash, group2: Hash): void;
	setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
	setScenarioPedsSpawnInSphereArea(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;
	setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
	setSynchronizedSceneLooped(sceneId: number, toggle: boolean): void;
	setSynchronizedSceneOrigin(sceneId: number, x: number, y: number, z: number, roll: number, pitch: number,
		yaw: number, p7: boolean): void;
	setSynchronizedScenePhase(sceneId: number, phase: number): void;
	setSynchronizedSceneRate(sceneId: number, rate: number): void;
	setTimeExclusiveDisplayTexture(p0: any, p1: boolean): void;
}

interface LegacyGamePlayerMp {
	areFlashingStarsAboutToDrop(): boolean;
	areStarsGreyedOut(): boolean;
	canStartMission(): boolean;
	disableFiring(toggle: boolean): void;
	disableVehicleRewards(): void;
	displaySystemSigninUi(unk: boolean): void;
	enableSpecialAbility(toggle: boolean): void;
	forceCleanup(cleanupFlags: number): void;
	forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
	forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
	getEntityIsFreeAimingAt(entity: Handle): boolean;
	getTargetEntity(entity: Handle): boolean;
	getTimeSinceDroveAgainstTraffic(): number;
	getTimeSinceDroveOnPavement(): number;
	getTimeSinceHitPed(): number;
	getTimeSinceHitVehicle(): number;
	getWantedLevelRadius(): boolean;
	getWantedLevelThreshold(wantedLevel: number): number;
	giveAchievementTo(achievement: number): boolean;
	hasAchievementBeenPassed(achievement: number): boolean;
	hasForceCleanupOccurred(cleanupFlags: number): boolean;
	intToParticipantindex(value: number): number;
	intToindex(value: number): Handle;
	isFreeAiming(): boolean;
	isFreeAimingAtEntity(entity: Handle): boolean;
	isTargettingEntity(entity: Handle): boolean;
	isSpecialAbilityActive(): boolean;
	isSpecialAbilityEnabled(): boolean;
	isSpecialAbilityMeterFull(): boolean;
	isSpecialAbilityUnlocked(playerModel: Hash): boolean;
	playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
		p7: number): void;
	reportCrime(crimeType: number, wantedLvlThresh: number): void;
	reserveEntityExplodesOnHighExplosionCombo(p1: number): void;
	resetWantedLevelDifficulty(): void;
	restoreStamina(p1: number): void;
	setAirDragMultiplierForsVehicle(multiplier: number): void;
	setAllRandomPedsFlee(toggle: boolean): void;
	setAllRandomPedsFleeThisFrame(): void;
	setAreasGeneratorOrientation(): void;
	setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;
	setCanDoDriveBy(toggle: boolean): void;
	setDisableAmbientMeleeMove(toggle: boolean): void;
	setDispatchCopsFor(toggle: boolean): void;
	setHealthRechargeMultiplier(regenRate: number): void;
	setHudAnimStopLevel(toggle: boolean): void;
	setIgnoreLowPriorityShockingEvents(toggle: boolean): void;
	setInvincible(toggle: boolean): void;
	setMaxWantedLevel(maxWantedLevel: number): void;
	setMeleeWeaponDefenseModifier(modifier: number): void;
	setClothLockCounter(value: number): void;
	setClothPackageIndex(index: number): void;
	setTargetingMode(targetMode: number): void;
	setPoliceRadarBlips(toggle: boolean): void;
	setRunSprintMultiplierFor(multiplier: number): void;
	setSpecialAbilityMultiplier(multiplier: number): void;
	setSwimMultiplierFor(multiplier: number): void;
	setWantedLevelDifficulty(difficulty: number): void;
	setWantedLevelMultiplier(multiplier: number): void;
	simulateInputGait(amount: number,gaitType: number,speed: number,p4: boolean,p5: boolean): void;
	specialAbilityChargeAbsolute(p1: number,p2: boolean): void;
	specialAbilityChargeContinuous(p1: boolean): void;
	specialAbilityChargeLarge(p1: boolean,p2: boolean): void;
	specialAbilityChargeMedium(p1: boolean,p2: boolean): void;
	specialAbilityChargeNormalized(normalizedValue: number,p2: boolean): void;
	specialAbilityChargeSmall(p1: boolean, p2: boolean): void;
	specialAbilityDeactivate(): void;
	specialAbilityDeactivateFast(): void;
	specialAbilityDepleteMeter(p1: boolean): void;
	specialAbilityFillMeter(p1: boolean): void;
	specialAbilityLock(playerModel: Hash): void;
	specialAbilityReset(): void;
	specialAbilityUnlock(playerModel: Hash): void;
	startFiringAmnesty(duration: number): void;
	startTeleport(x: number,y: number,z: number,heading: number,p5: boolean,p6: boolean,p7: boolean): void;
}

interface LegacyGameRecorderMp {
	isRecording(): boolean;
	start(mode: number): void;
	stop(save: boolean): void;
}

interface LegacyGameRopeMp {
	addRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number,
		maxLength: number, minLength: number, p10: number, p11: boolean, p12: boolean, rigid: boolean, p14: number,
		breakWhenShot: boolean, unkPtr: any): Handle;
	applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number,
		impulse: number): void;
	attachEntitiesToRope(rope: Handle, ent1: Handle, ent2: Handle, ent1_x: number, ent1_y: number, ent1_z: number,
		ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: boolean, p11: boolean, p12: any,
		p13: any): void;
	attachRopeToEntity(rope: Handle, entity: Handle, x: number, y: number, z: number, p5: boolean): void;
	breakEntityGlass(p0: any, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number,
		p8: number, p9: any, p10: boolean): void;
	deleteChildRope(rope: Handle): any;
	deleteRope(rope: Handle): void;
	detachRopeFromEntity(rope: Handle, entity: Handle): void;
	doesRopeExist(rope: Handle): Handle;
	getCgoffset(rope: Handle): Vector3Mp;
	getRopeLastVertexCoord(rope: Handle): void;
	getRopeLength(rope: Handle): number;
	getRopeVertexCoord(rope: Handle, vertex: number): any;
	getRopeVertexCount(rope: Handle): number;
	loadRopeData(rope: Handle, rope_preset: string): any;
	pinRopeVertex(rope: Handle, vertex: number, x: number, y: number, z: number): void;
	ropeConvertToSimple(rope: Handle): void;
	ropeDrawShadowEnabled(rope: Handle, toggle: boolean): Handle;
	ropeForceLength(rope: Handle, length: number): any;
	ropeResetLength(rope: Handle, length: boolean): any;
	ropeSetUpdatePinverts(rope: Handle): void;
	setCgAtBoundcenter(rope: Handle): void;
	setCgoffset(rope: Handle, x: number, y: number, z: number): void;
	setDamping(rope: Handle, vertex: number, value: number): void;
	setDisableBreaking(rope: Handle, enabled: boolean): void;
	setDisableFragDamage(object: Handle, toggle: boolean): void;
	startRopeUnwindingFront(rope: Handle): void;
	startRopeWinding(rope: Handle): void;
	stopRopeUnwindingFront(rope: Handle): void;
	stopRopeWinding(rope: Handle): void;
	unpinRopeVertex(rope: Handle, vertex: number): any;
}

interface LegacyGameScriptMp {
	doesScriptExist(scriptName: string): boolean;
	/**
	 * Event Group Type:
	 *
	 * **0** - CEventGroupScriptAI
	 *
	 * **1** - CEventGroupScriptNetwork
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Script::getEventAtIndex|Script::getEventAtIndex}
	 * */
	getEventAtIndex(eventGroup: number, eventIndex: number): number;
	/**
	 * Event Group Type:
	 *
	 * **0** - CEventGroupScriptAI
	 *
	 * **1** - CEventGroupScriptNetwork
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Script::getEventData|Script::getEventData}
	 * */
	getEventdata(eventGroup: number, eventIndex: number, eventData: number, eventDataSize: number): number;
	/**
	 * Event Group Type:
	 *
	 * **0** - CEventGroupScriptAI
	 *
	 * **1** - CEventGroupScriptNetwork
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Script::getEventData|Script::getEventData}
	 * */
	getEventExists(eventGroup: number, eventIndex: number): boolean;
	/**
	 * Event Group Type:
	 *
	 * **0** - CEventGroupScriptAI
	 *
	 * **1** - CEventGroupScriptNetwork
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Script::getNumberOfEvents|Script::getNumberOfEvents}
	 * */
	getNumberOfEvents(eventGroup: number): number;
	getNumberOfInstancesOfStreamedScript(scriptHash: Hash): number;
	getThreadName(threadId: number): string;
	hasScriptLoaded(scriptName: string): boolean;
	hasStreamedScriptLoaded(scriptHash: Hash): boolean;
	isStreamedScriptRunning(scriptHash: Hash): boolean;
	isThreadActive(threadId: number): boolean;
	/**
	 * @param scriptName - Script Name
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Script::requestScript|Script::requestScript}
	 */
	requestScript(scriptName: RageEnums.Scripts | string): void;
	requestStreamedScript(scriptHash: Hash): void;
	setNoLoadingScreen(toggle: boolean): void;
	setScriptAsNoLongerNeeded(scriptName: string): void;
	setStreamedScriptAsNoLongerNeeded(scriptHash: Hash): void;
	terminateThread(threadId: number): void;
	triggerScriptEvent(p0: number, argsStruct: Vector3Mp, argsStructSize: number, bitset: number): Vector3Mp;
}

interface LegacyGameStatsMp {
	leaderboards2ReadByHandle(p0: any, p1: any): boolean;
	leaderboards2ReadByRadius(p0: any, p1: any, p2: any): boolean;
	leaderboards2ReadByRank(p0: any, p1: any, p2: any): boolean;
	leaderboards2ReadByRow(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): boolean;
	leaderboards2ReadByScoreFloat(p0: any, p1: number, p2: any): boolean;
	leaderboards2ReadByScoreInt(p0: any, p1: any, p2: any): boolean;
	leaderboards2ReadFriendsByRow(p0: any, p1: any, p2: any, p3: boolean, p4: any, p5: any): boolean;
	leaderboards2WriteData(p0: any): boolean;
	leaderboardsCacheDataRow(p0: any): boolean;
	leaderboardsGetCacheDataRow(p0: any, p1: any, p2: any): boolean;
	leaderboardsGetCacheExists(p0: any): boolean;
	leaderboardsGetCacheTime(p0: any): any;
	leaderboardsGetColumnId(p0: any, p1: any, p2: any): any;
	leaderboardsGetColumnType(p0: any, p1: any, p2: any): any;
	leaderboardsGetNumberOfColumns(p0: any, p1: any): any;
	leaderboardsReadClear(p0: any, p1: any, p2: any): any;
	leaderboardsReadPending(p0: any, p1: any, p2: any): boolean;
	leaderboardsReadSuccessful(p0: any, p1: any, p2: any): boolean;
	playstatsAwardXp(p0: any, p1: any, p2: any): void;
	playstatsCheatApplied(cheat: string): void;
	playstatsClothChange(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	playstatsFriendActivity(p0: any, p1: any): void;
	playstatsMatchStarted(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
	playstatsMissionCheckpoint(p0: any, p1: any, p2: any, p3: any): void;
	playstatsMissionOver(p0: any, p1: any, p2: any, p3: boolean, p4: boolean, p5: boolean): void;
	playstatsMissionStarted(p0: any, p1: any, p2: any, p3: boolean): void;
	playstatsNpcInvite(p0: any): void;
	playstatsOddjobDone(p0: any, p1: any, p2: any): void;
	playstatsPropChange(p0: any, p1: any, p2: any, p3: any): void;
	playstatsRaceCheckpoint(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	playstatsRankUp(p0: any): void;
	playstatsShopItem(p0: any, p1: any, p2: any, p3: any, p4: any): void;
	playstatsWebsiteVisited(scaleformHash: Hash, p1: number): void;
	statClearSlotForReload(statSlot: number): any;
	statDeleteSlot(p0: any): any;
	statGetBool(statHash: Hash, outValue: boolean, p2: any): boolean;
	statGetBoolMasked(statName: Hash, mask: number, p2: number): boolean;
	statGetDate(statHash: Hash, p1: any, p2: any, p3: any): boolean;
	statGetFloat(statHash: Hash, outValue: number, p2: any): number;
	statGetInt(statHash: Hash, outValue: number, p2: number): number;
	statGetLicensePlate(statName: Hash): string;
	statGetMaskedInt(p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
	statGetNumberOfDays(statName: Hash): number;
	statGetNumberOfHours(statName: Hash): number;
	statGetNumberOfMinutes(statName: Hash): number;
	statGetNumberOfSeconds(statName: Hash): number;
	statGetPos(p0: any, p1: any, p2: any, p3: any, p4: any): boolean;
	statGetString(statHash: Hash, p1: number): string;
	statGetUserId(p0: any): string;
	statIncrement(statName: Hash, value: number): void;
	statLoad(p0: number): boolean;
	statLoadPending(p0: any): boolean;
	statSave(p0: number, p1: boolean, p2: number): boolean;
	statSetBool(statName: Hash, value: boolean, save: boolean): boolean;
	statSetBoolMasked(statName: Hash, value: boolean, mask: number, save: boolean): boolean;
	statSetCurrentPosixTime(statName: Hash, p1: boolean): boolean;
	statSetDate(statName: Hash,
		value: {
			year: number;
			month: number;
			day: number;
			hour: number;
			minute: number;
			second: number;
			milisecond: number;
		},
		numFields: number, save: boolean): void;
	statSetFloat(statName: Hash, value: number, save: boolean): boolean;
	statSetGxtLabel(statName: Hash, value: string, save: boolean): boolean;
	statSetInt(statName: Hash, value: number, save: boolean): boolean;
	statSetLicensePlate(statName: Hash, str: string): boolean;
	statSetMaskedInt(statName: Hash, p1: any, p2: any, p3: number, save: boolean): boolean;
	statSetPos(statName: Hash, x: number, y: number, z: number, save: boolean): boolean;
	statSetProfileSetting(profileSetting: number, value: number): void;
	statSetString(statName: Hash, value: string, save: boolean): boolean;
	statSetUserId(statName: Hash, value: string, save: boolean): boolean;
	statSlotIsLoaded(p0: any): boolean;
}

interface LegacyGameStreamingMp {
	doesAnimDictExist(animDict: string): boolean;
	forceStreamingUpdate(): boolean;
	getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	hasAnimDictLoaded(animDict: string): boolean;
	hasAnimSetLoaded(animSet: string): boolean;
	hasClipSetLoaded(clipSet: string): boolean;
	hasCollisionForModelLoaded(model: Hash): boolean;
	hasModelLoaded(model: Hash): boolean;
	hasNamedPtfxAssetLoaded(fxName: string): boolean;
	isIplActive(iplName: string): boolean;
	isModelAVehicle(model: Hash): boolean;
	isModelInCdimage(model: Hash): boolean;
	isModelValid(model: Hash): boolean;
	loadScene(x: number, y: number, z: number): void;
	newLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: any): boolean;
	newLoadSceneStartSafe(p0: number, p1: number, p2: number, p3: number, p4: any): boolean;
	prefetchSrl(p0: any): void;
	removeAnimDict(animDict: string): void;
	removeAnimSet(animSet: string): void;
	removeClipSet(clipSet: string): void;
	removeIpl(iplName: string): void;
	removeNamedPtfxAsset(fxName: string): void;
	requestAdditionalCollisionAtCoord(p0: number, p1: number, p2: number): void;
	requestAnimDict(animDict: string): void;
	requestAnimSet(animSet: string): void;
	requestClipSet(clipSet: string): void;
	requestCollisionAtCoord(x: number, y: number, z: number): any;
	requestCollisionForModel(model: Hash): void;
	requestIpl(iplName: string): void;
	requestModel(model: Hash, cb?: Function): void;
	requestModel2(model: Hash): void;
	requestNamedPtfxAsset(fxName: string): void;
	setDitchPoliceModels(toggle: boolean): void;
	setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
	setGamePausesForStreaming(toggle: boolean): void;
	setHdArea(x: number, y: number, z: number, ground: number): void;
	setInteriorActive(interiorID: number, toggle: boolean): void;
	setModelAsNoLongerNeeded(model: Hash): void;
	setPedPopulationBudget(p0: number): void;
	setPlayerSwitchLocation(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
		p7: number, p8: any): void;
	setReducePedModelBudget(toggle: boolean): void;
	setReduceVehicleModelBudget(toggle: boolean): void;
	setSrlTime(p0: number): void;
	setStreaming(toggle: boolean): void;
	setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: any, p5: any): any;
	setVehiclePopulationBudget(p0: number): void;
	startPlayerSwitch(from: Handle, to: Handle, flags: number, switchType: number): void;
}

interface LegacyGameSystemMp {
	ceil(value: number): number;
	cos(value: number): number;
	floor(value: number): number;
	pow(base: number, exponent: number): number;
	round(value: number): number;
	settimera(value: number): void;
	settimerb(value: number): void;
	shiftLeft(value: number, bitShift: number): number;
	shiftRight(value: number, bitShift: number): number;
	sin(value: number): number;
	sqrt(value: number): number;
	startNewScript(scriptName: string, stackSize: number): number;
	startNewScriptWithArgs(scriptName: string, args: any, argCount: number, stackSize: number): number;
	startNewStreamedScript(scriptHash: Hash, stackSize: number): number;
	startNewStreamedScriptWithArgs(scriptHash: Hash, args: any, argCount: number, stackSize: number): number;
	toFloat(value: number): number;
	vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	vmag(p0: number, p1: number, p2: number): number;
	vmag2(p0: number, p1: number, p2: number): number;
}

interface LegacyGameTimeMp {
	addToClockTime(hour: number, minute: number, second: number): void;
	advanceClockTimeTo(hour: number, minute: number, second: number): void;
	getLocalTime(year: number, month: number, day: number, hour: number, minute: number, second: number): {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	};
	getLocalTimeGmt(year: number, month: number, day: number, hour: number, minute: number, second: number): {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	};
	getPosixTime(year: number, month: number, day: number, hour: number, minute: number, second: number): {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
	};
	pauseClock(toggle: boolean): void;
	setClockDate(day: number, month: number, year: number): void;
	setClockTime(hour: number, minute: number, second: number): void;

	// RAGE.MP extensions
	serverTickCount: number;
}

interface LegacyGameUiMp {
	activateFrontendMenu(menuhash: Hash, Toggle_Pause: boolean, p2: number): void;
	addBlipForCoord(x: number, y: number, z: number): BlipMp;
	addBlipForPickup(pickup: PickupMp): BlipMp;
	addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): BlipMp;
	addNextMessageToPreviousBriefs(p0: boolean): void;
	addTextComponentFloat(value: number, decimalPlaces: number): void;
	addTextComponentInteger(value: number): void;
	addTextComponentItemString(labelName: string): void;
	addTextComponentSubstringCash(cashAmount: number, p1: boolean): void;
	addTextComponentSubstringLocalized(gxtEntryHash: Hash): void;
	addTextComponentSubstringPlayerName(text: string): void;
	addTextComponentSubstringTime(timestamp: number, flags: number): void;
	addTextComponentSubstringWebsite(website: string): void;
	addTrevorRandomModifier(headDisplayId: number): boolean;
	beginTextCommandSetBlipName(gxtentry: string): void;
	clearAdditionalText(p0: number, p1: boolean): void;
	clearFloatingHelp(p0: any, p1: boolean): void;
	clearHelp(toggle: boolean): void;
	clearThisPrint(p0:string): void;
	displayAmmoThisFrame(display: boolean): void;
	displayAreaName(toggle: boolean): void;
	displayCash(toggle: boolean): void;
	displayHelpTextFromStringLabel(p0: any, loop: boolean, beep: boolean, shape: number): void;
	displayHelpTextThisFrame(message: string, p1: boolean): void;
	displayHud(toggle: boolean): void;
	displayRadar(Toggle: boolean): any;
	doesTextBlockExist(gxt: string): boolean;
	doesTextLabelExist(gxt: string): boolean;
	drawNotification(blink: boolean, p1: boolean): number;
	drawNotification2(blink: boolean, p1: boolean): number;
	drawNotification3(blink: boolean, p1: boolean): number;
	drawNotification4(blink: boolean, p1: boolean): number;
	drawSubtitleTimed(time: number, p1: boolean): void;
	drawText(x: number, y: number): void;
	enableDeathbloodSeethrough(p0: boolean): void;
	flashAbilityBar(p0: any): void;
	flashWantedDisplay(p0: boolean): any;
	getBlipInfoIdCoord(p0: number): Vector3Mp;
	getHudColour(hudIndex: number, r: number, g: number, b: number, a: number): {
		hudIndex: number;
		r: number;
		g: number;
		b: number;
		a: number;
	};
	getHudComponentPosition(componentIndex: RageEnums.HudComponent | number): number;
	getLabelText(labelName: string): string;
	getLengthOfLiteralString(string: string): number;
	getLengthOfStringWithThisTextLabel(gxt: string): number;
	getNamedRendertargetRenderId(p0: string): any;
	getStreetNameFromHashKey(hash: Hash): string;
	getTextScaleHeight(size: number, font: number): number;
	getTextScreenWidth(p0: boolean): number;
	getTextSubstring(text: string, position: number, length: number): string;
	getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;
	getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;
	hasAdditionalTextLoaded(slot: number): boolean;
	hasHeadDisplayLoaded(headDisplayId: number): boolean;
	hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;
	hideHudComponentThisFrame(componentIndex: RageEnums.HudComponent | number): void;
	hideScriptedHudComponentThisFrame(componentIndex: RageEnums.HudComponent | number): void;
	hideSpecialAbilityLockonOperation(p0: any, p1: boolean): void;
	isHudComponentActive(componentIndex: RageEnums.HudComponent | number): boolean;
	isMinimapAreaRevealed(x: number, y: number, radius: number): boolean;
	isNamedRendertargetLinked(hash: Hash): boolean;
	isNamedRendertargetRegistered(p0: string): boolean;
	isPauseMenuActive(): boolean;
	isScriptedHudComponentActive(componentIndex: RageEnums.HudComponent | number): boolean;
	isStreamingAdditionalText(p0: number): boolean;
	keyHudColour(p0: boolean, p1: any): void;
	linkNamedRendertarget(hash: Hash): void;
	lockMinimapAngle(angle: number): void;
	lockMinimapPosition(x: number, y: number): void;
	objectDecalToggle(hash: Hash): void;
	registerNamedRendertarget(p0: string, p1: boolean): boolean;
	releaseNamedRendertarget(p0: any): boolean;
	removeBlip(blip: Hash): void;
	removeNotification(notifactionId: number): void;
	requestAdditionalText(gxt: string, slot: number): void;
	requestAdditionalText2(gxt: string, slot: number): void;
	resetHudComponentValues(componentIndex: RageEnums.HudComponent | number): void;
	respondingAsTemp(p0: number): void;
	restartFrontendMenu(menuHash: Hash, p1: number): void;
	setAbilityBarValue(p0: number, p1: number): void;
	setCursorSprite(spriteId: number): void;
	setFrontendActive(active: boolean): void;
	setGpsFlags(p0: number, p1: number): void;
	setGpsFlashes(toggle: boolean): void;
	setHeadDisplayFlag(headDisplayId: number, sprite: number, toggle: boolean): void;
	setHeadDisplayString(headDisplayId: number, string: string): void;
	setHeadDisplayWanted(headDisplayId: number, wantedlvl: number): void;
	setHudColour(componentIndex: RageEnums.HudComponent | number, r: number, g: number, b: number, a: number): void;
	setHudComponentPosition(componentIndex: RageEnums.HudComponent | number, x: number, y: number): void;
	setLoadingPromptTextEntry(string: string): void;
	setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean): void;
	setMinimapBlockWaypoint(toggle: boolean): void;
	setMinimapComponent(p0: number, p1: boolean, p2: number): any;
	setMinimapRevealed(toggle: boolean): void;
	setMinimapVisible(toggle: boolean): void;
	setMissionName(p0: boolean, name: string): void;
	setMultiplayerHudCash(p0: number, p1: number): void;
	setNewWaypoint(x: number, y: number): void;
	setNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
	setNotificationMessage(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string,
		subject: string): number;
	setNotificationMessageClanTag(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string,
		subject: string, duration: number, clanTag: string): number;
	setNotificationMessageClanTag2(picName1: string, picName2: string, flash: boolean, iconType1: number, sender: string,
		subject: string, duration: number, clanTag: string, iconType2: number, p9: number): number;
	setNotificationTextEntry(type: string): void;
	setPauseMenuActive(toggle: boolean): void;
	setPlayerBlipPositionThisFrame(x: number, y: number): void;
	setPlayerCashChange(cash: number, bank: number): void;
	setRadarAsInteriorThisFrame(interior: Hash, x: number, y: number, z: number, p4: number): void;
	setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;
	setRadarZoom(zoomLevel: number): void;
	setRadarZoomLevelThisFrame(zoomLevel: number): void;
	setTextCentre(align: boolean): void;
	setTextChatUnk(p0: boolean): void;
	setTextColour(red:  number, green:  number, blue:  number, alpha:  number): void;
	setTextComponentFormat(inputType: string): void;
	setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
	setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
	setTextEntry(text: string): void;
	setTextEntry2(p0: string): void;
	setTextEntryForWidth(text: string): void;
	setTextFont(fontType: number): void;
	setTextGxtEntry(entry: string): void;
	setTextJustification(justifyType: number): void;
	setTextLeading(p0: boolean): void;
	setTextProportional(p0: boolean): void;
	setTextRenderId(renderId: number): void;
	setTextRightJustify(toggle: boolean): void;
	setTextScale(sizex: number, sizey: number): void;
	setTextWrap(start: number, end: number): void;
	setUseridsUihidden(p0: any, p1: any): boolean;
	setWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: boolean, p4: any,
		p5: any, p6: any, background: boolean): void;
	setWarningMessage2(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string,
		p4: boolean, p5: any, p6: any, p7: any, background: boolean): void;
	setWarningMessage3(entryHeader: string, entryLine1: string, instructionalKey: any, entryLine2: string,
		p4: any, p5: any, p6: any, p7: any, p8: any, p9: boolean): void;
	setWidescreenFormat(p0: any): void;
	showHudComponentThisFrame(componentIndex: RageEnums.HudComponent | number): void;
	showLoadingPrompt(busySpinnerType: number): void;
	showWeaponWheel(forcedShow: boolean): void;
	toggleStealthRadar(toggle: boolean): void;
}

interface LegacyGameUnkMp {
	getBroadcastFinishedLosSound(p0: boolean): void;
}

interface LegacyGameVehicleMp {
	addVehicleStuckCheckWithWarp(p0: any, p1: number, p2: any, p3: boolean, p4: boolean, p5: boolean, p6: any): void;
	createMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): Handle;
	createScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number,
		modelHash: Hash, p7: number, p8: number, p9: number, p10: number, p11: boolean, p12: boolean,
		p13: boolean, p14: boolean, p15: boolean, p16: number): number;
	createVehicle(modelHash: Hash, x: number, y: number, z: number, heading: number, networkHandle: boolean,
		vehiclehandle: boolean): any;
	deleteMissionTrain(train: Handle): Handle;
	deleteScriptVehicleGenerator(vehicleGenerator: number): void;
	disableVehicleWeapon(disabled: boolean, weaponHash: Hash, vehicle: Handle, owner: Handle): void;
	displayDistantVehicles(toggle: boolean): void;
	doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;
	doesVehicleExistWithDecorator(decorator: string): boolean;
	getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: Hash, flags: number): Handle;
	getCurrentPlaybackForVehicle(p0: any): any;
	getDisplayNameFromVehicleModel(modelHash: Hash): string;
	getNumModColors(p0: number, p1: boolean): number;
	getPositionInRecording(p0: any): number;
	getPositionOfVehicleRecordingAtTime(p0: any, p1: number, p2: any): number;
	getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number,
		p6: number): Handle;
	getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number,
		p6: number): Handle;
	getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: Hash, flags: number): Handle;
	getRandomVehicleModelInMemory(p0: boolean, modelHash: number, p2: number): {
		modelHash: number;
		p2: number;
	};
	getRotationOfVehicleRecordingAtTime(p0: any, p1: number, p2: any): number;
	getTimePositionInRecording(p0: any): number;
	getTotalDurationOfVehicleRecording(p0: any, p1: any): any;
	getTotalDurationOfVehicleRecordingId(p0: any): number;
	getVehicleClassFromName(modelHash: Hash): number;
	getVehicleClassMaxAcceleration(p0: any): number;
	getVehicleClassMaxAgility(p0: any): number;
	getVehicleClassMaxBraking(p0: any): number;
	getVehicleClassMaxTraction(p0: any): number;
	getVehicleModelAcceleration(modelHash: Hash): number;
	getVehicleModelMaxBraking(modelHash: Hash): number;
	getVehicleModelMaxNumberOfPassengers(modelHash: Hash): number;
	getVehicleModelMaxSpeed(modelHash: Hash): number;
	getVehicleModelMaxTraction(modelHash: Hash): number;
	getVehicleRecordingId(p0: any, p1: any): any;
	hasPreloadModsFinished(p0: any): boolean;
	hasVehicleAssetLoaded(vehicleAsset: number): boolean;
	hasVehicleRecordingBeenLoaded(p0: any, p1: any): boolean;
	isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;
	isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
	isPlaybackGoingOnForVehicle(p0: any): boolean;
	isPlaybackUsingAiGoingOnForVehicle(p0: any): boolean;
	isThisModelABicycle(model: Hash): boolean;
	isThisModelABike(model: Hash): boolean;
	isThisModelABoat(model: Hash): boolean;
	isThisModelACar(model: Hash): boolean;
	isThisModelAHeli(model: Hash): boolean;
	isThisModelAnEmergencyBoat(model: Hash): boolean;
	isThisModelAPlane(model: Hash): boolean;
	isThisModelAQuadbike(model: Hash): boolean;
	isThisModelATrain(model: Hash): boolean;
	isVehicleInGarageArea(garageName: string, vehicle: Handle): boolean;
	pausePlaybackRecordedVehicle(p0: any): void;
	preloadVehicleMod(p0: any, p1: any, p2: any): void;
	removeVehicleAsset(vehicleAsset: number): void;
	removeVehicleRecording(p0: any, p1: any): void;
	removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number,
		unk: any): void;
	removeVehicleStuckCheck(p0: any): void;
	requestVehicleAsset(vehicleHash: Hash, vehicleAsset: number): void;
	requestVehicleRecording(p0: any, p1: any): void;
	setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;
	setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number,
		p6: boolean, p7: boolean): void;
	setCargobobHookPosition(p0: any, p1: number, p2: number, p3: boolean): void;
	setFarDrawVehicles(toggle: boolean): void;
	setGarbageTrucks(toggle: boolean): any;
	setMissionTrainAsNoLongerNeeded(train: Handle, p1: boolean): Handle;
	setNumberOfParkedVehicles(value: number): any;
	setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setPlaybackSpeed(p0: any, speed: number): any;
	setPlaybackToUseAiTryToRevertBackLater(p0: any, p1: any, p2: any, p3: boolean): void;
	setRandomBoats(toggle: boolean): any;
	setRandomTrains(toggle: boolean): void;
	setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setScriptVehicleGenerator(vehicleGenerator: any, enabled: boolean): void;
	setVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setVehicleModelIsSuppressed(model: Hash, suppressed: boolean): void;
	setVehicleShootAtTarget(driver: Handle, entity: Handle, xTarget: number, yTarget: number, zTarget: number): void;
	skipTimeInPlaybackRecordedVehicle(p0: any, p1: number): void;
	skipToEndAndStopPlaybackRecordedVehicle(p0: any): void;
	startPlaybackRecordedVehicle(p0: any, p1: any, p2: any, p3: boolean): void;
	startPlaybackRecordedVehicleUsingAi(p0: any, p1: any, p2: any, p3: number, p4: any): void;
	startPlaybackRecordedVehicleWithFlags(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
	stopPlaybackRecordedVehicle(p0: any): void;
	switchTrainTrack(intersectionId: number, state: boolean): any;
	unpausePlaybackRecordedVehicle(p0: any): void;

	// RAGE.MP extensions
	repairOnExtraToggle: boolean;
	defaultEngineBehaviour: boolean;

	addModelOverride(model: string, replaceToModel: string): void;
	clearModelOverrides(): void;
	removeModelOverride(model: string): void;
}

interface LegacyGameWaterMp {
	getWaterHeight(x: number, y: number, z: number, height: number): number;
	getWaterHeightNoWaves(x: number, y: number, z: number, height: number): number;
	modifyWater(x: number, y: number, radius: number, height: number): void;
	setWavesIntensity(intensity: number): void;
	testProbeAgainstAllWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number,
		p6: any, p7s: any): boolean;
	testProbeAgainstWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number,
		p6: boolean): boolean;
	testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: any, p4: any): boolean;
}

interface LegacyGameWeaponMp {
	canUseWeaponOnParachute(weaponHash: Hash): boolean;
	createWeaponObject(weaponHash: Hash, ammoCount: number, x: number, y: number, z: number,
		showWorldModel: boolean, heading: number, p7: any): Handle;
	doesWeaponTakeWeaponComponent(weaponHash: Hash, componentHash: Hash): boolean;
	enableLaserSightRendering(toggle: boolean): void;
	getWeaponClipSize(weaponHash: Hash): number;
	getWeaponComponentHudStats(p0: any, p1: any): boolean;
	getWeaponComponentTypeModel(componentHash: Hash): Hash;
	getWeaponDamageType(weaponHash: Hash): number;
	getWeaponHudStats(weaponHash: Hash, data: {
		hudDamage: number;
		hudSpeed: number;
		hudCapacity: number;
		hudAccuracy: number;
		hudRange: number;
	}): boolean;
	getWeaponObjectTintIndex(weapon: EntityMp): number;
	getWeaponTintCount(weaponHash: Hash): number;
	getWeapontypeGroup(weaponHash: Hash): Hash;
	getWeapontypeModel(weaponHash: Hash): Hash;
	getWeapontypeSlot(weaponHash: Hash): Hash;
	giveWeaponComponentToWeaponObject(weaponObject: Handle, addonHash: Hash): void;
	giveWeaponObjectToPed(weaponObject: Handle, ped: Handle): void;
	hasVehicleGotProjectileAttached(driver: Handle, vehicle: Handle, weapon: Hash, p3: any): boolean;
	hasWeaponAssetLoaded(weaponHash: Hash): boolean;
	hasWeaponGotWeaponComponent(weapon: Handle, addonHash: Hash): boolean;
	isWeaponValid(weaponHash: Hash): boolean;
	removeAllProjectilesOfType(weaponhash: Hash, p1: boolean): void;
	removeWeaponAsset(weaponHash: Hash): void;
	removeWeaponComponentFromWeaponObject(weaponObject: Handle, componentHash: Hash): void;
	requestWeaponAsset(weaponHash: Hash, p1: number, p2: number): void;
	requestWeaponHighDetailModel(weaponObject: Handle): void;
	setFlashLightFadeDistance(distance: number): void;
	setPedAmmoToDrop(p0: any, p1: any): void;
	setWeaponObjectTintIndex(weapon: EntityMp, tint: number): void;
	unequipEmptyWeapons: boolean;
}

interface LegacyGameWorldprobeMp {
	castRayPointToPoint(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number,
		ignoreEntity: EntityMp, p8: number): number;
	getShapeTestResult(rayHandle: number, hit: boolean, endCoords: Vector3Mp, surfaceNormal: Vector3Mp,
		entityHit: EntityMp): {
			hit: boolean;
			endCoords: Vector3Mp;
			surfaceNormal: Vector3Mp;
			entityHit: EntityMp;
	};
	getShapeTestResultEx(rayHandle: number, hit: boolean, endCoords: Vector3Mp, surfaceNormal: Vector3Mp,
		materialHash: number, entityHit: EntityMp): {
			hit: boolean;
			endCoords: Vector3Mp;
			surfaceNormal: Vector3Mp;
			materialHash: number;
			entityHit: EntityMp;
	};
	startShapeTestBox(x: number, y: number, z: number, sizeX: number, sizeY: number, sizeZ: number, rotationX: number,
		rotationY: number, rotationZ: number, rotationOrder: number, flags: number, ignoreEntity: EntityMp | number,
		p12: number): number;
	startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number,
		flags: number, ignoreEntity: EntityMp, p9: number): number;
	startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number,
		ignoreEntity: EntityMp, p8: number): number;
}

interface LegacyGameZoneMp {
	clearPopscheduleOverrideVehicleModel(scheduleId: number): void;
	getHashOfMapAreaAtCoords(x: number, y: number, z: number): number;
	getHashOfMapAreaAtCoords(x: number, y: number, z: number): string;
	getZoneAtCoords(x: number, y: number, z: number): number;
	getZoneFromNameId(zoneName: string): number;
	getNameOfZone(x: number, y: number, z: number): string;
	getZonePopschedule(zoneId: number): number;
	getZoneScumminess(zoneId: number): number;
	overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: number): void;
	overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: string): void;
	setZoneEnabled(zoneId: number, toggle: boolean): void;
}
