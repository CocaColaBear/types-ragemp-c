/// <reference path="enums.d.ts" />
/// <reference path="natives.d.ts" />

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
type integer = number;

// -------------------------------------------------------------------------
// Main MP interfaces
// -------------------------------------------------------------------------

interface Mp {
	blips: BlipMpPool;
	browsers: BrowserMpPool;
	cameras: CameraMpPool;
	checkpoints: CheckpointMpPool;
	colshapes: ColshapeMpPool;
	console: ConsoleMp;
	discord: DiscordMp;
	dummies: DummyEntityMpPool;
	events: EventMpPool;
	game: MpGame2;
	gui: GuiMp;
	keys: KeysMp;
	labels: TextLabelMpPool;
	markers: MarkerMpPool;
	nametags: NametagsMp;
	objects: ObjectMpPool;
	peds: PedMpPool;
	pickups: PickupMpPool;
	players: PlayerMpPool;
	raycasting: RaycastingMp;
	storage: StorageMp;
	system: SystemMp;
	user: UserMp;
	Vector3: Vector3Mp;
	vehicles: VehicleMpPool;
	voiceChat: VoiceChatMp;
}

interface GuiMp {
	chat: GuiChatMp;
	cursor: GuiCursorMp;

	execute(code: string): void;
	takeScreenshot(name: string, type: RageEnums.ScreenshotType | number, quality: number, compressionQuality: number): void;
}

// -------------------------------------------------------------------------
// Entity MP types
// -------------------------------------------------------------------------

interface BlipMp {
	dimension: number;
	handle: number;
	id: number;
	remoteId: number;
	type: string;

	addTextComponentSubstringName(): void;
	destroy(): void;
	doesExist(): boolean;
	endTextCommandSetName(): void;
	getAlpha(): number;
	getColour(): number;
	getCoords(): Vector3Mp;
	getFirstInfoId(): BlipMp;
	getHudColour(): number;
	getInfoIdDisplay(): number;
	getInfoIdEntityIndex(): Handle;
	getInfoIdPickupIndex(): PickupMp;
	getInfoIdType(): number;
	getNextInfoId(): BlipMp;
	getSprite(): number;
	getVariable(value: string): any;
	hasVariable(value: string): boolean;
	hideNumberOn(): void;
	isFlashing(): boolean;
	isMissionCreator(): boolean;
	isOnMinimap(): boolean;
	isShortRange(): boolean;
	pulse(): void;
	setAlpha(alpha: number): void;
	setAsFriendly(toggle: boolean): void;
	setAsMissionCreator(toggle: boolean): void;
	setAsShortRange(toggle: boolean): void;
	setBright(toggle: boolean): void;
	setCategory(index: number): void;
	setColour(color: number): void;
	setCoords(position: Vector3Mp): void;
	setDisplay(displayId: number): void;
	setFade(opacity: number, duration: number): void;
	setFlashes(toggle: boolean): void;
	setFlashesAlternate(toggle: boolean): void;
	setFlashInterval(p1: any): void;
	setFlashTimer(duration: number): void;
	setHighDetail(toggle: boolean): void;
	setNameFromTextFile(gxtEntry: string): void;
	setNameToPlayerName(player: PlayerMp): void;
	setPosition(posX: number, posY: number, posZ: number): void;
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

interface EntityMp {
	alpha: number;
	dimension: number;
	model: number;
	position: Vector3Mp;
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
	dist(position: Vector3Mp): number;
	distSquared(position: Vector3Mp): number;
	doesBelongToThisScript(p0: boolean): boolean;
	doesExist(): boolean;
	doesHaveDrawable(): boolean;
	doesHavePhysics(): boolean;
	forceAiAndAnimationUpdate(): void;
	forceStreamingUpdate(): void;
	freezePosition(toggle: boolean): void;
	getAlpha(): number;
	getAnimCurrentTime(animDict: string, animName: string): number;
	getAnimTotalTime(animDict: string, animName: string): number;
	getAttachedTo(): Handle;
	getBoneIndexByName(boneName: string): number;
	getCollisionNormalOfLastHitFor(): Vector3Mp;
	getCoords(alive: boolean): Vector3Mp;
	getForwardVector(): Vector3Mp;
	getForwardX(): number;
	getForwardY(): number;
	getHeading(): number;
	getHealth(): number;
	getHeight(x: number, y: number, z: number, atTop: boolean, inWorldCoords: boolean): number;
	getHeightAboveGround(): number;
	getLastMaterialHitBy(): Hash;
	getLodDist(): number;
	getMatrix(rightVector: Vector3Mp, forwardVector: Vector3Mp, upVector: Vector3Mp, position: Vector3Mp): {
		rightVector: Vector3Mp;
		forwardVector: Vector3Mp;
		upVector: Vector3Mp;
		position: Vector3Mp;
	};
	getMaxHealth(): number;
	getModel(): Hash;
	getNearestPlayerTo(): Handle;
	getNearestPlayerToOnTeam(team: number): Handle;
	getObjectIndexFromIndex(): Handle;
	getOffsetFromGivenWorldCoords(posX: number, posY: number, posZ: number): Vector3Mp;
	getOffsetFromInWorldCoords(offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;
	getPedIndexFromIndex(): Handle;
	getPhysicsHeading(): number;
	getPitch(): number;
	getPopulationType(): number;
	getQuaternion(x: number, y: number, z: number, w: number): {
		x: number;
		y: number;
		z: number;
		w: number;
	};
	getRoll(): number;
	/**
	 * @param {number} - Int (specifies which axis rotates before the other axis in a certain order)
	 *
	 * Rotation Orders
	 * <pre>
	 * 0: ZYX
	 * 1: YZX
	 * 2: ZXY
	 * 3: XZY
	 * 4: YXZ
	 * 5: XYZ
	 * </pre>
	 *
	 * {@link https://wiki.rage.mp/index.php?title=Entity::getRotation|Entity::getRotation}
	 * */
	getRotation(rotationOrder: number): Vector3Mp;
	getRotationVelocity(): Vector3Mp;
	getScript(script: Handle): Handle;
	getSpeed(): number;
	getSpeedVector(relative: boolean): Vector3Mp;
	getSubmergedLevel(): number;
	getType(): number;
	getUprightValue(): number;
	getVariable(value: string): any;
	getVehicleIndexFromIndex(): Handle;
	getVelocity(): Vector3Mp;
	getWorldPositionOfBone(boneIndex: number): Vector3Mp;
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
	setCoordsNoOffset(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
	setDynamic(toggle: boolean): void;
	setHasGravity(toggle: boolean): void;
	setHeading(heading: number): void;
	setHealth(health: number): void;
	setInvincible(toggle: boolean): void;
	setIsTargetPriority(p0: boolean, p1: number): void;
	setLights(toggle: boolean): void;
	/**
	 * Loads collision grid for an entity spawned outside of a player's loaded area. This allows peds to execute tasks rather than sit dormant because of a lack of a physics grid.
	 *
	 * Certainly not the main usage of this native but when set to true for a Vehicle, it will prevent the vehicle to explode if it is spawned far away from the player.

	 * @param {boolean} toggle
	 *
	 * @return {void}
	 */
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

interface CheckpointMp extends EntityMp {
	// TODO
}

interface ColshapeMp extends EntityMp {
	triggered: boolean;
}

interface DummyEntityMp {
	// TODO (temporary solution):
	// Since this is a very abstract concept, it is not at all a familiar essence, but it has most of its properties.
	// The easiest option is, of course, to inherit the EntityMpPool interface, but this will add
	// non-existent methods and parameters associated with the dimension and position.
	// It is proposed in the future to introduce a more abstract concept than an entity, which will have only an ID, a type and several basic
	// methods such as deletion, enumeration and transformation into an array. The same goes for the entity pool.

	readonly dummyType: number;
	readonly id: number;
	readonly remoteId: number;
	readonly type: string;

	getVariable(value: string): any;
}

interface MarkerMp extends EntityMp {
	// TODO
}

interface ObjectMp extends EntityMp {
	hidden: boolean;
	isWeak: boolean;
	notifyStreaming: boolean;
	streamingRange: number;
	rotation: Vector3Mp;

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

interface PedBaseMp extends EntityMp {
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
	canRagdoll(): boolean;
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
	clearLastDamageBone(): void;
	clearProp(propId: number): void;
	clearTasks(): void;
	clearTasksImmediately(): void;
	clearWetness(): void;
	clone(heading: number, networkHandle: boolean, pedHandle: boolean): Handle;
	cloneToTarget(ped2: Handle): void;
	controlMountedWeapon(): boolean;
	forceMotionState(motionStateHash: Hash, p2: boolean, p3: boolean, p4: boolean): boolean;
	forceToOpenParachute(): void;
	getAccuracy(): number;
	getAlertness(): number;
	getAmmoInClip(weapon: Hash): number;
	getArmour(): number;
	getBoneCoords(boneId: number, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;
	getBoneIndex(boneId: number): number;
	getCauseOfDeath(): Hash;
	getCombatFloat(ped: Handle, p1: number): number
	getCombatMovement(): number;
	getCombatRange(): number;
	getConfigFlag(flagId: number, p2: boolean): boolean;
	getDeadPickupCoords(p1: number, p2: number): Vector3Mp;
	getDecorationsState(): number;
	getDefensiveAreaPosition(p1: boolean): Vector3Mp;
	getDesiredMoveBlendRatio(): number;
	getDrawableVariation(componentId: number): number;
	getEnveffScale(): number;
	getExtractedDisplacement(worldSpace: boolean): Vector3Mp;
	getFloodInvincibility(p1: boolean): void;
	getGroupIndex(): number;
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
	getIsTaskActive(taskNumber: number): boolean;
	getJackTarget(): Handle;
	getLastDamageBone(outBone: number): number;
	getMaxHealth(): number;
	getMeleeTargetFor(): Handle;
	getMoney(): number;
	getMount(): Handle;
	getNavmeshRouteDistanceRemaining(p1: any, p2: any): any;
	getNearbyPeds(sizeAndPeds: number, ignore: number): number;
	getNearbyVehicles(sizeAndVehs: number): number;
	getNumberOfDrawableVariations(componentId: number): number;
	getNumberOfPropDrawableVariations(propId: number): number;
	getNumberOfPropTextureVariations(propId: number, drawableId: number): number;
	getNumberOfTextureVariations(componentId: number, drawableId: number): number;
	getPaletteVariation(componentId: number): number;
	getParachuteLandingType(): number;
	getParachuteState(): number;
	getParachuteTintIndex(tintIndex: number): number;
	getPhoneGestureAnimCurrentTime(): number;
	getPhoneGestureAnimTotalTime(): number;
	getPlayerIsFollowing(): Handle;
	getPropIndex(componentId: number): number;
	getPropTextureIndex(componentId: number): number;
	getRagdollBoneIndex(bone: number): number;
	getRelationshipBetweens(ped2: Handle): void;
	getRelationshipGroupDefaultHash(): Hash;
	getRelationshipGroupHash(): Hash;
	getResetFlag(flagId: number): boolean;
	getScriptTaskStatus(taskHash: Hash): number;
	getSeatIsTryingToEnter(): number;
	getSequenceProgress(): number;
	getsJacker(): Handle;
	getSourceOfDeath(): Handle;
	getTextureVariation(componentId: number): number;
	getTimeOfDeath(): number;
	getType(): number;
	getVehicleIsIn(getLastVehicle: boolean): Handle;
	getVehicleIsTryingToEnter(): Handle;
	getVehicleIsUsing(): Handle;
	giveHelmet(cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;
	giveNmMessage(): void;
	giveWeapon(weapon: RageEnums.Hashes.Weapon | Hash, ammo: number, equipNow: boolean): void;
	hasHeadBlendFinished(): boolean;
	isActiveInScenario(): boolean;
	isAimingFromCover(): boolean;
	isBeingArrested(atArresting: boolean): boolean;
	isBeingJacked(): boolean;
	isBeingStealthKilled(): boolean;
	isBeingStunned(p1: number): boolean;
	isComponentVariationValid(componentId: number, drawableId: number, textureId: number): boolean;
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
	isPlayingPhoneGestureAnim(): boolean;
	isProne(): boolean;
	isPropValid(componentId: number, drawableId: number, TextureId: number): boolean;
	isRagdoll(): boolean;
	isReloading(): boolean;
	isRunning(): boolean;
	isRunningArrestTask(): boolean;
	isRunningMobilePhoneTask():boolean;
	isRunningRagdollTask(): boolean;
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
	isTracked(): boolean;
	isTrackedVisible(): boolean;
	isTryingToEnterALockedVehicle(): boolean;
	isUsingActionMode(): boolean;
	isUsingAnyScenario(): boolean;
	isUsingScenario(scenario: string): boolean;
	isVaulting(): boolean;
	isWalking(): boolean;
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
	removeWeapon(weapon: RageEnums.Hashes.Weapon | Hash): void;
	removeAllWeapons(): void;
	resetInVehicleContext(): void;
	resetLastVehicle(): void;
	resetMovementClipset(p1: number): void;
	resetRagdollTimer(): void;
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
	setAmmoInClip(weapon: RageEnums.Hashes.Weapon | Hash, ammo: number): void;
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
	setCanBeKnockedOffVehicle(state: number): void;
	setCanBeShotInVehicle(toggle: boolean): void;
	setCanBeTargetedWhenInjured(toggle: boolean): void;
	setCanBeTargetedWithoutLos(toggle: boolean): void;
	setCanBeTargetted(toggle: boolean): void;
	setCanBeTargettedByPlayer(player: Handle, toggle: boolean): void;
	setCanBeTargettedByTeam(team: number, toggle: boolean): void;
	setCanCowerInCover(toggle: boolean): void;
	setCanEvasiveDive(toggle: boolean): void;
	setCanHeadIk(toggle: boolean): void;
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
	setCapsule(value: number): void;
	setCombatAbility(p1: number): void;
	setCombatAttributes(attributeIndex: number, enabled: boolean): void;
	setCombatFloat(combatType: number, p2: number): void;
	setCombatMovement(combatMovement: number): void;
	setCombatRange(p1: number): void;
	setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
	setConfigFlag(flagId: number, value: boolean): void;
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
	setExclusivePhoneRelationships(): Handle;
	setEyeColor(index: number): void;
	setFaceFeature(index: number, scale: number): void;
	setFacialDecoration(collection: Hash, overlay: Hash): void;
	setFacialIdleAnimOverride(animName: string, animDict: string): void;
	setFiringPattern(patternHash: Hash): void;
	setFleeAttributes(attributes: number, p2: boolean): void;
	setGeneratesDeadBodyEvents(toggle: boolean): void;
	setGestureGroup(p1: any): void;
	setGetOutUpsideDownVehicle(toggle: boolean): void;
	setGravity(toggle: boolean): void;
	setGroupMemberPassengerIndex(index: number): void;
	setHairColor(colorID: number, highlightColorID: number): void;
	setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number,
		skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
	setHeadOverlay(overlayID: number, index: number, opacity: number, firstColor: number, secondColor: number): void;
	setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
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
	setKeepTask(toggle: boolean): void;
	setLegIkMode(mode: number): void;
	setLodMultiplier(multiplier: number): void;
	setMaxHealth(value: number): void;
	setMaxMoveBlendRatio(value: number): void;
	setMaxTimeInWater(value: number): void;
	setMaxTimeUnderwater(value: number): void;
	setMinGroundTimeForStungun(ms: number): void;
	setMinMoveBlendRatio(value: number): void;
	setModelIsSuppressed(toggle: boolean): void;
	setMoney(amount: number): void;
	setMotionBlur(toggle: boolean): void;
	setMountedWeaponTarget(targetEntity: Handle, p2: any, x: number, y: number, z: number): void;
	setMoveAnimsBlendOut(): void;
	setMovementClipset(clipSet: string, p2: number): void;
	setMoveRateOverride(value: number): void;
	setNameDebug(name: string): void;
	setNeverLeavesGroup(toggle: boolean): void;
	setParachuteTaskTarget(x: number, y: number, z: number): void;
	setParachuteTaskThrust(thrust: number): void;
	setParachuteTintIndex(tintIndex: number): void;
	setPathAvoidFire(avoidFire: boolean): void;
	setPathCanDropFromHeight(Toggle: boolean): void;
	setPathCanUseClimbovers(Toggle: boolean): void;
	setPathCanUseLadders(Toggle: boolean): void;
	setPathPreferToAvoidWater(avoidWater: boolean): void;
	setPathsWidthPlant(mayEnterWater: boolean): void;
	setPinnedDown(pinned: boolean, i: number): void;
	setPlaysHeadOnHornAnimWhenDiesInVehicle(toggle: boolean): void;
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
	setResetFlag(flagId: number, doReset: boolean): void;
	setResetFlagPreferRearSeats(flags: number): void;
	setResetRagdollFlag(flag: number): void;
	setScriptedAnimSeatOffset(p1: number): void;
	setSeeingRange(value: number): void;
	setShootRate(shootRate: number): void;
	setShootsAtCoord(x: number, y: number, z: number, toggle: boolean): void;
	setSphereDefensiveArea(x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
	setStayInVehicleWhenJacked(toggle: boolean): void;
	setStealthMovement(p1: boolean, action: string): void;
	setSteersAroundObjects(toggle: boolean): void;
	setSteersAroundPeds(toggle: boolean): void;
	setSteersAroundVehicles(toggle: boolean): void;
	setStrafeClipset(clipSet: string): void;
	setSuffersCriticalHits(toggle: boolean): void;
	setSweat(sweat: number): void;
	setTargetLossResponse(responseType: number): void;
	setTaskVehicleChaseBehaviorFlag(flag: number, set: boolean): void;
	setTaskVehicleChaseIdealPursuitDistance(distance: number): void;
	setToInformRespectedFriends(radius: number, maxFriends: number): void;
	setToLoadCover(toggle: boolean): void;
	setToRagdoll(time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): boolean;
	setUsingActionMode(p1: boolean, p2: any, action: string): void;
	setVisualFieldCenterAngle(angle: number): void;
	setVisualFieldMaxAngle(value: number): void;
	setVisualFieldMaxElevationAngle(angle: number): void;
	setVisualFieldMinAngle(value: number): void;
	setVisualFieldMinElevationAngle(angle: number): void;
	setVisualFieldPeripheralRange(range: number): void;
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
	wasKilledByStealth(): boolean;
	wasKilledByTakedown(): boolean;
	wasSkeletonUpdated(): boolean;
}

interface PedMp extends PedBaseMp {
	spawnPosition: Vector3Mp;
	taskPlayAnim(animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number,
	             flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
	setHeadOverlay(overlayID: number, index: number, opacity: number): void;
	setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
	setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: number): void;
	setHairColor(colorID: number, highlightColorID: number): void;
	setEyeColor(index: number): void;
	setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number,
	                 skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
	setFaceFeature(index: number, scale: number): void;
	// TODO
}

interface PickupMp extends EntityMp {

}

interface PlayerMp extends PedBaseMp {
	armour: number;
	eyeColour: number;
	hairColour: number;
	hairHighlightColour: number;
	heading: number;
	health: number;
	name: string;
	p2pEnabled: boolean;
	p2pConnected: boolean;
	voiceAutoVolume: boolean;
	voiceVolume: number;
	voice3d: any; // TODO
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
	readonly isTypingInTextChat: boolean;
	readonly isVoiceActive: boolean;
	readonly ping: number;
	readonly vehicle: VehicleMp;

	addVehicleSubtaskAttack(ped2: Handle): void;
	addVehicleSubtaskAttackCoord(x: number, y: number, z: number): void;
	call(eventName: string, ...args: any[]): void;
	canPedHear(ped: Handle): boolean;
	changePed(ped: Handle, b2: boolean, b3: boolean): void;
	clearHasDamagedAtLeastOneNonAnimalPed(): void;
	clearHasDamagedAtLeastOnePed(): void;
	clearParachuteModelOverride(): void;
	clearParachutePackModelOverride(): void;
	clearParachuteVariationOverride(): void;
	clearSecondaryTask(): void;
	clearWantedLevel(): void;
	explodeHead(weaponHash: Hash): void;
	getCurrentStealthNoise(): number;
	getGroup(): number;
	getHasReserveParachute(): boolean;
	getInvincible(): boolean;
	getMaxArmour(): number;
	getName(): string;
	getParachutePackTintIndex(tintIndex: number): number;
	getParachuteSmokeTrailColor(r: number, g: number, b: number): {
		r: number;
		g: number;
		b: number;
	};
	getPed(): Handle;
	getPedScriptIndex(): Handle;
	getReserveParachuteTintIndex(tintIndex: number): number;
	getRgbColour(r: number, g: number, b: number): {
		r: number;
		g: number;
		b: number;
	};
	getSprintStaminaRemaining(): number;
	getSprintTimeRemaining(): number;
	getTeam(): number;
	getUnderwaterTimeRemaining(): number;
	getVoiceAttribute(attribute: any): any; // TODO
	getWantedCentrePosition(): Vector3Mp;
	getWantedLevel(): number;
	giveRagdollControl(toggle: boolean): void;
	hasBeenSpottedInStolenVehicle(): boolean;
	hasDamagedAtLeastOneNonAnimalPed(): boolean;
	hasDamagedAtLeastOnePed(): boolean;
	hasLeftTheWorld(): boolean;
	hasTeleportFinished(): boolean;
	hasUseScenarioTask(): boolean;
	hideBloodDamageByZone(p1: any, p2: boolean): void;
	isControlOn(): boolean;
	isFreeAiming(): boolean;
	isFreeForAmbientTask(): boolean;
	isPlaying(): boolean;
	isPressingHorn(): boolean;
	isReadyForCutscene(): boolean;
	isRidingTrain(): boolean;
	isScriptControlOn(): boolean;
	isTargettingAnything(): boolean;
	isWantedLevelGreater(wantedLevel: number): boolean;
	resetArrestState(): void;
	resetInputGait(): void;
	resetStamina(): void;
	setCanBeHassledByGangs(toggle: boolean): void;
	setCanDoDriveBy(toggle: boolean): void;
	setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
	setCanUseCover(toggle: boolean): void;
	setClothPinFrames(toggle: boolean): void;
	setControl(toggle: boolean, possiblyFlags: number): void;
	setEveryoneIgnore(toggle: boolean): void;
	setForcedAim(toggle: boolean): void;
	setForcedZoom(toggle: boolean): void;
	setForceSkipAimIntro(toggle: boolean): void;
	setHasReserveParachute(): void;
	setLockon(toggle: boolean): void;
	setLockonRangeOverride(range: number): void;
	setMaxArmour(value: number): void;
	setMayNotEnterAnyVehicle(): void;
	setMayOnlyEnterThisVehicle(vehicle: Handle): void;
	setMeleeWeaponDamageModifier(modifier: number): void;
	setModel(model: Hash): void;
	setNoiseMultiplier(multiplier: number): void;
	setParachuteModelOverride(model: Hash): void;
	setParachutePackModelOverride(model: Hash): void;
	setParachutePackTintIndex(tintIndex: number): void;
	setParachuteSmokeTrailColor(r: number, g: number, b: number): void;
	setParachuteVariationOverride(p1: number, p2: any, p3: any, p4: boolean): void;
	setPoliceIgnore(toggle: boolean): void;
	setReserveParachuteTintIndex(tintIndex: number): void;
	setSimulateAiming(toggle: boolean): void;
	setSneakingNoiseMultiplier(multiplier: number): void;
	setSprint(toggle: boolean): void;
	setStealthPerceptionModifier(value: number): void;
	setTeam(team: number): void;
	setVehicleDamageModifier(damageAmount: number): void;
	setVehicleDefenseModifier(modifier: number): void;
	setVoiceAttribute(attribute: any, value: any): void; // TODO
	setWantedCentrePosition(x: number, y: number, z: number): void;
	setWantedLevel(wantedLevel: number, disableNoMission: boolean): void;
	setWantedLevelNoDrop(wantedLevel: number, p2: boolean): void;
	setWantedLevelNow(p1: boolean): void;
	setWeaponDamageModifier(damageAmount: number): void;
	setWeaponDefenseModifier(modifier: number): void;
	taskGotoOffset(p1: any, p2: any, x: number, y: number, z: number, duration: number): void;
	taskGoToWhileAimingAtEntity(entityToWalkTo: Handle, entityToAimAt: Handle, speed: number, shootatEntity: boolean,
	 p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: Hash): void;
	taskVehicleShootAt(target: Handle, p2: number): void;
	updateTaskSweepAim(entity: Handle): void;
}

interface TextLabelMp extends EntityMp {
	color: RGB;
	drawDistance: number;
	los: boolean;
	text: string;
}

interface VehicleMp extends EntityMp {
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
	getCargobobHookPosition(): Vector3Mp;
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
	getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;
	getDirtLevel(): number;
	getDoorAngleRatio(door: number): number;
	getDoorLockStatus(): number;
	getDoorsLockedForPlayer(player: Handle): boolean;
	getEngineHealth(): number;
	getExtraColours(pearlescentColor: number, wheelColor: number): {
		pearlescentColor: number;
		wheelColor: number;
	};
	getHandling(typeName: string): number | string;
	getDefaultHandling(typeName: string): number | string;
	getHeliEngineHealth(): number;
	getHeliMainRotorHealth(): number;
	getHeliTailRotorHealth(): number;
	getIsEngineRunning(): number;
	getIsLeftHeadlightDamaged(): boolean;
	getIsPrimaryColourCustom(): boolean;
	getIsRightHeadlightDamaged(): boolean;
	getIsSecondaryColourCustom(): boolean;
	getLandingGearState(): number;
	getLastPedInSeat(seatIndex: number): Handle;
	getLayoutHash(): Hash;
	getLightsState(lightsOn: number, highbeamsOn: number): {
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
	getModColor1(paintType: number, color: number, p2: number): {
		paintType: number;
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
	isBumperBrokenOff(front: boolean): boolean;
	isCargobobHookActive(): boolean;
	isCargobobMagnetActive(): boolean;
	isDamaged(): boolean;
	isDoorDamaged(doorId: number): boolean;
	isDriveable(p0: boolean): boolean;
	isExtraTurnedOn(extraId: number): boolean;
	isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
	isHighDetail(): boolean;
	isInBurnout(): boolean;
	isModel(model: Hash): boolean;
	isNeonLightEnabled(index: number): boolean;
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
	setBrakeLights(toggle: boolean): void;
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
	setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
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
	setExtra(extraId: number, toggle: number): void;
	setExtraColours(pearlescentColor: number, wheelColor: number): void;
	setFixed(): void;
	setForwardSpeed(speed: number): void;
	setFrictionOverride(friction: number): void;
	setFullbeam(toggle: boolean): void;
	setGravity(toggle: boolean): void;
	setHalt(distance: number, killEngine: number, unknown: boolean): void;
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
	setTaxiLights(state: boolean): void;
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

interface BrowserMp {
	active: boolean;
	url: string;

	destroy(): void;
	execute(code: string): void;
	markAsChat(): void;
	reload(ignoreCache: boolean): void;
	call(eventName: string, ...args: any[]): void;
	callProc(procName: string, ...args: any[]): Promise<any>;
	executeCached(code: string): void;
}

interface CameraMp {
	handle: Handle;

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
	getCoord(): Vector3Mp;
	getDirection(): Vector3Mp;
	getFarClip(): number;
	getFarDof(): number;
	getFov(): number;
	getNearClip(): number;
	getRot(p0: number): Vector3Mp;
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
	pointAt(entity: EntityMp, offsetX: number, offsetY: number, offsetZ: number, p4: boolean): void;
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

interface ConsoleMp {
	logInfo(message: string, save?: boolean, saveAsync?: boolean): void;
	logWarning(message: string, save?: boolean, saveAsync?: boolean): void;
	logError(message: string, save?: boolean, saveAsync?: boolean): void;
	logFatal(message: string, save?: boolean, saveAsync?: boolean): void;
	clear(): void;
	reset(): void;
	verbosity: RageEnums.ConsoleVerbosity | string;
}

interface DiscordMp {
	update(status: string, state: string): void;
}

interface KeysMp {
	bind(keyCode: number, keyHold: boolean, handler: Function): void;
	isUp(keyCode: number): boolean;
	isDown(keyCode: number): boolean;
	unbind(keyCode: number, keyHold: boolean, handler?: Function): void;
}

interface NametagsMp {
	enabled: boolean;

	set(style: {
		font: number;
		outline: boolean;
		offset: number;
		veh_offset: number;
		color: RGBA;
		size: number;

		hbar?: {
			size: [number, number];
			color: RGBA;
			bg_color: RGBA;
		}
	}): void;
}

interface RaycastingMp {
	testPointToPoint(startPos: Vector3Mp, endPos: Vector3Mp, ignoreEntity?: EntityMp, flags?: number): RaycastResult;
	testCapsule(startPos: Vector3Mp, endPos: Vector3Mp, radius: number, ignoreEntity?: EntityMp, flags?: number[]): RaycastResult;
}

interface StorageMp {
	data: { [key: string]: any };
	/** Keeps data saved over resource reloads, but is cleared on reconnect.
	 *
	 *  {@link https://wiki.rage.mp/index.php?title=Storage.sessionData|Storage.sessionData}
	 */
	sessionData: unknown;

	flush(): void;
}

interface SystemMp {
	isFullscreen: boolean;
	isFocused: boolean;
	notify(args: {
		title: string,
		text: string,
		attribute: string,
		duration: number,
		silent: boolean
	}): void;
}

interface UserMp {
	preferences: UserPreferencesMp;
}

interface UserPreferencesMp {
	lowQualityAssets: boolean;
	language: string;
}

interface VoiceChatMp {
	minVad: number;
	muted: boolean;
	readonly isAllowed: boolean;
	readonly lastVad: number;

	getPreprocessingParam(param: number): any; // TODO
	setPreprocessingParam(param: number, value: any): void; // TODO
	cleanupAndReload(p0: boolean, p1: boolean, p2: boolean): void;
}

// -------------------------------------------------------------------------
// Gui MP types
// -------------------------------------------------------------------------

interface GuiChatMp {
	colors: boolean;
	safe: boolean;

	activate(state: boolean): void;
	push(text: string): void;
	show(state: boolean): void;
}

interface GuiCursorMp {
	position: Array2d;
	visible: boolean;

	show(freezeControls: boolean, state: boolean): void;
}

// -------------------------------------------------------------------------
// Pool MP types
// -------------------------------------------------------------------------

interface BlipMpPool extends EntityMpPool<BlipMp> {
	"new"(sprite: number, position: Vector3Mp, options?: {
		alpha?: number,
		color?: number,
		dimension?: number,
		drawDistance?: number,
		name?: string,
		rotation?: number,
		scale?: number,
		shortRange?: boolean
	}): BlipMp;
}

interface BrowserMpPool extends EntityMpPool<BrowserMp> {
	"new"(url: string): BrowserMp;
}

interface CameraMpPool extends EntityMpPool<CameraMp> {
	"new"(name: string, position?: Vector3Mp, rotation?: Vector3Mp, fov?: number): CameraMp;
}

interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
	"new"(type: number, position: Vector3Mp, radius: number, options?: {
		color?: RGBA,
		dimension?: number,
		direction?: Vector3Mp,
		visible?	: boolean
	}): CheckpointMp;
}

interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;
	newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;
	newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;
	newTube(x: number, y: number, z: number, range: number, height: number, dimension?: number): ColshapeMp;
}

interface EntityMpPool<TEntity> {
	readonly length: number;
	readonly size: number;
	streamed: TEntity[];

	apply(fn: (...args: any[]) => void, ...args: any[]): void;
	at(index: number): TEntity;
	atHandle(handle: number): TEntity;
	atRemoteId(remoteId: number): TEntity;
	exists(entity: TEntity | number): boolean;
	forEach(fn: (entity: TEntity) => void): void;
	forEachInRange(position: Vector3Mp, range: number, fn: (entity: TEntity) => void): void;
	forEachInDimension(position: Vector3Mp, range: number, dimension: number, fn: (entity: TEntity) => void): void;
	forEachInStreamRange(fn: (entity: TEntity) => void): void;
	getClosest(position: Vector3Mp): TEntity
	getClosest(position: Vector3Mp, limit: number): TEntity[]
	toArray(): TEntity[];
	toArrayFast(): TEntity[];

	/**
		@deprecated (1.1+) considering optimizations applied to the reimplemented mp.Pool.forEach in this update without side effects, it's not longer required; for now it's an alias to forEach.
	*/
	forEachFast(fn: (entity: TEntity) => void): void;
}

interface EventMpPool {
	addDataHandler(keyName: string, callback: (...args: any[]) => void): void;

	add(eventName: RageEnums.EventKey.BROWSER_CREATED, callback: (browser: BrowserMp) => void): void;
	add(eventName: RageEnums.EventKey.BROWSER_DOM_READY, callback: (browser: BrowserMp) => void): void;
	add(eventName: RageEnums.EventKey.BROWSER_LOADING_FAILED, callback: (browser: BrowserMp) => void): void;
	add(eventName: RageEnums.EventKey.CLICK, callback: (x: number, y: number, upOrDown: string, leftOrRight: string, relativeX: number, relativeY: number, worldPosition: Vector3MpLike, hitEntity: number) => void): void;
	add(eventName: RageEnums.EventKey.CONSOLE_COMMAND, callback: (command: string) => void): void;
	add(eventName: RageEnums.EventKey.DUMMY_ENTITY_CREATED, callback: (dummyType: number, dummy: DummyEntityMp) => void): void;
	add(eventName: RageEnums.EventKey.DUMMY_ENTITY_DESTROYED, callback: (dummyType: number, dummy: DummyEntityMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_CONTROLLER_CHANGE, callback: (entity: EntityMp, newController: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_CREATED, callback: (entity: EntityMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_STREAM_IN, callback: (entity: EntityMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_STREAM_OUT, callback: (entity: EntityMp) => void): void;
	add(eventName: RageEnums.EventKey.GUI_READY, callback: () => void): void;
	add(eventName: RageEnums.EventKey.INCOMING_DAMAGE, callback: (sourceEntity: EntityMp, sourcePlayer: PlayerMp, targetEntity: EntityMp, weapon: number, boneIndex: number, damage: number) => void): void;
	add(eventName: RageEnums.EventKey.OUTGOING_DAMAGE, callback: (sourceEntity: EntityMp, targetEntity: EntityMp, targetPlayer: PlayerMp, weapon: number, boneIndex: number, damage: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_CHAT, callback: (text: string) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_CREATE_WAYPOINT, callback: (position: Vector3Mp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_COMMAND, callback: (command: string) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_DEATH, callback: (player: PlayerMp, reason: number, killer: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_ENTER_CHECKPOINT, callback: (checkpoint: CheckpointMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_ENTER_COLSHAPE, callback: (colshape: ColshapeMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_ENTER_VEHICLE, callback: (vehicle: VehicleMp, seat: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_EXIT_CHECKPOINT, callback: (checkpoint: CheckpointMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_EXIT_COLSHAPE, callback: (colshape: ColshapeMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_JOIN, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_LEAVE_VEHICLE, callback: (vehicle: VehicleMp, seat: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_QUIT, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_REACH_WAYPOINT, callback: (...args: any[]) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_READY, callback: () => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_REMOVE_WAYPOINT, callback: (...args: any[]) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_RESURRECT, callback: () => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_RULE_TRIGGERED, callback: (rule: string, counter: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_SPAWN, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_START_TALKING, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_STOP_TALKING, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_WEAPON_SHOT, callback: (targetPosition: Vector3Mp, targetEntity?: undefined | EntityMp) => void): void;
	add(eventName: RageEnums.EventKey.RENDER, callback: (nametags: [PlayerMp, number, number, number][]) => void): void;
	add(eventName: RageEnums.EventKey.VEHICLE_DEATH, callback: (vehicle: VehicleMp) => void): void;

	add(eventName: RageEnums.EventKey | string, callback: (...args: any[]) => void): void;
	add(events: ({ [name: string]: (...args: any[]) => void; })): void;
	addProc(procName: string, callback: (...args: any[]) => void): void;
	addProc(procs: ({ [name: string]: (...args: any[]) => void; })): void;
	call(eventName: string, ...args: any[]): void;
	callRemoteProc(procName: string, ...args: any[]): Promise<any>;
	callRemoteUnreliable(eventName: string, ...args: any[]): void;
	callRemote(eventName: string, ...args: any[]): void;
	cancelPendingRpc(procName?: string): void;
	hasPendingRpc(procName?: string): boolean;
	remove(eventName: string, handler?: (...args: any[]) => void): void;
	remove(eventNames: string[]): void;
}

interface DummyEntityMpPool extends EntityMpPool<DummyEntityMp> {
	forEachByType(dummyType: number, fn: (entity: DummyEntityMp) => void): void;
}

interface MarkerMpPool extends EntityMpPool<MarkerMp> {
	"new"(type: RageEnums.Markers | number, position: Vector3Mp, scale: number, options?: {
		bobUpAndDown?: boolean,
		color?: RGBA,
		dimension?: number,
		direction?: Vector3Mp,
		rotation?: Vector3Mp,
		visible?: boolean
	}): MarkerMp;
}

interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	"new"(model: HashOrString, position: Vector3Mp, options?: {
		alpha?: number,
		dimension?: number,
		rotation?: Vector3Mp
	}): ObjectMp;
	newWeak(handle: number): ObjectMp;
}

interface PedMpPool extends EntityMpPool<PedMp> {
	"new"(model: RageEnums.Hashes.Ped | Hash, position: Vector3Mp, heading: number, dimension?: number): PedMp;
}

interface PickupMpPool extends EntityMpPool<PickupMp> {
	"new"(...args: any[]): PickupMp; // TODO
}

interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	local: PlayerMp;
}

interface TextLabelMpPool extends EntityMpPool<TextLabelMp> {
	"new"(text: string, position: Vector3Mp, options?: {
		color?: RGBA,
		dimension?: number,
		drawDistance?: number,
		font?: number,
		los?: boolean
	}): TextLabelMp;
}

interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	"new"(model: HashOrString, position: Vector3Mp, options?: {
		alpha?: number,
		color?: [ Array2d, Array2d ] | [ RGB, RGB ],
		dimension?: number,
		engine?: boolean,
		heading?: number;
		locked?: boolean,
		numberPlate?: string
	}): VehicleMp;
}

// -------------------------------------------------------------------------
// Additional MP types
// -------------------------------------------------------------------------

interface Vector3MpLike {
	x: number;
	y: number;
	z: number;
}

interface Vector3Mp {
	new(vector: Vector3MpLike): Vector3Mp;
	new(vector: [number, number, number]): Vector3Mp;
	new(x?: number, y?: number, z?: number): Vector3Mp;

	x: number;
	y: number;
	z: number;

	add(value: number): Vector3Mp;
	add(vector3: Vector3Mp): Vector3Mp;
	angleTo(number: Vector3Mp): number;
	clone(): Vector3Mp;
	cross(vector3: Vector3MpLike): Vector3Mp;
	divide(value: number): Vector3Mp;
	divide(vector3: Vector3Mp): Vector3Mp;
	dot(vector3: Vector3MpLike): number;
	equals(vector3: Vector3MpLike): boolean;
	length(): number;
	negative(): Vector3Mp;
	max(): Vector3Mp;
	min(): Vector3Mp;
	multiply(value: number): Vector3Mp;
	multiply(vector3: Vector3Mp): Vector3Mp;
	subtract(value: number): Vector3Mp;
	subtract(vector3: Vector3Mp): Vector3Mp;
	toAngles(): [number, number];
	toArray(): [number, number, number];
	toArray(limit: number): number[];
	toString(): string;
	unit(): Vector3Mp;
}

interface RaycastResult {
	entity: EntityMp | Handle, // Not weak world objects return the handle
	position: Vector3Mp,
	surfaceNormal: Vector3Mp
}

// -------------------------------------------------------------------------
// Game MP types
// -------------------------------------------------------------------------

interface StartNewScriptWithArgsResult {
	args: integer;
	result: integer;
}

interface StartNewScriptWithNameHashAndArgsResult {
	args: integer;
	result: integer;
}

interface InterruptConversationResult {
	p1: integer;
	p2: integer;
}

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

interface GetPosixTimeResult {
	year: integer;
	month: integer;
	day: integer;
	hour: integer;
	minute: integer;
	second: integer;
}

interface GetUtcTimeResult {
	year: integer;
	month: integer;
	day: integer;
	hour: integer;
	minute: integer;
	second: integer;
}

interface GetLocalTimeResult {
	year: integer;
	month: integer;
	day: integer;
	hour: integer;
	minute: integer;
	second: integer;
}

interface DatadictCreateDictResult {
	objectData: integer;
	result: integer;
}

interface DatadictCreateArrayResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetIntResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetFloatResult {
	objectData: integer;
	result: number;
}

interface DatadictGetStringResult {
	objectData: integer;
	result: string;
}

interface DatadictGetVectorResult {
	objectData: integer;
}

interface DatadictGetDictResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetArrayResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetTypeResult {
	objectData: integer;
	result: integer;
}

interface DataarrayAddDictResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetIntResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetFloatResult {
	arrayData: integer;
	result: number;
}

interface DataarrayGetStringResult {
	arrayData: integer;
	result: string;
}

interface DataarrayGetVectorResult {
	arrayData: integer;
}

interface DataarrayGetDictResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetCountResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetTypeResult {
	arrayData: integer;
	result: integer;
}

interface GetEntityMatrixResult {
	forwardVector: Vector3Mp;
	rightVector: Vector3Mp;
	upVector: Vector3Mp;
	position: Vector3Mp;
}

interface GetEntityQuaternionResult {
	x: number;
	y: number;
	z: number;
	w: number;
}

interface GetEntityScriptResult {
	script: integer;
	result: string;
}

interface PlaySynchronizedMapEntityAnimResult {
	p6: integer;
	p7: integer;
	result: boolean;
}

interface FindAnimEventPhaseResult {
	p3: integer;
	p4: integer;
	result: boolean;
}

interface GetEntityProofsResult {
	bulletProof: boolean;
	fireProof: boolean;
	explosionProof: boolean;
	collisionProof: boolean;
	meleeProof: boolean;
	steamProof: boolean;
	p7: boolean;
	drownProof: boolean;
	result: boolean;
}

interface GetVariantComponentResult {
	nameHash: integer;
	enumValue: integer;
	componentType: integer;
}

interface GetVariantPropResult {
	nameHash: integer;
	enumValue: integer;
	anchorPoint: integer;
}

interface GetForcedComponentResult {
	nameHash: integer;
	enumValue: integer;
	componentType: integer;
}

interface GetForcedPropResult {
	nameHash: integer;
	enumValue: integer;
	anchorPoint: integer;
}

interface GetStatusOfLoadMissionCreatorPhotoResult {
	p0: integer;
	result: integer;
}

interface GetScriptGfxPositionResult {
	calculatedX: number;
	calculatedY: number;
}

interface GetScreenResolutionResult {
	x: integer;
	y: integer;
}

interface GetActiveScreenResolutionResult {
	x: integer;
	y: integer;
}

interface GetScreenCoordFromWorldCoordResult {
	screenX: number;
	screenY: number;
	result: boolean;
}

interface _0x632B2940C67F4EA9Result {
	p1: integer;
	p2: integer;
	p3: integer;
	result: boolean;
}

interface ThefeedAddTxdRefResult {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface EndTextCommandThefeedPostCrewtagResult {
	p2: integer;
	result: integer;
}

interface EndTextCommandThefeedPostCrewtagWithGameNameResult {
	p2: integer;
	result: integer;
}

interface EndTextCommandThefeedPostVersusTuResult {
	p0: integer;
	p1: integer;
	p3: integer;
	p4: integer;
	result: integer;
}

interface GetHudColourResult {
	r: integer;
	g: integer;
	b: integer;
	a: integer;
}

interface _0x817B86108EB94E51Result {
	p1: integer;
	p2: integer;
	p3: integer;
	p4: integer;
	p5: integer;
	p6: integer;
	p7: integer;
	p8: integer;
}

interface GetHudScreenPositionFromWorldPositionResult {
	screenX: number;
	screenY: number;
	result: boolean;
}

interface SetWarningMessageWithHeaderResult {
	showBackground: integer;
	p7: integer;
}

interface SetWarningMessageWithHeaderAndSubstringFlagsResult {
	p7: integer;
	p8: integer;
}

interface SetWarningMessageWithHeaderUnkResult {
	p6: integer;
	p7: integer;
}

interface _0xC8E1071177A23BE5Result {
	p0: integer;
	p1: integer;
	p2: integer;
	result: boolean;
}

interface GetPauseMenuSelectionResult {
	lastItemMenuId: integer;
	selectedItemUniqueId: integer;
}

interface GetPauseMenuSelectionDataResult {
	lastItemMenuId: integer;
	selectedItemMenuId: integer;
	selectedItemUniqueId: integer;
}

interface _0xA238192F33110615Result {
	p0: integer;
	p1: integer;
	p2: integer;
	result: boolean;
}

interface GetInteriorInfoResult {
	position: Vector3Mp;
	nameHash: integer;
}

interface GetBaseElementMetadataResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface GetWeatherTypeTransitionResult {
	weatherType1: integer;
	weatherType2: integer;
	percentWeather2: number;
}

interface GetGroundZAndNormalFor3DCoordResult {
	groundZ: number;
	normal: Vector3Mp;
	result: boolean;
}

interface SlerpNearQuaternionResult {
	outX: number;
	outY: number;
	outZ: number;
	outW: number;
}

interface RegisterSaveHouseResult {
	p4: integer;
	result: integer;
}

interface _0xA4A0065E39C9F25CResult {
	p0: Vector3Mp;
	p1: number;
	fadeInAfterLoad: boolean;
	p3: boolean;
	result: boolean;
}

interface GetModelDimensionsResult {
	minimum: Vector3Mp;
	maximum: Vector3Mp;
}

interface GetCoordsOfProjectileTypeWithinDistanceResult {
	entity: integer;
}

interface CopyMemoryResult {
	dst: integer;
	src: integer;
}

interface ScriptRaceGetPlayerSplitTimeResult {
	p1: integer;
	p2: integer;
	result: boolean;
}

interface NetworkGetGlobalMultiplayerClockResult {
	hours: integer;
	minutes: integer;
	seconds: integer;
}

interface NetworkDoTransitionToNewFreemodeResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkGetTransitionMembersResult {
	data: integer;
	result: integer;
}

interface NetworkSendInviteViaPresenceResult {
	networkHandle: integer;
	p1: integer;
	result: boolean;
}

interface NetworkSendPresenceTransitionInviteResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface _0x1171A97A3D3981B6Result {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkInviteGamersResult {
	p0: integer;
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0x0D77A82DC2D0DA59Result {
	p0: integer;
	p1: integer;
}

interface FilloutPmPlayerListWithNamesResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkGetPlatformPartyMembersResult {
	data: integer;
	result: integer;
}

interface NetworkGetNumScriptParticipantsResult {
	p0: integer;
	result: integer;
}

interface NetworkGetDestroyerOfNetworkIdResult {
	weaponHash: integer;
	result: integer;
}

interface NetworkGetEntityKillerOfPlayerResult {
	weaponHash: integer;
	result: integer;
}

interface NetworkHashFromGamerHandleResult {
	networkHandle: integer;
	result: integer;
}

interface NetworkGetGamertagFromHandleResult {
	networkHandle: integer;
	result: string;
}

interface _0xD66C9E72B3CC4982Result {
	p0: integer;
	result: integer;
}

interface NetworkAreHandlesTheSameResult {
	netHandle1: integer;
	netHandle2: integer;
	result: boolean;
}

interface NetworkGetPlayerFromGamerHandleResult {
	networkHandle: integer;
	result: integer;
}

interface NetworkMemberIdFromGamerHandleResult {
	networkHandle: integer;
	result: string;
}

interface NetworkPlayerGetUseridResult {
	userID: integer;
	result: string;
}

interface _0xADB57E5B663CCA8BResult {
	p1: number;
	p2: number;
}

interface NetworkClanPlayerGetDescResult {
	clanDesc: integer;
	networkHandle: integer;
	result: boolean;
}

interface NetworkClanGetUiFormattedTagResult {
	clanDesc: integer;
}

interface NetworkClanGetMembershipCountResult {
	p0: integer;
	result: integer;
}

interface NetworkClanGetMembershipResult {
	p0: integer;
	clanMembership: integer;
	result: boolean;
}

interface NetworkClanGetEmblemTxdNameResult {
	netHandle: integer;
	result: boolean;
}

interface NetworkGetPrimaryClanDataNewResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkQueryRespawnResultsResult {
	p0: integer;
	result: integer;
}

interface NetworkGetRespawnResultResult {
	coordinates: Vector3Mp;
	heading: number;
}

interface UgcCopyContentResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface UgcGetBookmarkedContentResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface UgcGetMyContentResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface UgcGetFriendContentResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface UgcGetCrewContentResult {
	p3: integer;
	p4: integer;
	result: boolean;
}

interface UgcGetGetByCategoryResult {
	p3: integer;
	p4: integer;
	result: boolean;
}

interface _0xA7862BC5ED1DFD7EResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0x97A770BEEF227E2BResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0x5324A0E3E4CE3570Result {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface UgcSetDeletedResult {
	p0: integer;
	p2: integer;
	result: boolean;
}

interface _0xB746D20B17F2A229Result {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface TextureDownloadRequestResult {
	PlayerHandle: integer;
	result: integer;
}

interface UgcTextureDownloadRequestResult {
	p0: integer;
	p4: integer;
	result: integer;
}

interface NetworkHasRosPrivilegeEndDateResult {
	banType: integer;
	timeData: integer;
	result: boolean;
}

interface NetworkStartUserContentPermissionsCheckResult {
	netHandle: integer;
	result: integer;
}

interface GetCoordsAndRotationOfClosestObjectOfTypeResult {
	outPosition: Vector3Mp;
	outRotation: Vector3Mp;
	result: integer;
}

interface GetStateOfClosestDoorOfTypeResult {
	locked: boolean;
	heading: number;
}

interface GetClosestVehicleNodeWithHeadingResult {
	outPosition: Vector3Mp;
	outHeading: number;
	result: boolean;
}

interface GetNthClosestVehicleNodeWithHeadingResult {
	outPosition: Vector3Mp;
	outHeading: number;
	unknown1: integer;
	result: boolean;
}

interface GetNthClosestVehicleNodeIdWithHeadingResult {
	outPosition: Vector3Mp;
	outHeading: number;
	result: integer;
}

interface GetNthClosestVehicleNodeFavourDirectionResult {
	outPosition: Vector3Mp;
	outHeading: number;
	result: boolean;
}

interface GetVehicleNodePropertiesResult {
	density: integer;
	flags: integer;
	result: boolean;
}

interface GetClosestRoadResult {
	p5: Vector3Mp;
	p6: Vector3Mp;
	p7: integer;
	p8: integer;
	p9: number;
	result: integer;
}

interface GetRandomVehicleNodeResult {
	outPosition: Vector3Mp;
	nodeId: integer;
	result: boolean;
}

interface GetStreetNameAtCoordResult {
	streetName: integer;
	crossingRoad: integer;
}

interface GenerateDirectionsToCoordResult {
	direction: integer;
	p5: number;
	distToNxJunction: number;
	result: integer;
}

interface GetGroupSizeResult {
	unknown: integer;
	sizeInMembers: integer;
}

interface _0x9E30E91FB03A2CAFResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface GetPedHairRgbColorResult {
	outR: integer;
	outG: integer;
	outB: integer;
}

interface GetPedMakeupRgbColorResult {
	outR: integer;
	outG: integer;
	outB: integer;
}

interface GetPedCurrentMovementSpeedResult {
	speedX: number;
	speedY: number;
	result: boolean;
}

interface GetPedNearbyVehiclesResult {
	sizeAndVehs: integer;
	result: integer;
}

interface GetPedNearbyPedsResult {
	sizeAndPeds: integer;
	result: integer;
}

interface SpawnpointsGetSearchResultResult {
	x: number;
	y: number;
	z: number;
}

interface AddRopeResult {
	unkPtr: integer;
	result: integer;
}

interface AttachEntitiesToRopeResult {
	p12: integer;
	p13: integer;
}

interface GetPlayerRgbColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetPlayerParachuteSmokeTrailColorResult {
	r: integer;
	g: integer;
	b: integer;
}

interface StartShapeTestSurroundingCoordsResult {
	pVec1: Vector3Mp;
	pVec2: Vector3Mp;
	result: integer;
}

interface GetShapeTestResultResult {
	hit: boolean;
	endCoords: Vector3Mp;
	surfaceNormal: Vector3Mp;
	entityHit: integer;
	result: integer;
}

interface GetShapeTestResultIncludingMaterialResult {
	hit: boolean;
	endCoords: Vector3Mp;
	surfaceNormal: Vector3Mp;
	materialHash: integer;
	entityHit: integer;
	result: integer;
}

interface StatGetPosResult {
	p1: integer;
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0x6DEE77AFF8C21BD1Result {
	playerAccountId: integer;
	posixTime: integer;
	result: boolean;
}

interface _0xF8C54A461C3E11DCResult {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface _0xF5BB8DAC426A52C0Result {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface _0xA736CF7FB7C5BFF4Result {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface _0x14E0B2D1AD1044E0Result {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface Leaderboards2ReadFriendsByRowResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface Leaderboards2ReadByHandleResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface Leaderboards2ReadByRowResult {
	p0: integer;
	p1: integer;
	p3: integer;
	p5: integer;
	result: boolean;
}

interface Leaderboards2ReadByRadiusResult {
	p0: integer;
	p2: integer;
	result: boolean;
}

interface Leaderboards2ReadRankPredictionResult {
	p0: integer;
	p1: integer;
	p2: integer;
	result: boolean;
}

interface Leaderboards2WriteDataForEventTypeResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface _0xDEAAF77EB3687E97Result {
	p1: integer;
	result: integer;
}

interface StatGetSaveMigrationStatusResult {
	data: integer;
	result: integer;
}

interface StatGetSaveMigrationConsumeContentUnlockStatusResult {
	p0: integer;
	result: integer;
}

interface GetNavmeshRouteDistanceRemainingResult {
	distanceRemaining: number;
	isPathReady: boolean;
	result: integer;
}

interface TaskScriptedAnimationResult {
	p1: integer;
	p2: integer;
	p3: integer;
}

interface PlayEntityScriptedAnimResult {
	p1: integer;
	p2: integer;
	p3: integer;
}

interface TaskSweepAimPositionResult {
	p1: integer;
	p2: integer;
	p3: integer;
	p4: integer;
}

interface GetVehicleCustomPrimaryColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleCustomSecondaryColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleColoursResult {
	colorPrimary: integer;
	colorSecondary: integer;
}

interface GetVehicleLightsStateResult {
	lightsOn: boolean;
	highbeamsOn: boolean;
	result: boolean;
}

interface GetRandomVehicleModelInMemoryResult {
	modelHash: integer;
	successIndicator: integer;
}

interface GetVehicleExtraColoursResult {
	pearlescentColor: integer;
	wheelColor: integer;
}

interface _0xA4822F1CF23F4810Result {
	outVec: Vector3Mp;
	outVec1: Vector3Mp;
	result: boolean;
}

interface GetVehicleModColor1Result {
	paintType: integer;
	color: integer;
	pearlescentColor: integer;
}

interface GetVehicleModColor2Result {
	paintType: integer;
	color: integer;
}

interface GetVehicleTyreSmokeColorResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleColorResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleNeonLightsColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetVehicleSuspensionBoundsResult {
	out1: Vector3Mp;
	out2: Vector3Mp;
}

interface GetAllVehiclesResult {
	vehsStruct: integer;
	result: integer;
}

interface GameSystemLegacy {
	startNewStreamedScript(scriptHash: integer, stackSize: integer): integer;
	startNewStreamedScriptWithArgs(scriptHash: integer, argCount: integer, stackSize: integer): StartNewScriptWithNameHashAndArgsResult;
}

interface GameAppLegacy {
	appGetInt(property: string): integer;
	appGetFloat(property: string): number;
	appGetString(property: string): string;
	appSetInt(property: string, value: integer): void;
	appSetFloat(property: string, value: number): void;
	appSetString(property: string, value: string): void;
	appSetApp(appName: string): void;
	appSetBlock(blockName: string): void;
	appHasSyncedData(appName: string): boolean;
	appDeleteAppData(appName: string): boolean;
}

interface GameAudioLegacy {
	registerScriptWithAudio(p0: integer): void;
	requestMissionAudioBank(p0: string, p1: boolean, p2: integer): boolean;
	requestAmbientAudioBank(p0: string, p1: boolean, p2: integer): boolean;
	requestScriptAudioBank(p0: string, p1: boolean, p2: integer): boolean;
	hintAmbientAudioBank(p0: integer, p1: integer, p2: integer): integer;
	hintScriptAudioBank(p0: integer, p1: integer, p2: integer): integer;
	releaseNamedScriptAudioBank(audioBank: string): void;
	playAmbientSpeechWithVoice(ped: integer, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
	playAmbientSpeechAtCoords(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;
	getNumberOfPassengerVoiceVariations(newsStory: integer): boolean;
	setCutsceneAudioOverride(name: string): void;
	getPlayerHeadsetSoundAlternate(variableName: string, value: number): void;
	specialFrontendEqual(x: number, y: number, z: number): void;
	playMissionCompleteAudio(audioName: string): void;
	startAudioScene(scene: string): boolean;
	stopAudioScene(scene: string): void;
	isAudioSceneActive(scene: string): boolean;
	setAudioSceneVariable(scene: string, variable: string, value: number): void;
	resetPedAudioFlags(ped: integer): void;
	setAudioFlag(flagName: string, toggle: boolean): void;
	prepareSynchronizedAudioEvent(p0: string, p1: integer): integer;
	prepareSynchronizedAudioEventForScene(p0: integer): integer;
	playSynchronizedAudioEvent(p0: integer): boolean;
	stopSynchronizedAudioEvent(p0: integer): boolean;
	setSynchronizedAudioEventPositionThisFrame(p0: string, p1: integer): void;
}

interface GameBrainLegacy {
	registerObjectScriptBrain(scriptName: string, modelHash: integer, p2: integer, activationRange: number, p4: integer, p5: integer): void;
	isObjectWithinBrainActivationRange(object: integer): boolean;
	registerWorldPointScriptBrain(scriptName: string, activationRange: number, p2: integer): void;
	enableScriptBrainSet(brainSet: integer): void;
	disableScriptBrainSet(brainSet: integer): void;
}

interface GameCamLegacy {
	renderScriptCams(render: boolean, ease: boolean, easeTime: integer, p3: boolean, p4: boolean, p5: integer): void;
	createCam(camName: string, p1: boolean): integer;
	createCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: integer): integer;
	createCamera(camHash: integer, p1: boolean): integer;
	createCameraWithParams(camHash: integer, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: integer): integer;
	destroyAllCams(bScriptHostCam: boolean): void;
	addCamSplineNode(camera: integer, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: integer, p8: integer, p9: integer): void;
	setCamSplinePhase(cam: integer, p1: number): void;
	getCamSplineNodePhase(cam: integer): number;
	setCamSplineDuration(cam: integer, timeDuration: integer): void;
	getCamSplineNodeIndex(cam: integer): integer;
	overrideCamSplineVelocity(cam: integer, p1: integer, p2: number, p3: number): void;
	overrideCamSplineMotionBlur(cam: integer, p1: integer, p2: number, p3: number): void;
	isCamSplinePaused(p0: integer): boolean;
	playSynchronizedCamAnim(p0: integer, p1: integer, animName: string, animDictionary: string): boolean;
	getGameplayCamRot(rotationOrder: integer): Vector3Mp;
	getGameplayCamRelativeHeading(): number;
	setGameplayCamRelativeHeading(heading: number): void;
	setGameplayCamRelativePitch(angle: number, scalingFactor: number): void;
	setGameplayCamRawYaw(yaw: number): void;
	setGameplayCamRawPitch(pitch: number): void;
	shakeGameplayCam(shakeName: string, intensity: number): void;
	setGameplayCamShakeAmplitude(amplitude: number): void;
	stopGameplayCamShaking(p0: boolean): void;
	setFollowPedCamCutsceneChat(camName: string, p1: integer): boolean;
	clampGameplayCamYaw(minimum: number, maximum: number): void;
	clampGameplayCamPitch(minimum: number, maximum: number): void;
	animateGameplayCamZoom(p0: number, distance: number): void;
	setFollowPedCamViewMode(viewMode: integer): void;
	setFollowVehicleCamZoomLevel(zoomLevel: integer): void;
	setFollowVehicleCamViewMode(viewMode: integer): void;
	getGameplayCamRot(rotationOrder: integer): Vector3Mp;
	getIsMultiplayerBrief(toggle: boolean): void;
	shakeCinematicCam(p0: string, p1: number): void;
	setCinematicCamShakeAmplitude(p0: number): void;
	stopCinematicCamShaking(p0: boolean): void;
	setCamEffect(p0: integer): void;
}

interface GameClockLegacy {
	setClockTime(hour: integer, minute: integer, second: integer): void;
	pauseClock(toggle: boolean): void;
	advanceClockTimeTo(hour: integer, minute: integer, second: integer): void;
	addToClockTime(hours: integer, minutes: integer, seconds: integer): void;
	setClockDate(day: integer, month: integer, year: integer): void;
	getLocalTimeGmt(): GetUtcTimeResult;
}

interface GameCutsceneLegacy {
	requestCutscene(cutsceneName: string, flags: integer): void;
	requestCutscene2(cutsceneName: string, playbackFlags: integer, flags: integer): void;
	hasThisCutsceneLoaded(cutsceneName: string): boolean;
	startCutscene(flags: integer): void;
	startCutsceneAtCoords(x: number, y: number, z: number, flags: integer): void;
	stopCutscene(p0: boolean): void;
	setCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: integer): void;
	getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: integer): integer;
	registerEntityForCutscene(cutscenePed: integer, cutsceneEntName: string, p2: integer, modelHash: integer, p4: integer): void;
	setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	setCutscenePedComponentVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;
	doesCutsceneEntityExist(cutsceneEntName: string, modelHash: integer): boolean;
	setCutscenePedPropVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;
}

interface GameDatafileLegacy {
	loadUgcFile(filename: string): boolean;
	objectValueAddBoolean(key: string, value: boolean): integer;
	objectValueAddInteger(key: string, value: integer): integer;
	objectValueAddFloat(key: string, value: number): integer;
	objectValueAddString(key: string, value: string): integer;
	objectValueAddVector3(key: string, valueX: number, valueY: number, valueZ: number): integer;
	objectValueAddObject(key: string): DatadictCreateDictResult;
	objectValueAddArray(key: string): DatadictCreateArrayResult;
	objectValueGetBoolean(key: string): integer;
	objectValueGetInteger(key: string): DatadictGetIntResult;
	objectValueGetFloat(key: string): DatadictGetFloatResult;
	objectValueGetString(key: string): DatadictGetStringResult;
	objectValueGetVector3(key: string): DatadictGetVectorResult;
	objectValueGetObject(key: string): DatadictGetDictResult;
	objectValueGetArray(key: string): DatadictGetArrayResult;
	objectValueGetType(key: string): DatadictGetTypeResult;
	arrayValueAddBoolean(value: boolean): integer;
	arrayValueAddInteger(value: integer): integer;
	arrayValueAddFloat(value: number): integer;
	arrayValueAddString(value: string): integer;
	arrayValueAddVector3(valueX: number, valueY: number, valueZ: number): integer;
	arrayValueAddObject(): DataarrayAddDictResult;
	arrayValueGetBoolean(arrayIndex: integer): integer;
	arrayValueGetInteger(arrayIndex: integer): DataarrayGetIntResult;
	arrayValueGetFloat(arrayIndex: integer): DataarrayGetFloatResult;
	arrayValueGetString(arrayIndex: integer): DataarrayGetStringResult;
	arrayValueGetVector3(arrayIndex: integer): DataarrayGetVectorResult;
	arrayValueGetObject(arrayIndex: integer): DataarrayGetDictResult;
	arrayValueGetSize(): DataarrayGetCountResult;
	arrayValueGetType(arrayIndex: integer): DataarrayGetTypeResult;
}

interface GameDecoratorLegacy {
}

interface GameDlcLegacy {
	isDlcPresent(dlcHash: integer): boolean;
	nullify(unused: integer): boolean;
}

interface GameEntityLegacy {
	getEntityAnimDuration(animDict: string, animName: string): number;
	isAnEntity(handle: integer): boolean;
	wouldEntityBeOccluded(entityModelHash: integer, x: number, y: number, z: number, p4: boolean): boolean;
	playSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p8: number, p9: number, p10: integer, p11: number): PlaySynchronizedMapEntityAnimResult;
	stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: number): boolean;
}

interface GameEventLegacy {
	clearDecisionMakerEventResponse(name: integer, eventType: integer): void;
	blockDecisionMakerEvent(name: integer, eventType: integer): void;
	unblockDecisionMakerEvent(name: integer, eventType: integer): void;
	addShockingEventAtPosition(eventType: integer, x: number, y: number, z: number, duration: number): integer;
	addShockingEventForEntity(eventType: integer, entity: integer, duration: number): integer;
	isShockingEventInSphere(eventType: integer, x: number, y: number, z: number, radius: number): boolean;
	removeShockingEvent(event: integer): boolean;
	removeAllShockingEvents(p0: boolean): void;
	suppressShockingEventTypeNextFrame(eventType: integer): void;
}

interface GameFilesLegacy {
	getNumPropsFromOutfit(character: integer, p1: integer, p2: integer, p3: boolean, p4: integer, componentId: integer): integer;
	getNumForcedComponents(componentHash: integer): integer;
	getPropFromOutfit(outfitHash: integer, variantIndex: integer): integer;
	isDlcDataEmpty(itemHash: integer): boolean;
}

interface GameFireLegacy {
	startScriptFire(X: number, Y: number, Z: number, maxChildren: integer, isGasFire: boolean): integer;
	removeScriptFire(fireHandle: integer): void;
	stopFireInRange(x: number, y: number, z: number, radius: number): void;
	getClosestFirePos(x: number, y: number, z: number): Vector3Mp;
	addSpecfxExplosion(x: number, y: number, z: number, explosionType: integer, explosionFx: integer, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
	getPedInsideExplosionArea(explosionType: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): integer;
}

interface GameGraphicsLegacy {
	setScreenDrawPosition(horizontalAlign: integer, verticalAlign: integer): void;
	getScreenActiveResolution(): GetActiveScreenResolutionResult;
	getScreenAspectRatio(b: boolean): number;
	setBlackout(state: boolean): void;
	setFarShadowsSuppressed(toggle: boolean): void;
	transitionToBlurred(transitionTime: number): boolean;
	transitionFromBlurred(transitionTime: number): boolean;
	setFrozenRenderingDisabled(toggle: boolean): void;
	startParticleFxNonLoopedAtCoord2(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): boolean;
	startParticleFxNonLoopedOnPedBone2(effectName: string, ped: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: integer, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	startParticleFxNonLoopedOnEntity2(effectName: string, entity: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	startParticleFxLoopedOnEntityBone(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: integer, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): integer;
	startParticleFxLoopedOnEntity2(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p12: integer, p13: integer, p14: integer, p15: integer): integer;
	startParticleFxLoopedOnEntityBone2(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: integer, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p13: integer, p14: integer, p15: integer, p16: integer): integer;
	setParticleFxLoopedRange(ptfxHandle: integer, range: number): void;
	setPtfxAssetNextCall(name: string): void;
	setPtfxAssetOldToNew(oldAsset: string, newAsset: string): void;
	requestScaleformMovie3(scaleformName: string): integer;
	hasNamedScaleformMovieLoaded(scaleformName: string): boolean;
	callScaleformMovieFunctionFloatParams(scaleform: integer, methodName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
	callScaleformMovieFunctionStringParams(scaleform: integer, methodName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
	callScaleformMovieFunctionMixedParams(scaleform: integer, methodName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;
	pushScaleformMovieFunctionFromHudComponent(hudComponent: integer, methodName: string): boolean;
	pushScaleformMovieFunction(scaleform: integer, methodName: string): boolean;
	pushScaleformMovieFunctionN(methodName: string): boolean;
	popScaleformMovieFunctionVoid(): void;
	popScaleformMovieFunction(): integer;
	sittingTv(methodReturn: integer): string;
	pushScaleformMovieFunctionParameterInt(value: integer): void;
	pushScaleformMovieFunctionParameterFloat(value: number): void;
	pushScaleformMovieFunctionParameterBool(value: boolean): void;
	beginTextComponent(componentType: string): void;
	endTextComponent(): void;
	pushScaleformMovieFunctionParameterString(string: string): void;
	requestHudScaleform(hudComponent: integer): void;
	hasHudScaleformLoaded(hudComponent: integer): boolean;
	loadTvChannel(videoCliphash: integer): boolean;
	startScreenEffect(effectName: string, duration: integer, looped: boolean): void;
	stopScreenEffect(effectName: string): void;
	getScreenEffectIsActive(effectName: string): boolean;
	stopAllScreenEffects(): void;
}

interface GameHudLegacy {
	setLoadingPromptTextEntry(string: string): void;
	showLoadingPrompt(busySpinnerType: integer): void;
	setCursorSprite(spriteId: integer): void;
	removeNotification(notificationId: integer): void;
	setNotificationFlashColor(red: integer, green: integer, blue: integer, alpha: integer): void;
	setNotificationTextEntry(text: string): void;
	setNotificationMessage(txdName: string, textureName: string, flash: boolean, iconType: integer, sender: string, subject: string): integer;
	setNotificationMessageClanTag(txdName: string, textureName: string, flash: boolean, iconType: integer, sender: string, subject: string, duration: number, clanTag: string): integer;
	setNotificationMessageClanTag2(txdName: string, textureName: string, flash: boolean, iconType1: integer, sender: string, subject: string, duration: number, clanTag: string, iconType2: integer, p9: integer): integer;
	drawNotification(blink: boolean, p1: boolean): integer;
	drawNotification2(blink: boolean, p1: boolean): integer;
	drawNotification3(blink: boolean, p1: boolean): integer;
	drawNotification4(blink: boolean, p1: boolean): integer;
	setTextEntry2(GxtEntry: string): void;
	drawSubtitleTimed(duration: integer, drawImmediately: boolean): void;
	setTextEntry(text: string): void;
	drawText(x: number, y: number, p2: integer): void;
	setTextEntryForWidth(text: string): void;
	getTextScreenWidth(p0: boolean): number;
	setTextGxtEntry(entry: string): void;
	setTextComponentFormat(inputType: string): void;
	displayHelpTextFromStringLabel(p0: integer, loop: boolean, beep: boolean, shape: integer): void;
	addTextComponentItemString(labelName: string): void;
	addTextComponentSubstringLocalized(gxtEntryHash: integer): void;
	addTextComponentSubstringCash(value: integer, commaSeparated: boolean): void;
	requestAdditionalText2(gxt: string, slot: integer): void;
	displayHud(toggle: boolean): void;
	respondingAsTemp(zoom: number): void;
	setRadarZoomLevelThisFrame(zoom: number): void;
	getHudColour(hudColorIndex: integer): GetHudColourResult;
	setHudColour(hudColorIndex: integer, r: integer, g: integer, b: integer, a: integer): void;
	getTextScaleHeight(size: number, font: integer): number;
	setMultiplayerHudCash(p0: integer, p1: integer): void;
	showWeaponWheel(show: boolean): void;
	keyHudColour(toggle: boolean, ped: integer): void;
	setMinimapVisible(toggle: boolean): void;
	setMinimapRevealed(toggle: boolean): void;
	isMinimapAreaRevealed(x: number, y: number, z: number): boolean;
	setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean, p2: integer): void;
	setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;
	isHudComponentActive(id: integer): boolean;
	isScriptedHudComponentActive(id: integer): boolean;
	hideScriptedHudComponentThisFrame(id: integer): void;
	hideHudComponentThisFrame(id: integer): void;
	showHudComponentThisFrame(id: integer): void;
	resetHudComponentValues(id: integer): void;
	setHudComponentPosition(id: integer, x: number, y: number): void;
	getHudComponentPosition(id: integer): Vector3Mp;
	hasHeadDisplayLoaded(gamerTagId: integer): boolean;
	addTrevorRandomModifier(gamerTagId: integer): boolean;
	setHeadDisplayFlag(gamerTagId: integer, component: integer, toggle: boolean, p3: integer): void;
	setHeadDisplayWanted(gamerTagId: integer, wantedlvl: integer): void;
	setHeadDisplayString(gamerTagId: integer, string: string): void;
	setWarningMessage2(entryHeader: string, entryLine1: string, instructionalKey: integer, entryLine2: string, p4: boolean, p5: integer, p8: boolean, p9: integer): SetWarningMessageWithHeaderResult;
	setWarningMessage3(entryHeader: string, entryLine1: string, instructionalKey: integer, entryLine2: string, p4: boolean, p5: integer, p6: integer, p9: boolean, p10: integer): SetWarningMessageWithHeaderAndSubstringFlagsResult;
	objectDecalToggle(contextHash: integer): void;
	setUseridsUihidden(p0: integer): integer;
	hideSpecialAbilityLockonOperation(ped: integer, toggle: boolean): void;
}

interface GameInteriorLegacy {
	getInteriorGroupId(interior: integer): integer;
	getOffsetFromInteriorInWorldCoords(interior: integer, x: number, y: number, z: number): Vector3Mp;
	isValidInterior(interior: integer): boolean;
	getInteriorAtCoords(x: number, y: number, z: number): integer;
	addPickupToInteriorRoomByName(pickup: integer, roomName: string): void;
	unpinInterior(interior: integer): void;
	isInteriorReady(interior: integer): boolean;
	getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): integer;
	unkGetInteriorAtCoords(x: number, y: number, z: number, typeHash: integer): integer;
	areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
	getInteriorFromCollision(x: number, y: number, z: number): integer;
	enableInteriorProp(interior: integer, entitySetName: string): void;
	disableInteriorProp(interior: integer, entitySetName: string): void;
	isInteriorPropEnabled(interior: integer, entitySetName: string): boolean;
	refreshInterior(interior: integer): void;
	hideMapObjectThisFrame(mapObjectHash: integer): void;
	disableInterior(interior: integer, toggle: boolean): void;
	isInteriorDisabled(interior: integer): boolean;
	capInterior(interior: integer, toggle: boolean): void;
	isInteriorCapped(interior: integer): boolean;
}

interface GameItemsetLegacy {
	createItemset(p0: boolean): integer;
	destroyItemset(p0: integer): void;
	isItemsetValid(p0: integer): boolean;
	addToItemset(p0: integer, p1: integer): boolean;
	removeFromItemset(p0: integer, p1: integer): void;
	getItemsetSize(x: integer): integer;
	getIndexedItemInItemset(p0: integer, p1: integer): integer;
	isInItemset(p0: integer, p1: integer): boolean;
	cleanItemset(p0: integer): void;
}

interface GameLoadingscreenLegacy {
	getBroadcastFinshedLosSound(toggle: boolean): void;
}

interface GameLocalizationLegacy {
}

interface GameMiscLegacy {
	getFreeStackSlotsCount(stackSize: integer): integer;
	setWeatherTypeOverTime(weatherType: string, time: number): void;
	setRainFxIntensity(intensity: number): void;
	setCloudHatTransition(name: string, transitionTime: number): void;
	clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
	disableAutomaticRespawn(toggle: boolean): void;
	enableMpDlcMaps(p0: integer): void;
	setUnkMapFlag(flag: integer): void;
	startSaveStruct(size: integer, structName: string): integer;
	startSaveArray(size: integer, arrayName: string): integer;
}

interface GameMobileLegacy {
	createMobilePhone(phoneType: integer): void;
	setMobilePhoneScale(scale: number): void;
	setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: integer): void;
	getMobilePhoneRotation(p1: integer): Vector3Mp;
	setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
	getMobilePhonePosition(): Vector3Mp;
	scriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;
	moveFinger(direction: integer): void;
	setPhoneLean(toggle: boolean): void;
	getMobilePhoneRenderId(): integer;
}

interface GameNetworkLegacy {
	getPosixTime(): integer;
}

interface GameObjectLegacy {
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
	createObject(modelHash: integer, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): integer;
	createObjectNoOffset(modelHash: integer, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): integer;
	deleteObject(object: integer): integer;
	getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: integer, isMission: boolean, p6: boolean, p7: boolean): integer;
	hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: integer, p5: integer): boolean;
	getObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3Mp;
	setDoorAccelerationLimit(doorHash: integer, state: integer, requestDoor: boolean, forceUpdate: boolean): void;
	setDoorAjarAngle(doorHash: integer, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
	doesDoorExist(doorHash: integer): boolean;
	doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: integer, p5: boolean): boolean;
	getObjectFragmentDamageHealth(p0: integer, p1: boolean): number;
	isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
	isObjectNearPoint(objectHash: integer, x: number, y: number, z: number, range: number): boolean;
	trackObjectVisibility(object: integer): void;
	doesPickupObjectExist(pickupObject: integer): boolean;
	isPickupWithinRadius(pickupHash: integer, x: number, y: number, z: number, radius: number): boolean;
	setTeamPickupObject(object: integer, p1: integer, p2: boolean): void;
	highlightPlacementCoords(x: number, y: number, z: number, colorIndex: integer): void;
	setForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;
}

interface GamePadLegacy {
	isInputDisabled(padIndex: integer): boolean;
	isInputJustDisabled(padIndex: integer): boolean;
	getControlActionName(padIndex: integer, control: integer, p2: boolean): string;
	setPadShake(padIndex: integer, duration: integer, frequency: integer): void;
	stopPadShake(padIndex: integer): void;
	setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;
}

interface GamePathfindLegacy {
	getSupportsGpsRouteFlag(nodeID: integer): boolean;
	getIsSlowRoadFlag(nodeID: integer): boolean;
}

interface GamePedLegacy {
	createPed(pedType: integer, modelHash: integer, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): integer;
	isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
	canCreateRandomPed(unk: boolean): boolean;
	createRandomPed(posX: number, posY: number, posZ: number): integer;
	setPedDensityMultiplierThisFrame(multiplier: number): void;
	setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
	setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	setPedReserveParachuteTintIndex(ped: integer, p1: integer): void;
	isPedRespondingToEvent(ped: integer, event: integer): boolean;
	setExclusivePhoneRelationships(ped: integer): integer;
	getPedAsGroupMember(groupID: integer, memberNumber: integer): integer;
	getPedAsGroupLeader(groupID: integer): integer;
	setPedAlternateWalkAnim(ped: integer, animDict: string, animName: string, p3: number, p4: boolean): void;
	clearPedAlternateWalkAnim(ped: integer, p1: number): void;
	getNumHeadOverlayValues(overlayID: integer): integer;
	isAValidHairColor(colorID: integer): boolean;
	isAValidLipstickColor(colorID: integer): boolean;
	isAValidBlushColor(colorID: integer): boolean;
	getFirstParentIdForPedType(type: integer): integer;
	getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: integer): integer;
	getClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: integer): integer;
	setPedToRagdoll(ped: integer, time1: integer, time2: integer, ragdollType: integer, p4: boolean, p5: boolean, p6: boolean): boolean;
	setPedToRagdollWithFall(ped: integer, time: integer, p2: integer, ragdollType: integer, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): boolean;
	getTattooZone(collection: integer, overlay: integer): integer;
	isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
	hasPedReceivedEvent(ped: integer, eventId: integer): boolean;
	setSynchronizedSceneLooped(sceneID: integer, toggle: boolean): void;
	isSynchronizedSceneLooped(sceneID: integer): boolean;
	isPedheadshotValid(id: integer): boolean;
	isPedheadshotReady(id: integer): boolean;
	getPedheadshotTxdString(id: integer): string;
}

interface GamePhysicsLegacy {
	getRopeLength(ropeId: integer): number;
}

interface GamePlayerLegacy {
	reserveEntityExplodesOnHighExplosionCombo(p1: integer): void;
	playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
}

interface GameRecordingLegacy {
	isRecording(): boolean;
}

interface GameReplayLegacy {
}

interface GameScriptLegacy {
	requestScript(scriptName: string): void;
	setScriptAsNoLongerNeeded(scriptName: string): void;
	hasScriptLoaded(scriptName: string): boolean;
	doesScriptExist(scriptName: string): boolean;
	requestStreamedScript(scriptHash: integer): void;
	setStreamedScriptAsNoLongerNeeded(scriptHash: integer): void;
	hasStreamedScriptLoaded(scriptHash: integer): boolean;
	isStreamedScriptRunning(scriptHash: integer): boolean;
	getThreadName(threadId: integer): string;
	getNumberOfInstancesOfStreamedScript(scriptHash: integer): integer;
	triggerScriptEvent(eventGroup: integer, eventDataSize: integer, playerBits: integer): integer;
}

interface GameShapetestLegacy {
}

interface GameStatsLegacy {
	statSetProfileSetting(profileSetting: integer, value: integer): void;
	playstatsNpcInvite(): integer;
	playstatsAwardXp(amount: integer, type: integer, category: integer): void;
	playstatsRankUp(rank: integer): void;
	playstatsMissionStarted(p1: integer, p2: integer, p3: boolean): integer;
	playstatsMissionOver(p1: integer, p2: integer, p3: boolean, p4: boolean, p5: boolean): integer;
	playstatsMissionCheckpoint(p1: integer, p2: integer, p3: integer): integer;
	playstatsRaceCheckpoint(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playstatsMatchStarted(p0: integer, p1: integer, p2: integer): void;
	playstatsShopItem(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playstatsWebsiteVisited(scaleformHash: integer, p1: integer): void;
	playstatsFriendActivity(p0: integer, p1: integer): void;
	playstatsOddjobDone(p0: integer, p1: integer, p2: integer): void;
	playstatsPropChange(p0: integer, p1: integer, p2: integer, p3: integer): void;
	playstatsClothChange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playstatsCheatApplied(cheat: string): void;
}

interface GameStreamingLegacy {
	requestModel2(model: integer): void;
	setStreaming(toggle: boolean): void;
	setGamePausesForStreaming(toggle: boolean): void;
	removeNamedPtfxAsset(fxName: string): void;
	setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
	setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: integer, p5: integer): integer;
	newLoadSceneStartSafe(x: number, y: number, z: number, radius: number, p4: integer): boolean;
	setPlayerSwitchLocation(cameraCoordX: number, cameraCoordY: number, cameraCoordZ: number, camRotationX: number, camRotationY: number, camRotationZ: number, camFov: number, camFarClip: number, rotationOrder: integer): void;
}

interface GameTaskLegacy {
	taskPause(ped: integer, ms: integer): void;
	taskStandStill(ped: integer, time: integer): void;
	taskJump(ped: integer, unused: boolean, p2: integer, p3: integer): void;
	taskCower(ped: integer, duration: integer): void;
	taskHandsUp(ped: integer, duration: integer, facingPed: integer, p3: integer, p4: boolean): void;
	updateTaskHandsUpDuration(ped: integer, duration: integer): void;
	taskOpenVehicleDoor(ped: integer, vehicle: integer, timeOut: integer, seat: integer, speed: number): void;
	taskEnterVehicle(ped: integer, vehicle: integer, timeout: integer, seat: integer, speed: number, flag: integer, p6: integer): void;
	taskLeaveVehicle(ped: integer, vehicle: integer, flags: integer): void;
	taskGetOffBoat(ped: integer, boat: integer): void;
	taskSkyDive(ped: integer, p1: boolean): void;
	taskParachute(ped: integer, p1: boolean, p2: boolean): void;
	taskParachuteToTarget(ped: integer, x: number, y: number, z: number): void;
	setParachuteTaskTarget(ped: integer, x: number, y: number, z: number): void;
	setParachuteTaskThrust(ped: integer, thrust: number): void;
	taskRappelFromHeli(ped: integer, p1: number): void;
	taskVehicleDriveToCoord(ped: integer, vehicle: integer, x: number, y: number, z: number, speed: number, p6: integer, vehicleModel: integer, drivingMode: integer, stopRange: number, p10: number): void;
	taskVehicleDriveToCoordLongrange(ped: integer, vehicle: integer, x: number, y: number, z: number, speed: number, driveMode: integer, stopRange: number): void;
	taskVehicleDriveWander(ped: integer, vehicle: integer, speed: number, drivingStyle: integer): void;
	taskGoStraightToCoord(ped: integer, x: number, y: number, z: number, speed: number, timeout: integer, targetHeading: number, distanceToSlide: number): void;
	taskAchieveHeading(ped: integer, heading: number, timeout: integer): void;
	taskFollowPointRoute(ped: integer, speed: number, unknown: integer): void;
	taskSmartFleeCoord(ped: integer, x: number, y: number, z: number, distance: number, time: integer, p6: boolean, p7: boolean): void;
	taskShockingEventReact(ped: integer, eventHandle: integer): void;
	taskWanderInArea(ped: integer, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
	taskWanderStandard(ped: integer, p1: number, p2: integer): void;
	taskVehiclePark(ped: integer, vehicle: integer, x: number, y: number, z: number, heading: number, mode: integer, radius: number, keepEngineOn: boolean): void;
	taskStealthKill(killer: integer, target: integer, actionType: integer, p3: number, p4: integer): void;
	taskPlantBomb(ped: integer, x: number, y: number, z: number, heading: number): void;
	taskFollowNavMeshToCoord(ped: integer, x: number, y: number, z: number, speed: number, timeout: integer, stoppingRange: number, persistFollowing: boolean, unk: number): void;
	taskFollowNavMeshToCoordAdvanced(ped: integer, x: number, y: number, z: number, speed: number, timeout: integer, unkFloat: number, unkInt: integer, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;
	taskGoToCoordAnyMeans(ped: integer, x: number, y: number, z: number, speed: number, p5: integer, p6: boolean, walkingStyle: integer, p8: number): void;
	taskGoToCoordAnyMeansExtraParams(ped: integer, x: number, y: number, z: number, speed: number, p5: integer, p6: boolean, walkingStyle: integer, p8: number, p9: integer, p10: integer, p11: integer, p12: integer): void;
	taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: integer, x: number, y: number, z: number, speed: number, p5: integer, p6: boolean, walkingStyle: integer, p8: number, p9: integer, p10: integer, p11: integer, p12: integer, p13: integer): void;
	taskPlayAnim(ped: integer, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: integer, flag: integer, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
	taskPlayAnimAdvanced(ped: integer, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, animEnterSpeed: number, animExitSpeed: number, duration: integer, flag: integer, animTime: number, p14: integer, p15: integer): void;
	stopAnimTask(ped: integer, animDictionary: string, animationName: string, p3: number): void;
	taskScriptedAnimation(ped: integer, p4: number, p5: number): TaskScriptedAnimationResult;
	taskPlayPhoneGestureAnimation(ped: integer, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: boolean, p7: boolean): void;
	taskStopPhoneGestureAnimation(ped: integer, p1: integer): void;
	taskClearLookAt(ped: integer): void;
	taskPerformSequence(ped: integer, taskSequenceId: integer): void;
	getIsTaskActive(ped: integer, taskIndex: integer): boolean;
	getScriptTaskStatus(ped: integer, taskHash: integer): integer;
	taskLeaveAnyVehicle(ped: integer, p1: integer, flags: integer): void;
	taskAimGunScripted(ped: integer, scriptTask: integer, p2: boolean, p3: boolean): void;
	updateTaskAimGunScriptedTarget(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: boolean): void;
	taskAimGunAtCoord(ped: integer, x: number, y: number, z: number, time: integer, p5: boolean, p6: boolean): void;
	taskShootAtCoord(ped: integer, x: number, y: number, z: number, duration: integer, firingPattern: integer): void;
	taskShuffleToNextVehicleSeat(ped: integer, vehicle: integer, p2: integer): void;
	clearPedSecondaryTask(ped: integer): void;
	taskGotoEntityOffset(ped: integer, p1: integer, p2: integer, x: number, y: number, z: number, duration: integer): void;
	taskVehicleTempAction(driver: integer, vehicle: integer, action: integer, time: integer): void;
	taskVehicleMission(driver: integer, vehicle: integer, vehicleTarget: integer, missionType: integer, p4: number, p5: integer, p6: number, p7: number, DriveAgainstTraffic: boolean): void;
	taskVehicleMissionCoorsTarget(ped: integer, vehicle: integer, x: number, y: number, z: number, p5: integer, p6: integer, p7: integer, p8: number, p9: number, DriveAgainstTraffic: boolean): void;
	taskVehicleEscort(ped: integer, vehicle: integer, targetVehicle: integer, mode: integer, speed: number, drivingStyle: integer, minDistance: number, p7: integer, noRoadsDistance: number): void;
	taskVehicleFollow(driver: integer, vehicle: integer, targetEntity: integer, speed: number, drivingStyle: integer, minDistance: integer): void;
	taskVehicleChase(driver: integer, targetEnt: integer): void;
	taskVehicleHeliProtect(pilot: integer, vehicle: integer, entityToFollow: integer, targetSpeed: number, p4: integer, radius: number, altitude: integer, p7: integer): void;
	setTaskVehicleChaseBehaviorFlag(ped: integer, flag: integer, set: boolean): void;
	setTaskVehicleChaseIdealPursuitDistance(ped: integer, distance: number): void;
	taskHeliChase(pilot: integer, entityToFollow: integer, x: number, y: number, z: number): void;
	taskPlaneChase(pilot: integer, entityToFollow: integer, x: number, y: number, z: number): void;
	taskPlaneLand(pilot: integer, plane: integer, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;
	taskHeliMission(pilot: integer, aircraft: integer, targetVehicle: integer, targetPed: integer, destinationX: number, destinationY: number, destinationZ: number, missionFlag: integer, maxSpeed: number, landingRadius: number, targetHeading: number, unk1: integer, unk2: integer, unk3: integer, landingFlags: integer): void;
	taskPlaneMission(pilot: integer, aircraft: integer, targetVehicle: integer, targetPed: integer, destinationX: number, destinationY: number, destinationZ: number, missionFlag: integer, angularDrag: number, unk: number, targetHeading: number, maxZ: number, minZ: number, p13: integer): void;
	taskBoatMission(pedDriver: integer, boat: integer, p2: integer, p3: integer, x: number, y: number, z: number, p7: integer, maxSpeed: number, drivingStyle: integer, p10: number, p11: integer): void;
	taskDriveBy(driverPed: integer, targetPed: integer, targetVehicle: integer, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: integer, p8: boolean, firingPattern: integer): void;
	clearDrivebyTaskUnderneathDrivingTask(ped: integer): void;
	isDrivebyTaskUnderneathDrivingTask(ped: integer): boolean;
	isMountedWeaponTaskUnderneathDrivingTask(ped: integer): boolean;
	taskUseMobilePhone(ped: integer, p1: integer, p2: integer): void;
	taskUseMobilePhoneTimed(ped: integer, duration: integer): void;
	taskClimb(ped: integer, unused: boolean): void;
	taskClimbLadder(ped: integer, p1: integer): void;
	taskSetDecisionMaker(ped: integer, p1: integer): void;
	taskSeekCoverToCoords(ped: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: integer, p8: boolean): void;
	taskGuardCurrentPosition(p0: integer, p1: number, p2: number, p3: boolean): void;
	taskGuardSphereDefensiveArea(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer, p7: number, p8: number, p9: number, p10: number): void;
	taskStandGuard(ped: integer, x: number, y: number, z: number, heading: number, scenarioName: string): void;
	setDriveTaskCruiseSpeed(driver: integer, cruiseSpeed: number): void;
	setDriveTaskDrivingStyle(ped: integer, drivingStyle: integer): void;
	taskStartScenarioInPlace(ped: integer, scenarioName: string, unkDelay: integer, playEnterAnim: boolean): void;
	taskStartScenarioAtPosition(ped: integer, scenarioName: string, x: number, y: number, z: number, heading: number, duration: integer, sittingScenario: boolean, teleport: boolean): void;
	taskUseNearestScenarioToCoord(ped: integer, x: number, y: number, z: number, distance: number, duration: integer): void;
	taskUseNearestScenarioToCoordWarp(ped: integer, x: number, y: number, z: number, radius: number, p5: integer): void;
	pedHasUseScenarioTask(ped: integer): boolean;
	taskCombatHatedTargetsInArea(ped: integer, x: number, y: number, z: number, radius: number, p5: integer): void;
	taskSwapWeapon(ped: integer, p1: boolean): void;
	taskReloadWeapon(ped: integer, unused: boolean): void;
	taskWrithe(ped: integer, target: integer, time: integer, p3: integer, p4: integer, p5: integer): void;
	taskPatrol(ped: integer, p1: string, p2: integer, p3: boolean, p4: boolean): void;
	taskStayInCover(ped: integer): void;
	taskVehicleShootAtPed(ped: integer, target: integer, p2: number): void;
	taskVehicleGotoNavmesh(ped: integer, vehicle: integer, x: number, y: number, z: number, speed: number, behaviorFlag: integer, stoppingRange: number): void;
	taskGoToCoordWhileAimingAtCoord(ped: integer, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: integer, p13: boolean, firingPattern: integer): void;
	taskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: integer, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, unkTrue: boolean, unkFlag: integer, aimingFlag: integer, firingPattern: integer): void;
	setHighFallTask(ped: integer, p1: integer, p2: integer, p3: integer): void;
	taskVehicleFollowWaypointRecording(ped: integer, vehicle: integer, WPRecording: string, p3: integer, p4: integer, p5: integer, p6: integer, p7: number, p8: boolean, p9: number): void;
	taskSetBlockingOfNonTemporaryEvents(ped: integer, toggle: boolean): void;
	taskForceMotionState(ped: integer, state: integer, p2: boolean): void;
	taskMoveNetwork(ped: integer, task: string, multiplier: number, p3: boolean, animDict: string, flags: integer): void;
	taskMoveNetworkAdvanced(ped: integer, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: integer, p9: number, p10: boolean, animDict: string, flags: integer): void;
	taskSynchronizedScene(ped: integer, scene: integer, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: integer, flag: integer, playbackRate: number, p9: integer): void;
	updateTaskSweepAimEntity(ped: integer, entity: integer): void;
}

interface GameVehicleLegacy {
	createVehicle(modelHash: integer, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, p7: boolean): integer;
	doesScriptVehicleGeneratorExist(vehicleGenerator: integer): boolean;
	createScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: integer, p7: integer, p8: integer, p9: integer, p10: integer, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: integer): integer;
	deleteScriptVehicleGenerator(vehicleGenerator: integer): void;
	setScriptVehicleGenerator(vehicleGenerator: integer, enabled: boolean): void;
	setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;
	setAllVehicleGeneratorsActive(): void;
	setAllLowPriorityVehicleGeneratorsActive(active: boolean): void;
	getVehicleModelMaxNumberOfPassengers(modelHash: integer): integer;
	setVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
	setFarDrawVehicles(toggle: boolean): void;
	setNumberOfParkedVehicles(value: integer): void;
	isVehicleInGarageArea(garageName: string, vehicle: integer): boolean;
	removeVehicleStuckCheck(vehicle: integer): void;
	getVehicleRecordingId(recording: integer, script: string): integer;
	requestVehicleRecording(recording: integer, script: string): void;
	hasVehicleRecordingBeenLoaded(recording: integer, script: string): boolean;
	removeVehicleRecording(recording: integer, script: string): void;
	getPositionOfVehicleRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;
	getRotationOfVehicleRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;
	getTotalDurationOfVehicleRecordingId(id: integer): number;
	getTotalDurationOfVehicleRecording(recording: integer, script: string): number;
	startPlaybackRecordedVehicle(vehicle: integer, recording: integer, script: string, p3: boolean): void;
	startPlaybackRecordedVehicleWithFlags(vehicle: integer, recording: integer, script: string, flags: integer, time: integer, drivingStyle: integer): void;
	stopPlaybackRecordedVehicle(vehicle: integer): void;
	pausePlaybackRecordedVehicle(vehicle: integer): void;
	unpausePlaybackRecordedVehicle(vehicle: integer): void;
	isPlaybackGoingOnForVehicle(vehicle: integer): boolean;
	isPlaybackUsingAiGoingOnForVehicle(vehicle: integer): boolean;
	getCurrentPlaybackForVehicle(vehicle: integer): integer;
	skipToEndAndStopPlaybackRecordedVehicle(vehicle: integer): void;
	startPlaybackRecordedVehicleUsingAi(vehicle: integer, recording: integer, script: string, speed: number, drivingStyle: integer): void;
	skipTimeInPlaybackRecordedVehicle(vehicle: integer, time: number): void;
	addVehicleStuckCheckWithWarp(p0: integer, p1: number, p2: integer, p3: boolean, p4: boolean, p5: boolean, p6: integer): void;
	setVehicleModelIsSuppressed(model: integer, suppressed: boolean): void;
	getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): integer;
	getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p6: integer): integer;
	getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p6: integer): integer;
	getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): integer;
	isThisModelAnEmergencyBoat(model: integer): boolean;
	getRandomVehicleModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;
	setVehicleDamage(vehicle: integer, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
	getDisplayNameFromVehicleModel(modelHash: integer): string;
	isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;
	requestVehicleAsset(vehicleHash: integer, vehicleAsset: integer): void;
	hasVehicleAssetLoaded(vehicleAsset: integer): boolean;
	removeVehicleAsset(vehicleAsset: integer): void;
	getVehicleModelMaxSpeed(modelHash: integer): number;
	getVehicleModelMaxBraking(modelHash: integer): number;
	getVehicleModelMaxTraction(modelHash: integer): number;
	getVehicleModelAcceleration(modelHash: integer): number;
	getVehicleClassMaxTraction(vehicleClass: integer): number;
	getVehicleClassMaxAgility(vehicleClass: integer): number;
	getVehicleClassMaxAcceleration(vehicleClass: integer): number;
	getVehicleClassMaxBraking(vehicleClass: integer): number;
	setVehicleMod(vehicle: integer, modType: integer, modIndex: integer, customTires: boolean): void;
	getVehicleMod(vehicle: integer, modType: integer): integer;
	preloadVehicleMod(p0: integer, modType: integer, p2: integer): void;
	setVehicleShootAtTarget(driver: integer, entity: integer, xTarget: number, yTarget: number, zTarget: number): void;
	setCargobobHookPosition(cargobob: integer, length1: number, length2: number, p3: boolean): void;
	disableVehicleWeapon(disabled: boolean, weaponHash: integer, vehicle: integer, owner: integer): void;
	getVehicleClass(vehicle: integer): integer;
	getVehicleClassFromName(modelHash: integer): integer;
	doesVehicleExistWithDecorator(decorator: string): boolean;
	displayDistantVehicles(toggle: boolean): void;
}

interface GameWaterLegacy {
	getWaterHeight(x: number, y: number, z: number): number;
	getWaterHeightNoWaves(x: number, y: number, z: number): number;
	testProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Vector3Mp;
	testProbeAgainstAllWater(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer): boolean;
	testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: integer): number;
	modifyWater(x: number, y: number, radius: number, height: number): void;
	setWavesIntensity(intensity: number): void;
}

interface GameWeaponLegacy {
	getWeaponComponentTypeModel(componentHash: integer): integer;
	getWeapontypeModel(weaponHash: integer): integer;
	getWeapontypeSlot(weaponHash: integer): integer;
	getWeapontypeGroup(weaponHash: integer): integer;
	isWeaponValid(weaponHash: integer): boolean;
	requestWeaponAsset(weaponHash: integer, p1: integer, p2: integer): void;
	hasWeaponAssetLoaded(weaponHash: integer): boolean;
	removeWeaponAsset(weaponHash: integer): void;
	createWeaponObject(weaponHash: integer, ammoCount: integer, x: number, y: number, z: number, showWorldModel: boolean, scale: number, p7: integer, p8: integer, p9: integer): integer;
	giveWeaponComponentToWeaponObject(weaponObject: integer, addonHash: integer): void;
	removeWeaponComponentFromWeaponObject(p0: integer, p1: integer): void;
	hasWeaponGotWeaponComponent(weapon: integer, addonHash: integer): boolean;
	giveWeaponObjectToPed(weaponObject: integer, ped: integer): void;
	doesWeaponTakeWeaponComponent(weaponHash: integer, componentHash: integer): boolean;
	setWeaponObjectTintIndex(weapon: integer, tintIndex: integer): void;
	getWeaponObjectTintIndex(weapon: integer): integer;
	getWeaponTintCount(weaponHash: integer): integer;
	getWeaponHudStats(weaponHash: integer): integer;
	getWeaponComponentHudStats(componentHash: integer): integer;
	getWeaponClipSize(weaponHash: integer): integer;
	requestWeaponHighDetailModel(weaponObject: integer): void;
	getWeaponDamageType(weaponHash: integer): integer;
	canUseWeaponOnParachute(weaponHash: integer): boolean;
}

interface GameZoneLegacy {
	getZoneAtCoords(x: number, y: number, z: number): integer;
	getZoneFromNameId(zoneName: string): integer;
	getZonePopschedule(zoneId: integer): integer;
	getNameOfZone(x: number, y: number, z: number): string;
	setZoneEnabled(zoneId: integer, toggle: boolean): void;
	getZoneScumminess(zoneId: integer): integer;
}

interface GameSystemUnk {
}

interface GameAppUnk {
}

interface GameAudioUnk {
	_0xC8B1B2425604CDD0(): boolean;
	_0x33E3C6C6F2F0B506(p0: integer, p1: number, p2: number, p3: number): void;
	_0x892B6AB8F33606F5(p0: integer, entity: integer): void;
	_0x0B568201DD99F0EB(p0: boolean): void;
	_0x61631F5DF50D1C34(p0: boolean): void;
	_0xAA19F5572C38B564(): _0xAA19F5572C38B564Result;
	_0xB542DE8C3D1CB210(p0: boolean): void;
	_0x40763EA7B9B783E7(p0: integer, p1: integer, p2: integer): integer;
	_0x19AF7ED9B9D23058(): void;
	_0x9AC92EED5E4793AB(): void;
	_0x11579D940949C49E(p0: integer): void;
	_0x5B9853296731E88D(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	_0x7EC3C679D0E7E46B(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0x1B7ABE26CBCBF8C7(ped: integer, p1: integer, p2: integer): void;
	_0x30CA2EF91D15ADF8(): integer;
	_0xFF266D1D0EB1195D(): void;
	_0xDD6BCF9E94425DF9(): void;
	_0x0BE4BE946463F917(vehicle: integer): boolean;
	_0xC1805D05E6D4FE10(vehicle: integer): void;
	_0x55ECF4D13D9903B0(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0xDA07819E452FFE8F(p0: integer): void;
	_0xC64A06D939F826F5(): _0xC64A06D939F826F5Result;
	_0x34D66BC058019CE0(radioStationName: string): integer;
	_0xF3365489E0DD50F9(vehicle: integer, toggle: boolean): void;
	_0x5D2BFAAB8D956E0E(): void;
	_0x02E93C796ABD3A97(p0: boolean): void;
	_0x58BB377BEC7CD5F4(p0: boolean, p1: boolean): void;
	_0x9BD7BD55E4533183(p0: integer, p1: integer, p2: integer): void;
	_0xF8AD2EED7C47E8FE(ped: integer, p1: boolean, p2: boolean): void;
	_0xAB6781A5F3101470(p0: integer, p1: integer): void;
	_0xA8A7D434AFB4B97B(p0: string, p1: integer): void;
	_0x2ACABED337622DF2(p0: string): void;
	_0x9D3AF56E94C9AE98(vehicle: integer, p1: number): void;
	_0xF1F8157B8C3F171C(vehicle: integer, p1: string, p2: string): void;
	_0xD2DCCD8E16E20997(p0: integer): void;
	_0x5DB8010EE71FDEF2(vehicle: integer): boolean;
	_0x1C073274E065C6D2(vehicle: integer, toggle: boolean): void;
	_0x6FDDAD856E36988A(vehicle: integer, toggle: boolean): void;
	_0x2DD39BF3E2F9C47F(): integer;
	_0x159B7318403A1CD8(p0: integer): void;
	_0x70B8EC8FC108A634(p0: boolean, p1: integer): void;
	_0x149AEE66F0CB3A99(p0: number, p1: number): void;
	_0x8BF907833BE275DE(p0: number, p1: number): void;
	_0x062D5EAD4DA2FA6A(): void;
	_0xBF4DC1784BE94DFA(ped: integer, p1: boolean, hash: integer): void;
	_0x43FA0DFC5DF87815(vehicle: integer, p1: boolean): void;
	_0xB81CF134AEB56FFB(): void;
	_0xC8EDE9BDBCCBA6D4(p1: number, p2: number, p3: number): integer;
	_0xE4E6DD5566D28C82(): void;
	_0x3A48AB4445D499BE(): integer;
	_0x0150B6FF25A9E2E5(): void;
	_0xBEF34B1D9624D5DD(p0: boolean): void;
}

interface GameBrainUnk {
	_0x0B40ED49D7D6FF84(): void;
	_0x4D953DF78EBF8158(): void;
	_0x6D6840CEE8845831(action: string): void;
	_0x6E91B04E08773030(action: string): void;
}

interface GameCamUnk {
	_0xAABD62873FFB1A33(p0: integer, p1: integer): void;
	_0xF55E4046F6F831DC(p0: integer, p1: number): void;
	_0xE111A7C0D200CBC5(p0: integer, p1: number): void;
	_0x202A5ED9CE01D6E7(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer): void;
	_0x661B5C8654ADD825(cam: integer, p1: boolean): void;
	_0xA2767257A320FC82(p0: integer, p1: boolean): void;
	_0x271017B9BA825366(p0: integer, p1: boolean): void;
	_0x5D96CFB59DA076A0(vehicle: integer, p1: integer, p2: number): void;
	_0xC8B5C4A79CC18B94(cam: integer): void;
	_0x5C48A1D6E3B33179(cam: integer): boolean;
	_0x4879E4FE39074CDF(): boolean;
	_0x487A82C650EB7799(p0: number): void;
	_0x0225778816FDC28C(p0: number): void;
	_0x28B022A17B068A3A(p0: number, p1: number): void;
	_0x469F2ECDEC046337(p0: boolean): void;
	_0x3044240D2E0FA842(): boolean;
	_0x705A276EBFF3133D(): boolean;
	_0xDB90C6CCA48940F1(p0: boolean): void;
	_0xA7092AFE81944852(): void;
	_0xFD3151CD37EA2245(entity: integer): void;
	_0xB1381B97F70C7B30(): void;
	_0xDD79DF9F4D26E1C9(): void;
	_0x271401846BD26E92(p0: boolean, p1: boolean): void;
	_0xC8391C309684595A(): void;
	_0x59424BD75174C9B1(): void;
	_0x9F97DA93681F87EA(): void;
	_0x91EF6EE6419E5B97(p0: boolean): void;
	_0x9DFE13ECDC1EC196(p0: boolean, p1: boolean): void;
	_0x79C0E43EB9B944E2(hash: integer): boolean;
	_0xEE778F8C7E1142E2(p0: integer): integer;
	_0x2A2173E46DAECD12(p0: integer, p1: integer): void;
	_0x19CAFA3C87F7C2FF(): integer;
	_0x0AA27680A0BD43FA(): void;
	_0xCED08CBE8EBB97C7(p0: number, p1: number): void;
	_0x2F7F2B26DD3F18EE(p0: number, p1: number): void;
	_0x4008EDF7D6E48175(p0: boolean): void;
	_0x380B4968D1E09E55(): void;
	_0xCCD078C2665D2973(p0: boolean): void;
	_0x247ACBC4ABBC9D1C(p0: boolean): void;
	_0xBF72910D0F26F025(): integer;
	_0x62ECFCFDEE7885D6(): void;
	_0xDC9DA9E8789F5246(): void;
	_0x1F2300CB7FA7B7F6(): integer;
	_0x17FCA7199A530203(): integer;
	_0xD7360051C885628B(): integer;
	_0x7B8A361C1813FBEF(): void;
	_0x324C5AA411DA7737(p0: integer): void;
	_0x12DED8CA53D47EA5(p0: number): void;
	_0x5A43C76F7FC7BA5F(): void;
	_0x5C41E6BABC9E2112(p0: integer): void;
	_0xEAF0FA793D05C592(): integer;
	_0x62374889A4D59F72(): void;
}

interface GameClockUnk {
}

interface GameCutsceneUnk {
	_0x8D9DF6ECA8768583(threadId: integer): void;
	_0x011883F41211432A(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: integer): void;
	_0x971D7B15BCDBEF99(): integer;
	_0x583DF8E3D4AFBD98(): integer;
	_0x4CEBC1ED31E8925E(cutsceneName: string): boolean;
	_0x4FCD976DA686580C(p0: integer): integer;
	_0x7F96F23FA9B73327(modelHash: integer): void;
	_0xC61B86C9F61EB404(toggle: boolean): void;
	_0x20746F7B1032A3C7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	_0x06EE9048FD080382(p0: boolean): void;
	_0xA0FE76168A189DDB(): integer;
	_0x2F137B508DE238F2(p0: boolean): void;
	_0xE36A98D8AB3D3C66(p0: boolean): void;
	_0x5EDEF0CF8C1DAB3C(): integer;
}

interface GameDatafileUnk {
	_0xA6EEF01087181EDD(p0: integer, p1: integer): integer;
	_0x6AD0BD5E087866CB(p0: integer): void;
	_0xDBF860CF1DB8E599(p0: integer): integer;
}

interface GameDecoratorUnk {
}

interface GameDlcUnk {
	_0x241FCA5B1AA14F75(): boolean;
	_0xF2E07819EF1A5289(): boolean;
	_0x9489659372A81585(): boolean;
	_0xA213B11DFF526300(): boolean;
	_0xC4637A6D03C24CC3(): boolean;
}

interface GameEntityUnk {
	_0x694E00132F2823ED(entity: integer, toggle: boolean): void;
	_0x352E2B5CF420BF3B(p0: integer, p1: integer): void;
	_0xC34BC448DA29F5E9(entity: integer, toggle: boolean): void;
	_0xE66377CDDADA4810(entity: integer, p1: boolean): void;
	_0x490861B88F4FD846(p0: integer): void;
	_0xCEA7C8E1B48FF68C(p0: integer, p1: integer): void;
	_0x5C3B791D580E0BC2(entity: integer, p1: number): void;
	_0x78E8E3A640178255(entity: integer): void;
	_0xDC6F8601FAF2E893(entity: integer, toggle: boolean): void;
	_0x1A092BB0C3808B96(entity: integer, p1: boolean): void;
	_0xB17BC6453F6CF5AC(p0: integer, p1: integer): void;
	_0x68B562E124CC0AEF(pickup: integer, pickup2: integer): void;
	_0x36F32DE87082343E(p0: integer, p1: integer): void;
	_0xD7B80E7C3BEFC396(pickup: integer, toggle: boolean): void;
}

interface GameEventUnk {
}

interface GameFilesUnk {
	_0x10144267DD22866C(overlayHash: integer, p1: integer, character: integer): integer;
	_0x96E2929292A4DB77(componentHash: integer): integer;
	_0x6CEBE002E58DEE97(componentHash: integer): integer;
}

interface GameFireUnk {
}

interface GameGraphicsUnk {
	_0xC5C8F970D4EDFF71(p0: integer): void;
	_0x7FA5D82B8F58EC06(): integer;
	_0x5B0316762AFD4A64(): integer;
	_0x346EF3ECAAAB149E(): void;
	_0x1BBC135A4D25EDDE(p0: boolean): void;
	_0xF3F776ADA161E47D(p0: integer, p1: integer): void;
	_0xADD6627C4D325458(p0: integer): void;
	_0x759650634F07B6B4(p0: integer): boolean;
	_0xCB82A0BF0E3E3265(p0: integer): integer;
	_0x2A893980E96B659A(p0: integer): integer;
	_0x4AF92ACD3141D96C(): void;
	_0xE791DF1F73ED2C8B(p0: integer): integer;
	_0xEC72C258667BE5EA(p0: integer): integer;
	_0x9641588DAB93B4B5(p0: integer): void;
	_0x393BD2275CEB7793(): integer;
	_0xF51D36185993515D(checkpoint: integer, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;
	_0xFCF6788FC4860CD4(checkpoint: integer): void;
	_0x615D3925E87A3B26(checkpoint: integer): void;
	_0xDB1EA9411C8911EC(p0: integer): void;
	_0x3C788E7F6438754D(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0x2D3B147AFAD49DE0(textureDict: string, textureName: string, x: number, y: number, width: number, height: number, p6: number, red: integer, green: integer, blue: integer, alpha: integer, p11: integer): void;
	_0xB2EBE8CBC58B90E9(): integer;
	_0xEFABC7722293DA7C(): void;
	_0xEF398BEEE4EF45F9(p0: boolean): void;
	_0x814AF7DCAACC597B(p0: integer): void;
	_0x43FA7CBE20DAB219(p0: integer): void;
	_0xE2892E7E55D7073A(p0: number): void;
	_0xC35A6D07C93802B2(): void;
	_0xBE197EAA669238F4(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	_0x61F95E5BB3E0A8C6(p0: integer): void;
	_0xAE51BC858F32BA66(p0: integer, p1: number, p2: number, p3: number, p4: number): void;
	_0x649C97D52332341A(p0: integer): void;
	_0x2C42340F916C5930(p0: integer): integer;
	_0x14FC5833464340A8(): void;
	_0x0218BA067D249DEA(): void;
	_0x1612C45F9E3E0D44(): void;
	_0x5DEBD9C4DC995692(): void;
	_0xAAE9BE70EC7C69AB(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer): void;
	_0x36F6626459D91457(p0: number): void;
	_0x259BA6D4E6F808F1(p0: integer): void;
	_0x25FC3E33A31AD0C9(p0: boolean): void;
	_0x0AE73D8DF3A762B2(p0: boolean): void;
	_0xCA465D9CC0D231BA(p0: integer): void;
	_0xC0416B061F2B7E5E(p0: boolean): void;
	_0xB3C641F3630BF6DA(p0: number): void;
	_0xE59343E9E96529E7(): number;
	_0x6A51F78772175A51(toggle: boolean): void;
	_0xE63D7C6EECECB66B(toggle: boolean): void;
	_0xE3E2C1B4C59DBC77(unk: integer): void;
	_0x851CD923176EBA7C(): void;
	_0xB569F41F3E7E83A4(p0: integer): void;
	_0x7AC24EAB6D74118D(p0: boolean): boolean;
	_0xBCEDB009461DA156(): integer;
	_0x27FEB5254759CDE3(textureDict: string, p1: boolean): boolean;
	_0x8CDE909A0370BB3A(toggle: boolean): void;
	_0xBA0127DA25FD54C9(p0: integer, p1: integer): void;
	_0x2A251AA48B2B46DB(): void;
	_0x908311265D42A820(p0: integer): void;
	_0xCFD16F0DB5A3535C(toggle: boolean): void;
	_0x5F6DF3D92271E8A1(toggle: boolean): void;
	_0x2B40A97646381508(p0: integer): void;
	_0xBB90E12CAC1DAB25(p0: number): void;
	_0xCA4AE345A153D573(p0: boolean): void;
	_0x54E22EA2C1956A8D(p0: number): void;
	_0x949F397A288B28B3(p0: number): void;
	_0xBA3D194057C79A7B(p0: string): void;
	_0x5DBF05DB5926D089(p0: integer): void;
	_0x9B079E5221D984D3(p0: boolean): void;
	_0xA46B73FAA3460AE1(p0: boolean): void;
	_0xF78B803082D4386F(p0: number): void;
	_0xD9454B5752C857DC(): void;
	_0x27CFB1B1E078CB2D(): void;
	_0x82ACC484FFA3B05F(p0: integer): integer;
	_0x0E4299C549F0D1F1(toggle: boolean): void;
	_0x02369D5C8A51FDCF(toggle: boolean): void;
	_0x46D1A61A21F566FC(p0: number): void;
	_0x03300B57FCAC6DDB(p0: boolean): void;
	_0x98EDF76A7271E4F2(): void;
	_0x1CBA05AE7BD7EE05(p0: number): void;
	_0x98D18905BF723B99(): integer;
	_0x2FCB133CA50A49EB(val: integer): boolean;
	_0x86255B1FC929E33E(val: integer): boolean;
	_0x32F34FF7F617643B(p0: integer, p1: integer): void;
	_0x5E657EF1099EDD65(p0: integer): boolean;
	_0xD1C7CB175E012964(scaleformHandle: integer): boolean;
	_0xD1C55B110E4DF534(p0: integer): void;
	_0x30432A0118736E00(): integer;
	_0x98C4FE6EC34154CA(presetName: string, ped: integer, p2: integer, posX: number, posY: number, posZ: number): boolean;
	_0x7A42B2E236E71415(): void;
	_0x108BE26959A9D9BB(toggle: boolean): void;
}

interface GameHudUnk {
	_0x9245E81072704B8A(p0: boolean): void;
	_0x3D9ACB1EB139E702(): integer;
	_0x632B2940C67F4EA9(scaleformHandle: integer): _0x632B2940C67F4EA9Result;
	_0x98C3CF913D895111(string: string, length: integer): string;
	_0xCD74233600C4EA6B(toggle: boolean): void;
	_0xC2D2AD9EAAE265B8(): boolean;
	_0x0C698D8F099174C7(p0: integer): void;
	_0xE4C3B169876D33D7(p0: integer): void;
	_0xEB81A3DADD503187(): void;
	_0x2790F4B17D098E26(toggle: boolean): void;
	_0x6CDD58146A436083(p0: integer): void;
	_0xD1942374085C8469(p0: integer): void;
	_0x57D760D55F54E071(p0: integer): void;
	_0xD2049635DEB9C375(): void;
	_0xBA8D65C1C65702E5(toggle: boolean): void;
	_0x214CD562A939246A(): boolean;
	_0x9FCB3CBFB3EAD69A(p0: integer, p1: number): void;
	_0xB7B873520C84C118(): void;
	_0x2C173AE2BDB9385E(blip: integer): integer;
	_0x003E92BA477F9D7F(blip: integer): integer;
	_0x2916A928514C9827(): void;
	_0xB552929B85FC27EC(p0: integer, p1: integer): void;
	_0x4B5B620C9B59ED34(p0: integer, p1: integer): void;
	_0x2C9F302398E13141(p0: integer, p1: integer): void;
	_0xC594B315EDF2D4AF(ped: integer): void;
	_0xF83D0FEBE75E62C9(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer): void;
	_0x35A3CD97B2C0A6D2(blip: integer): void;
	_0x8410C5E0CD847B9D(): void;
	_0x41350B4FC28E3941(p0: boolean): void;
	_0x504DFE62A1692296(toggle: boolean): void;
	_0xA17784FCA9548D15(p0: integer, p1: integer, p2: integer): void;
	_0x55F5A5F07134DE60(): void;
	_0x170F541E1CADD1DE(p0: boolean): void;
	_0xE67C6DFD386EA5E7(p0: boolean): void;
	_0x801879A9B4F4B2FB(): boolean;
	_0x7B21E0BB01E8224A(p0: integer): void;
	_0x817B86108EB94E51(p0: boolean): _0x817B86108EB94E51Result;
	_0x62E849B7EB28E770(p0: boolean): void;
	_0xDAF87174BE7454FF(p0: integer): boolean;
	_0x211C4EF450086857(): void;
	_0xBF4F34A85CA2970C(): void;
	_0x2F057596F2BD0061(): boolean;
	_0x5BFF36D6ED83E0AE(): Vector3Mp;
	_0x77F16B447824DA6C(p0: integer): void;
	_0xCDCA26E80FAECB8F(): void;
	_0x2DE6C5E2E996F178(p0: integer): void;
	_0xDE03620F8703A9DF(): integer;
	_0x359AF31A4B52F5ED(): integer;
	_0x13C4B962653A5280(): integer;
	_0xC8E1071177A23BE5(): _0xC8E1071177A23BE5Result;
	_0x4895BDEA16E7C080(p0: integer): void;
	_0xF06EBB91A81E09E3(p0: boolean): void;
	_0x66E7CB63C97B7D20(): integer;
	_0x593FEAE1F73392D4(): integer;
	_0xF284AC67940C6812(): integer;
	_0x2E22FEFA0100275E(): boolean;
	_0x0CF54F20DE43879C(p0: integer): void;
	_0xA238192F33110615(): _0xA238192F33110615Result;
	_0xCA6B2F7CE32AB653(p0: integer, p2: integer): integer;
	_0x24A49BEAF468DC90(p0: integer, p2: integer, p3: integer, p4: integer): integer;
	_0x8F08017F9D7C47BD(p0: integer, p2: integer): integer;
	_0xF13FE2A80C05C561(): boolean;
	_0x1185A8087587322C(p0: boolean): void;
	_0x577599CCED639CA2(p0: integer): void;
	_0x7C226D5346D4D10A(p0: integer): void;
	_0x04655F9D075D0AE5(toggle: boolean): void;
	_0x243296A510B562B6(): void;
}

interface GameInteriorUnk {
	_0x82EBB79E258FA2B7(entity: integer, interior: integer): void;
	_0x38C1CB1CB119A016(p0: integer, p1: integer): void;
	_0xAF348AFCB575A441(roomName: string): void;
	_0x405DC2AEF6AF95B9(roomHashKey: integer): void;
	_0x4C2330E61D3DEB56(interior: integer): integer;
	_0x483ACA1176CA93F1(): void;
	_0x7ECDF98587E92DEC(p0: integer): void;
	_0x9E6542F0CE8E70A3(toggle: boolean): void;
	_0x7241CCB7D020DB69(entity: integer, toggle: boolean): void;
}

interface GameItemsetUnk {
}

interface GameLoadingscreenUnk {
	_0xF2CA003F167E21D2(): integer;
	_0xFA1E0E893D915215(toggle: boolean): void;
}

interface GameLocalizationUnk {
}

interface GameMiscUnk {
	_0x4DCDF92BF64236CD(p0: string, p1: string): void;
	_0x31125FD509D9043F(p0: string): void;
	_0xEBD3205A207939ED(p0: string): void;
	_0x97E7E2C04245115B(p0: integer): void;
	_0x916CA67D26FD1E37(p0: string): void;
	_0xEB078CA2B5E82ADD(p0: string, p1: string): void;
	_0x703CC7F60CBB2B57(p0: string): void;
	_0x8951EB9C6906D3C8(): void;
	_0xBA4B8D83BDC75551(p0: string): void;
	_0x65D2EBB47E1CEC21(toggle: boolean): void;
	_0x6F2135B6129620C1(toggle: boolean): void;
	_0x8D74E26F54B4E5C3(p0: string): void;
	_0x0CF97F497FE7D048(p0: number): void;
	_0x1178E104409FE58C(p0: integer, p1: integer): void;
	_0x02DEAAC8F8EA7FE7(p0: string): void;
	_0x7F8F6405F4777AF6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): number;
	_0x21C235BC64831E5A(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): Vector3Mp;
	_0xF56DFB7B61BE7276(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): number;
	_0xA0AD167E4B39D9A2(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer, p10: integer, p11: integer, p12: integer, p13: integer): integer;
	_0x39455BF4F4F55186(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer, p10: integer, p11: integer, p12: integer): integer;
	_0x7EC6F9A478A6A512(): void;
	_0x397BAA01068BAA96(): integer;
	_0xB51B9AB9EF81868C(toggle: boolean): void;
	_0xA4A0065E39C9F25C(): _0xA4A0065E39C9F25CResult;
	_0x2107A3773771186D(): boolean;
	_0x06462A961E94B67C(): void;
	_0xD642319C54AADEB6(): integer;
	_0x5B1F2E327B6B6FE1(): integer;
	_0x72DE52178C291CB5(): integer;
	_0x44A0BDC559B35F6E(): boolean;
	_0xEB2104E905C6F2E9(): integer;
	_0x2B5E102E4A42F2BF(): integer;
	_0xFB80AB299D2EE1BD(toggle: boolean): void;
	_0xFA3FFB0EEBC288A3(p0: boolean): void;
	_0x48F069265A0E4BEC(name: string): integer;
	_0x8269816F6CFD40F8(name: string): integer;
	_0xFAA457EF263E8763(name: string): integer;
	_0x19BFED045C647C49(ped: integer): boolean;
	_0xE95B0C7D5BA3B96B(ped: integer): boolean;
	_0x54F157E0336A3822(ped: integer, p1: string, p2: number): void;
	_0xD9F692D349249528(): void;
	_0xE532EC1A63231B4F(p0: integer, p1: integer): void;
	_0x1EAE0A6E978894A2(p0: integer, p1: boolean): void;
	_0x6FDDF453C0C756EC(): boolean;
	_0xFB00CA71DA386228(): void;
	_0xE3D969D2785FFB5E(): void;
	_0x1BB299305C3E8C13(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0x23227DF0B2115469(): void;
	_0xD10282B6E3751BA0(): integer;
	_0x693478ACBD7F18E7(): void;
}

interface GameMobileUnk {
	_0xA2CCBE62CD4C91A4(): integer;
	_0x1B0B4AEED5B9B41C(p0: number): void;
	_0x53F4892D18EC90A4(p0: number): void;
	_0x3117D84EFA60F77B(p0: number): void;
	_0x15E69E2802C24B8D(p0: number): void;
	_0xAC2890471901861C(p0: number): void;
	_0xD6ADE981781FCA09(p0: number): void;
	_0xF1E22DC13F5EEBAD(p0: number): void;
	_0x466DA42C89865553(p0: number): void;
}

interface GameNetworkUnk {
	_0xBD545D44CCE70597(): boolean;
	_0xEBCAB9E5048434F4(): integer;
	_0x74FB3E29E6D10FA9(): integer;
	_0x7808619F31FF22DB(): integer;
	_0xA0FA4EC6A05DA44E(): integer;
	_0x8D11E61A4ABF49CC(): boolean;
	_0x4237E822315D8BA9(): boolean;
	_0x78321BEA235FD8CD(p0: integer, p1: boolean): boolean;
	_0x07EAB372C8841D99(p0: integer, p1: integer, p2: integer): integer;
	_0x906CA41A4B74ECA4(): integer;
	_0x023ACAB2DC9DC4A4(): integer;
	_0x0CF6CC51AA18F0F8(p0: integer, p1: integer, p2: integer): integer;
	_0x64E5C4CC82847B73(): boolean;
	_0x1F7BC3539F9E0224(): void;
	_0xA8ACB6459542A8C8(): integer;
	_0x83FE8D7229593017(): void;
	_0x53C10C8BD774F2C9(): integer;
	_0x283B6062A2C01E9B(): void;
	_0x8B4FFC790CA131EF(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	_0x04918A41BC9B8157(p0: integer, p1: integer, p2: integer): integer;
	_0xB9351A07A0D458B1(p0: integer): integer;
	_0x041C7F2A6C9894E6(p0: integer, p1: integer, p2: integer): integer;
	_0xCAE55F48D3D7875C(p0: integer): void;
	_0xF49ABC20D8552257(p0: integer): void;
	_0x4811BBAC21C5FCD5(p0: integer): void;
	_0x5539C3EBF104A53A(p0: boolean): void;
	_0x702BC4D605522539(p0: integer): void;
	_0x5ECD378EE64450AB(p0: integer): void;
	_0x59D421683D31835A(p0: integer): void;
	_0x1153FA02A659051C(): void;
	_0x600F8CB31C7AAB6E(p0: integer): void;
	_0xF9B83B77929D8863(): integer;
	_0x2CC848A861D01493(): integer;
	_0x94A8394D150B013A(): integer;
	_0x5AE17C6B0134B7F1(): integer;
	_0xC42DD763159F3461(): boolean;
	_0xD313DE83394AF134(): boolean;
	_0xBDB6F89C729CF388(): boolean;
	_0xF814FEC6A19FD6E0(): void;
	_0x140E6A44870A11CE(): void;
	_0x4C9034162368E206(): integer;
	_0xB5D3453C98456528(): integer;
	_0x0E4F77F7B9D74D84(p0: integer): void;
	_0x1888694923EF4591(): void;
	_0xB13E88E655E5A3BC(): void;
	_0x617F49C2668E6155(): integer;
	_0x261E97AD7BCF3D40(p0: boolean): void;
	_0x39917E1B4CB0F911(p0: boolean): void;
	_0x2CE9D95E4051AECD(p0: integer): void;
	_0xA2E9C1AB8A92E8CD(toggle: boolean): void;
	_0xC571D0E77D8BBC29(): boolean;
	_0x1398582B7F72B3ED(p0: integer): void;
	_0x1F8E00FB18239600(p0: integer): void;
	_0xF6F4383B7C92F11A(p0: integer): void;
	_0x973D76AA760A6CB6(p0: boolean): void;
	_0x3F9990BF5F22759C(): integer;
	_0x4A9FDE3A5A6D0437(toggle: boolean): void;
	_0x1171A97A3D3981B6(p2: integer, p3: integer): _0x1171A97A3D3981B6Result;
	_0x742B58F723233ED9(p0: integer): integer;
	_0xEBF8284D8CADEB53(): void;
	_0xF083835B70BA9BFE(): void;
	_0x71DC455F5CD1C2B1(): integer;
	_0x3855FB5EB2C5E8B2(p0: integer): integer;
	_0x4AD490AE1536933B(p0: integer, p1: integer): integer;
	_0x0D77A82DC2D0DA59(): _0x0D77A82DC2D0DA59Result;
	_0x2BF66D2E7414F686(): integer;
	_0x14922ED3E38761F0(): boolean;
	_0x6CE50E47F5543D0C(): void;
	_0xFA2888E3833C8E96(): void;
	_0x25D990F8E0E3F13C(): void;
	_0xA12D3A5A3753CC23(): integer;
	_0xF287F506767CC8A9(): integer;
	_0xEA8C0DDB10E2822A(p0: integer, p1: integer): void;
	_0xD6D7478CA62B8D41(p0: integer, p1: integer): void;
	_0x560B423D73015E77(p0: integer): integer;
	_0x638A3A81733086DB(): integer;
	_0x2302C0264EA58D31(): void;
	_0x741A3D8380319A81(): void;
	_0x2DA41ED6E1FCD7A5(p0: integer, p1: integer): integer;
	_0xC434133D9BA52777(p0: integer, p1: integer): integer;
	_0x83660B734994124D(p0: integer, p1: integer, p2: integer): integer;
	_0x7242F8B741CE1086(netId: integer): boolean;
	_0xD66C9E72B3CC4982(p1: integer): _0xD66C9E72B3CC4982Result;
	_0x37D5F739FD494675(p0: integer): integer;
	_0x4C2A9FDC22377075(): void;
	_0xB309EBEA797E001F(p0: integer): integer;
	_0x26F07DD83A5F7F98(): integer;
	_0x7D395EA61622E116(p0: boolean): void;
	_0xCFEB46DCD7D8D5EB(p0: boolean): void;
	_0x265559DA40B3F327(p0: integer): void;
	_0x4348BFDA56023A2F(p0: integer, p1: integer): integer;
	_0x3C5C1E2C2FF814B1(toggle: boolean): void;
	_0x9D7AFCBF21C51712(toggle: boolean): void;
	_0x6A5D89D7769A40D8(toggle: boolean): void;
	_0x5E3AA4CA2B6FB0EE(p0: integer): void;
	_0xCA575C391FEA25CC(p0: integer): void;
	_0xADB57E5B663CCA8B(p0: integer): _0xADB57E5B663CCA8BResult;
	_0x8EF52ACAECC51D9C(toggle: boolean): void;
	_0xBF22E0F32968E967(player: integer, p1: boolean): void;
	_0x17C9E241111A674D(p0: integer, p1: integer): void;
	_0x2E4C123D1C8A710E(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): integer;
	_0x2B51EDBEFC301339(p0: integer, p1: string): boolean;
	_0xC32EA7A2F6CA7557(): integer;
	_0x9D724B400A7E8FFC(p0: integer, p1: integer): void;
	_0x0379DAF89BA09AA5(p0: integer, p1: integer): void;
	_0x32EBD154CB6B8B99(p0: integer, p1: integer, p2: integer): void;
	_0x76B3F29D3F967692(p0: integer, p1: integer): void;
	_0x3FA36981311FA4FF(netId: integer, state: boolean): void;
	_0xE16AA70CE9BEEDC3(p0: integer): integer;
	_0xE42D626EEC94E5D9(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	_0xBA7F0B77D80A4EB7(p0: integer, p1: integer): void;
	_0x0F1A4B45B7693B95(p0: integer, p1: integer): void;
	_0xFAC18E7356BD3210(): void;
	_0xA2A707979FE754DC(p0: integer, p1: integer): void;
	_0x838DA0936A24ED4D(p0: integer, p1: integer): void;
	_0x13F1FCB111B820B0(p0: boolean): void;
	_0xD7B6C73CAD419BCF(p0: boolean): void;
	_0x7EF7649B64D7FF10(entity: integer): boolean;
	_0xA5EAFE473E45C442(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	_0x45F35C0EDC33B03B(netScene: integer, modelHash: integer, x: number, y: number, z: number, p5: number, p6: string, p7: number, p8: number, flags: integer): void;
	_0xC9B43A33D09CADA7(p0: integer): void;
	_0x144DA052257AE7D8(p0: integer): void;
	_0xFB1F9381E80FA13F(p0: integer, p1: integer): integer;
	_0xFB680D403909DC70(p0: integer, p1: integer): void;
	_0xB37E4E6A2388CA7B(): boolean;
	_0x2B1C623823DB0D9D(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): integer;
	_0x4DF7CFFF471A7FB1(p0: integer): boolean;
	_0xA6FCECCF4721D679(p0: integer): void;
	_0x95BAF97C82464629(p0: integer, p1: integer): void;
	_0x7DB53B37A2F211A0(): integer;
	_0x2E0BF682CC778D49(p0: integer): boolean;
	_0x0EDE326D47CD0F3E(ped: integer, player: integer): boolean;
	_0x38B7C51AB1EDC7D8(entity: integer, toggle: boolean): void;
	_0x3FC795691834481D(p0: integer, p1: integer): void;
	_0x2A5E0621DD815A9A(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0xCD71A4ECAB22709E(entity: integer): void;
	_0xE6717E652B8C8D8A(p0: integer, p1: integer): void;
	_0x367EF5E2F439B4C6(p0: integer): void;
	_0x94538037EE44F5CF(p0: boolean): void;
	_0xB606E6CC59664972(p0: integer): void;
	_0x1D4DC17C38FEAFF0(): boolean;
	_0x265635150FB0D82E(): void;
	_0x444C4525ECE0A4B9(): void;
	_0x59328EB08C5CEB2B(): boolean;
	_0xFAE628F1E9ADB239(p0: integer, p1: integer, p2: integer): void;
	_0x754615490A029508(): integer;
	_0x155467ACA0F55705(): integer;
	_0x8B0C2964BA471961(): integer;
	_0x88B588B41FF7868E(): integer;
	_0x67FC09BC554A75E5(): integer;
	_0x9FEDF86898F100E9(): integer;
	_0x24E4E51FC16305F9(): integer;
	_0x692D58DF40657E8C(p0: integer, p1: integer, p2: integer, p4: integer, p5: boolean): integer;
	_0xA7862BC5ED1DFD7E(p0: integer, p1: integer): _0xA7862BC5ED1DFD7EResult;
	_0x97A770BEEF227E2B(p0: integer, p1: integer): _0x97A770BEEF227E2BResult;
	_0x5324A0E3E4CE3570(p0: integer, p1: integer): _0x5324A0E3E4CE3570Result;
	_0xC87E740D9F3872CC(): integer;
	_0x584770794D758C18(p0: integer): integer;
	_0x8C8D2739BA44AF0F(p0: integer): boolean;
	_0xAEAB987727C5A8A4(p0: integer): boolean;
	_0x1D610EB0FEA716D9(p0: integer): boolean;
	_0x7FCC39C46C3C03BD(p0: integer): boolean;
	_0x2D5DC831176D0114(p0: integer): boolean;
	_0xEBFA8D50ADDC54C4(p0: integer): boolean;
	_0x162C23CA83ED0A62(p0: integer): boolean;
	_0x5A34CD9C3C5BEC44(p0: integer): boolean;
	_0x68103E2247887242(): void;
	_0x45E816772E93A9DB(): integer;
	_0x793FF272D5B365F4(): integer;
	_0xB746D20B17F2A229(): _0xB746D20B17F2A229Result;
	_0x63B406D7884BFA95(): integer;
	_0x4D02279C83BE69FE(): integer;
	_0xFD75DABC0957BF33(p0: boolean): void;
	_0x60EDD13EB3AC1FF3(): boolean;
	_0x36391F397731595D(p0: integer): integer;
	_0x9465E683B12D3F6B(): void;
	_0xCA59CCAE5D01E4CE(): void;
	_0x6BFF5F84102DF80A(player: integer): void;
	_0x5C497525F803486B(): void;
	_0x6FB7BB3607D27FA2(): integer;
	_0x45A83257ED02D9BC(): void;
	_0x16D3D49902F697BB(player: integer): boolean;
	_0xD414BE129BB81B32(player: integer): number;
	_0x0E3A041ED6AC2B45(player: integer): number;
	_0x350C23949E43686C(player: integer): number;
	_0x64D779659BC37B19(entity: integer): Vector3Mp;
	_0x33DE49EDF4DDE77A(entity: integer): Vector3Mp;
	_0xAA5FAFCD2C5F5E47(entity: integer): Vector3Mp;
	_0xAEDF1BC1C133D6E3(): integer;
	_0x2555CF7DA5473794(): integer;
	_0x6FD992C4A1C1B986(): integer;
	_0xDB663CC9FF3407A9(player: integer): integer;
}

interface GameObjectUnk {
	_0xAFE24E4D29249E4A(object: integer, p1: number, p2: number, p3: boolean): boolean;
	_0x2542269291C6AC84(p0: integer): integer;
	_0x006E4B040ED37EC3(p0: integer): void;
	_0xE851471AEFC3374F(p0: integer): integer;
	_0xA85A21582451E951(doorHash: integer, p1: boolean): void;
	_0xC7F29CA00F46350E(p0: boolean): void;
	_0x701FDA1E82076BA4(): void;
	_0x190428512B240692(garageHash: integer, vehicles: boolean, peds: boolean, objects: boolean, isNetwork: boolean): void;
	_0x659F9D71F52843F8(id: integer, toggle: boolean): void;
	_0x66A49D021870FE88(): void;
	_0xE05F6AEEFEB0BB02(p0: integer, p1: integer, p2: integer): void;
	_0xF9C1681347C8BD15(object: integer): void;
	_0xC6033D32241F6FB5(object: integer, toggle: boolean): void;
	_0xEB6F1A9B5510A5D2(p0: integer, p1: boolean): void;
	_0x394CD08E31313C28(): void;
	_0x826D1EE4D1CAFC78(p0: integer, p1: integer): void;
	_0x1E3F1B1B891A2AAA(p0: integer, p1: integer): void;
	_0xD4A7A435B3710D05(x: number, y: number, z: number, radius: number): void;
	_0xB7C6D80FB371659A(): void;
	_0x8DCA505A5C196F05(p0: integer, p1: integer): void;
	_0xFDC07C58E8AAB715(pickupHash: integer): void;
	_0x0596843B34B95CE5(p0: integer, p1: integer): void;
	_0xA08FE5E49BDC39DD(p0: integer, p1: number, p2: boolean): void;
	_0x62454A641B41F3C5(p0: integer): void;
	_0x39A5FB7EAF150840(p0: integer, p1: integer): void;
	_0xDB41D07A45A6D4B7(p0: integer): integer;
	_0x31F924B53EADDF65(p0: boolean): void;
	_0x858EC9FD25DE04AA(p0: integer, p1: integer): void;
	_0x8881C98A31117998(p0: integer, p1: integer): void;
	_0x8CFF648FBD7330F1(p0: integer): void;
	_0x46F3ADD1E2D5BAF2(p0: integer, p1: integer): void;
	_0x641F272B52E2F0F8(p0: integer, p1: integer): void;
	_0x4C134B4DF76025D0(pickup: integer, toggle: boolean): void;
	_0xAA059C615DE9DD03(pickup: integer, toggle: boolean): void;
	_0xF92099527DB8E2A7(p0: integer, p1: integer): void;
	_0xA2C1F5E92AFE49ED(): void;
	_0x762DB2D380B48D04(p0: integer): void;
	_0x7813E8B8C4AE4799(pickup: integer): void;
	_0xBFFE53AE7E67FCDC(pickup: integer, toggle: boolean): void;
	_0xD05A3241B9A86F19(entity: integer, toggle: boolean): void;
	_0xB2D0BDE54F0E8E5A(object: integer, toggle: boolean): void;
	_0x31574B1B41268673(p0: integer, p1: integer): void;
	_0xADF084FB8F075D06(object: integer): boolean;
	_0x3B2FD68DB5F8331C(object: integer, toggle: boolean): void;
	_0x8CAAB2BD3EA58BD4(p0: integer): void;
	_0x63ECF581BC70E363(p0: integer, p1: integer): void;
	_0x734E1714D077DA9A(object: integer, toggle: boolean): void;
	_0x1A6CBB06E2D0D79D(object: integer, p1: boolean): void;
	_0x3BD770D281982DB5(p0: integer, p1: integer): integer;
	_0x1C57C94A6446492A(object: integer, toggle: boolean): void;
	_0xB5B7742424BD4445(object: integer, toggle: boolean): void;
}

interface GamePadUnk {
	_0x5B73C77D9EB66E24(p0: boolean): void;
	_0xD7D22F5592AED8BA(p0: integer): integer;
	_0x23F09EADC01449D6(padIndex: integer): boolean;
	_0x6CD79468A1E595C6(padIndex: integer): boolean;
	_0xCB0360EFEFB2580D(padIndex: integer): void;
	_0x14D29BB12D47F68C(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xF239400E16C23E08(p0: integer, p1: integer): void;
	_0xA0CEFCEA390AAB9B(p0: integer): void;
	_0xE1615EC03B3BB4FD(): boolean;
	_0x25AAA32BDC98F2A3(): integer;
	_0x7F4724035FDCA1DD(padIndex: integer): void;
}

interface GamePathfindUnk {
	_0xAA76052DDA9BFC3E(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	_0xF3162836C28F9DA5(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	_0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): integer;
}

interface GamePedUnk {
	_0x87DDEB611B329A9C(multiplier: number): void;
	_0xF2BEBCDFAFDAA19E(toggle: boolean): void;
	_0x5A7F62FDA59759BD(): void;
	_0xFF4803BC019852D9(p0: number, p1: integer): void;
	_0x9911F4A24485F653(p0: boolean): void;
	_0xAFC976FD0580C7B3(ped: integer, toggle: boolean): void;
	_0x2F3C3D9F50681DE4(p0: integer, p1: boolean): void;
	_0x061CB768363D6424(ped: integer, toggle: boolean): void;
	_0xFD325494792302D7(ped: integer, toggle: boolean): void;
	_0x412F1364FA066CFB(p0: integer): integer;
	_0x451D05012CCEC234(p0: integer): integer;
	_0x2F074C904D85129E(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	_0xEC4B4B3B9908052A(ped: integer, unk: number): void;
	_0x733C87D4CE22BEA2(p0: integer): void;
	_0x5407B7288D0478B7(p0: integer): integer;
	_0x336B3D200AB007CB(p0: integer, p1: number, p2: number, p3: number, p4: number): integer;
	_0xAD27D957598E49E9(ped: integer, p1: integer, p2: number, hash: integer, p4: integer, p5: integer): void;
	_0x2735233A786B1BEF(ped: integer, p1: number): void;
	_0xB282749D5E028163(p0: integer, p1: integer): void;
	_0x49E50BDB8BA4DAB2(ped: integer, toggle: boolean): void;
	_0x80054D7FCC70EEC6(ped: integer): void;
	_0x9E30E91FB03A2CAF(): _0x9E30E91FB03A2CAFResult;
	_0x1E77FA7A62EE6C4C(p0: integer): integer;
	_0xF033419D1B81FAE8(p0: integer): integer;
	_0xEA9960D07DADCF10(p0: integer): integer;
	_0xAAA6A3698A69E048(p0: integer): integer;
	_0xC56FBF2F228E1DAC(modelHash: integer, p1: integer, p2: integer): integer;
	_0xFEC9A3B1820F3331(p0: integer): boolean;
	_0x03EA03AF85A85CB7(ped: integer, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: integer): boolean;
	_0xA3F3564A5B3646C0(ped: integer): boolean;
	_0xF9ACF4A08098EA25(ped: integer, p1: boolean): void;
	_0x2B694AFCF64E6994(ped: integer, p1: boolean): void;
	_0x9A77DFD295E29B09(p0: integer, p1: boolean): void;
	_0x25361A96E0F7E419(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	_0xEC6935EBE0847B90(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	_0x425AECF167663F48(ped: integer, p1: boolean): void;
	_0x5B6010B3CBC29095(p0: integer, p1: boolean): void;
	_0xCEDA60A74219D064(p0: integer, p1: boolean): void;
	_0xC30BDAEE47256C13(p0: integer): integer;
	_0xC2EE020F5FB4DB53(ped: integer): void;
	_0x6647C5F6F5792496(ped: integer, p1: boolean): void;
	_0xA660FAF550EB37E5(p0: integer, p1: boolean): void;
	_0x3E9679C1DFCF422C(p0: integer, p1: integer): void;
	_0xF2385935BFFD4D92(p0: integer): boolean;
	_0x1A330D297AAC6BC1(ped: integer, p1: integer): void;
	_0x2016C603D6B8987C(ped: integer, toggle: boolean): void;
	_0xA9B61A329BFDCBEA(p0: integer, p1: boolean): void;
	_0xA52D5247A4227E14(p0: integer): void;
	_0xCD018C591F94CB43(ped: integer, p1: boolean): void;
	_0x75BA1CB3B7D40CAF(ped: integer, p1: boolean): void;
	_0x511F1A683387C7E2(ped: integer): integer;
	_0x9C6A6C19B6C0C496(ped: integer): integer;
	_0x2DFC81C9B9608549(ped: integer): integer;
	_0x110F526AB784111F(ped: integer, p1: number): void;
	_0xE906EC930F5FE7C8(p0: integer, p1: integer): void;
	_0x1216E0BFA72CC703(p0: integer, p1: integer): void;
	_0xB8B52E498014F5B0(ped: integer): boolean;
	_0x0B3E35AC043707D9(p0: integer, p1: integer): void;
	_0x46B05BCAE43856B0(ped: integer, flag: integer): boolean;
	_0xED3C76ADFA6D07C4(ped: integer): void;
	_0xE861D0B05C7662B8(ped: integer, p1: boolean, p2: integer): void;
	_0x820E9892A77E97CD(p0: integer, p1: integer): void;
	_0x06087579E7AA85A9(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: number): boolean;
	_0xD33DAA36272177C4(ped: integer): void;
	_0x711794453CFD692B(p0: integer, p1: integer): void;
	_0x83A169EABCDB10A2(p0: integer, p1: integer): void;
	_0x288DF530C92DAD6F(p0: integer, p1: number): void;
	_0x0F62619393661D6E(p0: integer, p1: integer, p2: integer): void;
	_0xDFE68C4B787E1BFB(ped: integer): void;
	_0xFAB944D4D481ACCB(ped: integer, toggle: boolean): void;
}

interface GamePhysicsUnk {
	_0xA1AE736541B0FCA3(p1: boolean): integer;
	_0x36CCB9BE67B970FD(ropeId: integer, p1: boolean): void;
	_0x84DE3B5FB3E666F0(): integer;
	_0xBC0CE682D4D05650(ropeId: integer, p1: integer, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;
	_0xB1B6216CA2E7B55E(p0: integer, p1: boolean, p2: boolean): void;
	_0xB743F735C03D7810(ropeId: integer, p1: integer): void;
	_0xCC6E963682533882(object: integer): void;
	_0x9EBD751E5787BAF2(p0: boolean): void;
}

interface GamePlayerUnk {
	_0x7E07C78925D5FD96(p0: integer): integer;
	_0xDE45D1A1EF45EE61(toggle: boolean): void;
	_0xC3376F42B1FACCC6(): void;
	_0xFAC75988A7D078D3(): void;
	_0x49B856B1360C47C7(p0: integer, p1: integer, p2: integer): void;
	_0x823EC8E82BA45986(p0: integer): void;
	_0xBC9490CA15AEA8FB(): void;
	_0x4669B3ED80F24B4E(): void;
	_0x2F41A3BAE005E5FA(p0: integer, p1: integer): void;
	_0xAD73CE5A09E42D12(): void;
	_0x36F1B38855F2A8DF(): void;
	_0xB45EFF719D8427A6(p0: number): void;
	_0x0032A6DBA562C518(): void;
	_0xDCC07526B8EC45AF(): boolean;
	_0xCAC57395B151135F(p1: boolean): void;
	_0xB9CF1F793A9F1BF1(): boolean;
	_0xCB645E85E97EA48B(): boolean;
	_0xB885852C39CC265D(): void;
	_0xFFEE8FA29AB9A18E(p1: integer): void;
	_0x5FC472C501CCADB3(): boolean;
	_0xF10B44FD479D69F3(p1: integer): boolean;
	_0xDD2620B7B9D16FF1(p1: number): boolean;
	_0x8D768602ADEF2245(p1: number): void;
	_0xD821056B9ACF8052(p0: integer, p1: integer): void;
	_0x31E90B8873A4CD3B(p0: integer, p1: integer): void;
	_0x690A61A6D13583F6(): boolean;
	_0x9EDD76E87D5D51BA(): void;
	_0xBC0753C9CA14B506(p1: integer, p2: boolean): boolean;
	_0x2F7CEB6520288061(p0: boolean): void;
	_0x5501B7A5CDB79D37(): void;
	_0x55FCC0C390620314(p0: integer, p1: integer, p2: integer): void;
	_0x2382AB11450AE7BA(p0: integer, p1: integer): void;
	_0x6E4361FF3E8CD7CA(p0: integer): integer;
	_0x237440E46D918649(p0: integer): void;
	_0x9097EB6D4BB9A12A(entity: integer): void;
	_0x9F260BFB59ADBCA3(entity: integer): void;
	_0x7BAE68775557AE0B(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	_0x7148E0F43D11F0D9(): void;
	_0x70A382ADEC069DD3(coordX: number, coordY: number, coordZ: number): void;
}

interface GameRecordingUnk {
	_0x48621C9FCA3EBD28(p0: integer): void;
	_0x81CBAE94390F9F89(): void;
	_0x13B350B8AD0EEE10(): void;
	_0x293220DA1B46CEBC(p0: number, p1: number, p2: integer): void;
	_0x208784099002BC30(missionNameLabel: string, p1: integer): void;
	_0xF854439EFBB3B583(): void;
	_0x66972397E0757E7A(p0: integer, p1: integer, p2: integer): void;
	_0xDF4B952F7D381B95(): integer;
	_0x4282E08174868BE3(): integer;
	_0x33D47E85B476ABCD(p0: boolean): boolean;
}

interface GameReplayUnk {
	_0x7E2BD3EF6C205F09(p0: string, p1: boolean): void;
	_0x5AD3932DAEB1E5D3(): void;
	_0xE058175F8EAFE79A(p0: boolean): void;
}

interface GameScriptUnk {
	_0xB1577667C3708F9B(): void;
	_0x836B62713E0534CA(): boolean;
	_0x760910B49D2B98EA(): void;
	_0x0F6F1EBBC4E1D5E6(scriptIndex: integer, p1: string): boolean;
	_0x22E21FBCFC88C149(scriptIndex: integer, p1: string): integer;
	_0x829CD22E043A2577(p0: integer): integer;
}

interface GameShapetestUnk {
}

interface GameStatsUnk {
	_0x5688585E6D563CD8(p0: integer): void;
	_0x7F2C4CDF2E82DF4C(p0: integer): boolean;
	_0xE496A53BA5F50A56(p0: integer): integer;
	_0x6A7F19756F1A9016(): boolean;
	_0x7E6946F68A38B74F(p0: integer): boolean;
	_0xA8733668D1047B51(p0: integer): void;
	_0xECB41AC6AB754401(): boolean;
	_0x9B4BD21D69B1E609(): void;
	_0xC0E0D686DDFC6EAE(): integer;
	_0x5A556B229A169402(): boolean;
	_0xB1D2BB1E1631F5B1(): boolean;
	_0xBED9F5693F34ED17(statName: integer, p1: integer): number;
	_0x26D7399B9587FE89(p0: integer): void;
	_0xA78B8FA58200DA56(p0: integer): void;
	_0x6DEE77AFF8C21BD1(): _0x6DEE77AFF8C21BD1Result;
	_0xF8C54A461C3E11DC(): _0xF8C54A461C3E11DCResult;
	_0xF5BB8DAC426A52C0(): _0xF5BB8DAC426A52C0Result;
	_0xA736CF7FB7C5BFF4(): _0xA736CF7FB7C5BFF4Result;
	_0x14E0B2D1AD1044E0(): _0x14E0B2D1AD1044E0Result;
	_0xD1032E482629049E(p0: integer): void;
	_0x6A60E43998228229(p0: integer): void;
	_0xBFAFDB5FAAA5C5AB(p0: integer): void;
	_0x8C9D11605E59D955(p0: integer): void;
	_0x3DE3AA516FB126A4(p0: integer): void;
	_0xBAA2F0490E146BE8(p0: integer): void;
	_0x1A7CE7CD3E653485(p0: integer): void;
	_0x419615486BBF1956(p0: integer): void;
	_0x84DFC579C2FC214C(p0: integer): void;
	_0x0A9C7F36E5D7B683(p0: integer): void;
	_0x164C5FF663790845(p0: integer): void;
	_0xEDBF6C9B0D2C65C8(p0: integer): void;
	_0x6551B1F7F6CD46EA(p0: integer): void;
	_0x2CD90358F67D0AA8(p0: integer): void;
	_0xA0F93D5465B3094D(): integer;
	_0x71B008056E5692D6(): void;
	_0x34770B9CE0E03B91(p0: integer): integer;
	_0x88578F6EC36B4A3A(p0: integer, p1: integer): integer;
	_0x38491439B6BA7F7D(p0: integer, p1: integer): number;
	_0x8EC74CEB042E7CFF(p0: integer): void;
	_0x6483C25849031C4F(p0: integer, p1: integer, p2: integer): integer;
	_0x5EAD2BF6484852E4(): boolean;
	_0xC141B8917E0017EC(): void;
	_0xC67E2DA1CBE759E2(): void;
	_0xF1A1803D3476F215(value: integer): void;
	_0x38BAAA5DD4C9D19F(value: integer): void;
	_0x55384438FC55AD8E(value: integer): void;
	_0x723C1CE13FBFDB67(p0: integer, p1: integer): void;
	_0x0D01D20616FC73FB(p0: integer, p1: integer): void;
	_0x428EAF89E24F6C36(p0: integer, p1: number): void;
	_0x6F361B8889A792A3(): void;
	_0xC847B43F369AC0B5(): void;
	_0x9A62EC95AE10E011(): integer;
	_0x4C89FE2BDEB3F169(): integer;
	_0xC6E0E2616A7576BB(): integer;
	_0x5BD5F255321C4AAF(p0: integer): integer;
	_0xDEAAF77EB3687E97(p0: integer): _0xDEAAF77EB3687E97Result;
	_0x98E2BC1CA26287C3(): void;
	_0x629526ABA383BCAA(): void;
	_0xBE3DB208333D9844(): integer;
	_0x33D72899E24C3365(p0: integer, p1: integer): integer;
	_0xA761D4AC6115623D(): integer;
	_0xF11F01D98113536A(p0: integer): integer;
	_0x8B9CDBD6C566C38C(): integer;
	_0xE8853FBCE7D8D0D6(): integer;
	_0xA943FD1722E11EFD(): integer;
	_0x84A810B375E69C0E(): integer;
	_0x9EC8858184CD253A(): integer;
	_0xBA9749CC94C1FD85(): integer;
	_0x55A8BECAF28A4EB7(): integer;
	_0x32CAC93C9DE73D32(): integer;
	_0xAFF47709F1D5DCCE(): integer;
	_0x6E0A5253375C4584(): integer;
	_0x1A8EA222F9C67DBB(p0: integer): integer;
	_0xF9F2922717B819EC(): integer;
	_0x0B8B7F74BF061C6D(): integer;
	_0xB3DA2606774A8E2D(): boolean;
	_0x6BC0ACD0673ACEBE(p0: integer, p1: integer, p2: integer): void;
	_0x8D8ADB562F09A245(p0: integer): void;
	_0xD1A1EE3B4FA8E760(p0: integer): void;
	_0x88087EE1F28024AE(p0: integer): void;
	_0xFCC228E07217FCAC(p0: integer): void;
	_0x678F86D8FC040BDB(p0: integer): void;
	_0xA6F54BB2FFCA35EA(p0: integer): void;
	_0x5FF2C33B13A02A11(p0: integer): void;
	_0x282B6739644F4347(p0: integer): void;
	_0xF06A6F41CB445443(p0: integer): void;
	_0x7B18DA61F6BAE9D5(p0: integer): void;
	_0x06EAF70AE066441E(p0: integer): void;
	_0x14EDA9EE27BD1626(p0: integer): void;
	_0x930F504203F561C9(p0: integer): void;
	_0xE3261D791EB44ACB(p0: integer): void;
	_0x73001E34F85137F8(p0: integer): void;
	_0x53CAE13E9B426993(p0: integer): void;
	_0x7D36291161859389(p0: integer): void;
	_0x60EEDC12AF66E846(p0: integer): void;
	_0x3EBEAC6C3F81F6BD(p0: integer): void;
	_0x96E6D5150DBF1C09(p0: integer, p1: integer, p2: integer): void;
	_0xA3C53804BDB68ED2(p0: integer, p1: integer): void;
	_0x6BCCF9948492FD85(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xD1C9B92BDD3F151D(p0: integer, p1: integer, p2: integer): void;
	_0x44919CC079BB60BF(p0: integer): void;
	_0x7033EEFD9B28088E(p0: integer): void;
	_0xAA525DFF66BB82F5(p0: integer, p1: integer, p2: integer): void;
	_0x015B03EE1C43E6EC(p0: integer): void;
	_0xBF371CD2B64212FD(p0: integer): void;
	_0x7D8BA05688AD64C7(p0: integer): void;
	_0x0B565B0AAE56A0E8(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	_0x28ECB8AC2F607DB2(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xCC25A4553DFBF9EA(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xF534D94DFA2EAD26(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xD558BEC0BBA7E8D2(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0x03C2EEBB04B3FB72(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	_0x8989CBD7B4E82534(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	_0x27AA1C973CACFE63(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	_0xDAF80797FC534BEC(p0: integer): void;
	_0x316DB59CD14C1774(p0: integer): void;
	_0x2D7A9B577E72385E(p0: integer): void;
	_0x830C3A44EB3F2CF9(p0: integer): void;
	_0xB26F670685631727(p0: integer, p1: integer): void;
	_0xC14BD9F5337219B2(p0: integer, p1: integer): void;
	_0x4FCDBD3F0A813C25(p0: integer, p1: integer): void;
	_0xDFBD93BF2943E29B(p0: integer): void;
	_0x92FC0EEDFAC04A14(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	_0x0077F15613D36993(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0xF9096193DF1F99D4(p0: integer): void;
	_0x2E0259BABC27A327(p0: integer): void;
	_0x53C31853EC9531FF(p0: integer): void;
	_0x810B5FCC52EC7FF0(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0x5BF29846C6527C54(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xC03FAB2C2F92289B(p0: integer): void;
	_0x5CDAED54B34B0ED0(p0: integer): void;
	_0x4AFF7E02E485E92B(): void;
	_0xDFCDB14317A9B361(p0: integer): void;
	_0xC1E963C58664B556(p0: integer): void;
	_0x2FA3173480008493(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0xD4367D310F079DB0(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0x4DC416F246A41FC8(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0x2818FF6638CB09DE(p0: integer): void;
	_0xD6CA58B3B53A0F22(p0: integer): void;
}

interface GameStreamingUnk {
	_0x0811381EF5062FEC(p0: integer): void;
	_0x4E52E752C76E7E7A(p0: integer): void;
	_0x1F3F018BC3AFA77C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: integer, p8: integer): integer;
	_0x0AD9710CEE2F590F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer): integer;
	_0x1EE7D8DF4425F053(p0: integer): void;
	_0x7D41E9D2D17C5B2D(p0: integer): integer;
	_0x07C313F94746702C(p0: integer): integer;
	_0xBC9823AB80A3DCAC(): integer;
	_0x71E7B2E657449AAD(): integer;
	_0x5F2013F8BC24EE69(p0: integer): void;
	_0x933BBEEB8C61B5F4(): boolean;
	_0x5B48A06DD0E792A5(): integer;
	_0x1E9057A74FD73E23(): void;
	_0xBED8CA5FF5E04113(p0: number, p1: number, p2: number, p3: number): void;
	_0x472397322E92A856(): void;
	_0x40AEFD1A244741F2(p0: boolean): void;
	_0x03F1A106BDA7DD3E(): void;
	_0x95A7DABDDBB78AE7(iplName1: string, iplName2: string): void;
	_0x63EB2B972A218CAC(): void;
	_0xFB199266061F820A(): boolean;
	_0xF4A0DADB70F57FA6(): void;
	_0x5068F488DDB54DD8(): integer;
	_0xEF39EE20C537E98C(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	_0xBEB2D9A1D9A8F55A(p0: integer, p1: integer, p2: integer, p3: integer): void;
	_0x20C6C7E4EB082A7F(p0: boolean): void;
	_0xF8155A7F03DDFC8E(p0: integer): void;
}

interface GameTaskUnk {
	_0x3E38E28A1D80DDF6(ped: integer): boolean;
	_0x6100B3CEFD43452E(p0: integer): void;
	_0x53DDC75BC3AC0A90(vehicle: integer): void;
	_0x9D252648778160DF(p0: integer): integer;
	_0xFA83CA6776038F64(x: number, y: number, z: number): void;
	_0x1F351CF1C6475734(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	_0x29682E2CCF21E9B5(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer, p10: integer, p11: integer, p12: integer, p13: integer): void;
	_0xAB13A5565480B6D9(ped: integer, p1: string): integer;
	_0x8423541E8B3A1589(p0: integer, p1: integer, p2: integer): void;
	_0x8634CEF2522D987B(ped: integer, p1: string, value: number): void;
	_0x0FFB3C758E8C07B9(ped: integer, p1: boolean): integer;
}

interface GameVehicleUnk {
	_0x7D6F9A3EF26136A0(vehicle: integer, toggle: boolean, p2: boolean): void;
	_0x6EAAEFC76ACC311F(p0: integer): integer;
	_0x407DC5E97DB1A4D3(p0: integer, p1: integer): void;
	_0x9A75585FB2E54FAD(x: number, y: number, z: number, radius: number): void;
	_0x0A436B8643716D14(): void;
	_0x76D26A22750E849E(vehicle: integer): void;
	_0xAB31EF4DE6800CE9(p0: integer, p1: integer): void;
	_0x1B212B26DD3C04DF(vehicle: integer, toggle: boolean): void;
	_0xC67DB108A9ADE3BE(p0: integer, p1: integer): void;
	_0xED5EDE9E676643C9(p0: integer, p1: integer): void;
	_0xB28B1FE5BFADD7F5(vehicle: integer, p1: boolean): void;
	_0x6501129C9E0FFA05(p0: integer, p1: integer): void;
	_0xDCE97BDF8A0EABC8(vehicle: integer, p1: integer): void;
	_0x9849DE24FCF23CCC(vehicle: integer, toggle: boolean): void;
	_0x8664170EF165C4A6(p0: integer, p1: integer): void;
	_0x6A98C2ECF57FA5D4(vehicle: integer, entity: integer): void;
	_0x8AA9180DE2FEDD45(vehicle: integer, p1: boolean): void;
	_0x107A473D7A6647A9(vehicle: integer): void;
	_0x3B458DDB57038F08(vehicle: integer, doorIndex: integer, toggle: boolean): void;
	_0xA247F9EF01D8082E(p0: integer): void;
	_0x8821196D91FA2DE5(vehicle: integer, toggle: boolean): void;
	_0x5845066D8A1EA7F7(vehicle: integer, x: number, y: number, z: number, p4: integer): void;
	_0x796A877E459B99EA(p0: integer, p1: number, p2: number, p3: number): void;
	_0xFAF2A78061FD9EF4(p0: integer, p1: number, p2: number, p3: number): void;
	_0x063AE2B2CC273588(vehicle: integer, p1: boolean): void;
	_0x99CAD8E7AFDB60FA(vehicle: integer, p1: number, p2: number): void;
	_0xDBC631F109350B8C(vehicle: integer, p1: boolean): void;
	_0x2311DD7159F00582(vehicle: integer, p1: boolean): void;
	_0x065D03A9D6B2C6B5(p0: integer, p1: integer): void;
	_0xC4B3347BD68BD609(p0: integer): void;
	_0xD3301660A57C9272(p0: integer): void;
	_0xB9562064627FF9DB(p0: integer, p1: integer): void;
	_0xBE5C1255A1830FF5(vehicle: integer, toggle: boolean): void;
	_0x9BECD4B9FEF3F8A6(vehicle: integer, p1: boolean): void;
	_0x88BC673CA9E0AE99(vehicle: integer, p1: boolean): void;
	_0xE851E480B814D4BA(vehicle: integer, p1: boolean): void;
	_0xA01BC64DD4BFBBAC(vehicle: integer, p1: integer): integer;
	_0xC50CE861B55EAB8B(vehicle: integer, p1: boolean): void;
	_0x6EBFB22D646FFC18(vehicle: integer, p1: boolean): void;
	_0x35BB21DE06784373(p0: integer, p1: integer): void;
	_0x9F3F689B814F2599(vehicle: integer, p1: boolean): void;
	_0x4E74E62E0A97E901(vehicle: integer, p1: boolean): void;
	_0x4056EA1105F5ABD7(p0: integer, p1: integer): void;
	_0xD565F438137F0E10(p0: integer, p1: integer): void;
	_0x3441CAD2F2231923(vehicle: integer, p1: boolean): void;
	_0x0581730AB9380412(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	_0x737E398138550FFF(p0: integer, p1: integer): void;
	_0xA4822F1CF23F4810(p1: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer): _0xA4822F1CF23F4810Result;
	_0x51DB102F4A3BA5E0(toggle: boolean): void;
	_0xA4A9A4C40E615885(p0: integer): void;
	_0xEEBFC7A7EFDC35B4(vehicle: integer): integer;
	_0x5EE5632F47AE9695(vehicle: integer, health: number): void;
	_0x1CF38D529D7441D9(vehicle: integer, toggle: boolean): void;
	_0x1F9FB66F3A3842D2(vehicle: integer, p1: boolean): void;
	_0x59C3757B3B7408E8(vehicle: integer, toggle: boolean, p2: number): void;
	_0x0AD9E8F87FF7C16F(p0: integer, p1: boolean): void;
	_0xAB04325045427AAE(vehicle: integer, p1: boolean): void;
	_0xCFD778E7904C255E(vehicle: integer): void;
	_0x4D9D109F63FEE1D4(p0: integer, p1: boolean): void;
	_0x279D50DE5652D935(vehicle: integer, toggle: boolean): void;
	_0xF25E02CB9C5818F8(): void;
	_0x182F266C2D9E2BEB(vehicle: integer, p1: number): void;
	_0xF051D9BFB6BA39C0(p0: integer): void;
	_0x4C815EB175086F84(p0: integer, p1: integer): integer;
	_0xB264C4D2F2B0A78B(vehicle: integer): void;
	_0x1F34B0626C594380(p0: integer, p1: integer): void;
	_0x2C1D8B3B19E517CC(p0: integer, p1: integer): integer;
	_0xC0ED6438E6D39BA8(p0: integer, p1: integer, p2: integer): void;
	_0x9BDDC73CC6A115D4(vehicle: integer, p1: boolean, p2: boolean): void;
	_0x56EB5E94318D3FB6(vehicle: integer, p1: boolean): void;
	_0x2C4A1590ABF43E8B(vehicle: integer, p1: boolean): void;
	_0xE05DD0E9707003A3(p0: integer, p1: boolean): void;
	_0xE5810AC70602F2F5(vehicle: integer, p1: number): void;
	_0x6A973569BA094650(vehicle: integer, p1: integer): void;
	_0xF78F94D60248C737(vehicle: integer, p1: boolean): boolean;
	_0x5E569EC46EC21CAE(vehicle: integer, toggle: boolean): void;
	_0x41062318F23ED854(vehicle: integer, toggle: boolean): void;
	_0x4AD280EB48B2D8E6(vehicle: integer, togle: boolean): void;
	_0xB68CFAF83A02768D(vehicle: integer, toggle: boolean): void;
	_0x0205F5365292D2EB(vehicle: integer, p1: number): void;
	_0xCF9159024555488C(p0: integer): void;
	_0xB93B2867F7B479D1(vehicle: integer, index: integer): void;
	_0x35E0654F4BAD7971(p0: boolean): void;
	_0xA7DCDF4DED40A8F4(vehicle: integer, p1: boolean): void;
	_0xD4C4642CB7F50B5D(vehicle: integer): boolean;
	_0xC361AA040D6637A8(vehicle: integer, p1: boolean): void;
	_0xE16142B94664DEFD(vehicle: integer, p1: boolean): void;
	_0x26D99D5A82FD18E8(p0: integer): void;
	_0x5BA68A0840D546AC(p0: integer, p1: integer): integer;
	_0x4419966C9936071A(vehicle: integer): void;
	_0x870B8B7A766615C8(p0: integer, p1: integer, p2: integer): void;
	_0x8533CAFDE1F0F336(p0: integer): integer;
	_0xD4196117AF7BB974(p0: integer, p1: integer): integer;
	_0xBB2333BB87DDD87F(p0: integer, p1: integer): void;
	_0x73561D4425A021A2(p0: integer, p1: integer): void;
	_0x7BBE7FF626A591FE(p0: integer): void;
	_0x65B080555EA48149(p0: integer): void;
	_0x428AD3E26C8D9EB0(vehicle: integer, x: number, y: number, z: number, p4: number): void;
	_0xE2F53F172B45EDE1(): void;
	_0xBA91D045575699AD(vehicle: integer): boolean;
	_0x80E3357FDEF45C21(p0: integer, p1: integer): void;
	_0xB2E0C0D6922D31F2(vehicle: integer, toggle: boolean): void;
	_0x3DE51E9C80B116CF(p0: integer): integer;
	_0x9D30687C57BAA0BB(p0: integer): void;
	_0x41290B40FA63E6DA(p0: integer): void;
	_0x0419B167EE128F33(p0: integer, p1: integer): integer;
	_0xF3B0E0AED097A3F5(p0: integer, p1: integer): integer;
	_0xD3E51C0AB8C26EEE(p0: integer, p1: integer): integer;
	_0x72BECCF4B829522E(p0: integer, p1: integer): void;
	_0x66E3AAFACE2D1EB8(p0: integer, p1: integer, p2: integer): void;
	_0x1312DDD8385AEE4E(p0: integer, p1: integer): void;
	_0xEDBC8405B3895CC9(p0: integer, p1: integer): void;
	_0x26E13D440E7F6064(vehicle: integer, value: number): void;
	_0x2FA2494B47FDD009(p0: integer, p1: integer): void;
	_0x78CEEE41F49F421F(p0: integer, p1: integer): void;
	_0xAF60E6A2936F982A(p0: integer, p1: integer): void;
	_0x430A7631A84C9BE7(p0: integer): void;
	_0x8235F1BEAD557629(vehicle: integer, toggle: boolean): void;
	_0x9640E30A7F395E4B(vehicle: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	_0x0BBB9A7A8FFE931B(p0: integer, p1: integer, p2: integer): void;
	_0x0A3F820A9A9A9AC5(vehicle: integer, x: number, y: number, z: number): void;
	_0x51F30DB60626A20E(vehicle: integer, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, p7: integer, p8: integer): boolean;
	_0x97841634EF7DF1D6(vehicle: integer, toggle: boolean): void;
	_0x3A9128352EAC9E85(p0: integer): integer;
	_0xAA653AE61924B0A0(vehicle: integer, toggle: boolean): void;
	_0x887FA38787DE8C72(vehicle: integer): void;
	_0x36DE109527A2C0C4(toggle: boolean): void;
	_0x82E0AC411E41A5B4(toggle: boolean): void;
	_0x99A05839C46CE316(toggle: boolean): void;
	_0xE8718FAF591FD224(vehicle: integer): boolean;
	_0x5BBCF35BF6E456F7(toggle: boolean): void;
	_0x8F0D5BA1C2CC91D7(toggle: boolean): void;
	_0xF8B49F5BA7F850E7(vehicle: integer, p1: integer): void;
}

interface GameWaterUnk {
	_0x547237AA71AB44DE(p0: number): void;
}

interface GameWeaponUnk {
	_0x50276EF8172F5F12(ped: integer): void;
	_0x24C024BA8379A70A(p0: integer, p1: integer): void;
	_0xA2C9AC24B4061285(ped: integer, weaponHash: integer): integer;
	_0x977CA98939E82E4B(weaponObject: integer, p1: integer): void;
	_0xE4DCEC7FD5B739A5(ped: integer): void;
}

interface GameZoneUnk {
}

interface GameSystem extends GameSystemLegacy {
	wait(ms: integer): void;
	startNewScript(scriptName: string, stackSize: integer): integer;
	startNewScriptWithArgs(scriptName: string, argCount: integer, stackSize: integer): StartNewScriptWithArgsResult;
	startNewScriptWithNameHash(scriptHash: integer, stackSize: integer): integer;
	startNewScriptWithNameHashAndArgs(scriptHash: integer, argCount: integer, stackSize: integer): StartNewScriptWithNameHashAndArgsResult;
	timera(): integer;
	timerb(): integer;
	settimera(value: integer): void;
	settimerb(value: integer): void;
	timestep(): number;
	sin(value: number): number;
	cos(value: number): number;
	sqrt(value: number): number;
	pow(base: number, exponent: number): number;
	log10(value: number): number;
	vmag(x: number, y: number, z: number): number;
	vmag2(x: number, y: number, z: number): number;
	vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
	shiftLeft(value: integer, bitShift: integer): integer;
	shiftRight(value: integer, bitShift: integer): integer;
	floor(value: number): integer;
	ceil(value: number): integer;
	round(value: number): integer;
	toFloat(value: integer): number;
	setThreadPriority(priority: integer): void;
}

interface GameApp extends GameAppLegacy {
	dataValid(): boolean;
	getInt(property: string): integer;
	getFloat(property: string): number;
	getString(property: string): string;
	setInt(property: string, value: integer): void;
	setFloat(property: string, value: number): void;
	setString(property: string, value: string): void;
	setApp(appName: string): void;
	setBlock(blockName: string): void;
	clearBlock(): void;
	closeApp(): void;
	closeBlock(): void;
	hasLinkedSocialClubAccount(): boolean;
	hasSyncedData(appName: string): boolean;
	saveData(): void;
	getDeletedFileStatus(): integer;
	deleteAppData(appName: string): boolean;
}

interface GameAudio extends GameAudioLegacy {
	playPedRingtone(ringtoneName: string, ped: integer, p2: boolean): void;
	isPedRingtonePlaying(ped: integer): boolean;
	stopPedRingtone(ped: integer): void;
	isMobilePhoneCallOngoing(): boolean;
	createNewScriptedConversation(): void;
	addLineToConversation(index: integer, p1: string, p2: string, p3: integer, p4: integer, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: integer, p10: boolean, p11: boolean, p12: boolean): void;
	addPedToConversation(index: integer, ped: integer, p2: string): void;
	setMicrophonePosition(p0: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;
	startScriptPhoneConversation(p0: boolean, p1: boolean): void;
	preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
	startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	startPreloadedConversation(): void;
	getIsPreloadedConversationReady(): boolean;
	isScriptedConversationOngoing(): boolean;
	isScriptedConversationLoaded(): boolean;
	getCurrentScriptedConversationLine(): integer;
	pauseScriptedConversation(p0: boolean): void;
	restartScriptedConversation(): void;
	stopScriptedConversation(p0: boolean): integer;
	skipToNextScriptedConversationLine(): void;
	interruptConversation(p0: integer): InterruptConversationResult;
	interruptConversationAndPause(ped: integer, p1: string, p2: string): void;
	registerScriptWith(p0: integer): void;
	unregisterScriptWith(): void;
	requestMissionBank(p0: string, p1: boolean, p2: integer): boolean;
	requestAmbientBank(p0: string, p1: boolean, p2: integer): boolean;
	requestScriptBank(p0: string, p1: boolean, p2: integer): boolean;
	hintAmbientBank(p0: integer, p1: integer, p2: integer): integer;
	hintScriptBank(p0: integer, p1: integer, p2: integer): integer;
	releaseMissionBank(): void;
	releaseAmbientBank(): void;
	releaseNamedScriptBank(audioBank: string): void;
	releaseScriptBank(): void;
	getSoundId(): integer;
	releaseSoundId(soundId: integer): void;
	playSound(soundId: integer, audioName: string, audioRef: string, p3: boolean, p4: integer, p5: boolean): void;
	playSoundFrontend(soundId: integer, audioName: string, audioRef: string, p3: boolean): void;
	playDeferredSoundFrontend(soundName: string, soundsetName: string): void;
	playSoundFromEntity(soundId: integer, audioName: string, entity: integer, audioRef: string, isNetwork: boolean, p5: integer): void;
	playSoundFromCoord(soundId: integer, audioName: string, x: number, y: number, z: number, audioRef: string, isNetwork: boolean, range: integer, p8: boolean): void;
	stopSound(soundId: integer): void;
	getNetworkIdFromSoundId(soundId: integer): integer;
	getSoundIdFromNetworkId(netId: integer): integer;
	setVariableOnSound(soundId: integer, p2: number): integer;
	setVariableOnStream(p0: string, p1: number): void;
	overrideUnderwaterStream(p1: boolean): integer;
	setVariableOnUnderWaterStream(variableName: string, value: number): void;
	hasSoundFinished(soundId: integer): boolean;
	playPedAmbientSpeechNative(ped: integer, speechName: string, speechParam: string, p3: integer): void;
	playPedAmbientSpeechAndCloneNative(ped: integer, speechName: string, speechParam: string, p3: integer): void;
	playPedAmbientSpeechWithVoiceNative(ped: integer, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;
	playAmbientSpeechFromPositionNative(speechName: string, voiceName: string, x: number, y: number, z: number, speechParam: string): void;
	overrideTrevorRage(voiceEffect: string): void;
	resetTrevorRage(): void;
	setPlayerAngry(ped: integer, toggle: boolean): void;
	playPain(ped: integer, painID: integer, p1: integer, p3: integer): void;
	releaseWeapon(): void;
	activateSlowmoMode(p0: string): void;
	deactivateSlowmoMode(p0: string): void;
	setAmbientVoiceName(ped: integer, name: string): void;
	setAmbientVoiceNameHash(ped: integer, hash: integer): void;
	getAmbientVoiceNameHash(ped: integer): integer;
	setPedScream(ped: integer): void;
	setPedVoiceGroup(ped: integer, voiceGroupHash: integer): void;
	setPedGender(ped: integer, p1: boolean): void;
	stopCurrentPlayingSpeech(ped: integer): void;
	stopCurrentPlayingAmbientSpeech(ped: integer): void;
	isAmbientSpeechPlaying(ped: integer): boolean;
	isScriptedSpeechPlaying(p0: integer): boolean;
	isAnySpeechPlaying(ped: integer): boolean;
	canPedSpeak(ped: integer, speechName: string, unk: boolean): boolean;
	isPedInCurrentConversation(ped: integer): boolean;
	setPedIsDrunk(ped: integer, toggle: boolean): void;
	playAnimalVocalization(pedHandle: integer, p1: integer, speechName: string): void;
	isAnimalVocalizationPlaying(pedHandle: integer): boolean;
	setAnimalMood(animal: integer, mood: integer): void;
	isMobilePhoneRadioActive(): boolean;
	setMobilePhoneRadioState(state: boolean): void;
	getPlayerRadioStationIndex(): integer;
	getPlayerRadioStationName(): string;
	getRadioStationName(radioStation: integer): string;
	getPlayerRadioStationGenre(): integer;
	isRadioRetuning(): boolean;
	isRadioFadedOut(): boolean;
	setRadioToStationName(stationName: string): void;
	setVehRadioStation(vehicle: integer, radioStation: string): void;
	setEmitterRadioStation(emitterName: string, radioStation: string): void;
	setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;
	linkStaticEmitterToEntity(emitterName: string, entity: integer): void;
	setRadioToStationIndex(radioStation: integer): void;
	setFrontendRadioActive(active: boolean): void;
	unlockMissionNewsStory(newsStory: integer): void;
	isMissionNewsStoryUnlocked(newsStory: integer): boolean;
	getAudibleMusicTrackTextId(): integer;
	playEndCreditsMusic(play: boolean): void;
	skipRadioForward(): void;
	freezeRadioStation(radioStation: string): void;
	unfreezeRadioStation(radioStation: string): void;
	setRadioAutoUnfreeze(toggle: boolean): void;
	setInitialPlayerStation(radioStation: string): void;
	setUserRadioControlEnabled(toggle: boolean): void;
	setRadioTrack(radioStation: string, radioTrack: string): void;
	setRadioTrackMix(radioStationName: string, mixName: string, p2: integer): void;
	setVehicleRadioLoud(vehicle: integer, toggle: boolean): void;
	isVehicleRadioLoud(vehicle: integer): boolean;
	setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
	doesPlayerVehHaveRadio(): boolean;
	isPlayerVehRadioEnable(): boolean;
	setVehicleRadioEnabled(vehicle: integer, toggle: boolean): void;
	setCustomRadioTrackList(radioStation: string, trackListName: string, p2: boolean): void;
	clearCustomRadioTrackList(radioStation: string): void;
	getNumUnlockedRadioStations(): integer;
	findRadioStationIndex(station: integer): integer;
	setRadioStationMusicOnly(radioStation: string, toggle: boolean): void;
	setRadioFrontendFadeTime(fadeTime: number): void;
	unlockRadioStationTrackList(radioStation: string, trackListName: string): void;
	updateLsur(enableMixes: boolean): void;
	lockRadioStation(radioStationName: string, toggle: boolean): void;
	getCurrentRadioStationHash(radioStationName: string): integer;
	setAmbientZoneState(zoneName: string, p1: boolean, p2: boolean): void;
	clearAmbientZoneState(zoneName: string, p1: boolean): void;
	setAmbientZoneListState(p1: boolean, p2: boolean): integer;
	clearAmbientZoneListState(p1: boolean): integer;
	setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
	setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
	isAmbientZoneEnabled(ambientZone: string): boolean;
	setCutsceneOverride(name: string): void;
	setVariableOnCutscene(variableName: string, value: number): void;
	playPoliceReport(name: string, p1: number): integer;
	cancelCurrentPoliceReport(): void;
	blipSiren(vehicle: integer): void;
	overrideVehHorn(vehicle: integer, override: boolean, hornHash: integer): void;
	isHornActive(vehicle: integer): boolean;
	setAggressiveHorns(toggle: boolean): void;
	isStreamPlaying(): boolean;
	getStreamPlayTime(): integer;
	loadStream(streamName: string, soundSet: string): boolean;
	loadStreamWithStartOffset(streamName: string, startOffset: integer, soundSet: string): boolean;
	playStreamFromPed(ped: integer): void;
	playStreamFromVehicle(vehicle: integer): void;
	playStreamFromObject(object: integer): void;
	playStreamFrontend(): void;
	playStreamFromPosition(x: number, y: number, z: number): void;
	stopStream(): void;
	stopPedSpeaking(ped: integer, shaking: boolean): void;
	disablePedPain(ped: integer, toggle: boolean): void;
	isAmbientSpeechDisabled(ped: integer): boolean;
	setSirenWithNoDriver(vehicle: integer, toggle: boolean): void;
	triggerSiren(vehicle: integer): void;
	soundVehicleHornThisFrame(vehicle: integer): void;
	setHornEnabled(vehicle: integer, toggle: boolean): void;
	setVehiclePriority(vehicle: integer, p1: integer): void;
	useSirenAsHorn(vehicle: integer, toggle: boolean): void;
	forceVehicleEngine(vehicle: integer, audioName: string): void;
	preloadVehicle(vehicleModel: integer): void;
	setVehicleEngineDamageFactor(vehicle: integer, damageFactor: number): void;
	setVehicleBodyDamageFactor(vehicle: integer, p1: number): void;
	enableVehicleExhaustPops(vehicle: integer, toggle: boolean): void;
	setVehicleBoostActive(vehicle: integer, toggle: boolean): void;
	setScriptUpdateDoor(doorHash: integer, toggle: boolean): void;
	playVehicleDoorOpenSound(vehicle: integer, doorIndex: integer): void;
	playVehicleDoorCloseSound(vehicle: integer, doorIndex: integer): void;
	enableStallWarningSounds(vehicle: integer, toggle: boolean): void;
	isGameInControlOfMusic(): boolean;
	setGpsActive(active: boolean): void;
	playMissionComplete(audioName: string): void;
	isMissionCompletePlaying(): boolean;
	isMissionCompleteReadyForUi(): boolean;
	blockDeathJingle(toggle: boolean): void;
	startScene(scene: string): boolean;
	stopScene(scene: string): void;
	stopScenes(): void;
	isSceneActive(scene: string): boolean;
	setSceneVariable(scene: string, variable: string, value: number): void;
	setScriptCleanupTime(time: integer): void;
	addEntityToMixGroup(entity: integer, groupName: string, p2: number): void;
	removeEntityFromMixGroup(entity: integer, p1: number): void;
	isScriptedMusicPlaying(): boolean;
	prepareMusicEvent(eventName: string): boolean;
	cancelMusicEvent(eventName: string): boolean;
	triggerMusicEvent(eventName: string): boolean;
	isMusicOneshotPlaying(): boolean;
	getMusicPlaytime(): integer;
	recordBrokenGlass(x: number, y: number, z: number, radius: number): void;
	clearAllBrokenGlass(): void;
	prepareAlarm(alarmName: string): boolean;
	startAlarm(alarmName: string, p2: boolean): void;
	stopAlarm(alarmName: string, toggle: boolean): void;
	stopAllAlarms(stop: boolean): void;
	isAlarmPlaying(alarmName: string): boolean;
	getVehicleDefaultHorn(vehicle: integer): integer;
	getVehicleDefaultHornIgnoreMods(vehicle: integer): integer;
	resetPedFlags(ped: integer): void;
	setPedFootstepLoud(ped: integer, toggle: boolean): void;
	setPedFootstepQuiet(ped: integer, toggle: boolean): void;
	overridePlayerGroundMaterial(hash: integer, toggle: boolean): void;
	overrideMicrophoneSettings(hash: integer, toggle: boolean): void;
	freezeMicrophone(): void;
	distantCopCarSirens(value: boolean): void;
	setFlag(flagName: string, toggle: boolean): void;
	prepareSynchronizedEvent(p0: string, p1: integer): integer;
	prepareSynchronizedEventForScene(p0: integer): integer;
	playSynchronizedEvent(p0: integer): boolean;
	stopSynchronizedEvent(p0: integer): boolean;
	setSynchronizedEventPositionThisFrame(p0: string, p1: integer): void;
	setSpecialEffectMode(mode: integer): void;
	setPortalSettingsOverride(p0: string, p1: string): void;
	removePortalSettingsOverride(p0: string): void;
	setPedTalk(ped: integer): void;
	stopCutscene(): void;
	hasMultiplayerDataLoaded(): boolean;
	hasMultiplayerDataUnloaded(): boolean;
	getVehicleDefaultHornVariation(vehicle: integer): integer;
	setVehicleHornVariation(vehicle: integer, value: integer): void;

	unk: GameAudioUnk;
}

interface GameBrain extends GameBrainLegacy {
	addScriptToRandomPed(name: string, model: integer, p2: number, p3: number): void;
	registerObjectScript(scriptName: string, modelHash: integer, p2: integer, activationRange: number, p4: integer, p5: integer): void;
	isObjectWithinActivationRange(object: integer): boolean;
	registerWorldPointScript(scriptName: string, activationRange: number, p2: integer): void;
	isWorldPointWithinActivationRange(): boolean;
	enableScriptSet(brainSet: integer): void;
	disableScriptSet(brainSet: integer): void;

	unk: GameBrainUnk;
}

interface GameCam extends GameCamLegacy {
	renderScriptS(render: boolean, ease: boolean, easeTime: integer, p3: boolean, p4: boolean, p5: integer): void;
	stopRenderingScriptCamsUsingCatchUp(render: boolean, p1: number, p2: integer, p3: integer): void;
	create(camName: string, p1: boolean): integer;
	createWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: integer): integer;
	createEra(camHash: integer, p1: boolean): integer;
	createEraWithParams(camHash: integer, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: integer): integer;
	destroy(cam: integer, bScriptHostCam: boolean): void;
	destroyAllS(bScriptHostCam: boolean): void;
	doesExist(cam: integer): boolean;
	setActive(cam: integer, active: boolean): void;
	isActive(cam: integer): boolean;
	isRendering(cam: integer): boolean;
	getRendering(): integer;
	getCoord(cam: integer): Vector3Mp;
	getRot(cam: integer, rotationOrder: integer): Vector3Mp;
	getFov(cam: integer): number;
	getNearClip(cam: integer): number;
	getFarClip(cam: integer): number;
	getFarDof(cam: integer): number;
	setParams(cam: integer, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fieldOfView: number, p8: integer, p9: integer, p10: integer, p11: integer): void;
	setCoord(cam: integer, posX: number, posY: number, posZ: number): void;
	setRot(cam: integer, rotX: number, rotY: number, rotZ: number, rotationOrder: integer): void;
	setFov(cam: integer, fieldOfView: number): void;
	setNearClip(cam: integer, nearClip: number): void;
	setFarClip(cam: integer, farClip: number): void;
	setMotionBlurStrength(cam: integer, strength: number): void;
	setNearDof(cam: integer, nearDOF: number): void;
	setFarDof(cam: integer, farDOF: number): void;
	setDofStrength(cam: integer, dofStrength: number): void;
	setDofPlanes(cam: integer, p1: number, p2: number, p3: number, p4: number): void;
	setUseShallowDofMode(cam: integer, toggle: boolean): void;
	setUseHiDof(): void;
	setDofFnumberOfLens(camera: integer, p1: number): void;
	setDofFocalLengthMultiplier(camera: integer, multiplier: number): void;
	setDofFocusDistanceBias(camera: integer, p1: number): void;
	setDofMaxNearInFocusDistance(camera: integer, p1: number): void;
	setDofMaxNearInFocusDistanceBlendLevel(camera: integer, p1: number): void;
	attachToEntity(cam: integer, entity: integer, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;
	attachToPedBone(cam: integer, ped: integer, boneIndex: integer, x: number, y: number, z: number, heading: boolean): void;
	attachToPedBone2(cam: integer, ped: integer, boneIndex: integer, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): void;
	attachToVehicleBone(cam: integer, vehicle: integer, boneIndex: integer, relativeRotation: boolean, rotX: number, rotY: number, rotZ: number, offsetX: number, offsetY: number, offsetZ: number, fixedDirection: boolean): void;
	detach(cam: integer): void;
	setInheritRollVehicle(cam: integer, p1: boolean): void;
	pointAtCoord(cam: integer, x: number, y: number, z: number): void;
	pointAtEntity(cam: integer, entity: integer, p2: number, p3: number, p4: number, p5: boolean): void;
	pointAtPedBone(cam: integer, ped: integer, boneIndex: integer, x: number, y: number, z: number, p6: boolean): void;
	stopPointing(cam: integer): void;
	setAffectsAiming(cam: integer, toggle: boolean): void;
	setDebugName(camera: integer, name: string): void;
	addSplineNode(camera: integer, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: integer, p8: integer, p9: integer): void;
	addSplineNodeUsingCameraFrame(cam: integer, cam2: integer, p2: integer, p3: integer): void;
	addSplineNodeUsingCamera(cam: integer, cam2: integer, p2: integer, p3: integer): void;
	addSplineNodeUsingGameplayFrame(cam: integer, p1: integer, p2: integer): void;
	setSplinePhase(cam: integer, p1: number): void;
	getSplinePhase(cam: integer): number;
	getSplineNodePhase(cam: integer): number;
	setSplineDuration(cam: integer, timeDuration: integer): void;
	setSplineSmoothingStyle(cam: integer, smoothingStyle: integer): void;
	getSplineNodeIndex(cam: integer): integer;
	setSplineNodeEase(cam: integer, p1: integer, p2: integer, p3: number): void;
	setSplineNodeVelocityScale(cam: integer, p1: integer, scale: number): void;
	overrideSplineVelocity(cam: integer, p1: integer, p2: number, p3: number): void;
	overrideSplineMotionBlur(cam: integer, p1: integer, p2: number, p3: number): void;
	setSplineNodeExtraFlags(cam: integer, p1: integer, flags: integer): void;
	isSplinePaused(p0: integer): boolean;
	setActiveWithInterp(camTo: integer, camFrom: integer, duration: integer, easeLocation: integer, easeRotation: integer): void;
	isInterpolating(cam: integer): boolean;
	shake(cam: integer, type: string, amplitude: number): void;
	animatedShake(cam: integer, p1: string, p2: string, p3: string, amplitude: number): void;
	isShaking(cam: integer): boolean;
	setShakeAmplitude(cam: integer, amplitude: number): void;
	stopShaking(cam: integer, p1: boolean): void;
	shakeScriptGlobal(p0: string, p1: number): void;
	animatedShakeScriptGlobal(p0: string, p1: string, p2: string, p3: number): void;
	isScriptGlobalShaking(): boolean;
	stopScriptGlobalShaking(p0: boolean): void;
	playAnim(cam: integer, animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: boolean, p10: integer): boolean;
	isPlayingAnim(cam: integer, animName: string, animDictionary: string): boolean;
	setAnimCurrentPhase(cam: integer, phase: number): void;
	getAnimCurrentPhase(cam: integer): number;
	playSynchronizedAnim(p0: integer, p1: integer, animName: string, animDictionary: string): boolean;
	setFlyHorizontalResponse(cam: integer, p1: number, p2: number, p3: number): void;
	setFlyVerticalSpeedMultiplier(cam: integer, p1: number, p2: number, p3: number): void;
	setFlyMaxHeight(cam: integer, height: number): void;
	setFlyCoordAndConstrain(cam: integer, x: number, y: number, z: number): void;
	isScreenFadedOut(): boolean;
	isScreenFadedIn(): boolean;
	isScreenFadingOut(): boolean;
	isScreenFadingIn(): boolean;
	doScreenFadeIn(duration: integer): void;
	doScreenFadeOut(duration: integer): void;
	setWidescreenBorders(p0: boolean, p1: integer): void;
	getGameplayCoord(): Vector3Mp;
	getGameplayRot(rotationOrder: integer): Vector3Mp;
	getGameplayFov(): number;
	getGameplayRelativeHeading(): number;
	setGameplayRelativeHeading(heading: number): void;
	getGameplayRelativePitch(): number;
	setGameplayRelativePitch(angle: number, scalingFactor: number): void;
	setGameplayRelativeRotation(roll: number, pitch: number, yaw: number): void;
	setGameplayRawYaw(yaw: number): void;
	setGameplayRawPitch(pitch: number): void;
	shakeGameplay(shakeName: string, intensity: number): void;
	isGameplayShaking(): boolean;
	setGameplayShakeAmplitude(amplitude: number): void;
	stopGameplayShaking(p0: boolean): void;
	setGameplayFollowPedThisUpdate(ped: integer): void;
	isGameplayRendering(): boolean;
	enableCrosshairThisFrame(): void;
	isGameplayLookingBehind(): boolean;
	disableCollisionForEntity(entity: integer): void;
	disableCollisionForObject(entity: integer): void;
	isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
	isFollowPedActive(): boolean;
	setFollowPedThisUpdate(camName: string, p1: integer): boolean;
	clampGameplayYaw(minimum: number, maximum: number): void;
	clampGameplayPitch(minimum: number, maximum: number): void;
	animateGameplayZoom(p0: number, distance: number): void;
	setInVehicleStateThisUpdate(p0: integer, p1: integer): void;
	disableFirstPersonThisFrame(): void;
	getFollowPedZoomLevel(): integer;
	getFollowPedViewMode(): integer;
	setFollowPedViewMode(viewMode: integer): void;
	isFollowVehicleActive(): boolean;
	getFollowVehicleZoomLevel(): integer;
	setFollowVehicleZoomLevel(zoomLevel: integer): void;
	getFollowVehicleViewMode(): integer;
	setFollowVehicleViewMode(viewMode: integer): void;
	useStuntEraThisFrame(): void;
	setGameplayHash(camName: string): void;
	setFollowTurretSeat(seatIndex: integer): void;
	isAimActive(): boolean;
	isAimThirdPersonActive(): boolean;
	isFirstPersonAimActive(): boolean;
	disableAimThisUpdate(): void;
	getFirstPersonAimZoomFactor(): number;
	setFirstPersonAimZoomFactor(zoomFactor: number): void;
	setFirstPersonPitchRange(p0: number, p1: number): void;
	setFirstPersonAimNearClipThisUpdate(p0: number): void;
	setThirdPersonAimNearClipThisUpdate(p0: number): void;
	getFinalRenderedCoord(): Vector3Mp;
	getFinalRenderedRot(rotationOrder: integer): Vector3Mp;
	getFinalRenderedInWhenFriendlyRot(player: integer, rotationOrder: integer): Vector3Mp;
	getFinalRenderedFov(): number;
	getFinalRenderedInWhenFriendlyFov(player: integer): number;
	getFinalRenderedNearClip(): number;
	getFinalRenderedFarClip(): number;
	getFinalRenderedNearDof(): number;
	getFinalRenderedFarDof(): number;
	getFinalRenderedMotionBlurStrength(): number;
	setGameplayCoordHint(x: number, y: number, z: number, duration: integer, blendOutDuration: integer, blendInDuration: integer, unk: integer): void;
	setGameplayPedHint(p0: integer, x1: number, y1: number, z1: number, p4: boolean, p5: integer, p6: integer, p7: integer): void;
	setGameplayVehicleHint(vehicle: integer, offsetX: number, offsetY: number, offsetZ: number, p4: boolean, time: integer, easeInTime: integer, easeOutTime: integer): void;
	setGameplayObjectHint(p0: integer, p1: number, p2: number, p3: number, p4: boolean, p5: integer, p6: integer, p7: integer): void;
	setGameplayEntityHint(entity: integer, xOffset: number, yOffset: number, zOffset: number, p4: boolean, p5: integer, p6: integer, p7: integer, p8: integer): void;
	isGameplayHintActive(): boolean;
	stopGameplayHint(p0: boolean): void;
	setGameplayHintFov(FOV: number): void;
	setGameplayHintFollowDistanceScalar(value: number): void;
	setGameplayHintBaseOrbitPitchOffset(value: number): void;
	setGameplayHintAnimOffsetx(xOffset: number): void;
	setGameplayHintAnimOffsety(yOffset: number): void;
	setGameplayHintAnimCloseup(toggle: boolean): void;
	setCinematicButtonActive(p0: boolean): void;
	isCinematicRendering(): boolean;
	shakeCinematic(p0: string, p1: number): void;
	isCinematicShaking(): boolean;
	setCinematicShakeAmplitude(p0: number): void;
	stopCinematicShaking(p0: boolean): void;
	disableVehicleFirstPersonThisFrame(): void;
	invalidateVehicleIdle(): void;
	invalidateIdle(): void;
	isCinematicIdleRendering(): boolean;
	isInVehicleDisabled(): boolean;
	createCinematicShot(p0: integer, p1: integer, p2: integer, entity: integer): void;
	isCinematicShotActive(p0: integer): boolean;
	stopCinematicShot(p0: integer): void;
	forceCinematicRenderingThisUpdate(p0: boolean): void;
	setCinematicModeActive(toggle: boolean): void;
	isCinematicActive(): boolean;
	stopCutsceneShaking(): void;
	getFocusPedOnScreen(p0: number, p1: integer, p2: number, p3: number, p4: number, p5: number, p6: number, p7: integer, p8: integer): integer;
	setEffect(p0: integer): void;
	setGameplayVehicleCamera(vehicleName: string): void;
	setGameplayVehicleCameraName(vehicleModel: integer): void;
	replayFreeGetMaxRange(): number;

	unk: GameCamUnk;
}

interface GameClock extends GameClockLegacy {
	setTime(hour: integer, minute: integer, second: integer): void;
	pause(toggle: boolean): void;
	advanceTimeTo(hour: integer, minute: integer, second: integer): void;
	addToTime(hours: integer, minutes: integer, seconds: integer): void;
	getHours(): integer;
	getMinutes(): integer;
	getSeconds(): integer;
	setDate(day: integer, month: integer, year: integer): void;
	getDayOfWeek(): integer;
	getDayOfMonth(): integer;
	getMonth(): integer;
	getYear(): integer;
	getMillisecondsPerGameMinute(): integer;
	getPosixTime(): GetPosixTimeResult;
	getUtcTime(): GetUtcTimeResult;
	getLocalTime(): GetLocalTimeResult;
}

interface GameCutscene extends GameCutsceneLegacy {
	request(cutsceneName: string, flags: integer): void;
	requestWithPlaybackList(cutsceneName: string, playbackFlags: integer, flags: integer): void;
	remove(): void;
	hasLoaded(): boolean;
	hasThisLoaded(cutsceneName: string): boolean;
	canRequestAssetsForEntity(): boolean;
	isPlaybackFlagSet(flag: integer): boolean;
	setEntityStreamingFlags(cutsceneEntName: string, p1: integer, p2: integer): void;
	requestCutFile(cutsceneName: string): void;
	hasCutFileLoaded(cutsceneName: string): boolean;
	removeCutFile(cutsceneName: string): void;
	getCutFileNumSections(cutsceneName: string): integer;
	start(flags: integer): void;
	startAtCoords(x: number, y: number, z: number, flags: integer): void;
	stop(p0: boolean): void;
	stopImmediately(): void;
	setOrigin(x: number, y: number, z: number, p3: number, p4: integer): void;
	getTime(): integer;
	getTotalDuration(): integer;
	wasSkipped(): boolean;
	hasFinished(): boolean;
	isActive(): boolean;
	isPlaying(): boolean;
	getSectionPlaying(): integer;
	getEntityIndexOfEntity(cutsceneEntName: string, modelHash: integer): integer;
	registerEntityFor(cutscenePed: integer, cutsceneEntName: string, p2: integer, modelHash: integer, p4: integer): void;
	getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: integer): integer;
	setTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: integer): boolean;
	canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: integer): boolean;
	canSetExitStateForCamera(p0: boolean): boolean;
	setFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
	setCanBeSkipped(p0: boolean): void;
	registerSynchronisedScriptSpeech(): void;
	setPedComponentVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;
	setPedComponentVariationFromPed(cutsceneEntName: string, ped: integer, modelHash: integer): void;
	doesEntityExist(cutsceneEntName: string, modelHash: integer): boolean;
	setPedPropVariation(cutsceneEntName: string, p1: integer, p2: integer, p3: integer, modelHash: integer): void;
	hasCutThisFrame(): boolean;

	unk: GameCutsceneUnk;
}

interface GameDatafile extends GameDatafileLegacy {
	watchRequestId(id: integer): void;
	clearWatchList(): void;
	isValidRequestId(index: integer): boolean;
	hasLoadedFileData(p0: integer): boolean;
	hasValidFileData(p0: integer): boolean;
	selectActiveFile(p0: integer): boolean;
	deleteRequestedFile(p0: integer): boolean;
	ugcCreateContent(dataCount: integer, contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): integer;
	ugcCreateMission(contentName: string, description: string, tagsCsv: string, contentTypeName: string, publish: boolean): boolean;
	ugcUpdateContent(contentId: string, dataCount: integer, contentName: string, description: string, tagsCsv: string, contentTypeName: string): integer;
	ugcUpdateMission(contentId: string, contentName: string, description: string, tagsCsv: string, contentTypeName: string): boolean;
	ugcSetPlayerData(contentId: string, rating: number, contentTypeName: string): boolean;
	selectUgcData(p0: integer): boolean;
	selectUgcStats(p0: integer, p1: boolean): boolean;
	selectUgcPlayerData(p0: integer): boolean;
	selectCreatorStats(p0: integer): boolean;
	loadOfflineUgc(filename: string): boolean;
	create(): void;
	delete(): void;
	storeMissionHeader(): void;
	flushMissionHeader(): void;
	getFileDict(): string;
	startSaveToCloud(filename: string): boolean;
	updateSaveToCloud(): boolean;
	isSavePending(): boolean;
	datadictSetBool(key: string, value: boolean): integer;
	datadictSetInt(key: string, value: integer): integer;
	datadictSetFloat(key: string, value: number): integer;
	datadictSetString(key: string, value: string): integer;
	datadictSetVector(key: string, valueX: number, valueY: number, valueZ: number): integer;
	datadictCreateDict(key: string): DatadictCreateDictResult;
	datadictCreateArray(key: string): DatadictCreateArrayResult;
	datadictGetBool(key: string): integer;
	datadictGetInt(key: string): DatadictGetIntResult;
	datadictGetFloat(key: string): DatadictGetFloatResult;
	datadictGetString(key: string): DatadictGetStringResult;
	datadictGetVector(key: string): DatadictGetVectorResult;
	datadictGetDict(key: string): DatadictGetDictResult;
	datadictGetArray(key: string): DatadictGetArrayResult;
	datadictGetType(key: string): DatadictGetTypeResult;
	dataarrayAddBool(value: boolean): integer;
	dataarrayAddInt(value: integer): integer;
	dataarrayAddFloat(value: number): integer;
	dataarrayAddString(value: string): integer;
	dataarrayAddVector(valueX: number, valueY: number, valueZ: number): integer;
	dataarrayAddDict(): DataarrayAddDictResult;
	dataarrayGetBool(arrayIndex: integer): integer;
	dataarrayGetInt(arrayIndex: integer): DataarrayGetIntResult;
	dataarrayGetFloat(arrayIndex: integer): DataarrayGetFloatResult;
	dataarrayGetString(arrayIndex: integer): DataarrayGetStringResult;
	dataarrayGetVector(arrayIndex: integer): DataarrayGetVectorResult;
	dataarrayGetDict(arrayIndex: integer): DataarrayGetDictResult;
	dataarrayGetCount(): DataarrayGetCountResult;
	dataarrayGetType(arrayIndex: integer): DataarrayGetTypeResult;

	unk: GameDatafileUnk;
}

interface GameDecorator extends GameDecoratorLegacy {
	decorSetTime(entity: integer, propertyName: string, timestamp: integer): boolean;
	decorSetBool(entity: integer, propertyName: string, value: boolean): boolean;
	decorSetFloat(entity: integer, propertyName: string, value: number): boolean;
	decorSetInt(entity: integer, propertyName: string, value: integer): boolean;
	decorGetBool(entity: integer, propertyName: string): boolean;
	decorGetFloat(entity: integer, propertyName: string): number;
	decorGetInt(entity: integer, propertyName: string): integer;
	decorExistOn(entity: integer, propertyName: string): boolean;
	decorRemove(entity: integer, propertyName: string): boolean;
	decorRegister(propertyName: string, type: integer): void;
	decorIsRegisteredAsType(propertyName: string, type: integer): boolean;
	decorRegisterLock(): void;
}

interface GameDlc extends GameDlcLegacy {
	isPresent(dlcHash: integer): boolean;
	getExtraContentPackHasBeenInstalled(): boolean;
	getIsLoadingScreenActive(): boolean;
	hasCloudRequestsFinished(unused: integer): boolean;
	onEnterSp(): void;
	onEnterMp(): void;

	unk: GameDlcUnk;
}

interface GameEntity extends GameEntityLegacy {
	doesExist(entity: integer): boolean;
	doesBelongToThisScript(entity: integer, p1: boolean): boolean;
	doesHaveDrawable(entity: integer): boolean;
	doesHavePhysics(entity: integer): boolean;
	hasAnimFinished(entity: integer, animDict: string, animName: string, p3: integer): boolean;
	hasBeenDamagedByAnyObject(entity: integer): boolean;
	hasBeenDamagedByAnyPed(entity: integer): boolean;
	hasBeenDamagedByAnyVehicle(entity: integer): boolean;
	hasBeenDamagedByEntity(entity1: integer, entity2: integer, p2: boolean): boolean;
	hasClearLosToEntity(entity1: integer, entity2: integer, traceType: integer): boolean;
	hasClearLosToEntity2(entity1: integer, entity2: integer, traceType: integer): integer;
	hasClearLosToEntityInFront(entity1: integer, entity2: integer): boolean;
	hasCollidedWithAnything(entity: integer): boolean;
	getLastMaterialHitBy(entity: integer): integer;
	getCollisionNormalOfLastHitFor(entity: integer): Vector3Mp;
	forceAiAndAnimationUpdate(entity: integer): void;
	getAnimCurrentTime(entity: integer, animDict: string, animName: string): number;
	getAnimTotalTime(entity: integer, animDict: string, animName: string): number;
	getAnimDuration(animDict: string, animName: string): number;
	getAttachedTo(entity: integer): integer;
	getCoords(entity: integer, alive: boolean): Vector3Mp;
	getForwardVector(entity: integer): Vector3Mp;
	getForwardX(entity: integer): number;
	getForwardY(entity: integer): number;
	getHeading(entity: integer): number;
	getPhysicsHeading(entity: integer): number;
	getHealth(entity: integer): integer;
	getMaxHealth(entity: integer): integer;
	setMaxHealth(entity: integer, value: integer): void;
	getHeight(entity: integer, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;
	getHeightAboveGround(entity: integer): number;
	getMatrix(entity: integer): GetEntityMatrixResult;
	getModel(entity: integer): integer;
	getOffsetFromGivenWorldCoords(entity: integer, posX: number, posY: number, posZ: number): Vector3Mp;
	getOffsetFromInWorldCoords(entity: integer, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;
	getPitch(entity: integer): number;
	getQuaternion(entity: integer): GetEntityQuaternionResult;
	getRoll(entity: integer): number;
	getRotation(entity: integer, rotationOrder: integer): Vector3Mp;
	getRotationVelocity(entity: integer): Vector3Mp;
	getScript(entity: integer): GetEntityScriptResult;
	getSpeed(entity: integer): number;
	getSpeedVector(entity: integer, relative: boolean): Vector3Mp;
	getUprightValue(entity: integer): number;
	getVelocity(entity: integer): Vector3Mp;
	getObjectIndexFromIndex(entity: integer): integer;
	getPedIndexFromIndex(entity: integer): integer;
	getVehicleIndexFromIndex(entity: integer): integer;
	getWorldPositionOfBone(entity: integer, boneIndex: integer): Vector3Mp;
	getNearestPlayerTo(entity: integer): integer;
	getNearestPlayerToOnTeam(entity: integer, team: integer): integer;
	getType(entity: integer): integer;
	getPopulationType(entity: integer): integer;
	isAn(handle: integer): boolean;
	isAPed(entity: integer): boolean;
	isAMissionEntity(entity: integer): boolean;
	isAVehicle(entity: integer): boolean;
	isAnObject(entity: integer): boolean;
	isAtCoord(entity: integer, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: boolean, p8: boolean, p9: integer): boolean;
	isAtEntity(entity1: integer, entity2: integer, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: integer): boolean;
	isAttached(entity: integer): boolean;
	isAttachedToAnyObject(entity: integer): boolean;
	isAttachedToAnyPed(entity: integer): boolean;
	isAttachedToAnyVehicle(entity: integer): boolean;
	isAttachedToEntity(from: integer, to: integer): boolean;
	isDead(entity: integer, p1: boolean): boolean;
	isInAir(entity: integer): boolean;
	isInAngledArea(entity: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, debug: boolean, includeZ: boolean, p10: integer): boolean;
	isInArea(entity: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean, p9: integer): boolean;
	isInZone(entity: integer, zone: string): boolean;
	isInWater(entity: integer): boolean;
	getSubmergedLevel(entity: integer): number;
	isOnScreen(entity: integer): boolean;
	isPlayingAnim(entity: integer, animDict: string, animName: string, taskFlag: integer): boolean;
	isStatic(entity: integer): boolean;
	isTouchingEntity(entity: integer, targetEntity: integer): boolean;
	isTouchingModel(entity: integer, modelHash: integer): boolean;
	isUpright(entity: integer, angle: number): boolean;
	isUpsidedown(entity: integer): boolean;
	isVisible(entity: integer): boolean;
	isVisibleToScript(entity: integer): boolean;
	isOccluded(entity: integer): boolean;
	wouldBeOccluded(entityModelHash: integer, x: number, y: number, z: number, p4: boolean): boolean;
	isWaitingForWorldCollision(entity: integer): boolean;
	applyForceToCenterOfMass(entity: integer, forceType: integer, x: number, y: number, z: number, p5: boolean, isDirectionRel: boolean, isForceRel: boolean, p8: boolean): void;
	applyForceTo(entity: integer, forceFlags: integer, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: integer, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean, p12: boolean, p13: boolean): void;
	attachToEntity(entity1: integer, entity2: integer, boneIndex: integer, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: integer, fixedRot: boolean): void;
	attachBoneToEntityBone(entity1: integer, entity2: integer, boneIndex1: integer, boneIndex2: integer, p4: boolean, p5: boolean): void;
	attachBoneToEntityBonePhysically(entity1: integer, entity2: integer, boneIndex1: integer, boneIndex2: integer, p4: boolean, p5: boolean): void;
	attachToEntityPhysically(entity1: integer, entity2: integer, boneIndex1: integer, boneIndex2: integer, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: boolean, p15: boolean, collision: boolean, p17: boolean, p18: integer): void;
	processAttachments(entity: integer): void;
	getBoneIndexByName(entity: integer, boneName: string): integer;
	clearLastDamageEntity(entity: integer): void;
	delete(entity: integer): integer;
	detach(entity: integer, dynamic: boolean, collision: boolean): void;
	freezePosition(entity: integer, toggle: boolean): void;
	setCleanupByEngine(entity: integer, toggle: boolean): void;
	playAnim(entity: integer, animName: string, animDict: string, p3: number, loop: boolean, stayInAnim: boolean, p6: boolean, delta: number, bitset: integer): boolean;
	playSynchronizedAnim(entity: integer, syncedScene: integer, animation: string, propName: string, p4: number, p5: number, p6: integer, p7: number): boolean;
	playSynchronizedMapAnim(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p8: number, p9: number, p10: integer, p11: number): PlaySynchronizedMapEntityAnimResult;
	stopSynchronizedMapAnim(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: number): boolean;
	stopAnim(entity: integer, animation: string, animGroup: string, p3: number): integer;
	stopSynchronizedAnim(entity: integer, p1: number, p2: boolean): boolean;
	hasAnimEventFired(entity: integer, actionHash: integer): boolean;
	findAnimEventPhase(animDictionary: string, animName: string, p2: string): FindAnimEventPhaseResult;
	setAnimCurrentTime(entity: integer, animDictionary: string, animName: string, time: number): void;
	setAnimSpeed(entity: integer, animDictionary: string, animName: string, speedMultiplier: number): void;
	setAsMissionEntity(entity: integer, p1: boolean, p2: boolean): void;
	setAsNoLongerNeeded(entity: integer): integer;
	setPedAsNoLongerNeeded(ped: integer): integer;
	setVehicleAsNoLongerNeeded(vehicle: integer): integer;
	setObjectAsNoLongerNeeded(object: integer): integer;
	setCanBeDamaged(entity: integer, toggle: boolean): void;
	getCanBeDamaged(entity: integer): boolean;
	setCanBeDamagedByRelationshipGroup(entity: integer, bCanBeDamaged: boolean, relGroup: integer): void;
	setCanBeTargetedWithoutLos(entity: integer, toggle: boolean): void;
	setCollision(entity: integer, toggle: boolean, keepPhysics: boolean): void;
	getCollisionDisabled(entity: integer): boolean;
	setCompletelyDisableCollision(entity: integer, toggle: boolean, keepPhysics: boolean): void;
	setCoords(entity: integer, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;
	setCoordsWithoutPlantsReset(entity: integer, xPos: number, yPos: number, zPos: number, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void;
	setCoordsNoOffset(entity: integer, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;
	setDynamic(entity: integer, toggle: boolean): void;
	setHeading(entity: integer, heading: number): void;
	setHealth(entity: integer, health: integer, p2: integer): void;
	setInvincible(entity: integer, toggle: boolean): void;
	setIsTargetPriority(entity: integer, p1: boolean, p2: number): void;
	setLights(entity: integer, toggle: boolean): void;
	setLoadCollisionFlag(entity: integer, toggle: boolean, p2: integer): void;
	hasCollisionLoadedAround(entity: integer): boolean;
	setMaxSpeed(entity: integer, speed: number): void;
	setOnlyDamagedByPlayer(entity: integer, toggle: boolean): void;
	setOnlyDamagedByRelationshipGroup(entity: integer, p1: boolean, p2: integer): void;
	setProofs(entity: integer, bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, p6: boolean, p7: boolean, drownProof: boolean): void;
	getProofs(entity: integer): GetEntityProofsResult;
	setQuaternion(entity: integer, x: number, y: number, z: number, w: number): void;
	setRecordsCollisions(entity: integer, toggle: boolean): void;
	setRotation(entity: integer, pitch: number, roll: number, yaw: number, rotationOrder: integer, p5: boolean): void;
	setVisible(entity: integer, toggle: boolean, unk: boolean): void;
	setVelocity(entity: integer, x: number, y: number, z: number): void;
	setHasGravity(entity: integer, toggle: boolean): void;
	setLodDist(entity: integer, value: integer): void;
	getLodDist(entity: integer): integer;
	setAlpha(entity: integer, alphaLevel: integer, skin: boolean): void;
	getAlpha(entity: integer): integer;
	resetAlpha(entity: integer): void;
	setAlwaysPrerender(entity: integer, toggle: boolean): void;
	setRenderScorched(entity: integer, toggle: boolean): void;
	setTrafficlightOverride(entity: integer, state: integer): void;
	createModelSwap(x: number, y: number, z: number, radius: number, originalModel: integer, newModel: integer, p6: boolean): void;
	removeModelSwap(x: number, y: number, z: number, radius: number, originalModel: integer, newModel: integer, p6: boolean): void;
	createModelHide(x: number, y: number, z: number, radius: number, modelHash: integer, p5: boolean): void;
	createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, modelHash: integer, p5: boolean): void;
	removeModelHide(x: number, y: number, z: number, radius: number, modelHash: integer, p5: boolean): void;
	createForcedObject(x: number, y: number, z: number, p3: integer, modelHash: integer, p5: boolean): void;
	removeForcedObject(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	setNoCollisionEntity(entity1: integer, entity2: integer, thisFrameOnly: boolean): void;
	setMotionBlur(entity: integer, toggle: boolean): void;
	setCanAutoVaultOn(entity: integer, toggle: boolean): void;
	setCanClimbOn(entity: integer, toggle: boolean): void;
	setDecalsDisabled(entity: integer, p1: boolean): void;
	getBoneRotation(entity: integer, boneIndex: integer): Vector3Mp;
	getBonePosition2(entity: integer, boneIndex: integer): Vector3Mp;
	getBoneRotationLocal(entity: integer, boneIndex: integer): Vector3Mp;
	getBoneCount(entity: integer): integer;
	enableUnk(entity: integer): void;
	getPickup(entity: integer, modelHash: integer): integer;

	unk: GameEntityUnk;
}

interface GameEvent extends GameEventLegacy {
	setDecisionMaker(ped: integer, name: integer): void;
	clearDecisionMakerResponse(name: integer, eventType: integer): void;
	blockDecisionMaker(name: integer, eventType: integer): void;
	unblockDecisionMaker(name: integer, eventType: integer): void;
	addShockingAtPosition(eventType: integer, x: number, y: number, z: number, duration: number): integer;
	addShockingForEntity(eventType: integer, entity: integer, duration: number): integer;
	isShockingInSphere(eventType: integer, x: number, y: number, z: number, radius: number): boolean;
	removeShocking(event: integer): boolean;
	removeAllShockingS(p0: boolean): void;
	removeShockingSpawnBlockingAreas(): void;
	suppressShockingEventsNextFrame(): void;
	suppressShockingTypeNextFrame(eventType: integer): void;
	suppressAgitationEventsNextFrame(): void;
}

interface GameFiles extends GameFilesLegacy {
	getNumTattooShopDlcItems(character: integer): integer;
	getTattooShopDlcItemData(characterType: integer, decorationIndex: integer): integer;
	initShopPedComponent(): integer;
	initShopPedProp(): integer;
	setupShopPedApparelQuery(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	setupShopPedApparelQueryTu(character: integer, p1: integer, p2: integer, p3: boolean, p4: integer, componentId: integer): integer;
	getShopPedQueryComponent(componentId: integer): integer;
	getShopPedComponent(componentHash: integer): integer;
	getShopPedQueryProp(componentId: integer): integer;
	getShopPedProp(componentHash: integer): integer;
	getHashNameForComponent(entity: integer, componentId: integer, drawableVariant: integer, textureVariant: integer): integer;
	getHashNameForProp(entity: integer, componentId: integer, propIndex: integer, propTextureIndex: integer): integer;
	getShopPedApparelVariantComponentCount(componentHash: integer): integer;
	getShopPedApparelVariantPropCount(propHash: integer): integer;
	getVariantComponent(componentHash: integer, variantComponentIndex: integer): GetVariantComponentResult;
	getVariantProp(componentHash: integer, variantPropIndex: integer): GetVariantPropResult;
	getShopPedApparelForcedComponentCount(componentHash: integer): integer;
	getShopPedApparelForcedPropCount(componentHash: integer): integer;
	getForcedComponent(componentHash: integer, forcedComponentIndex: integer): GetForcedComponentResult;
	getForcedProp(componentHash: integer, forcedPropIndex: integer): GetForcedPropResult;
	doesShopPedApparelHaveRestrictionTag(componentHash: integer, restrictionTagHash: integer, componentId: integer): boolean;
	setupShopPedOutfitQuery(character: integer, p1: boolean): integer;
	getShopPedQueryOutfit(outfitIndex: integer): integer;
	getShopPedOutfit(p0: integer): integer;
	getShopPedOutfitLocate(p0: integer): integer;
	getShopPedOutfitPropVariant(outfitHash: integer, variantIndex: integer): integer;
	getShopPedOutfitComponentVariant(outfitHash: integer, variantIndex: integer): integer;
	getNumDlcVehicles(): integer;
	getDlcVehicleModel(dlcVehicleIndex: integer): integer;
	getDlcVehicleData(dlcVehicleIndex: integer): integer;
	getDlcVehicleFlags(dlcVehicleIndex: integer): integer;
	getNumDlcWeapons(): integer;
	getNumDlcWeaponsSp(): integer;
	getDlcWeaponData(dlcWeaponIndex: integer): integer;
	getDlcWeaponDataSp(dlcWeaponIndex: integer): integer;
	getNumDlcWeaponComponents(dlcWeaponIndex: integer): integer;
	getNumDlcWeaponComponentsSp(dlcWeaponIndex: integer): integer;
	getDlcWeaponComponentData(dlcWeaponIndex: integer, dlcWeapCompIndex: integer): integer;
	getDlcWeaponComponentDataSp(dlcWeaponIndex: integer, dlcWeapCompIndex: integer): integer;
	isContentItemLocked(itemHash: integer): boolean;
	isDlcVehicleMod(hash: integer): boolean;
	getDlcVehicleModLockHash(hash: integer): integer;
	loadContentChangeSetGroup(hash: integer): void;
	unloadContentChangeSetGroup(hash: integer): void;

	unk: GameFilesUnk;
}

interface GameFire extends GameFireLegacy {
	startScript(X: number, Y: number, Z: number, maxChildren: integer, isGasFire: boolean): integer;
	removeScript(fireHandle: integer): void;
	startEntity(entity: integer): integer;
	stopEntity(entity: integer): void;
	isEntityOn(entity: integer): boolean;
	getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): integer;
	setSpreadRate(p0: number): void;
	stopInRange(x: number, y: number, z: number, radius: number): void;
	getClosestPos(x: number, y: number, z: number): Vector3Mp;
	addExplosion(x: number, y: number, z: number, explosionType: integer, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number, noDamage: boolean): void;
	addOwnedExplosion(ped: integer, x: number, y: number, z: number, explosionType: integer, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
	addExplosionWithUserVfx(x: number, y: number, z: number, explosionType: integer, explosionFx: integer, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
	isExplosionInArea(explosionType: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isExplosionActiveInArea(explosionType: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isExplosionInSphere(explosionType: integer, x: number, y: number, z: number, radius: number): boolean;
	getEntityInsideExplosionSphere(explosionType: integer, x: number, y: number, z: number, radius: number): integer;
	isExplosionInAngledArea(explosionType: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): boolean;
	getEntityInsideExplosionArea(explosionType: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): integer;
}

interface GameGraphics extends GameGraphicsLegacy {
	setDebugLinesAndSpheresDrawingActive(enabled: boolean): void;
	drawDebugLine(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	drawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: integer, g1: integer, b1: integer, r2: integer, g2: integer, b2: integer, alpha1: integer, alpha2: integer): void;
	drawDebugSphere(x: number, y: number, z: number, radius: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawDebugBox(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	drawDebugCross(x: number, y: number, z: number, size: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawDebugText(text: string, x: number, y: number, z: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawDebugText2D(text: string, x: number, y: number, z: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawSpritePoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: integer, green: integer, blue: integer, alpha: integer, textureDict: string, textureName: string, u1: number, v1: number, w1: number, u2: number, v2: number, w2: number, u3: number, v3: number, w3: number): void;
	drawSpritePoly2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red1: number, green1: number, blue1: number, alpha1: integer, red2: number, green2: number, blue2: number, alpha2: integer, red3: number, green3: number, blue3: number, alpha3: integer, textureDict: string, textureName: string, u1: number, v1: number, w1: number, u2: number, v2: number, w2: number, u3: number, v3: number, w3: number): void;
	drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	setBackfaceculling(toggle: boolean): void;
	beginTakeMissionCreatorPhoto(): integer;
	getStatusOfTakeMissionCreatorPhoto(): integer;
	freeMemoryForMissionCreatorPhoto(): void;
	loadMissionCreatorPhoto(p1: integer, p2: integer, p3: integer): integer;
	getStatusOfLoadMissionCreatorPhoto(): GetStatusOfLoadMissionCreatorPhotoResult;
	beginTakeHighQualityPhoto(): boolean;
	getStatusOfTakeHighQualityPhoto(): integer;
	freeMemoryForHighQualityPhoto(): void;
	saveHighQualityPhoto(unused: integer): boolean;
	getStatusOfSaveHighQualityPhoto(): integer;
	freeMemoryForLowQualityPhoto(): void;
	drawLowQualityPhotoToPhone(p0: boolean, p1: boolean): void;
	getMaximumNumberOfPhotos(): integer;
	getMaximumNumberOfCloudPhotos(): integer;
	getCurrentNumberOfCloudPhotos(): integer;
	getStatusOfSortedListOperation(p0: integer): integer;
	returnTwo(p0: integer): integer;
	drawLightWithRangeAndShadow(x: number, y: number, z: number, r: integer, g: integer, b: integer, range: number, intensity: number, shadow: number): void;
	drawLightWithRange(posX: number, posY: number, posZ: number, colorR: integer, colorG: integer, colorB: integer, range: number, intensity: number): void;
	drawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: integer, colorG: integer, colorB: integer, distance: number, brightness: number, hardness: number, radius: number, falloff: number): void;
	drawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: integer, colorG: integer, colorB: integer, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadowId: integer): void;
	fadeUpPedLight(p0: number): void;
	updateLightsOnEntity(entity: integer): void;
	drawMarker(type: integer, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: integer, green: integer, blue: integer, alpha: integer, bobUpAndDown: boolean, faceCamera: boolean, p19: integer, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean): void;
	drawMarker2(type: integer, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: integer, green: integer, blue: integer, alpha: integer, bobUpAndDown: boolean, faceCamera: boolean, p19: integer, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean, p24: boolean, p25: boolean): void;
	drawSphere(x: number, y: number, z: number, radius: number, red: integer, green: integer, blue: integer, alpha: number): void;
	createCheckpoint(type: integer, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, diameter: number, red: integer, green: integer, blue: integer, alpha: integer, reserved: integer): integer;
	setCheckpointScale(checkpoint: integer, p0: number): void;
	setCheckpointIconScale(checkpoint: integer, scale: number): void;
	setCheckpointCylinderHeight(checkpoint: integer, nearHeight: number, farHeight: number, radius: number): void;
	setCheckpointRgba(checkpoint: integer, red: integer, green: integer, blue: integer, alpha: integer): void;
	setCheckpointRgba2(checkpoint: integer, red: integer, green: integer, blue: integer, alpha: integer): void;
	deleteCheckpoint(checkpoint: integer): void;
	dontRenderInGameUi(p0: boolean): void;
	forceRenderInGameUi(toggle: boolean): void;
	requestStreamedTextureDict(textureDict: string, p1: boolean): void;
	hasStreamedTextureDictLoaded(textureDict: string): boolean;
	setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
	drawRect(x: number, y: number, width: number, height: number, r: integer, g: integer, b: integer, a: integer, p8: boolean): void;
	setScriptGfxDrawBehindPausemenu(toggle: boolean): void;
	setScriptGfxDrawOrder(drawOrder: integer): void;
	setScriptGfxAlign(horizontalAlign: integer, verticalAlign: integer): void;
	resetScriptGfxAlign(): void;
	setScriptGfxAlignParams(x: number, y: number, w: number, h: number): void;
	getScriptGfxPosition(x: number, y: number): GetScriptGfxPositionResult;
	getSafeZoneSize(): number;
	drawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: integer, green: integer, blue: integer, alpha: integer, p11: boolean): void;
	drawInteractiveSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawSpriteUv(textureDict: string, textureName: string, x: number, y: number, width: number, height: number, u1: number, v1: number, u2: number, v2: number, heading: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	addEntityIcon(entity: integer, icon: string): integer;
	setEntityIconVisibility(entity: integer, toggle: boolean): void;
	setEntityIconColor(entity: integer, red: integer, green: integer, blue: integer, alpha: integer): void;
	setDrawOrigin(x: number, y: number, z: number, p3: integer): void;
	clearDrawOrigin(): void;
	setBinkMovie(name: string): integer;
	playBinkMovie(binkMovie: integer): void;
	stopBinkMovie(binkMovie: integer): void;
	releaseBinkMovie(binkMovie: integer): void;
	drawBinkMovie(binkMovie: integer, p1: number, p2: number, p3: number, p4: number, p5: number, r: integer, g: integer, b: integer, a: integer): void;
	setBinkMovieTime(binkMovie: integer, progress: number): void;
	getBinkMovieTime(binkMovie: integer): number;
	setBinkMovieVolume(binkMovie: integer, value: number): void;
	attachTvAudioToEntity(entity: integer): void;
	setBinkMovieUnk2(binkMovie: integer, p1: boolean): void;
	setTvAudioFrontend(toggle: boolean): void;
	setBinkShouldSkip(binkMovie: integer, bShouldSkip: boolean): void;
	loadMovieMeshSet(movieMeshSetName: string): integer;
	releaseMovieMeshSet(movieMeshSet: integer): void;
	queryMovieMeshSetState(p0: integer): integer;
	getScreenResolution(): GetScreenResolutionResult;
	getActiveScreenResolution(): GetActiveScreenResolutionResult;
	getAspectRatio(b: boolean): number;
	getIsWidescreen(): boolean;
	getIsHidef(): boolean;
	setNightvision(toggle: boolean): void;
	getRequestingnightvision(): boolean;
	getUsingnightvision(): boolean;
	setNoiseoveride(toggle: boolean): void;
	setNoisinessoveride(value: number): void;
	getScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): GetScreenCoordFromWorldCoordResult;
	getTextureResolution(textureDict: string, textureName: string): Vector3Mp;
	overridePedBadgeTexture(ped: integer, txd: string, txn: string): boolean;
	setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
	disableOcclusionThisFrame(): void;
	setArtificialLightsState(state: boolean): void;
	setArtificialLightsStateAffectsVehicles(toggle: boolean): void;
	createTrackedPoint(): integer;
	setTrackedPointInfo(point: integer, x: number, y: number, z: number, radius: number): void;
	isTrackedPointVisible(point: integer): boolean;
	destroyTrackedPoint(point: integer): void;
	grassLodShrinkScriptAreas(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number): void;
	grassLodResetScriptAreas(): void;
	cascadeShadowsInitSession(): void;
	cascadeShadowsSetCascadeBounds(p0: integer, p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number): void;
	cascadeShadowsSetCascadeBoundsScale(p0: number): void;
	cascadeShadowsSetEntityTrackerScale(p0: number): void;
	cascadeShadowsEnableEntityTracker(toggle: boolean): void;
	cascadeShadowsSetShadowSampleType(type: string): void;
	cascadeShadowsClearShadowSampleType(): void;
	cascadeShadowsSetAircraftMode(p0: boolean): void;
	cascadeShadowsSetDynamicDepthMode(p0: boolean): void;
	cascadeShadowsSetDynamicDepthValue(p0: number): void;
	golfTrailSetEnabled(toggle: boolean): void;
	golfTrailSetPath(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;
	golfTrailSetRadius(p0: number, p1: number, p2: number): void;
	golfTrailSetColour(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer, p10: integer, p11: integer): void;
	golfTrailSetTessellation(p0: integer, p1: integer): void;
	golfTrailSetFixedControlPoint(type: integer, xPos: number, yPos: number, zPos: number, p4: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	golfTrailSetShaderParams(p0: number, p1: number, p2: number, p3: number, p4: number): void;
	golfTrailSetFacing(p0: boolean): void;
	golfTrailGetMaxHeight(): number;
	golfTrailGetVisualControlPoint(p0: integer): Vector3Mp;
	setSeethrough(toggle: boolean): void;
	getUsingseethrough(): boolean;
	seethroughReset(): void;
	seethroughSetFadeStartDistance(distance: number): void;
	seethroughSetFadeEndDistance(distance: number): void;
	seethroughGetMaxThickness(): number;
	seethroughSetMaxThickness(thickness: number): void;
	seethroughSetNoiseAmountMin(amount: number): void;
	seethroughSetNoiseAmountMax(amount: number): void;
	seethroughSetHiLightIntensity(intensity: number): void;
	seethroughSetHiLightNoise(noise: number): void;
	seethroughSetHeatscale(index: integer, heatScale: number): void;
	seethroughSetColorNear(red: integer, green: integer, blue: integer): void;
	triggerScreenblurFadeIn(transitionTime: number): boolean;
	triggerScreenblurFadeOut(transitionTime: number): boolean;
	disableScreenblurFade(): void;
	getScreenblurFadeCurrentTime(): number;
	isScreenblurFadeRunning(): boolean;
	togglePausedRenderphases(toggle: boolean): void;
	getTogglePausedRenderphasesStatus(): boolean;
	resetPausedRenderphases(): void;
	setHidofEnvBlurParams(p0: boolean, p1: boolean, nearplaneOut: number, nearplaneIn: number, farplaneOut: number, farplaneIn: number): void;
	startParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): integer;
	startNetworkedParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): boolean;
	startParticleFxNonLoopedOnPedBone(effectName: string, ped: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: integer, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	startNetworkedParticleFxNonLoopedOnPedBone(effectName: string, ped: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: integer, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	startParticleFxNonLoopedOnEntity(effectName: string, entity: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	startNetworkedParticleFxNonLoopedOnEntity(effectName: string, entity: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	startNetworkedParticleFxNonLoopedOnEntityBone(effectName: string, entity: integer, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: integer, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
	setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
	setParticleFxNonLoopedAlpha(alpha: number): void;
	startParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): integer;
	startParticleFxLoopedOnPedBone(effectName: string, ped: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: integer, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): integer;
	startParticleFxLoopedOnEntity(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): integer;
	startParticleFxLoopedOnEntityBone(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: integer, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): integer;
	startNetworkedParticleFxLoopedOnEntity(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p12: integer, p13: integer, p14: integer, p15: integer): integer;
	startNetworkedParticleFxLoopedOnEntityBone(effectName: string, entity: integer, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: integer, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p13: integer, p14: integer, p15: integer, p16: integer): integer;
	stopParticleFxLooped(ptfxHandle: integer, p1: boolean): void;
	removeParticleFx(ptfxHandle: integer, p1: boolean): void;
	removeParticleFxFromEntity(entity: integer): void;
	removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
	doesParticleFxLoopedExist(ptfxHandle: integer): boolean;
	setParticleFxLoopedOffsets(ptfxHandle: integer, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
	setParticleFxLoopedEvolution(ptfxHandle: integer, propertyName: string, amount: number, noNetwork: boolean): void;
	setParticleFxLoopedColour(ptfxHandle: integer, r: number, g: number, b: number, p4: boolean): void;
	setParticleFxLoopedAlpha(ptfxHandle: integer, alpha: number): void;
	setParticleFxLoopedScale(ptfxHandle: integer, scale: number): void;
	setParticleFxLoopedFarClipDist(ptfxHandle: integer, range: number): void;
	setParticleFxCamInsideVehicle(p0: boolean): void;
	setParticleFxCamInsideNonplayerVehicle(vehicle: integer, p1: boolean): void;
	setParticleFxShootoutBoat(p0: integer): void;
	enableClownBloodVfx(toggle: boolean): void;
	enableAlienBloodVfx(toggle: boolean): void;
	setParticleFxBulletImpactScale(scale: number): void;
	useParticleFxAsset(name: string): void;
	setParticleFxOverride(oldAsset: string, newAsset: string): void;
	resetParticleFxOverride(name: string): void;
	washDecalsInRange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	washDecalsFromVehicle(vehicle: integer, p1: number): void;
	fadeDecalsInRange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	removeDecalsInRange(x: number, y: number, z: number, range: number): void;
	removeDecalsFromObject(obj: integer): void;
	removeDecalsFromObjectFacing(obj: integer, x: number, y: number, z: number): void;
	removeDecalsFromVehicle(vehicle: integer): void;
	addDecal(decalType: integer, posX: number, posY: number, posZ: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, width: number, height: number, rCoef: number, gCoef: number, bCoef: number, opacity: number, timeout: number, p17: boolean, p18: boolean, p19: boolean): integer;
	addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): integer;
	startPetrolTrailDecals(p0: number): void;
	addPetrolTrailDecalInfo(x: number, y: number, z: number, p3: number): void;
	endPetrolTrailDecals(): void;
	removeDecal(decal: integer): void;
	isDecalAlive(decal: integer): boolean;
	getDecalWashLevel(decal: integer): number;
	setDisableDecalRenderingThisFrame(): void;
	getIsPetrolDecalInRange(xCoord: number, yCoord: number, zCoord: number, radius: number): boolean;
	patchDecalDiffuseMap(decalType: integer, textureDict: string, textureName: string): void;
	unpatchDecalDiffuseMap(decalType: integer): void;
	moveVehicleDecals(p0: integer, p1: integer): void;
	addVehicleCrewEmblem(vehicle: integer, ped: integer, boneIndex: integer, x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number, scale: number, p13: integer, alpha: integer): boolean;
	removeVehicleCrewEmblem(vehicle: integer, p1: integer): void;
	getVehicleCrewEmblemRequestState(vehicle: integer, p1: integer): integer;
	doesVehicleHaveCrewEmblem(vehicle: integer, p1: integer): boolean;
	overrideInteriorSmokeName(name: string): void;
	overrideInteriorSmokeLevel(level: number): void;
	overrideInteriorSmokeEnd(): void;
	registerNoirScreenEffectThisFrame(): void;
	disableVehicleDistantlights(toggle: boolean): void;
	setForcePedFootstepsTracks(toggle: boolean): void;
	setForceVehicleTrails(toggle: boolean): void;
	disableScriptAmbientEffects(p0: integer): void;
	presetInteriorAmbientCache(timecycleModifierName: string): void;
	setTimecycleModifier(modifierName: string): void;
	setTimecycleModifierStrength(strength: number): void;
	setTransitionTimecycleModifier(modifierName: string, transition: number): void;
	clearTimecycleModifier(): void;
	getTimecycleModifierIndex(): integer;
	getTimecycleTransitionModifierIndex(): integer;
	pushTimecycleModifier(): void;
	popTimecycleModifier(): void;
	setCurrentPlayerTcmodifier(modifierName: string): void;
	setPlayerTcmodifierTransition(value: number): void;
	setNextPlayerTcmodifier(modifierName: string): void;
	addTcmodifierOverride(modifierName1: string, modifierName2: string): void;
	removeTcmodifierOverride(p0: string): void;
	setExtraTimecycleModifier(modifierName: string): void;
	clearExtraTimecycleModifier(): void;
	getExtraTimecycleModifierIndex(): integer;
	setExtraTimecycleModifierStrength(strength: number): void;
	resetExtraTimecycleModifierStrength(): void;
	requestScaleformMovie(scaleformName: string): integer;
	requestScaleformMovie2(scaleformName: string): integer;
	requestScaleformMovieInstance(scaleformName: string): integer;
	requestScaleformMovieInteractive(scaleformName: string): integer;
	hasScaleformMovieLoaded(scaleformHandle: integer): boolean;
	hasScaleformMovieFilenameLoaded(scaleformName: string): boolean;
	hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: integer): boolean;
	setScaleformMovieAsNoLongerNeeded(scaleformHandle: integer): integer;
	setScaleformMovieToUseSystemTime(scaleform: integer, toggle: boolean): void;
	setScaleformFitRendertarget(scaleformHandle: integer, toggle: boolean): void;
	drawScaleformMovie(scaleformHandle: integer, x: number, y: number, width: number, height: number, red: integer, green: integer, blue: integer, alpha: integer, unk: integer): void;
	drawScaleformMovieFullscreen(scaleform: integer, red: integer, green: integer, blue: integer, alpha: integer, unk: integer): void;
	drawScaleformMovieFullscreenMasked(scaleform1: integer, scaleform2: integer, red: integer, green: integer, blue: integer, alpha: integer): void;
	drawScaleformMovie3D(scaleform: integer, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: integer): void;
	drawScaleformMovie3DSolid(scaleform: integer, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: integer): void;
	callScaleformMovieMethod(scaleform: integer, method: string): void;
	callScaleformMovieMethodWithNumber(scaleform: integer, methodName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
	callScaleformMovieMethodWithString(scaleform: integer, methodName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
	callScaleformMovieMethodWithNumberAndString(scaleform: integer, methodName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;
	beginScaleformScriptHudMovieMethod(hudComponent: integer, methodName: string): boolean;
	beginScaleformMovieMethod(scaleform: integer, methodName: string): boolean;
	beginScaleformMovieMethodOnFrontend(methodName: string): boolean;
	beginScaleformMovieMethodOnFrontendHeader(methodName: string): boolean;
	endScaleformMovieMethod(): void;
	endScaleformMovieMethodReturnValue(): integer;
	isScaleformMovieMethodReturnValueReady(methodReturn: integer): boolean;
	getScaleformMovieMethodReturnValueInt(methodReturn: integer): integer;
	getScaleformMovieMethodReturnValueBool(methodReturn: integer): boolean;
	getScaleformMovieMethodReturnValueString(methodReturn: integer): string;
	scaleformMovieMethodAddParamInt(value: integer): void;
	scaleformMovieMethodAddParamFloat(value: number): void;
	scaleformMovieMethodAddParamBool(value: boolean): void;
	beginTextCommandScaleformString(componentType: string): void;
	endTextCommandScaleformString(): void;
	endTextCommandScaleformString2(): void;
	scaleformMovieMethodAddParamTextureNameString2(string: string): void;
	scaleformMovieMethodAddParamTextureNameString(string: string): void;
	scaleformMovieMethodAddParamPlayerNameString(string: string): void;
	scaleformMovieMethodAddParamLatestBriefString(value: integer): void;
	requestScaleformScriptHudMovie(hudComponent: integer): void;
	hasScaleformScriptHudMovieLoaded(hudComponent: integer): boolean;
	removeScaleformScriptHudMovie(hudComponent: integer): void;
	setTvChannel(channel: integer): void;
	getTvChannel(): integer;
	setTvVolume(volume: number): void;
	getTvVolume(): number;
	drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: integer, green: integer, blue: integer, alpha: integer): void;
	setTvChannelPlaylist(tvChannel: integer, playlistName: string, restart: boolean): void;
	setTvChannelPlaylistAtHour(tvChannel: integer, playlistName: string, hour: integer): void;
	clearTvChannelPlaylist(tvChannel: integer): void;
	isPlaylistUnk(tvChannel: integer, p1: integer): boolean;
	isTvPlaylistItemPlaying(videoCliphash: integer): boolean;
	enableMovieKeyframeWait(toggle: boolean): void;
	enableMovieSubtitles(toggle: boolean): void;
	ui3DsceneIsAvailable(): boolean;
	ui3DscenePushPreset(presetName: string): boolean;
	terraingridActivate(toggle: boolean): void;
	terraingridSetParams(x: number, y: number, z: number, p3: number, rotation: number, p5: number, width: number, height: number, p8: number, scale: number, glowIntensity: number, normalHeight: number, heightDiff: number): void;
	terraingridSetColours(lowR: integer, lowG: integer, lowB: integer, lowAlpha: integer, r: integer, g: integer, b: integer, alpha: integer, highR: integer, highG: integer, highB: integer, highAlpha: integer): void;
	animpostfxPlay(effectName: string, duration: integer, looped: boolean): void;
	animpostfxStop(effectName: string): void;
	animpostfxGetUnk(effectName: string): number;
	animpostfxIsRunning(effectName: string): boolean;
	animpostfxStopAll(): void;
	animpostfxStopAndDoUnk(effectName: string): void;

	unk: GameGraphicsUnk;
}

interface GameHud extends GameHudLegacy {
	beginTextCommandBusyspinnerOn(string: string): void;
	endTextCommandBusyspinnerOn(busySpinnerType: integer): void;
	busyspinnerOff(): void;
	preloadBusyspinner(): void;
	busyspinnerIsOn(): boolean;
	busyspinnerIsDisplaying(): boolean;
	setMouseCursorActiveThisFrame(): void;
	setMouseCursorSprite(spriteId: integer): void;
	setMouseCursorVisibleInMenus(toggle: boolean): void;
	thefeedOnlyShowTooltips(toggle: boolean): void;
	thefeedSetScriptedMenuHeight(pos: number): void;
	thefeedDisableLoadingScreenTips(): void;
	thefeedHideThisFrame(): void;
	thefeedDisplayLoadingScreenTips(): void;
	thefeedFlushQueue(): void;
	thefeedRemoveItem(notificationId: integer): void;
	thefeedForceRenderOn(): void;
	thefeedForceRenderOff(): void;
	thefeedPause(): void;
	thefeedResume(): void;
	thefeedIsPaused(): boolean;
	thefeedSpsExtendWidescreenOn(): void;
	thefeedSpsExtendWidescreenOff(): void;
	thefeedGetFirstVisibleDeleteRemaining(): integer;
	thefeedCommentTeleportPoolOn(): void;
	thefeedCommentTeleportPoolOff(): void;
	thefeedSetNextPostBackgroundColor(hudColorIndex: integer): void;
	thefeedSetAnimpostfxColor(red: integer, green: integer, blue: integer, alpha: integer): void;
	thefeedSetAnimpostfxCount(count: integer): void;
	thefeedSetAnimpostfxSound(toggle: boolean): void;
	thefeedResetAllParameters(): void;
	thefeedFreezeNextPost(): void;
	thefeedClearFrozenPost(): void;
	thefeedSetFlushAnimpostfx(p0: boolean): void;
	thefeedAddTxdRef(): ThefeedAddTxdRefResult;
	beginTextCommandThefeedPost(text: string): void;
	endTextCommandThefeedPostStats(statTitle: string, iconEnum: integer, stepVal: boolean, barValue: integer, isImportant: boolean, pictureTextureDict: string, pictureTextureName: string): integer;
	endTextCommandThefeedPostMessagetext(txdName: string, textureName: string, flash: boolean, iconType: integer, sender: string, subject: string): integer;
	endTextCommandThefeedPostMessagetextGxtEntry(txdName: string, textureName: string, flash: boolean, iconType: integer, sender: string, subject: string): integer;
	endTextCommandThefeedPostMessagetextTu(txdName: string, textureName: string, flash: boolean, iconType: integer, sender: string, subject: string, duration: number): integer;
	endTextCommandThefeedPostMessagetextWithCrewTag(txdName: string, textureName: string, flash: boolean, iconType: integer, sender: string, subject: string, duration: number, clanTag: string): integer;
	endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(txdName: string, textureName: string, flash: boolean, iconType1: integer, sender: string, subject: string, duration: number, clanTag: string, iconType2: integer, p9: integer): integer;
	endTextCommandThefeedPostTicker(blink: boolean, p1: boolean): integer;
	endTextCommandThefeedPostTickerForced(blink: boolean, p1: boolean): integer;
	endTextCommandThefeedPostTickerWithTokens(blink: boolean, p1: boolean): integer;
	endTextCommandThefeedPostAward(textureDict: string, textureName: string, rpBonus: integer, colorOverlay: integer, titleLabel: string): integer;
	endTextCommandThefeedPostCrewtag(p0: boolean, p1: boolean, p3: integer, isLeader: boolean, unk0: boolean, clanDesc: integer, R: integer, G: integer, B: integer): EndTextCommandThefeedPostCrewtagResult;
	endTextCommandThefeedPostCrewtagWithGameName(p0: boolean, p1: boolean, p3: integer, isLeader: boolean, unk0: boolean, clanDesc: integer, playerName: string, R: integer, G: integer, B: integer): EndTextCommandThefeedPostCrewtagWithGameNameResult;
	endTextCommandThefeedPostUnlock(p0: integer, p1: integer, p2: integer): integer;
	endTextCommandThefeedPostUnlockTu(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	endTextCommandThefeedPostUnlockTuWithColor(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): integer;
	endTextCommandThefeedPostMpticker(blink: boolean, p1: boolean): integer;
	endTextCommandThefeedPostCrewRankup(p0: string, p1: string, p2: string, p3: boolean, p4: boolean): integer;
	endTextCommandThefeedPostVersusTu(p2: integer, p5: integer, p6: integer, p7: integer): EndTextCommandThefeedPostVersusTuResult;
	endTextCommandThefeedPostReplayIcon(type: integer, image: integer, text: string): integer;
	endTextCommandThefeedPostReplayInput(type: integer, button: string, text: string): integer;
	beginTextCommandPrint(GxtEntry: string): void;
	endTextCommandPrint(duration: integer, drawImmediately: boolean): void;
	beginTextCommandIsMessageDisplayed(text: string): void;
	endTextCommandIsMessageDisplayed(): boolean;
	beginTextCommandDisplayText(text: string): void;
	endTextCommandDisplayText(x: number, y: number, p2: integer): void;
	beginTextCommandGetWidth(text: string): void;
	endTextCommandGetWidth(p0: boolean): number;
	beginTextCommandLineCount(entry: string): void;
	endTextCommandLineCount(x: number, y: number): integer;
	beginTextCommandDisplayHelp(inputType: string): void;
	endTextCommandDisplayHelp(p0: integer, loop: boolean, beep: boolean, shape: integer): void;
	beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;
	endTextCommandIsThisHelpMessageBeingDisplayed(p0: integer): boolean;
	beginTextCommandSetBlipName(textLabel: string): void;
	endTextCommandSetBlipName(blip: integer): void;
	beginTextCommandObjective(p0: string): void;
	endTextCommandObjective(p0: boolean): void;
	beginTextCommandClearPrint(text: string): void;
	endTextCommandClearPrint(): void;
	beginTextCommandOverrideButtonText(gxtEntry: string): void;
	endTextCommandOverrideButtonText(p0: integer): void;
	addTextComponentInteger(value: integer): void;
	addTextComponentFloat(value: number, decimalPlaces: integer): void;
	addTextComponentSubstringTextLabel(labelName: string): void;
	addTextComponentSubstringTextLabelHashKey(gxtEntryHash: integer): void;
	addTextComponentSubstringBlipName(blip: integer): void;
	addTextComponentSubstringPlayerName(text: string): void;
	addTextComponentSubstringTime(timestamp: integer, flags: integer): void;
	addTextComponentFormattedInteger(value: integer, commaSeparated: boolean): void;
	addTextComponentSubstringPhoneNumber(p0: string, p1: integer): void;
	addTextComponentSubstringWebsite(website: string): void;
	addTextComponentSubstringKeyboardDisplay(string: string): void;
	setColourOfNextTextComponent(hudColor: integer): void;
	getTextSubstring(text: string, position: integer, length: integer): string;
	getTextSubstringSafe(text: string, position: integer, length: integer, maxLength: integer): string;
	getTextSubstringSlice(text: string, startPosition: integer, endPosition: integer): string;
	getLabelText(labelName: string): string;
	clearPrints(): void;
	clearBrief(): void;
	clearAllHelpMessages(): void;
	clearThisPrint(p0: string): void;
	clearSmallPrints(): void;
	doesTextBlockExist(gxt: string): boolean;
	requestAdditionalText(gxt: string, slot: integer): void;
	requestAdditionalTextForDlc(gxt: string, slot: integer): void;
	hasAdditionalTextLoaded(slot: integer): boolean;
	clearAdditionalText(p0: integer, p1: boolean): void;
	isStreamingAdditionalText(p0: integer): boolean;
	hasThisAdditionalTextLoaded(gxt: string, slot: integer): boolean;
	isMessageBeingDisplayed(): boolean;
	doesTextLabelExist(gxt: string): boolean;
	getLengthOfStringWithThisTextLabel(gxt: string): integer;
	getLengthOfLiteralString(string: string): integer;
	getLengthOfLiteralStringInBytes(string: string): integer;
	getStreetNameFromHashKey(hash: integer): string;
	isPreferenceSwitchedOn(): boolean;
	isRadarPreferenceSwitchedOn(): boolean;
	isSubtitlePreferenceSwitchedOn(): boolean;
	display(toggle: boolean): void;
	displayWhenDeadThisFrame(): void;
	displayWhenPausedThisFrame(): void;
	displayRadar(toggle: boolean): void;
	isHidden(): boolean;
	isRadarHidden(): boolean;
	isMinimapRendering(): boolean;
	setBlipRoute(blip: integer, enabled: boolean): void;
	clearAllBlipRoutes(): void;
	setBlipRouteColour(blip: integer, colour: integer): void;
	addNextMessageToPreviousBriefs(p0: boolean): void;
	setRadarZoomPrecise(zoom: number): void;
	setRadarZoom(zoomLevel: integer): void;
	setRadarZoomToBlip(blip: integer, zoom: number): void;
	setRadarZoomToDistance(zoom: number): void;
	getColour(hudColorIndex: integer): GetHudColourResult;
	setScriptVariableColour(r: integer, g: integer, b: integer, a: integer): void;
	setScriptVariable2Colour(r: integer, g: integer, b: integer, a: integer): void;
	replaceColour(hudColorIndex: integer, hudColorIndex2: integer): void;
	replaceColourWithRgba(hudColorIndex: integer, r: integer, g: integer, b: integer, a: integer): void;
	setAbilityBarVisibilityInMultiplayer(visible: boolean): void;
	setAllowAbilityBarInMultiplayer(toggle: boolean): void;
	flashAbilityBar(millisecondsToFlash: integer): void;
	setAbilityBarValue(p0: number, p1: number): void;
	flashWantedDisplay(p0: boolean): void;
	getRenderedCharacterHeight(size: number, font: integer): number;
	setTextScale(scale: number, size: number): void;
	setTextColour(red: integer, green: integer, blue: integer, alpha: integer): void;
	setTextCentre(align: boolean): void;
	setTextRightJustify(toggle: boolean): void;
	setTextJustification(justifyType: integer): void;
	setTextWrap(start: number, end: number): void;
	setTextLeading(p0: integer): void;
	setTextProportional(p0: boolean): void;
	setTextFont(fontType: integer): void;
	setTextDropShadow(): void;
	setTextDropshadow(distance: integer, r: integer, g: integer, b: integer, a: integer): void;
	setTextOutline(): void;
	setTextEdge(p0: integer, r: integer, g: integer, b: integer, a: integer): void;
	setTextRenderId(renderId: integer): void;
	getDefaultScriptRendertargetRenderId(): integer;
	registerNamedRendertarget(name: string, p1: boolean): boolean;
	isNamedRendertargetRegistered(name: string): boolean;
	releaseNamedRendertarget(name: string): boolean;
	linkNamedRendertarget(modelHash: integer): void;
	getNamedRendertargetRenderId(name: string): integer;
	isNamedRendertargetLinked(modelHash: integer): boolean;
	clearHelp(toggle: boolean): void;
	isHelpMessageOnScreen(): boolean;
	isHelpMessageBeingDisplayed(): boolean;
	isHelpMessageFadingOut(): boolean;
	setHelpMessageTextStyle(style: integer, hudColor: integer, alpha: integer, p3: integer, p4: integer): void;
	getStandardBlipEnumId(): boolean;
	getWaypointBlipEnumId(): integer;
	getNumberOfActiveBlips(): integer;
	getNextBlipInfoId(blipSprite: integer): integer;
	getFirstBlipInfoId(blipSprite: integer): integer;
	getClosestBlipOfType(blipSprite: integer): integer;
	getBlipInfoIdCoord(blip: integer): Vector3Mp;
	getBlipInfoIdDisplay(blip: integer): integer;
	getBlipInfoIdType(blip: integer): integer;
	getBlipInfoIdEntityIndex(blip: integer): integer;
	getBlipInfoIdPickupIndex(blip: integer): integer;
	getBlipFromEntity(entity: integer): integer;
	addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): integer;
	addBlipForArea(x: number, y: number, z: number, width: number, height: number): integer;
	addBlipForEntity(entity: integer): integer;
	addBlipForPickup(pickup: integer): integer;
	addBlipForCoord(x: number, y: number, z: number): integer;
	triggerSonarBlip(posX: number, posY: number, posZ: number, radius: number, p4: integer): void;
	allowSonarBlips(toggle: boolean): void;
	setBlipCoords(blip: integer, posX: number, posY: number, posZ: number): void;
	getBlipCoords(blip: integer): Vector3Mp;
	setBlipSprite(blip: integer, spriteId: integer): void;
	getBlipSprite(blip: integer): integer;
	setBlipNameFromTextFile(blip: integer, gxtEntry: string): void;
	setBlipNameToPlayerName(blip: integer, player: integer): void;
	setBlipAlpha(blip: integer, alpha: integer): void;
	getBlipAlpha(blip: integer): integer;
	setBlipFade(blip: integer, opacity: integer, duration: integer): void;
	setBlipRotation(blip: integer, rotation: integer): void;
	setBlipSquaredRotation(blip: integer, heading: number): void;
	setBlipFlashTimer(blip: integer, duration: integer): void;
	setBlipFlashInterval(blip: integer, p1: integer): void;
	setBlipColour(blip: integer, color: integer): void;
	setBlipSecondaryColour(blip: integer, r: integer, g: integer, b: integer): void;
	getBlipColour(blip: integer): integer;
	getBlipColour(blip: integer): integer;
	isBlipShortRange(blip: integer): boolean;
	isBlipOnMinimap(blip: integer): boolean;
	doesBlipHaveGpsRoute(blip: integer): boolean;
	setBlipHiddenOnLegend(blip: integer, toggle: boolean): void;
	setBlipHighDetail(blip: integer, toggle: boolean): void;
	setBlipAsMissionCreatorBlip(blip: integer, toggle: boolean): void;
	isMissionCreatorBlip(blip: integer): boolean;
	getNewSelectedMissionCreatorBlip(): integer;
	isHoveringOverMissionCreatorBlip(): boolean;
	showStartMissionInstructionalButton(p0: boolean): void;
	setBlipFlashes(blip: integer, toggle: boolean): void;
	setBlipFlashesAlternate(blip: integer, toggle: boolean): void;
	isBlipFlashing(blip: integer): boolean;
	setBlipAsShortRange(blip: integer, toggle: boolean): void;
	setBlipScale(blip: integer, scale: number): void;
	setBlipScaleTransformation(blip: integer, xScale: number, yScale: number): void;
	setBlipPriority(blip: integer, priority: integer): void;
	setBlipDisplay(blip: integer, displayId: integer): void;
	setBlipCategory(blip: integer, index: integer): void;
	removeBlip(): integer;
	setBlipAsFriendly(blip: integer, toggle: boolean): void;
	pulseBlip(blip: integer): void;
	showNumberOnBlip(blip: integer, number: integer): void;
	hideNumberOnBlip(blip: integer): void;
	showHeightOnBlip(blip: integer, toggle: boolean): void;
	showTickOnBlip(blip: integer, toggle: boolean): void;
	showHeadingIndicatorOnBlip(blip: integer, toggle: boolean): void;
	showOutlineIndicatorOnBlip(blip: integer, toggle: boolean): void;
	showFriendIndicatorOnBlip(blip: integer, toggle: boolean): void;
	showCrewIndicatorOnBlip(blip: integer, toggle: boolean): void;
	setBlipDisplayIndicatorOnBlip(blip: integer, toggle: boolean): void;
	setBlipShrink(blip: integer, toggle: boolean): void;
	setRadiusBlipEdge(blip: integer, toggle: boolean): void;
	doesBlipExist(blip: integer): boolean;
	setWaypointOff(): void;
	deleteWaypoint(): void;
	refreshWaypoint(): void;
	isWaypointActive(): boolean;
	setNewWaypoint(x: number, y: number): void;
	setBlipBright(blip: integer, toggle: boolean): void;
	setBlipShowCone(blip: integer, toggle: boolean, p2: integer): void;
	setMinimapComponent(componentId: integer, toggle: boolean, overrideColor: integer): integer;
	setMinimapSonarEnabled(toggle: boolean): void;
	showSigninUi(): void;
	getMainPlayerBlipId(): integer;
	hideLoadingOnFadeThisFrame(): void;
	setRadarAsInteriorThisFrame(interior: integer, x: number, y: number, z: integer, zoom: integer): void;
	setRadarAsExteriorThisFrame(): void;
	setPlayerBlipPositionThisFrame(x: number, y: number): void;
	isMinimapInInterior(): boolean;
	hideMinimapExteriorMapThisFrame(): void;
	hideMinimapInteriorMapThisFrame(): void;
	setToggleMinimapHeistIsland(toggle: boolean): void;
	dontTiltMinimapThisFrame(): void;
	setWidescreenFormat(p0: integer): void;
	displayAreaName(toggle: boolean): void;
	displayCash(toggle: boolean): void;
	setPlayerCashChange(cash: integer, bank: integer): void;
	displayAmmoThisFrame(display: boolean): void;
	displaySniperScopeThisFrame(): void;
	hideAndRadarThisFrame(): void;
	setMultiplayerWalletCash(): void;
	removeMultiplayerWalletCash(): void;
	setMultiplayerBankCash(): void;
	removeMultiplayerBankCash(): void;
	setMultiplayerCash(p0: integer, p1: integer): void;
	removeMultiplayerCash(): void;
	hideHelpTextThisFrame(): void;
	displayHelpTextThisFrame(message: string, p1: boolean): void;
	forceWeaponWheel(show: boolean): void;
	displayLoadingScreenTips(): void;
	weaponWheelIgnoreSelection(): void;
	weaponWheelGetSelectedHash(): integer;
	setWeaponWheelTopSlot(weaponHash: integer): void;
	weaponWheelGetSlotHash(weaponTypeIndex: integer): integer;
	weaponWheelIgnoreControlInput(toggle: boolean): void;
	setGpsFlags(p0: integer, p1: number): void;
	clearGpsFlags(): void;
	setRaceTrackRender(toggle: boolean): void;
	clearGpsRaceTrack(): void;
	startGpsCustomRoute(hudColor: integer, displayOnFoot: boolean, followPlayer: boolean): void;
	addPointToGpsCustomRoute(x: number, y: number, z: number): void;
	setGpsCustomRouteRender(toggle: boolean, radarThickness: integer, mapThickness: integer): void;
	clearGpsCustomRoute(): void;
	startGpsMultiRoute(hudColor: integer, routeFromPlayer: boolean, displayOnFoot: boolean): void;
	addPointToGpsMultiRoute(x: number, y: number, z: number): void;
	setGpsMultiRouteRender(toggle: boolean): void;
	clearGpsMultiRoute(): void;
	clearGpsPlayerWaypoint(): void;
	setGpsFlashes(toggle: boolean): void;
	flashMinimapDisplay(): void;
	flashMinimapDisplayWithColor(hudColorIndex: integer): void;
	toggleStealthRadar(toggle: boolean): void;
	setMinimapInSpectatorMode(toggle: boolean, ped: integer): void;
	setMissionName(p0: boolean, name: string): void;
	setMissionName2(p0: boolean, name: string): void;
	setMinimapBlockWaypoint(toggle: boolean): void;
	setMinimapInPrologue(toggle: boolean): void;
	setMinimapHideFow(toggle: boolean): void;
	getMinimapFowDiscoveryRatio(): number;
	getMinimapFowCoordinateIsRevealed(x: number, y: number, z: number): boolean;
	setMinimapFowRevealCoordinate(x: number, y: number, z: number): void;
	setMinimapGolfCourse(hole: integer): void;
	setMinimapGolfCourseOff(): void;
	lockMinimapAngle(angle: integer): void;
	unlockMinimapAngle(): void;
	lockMinimapPosition(x: number, y: number): void;
	unlockMinimapPosition(): void;
	setMinimapAltitudeIndicatorLevel(altitude: number, p1: boolean, p2: integer): void;
	setHealthDisplayValues(health: integer, capacity: integer, wasAdded: boolean): void;
	setMaxHealthDisplay(maximumValue: integer): void;
	setMaxArmourDisplay(maximumValue: integer): void;
	setBigmapActive(toggleBigMap: boolean, showFullMap: boolean): void;
	isComponentActive(id: integer): boolean;
	isScriptedComponentActive(id: integer): boolean;
	hideScriptedComponentThisFrame(id: integer): void;
	showScriptedComponentThisFrame(id: integer): void;
	isScriptedComponentHiddenThisFrame(id: integer): boolean;
	hideComponentThisFrame(id: integer): void;
	showComponentThisFrame(id: integer): void;
	hideAreaAndVehicleNameThisFrame(): void;
	resetReticuleValues(): void;
	resetComponentValues(id: integer): void;
	setComponentPosition(id: integer, x: number, y: number): void;
	getComponentPosition(id: integer): Vector3Mp;
	clearReminderMessage(): void;
	getScreenPositionFromWorldPosition(worldX: number, worldY: number, worldZ: number): GetHudScreenPositionFromWorldPositionResult;
	openReportugcMenu(): void;
	forceCloseReportugcMenu(): void;
	isReportugcMenuOpen(): boolean;
	isFloatingHelpTextOnScreen(hudIndex: integer): boolean;
	setFloatingHelpTextScreenPosition(hudIndex: integer, x: number, y: number): void;
	setFloatingHelpTextWorldPosition(hudIndex: integer, x: number, y: number, z: number): void;
	setFloatingHelpTextToEntity(hudIndex: integer, entity: integer, offsetX: number, offsetY: number): void;
	setFloatingHelpTextStyle(hudIndex: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	clearFloatingHelp(hudIndex: integer, p1: boolean): void;
	createMpGamerTagWithCrewColor(player: integer, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: integer, r: integer, g: integer, b: integer): void;
	isMpGamerTagMovieActive(): boolean;
	createFakeMpGamerTag(ped: integer, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, clanFlag: integer): integer;
	removeMpGamerTag(gamerTagId: integer): void;
	isMpGamerTagActive(gamerTagId: integer): boolean;
	isMpGamerTagFree(gamerTagId: integer): boolean;
	setMpGamerTagVisibility(gamerTagId: integer, component: integer, toggle: boolean, p3: integer): void;
	setMpGamerTagEnabled(gamerTagId: integer, toggle: boolean): void;
	setMpGamerTagIcons(gamerTagId: integer, toggle: boolean): void;
	setMpGamerHealthBarDisplay(gamerTagId: integer, toggle: boolean): void;
	setMpGamerHealthBarMax(gamerTagId: integer, value: integer, maximumValue: integer): void;
	setMpGamerTagColour(gamerTagId: integer, component: integer, hudColorIndex: integer): void;
	setMpGamerTagHealthBarColour(gamerTagId: integer, hudColorIndex: integer): void;
	setMpGamerTagAlpha(gamerTagId: integer, component: integer, alpha: integer): void;
	setMpGamerTagWantedLevel(gamerTagId: integer, wantedlvl: integer): void;
	setMpGamerTagUnk(gamerTagId: integer, p1: integer): void;
	setMpGamerTagName(gamerTagId: integer, string: string): void;
	isValidMpGamerTagMovie(gamerTagId: integer): boolean;
	setMpGamerTagBigText(gamerTagId: integer, string: string): void;
	getCurrentWebpageId(): integer;
	getCurrentWebsiteId(): integer;
	getGlobalActionscriptFlag(flagIndex: integer): integer;
	resetGlobalActionscriptFlag(flagIndex: integer): void;
	isWarningMessageActive2(): boolean;
	setWarningMessage(titleMsg: string, flags: integer, promptMsg: string, p3: boolean, p4: integer, p5: string, p6: string, showBackground: boolean, p8: integer): void;
	setWarningMessageWithHeader(entryHeader: string, entryLine1: string, instructionalKey: integer, entryLine2: string, p4: boolean, p5: integer, p8: boolean, p9: integer): SetWarningMessageWithHeaderResult;
	setWarningMessageWithHeaderAndSubstringFlags(entryHeader: string, entryLine1: string, instructionalKey: integer, entryLine2: string, p4: boolean, p5: integer, p6: integer, p9: boolean, p10: integer): SetWarningMessageWithHeaderAndSubstringFlagsResult;
	setWarningMessageWithHeaderUnk(entryHeader: string, entryLine1: string, flags: integer, entryLine2: string, p4: boolean, p5: integer, showBg: boolean, p9: integer, p10: integer): SetWarningMessageWithHeaderUnkResult;
	setWarningMessageWithAlert(labelTitle: string, labelMessage: string, p2: integer, p3: integer, labelMessage2: string, p5: boolean, p6: integer, p7: integer, p8: string, p9: string, background: boolean, errorCode: integer): void;
	getWarningMessageTitleHash(): integer;
	setWarningMessageListRow(index: integer, name: string, cash: integer, rp: integer, lvl: integer, colour: integer): boolean;
	removeWarningMessageListItems(): void;
	isWarningMessageActive(): boolean;
	clearDynamicPauseMenuErrorMessage(): void;
	raceGalleryFullscreen(toggle: boolean): void;
	raceGalleryNextBlipSprite(spriteId: integer): void;
	raceGalleryAddBlip(x: number, y: number, z: number): integer;
	clearRaceGalleryBlips(): void;
	forceSonarBlipsThisFrame(): integer;
	getNorthRadarBlip(): integer;
	displayPlayerNameTagsOnBlips(toggle: boolean): void;
	activateFrontendMenu(menuhash: integer, togglePause: boolean, component: integer): void;
	restartFrontendMenu(menuHash: integer, p1: integer): void;
	getCurrentFrontendMenuVersion(): integer;
	setPauseMenuActive(toggle: boolean): void;
	disableFrontendThisFrame(): void;
	suppressFrontendRenderingThisFrame(): void;
	allowPauseMenuWhenDeadThisFrame(): void;
	setFrontendActive(active: boolean): void;
	isPauseMenuActive(): boolean;
	getPauseMenuState(): integer;
	isPauseMenuRestarting(): boolean;
	logDebugInfo(p0: string): void;
	pauseMenuActivateContext(contextHash: integer): void;
	pauseMenuDeactivateContext(contextHash: integer): void;
	pauseMenuIsContextActive(contextHash: integer): boolean;
	pauseMenuIsContextMenuActive(): integer;
	pauseMenuSetBusySpinner(p0: boolean, p1: integer, p2: integer): void;
	isFrontendReadyForControl(): boolean;
	takeControlOfFrontend(): void;
	releaseControlOfFrontend(): void;
	isNavigatingMenuContent(): integer;
	getPauseMenuSelection(): GetPauseMenuSelectionResult;
	getPauseMenuSelectionData(): GetPauseMenuSelectionDataResult;
	getMenuPedIntStat(p0: integer): integer;
	getMenuPedMaskedIntStat(p0: integer, p2: integer, p3: integer): integer;
	getMenuPedFloatStat(p0: integer): number;
	getMenuPedBoolStat(p0: integer): integer;
	clearPedInPauseMenu(): void;
	givePedToPauseMenu(ped: integer, p1: integer): void;
	setPauseMenuPedLighting(state: boolean): void;
	setPauseMenuPedSleepState(state: boolean): void;
	openOnlinePoliciesMenu(): void;
	isOnlinePoliciesMenuActive(): boolean;
	openSocialClubMenu(): void;
	closeSocialClubMenu(): void;
	setSocialClubTour(name: string): void;
	isSocialClubActive(): boolean;
	forceCloseTextInputBox(): void;
	overrideMultiplayerChatPrefix(gxtEntryHash: integer): void;
	isMultiplayerChatActive(): boolean;
	closeMultiplayerChat(): void;
	overrideMultiplayerChatColour(p0: integer, hudColor: integer): void;
	setTextChatUnk(p0: boolean): void;
	flagPlayerContextInTournament(toggle: boolean): void;
	setPedHasAiBlip(ped: integer, hasCone: boolean): void;
	setPedHasAiBlipWithColor(ped: integer, hasCone: boolean, color: integer): void;
	doesPedHaveAiBlip(ped: integer): boolean;
	setPedAiBlipGangId(ped: integer, gangId: integer): void;
	setPedAiBlipHasCone(ped: integer, toggle: boolean): void;
	setPedAiBlipForcedOn(ped: integer, toggle: boolean): void;
	setPedAiBlipNoticeRange(ped: integer, range: number): void;
	setPedAiBlipSprite(ped: integer, spriteId: integer): void;
	getAiBlip2(ped: integer): integer;
	getAiBlip(ped: integer): integer;
	hasDirectorModeBeenTriggered(): boolean;
	setDirectorModeClearTriggeredFlag(): void;
	setPlayerIsInDirectorMode(toggle: boolean): void;

	unk: GameHudUnk;
}

interface GameInterior extends GameInteriorLegacy {
	getHeading(interior: integer): number;
	getInfo(interior: integer): GetInteriorInfoResult;
	getGroupId(interior: integer): integer;
	getOffsetFromInWorldCoords(interior: integer, x: number, y: number, z: number): Vector3Mp;
	isScene(): boolean;
	isValid(interior: integer): boolean;
	clearRoomForEntity(entity: integer): void;
	forceRoomForEntity(entity: integer, interior: integer, roomHashKey: integer): void;
	getRoomKeyFromEntity(entity: integer): integer;
	getKeyForEntityInRoom(entity: integer): integer;
	getFromEntity(entity: integer): integer;
	clearForEntity(entity: integer): void;
	forceRoomForGameViewport(interiorID: integer, roomHashKey: integer): void;
	getRoomKeyForGameViewport(): integer;
	clearRoomForGameViewport(): void;
	getFromGameplayCam(): integer;
	getAtCoords(x: number, y: number, z: number): integer;
	addPickupToRoomByName(pickup: integer, roomName: string): void;
	pinInMemory(interior: integer): void;
	unpin(interior: integer): void;
	isReady(interior: integer): boolean;
	getAtCoordsWithType(x: number, y: number, z: number, interiorType: string): integer;
	getAtCoordsWithTypehash(x: number, y: number, z: number, typeHash: integer): integer;
	isCollisionMarkedOutside(x: number, y: number, z: number): boolean;
	getFromCollision(x: number, y: number, z: number): integer;
	activateEntitySet(interior: integer, entitySetName: string): void;
	deactivateEntitySet(interior: integer, entitySetName: string): void;
	isEntitySetActive(interior: integer, entitySetName: string): boolean;
	setEntitySetColor(interior: integer, entitySetName: string, color: integer): void;
	refresh(interior: integer): void;
	enableExteriorCullModelThisFrame(mapObjectHash: integer): void;
	enableScriptCullModelThisFrame(mapObjectHash: integer): void;
	disable(interior: integer, toggle: boolean): void;
	isDisabled(interior: integer): boolean;
	cap(interior: integer, toggle: boolean): void;
	isCapped(interior: integer): boolean;

	unk: GameInteriorUnk;
}

interface GameItemset extends GameItemsetLegacy {
	create(p0: boolean): integer;
	destroy(p0: integer): void;
	isValid(p0: integer): boolean;
	addTo(p0: integer, p1: integer): boolean;
	removeFrom(p0: integer, p1: integer): void;
	getSize(x: integer): integer;
	getIndexedItemIn(p0: integer, p1: integer): integer;
	isIn(p0: integer, p1: integer): boolean;
	clean(p0: integer): void;
}

interface GameLoadingscreen extends GameLoadingscreenLegacy {
	getLoadFreemode(): boolean;
	setLoadFreemode(toggle: boolean): void;
	getLoadFreemodeWithEventName(): boolean;
	setLoadFreemodeWithEventName(toggle: boolean): void;
	isLoadingFreemode(): boolean;
	setIsLoadingFreemode(toggle: boolean): void;

	unk: GameLoadingscreenUnk;
}

interface GameLocalization extends GameLocalizationLegacy {
	getSystemLanguage(): integer;
	getCurrentLanguage(): integer;
	getSystemDateFormat(): integer;
}

interface GameMisc extends GameMiscLegacy {
	getAllocatedStackSize(): integer;
	getNumberOfFreeStacksOfThisSize(stackSize: integer): integer;
	setRandomSeed(seed: integer): void;
	setTimeScale(timeScale: number): void;
	setMissionFlag(toggle: boolean): void;
	getMissionFlag(): boolean;
	setRandomEventFlag(toggle: boolean): void;
	getRandomEventFlag(): boolean;
	getGlobalCharBuffer(): string;
	hasResumedFromSuspend(): boolean;
	getBaseElementMetadata(p2: integer, p3: boolean): GetBaseElementMetadataResult;
	getPrevWeatherTypeHashName(): integer;
	getNextWeatherTypeHashName(): integer;
	isPrevWeatherType(weatherType: string): boolean;
	isNextWeatherType(weatherType: string): boolean;
	setWeatherTypePersist(weatherType: string): void;
	setWeatherTypeNowPersist(weatherType: string): void;
	setWeatherTypeNow(weatherType: string): void;
	setWeatherTypeOvertimePersist(weatherType: string, time: number): void;
	setRandomWeatherType(): void;
	clearWeatherTypePersist(): void;
	getWeatherTypeTransition(): GetWeatherTypeTransitionResult;
	setWeatherTypeTransition(weatherType1: integer, weatherType2: integer, percentWeather2: number): void;
	setOverrideWeather(weatherType: string): void;
	clearOverrideWeather(): void;
	waterOverrideSetShorewaveamplitude(amplitude: number): void;
	waterOverrideSetShorewaveminamplitude(minAmplitude: number): void;
	waterOverrideSetShorewavemaxamplitude(maxAmplitude: number): void;
	waterOverrideSetOceannoiseminamplitude(minAmplitude: number): void;
	waterOverrideSetOceanwaveamplitude(amplitude: number): void;
	waterOverrideSetOceanwaveminamplitude(minAmplitude: number): void;
	waterOverrideSetOceanwavemaxamplitude(maxAmplitude: number): void;
	waterOverrideSetRipplebumpiness(bumpiness: number): void;
	waterOverrideSetRippleminbumpiness(minBumpiness: number): void;
	waterOverrideSetRipplemaxbumpiness(maxBumpiness: number): void;
	waterOverrideSetRippledisturb(disturb: number): void;
	waterOverrideSetStrength(strength: number): void;
	waterOverrideFadeIn(p0: number): void;
	waterOverrideFadeOut(p0: number): void;
	setWind(speed: number): void;
	setWindSpeed(speed: number): void;
	getWindSpeed(): number;
	setWindDirection(direction: number): void;
	getWindDirection(): Vector3Mp;
	setRainLevel(intensity: number): void;
	getRainLevel(): number;
	setSnowLevel(level: number): void;
	getSnowLevel(): number;
	forceLightningFlash(): void;
	preloadCloudHat(name: string): void;
	loadCloudHat(name: string, transitionTime: number): void;
	unloadCloudHat(name: string, p1: number): void;
	clearCloudHat(): void;
	setCloudHatOpacity(opacity: number): void;
	getCloudHatOpacity(): number;
	getGameTimer(): integer;
	getFrameTime(): number;
	getBenchmarkTime(): number;
	getFrameCount(): integer;
	getRandomFloatInRange(startRange: number, endRange: number): number;
	getRandomIntInRange(startRange: integer, endRange: integer): integer;
	getRandomIntInRange2(startRange: integer, endRange: integer): integer;
	getGroundZFor3DCoord(x: number, y: number, z: number, ignoreWater: boolean, p5: boolean): number;
	getGroundZAndNormalFor3DCoord(x: number, y: number, z: number): GetGroundZAndNormalFor3DCoordResult;
	getGroundZFor3DCoord2(x: number, y: number, z: number, p4: boolean, p5: boolean): number;
	asin(p0: number): number;
	acos(p0: number): number;
	tan(p0: number): number;
	atan(p0: number): number;
	atan2(p0: number, p1: number): number;
	getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
	getAngleBetween2DVectors(x1: number, y1: number, x2: number, y2: number): number;
	getHeadingFromVector2D(dx: number, dy: number): number;
	setBit(offset: integer): integer;
	clearBit(offset: integer): integer;
	getHashKey(string: string): integer;
	slerpNearQuaternion(t: number, x: number, y: number, z: number, w: number, x1: number, y1: number, z1: number, w1: number): SlerpNearQuaternionResult;
	isAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: integer, p12: boolean): boolean;
	isPositionOccupied(x: number, y: number, z: number, range: number, p4: boolean, checkVehicles: boolean, checkPeds: boolean, p7: boolean, p8: boolean, ignoreEntity: integer, p10: boolean): boolean;
	isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer): boolean;
	clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;
	clearAreaLeaveVehicleHealth(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
	clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;
	clearAngledAreaOfVehicles(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean, p12: integer): void;
	clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: integer): void;
	clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: integer): void;
	clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: integer): void;
	clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: integer): void;
	setSaveMenuActive(ignoreVehicle: boolean): void;
	setCreditsActive(toggle: boolean): void;
	haveCreditsReachedEnd(): boolean;
	terminateAllScriptsWithThisName(scriptName: string): void;
	networkSetScriptIsSafeForNetworkGame(): void;
	addHospitalRestart(x: number, y: number, z: number, p3: number, p4: integer): integer;
	disableHospitalRestart(hospitalIndex: integer, toggle: boolean): void;
	addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: integer): integer;
	disablePoliceRestart(policeIndex: integer, toggle: boolean): void;
	setRestartCustomPosition(x: number, y: number, z: number, heading: number): void;
	clearRestartCustomPosition(): void;
	pauseDeathArrestRestart(toggle: boolean): void;
	ignoreNextRestart(toggle: boolean): void;
	setFadeOutAfterDeath(toggle: boolean): void;
	setFadeOutAfterArrest(toggle: boolean): void;
	setFadeInAfterDeathArrest(toggle: boolean): void;
	setFadeInAfterLoad(toggle: boolean): void;
	registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p5: integer, p6: integer): RegisterSaveHouseResult;
	setSaveHouse(p0: integer, p1: boolean, p2: boolean): void;
	overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
	doAutoSave(): void;
	getIsAutoSaveOff(): boolean;
	isAutoSaveInProgress(): boolean;
	beginReplayStats(p0: integer, p1: integer): void;
	addReplayStatValue(value: integer): void;
	endReplayStats(): void;
	getReplayStatMissionType(): integer;
	getReplayStatCount(): integer;
	getReplayStatAtIndex(index: integer): integer;
	clearReplayStats(): void;
	isMemoryCardInUse(): boolean;
	shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: integer, p7: boolean, weaponHash: integer, ownerPed: integer, isAudible: boolean, isInvisible: boolean, speed: number): void;
	shootSingleBulletBetweenCoordsIgnoreEntity(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: integer, p7: boolean, weaponHash: integer, ownerPed: integer, isAudible: boolean, isInvisible: boolean, speed: number, entity: integer, p14: integer): void;
	shootSingleBulletBetweenCoordsIgnoreEntityNew(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: integer, p7: boolean, weaponHash: integer, ownerPed: integer, isAudible: boolean, isInvisible: boolean, speed: number, entity: integer, p14: boolean, p15: boolean, p16: boolean, p17: boolean, p18: integer, p19: integer, p20: integer): void;
	getModelDimensions(modelHash: integer): GetModelDimensionsResult;
	setFakeWantedLevel(fakeWantedLevel: integer): void;
	getFakeWantedLevel(): integer;
	isBitSet(address: integer, offset: integer): boolean;
	usingMissionCreator(toggle: boolean): void;
	allowMissionCreatorWarp(toggle: boolean): void;
	setMinigameInProgress(toggle: boolean): void;
	isMinigameInProgress(): boolean;
	isThisAMinigameScript(): boolean;
	isSniperInverted(): boolean;
	shouldUseMetricMeasurements(): boolean;
	getProfileSetting(profileSetting: integer): integer;
	areStringsEqual(string1: string, string2: string): boolean;
	compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: integer): integer;
	absi(value: integer): integer;
	absf(value: number): number;
	isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
	isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: integer, ownedByPlayer: boolean): boolean;
	isProjectileTypeInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: integer, ownedByPlayer: boolean): boolean;
	isProjectileTypeWithinDistance(x: number, y: number, z: number, projectileHash: integer, radius: number, ownedByPlayer: boolean): boolean;
	getCoordsOfProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, projectileHash: integer, ownedByPlayer: boolean): Vector3Mp;
	getCoordsOfProjectileTypeWithinDistance(ped: integer, weaponHash: integer, radius: number, ownedByPlayer: boolean): GetCoordsOfProjectileTypeWithinDistanceResult;
	getProjectileNearPed(ped: integer, weaponhash: integer, p2: number, p3: number, p4: number, p5: boolean): boolean;
	isBulletInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, ownedByPlayer: boolean): boolean;
	isBulletInArea(x: number, y: number, z: number, radius: number, ownedByPlayer: boolean): boolean;
	isBulletInBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
	hasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): boolean;
	hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;
	isOrbisVersion(): boolean;
	isDurangoVersion(): boolean;
	isXbox360Version(): boolean;
	isPs3Version(): boolean;
	isPcVersion(): boolean;
	isAussieVersion(): boolean;
	isStringNull(string: string): boolean;
	isStringNullOrEmpty(string: string): boolean;
	stringToInt(string: string): integer;
	setBitsInRange(rangeStart: integer, rangeEnd: integer, p3: integer): integer;
	getBitsInRange(variable: integer, rangeStart: integer, rangeEnd: integer): integer;
	addStuntJump(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, camX: number, camY: number, camZ: number, p15: integer, p16: integer, p17: integer): integer;
	addStuntJumpAngled(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius1: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, radius2: number, camX: number, camY: number, camZ: number, p17: integer, p18: integer, p19: integer): integer;
	deleteStuntJump(p0: integer): void;
	enableStuntJumpSet(p0: integer): void;
	disableStuntJumpSet(p0: integer): void;
	setStuntJumpsCanTrigger(toggle: boolean): void;
	isStuntJumpInProgress(): boolean;
	isStuntJumpMessageShowing(): boolean;
	getNumSuccessfulStuntJumps(): integer;
	getTotalSuccessfulStuntJumps(): integer;
	cancelStuntJump(): void;
	setGamePaused(toggle: boolean): void;
	setThisScriptCanBePaused(toggle: boolean): void;
	setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
	hasButtonCombinationJustBeenEntered(hash: integer, amount: integer): boolean;
	hasCheatStringJustBeenEntered(hash: integer): boolean;
	setInstancePriorityMode(p0: integer): void;
	setInstancePriorityHint(flag: integer): void;
	isFrontendFading(): boolean;
	populateNow(): void;
	getIndexOfCurrentLevel(): integer;
	setGravityLevel(level: integer): void;
	startSaveData(p1: integer, p2: boolean): integer;
	stopSaveData(): void;
	getSizeOfSaveData(p0: boolean): integer;
	registerIntToSave(name: string): integer;
	registerInt64ToSave(name: string): integer;
	registerEnumToSave(name: string): integer;
	registerFloatToSave(name: string): integer;
	registerBoolToSave(name: string): integer;
	registerTextLabelToSave(name: string): integer;
	registerTextLabelToSave2(name: string): integer;
	startSaveStructWithSize(size: integer, structName: string): integer;
	stopSaveStruct(): void;
	startSaveArrayWithSize(size: integer, arrayName: string): integer;
	stopSaveArray(): void;
	copyMemory(size: integer): CopyMemoryResult;
	enableDispatchService(dispatchService: integer, toggle: boolean): void;
	blockDispatchServiceResourceCreation(dispatchService: integer, toggle: boolean): void;
	getNumDispatchedUnitsForPlayer(dispatchService: integer): integer;
	createIncident(dispatchService: integer, x: number, y: number, z: number, numUnits: integer, radius: number, p7: integer, p8: integer): integer;
	createIncidentWithEntity(dispatchService: integer, ped: integer, numUnits: integer, radius: number, p5: integer, p6: integer): integer;
	deleteIncident(incidentId: integer): void;
	isIncidentValid(incidentId: integer): boolean;
	setIncidentRequestedUnits(incidentId: integer, dispatchService: integer, numUnits: integer): void;
	setIncidentUnk(incidentId: integer, p1: number): void;
	findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number): Vector3Mp;
	addPopMultiplierArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number, p7: number, p8: boolean, p9: boolean): integer;
	doesPopMultiplierAreaExist(id: integer): boolean;
	removePopMultiplierArea(id: integer, p1: boolean): void;
	isPopMultiplierAreaUnk(id: integer): boolean;
	addPopMultiplierSphere(x: number, y: number, z: number, radius: number, pedMultiplier: number, vehicleMultiplier: number, p6: boolean, p7: boolean): integer;
	doesPopMultiplierSphereExist(id: integer): boolean;
	removePopMultiplierSphere(id: integer, p1: boolean): void;
	enableTennisMode(ped: integer, toggle: boolean, p2: boolean): void;
	isTennisMode(ped: integer): boolean;
	playTennisSwingAnim(ped: integer, animDict: string, animName: string, p3: number, p4: number, p5: boolean): void;
	getTennisSwingAnimComplete(ped: integer): boolean;
	playTennisDiveAnim(ped: integer, p1: integer, p2: number, p3: number, p4: number, p5: boolean): void;
	resetDispatchSpawnLocation(): void;
	setDispatchSpawnLocation(x: number, y: number, z: number): void;
	resetDispatchIdealSpawnDistance(): void;
	setDispatchIdealSpawnDistance(p0: number): void;
	resetDispatchTimeBetweenSpawnAttempts(p0: integer): void;
	setDispatchTimeBetweenSpawnAttempts(p0: integer, p1: number): void;
	setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: integer, p1: number): void;
	addDispatchSpawnBlockingAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): integer;
	addDispatchSpawnBlockingArea(x1: number, y1: number, x2: number, y2: number): integer;
	removeDispatchSpawnBlockingArea(p0: integer): void;
	resetDispatchSpawnBlockingAreas(): void;
	addTacticalAnalysisPoint(x: number, y: number, z: number): void;
	clearTacticalAnalysisPoints(): void;
	setRiotModeEnabled(toggle: boolean): void;
	displayOnscreenKeyboardWithLongerInitialString(p0: integer, windowTitle: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: integer): integer;
	displayOnscreenKeyboard(p0: integer, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: integer): void;
	updateOnscreenKeyboard(): integer;
	getOnscreenKeyboardResult(): string;
	cancelOnscreenKeyboard(): void;
	nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(p0: integer): void;
	removeStealthKill(hash: integer, p1: boolean): void;
	setExplosiveAmmoThisFrame(player: integer): void;
	setFireAmmoThisFrame(player: integer): void;
	setExplosiveMeleeThisFrame(player: integer): void;
	setSuperJumpThisFrame(player: integer): void;
	setBeastModeActive(player: integer): void;
	setForcePlayerToJump(player: integer): void;
	areProfileSettingsValid(): boolean;
	forceGameStatePlaying(): void;
	scriptRaceInit(p0: integer, p1: integer, p2: integer, p3: integer): void;
	scriptRaceShutdown(): void;
	scriptRaceGetPlayerSplitTime(player: integer): ScriptRaceGetPlayerSplitTimeResult;
	startBenchmarkRecording(): void;
	stopBenchmarkRecording(): void;
	resetBenchmarkRecording(): void;
	saveBenchmarkRecording(): void;
	uiIsSingleplayerPauseMenuActive(): boolean;
	landingMenuIsActive(): boolean;
	isCommandLineBenchmarkValueSet(): boolean;
	getBenchmarkIterationsFromCommandLine(): integer;
	getBenchmarkPassFromCommandLine(): integer;
	restartGame(): void;
	forceSocialClubUpdate(): void;
	hasAsyncInstallFinished(): boolean;
	cleanupAsyncInstall(): void;
	isInPowerSavingMode(): boolean;
	getPowerSavingModeDuration(): integer;
	setPlayerIsInAnimalForm(toggle: boolean): void;
	getIsPlayerInAnimalForm(): boolean;
	setPlayerRockstarEditorDisabled(toggle: boolean): void;

	unk: GameMiscUnk;
}

interface GameMobile extends GameMobileLegacy {
	createPhone(phoneType: integer): void;
	destroyPhone(): void;
	setPhoneScale(scale: number): void;
	setPhoneRotation(rotX: number, rotY: number, rotZ: number, p3: integer): void;
	getPhoneRotation(p1: integer): Vector3Mp;
	setPhonePosition(posX: number, posY: number, posZ: number): void;
	getPhonePosition(): Vector3Mp;
	scriptIsMovingPhoneOffscreen(toggle: boolean): void;
	canPhoneBeSeenOnScreen(): boolean;
	setPhoneUnk(toggle: boolean): void;
	cellCamMoveFinger(direction: integer): void;
	cellCamSetLean(toggle: boolean): void;
	cellCamActivate(p0: boolean, p1: boolean): void;
	cellCamDisableThisFrame(toggle: boolean): void;
	cellCamIsCharVisibleNoFaceCheck(entity: integer): boolean;
	getPhoneRenderId(): integer;

	unk: GameMobileUnk;
}

interface GameNetwork extends GameNetworkLegacy {
	getOnlineVersion(): string;
	isSignedIn(): boolean;
	isSignedOnline(): boolean;
	hasValidRosCredentials(): boolean;
	isCloudAvailable(): boolean;
	hasSocialClubAccount(): boolean;
	areSocialClubPoliciesCurrent(): boolean;
	isHost(): boolean;
	haveOnlinePrivileges(): boolean;
	hasAgeRestrictedProfile(): boolean;
	haveUserContentPrivileges(p0: integer): boolean;
	haveCommunicationPrivileges(p0: integer, player: integer): boolean;
	checkUserContentPrivileges(p0: integer, p1: integer, p2: boolean): boolean;
	checkCommunicationPrivileges(p0: integer, p1: integer, p2: boolean): boolean;
	hasSocialNetworkingSharingPriv(): boolean;
	getAgeGroup(): integer;
	haveOnlinePrivilege2(): boolean;
	canBail(): boolean;
	bail(p0: integer, p1: integer, p2: integer): void;
	transitionTrack(hash: integer, p1: integer, p2: integer, state: integer, p4: integer): void;
	canAccessMultiplayer(): integer;
	isMultiplayerDisabled(): boolean;
	canEnterMultiplayer(): boolean;
	sessionEnter(p0: integer, p1: integer, p2: integer, maxPlayers: integer, p4: integer, p5: integer): integer;
	sessionFriendMatchmaking(p0: integer, p1: integer, maxPlayers: integer, p3: boolean): boolean;
	sessionCrewMatchmaking(p0: integer, p1: integer, p2: integer, maxPlayers: integer, p4: boolean): boolean;
	sessionActivityQuickmatch(p0: integer, p1: integer, p2: integer, p3: integer): boolean;
	sessionHost(p0: integer, maxPlayers: integer, p2: boolean): boolean;
	sessionHostClosed(p0: integer, maxPlayers: integer): boolean;
	sessionHostFriendsOnly(p0: integer, maxPlayers: integer): boolean;
	sessionIsClosedFriends(): boolean;
	sessionIsClosedCrew(): boolean;
	sessionIsSolo(): boolean;
	sessionIsPrivate(): boolean;
	sessionEnd(p0: boolean, p1: boolean): boolean;
	sessionKickPlayer(player: integer): void;
	sessionGetKickVote(player: integer): boolean;
	joinPreviouslyFailedSession(): boolean;
	joinPreviouslyFailedTransition(): boolean;
	sessionSetMatchmakingGroup(matchmakingGroup: integer): void;
	sessionSetMatchmakingGroupMax(playerType: integer, playerCount: integer): void;
	sessionGetMatchmakingGroupFree(p0: integer): integer;
	sessionSetMatchmakingPropertyId(p0: boolean): void;
	sessionSetMatchmakingMentalState(p0: integer): void;
	sessionValidateJoin(p0: boolean): void;
	addFollowers(p1: integer): integer;
	clearFollowers(): void;
	getGlobalMultiplayerClock(): NetworkGetGlobalMultiplayerClockResult;
	getTargetingMode(): integer;
	findGamersInCrew(p0: integer): boolean;
	findMatchedGamers(p0: integer, p1: number, p2: number, p3: number): boolean;
	isFindingGamers(): boolean;
	getNumFoundGamers(): integer;
	getFoundGamer(p1: integer): integer;
	clearFoundGamers(): void;
	getGamerStatus(): integer;
	getGamerStatusResult(p1: integer): integer;
	clearGetGamerStatus(): void;
	sessionJoinInvite(): void;
	sessionCancelInvite(): void;
	sessionForceCancelInvite(): void;
	hasPendingInvite(): boolean;
	acceptInvite(): boolean;
	sessionWasInvited(): boolean;
	sessionGetInviter(): integer;
	suppressInvite(toggle: boolean): void;
	blockInvites(toggle: boolean): void;
	blockJoinQueueInvites(toggle: boolean): void;
	blockKickedPlayers(p0: boolean): void;
	setScriptReadyForEvents(toggle: boolean): void;
	isOfflineInvitePending(): boolean;
	sessionHostSinglePlayer(p0: integer): void;
	sessionLeaveSinglePlayer(): void;
	isGameInProgress(): boolean;
	isSessionActive(): boolean;
	isInSession(): boolean;
	isSessionStarted(): boolean;
	isSessionBusy(): boolean;
	canSessionEnd(): boolean;
	sessionMarkVisible(toggle: boolean): void;
	sessionIsVisible(): boolean;
	sessionBlockJoinRequests(toggle: boolean): void;
	sessionChangeSlots(p0: integer, p1: boolean): void;
	sessionGetPrivateSlots(): integer;
	sessionVoiceHost(): void;
	sessionVoiceLeave(): void;
	sessionVoiceConnectToPlayer(): integer;
	sessionVoiceRespondToRequest(p0: boolean, p1: integer): void;
	sessionVoiceSetTimeout(timeout: integer): void;
	sessionIsInVoiceSession(): boolean;
	sessionIsVoiceSessionBusy(): boolean;
	sendTextMessage(message: string): integer;
	setActivitySpectator(toggle: boolean): void;
	isActivitySpectator(): boolean;
	setActivitySpectatorMax(maxSpectators: integer): void;
	getActivityPlayerNum(p0: boolean): integer;
	isActivitySpectatorFromHandle(): integer;
	hostTransition(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: boolean, p6: boolean, p7: integer, p8: integer, p9: integer): boolean;
	doTransitionQuickmatch(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): boolean;
	doTransitionQuickmatchAsync(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): boolean;
	doTransitionQuickmatchWithGroup(p0: integer, p1: integer, p2: integer, p3: integer, p5: integer, p6: integer, p7: integer): integer;
	joinGroupActivity(): integer;
	isTransitionClosedFriends(): boolean;
	isTransitionClosedCrew(): boolean;
	isTransitionSolo(): boolean;
	isTransitionPrivate(): boolean;
	setTransitionCreatorHandle(): integer;
	clearTransitionCreatorHandle(): void;
	inviteGamersToTransition(p1: integer): integer;
	setGamerInvitedToTransition(): integer;
	leaveTransition(): boolean;
	launchTransition(): boolean;
	bailTransition(p0: integer, p1: integer, p2: integer): void;
	doTransitionToGame(p0: boolean, maxPlayers: integer): boolean;
	doTransitionToNewGame(p0: boolean, maxPlayers: integer, p2: boolean): boolean;
	doTransitionToFreemode(p1: integer, p2: boolean, players: integer, p4: boolean): integer;
	doTransitionToNewFreemode(players: integer, p3: boolean, p4: boolean, p5: boolean): NetworkDoTransitionToNewFreemodeResult;
	isTransitionToGame(): boolean;
	getTransitionMembers(dataCount: integer): NetworkGetTransitionMembersResult;
	applyTransitionParameter(p0: integer, p1: integer): void;
	applyTransitionParameterString(p0: integer, string: string, p2: boolean): void;
	sendTransitionGamerInstruction(p1: string, p2: integer, p3: integer, p4: boolean): integer;
	markTransitionGamerAsFullyJoined(): integer;
	isTransitionHost(): boolean;
	isTransitionHostFromHandle(): integer;
	getTransitionHost(): integer;
	isInTransition(): boolean;
	isTransitionStarted(): boolean;
	isTransitionBusy(): boolean;
	isTransitionMatchmaking(): boolean;
	openTransitionMatchmaking(): void;
	closeTransitionMatchmaking(): void;
	isTransitionOpenToMatchmaking(): boolean;
	setTransitionVisibilityLock(p0: boolean, p1: boolean): void;
	isTransitionVisibilityLocked(): boolean;
	setTransitionActivityId(p0: integer): void;
	changeTransitionSlots(p0: integer, p1: integer): void;
	hasPlayerStartedTransition(player: integer): boolean;
	areTransitionDetailsValid(p0: integer): boolean;
	joinTransition(player: integer): boolean;
	hasInvitedGamerToTransition(): integer;
	isActivitySession(): boolean;
	sendInviteViaPresence(p2: integer, p3: integer): NetworkSendInviteViaPresenceResult;
	sendPresenceTransitionInvite(p2: integer, p3: integer): NetworkSendPresenceTransitionInviteResult;
	getNumPresenceInvites(): integer;
	acceptPresenceInvite(p0: integer): boolean;
	removePresenceInvite(p0: integer): boolean;
	getPresenceInviteId(p0: integer): integer;
	getPresenceInviteInviter(p0: integer): integer;
	getPresenceInviteHandle(p0: integer): integer;
	getPresenceInviteSessionId(p0: integer): integer;
	getPresenceInviteContentId(p0: integer): integer;
	getPresenceInvitePlaylistLength(p0: integer): integer;
	getPresenceInvitePlaylistCurrent(p0: integer): integer;
	getPresenceInviteFromAdmin(p0: integer): boolean;
	getPresenceInviteIsTournament(p0: integer): boolean;
	hasFollowInvite(): boolean;
	actionFollowInvite(): integer;
	clearFollowInvite(): integer;
	removeTransitionInvite(): integer;
	removeAllTransitionInvite(): void;
	inviteGamers(p1: integer): NetworkInviteGamersResult;
	hasInvitedGamer(): integer;
	getCurrentlySelectedGamerHandleFromInviteMenu(): integer;
	setCurrentlySelectedGamerHandleFromInviteMenu(): integer;
	setInviteOnCallForInviteMenu(): integer;
	checkDataManagerSucceededForHandle(p0: integer): integer;
	filloutPmPlayerList(p1: integer, p2: integer): integer;
	filloutPmPlayerListWithNames(p2: integer, p3: integer): FilloutPmPlayerListWithNamesResult;
	refreshPlayerListStats(p0: integer): boolean;
	setCurrentDataManagerHandle(): integer;
	isInPlatformParty(): boolean;
	getPlatformPartyUnk(): integer;
	getPlatformPartyMembers(dataSize: integer): NetworkGetPlatformPartyMembersResult;
	isInPlatformPartyChat(): boolean;
	isChattingInPlatformParty(): integer;
	seedRandomNumberGenerator(seed: integer): void;
	getRandomInt(): integer;
	getRandomIntRanged(rangeStart: integer, rangeEnd: integer): integer;
	playerIsCheater(): boolean;
	playerGetCheaterReason(): integer;
	playerIsBadsport(): boolean;
	triggerScriptCrcCheckOnPlayer(player: integer, p1: integer, scriptHash: integer): boolean;
	remoteCheatDetected(player: integer, a: integer, b: integer): boolean;
	badSportPlayerLeftDetected(event: integer, amountReceived: integer): integer;
	applyPedScarData(ped: integer, p1: integer): void;
	setThisScriptIsNetworkScript(lobbySize: integer, p1: boolean, playerId: integer): void;
	isThisScriptMarked(p0: integer, p1: boolean, p2: integer): boolean;
	getThisScriptIsNetworkScript(): boolean;
	getMaxNumParticipants(): integer;
	getNumParticipants(): integer;
	getScriptStatus(): integer;
	registerHostBroadcastVariables(numVars: integer): integer;
	registerPlayerBroadcastVariables(numVars: integer): integer;
	finishBroadcastingData(): void;
	hasReceivedHostBroadcastData(): boolean;
	getPlayerIndex(player: integer): integer;
	getParticipantIndex(index: integer): integer;
	getPlayerIndexFromPed(ped: integer): integer;
	getNumConnectedPlayers(): integer;
	isPlayerConnected(player: integer): boolean;
	getTotalNumPlayers(): integer;
	isParticipantActive(p0: integer): boolean;
	isPlayerActive(player: integer): boolean;
	isPlayerAParticipant(player: integer): boolean;
	isHostOfThisScript(): boolean;
	getHostOfThisScript(): integer;
	getHostOfScript(scriptName: string, p1: integer, p2: integer): integer;
	setMissionFinished(): void;
	isScriptActive(scriptName: string, player: integer, p2: boolean, p3: integer): boolean;
	isScriptActiveByHash(scriptHash: integer, p1: integer, p2: boolean, p3: integer): boolean;
	getNumScriptParticipants(p1: integer, p2: integer): NetworkGetNumScriptParticipantsResult;
	isPlayerAParticipantOnScript(player1: integer, script: string, player2: integer): boolean;
	participantId(): integer;
	participantIdToInt(): integer;
	getDestroyerOfNetworkId(netId: integer): NetworkGetDestroyerOfNetworkIdResult;
	getDestroyerOfEntity(p0: integer, p1: integer): integer;
	getEntityKillerOfPlayer(player: integer): NetworkGetEntityKillerOfPlayerResult;
	resurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: boolean, changetime: boolean, p6: integer): void;
	setLocalPlayerInvincibleTime(time: integer): void;
	isLocalPlayerInvincible(): boolean;
	disableInvincibleFlashing(player: integer, toggle: boolean): void;
	setLocalPlayerSyncLookAt(toggle: boolean): void;
	hasEntityBeenRegisteredWithThisThread(entity: integer): boolean;
	getNetworkIdFromEntity(entity: integer): integer;
	getEntityFromNetworkId(netId: integer): integer;
	getEntityIsNetworked(entity: integer): boolean;
	getEntityIsLocal(entity: integer): boolean;
	registerEntityAsNetworked(entity: integer): void;
	unregisterNetworkedEntity(entity: integer): void;
	doesNetworkIdExist(netId: integer): boolean;
	doesEntityExistWithNetworkId(netId: integer): boolean;
	requestControlOfNetworkId(netId: integer): boolean;
	hasControlOfNetworkId(netId: integer): boolean;
	requestControlOfEntity(entity: integer): boolean;
	requestControlOfDoor(doorID: integer): boolean;
	hasControlOfEntity(entity: integer): boolean;
	hasControlOfPickup(pickup: integer): boolean;
	hasControlOfDoor(doorHash: integer): boolean;
	isDoorNetworked(doorHash: integer): boolean;
	vehToNet(vehicle: integer): integer;
	pedToNet(ped: integer): integer;
	objToNet(object: integer): integer;
	netToVeh(netHandle: integer): integer;
	netToPed(netHandle: integer): integer;
	netToObj(netHandle: integer): integer;
	netToEnt(netHandle: integer): integer;
	getLocalHandle(bufferSize: integer): integer;
	handleFromUserId(userId: string, bufferSize: integer): integer;
	handleFromMemberId(memberId: string, bufferSize: integer): integer;
	handleFromPlayer(player: integer, bufferSize: integer): integer;
	hashFromPlayerHandle(player: integer): integer;
	hashFromGamerHandle(): NetworkHashFromGamerHandleResult;
	handleFromFriend(friendIndex: integer, bufferSize: integer): integer;
	gamertagFromHandleStart(): integer;
	gamertagFromHandlePending(): boolean;
	gamertagFromHandleSucceeded(): boolean;
	getGamertagFromHandle(): NetworkGetGamertagFromHandleResult;
	getDisplaynamesFromHandles(p0: integer, p1: integer, p2: integer): integer;
	areHandlesTheSame(): NetworkAreHandlesTheSameResult;
	isHandleValid(bufferSize: integer): integer;
	getPlayerFromGamerHandle(): NetworkGetPlayerFromGamerHandleResult;
	memberIdFromGamerHandle(): NetworkMemberIdFromGamerHandleResult;
	isGamerInMySession(): integer;
	showProfileUi(): integer;
	playerGetName(player: integer): string;
	playerGetUserid(player: integer): NetworkPlayerGetUseridResult;
	playerIsRockstarDev(player: integer): boolean;
	playerIndexIsCheater(player: integer): boolean;
	getEntityNetScriptId(entity: integer): integer;
	isInactiveProfile(): integer;
	getMaxFriends(): integer;
	getFriendCount(): integer;
	getFriendName(friendIndex: integer): string;
	getFriendNameFromIndex(friendIndex: integer): string;
	isFriendOnline(name: string): boolean;
	isFriendHandleOnline(): integer;
	isFriendInSameTitle(friendName: string): boolean;
	isFriendInMultiplayer(friendName: string): boolean;
	isFriend(): integer;
	isPendingFriend(p0: integer): integer;
	isAddingFriend(): integer;
	addFriend(message: string): integer;
	isFriendIndexOnline(friendIndex: integer): boolean;
	setPlayerIsPassive(toggle: boolean): void;
	getPlayerOwnsWaypoint(player: integer): boolean;
	canSetWaypoint(): boolean;
	hasHeadset(): boolean;
	isLocalTalking(): boolean;
	gamerHasHeadset(): integer;
	isGamerTalking(): integer;
	canCommunicateWithGamer2(): integer;
	canCommunicateWithGamer(): integer;
	isGamerMutedByMe(): integer;
	amIMutedByGamer(): integer;
	isGamerBlockedByMe(): integer;
	amIBlockedByGamer(): integer;
	canViewGamerUserContent(): integer;
	hasViewGamerUserContentResult(): integer;
	canPlayMultiplayerWithGamer(): integer;
	canGamerPlayMultiplayerWithMe(): integer;
	isPlayerTalking(player: integer): boolean;
	playerHasHeadset(player: integer): boolean;
	isPlayerMutedByMe(player: integer): boolean;
	amIMutedByPlayer(player: integer): boolean;
	isPlayerBlockedByMe(player: integer): boolean;
	amIBlockedByPlayer(player: integer): boolean;
	getPlayerLoudness(player: integer): number;
	setTalkerProximity(value: number): void;
	getTalkerProximity(): number;
	setVoiceActive(toggle: boolean): void;
	overrideTransitionChat(p0: boolean): void;
	setTeamOnlyChat(toggle: boolean): void;
	overrideTeamRestrictions(team: integer, toggle: boolean): void;
	setOverrideSpectatorMode(toggle: boolean): void;
	setNoSpectatorChat(toggle: boolean): void;
	overrideChatRestrictions(player: integer, toggle: boolean): void;
	overrideSendRestrictions(player: integer, toggle: boolean): void;
	overrideSendRestrictionsAll(toggle: boolean): void;
	overrideReceiveRestrictions(player: integer, toggle: boolean): void;
	overrideReceiveRestrictionsAll(toggle: boolean): void;
	setVoiceChannel(channel: integer): void;
	clearVoiceChannel(): void;
	applyVoiceProximityOverride(x: number, y: number, z: number): void;
	clearVoiceProximityOverride(): void;
	isTextChatActive(): boolean;
	shutdownAndLaunchSinglePlayerGame(): void;
	shutdownAndLoadMostRecentSave(): boolean;
	setFriendlyFireOption(toggle: boolean): void;
	setRichPresence(p0: integer, p1: integer, p2: integer, p3: integer): void;
	setRichPresenceString(p0: integer, textLabel: string): void;
	getTimeoutTime(): integer;
	respawnCoords(player: integer, x: number, y: number, z: number, p4: boolean, p5: boolean): void;
	removeAllStickyBombsFromEntity(entity: integer, ped: integer): void;
	clanServiceIsValid(): boolean;
	clanPlayerIsActive(): integer;
	clanPlayerGetDesc(bufferSize: integer): NetworkClanPlayerGetDescResult;
	clanIsRockstarClan(bufferSize: integer): integer;
	clanGetUiFormattedTag(bufferSize: integer): NetworkClanGetUiFormattedTagResult;
	clanGetLocalMembershipsCount(): integer;
	clanGetMembershipDesc(p1: integer): integer;
	clanDownloadMembership(): integer;
	clanDownloadMembershipPending(): integer;
	isClanMembershipFinishedDownloading(): boolean;
	clanRemoteMembershipsAreInCache(): integer;
	clanGetMembershipCount(): NetworkClanGetMembershipCountResult;
	clanGetMembershipValid(p1: integer): integer;
	clanGetMembership(p2: integer): NetworkClanGetMembershipResult;
	clanJoin(clanDesc: integer): boolean;
	clanAnimation(animDict: string, animName: string): boolean;
	clanGetEmblemTxdName(): NetworkClanGetEmblemTxdNameResult;
	clanRequestEmblem(p0: integer): boolean;
	clanIsEmblemReady(p0: integer): integer;
	clanReleaseEmblem(p0: integer): void;
	getPrimaryClanDataClear(): integer;
	getPrimaryClanDataCancel(): void;
	getPrimaryClanDataStart(p1: integer): integer;
	getPrimaryClanDataPending(): integer;
	getPrimaryClanDataSuccess(): integer;
	getPrimaryClanDataNew(): NetworkGetPrimaryClanDataNewResult;
	setIdCanMigrate(netId: integer, toggle: boolean): void;
	setIdExistsOnAllMachines(netId: integer, toggle: boolean): void;
	setIdAlwaysExistsForPlayer(netId: integer, player: integer, toggle: boolean): void;
	setEntityCanBlend(entity: integer, toggle: boolean): void;
	setEntityInvisibleToNetwork(entity: integer, toggle: boolean): void;
	setIdVisibleInCutscene(netId: integer, p1: boolean, p2: boolean): void;
	setCutsceneEntities(toggle: boolean): void;
	isIdOwnedByParticipant(netId: integer): boolean;
	setLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;
	setLocalPlayerInvisibleLocally(p0: boolean): void;
	setLocalPlayerVisibleLocally(p0: boolean): void;
	setPlayerInvisibleLocally(player: integer, toggle: boolean): void;
	setPlayerVisibleLocally(player: integer, toggle: boolean): void;
	fadeOutLocalPlayer(p0: boolean): void;
	fadeOutEntity(entity: integer, normal: boolean, slow: boolean): void;
	fadeInEntity(entity: integer, state: boolean, p2: integer): void;
	isPlayerFading(player: integer): boolean;
	isEntityFading(entity: integer): boolean;
	isPlayerInCutscene(player: integer): boolean;
	setEntityVisibleInCutscene(p0: integer, p1: boolean, p2: boolean): void;
	setEntityLocallyInvisible(entity: integer): void;
	setEntityLocallyVisible(entity: integer): void;
	isDamageTrackerActiveOnId(netID: integer): boolean;
	activateDamageTrackerOnId(netID: integer, toggle: boolean): void;
	isDamageTrackerActiveOnPlayer(player: integer): boolean;
	activateDamageTrackerOnPlayer(player: integer, toggle: boolean): void;
	isSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): boolean;
	isSphereVisibleToPlayer(p0: integer, p1: number, p2: number, p3: number, p4: number): boolean;
	reserveMissionObjects(amount: integer): void;
	reserveMissionPeds(amount: integer): void;
	reserveMissionVehicles(amount: integer): void;
	reserveLocalObjects(amount: integer): void;
	reserveLocalPeds(amount: integer): void;
	reserveLocalVehicles(amount: integer): void;
	canRegisterMissionObjects(amount: integer): boolean;
	canRegisterMissionPeds(amount: integer): boolean;
	canRegisterMissionVehicles(amount: integer): boolean;
	canRegisterMissionPickups(amount: integer): boolean;
	canRegisterMissionEntities(ped_amt: integer, vehicle_amt: integer, object_amt: integer, pickup_amt: integer): boolean;
	getNumReservedMissionObjects(p0: boolean, p1: integer): integer;
	getNumReservedMissionPeds(p0: boolean, p1: integer): integer;
	getNumReservedMissionVehicles(p0: boolean, p1: integer): integer;
	getNumCreatedMissionObjects(p0: boolean): integer;
	getNumCreatedMissionPeds(p0: boolean): integer;
	getNumCreatedMissionVehicles(p0: boolean): integer;
	getMaxNumObjects(): integer;
	getMaxNumPeds(): integer;
	getMaxNumVehicles(): integer;
	getMaxNumPickups(): integer;
	getTime(): integer;
	getTimeAccurate(): integer;
	hasTimeStarted(): boolean;
	getTimeOffset(timeA: integer, timeB: integer): integer;
	isTimeLessThan(timeA: integer, timeB: integer): boolean;
	isTimeMoreThan(timeA: integer, timeB: integer): boolean;
	isTimeEqualTo(timeA: integer, timeB: integer): boolean;
	getTimeDifference(timeA: integer, timeB: integer): integer;
	getTimeAsString(time: integer): string;
	getCloudTimeAsString(): string;
	getCloudTimeAsInt(): integer;
	convertPosixTime(posixTime: integer): integer;
	setInSpectatorMode(toggle: boolean, playerPed: integer): void;
	setInSpectatorModeExtended(toggle: boolean, playerPed: integer, p2: boolean): void;
	setInFreeCamMode(toggle: boolean): void;
	setChoiceMigrateOptions(toggle: boolean, player: integer): void;
	isInSpectatorMode(): boolean;
	setInMpCutscene(p0: boolean, p1: boolean): void;
	isInMpCutscene(): boolean;
	isPlayerInMpCutscene(player: integer): boolean;
	setVehicleRespotTimer(netId: integer, time: integer, p2: integer, p3: integer): void;
	setVehicleAsGhost(vehicle: integer, toggle: boolean): void;
	setLocalPlayerAsGhost(toggle: boolean, p1: boolean): void;
	isEntityGhostedToLocalPlayer(entity: integer): boolean;
	setRelationshipToPlayer(player: integer, p1: boolean): void;
	setGhostedEntityAlpha(alpha: integer): void;
	resetGhostedEntityAlpha(): void;
	setEntityGhostedWithOwner(entity: integer, p1: boolean): void;
	usePlayerColourInsteadOfTeamColour(toggle: boolean): void;
	createSynchronisedScene(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, rotationOrder: integer, useOcclusionPortal: boolean, looped: boolean, p9: number, animTime: number, p11: number): integer;
	addPedToSynchronisedScene(ped: integer, netScene: integer, animDict: string, animnName: string, speed: number, speedMultiplier: number, duration: integer, flag: integer, playbackRate: number, p9: integer): void;
	addEntityToSynchronisedScene(entity: integer, netScene: integer, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: integer): void;
	forceLocalUseOfSyncedSceneCamera(netScene: integer, animDict: string, animName: string): void;
	attachSynchronisedSceneToEntity(netScene: integer, entity: integer, bone: integer): void;
	startSynchronisedScene(netScene: integer): void;
	stopSynchronisedScene(netScene: integer): void;
	convertSynchronisedSceneToSynchronizedScene(netScene: integer): integer;
	startRespawnSearchForPlayer(player: integer, x: number, y: number, z: number, radius: number, p5: number, p6: number, p7: number, flags: integer): boolean;
	startRespawnSearchInAngledAreaForPlayer(player: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p8: number, p9: number, p10: number, flags: integer): boolean;
	queryRespawnResults(): NetworkQueryRespawnResultsResult;
	cancelRespawnSearch(): void;
	getRespawnResult(randomInt: integer): NetworkGetRespawnResultResult;
	getRespawnResultFlags(p0: integer): integer;
	startSoloTutorialSession(): void;
	endTutorialSession(): void;
	isInTutorialSession(): boolean;
	isTutorialSessionChangePending(): boolean;
	getPlayerTutorialSessionInstance(player: integer): integer;
	isPlayerEqualToIndex(player: integer, index: integer): boolean;
	concealPlayer(player: integer, toggle: boolean, p2: boolean): void;
	isPlayerConcealed(player: integer): boolean;
	concealEntity(entity: integer, toggle: boolean): void;
	isEntityConcealed(entity: integer): boolean;
	overrideClockTime(hours: integer, minutes: integer, seconds: integer): void;
	overrideClockMillisecondsPerGameMinute(ms: integer): void;
	clearClockTimeOverride(): void;
	isClockTimeOverridden(): boolean;
	addEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): integer;
	addEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): integer;
	addEntityDisplayedBoundaries(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): integer;
	removeEntityArea(p0: integer): boolean;
	entityAreaDoesExist(areaHandle: integer): boolean;
	entityAreaIsOccupied(areaHandle: integer): boolean;
	setNetworkIdDynamic(netID: integer, toggle: boolean): void;
	requestCloudBackgroundScripts(): boolean;
	isCloudBackgroundScriptRequestPending(): boolean;
	requestCloudTunables(): void;
	isTunableCloudRequestPending(): boolean;
	getTunableCloudCrc(): integer;
	doesTunableExist(tunableContext: string, tunableName: string): boolean;
	accessTunableInt(tunableContext: string, tunableName: string): integer;
	accessTunableFloat(tunableContext: string, tunableName: string): number;
	accessTunableBool(tunableContext: string, tunableName: string): boolean;
	doesTunableExistHash(tunableContext: integer, tunableName: integer): boolean;
	allocateTunablesRegistrationDataMap(): boolean;
	accessTunableIntHash(tunableContext: integer, tunableName: integer): integer;
	registerTunableIntHash(contextHash: integer, nameHash: integer): integer;
	accessTunableFloatHash(tunableContext: integer, tunableName: integer): number;
	registerTunableFloatHash(contextHash: integer, nameHash: integer): number;
	accessTunableBoolHash(tunableContext: integer, tunableName: integer): boolean;
	registerTunableBoolHash(contextHash: integer, nameHash: integer): boolean;
	tryAccessTunableBoolHash(tunableContext: integer, tunableName: integer, defaultValue: boolean): boolean;
	getContentModifierListId(contentHash: integer): integer;
	resetBodyTracker(): void;
	getNumBodyTrackers(): integer;
	setVehicleWheelsDestructible(entity: integer, toggle: boolean): void;
	explodeVehicle(vehicle: integer, isAudible: boolean, isInvisible: boolean, p3: boolean): void;
	overrideCoordsAndHeading(entity: integer, x: number, y: number, z: number, heading: number): void;
	disableProximityMigration(netID: integer): void;
	setPropertyId(id: integer): void;
	clearPropertyId(): void;
	cacheLocalPlayerHeadBlendData(): void;
	hasCachedPlayerHeadBlendData(player: integer): boolean;
	applyCachedPlayerHeadBlendData(ped: integer, player: integer): boolean;
	getNumCommerceItems(): integer;
	isCommerceDataValid(): boolean;
	getCommerceItemId(index: integer): string;
	getCommerceItemName(index: integer): string;
	getCommerceProductPrice(index: integer): string;
	getCommerceItemNumCats(index: integer): integer;
	getCommerceItemCat(index: integer, index2: integer): string;
	openCommerceStore(p0: string, p1: string, p2: integer): void;
	isCommerceStoreOpen(): boolean;
	setStoreEnabled(toggle: boolean): void;
	requestCommerceItemImage(index: integer): boolean;
	releaseAllCommerceItemImages(): void;
	getCommerceItemTexturename(index: integer): string;
	isStoreAvailableToUser(): boolean;
	cloudDeleteMemberFile(p0: string): integer;
	cloudHasRequestCompleted(handle: integer): boolean;
	cloudDidRequestSucceed(handle: integer): boolean;
	cloudCheckAvailability(): void;
	cloudIsCheckingAvailability(): boolean;
	cloudGetAvailabilityCheckResult(): boolean;
	clearLaunchParams(): void;
	ugcCopyContent(): UgcCopyContentResult;
	ugcHasCreateFinished(): boolean;
	ugcGetCreateResult(): integer;
	ugcGetCreateContentId(): integer;
	ugcClearCreateResult(): void;
	ugcQueryMyContent(p0: integer, p1: integer, p3: integer, p4: integer, p5: integer): integer;
	ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;
	ugcQueryByContentIds(count: integer, latestVersion: boolean, contentTypeName: string): integer;
	ugcQueryRecentlyCreatedContent(offset: integer, count: integer, contentTypeName: string, p3: integer): boolean;
	ugcGetBookmarkedContent(p0: integer, p1: integer): UgcGetBookmarkedContentResult;
	ugcGetMyContent(p0: integer, p1: integer): UgcGetMyContentResult;
	ugcGetFriendContent(p0: integer, p1: integer): UgcGetFriendContentResult;
	ugcGetCrewContent(p0: integer, p1: integer, p2: integer): UgcGetCrewContentResult;
	ugcGetGetByCategory(p0: integer, p1: integer, p2: integer): UgcGetGetByCategoryResult;
	setBalanceAddMachine(contentId: string, contentTypeName: string): boolean;
	setBalanceAddMachines(dataCount: integer, contentTypeName: string): integer;
	ugcCancelQuery(): void;
	ugcIsGetting(): boolean;
	ugcHasGetFinished(): boolean;
	ugcDidGetSucceed(): integer;
	ugcGetQueryResult(): integer;
	ugcGetContentNum(): integer;
	ugcGetContentTotal(): integer;
	ugcGetContentHash(): integer;
	ugcClearQueryResults(): void;
	ugcGetContentUserId(p0: integer): string;
	ugcGetContentUserName(p0: integer): integer;
	ugcGetContentCategory(p0: integer): integer;
	ugcGetContentId(p0: integer): string;
	ugcGetRootContentId(p0: integer): string;
	ugcGetContentName(p0: integer): integer;
	ugcGetContentDescriptionHash(p0: integer): integer;
	ugcGetContentPath(p0: integer, p1: integer): string;
	ugcGetContentUpdatedDate(p0: integer): integer;
	ugcGetContentFileVersion(p0: integer, p1: integer): integer;
	ugcGetContentLanguage(p0: integer): integer;
	ugcGetContentIsPublished(p0: integer): boolean;
	ugcGetContentIsVerified(p0: integer): boolean;
	ugcGetContentRating(p0: integer, p1: integer): integer;
	ugcGetContentRatingCount(p0: integer, p1: integer): integer;
	ugcGetContentRatingPositiveCount(p0: integer, p1: integer): integer;
	ugcGetContentRatingNegativeCount(p0: integer, p1: integer): integer;
	ugcGetContentHasPlayerRecord(p0: integer): boolean;
	ugcGetContentHasPlayerBookmarked(p0: integer): boolean;
	ugcRequestContentDataFromIndex(p0: integer, p1: integer): integer;
	ugcRequestContentDataFromParams(contentTypeName: string, contentId: string, p2: integer, p3: integer, p4: integer): integer;
	ugcRequestCachedDescription(p0: integer): integer;
	ugcGetCachedDescription(p0: integer, p1: integer): integer;
	ugcPublish(contentId: string, baseContentId: string, contentTypeName: string): boolean;
	ugcSetBookmarked(contentId: string, bookmarked: boolean, contentTypeName: string): boolean;
	ugcSetDeleted(p1: boolean): UgcSetDeletedResult;
	ugcHasModifyFinished(): boolean;
	ugcGetModifyResult(): integer;
	ugcClearModifyResult(): void;
	ugcGetCreatorNum(): integer;
	ugcPoliciesMakePrivate(p0: integer): boolean;
	ugcClearOfflineQuery(): void;
	ugcSetQueryDataFromOffline(p0: boolean): void;
	ugcIsLanguageSupported(p0: integer): boolean;
	facebookSetHeistComplete(heistName: string, cashEarned: integer, xpEarned: integer): boolean;
	facebookSetCreateCharacterComplete(): boolean;
	facebookSetMilestoneComplete(milestoneId: integer): boolean;
	facebookIsSendingData(): boolean;
	facebookDoUnkCheck(): boolean;
	facebookIsAvailable(): boolean;
	textureDownloadRequest(FilePath: string, Name: string, p3: boolean): TextureDownloadRequestResult;
	titleTextureDownloadRequest(FilePath: string, Name: string, p2: boolean): integer;
	ugcTextureDownloadRequest(p1: integer, p2: integer, p3: integer, p5: boolean): UgcTextureDownloadRequestResult;
	textureDownloadRelease(p0: integer): void;
	textureDownloadHasFailed(p0: integer): boolean;
	textureDownloadGetName(p0: integer): string;
	getStatusOfTextureDownload(p0: integer): integer;
	shouldShowConnectivityTroubleshooting(): boolean;
	isCableConnected(): boolean;
	getRosPrivilege9(): boolean;
	haveRosSocialClubPriv(): boolean;
	haveRosBannedPriv(): boolean;
	haveRosCreateTicketPriv(): boolean;
	haveRosMultiplayerPriv(): boolean;
	haveRosLeaderboardWritePriv(): boolean;
	hasRosPrivilege(index: integer): boolean;
	hasRosPrivilegeEndDate(privilege: integer): NetworkHasRosPrivilegeEndDateResult;
	getRosPrivilege24(): boolean;
	getRosPrivilege25(): boolean;
	startUserContentPermissionsCheck(): NetworkStartUserContentPermissionsCheckResult;
	hasGameBeenAltered(): boolean;
	updatePlayerScars(): void;
	disableLeaveRemotePedBehind(toggle: boolean): void;
	allowLocalEntityAttachment(entity: integer, toggle: boolean): void;
	getNumUnackedForPlayer(player: integer): integer;
	getUnreliableResendCountForPlayer(player: integer): integer;
	getOldestResendCountForPlayer(player: integer): integer;
	reportMyself(): void;
	getPlayerCoords(player: integer): Vector3Mp;

	unk: GameNetworkUnk;
}

interface GameObject extends GameObjectLegacy {
	create(modelHash: integer, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): integer;
	createNoOffset(modelHash: integer, x: number, y: number, z: number, isNetwork: boolean, bScriptHostObj: boolean, dynamic: boolean): integer;
	delete(object: integer): integer;
	placeOnGroundProperly(object: integer): boolean;
	placeOnGroundProperly2(object: integer): boolean;
	slide(object: integer, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
	setTargettable(object: integer, targettable: boolean): void;
	setSomething(object: integer, p1: boolean): void;
	getClosestOfType(x: number, y: number, z: number, radius: number, modelHash: integer, isMission: boolean, p6: boolean, p7: boolean): integer;
	hasBeenBroken(object: integer, p1: integer): boolean;
	hasClosestOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: integer, p5: integer): boolean;
	hasClosestOfTypeBeenCompletelyDestroyed(x: number, y: number, z: number, radius: number, modelHash: integer, p5: boolean): boolean;
	getOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): Vector3Mp;
	getCoordsAndRotationOfClosestOfType(x: number, y: number, z: number, radius: number, modelHash: integer, rotationOrder: integer): GetCoordsAndRotationOfClosestObjectOfTypeResult;
	setStateOfClosestDoorOfType(type: integer, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;
	getStateOfClosestDoorOfType(type: integer, x: number, y: number, z: number): GetStateOfClosestDoorOfTypeResult;
	doorControl(modelHash: integer, x: number, y: number, z: number, locked: boolean, xRotMult: number, yRotMult: number, zRotMult: number): void;
	addDoorToSystem(doorHash: integer, modelHash: integer, x: number, y: number, z: number, p5: boolean, scriptDoor: boolean, isLocal: boolean): void;
	removeDoorFromSystem(doorHash: integer): void;
	doorSystemSetDoorState(doorHash: integer, state: integer, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemGetDoorState(doorHash: integer): integer;
	doorSystemGetDoorPendingState(doorHash: integer): integer;
	doorSystemSetAutomaticRate(doorHash: integer, rate: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemSetAutomaticDistance(doorHash: integer, distance: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemSetOpenRatio(doorHash: integer, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemGetOpenRatio(doorHash: integer): number;
	doorSystemSetSpringRemoved(doorHash: integer, removed: boolean, requestDoor: boolean, forceUpdate: boolean): void;
	doorSystemSetHoldOpen(doorHash: integer, toggle: boolean): void;
	isDoorRegisteredWithSystem(doorHash: integer): boolean;
	isDoorClosed(doorHash: integer): boolean;
	doorSystemGetIsPhysicsLoaded(p0: integer): boolean;
	doorSystemFindExistingDoor(x: number, y: number, z: number, modelHash: integer): integer;
	isGarageEmpty(garageHash: integer, p1: boolean, p2: integer): boolean;
	isPlayerEntirelyInsideGarage(garageHash: integer, player: integer, p2: number, p3: integer): boolean;
	isPlayerPartiallyInsideGarage(garageHash: integer, player: integer, p2: integer): boolean;
	areEntitiesEntirelyInsideGarage(garageHash: integer, p1: boolean, p2: boolean, p3: boolean, p4: integer): boolean;
	isAnyEntityEntirelyInsideGarage(garageHash: integer, p1: boolean, p2: boolean, p3: boolean, p4: integer): boolean;
	isEntirelyInsideGarage(garageHash: integer, entity: integer, p2: number, p3: integer): boolean;
	isPartiallyInsideGarage(garageHash: integer, entity: integer, p2: integer): boolean;
	clearGarageArea(garageHash: integer, isNetwork: boolean): void;
	enableSavingInGarage(garageHash: integer, toggle: boolean): void;
	doesOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: integer, p5: boolean): boolean;
	isPointInAngledArea(xPos: number, yPos: number, zPos: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, debug: boolean, includeZ: boolean): boolean;
	setAllowLowLodBuoyancy(object: integer, toggle: boolean): void;
	setPhysicsParams(object: integer, weight: number, p2: number, p3: number, p4: number, p5: number, gravity: number, p7: number, p8: number, p9: number, p10: number, buoyancy: number): void;
	getFragmentDamageHealth(p0: integer, p1: boolean): number;
	setActivatePhysicsAsSoonAsItIsUnfrozen(object: integer, toggle: boolean): void;
	isAnyNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
	isNearPoint(objectHash: integer, x: number, y: number, z: number, range: number): boolean;
	removeHighDetailModel(object: integer): void;
	breakFragmentChild(p0: integer, p1: integer, p2: boolean): void;
	trackVisibility(object: integer): void;
	isVisible(object: integer): boolean;
	setUnkGlobalBoolRelatedToDamage(value: boolean): void;
	setCreateWeaponLightSource(object: integer, toggle: boolean): void;
	getRayfireMap(x: number, y: number, z: number, radius: number, name: string): integer;
	setStateOfRayfireMap(object: integer, state: integer): void;
	getStateOfRayfireMap(object: integer): integer;
	doesRayfireMapExist(object: integer): boolean;
	getRayfireMapAnimPhase(object: integer): number;
	createPickup(pickupHash: integer, posX: number, posY: number, posZ: number, p4: integer, value: integer, p6: boolean, modelHash: integer): integer;
	createPickupRotate(pickupHash: integer, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: integer, amount: integer, p9: integer, p10: boolean, modelHash: integer): integer;
	createAmbientPickup(pickupHash: integer, posX: number, posY: number, posZ: number, flags: integer, value: integer, modelHash: integer, p7: boolean, p8: boolean): integer;
	createPortablePickup(pickupHash: integer, x: number, y: number, z: number, placeOnGround: boolean, modelHash: integer): integer;
	createPortablePickup2(pickupHash: integer, x: number, y: number, z: number, placeOnGround: boolean, modelHash: integer): integer;
	attachPortablePickupToPed(pickupObject: integer, ped: integer): void;
	detachPortablePickupFromPed(pickupObject: integer): void;
	hidePickup(pickupObject: integer, toggle: boolean): void;
	setMaxNumPortablePickupsCarriedByPlayer(modelHash: integer, p1: integer): void;
	setLocalPlayerCanCollectPortablePickups(p0: boolean): void;
	getSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): Vector3Mp;
	getPickupCoords(pickup: integer): Vector3Mp;
	removeAllPickupsOfType(pickupHash: integer): void;
	hasPickupBeenCollected(pickup: integer): boolean;
	removePickup(pickup: integer): void;
	createMoneyPickups(x: number, y: number, z: number, value: integer, amount: integer, model: integer): void;
	doesPickupExist(pickup: integer): boolean;
	doesPickupExist(pickupObject: integer): boolean;
	getPickup(pickup: integer): integer;
	isAPortablePickup(object: integer): boolean;
	isAPickup(object: integer): boolean;
	doesPickupOfTypeExistInArea(pickupHash: integer, x: number, y: number, z: number, radius: number): boolean;
	setPickupRegenerationTime(pickup: integer, duration: integer): void;
	forcePickupRegenerate(p0: integer): void;
	toggleUsePickupsForPlayer(player: integer, pickupHash: integer, toggle: boolean): void;
	setLocalPlayerCanUsePickupsWithThisModel(modelHash: integer, toggle: boolean): void;
	setTeamPickup(object: integer, p1: integer, p2: boolean): void;
	preventCollectionOfPortablePickup(object: integer, p1: boolean, p2: boolean): void;
	setPickupGenerationRangeMultiplier(multiplier: number): void;
	getPickupGenerationRangeMultiplier(): number;
	setPickupUncollectable(p0: integer, p1: integer): void;
	setPickupHiddenWhenUncollectable(p0: integer, p1: integer): void;
	renderFakePickupGlow(x: number, y: number, z: number, colorIndex: integer): void;
	getWeaponTypeFromPickupType(pickupHash: integer): integer;
	getPickupHashFromWeapon(weaponHash: integer): integer;
	isPickupWeaponValid(object: integer): boolean;
	getTextureVariation(object: integer): integer;
	setTextureVariation(object: integer, textureVariation: integer): void;
	setTextureVariationOfClosestOfType(x: number, y: number, z: number, radius: number, modelHash: integer, textureVariation: integer): boolean;
	setLightColor(object: integer, p1: boolean, r: integer, g: integer, b: integer): integer;
	setStuntPropSpeedup(object: integer, p1: integer): void;
	setStuntPropDuration(object: integer, duration: number): void;
	getPickupHash(pickupHash: integer): integer;
	setForceThisFrame(x: number, y: number, z: number, p3: number): void;
	markForDeletion(object: integer): void;
	setEnableArenaPropPhysics(object: integer, toggle: boolean, p2: integer): void;
	setEnableArenaPropPhysicsOnPed(object: integer, toggle: boolean, p2: integer, ped: integer): void;
	getIsArenaPropPhysicsDisabled(object: integer, p1: integer): boolean;

	unk: GameObjectUnk;
}

interface GamePad extends GamePadLegacy {
	isControlEnabled(padIndex: integer, control: integer): boolean;
	isControlPressed(padIndex: integer, control: integer): boolean;
	isControlReleased(padIndex: integer, control: integer): boolean;
	isControlJustPressed(padIndex: integer, control: integer): boolean;
	isControlJustReleased(padIndex: integer, control: integer): boolean;
	getControlValue(padIndex: integer, control: integer): integer;
	getControlNormal(padIndex: integer, control: integer): number;
	getControlUnboundNormal(padIndex: integer, control: integer): number;
	setControlNormal(padIndex: integer, control: integer, amount: number): boolean;
	isDisabledControlPressed(padIndex: integer, control: integer): boolean;
	isDisabledControlReleased(padIndex: integer, control: integer): boolean;
	isDisabledControlJustPressed(padIndex: integer, control: integer): boolean;
	isDisabledControlJustReleased(padIndex: integer, control: integer): boolean;
	getDisabledControlNormal(padIndex: integer, control: integer): number;
	getDisabledControlUnboundNormal(padIndex: integer, control: integer): number;
	isUsingKeyboard(padIndex: integer): boolean;
	isUsingKeyboard2(padIndex: integer): boolean;
	setCursorLocation(x: number, y: number): boolean;
	getControlInstructionalButton(padIndex: integer, control: integer, p2: boolean): string;
	getControlGroupInstructionalButton(padIndex: integer, controlGroup: integer, p2: boolean): string;
	setControlLightEffectColor(padIndex: integer, red: integer, green: integer, blue: integer): void;
	setShake(padIndex: integer, duration: integer, frequency: integer): void;
	stopShake(padIndex: integer): void;
	isLookInverted(): boolean;
	getLocalPlayerAimState(): integer;
	getLocalPlayerAimState2(): integer;
	getIsUsingAlternateDriveby(): boolean;
	getAllowMovementWhileZoomed(): boolean;
	setPlayerShakesWhenControllerDisabled(toggle: boolean): void;
	setInputExclusive(padIndex: integer, control: integer): void;
	disableControlAction(padIndex: integer, control: integer, disable: boolean): void;
	enableControlAction(padIndex: integer, control: integer, enable: boolean): void;
	disableAllControlActions(padIndex: integer): void;
	enableAllControlActions(padIndex: integer): void;
	switchToInputMappingScheme(name: string): boolean;
	switchToInputMappingScheme2(name: string): boolean;
	resetInputMappingScheme(): void;

	unk: GamePadUnk;
}

interface GamePathfind extends GamePathfindLegacy {
	setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, nodeEnabled: boolean, unknown2: boolean): void;
	setRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, unknown1: boolean, unknown2: boolean, unknown3: boolean): void;
	setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean, p7: integer): void;
	getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: integer): Vector3Mp;
	getClosestVehicleNode(x: number, y: number, z: number, nodeType: integer, p5: number, p6: number): Vector3Mp;
	getClosestMajorVehicleNode(x: number, y: number, z: number, unknown1: number, unknown2: integer): Vector3Mp;
	getClosestVehicleNodeWithHeading(x: number, y: number, z: number, nodeType: integer, p6: number, p7: integer): GetClosestVehicleNodeWithHeadingResult;
	getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: integer, unknown1: integer, unknown2: integer, unknown3: integer): Vector3Mp;
	getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: integer, nodetype: integer, p5: number, p6: number): integer;
	getNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: integer, unknown2: integer, unknown3: number, unknown4: number): GetNthClosestVehicleNodeWithHeadingResult;
	getNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: integer, p6: integer, p7: number, p8: number): GetNthClosestVehicleNodeIdWithHeadingResult;
	getNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: integer, nodetype: integer, p10: number, p11: integer): GetNthClosestVehicleNodeFavourDirectionResult;
	getVehicleNodeProperties(x: number, y: number, z: number): GetVehicleNodePropertiesResult;
	isVehicleNodeIdValid(vehicleNodeId: integer): boolean;
	getVehicleNodePosition(nodeId: integer): Vector3Mp;
	getVehicleNodeIsGpsAllowed(nodeID: integer): boolean;
	getVehicleNodeIsSwitchedOff(nodeID: integer): boolean;
	getClosestRoad(x: number, y: number, z: number, p3: number, p4: integer, p10: boolean): GetClosestRoadResult;
	setAllPathsCacheBoundingstruct(toggle: boolean): void;
	setAiGlobalPathNodesType(type: integer): void;
	areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;
	requestPathsPreferAccurateBoundingstruct(x1: number, y1: number, x2: number, y2: number): boolean;
	setRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer): void;
	setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number, p7: integer): void;
	setAmbientPedRangeMultiplierThisFrame(multiplier: number): void;
	setPedPathsBackToOriginal(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean): GetRandomVehicleNodeResult;
	getStreetNameAtCoord(x: number, y: number, z: number): GetStreetNameAtCoordResult;
	generateDirectionsToCoord(x: number, y: number, z: number, p3: boolean): GenerateDirectionsToCoordResult;
	setIgnoreNoGpsFlag(toggle: boolean): void;
	setIgnoreSecondaryRouteNodes(toggle: boolean): void;
	setGpsDisabledZone(x1: number, y1: number, z1: number, x2: number, y2: number, z3: number): void;
	getGpsBlipRouteLength(): integer;
	getGpsBlipRouteFound(): boolean;
	getRoadSidePointWithHeading(x: number, y: number, z: number, heading: number): Vector3Mp;
	getPointOnRoadSide(x: number, y: number, z: number, p3: integer): Vector3Mp;
	isPointOnRoad(x: number, y: number, z: number, vehicle: integer): boolean;
	getNextGpsDisabledZoneIndex(): integer;
	setGpsDisabledZoneAtIndex(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, index: integer): void;
	clearGpsDisabledZoneAtIndex(index: integer): void;
	addNavmeshRequiredRegion(x: number, y: number, radius: number): void;
	removeNavmeshRequiredRegions(): void;
	isNavmeshRequiredRegionOwnedByAnyThread(): boolean;
	disableNavmeshInArea(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	areAllNavmeshRegionsLoaded(): boolean;
	isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: integer): integer;
	updateNavmeshBlockingObject(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: integer): void;
	removeNavmeshBlockingObject(p0: integer): void;
	doesNavmeshBlockingObjectExist(p0: integer): boolean;
	getHeightmapTopZForPosition(x: number, y: number): number;
	getHeightmapTopZForArea(x1: number, y1: number, x2: number, y2: number): number;
	getHeightmapBottomZForPosition(x: number, y: number): number;
	getHeightmapBottomZForArea(x1: number, y1: number, x2: number, y2: number): number;
	calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

	unk: GamePathfindUnk;
}

interface GamePed extends GamePedLegacy {
	create(pedType: integer, modelHash: integer, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): integer;
	delete(ped: integer): integer;
	clone(ped: integer, heading: number, isNetwork: boolean, bScriptHostPed: boolean): integer;
	cloneEx(ped: integer, heading: number, isNetwork: boolean, bScriptHostPed: boolean, p4: integer): integer;
	cloneToTarget(ped: integer, targetPed: integer): void;
	cloneToTargetEx(ped: integer, targetPed: integer, p2: integer): void;
	isInVehicle(ped: integer, vehicle: integer, atGetIn: boolean): boolean;
	isInModel(ped: integer, modelHash: integer): boolean;
	isInAnyVehicle(ped: integer, atGetIn: boolean): boolean;
	isCopInArea3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isInjured(ped: integer): boolean;
	isHurt(ped: integer): boolean;
	isFatallyInjured(ped: integer): boolean;
	isDeadOrDying(ped: integer, p1: boolean): boolean;
	isConversationDead(ped: integer): boolean;
	isAimingFromCover(ped: integer): boolean;
	isReloading(ped: integer): boolean;
	isAPlayer(ped: integer): boolean;
	createInsideVehicle(vehicle: integer, pedType: integer, modelHash: integer, seat: integer, isNetwork: boolean, bScriptHostPed: boolean): integer;
	setDesiredHeading(ped: integer, heading: number): void;
	freezeCameraRotation(ped: integer): void;
	isFacingPed(ped: integer, otherPed: integer, angle: number): boolean;
	isInMeleeCombat(ped: integer): boolean;
	isStopped(ped: integer): boolean;
	isShootingInArea(ped: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
	isAnyShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
	isShooting(ped: integer): boolean;
	setAccuracy(ped: integer, accuracy: integer): void;
	getAccuracy(ped: integer): integer;
	isModel(ped: integer, modelHash: integer): boolean;
	explodeHead(ped: integer, weaponHash: integer): void;
	removeElegantly(): integer;
	addArmourTo(ped: integer, amount: integer): void;
	setArmour(ped: integer, amount: integer): void;
	setIntoVehicle(ped: integer, vehicle: integer, seatIndex: integer): void;
	setAllowVehiclesOverride(ped: integer, toggle: boolean): void;
	canCreateRandom(unk: boolean): boolean;
	createRandom(posX: number, posY: number, posZ: number): integer;
	createRandomAsDriver(vehicle: integer, returnHandle: boolean): integer;
	canCreateRandomDriver(): boolean;
	canCreateRandomBikeRider(): boolean;
	setMoveAnimsBlendOut(ped: integer): void;
	setCanBeDraggedOut(ped: integer, toggle: boolean): void;
	isMale(ped: integer): boolean;
	isHuman(ped: integer): boolean;
	getVehicleIsIn(ped: integer, includeLastVehicle: boolean): integer;
	resetLastVehicle(ped: integer): void;
	setDensityMultiplierThisFrame(multiplier: number): void;
	setScenarioDensityMultiplierThisFrame(p0: number, p1: number): void;
	setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
	setNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	clearNonCreationArea(): void;
	instantlyFillPopulation(): void;
	isOnMount(ped: integer): boolean;
	getMount(ped: integer): integer;
	isOnVehicle(ped: integer): boolean;
	isOnSpecificVehicle(ped: integer, vehicle: integer): boolean;
	setMoney(ped: integer, amount: integer): void;
	getMoney(ped: integer): integer;
	setAmbientPedsDropMoney(p0: boolean): void;
	setSuffersCriticalHits(ped: integer, toggle: boolean): void;
	isSittingInVehicle(ped: integer, vehicle: integer): boolean;
	isSittingInAnyVehicle(ped: integer): boolean;
	isOnFoot(ped: integer): boolean;
	isOnAnyBike(ped: integer): boolean;
	isPlantingBomb(ped: integer): boolean;
	getDeadPickupCoords(ped: integer, p1: number, p2: number): Vector3Mp;
	isInAnyBoat(ped: integer): boolean;
	isInAnySub(ped: integer): boolean;
	isInAnyHeli(ped: integer): boolean;
	isInAnyPlane(ped: integer): boolean;
	isInFlyingVehicle(ped: integer): boolean;
	setDiesInWater(ped: integer, toggle: boolean): void;
	setDiesInSinkingVehicle(ped: integer, toggle: boolean): void;
	getArmour(ped: integer): integer;
	setStayInVehicleWhenJacked(ped: integer, toggle: boolean): void;
	setCanBeShotInVehicle(ped: integer, toggle: boolean): void;
	getLastDamageBone(ped: integer): integer;
	clearLastDamageBone(ped: integer): void;
	setAiWeaponDamageModifier(value: number): void;
	resetAiWeaponDamageModifier(): void;
	setAiMeleeWeaponDamageModifier(modifier: number): void;
	resetAiMeleeWeaponDamageModifier(): void;
	setCanBeTargetted(ped: integer, toggle: boolean): void;
	setCanBeTargettedByTeam(ped: integer, team: integer, toggle: boolean): void;
	setCanBeTargettedByPlayer(ped: integer, player: integer, toggle: boolean): void;
	isInAnyPoliceVehicle(ped: integer): boolean;
	forceToOpenParachute(ped: integer): void;
	isInParachuteFreeFall(ped: integer): boolean;
	isFalling(ped: integer): boolean;
	isJumping(ped: integer): boolean;
	isClimbing(ped: integer): boolean;
	isVaulting(ped: integer): boolean;
	isDiving(ped: integer): boolean;
	isJumpingOutOfVehicle(ped: integer): boolean;
	isOpeningADoor(ped: integer): boolean;
	getParachuteState(ped: integer): integer;
	getParachuteLandingType(ped: integer): integer;
	setParachuteTintIndex(ped: integer, tintIndex: integer): void;
	getParachuteTintIndex(ped: integer): integer;
	setReserveParachuteTintIndex(ped: integer, p1: integer): void;
	createParachuteBagObject(ped: integer, p1: boolean, p2: boolean): integer;
	setDucking(ped: integer, toggle: boolean): void;
	isDucking(ped: integer): boolean;
	isInAnyTaxi(ped: integer): boolean;
	setIdRange(ped: integer, value: number): void;
	setHighlyPerceptive(ped: integer, toggle: boolean): void;
	setSeeingRange(ped: integer, value: number): void;
	setHearingRange(ped: integer, value: number): void;
	setVisualFieldMinAngle(ped: integer, value: number): void;
	setVisualFieldMaxAngle(ped: integer, value: number): void;
	setVisualFieldMinElevationAngle(ped: integer, angle: number): void;
	setVisualFieldMaxElevationAngle(ped: integer, angle: number): void;
	setVisualFieldPeripheralRange(ped: integer, range: number): void;
	setVisualFieldCenterAngle(ped: integer, angle: number): void;
	getVisualFieldCenterAngle(ped: integer): number;
	setStealthMovement(ped: integer, p1: boolean, action: string): void;
	getStealthMovement(ped: integer): boolean;
	createGroup(unused: integer): integer;
	setAsGroupLeader(ped: integer, groupId: integer): void;
	setAsGroupMember(ped: integer, groupId: integer): void;
	setCanTeleportToGroupLeader(pedHandle: integer, groupHandle: integer, toggle: boolean): void;
	removeGroup(groupId: integer): void;
	removeFromGroup(ped: integer): void;
	isGroupMember(ped: integer, groupId: integer): boolean;
	isHangingOnToVehicle(ped: integer): boolean;
	setGroupSeparationRange(groupHandle: integer, separationRange: number): void;
	setMinGroundTimeForStungun(ped: integer, ms: integer): void;
	isProne(ped: integer): boolean;
	isInCombat(ped: integer, target: integer): boolean;
	canInCombatSeeTarget(ped: integer, target: integer): boolean;
	isDoingDriveby(ped: integer): boolean;
	isJacking(ped: integer): boolean;
	isBeingJacked(ped: integer): boolean;
	isBeingStunned(ped: integer, p1: integer): boolean;
	getPedsJacker(ped: integer): integer;
	getJackTarget(ped: integer): integer;
	isFleeing(ped: integer): boolean;
	isInCover(ped: integer, exceptUseWeapon: boolean): boolean;
	isInCoverFacingLeft(ped: integer): boolean;
	isInHighCover(ped: integer): boolean;
	isGoingIntoCover(ped: integer): boolean;
	setPinnedDown(ped: integer, pinned: boolean, i: integer): integer;
	getSeatIsTryingToEnter(ped: integer): integer;
	getVehicleIsTryingToEnter(ped: integer): integer;
	getSourceOfDeath(ped: integer): integer;
	getCauseOfDeath(ped: integer): integer;
	getTimeOfDeath(ped: integer): integer;
	setRelationshipGroupDefaultHash(ped: integer, hash: integer): void;
	setRelationshipGroupHash(ped: integer, hash: integer): void;
	setRelationshipBetweenGroups(relationship: integer, group1: integer, group2: integer): void;
	clearRelationshipBetweenGroups(relationship: integer, group1: integer, group2: integer): void;
	addRelationshipGroup(name: string): integer;
	removeRelationshipGroup(groupHash: integer): void;
	doesRelationshipGroupExist(groupHash: integer): boolean;
	getRelationshipBetweenS(ped1: integer, ped2: integer): integer;
	getRelationshipGroupDefaultHash(ped: integer): integer;
	getRelationshipGroupHash(ped: integer): integer;
	getRelationshipBetweenGroups(group1: integer, group2: integer): integer;
	setRelationshipGroupDontAffectWantedLevel(group: integer, p1: boolean): void;
	setCanBeTargetedWithoutLos(ped: integer, toggle: boolean): void;
	setToInformRespectedFriends(ped: integer, radius: number, maxFriends: integer): void;
	isRespondingToEvent(ped: integer, event: integer): boolean;
	getEventData(ped: integer, eventType: integer): integer;
	setFiringPattern(ped: integer, patternHash: integer): void;
	setShootRate(ped: integer, shootRate: integer): void;
	setCombatFloat(ped: integer, combatType: integer, p2: number): void;
	getCombatFloat(ped: integer, p1: integer): number;
	getGroupSize(groupID: integer): GetGroupSizeResult;
	doesGroupExist(groupId: integer): boolean;
	getGroupIndex(ped: integer): integer;
	isInGroup(ped: integer): boolean;
	getPlayerIsFollowing(ped: integer): integer;
	setGroupFormation(groupId: integer, formationType: integer): void;
	setGroupFormationSpacing(groupId: integer, p1: number, p2: number, p3: number): void;
	resetGroupFormationDefaultSpacing(groupHandle: integer): void;
	getVehicleIsUsing(ped: integer): integer;
	getVehicleIsEntering(ped: integer): integer;
	setGravity(ped: integer, toggle: boolean): void;
	applyDamageTo(ped: integer, damageAmount: integer, p2: boolean, p3: integer): void;
	getTimeOfLastWeaponDamage(ped: integer, weaponHash: integer): integer;
	setAllowedToDuck(ped: integer, toggle: boolean): void;
	setNeverLeavesGroup(ped: integer, toggle: boolean): void;
	getType(ped: integer): integer;
	setAsCop(ped: integer, toggle: boolean): void;
	setMaxHealth(ped: integer, value: integer): void;
	getMaxHealth(ped: integer): integer;
	setMaxTimeInWater(ped: integer, value: number): void;
	setMaxTimeUnderwater(ped: integer, value: number): void;
	setVehicleForcedSeatUsage(ped: integer, vehicle: integer, seatIndex: integer, flags: integer, p4: integer): void;
	clearAllVehicleForcedSeatUsage(ped: integer): void;
	setCanBeKnockedOffVehicle(ped: integer, state: integer): void;
	canKnockOffVehicle(ped: integer): boolean;
	knockOffVehicle(ped: integer): void;
	setCoordsNoGang(ped: integer, posX: number, posY: number, posZ: number): void;
	getAsGroupMember(groupID: integer, memberNumber: integer): integer;
	getAsGroupLeader(groupID: integer): integer;
	setKeepTask(ped: integer, toggle: boolean): void;
	isSwimming(ped: integer): boolean;
	isSwimmingUnderWater(ped: integer): boolean;
	setCoordsKeepVehicle(ped: integer, posX: number, posY: number, posZ: number): void;
	setDiesInVehicle(ped: integer, toggle: boolean): void;
	setCreateRandomCops(toggle: boolean): void;
	setCreateRandomCopsNotOnScenarios(toggle: boolean): void;
	setCreateRandomCopsOnScenarios(toggle: boolean): void;
	canCreateRandomCops(): boolean;
	setAsEnemy(ped: integer, toggle: boolean): void;
	setCanSmashGlass(ped: integer, p1: boolean, p2: boolean): void;
	isInAnyTrain(ped: integer): boolean;
	isGettingIntoAVehicle(ped: integer): boolean;
	isTryingToEnterALockedVehicle(ped: integer): boolean;
	setEnableHandcuffs(ped: integer, toggle: boolean): void;
	setEnableBoundAnkles(ped: integer, toggle: boolean): void;
	setEnableScuba(ped: integer, toggle: boolean): void;
	setCanAttackFriendly(ped: integer, toggle: boolean, p2: boolean): void;
	getAlertness(ped: integer): integer;
	setAlertness(ped: integer, value: integer): void;
	setGetOutUpsideDownVehicle(ped: integer, toggle: boolean): void;
	setMovementClipset(ped: integer, clipSet: string, p2: number): void;
	resetMovementClipset(ped: integer, p1: number): void;
	setStrafeClipset(ped: integer, clipSet: string): void;
	resetStrafeClipset(ped: integer): void;
	setWeaponMovementClipset(ped: integer, clipSet: string): void;
	resetWeaponMovementClipset(ped: integer): void;
	setDriveByClipsetOverride(ped: integer, clipset: string): void;
	clearDriveByClipsetOverride(ped: integer): void;
	setCoverClipsetOverride(ped: integer, p1: string): void;
	clearCoverClipsetOverride(ped: integer): void;
	setInVehicleContext(ped: integer, context: integer): void;
	resetInVehicleContext(ped: integer): void;
	isScriptedScenarioUsingConditionalAnim(ped: integer, animDict: string, anim: string): boolean;
	setAlternateWalkAnim(ped: integer, animDict: string, animName: string, p3: number, p4: boolean): void;
	clearAlternateWalkAnim(ped: integer, p1: number): void;
	setAlternateMovementAnim(ped: integer, stance: integer, animDictionary: string, animationName: string, p4: number, p5: boolean): void;
	clearAlternateMovementAnim(ped: integer, stance: integer, p2: number): void;
	setGestureGroup(ped: integer, animGroupGesture: string): void;
	getAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: integer): Vector3Mp;
	getAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: integer): Vector3Mp;
	getDrawableVariation(ped: integer, componentId: integer): integer;
	getNumberOfDrawableVariations(ped: integer, componentId: integer): integer;
	getTextureVariation(ped: integer, componentId: integer): integer;
	getNumberOfTextureVariations(ped: integer, componentId: integer, drawableId: integer): integer;
	getNumberOfPropDrawableVariations(ped: integer, propId: integer): integer;
	getNumberOfPropTextureVariations(ped: integer, propId: integer, drawableId: integer): integer;
	getPaletteVariation(ped: integer, componentId: integer): integer;
	isComponentVariationValid(ped: integer, componentId: integer, drawableId: integer, textureId: integer): boolean;
	setComponentVariation(ped: integer, componentId: integer, drawableId: integer, textureId: integer, paletteId: integer): void;
	setRandomComponentVariation(ped: integer, p1: integer): void;
	setRandomProps(ped: integer): void;
	setDefaultComponentVariation(ped: integer): void;
	setBlendFromParents(ped: integer, p1: integer, p2: integer, p3: number, p4: number): void;
	setHeadBlendData(ped: integer, shapeFirstID: integer, shapeSecondID: integer, shapeThirdID: integer, skinFirstID: integer, skinSecondID: integer, skinThirdID: integer, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;
	getHeadBlendData(ped: integer): integer;
	updateHeadBlendData(ped: integer, shapeMix: number, skinMix: number, thirdMix: number): void;
	setEyeColor(ped: integer, index: integer): void;
	getEyeColor(ped: integer): integer;
	setHeadOverlay(ped: integer, overlayID: integer, index: integer, opacity: number): void;
	getHeadOverlayValue(ped: integer, overlayID: integer): integer;
	getHeadOverlayNum(overlayID: integer): integer;
	setHeadOverlayColor(ped: integer, overlayID: integer, colorType: integer, colorID: integer, secondColorID: integer): void;
	setHairColor(ped: integer, colorID: integer, highlightColorID: integer): void;
	getNumHairColors(): integer;
	getNumMakeupColors(): integer;
	getHairRgbColor(hairColorIndex: integer): GetPedHairRgbColorResult;
	getMakeupRgbColor(makeupColorIndex: integer): GetPedMakeupRgbColorResult;
	isHairColorValid2(colorId: integer): boolean;
	isLipstickColorValid2(colorId: integer): boolean;
	isBlushColorValid2(colorId: integer): boolean;
	isHairColorValid(colorID: integer): boolean;
	isLipstickColorValid(colorID: integer): boolean;
	isBlushColorValid(colorID: integer): boolean;
	isBodyBlemishValid(colorId: integer): boolean;
	setFaceFeature(ped: integer, index: integer, scale: number): void;
	hasHeadBlendFinished(ped: integer): boolean;
	finalizeHeadBlend(ped: integer): void;
	setHeadBlendPaletteColor(ped: integer, r: integer, g: integer, b: integer, id: integer): void;
	disableHeadBlendPaletteColor(ped: integer): void;
	getHeadBlendFirstIndex(type: integer): integer;
	getNumParentPedsOfType(type: integer): integer;
	setPreloadVariationData(ped: integer, slot: integer, drawableId: integer, textureId: integer): integer;
	hasPreloadVariationDataFinished(ped: integer): boolean;
	releasePreloadVariationData(ped: integer): void;
	setPreloadPropData(ped: integer, componentId: integer, drawableId: integer, TextureId: integer): boolean;
	hasPreloadPropDataFinished(ped: integer): boolean;
	releasePreloadPropData(ped: integer): void;
	getPropIndex(ped: integer, componentId: integer): integer;
	setPropIndex(ped: integer, componentId: integer, drawableId: integer, TextureId: integer, attach: boolean): void;
	knockOffProp(ped: integer, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;
	clearProp(ped: integer, propId: integer): void;
	clearAllProps(ped: integer): void;
	dropAmbientProp(ped: integer): void;
	getPropTextureIndex(ped: integer, componentId: integer): integer;
	clearParachutePackVariation(ped: integer): void;
	setScubaGearVariation(ped: integer): void;
	clearScubaGearVariation(ped: integer): void;
	setBlockingOfNonTemporaryEvents(ped: integer, toggle: boolean): void;
	setBoundsOrientation(ped: integer, p1: number, p2: number, p3: number, p4: number, p5: number): void;
	registerTarget(ped: integer, target: integer): void;
	registerHatedTargetsAround(ped: integer, radius: number): void;
	getRandomAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: integer): integer;
	getClosest(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: integer): integer;
	setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;
	setDriverRacingModifier(driver: integer, modifier: number): void;
	setDriverAbility(driver: integer, ability: number): void;
	setDriverAggressiveness(driver: integer, aggressiveness: number): void;
	canRagdoll(ped: integer): boolean;
	setToRagdoll(ped: integer, time1: integer, time2: integer, ragdollType: integer, p4: boolean, p5: boolean, p6: boolean): boolean;
	setToRagdollWithFall(ped: integer, time: integer, p2: integer, ragdollType: integer, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): boolean;
	setRagdollOnCollision(ped: integer, toggle: boolean): void;
	isRagdoll(ped: integer): boolean;
	isRunningRagdollTask(ped: integer): boolean;
	setRagdollForceFall(ped: integer): void;
	resetRagdollTimer(ped: integer): void;
	setCanRagdoll(ped: integer, toggle: boolean): void;
	isRunningMeleeTask(ped: integer): boolean;
	isRunningMobilePhoneTask(ped: integer): boolean;
	setRagdollBlockingFlags(ped: integer, flags: integer): void;
	clearRagdollBlockingFlags(ped: integer, flags: integer): void;
	setAngledDefensiveArea(ped: integer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;
	setSphereDefensiveArea(ped: integer, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;
	setDefensiveSphereAttachedToPed(ped: integer, target: integer, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;
	setDefensiveSphereAttachedToVehicle(ped: integer, target: integer, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;
	setDefensiveAreaAttachedToPed(ped: integer, attachPed: integer, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean, p10: boolean): void;
	setDefensiveAreaDirection(ped: integer, p1: number, p2: number, p3: number, p4: boolean): void;
	removeDefensiveArea(ped: integer, toggle: boolean): void;
	getDefensiveAreaPosition(ped: integer, p1: boolean): Vector3Mp;
	isDefensiveAreaActive(ped: integer, p1: boolean): boolean;
	setPreferredCoverSet(ped: integer, itemSet: integer): void;
	removePreferredCoverSet(ped: integer): void;
	reviveInjured(ped: integer): void;
	resurrect(ped: integer): void;
	setNameDebug(ped: integer, name: string): void;
	getExtractedDisplacement(ped: integer, worldSpace: boolean): Vector3Mp;
	setDiesWhenInjured(ped: integer, toggle: boolean): void;
	setEnableWeaponBlocking(ped: integer, toggle: boolean): void;
	resetVisibleDamage(ped: integer): void;
	applyBloodDamageByZone(ped: integer, p1: integer, p2: number, p3: number, p4: integer): void;
	applyBlood(ped: integer, boneIndex: integer, xRot: number, yRot: number, zRot: number, woundType: string): void;
	applyBloodByZone(ped: integer, p1: integer, p2: number, p3: number): integer;
	applyBloodSpecific(ped: integer, p1: integer, p2: number, p3: number, p4: number, p5: number, p6: integer, p7: number): integer;
	applyDamageDecal(ped: integer, damageZone: integer, xOffset: number, yOffset: number, heading: number, scale: number, alpha: number, variation: integer, fadeIn: boolean, decalName: string): void;
	applyDamagePack(ped: integer, damagePack: string, damage: number, mult: number): void;
	clearBloodDamage(ped: integer): void;
	clearBloodDamageByZone(ped: integer, p1: integer): void;
	hideBloodDamageByZone(ped: integer, p1: integer, p2: boolean): void;
	clearDamageDecalByZone(ped: integer, p1: integer, p2: string): void;
	getDecorationsState(ped: integer): integer;
	clearWetness(ped: integer): void;
	setWetnessHeight(ped: integer, height: number): void;
	setWetnessEnabledThisFrame(ped: integer): void;
	clearEnvDirt(ped: integer): void;
	setSweat(ped: integer, sweat: number): void;
	addDecorationFromHashes(ped: integer, collection: integer, overlay: integer): void;
	addDecorationFromHashesInCorona(ped: integer, collection: integer, overlay: integer): void;
	getDecorationZoneFromHashes(collection: integer, overlay: integer): integer;
	clearDecorations(ped: integer): void;
	clearDecorationsLeaveScars(ped: integer): void;
	wasSkeletonUpdated(ped: integer): boolean;
	getBoneCoords(ped: integer, boneId: integer, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;
	createNmMessage(startImmediately: boolean, messageId: integer): void;
	giveNmMessage(ped: integer): void;
	addScenarioBlockingArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): integer;
	removeScenarioBlockingAreas(): void;
	removeScenarioBlockingArea(p0: integer, p1: boolean): void;
	setScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: integer): void;
	doesScenarioBlockingAreaExist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
	isUsingScenario(ped: integer, scenario: string): boolean;
	isUsingAnyScenario(ped: integer): boolean;
	setPanicExitScenario(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	setShouldPlayNormalScenarioExit(ped: integer): void;
	setShouldPlayImmediateScenarioExit(ped: integer): void;
	setShouldPlayFleeScenarioExit(ped: integer, p1: integer, p2: integer, p3: integer): integer;
	playFacialAnim(ped: integer, animName: string, animDict: string): void;
	setFacialClipsetOverride(ped: integer, animDict: string): void;
	setFacialIdleAnimOverride(ped: integer, animName: string, animDict: string): void;
	clearFacialIdleAnimOverride(ped: integer): void;
	setCanPlayGestureAnims(ped: integer, toggle: boolean): void;
	setCanPlayVisemeAnims(ped: integer, toggle: boolean, p2: boolean): void;
	setCanPlayInjuredAnims(ped: integer, p1: boolean): void;
	setCanPlayAmbientAnims(ped: integer, toggle: boolean): void;
	setCanPlayAmbientBaseAnims(ped: integer, toggle: boolean): void;
	setCanArmIk(ped: integer, toggle: boolean): void;
	setCanHeadIk(ped: integer, toggle: boolean): void;
	setCanLegIk(ped: integer, toggle: boolean): void;
	setCanTorsoIk(ped: integer, toggle: boolean): void;
	setCanTorsoReactIk(ped: integer, p1: boolean): void;
	setCanUseAutoConversationLookat(ped: integer, toggle: boolean): void;
	isHeadtrackingPed(ped1: integer, ped2: integer): boolean;
	isHeadtrackingEntity(ped: integer, entity: integer): boolean;
	setPrimaryLookat(ped: integer, lookAt: integer): void;
	setClothPackageIndex(p0: integer, p1: integer): void;
	setClothProne(p0: integer, p1: integer): void;
	setConfigFlag(ped: integer, flagId: integer, value: boolean): void;
	setResetFlag(ped: integer, flagId: integer, doReset: boolean): void;
	getConfigFlag(ped: integer, flagId: integer, p2: boolean): boolean;
	getResetFlag(ped: integer, flagId: integer): boolean;
	setGroupMemberPassengerIndex(ped: integer, index: integer): void;
	setCanEvasiveDive(ped: integer, toggle: boolean): void;
	isEvasiveDiving(ped: integer): integer;
	setShootsAtCoord(ped: integer, x: number, y: number, z: number, toggle: boolean): void;
	setModelIsSuppressed(modelHash: integer, toggle: boolean): void;
	stopAnyModelBeingSuppressed(): void;
	setCanBeTargetedWhenInjured(ped: integer, toggle: boolean): void;
	setGeneratesDeadBodyEvents(ped: integer, toggle: boolean): void;
	blockDeadBodyShockingEvents(ped: integer, toggle: boolean): void;
	setCanRagdollFromPlayerImpact(ped: integer, toggle: boolean): void;
	giveHelmet(ped: integer, cannotRemove: boolean, helmetFlag: integer, textureIndex: integer): void;
	removeHelmet(ped: integer, instantly: boolean): void;
	isTakingOffHelmet(ped: integer): boolean;
	setHelmet(ped: integer, canWearHelmet: boolean): void;
	setHelmetFlag(ped: integer, helmetFlag: integer): void;
	setHelmetPropIndex(ped: integer, propIndex: integer, p2: boolean): void;
	setHelmetUnk(ped: integer, p1: boolean, p2: integer, p3: integer): void;
	isHelmetUnk(ped: integer): boolean;
	setHelmetTextureIndex(ped: integer, textureIndex: integer): void;
	isWearingHelmet(ped: integer): boolean;
	clearStoredHatProp(ped: integer): void;
	getHelmetStoredHatPropIndex(ped: integer): integer;
	getHelmetStoredHatTexIndex(ped: integer): integer;
	setToLoadCover(ped: integer, toggle: boolean): void;
	setCanCowerInCover(ped: integer, toggle: boolean): void;
	setCanPeekInCover(ped: integer, toggle: boolean): void;
	setPlaysHeadOnHornAnimWhenDiesInVehicle(ped: integer, toggle: boolean): void;
	setLegIkMode(ped: integer, mode: integer): void;
	setMotionBlur(ped: integer, toggle: boolean): void;
	setCanSwitchWeapon(ped: integer, toggle: boolean): void;
	setDiesInstantlyInWater(ped: integer, toggle: boolean): void;
	stopWeaponFiringWhenDropped(ped: integer): void;
	setScriptedAnimSeatOffset(ped: integer, p1: number): void;
	setCombatMovement(ped: integer, combatMovement: integer): void;
	getCombatMovement(ped: integer): integer;
	setCombatAbility(ped: integer, p1: integer): void;
	setCombatRange(ped: integer, p1: integer): void;
	getCombatRange(ped: integer): integer;
	setCombatAttributes(ped: integer, attributeIndex: integer, enabled: boolean): void;
	setTargetLossResponse(ped: integer, responseType: integer): void;
	isPerformingMeleeAction(ped: integer): boolean;
	isPerformingStealthKill(ped: integer): boolean;
	isPerformingDependentComboLimit(ped: integer): boolean;
	isBeingStealthKilled(ped: integer): boolean;
	getMeleeTargetFor(ped: integer): integer;
	wasKilledByStealth(ped: integer): boolean;
	wasKilledByTakedown(ped: integer): boolean;
	wasKnockedOut(ped: integer): boolean;
	setFleeAttributes(ped: integer, attributeFlags: integer, enable: boolean): void;
	setCowerHash(ped: integer, p1: string): void;
	setSteersAroundPeds(ped: integer, toggle: boolean): void;
	setSteersAroundObjects(ped: integer, toggle: boolean): void;
	setSteersAroundVehicles(ped: integer, toggle: boolean): void;
	setIncreasedAvoidanceRadius(ped: integer): void;
	setBlocksPathingWhenDead(ped: integer, toggle: boolean): void;
	isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;
	forceAiAndAnimationUpdate(ped: integer, p1: boolean, p2: boolean): void;
	isHeadingTowardsPosition(ped: integer, x: number, y: number, z: number, p4: number): boolean;
	requestVisibilityTracking(ped: integer): void;
	requestVehicleVisibilityTracking(ped: integer, p1: boolean): void;
	isTrackedVisible(ped: integer): boolean;
	isTracked(ped: integer): boolean;
	hasReceivedEvent(ped: integer, eventId: integer): boolean;
	canSeeHatedPed(ped1: integer, ped2: integer): boolean;
	getBoneIndex(ped: integer, boneId: integer): integer;
	getRagdollBoneIndex(ped: integer, bone: integer): integer;
	setEnveffScale(ped: integer, value: number): void;
	getEnveffScale(ped: integer): number;
	setEnableEnveffScale(ped: integer, toggle: boolean): void;
	setEnveffColorModulator(ped: integer, p1: integer, p2: integer, p3: integer): void;
	setEmissiveIntensity(ped: integer, intensity: number): void;
	getEmissiveIntensity(ped: integer): number;
	isShaderEffectValid(ped: integer): boolean;
	setAoBlobRendering(ped: integer, toggle: boolean): void;
	createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: integer): integer;
	createSynchronizedScene2(x: number, y: number, z: number, radius: number, object: integer): integer;
	isSynchronizedSceneRunning(sceneId: integer): boolean;
	setSynchronizedSceneOrigin(sceneID: integer, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;
	setSynchronizedScenePhase(sceneID: integer, phase: number): void;
	getSynchronizedScenePhase(sceneID: integer): number;
	setSynchronizedSceneRate(sceneID: integer, rate: number): void;
	getSynchronizedSceneRate(sceneID: integer): number;
	setSynchronizedSceneLoo(sceneID: integer, toggle: boolean): void;
	isSynchronizedSceneLoo(sceneID: integer): boolean;
	setSynchronizedSceneHoldLastFrame(sceneID: integer, toggle: boolean): void;
	isSynchronizedSceneHoldLastFrame(sceneID: integer): boolean;
	attachSynchronizedSceneToEntity(sceneID: integer, entity: integer, boneIndex: integer): void;
	detachSynchronizedScene(sceneID: integer): void;
	disposeSynchronizedScene(scene: integer): void;
	forceMotionState(ped: integer, motionStateHash: integer, p2: boolean, p3: integer, p4: boolean): boolean;
	getCurrentMovementSpeed(ped: integer): GetPedCurrentMovementSpeedResult;
	setMaxMoveBlendRatio(ped: integer, value: number): void;
	setMinMoveBlendRatio(ped: integer, value: number): void;
	setMoveRateOverride(ped: integer, value: number): void;
	getNearbyVehicles(ped: integer): GetPedNearbyVehiclesResult;
	getNearbyPeds(ped: integer, ignore: integer): GetPedNearbyPedsResult;
	haveAllStreamingRequestsCompleted(ped: integer): boolean;
	isUsingActionMode(ped: integer): boolean;
	setUsingActionMode(ped: integer, p1: boolean, p2: integer, action: string): void;
	setMovementModeOverride(ped: integer, name: string): void;
	setCapsule(ped: integer, value: number): void;
	registerHeadshot(ped: integer): integer;
	registerHeadshot3(ped: integer): integer;
	registerHeadshotTransparent(ped: integer): integer;
	unregisterHeadshot(id: integer): void;
	isHeadshotValid(id: integer): boolean;
	isHeadshotReady(id: integer): boolean;
	getHeadshotTxdString(id: integer): string;
	requestHeadshotImgUpload(id: integer): boolean;
	releaseHeadshotImgUpload(id: integer): void;
	isHeadshotImgUploadAvailable(): boolean;
	hasHeadshotImgUploadFailed(): boolean;
	hasHeadshotImgUploadSucceeded(): boolean;
	setHeatscaleOverride(ped: integer, heatScale: number): void;
	disableHeatscaleOverride(ped: integer): void;
	spawnpointsStartSearch(p0: number, p1: number, p2: number, p3: number, p4: number, interiorFlags: integer, scale: number, duration: integer): void;
	spawnpointsStartSearchInAngledArea(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, interiorFlags: integer, scale: number, duration: integer): void;
	spawnpointsCancelSearch(): void;
	spawnpointsIsSearchActive(): boolean;
	spawnpointsIsSearchComplete(): boolean;
	spawnpointsIsSearchFailed(): boolean;
	spawnpointsGetNumSearchResults(): integer;
	spawnpointsGetSearchResult(randomInt: integer): SpawnpointsGetSearchResultResult;
	spawnpointsGetSearchResultFlags(p0: integer): integer;
	setIkTarget(ped: integer, ikIndex: integer, entityLookAt: integer, boneLookAt: integer, offsetX: number, offsetY: number, offsetZ: number, p7: integer, blendInDuration: integer, blendOutDuration: integer): void;
	requestActionModeAsset(asset: string): void;
	hasActionModeAssetLoaded(asset: string): boolean;
	removeActionModeAsset(asset: string): void;
	requestStealthModeAsset(asset: string): void;
	hasStealthModeAssetLoaded(asset: string): boolean;
	removeStealthModeAsset(asset: string): void;
	setLodMultiplier(ped: integer, multiplier: number): void;
	setForceFootstepUpdate(ped: integer, toggle: boolean): void;
	setForceStepType(ped: integer, p1: boolean, type: integer, p3: integer): void;
	isAnyHostileNearPoint(ped: integer, x: number, y: number, z: number, radius: number): boolean;
	setPopControlSphereThisFrame(x: number, y: number, z: number, min: number, max: number): void;
	isSwappingWeapon(Ped: integer): boolean;
	setEnableScubaGearLight(ped: integer, toggle: boolean): void;
	isScubaGearLightEnabled(ped: integer): boolean;
	clearFacialClipsetOverride(ped: integer): void;

	unk: GamePedUnk;
}

interface GamePhysics extends GamePhysicsLegacy {
	addRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: integer, maxLength: number, minLength: number, windingSpeed: number, p11: boolean, p12: boolean, rigid: boolean, p14: number, breakWhenShot: boolean): AddRopeResult;
	deleteRope(): integer;
	deleteChildRope(ropeId: integer): void;
	doesRopeExist(): integer;
	ropeDrawShadowEnabled(toggle: boolean): integer;
	loadRopeData(ropeId: integer, rope_preset: string): void;
	pinRopeVertex(ropeId: integer, vertex: integer, x: number, y: number, z: number): void;
	unpinRopeVertex(ropeId: integer, vertex: integer): void;
	getRopeVertexCount(ropeId: integer): integer;
	attachEntitiesToRope(ropeId: integer, ent1: integer, ent2: integer, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: boolean, p11: boolean): AttachEntitiesToRopeResult;
	attachRopeToEntity(ropeId: integer, entity: integer, x: number, y: number, z: number, p5: boolean): void;
	detachRopeFromEntity(ropeId: integer, entity: integer): void;
	ropeSetUpdatePinverts(ropeId: integer): void;
	ropeSetUpdateOrder(ropeId: integer, p1: integer): void;
	getRopeLastVertexCoord(ropeId: integer): Vector3Mp;
	getRopeVertexCoord(ropeId: integer, vertex: integer): Vector3Mp;
	startRopeWinding(ropeId: integer): void;
	stopRopeWinding(ropeId: integer): void;
	startRopeUnwindingFront(ropeId: integer): void;
	stopRopeUnwindingFront(ropeId: integer): void;
	ropeConvertToSimple(ropeId: integer): void;
	ropeLoadTextures(): void;
	ropeAreTexturesLoaded(): boolean;
	ropeUnloadTextures(): void;
	doesRopeBelongToThisScript(ropeId: integer): boolean;
	ropeGetDistanceBetweenEnds(ropeId: integer): number;
	ropeForceLength(ropeId: integer, length: number): void;
	ropeResetLength(ropeId: integer, length: number): void;
	applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;
	setDamping(entity: integer, vertex: integer, value: number): void;
	activate(entity: integer): void;
	setCgoffset(entity: integer, x: number, y: number, z: number): void;
	getCgoffset(entity: integer): Vector3Mp;
	setCgAtBoundcenter(entity: integer): void;
	breakEntityGlass(entity: integer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: integer, p10: boolean): void;
	getHasObjectFragInst(object: integer): boolean;
	setDisableBreaking(object: integer, toggle: boolean): void;
	setDisableFragDamage(object: integer, toggle: boolean): void;
	setEntityProofUnk(entity: integer, toggle: boolean): void;
	setLaunchControlEnabled(toggle: boolean): void;

	unk: GamePhysicsUnk;
}

interface GamePlayer extends GamePlayerLegacy {
	getPed(): integer;
	getPedScriptIndex(): integer;
	setModel(model: integer): void;
	changePed(ped: integer, p2: boolean, resetDamage: boolean): void;
	getRgbColour(): GetPlayerRgbColourResult;
	getNumberOfS(): integer;
	getTeam(): integer;
	setTeam(team: integer): void;
	getNumberOfPlayersInTeam(team: integer): integer;
	getName(): string;
	getWantedLevelRadius(): number;
	getWantedCentrePosition(): Vector3Mp;
	setWantedCentrePosition(p2: boolean, p3: boolean): Vector3Mp;
	getWantedLevelThreshold(wantedLevel: integer): integer;
	setWantedLevel(wantedLevel: integer, disableNoMission: boolean): void;
	setWantedLevelNoDrop(wantedLevel: integer, p2: boolean): void;
	setWantedLevelNow(p1: boolean): void;
	areFlashingStarsAboutToDrop(): boolean;
	areStarsGreyedOut(): boolean;
	setDispatchCopsFor(toggle: boolean): void;
	isWantedLevelGreater(wantedLevel: integer): boolean;
	clearWantedLevel(): void;
	isDead(): boolean;
	isPressingHorn(): boolean;
	setControl(bHasControl: boolean, flags: integer): void;
	getWantedLevel(): integer;
	setMaxWantedLevel(maxWantedLevel: integer): void;
	setPoliceRadarBlips(toggle: boolean): void;
	setPoliceIgnore(toggle: boolean): void;
	isPlaying(): boolean;
	setEveryoneIgnore(toggle: boolean): void;
	setAllRandomPedsFlee(toggle: boolean): void;
	setAllRandomPedsFleeThisFrame(): void;
	setIgnoreLowPriorityShockingEvents(toggle: boolean): void;
	setWantedLevelMultiplier(multiplier: number): void;
	setWantedLevelDifficulty(difficulty: number): void;
	resetWantedLevelDifficulty(): void;
	startFiringAmnesty(duration: integer): void;
	reportCrime(crimeType: integer, wantedLvlThresh: integer): void;
	switchCrimeType(p1: integer): void;
	reportPoliceSpotted(): void;
	canStartMission(): boolean;
	isReadyForCutscene(): boolean;
	isTargettingEntity(entity: integer): boolean;
	getTargetEntity(): integer;
	isFreeAiming(): boolean;
	isFreeAimingAtEntity(entity: integer): boolean;
	setLockonRangeOverride(range: number): void;
	setCanDoDriveBy(toggle: boolean): void;
	setCanBeHassledByGangs(toggle: boolean): void;
	setCanUseCover(toggle: boolean): void;
	getMaxWantedLevel(): integer;
	isTargettingAnything(): boolean;
	setSprint(toggle: boolean): void;
	resetStamina(): void;
	restoreStamina(p1: number): void;
	getSprintStaminaRemaining(): number;
	getSprintTimeRemaining(): number;
	getUnderwaterTimeRemaining(): number;
	setUnderwaterTimeRemaining(time: number): integer;
	getGroup(): integer;
	getMaxArmour(): integer;
	isControlOn(): boolean;
	isCamControlDisabled(): boolean;
	isScriptControlOn(): boolean;
	isClimbing(): boolean;
	isBeingArrested(atArresting: boolean): boolean;
	resetArrestState(): void;
	getPlayersLastVehicle(): integer;
	getIndex(): integer;
	intToIndex(value: integer): integer;
	intToParticipantindex(value: integer): integer;
	getTimeSinceHitVehicle(): integer;
	getTimeSinceHitPed(): integer;
	getTimeSinceDroveOnPavement(): integer;
	getTimeSinceDroveAgainstTraffic(): integer;
	isFreeForAmbientTask(): boolean;
	id(): integer;
	pedId(): integer;
	networkIdToInt(): integer;
	hasForceCleanupOccurred(cleanupFlags: integer): boolean;
	forceCleanup(cleanupFlags: integer): void;
	forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: integer): void;
	forceCleanupForThreadWithThisId(id: integer, cleanupFlags: integer): void;
	getCauseOfMostRecentForceCleanup(): integer;
	setMayOnlyEnterThisVehicle(vehicle: integer): void;
	setMayNotEnterAnyVehicle(): void;
	giveAchievementTo(achievement: integer): boolean;
	setAchievementProgress(achievement: integer, progress: integer): boolean;
	getAchievementProgress(achievement: integer): integer;
	hasAchievementBeenPassed(achievement: integer): boolean;
	isOnline(): boolean;
	isLoggingInNp(): boolean;
	displaySystemSigninUi(unk: boolean): void;
	isSystemUiBeingDisplayed(): boolean;
	setInvincible(toggle: boolean): void;
	getInvincible(): boolean;
	setInvincibleKeepRagdollEnabled(toggle: boolean): void;
	removeHelmet(p2: boolean): void;
	giveRagdollControl(toggle: boolean): void;
	setLockon(toggle: boolean): void;
	setTargetingMode(targetMode: integer): void;
	setTargetLevel(targetLevel: integer): void;
	clearHasDamagedAtLeastOnePed(): void;
	hasDamagedAtLeastOnePed(): boolean;
	clearHasDamagedAtLeastOneNonAnimalPed(): void;
	hasDamagedAtLeastOneNonAnimalPed(): boolean;
	setAirDragMultiplierForPlayersVehicle(multiplier: number): void;
	setSwimMultiplierFor(multiplier: number): void;
	setRunSprintMultiplierFor(multiplier: number): void;
	getTimeSinceLastArrest(): integer;
	getTimeSinceLastDeath(): integer;
	assistedMovementCloseRoute(): void;
	assistedMovementFlushRoute(): void;
	setForcedAim(toggle: boolean): void;
	setForcedZoom(toggle: boolean): void;
	setForceSkipAimIntro(toggle: boolean): void;
	disableFiring(toggle: boolean): void;
	setDisableAmbientMeleeMove(toggle: boolean): void;
	setMaxArmour(value: integer): void;
	specialAbilityActivate(p0: integer, p1: integer): void;
	setSpecialAbility(p1: integer, p2: integer): void;
	specialAbilityDeplete(p0: integer, p1: integer): void;
	specialAbilityDeactivate(p1: integer): void;
	specialAbilityDeactivateFast(p1: integer): void;
	specialAbilityReset(p1: integer): void;
	specialAbilityChargeOnMissionFailed(p1: integer): void;
	specialAbilityChargeSmall(p1: boolean, p2: boolean, p3: integer): void;
	specialAbilityChargeMedium(p1: boolean, p2: boolean, p3: integer): void;
	specialAbilityChargeLarge(p1: boolean, p2: boolean, p3: integer): void;
	specialAbilityChargeContinuous(p1: integer, p2: integer): void;
	specialAbilityChargeAbsolute(p1: integer, p2: boolean, p3: integer): void;
	specialAbilityChargeNormalized(normalizedValue: number, p2: boolean, p3: integer): void;
	specialAbilityFillMeter(p1: boolean, p2: integer): void;
	specialAbilityDepleteMeter(p1: boolean, p2: integer): void;
	specialAbilityLock(playerModel: integer, p1: integer): void;
	specialAbilityUnlock(playerModel: integer, p1: integer): void;
	isSpecialAbilityUnlocked(playerModel: integer): boolean;
	isSpecialAbilityActive(p1: integer): boolean;
	isSpecialAbilityMeterFull(p1: integer): boolean;
	enableSpecialAbility(toggle: boolean, p2: integer): void;
	isSpecialAbilityEnabled(p1: integer): boolean;
	setSpecialAbilityMultiplier(multiplier: number): void;
	startTeleport(x: number, y: number, z: number, heading: number, p5: boolean, findCollisionLand: boolean, p7: boolean): void;
	updateTeleport(): boolean;
	stopTeleport(): void;
	isTeleportActive(): boolean;
	getCurrentStealthNoise(): number;
	setHealthRechargeMultiplier(regenRate: number): void;
	getHealthRechargeLimit(): number;
	setHealthRechargeLimit(limit: number): void;
	setFallDistance(p0: integer, p1: integer): void;
	setWeaponDamageModifier(modifier: number): void;
	setWeaponDefenseModifier(modifier: number): void;
	setWeaponDefenseModifier2(modifier: number): void;
	setMeleeWeaponDamageModifier(modifier: number, p2: boolean): void;
	setMeleeWeaponDefenseModifier(modifier: number): void;
	setVehicleDamageModifier(modifier: number): void;
	setVehicleDefenseModifier(modifier: number): void;
	setParachuteTintIndex(tintIndex: integer): void;
	getParachuteTintIndex(): integer;
	setReserveParachuteTintIndex(index: integer): void;
	getReserveParachuteTintIndex(): integer;
	setParachutePackTintIndex(tintIndex: integer): void;
	getParachutePackTintIndex(): integer;
	setHasReserveParachute(): void;
	getHasReserveParachute(): boolean;
	setCanLeaveParachuteSmokeTrail(enabled: boolean): void;
	setParachuteSmokeTrailColor(r: integer, g: integer, b: integer): void;
	getParachuteSmokeTrailColor(): GetPlayerParachuteSmokeTrailColorResult;
	setResetFlagPreferRearSeats(flags: integer): void;
	setNoiseMultiplier(multiplier: number): void;
	setSneakingNoiseMultiplier(multiplier: number): void;
	canPedHear(ped: integer): boolean;
	simulateInputGait(amount: number, gaitType: integer, speed: number, p4: boolean, p5: boolean): void;
	resetInputGait(): void;
	setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;
	setAutoGiveScubaGearWhenExitVehicle(toggle: boolean): void;
	setStealthPerceptionModifier(value: number): void;
	setSimulateAiming(toggle: boolean): void;
	setClothPinFrames(p1: integer): void;
	setClothPackageIndex(index: integer): void;
	setClothLockCounter(value: integer): void;
	attachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	detachVirtualBound(): void;
	hasBeenSpottedInStolenVehicle(): boolean;
	isBattleAware(): boolean;
	extendWorldBoundaryFor(x: number, y: number, z: number): void;
	resetWorldBoundaryFor(): void;
	isRidingTrain(): boolean;
	hasLeftTheWorld(): boolean;
	setLeavePedBehind(toggle: boolean): void;
	setParachuteVariationOverride(p1: integer, p2: integer, p3: integer, p4: boolean): void;
	clearParachuteVariationOverride(): void;
	setParachuteModelOverride(model: integer): void;
	clearParachuteModelOverride(): void;
	setParachutePackModelOverride(model: integer): void;
	clearParachutePackModelOverride(): void;
	disableVehicleRewards(): void;
	setBluetoothState(state: boolean): void;
	isBluetoothEnable(): boolean;
	getFakeWantedLevel(): integer;
	setHomingRocketDisabled(p0: integer, p1: integer): void;

	unk: GamePlayerUnk;
}

interface GameRecording extends GameRecordingLegacy {
	stopThisFrame(): void;
	disableRockstarEditorCameraChanges(): void;
	start(mode: integer): void;
	stopAndSaveClip(): void;
	stopAndDiscardClip(): void;
	saveClip(): boolean;
	is(): boolean;

	unk: GameRecordingUnk;
}

interface GameReplay extends GameReplayLegacy {
	isInteriorRenderingDisabled(): boolean;
	resetEditorValues(): void;
	activateRockstarEditor(): void;

	unk: GameReplayUnk;
}

interface GameScript extends GameScriptLegacy {
	request(scriptName: string): void;
	setAsNoLongerNeeded(scriptName: string): void;
	hasLoaded(scriptName: string): boolean;
	doesExist(scriptName: string): boolean;
	requestWithNameHash(scriptHash: integer): void;
	setWithNameHashAsNoLongerNeeded(scriptHash: integer): void;
	hasWithNameHashLoaded(scriptHash: integer): boolean;
	doesWithNameHashExist(scriptHash: integer): boolean;
	terminateThread(threadId: integer): void;
	isThreadActive(threadId: integer): boolean;
	getNameOfThread(threadId: integer): string;
	threadIteratorReset(): void;
	threadIteratorGetNextThreadId(): integer;
	getIdOfThisThread(): integer;
	terminateThisThread(): void;
	getNumberOfReferencesOfWithNameHash(scriptHash: integer): integer;
	getThisName(): string;
	getHashOfThisName(): integer;
	getNumberOfEvents(eventGroup: integer): integer;
	getEventExists(eventGroup: integer, eventIndex: integer): boolean;
	getEventAtIndex(eventGroup: integer, eventIndex: integer): integer;
	getEventData(eventGroup: integer, eventIndex: integer, eventDataSize: integer): integer;
	triggerEvent(eventGroup: integer, eventDataSize: integer, playerBits: integer): integer;
	shutdownLoadingScreen(): void;
	setNoLoadingScreen(toggle: boolean): void;
	getNoLoadingScreen(): boolean;
	bgStartContextHash(contextHash: integer): void;
	bgEndContextHash(contextHash: integer): void;
	bgStartContext(contextName: string): void;
	bgEndContext(contextName: string): void;
	triggerEvent2(eventGroup: integer, eventDataSize: integer, playerBits: integer): integer;

	unk: GameScriptUnk;
}

interface GameShapetest extends GameShapetestLegacy {
	startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: integer, entity: integer, p8: integer): integer;
	startExpensiveSynchronousShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: integer, entity: integer, p8: integer): integer;
	startShapeTestBoundingBox(entity: integer, flags1: integer, flags2: integer): integer;
	startShapeTestBox(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: integer, flags: integer, entity: integer, p12: integer): integer;
	startShapeTestBound(entity: integer, flags1: integer, flags2: integer): integer;
	startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: integer, entity: integer, p9: integer): integer;
	startShapeTestSweptSphere(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: integer, entity: integer, p9: integer): integer;
	startShapeTestSurroundingCoords(flag: integer, entity: integer, flag2: integer): StartShapeTestSurroundingCoordsResult;
	getShapeTestResult(shapeTestHandle: integer): GetShapeTestResultResult;
	getShapeTestResultIncludingMaterial(shapeTestHandle: integer): GetShapeTestResultIncludingMaterialResult;
	releaseScriptGuidFromEntity(entityHit: integer): void;
}

interface GameStats extends GameStatsLegacy {
	statClearSlotForReload(statSlot: integer): integer;
	statLoad(p0: integer): boolean;
	statSave(p0: integer, p1: boolean, p2: integer, p3: integer): boolean;
	statLoadPending(p0: integer): boolean;
	statSavePending(): boolean;
	statSavePendingOrRequested(): boolean;
	statDeleteSlot(p0: integer): integer;
	statSlotIsLoaded(p0: integer): boolean;
	statSetBlockSaves(toggle: boolean): void;
	statSetInt(statName: integer, value: integer, save: boolean): boolean;
	statSetFloat(statName: integer, value: number, save: boolean): boolean;
	statSetBool(statName: integer, value: boolean, save: boolean): boolean;
	statSetGxtLabel(statName: integer, value: string, save: boolean): boolean;
	statSetDate(statName: integer, numFields: integer, save: boolean): integer;
	statSetString(statName: integer, value: string, save: boolean): boolean;
	statSetPos(statName: integer, x: number, y: number, z: number, save: boolean): boolean;
	statSetMaskedInt(statName: integer, p1: integer, p2: integer, p3: integer, save: boolean): boolean;
	statSetUserId(statName: integer, value: string, save: boolean): boolean;
	statSetCurrentPosixTime(statName: integer, p1: boolean): boolean;
	statGetInt(statHash: integer, p2: integer): integer;
	statGetFloat(statHash: integer, p2: integer): number;
	statGetBool(statHash: integer, p2: integer): boolean;
	statGetDate(statHash: integer, p2: integer, p3: integer): integer;
	statGetString(statHash: integer, p1: integer): string;
	statGetPos(p0: integer, p4: integer): StatGetPosResult;
	statGetMaskedInt(p0: integer, p2: integer, p3: integer, p4: integer): integer;
	statGetUserId(p0: integer): string;
	statGetLicensePlate(statName: integer): string;
	statSetLicensePlate(statName: integer, str: string): boolean;
	statIncrement(statName: integer, value: number): void;
	statGetNumberOfDays(statName: integer): integer;
	statGetNumberOfHours(statName: integer): integer;
	statGetNumberOfMinutes(statName: integer): integer;
	statGetNumberOfSeconds(statName: integer): integer;
	statSetProfileSettingValue(profileSetting: integer, value: integer): void;
	statGetPackedBoolMask(p0: integer): integer;
	statGetPackedIntMask(p0: integer): integer;
	getPackedBoolStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;
	getPackedIntStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;
	getPackedTuBoolStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;
	getPackedTuIntStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;
	getNgstatBoolHash(index: integer, spStat: boolean, charStat: boolean, character: integer, section: string): integer;
	getNgstatIntHash(index: integer, spStat: boolean, charStat: boolean, character: integer, section: string): integer;
	statGetBoolMasked(statName: integer, mask: integer, p2: integer): boolean;
	statSetBoolMasked(statName: integer, value: boolean, mask: integer, save: boolean): boolean;
	playBackgroundScriptAction(action: string, value: integer): void;
	playNpcInvite(): integer;
	playAwardXp(amount: integer, type: integer, category: integer): void;
	playRankUp(rank: integer): void;
	playStartOfflineMode(): void;
	playActivityDone(p0: integer, p1: integer): void;
	playLeaveJobChain(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playMissionStarted(p1: integer, p2: integer, p3: boolean): integer;
	playMissionOver(p1: integer, p2: integer, p3: boolean, p4: boolean, p5: boolean): integer;
	playMissionCheckpoint(p1: integer, p2: integer, p3: integer): integer;
	playRandomMissionDone(name: string, p1: integer, p2: integer, p3: integer): void;
	playRosBet(amount: integer, act: integer, player: integer, cm: number): void;
	playRaceCheckpoint(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playMatchStarted(p0: integer, p1: integer, p2: integer): void;
	playShopItem(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playCrateDropMissionDone(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer): void;
	playCrateCreatedMissionDone(p0: number, p1: number, p2: number): void;
	playHoldUpMissionDone(p0: integer, p1: integer, p2: integer, p3: integer): void;
	playImportExportMissionDone(p0: integer, p1: integer, p2: integer, p3: integer): void;
	playRaceToPointMissionDone(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	playAcquiredHiddenPackage(p0: integer): void;
	playWebsiteVisited(scaleformHash: integer, p1: integer): void;
	playFriendActivity(p0: integer, p1: integer): void;
	playOddjobDone(p0: integer, p1: integer, p2: integer): void;
	playPropChange(p0: integer, p1: integer, p2: integer, p3: integer): void;
	playClothChange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playWeaponModeChange(weaponHash: integer, componentHashTo: integer, componentHashFrom: integer): void;
	playCheatApplied(cheat: string): void;
	playQuickfixTool(element: integer, item: string): void;
	playIdleKick(time: integer): void;
	playHeistSaveCheat(hash: integer, p1: integer): void;
	playDirectorMode(): integer;
	playAwardBadsport(id: integer): void;
	playPegasaircraft(modelHash: integer): void;
	playPiMenuHideSettings(): integer;
	leaderboardsGetNumberOfColumns(p0: integer, p1: integer): integer;
	leaderboardsGetColumnId(p0: integer, p1: integer, p2: integer): integer;
	leaderboardsGetColumnType(p0: integer, p1: integer, p2: integer): integer;
	leaderboardsReadClearAll(): integer;
	leaderboardsReadClear(p0: integer, p1: integer, p2: integer): integer;
	leaderboardsReadPending(p0: integer, p1: integer, p2: integer): boolean;
	leaderboardsReadAnyPending(): boolean;
	leaderboardsReadSuccessful(p0: integer, p1: integer, p2: integer): boolean;
	leaderboards2ReadFriendsByRow(p2: integer, p3: boolean, p4: integer, p5: integer): Leaderboards2ReadFriendsByRowResult;
	leaderboards2ReadByHandle(): Leaderboards2ReadByHandleResult;
	leaderboards2ReadByRow(p2: integer, p4: integer, p6: integer): Leaderboards2ReadByRowResult;
	leaderboards2ReadByRank(p1: integer, p2: integer): integer;
	leaderboards2ReadByRadius(p1: integer): Leaderboards2ReadByRadiusResult;
	leaderboards2ReadByScoreInt(p1: integer, p2: integer): integer;
	leaderboards2ReadByScoreFloat(p1: number, p2: integer): integer;
	leaderboards2ReadRankPrediction(): Leaderboards2ReadRankPredictionResult;
	leaderboards2ReadByPlatform(gamerHandleCsv: string, platformName: string): integer;
	leaderboards2WriteData(): integer;
	leaderboardsWriteAddColumn(p0: integer, p1: integer, p2: number): void;
	leaderboardsWriteAddColumnLong(p0: integer, p1: integer, p2: integer): void;
	leaderboardsCacheDataRow(): integer;
	leaderboardsClearCacheData(): void;
	leaderboardsGetCacheExists(p0: integer): boolean;
	leaderboardsGetCacheTime(p0: integer): integer;
	leaderboardsGetCacheNumberOfRows(p0: integer): integer;
	leaderboardsGetCacheDataRow(p0: integer, p1: integer): integer;
	updateStatInt(statHash: integer, value: integer, p2: integer): void;
	updateStatFloat(statHash: integer, value: number, p2: integer): void;
	setProfileSettingPrologueComplete(): void;
	statSetCheatIsActive(): void;
	leaderboards2WriteDataForEventType(): Leaderboards2WriteDataForEventTypeResult;
	statMigrateSave(platformName: string): boolean;
	statSaveMigrationStatusStart(): boolean;
	statGetSaveMigrationStatus(): StatGetSaveMigrationStatusResult;
	statSaveMigrationCancel(): boolean;
	statGetCancelSaveMigrationStatus(): integer;
	statSaveMigrationConsumeContentUnlock(contentId: integer, srcPlatform: string, srcGamerHandle: string): boolean;
	statGetSaveMigrationConsumeContentUnlockStatus(): StatGetSaveMigrationConsumeContentUnlockStatusResult;
	setHasContentUnlocksFlags(value: integer): void;
	setSaveMigrationTransactionId(transactionId: integer): void;
	playSpentPiCustomLoadout(amount: integer): void;
	playBuyContraband(): integer;
	playSellContraband(): integer;
	playDefendContraband(): integer;
	playRecoverContraband(): integer;
	hiredLimo(p0: integer, p1: integer): void;
	orderedBossVehicle(p0: integer, p1: integer, vehicleHash: integer): void;
	playStuntPerformedEventAllowTrigger(): void;
	playStuntPerformedEventDisallowTrigger(): void;
	playChangeMcEmblem(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playEarnedMcPoints(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	playCopyRankIntoNewSlot(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	playDupeDetection(): integer;
	playBanAlert(p0: integer): void;
	playGunrunMissionEnded(): integer;
	playStoneHatchetEnd(): integer;
	playSmugMissionEnded(): integer;
	playH2FmprepEnd(): integer;
	playH2InstanceEnd(p1: integer, p2: integer, p3: integer): integer;
	playDarMissionEnd(): integer;
	playEnterSessionPack(): integer;
	playDroneUsage(p0: integer, p1: integer, p2: integer): void;
	playSpectatorWheelSpin(p0: integer, p1: integer, p2: integer, p3: integer): void;
	playArenaWarSpectator(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	playArenaWarsEnded(): integer;
	playPassiveMode(p0: boolean, p1: integer, p2: integer, p3: integer): void;
	playCollectible(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	playCasinoStoryMissionEnded(p0: integer, p1: integer): void;
	playCasinoChip(p0: integer): void;
	playCasinoRoulette(p0: integer): void;
	playCasinoBlackjack(p0: integer): void;
	playCasinoThreecardpoker(p0: integer): void;
	playCasinoSlotmachine(p0: integer): void;
	playCasinoInsidetrack(p0: integer): void;
	playCasinoLuckyseven(p0: integer): void;
	playCasinoRouletteLight(p0: integer): void;
	playCasinoBlackjackLight(p0: integer): void;
	playCasinoThreecardpokerLight(p0: integer): void;
	playCasinoSlotmachineLight(p0: integer): void;
	playCasinoInsidetrackLight(p0: integer): void;
	playArcadegame(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	playCasinoMissionEnded(): integer;

	unk: GameStatsUnk;
}

interface GameStreaming extends GameStreamingLegacy {
	loadAllObjectsNow(): void;
	loadScene(x: number, y: number, z: number): void;
	networkUpdateLoadScene(): boolean;
	isNetworkLoadingScene(): boolean;
	setInteriorActive(interiorID: integer, toggle: boolean): void;
	requestModel(model: integer): void;
	requestMenuPedModel(model: integer): void;
	hasModelLoaded(model: integer): boolean;
	requestModelsInRoom(interior: integer, roomName: string): void;
	setModelAsNoLongerNeeded(model: integer): void;
	isModelInCdimage(model: integer): boolean;
	isModelValid(model: integer): boolean;
	isModelAPed(model: integer): boolean;
	isModelAVehicle(model: integer): boolean;
	requestCollisionAtCoord(x: number, y: number, z: number): void;
	requestCollisionForModel(model: integer): void;
	hasCollisionForModelLoaded(model: integer): boolean;
	requestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;
	doesAnimDictExist(animDict: string): boolean;
	requestAnimDict(animDict: string): void;
	hasAnimDictLoaded(animDict: string): boolean;
	removeAnimDict(animDict: string): void;
	requestAnimSet(animSet: string): void;
	hasAnimSetLoaded(animSet: string): boolean;
	removeAnimSet(animSet: string): void;
	requestClipSet(clipSet: string): void;
	hasClipSetLoaded(clipSet: string): boolean;
	removeClipSet(clipSet: string): void;
	requestIpl(iplName: string): void;
	removeIpl(iplName: string): void;
	isIplActive(iplName: string): boolean;
	set(toggle: boolean): void;
	loadGlobalWaterType(waterType: integer): void;
	getGlobalWaterType(): integer;
	setGamePausesFor(toggle: boolean): void;
	setReducePedModelBudget(toggle: boolean): void;
	setReduceVehicleModelBudget(toggle: boolean): void;
	setDitchPoliceModels(toggle: boolean): void;
	getNumberOfRequests(): integer;
	requestPtfxAsset(): void;
	hasPtfxAssetLoaded(): boolean;
	removePtfxAsset(): void;
	requestNamedPtfxAsset(fxName: string): void;
	hasNamedPtfxAssetLoaded(fxName: string): boolean;
	removeNamedPtfxAsset(fxName: string): void;
	setVehiclePopulationBudget(p0: integer): void;
	setPedPopulationBudget(p0: integer): void;
	clearFocus(): void;
	setFocusPosAndVel(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
	setFocusEntity(entity: integer): void;
	isEntityFocus(entity: integer): boolean;
	setMapdatacullboxEnabled(name: string, toggle: boolean): void;
	formatFocusHeading(x: number, y: number, z: number, rad: number, p4: integer, p5: integer): integer;
	newLoadSceneStart(posX: number, posY: number, posZ: number, offsetX: number, offsetY: number, offsetZ: number, radius: number, p7: integer): boolean;
	newLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: integer): boolean;
	newLoadSceneStop(): void;
	isNewLoadSceneActive(): boolean;
	isNewLoadSceneLoaded(): boolean;
	startPlayerSwitch(from: integer, to: integer, flags: integer, switchType: integer): void;
	stopPlayerSwitch(): void;
	isPlayerSwitchInProgress(): boolean;
	getPlayerSwitchType(): integer;
	getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): integer;
	getPlayerSwitchState(): integer;
	getPlayerShortSwitchState(): integer;
	getPlayerSwitchJumpCutIndex(): integer;
	setPlayerSwitchOutro(cameraCoordX: number, cameraCoordY: number, cameraCoordZ: number, camRotationX: number, camRotationY: number, camRotationZ: number, camFov: number, camFarClip: number, rotationOrder: integer): void;
	setPlayerSwitchEstablishingShot(name: string): void;
	allowPlayerSwitchPan(): void;
	allowPlayerSwitchOutro(): void;
	allowPlayerSwitchAscent(): void;
	allowPlayerSwitchDescent(): void;
	isSwitchReadyForDescent(): boolean;
	enableSwitchPauseBeforeDescent(): void;
	disableSwitchOutroFx(): void;
	switchOutPlayer(ped: integer, flags: integer, switchType: integer): void;
	switchInPlayer(ped: integer): void;
	getPlayerSwitchInterpOutDuration(): integer;
	isSwitchSkippingDescent(): boolean;
	getLodscale(): number;
	overrideLodscaleThisFrame(scaling: number): void;
	prefetchSrl(srl: string): void;
	isSrlLoaded(): boolean;
	beginSrl(): void;
	endSrl(): void;
	setSrlTime(p0: number): void;
	setHdArea(x: number, y: number, z: number, radius: number): void;
	clearHdArea(): void;
	initCreatorBudget(): void;
	shutdownCreatorBudget(): void;
	addModelToCreatorBudget(modelHash: integer): boolean;
	removeModelFromCreatorBudget(modelHash: integer): void;
	getUsedCreatorModelMemoryPercentage(): number;
	setIslandHopperEnabled(name: string, toggle: boolean): void;

	unk: GameStreamingUnk;
}

interface GameTask extends GameTaskLegacy {
	pause(ped: integer, ms: integer): void;
	standStill(ped: integer, time: integer): void;
	jump(ped: integer, unused: boolean, p2: integer, p3: integer): void;
	cower(ped: integer, duration: integer): void;
	handsUp(ped: integer, duration: integer, facingPed: integer, p3: integer, p4: boolean): void;
	updateHandsUpDuration(ped: integer, duration: integer): void;
	openVehicleDoor(ped: integer, vehicle: integer, timeOut: integer, seat: integer, speed: number): void;
	enterVehicle(ped: integer, vehicle: integer, timeout: integer, seat: integer, speed: number, flag: integer, p6: integer): void;
	leaveVehicle(ped: integer, vehicle: integer, flags: integer): void;
	getOffBoat(ped: integer, boat: integer): void;
	skyDive(ped: integer, p1: boolean): void;
	parachute(ped: integer, p1: boolean, p2: boolean): void;
	parachuteToTarget(ped: integer, x: number, y: number, z: number): void;
	setParachuteTarget(ped: integer, x: number, y: number, z: number): void;
	setParachuteThrust(ped: integer, thrust: number): void;
	rappelFromHeli(ped: integer, p1: number): void;
	vehicleDriveToCoord(ped: integer, vehicle: integer, x: number, y: number, z: number, speed: number, p6: integer, vehicleModel: integer, drivingMode: integer, stopRange: number, p10: number): void;
	vehicleDriveToCoordLongrange(ped: integer, vehicle: integer, x: number, y: number, z: number, speed: number, driveMode: integer, stopRange: number): void;
	vehicleDriveWander(ped: integer, vehicle: integer, speed: number, drivingStyle: integer): void;
	followToOffsetOfEntity(ped: integer, entity: integer, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: integer, stoppingRange: number, persistFollowing: boolean): void;
	goStraightToCoord(ped: integer, x: number, y: number, z: number, speed: number, timeout: integer, targetHeading: number, distanceToSlide: number): void;
	goStraightToCoordRelativeToEntity(entity1: integer, entity2: integer, p2: number, p3: number, p4: number, p5: number, p6: integer): void;
	achieveHeading(ped: integer, heading: number, timeout: integer): void;
	flushRoute(): void;
	extendRoute(x: number, y: number, z: number): void;
	followPointRoute(ped: integer, speed: number, unknown: integer): void;
	goToEntity(entity: integer, target: integer, duration: integer, distance: number, speed: number, p5: number, p6: integer): void;
	smartFleeCoord(ped: integer, x: number, y: number, z: number, distance: number, time: integer, p6: boolean, p7: boolean): void;
	smartFleePed(ped: integer, fleeTarget: integer, distance: number, fleeTime: integer, p4: boolean, p5: boolean): void;
	reactAndFleePed(ped: integer, fleeTarget: integer): void;
	shockingEventReact(ped: integer, eventHandle: integer): void;
	wanderInArea(ped: integer, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
	wanderStandard(ped: integer, p1: number, p2: integer): void;
	wanderSpecific(p0: integer, p1: integer, p2: integer, p3: integer): void;
	vehiclePark(ped: integer, vehicle: integer, x: number, y: number, z: number, heading: number, mode: integer, radius: number, keepEngineOn: boolean): void;
	stealthKill(killer: integer, target: integer, actionType: integer, p3: number, p4: integer): void;
	plantBomb(ped: integer, x: number, y: number, z: number, heading: number): void;
	followNavMeshToCoord(ped: integer, x: number, y: number, z: number, speed: number, timeout: integer, stoppingRange: number, persistFollowing: boolean, unk: number): void;
	followNavMeshToCoordAdvanced(ped: integer, x: number, y: number, z: number, speed: number, timeout: integer, unkFloat: number, unkInt: integer, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;
	setPedPathCanUseClimbovers(ped: integer, Toggle: boolean): void;
	setPedPathCanUseLadders(ped: integer, Toggle: boolean): void;
	setPedPathCanDropFromHeight(ped: integer, Toggle: boolean): void;
	setPedPathClimbCostModifier(ped: integer, modifier: number): void;
	setPedPathMayEnterWater(ped: integer, mayEnterWater: boolean): void;
	setPedPathPreferToAvoidWater(ped: integer, avoidWater: boolean): void;
	setPedPathAvoidFire(ped: integer, avoidFire: boolean): void;
	setGlobalMinBirdFlightHeight(height: number): void;
	getNavmeshRouteDistanceRemaining(ped: integer): GetNavmeshRouteDistanceRemainingResult;
	getNavmeshRouteResult(ped: integer): integer;
	goToCoordAnyMeans(ped: integer, x: number, y: number, z: number, speed: number, p5: integer, p6: boolean, walkingStyle: integer, p8: number): void;
	goToCoordAnyMeansExtraParams(ped: integer, x: number, y: number, z: number, speed: number, p5: integer, p6: boolean, walkingStyle: integer, p8: number, p9: integer, p10: integer, p11: integer, p12: integer): void;
	goToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: integer, x: number, y: number, z: number, speed: number, p5: integer, p6: boolean, walkingStyle: integer, p8: number, p9: integer, p10: integer, p11: integer, p12: integer, p13: integer): void;
	playAnim(ped: integer, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: integer, flag: integer, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
	playAnimAdvanced(ped: integer, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, animEnterSpeed: number, animExitSpeed: number, duration: integer, flag: integer, animTime: number, p14: integer, p15: integer): void;
	stopAnim(ped: integer, animDictionary: string, animationName: string, p3: number): void;
	scriptedAnimation(ped: integer, p4: number, p5: number): TaskScriptedAnimationResult;
	playEntityScriptedAnim(p0: integer, p4: number, p5: number): PlayEntityScriptedAnimResult;
	stopAnimPlayback(ped: integer, p1: integer, p2: boolean): void;
	setAnimWeight(p0: integer, p1: number, p2: integer, p3: integer, p4: boolean): void;
	setAnimRate(p0: integer, p1: number, p2: integer, p3: boolean): void;
	setAnimLooped(p0: integer, p1: boolean, p2: integer, p3: boolean): void;
	playPhoneGestureAnimation(ped: integer, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: boolean, p7: boolean): void;
	stopPhoneGestureAnimation(ped: integer, p1: integer): void;
	isPlayingPhoneGestureAnim(ped: integer): boolean;
	getPhoneGestureAnimCurrentTime(ped: integer): number;
	getPhoneGestureAnimTotalTime(ped: integer): number;
	vehiclePlayAnim(vehicle: integer, animationSet: string, animationName: string): void;
	lookAtCoord(entity: integer, x: number, y: number, z: number, duration: integer, p5: integer, p6: integer): void;
	lookAtEntity(ped: integer, lookAt: integer, duration: integer, unknown1: integer, unknown2: integer): void;
	clearLookAt(ped: integer): void;
	openSequence(): integer;
	closeSequence(taskSequenceId: integer): void;
	performSequence(ped: integer, taskSequenceId: integer): void;
	performSequenceLocally(ped: integer, taskSequenceId: integer): void;
	clearSequence(): integer;
	setSequenceToRepeat(taskSequenceId: integer, repeat: boolean): void;
	getSequenceProgress(ped: integer): integer;
	getIsActive(ped: integer, taskIndex: integer): boolean;
	getScriptStatus(ped: integer, taskHash: integer): integer;
	getActiveVehicleMissionType(vehicle: integer): integer;
	leaveAnyVehicle(ped: integer, p1: integer, flags: integer): void;
	aimGunScripted(ped: integer, scriptTask: integer, p2: boolean, p3: boolean): void;
	aimGunScriptedWithTarget(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: integer, p6: boolean, p7: boolean): void;
	updateAimGunScriptedTarget(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: boolean): void;
	getClipSetForScriptedGun(p0: integer): string;
	aimGunAtEntity(ped: integer, entity: integer, duration: integer, p3: boolean): void;
	turnPedToFaceEntity(ped: integer, entity: integer, duration: integer): void;
	aimGunAtCoord(ped: integer, x: number, y: number, z: number, time: integer, p5: boolean, p6: boolean): void;
	shootAtCoord(ped: integer, x: number, y: number, z: number, duration: integer, firingPattern: integer): void;
	shuffleToNextVehicleSeat(ped: integer, vehicle: integer, p2: integer): void;
	clearPedS(ped: integer): void;
	clearPedSecondary(ped: integer): void;
	everyoneLeaveVehicle(vehicle: integer): void;
	gotoEntityOffset(ped: integer, p1: integer, p2: integer, x: number, y: number, z: number, duration: integer): void;
	gotoEntityOffsetXy(p0: integer, oed: integer, duration: integer, p3: number, p4: number, p5: number, p6: number, p7: boolean): void;
	turnPedToFaceCoord(ped: integer, x: number, y: number, z: number, duration: integer): void;
	vehicleTempAction(driver: integer, vehicle: integer, action: integer, time: integer): void;
	vehicleMission(driver: integer, vehicle: integer, vehicleTarget: integer, missionType: integer, p4: number, p5: integer, p6: number, p7: number, DriveAgainstTraffic: boolean): void;
	vehicleMissionPedTarget(ped: integer, vehicle: integer, pedTarget: integer, missionType: integer, maxSpeed: number, drivingStyle: integer, minDistance: number, p7: number, DriveAgainstTraffic: boolean): void;
	vehicleMissionCoorsTarget(ped: integer, vehicle: integer, x: number, y: number, z: number, p5: integer, p6: integer, p7: integer, p8: number, p9: number, DriveAgainstTraffic: boolean): void;
	vehicleEscort(ped: integer, vehicle: integer, targetVehicle: integer, mode: integer, speed: number, drivingStyle: integer, minDistance: number, p7: integer, noRoadsDistance: number): void;
	vehicleFollow(driver: integer, vehicle: integer, targetEntity: integer, speed: number, drivingStyle: integer, minDistance: integer): void;
	vehicleChase(driver: integer, targetEnt: integer): void;
	vehicleHeliProtect(pilot: integer, vehicle: integer, entityToFollow: integer, targetSpeed: number, p4: integer, radius: number, altitude: integer, p7: integer): void;
	setVehicleChaseBehaviorFlag(ped: integer, flag: integer, set: boolean): void;
	setVehicleChaseIdealPursuitDistance(ped: integer, distance: number): void;
	heliChase(pilot: integer, entityToFollow: integer, x: number, y: number, z: number): void;
	planeChase(pilot: integer, entityToFollow: integer, x: number, y: number, z: number): void;
	planeLand(pilot: integer, plane: integer, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;
	clearVehicleS(vehicle: integer): void;
	planeGotoPreciseVtol(ped: integer, vehicle: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer): void;
	submarineGotoAndStop(p0: integer, submarine: integer, x: number, y: number, z: number, p5: integer): void;
	heliMission(pilot: integer, aircraft: integer, targetVehicle: integer, targetPed: integer, destinationX: number, destinationY: number, destinationZ: number, missionFlag: integer, maxSpeed: number, landingRadius: number, targetHeading: number, unk1: integer, unk2: integer, unk3: integer, landingFlags: integer): void;
	heliEscortHeli(pilot: integer, heli1: integer, heli2: integer, p3: number, p4: number, p5: number): void;
	planeMission(pilot: integer, aircraft: integer, targetVehicle: integer, targetPed: integer, destinationX: number, destinationY: number, destinationZ: number, missionFlag: integer, angularDrag: number, unk: number, targetHeading: number, maxZ: number, minZ: number, p13: integer): void;
	planeTaxi(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;
	boatMission(pedDriver: integer, boat: integer, p2: integer, p3: integer, x: number, y: number, z: number, p7: integer, maxSpeed: number, drivingStyle: integer, p10: number, p11: integer): void;
	driveBy(driverPed: integer, targetPed: integer, targetVehicle: integer, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: integer, p8: boolean, firingPattern: integer): void;
	setDrivebyTarget(shootingPed: integer, targetPed: integer, targetVehicle: integer, x: number, y: number, z: number): void;
	clearDrivebyUnderneathDrivingTask(ped: integer): void;
	isDrivebyUnderneathDrivingTask(ped: integer): boolean;
	controlMountedWeapon(ped: integer): boolean;
	setMountedWeaponTarget(shootingPed: integer, targetPed: integer, targetVehicle: integer, x: number, y: number, z: number, p6: integer, p7: integer): void;
	isMountedWeaponUnderneathDrivingTask(ped: integer): boolean;
	useMobilePhone(ped: integer, p1: integer, p2: integer): void;
	useMobilePhoneTimed(ped: integer, duration: integer): void;
	chatToPed(ped: integer, target: integer, p2: integer, p3: number, p4: number, p5: number, p6: number, p7: number): void;
	warpPedIntoVehicle(ped: integer, vehicle: integer, seat: integer): void;
	shootAtEntity(entity: integer, target: integer, duration: integer, firingPattern: integer): void;
	climb(ped: integer, unused: boolean): void;
	climbLadder(ped: integer, p1: integer): void;
	rappelDownWall(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer, p8: integer, p9: integer, p10: integer): void;
	clearPedTasksImmediately(ped: integer): void;
	performSequenceFromProgress(p0: integer, p1: integer, p2: integer, p3: integer): void;
	setNextDesiredMoveState(p0: number): void;
	setPedDesiredMoveBlendRatio(ped: integer, p1: number): void;
	getPedDesiredMoveBlendRatio(ped: integer): number;
	gotoEntityAiming(ped: integer, target: integer, distanceToStopAt: number, StartAimingDist: number): void;
	setDecisionMaker(ped: integer, p1: integer): void;
	setSphereDefensiveArea(p0: integer, p1: number, p2: number, p3: number, p4: number): void;
	clearDefensiveArea(p0: integer): void;
	pedSlideToCoord(ped: integer, x: number, y: number, z: number, heading: number, p5: number): void;
	pedSlideToCoordHdgRate(ped: integer, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
	addCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p6: integer, p7: boolean): integer;
	removeCoverPoint(coverpoint: integer): void;
	doesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): boolean;
	getScriptedCoverPointCoords(coverpoint: integer): Vector3Mp;
	combatPed(ped: integer, targetPed: integer, p2: integer, p3: integer): void;
	combatPedTimed(p0: integer, ped: integer, p2: integer, p3: integer): void;
	seekCoverFromPos(ped: integer, x: number, y: number, z: number, duration: integer, p5: boolean): void;
	seekCoverFromPed(ped: integer, target: integer, duration: integer, p3: boolean): void;
	seekCoverToCoverPoint(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: integer, p6: boolean): void;
	seekCoverToCoords(ped: integer, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: integer, p8: boolean): void;
	putPedDirectlyIntoCover(ped: integer, x: number, y: number, z: number, timeout: integer, p5: boolean, p6: number, p7: boolean, p8: boolean, p9: integer, p10: boolean): void;
	exitCover(p0: integer, p1: integer, p2: number, p3: number, p4: number): void;
	putPedDirectlyIntoMelee(ped: integer, meleeTarget: integer, p2: number, p3: number, p4: number, p5: boolean): void;
	toggleDuck(p0: boolean, p1: boolean): void;
	guardCurrentPosition(p0: integer, p1: number, p2: number, p3: boolean): void;
	guardAssignedDefensiveArea(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer): void;
	guardSphereDefensiveArea(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: integer, p7: number, p8: number, p9: number, p10: number): void;
	standGuard(ped: integer, x: number, y: number, z: number, heading: number, scenarioName: string): void;
	setDriveCruiseSpeed(driver: integer, cruiseSpeed: number): void;
	setDriveMaxCruiseSpeed(p0: integer, p1: number): void;
	setDriveDrivingStyle(ped: integer, drivingStyle: integer): void;
	addCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;
	removeAllCoverBlockingAreas(): void;
	startScenarioInPlace(ped: integer, scenarioName: string, unkDelay: integer, playEnterAnim: boolean): void;
	startScenarioAtPosition(ped: integer, scenarioName: string, x: number, y: number, z: number, heading: number, duration: integer, sittingScenario: boolean, teleport: boolean): void;
	useNearestScenarioToCoord(ped: integer, x: number, y: number, z: number, distance: number, duration: integer): void;
	useNearestScenarioToCoordWarp(ped: integer, x: number, y: number, z: number, radius: number, p5: integer): void;
	useNearestScenarioChainToCoord(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: integer): void;
	useNearestScenarioChainToCoordWarp(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: integer): void;
	doesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): boolean;
	doesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p4: number, p5: boolean): integer;
	isScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
	pedHasUseScenario(ped: integer): boolean;
	playAnimOnRunningScenario(ped: integer, animDict: string, animName: string): void;
	doesScenarioGroupExist(scenarioGroup: string): boolean;
	isScenarioGroupEnabled(scenarioGroup: string): boolean;
	setScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;
	resetScenarioGroupsEnabled(): void;
	setExclusiveScenarioGroup(scenarioGroup: string): void;
	resetExclusiveScenarioGroup(): void;
	isScenarioTypeEnabled(scenarioType: string): boolean;
	setScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;
	resetScenarioTypesEnabled(): void;
	isPedActiveInScenario(ped: integer): boolean;
	isPedPlayingBaseClipInScenario(ped: integer): boolean;
	setPedCanPlayAmbientIdles(ped: integer, p1: boolean, p2: boolean): void;
	combatHatedTargetsInArea(ped: integer, x: number, y: number, z: number, radius: number, p5: integer): void;
	combatHatedTargetsAroundPed(ped: integer, radius: number, p2: integer): void;
	combatHatedTargetsAroundPedTimed(p0: integer, p1: number, p2: integer, p3: integer): void;
	throwProjectile(ped: integer, x: number, y: number, z: number, p4: integer, p5: integer): void;
	swapWeapon(ped: integer, p1: boolean): void;
	reloadWeapon(ped: integer, unused: boolean): void;
	isPedGettingUp(ped: integer): boolean;
	writhe(ped: integer, target: integer, time: integer, p3: integer, p4: integer, p5: integer): void;
	isPedInWrithe(ped: integer): boolean;
	openPatrolRoute(patrolRoute: string): void;
	closePatrolRoute(): void;
	addPatrolRouteNode(p0: integer, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: integer): void;
	addPatrolRouteLink(p0: integer, p1: integer): void;
	createPatrolRoute(): void;
	deletePatrolRoute(patrolRoute: string): void;
	patrol(ped: integer, p1: string, p2: integer, p3: boolean, p4: boolean): void;
	stayInCover(ped: integer): void;
	addVehicleSubAttackCoord(ped: integer, x: number, y: number, z: number): void;
	addVehicleSubAttackPed(ped: integer, ped2: integer): void;
	vehicleShootAtPed(ped: integer, target: integer, p2: number): void;
	vehicleAimAtPed(ped: integer, target: integer): void;
	vehicleShootAtCoord(ped: integer, x: number, y: number, z: number, p4: number): void;
	vehicleAimAtCoord(ped: integer, x: number, y: number, z: number): void;
	vehicleGotoNavmesh(ped: integer, vehicle: integer, x: number, y: number, z: number, speed: number, behaviorFlag: integer, stoppingRange: number): void;
	goToCoordWhileAimingAtCoord(ped: integer, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: integer, p13: boolean, firingPattern: integer): void;
	goToCoordWhileAimingAtEntity(p0: integer, p1: number, p2: number, p3: number, p4: integer, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: integer, p11: boolean, p12: integer, p13: integer): void;
	goToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: integer, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, unkTrue: boolean, unkFlag: integer, aimingFlag: integer, firingPattern: integer): void;
	goToEntityWhileAimingAtCoord(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: boolean, p11: integer): void;
	goToEntityWhileAimingAtEntity(ped: integer, entityToWalkTo: integer, entityToAimAt: integer, speed: number, shootatEntity: boolean, p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: integer): void;
	setHighFall(ped: integer, p1: integer, p2: integer, p3: integer): void;
	requestWaypointRecording(name: string): void;
	getIsWaypointRecordingLoaded(name: string): boolean;
	removeWaypointRecording(name: string): void;
	waypointRecordingGetNumPoints(name: string): integer;
	waypointRecordingGetCoord(name: string, point: integer): Vector3Mp;
	waypointRecordingGetSpeedAtPoint(name: string, point: integer): number;
	waypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number): integer;
	followWaypointRecording(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;
	isWaypointPlaybackGoingOnForPed(p0: integer): boolean;
	getPedWaypointProgress(ped: integer): integer;
	getPedWaypointDistance(p0: integer): number;
	setPedWaypointRouteOffset(p0: integer, p1: integer, p2: integer, p3: integer): integer;
	getWaypointDistanceAlongRoute(p0: string, p1: integer): number;
	waypointPlaybackGetIsPaused(p0: integer): boolean;
	waypointPlaybackPause(p0: integer, p1: boolean, p2: boolean): void;
	waypointPlaybackResume(p0: integer, p1: boolean, p2: integer, p3: integer): void;
	waypointPlaybackOverrideSpeed(p0: integer, p1: number, p2: boolean): void;
	waypointPlaybackUseDefaultSpeed(p0: integer): void;
	useWaypointRecordingAsAssistedMovementRoute(name: string, p1: boolean, p2: number, p3: number): void;
	waypointPlaybackStartAimingAtPed(p0: integer, p1: integer, p2: boolean): void;
	waypointPlaybackStartAimingAtCoord(p0: integer, p1: number, p2: number, p3: number, p4: boolean): void;
	waypointPlaybackStartShootingAtPed(p0: integer, p1: integer, p2: boolean, p3: integer): void;
	waypointPlaybackStartShootingAtCoord(p0: integer, p1: number, p2: number, p3: number, p4: boolean, p5: integer): void;
	waypointPlaybackStopAimingOrShooting(p0: integer): void;
	assistedMovementRequestRoute(route: string): void;
	assistedMovementRemoveRoute(route: string): void;
	assistedMovementIsRouteLoaded(route: string): boolean;
	assistedMovementSetRouteProperties(route: string, props: integer): void;
	assistedMovementOverrideLoadDistanceThisFrame(dist: number): void;
	vehicleFollowWaypointRecording(ped: integer, vehicle: integer, WPRecording: string, p3: integer, p4: integer, p5: integer, p6: integer, p7: number, p8: boolean, p9: number): void;
	isWaypointPlaybackGoingOnForVehicle(vehicle: integer): boolean;
	getVehicleWaypointProgress(vehicle: integer): integer;
	getVehicleWaypointTargetPoint(vehicle: integer): integer;
	vehicleWaypointPlaybackPause(vehicle: integer): void;
	vehicleWaypointPlaybackResume(vehicle: integer): void;
	vehicleWaypointPlaybackUseDefaultSpeed(vehicle: integer): void;
	vehicleWaypointPlaybackOverrideSpeed(vehicle: integer, speed: number): void;
	setBlockingOfNonTemporaryEvents(ped: integer, toggle: boolean): void;
	forceMotionState(ped: integer, state: integer, p2: boolean): void;
	moveNetworkByName(ped: integer, task: string, multiplier: number, p3: boolean, animDict: string, flags: integer): void;
	moveNetworkAdvancedByName(ped: integer, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: integer, p9: number, p10: boolean, animDict: string, flags: integer): void;
	moveNetworkByNameWithInitParams(ped: integer, p1: string, p3: number, p4: boolean, animDict: string, flags: integer): integer;
	isMoveNetworkActive(ped: integer): boolean;
	isMoveNetworkReadyForTransition(ped: integer): boolean;
	requestMoveNetworkStateTransition(ped: integer, name: string): boolean;
	getMoveNetworkState(ped: integer): string;
	setMoveNetworkSignalFloat(ped: integer, signalName: string, value: number): void;
	setMoveNetworkSignalFloat2(ped: integer, signalName: string, value: number): void;
	setMoveNetworkSignalBool(ped: integer, signalName: string, value: boolean): void;
	getMoveNetworkSignalFloat(ped: integer, signalName: string): number;
	getMoveNetworkSignalBool(ped: integer, signalName: string): boolean;
	getMoveNetworkEvent(ped: integer, eventName: string): boolean;
	isMoveBlendRatioStill(ped: integer): boolean;
	isMoveBlendRatioWalking(ped: integer): boolean;
	isMoveBlendRatioRunning(ped: integer): boolean;
	isMoveBlendRatioSprinting(ped: integer): boolean;
	isPedStill(ped: integer): boolean;
	isPedWalking(ped: integer): boolean;
	isPedRunning(ped: integer): boolean;
	isPedSprinting(ped: integer): boolean;
	isPedStrafing(ped: integer): boolean;
	synchronizedScene(ped: integer, scene: integer, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: integer, flag: integer, playbackRate: number, p9: integer): void;
	agitatedAction(ped: integer, ped2: integer): void;
	sweepAimEntity(ped: integer, anim: string, p2: string, p3: string, p4: string, p5: integer, vehicle: integer, p7: number, p8: number): void;
	updateSweepAimEntity(ped: integer, entity: integer): void;
	sweepAimPosition(p0: integer, p5: integer, p6: number, p7: number, p8: number, p9: number, p10: number): TaskSweepAimPositionResult;
	updateSweepAimPosition(p0: integer, p1: number, p2: number, p3: number): void;
	arrestPed(ped: integer, target: integer): void;
	isPedRunningArrest(ped: integer): boolean;
	isPedBeingArrested(ped: integer): boolean;
	uncuffPed(ped: integer): void;
	isPedCuffed(ped: integer): boolean;

	unk: GameTaskUnk;
}

interface GameVehicle extends GameVehicleLegacy {
	create(modelHash: integer, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostVeh: boolean, p7: boolean): integer;
	delete(vehicle: integer): integer;
	setCanBeLockedOn(vehicle: integer, canBeLockedOn: boolean, unk: boolean): void;
	setAllowNoPassengersLockon(veh: integer, toggle: boolean): void;
	getHomingLockonState(vehicle: integer): integer;
	isModel(vehicle: integer, model: integer): boolean;
	doesScriptGeneratorExist(vehicleGenerator: integer): boolean;
	createScriptGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: integer, p7: integer, p8: integer, p9: integer, p10: integer, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: integer): integer;
	deleteScriptGenerator(vehicleGenerator: integer): void;
	setScriptGenerator(vehicleGenerator: integer, enabled: boolean): void;
	setAllGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;
	setAllGeneratorsActive(): void;
	setAllLowPriorityGeneratorsActive(active: boolean): void;
	setOnGroundProperly(vehicle: integer, p1: number): boolean;
	setUseCutsceneWheelCompression(p0: integer, p1: boolean, p2: boolean, p3: boolean): integer;
	isStuckOnRoof(vehicle: integer): boolean;
	addUpsidedownCheck(vehicle: integer): void;
	removeUpsidedownCheck(vehicle: integer): void;
	isStopped(vehicle: integer): boolean;
	getNumberOfPassengers(vehicle: integer): integer;
	getMaxNumberOfPassengers(vehicle: integer): integer;
	getModelNumberOfSeats(modelHash: integer): integer;
	isSeatWarpOnly(vehicle: integer, seatIndex: integer): boolean;
	isTurretSeat(vehicle: integer, seatIndex: integer): boolean;
	doesAllowRappel(vehicle: integer): boolean;
	setDensityMultiplierThisFrame(multiplier: number): void;
	setRandomDensityMultiplierThisFrame(multiplier: number): void;
	setParkedDensityMultiplierThisFrame(multiplier: number): void;
	setDisableRandomTrainsThisFrame(toggle: boolean): void;
	setAmbientRangeMultiplierThisFrame(value: number): void;
	setFarDrawS(toggle: boolean): void;
	setNumberOfParkedS(value: integer): void;
	setDoorsLocked(vehicle: integer, doorLockStatus: integer): void;
	setIndividualDoorsLocked(vehicle: integer, doorIndex: integer, destroyType: integer): void;
	setHasMutedSirens(vehicle: integer, toggle: boolean): void;
	setDoorsLockedForPlayer(vehicle: integer, player: integer, toggle: boolean): void;
	getDoorsLockedForPlayer(vehicle: integer, player: integer): boolean;
	setDoorsLockedForAllPlayers(vehicle: integer, toggle: boolean): void;
	setDoorsLockedForNonScriptPlayers(vehicle: integer, toggle: boolean): void;
	setDoorsLockedForTeam(vehicle: integer, team: integer, toggle: boolean): void;
	setDoorsLockedForUnk(vehicle: integer, toggle: boolean): void;
	explode(vehicle: integer, isAudible: boolean, isInvisible: boolean): void;
	setOutOfControl(vehicle: integer, killDriver: boolean, explodeOnImpact: boolean): void;
	setTimedExplosion(vehicle: integer, ped: integer, toggle: boolean): void;
	addPhoneExplosiveDevice(vehicle: integer): void;
	clearPhoneExplosiveDevice(): void;
	hasPhoneExplosiveDevice(): boolean;
	detonatePhoneExplosiveDevice(): void;
	setTaxiLights(vehicle: integer, state: boolean): void;
	isTaxiLightOn(vehicle: integer): boolean;
	isInGarageArea(garageName: string, vehicle: integer): boolean;
	setColours(vehicle: integer, colorPrimary: integer, colorSecondary: integer): void;
	setFullbeam(vehicle: integer, toggle: boolean): void;
	setIsRacing(vehicle: integer, toggle: boolean): void;
	setCustomPrimaryColour(vehicle: integer, r: integer, g: integer, b: integer): void;
	getCustomPrimaryColour(vehicle: integer): GetVehicleCustomPrimaryColourResult;
	clearCustomPrimaryColour(vehicle: integer): void;
	getIsPrimaryColourCustom(vehicle: integer): boolean;
	setCustomSecondaryColour(vehicle: integer, r: integer, g: integer, b: integer): void;
	getCustomSecondaryColour(vehicle: integer): GetVehicleCustomSecondaryColourResult;
	clearCustomSecondaryColour(vehicle: integer): void;
	getIsSecondaryColourCustom(vehicle: integer): boolean;
	setEnveffScale(vehicle: integer, fade: number): void;
	getEnveffScale(vehicle: integer): number;
	setCanRespray(vehicle: integer, state: boolean): void;
	forceSubmarineSurfaceMode(vehicle: integer, toggle: boolean): void;
	setSubmarineCrushDepths(vehicle: integer, p1: boolean, depth1: number, depth2: number, depth3: number): void;
	getSubmarineIsBelowFirstCrushDepth(submarine: integer): boolean;
	getSubmarineCrushDepthWarningState(submarine: integer): integer;
	setBoatAnchor(vehicle: integer, toggle: boolean): void;
	canAnchorBoatHere(vehicle: integer): boolean;
	canAnchorBoatHere2(vehicle: integer): boolean;
	setBoatFrozenWhenAnchored(vehicle: integer, toggle: boolean): void;
	setBoatMovementResistance(vehicle: integer, value: number): void;
	isBoatAnchoredAndFrozen(vehicle: integer): boolean;
	setBoatSinksWhenWrecked(vehicle: integer, toggle: boolean): void;
	setBoatIsSinking(p0: integer): void;
	setSiren(vehicle: integer, toggle: boolean): void;
	isSirenOn(vehicle: integer): boolean;
	isSirenAudioOn(vehicle: integer): boolean;
	setStrong(vehicle: integer, toggle: boolean): void;
	removeStuckCheck(vehicle: integer): void;
	getColours(vehicle: integer): GetVehicleColoursResult;
	isSeatFree(vehicle: integer, seatIndex: integer, isTaskRunning: boolean): boolean;
	getPedInSeat(vehicle: integer, seatIndex: integer, p2: boolean): integer;
	getLastPedInSeat(vehicle: integer, seatIndex: integer): integer;
	getLightsState(vehicle: integer): GetVehicleLightsStateResult;
	isTyreBurst(vehicle: integer, wheelID: integer, completely: boolean): boolean;
	setForwardSpeed(vehicle: integer, speed: number): void;
	bringToHalt(vehicle: integer, distance: number, duration: integer, unknown: boolean): void;
	stopBringToHalt(vehicle: integer): void;
	isBeingHalted(vehicle: integer): boolean;
	setForkliftForkHeight(vehicle: integer, height: number): void;
	isEntityAttachedToHandlerFrame(vehicle: integer, entity: integer): boolean;
	isAnyEntityAttachedToHandlerFrame(vehicle: integer): boolean;
	findCarryingThisEntity(entity: integer): integer;
	isHandlerFrameAboveContainer(vehicle: integer, entity: integer): boolean;
	detachContainerFromHandlerFrame(vehicle: integer): void;
	setBoatDisableAvoidance(vehicle: integer, p1: boolean): void;
	isHeliLandingAreaBlocked(vehicle: integer): boolean;
	setHeliTurbulenceScalar(vehicle: integer, p1: number): void;
	setCarBootOpen(vehicle: integer): void;
	setTyreBurst(vehicle: integer, index: integer, onRim: boolean, p3: number): void;
	setDoorsShut(vehicle: integer, closeInstantly: boolean): void;
	setTyresCanBurst(vehicle: integer, toggle: boolean): void;
	getTyresCanBurst(vehicle: integer): boolean;
	setWheelsCanBreak(vehicle: integer, enabled: boolean): void;
	setDoorOpen(vehicle: integer, doorIndex: integer, loose: boolean, openInstantly: boolean): void;
	removeWindow(vehicle: integer, windowIndex: integer): void;
	rollDownWindows(vehicle: integer): void;
	rollDownWindow(vehicle: integer, windowIndex: integer): void;
	rollUpWindow(vehicle: integer, windowIndex: integer): void;
	smashWindow(vehicle: integer, index: integer): void;
	fixWindow(vehicle: integer, index: integer): void;
	popOutWindscreen(vehicle: integer): void;
	ejectJb700Roof(vehicle: integer, x: number, y: number, z: number): void;
	setLights(vehicle: integer, state: integer): void;
	setUsePlayerLightSettings(vehicle: integer, toggle: boolean): void;
	setLightsMode(vehicle: integer, p1: integer): void;
	setAlarm(vehicle: integer, state: boolean): void;
	startAlarm(vehicle: integer): void;
	isAlarmActivated(vehicle: integer): boolean;
	setInteriorlight(vehicle: integer, toggle: boolean): void;
	setLightMultiplier(vehicle: integer, multiplier: number): void;
	attachToTrailer(vehicle: integer, trailer: integer, radius: number): void;
	attachOnToTrailer(vehicle: integer, trailer: integer, offsetX: number, offsetY: number, offsetZ: number, coordsX: number, coordsY: number, coordsZ: number, rotationX: number, rotationY: number, rotationZ: number, disableCollisions: number): void;
	stabiliseEntityAttachedToHeli(vehicle: integer, entity: integer, p2: number): void;
	detachFromTrailer(vehicle: integer): void;
	isAttachedToTrailer(vehicle: integer): boolean;
	setTrailerInverseMassScale(vehicle: integer, p1: number): void;
	setTrailerLegsRaised(vehicle: integer): void;
	setTrailerLegsLowered(p0: integer): void;
	setTyreFixed(vehicle: integer, tyreIndex: integer): void;
	setNumberPlateText(vehicle: integer, plateText: string): void;
	getNumberPlateText(vehicle: integer): string;
	getNumberOfNumberPlates(): integer;
	setNumberPlateTextIndex(vehicle: integer, plateIndex: integer): void;
	getNumberPlateTextIndex(vehicle: integer): integer;
	setRandomTrains(toggle: boolean): void;
	createMissionTrain(variation: integer, x: number, y: number, z: number, direction: boolean): integer;
	switchTrainTrack(trackId: integer, state: boolean): void;
	setTrainTrackSpawnFrequency(trackIndex: integer, frequency: integer): void;
	deleteAllTrains(): void;
	setTrainSpeed(train: integer, speed: number): void;
	setTrainCruiseSpeed(train: integer, speed: number): void;
	setRandomBoats(toggle: boolean): void;
	setGarbageTrucks(toggle: boolean): void;
	doesHaveStuckVehicleCheck(vehicle: integer): boolean;
	getRecordingId(recording: integer, script: string): integer;
	requestRecording(recording: integer, script: string): void;
	hasRecordingBeenLoaded(recording: integer, script: string): boolean;
	removeRecording(recording: integer, script: string): void;
	getPositionOfRecordingIdAtTime(id: integer, time: number): Vector3Mp;
	getPositionOfRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;
	getRotationOfRecordingIdAtTime(id: integer, time: number): Vector3Mp;
	getRotationOfRecordingAtTime(recording: integer, time: number, script: string): Vector3Mp;
	getTotalDurationOfRecordingId(id: integer): number;
	getTotalDurationOfRecording(recording: integer, script: string): number;
	getPositionInRecording(vehicle: integer): number;
	getTimePositionInRecording(vehicle: integer): number;
	startPlaybackRecorded(vehicle: integer, recording: integer, script: string, p3: boolean): void;
	startPlaybackRecordedWithFlags(vehicle: integer, recording: integer, script: string, flags: integer, time: integer, drivingStyle: integer): void;
	forcePlaybackRecordedUpdate(vehicle: integer, p1: boolean): void;
	stopPlaybackRecorded(vehicle: integer): void;
	pausePlaybackRecorded(vehicle: integer): void;
	unpausePlaybackRecorded(vehicle: integer): void;
	isPlaybackGoingOnFor(vehicle: integer): boolean;
	isPlaybackUsingAiGoingOnFor(vehicle: integer): boolean;
	getCurrentPlaybackFor(vehicle: integer): integer;
	skipToEndAndStopPlaybackRecorded(vehicle: integer): void;
	setPlaybackSpeed(vehicle: integer, speed: number): void;
	startPlaybackRecordedUsingAi(vehicle: integer, recording: integer, script: string, speed: number, drivingStyle: integer): void;
	skipTimeInPlaybackRecorded(vehicle: integer, time: number): void;
	setPlaybackToUseAi(vehicle: integer, drivingStyle: integer): void;
	setPlaybackToUseAiTryToRevertBackLater(vehicle: integer, time: integer, drivingStyle: integer, p3: boolean): void;
	explodeInCutscene(vehicle: integer, p1: boolean): void;
	addStuckCheckWithWarp(p0: integer, p1: number, p2: integer, p3: boolean, p4: boolean, p5: boolean, p6: integer): void;
	setModelIsSuppressed(model: integer, suppressed: boolean): void;
	getRandomInSphere(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): integer;
	getRandomFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p6: integer): integer;
	getRandomBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: integer, p6: integer): integer;
	getClosest(x: number, y: number, z: number, radius: number, modelHash: integer, flags: integer): integer;
	getTrainCarriage(train: integer, trailerNumber: integer): integer;
	deleteMissionTrain(train: integer): integer;
	setMissionTrainAsNoLongerNeeded(train: integer, p1: boolean): integer;
	setMissionTrainCoords(train: integer, x: number, y: number, z: number): void;
	isThisModelABoat(model: integer): boolean;
	isThisModelAJetski(model: integer): boolean;
	isThisModelAPlane(model: integer): boolean;
	isThisModelAHeli(model: integer): boolean;
	isThisModelACar(model: integer): boolean;
	isThisModelATrain(model: integer): boolean;
	isThisModelABike(model: integer): boolean;
	isThisModelABicycle(model: integer): boolean;
	isThisModelAQuadbike(model: integer): boolean;
	isThisModelAnAmphibiousCar(model: integer): boolean;
	isThisModelAnAmphibiousQuadbike(model: integer): boolean;
	setHeliBladesFullSpeed(vehicle: integer): void;
	setHeliBladesSpeed(vehicle: integer, speed: number): void;
	setCanBeTargetted(vehicle: integer, state: boolean): void;
	setCanBeVisiblyDamaged(vehicle: integer, state: boolean): void;
	setHasUnbreakableLights(vehicle: integer, p1: boolean): void;
	getDirtLevel(vehicle: integer): number;
	setDirtLevel(vehicle: integer, dirtLevel: number): void;
	isDamaged(vehicle: integer): boolean;
	isDoorFullyOpen(vehicle: integer, doorIndex: integer): boolean;
	setEngineOn(vehicle: integer, value: boolean, instantly: boolean, disableAutoStart: boolean): void;
	setUndriveable(vehicle: integer, toggle: boolean): void;
	setProvidesCover(vehicle: integer, toggle: boolean): void;
	setDoorControl(vehicle: integer, doorIndex: integer, speed: integer, angle: number): void;
	setDoorLatched(vehicle: integer, doorIndex: integer, p2: boolean, p3: boolean, p4: boolean): void;
	getDoorAngleRatio(vehicle: integer, door: integer): number;
	getPedUsingDoor(vehicle: integer, doorIndex: integer): integer;
	setDoorShut(vehicle: integer, doorIndex: integer, closeInstantly: boolean): void;
	setDoorBroken(vehicle: integer, doorIndex: integer, deleteDoor: boolean): void;
	setCanBreak(vehicle: integer, toggle: boolean): void;
	doesHaveRoof(vehicle: integer): boolean;
	isBig(vehicle: integer): boolean;
	getNumberOfColours(vehicle: integer): integer;
	setColourCombination(vehicle: integer, colorCombination: integer): void;
	getColourCombination(vehicle: integer): integer;
	setXenonLightsColor(vehicle: integer, colorIndex: integer): void;
	getXenonLightsColor(vehicle: integer): integer;
	setIsConsideredByPlayer(vehicle: integer, toggle: boolean): void;
	getRandomModelInMemory(p0: boolean): GetRandomVehicleModelInMemoryResult;
	getDoorLockStatus(vehicle: integer): integer;
	getDoorDestroyType(vehicle: integer, doorIndex: integer): integer;
	isDoorDamaged(veh: integer, doorID: integer): boolean;
	setDoorCanBreak(vehicle: integer, doorIndex: integer, isBreakable: boolean): void;
	isBumperBouncing(vehicle: integer, frontBumper: boolean): boolean;
	isBumperBrokenOff(vehicle: integer, front: boolean): boolean;
	isCopInArea3D(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
	isOnAllWheels(vehicle: integer): boolean;
	getModelMonetaryValue(vehicleModel: integer): integer;
	getLayoutHash(vehicle: integer): integer;
	setRenderTrainAsDerailed(train: integer, toggle: boolean): void;
	setExtraColours(vehicle: integer, pearlescentColor: integer, wheelColor: integer): void;
	getExtraColours(vehicle: integer): GetVehicleExtraColoursResult;
	setInteriorColor(vehicle: integer, color: integer): void;
	getInteriorColor(vehicle: integer): integer;
	setDashboardColor(vehicle: integer, color: integer): void;
	getDashboardColor(vehicle: integer): integer;
	stopAllGarageActivity(): void;
	setFixed(vehicle: integer): void;
	setDeformationFixed(vehicle: integer): void;
	setCanEngineOperateOnFire(vehicle: integer, toggle: boolean): void;
	setCanLeakOil(vehicle: integer, toggle: boolean): void;
	setCanLeakPetrol(vehicle: integer, toggle: boolean): void;
	setDisablePetrolTankFires(vehicle: integer, toggle: boolean): void;
	setDisablePetrolTankDamage(vehicle: integer, toggle: boolean): void;
	setDisableEngineFires(vehicle: integer, toggle: boolean): void;
	setDisablePretendOccupants(vehicle: integer, toggle: boolean): void;
	removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: integer): void;
	setSteerBias(vehicle: integer, value: number): void;
	isExtraTurnedOn(vehicle: integer, extraId: integer): boolean;
	setExtra(vehicle: integer, extraId: integer, disable: boolean): void;
	doesExtraExist(vehicle: integer, extraId: integer): boolean;
	doesTyreExist(vehicle: integer, tyreIndex: integer): boolean;
	setConvertibleRoof(vehicle: integer, p1: boolean): void;
	lowerConvertibleRoof(vehicle: integer, instantlyLower: boolean): void;
	raiseConvertibleRoof(vehicle: integer, instantlyRaise: boolean): void;
	getConvertibleRoofState(vehicle: integer): integer;
	isAConvertible(vehicle: integer, p1: boolean): boolean;
	transformToSubmarine(vehicle: integer, noAnimation: boolean): void;
	transformSubmarineTo(vehicle: integer, noAnimation: boolean): void;
	getIsSubmarineTransformed(vehicle: integer): boolean;
	isStoppedAtTrafficLights(vehicle: integer): boolean;
	setDamage(vehicle: integer, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, focusOnModel: boolean): void;
	getEngineHealth(vehicle: integer): number;
	setEngineHealth(vehicle: integer, health: number): void;
	setPlaneEngineHealth(vehicle: integer, health: number): void;
	getPetrolTankHealth(vehicle: integer): number;
	setPetrolTankHealth(vehicle: integer, health: number): void;
	isStuckTimerUp(vehicle: integer, p1: integer, p2: integer): boolean;
	resetStuckTimer(vehicle: integer, nullAttributes: integer): void;
	isDriveable(vehicle: integer, isOnFireCheck: boolean): boolean;
	setHasBeenOwnedByPlayer(vehicle: integer, owned: boolean): void;
	setNeedsToBeHotwired(vehicle: integer, toggle: boolean): void;
	startHorn(vehicle: integer, duration: integer, mode: integer, forever: boolean): void;
	setSilent(vehicle: integer, toggle: boolean): void;
	setHasStrongAxles(vehicle: integer, toggle: boolean): void;
	getDisplayNameFromModel(modelHash: integer): string;
	getMakeNameFromModel(modelHash: integer): string;
	getDeformationAtPos(vehicle: integer, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;
	setLivery(vehicle: integer, livery: integer): void;
	getLivery(vehicle: integer): integer;
	getLiveryCount(vehicle: integer): integer;
	setRoofLivery(vehicle: integer, livery: integer): void;
	getRoofLivery(vehicle: integer): integer;
	getRoofLiveryCount(vehicle: integer): integer;
	isWindowIntact(vehicle: integer, windowIndex: integer): boolean;
	areAllWindowsIntact(vehicle: integer): boolean;
	areAnySeatsFree(vehicle: integer): boolean;
	resetWheels(vehicle: integer, toggle: boolean): void;
	isHeliPartBroken(vehicle: integer, p1: boolean, p2: boolean, p3: boolean): boolean;
	getHeliMainRotorHealth(vehicle: integer): number;
	getHeliTailRotorHealth(vehicle: integer): number;
	getHeliTailBoomHealth(vehicle: integer): number;
	setHeliTailRotorHealth(vehicle: integer, health: number): void;
	setHeliTailExplodeThrowDashboard(vehicle: integer, p1: boolean): void;
	setNameDebug(vehicle: integer, name: string): void;
	setExplodesOnHighExplosionDamage(vehicle: integer, toggle: boolean): void;
	setDisableTowing(vehicle: integer, toggle: boolean): void;
	doesHaveLandingGear(vehicle: integer): boolean;
	controlLandingGear(vehicle: integer, state: integer): void;
	getLandingGearState(vehicle: integer): integer;
	isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;
	requestHighDetailModel(vehicle: integer): void;
	removeHighDetailModel(vehicle: integer): void;
	isHighDetail(vehicle: integer): boolean;
	requestAsset(vehicleHash: integer, vehicleAsset: integer): void;
	hasAssetLoaded(vehicleAsset: integer): boolean;
	removeAsset(vehicleAsset: integer): void;
	setTowTruckArmPosition(vehicle: integer, position: number): void;
	attachToTowTruck(towTruck: integer, vehicle: integer, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
	detachFromTowTruck(towTruck: integer, vehicle: integer): void;
	detachFromAnyTowTruck(vehicle: integer): boolean;
	isAttachedToTowTruck(towTruck: integer, vehicle: integer): boolean;
	getEntityAttachedToTowTruck(towTruck: integer): integer;
	setAutomaticallyAttaches(vehicle: integer, p1: boolean, p2: integer): integer;
	setBulldozerArmPosition(vehicle: integer, position: number, p2: boolean): void;
	setTankTurretPosition(vehicle: integer, position: number, p2: boolean): void;
	setTurretSpeedThisFrame(vehicle: integer, speed: number): void;
	disableTurretMovementThisFrame(vehicle: integer): void;
	setFlightNozzlePosition(vehicle: integer, angleRatio: number): void;
	setFlightNozzlePositionImmediate(vehicle: integer, angle: number): void;
	getFlightNozzlePosition(plane: integer): number;
	setDisableFlightNozzlePosition(vehicle: integer, toggle: boolean): void;
	setBurnout(vehicle: integer, toggle: boolean): void;
	isInBurnout(vehicle: integer): boolean;
	setReduceGrip(vehicle: integer, toggle: boolean): void;
	setReduceTraction(vehicle: integer, val: integer): void;
	setIndicatorLights(vehicle: integer, turnSignal: integer, toggle: boolean): void;
	setBrakeLights(vehicle: integer, toggle: boolean): void;
	setHandbrake(vehicle: integer, toggle: boolean): void;
	setBrake(vehicle: integer, toggle: boolean): void;
	instantlyFillPopulation(): void;
	hasFilledPopulation(): boolean;
	getTrailerVehicle(vehicle: integer): integer;
	setUsesLargeRearRamp(vehicle: integer, toggle: boolean): void;
	setRudderBroken(vehicle: integer, toggle: boolean): void;
	setConvertibleRoofLatchState(vehicle: integer, state: boolean): void;
	getEstimatedMaxSpeed(vehicle: integer): number;
	getMaxBraking(vehicle: integer): number;
	getMaxTraction(vehicle: integer): number;
	getAcceleration(vehicle: integer): number;
	getModelEstimatedMaxSpeed(modelHash: integer): number;
	getModelMaxBraking(modelHash: integer): number;
	getModelMaxBrakingMaxMods(modelHash: integer): number;
	getModelMaxTraction(modelHash: integer): number;
	getModelAcceleration(modelHash: integer): number;
	getModelEstimatedAgility(modelHash: integer): number;
	getModelMaxKnots(modelHash: integer): number;
	getModelMoveResistance(modelHash: integer): number;
	getClassEstimatedMaxSpeed(vehicleClass: integer): number;
	getClassMaxTraction(vehicleClass: integer): number;
	getClassMaxAgility(vehicleClass: integer): number;
	getClassMaxAcceleration(vehicleClass: integer): number;
	getClassMaxBraking(vehicleClass: integer): number;
	addRoadNodeSpeedZone(x: number, y: number, z: number, radius: number, speed: number, p5: boolean): integer;
	removeRoadNodeSpeedZone(speedzone: integer): boolean;
	openBombBayDoors(vehicle: integer): void;
	closeBombBayDoors(vehicle: integer): void;
	areBombBayDoorsOpen(aircraft: integer): boolean;
	isSearchlightOn(vehicle: integer): boolean;
	setSearchlight(heli: integer, toggle: boolean, canBeUsedByAI: boolean): void;
	doesHaveSearchlight(vehicle: integer): boolean;
	isSeatAccessible(ped: integer, vehicle: integer, seatIndex: integer, side: boolean, onEnter: boolean): boolean;
	getEntryPositionOfDoor(vehicle: integer, doorIndex: integer): Vector3Mp;
	canShuffleSeat(vehicle: integer, seatIndex: integer): boolean;
	getNumModKits(vehicle: integer): integer;
	setModKit(vehicle: integer, modKit: integer): void;
	getModKit(vehicle: integer): integer;
	getModKitType(vehicle: integer): integer;
	getWheelType(vehicle: integer): integer;
	setWheelType(vehicle: integer, WheelType: integer): void;
	getNumModColors(paintType: integer, p1: boolean): integer;
	setModColor1(vehicle: integer, paintType: integer, color: integer, pearlescentColor: integer): void;
	setModColor2(vehicle: integer, paintType: integer, color: integer): void;
	getModColor1(vehicle: integer): GetVehicleModColor1Result;
	getModColor2(vehicle: integer): GetVehicleModColor2Result;
	getModColor1Name(vehicle: integer, p1: boolean): string;
	getModColor2Name(vehicle: integer): string;
	haveModsStreamedIn(vehicle: integer): boolean;
	setMod(vehicle: integer, modType: integer, modIndex: integer, customTires: boolean): void;
	getMod(vehicle: integer, modType: integer): integer;
	getModVariation(vehicle: integer, modType: integer): boolean;
	getNumMods(vehicle: integer, modType: integer): integer;
	removeMod(vehicle: integer, modType: integer): void;
	toggleMod(vehicle: integer, modType: integer, toggle: boolean): void;
	isToggleModOn(vehicle: integer, modType: integer): boolean;
	getModTextLabel(vehicle: integer, modType: integer, modValue: integer): string;
	getModSlotName(vehicle: integer, modType: integer): string;
	getLiveryName(vehicle: integer, liveryIndex: integer): string;
	getModModifierValue(vehicle: integer, modType: integer, modIndex: integer): number;
	getModIdentifierHash(vehicle: integer, modType: integer, modIndex: integer): integer;
	preloadMod(p0: integer, modType: integer, p2: integer): void;
	hasPreloadModsFinished(p0: integer): boolean;
	releasePreloadMods(vehicle: integer): void;
	setTyreSmokeColor(vehicle: integer, r: integer, g: integer, b: integer): void;
	getTyreSmokeColor(vehicle: integer): GetVehicleTyreSmokeColorResult;
	setWindowTint(vehicle: integer, tint: integer): void;
	getWindowTint(vehicle: integer): integer;
	getNumWindowTints(): integer;
	getColor(vehicle: integer): GetVehicleColorResult;
	getCauseOfDestruction(vehicle: integer): integer;
	getIsLeftHeadlightDamaged(vehicle: integer): boolean;
	getIsRightHeadlightDamaged(vehicle: integer): boolean;
	isEngineOnFire(vehicle: integer): boolean;
	modifyTopSpeed(vehicle: integer, value: number): void;
	setMaxSpeed(vehicle: integer, speed: number): void;
	addCombatAngledAvoidanceArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): integer;
	removeCombatAvoidanceArea(p0: integer): void;
	isAnyPedRappellingFromHeli(vehicle: integer): boolean;
	setCheatPowerIncrease(vehicle: integer, value: number): void;
	setIsWanted(vehicle: integer, state: boolean): void;
	setBoatBoomPositionRatio(vehicle: integer, ratio: number): void;
	getBoatBoomPositionRatio2(vehicle: integer, p1: boolean): void;
	getBoatBoomPositionRatio3(vehicle: integer, p1: boolean): void;
	getBoatBoomPositionRatio(vehicle: integer): number;
	disablePlaneAileron(vehicle: integer, p1: boolean, p2: boolean): void;
	getIsEngineRunning(vehicle: integer): boolean;
	setUseAlternateHandling(vehicle: integer, toggle: boolean): void;
	setBikeOnStand(vehicle: integer, x: number, y: number): void;
	setLastDriven(vehicle: integer): void;
	getLastDriven(): integer;
	clearLastDriven(): void;
	setHasBeenDrivenFlag(vehicle: integer, toggle: boolean): void;
	setTaskGotoPlaneMinHeightAboveTerrain(plane: integer, height: integer): void;
	setLodMultiplier(vehicle: integer, multiplier: number): void;
	setCanSaveInGarage(vehicle: integer, toggle: boolean): void;
	getNumberOfBrokenOffBones(vehicle: integer): integer;
	getNumberOfBrokenBones(vehicle: integer): integer;
	copyDamages(sourceVehicle: integer, targetVehicle: integer): void;
	setLightsCutoffDistanceTweak(distance: number): void;
	setShootAtTarget(driver: integer, entity: integer, xTarget: number, yTarget: number, zTarget: number): void;
	getLockOnTarget(vehicle: integer): integer;
	setForceHd(vehicle: integer, toggle: boolean): void;
	getPlateType(vehicle: integer): integer;
	trackVisibility(vehicle: integer): void;
	isVisible(vehicle: integer): boolean;
	setGravity(vehicle: integer, toggle: boolean): void;
	setEnableSlipstreaming(toggle: boolean): void;
	getCurrentSlipstreamDraft(vehicle: integer): number;
	isSlipstreamLeader(vehicle: integer): boolean;
	setInactiveDuringPlayback(vehicle: integer, toggle: boolean): void;
	setActiveDuringPlayback(p0: integer, p1: boolean): void;
	isSprayable(vehicle: integer): boolean;
	setEngineCanDegrade(vehicle: integer, toggle: boolean): void;
	setShadowEffect(vehicle: integer, p1: integer, p2: integer): void;
	removeShadowEffect(vehicle: integer): void;
	isPlaneLandingGearIntact(plane: integer): boolean;
	arePlanePropellersIntact(plane: integer): boolean;
	setCanDeformWheels(vehicle: integer, toggle: boolean): void;
	isStolen(vehicle: integer): boolean;
	setIsStolen(vehicle: integer, isStolen: boolean): void;
	setPlaneTurbulenceMultiplier(vehicle: integer, multiplier: number): void;
	arePlaneWingsIntact(plane: integer): boolean;
	detachFromCargobob(vehicle: integer, cargobob: integer): void;
	detachFromAnyCargobob(vehicle: integer): boolean;
	detachEntityFromCargobob(cargobob: integer, entity: integer): integer;
	isAttachedToCargobob(cargobob: integer, vehicleAttached: integer): boolean;
	getAttachedToCargobob(cargobob: integer): integer;
	getEntityAttachedToCargobob(p0: integer): integer;
	attachToCargobob(vehicle: integer, cargobob: integer, p2: integer, x: number, y: number, z: number): void;
	attachEntityToCargobob(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;
	setCargobobHookCanDetach(cargobob: integer, toggle: boolean): void;
	getCargobobHookPosition(cargobob: integer): Vector3Mp;
	doesCargobobHavePickUpRope(cargobob: integer): boolean;
	createPickUpRopeForCargobob(cargobob: integer, state: integer): void;
	removePickUpRopeForCargobob(cargobob: integer): void;
	setPickupRopeLengthForCargobob(cargobob: integer, length1: number, length2: number, p3: boolean): void;
	setCargobobPickupRopeDampingMultiplier(p0: integer, p1: integer): void;
	setCargobobPickupRopeType(p0: integer, p1: integer): void;
	doesCargobobHavePickupMagnet(cargobob: integer): boolean;
	setCargobobPickupMagnetActive(cargobob: integer, isActive: boolean): void;
	setCargobobPickupMagnetStrength(cargobob: integer, strength: number): void;
	setCargobobPickupMagnetEffectRadius(cargobob: integer, p1: number): void;
	setCargobobPickupMagnetReducedFalloff(cargobob: integer, p1: number): void;
	setCargobobPickupMagnetPullRopeLength(cargobob: integer, p1: number): void;
	setCargobobPickupMagnetPullStrength(cargobob: integer, p1: number): void;
	setCargobobPickupMagnetFalloff(vehicle: integer, p1: number): void;
	setCargobobPickupMagnetReducedStrength(vehicle: integer, cargobob: integer): void;
	doesHaveWeapons(vehicle: integer): boolean;
	disableWeapon(disabled: boolean, weaponHash: integer, vehicle: integer, owner: integer): void;
	isWeaponDisabled(weaponHash: integer, vehicle: integer, owner: integer): boolean;
	setActiveForPedNavigation(vehicle: integer, toggle: boolean): void;
	getClass(vehicle: integer): integer;
	getClassFromName(modelHash: integer): integer;
	setPlayersLast(vehicle: integer): void;
	setCanBeUsedByFleeingPeds(vehicle: integer, toggle: boolean): void;
	setDropsMoneyWhenBlownUp(vehicle: integer, toggle: boolean): void;
	setJetEngineOn(vehicle: integer, toggle: boolean): void;
	setHandlingHashForAi(vehicle: integer, hash: integer): void;
	setExtendedRemovalRange(vehicle: integer, range: integer): void;
	setSteeringBiasScalar(p0: integer, p1: number): void;
	setHelicopterRollPitchYawMult(helicopter: integer, multiplier: number): void;
	setFrictionOverride(vehicle: integer, friction: number): void;
	setWheelsCanBreakOffWhenBlowUp(vehicle: integer, toggle: boolean): void;
	setCeilingHeight(vehicle: integer, height: number): void;
	clearRouteHistory(vehicle: integer): void;
	doesExistWithDecorator(decorator: string): boolean;
	setExclusiveDriver(vehicle: integer, ped: integer, index: integer): void;
	isPedExclusiveDriverOf(ped: integer, vehicle: integer): integer;
	disablePlanePropeller(vehicle: integer, p1: integer): void;
	setForceAfterburner(vehicle: integer, toggle: boolean): void;
	setDisableWindowCollisions(vehicle: integer, toggle: boolean): void;
	setDistantCarsEnabled(toggle: boolean): void;
	setNeonLightsColour(vehicle: integer, r: integer, g: integer, b: integer): void;
	getNeonLightsColour(vehicle: integer): GetVehicleNeonLightsColourResult;
	setNeonLightEnabled(vehicle: integer, index: integer, toggle: boolean): void;
	isNeonLightEnabled(vehicle: integer, index: integer): boolean;
	disableNeonLights(vehicle: integer, toggle: boolean): void;
	setDisableSuperdummyMode(vehicle: integer, p1: boolean): void;
	requestDashboardScaleformMovie(vehicle: integer): void;
	getBodyHealth(vehicle: integer): number;
	setBodyHealth(vehicle: integer, value: number): void;
	getSuspensionBounds(vehicle: integer): GetVehicleSuspensionBoundsResult;
	getSuspensionHeight(vehicle: integer): number;
	setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
	getNumberOfDoors(vehicle: integer): integer;
	setHydraulicRaised(p0: integer, p1: integer): void;
	getBodyHealth2(vehicle: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): number;
	setKersAllowed(vehicle: integer, toggle: boolean): void;
	getHasKers(vehicle: integer): boolean;
	setHydraulicWheelValue(vehicle: integer, wheelId: integer, value: number): void;
	setCamberedWheelsDisabled(p0: integer, p1: integer): void;
	setHydraulicWheelState(p0: integer, p1: integer): void;
	setHydraulicWheelStateTransition(vehicle: integer, wheelId: integer, state: integer, value: number, p4: integer): void;
	setDamageModifier(vehicle: integer, p1: number): integer;
	setUnkDamageMultiplier(vehicle: integer, multiplier: number): void;
	setControlsInverted(vehicle: integer, state: boolean): void;
	setRampLaunchModifier(p0: integer, p1: integer): void;
	getIsDoorValid(vehicle: integer, doorIndex: integer): boolean;
	setRocketBoostRefillTime(vehicle: integer, seconds: number): void;
	getHasRocketBoost(vehicle: integer): boolean;
	isRocketBoostActive(vehicle: integer): boolean;
	setRocketBoostActive(vehicle: integer, active: boolean): void;
	getHasRetractableWheels(vehicle: integer): boolean;
	getIsWheelsLoweredStateActive(vehicle: integer): boolean;
	raiseRetractableWheels(vehicle: integer): void;
	lowerRetractableWheels(vehicle: integer): void;
	getCanJump(vehicle: integer): boolean;
	setUseHigherJumpForce(vehicle: integer, toggle: boolean): void;
	setWeaponCapacity(vehicle: integer, weaponIndex: integer, capacity: integer): void;
	getWeaponCapacity(vehicle: integer, weaponIndex: integer): integer;
	getHasParachute(vehicle: integer): boolean;
	getCanActivateParachute(vehicle: integer): boolean;
	setParachuteActive(vehicle: integer, active: boolean): void;
	setReceivesRampDamage(vehicle: integer, toggle: boolean): void;
	setRampSidewaysLaunchMotion(p0: integer, p1: integer): void;
	setRampUpwardsLaunchMotion(p0: integer, p1: integer): void;
	setWeaponsDisabled(p0: integer, p1: integer): void;
	setParachuteModel(vehicle: integer, modelHash: integer): void;
	setParachuteTextureVariatiion(vehicle: integer, textureVariation: integer): void;
	getAllS(): GetAllVehiclesResult;
	setRocketBoostPercentage(vehicle: integer, percentage: number): void;
	setOppressorTransformState(vehicle: integer, state: boolean): void;
	disableWorldCollision(vehicle: integer): void;
	setCargobobHookCanAttach(vehicle: integer, toggle: boolean): void;
	setBombCount(vehicle: integer, bombCount: integer): void;
	getBombCount(vehicle: integer): integer;
	setCountermeasureCount(vehicle: integer, counterMeasureCount: integer): void;
	getCountermeasureCount(vehicle: integer): integer;
	setHoverTransformRatio(vehicle: integer, ratio: number): void;
	setHoverTransformPercentage(vehicle: integer, percentage: number): void;
	setHoverTransformEnabled(vehicle: integer, toggle: boolean): void;
	setHoverTransformActive(vehicle: integer, toggle: boolean): void;
	findRandomPointInSpace(ped: integer): Vector3Mp;
	setDeployHeliStubWings(vehicle: integer, deploy: boolean, p2: boolean): void;
	areHeliStubWingsDeployed(vehicle: integer): boolean;
	setTurretUnk(vehicle: integer, index: integer, toggle: boolean): void;
	setSpecialflightWingRatio(vehicle: integer, ratio: number): void;
	setDisableTurretMovementThisFrame(vehicle: integer, turretId: integer): void;
	setUnkFloat0X104ForSubmarineTask(vehicle: integer, value: number): void;
	setUnkBool0X102ForSubmarineTask(vehicle: integer, value: boolean): void;
	getIsShuntBoostActive(vehicle: integer): boolean;
	getLastRammed(vehicle: integer): integer;
	setDisableUnk(toggle: boolean): void;
	setNitroEnabled(vehicle: integer, toggle: boolean, level: number, power: number, rechargeTime: number, disableSound: boolean): void;
	setWheelsDealDamage(vehicle: integer, toggle: boolean): void;
	setDisableUnk2(toggle: boolean): void;
	getDoesHaveTombstone(vehicle: integer): boolean;
	hideTombstone(vehicle: integer, toggle: boolean): void;
	getIsEmpDisabled(vehicle: integer): boolean;
	getTyreHealth(vehicle: integer, wheelIndex: integer): number;
	setTyreHealth(vehicle: integer, wheelIndex: integer, health: number): void;
	getTyreWearMultiplier(vehicle: integer, wheelIndex: integer): number;
	setTyreWearMultiplier(vehicle: integer, wheelIndex: integer, multiplier: number): void;
	setTyreSoftnessMultiplier(vehicle: integer, wheelIndex: integer, multiplier: number): void;
	setTyreTractionLossMultiplier(vehicle: integer, wheelIndex: integer, multiplier: number): void;

	unk: GameVehicleUnk;
}

interface GameWater extends GameWaterLegacy {
	getHeight(x: number, y: number, z: number): number;
	getHeightNoWaves(x: number, y: number, z: number): number;
	testProbeAgainst(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Vector3Mp;
	testProbeAgainstAll(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer, p7: integer): boolean;
	testVerticalProbeAgainstAll(x: number, y: number, z: number, p3: integer): number;
	modify(x: number, y: number, radius: number, height: number): void;
	addCurrentRise(x: number, y: number, z: number, radius: number, unk: number): integer;
	removeCurrentRise(p0: integer): void;
	setDeepOceanScaler(intensity: number): void;
	getDeepOceanScaler(): number;
	resetDeepOceanScaler(): void;

	unk: GameWaterUnk;
}

interface GameWeapon extends GameWeaponLegacy {
	enableLaserSightRendering(toggle: boolean): void;
	getComponentTypeModel(componentHash: integer): integer;
	getTypeModel(weaponHash: integer): integer;
	getTypeSlot(weaponHash: integer): integer;
	getTypeGroup(weaponHash: integer): integer;
	getComponentVariantExtraComponentCount(componentHash: integer): integer;
	getComponentVariantExtraComponentModel(componentHash: integer, extraComponentIndex: integer): integer;
	setCurrentPed(ped: integer, weaponHash: integer, bForceInHand: boolean): void;
	getCurrentPed(ped: integer, p2: boolean): integer;
	getCurrentPedEntityIndex(ped: integer, p1: integer): integer;
	getBestPed(ped: integer, p1: boolean): integer;
	setCurrentPedVehicle(ped: integer, weaponHash: integer): boolean;
	getCurrentPedVehicle(ped: integer): integer;
	isPedArmed(ped: integer, typeFlags: integer): boolean;
	isValid(weaponHash: integer): boolean;
	hasPedGot(ped: integer, weaponHash: integer, p2: boolean): boolean;
	isPedReadyToShoot(ped: integer): boolean;
	getPedTypeInSlot(ped: integer, weaponSlot: integer): integer;
	getAmmoInPed(ped: integer, weaponhash: integer): integer;
	addAmmoToPed(ped: integer, weaponHash: integer, ammo: integer): void;
	setPedAmmo(ped: integer, weaponHash: integer, ammo: integer, p3: boolean): void;
	setPedInfiniteAmmo(ped: integer, toggle: boolean, weaponHash: integer): void;
	setPedInfiniteAmmoClip(ped: integer, toggle: boolean): void;
	giveToPed(ped: integer, weaponHash: integer, ammoCount: integer, isHidden: boolean, bForceInHand: boolean): void;
	giveDelayedToPed(ped: integer, weaponHash: integer, ammoCount: integer, bForceInHand: boolean): void;
	removeAllPedS(ped: integer, p1: boolean): void;
	removeFromPed(ped: integer, weaponHash: integer): void;
	hidePedForScriptedCutscene(ped: integer, toggle: boolean): void;
	setPedCurrentVisible(ped: integer, visible: boolean, deselectWeapon: boolean, p3: boolean, p4: boolean): void;
	setPedDropsWeaponsWhenDead(ped: integer, toggle: boolean): void;
	hasPedBeenDamagedBy(ped: integer, weaponHash: integer, weaponType: integer): boolean;
	clearPedLastDamage(ped: integer): void;
	hasEntityBeenDamagedBy(entity: integer, weaponHash: integer, weaponType: integer): boolean;
	clearEntityLastDamage(entity: integer): void;
	setPedDrops(ped: integer): void;
	setPedDropsInventory(ped: integer, weaponHash: integer, xOffset: number, yOffset: number, zOffset: number, ammoCount: integer): void;
	getMaxAmmoInClip(ped: integer, weaponHash: integer, p2: boolean): integer;
	getAmmoInClip(ped: integer, weaponHash: integer): integer;
	setAmmoInClip(ped: integer, weaponHash: integer, ammo: integer): boolean;
	getMaxAmmo(ped: integer, weaponHash: integer): integer;
	getMaxAmmoByType(ped: integer, ammoTypeHash: integer): integer;
	addAmmoToPedByType(ped: integer, ammoTypeHash: integer, ammo: integer): void;
	setPedAmmoByType(ped: integer, ammoTypeHash: integer, ammo: integer): void;
	getPedAmmoByType(ped: integer, ammoTypeHash: integer): integer;
	setPedAmmoToDrop(ped: integer, p1: integer): void;
	setPickupAmmoAmountScaler(p0: number): void;
	getPedAmmoTypeFrom(ped: integer, weaponHash: integer): integer;
	getPedAmmoTypeFrom2(ped: integer, weaponHash: integer): integer;
	getPedLastImpactCoord(ped: integer): Vector3Mp;
	setPedGadget(ped: integer, gadgetHash: integer, p2: boolean): void;
	getIsPedGadgetEquipped(ped: integer, gadgetHash: integer): boolean;
	getSelectedPed(ped: integer): integer;
	explodeProjectiles(ped: integer, weaponHash: integer, p2: boolean): void;
	removeAllProjectilesOfType(weaponHash: integer, explode: boolean): void;
	getLockonDistanceOfCurrentPed(ped: integer): number;
	getMaxRangeOfCurrentPed(ped: integer): number;
	hasVehicleGotProjectileAttached(driver: integer, vehicle: integer, weaponHash: integer, p3: integer): boolean;
	giveComponentToPed(ped: integer, weaponHash: integer, componentHash: integer): void;
	removeComponentFromPed(ped: integer, weaponHash: integer, componentHash: integer): void;
	hasPedGotComponent(ped: integer, weaponHash: integer, componentHash: integer): boolean;
	isPedComponentActive(ped: integer, weaponHash: integer, componentHash: integer): boolean;
	refillAmmoInstantly(ped: integer): boolean;
	makePedReload(ped: integer): boolean;
	requestAsset(weaponHash: integer, p1: integer, p2: integer): void;
	hasAssetLoaded(weaponHash: integer): boolean;
	removeAsset(weaponHash: integer): void;
	createObject(weaponHash: integer, ammoCount: integer, x: number, y: number, z: number, showWorldModel: boolean, scale: number, p7: integer, p8: integer, p9: integer): integer;
	giveComponentToWeaponObject(weaponObject: integer, addonHash: integer): void;
	removeComponentFromWeaponObject(p0: integer, p1: integer): void;
	hasGotWeaponComponent(weapon: integer, addonHash: integer): boolean;
	giveObjectToPed(weaponObject: integer, ped: integer): void;
	doesTakeWeaponComponent(weaponHash: integer, componentHash: integer): boolean;
	getObjectFromPed(ped: integer, p1: boolean): integer;
	giveLoadoutToPed(ped: integer, loadoutHash: integer): void;
	setPedTintIndex(ped: integer, weaponHash: integer, tintIndex: integer): void;
	getPedTintIndex(ped: integer, weaponHash: integer): integer;
	setObjectTintIndex(weapon: integer, tintIndex: integer): void;
	getObjectTintIndex(weapon: integer): integer;
	getTintCount(weaponHash: integer): integer;
	setPedLiveryColor(ped: integer, weaponHash: integer, camoComponentHash: integer, colorIndex: integer): void;
	getPedLiveryColor(ped: integer, weaponHash: integer, camoComponentHash: integer): integer;
	setObjectLiveryColor(weaponObject: integer, camoComponentHash: integer, colorIndex: integer): void;
	getObjectLiveryColor(weaponObject: integer, camoComponentHash: integer): integer;
	getHudStats(weaponHash: integer): integer;
	getComponentHudStats(componentHash: integer): integer;
	getDamage(weaponHash: integer, componentHash: integer): number;
	getClipSize(weaponHash: integer): integer;
	getTimeBetweenShots(weaponHash: integer): number;
	setPedChanceOfFiringBlanks(ped: integer, xBias: number, yBias: number): void;
	setPedShootOrdnance(ped: integer, p1: number): integer;
	requestHighDetailModel(weaponObject: integer): void;
	setDamageModifierThisFrame(weaponHash: integer, damageMultiplier: number): void;
	isPedCurrentSilenced(ped: integer): boolean;
	isFlashLightOn(ped: integer): boolean;
	setFlashLightFadeDistance(distance: number): integer;
	setFlashLightEnabled(ped: integer, toggle: boolean): void;
	setAnimationOverride(ped: integer, animStyle: integer): void;
	getDamageType(weaponHash: integer): integer;
	canUseOnParachute(weaponHash: integer): boolean;
	createAirDefenseSphere(x: number, y: number, z: number, radius: number, p4: number, p5: number, p6: number, weaponHash: integer): integer;
	createAirDefenseArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, weaponHash: integer): integer;
	removeAirDefenseZone(zoneId: integer): boolean;
	removeAllAirDefenseZones(): void;
	setPlayerAirDefenseZoneFlag(player: integer, zoneId: integer, enable: boolean): void;
	isAnyAirDefenseZoneInsideSphere(x: number, y: number, z: number, radius: number): integer;
	fireAirDefense(zoneId: integer, x: number, y: number, z: number): void;
	doesAirDefenseZoneExist(zoneId: integer): boolean;
	setCanPedEquip(ped: integer, weaponHash: integer, toggle: boolean): void;
	setCanPedEquipAllS(ped: integer, toggle: boolean): void;

	unk: GameWeaponUnk;
}

interface GameZone extends GameZoneLegacy {
	getAtCoords(x: number, y: number, z: number): integer;
	getFromNameId(zoneName: string): integer;
	getPopschedule(zoneId: integer): integer;
	getNameOf(x: number, y: number, z: number): string;
	setEnabled(zoneId: integer, toggle: boolean): void;
	getScumminess(zoneId: integer): integer;
	overridePopscheduleVehicleModel(scheduleId: integer, vehicleHash: integer): void;
	clearPopscheduleOverrideVehicleModel(scheduleId: integer): void;
	getHashOfMapAreaAtCoords(x: number, y: number, z: number): integer;
}

interface MpSystem extends GameSystem {
}

interface MpApp extends GameApp {
}

interface MpAudio extends GameAudio {
}

interface MpBrain extends GameBrain {
}

interface MpCam extends GameCam {
}

interface MpClock extends GameClock {
}

interface MpCutscene extends GameCutscene {
}

interface MpDatafile extends GameDatafile {
}

interface MpDecorator extends GameDecorator {
}

interface MpDlc extends GameDlc {
}

interface MpEntity extends GameEntity {
}

interface MpEvent extends GameEvent {
}

interface MpFiles extends GameFiles {
}

interface MpFire extends GameFire {
}

interface MpGraphics extends GameGraphics {
}

interface MpHud extends GameHud {
}

interface MpInterior extends GameInterior {
}

interface MpItemset extends GameItemset {
}

interface MpLoadingscreen extends GameLoadingscreen {
}

interface MpLocalization extends GameLocalization {
}

interface MpMisc extends GameMisc {
}

interface MpMobile extends GameMobile {
}

interface MpNetwork extends GameNetwork {
}

interface MpObject extends GameObject {
}

interface MpPad extends GamePad {
}

interface MpPathfind extends GamePathfind {
}

interface MpPed extends GamePed {
}

interface MpPhysics extends GamePhysics {
}

interface MpPlayer extends GamePlayer {
}

interface MpRecording extends GameRecording {
}

interface MpReplay extends GameReplay {
}

interface MpScript extends GameScript {
}

interface MpShapetest extends GameShapetest {
}

interface MpStats extends GameStats {
}

interface MpStreaming extends GameStreaming {
}

interface MpTask extends GameTask {
}

interface MpVehicle extends GameVehicle {
}

interface MpWater extends GameWater {
}

interface MpWeapon extends GameWeapon {
}

interface MpZone extends GameZone {
}



interface MpGame2 {
	system: MpSystem;
	app: MpApp;
	audio: MpAudio;
	brain: MpBrain;
	cam: MpCam;
	clock: MpClock;
	cutscene: MpCutscene;
	datafile: MpDatafile;
	decorator: MpDecorator;
	dlc: MpDlc;
	entity: MpEntity;
	event: MpEvent;
	files: MpFiles;
	fire: MpFire;
	graphics: MpGraphics;
	hud: MpHud;
	interior: MpInterior;
	itemset: MpItemset;
	loadingscreen: MpLoadingscreen;
	localization: MpLocalization;
	misc: MpMisc;
	mobile: MpMobile;
	network: MpNetwork;
	object: MpObject;
	pad: MpPad;
	pathfind: MpPathfind;
	ped: MpPed;
	physics: MpPhysics;
	player: MpPlayer;
	recording: MpRecording;
	replay: MpReplay;
	script: MpScript;
	shapetest: MpShapetest;
	stats: MpStats;
	streaming: MpStreaming;
	task: MpTask;
	vehicle: MpVehicle;
	water: MpWater;
	weapon: MpWeapon;
	zone: MpZone;
	gameplay: MpMisc;
	ai: MpTask;
	time: MpClock;
	rope: MpPhysics;
	controls: MpPad;
	ui: MpHud;

	invoke(hash: string, ...args: any[]): any;
	invokeFloat(hash: string, ...args: any[]): any;
	invokeString(hash: string, ...args: any[]): any;
	invokeVector3(hash: string, ...args: any[]): any;
	joaat(text: string): Hash;
	joaat(textArray: string[]): Hash[];
	wait(ms: number): void;
	waitAsync(ms: number): Promise<void>;
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------

declare const mp: Mp;
