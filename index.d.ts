/// <reference path="enums.d.ts" />
/// <reference path="natives.d.ts" />
/// <reference path="ped_hashes.d.ts" />
/// <reference path="vehicle_hashes.d.ts" />
/// <reference path="weapon_hashes.d.ts" />

declare namespace RageMP {
	// -------------------------------------------------------------------------
	// Custom types
	// -------------------------------------------------------------------------

	type Handle = number; // TODO: Temp type. Replace to the Entity, when methods are updated
	type Hash = number; // TODO: Temp type. Replace to HashOrString, when methods are updated
	type HashOrString = Hash;
	type RGB = [ number, number, number ];
	type RGBA = [ number, number, number, number ];
	type Array3d = [ number, number, number ];
	type Array2d = [ number, number ];

	// -------------------------------------------------------------------------
	// Main MP types
	// -------------------------------------------------------------------------

	type MpObject = {
		blips: BlipPool;
		browsers: BrowserPool;
		cameras: CameraPool;
		checkpoints: CheckpointPool;
		colshapes: ColshapePool;
		discord: Discord;
		events: EventPool;
		game: Game;
		gui: Gui;
		keys: Keys;
		labels: TextLabelPool;
		markers: MarkerPool;
		nametags: Nametags;
		objects: ObjectPool;
		peds: PedPool;
		pickups: PickupPool;
		players: PlayerPool;
		raycasting: Raycasting;
		storage: Storage;
		Vector3: Vector3;
		vehicles: VehiclePool;
	}

	type Game = {
		app: GameApp;
		audio: GameAudio;
		brain: GameBrain;
		cam: GameCam;
		controls: GameControls;
		cutscene: GameCutscene;
		datafile: GameDatafile;
		decisionevent: GameDecisionevent;
		decorator: GameDecorator;
		dlc1: GameDlc1;
		dlc2: GameDlc2;
		entity: GameEntity;
		fire: GameFire;
		gameplay: GameGameplay;
		graphics: GameGraphics;
		interior: GameInterior;
		itemset: GameItemset;
		mobile: GameMobile;
		object: GameObject;
		pathfind: GamePathfind;
		ped: GamePed;
		player: GamePlayer;
		rope: GameRope;
		script: GameScript;
		stats: GameStats;
		streaming: GameStreaming;
		system: GameSystem;
		time: GameTime;
		ui: GameUi;
		unk: GameUnk;
		recorder: GameRecorder;
		vehicle: GameVehicle;
		water: GameWater;
		weapon: GameWeapon;
		worldprobe: GameWorldprobe;
		zone: GameZone;

		invoke(hash: string, ...args: any[]): any;
		joaat(text: string): Hash;
		joaat(textArray: string[]): Hash[];
	}

	type Gui = {
		chat: GuiChat;
		cursor: GuiCursor;

		execute(code: string): void;
		takeScreenshot(name: string, type: RageMP.Enums.ScreenshotType | number, quality: number, compressionQuality: number): void;
	}

	// -------------------------------------------------------------------------
	// Entity MP types
	// -------------------------------------------------------------------------

	interface Blip extends Entity {
		addTextComponentSubstringName(): void;
		doesExist(): boolean;
		endTextCommandSetName(): void;
		getAlpha(): number;
		getColour(): number;
		getCoords(): Vector3;
		getFirstInfoId(): Blip;
		getHudColour(): number;
		getInfoIdDisplay(): number;
		getInfoIdEntityIndex(): Handle;
		getInfoIdPickupIndex(): Pickup;
		getInfoIdType(): number;
		getNextInfoId(): Blip;
		getSprite(): number;
		hideNumberOn(): void;
		isFlashing(): boolean;
		isMissionCreator(): boolean;
		isOnMinimap(): boolean;
		isShortRange(): boolean;
		pulse(): void;
		setAlpha(alpha: number): void;
		setAlpha(alphaLevel: string, skin: boolean): void;
		setAsFriendly(toggle: boolean): void;
		setAsMissionCreator(toggle: boolean): void;
		setAsShortRange(toggle: boolean): void;
		setBright(toggle: boolean): void;
		setCategory(index: number): void;
		setColour(color: number): void;
		setCoords(posX: number, posY: number, posZ: number): void;
		setDisplay(displayId: number): void;
		setFade(opacity: number, duration: number): void;
		setFlashes(toggle: boolean): void;
		setFlashesAlternate(toggle: boolean): void;
		setFlashInterval(p1: any): void;
		setFlashTimer(duration: number): void;
		setHighDetail(toggle: boolean): void;
		setNameFromTextFile(gxtEntry: string): void;
		setNameToPlayerName(player: Player): void;
		setPriority(priority: number): void;
		setRotation(rotation: number): void;
		setRoute(enabled: boolean): void;
		setRouteColour(colour: number): void;
		setScale(scale: number): void;
		setSecondaryColour(r: number, g: number, b: number): void;
		setShowCone(toggle: boolean): void;
		setShowHeadingIndicator(toggle: boolean): void;
		setSprite(spriteId: number): void;
		showNumberOn(number: number): void;
	}

	interface Entity {
		alpha: number;
		dimension: number;
		model: number;
		position: Vector3;
	  readonly handle: any;
	  readonly id: number;
	  readonly remoteId: number;
	  readonly type: string;

