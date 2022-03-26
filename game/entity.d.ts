/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

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

interface GetEntityMatrixResult {
	forwardVector: Vector3Mp;
	rightVector: Vector3Mp;
	upVector: Vector3Mp;
	position: Vector3Mp;
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

interface GetEntityQuaternionResult {
	x: number;
	y: number;
	z: number;
	w: number;
}

interface GetEntityScriptResult {
	script: Handle;
	result: string;
}

interface GameEntityLegacy {
	/**
	 * Native: ENTITY::GET_ANIM_DURATION
	 *
	 * Hash: 0xFEDDF04D62B8D790 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEDDF04D62B8D790)
	 */
	getEntityAnimDuration(animDict: string, animName: string): number;

	/**
	 * Native: ENTITY::IS_AN_ENTITY
	 *
	 * Hash: 0x731EC8A916BD11A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x731EC8A916BD11A1)
	 */
	isAnEntity(handle: integer): boolean;

	/**
	 * Native: ENTITY::PLAY_SYNCHRONIZED_MAP_ENTITY_ANIM
	 *
	 * Hash: 0xB9C54555ED30FBC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9C54555ED30FBC4)
	 */
	playSynchronizedMapEntityAnim(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p8: number,
		p9: number,
		p10: integer,
		p11: number
	): PlaySynchronizedMapEntityAnimResult;

	/**
	 * Native: ENTITY::STOP_SYNCHRONIZED_MAP_ENTITY_ANIM
	 *
	 * Hash: 0x11E79CAB7183B6F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11E79CAB7183B6F5)
	 */
	stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: number): boolean;

	/**
	 * Native: ENTITY::WOULD_ENTITY_BE_OCCLUDED
	 *
	 * Hash: 0xEE5D2A122E09EC42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE5D2A122E09EC42)
	 */
	wouldEntityBeOccluded(entityModelHash: integer, x: number, y: number, z: number, p4: boolean): boolean;
}

interface GameEntityUnk {
	/**
	 * Native: ENTITY::_0x1A092BB0C3808B96
	 *
	 * Hash: 0x1A092BB0C3808B96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A092BB0C3808B96)
	 */
	_0x1A092BB0C3808B96(entity: Handle, p1: boolean): void;

	/**
	 * Native: ENTITY::_0x352E2B5CF420BF3B
	 *
	 * Hash: 0x352E2B5CF420BF3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x352E2B5CF420BF3B)
	 */
	_0x352E2B5CF420BF3B(p0: integer, p1: integer): void;

	/**
	 * Native: ENTITY::_0x36F32DE87082343E
	 *
	 * Hash: 0x36F32DE87082343E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36F32DE87082343E)
	 */
	_0x36F32DE87082343E(p0: integer, p1: integer): void;

	/**
	 * Native: ENTITY::_0x490861B88F4FD846
	 *
	 * Hash: 0x490861B88F4FD846 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x490861B88F4FD846)
	 */
	_0x490861B88F4FD846(entity: Handle): void;

	/**
	 * Native: ENTITY::_0x5C3B791D580E0BC2
	 *
	 * Hash: 0x5C3B791D580E0BC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C3B791D580E0BC2)
	 */
	_0x5C3B791D580E0BC2(entity: Handle, p1: number): void;

	/**
	 * Native: ENTITY::_0x68B562E124CC0AEF
	 *
	 * Hash: 0x68B562E124CC0AEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68B562E124CC0AEF)
	 */
	_0x68B562E124CC0AEF(pickup: Handle, pickup2: Handle): void;

	/**
	 * Native: ENTITY::_0x694E00132F2823ED
	 *
	 * Hash: 0x694E00132F2823ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x694E00132F2823ED)
	 */
	_0x694E00132F2823ED(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::_0x78E8E3A640178255
	 *
	 * Hash: 0x78E8E3A640178255 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78E8E3A640178255)
	 */
	_0x78E8E3A640178255(entity: Handle): void;

	/**
	 * Native: ENTITY::_0xB17BC6453F6CF5AC
	 *
	 * Hash: 0xB17BC6453F6CF5AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB17BC6453F6CF5AC)
	 */
	_0xB17BC6453F6CF5AC(p0: integer, p1: integer): void;

	/**
	 * Native: ENTITY::_0xC34BC448DA29F5E9
	 *
	 * Hash: 0xC34BC448DA29F5E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC34BC448DA29F5E9)
	 */
	_0xC34BC448DA29F5E9(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::_0xCEA7C8E1B48FF68C
	 *
	 * Hash: 0xCEA7C8E1B48FF68C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEA7C8E1B48FF68C)
	 */
	_0xCEA7C8E1B48FF68C(p0: integer, p1: integer): void;

	/**
	 * Native: ENTITY::_0xD7B80E7C3BEFC396
	 *
	 * Hash: 0xD7B80E7C3BEFC396 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7B80E7C3BEFC396)
	 */
	_0xD7B80E7C3BEFC396(pickup: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::_0xDC6F8601FAF2E893
	 *
	 * Hash: 0xDC6F8601FAF2E893 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC6F8601FAF2E893)
	 */
	_0xDC6F8601FAF2E893(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::_0xE66377CDDADA4810
	 *
	 * Hash: 0xE66377CDDADA4810 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE66377CDDADA4810)
	 */
	_0xE66377CDDADA4810(entity: Handle, p1: boolean): void;
}

interface GameEntity extends GameEntityLegacy {
	/**
	 * Native: ENTITY::APPLY_FORCE_TO_ENTITY
	 *
	 * Hash: 0xC5F68BE9613E2D18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5F68BE9613E2D18)
	 */
	applyForceTo(
		entity: Handle,
		forceFlags: integer,
		x: number,
		y: number,
		z: number,
		offX: number,
		offY: number,
		offZ: number,
		boneIndex: integer,
		isDirectionRel: boolean,
		ignoreUpVec: boolean,
		isForceRel: boolean,
		p12: boolean,
		p13: boolean
	): void;

	/**
	 * Native: ENTITY::APPLY_FORCE_TO_ENTITY_CENTER_OF_MASS
	 *
	 * Hash: 0x18FF00FC7EFF559E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18FF00FC7EFF559E)
	 */
	applyForceToCenterOfMass(
		entity: Handle,
		forceType: integer,
		x: number,
		y: number,
		z: number,
		p5: boolean,
		isDirectionRel: boolean,
		isForceRel: boolean,
		p8: boolean
	): void;

	/**
	 * Native: ENTITY::_ATTACH_ENTITY_BONE_TO_ENTITY_BONE
	 *
	 * Hash: 0x5C48B75732C8456C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C48B75732C8456C)
	 */
	attachBoneToEntityBone(
		entity1: Handle,
		entity2: Handle,
		boneIndex1: integer,
		boneIndex2: integer,
		p4: boolean,
		p5: boolean
	): void;

	/**
	 * Native: ENTITY::_ATTACH_ENTITY_BONE_TO_ENTITY_BONE_PHYSICALLY
	 *
	 * Hash: 0xFD1695C5D3B05439 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD1695C5D3B05439)
	 */
	attachBoneToEntityBonePhysically(
		entity1: Handle,
		entity2: Handle,
		boneIndex1: integer,
		boneIndex2: integer,
		p4: boolean,
		p5: boolean
	): void;

	/**
	 * Native: ENTITY::ATTACH_ENTITY_TO_ENTITY
	 *
	 * Hash: 0x6B9BBD38AB0796DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B9BBD38AB0796DF)
	 */
	attachToEntity(
		entity1: Handle,
		entity2: Handle,
		boneIndex: integer,
		xPos: number,
		yPos: number,
		zPos: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p9: boolean,
		useSoftPinning: boolean,
		collision: boolean,
		isPed: boolean,
		vertexIndex: integer,
		fixedRot: boolean
	): void;

	/**
	 * Native: ENTITY::ATTACH_ENTITY_TO_ENTITY_PHYSICALLY
	 *
	 * Hash: 0xC3675780C92F90F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3675780C92F90F9)
	 */
	attachToEntityPhysically(
		entity1: Handle,
		entity2: Handle,
		boneIndex1: integer,
		boneIndex2: integer,
		xPos1: number,
		yPos1: number,
		zPos1: number,
		xPos2: number,
		yPos2: number,
		zPos2: number,
		xRot: number,
		yRot: number,
		zRot: number,
		breakForce: number,
		fixedRot: boolean,
		p15: boolean,
		collision: boolean,
		p17: boolean,
		p18: integer
	): void;

	/**
	 * Native: ENTITY::CLEAR_ENTITY_LAST_DAMAGE_ENTITY
	 *
	 * Hash: 0xA72CD9CA74A5ECBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA72CD9CA74A5ECBA)
	 */
	clearLastDamageEntity(entity: Handle): void;

	/**
	 * Native: ENTITY::CREATE_FORCED_OBJECT
	 *
	 * Hash: 0x150E808B375A385A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x150E808B375A385A)
	 */
	createForcedObject(x: number, y: number, z: number, p3: integer, modelHash: integer, p5: boolean): void;

	/**
	 * Native: ENTITY::CREATE_MODEL_HIDE
	 *
	 * Hash: 0x8A97BCA30A0CE478 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A97BCA30A0CE478)
	 */
	createModelHide(x: number, y: number, z: number, radius: number, modelHash: integer, p5: boolean): void;

	/**
	 * Native: ENTITY::CREATE_MODEL_HIDE_EXCLUDING_SCRIPT_OBJECTS
	 *
	 * Hash: 0x3A52AE588830BF7F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A52AE588830BF7F)
	 */
	createModelHideExcludingScriptObjects(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: integer,
		p5: boolean
	): void;

	/**
	 * Native: ENTITY::CREATE_MODEL_SWAP
	 *
	 * Hash: 0x92C47782FDA8B2A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92C47782FDA8B2A3)
	 */
	createModelSwap(
		x: number,
		y: number,
		z: number,
		radius: number,
		originalModel: integer,
		newModel: integer,
		p6: boolean
	): void;

	/**
	 * Native: ENTITY::DELETE_ENTITY
	 *
	 * Hash: 0xAE3CBE5BF394C9C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE3CBE5BF394C9C9)
	 */
	delete(entity: Handle): Handle;

	/**
	 * Native: ENTITY::DETACH_ENTITY
	 *
	 * Hash: 0x961AC54BF0613F5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x961AC54BF0613F5D)
	 */
	detach(entity: Handle, dynamic: boolean, collision: boolean): void;

	/**
	 * Native: ENTITY::DOES_ENTITY_BELONG_TO_THIS_SCRIPT
	 *
	 * Hash: 0xDDE6DF5AE89981D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDE6DF5AE89981D2)
	 */
	doesBelongToThisScript(entity: Handle, p1: boolean): boolean;

	/**
	 * Native: ENTITY::DOES_ENTITY_EXIST
	 *
	 * Hash: 0x7239B21A38F536BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7239B21A38F536BA)
	 */
	doesExist(entity: Handle): boolean;

	/**
	 * Native: ENTITY::DOES_ENTITY_HAVE_DRAWABLE
	 *
	 * Hash: 0x060D6E96F8B8E48D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x060D6E96F8B8E48D)
	 */
	doesHaveDrawable(entity: Handle): boolean;

	/**
	 * Native: ENTITY::DOES_ENTITY_HAVE_PHYSICS
	 *
	 * Hash: 0xDA95EA3317CC5064 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA95EA3317CC5064)
	 */
	doesHavePhysics(entity: Handle): boolean;

	/**
	 * Native: ENTITY::_ENABLE_ENTITY_UNK
	 *
	 * Hash: 0x6CE177D014502E8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CE177D014502E8A)
	 */
	enableUnk(entity: Handle): void;