		applyForceTo(forceType: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number,
			boneIndex: number, isRel: number, p9: boolean, highForce: boolean, p11: boolean, p12: boolean): void;
		applyForceToCenterOfMass(forceType: number, x: number, y: number, z: number, p4: boolean, isRel: boolean,
			highForce: boolean, p7: boolean): void;
		attachTo(entity: Handle, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, 
			zRot: number, p8: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number,
			fixedRot: boolean): void;
		attachToPhysically(entity: Handle, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number,
			zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number,
			breakForce: number, fixedRot: boolean, p14: boolean, collision: boolean, p16: boolean, p17: number): void;
		clearLastDamage(): void;
		destroy(): void;
		detach(p0: boolean, collision: boolean): void;
		dist(position: Vector3): number;
		distSquared(position: Vector3): number;
		doesBelongToThisScript(p0: boolean): boolean;
		doesExist(): boolean;
		doesHaveDrawable(): boolean;
		doesHavePhysics(): boolean;
		forceAiAndAnimationUpdate(): void;
		freezePosition(toggle: boolean): void;
		getAlpha(): number;
		getAnimCurrentTime(animDict: string, animName: string): number;
		getAnimTotalTime(animDict: string, animName: string): number;
		getAttachedTo(): Handle;
		getBoneIndexByName(boneName: string): number;
		getCollisionNormalOfLastHitFor(): Vector3;
		getCoords(alive: boolean): Vector3;
		getForwardVector(): Vector3;
		getForwardX(): number;
		getForwardY(): number;
		getHeading(): number;
		getHealth(): number;
		getHeight(x: number, y: number, z: number, atTop: boolean, inWorldCoords: boolean): number;
		getHeightAboveGround(): number;
		getLastMaterialHitBy(): Hash;
		getLodDist(): number;
		getMatrix(rightVector: Vector3, forwardVector: Vector3, upVector: Vector3, position: Vector3): {
			rightVector: Vector3;
			forwardVector: Vector3;
			upVector: Vector3;
			position: Vector3;
		};
		getMaxHealth(): number;
		getModel(): Hash;
		getNearestPlayerTo(): Handle;
		getNearestPlayerToOnTeam(team: number): Handle;
		getObjectIndexFromIndex(): Handle;
		getOffsetFromGivenWorldCoords(posX: number, posY: number, posZ: number): Vector3;
		getOffsetFromInWorldCoords(offsetX: number, offsetY: number, offsetZ: number): Vector3;
		getPedIndexFromIndex(): Handle;
		getPhysicsHeading(): number;
		getPitch(): number;
		getPopulationType(): number;
		getQuaternion(x: number, y: number, z: number, w: number): Quaternion;
		getRoll(): number;
		getRotation(rotationOrder: number): Vector3;
		getRotationVelocity(): Vector3;
		getScript(script: Handle): Handle;
		getSpeed(): number;
		getSpeedVector(relative: boolean): Vector3;
		getSubmergedLevel(): number;
		getType(): number;
		getUprightValue(): number;
		getVariable(value: string): any;
		getVehicleIndexFromIndex(): Handle;
		getVelocity(): Vector3;
		getWorldPositionOfBone(boneIndex: number): Vector3;
		hasAnimEventFired(actionHash: Hash): boolean;
		hasAnimFinished(animDict: string, animName: string, p2: number): boolean;
		hasBeenDamagedBy(entity: Handle, p1: boolean): boolean;
		hasBeenDamagedByAnyObject(): boolean;
		hasBeenDamagedByAnyPed(): boolean;
		hasBeenDamagedByAnyVehicle(): boolean;
		hasClearLosTo(entity: Handle, traceType: number): boolean;
		hasClearLosToInFront(entity: Handle): boolean;
		hasCollidedWithAnything(): boolean;
		hasCollisionLoadedAround(): boolean;
		isAMission(): boolean;
		isAnObject(): boolean;
		isAPed(): boolean;
		isAt(entity: Handle, xSize: number, ySize: number, zSize: number, p4: boolean, p5: boolean, p6: number): boolean;
		isAtCoord(xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p6: boolean,
			p7: boolean, p8: number): boolean;
		isAttached(): boolean;
		isAttachedTo(to: Handle): boolean;
		isAttachedToAnyObject(): boolean;
		isAttachedToAnyPed(): boolean;
		isAttachedToAnyVehicle(): boolean;
		isAVehicle(): boolean;
		isCollisonDisabled(): boolean;
		isDead(): boolean;
		isInAir(): boolean;
		isInAngledArea(originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number,
			angle: number, p7: boolean, p8: boolean, p9: any): boolean;
		isInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: any): boolean;
		isInWater(): boolean;
		isInZone(zone: string): boolean;
		isOccluded(): boolean;
		isOnScreen(): boolean;
		isPlayingAnim(animDict: string, animName: string, p2: number): boolean;
		isStatic(): boolean;
		isTouching(targetEntity: Handle): boolean;
		isTouchingModel(modelHash: Hash): boolean;
		isUpright(angle: number): boolean;
		isUpsidedown(): boolean;
		isVisible(): boolean;
		isVisibleToScript(): boolean;
		isWaitingForWorldCollision(): boolean;
		playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number,
			bitset: any): boolean;
		playSynchronizedAnim(syncedScene: number, animation: string, propName: string, p3: number, p4: number, p5: any,
			p6: number): boolean;
		processAttachments(): void;
		resetAlpha(): void;
		setAlpha(alphaLevel: number, skin: boolean): void;
		setAlwaysPrerender(toggle: boolean): void;
		setAnimCurrentTime(animDict: string, animName: string, time: number): void;
		setAnimSpeed(animDict: string, animName: string, speedMultiplier: number): void;
		setAsMission(p0: boolean, byThisScript: boolean): void;
		setCanBeDamaged(toggle: boolean): void;
		setCanBeDamagedByRelationshipGroup(p0: boolean, p1: any): void;
		setCanBeTargetedWithoutLos(toggle: boolean): void;
		setCollision(toggle: boolean, keepPhysics: boolean): void;
		setCoords(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
		setCoords2(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number, clearArea: boolean): void;
		setCoordsNoOffset(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number): void;
		setDynamic(toggle: boolean): void;
		setHasGravity(toggle: boolean): void;
		setHeading(heading: number): void;
		setHealth(health: number): void;
		setInvincible(toggle: boolean): void;
		setIsTargetPriority(p0: boolean, p1: number): void;
		setLights(toggle: boolean): void;
		setLoadCollisionFlag(toggle: boolean): void;
		setLodDist(value: number): void;
		setMaxHealth(value: number): void;
		setMaxSpeed(speed: number): void;
		setMotionBlur(toggle: boolean): void;
		setNoCollision(entity: Handle, collision: boolean): void;
		setOnlyDamagedByPlayer(toggle: boolean): void;
		setOnlyDamagedByRelationshipGroup(p0: boolean, p1: any): void;
		setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean,
			meleeProof: boolean, p5: boolean, p6: boolean,drownProof: boolean): void;
		setQuaternion(x: number, y: number, z: number, w: number): void;
		setRecordsCollisions(toggle: boolean): void;
		setRenderScorched(toggle: boolean): void;
		setRotation(pitch: number, roll: number, yaw: number, rotationOrder: number, p4: boolean): void;
		setTrafficlightOverride(state: number): void;
		setVariable(key: string, value: any): any;
		setVelocity(x: number, y: number, z: number): void;
		setVisible(toggle: boolean, p1: boolean): void;
		stopAnim(animation: string, animGroup: string, p2: number): void;
		stopSynchronizedAnim(p0: number, p1: boolean): boolean;
	}

	interface Checkpoint extends Entity {
		// TODO
	}

	interface Colshape extends Entity {
		// TODO
	}

	interface Marker extends Entity {
		// TODO
	}

	interface Object extends Entity {
		hasBeenBroken(): boolean;
		isVisible(): boolean;
		markForDeletion(): void;
		placeOnGroundProperly(): boolean;
		setActivatePhysicsAsSoonAsItIsUnfrozen(toggle: boolean): void;
		setPhysicsParams(weight: number, p1: number, p2: number, p3: number, p4: number, gravity: number, p6: number,
			p7: number, p8: number, p9: number, buoyancy: number): void;
		setTargettable(targettable: boolean): void;
		slide(toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
	}

	interface Ped extends Entity {
		// TODO
	}

	interface Pickup extends Entity {
		
	}

	interface Player extends Entity {
		armour: number;
		eyeColour: number;
		hairColour: number;
		hairHighlightColour: number;
		heading: number;
		health: number;
		name: string;
		weapon: Hash;
		readonly action: string;
		readonly aimTarget: boolean;
		readonly ip: string;
		readonly isAiming: boolean;
		readonly isClimbing: boolean;
		readonly isEnteringVehicle: boolean;
		readonly isInCover: boolean;
		readonly isJumping: boolean;
		readonly isLeavingVehicle: boolean;
		readonly ping: number;
		readonly seat: number;
		readonly vehicle: Vehicle;

		addVehicleSubtaskAttack(ped2: Handle): void;
		addVehicleSubtaskAttackCoord(x: number, y: number, z: number): void;
		applyBlood(boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
		applyBloodByZone(p1: any, p2: number, p3: number, p4: any): void;
		applyBloodDamageByZone(p1: any, p2: number, p3: number, p4: any): void;
		applyBloodSpecific(p1: any, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number, p8: any): void;
		applyDamageDecal(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean,
			p9: string): void;
		applyDamagePack(damagePack: string, damage: number, mult: number): void;
		applyDamageTo(damageAmount: number, p2: boolean): void;
		canInCombatSeeTarget(target: Handle): boolean;
		canKnockOffVehicle(): boolean;
		canPedHear(ped: Handle): boolean;
		canRagdoll(): boolean;
		changePed(ped: Handle, b2: boolean, b3: boolean): void;
		clearAllProps(): void;
		clearAlternateMovementAnim(stance: number, p2: number): void;
		clearBloodDamage(): void;
		clearBloodDamageByZone(p1: number): void;
		clearDamageDecalByZone(p1: number, p2: string): void;
		clearDecorations(): void;
		clearDriveByClipsetOverride(): void;
		clearDrivebyTaskUnderneathDrivingTask(): void;
		clearFacialDecorations(): void;
		clearFacialIdleAnimOverride(): void;
		clearHasDamagedAtLeastOneNonAnimalPed(): void;
		clearHasDamagedAtLeastOnePed(): void;
		clearLastDamageBone(): void;
		clearParachuteModelOverride(): void;
		clearParachutePackModelOverride(): void;
		clearParachuteVariationOverride(): void;
		clearProp(propId: number): void;
		clearSecondaryTask(): void;
		clearTasks(): void;
		clearTasksImmediately(): void;
		clearWantedLevel(): void;
		clearWetness(): void;
		clone(heading: number, networkHandle: boolean, pedHandle: boolean): Handle;
		cloneToTarget(ped2: Handle): void;
		controlMountedWeapon(): boolean;
		explodeHead(weaponHash: Hash): void;
		forceMotionState(motionStateHash: Hash, p2: boolean, p3: boolean, p4: boolean): boolean;
		forceToOpenParachute(): void;
		getAccuracy(): number;
		getAlertness(): number;
		getAmmoInClip(weapon: Hash): number;
		getArmour(): number;
		getBoneCoords(boneId: number, offsetX: number, offsetY: number, offsetZ: number): Vector3;
		getBoneIndex(boneId: number): number;
		getCauseOfDeath(): Hash;
		getCombatFloat(ped: Handle, p1: number): number
		getCombatMovement(): number;
		getCombatRange(): number;
		getConfigFlag(flagId: number, p2: boolean): boolean;
		getCurrentStealthNoise(): number;
		getDeadPickupCoords(p1: number, p2: number): Vector3;
		getDecorationsState(): number;
		getDefensiveAreaPosition(p1: boolean): Vector3;
		getDesiredMoveBlendRatio(): number;
		getDrawableVariation(componentId: number): number;
		getEnveffScale(): number;
		getExtractedDisplacement(worldSpace: boolean): Vector3;
		getFloodInvincibility(p1: boolean): void;
		getGroup(): number;
		getGroupIndex(): number;
		getHasReserveParachute(): boolean;
		getHeadBlendData(headBlendData: {
			shapeFirst: number;
			shapeSecond: number;
			shapeThird: number;
			skinFirst: number;
			skinSecond: number;
			skinThird: number;
			shapeMix: number;
			skinMix: number;
			thirdMix: number;
		}): void;
		getHeadOverlayValue(overlayID: number): number;
		getInvincible(): boolean;
		getIsTaskActive(taskNumber: number): boolean;
		getJackTarget(): Handle;
		getLastDamageBone(outBone: number): number;
		getMaxArmour(): number;
		getMaxHealth(): number;
		getMeleeTargetFor(): Handle;
		getMoney(): number;
		getMount(): Handle;
		getName(): string;
		getNavmeshRouteDistanceRemaining(p1: any, p2: any): any;
		getNearbyPeds(sizeAndPeds: number, ignore: number): number;
		getNearbyVehicles(sizeAndVehs: number): number;
		getNumberOfDrawableVariations(componentId: number): number;
		getNumberOfPropDrawableVariations(propId: number): number;
		getNumberOfPropTextureVariations(propId: number, drawableId: number): number;
		getNumberOfTextureVariations(componentId: number, drawableId: number): number;
		getPaletteVariation(componentId: number): number;
		getParachuteLandingType(): number;
		getParachutePackTintIndex(tintIndex: number): number;
		getParachuteSmokeTrailColor(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number;
		};
		getParachuteState(): number;
		getParachuteTintIndex(tintIndex: number): number;
		getPed(): Handle;
		getPedScriptIndex(): Handle;
		getPhoneGestureAnimCurrentTime(): number;
		getPhoneGestureAnimTotalTime(): number;
		getPlayerIsFollowing(): Handle;
		getPropIndex(componentId: number): number;
		getPropTextureIndex(componentId: number): number;
		getRagdollBoneIndex(bone: number): number;
		getRelationshipBetweens(ped2: Handle): void;
		getRelationshipGroupDefaultHash(): Hash;
		getRelationshipGroupHash(): Hash;
		getReserveParachuteTintIndex(tintIndex: number): number;
		getResetFlag(flagId: number): boolean;
		getRgbColour(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number;
		};
		getScriptTaskStatus(taskHash: Hash): number;
		getSeatIsTryingToEnter(): number;
		getSequenceProgress(): number;
		getsJacker(): Handle;
		getSourceOfDeath(): Handle;
		getSprintStaminaRemaining(): number;
		getSprintTimeRemaining(): number;
		getTeam(): number;
		getTextureVariation(componentId: number): number;
		getTimeOfDeath(): number;
		getType(): number;
		getUnderwaterTimeRemaining(): number;
		getVehicleIsIn(getLastVehicle: boolean): Handle;
		getVehicleIsTryingToEnter(): Handle;
		getVehicleIsUsing(): Handle;
		getWantedCentrePosition(): Vector3;
		getWantedLevel(): number;
		giveHelmet(cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
		giveNmMessage(): void;
		giveRagdollControl(toggle: boolean): void;
		giveWeapon(weapon: RageMP.Hashes.Weapon | Hash, ammo: number, equipNow: boolean): void;
		hasBeenSpottedInStolenVehicle(): boolean;
		hasDamagedAtLeastOneNonAnimalPed(): boolean;
		hasDamagedAtLeastOnePed(): boolean;
		hasHeadBlendFinished(): boolean;
		hasLeftTheWorld(): boolean;
		hasTeleportFinished(): boolean;
		hasUseScenarioTask(): boolean;
		hideBloodDamageByZone(p1: any, p2: boolean): void;
		isActiveInScenario(): boolean;
		isAimingFromCover(): boolean;
		isBeingArrested(atArresting: boolean): boolean;
		isBeingJacked(): boolean;
		isBeingStealthKilled(): boolean;
		isBeingStunned(p1: number): boolean;
		isComponentVariationValid(componentId: number, drawableId: number, textureId: number): boolean;
		isControlOn(): boolean;
		isConversationDead(): boolean;
		isCuffed(): boolean;
		isDead(): boolean;
		isDeadOrDying(p1: boolean): boolean;
		isDiving(): boolean;
		isDoingDriveby(): boolean;
		isDrivebyTaskUnderneathDrivingTask(): boolean;
		isDucking(): boolean;
		isEvasiveDiving(evadingEntity: Handle): boolean;
		isFacingPed(otherPed: Handle, angle: number): boolean;
		isFalling(): boolean;
		isFatallyInjured(): boolean;
		isFleeing(): boolean;
		isFreeAiming(): boolean;
		isFreeForAmbientTask(): boolean;
		isGettingIntoAVehicle(): boolean;
		isGettingUp(): boolean;
		isGoingIntoCover(): boolean;
		isGroupMember(groupId: number): boolean;
		isHangingOnToVehicle(): boolean;
		isHeadtracking(entity: Handle): boolean;
		isHeadtrackingPed(ped2: Handle): boolean;
		isHuman(): boolean;
		isHurt(): boolean;
		isInAnyBoat(): boolean;
		isInAnyHeli(): boolean;
		isInAnyPlane(): boolean;
		isInAnyPoliceVehicle(): boolean;
		isInAnySub(): boolean;
		isInAnyTaxi(): boolean;
		isInAnyTrain(): boolean;
		isInAnyVehicle(atGetIn: boolean): boolean;
		isInCombat(target: Handle): boolean;
		isInCoverFacingLeft(): boolean;
		isInFlyingVehicle(): boolean;
		isInGroup(): boolean;
		isInjured(): boolean;
		isInMeleeCombat(): boolean;
		isInModel(modelHash: Hash): boolean;
		isInParachuteFreeFall(): boolean;
		isInVehicle(vehicle: Handle, atGetIn: boolean): boolean;
		isInWrithe(): boolean;
		isJacking(): boolean;
		isJumpingOutOfVehicle(): boolean;
		isMale(): boolean;
		isModel(modelHash: Hash): boolean;
		isMountedWeaponTaskUnderneathDrivingTask(): boolean;
		isMoveBlendRatioRunning(): boolean;
		isMoveBlendRatioSprinting(): boolean;
		isMoveBlendRatioStill(): boolean;
		isMoveBlendRatioWalking(): boolean;
		isOnAnyBike(): boolean;
		isOnFoot(): boolean;
		isOnMount(): boolean;
		isOnSpecificVehicle(vehicle: Handle): boolean;
		isOnVehicle(): boolean;
		isPerformingStealthKill(): boolean;
		isPlantingBomb(): boolean;
		isPlaying(): boolean;
		isPlayingPhoneGestureAnim(): boolean;
		isPressingHorn(): boolean;
		isProne(): boolean;
		isPropValid(componentId: number, drawableId: number, TextureId: number): boolean;
		isRagdoll(): boolean;
		isReadyForCutscene(): boolean;
		isReloading(): boolean;
		isRidingTrain(): boolean;
		isRunning(): boolean;
		isRunningArrestTask(): boolean;
		isRunningMobilePhoneTask():boolean;
		isRunningRagdollTask(): boolean;
		isScriptControlOn(): boolean;
		isScriptedScenarioUsingConditionalAnim(animDict: string, anim: string): boolean;
		isShooting(): boolean;
		isShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
		isSittingInAnyVehicle(): boolean;
		isSittingInVehicle(vehicle: Handle): boolean;
		isSprinting(): boolean;
		isStill(): boolean;
		isStopped(): boolean;
		isStrafing(): boolean;
		isSwimming(): boolean;
		isSwimmingUnderWater(): boolean;
		isTargettingAnything(): boolean;
		isTracked(): boolean;
		isTrackedVisible(): boolean;
		isTryingToEnterALockedVehicle(): boolean;
		isUsingActionMode(): boolean;
		isUsingAnyScenario(): boolean;
		isUsingScenario(scenario: string): boolean;
		isVaulting(): boolean;
		isWalking(): boolean;
		isWantedLevelGreater(wantedLevel: number): boolean;
		isWearingHelmet(): boolean;
		knockOffProp(p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
		knockOffVehicle(): void;
		playAnimOnRunningScenario(animDict: string, animName: string): void;
		playFacialAnim(animName: string, animDict: string): void;
		registerHatedTargetsAround(radius: number): void;
		registerheadshot(): number;
		registerTarget(target: Handle): void;
		removeDefensiveArea(toggle: boolean): void;
		removeFromGroup(): void;
		removeHelmet(p2: boolean): void;
		removePreferredCoverSet(): void;
		removeWeapon(weapon: RageMP.Hashes.Weapon | Hash): void;
		removeAllWeapons(): void;
		resetArrestState(): void;
		resetInputGait(): void;
		resetInVehicleContext(): void;
		resetLastVehicle(): void;
		resetMovementClipset(p1: number): void;
		resetRagdollTimer(): void;
		resetStamina(): void;
		resetStrafeClipset(): void;
		resetVisibleDamage(): void;
		resetWeaponMovementClipset(): void;
		resurrect(): void;
		reviveInjured(): void;
		setAccuracy(accuracy: number): void;
		setAlertness(value:number): void;
		setAllowedToDuck(toggle: boolean): void;
		setAllowVehiclesOverride(toggle: boolean): void;
		setAlternateMovementAnim(stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;
		setAmmoInClip(weapon: RageMP.Hashes.Weapon | Hash, ammo: number): void;
		setAngledDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number,
			p8: boolean, p9: boolean): void;
		setArmour(amount: number): void;
		setAsCop(toggle: boolean): void;
		setAsEnemy(toggle: boolean): void;
		setAsGroupLeader(groupId: number): void;
		setAsGroupMember(groupId: number): void;
		setBlendFromParents(p1: any, p2: any, p3: number, p4: number): void;
		setBlockingOfNonTemporaryEvents(toggle: boolean): void;
		setBoundsOrientation(p1: number, p2: number, p3: number, p4: number, p5: number): void;
		setCanArmIk(toggle: boolean): void;
		setCanAttackFriendly(toggle: boolean, p2: boolean): void;
		setCanBeDraggedOut(toggle: boolean): void;
		setCanBeHassledByGangs(toggle: boolean): void;
		setCanBeKnockedOffVehicle(state: number): void;
		setCanBeShotInVehicle(toggle: boolean): void;
		setCanBeTargetedWhenInjured(toggle: boolean): void;
		setCanBeTargetedWithoutLos(toggle: boolean): void;
		setCanBeTargetted(toggle: boolean): void;
		setCanBeTargettedByPlayer(player: Handle, toggle: boolean): void;
		setCanBeTargettedByTeam(team: number, toggle: boolean): void;
		setCanCowerInCover(toggle: boolean): void;
		setCanDoDriveBy(toggle: boolean): void;
		setCanEvasiveDive(toggle: boolean): void;
		setCanHeadIk(toggle: boolean): void;
		setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
		setCanLegIk(toggle: boolean): void;
		setCanPeekInCover(toggle: boolean): void;
		setCanPlayAmbientAnims(toggle: boolean): void;
		setCanPlayAmbientBaseAnims(toggle: boolean): void;
		setCanPlayGestureAnims(toggle: boolean): void;
		setCanPlayVisemeAnims(p1: boolean, p2: boolean): void;
		setCanRagdoll(toggle: boolean): void;
		setCanRagdollFromPlayerImpact(toggle: boolean): void;
		setCanSmashGlass(p1: boolean, p2: boolean): void;
		setCanSwitchWeapon(toggle: boolean): void;
		setCanTeleportToGroupLeader(groupHandle: number, toggle: boolean): void;
		setCanTorsoIk(toggle: boolean): void;
		setCanUseAutoConversationLookat(toggle: boolean): void;
		setCanUseCover(toggle: boolean): void;
		setCapsule(value: number): void;
		setClothPinFrames(toggle: boolean): void;
		setCombatAbility(p1: number): void;
		setCombatAttributes(attributeIndex: number, enabled: boolean): void;
		setCombatFloat(combatType: number, p2: number): void;
		setCombatMovement(combatMovement: number): void;
		setCombatRange(p1: number): void;
		setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
		setConfigFlag(flagId: number, value: boolean): void;
		setControl(toggle: boolean, possiblyFlags: number): void;
		setCoordsKeepVehicle(posX: number, posY: number, posZ: number): void;
		setCoordsNoGang(posX: number, posY: number, posZ: number): void;
		setCowerHash(p1: string): void;
		setDecoration(collection: Hash, overlay: Hash): void;
		setDefaultComponentVariation(): void;
		setDefensiveAreaAttachedToPed(attachPed: Handle, p2: number, p3: number, p4: number, p5: number, p6: number,
			p7: number, p8: number, p9: boolean, p10: boolean): void;
		setDefensiveAreaDirection(p1: number, p2: number, p3: number, p4: boolean): void;
		setDefensiveSphereAttachedToPed(p1: any, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;
		setDesiredHeading(heading: number): void;
		setDesiredMoveBlendRatio(p1: number): void;
		setDiesInSinkingVehicle(toggle: boolean): void;
		setDiesInstantlyInWater(toggle: boolean): void;
		setDiesInVehicle(toggle: boolean): void;
		setDiesInWater(toggle: boolean): void;
		setDiesWhenInjured(toggle: boolean): void;
		setDriveByClipsetOverride(clipset: string): void;
		setDriverAbility(ability: number): void;
		setDriverAggressiveness(aggressiveness: number): void;
		setDriveTaskCruiseSpeed(cruiseSpeed: number): void;
		setDriveTaskDrivingStyle(drivingStyle: number): void;
		setDucking(toggle: boolean): void;
		setEnableBoundAnkles(toggle: boolean): void;
		setEnableEnveffScale(toggle: boolean): void;
		setEnableHandcuffs(toggle: boolean): void;
		setEnableScuba(toggle: boolean): void;
		setEnableWeaponBlocking(toggle: boolean): void;
		setEnveffScale(value: number): void;
		setEveryoneIgnore(toggle: boolean): void;
		setExclusivePhoneRelationships(): Handle;
		setEyeColor(index: number): void;
		setFaceFeature(index: number, scale: number): void;
		setFacialDecoration(collection: Hash, overlay: Hash): void;
		setFacialIdleAnimOverride(animName: string, animDict: string): void;
		setFiringPattern(patternHash: Hash): void;
		setFleeAttributes(attributes: number, p2: boolean): void;
		setForcedAim(toggle: boolean): void;
		setForcedZoom(toggle: boolean): void;
		setForceSkipAimIntro(toggle: boolean): void;
		setGeneratesDeadBodyEvents(toggle: boolean): void;
		setGestureGroup(p1: any): void;
		setGetOutUpsideDownVehicle(toggle: boolean): void;
		setGravity(toggle: boolean): void;
		setGroupMemberPassengerIndex(index: number): void;
		setHairColor(colorID: number, highlightColorID: number): void;
		setHasReserveParachute(): void;
		setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number,
			skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
		setHeadOverlay(overlayID: number, index: number, opacity: number, firstColor: number, secondColor: number): void;
		setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
		setHealthRechargeMultiplier(regenRate: number): void;
		setHearingRange(value: number): void;
		setHelmet(canWearHelmet: boolean): void;
		setHelmetFlag(helmetFlag: number): void;
		setHelmetPropIndex(propIndex: number): void;
		setHelmetTextureIndex(textureIndex: number): void;
		setHighFallTask(p1: any, p2: any, p3: any): void;
		setIdRange(value: number): void;
		setIkTarget(p1: number, targetPed: Handle, boneLookAt: number, x: number, y: number, z: number, p7: any,
			duration: number, duration1: number): void;
		setIntoVehicle(vehicle: Handle, seatIndex: number): void;
		setInVehicleContext(context: Hash): void;
		setInvincible(toggle: boolean): void;
		setKeepTask(toggle: boolean): void;
		setLegIkMode(mode: number): void;
		setLockon(toggle: boolean): void;
		setLockonRangeOverride(range: number): void;
		setLodMultiplier(multiplier: number): void;
		setMaxArmour(value: number): void;
		setMaxHealth(value: number): void;
		setMaxMoveBlendRatio(value: number): void;
		setMaxTimeInWater(value: number): void;
		setMaxTimeUnderwater(value: number): void;
		setMayNotEnterAnyVehicle(): void;
		setMayOnlyEnterThisVehicle(vehicle: Handle): void;
		setMeleeWeaponDamageModifier(modifier: number): void;
		setMinGroundTimeForStungun(ms: number): void;
		setMinMoveBlendRatio(value: number): void;
		setModel(model: Hash): void;
		setModelIsSuppressed(toggle: boolean): void;
		setMoney(amount: number): void;
		setMotionBlur(toggle: boolean): void;
		setMountedWeaponTarget(targetEntity: Handle, p2: any, x: number, y: number, z: number): void;
		setMoveAnimsBlendOut(): void;
		setMovementClipset(clipSet: string, p2: number): void;
		setMoveRateOverride(value: number): void;
		setNameDebug(name: string): void;
		setNeverLeavesGroup(toggle: boolean): void;
		setNoiseMultiplier(multiplier: number): void;
		setParachuteModelOverride(model: Hash): void;
		setParachutePackModelOverride(model: Hash): void;
		setParachutePackTintIndex(tintIndex: number): void;
		setParachuteSmokeTrailColor(r: number, g: number, b: number): void;
		setParachuteTaskTarget(x: number, y: number, z: number): void;
		setParachuteTaskThrust(thrust: number): void;
		setParachuteTintIndex(tintIndex: number): void;
		setParachuteVariationOverride(p1: number, p2: any, p3: any, p4: boolean): void;
		setPathAvoidFire(avoidFire: boolean): void;
		setPathCanDropFromHeight(Toggle: boolean): void;
		setPathCanUseClimbovers(Toggle: boolean): void;
		setPathCanUseLadders(Toggle: boolean): void;
		setPathPreferToAvoidWater(avoidWater: boolean): void;
		setPathsWidthPlant(mayEnterWater: boolean): void;
		setPinnedDown(pinned: boolean, i: number): void;
		setPlaysHeadOnHornAnimWhenDiesInVehicle(toggle: boolean): void;
		setPoliceIgnore(toggle: boolean): void;
		setPreferredCoverSet(itemSet: any): void;
		setPrimaryLookat(lookAt: Handle): void;
		setPropIndex(componentId: number, drawableId: number, TextureId: number, attach: boolean): void;
		setRagdollFlag(flag: number): void;
		setRagdollForceFall(): void;
		setRagdollOnCollision(toggle: boolean): void;
		setRandomComponentVariation(p1: boolean): void;
		setRandomProps(): void;
		setRelationshipGroupDefaultHash(hash: Hash): void;
		setRelationshipGroupHash(hash: Hash): void;
		setReserveParachuteTintIndex(tintIndex: number): void;
		setResetFlag(flagId: number, doReset: boolean): void;
		setResetFlagPreferRearSeats(flags: number): void;
		setResetRagdollFlag(flag: number): void;
		setScriptedAnimSeatOffset(p1: number): void;
		setSeeingRange(value: number): void;
		setShootRate(shootRate: number): void;
		setShootsAtCoord(x: number, y: number, z: number, toggle: boolean): void;
		setSimulateAiming(toggle: boolean): void;
		setSneakingNoiseMultiplier(multiplier: number): void;
		setSphereDefensiveArea(x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
		setSprint(toggle: boolean): void;
		setStayInVehicleWhenJacked(toggle: boolean): void;
		setStealthMovement(p1: boolean, action: string): void;
		setStealthPerceptionModifier(value: number): void;
		setSteersAroundObjects(toggle: boolean): void;
		setSteersAroundPeds(toggle: boolean): void;
		setSteersAroundVehicles(toggle: boolean): void;
		setStrafeClipset(clipSet: string): void;
		setSuffersCriticalHits(toggle: boolean): void;
		setSweat(sweat: number): void;
		setTargetLossResponse(responseType: number): void;
		setTaskVehicleChaseBehaviorFlag(flag: number, set: boolean): void;
		setTaskVehicleChaseIdealPursuitDistance(distance: number): void;
		setTeam(team: number): void;
		setToInformRespectedFriends(radius: number, maxFriends: number): void;
		setToLoadCover(toggle: boolean): void;
		setToRagdoll(time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
		setUsingActionMode(p1: boolean, p2: any, action: string): void;
		setVehicleDamageModifier(damageAmount: number): void;
		setVehicleDefenseModifier(modifier: number): void;
		setVisualFieldCenterAngle(angle: number): void;
		setVisualFieldMaxAngle(value: number): void;
		setVisualFieldMaxElevationAngle(angle: number): void;
		setVisualFieldMinAngle(value: number): void;
		setVisualFieldMinElevationAngle(angle: number): void;
		setVisualFieldPeripheralRange(range: number): void;
		setWantedCentrePosition(x: number, y: number, z: number): void;
		setWantedLevel(wantedLevel: number, disableNoMission: boolean): void;
		setWantedLevelNoDrop(wantedLevel: number, p2: boolean): void;
		setWantedLevelNow(p1: boolean): void;
		setWeaponDamageModifier(damageAmount: number): void;
		setWeaponDefenseModifier(modifier: number): void;
		setWeaponMovementClipset(clipSet: string): void;
		setWetnessEnabledThisFrame(): void;
		setWetnessHeight(height: number): void;
		stopAnimPlayback(p1: any, p2: boolean): void;
		stopAnimTask(animDictionary: string, animationName: string, p3: number): void;
		stopWeaponFiringWhenDropped(): void;
		taskAchieveHeading(heading: number, timeout: number): void;
		taskAimGunAt(entity: Handle, duration: number, p3: boolean): void;
		taskAimGunAtCoord(x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;
		taskAimGunScripted(scriptTask: Hash, p2: boolean, p3: boolean): void;
		taskArrest(target: Handle): void;
		taskBoatMission(boat: Handle, p2: any, p3: any, x: number, y: number, z: number, p7: any, maxSpeed: number,
			p9: any, p10: number, p11: any): void;
		taskChatTo(target: Handle, p2: any, p3: number, p4: number, p5: number, p6: number, p7: number): void;
		taskClearLookAt(): void;
		taskClimb(unused: boolean): void;
		taskClimbLadder(p1: number): void;
		taskCombat(targetPed: Handle, p2: number, p3: number): void;
		taskCombatHatedTargetsAround(radius: number, p2: number): void;
		taskCombatHatedTargetsInArea(x: number, y: number, z: number, radius: number, p5: any): void;
		taskCower(duration: number): void;
		taskDriveBy(targetPed: Handle, p2: any, targetX: number, targetY: number, targetZ: number, p6: number, p7: any,
			p8: boolean, firingPattern: Hash): void;
		taskEnterVehicle(vehicle: Handle, timeout: number, seat: number, speed: number, p5: number, p6: any): void;
		taskFollowNavMeshToCoord(x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number,
			persistFollowing: boolean, unk: number): void;
		taskFollowNavMeshToCoordAdvanced(x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number,
			unkInt: number, unkX: number, unkY: number, unkZ: number, unk2: number): void;
		taskFollowPointRoute(speed: number, unknown: number): void;
		taskFollowToOffsetOf(entity: Handle, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number,
			timeout: number, stoppingRange: number, persistFollowing: boolean): void;
		taskForceMotionState(state: Hash, p2: boolean): void;
		taskGetOffBoat(boat: Handle): void;
		taskGoStraightToCoord(x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number,
			distanceToSlide: number): void;
		taskGotoAiming(target: Handle, distanceToStopAt: number, StartAimingDist: number): void;
		taskGoToCoordAndAimAtHatedEntitiesNearCoord(gotoX: number, gotoY: number, gotoZ: number, aimNearX: number,
			aimNearY: number, aimNearZ: number, speed: number, shoot: boolean, unknown1: number, unknown2: number,
			unkTrue: boolean, unknown3: number, heading: boolean, firingPattern: Hash): void;
		taskGoToCoordAnyMeans(x: number, y: number, z: number, speed: number, p5: any, p6: boolean, walkingStyle: number,
			p8: number): void;
		taskGoToCoordAnyMeansExtraParams(x: number, y: number, z: number, speed: number, p5: any, p6: boolean,
			walkingStyle: number, p8: number, p9: any, p10: any, p11: any): void;
		taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(x: number, y: number, z: number, speed: number, p5: any,
			p6: boolean, walkingStyle: number, p8: number, p9: any, p10: any, p11: any, p12: any): void;
		taskGoToCoordWhileAimingAtCoord(x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number,
			moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: any, p13: boolean,
			firingPattern: Hash): void;
		taskGotoOffset(p1: any, p2: any, x: number, y: number, z: number, duration: number): void;
		taskGoToWhileAimingAtEntity(entityToWalkTo: Handle, entityToAimAt: Handle, speed: number, shootatEntity: boolean,
			p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: Hash): void;
		taskGuardCurrentPosition(p1: number, p2: number, p3: number): void;
		taskGuardSphereDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: any, p7: number,
			p8: number, p9: number, p10: number): void;
		taskHandsUp(duration: number, facingPed: Handle, p3: number, p4: boolean): void;
		taskHeliChase(entityToFollow: Handle, x: number, y: number, z: number): void;
		taskHeliMission(vehicle: Handle, p2: any, pedToFollow: Handle, posX: number, posY: number, posZ: number,
			mode: number, speed: number, radius: number, angle: number, p11: number, height: number, p13: number, p14: number): void;
		taskJump(unused: boolean): void;
		taskLeaveAnyVehicle(p1: number, p2: number): void;
		taskLeaveVehicle(vehicle: Handle, flags: number): void;
		taskLookAt(lookAt: Handle, duration: number, unknown1: number, unknown2: number): void;
		taskMoveNetwork(task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
		taskMoveNetworkAdvanced(p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number,
			p8: any, p9: number, p10: boolean, animDict: string, flags: number): void;
		taskOpenVehicleDoor(vehicle: Handle, timeOut: number, doorIndex: number, speed: number): void;
		taskParachute(p1: boolean): void;
		taskParachuteToTarget(x: number, y: number, z: number): void;
		taskPatrol(p1: string, p2: any, p3: boolean, p4: boolean): void;
		taskPause(ms: number): void;
		taskPerformSequence(taskSequence: Handle): void;
		taskPlaneChase(entityToFollow: Handle, x: number, y: number, z: number): void;
		taskPlaneLand(plane: Handle, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number,
			runwayEndY: number, runwayEndZ: number): void;
		taskPlaneMission(plane: Handle, targetVehicle: Handle, targetPed: Handle, destinationX: number, destinationY: number,
			destinationZ: number, p7: number, physicsSpeed: number, p9: number, p10: number, maxAltitude: number, minAltitude: number): void;
		taskPlantBomb(x: number, y: number, z: number, heading: number): void;
		taskPlayAnim(animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number,
			flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
		taskPlayAnimAdvanced(animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number,
			rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: any,
			animTime: number, p14: any, p15: any): void;
		taskPlayPhoneGestureAnimation(p1: any, p2: any, p3: any, p4: number, p5: number, p6: boolean, p7: boolean): void;
		taskPutDirectlyIntoCover(x: number, y: number, z: number, timeout: any, p5: boolean, p6: number, p7: boolean,
			p8: boolean, p9:object, p10: boolean): void;
		taskPutDirectlyIntoMelee(meleeTarget: Handle, p2: number, p3: number, p4: number, p5: boolean): void;
		taskRappelFromHeli(p1: number): void;
		taskReactAndFlee(fleeTarget: Handle): void;
		taskReloadWeapon(doReload: boolean): void;
		taskScriptedAnimation(p1: any, p2: any, p3: any, p4: number, p5: number): void;
		taskSeekCoverFrom(target: Handle, duration: number, p3: boolean): void;
		taskSeekCoverToCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: any, p8: boolean): void;
		taskSetBlockingOfNonTemporaryEvents(toggle: boolean): void;
		taskSetDecisionMaker(p1: Hash): void;
		taskShockingEventReact(eventHandle: number): void;
		taskShootAtCoord(x: number, y: number, z: number, duration: number, firingPattern: Hash): void;
		taskShuffleToNextVehicleSeat(vehicle: Handle): void;
		taskSkyDive(): void;
		taskSlideToCoord(x: number, y: number, z: number, heading: number, p5: number): void;
		taskSlideToCoordHdgRate(x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
		taskSmartFlee(fleeTarget: Handle, distance: number, fleeTime: any, p4: boolean, p5: boolean): void;
		taskSmartFleeCoord(x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;
		taskStandGuard(x: number, y: number, z: number, heading: number, scenarioName: string): void;
		taskStandStill(time: number): void;
		taskStartScenarioAtPosition(scenarioName: string, x: number, y: number, z: number, heading: number, p6: any,
			p7: boolean, p8: boolean): void;
		taskStartScenarioInPlace(scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;
		taskStayInCover(): void;
		taskStealthKill(target: Handle, killType: Hash, p3: number, p4: boolean): void;
		taskStopPhoneGestureAnimation(): void;
		taskSwapWeapon(p1: boolean): void;
		taskSweepAim(anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: Handle, p7: number, p8: number): void;
		taskSynchronizedScene(scene: number, animDictionary: string, animationName: string, speed: number,
			speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: any): void;
		taskTurnToFace(entity: Handle, duration: number): void;
		taskTurnToFaceCoord(x: number, y: number, z: number, duration: number): void;
		taskUseMobilePhone(p1: number): void;
		taskUseMobilePhoneTimed(duration: number): void;
		taskUseNearestScenarioToCoordWarp(x: number, y: number, z: number, radius: number, p5: any): void;
		taskVehicleAimAt(target: Handle): void;
		taskVehicleChase(targetEnt: Handle): void;
		taskVehicleDriveToCoord(vehicle: Handle, x: number, y: number, z: number, speed: number, p6: any,
			vehicleModel: Hash, drivingMode: number, stopRange: number, p10: number): void;
		taskVehicleDriveToCoordLongrange(vehicle: Handle, x: number, y: number, z: number, speed: number, driveMode: number,
			stopRange: number): void;
		taskVehicleDriveWander(vehicle: Handle, speed: number, drivingStyle: number): void;
		taskVehicleEscort(vehicle: Handle, targetVehicle: Handle, mode: number, speed: number, drivingStyle: number,
			minDistance: number, p7: number, noRoadsDistance: number): void;
		taskVehicleFollow(vehicle: Handle, targetEntity: Handle, drivingStyle: number, speed: number, minDistance: number): void;
		taskVehicleFollowWaypointRecording(vehicle: Handle, WPRecording: string, p3: number, p4: number, p5: number,
			p6: number, p7: number, p8: boolean, p9: number): void;
		taskVehicleGotoNavmesh(vehicle: Handle, x: number, y: number, z: number, speed: number, behaviorFlag: number,
			stoppingRange: number): void;
		taskVehicleHeliProtect(vehicle: Handle, entityToFollow: Handle, targetSpeed: number, p4: number, radius: number,
			altitude: number, p7: number): void;
		taskVehicleMissionCoorsTarget(vehicle: Handle, x: number, y: number, z: number, p5: number, p6: number, p7: number,
			p8: number, p9: number, p10: boolean): void;
		taskVehicleMissionTarget(vehicle: Handle, pedTarget: Handle, mode: number, maxSpeed: number, drivingStyle: number,
			minDistance: number, p7: number, p8: boolean): void;
		taskVehiclePark(vehicle: Handle, x: number, y: number, z: number, heading: number, mode: number, radius: number,
			keepEngineOn: boolean): void;
		taskVehicleShootAt(target: Handle, p2: number): void;
		taskVehicleTempAction(vehicle: Handle, action: number, time: number): void;
		taskWanderInArea(x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
		taskWanderStandard(p1: number, p2: number): void;
		taskWarpIntoVehicle(vehicle: Handle, seat: number): void;
		taskWrithe(target: Handle, time: number, p3: number): void;
		uncuff(): void;
		unregisterheadshot(): void;
		updateHeadBlendData(shapeMix: number, skinMix: number, thirdMix: number): void;
		updateTaskAimGunScriptedTarget(p1: Handle, p2: number, p3: number, p4: number, p5: boolean): void;
		updateTaskHandsUpDuration(duration: number): void;
		updateTaskSweepAim(entity: Handle): void;
		wasKilledByStealth(): boolean;
		wasKilledByTakedown(): boolean;
		wasSkeletonUpdated(): boolean;
	}

	interface TextLabel extends Entity {
		color: RGB;
		drawDistance: number;
		los: boolean;
		text: string;
	}

	interface Vehicle extends Entity {
		gear: number;
		rpm: number;
		steeringAngle: number;
		
		addUpsidedownCheck(): void;
		areAllWindowsIntact(): boolean;
		attachToCargobob(cargobob: Handle, p1: number, x: number, y: number, z: number): void;
		attachToTowTruck(vehicle: Handle, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
		attachToTrailer(trailer: Handle, radius: number): void;
		canShuffleSeat(p0: any): boolean;
		cargobobMagnetGrab(toggle: boolean): void;
		clearCustomPrimaryColour(): void;
		clearCustomSecondaryColour(): void;
		closeBombBayDoors(): void;
		detachFromAnyCargobob(): boolean;
		detachFromAnyTowTruck(): boolean;
		detachFromCargobob(cargobob: Handle): void;
		detachFromTowTruck(vehicle: Handle): void;
		detachFromTrailer(): void;
		detachWindscreen(): void;
		disableImpactExplosionActivation(toggle: boolean): void;
		disablePlaneAileron(p0: boolean, p1: boolean): void;
		doesExtraExist(extraId: number): boolean;
		doesHaveRoof(): boolean;
		doesHaveStuckVehicleCheck(): boolean;
		doesHaveWeapon(): boolean;
		ejectJb700Roof(x: number, y: number, z: number): void;
		enableCargobobHook(state: number): void;
		explode(isAudible: boolean, isInvisble: boolean): void;
		explodeInCutscene(p0: boolean): void;
		fixWindow(index: number): void;
		getAcceleration(): number;
		getAttachedToCargobob(): Handle;
		getAttachedToTowTruck(): Handle;
		getBoatAnchor(): boolean;
		getBodyHealth(): number;
		getBodyHealth2(): number;
		getCargobobHookPosition(): Vector3;
		getCauseOfDestruction(): Hash;
		getClass(): number;
		getColor(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number;
		};
		getColourCombination(): number;
		getColours(colorPrimary: number, colorSecondary: number): {
			colorPrimary: number;
			colorSecondary: number;
		};
		getConvertibleRoofState(): number;
		getCustomPrimaryColour(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number;
		};
		getCustomSecondaryColour(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number;
		};
		getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): Vector3;
		getDirtLevel(): number;
		getDoorAngleRatio(door: number): number;
		getDoorLockStatus(): number;
		getDoorsLockedForPlayer(player: Handle): boolean;
		getEngineHealth(): number;
		getExtraColours(pearlescentColor: number, wheelColor: number): {
			pearlescentColor: number;
			wheelColor: number;
		};
		getHeliEngineHealth(): number;
		getHeliMainRotorHealth(): number;
		getHeliTailRotorHealth(): number;
		getIsEngineRunning(): boolean;
		getIsLeftHeadlightDamaged(): boolean;
		getIsPrimaryColourCustom(): boolean;
		getIsRightHeadlightDamaged(): boolean;
		getIsSecondaryColourCustom(): boolean;
		getLandingGearState(): number;
		getLastPedInSeat(seatIndex: number): Handle;
		getLayoutHash(): Hash;
		getLightsState(lightsOn: boolean, highbeamsOn: boolean): {
			lightsOn: boolean;
			highbeamsOn: boolean;
		};
		getLivery(): number;
		getLiveryCount(): number;
		getLiveryName(liveryIndex: number): string;
		getMaxBreaking(): number;
		getMaxNumberOfPassengers(): number;
		getMaxTraction(): number;
		getMod(modType: number): number;
		getModColor1(paintType: number | number, color: number, p2: number): {
			paintType: number | number;
			color: number;
			p2: number;
		};
		getModColor1TextLabel(p0: boolean): string;
		getModColor2(paintType: number, color: number): {
			paintType: number;
			color: number;
			p2: number;
		};
		getModColor2TextLabel(): string;
		getModKit(): number;
		getModKitType(): number;
		getModModifierValue(modType: number, modIndex: number): any; // TODO
		getModSlotName(modType: number): string;
		getModTextLabel(modType: number, modValue: number): string;
		getModVariation(modType: number): boolean;
		getNeonLightsColour(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number;
		};
		getNumberOfColours(): number;
		getNumberOfPassengers(): number;
		getNumberPlateText(): string;
		getNumberPlateTextIndex(): number;
		getNumModKits(): number;
		getNumMods(modType: number): number;
		getOwner(entity: Handle): boolean;
		getPaintFade(): number;
		getPedInSeat(index: number): Handle;
		getPedUsingDoor(doorIndex: number): Handle;
		getPetrolTankHealth(): number;
		getPlateType(): number;
		getSuspensionHeight(): number;
		getTrailer(vehicle: Handle): Handle;
		getTrainCarriage(cariage: number): Handle;
		getTyresCanBurst(): boolean;
		getTyreSmokeColor(r: number, g: number, b: number): {
			r: number;
			g: number;
			b: number
		};
		getVehicleTrailer(vehicle: Handle): Handle;
		getWheelType(): number;
		getWindowTint(): number;
		isAConvertible(p0: boolean): boolean;
		isAlarmActivated(): boolean;
		isAnySeatEmpty(): boolean;
		isAttachedToCargobob(vehicleAttached: Handle): boolean;
		isAttachedToTowTruck(vehicle: Handle): boolean;
		isAttachedToTrailer(): boolean;
		isBig(): boolean;
		isBumberBrokenOff(front: boolean): boolean;
		isCargobobHookActive(): boolean;
		isCargobobMagnetActive(): boolean;
		isDamaged(): boolean;
		isDoorDamaged(doorId: number | number): boolean;
		isDriveable(p0: boolean): boolean;
		isExtraTurnedOn(extraId: number): boolean;
		isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
		isHighDetail(): boolean;
		isInBurnout(): boolean;
		isModel(model: Hash): boolean;
		isNeaonLightEnabled(index: number): boolean;
		isOnAllWheels(): boolean;
		isSearchlightOn(): boolean;
		isSeatFree(seatIndex: number): boolean;
		isSirenOn(): boolean;
		isSirenSoundOn(): boolean;
		isStolen(): boolean;
		isStopped(): boolean;
		isStoppedAtTrafficLights(): boolean;
		isStuckOnRoof(): boolean;
		isStuckTimerUp(p0: number, p1: number): boolean;
		isTaxiLightOn(): boolean;
		isToggleModOn(modType: number): boolean;
		isTyreBurst(wheelId: number, completely: boolean): boolean;
		isVisible(): boolean;
		isWindowIntact(windowIndex: number): boolean;
		jitter(p0: boolean, yaw: number, pitch: number, roll: number): void;
		lowerConvertibleRoof(instantlyLower: boolean): void;
		movable(): boolean;
		openBombBayDoors(): void;
		raiseConvertibleRoof(instantlyRaise: boolean): void;
		releasePreloadMods(): void;
		removeHighDetailModel(): void;
		removeMod(modType: number): void;
		removeUpsidedownCheck(): void;
		removeWindow(windowIndex: number): void;
		requestHighDetailModel(): void;
		resetStuckTimer(reset: boolean): void;
		resetWheels(toggle: boolean): void;
		retractCargobobHook(): void;
		rollDownWindow(windowIndex: number): void;
		rollDownWindows(): void;
		rollUpWindow(windowIndex: number): void;
		setAlarm(state: boolean): void;
		setAllowNoPassengersLockon(toggle: boolean): void;
		setAllsSpawns(p0: boolean, p1: boolean, p2: boolean): void;
		setAutomaticallyAttaches(p0: any, p1: any): void;
		setBikeLeanAngle(x: number, y: number): void;
		setBoatAnchor(toggle: boolean): void;
		setBodyHealth(value: number): void;
		setBreakLights(toggle: boolean): void;
		setBurnout(toggle: boolean): void;
		setCanBeTargetted(state: boolean): void;
		setCanBeUsedByFleeingPeds(toggle: boolean): void;
		setCanBeVisiblyDamaged(state: boolean): void;
		setCanBreak(toggle: boolean): void;
		setCanRespray(state: boolean): void;
		setCeilingHeight(p0: number): void;
		setColourCombination(numCombos: number): void;
		setColours(colorPrimary: number, colorSecondary: number): void;
		setConvertibleRoof(p0: boolean): void;
		setCreatesMoneyPickupsWhenExploded(toggle: boolean): void;
		setCustomPrimaryColour(r: number, g: number, b: number): void;
		setCustomSecondaryColour(r: number, g: number, b: number): void;
		setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p5: boolean): void;
		setDeformationFixed(): void;
		setDirtLevel(dirtLevel: number): void;
		setDisablePetrolTankDamage(toggle: boolean): void;
		setDisablePetrolTankFires(toggle: boolean): void;
		setDoorBreakable(doorIndex: number, isBreakable: boolean): void;
		setDoorBroken(doorIndex: number, createDoorObject: boolean): void;
		setDoorControl(doorIndex: number, speed: number, angle: number): void;
		setDoorLatched(doorIndex: number, p1: boolean, p2: boolean, p3: boolean): void;
		setDoorOpen(doorIndex: number, loose: boolean, openInstantly: boolean): void;
		setDoorShut(doorIndex: number, closeInstantly: boolean): void;
		setDoorsLocked(doorLockStatus: number): void;
		setDoorsLockedForAllPlayers(toggle: boolean): void;
		setDoorsLockedForPlayer(player: Handle, toggle: boolean): void;
		setDoorsLockedForTeam(team: number, toggle: boolean): void;
		setDoorsShut(closeInstantly: boolean): void;
		setEngineCanDegrade(toggle: boolean): void;
		setEngineHealth(health: number): void;
		setEngineOn(value: boolean, instantly: boolean, otherwise: boolean): void;
		setEnginePowerMultiplier(value: number): void;
		setEngineTorqueMultiplier(value: number): void;
		setExclusiveDriver(ped: Handle, p1: number): void;
		setExplodesOnHighExplosionDamage(toggle: boolean): void;
		setExtra(extraId: number, toggle: boolean): void;
		setExtraColours(pearlescentColor: number, wheelColor: number): void;
		setFixed(): void;
		setForwardSpeed(speed: number): void;
		setFrictionOverride(friction: number): void;
		setFullbeam(toggle: boolean): void;
		setGravity(toggle: boolean): void;
		setHalt(distance: number, killEngine: boolean, unknown: boolean): void;
		setHandbrake(toggle: boolean): void;
		setHandling(typeName: string, value: number | string): void;
		setHasBeenOwnedByPlayer(owned: boolean): void;
		setHasStrongAxles(toggle: boolean): void;
		setHeliBladesFullSpeed(): void;
		setHeliBladeSpeed(speed: number): void;
		setHelicopterRollPitchYawMult(multiplier: number): void;
		setIndicatorLights(turnSignal: number, toggle: boolean): void;
		setInteriorLight(toggle: boolean): void;
		setIsConsideredByPlayer(toggle: boolean): void;
		setIsStolen(isStolen: boolean): void;
		setIsWanted(state: boolean): void;
		setJetEngineOn(toggle: boolean): void;
		setLandingGear(state: number): void;
		setLightMultiplier(multiplier: number): void;
		setLights(state: number | boolean): void;
		setLivery(livery: number): void;
		setLodMultiplier(multiplier: number): void;
		setMissionTrainCoords(x: number, y: number, z: number): void;
		setMod(modType: number, modIndex: number): void;
		setModColor1(paintType: number, color: number, p2: number): void;
		setModColor2(paintType: number, color: number): void;
		setModKit(modKit: number): void;
		setNameDebug(name: string): void;
		setNeedsToBeHotwired(toggle: boolean): void;
		setNeonLightEnabled(index: number, toggle: boolean): void;
		setNeonLightsColour(r: number, g: number, b: number): void;
		setNumberPlateText(plateText: string): void;
		setNumberPlateTextIndex(plateIndex: number): void;
		setOnGroundProperly(): boolean;
		setOutOfControl(killDriver: boolean, explodeOnImpact: boolean): void;
		setPaintFade(fade: number): void;
		setPedEnabledBikeRingtone(p0: any): boolean;
		setPedTargettableDestory(vehicleComponent: number, destroyType: number): void;
		setPetrolTankHealth(fix: number): void;
		setPlaneMinHeightAboveGround(height: number): void;
		setPlaybackToUseAi(flag: number): void;
		setPlayersLast(): void;
		setProvidesCover(toggle: boolean): void;
		setReduceGrip(toggle: boolean): void;
		setRenderTrainAsDerailed(toggle: boolean): void;
		setRudderBroken(p0: boolean): void;
		setSearchlight(toggle: boolean, canBeUsedByAI: boolean): void;
		setSilent(toggle: boolean): void;
		setSiren(toggle: boolean): void;
		setSteerBias(value: number): void;
		setStrong(toggle: boolean): void;
		setTaxiLight(state: boolean): void;
		setTimedExplosion(ped: Handle, toggle: boolean): void;
		setTowTruckCraneHeight(height: number): void;
		setTrainCruiseSpeed(speed: number): void;
		setTrainSpeed(speed: number): void;
		setTyreBurst(tyreIndex: number, onRim: boolean, p2: number): void;
		setTyreFixed(tyreIndex: number): void;
		setTyresCanBurst(toggle: boolean): void;
		setTyreSmokeColor(r: number, g: number, b: number): void;
		setUndriveable(toggle: boolean): void;
		setWheelsCanBreak(enabled: boolean): void;
		setWheelsCanBreakOffWhenBlowUp(toggle: boolean): void;
		setWheelType(wheelType: number): void;
		setWindowTint(tint: number): void;
		smashWindow(index: number): void;
		startAlarm(): void;
		startHorn(duration: number, model: Hash, forever: boolean): void;
		steerUnlockBias(toggle: boolean): void;
		toggleMod(modType: number, toggle: boolean): void;
		trackVisibility(): void;
		wasCounterActivated(p0: any): boolean;
	}

	// -------------------------------------------------------------------------
	// Simple MP types
	// -------------------------------------------------------------------------

	interface Browser {
		active: boolean;
		url: string;

		destroy(): void;
		execute(code: string): void;
		markAsChat(): void;
		reload(ignoreCache: boolean): void;
	}

	interface Camera {
		animatedShake(p0: string, p1: string, p2: string, p3: number): void;
		attachTo(entity: Handle, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number,
			zRot: number, p8: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number,
			fixedRot: boolean): void;
		attachTo(entity: Handle, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
		attachToPedBone(ped: Handle, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
		destroy(destroy?: boolean): void;
		detach(): void;
		doesExist(): boolean;
		getAnimCurrentPhase(): number;
		getCoord(): Vector3;
		getDirection(): Vector3;
		getFarClip(): number;
		getFarDof(): number;
		getFov(): number;
		getNearClip(): number;
		getRot(p0: number): Vector3;
		getSplinePhase(): number;
		isActive(): boolean;
		isInterpolating(): boolean;
		isPlayingAnim(animName: string, animDictionary: string): boolean;
		isRendering(): boolean;
		isShaking(): boolean;
		playAnim(animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number,
			zRot: number, p8: boolean, p9: number): void;
		playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number,
			bitset: any): boolean;
		pointAt(entity: Entity, offsetX: number, offsetY: number, offsetZ: number, p4: boolean): void;
		pointAtCoord(x: number, y: number, z: number): void;
		pointAtPedBone(ped: Handle, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;
		setActive(active: boolean): void;
		setActiveWithInterp(camFrom: Handle, duration: number, easeLocation: number, easeRotation: number): void;
		setAffectsAiming(toggle: boolean): void;
		setAnimCurrentPhase(phase: number): void;
		setCoord(posX: number, posY: number, posZ: number): void;
		setDebugName(name: string): void;
		setDofFnumberOfLens(p1: number): void;
		setDofFocusDistanceBias(p0: number): void;
		setDofMaxNearInFocusDistance(p0: number): void;
		setDofMaxNearInFocuxDistanceBlendLevel(p0: number): void;
		setDofPlanes(p0: number, p1: number, p2: number, p3: number): void;
		setDofStrength(dofStrength: number): void;
		setFarClip(farClip: number): void;
		setFarDof(farDof: number): void;
		setFov(fieldOfView: number): void;
		setInheritRollVehicle(p1: boolean): void;
		setMotionBlurStrength(strength: number): void;
		setNearClip(nearClip: number): void;
		setNearDof(nearDof: number): void;
		setParams(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, fov: number, duration: number,
			p8: number, p9: number, p10: number): void;
		setRot(rotX: number, rotY: number, rotZ: number, p3: number): void;
		setShakeAmplitude(amplitude: number): void;
		setUseShallowDofMode(toggle: boolean): void;
		shake(type: string, amplitude: number): void;
		stopPointing(): void;
		stopShaking(p0: boolean): void;
	}

	interface Discord {
		update(status: string, state: string): void;
	}

	interface Keys {
		bind(keyCode: number, keyHold: boolean, handler: Function): void;
		isUp(keyCode: number): boolean;
		isDown(keyCode: number): boolean;
		unbind(keyCode: number, keyHold: boolean, handler?: Function): void;
	}

	interface Nametags {
		enabled: boolean;

		set(...value: any[]): void; // TODO
		update(...value: any[]): void; // TODO
	}

	interface Raycasting {
		testPointToPoint(startPos: Vector3, endPos: Vector3, ignoreEntity?: Handle, flags?: number): RaycastResult; // TODO: ignoreEntity
		testCapsule(startPos: Vector3, endPos: Vector3, radius: number, ignoreEntity?: Handle, flags?: number[]): RaycastResult; // TODO: ignoreEntity
	}

	interface Storage {
		data: { [key: string]: any };

		flush(): void;
	}

	// -------------------------------------------------------------------------
	// Game MP types
	// -------------------------------------------------------------------------

	interface GameApp {
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

	interface GameAudio {
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

	interface GameBrain {
		addScriptToRandom(name: string, model: Hash, p2: number, p3: number): void;
		disableScriptBrainSet(brainSet: number): void;
		enableScriptBrainSet(brainSet: number): void;
		isObjectWithinBrainActivationRange(object: Handle): boolean;
		registerObjectScriptBrain(stringName: string, p1: Hash, p2: number, p3: number, p4: number, p5: number): void;
		registerWorldPointScriptBrain(p0: any, p1: number, p2: any): void;
	}

	interface GameCam {
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
		getGameplayCamRot(p0: number): Vector3;
		getGameplayCamRot(p0: number): Vector3;
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

	interface GameControls {
		disableAllControlActions(inputGroup: number): void;
		disableControlAction(inputGroup: number, control: number, disable: boolean): void;
		enableAllControlActions(inputGroup: number): void;
		enableControlAction(inputGroup: number, control: number, enable: boolean): void;
		getControlActionName(inputGroup: number, control: number, p2: boolean): string;
		getControlNormal(inputGroup: number, control: number): number;
		getControlValue(inputGroup: number, control: number): number;
		getDisabledControlNormal(inputGroup: number, control: number): number;
		isControlEnabled(inputGroup: number, control: number): boolean;
		isControlJustPressed(inputGroup: number, control: number): boolean;
		isControlJustReleased(inputGroup: number, control: number): boolean;
		isControlPressed(inputGroup: number, control: number): boolean;
		isControlReleased(inputGroup: number, control: number): boolean;
		isDisabledControlJustPressed(inputGroup: number, control: number): boolean;
		isDisabledControlJustReleased(inputGroup: number, control: number): boolean;
		isInputDisabled(inputGroup: number): boolean;
		isInputJustDisabled(inputGroup: number): boolean;
		setControlNormal(inputGroup: number, control: number, amount: number): boolean;
		setInputExclusive(inputGroup: number, control: number): void;
		setPadShake(p0: number, duration: number, frequency: number): void;
		setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
		stopPadShake(p0: any): void;
	}

	interface GameCutscene {
		setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: Hash): void;
		getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: Hash): Entity;
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
		getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: Hash): Entity;
		requestCutscene2(cutsceneName: string, p1: number, p2: number): void;
		stopCutscene(p0: boolean): void;
		registerEntityForCutscene(cutscenePed: Handle, cutsceneEntName: string, p2: number, modelHash: number, p4: number): void;
	}

	interface GameDatafile {
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
		arrayValueGetVector3(arrayData: any, arraayIndex: number): Vector3;
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
		objectValueGetVector3(objectData: any, key: string): Vector3;

	}

	interface GameDecisionevent {
		addShockingEventAtPosition(type: number, x: number, y: number, z: number, duration: number): GameScript;
		addShockingEventForEntity(type: number, entity: Handle, duration: number): GameScript;
		blockDecisionMakerEvent(name: Hash, type: number): void;
		clearDecisionMakerEventResponse(name: Hash, type: number): void;
		isShockingEventInSphere(type: number, x: number, y: number, z: number, radius: number): boolean;
		removeAllShockingEvents(p0: boolean): void;
		removeShockingEvent(event: GameScript): boolean;
		suppressShockingEvent(type: number | number): void;
		unblockDecisionMakerEvent(name: Hash, type: number): void;
	}

	interface GameDecorator {
		decorIsRegisteredAsType(propertyName: string, type: number): boolean;
		decorRegister(propertyName: string, type: number): void;
	}

	interface GameDlc1 {
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
		getNumPropsFromOutfit(p0: number | number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
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

	interface GameDlc2 {
		isDlcPresent(dlcHash: Hash): boolean;
		nullify(variable: any, unused: any): boolean;
	}

	interface GameEntity {
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

	interface GameFire {
		addSpecfxExplosion(x: number, y: number, z: number, explosionType: number, explosionFx: Hash,
			damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
		getClosestFirePos(outPosition: Vector3, x: number, y: number, z: number): Vector3;
		getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
		getPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number,
			z2: number, radius: number): Entity;
		isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number,
			angle: number): boolean;
		isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
		isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;
		removeScriptFire(fireHandle: Handle): void;
		startScriptFire(x: number, y: number, z: number, maxChildren: number, isGasFire: boolean): number;
		stopFireInRange(x: number, y: number, z: number, radius: number): void;
	}

	interface GameGameplay {
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
		createIncidentWithEntity(p0: number, p1: Entity, p2: number, p3: number, outIncident: number): number;
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
			spawnPoint: Vector3): Vector3;
		getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
		getBitsInRange(vars: number, rangeStart: number, rangeEnd: number): number;
		getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
		getFreeStackSlotsCount(stackSize: number): number;
		getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: boolean): number;
		getHashKey(value: string): Hash;
		getHeadingFromVector2d(dx: number, dy: number): number;
		getModelDimensions(modelHash: Hash, minimum: Vector3, maximum: Vector3): {
			minimum: Vector3;
			maximum: Vector3;
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

	interface GameGraphics {
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
				centre: boolean,
				color: RGBA,
				scale: Array2d,
				outline: boolean
			}
		): void;
		drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, r: number, g: number,
			b: number, alpha: number): void;
		enableAlienBloodVfx(toggle: boolean): void;
		enableClownBloodVfx(toggle: boolean): void;
		enableMovieSubtitles(toggle: boolean): void;
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
		getTextureResolution(textureDict: string, textureName: string): Vector3;
		hasHudScaleformLoaded(componentIndex: RageMP.Enums.HudComponent | number): boolean;
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
		pushScaleformMovieFunctionFromHudComponent(componentIndex: RageMP.Enums.HudComponent | number, functionName: string): boolean;
		pushScaleformMovieFunctionN(functionName: string): boolean;
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
		requestHudScaleform(componentIndex: RageMP.Enums.HudComponent | number): void;
		requestScaleformMovie(scaleformName: string): number;
		requestScaleformMovie3(scaleformName: string): number;
		requestScaleformMovieInstance(scaleformName: string): number;
		requestStreamedTextureDict(textureDict: string, p1: boolean): void;
		screen2dToWorld3d(screenPosition: Array2d, useRaycast?: boolean): Vector3;
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
	}

	interface GameInterior {
		addPickupToInteriorRoomByName(pickup: Pickup, roomName: string): void;
		areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
		capInterior(interiorId: number, toggle: boolean): void;
		disableInterior(interiorId: number, toggle: boolean): void;
		disableInteriorProp(interiorId: number, propName: string): void;
		enableInteriorProp(interiorId: number, propName: string): void;
		getInteriorAtCoords(x: number, y: number, z: number): number;
		getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
		getInteriorFromCollision(x: number, y: number, z: number): number;
		getInteriorGroupId(interiorId: number): number;
		getOffsetFromInteriorInWorldCoords(interiorId: number, x: number, y: number, z: number): Vector3;
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

	interface GameItemset {
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

	interface GameMobile {
		cellCamActivate(p0: boolean, p1: boolean): void;
		createMobilePhone(phoneType: number): void;
		getMobilePhonePosition(position: Vector3): Vector3;
		getMobilePhoneRenderId(renderId: number): number;
		getMobilePhoneRotation(rotation: Vector3, p1: any): Vector3;
		moveFinger(direction: number): void;
		scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
		setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
		setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: any): void;
		setMobilePhoneScale(scale: number): void;
		setPhoneLean(toggle: boolean): void;
	}

	interface GameObject {
		addDoorToSystem(doorHash: Hash, modelHash: Hash, x: number, y: number, z: number, p5: number,
			p6: number, p7: number): void;
		createAmbientPickup(pickupHash: Hash, posX: number, posY: number, posZ: number, p4: number, value: number,
			modelHash: Hash, p7: boolean, p8: boolean): Pickup;
		createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: Hash): void;
		createObject(modelHash: Hash, x: number, y: number, z: number, networkHandle: boolean,
			createHandle: boolean,dynamic: boolean): Handle;
		createObjectNoOffset(modelHash: Hash, x: number, y: number, z: number, networkHandle: boolean,
			createHandle: boolean, dynamic: boolean): Handle;
		createPickup(pickupHash: Hash, posX: number, posY: number, posZ: number, p4: number, value: number,
			p6: boolean, modelHash: Hash): Pickup;
		createPickupRotate(pickupHash: Hash, posX: number, posY: number, posZ: number, rotX: number, rotY: number,
			rotZ: number, flag: number, amount: number, p9: any, p10: boolean, modelHash: Hash): Pickup;
		createPortablePickup(pickupHash: Hash, x: number, y: number, z: number, placeOnGround: boolean,
			modelHash: Hash): Pickup;
		createPortablePickup2(pickupHash: Hash, x: number, y: number, z: number, placeOnGround: boolean,
			modelHash: Hash): Pickup;
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
			zOffset: number): Vector3;
		getPickupCoords(p0: any): number;
		getSafePickupCoords(x: number, y: number, z: number, p3: any, p4: any): Vector3;
		getStateOfClosestDoorOfType(type: Hash, x: number, y: number, z: number, locked: boolean, heading: number): {
			locked: boolean;
			heading: boolean;
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
		removePickup(pickup: Pickup): void;
		setDoorAccelerationLimit(doorHash: Hash, limit: number, p2: boolean, p3: boolean): void;
		setDoorAjarAngle(doorHash: Hash, ajar: number, p2: boolean, p3: boolean): void;
		setForceObjectThisFrame(p0: any, p1: any, p2: any, p3: any): void;
		setPickupRegenerationTime(p0: any, p1: any): void;
		setStateOfClosestDoorOfType(type: Hash, x: number, y: number, z: number, locked: boolean, heading: number,
			p6: boolean): void;
		setTeamPickupObject(p0: any, p1: any, p2: any): void;
		trackObjectVisibility(p0: any): void;
	}

	interface GamePathfind {
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
		getClosestMajorVehicleNode(x: number, y: number, z: number, outPosition: Vector3, unknown1: number,
			unknown2: number): Vector3;
		getClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, p7: number,
			p8: number, p9: number, p10: boolean): boolean;
		getClosestVehicleNode(x: number, y: number, z: number, outPosition: Vector3, nodeType: number, p5: number,
			p6: number): Vector3;
		getClosestVehicleNodeWithHeading(x: number, y: number, z: number, outPosition: Vector3, outHeading: number,
			nodeType: number, p6: number, p7: number): {
				outPosition: Vector3;
				outHeading: number;
		};
		getIsSlowRoadFlag(nodeID: number): boolean;
		getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3,
			unknown1: any, unknown2: any, unknown3: any): Vector3;
		getNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number,
			desiredZ: number, nthClosest: number, outPosition: Vector3, outHeading: number, nodetype: number, p10: any,
			p11: any): {
				outPosition: Vector3;
				outHeading: number;
		};
		getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
		getNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3,
			outHeading: number, p6: any, p7: number, p8: number): Vector3;
		getNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: Vector3,
			heading: number, unknown1: any, unknown2: number, unknown3: number, unknown4: number): {
				outPosition: Vector3;
				heading: number;
				unknown1: any;
		};
		getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean,
			outPosition: Vector3, heading: number): {
				outPosition: Vector3;
				outHeading: number;
		};
		getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, outPosition: Vector3, flags: number): Vector3;
		getStreetNameAtCoord(x: number, y: number, z: number, streetName: number, crossingRoad: number): {
			streetName: number;
			crossingRoad: number;
		};
		getSupportsGpsRouteFlag(nodeID: number): boolean;
		getVehicleNodePosition(nodeId: number, outPosition: Vector3): Vector3;
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

	interface GamePed {
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
			yRot: number, zRot: number, p8: number, p9: number): Vector3;
		getAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number,
			yRot: number, zRot: number, p8: number, p9: number): Vector3;
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

	interface GamePlayer {
		arePlayerFlashingStarsAboutToDrop(): boolean;
		arePlayerStarsGreyedOut(): boolean;
		canPlayerStartMission(): boolean;
		disablePlayerFiring(toggle: boolean): void;
		disablePlayerVehicleRewards(): void;
		displaySystemSigninUi(unk: boolean): void;
		enableSpecialAbility(toggle: boolean): void;
		forceCleanup(cleanupFlags: number): void;
		forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
		forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
		getEntityPlayerIsFreeAimingAt(entity: Handle): boolean;
		getPlayerTargetEntity(entity: Handle): boolean;
		getTimeSincePlayerDroveAgainstTraffic(): number;
		getTimeSincePlayerDroveOnPavement(): number;
		getTimeSincePlayerHitPed(): number;
		getTimeSincePlayerHitVehicle(): number;
		getWantedLevelRadius(): boolean;
		getWantedLevelThreshold(wantedLevel: number): number;
		giveAchievementToPlayer(achievement: number): boolean;
		hasAchievementBeenPassed(achievement: number): boolean;
		hasForceCleanupOccurred(cleanupFlags: number): boolean;
		intToParticipantindex(value: number): number;
		intToPlayerindex(value: number): Handle;
		isPlayerFreeAimingAtEntity(entity: Handle): boolean;
		isPlayerTargettingEntity(entity: Handle): boolean;
		isSpecialAbilityActive(): boolean;
		isSpecialAbilityEnabled(): boolean;
		isSpecialAbilityMeterFull(): boolean;
		isSpecialAbilityUnlocked(playerModel: Hash): boolean;
		playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number,
			p7: number): void;
		reportCrime(crimeType: number, wantedLvlThresh: number): void;
		reserveEntityExplodesOnHighExplosionCombo(p1: number): void;
		resetWantedLevelDifficulty(): void;
		restorePlayerStamina(p1: number): void;
		setAirDragMultiplierForPlayersVehicle(multiplier: number): void;
		setAllRandomPedsFlee(toggle: boolean): void;
		setAllRandomPedsFleeThisFrame(): void;
		setAreasGeneratorOrientation(): void;
		setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;
		setDisableAmbientMeleeMove(toggle: boolean): void;
		setDispatchCopsForPlayer(toggle: boolean): void;
		setHudAnimStopLevel(toggle: boolean): void;
		setIgnoreLowPriorityShockingEvents(toggle: boolean): void;
		setMaxWantedLevel(maxWantedLevel: number): void;
		setMeleeWeaponDefenseModifier(modifier: number): void;
		setPlayerClothLockCounter(value: number): void;
		setPlayerClothPackageIndex(index: number): void;
		setPlayerTargetingMode(targetMode: number): void;
		setPoliceRadarBlips(toggle: boolean): void;
		setRunSprintMultiplierForPlayer(multiplier: number): void;
		setSpecialAbilityMultiplier(multiplier: number): void;
		setSwimMultiplierForPlayer(multiplier: number): void;
		setWantedLevelDifficulty(difficulty: number): void;
		setWantedLevelMultiplier(multiplier: number): void;
		simulatePlayerInputGait(amount: number,gaitType: number,speed: number,p4: boolean,p5: boolean): void;
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
		startPlayerTeleport(x: number,y: number,z: number,heading: number,p5: boolean,p6: boolean,p7: boolean): void;
	}

	interface GameRecorder {
		isRecording(): boolean;
		start(mode: number): void;
		stop(save: boolean): void;
	}

	interface GameRope {
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
		getCgoffset(rope: Handle): Vector3;
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

	interface GameScript {
		doesScriptExist(scriptName: string): boolean;
		getEventAtIndex(p0: number, eventIndex: number): number;
		getEventdata(p0: number, eventIndex: number, eventData: number, p3: number): number;
		getEventExists(p0: number, eventIndex: number): boolean;
		getNumberOfEvents(p0: number): number;
		getNumberOfInstancesOfStreamedScript(scriptHash: Hash): number;
		getThreadName(threadId: number): string;
		hasScriptLoaded(scriptName: string): boolean;
		hasStreamedScriptLoaded(scriptHash: Hash): boolean;
		isStreamedScriptRunning(scriptHash: Hash): boolean;
		isThreadActive(threadId: number): boolean;
		requestScript(scriptName: string): void;
		requestStreamedScript(scriptHash: Hash): void;
		setNoLoadingScreen(toggle: boolean): void;
		setScriptAsNoLongerNeeded(scriptName: string): void;
		setStreamedScriptAsNoLongerNeeded(scriptHash: Hash): void;
		terminateThread(threadId: number): void;
		triggerScriptEvent(p0: number, argsStruct: Vector3, argsStructSize: number, bitset: number): Vector3;
	}

	interface GameStats {
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

	interface GameStreaming {
		doesAnimDictExist(animDict: string): boolean;
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

	interface GameSystem {
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
		wait(ms: number): void;
	}

	interface GameTime {
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
	}

	interface GameUi {
		activateFrontendMenu(menuhash: Hash, Toggle_Pause: boolean, p2: number): void;
		addBlipForCoord(x: number, y: number, z: number): Blip;
		addBlipForPickup(pickup: Pickup): Blip;
		addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): Blip;
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
		getBlipInfoIdCoord(p0: number): Vector3;
		getHudColour(hudIndex: number, r: number, g: number, b: number, a: number): {
			hudIndex: number;
			r: number;
			g: number;
			b: number;
			a: number;
		};
		getHudComponentPosition(componentIndex: RageMP.Enums.HudComponent | number): number;
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
		hideHudComponentThisFrame(componentIndex: RageMP.Enums.HudComponent | number): void;
		hideScriptedHudComponentThisFrame(componentIndex: RageMP.Enums.HudComponent | number): void;
		hideSpecialAbilityLockonOperation(p0: any, p1: boolean): void;
		isHudComponentActive(componentIndex: RageMP.Enums.HudComponent | number): boolean;
		isMinimapAreaRevealed(x: number, y: number, radius: number): boolean;
		isNamedRendertargetLinked(hash: Hash): boolean;
		isNamedRendertargetRegistered(p0: string): boolean;
		isPauseMenuActive(): boolean;
		isScriptedHudComponentActive(componentIndex: RageMP.Enums.HudComponent | number): boolean;
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
		resetHudComponentValues(componentIndex: RageMP.Enums.HudComponent | number): void;
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
		setHudColour(componentIndex: RageMP.Enums.HudComponent | number, r: number, g: number, b: number, a: number): void;
		setHudComponentPosition(componentIndex: RageMP.Enums.HudComponent | number, x: number, y: number): void;
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
		showHudComponentThisFrame(componentIndex: RageMP.Enums.HudComponent | number): void;
		showLoadingPrompt(busySpinnerType: number): void;
		showWeaponWheel(forcedShow: boolean): void;
		toggleStealthRadar(toggle: boolean): void;
	}

	interface GameUnk {
		getBroadcastFinishedLosSound(p0: boolean): void;
	}

	interface GameVehicle {
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
	}

	interface GameWater {
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

	interface GameWeapon {
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
		getWeaponObjectTintIndex(weapon: Entity): number;
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
		removeWeaponComponentFromWeaponObject(p0: any, p1: any): void;
		requestWeaponAsset(weaponHash: Hash, p1: number, p2: number): void;
		requestWeaponHighDetailModel(weaponObject: Handle): void;
		setFlashLightFadeDistance(distance: number): void;
		setPedAmmoToDrop(p0: any, p1: any): void;
		setWeaponObjectTintIndex(weapon: Entity, tint: number): void;
	}

	interface GameWorldprobe {
		castRayPointToPoint(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number,
			ignoreEntity: Entity, p8: number): number;
		getShapeTestResult(rayHandle: number, hit: boolean, endCoords: Vector3, surfaceNormal: Vector3,
			entityHit: Entity): {
				hit: boolean;
				endCoords: Vector3;
				surfaceNormal: Vector3;
				entityHit: Entity;
		};
		getShapeTestResultEx(rayHandle: number, hit: boolean, endCoords: Vector3, surfaceNormal: Vector3,
			materialHash: number, entityHit: Entity): {
				hit: boolean;
				endCoords: Vector3;
				surfaceNormal: Vector3;
				materialHash: number;
				entityHit: Entity;
		};
		startShapeTestBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, rotX: number, rotY: number,
			rotZ: number, p9: any, p10: any, ignoreEntity: Entity, p12: any): number;
		startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number,
			flags: number, ignoreEntity: Entity, p9: number): number;
		startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number,
			ignoreEntity: Entity, p8: number): number;
	}

	interface GameZone {
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

	// -------------------------------------------------------------------------
	// Gui MP types
	// -------------------------------------------------------------------------

	interface GuiChat {
		colors: boolean;
		safe: boolean;

		activate(state: boolean): void;
		push(text: string): void;
		show(state: boolean): void;
	}

	interface GuiCursor {
		position: Array2d;
		visible: boolean;

		show(state: boolean, freezeControls: boolean): void;
	}

	// -------------------------------------------------------------------------
	// Pool MP types
	// -------------------------------------------------------------------------

	interface BlipPool extends EntityPool<Blip> {
		"new"(sprite: number, position: Vector3, options?: {
			alpha?: number,
			color?: number,
			dimension?: number,
			drawDistance?: number,
			name?: string,
			rotation?: number,
			scale?: number,
			shortRange?: boolean
		}): Blip;
	}

	interface BrowserPool extends EntityPool<Browser> {
		"new"(url: string): Browser;
	}

	interface CameraPool extends EntityPool<Camera> {
		"new"(name: string, position?: Vector3, rotation?: Vector3, fov?: number): Camera;
	}

	interface CheckpointPool extends EntityPool<Checkpoint> {
		"new"(type: number, position: Vector3, radius: number, options?: {
			color?: RGBA,
			dimension?: number,
			direction?: Vector3,
			visible?	: boolean
		}): Checkpoint;
	}

	interface ColshapePool extends EntityPool<Colshape> {
		newCircle(x: number, y: number, range: number): Colshape;
		newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number): Colshape;
		newRectangle(x: number, y: number, width: number, height: number): Colshape;
		newSphere(x: number, y: number, z: number, range: number): Colshape;
		newTube(x: number, y: number, z: number, range: number, height: number): Colshape;
	}

	interface EntityPool<TEntity> {
		readonly length: number;
		readonly size: number;

		apply(fn: (...args: any[]) => void, ...args: any[]): void;
		at(index: number): TEntity;
		atHandle(handle: number): TEntity;
		atRemoteId(remoteId: number): TEntity;
		exists(entity: TEntity | number): boolean;
		forEach(fn: (entity: TEntity) => void): void;
		forEachInRange(position: Vector3, range: number, fn: (entity: TEntity) => void): void;
		forEachInDimension(position: Vector3, range: number, dimension: number, fn: (entity: TEntity) => void): void;
		forEachInStreamRange(fn: (entity: TEntity) => void): void;
		toArray(): TEntity[];
	}

	interface EventPool {
		add(eventName: RageMP.Enums.Event | string, callback: (...args: any[]) => void): void;
		add(events: ({ [name: string]: (...args: any[]) => void; })): void;
		call(eventName: string, ...args: any[]): void;
		callRemote(eventName: string, ...args: any[]): void;
		remove(eventName: string, handler?: (...args: any[]) => void): void;
		remove(eventNames: string[]): void;
	}

	interface MarkerPool extends EntityPool<Marker> {
		"new"(type: number, position: Vector3, scale: number, options?: {
			bobUpAndDown?: boolean,
			color?: RGBA,
			dimension?: number,
			direction?: Vector3,
			rotation?: Vector3,
			visible?: boolean
		}): Marker;
	}

	interface ObjectPool extends EntityPool<Object> {
		"new"(model: HashOrString, position: Vector3, options?: {
			alpha?: number,
			dimension?: number,
			rotation?: Vector3
		}): Object;
	}

	interface PedPool extends EntityPool<Ped> {
		"new"(model: RageMP.Hashes.Ped | Hash, position: Vector3, heading: number,
			streamInEventHandler?: (ped: Ped) => void, dimension?: number): Ped;
	}

	interface PickupPool extends EntityPool<Pickup> {
		"new"(...args: any[]): Pickup; // TODO
	}

	interface PlayerPool extends EntityPool<Player> {
		local: Player;
	}

	interface TextLabelPool extends EntityPool<TextLabel> {
		"new"(text: string, position: Vector3, options?: {
			color?: RGBA,
			dimension?: number,
			drawDistance?: number,
			font?: number,
			los?: boolean
		}): TextLabel;
	}

	interface VehiclePool extends EntityPool<Vehicle> {
		"new"(model: RageMP.Hashes.Weapon | HashOrString, position: Vector3, options?: {
			alpha?: number,
			color?: [ Array2d, Array2d ] | [ RGB, RGB ],
			dimension?: number,
			engine?: boolean,
			heading?: number;
			locked?: boolean,
			numberPlate?: string
		}): Vehicle;
	}

	// -------------------------------------------------------------------------
	// Additional MP types
	// -------------------------------------------------------------------------

	type Vector3 = {
		new(x: number, y: number, z: number): Vector3;

		x: number;
		y: number;
		z: number;
	}

	type Quaternion = {
		new(x: number, y: number, z: number, w: number): Vector3;

		x: number;
		y: number;
		z: number;
		w: number;
	}

	type RaycastResult = {
		entity: Entity,
		position: Vector3,
		surfaceNormal: Vector3
	}
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------

declare const mp: RageMP.MpObject;