	/**
	 * Native: ENTITY::FIND_ANIM_EVENT_PHASE
	 *
	 * Hash: 0x07F1BE2BCCAA27A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07F1BE2BCCAA27A7)
	 */
	findAnimEventPhase(animDictionary: string, animName: string, p2: string): FindAnimEventPhaseResult;

	/**
	 * Native: ENTITY::FORCE_ENTITY_AI_AND_ANIMATION_UPDATE
	 *
	 * Hash: 0x40FDEDB72F8293B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40FDEDB72F8293B2)
	 */
	forceAiAndAnimationUpdate(entity: Handle): void;

	/**
	 * Native: ENTITY::FREEZE_ENTITY_POSITION
	 *
	 * Hash: 0x428CA6DBD1094446 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x428CA6DBD1094446)
	 */
	freezePosition(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::GET_ENTITY_ALPHA
	 *
	 * Hash: 0x5A47B3B5E63E94C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A47B3B5E63E94C6)
	 */
	getAlpha(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_ANIM_CURRENT_TIME
	 *
	 * Hash: 0x346D81500D088F42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x346D81500D088F42)
	 */
	getAnimCurrentTime(entity: Handle, animDict: string, animName: string): number;

	/**
	 * Native: ENTITY::GET_ANIM_DURATION
	 *
	 * Hash: 0xFEDDF04D62B8D790 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEDDF04D62B8D790)
	 */
	getAnimDuration(animDict: string, animName: string): number;

	/**
	 * Native: ENTITY::GET_ENTITY_ANIM_TOTAL_TIME
	 *
	 * Hash: 0x50BD2730B191E360 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50BD2730B191E360)
	 */
	getAnimTotalTime(entity: Handle, animDict: string, animName: string): number;

	/**
	 * Native: ENTITY::GET_ENTITY_ATTACHED_TO
	 *
	 * Hash: 0x48C2BED9180FE123 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48C2BED9180FE123)
	 */
	getAttachedTo(entity: Handle): Handle;

	/**
	 * Native: ENTITY::_GET_ENTITY_BONE_COUNT
	 *
	 * Hash: 0xB328DCC3A3AA401B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB328DCC3A3AA401B)
	 */
	getBoneCount(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_BONE_INDEX_BY_NAME
	 *
	 * Hash: 0xFB71170B7E76ACBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB71170B7E76ACBA)
	 */
	getBoneIndexByName(entity: Handle, boneName: string): integer;

	/**
	 * Native: ENTITY::_GET_ENTITY_BONE_POSITION_2
	 *
	 * Hash: 0x46F8696933A63C9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46F8696933A63C9B)
	 */
	getBonePosition2(entity: Handle, boneIndex: integer): Vector3Mp;

	/**
	 * Native: ENTITY::_GET_ENTITY_BONE_ROTATION
	 *
	 * Hash: 0xCE6294A232D03786 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE6294A232D03786)
	 */
	getBoneRotation(entity: Handle, boneIndex: integer): Vector3Mp;

	/**
	 * Native: ENTITY::_GET_ENTITY_BONE_ROTATION_LOCAL
	 *
	 * Hash: 0xBD8D32550E5CEBFE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD8D32550E5CEBFE)
	 */
	getBoneRotationLocal(entity: Handle, boneIndex: integer): Vector3Mp;

	/**
	 * Native: ENTITY::_GET_ENTITY_CAN_BE_DAMAGED
	 *
	 * Hash: 0xD95CC5D2AB15A09F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD95CC5D2AB15A09F)
	 */
	getCanBeDamaged(entity: Handle): boolean;

	/**
	 * Native: ENTITY::GET_ENTITY_COLLISION_DISABLED
	 *
	 * Hash: 0xCCF1E97BEFDAE480 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCF1E97BEFDAE480)
	 */
	getCollisionDisabled(entity: Handle): boolean;

	/**
	 * Native: ENTITY::GET_COLLISION_NORMAL_OF_LAST_HIT_FOR_ENTITY
	 *
	 * Hash: 0xE465D4AB7CA6AE72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE465D4AB7CA6AE72)
	 */
	getCollisionNormalOfLastHitFor(entity: Handle): Vector3Mp;

	/**
	 * Native: ENTITY::GET_ENTITY_COORDS
	 *
	 * Hash: 0x3FEF770D40960D5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FEF770D40960D5A)
	 */
	getCoords(entity: Handle, alive: boolean): Vector3Mp;

	/**
	 * Native: ENTITY::GET_ENTITY_FORWARD_VECTOR
	 *
	 * Hash: 0x0A794A5A57F8DF91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A794A5A57F8DF91)
	 */
	getForwardVector(entity: Handle): Vector3Mp;

	/**
	 * Native: ENTITY::GET_ENTITY_FORWARD_X
	 *
	 * Hash: 0x8BB4EF4214E0E6D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BB4EF4214E0E6D5)
	 */
	getForwardX(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_FORWARD_Y
	 *
	 * Hash: 0x866A4A5FAE349510 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x866A4A5FAE349510)
	 */
	getForwardY(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_HEADING
	 *
	 * Hash: 0xE83D4F9BA2A38914 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE83D4F9BA2A38914)
	 */
	getHeading(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_HEALTH
	 *
	 * Hash: 0xEEF059FAD016D209 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEF059FAD016D209)
	 */
	getHealth(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_HEIGHT
	 *
	 * Hash: 0x5A504562485944DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A504562485944DD)
	 */
	getHeight(entity: Handle, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;

	/**
	 * Native: ENTITY::GET_ENTITY_HEIGHT_ABOVE_GROUND
	 *
	 * Hash: 0x1DD55701034110E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DD55701034110E5)
	 */
	getHeightAboveGround(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_LAST_MATERIAL_HIT_BY_ENTITY
	 *
	 * Hash: 0x5C3D0A935F535C4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C3D0A935F535C4C)
	 */
	getLastMaterialHitBy(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_LOD_DIST
	 *
	 * Hash: 0x4159C2762B5791D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4159C2762B5791D6)
	 */
	getLodDist(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_MATRIX
	 *
	 * Hash: 0xECB2FC7235A7D137 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xECB2FC7235A7D137)
	 */
	getMatrix(entity: Handle): GetEntityMatrixResult;

	/**
	 * Native: ENTITY::GET_ENTITY_MAX_HEALTH
	 *
	 * Hash: 0x15D757606D170C3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15D757606D170C3C)
	 */
	getMaxHealth(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_MODEL
	 *
	 * Hash: 0x9F47B058362C84B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F47B058362C84B5)
	 */
	getModel(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_NEAREST_PLAYER_TO_ENTITY
	 *
	 * Hash: 0x7196842CB375CDB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7196842CB375CDB3)
	 */
	getNearestPlayerTo(entity: Handle): Handle;

	/**
	 * Native: ENTITY::GET_NEAREST_PLAYER_TO_ENTITY_ON_TEAM
	 *
	 * Hash: 0x4DC9A62F844D9337 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4DC9A62F844D9337)
	 */
	getNearestPlayerToOnTeam(entity: Handle, team: integer): Handle;

	/**
	 * Native: ENTITY::GET_OBJECT_INDEX_FROM_ENTITY_INDEX
	 *
	 * Hash: 0xD7E3B9735C0F89D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7E3B9735C0F89D6)
	 */
	getObjectIndexFromIndex(entity: Handle): Handle;

	/**
	 * Native: ENTITY::GET_OFFSET_FROM_ENTITY_GIVEN_WORLD_COORDS
	 *
	 * Hash: 0x2274BC1C4885E333 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2274BC1C4885E333)
	 */
	getOffsetFromGivenWorldCoords(entity: Handle, posX: number, posY: number, posZ: number): Vector3Mp;

	/**
	 * Native: ENTITY::GET_OFFSET_FROM_ENTITY_IN_WORLD_COORDS
	 *
	 * Hash: 0x1899F328B0E12848 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1899F328B0E12848)
	 */
	getOffsetFromInWorldCoords(entity: Handle, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;

	/**
	 * Native: ENTITY::GET_PED_INDEX_FROM_ENTITY_INDEX
	 *
	 * Hash: 0x04A2A40C73395041 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04A2A40C73395041)
	 */
	getPedIndexFromIndex(entity: Handle): Handle;

	/**
	 * Native: ENTITY::_GET_ENTITY_PHYSICS_HEADING
	 *
	 * Hash: 0x846BF6291198A71E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x846BF6291198A71E)
	 */
	getPhysicsHeading(entity: Handle): number;

	/**
	 * Native: ENTITY::_GET_ENTITY_PICKUP
	 *
	 * Hash: 0x1F922734E259BD26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F922734E259BD26)
	 */
	getPickup(entity: Handle, modelHash: integer): Handle;

	/**
	 * Native: ENTITY::GET_ENTITY_PITCH
	 *
	 * Hash: 0xD45DC2893621E1FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD45DC2893621E1FE)
	 */
	getPitch(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_POPULATION_TYPE
	 *
	 * Hash: 0xF6F5161F4534EDFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6F5161F4534EDFF)
	 */
	getPopulationType(entity: Handle): integer;

	/**
	 * Native: ENTITY::_GET_ENTITY_PROOFS
	 *
	 * Hash: 0xBE8CD9BE829BBEBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE8CD9BE829BBEBF)
	 */
	getProofs(entity: Handle): GetEntityProofsResult;

	/**
	 * Native: ENTITY::GET_ENTITY_QUATERNION
	 *
	 * Hash: 0x7B3703D2D32DFA18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B3703D2D32DFA18)
	 */
	getQuaternion(entity: Handle): GetEntityQuaternionResult;

	/**
	 * Native: ENTITY::GET_ENTITY_ROLL
	 *
	 * Hash: 0x831E0242595560DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x831E0242595560DF)
	 */
	getRoll(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_ROTATION
	 *
	 * Hash: 0xAFBD61CC738D9EB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFBD61CC738D9EB9)
	 */
	getRotation(entity: Handle, rotationOrder: integer): Vector3Mp;

	/**
	 * Native: ENTITY::GET_ENTITY_ROTATION_VELOCITY
	 *
	 * Hash: 0x213B91045D09B983 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x213B91045D09B983)
	 */
	getRotationVelocity(entity: Handle): Vector3Mp;

	/**
	 * Native: ENTITY::GET_ENTITY_SCRIPT
	 *
	 * Hash: 0xA6E9C38DB51D7748 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6E9C38DB51D7748)
	 */
	getScript(entity: Handle): GetEntityScriptResult;

	/**
	 * Native: ENTITY::GET_ENTITY_SPEED
	 *
	 * Hash: 0xD5037BA82E12416F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5037BA82E12416F)
	 */
	getSpeed(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_SPEED_VECTOR
	 *
	 * Hash: 0x9A8D700A51CB7B0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A8D700A51CB7B0D)
	 */
	getSpeedVector(entity: Handle, relative: boolean): Vector3Mp;

	/**
	 * Native: ENTITY::GET_ENTITY_SUBMERGED_LEVEL
	 *
	 * Hash: 0xE81AFC1BC4CC41CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE81AFC1BC4CC41CE)
	 */
	getSubmergedLevel(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_ENTITY_TYPE
	 *
	 * Hash: 0x8ACD366038D14505 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8ACD366038D14505)
	 */
	getType(entity: Handle): integer;

	/**
	 * Native: ENTITY::GET_ENTITY_UPRIGHT_VALUE
	 *
	 * Hash: 0x95EED5A694951F9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95EED5A694951F9F)
	 */
	getUprightValue(entity: Handle): number;

	/**
	 * Native: ENTITY::GET_VEHICLE_INDEX_FROM_ENTITY_INDEX
	 *
	 * Hash: 0x4B53F92932ADFAC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B53F92932ADFAC0)
	 */
	getVehicleIndexFromIndex(entity: Handle): Handle;

	/**
	 * Native: ENTITY::GET_ENTITY_VELOCITY
	 *
	 * Hash: 0x4805D2B1D8CF94A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4805D2B1D8CF94A9)
	 */
	getVelocity(entity: Handle): Vector3Mp;

	/**
	 * Native: ENTITY::GET_WORLD_POSITION_OF_ENTITY_BONE
	 *
	 * Hash: 0x44A8FCB8ED227738 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44A8FCB8ED227738)
	 */
	getWorldPositionOfBone(entity: Handle, boneIndex: integer): Vector3Mp;

	/**
	 * Native: ENTITY::HAS_ANIM_EVENT_FIRED
	 *
	 * Hash: 0xEAF4CD9EA3E7E922 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAF4CD9EA3E7E922)
	 */
	hasAnimEventFired(entity: Handle, actionHash: integer): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_ANIM_FINISHED
	 *
	 * Hash: 0x20B711662962B472 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20B711662962B472)
	 */
	hasAnimFinished(entity: Handle, animDict: string, animName: string, p3: integer): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_BEEN_DAMAGED_BY_ANY_OBJECT
	 *
	 * Hash: 0x95EB9964FF5C5C65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95EB9964FF5C5C65)
	 */
	hasBeenDamagedByAnyObject(entity: Handle): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_BEEN_DAMAGED_BY_ANY_PED
	 *
	 * Hash: 0x605F5A140F202491 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x605F5A140F202491)
	 */
	hasBeenDamagedByAnyPed(entity: Handle): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_BEEN_DAMAGED_BY_ANY_VEHICLE
	 *
	 * Hash: 0xDFD5033FDBA0A9C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFD5033FDBA0A9C8)
	 */
	hasBeenDamagedByAnyVehicle(entity: Handle): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_BEEN_DAMAGED_BY_ENTITY
	 *
	 * Hash: 0xC86D67D52A707CF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC86D67D52A707CF8)
	 */
	hasBeenDamagedByEntity(entity1: Handle, entity2: Handle, p2: boolean): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_CLEAR_LOS_TO_ENTITY
	 *
	 * Hash: 0xFCDFF7B72D23A1AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCDFF7B72D23A1AC)
	 */
	hasClearLosToEntity(entity1: Handle, entity2: Handle, traceType: integer): boolean;

	/**
	 * Native: ENTITY::_HAS_ENTITY_CLEAR_LOS_TO_ENTITY_2
	 *
	 * Hash: 0x394BDE2A7BBA031E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x394BDE2A7BBA031E)
	 */
	hasClearLosToEntity2(entity1: Handle, entity2: Handle, traceType: integer): integer;

	/**
	 * Native: ENTITY::HAS_ENTITY_CLEAR_LOS_TO_ENTITY_IN_FRONT
	 *
	 * Hash: 0x0267D00AF114F17A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0267D00AF114F17A)
	 */
	hasClearLosToEntityInFront(entity1: Handle, entity2: Handle): boolean;

	/**
	 * Native: ENTITY::HAS_ENTITY_COLLIDED_WITH_ANYTHING
	 *
	 * Hash: 0x8BAD02F0368D9E14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BAD02F0368D9E14)
	 */
	hasCollidedWithAnything(entity: Handle): boolean;

	/**
	 * Native: ENTITY::HAS_COLLISION_LOADED_AROUND_ENTITY
	 *
	 * Hash: 0xE9676F61BC0B3321 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE9676F61BC0B3321)
	 */
	hasCollisionLoadedAround(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_A_MISSION_ENTITY
	 *
	 * Hash: 0x0A7B270912999B3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A7B270912999B3C)
	 */
	isAMissionEntity(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_AN_ENTITY
	 *
	 * Hash: 0x731EC8A916BD11A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x731EC8A916BD11A1)
	 */
	isAn(handle: integer): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_AN_OBJECT
	 *
	 * Hash: 0x8D68C8FD0FACA94E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D68C8FD0FACA94E)
	 */
	isAnObject(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_A_PED
	 *
	 * Hash: 0x524AC5ECEA15343E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x524AC5ECEA15343E)
	 */
	isAPed(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_AT_COORD
	 *
	 * Hash: 0x20B60995556D004F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20B60995556D004F)
	 */
	isAtCoord(
		entity: Handle,
		xPos: number,
		yPos: number,
		zPos: number,
		xSize: number,
		ySize: number,
		zSize: number,
		p7: boolean,
		p8: boolean,
		p9: integer
	): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_AT_ENTITY
	 *
	 * Hash: 0x751B70C3D034E187 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x751B70C3D034E187)
	 */
	isAtEntity(
		entity1: Handle,
		entity2: Handle,
		xSize: number,
		ySize: number,
		zSize: number,
		p5: boolean,
		p6: boolean,
		p7: integer
	): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_ATTACHED
	 *
	 * Hash: 0xB346476EF1A64897 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB346476EF1A64897)
	 */
	isAttached(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_ATTACHED_TO_ANY_OBJECT
	 *
	 * Hash: 0xCF511840CEEDE0CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF511840CEEDE0CC)
	 */
	isAttachedToAnyObject(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_ATTACHED_TO_ANY_PED
	 *
	 * Hash: 0xB1632E9A5F988D11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1632E9A5F988D11)
	 */
	isAttachedToAnyPed(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_ATTACHED_TO_ANY_VEHICLE
	 *
	 * Hash: 0x26AA915AD89BFB4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26AA915AD89BFB4B)
	 */
	isAttachedToAnyVehicle(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_ATTACHED_TO_ENTITY
	 *
	 * Hash: 0xEFBE71898A993728 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFBE71898A993728)
	 */
	isAttachedToEntity(from: Handle, to: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_A_VEHICLE
	 *
	 * Hash: 0x6AC7003FA6E5575E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6AC7003FA6E5575E)
	 */
	isAVehicle(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_DEAD
	 *
	 * p1 defaults to false
	 *
	 * Hash: 0x5F9532F3B5CC2551 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F9532F3B5CC2551)
	 */
	isDead(entity: Handle, p1?: boolean): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_IN_AIR
	 *
	 * Hash: 0x886E37EC497200B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x886E37EC497200B6)
	 */
	isInAir(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_IN_ANGLED_AREA
	 *
	 * Hash: 0x51210CED3DA1C78A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51210CED3DA1C78A)
	 */
	isInAngledArea(
		entity: Handle,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		debug: boolean,
		includeZ: boolean,
		p10: integer
	): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_IN_AREA
	 *
	 * Hash: 0x54736AA40E271165 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54736AA40E271165)
	 */
	isInArea(
		entity: Handle,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p7: boolean,
		p8: boolean,
		p9: integer
	): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_IN_WATER
	 *
	 * Hash: 0xCFB0A0D8EDD145A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFB0A0D8EDD145A3)
	 */
	isInWater(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_IN_ZONE
	 *
	 * Hash: 0xB6463CF6AF527071 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6463CF6AF527071)
	 */
	isInZone(entity: Handle, zone: string): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_OCCLUDED
	 *
	 * Hash: 0xE31C2C72B8692B64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE31C2C72B8692B64)
	 */
	isOccluded(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_ON_SCREEN
	 *
	 * Hash: 0xE659E47AF827484B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE659E47AF827484B)
	 */
	isOnScreen(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_PLAYING_ANIM
	 *
	 * Hash: 0x1F0B79228E461EC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F0B79228E461EC9)
	 */
	isPlayingAnim(entity: Handle, animDict: string, animName: string, taskFlag: integer): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_STATIC
	 *
	 * Hash: 0x1218E6886D3D8327 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1218E6886D3D8327)
	 */
	isStatic(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_TOUCHING_ENTITY
	 *
	 * Hash: 0x17FFC1B2BA35A494 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17FFC1B2BA35A494)
	 */
	isTouchingEntity(entity: Handle, targetEntity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_TOUCHING_MODEL
	 *
	 * Hash: 0x0F42323798A58C8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F42323798A58C8C)
	 */
	isTouchingModel(entity: Handle, modelHash: integer): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_UPRIGHT
	 *
	 * Hash: 0x5333F526F6AB19AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5333F526F6AB19AA)
	 */
	isUpright(entity: Handle, angle: number): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_UPSIDEDOWN
	 *
	 * Hash: 0x1DBD58820FA61D71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DBD58820FA61D71)
	 */
	isUpsidedown(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_VISIBLE
	 *
	 * Hash: 0x47D6F43D77935C75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47D6F43D77935C75)
	 */
	isVisible(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_VISIBLE_TO_SCRIPT
	 *
	 * Hash: 0xD796CB5BA8F20E32 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD796CB5BA8F20E32)
	 */
	isVisibleToScript(entity: Handle): boolean;

	/**
	 * Native: ENTITY::IS_ENTITY_WAITING_FOR_WORLD_COLLISION
	 *
	 * Hash: 0xD05BFF0C0A12C68F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD05BFF0C0A12C68F)
	 */
	isWaitingForWorldCollision(entity: Handle): boolean;

	/**
	 * Native: ENTITY::PLAY_ENTITY_ANIM
	 *
	 * Hash: 0x7FB218262B810701 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FB218262B810701)
	 */
	playAnim(
		entity: Handle,
		animName: string,
		animDict: string,
		p3: number,
		loop: boolean,
		stayInAnim: boolean,
		p6: boolean,
		delta: number,
		bitset: integer
	): boolean;

	/**
	 * Native: ENTITY::PLAY_SYNCHRONIZED_ENTITY_ANIM
	 *
	 * Hash: 0xC77720A12FE14A86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC77720A12FE14A86)
	 */
	playSynchronizedAnim(
		entity: Handle,
		syncedScene: integer,
		animation: string,
		propName: string,
		p4: number,
		p5: number,
		p6: integer,
		p7: number
	): boolean;

	/**
	 * Native: ENTITY::PLAY_SYNCHRONIZED_MAP_ENTITY_ANIM
	 *
	 * Hash: 0xB9C54555ED30FBC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9C54555ED30FBC4)
	 */
	playSynchronizedMapAnim(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p8: number,
		p9: number,
		p10: integer,
		p11: number
	): PlaySynchronizedMapEntityAnimResult;

	/**
	 * Native: ENTITY::PROCESS_ENTITY_ATTACHMENTS
	 *
	 * Hash: 0xF4080490ADC51C6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4080490ADC51C6F)
	 */
	processAttachments(entity: Handle): void;

	/**
	 * Native: ENTITY::REMOVE_FORCED_OBJECT
	 *
	 * Hash: 0x61B6775E83C0DB6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61B6775E83C0DB6F)
	 */
	removeForcedObject(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: ENTITY::REMOVE_MODEL_HIDE
	 *
	 * Hash: 0xD9E3006FB3CBD765 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9E3006FB3CBD765)
	 */
	removeModelHide(x: number, y: number, z: number, radius: number, modelHash: integer, p5: boolean): void;

	/**
	 * Native: ENTITY::REMOVE_MODEL_SWAP
	 *
	 * Hash: 0x033C0F9A64E229AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x033C0F9A64E229AE)
	 */
	removeModelSwap(
		x: number,
		y: number,
		z: number,
		radius: number,
		originalModel: integer,
		newModel: integer,
		p6: boolean
	): void;

	/**
	 * Native: ENTITY::RESET_ENTITY_ALPHA
	 *
	 * Hash: 0x9B1E824FFBB7027A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B1E824FFBB7027A)
	 */
	resetAlpha(entity: Handle): void;

	/**
	 * Native: ENTITY::SET_ENTITY_ALPHA
	 *
	 * Hash: 0x44A0870B7E92D7C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44A0870B7E92D7C0)
	 */
	setAlpha(entity: Handle, alphaLevel: integer, skin: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_ALWAYS_PRERENDER
	 *
	 * Hash: 0xACAD101E1FB66689 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xACAD101E1FB66689)
	 */
	setAlwaysPrerender(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::_SET_ENTITY_ANGULAR_VELOCITY
	 *
	 * Hash: 0x8339643499D1222E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8339643499D1222E)
	 */
	setAngularVelocity(entity: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_ANIM_CURRENT_TIME
	 *
	 * Hash: 0x4487C259F0F70977 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4487C259F0F70977)
	 */
	setAnimCurrentTime(entity: Handle, animDictionary: string, animName: string, time: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_ANIM_SPEED
	 *
	 * Hash: 0x28D1A16553C51776 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28D1A16553C51776)
	 */
	setAnimSpeed(entity: Handle, animDictionary: string, animName: string, speedMultiplier: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_AS_MISSION_ENTITY
	 *
	 * Hash: 0xAD738C3085FE7E11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD738C3085FE7E11)
	 */
	setAsMissionEntity(entity: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0xB736A491E64A32CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB736A491E64A32CF)
	 */
	setAsNoLongerNeeded(entity: Handle): Handle;

	/**
	 * Native: ENTITY::SET_CAN_AUTO_VAULT_ON_ENTITY
	 *
	 * Hash: 0xE12ABE5E3A389A6C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE12ABE5E3A389A6C)
	 */
	setCanAutoVaultOn(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_CAN_BE_DAMAGED
	 *
	 * Hash: 0x1760FFA8AB074D66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1760FFA8AB074D66)
	 */
	setCanBeDamaged(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_CAN_BE_DAMAGED_BY_RELATIONSHIP_GROUP
	 *
	 * Hash: 0xE22D8FDE858B8119 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE22D8FDE858B8119)
	 */
	setCanBeDamagedByRelationshipGroup(entity: Handle, bCanBeDamaged: boolean, relGroup: integer): void;

	/**
	 * Native: ENTITY::SET_ENTITY_CAN_BE_TARGETED_WITHOUT_LOS
	 *
	 * Hash: 0xD3997889736FD899 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3997889736FD899)
	 */
	setCanBeTargetedWithoutLos(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_CAN_CLIMB_ON_ENTITY
	 *
	 * Hash: 0xA80AE305E0A3044F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA80AE305E0A3044F)
	 */
	setCanClimbOn(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::_SET_ENTITY_CLEANUP_BY_ENGINE
	 *
	 * Hash: 0x3910051CCECDB00C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3910051CCECDB00C)
	 */
	setCleanupByEngine(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_COLLISION
	 *
	 * Hash: 0x1A9205C1B9EE827F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A9205C1B9EE827F)
	 */
	setCollision(entity: Handle, toggle: boolean, keepPhysics: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_COMPLETELY_DISABLE_COLLISION
	 *
	 * Hash: 0x9EBC85ED0FFFE51C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EBC85ED0FFFE51C)
	 */
	setCompletelyDisableCollision(entity: Handle, toggle: boolean, keepPhysics: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_COORDS
	 *
	 * Hash: 0x06843DA7060A026B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06843DA7060A026B)
	 */
	setCoords(
		entity: Handle,
		xPos: number,
		yPos: number,
		zPos: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean,
		clearArea: boolean
	): void;

	/**
	 * Native: ENTITY::SET_ENTITY_COORDS_NO_OFFSET
	 *
	 * Hash: 0x239A3351AC1DA385 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x239A3351AC1DA385)
	 */
	setCoordsNoOffset(
		entity: Handle,
		xPos: number,
		yPos: number,
		zPos: number,
		xAxis: boolean,
		yAxis: boolean,
		zAxis: boolean
	): void;

	/**
	 * Native: ENTITY::SET_ENTITY_COORDS_WITHOUT_PLANTS_RESET
	 *
	 * Hash: 0x621873ECE1178967 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x621873ECE1178967)
	 */
	setCoordsWithoutPlantsReset(
		entity: Handle,
		xPos: number,
		yPos: number,
		zPos: number,
		alive: boolean,
		deadFlag: boolean,
		ragdollFlag: boolean,
		clearArea: boolean
	): void;

	/**
	 * Native: ENTITY::_SET_ENTITY_DECALS_DISABLED
	 *
	 * Hash: 0x2C2E3DC128F44309 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C2E3DC128F44309)
	 */
	setDecalsDisabled(entity: Handle, p1: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_DYNAMIC
	 *
	 * Hash: 0x1718DE8E3F2823CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1718DE8E3F2823CA)
	 */
	setDynamic(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_HAS_GRAVITY
	 *
	 * Hash: 0x4A4722448F18EEF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A4722448F18EEF5)
	 */
	setHasGravity(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_HEADING
	 *
	 * Hash: 0x8E2530AA8ADA980E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E2530AA8ADA980E)
	 */
	setHeading(entity: Handle, heading: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_HEALTH
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x6B76DC1F3AE6E6A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B76DC1F3AE6E6A3)
	 */
	setHealth(entity: Handle, health: integer, p2?: integer): void;

	/**
	 * Native: ENTITY::SET_ENTITY_INVINCIBLE
	 *
	 * Hash: 0x3882114BDE571AD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3882114BDE571AD4)
	 */
	setInvincible(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_IS_TARGET_PRIORITY
	 *
	 * Hash: 0xEA02E132F5C68722 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA02E132F5C68722)
	 */
	setIsTargetPriority(entity: Handle, p1: boolean, p2: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_LIGHTS
	 *
	 * Hash: 0x7CFBA6A80BDF3874 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CFBA6A80BDF3874)
	 */
	setLights(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_LOAD_COLLISION_FLAG
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x0DC7CABAB1E9B67E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0DC7CABAB1E9B67E)
	 */
	setLoadCollisionFlag(entity: Handle, toggle: boolean, p2?: integer): void;

	/**
	 * Native: ENTITY::SET_ENTITY_LOD_DIST
	 *
	 * Hash: 0x5927F96A78577363 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5927F96A78577363)
	 */
	setLodDist(entity: Handle, value: integer): void;

	/**
	 * Native: ENTITY::SET_ENTITY_MAX_HEALTH
	 *
	 * Hash: 0x166E7CF68597D8B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x166E7CF68597D8B5)
	 */
	setMaxHealth(entity: Handle, value: integer): void;

	/**
	 * Native: ENTITY::SET_ENTITY_MAX_SPEED
	 *
	 * Hash: 0x0E46A3FCBDE2A1B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E46A3FCBDE2A1B1)
	 */
	setMaxSpeed(entity: Handle, speed: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_MOTION_BLUR
	 *
	 * Hash: 0x295D82A8559F9150 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x295D82A8559F9150)
	 */
	setMotionBlur(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_NO_COLLISION_ENTITY
	 *
	 * Hash: 0xA53ED5520C07654A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA53ED5520C07654A)
	 */
	setNoCollisionEntity(entity1: Handle, entity2: Handle, thisFrameOnly: boolean): void;

	/**
	 * Native: ENTITY::SET_OBJECT_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0x3AE22DEB5BA5A3E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3AE22DEB5BA5A3E6)
	 */
	setObjectAsNoLongerNeeded(object: Handle): Handle;

	/**
	 * Native: ENTITY::SET_ENTITY_ONLY_DAMAGED_BY_PLAYER
	 *
	 * Hash: 0x79F020FF9EDC0748 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79F020FF9EDC0748)
	 */
	setOnlyDamagedByPlayer(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_ONLY_DAMAGED_BY_RELATIONSHIP_GROUP
	 *
	 * Hash: 0x7022BD828FA0B082 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7022BD828FA0B082)
	 */
	setOnlyDamagedByRelationshipGroup(entity: Handle, p1: boolean, p2: integer): void;

	/**
	 * Native: ENTITY::SET_PED_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0x2595DD4236549CE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2595DD4236549CE3)
	 */
	setPedAsNoLongerNeeded(ped: Handle): Handle;

	/**
	 * Native: ENTITY::SET_ENTITY_PROOFS
	 *
	 * Hash: 0xFAEE099C6F890BB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAEE099C6F890BB8)
	 */
	setProofs(
		entity: Handle,
		bulletProof: boolean,
		fireProof: boolean,
		explosionProof: boolean,
		collisionProof: boolean,
		meleeProof: boolean,
		p6: boolean,
		p7: boolean,
		drownProof: boolean
	): void;

	/**
	 * Native: ENTITY::SET_ENTITY_QUATERNION
	 *
	 * Hash: 0x77B21BE7AC540F07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77B21BE7AC540F07)
	 */
	setQuaternion(entity: Handle, x: number, y: number, z: number, w: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_RECORDS_COLLISIONS
	 *
	 * Hash: 0x0A50A1EEDAD01E65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A50A1EEDAD01E65)
	 */
	setRecordsCollisions(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_RENDER_SCORCHED
	 *
	 * Hash: 0x730F5F8D3F0F2050 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x730F5F8D3F0F2050)
	 */
	setRenderScorched(entity: Handle, toggle: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_ROTATION
	 *
	 * Hash: 0x8524A8B0171D5E07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8524A8B0171D5E07)
	 */
	setRotation(entity: Handle, pitch: number, roll: number, yaw: number, rotationOrder: integer, p5: boolean): void;

	/**
	 * Native: ENTITY::SET_ENTITY_TRAFFICLIGHT_OVERRIDE
	 *
	 * Hash: 0x57C5DB656185EAC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57C5DB656185EAC4)
	 */
	setTrafficlightOverride(entity: Handle, state: integer): void;

	/**
	 * Native: ENTITY::SET_VEHICLE_AS_NO_LONGER_NEEDED
	 *
	 * Hash: 0x629BFA74418D6239 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x629BFA74418D6239)
	 */
	setVehicleAsNoLongerNeeded(vehicle: Handle): Handle;

	/**
	 * Native: ENTITY::SET_ENTITY_VELOCITY
	 *
	 * Hash: 0x1C99BB7B6E96D16F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C99BB7B6E96D16F)
	 */
	setVelocity(entity: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: ENTITY::SET_ENTITY_VISIBLE
	 *
	 * Hash: 0xEA1C610A04DB6BBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA1C610A04DB6BBB)
	 */
	setVisible(entity: Handle, toggle: boolean, unk: boolean): void;

	/**
	 * Native: ENTITY::STOP_ENTITY_ANIM
	 *
	 * Hash: 0x28004F88151E03E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28004F88151E03E0)
	 */
	stopAnim(entity: Handle, animation: string, animGroup: string, p3: number): integer;

	/**
	 * Native: ENTITY::STOP_SYNCHRONIZED_ENTITY_ANIM
	 *
	 * Hash: 0x43D3807C077261E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43D3807C077261E3)
	 */
	stopSynchronizedAnim(entity: Handle, p1: number, p2: boolean): boolean;

	/**
	 * Native: ENTITY::STOP_SYNCHRONIZED_MAP_ENTITY_ANIM
	 *
	 * Hash: 0x11E79CAB7183B6F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11E79CAB7183B6F5)
	 */
	stopSynchronizedMapAnim(p0: number, p1: number, p2: number, p3: number, p4: integer, p5: number): boolean;

	/**
	 * Native: ENTITY::WOULD_ENTITY_BE_OCCLUDED
	 *
	 * Hash: 0xEE5D2A122E09EC42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE5D2A122E09EC42)
	 */
	wouldBeOccluded(entityModelHash: integer, x: number, y: number, z: number, p4: boolean): boolean;

	unk: GameEntityUnk;
}

interface GameEntityMp extends GameEntity {}
