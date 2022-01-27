/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface _0x9E30E91FB03A2CAFResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface AddRelationshipGroupResult {
	groupHash: integer;
	result: integer;
}

interface GetPedCurrentMovementSpeedResult {
	speedX: number;
	speedY: number;
	result: boolean;
}

interface GetGroupSizeResult {
	unknown: integer;
	sizeInMembers: integer;
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

interface GetPedNearbyPedsResult {
	sizeAndPeds: integer;
	result: integer;
}

interface GetPedNearbyVehiclesResult {
	sizeAndVehs: integer;
	result: integer;
}

interface SpawnpointsGetSearchResultResult {
	x: number;
	y: number;
	z: number;
}

interface GamePedLegacy {
	/**
	 * Native: PED::CAN_CREATE_RANDOM_PED
	 *
	 * Hash: 0x3E8349C08E4B82E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E8349C08E4B82E4)
	 */
	canCreateRandomPed(unk: boolean): boolean;

	/**
	 * Native: PED::CLEAR_PED_ALTERNATE_WALK_ANIM
	 *
	 * Hash: 0x8844BBFCE30AA9E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8844BBFCE30AA9E9)
	 */
	clearPedAlternateWalkAnim(ped: Handle, p1: number): void;

	/**
	 * Native: PED::CREATE_PED
	 *
	 * Hash: 0xD49F9B0955C367DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD49F9B0955C367DE)
	 */
	createPed(
		pedType: integer,
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		heading: number,
		isNetwork: boolean,
		bScriptHostPed: boolean
	): Handle;

	/**
	 * Native: PED::CREATE_RANDOM_PED
	 *
	 * Hash: 0xB4AC7D0CF06BFE8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4AC7D0CF06BFE8F)
	 */
	createRandomPed(posX: number, posY: number, posZ: number): Handle;

	/**
	 * Native: PED::GET_CLOSEST_PED
	 *
	 * Hash: 0xC33AB876A77F8164 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC33AB876A77F8164)
	 */
	getClosestPed(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p7: boolean,
		p8: boolean,
		pedType: integer
	): Handle;

	/**
	 * Native: PED::GET_PED_HEAD_BLEND_FIRST_INDEX
	 *
	 * Hash: 0x68D353AB88B97E0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68D353AB88B97E0C)
	 */
	getFirstParentIdForPedType(type: integer): integer;

	/**
	 * Native: PED::GET_PED_HEAD_OVERLAY_NUM
	 *
	 * Hash: 0xCF1CE768BB43480E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF1CE768BB43480E)
	 */
	getNumHeadOverlayValues(overlayID: integer): integer;

	/**
	 * Native: PED::GET_PED_HEAD_BLEND_NUM_HEADS
	 *
	 * Hash: 0x5EF37013A6539C9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EF37013A6539C9D)
	 */
	getNumParentPedsOfType(type: integer): integer;

	/**
	 * Native: PED::GET_PED_AS_GROUP_LEADER
	 *
	 * Hash: 0x5CCE68DBD5FE93EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CCE68DBD5FE93EC)
	 */
	getPedAsGroupLeader(groupID: integer): Handle;

	/**
	 * Native: PED::GET_PED_AS_GROUP_MEMBER
	 *
	 * Hash: 0x51455483CF23ED97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51455483CF23ED97)
	 */
	getPedAsGroupMember(groupID: integer, memberNumber: integer): Handle;

	/**
	 * Native: PED::GET_PEDHEADSHOT_TXD_STRING
	 *
	 * Hash: 0xDB4EACD4AD0A5D6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB4EACD4AD0A5D6B)
	 */
	getPedheadshotTxdString(id: integer): string;

	/**
	 * Native: PED::GET_PEDS_JACKER
	 *
	 * Hash: 0x9B128DC36C1E04CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B128DC36C1E04CF)
	 */
	getPedsJacker(ped: Handle): Handle;

	/**
	 * Native: PED::GET_RANDOM_PED_AT_COORD
	 *
	 * Hash: 0x876046A8E3A4B71C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x876046A8E3A4B71C)
	 */
	getRandomPedAtCoord(
		x: number,
		y: number,
		z: number,
		xRadius: number,
		yRadius: number,
		zRadius: number,
		pedType: integer
	): Handle;

	/**
	 * Native: PED::GET_PED_DECORATION_ZONE_FROM_HASHES
	 *
	 * Hash: 0x9FD452BFBE7A7A8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FD452BFBE7A7A8B)
	 */
	getTattooZone(collection: integer, overlay: integer): integer;

	/**
	 * Native: PED::HAS_PED_RECEIVED_EVENT
	 *
	 * Hash: 0x8507BCB710FA6DC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8507BCB710FA6DC0)
	 */
	hasPedReceivedEvent(ped: Handle, eventId: integer): boolean;

	/**
	 * Native: PED::IS_ANY_PED_NEAR_POINT
	 *
	 * Hash: 0x083961498679DC9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x083961498679DC9F)
	 */
	isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: PED::IS_ANY_PED_SHOOTING_IN_AREA
	 *
	 * Hash: 0xA0D3D71EA1086C55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0D3D71EA1086C55)
	 */
	isAnyPedShootingInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: boolean,
		p7: boolean
	): boolean;

	/**
	 * Native: PED::_IS_PED_BLUSH_COLOR_VALID
	 *
	 * Hash: 0x604E810189EE3A59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x604E810189EE3A59)
	 */
	isAValidBlushColor(colorID: integer): boolean;

	/**
	 * Native: PED::_IS_PED_HAIR_COLOR_VALID
	 *
	 * Hash: 0xE0D36E5D9E99CC21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0D36E5D9E99CC21)
	 */
	isAValidHairColor(colorID: integer): boolean;

	/**
	 * Native: PED::_IS_PED_LIPSTICK_COLOR_VALID
	 *
	 * Hash: 0x0525A2C2562F3CD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0525A2C2562F3CD4)
	 */
	isAValidLipstickColor(colorID: integer): boolean;

	/**
	 * Native: PED::IS_COP_PED_IN_AREA_3D
	 *
	 * Hash: 0x16EC4839969F9F5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16EC4839969F9F5E)
	 */
	isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

	/**
	 * Native: PED::IS_PEDHEADSHOT_READY
	 *
	 * Hash: 0x7085228842B13A67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7085228842B13A67)
	 */
	isPedheadshotReady(id: integer): boolean;

	/**
	 * Native: PED::IS_PEDHEADSHOT_VALID
	 *
	 * Hash: 0xA0A9668F158129A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0A9668F158129A2)
	 */
	isPedheadshotValid(id: integer): boolean;

	/**
	 * Native: PED::IS_PED_RESPONDING_TO_EVENT
	 *
	 * Hash: 0x625B774D75C87068 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x625B774D75C87068)
	 */
	isPedRespondingToEvent(ped: Handle, event: integer): boolean;

	/**
	 * Native: PED::IS_SYNCHRONIZED_SCENE_LOOPED
	 *
	 * Hash: 0x62522002E0C391BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62522002E0C391BA)
	 */
	isSynchronizedSceneLooped(sceneID: integer): boolean;

	/**
	 * Native: PED::SET_AMBIENT_PEDS_DROP_MONEY
	 *
	 * Hash: 0x6B0E6172C9A4D902 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B0E6172C9A4D902)
	 */
	setAmbientPedsDropMoney(p0: boolean): void;

	/**
	 * Native: PED::GET_VEHICLE_PED_IS_ENTERING
	 *
	 * Hash: 0xF92691AED837A5FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF92691AED837A5FC)
	 */
	setExclusivePhoneRelationships(ped: Handle): Handle;

	/**
	 * Native: PED::SET_PED_ALTERNATE_WALK_ANIM
	 *
	 * Hash: 0x6C60394CB4F75E9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C60394CB4F75E9A)
	 */
	setPedAlternateWalkAnim(ped: Handle, animDict: string, animName: string, p3: number, p4: boolean): void;

	/**
	 * Native: PED::SET_PED_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x95E3D6257B166CF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95E3D6257B166CF2)
	 */
	setPedDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: PED::SET_PED_NON_CREATION_AREA
	 *
	 * Hash: 0xEE01041D559983EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE01041D559983EA)
	 */
	setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

	/**
	 * Native: PED::SET_PED_RESERVE_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0xE88DA0751C22A2AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE88DA0751C22A2AD)
	 */
	setPedReserveParachuteTintIndex(ped: Handle, p1: integer): void;

	/**
	 * Native: PED::SET_PED_TO_RAGDOLL
	 *
	 * Hash: 0xAE99FB955581844A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE99FB955581844A)
	 */
	setPedToRagdoll(
		ped: Handle,
		time1: integer,
		time2: integer,
		ragdollType: integer,
		p4: boolean,
		p5: boolean,
		p6: boolean
	): boolean;

	/**
	 * Native: PED::SET_PED_TO_RAGDOLL_WITH_FALL
	 *
	 * Hash: 0xD76632D99E4966C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD76632D99E4966C8)
	 */
	setPedToRagdollWithFall(
		ped: Handle,
		time: integer,
		p2: integer,
		ragdollType: integer,
		x: number,
		y: number,
		z: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): boolean;

	/**
	 * Native: PED::SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x7A556143A1C03898 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A556143A1C03898)
	 */
	setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;

	/**
	 * Native: PED::SET_SCENARIO_PEDS_SPAWN_IN_SPHERE_AREA
	 *
	 * Hash: 0x28157D43CF600981 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28157D43CF600981)
	 */
	setScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: integer): void;

	/**
	 * Native: PED::SET_SCENARIO_PEDS_TO_BE_RETURNED_BY_NEXT_COMMAND
	 *
	 * Hash: 0x14F19A8782C8071E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14F19A8782C8071E)
	 */
	setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;

	/**
	 * Native: PED::SET_SYNCHRONIZED_SCENE_LOOPED
	 *
	 * Hash: 0xD9A897A4C6C2974F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9A897A4C6C2974F)
	 */
	setSynchronizedSceneLooped(sceneID: integer, toggle: boolean): void;

	/**
	 * Native: PED::_0xFD325494792302D7
	 *
	 * Hash: 0xFD325494792302D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD325494792302D7)
	 */
	setTimeExclusiveDisplayTexture(ped: Handle, toggle: boolean): void;
}

interface GamePedUnk {
	/**
	 * Native: PED::_0x03EA03AF85A85CB7
	 *
	 * Hash: 0x03EA03AF85A85CB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03EA03AF85A85CB7)
	 */
	_0x03EA03AF85A85CB7(
		ped: Handle,
		p1: boolean,
		p2: boolean,
		p3: boolean,
		p4: boolean,
		p5: boolean,
		p6: boolean,
		p7: boolean,
		p8: integer
	): boolean;

	/**
	 * Native: PED::_0x061CB768363D6424
	 *
	 * Hash: 0x061CB768363D6424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x061CB768363D6424)
	 */
	_0x061CB768363D6424(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_0x0B3E35AC043707D9
	 *
	 * Hash: 0x0B3E35AC043707D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B3E35AC043707D9)
	 */
	_0x0B3E35AC043707D9(p0: integer, p1: integer): void;

	/**
	 * Native: PED::_0x0F62619393661D6E
	 *
	 * Hash: 0x0F62619393661D6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F62619393661D6E)
	 */
	_0x0F62619393661D6E(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: PED::_0x110F526AB784111F
	 *
	 * Hash: 0x110F526AB784111F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x110F526AB784111F)
	 */
	_0x110F526AB784111F(ped: Handle, p1: number): void;

	/**
	 * Native: PED::_0x1216E0BFA72CC703
	 *
	 * Hash: 0x1216E0BFA72CC703 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1216E0BFA72CC703)
	 */
	_0x1216E0BFA72CC703(p0: integer, p1: integer): void;

	/**
	 * Native: PED::_0x1A330D297AAC6BC1
	 *
	 * Hash: 0x1A330D297AAC6BC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A330D297AAC6BC1)
	 */
	_0x1A330D297AAC6BC1(ped: Handle, p1: integer): void;

	/**
	 * Native: PED::_0x1E77FA7A62EE6C4C
	 *
	 * Hash: 0x1E77FA7A62EE6C4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E77FA7A62EE6C4C)
	 */
	_0x1E77FA7A62EE6C4C(p0: integer): integer;

	/**
	 * Native: PED::_0x2016C603D6B8987C
	 *
	 * Hash: 0x2016C603D6B8987C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2016C603D6B8987C)
	 */
	_0x2016C603D6B8987C(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_0x25361A96E0F7E419
	 *
	 * Hash: 0x25361A96E0F7E419 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25361A96E0F7E419)
	 */
	_0x25361A96E0F7E419(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: PED::_0x2735233A786B1BEF
	 *
	 * Hash: 0x2735233A786B1BEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2735233A786B1BEF)
	 */
	_0x2735233A786B1BEF(ped: Handle, p1: number): void;

	/**
	 * Native: PED::_0x288DF530C92DAD6F
	 *
	 * Hash: 0x288DF530C92DAD6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x288DF530C92DAD6F)
	 */
	_0x288DF530C92DAD6F(p0: integer, p1: number): void;

	/**
	 * Native: PED::_0x2B694AFCF64E6994
	 *
	 * Hash: 0x2B694AFCF64E6994 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B694AFCF64E6994)
	 */
	_0x2B694AFCF64E6994(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::_0x2DFC81C9B9608549
	 *
	 * Hash: 0x2DFC81C9B9608549 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DFC81C9B9608549)
	 */
	_0x2DFC81C9B9608549(ped: Handle): integer;

	/**
	 * Native: PED::_0x2F074C904D85129E
	 *
	 * Hash: 0x2F074C904D85129E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F074C904D85129E)
	 */
	_0x2F074C904D85129E(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: PED::_0x2F3C3D9F50681DE4
	 *
	 * Hash: 0x2F3C3D9F50681DE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F3C3D9F50681DE4)
	 */
	_0x2F3C3D9F50681DE4(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::_0x336B3D200AB007CB
	 *
	 * Hash: 0x336B3D200AB007CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x336B3D200AB007CB)
	 */
	_0x336B3D200AB007CB(p0: integer, p1: number, p2: number, p3: number, p4: number): integer;

	/**
	 * Native: PED::_0x3E9679C1DFCF422C
	 *
	 * Hash: 0x3E9679C1DFCF422C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E9679C1DFCF422C)
	 */
	_0x3E9679C1DFCF422C(p0: integer, p1: integer): void;

	/**
	 * Native: PED::_0x412F1364FA066CFB
	 *
	 * Hash: 0x412F1364FA066CFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x412F1364FA066CFB)
	 */
	_0x412F1364FA066CFB(p0: integer): integer;

	/**
	 * Native: PED::_0x425AECF167663F48
	 *
	 * Hash: 0x425AECF167663F48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x425AECF167663F48)
	 */
	_0x425AECF167663F48(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::_0x451D05012CCEC234
	 *
	 * Hash: 0x451D05012CCEC234 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x451D05012CCEC234)
	 */
	_0x451D05012CCEC234(p0: integer): integer;

	/**
	 * Native: PED::_0x46B05BCAE43856B0
	 *
	 * Hash: 0x46B05BCAE43856B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46B05BCAE43856B0)
	 */
	_0x46B05BCAE43856B0(ped: Handle, flag: integer): boolean;

	/**
	 * Native: PED::_0x49E50BDB8BA4DAB2
	 *
	 * Hash: 0x49E50BDB8BA4DAB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49E50BDB8BA4DAB2)
	 */
	_0x49E50BDB8BA4DAB2(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_0x511F1A683387C7E2
	 *
	 * Hash: 0x511F1A683387C7E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x511F1A683387C7E2)
	 */
	_0x511F1A683387C7E2(ped: Handle): integer;

	/**
	 * Native: PED::_0x5407B7288D0478B7
	 *
	 * Hash: 0x5407B7288D0478B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5407B7288D0478B7)
	 */
	_0x5407B7288D0478B7(p0: integer): integer;

	/**
	 * Native: PED::_0x5A7F62FDA59759BD
	 *
	 * Hash: 0x5A7F62FDA59759BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A7F62FDA59759BD)
	 */
	_0x5A7F62FDA59759BD(): void;

	/**
	 * Native: PED::_0x5B6010B3CBC29095
	 *
	 * Hash: 0x5B6010B3CBC29095 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B6010B3CBC29095)
	 */
	_0x5B6010B3CBC29095(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::_0x6647C5F6F5792496
	 *
	 * Hash: 0x6647C5F6F5792496 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6647C5F6F5792496)
	 */
	_0x6647C5F6F5792496(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::_0x733C87D4CE22BEA2
	 *
	 * Hash: 0x733C87D4CE22BEA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x733C87D4CE22BEA2)
	 */
	_0x733C87D4CE22BEA2(p0: integer): void;

	/**
	 * Native: PED::_0x75BA1CB3B7D40CAF
	 *
	 * Hash: 0x75BA1CB3B7D40CAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75BA1CB3B7D40CAF)
	 */
	_0x75BA1CB3B7D40CAF(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::_0x80054D7FCC70EEC6
	 *
	 * Hash: 0x80054D7FCC70EEC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80054D7FCC70EEC6)
	 */
	_0x80054D7FCC70EEC6(ped: Handle): void;

	/**
	 * Native: PED::_0x83A169EABCDB10A2
	 *
	 * Hash: 0x83A169EABCDB10A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83A169EABCDB10A2)
	 */
	_0x83A169EABCDB10A2(p0: integer, p1: integer): void;

	/**
	 * Native: PED::_0x87DDEB611B329A9C
	 *
	 * Hash: 0x87DDEB611B329A9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87DDEB611B329A9C)
	 */
	_0x87DDEB611B329A9C(multiplier: number): void;

	/**
	 * Native: PED::_0x9911F4A24485F653
	 *
	 * Hash: 0x9911F4A24485F653 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9911F4A24485F653)
	 */
	_0x9911F4A24485F653(p0: boolean): void;

	/**
	 * Native: PED::_0x9A77DFD295E29B09
	 *
	 * Hash: 0x9A77DFD295E29B09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A77DFD295E29B09)
	 */
	_0x9A77DFD295E29B09(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::_0x9C6A6C19B6C0C496
	 *
	 * Hash: 0x9C6A6C19B6C0C496 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C6A6C19B6C0C496)
	 */
	_0x9C6A6C19B6C0C496(ped: Handle): integer;

	/**
	 * Native: PED::_0x9E30E91FB03A2CAF
	 *
	 * Hash: 0x9E30E91FB03A2CAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E30E91FB03A2CAF)
	 */
	_0x9E30E91FB03A2CAF(): _0x9E30E91FB03A2CAFResult;

	/**
	 * Native: PED::_0xA52D5247A4227E14
	 *
	 * Hash: 0xA52D5247A4227E14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA52D5247A4227E14)
	 */
	_0xA52D5247A4227E14(p0: integer): void;

	/**
	 * Native: PED::_0xA660FAF550EB37E5
	 *
	 * Hash: 0xA660FAF550EB37E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA660FAF550EB37E5)
	 */
	_0xA660FAF550EB37E5(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::_0xA9B61A329BFDCBEA
	 *
	 * Hash: 0xA9B61A329BFDCBEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9B61A329BFDCBEA)
	 */
	_0xA9B61A329BFDCBEA(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::_0xAAA6A3698A69E048
	 *
	 * Hash: 0xAAA6A3698A69E048 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAA6A3698A69E048)
	 */
	_0xAAA6A3698A69E048(p0: integer): integer;

	/**
	 * Native: PED::_0xAD27D957598E49E9
	 *
	 * Hash: 0xAD27D957598E49E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD27D957598E49E9)
	 */
	_0xAD27D957598E49E9(ped: Handle, p1: integer, p2: number, hash: integer, p4: integer, p5: integer): void;

	/**
	 * Native: PED::_0xAFC976FD0580C7B3
	 *
	 * Hash: 0xAFC976FD0580C7B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFC976FD0580C7B3)
	 */
	_0xAFC976FD0580C7B3(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_0xB282749D5E028163
	 *
	 * Hash: 0xB282749D5E028163 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB282749D5E028163)
	 */
	_0xB282749D5E028163(p0: integer, p1: integer): void;

	/**
	 * Native: PED::_0xB8B52E498014F5B0
	 *
	 * Hash: 0xB8B52E498014F5B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8B52E498014F5B0)
	 */
	_0xB8B52E498014F5B0(ped: Handle): boolean;

	/**
	 * Native: PED::_0xC2EE020F5FB4DB53
	 *
	 * Hash: 0xC2EE020F5FB4DB53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2EE020F5FB4DB53)
	 */
	_0xC2EE020F5FB4DB53(ped: Handle): void;

	/**
	 * Native: PED::_0xC30BDAEE47256C13
	 *
	 * Hash: 0xC30BDAEE47256C13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC30BDAEE47256C13)
	 */
	_0xC30BDAEE47256C13(p0: integer): integer;

	/**
	 * Native: PED::_0xC56FBF2F228E1DAC
	 *
	 * Hash: 0xC56FBF2F228E1DAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC56FBF2F228E1DAC)
	 */
	_0xC56FBF2F228E1DAC(modelHash: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: PED::_0xCD018C591F94CB43
	 *
	 * Hash: 0xCD018C591F94CB43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD018C591F94CB43)
	 */
	_0xCD018C591F94CB43(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::_0xCEDA60A74219D064
	 *
	 * Hash: 0xCEDA60A74219D064 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEDA60A74219D064)
	 */
	_0xCEDA60A74219D064(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::_0xD33DAA36272177C4
	 *
	 * Hash: 0xD33DAA36272177C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD33DAA36272177C4)
	 */
	_0xD33DAA36272177C4(ped: Handle): void;

	/**
	 * Native: PED::_0xDFE68C4B787E1BFB
	 *
	 * Hash: 0xDFE68C4B787E1BFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFE68C4B787E1BFB)
	 */
	_0xDFE68C4B787E1BFB(ped: Handle): void;

	/**
	 * Native: PED::_0xE906EC930F5FE7C8
	 *
	 * Hash: 0xE906EC930F5FE7C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE906EC930F5FE7C8)
	 */
	_0xE906EC930F5FE7C8(p0: integer, p1: integer): void;

	/**
	 * Native: PED::_0xEA9960D07DADCF10
	 *
	 * Hash: 0xEA9960D07DADCF10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA9960D07DADCF10)
	 */
	_0xEA9960D07DADCF10(p0: integer): integer;

	/**
	 * Native: PED::_0xEC4B4B3B9908052A
	 *
	 * Hash: 0xEC4B4B3B9908052A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC4B4B3B9908052A)
	 */
	_0xEC4B4B3B9908052A(ped: Handle, unk: number): void;

	/**
	 * Native: PED::_0xED3C76ADFA6D07C4
	 *
	 * Hash: 0xED3C76ADFA6D07C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED3C76ADFA6D07C4)
	 */
	_0xED3C76ADFA6D07C4(ped: Handle): void;

	/**
	 * Native: PED::_0xF033419D1B81FAE8
	 *
	 * Hash: 0xF033419D1B81FAE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF033419D1B81FAE8)
	 */
	_0xF033419D1B81FAE8(p0: integer): integer;

	/**
	 * Native: PED::_0xF2385935BFFD4D92
	 *
	 * Hash: 0xF2385935BFFD4D92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2385935BFFD4D92)
	 */
	_0xF2385935BFFD4D92(p0: integer): boolean;

	/**
	 * Native: PED::_0xF2BEBCDFAFDAA19E
	 *
	 * Hash: 0xF2BEBCDFAFDAA19E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2BEBCDFAFDAA19E)
	 */
	_0xF2BEBCDFAFDAA19E(toggle: boolean): void;

	/**
	 * Native: PED::_0xF9ACF4A08098EA25
	 *
	 * Hash: 0xF9ACF4A08098EA25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9ACF4A08098EA25)
	 */
	_0xF9ACF4A08098EA25(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::_0xFAB944D4D481ACCB
	 *
	 * Hash: 0xFAB944D4D481ACCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAB944D4D481ACCB)
	 */
	_0xFAB944D4D481ACCB(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_0xFD325494792302D7
	 *
	 * Hash: 0xFD325494792302D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD325494792302D7)
	 */
	_0xFD325494792302D7(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_0xFEC9A3B1820F3331
	 *
	 * Hash: 0xFEC9A3B1820F3331 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEC9A3B1820F3331)
	 */
	_0xFEC9A3B1820F3331(p0: integer): boolean;

	/**
	 * Native: PED::_0xFF4803BC019852D9
	 *
	 * Hash: 0xFF4803BC019852D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF4803BC019852D9)
	 */
	_0xFF4803BC019852D9(p0: number, p1: integer): void;
}

interface GamePed extends GamePedLegacy {
	/**
	 * Native: PED::ADD_ARMOUR_TO_PED
	 *
	 * Hash: 0x5BA652A0CD14DF2F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BA652A0CD14DF2F)
	 */
	addArmourTo(ped: Handle, amount: integer): void;

	/**
	 * Native: PED::ADD_PED_DECORATION_FROM_HASHES
	 *
	 * Hash: 0x5F5D1665E352A839 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F5D1665E352A839)
	 */
	addDecorationFromHashes(ped: Handle, collection: integer, overlay: integer): void;

	/**
	 * Native: PED::ADD_PED_DECORATION_FROM_HASHES_IN_CORONA
	 *
	 * Hash: 0x5619BFA07CFD7833 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5619BFA07CFD7833)
	 */
	addDecorationFromHashesInCorona(ped: Handle, collection: integer, overlay: integer): void;

	/**
	 * Native: PED::ADD_RELATIONSHIP_GROUP
	 *
	 * Hash: 0xF372BC22FCB88606 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF372BC22FCB88606)
	 */
	addRelationshipGroup(name: string): AddRelationshipGroupResult;

	/**
	 * Native: PED::ADD_SCENARIO_BLOCKING_AREA
	 *
	 * Hash: 0x1B5C85C612E5256E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B5C85C612E5256E)
	 */
	addScenarioBlockingArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean
	): integer;

	/**
	 * Native: PED::APPLY_PED_BLOOD
	 *
	 * Hash: 0x83F7E01C7B769A26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83F7E01C7B769A26)
	 */
	applyBlood(ped: Handle, boneIndex: integer, xRot: number, yRot: number, zRot: number, woundType: string): void;

	/**
	 * Native: PED::APPLY_PED_BLOOD_BY_ZONE
	 *
	 * Hash: 0x3311E47B91EDCBBC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3311E47B91EDCBBC)
	 */
	applyBloodByZone(ped: Handle, p1: integer, p2: number, p3: number, p4: string): void;

	/**
	 * Native: PED::APPLY_PED_BLOOD_DAMAGE_BY_ZONE
	 *
	 * Hash: 0x816F6981C60BF53B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x816F6981C60BF53B)
	 */
	applyBloodDamageByZone(ped: Handle, p1: integer, p2: number, p3: number, p4: integer): void;

	/**
	 * Native: PED::APPLY_PED_BLOOD_SPECIFIC
	 *
	 * Hash: 0xEF0D582CBF2D9B0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF0D582CBF2D9B0F)
	 */
	applyBloodSpecific(
		ped: Handle,
		p1: integer,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: integer,
		p7: number,
		p8: string
	): void;

	/**
	 * Native: PED::APPLY_PED_DAMAGE_DECAL
	 *
	 * Hash: 0x397C38AA7B4A5F83 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x397C38AA7B4A5F83)
	 */
	applyDamageDecal(
		ped: Handle,
		damageZone: integer,
		xOffset: number,
		yOffset: number,
		heading: number,
		scale: number,
		alpha: number,
		variation: integer,
		fadeIn: boolean,
		decalName: string
	): void;

	/**
	 * Native: PED::APPLY_PED_DAMAGE_PACK
	 *
	 * Hash: 0x46DF918788CB093F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46DF918788CB093F)
	 */
	applyDamagePack(ped: Handle, damagePack: string, damage: number, mult: number): void;

	/**
	 * Native: PED::APPLY_DAMAGE_TO_PED
	 *
	 * Hash: 0x697157CED63F18D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x697157CED63F18D4)
	 */
	applyDamageTo(ped: Handle, damageAmount: integer, p2: boolean, p3: integer): void;

	/**
	 * Native: PED::ATTACH_SYNCHRONIZED_SCENE_TO_ENTITY
	 *
	 * Hash: 0x272E4723B56A3B96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x272E4723B56A3B96)
	 */
	attachSynchronizedSceneToEntity(sceneID: integer, entity: Handle, boneIndex: integer): void;

	/**
	 * Native: PED::_BLOCK_PED_DEAD_BODY_SHOCKING_EVENTS
	 *
	 * Hash: 0xE43A13C9E4CCCBCF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE43A13C9E4CCCBCF)
	 */
	blockDeadBodyShockingEvents(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::CAN_CREATE_RANDOM_PED
	 *
	 * Hash: 0x3E8349C08E4B82E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E8349C08E4B82E4)
	 */
	canCreateRandom(unk: boolean): boolean;

	/**
	 * Native: PED::CAN_CREATE_RANDOM_BIKE_RIDER
	 *
	 * Hash: 0xEACEEDA81751915C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEACEEDA81751915C)
	 */
	canCreateRandomBikeRider(): boolean;

	/**
	 * Native: PED::CAN_CREATE_RANDOM_COPS
	 *
	 * Hash: 0x5EE2CAFF7F17770D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EE2CAFF7F17770D)
	 */
	canCreateRandomCops(): boolean;

	/**
	 * Native: PED::CAN_CREATE_RANDOM_DRIVER
	 *
	 * Hash: 0xB8EB95E5B4E56978 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8EB95E5B4E56978)
	 */
	canCreateRandomDriver(): boolean;

	/**
	 * Native: PED::CAN_PED_IN_COMBAT_SEE_TARGET
	 *
	 * Hash: 0xEAD42DE3610D0721 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAD42DE3610D0721)
	 */
	canInCombatSeeTarget(ped: Handle, target: Handle): boolean;

	/**
	 * Native: PED::CAN_KNOCK_PED_OFF_VEHICLE
	 *
	 * Hash: 0x51AC07A44D4F5B8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51AC07A44D4F5B8A)
	 */
	canKnockOffVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::CAN_PED_RAGDOLL
	 *
	 * Hash: 0x128F79EDCECE4FD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x128F79EDCECE4FD5)
	 */
	canRagdoll(ped: Handle): boolean;

	/**
	 * Native: PED::CAN_PED_SEE_HATED_PED
	 *
	 * Hash: 0x6CD5A433374D4CFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CD5A433374D4CFB)
	 */
	canSeeHatedPed(ped1: Handle, ped2: Handle): boolean;

	/**
	 * Native: PED::CLEAR_ALL_PED_PROPS
	 *
	 * Hash: 0xCD8A7537A9B52F06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD8A7537A9B52F06)
	 */
	clearAllProps(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_ALL_PED_VEHICLE_FORCED_SEAT_USAGE
	 *
	 * Hash: 0xE6CA85E7259CE16B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6CA85E7259CE16B)
	 */
	clearAllVehicleForcedSeatUsage(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_ALTERNATE_MOVEMENT_ANIM
	 *
	 * Hash: 0xD8D19675ED5FBDCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8D19675ED5FBDCE)
	 */
	clearAlternateMovementAnim(ped: Handle, stance: integer, p2: number): void;

	/**
	 * Native: PED::CLEAR_PED_ALTERNATE_WALK_ANIM
	 *
	 * Hash: 0x8844BBFCE30AA9E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8844BBFCE30AA9E9)
	 */
	clearAlternateWalkAnim(ped: Handle, p1: number): void;

	/**
	 * Native: PED::CLEAR_PED_BLOOD_DAMAGE
	 *
	 * Hash: 0x8FE22675A5A45817 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FE22675A5A45817)
	 */
	clearBloodDamage(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_BLOOD_DAMAGE_BY_ZONE
	 *
	 * Hash: 0x56E3B78C5408D9F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56E3B78C5408D9F4)
	 */
	clearBloodDamageByZone(ped: Handle, p1: integer): void;

	/**
	 * Native: PED::_CLEAR_PED_COVER_CLIPSET_OVERRIDE
	 *
	 * Hash: 0xC79196DCB36F6121 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC79196DCB36F6121)
	 */
	clearCoverClipsetOverride(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_DAMAGE_DECAL_BY_ZONE
	 *
	 * Hash: 0x523C79AEEFCC4A2A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x523C79AEEFCC4A2A)
	 */
	clearDamageDecalByZone(ped: Handle, p1: integer, p2: string): void;

	/**
	 * Native: PED::CLEAR_PED_DECORATIONS
	 *
	 * Hash: 0x0E5173C163976E38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E5173C163976E38)
	 */
	clearDecorations(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_DECORATIONS_LEAVE_SCARS
	 *
	 * Hash: 0xE3B27E70CEAB9F0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3B27E70CEAB9F0C)
	 */
	clearDecorationsLeaveScars(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_DRIVE_BY_CLIPSET_OVERRIDE
	 *
	 * Hash: 0x4AFE3690D7E0B5AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AFE3690D7E0B5AC)
	 */
	clearDriveByClipsetOverride(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_ENV_DIRT
	 *
	 * Hash: 0x6585D955A68452A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6585D955A68452A5)
	 */
	clearEnvDirt(ped: Handle): void;

	/**
	 * Native: PED::_CLEAR_FACIAL_CLIPSET_OVERRIDE
	 *
	 * Hash: 0x637822DC2AFEEBF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x637822DC2AFEEBF8)
	 */
	clearFacialClipsetOverride(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_FACIAL_IDLE_ANIM_OVERRIDE
	 *
	 * Hash: 0x726256CC1EEB182F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x726256CC1EEB182F)
	 */
	clearFacialIdleAnimOverride(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_LAST_DAMAGE_BONE
	 *
	 * Hash: 0x8EF6B7AC68E2F01B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EF6B7AC68E2F01B)
	 */
	clearLastDamageBone(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_NON_CREATION_AREA
	 *
	 * Hash: 0x2E05208086BA0651 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E05208086BA0651)
	 */
	clearNonCreationArea(): void;

	/**
	 * Native: PED::CLEAR_PED_PARACHUTE_PACK_VARIATION
	 *
	 * Hash: 0x1280804F7CFD2D6C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1280804F7CFD2D6C)
	 */
	clearParachutePackVariation(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_PROP
	 *
	 * Hash: 0x0943E5B8E078E76E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0943E5B8E078E76E)
	 */
	clearProp(ped: Handle, propId: integer): void;

	/**
	 * Native: PED::CLEAR_RAGDOLL_BLOCKING_FLAGS
	 *
	 * Hash: 0xD86D101FCFD00A4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD86D101FCFD00A4B)
	 */
	clearRagdollBlockingFlags(ped: Handle, flags: integer): void;

	/**
	 * Native: PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS
	 *
	 * Hash: 0x5E29243FB56FC6D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E29243FB56FC6D4)
	 */
	clearRelationshipBetweenGroups(relationship: integer, group1: integer, group2: integer): void;

	/**
	 * Native: PED::CLEAR_PED_SCUBA_GEAR_VARIATION
	 *
	 * Hash: 0xB50EB4CCB29704AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB50EB4CCB29704AC)
	 */
	clearScubaGearVariation(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_STORED_HAT_PROP
	 *
	 * Hash: 0x687C0B594907D2E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x687C0B594907D2E8)
	 */
	clearStoredHatProp(ped: Handle): void;

	/**
	 * Native: PED::CLEAR_PED_WETNESS
	 *
	 * Hash: 0x9C720776DAA43E7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C720776DAA43E7E)
	 */
	clearWetness(ped: Handle): void;

	/**
	 * Native: PED::CLONE_PED
	 *
	 * Hash: 0xEF29A16337FACADB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF29A16337FACADB)
	 */
	clone(ped: Handle, isNetwork: boolean, bScriptHostPed: boolean, copyHeadBlendFlag: boolean): Handle;

	/**
	 * Native: PED::_CLONE_PED_EX
	 *
	 * Hash: 0x668FD40BCBA5DE48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x668FD40BCBA5DE48)
	 */
	cloneEx(ped: Handle, isNetwork: boolean, bScriptHostPed: boolean, copyHeadBlendFlag: boolean, p4: boolean): Handle;

	/**
	 * Native: PED::CLONE_PED_TO_TARGET
	 *
	 * Hash: 0xE952D6431689AD9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE952D6431689AD9A)
	 */
	cloneToTarget(ped: Handle, targetPed: Handle): void;

	/**
	 * Native: PED::_CLONE_PED_TO_TARGET_EX
	 *
	 * Hash: 0x148B08C2D2ACB884 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x148B08C2D2ACB884)
	 */
	cloneToTargetEx(ped: Handle, targetPed: Handle, p2: boolean): void;

	/**
	 * Native: PED::CREATE_PED
	 *
	 * Hash: 0xD49F9B0955C367DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD49F9B0955C367DE)
	 */
	create(
		pedType: integer,
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		heading: number,
		isNetwork: boolean,
		bScriptHostPed: boolean
	): Handle;

	/**
	 * Native: PED::CREATE_GROUP
	 *
	 * Hash: 0x90370EBE0FEE1A3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90370EBE0FEE1A3D)
	 */
	createGroup(unused: integer): integer;

	/**
	 * Native: PED::CREATE_PED_INSIDE_VEHICLE
	 *
	 * Hash: 0x7DD959874C1FD534 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DD959874C1FD534)
	 */
	createInsideVehicle(
		vehicle: Handle,
		pedType: integer,
		modelHash: integer,
		seat: integer,
		isNetwork: boolean,
		bScriptHostPed: boolean
	): Handle;

	/**
	 * Native: PED::CREATE_NM_MESSAGE
	 *
	 * Hash: 0x418EF2A1BCE56685 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x418EF2A1BCE56685)
	 */
	createNmMessage(startImmediately: boolean, messageId: integer): void;

	/**
	 * Native: PED::CREATE_PARACHUTE_BAG_OBJECT
	 *
	 * Hash: 0x8C4F3BF23B6237DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C4F3BF23B6237DB)
	 */
	createParachuteBagObject(ped: Handle, p1: boolean, p2: boolean): Handle;

	/**
	 * Native: PED::CREATE_RANDOM_PED
	 *
	 * Hash: 0xB4AC7D0CF06BFE8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4AC7D0CF06BFE8F)
	 */
	createRandom(posX: number, posY: number, posZ: number): Handle;

	/**
	 * Native: PED::CREATE_RANDOM_PED_AS_DRIVER
	 *
	 * Hash: 0x9B62392B474F44A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B62392B474F44A0)
	 */
	createRandomAsDriver(vehicle: Handle, returnHandle: boolean): Handle;

	/**
	 * Native: PED::CREATE_SYNCHRONIZED_SCENE
	 *
	 * Hash: 0x8C18E0F9080ADD73 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C18E0F9080ADD73)
	 */
	createSynchronizedScene(
		x: number,
		y: number,
		z: number,
		roll: number,
		pitch: number,
		yaw: number,
		p6: integer
	): integer;

	/**
	 * Native: PED::CREATE_SYNCHRONIZED_SCENE_AT_MAP_OBJECT
	 *
	 * Hash: 0x62EC273D00187DCA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62EC273D00187DCA)
	 */
	createSynchronizedSceneAtMapObject(x: number, y: number, z: number, radius: number, object: integer): integer;

	/**
	 * Native: PED::DELETE_PED
	 *
	 * Hash: 0x9614299DCB53E54B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9614299DCB53E54B)
	 */
	delete(ped: Handle): Handle;

	/**
	 * Native: PED::DETACH_SYNCHRONIZED_SCENE
	 *
	 * Hash: 0x6D38F1F04CBB37EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D38F1F04CBB37EA)
	 */
	detachSynchronizedScene(sceneID: integer): void;

	/**
	 * Native: PED::DISABLE_HEAD_BLEND_PALETTE_COLOR
	 *
	 * Hash: 0xA21C118553BBDF02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA21C118553BBDF02)
	 */
	disableHeadBlendPaletteColor(ped: Handle): void;

	/**
	 * Native: PED::DISABLE_PED_HEATSCALE_OVERRIDE
	 *
	 * Hash: 0x600048C60D5C2C51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x600048C60D5C2C51)
	 */
	disableHeatscaleOverride(ped: Handle): void;

	/**
	 * Native: PED::_DISPOSE_SYNCHRONIZED_SCENE
	 *
	 * Hash: 0xCD9CC7E200A52A6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD9CC7E200A52A6F)
	 */
	disposeSynchronizedScene(scene: integer): void;

	/**
	 * Native: PED::DOES_GROUP_EXIST
	 *
	 * Hash: 0x7C6B0C22F9F40BBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C6B0C22F9F40BBE)
	 */
	doesGroupExist(groupId: integer): boolean;

	/**
	 * Native: PED::_DOES_RELATIONSHIP_GROUP_EXIST
	 *
	 * Hash: 0xCC6E3B6BB69501F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC6E3B6BB69501F1)
	 */
	doesRelationshipGroupExist(groupHash: integer): boolean;

	/**
	 * Native: PED::_DOES_SCENARIO_BLOCKING_AREA_EXIST
	 *
	 * Hash: 0x8A24B067D175A7BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A24B067D175A7BD)
	 */
	doesScenarioBlockingAreaExist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

	/**
	 * Native: PED::DROP_AMBIENT_PROP
	 *
	 * Hash: 0xAFF4710E2A0A6C12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFF4710E2A0A6C12)
	 */
	dropAmbientProp(ped: Handle): void;

	/**
	 * Native: PED::EXPLODE_PED_HEAD
	 *
	 * Hash: 0x2D05CED3A38D0F3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D05CED3A38D0F3A)
	 */
	explodeHead(ped: Handle, weaponHash: integer): void;

	/**
	 * Native: PED::FINALIZE_HEAD_BLEND
	 *
	 * Hash: 0x4668D80430D6C299 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4668D80430D6C299)
	 */
	finalizeHeadBlend(ped: Handle): void;

	/**
	 * Native: PED::FORCE_PED_AI_AND_ANIMATION_UPDATE
	 *
	 * Hash: 0x2208438012482A1A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2208438012482A1A)
	 */
	forceAiAndAnimationUpdate(ped: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: PED::FORCE_PED_MOTION_STATE
	 *
	 * Hash: 0xF28965D04F570DCA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF28965D04F570DCA)
	 */
	forceMotionState(ped: Handle, motionStateHash: integer, p2: boolean, p3: integer, p4: boolean): boolean;

	/**
	 * Native: PED::FORCE_PED_TO_OPEN_PARACHUTE
	 *
	 * Hash: 0x16E42E800B472221 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16E42E800B472221)
	 */
	forceToOpenParachute(ped: Handle): void;

	/**
	 * Native: PED::_FREEZE_PED_CAMERA_ROTATION
	 *
	 * Hash: 0xFF287323B0E2C69A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF287323B0E2C69A)
	 */
	freezeCameraRotation(ped: Handle): void;

	/**
	 * Native: PED::GET_PED_ACCURACY
	 *
	 * Hash: 0x37F4AD56ECBC0CD6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37F4AD56ECBC0CD6)
	 */
	getAccuracy(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_ALERTNESS
	 *
	 * Hash: 0xF6AA118530443FD2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6AA118530443FD2)
	 */
	getAlertness(ped: Handle): integer;

	/**
	 * Native: PED::GET_ANIM_INITIAL_OFFSET_POSITION
	 *
	 * Hash: 0xBE22B26DD764C040 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE22B26DD764C040)
	 */
	getAnimInitialOffsetPosition(
		animDict: string,
		animName: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: number,
		p9: integer
	): Vector3Mp;

	/**
	 * Native: PED::GET_ANIM_INITIAL_OFFSET_ROTATION
	 *
	 * Hash: 0x4B805E6046EE9E47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B805E6046EE9E47)
	 */
	getAnimInitialOffsetRotation(
		animDict: string,
		animName: string,
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		p8: number,
		p9: integer
	): Vector3Mp;

	/**
	 * Native: PED::GET_PED_ARMOUR
	 *
	 * Hash: 0x9483AF821605B1D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9483AF821605B1D8)
	 */
	getArmour(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_AS_GROUP_LEADER
	 *
	 * Hash: 0x5CCE68DBD5FE93EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CCE68DBD5FE93EC)
	 */
	getAsGroupLeader(groupID: integer): Handle;

	/**
	 * Native: PED::GET_PED_AS_GROUP_MEMBER
	 *
	 * Hash: 0x51455483CF23ED97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x51455483CF23ED97)
	 */
	getAsGroupMember(groupID: integer, memberNumber: integer): Handle;

	/**
	 * Native: PED::GET_PED_BONE_COORDS
	 *
	 * Hash: 0x17C07FC640E86B4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17C07FC640E86B4E)
	 */
	getBoneCoords(ped: Handle, boneId: integer, offsetX: number, offsetY: number, offsetZ: number): Vector3Mp;

	/**
	 * Native: PED::GET_PED_BONE_INDEX
	 *
	 * Hash: 0x3F428D08BE5AAE31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F428D08BE5AAE31)
	 */
	getBoneIndex(ped: Handle, boneId: integer): integer;

	/**
	 * Native: PED::GET_PED_CAUSE_OF_DEATH
	 *
	 * Hash: 0x16FFE42AB2D2DC59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16FFE42AB2D2DC59)
	 */
	getCauseOfDeath(ped: Handle): integer;

	/**
	 * Native: PED::GET_CLOSEST_PED
	 *
	 * Hash: 0xC33AB876A77F8164 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC33AB876A77F8164)
	 */
	getClosest(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p7: boolean,
		p8: boolean,
		pedType: integer
	): Handle;

	/**
	 * Native: PED::GET_COMBAT_FLOAT
	 *
	 * Hash: 0x52DFF8A10508090A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52DFF8A10508090A)
	 */
	getCombatFloat(ped: Handle, p1: integer): number;

	/**
	 * Native: PED::GET_PED_COMBAT_MOVEMENT
	 *
	 * Hash: 0xDEA92412FCAEB3F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEA92412FCAEB3F5)
	 */
	getCombatMovement(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_COMBAT_RANGE
	 *
	 * Hash: 0xF9D9F7F2DB8E2FA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9D9F7F2DB8E2FA0)
	 */
	getCombatRange(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_CONFIG_FLAG
	 *
	 * Hash: 0x7EE53118C892B513 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EE53118C892B513)
	 */
	getConfigFlag(ped: Handle, flagId: integer, p2: boolean): boolean;

	/**
	 * Native: PED::_GET_PED_CURRENT_MOVEMENT_SPEED
	 *
	 * Hash: 0xF60165E1D2C5370B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF60165E1D2C5370B)
	 */
	getCurrentMovementSpeed(ped: Handle): GetPedCurrentMovementSpeedResult;

	/**
	 * Native: PED::GET_DEAD_PED_PICKUP_COORDS
	 *
	 * Hash: 0xCD5003B097200F36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD5003B097200F36)
	 */
	getDeadPickupCoords(ped: Handle, p1: number, p2: number): Vector3Mp;

	/**
	 * Native: PED::GET_PED_DECORATIONS_STATE
	 *
	 * Hash: 0x71EAB450D86954A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71EAB450D86954A1)
	 */
	getDecorationsState(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_DECORATION_ZONE_FROM_HASHES
	 *
	 * Hash: 0x9FD452BFBE7A7A8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FD452BFBE7A7A8B)
	 */
	getDecorationZoneFromHashes(collection: integer, overlay: integer): integer;

	/**
	 * Native: PED::GET_PED_DEFENSIVE_AREA_POSITION
	 *
	 * Hash: 0x3C06B8786DD94CD1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C06B8786DD94CD1)
	 */
	getDefensiveAreaPosition(ped: Handle, p1: boolean): Vector3Mp;

	/**
	 * Native: PED::GET_PED_DRAWABLE_VARIATION
	 *
	 * Hash: 0x67F3780DD425D4FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67F3780DD425D4FC)
	 */
	getDrawableVariation(ped: Handle, componentId: integer): integer;

	/**
	 * Native: PED::_GET_PED_EMISSIVE_INTENSITY
	 *
	 * Hash: 0x1461B28A06717D68 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1461B28A06717D68)
	 */
	getEmissiveIntensity(ped: Handle): number;

	/**
	 * Native: PED::GET_PED_ENVEFF_SCALE
	 *
	 * Hash: 0x9C14D30395A51A3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C14D30395A51A3C)
	 */
	getEnveffScale(ped: Handle): number;

	/**
	 * Native: PED::_GET_PED_EVENT_DATA
	 *
	 * Hash: 0xBA656A3BB01BDEA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA656A3BB01BDEA3)
	 */
	getEventData(ped: Handle, eventType: integer): integer;

	/**
	 * Native: PED::GET_PED_EXTRACTED_DISPLACEMENT
	 *
	 * Hash: 0xE0AF41401ADF87E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0AF41401ADF87E3)
	 */
	getExtractedDisplacement(ped: Handle, worldSpace: boolean): Vector3Mp;

	/**
	 * Native: PED::_GET_PED_EYE_COLOR
	 *
	 * Hash: 0x76BBA2CEE66D47E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76BBA2CEE66D47E9)
	 */
	getEyeColor(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_GROUP_INDEX
	 *
	 * Hash: 0xF162E133B4E7A675 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF162E133B4E7A675)
	 */
	getGroupIndex(ped: Handle): integer;

	/**
	 * Native: PED::GET_GROUP_SIZE
	 *
	 * Hash: 0x8DE69FE35CA09A45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DE69FE35CA09A45)
	 */
	getGroupSize(groupID: integer): GetGroupSizeResult;

	/**
	 * Native: PED::_GET_PED_HAIR_RGB_COLOR
	 *
	 * Hash: 0x4852FC386E2E1BB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4852FC386E2E1BB5)
	 */
	getHairRgbColor(hairColorIndex: integer): GetPedHairRgbColorResult;

	/**
	 * Native: PED::GET_PED_HEAD_BLEND_DATA
	 *
	 * Hash: 0x2746BD9D88C5C5D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2746BD9D88C5C5D0)
	 */
	getHeadBlendData(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_HEAD_BLEND_FIRST_INDEX
	 *
	 * Hash: 0x68D353AB88B97E0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68D353AB88B97E0C)
	 */
	getHeadBlendFirstIndex(type: integer): integer;

	/**
	 * Native: PED::GET_PED_HEAD_BLEND_NUM_HEADS
	 *
	 * Hash: 0x5EF37013A6539C9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EF37013A6539C9D)
	 */
	getHeadBlendNumHeads(type: integer): integer;

	/**
	 * Native: PED::GET_PED_HEAD_OVERLAY_NUM
	 *
	 * Hash: 0xCF1CE768BB43480E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF1CE768BB43480E)
	 */
	getHeadOverlayNum(overlayID: integer): integer;

	/**
	 * Native: PED::_GET_PED_HEAD_OVERLAY_VALUE
	 *
	 * Hash: 0xA60EF3B6461A4D43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA60EF3B6461A4D43)
	 */
	getHeadOverlayValue(ped: Handle, overlayID: integer): integer;

	/**
	 * Native: PED::GET_PEDHEADSHOT_TXD_STRING
	 *
	 * Hash: 0xDB4EACD4AD0A5D6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB4EACD4AD0A5D6B)
	 */
	getHeadshotTxdString(id: integer): string;

	/**
	 * Native: PED::GET_PED_HELMET_STORED_HAT_PROP_INDEX
	 *
	 * Hash: 0x451294E859ECC018 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x451294E859ECC018)
	 */
	getHelmetStoredHatPropIndex(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_HELMET_STORED_HAT_TEX_INDEX
	 *
	 * Hash: 0x9D728C1E12BF5518 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D728C1E12BF5518)
	 */
	getHelmetStoredHatTexIndex(ped: Handle): integer;

	/**
	 * Native: PED::GET_JACK_TARGET
	 *
	 * Hash: 0x5486A79D9FBD342D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5486A79D9FBD342D)
	 */
	getJackTarget(ped: Handle): Handle;

	/**
	 * Native: PED::GET_PED_LAST_DAMAGE_BONE
	 *
	 * Hash: 0xD75960F6BD9EA49C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD75960F6BD9EA49C)
	 */
	getLastDamageBone(ped: Handle): integer;

	/**
	 * Native: PED::_GET_PED_MAKEUP_RGB_COLOR
	 *
	 * Hash: 0x013E5CFC38CD5387 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x013E5CFC38CD5387)
	 */
	getMakeupRgbColor(makeupColorIndex: integer): GetPedMakeupRgbColorResult;

	/**
	 * Native: PED::GET_PED_MAX_HEALTH
	 *
	 * Hash: 0x4700A416E8324EF3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4700A416E8324EF3)
	 */
	getMaxHealth(ped: Handle): integer;

	/**
	 * Native: PED::GET_MELEE_TARGET_FOR_PED
	 *
	 * Hash: 0x18A3E9EE1297FD39 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18A3E9EE1297FD39)
	 */
	getMeleeTargetFor(ped: Handle): Handle;

	/**
	 * Native: PED::GET_PED_MONEY
	 *
	 * Hash: 0x3F69145BBA87BAE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F69145BBA87BAE7)
	 */
	getMoney(ped: Handle): integer;

	/**
	 * Native: PED::GET_MOUNT
	 *
	 * Hash: 0xE7E11B8DCBED1058 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7E11B8DCBED1058)
	 */
	getMount(ped: Handle): Handle;

	/**
	 * Native: PED::GET_PED_NEARBY_PEDS
	 *
	 * Hash: 0x23F8F5FC7E8C4A6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23F8F5FC7E8C4A6B)
	 */
	getNearbyPeds(ped: Handle, ignore: integer): GetPedNearbyPedsResult;

	/**
	 * Native: PED::GET_PED_NEARBY_VEHICLES
	 *
	 * Hash: 0xCFF869CBFA210D82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFF869CBFA210D82)
	 */
	getNearbyVehicles(ped: Handle): GetPedNearbyVehiclesResult;

	/**
	 * Native: PED::GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS
	 *
	 * Hash: 0x27561561732A7842 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27561561732A7842)
	 */
	getNumberOfDrawableVariations(ped: Handle, componentId: integer): integer;

	/**
	 * Native: PED::GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS
	 *
	 * Hash: 0x5FAF9754E789FB47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FAF9754E789FB47)
	 */
	getNumberOfPropDrawableVariations(ped: Handle, propId: integer): integer;

	/**
	 * Native: PED::GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS
	 *
	 * Hash: 0xA6E7F1CEB523E171 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6E7F1CEB523E171)
	 */
	getNumberOfPropTextureVariations(ped: Handle, propId: integer, drawableId: integer): integer;

	/**
	 * Native: PED::GET_NUMBER_OF_PED_TEXTURE_VARIATIONS
	 *
	 * Hash: 0x8F7156A3142A6BAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F7156A3142A6BAD)
	 */
	getNumberOfTextureVariations(ped: Handle, componentId: integer, drawableId: integer): integer;

	/**
	 * Native: PED::_GET_NUM_HAIR_COLORS
	 *
	 * Hash: 0xE5C0CF872C2AD150 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5C0CF872C2AD150)
	 */
	getNumHairColors(): integer;

	/**
	 * Native: PED::_GET_NUM_MAKEUP_COLORS
	 *
	 * Hash: 0xD1F7CA1535D22818 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1F7CA1535D22818)
	 */
	getNumMakeupColors(): integer;

	/**
	 * Native: PED::GET_PED_PALETTE_VARIATION
	 *
	 * Hash: 0xE3DD5F2A84B42281 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3DD5F2A84B42281)
	 */
	getPaletteVariation(ped: Handle, componentId: integer): integer;

	/**
	 * Native: PED::GET_PED_PARACHUTE_LANDING_TYPE
	 *
	 * Hash: 0x8B9F1FC6AE8166C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B9F1FC6AE8166C0)
	 */
	getParachuteLandingType(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_PARACHUTE_STATE
	 *
	 * Hash: 0x79CFD9827CC979B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79CFD9827CC979B6)
	 */
	getParachuteState(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0xEAF5F7E5AE7C6C9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAF5F7E5AE7C6C9D)
	 */
	getParachuteTintIndex(ped: Handle): integer;

	/**
	 * Native: PED::GET_PLAYER_PED_IS_FOLLOWING
	 *
	 * Hash: 0x6A3975DEA89F9A17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A3975DEA89F9A17)
	 */
	getPlayerIsFollowing(ped: Handle): Handle;

	/**
	 * Native: PED::GET_PED_PROP_INDEX
	 *
	 * Hash: 0x898CC20EA75BACD8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x898CC20EA75BACD8)
	 */
	getPropIndex(ped: Handle, componentId: integer): integer;

	/**
	 * Native: PED::GET_PED_PROP_TEXTURE_INDEX
	 *
	 * Hash: 0xE131A28626F81AB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE131A28626F81AB2)
	 */
	getPropTextureIndex(ped: Handle, componentId: integer): integer;

	/**
	 * Native: PED::GET_PED_RAGDOLL_BONE_INDEX
	 *
	 * Hash: 0x2057EF813397A772 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2057EF813397A772)
	 */
	getRagdollBoneIndex(ped: Handle, bone: integer): integer;

	/**
	 * Native: PED::GET_RANDOM_PED_AT_COORD
	 *
	 * Hash: 0x876046A8E3A4B71C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x876046A8E3A4B71C)
	 */
	getRandomAtCoord(
		x: number,
		y: number,
		z: number,
		xRadius: number,
		yRadius: number,
		zRadius: number,
		pedType: integer
	): Handle;

	/**
	 * Native: PED::GET_RELATIONSHIP_BETWEEN_GROUPS
	 *
	 * Hash: 0x9E6B70061662AE5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E6B70061662AE5C)
	 */
	getRelationshipBetweenGroups(group1: integer, group2: integer): integer;

	/**
	 * Native: PED::GET_RELATIONSHIP_BETWEEN_PEDS
	 *
	 * Hash: 0xEBA5AD3A0EAF7121 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBA5AD3A0EAF7121)
	 */
	getRelationshipBetweenS(ped1: Handle, ped2: Handle): integer;

	/**
	 * Native: PED::GET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH
	 *
	 * Hash: 0x42FDD0F017B1E38E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42FDD0F017B1E38E)
	 */
	getRelationshipGroupDefaultHash(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_RELATIONSHIP_GROUP_HASH
	 *
	 * Hash: 0x7DBDD04862D95F04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DBDD04862D95F04)
	 */
	getRelationshipGroupHash(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_RESET_FLAG
	 *
	 * Hash: 0xAF9E59B1B1FBF2A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF9E59B1B1FBF2A0)
	 */
	getResetFlag(ped: Handle, flagId: integer): boolean;

	/**
	 * Native: PED::GET_SEAT_PED_IS_TRYING_TO_ENTER
	 *
	 * Hash: 0x6F4C85ACD641BCD2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F4C85ACD641BCD2)
	 */
	getSeatIsTryingToEnter(ped: Handle): integer;

	/**
	 * Native: PED::GET_PED_SOURCE_OF_DEATH
	 *
	 * Hash: 0x93C8B64DEB84728C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93C8B64DEB84728C)
	 */
	getSourceOfDeath(ped: Handle): Handle;

	/**
	 * Native: PED::GET_PED_STEALTH_MOVEMENT
	 *
	 * Hash: 0x7C2AC9CA66575FBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C2AC9CA66575FBF)
	 */
	getStealthMovement(ped: Handle): boolean;

	/**
	 * Native: PED::GET_SYNCHRONIZED_SCENE_PHASE
	 *
	 * Hash: 0xE4A310B1D7FA73CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4A310B1D7FA73CC)
	 */
	getSynchronizedScenePhase(sceneID: integer): number;

	/**
	 * Native: PED::GET_SYNCHRONIZED_SCENE_RATE
	 *
	 * Hash: 0xD80932D577274D40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD80932D577274D40)
	 */
	getSynchronizedSceneRate(sceneID: integer): number;

	/**
	 * Native: PED::_GET_PED_TASK_COMBAT_TARGET
	 *
	 * Hash: 0x32C27A11307B01CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32C27A11307B01CC)
	 */
	getTaskCombatTarget(ped: Handle, p1: integer): Handle;

	/**
	 * Native: PED::GET_PED_TEXTURE_VARIATION
	 *
	 * Hash: 0x04A355E041E004E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04A355E041E004E6)
	 */
	getTextureVariation(ped: Handle, componentId: integer): integer;

	/**
	 * Native: PED::GET_PED_TIME_OF_DEATH
	 *
	 * Hash: 0x1E98817B311AE98A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E98817B311AE98A)
	 */
	getTimeOfDeath(ped: Handle): integer;

	/**
	 * Native: PED::_GET_TIME_OF_LAST_PED_WEAPON_DAMAGE
	 *
	 * Hash: 0x36B77BB84687C318 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36B77BB84687C318)
	 */
	getTimeOfLastWeaponDamage(ped: Handle, weaponHash: integer): integer;

	/**
	 * Native: PED::GET_PED_TYPE
	 *
	 * Hash: 0xFF059E1E4C01E63C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF059E1E4C01E63C)
	 */
	getType(ped: Handle): integer;

	/**
	 * Native: PED::GET_VEHICLE_PED_IS_ENTERING
	 *
	 * Hash: 0xF92691AED837A5FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF92691AED837A5FC)
	 */
	getVehicleIsEntering(ped: Handle): Handle;

	/**
	 * Native: PED::GET_VEHICLE_PED_IS_IN
	 *
	 * Hash: 0x9A9112A0FE9A4713 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A9112A0FE9A4713)
	 */
	getVehicleIsIn(ped: Handle, includeLastVehicle: boolean): Handle;

	/**
	 * Native: PED::GET_VEHICLE_PED_IS_TRYING_TO_ENTER
	 *
	 * Hash: 0x814FA8BE5449445D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x814FA8BE5449445D)
	 */
	getVehicleIsTryingToEnter(ped: Handle): Handle;

	/**
	 * Native: PED::GET_VEHICLE_PED_IS_USING
	 *
	 * Hash: 0x6094AD011A2EA87D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6094AD011A2EA87D)
	 */
	getVehicleIsUsing(ped: Handle): Handle;

	/**
	 * Native: PED::_GET_PED_VISUAL_FIELD_CENTER_ANGLE
	 *
	 * Hash: 0xEF2C71A32CAD5FBD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF2C71A32CAD5FBD)
	 */
	getVisualFieldCenterAngle(ped: Handle): number;

	/**
	 * Native: PED::GIVE_PED_HELMET
	 *
	 * Hash: 0x54C7C4A94367717E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54C7C4A94367717E)
	 */
	giveHelmet(ped: Handle, cannotRemove: boolean, helmetFlag: integer, textureIndex: integer): void;

	/**
	 * Native: PED::GIVE_PED_NM_MESSAGE
	 *
	 * Hash: 0xB158DFCCC56E5C5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB158DFCCC56E5C5B)
	 */
	giveNmMessage(ped: Handle): void;

	/**
	 * Native: PED::HAS_ACTION_MODE_ASSET_LOADED
	 *
	 * Hash: 0xE4B5F4BF2CB24E65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4B5F4BF2CB24E65)
	 */
	hasActionModeAssetLoaded(asset: string): boolean;

	/**
	 * Native: PED::HAS_PED_HEAD_BLEND_FINISHED
	 *
	 * Hash: 0x654CD0A825161131 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x654CD0A825161131)
	 */
	hasHeadBlendFinished(ped: Handle): boolean;

	/**
	 * Native: PED::HAS_PEDHEADSHOT_IMG_UPLOAD_FAILED
	 *
	 * Hash: 0x876928DDDFCCC9CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x876928DDDFCCC9CD)
	 */
	hasHeadshotImgUploadFailed(): boolean;

	/**
	 * Native: PED::HAS_PEDHEADSHOT_IMG_UPLOAD_SUCCEEDED
	 *
	 * Hash: 0xE8A169E666CBC541 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8A169E666CBC541)
	 */
	hasHeadshotImgUploadSucceeded(): boolean;

	/**
	 * Native: PED::HAS_PED_PRELOAD_PROP_DATA_FINISHED
	 *
	 * Hash: 0x784002A632822099 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x784002A632822099)
	 */
	hasPreloadPropDataFinished(ped: Handle): boolean;

	/**
	 * Native: PED::HAS_PED_PRELOAD_VARIATION_DATA_FINISHED
	 *
	 * Hash: 0x66680A92700F43DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66680A92700F43DF)
	 */
	hasPreloadVariationDataFinished(ped: Handle): boolean;

	/**
	 * Native: PED::HAS_PED_RECEIVED_EVENT
	 *
	 * Hash: 0x8507BCB710FA6DC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8507BCB710FA6DC0)
	 */
	hasReceivedEvent(ped: Handle, eventId: integer): boolean;

	/**
	 * Native: PED::HAS_STEALTH_MODE_ASSET_LOADED
	 *
	 * Hash: 0xE977FC5B08AF3441 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE977FC5B08AF3441)
	 */
	hasStealthModeAssetLoaded(asset: string): boolean;

	/**
	 * Native: PED::HAVE_ALL_STREAMING_REQUESTS_COMPLETED
	 *
	 * Hash: 0x7350823473013C02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7350823473013C02)
	 */
	haveAllStreamingRequestsCompleted(ped: Handle): boolean;

	/**
	 * Native: PED::HIDE_PED_BLOOD_DAMAGE_BY_ZONE
	 *
	 * Hash: 0x62AB793144DE75DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62AB793144DE75DC)
	 */
	hideBloodDamageByZone(ped: Handle, p1: integer, p2: boolean): void;

	/**
	 * Native: PED::INSTANTLY_FILL_PED_POPULATION
	 *
	 * Hash: 0x4759CC730F947C81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4759CC730F947C81)
	 */
	instantlyFillPopulation(): void;

	/**
	 * Native: PED::IS_PED_AIMING_FROM_COVER
	 *
	 * Hash: 0x3998B1276A3300E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3998B1276A3300E5)
	 */
	isAimingFromCover(ped: Handle): boolean;

	/**
	 * Native: PED::IS_ANY_HOSTILE_PED_NEAR_POINT
	 *
	 * Hash: 0x68772DB2B2526F9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68772DB2B2526F9F)
	 */
	isAnyHostileNearPoint(ped: Handle, x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: PED::IS_ANY_PED_NEAR_POINT
	 *
	 * Hash: 0x083961498679DC9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x083961498679DC9F)
	 */
	isAnyNearPoint(x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: PED::IS_ANY_PED_SHOOTING_IN_AREA
	 *
	 * Hash: 0xA0D3D71EA1086C55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0D3D71EA1086C55)
	 */
	isAnyShootingInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p6: boolean,
		p7: boolean
	): boolean;

	/**
	 * Native: PED::IS_PED_A_PLAYER
	 *
	 * Hash: 0x12534C348C6CB68B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12534C348C6CB68B)
	 */
	isAPlayer(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_BEING_JACKED
	 *
	 * Hash: 0x9A497FE2DF198913 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A497FE2DF198913)
	 */
	isBeingJacked(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_BEING_STEALTH_KILLED
	 *
	 * Hash: 0x863B23EFDE9C5DF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x863B23EFDE9C5DF2)
	 */
	isBeingStealthKilled(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_BEING_STUNNED
	 *
	 * Hash: 0x4FBACCE3B4138EE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4FBACCE3B4138EE8)
	 */
	isBeingStunned(ped: Handle, p1: integer): boolean;

	/**
	 * Native: PED::_IS_PED_BLUSH_COLOR_VALID
	 *
	 * Hash: 0x604E810189EE3A59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x604E810189EE3A59)
	 */
	isBlushColorValid(colorID: integer): boolean;

	/**
	 * Native: PED::_IS_PED_BLUSH_COLOR_VALID_2
	 *
	 * Hash: 0xF41B5D290C99A3D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF41B5D290C99A3D6)
	 */
	isBlushColorValid2(colorId: integer): boolean;

	/**
	 * Native: PED::_IS_PED_BODY_BLEMISH_VALID
	 *
	 * Hash: 0x09E7ECA981D9B210 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x09E7ECA981D9B210)
	 */
	isBodyBlemishValid(colorId: integer): boolean;

	/**
	 * Native: PED::IS_PED_CLIMBING
	 *
	 * Hash: 0x53E8CB4F48BFE623 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53E8CB4F48BFE623)
	 */
	isClimbing(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_COMPONENT_VARIATION_VALID
	 *
	 * Hash: 0xE825F6B6CEA7671D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE825F6B6CEA7671D)
	 */
	isComponentVariationValid(ped: Handle, componentId: integer, drawableId: integer, textureId: integer): boolean;

	/**
	 * Native: PED::IS_CONVERSATION_PED_DEAD
	 *
	 * Hash: 0xE0A0AEC214B1FABA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0A0AEC214B1FABA)
	 */
	isConversationDead(ped: Handle): boolean;

	/**
	 * Native: PED::IS_COP_PED_IN_AREA_3D
	 *
	 * Hash: 0x16EC4839969F9F5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16EC4839969F9F5E)
	 */
	isCopInArea3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

	/**
	 * Native: PED::IS_PED_DEAD_OR_DYING
	 *
	 * Hash: 0x3317DEDB88C95038 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3317DEDB88C95038)
	 */
	isDeadOrDying(ped: Handle, p1: boolean): boolean;

	/**
	 * Native: PED::IS_PED_DEFENSIVE_AREA_ACTIVE
	 *
	 * Hash: 0xBA63D9FE45412247 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA63D9FE45412247)
	 */
	isDefensiveAreaActive(ped: Handle, p1: boolean): boolean;

	/**
	 * Native: PED::IS_PED_DIVING
	 *
	 * Hash: 0x5527B8246FEF9B11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5527B8246FEF9B11)
	 */
	isDiving(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_DOING_DRIVEBY
	 *
	 * Hash: 0xB2C086CC1BF8F2BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2C086CC1BF8F2BF)
	 */
	isDoingDriveby(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_DUCKING
	 *
	 * Hash: 0xD125AE748725C6BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD125AE748725C6BC)
	 */
	isDucking(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_EVASIVE_DIVING
	 *
	 * Hash: 0x414641C26E105898 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x414641C26E105898)
	 */
	isEvasiveDiving(ped: Handle): Handle;

	/**
	 * Native: PED::IS_PED_FACING_PED
	 *
	 * Hash: 0xD71649DB0A545AA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD71649DB0A545AA3)
	 */
	isFacingPed(ped: Handle, otherPed: Handle, angle: number): boolean;

	/**
	 * Native: PED::IS_PED_FALLING
	 *
	 * Hash: 0xFB92A102F1C4DFA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB92A102F1C4DFA3)
	 */
	isFalling(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_FATALLY_INJURED
	 *
	 * Hash: 0xD839450756ED5A80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD839450756ED5A80)
	 */
	isFatallyInjured(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_FLEEING
	 *
	 * Hash: 0xBBCCE00B381F8482 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBCCE00B381F8482)
	 */
	isFleeing(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_GETTING_INTO_A_VEHICLE
	 *
	 * Hash: 0xBB062B2B5722478E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB062B2B5722478E)
	 */
	isGettingIntoAVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_GOING_INTO_COVER
	 *
	 * Hash: 0x9F65DBC537E59AD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F65DBC537E59AD5)
	 */
	isGoingIntoCover(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_GROUP_MEMBER
	 *
	 * Hash: 0x9BB01E3834671191 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BB01E3834671191)
	 */
	isGroupMember(ped: Handle, groupId: integer): boolean;

	/**
	 * Native: PED::_IS_PED_HAIR_COLOR_VALID
	 *
	 * Hash: 0xE0D36E5D9E99CC21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0D36E5D9E99CC21)
	 */
	isHairColorValid(colorID: integer): boolean;

	/**
	 * Native: PED::_IS_PED_HAIR_COLOR_VALID_2
	 *
	 * Hash: 0xED6D8E27A43B8CDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED6D8E27A43B8CDE)
	 */
	isHairColorValid2(colorId: integer): boolean;

	/**
	 * Native: PED::IS_PED_HANGING_ON_TO_VEHICLE
	 *
	 * Hash: 0x1C86D8AEF8254B78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C86D8AEF8254B78)
	 */
	isHangingOnToVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_HEADING_TOWARDS_POSITION
	 *
	 * Hash: 0xFCF37A457CB96DC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCF37A457CB96DC0)
	 */
	isHeadingTowardsPosition(ped: Handle, x: number, y: number, z: number, p4: number): boolean;

	/**
	 * Native: PED::IS_PEDHEADSHOT_IMG_UPLOAD_AVAILABLE
	 *
	 * Hash: 0xEBB376779A760AA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBB376779A760AA8)
	 */
	isHeadshotImgUploadAvailable(): boolean;

	/**
	 * Native: PED::IS_PEDHEADSHOT_READY
	 *
	 * Hash: 0x7085228842B13A67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7085228842B13A67)
	 */
	isHeadshotReady(id: integer): boolean;

	/**
	 * Native: PED::IS_PEDHEADSHOT_VALID
	 *
	 * Hash: 0xA0A9668F158129A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0A9668F158129A2)
	 */
	isHeadshotValid(id: integer): boolean;

	/**
	 * Native: PED::IS_PED_HEADTRACKING_ENTITY
	 *
	 * Hash: 0x813A0A7C9D2E831F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x813A0A7C9D2E831F)
	 */
	isHeadtrackingEntity(ped: Handle, entity: Handle): boolean;

	/**
	 * Native: PED::IS_PED_HEADTRACKING_PED
	 *
	 * Hash: 0x5CD3CB88A7F8850D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CD3CB88A7F8850D)
	 */
	isHeadtrackingPed(ped1: Handle, ped2: Handle): boolean;

	/**
	 * Native: PED::_IS_PED_HELMET_UNK
	 *
	 * Hash: 0xB9496CE47546DB2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9496CE47546DB2C)
	 */
	isHelmetUnk(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_HUMAN
	 *
	 * Hash: 0xB980061DA992779D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB980061DA992779D)
	 */
	isHuman(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_HURT
	 *
	 * Hash: 0x5983BB449D7FDB12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5983BB449D7FDB12)
	 */
	isHurt(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_BOAT
	 *
	 * Hash: 0x2E0E1C2B4F6CB339 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E0E1C2B4F6CB339)
	 */
	isInAnyBoat(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_HELI
	 *
	 * Hash: 0x298B91AE825E5705 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x298B91AE825E5705)
	 */
	isInAnyHeli(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_PLANE
	 *
	 * Hash: 0x5FFF4CFC74D8FB80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FFF4CFC74D8FB80)
	 */
	isInAnyPlane(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_POLICE_VEHICLE
	 *
	 * Hash: 0x0BD04E29640C9C12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BD04E29640C9C12)
	 */
	isInAnyPoliceVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_SUB
	 *
	 * Hash: 0xFBFC01CCFB35D99E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBFC01CCFB35D99E)
	 */
	isInAnySub(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_TAXI
	 *
	 * Hash: 0x6E575D6A898AB852 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E575D6A898AB852)
	 */
	isInAnyTaxi(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_TRAIN
	 *
	 * Hash: 0x6F972C1AB75A1ED0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F972C1AB75A1ED0)
	 */
	isInAnyTrain(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_ANY_VEHICLE
	 *
	 * Hash: 0x997ABD671D25CA0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x997ABD671D25CA0B)
	 */
	isInAnyVehicle(ped: Handle, atGetIn: boolean): boolean;

	/**
	 * Native: PED::IS_PED_IN_COMBAT
	 *
	 * Hash: 0x4859F1FC66A6278E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4859F1FC66A6278E)
	 */
	isInCombat(ped: Handle, target: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_COVER
	 *
	 * Hash: 0x60DFD0691A170B88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60DFD0691A170B88)
	 */
	isInCover(ped: Handle, exceptUseWeapon: boolean): boolean;

	/**
	 * Native: PED::IS_PED_IN_COVER_FACING_LEFT
	 *
	 * Hash: 0x845333B3150583AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x845333B3150583AB)
	 */
	isInCoverFacingLeft(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_FLYING_VEHICLE
	 *
	 * Hash: 0x9134873537FA419C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9134873537FA419C)
	 */
	isInFlyingVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_GROUP
	 *
	 * Hash: 0x5891CAC5D4ACFF74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5891CAC5D4ACFF74)
	 */
	isInGroup(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_HIGH_COVER
	 *
	 * Hash: 0x6A03BF943D767C93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A03BF943D767C93)
	 */
	isInHighCover(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_INJURED
	 *
	 * Hash: 0x84A2DD9AC37C35C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84A2DD9AC37C35C1)
	 */
	isInjured(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_MELEE_COMBAT
	 *
	 * Hash: 0x4E209B2C1EAD5159 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E209B2C1EAD5159)
	 */
	isInMeleeCombat(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_MODEL
	 *
	 * Hash: 0x796D90EFB19AA332 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x796D90EFB19AA332)
	 */
	isInModel(ped: Handle, modelHash: integer): boolean;

	/**
	 * Native: PED::IS_PED_IN_PARACHUTE_FREE_FALL
	 *
	 * Hash: 0x7DCE8BDA0F1C1200 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DCE8BDA0F1C1200)
	 */
	isInParachuteFreeFall(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_IN_VEHICLE
	 *
	 * Hash: 0xA3EE4A07279BB9DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3EE4A07279BB9DB)
	 */
	isInVehicle(ped: Handle, vehicle: Handle, atGetIn: boolean): boolean;

	/**
	 * Native: PED::IS_PED_JACKING
	 *
	 * Hash: 0x4AE4FF911DFB61DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AE4FF911DFB61DA)
	 */
	isJacking(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_JUMPING
	 *
	 * Hash: 0xCEDABC5900A0BF97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEDABC5900A0BF97)
	 */
	isJumping(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_JUMPING_OUT_OF_VEHICLE
	 *
	 * Hash: 0x433DDFFE2044B636 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x433DDFFE2044B636)
	 */
	isJumpingOutOfVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::_IS_PED_LIPSTICK_COLOR_VALID
	 *
	 * Hash: 0x0525A2C2562F3CD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0525A2C2562F3CD4)
	 */
	isLipstickColorValid(colorID: integer): boolean;

	/**
	 * Native: PED::_IS_PED_LIPSTICK_COLOR_VALID_2
	 *
	 * Hash: 0x3E802F11FBE27674 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E802F11FBE27674)
	 */
	isLipstickColorValid2(colorId: integer): boolean;

	/**
	 * Native: PED::IS_PED_MALE
	 *
	 * Hash: 0x6D9F5FAA7488BA46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D9F5FAA7488BA46)
	 */
	isMale(ped: Handle): boolean;

	/**
	 * Native: PED::IS_MOBILE_PHONE_TO_PED_EAR
	 *
	 * Hash: 0xA3F3564A5B3646C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3F3564A5B3646C0)
	 */
	isMobilePhoneToEar(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_MODEL
	 *
	 * Hash: 0xC9D55B1A358A5BF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9D55B1A358A5BF7)
	 */
	isModel(ped: Handle, modelHash: integer): boolean;

	/**
	 * Native: PED::IS_PED_ON_ANY_BIKE
	 *
	 * Hash: 0x94495889E22C6479 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94495889E22C6479)
	 */
	isOnAnyBike(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_ON_FOOT
	 *
	 * Hash: 0x01FEE67DB37F59B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01FEE67DB37F59B2)
	 */
	isOnFoot(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_ON_MOUNT
	 *
	 * Hash: 0x460BC76A0E10655E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x460BC76A0E10655E)
	 */
	isOnMount(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_ON_SPECIFIC_VEHICLE
	 *
	 * Hash: 0xEC5F66E459AF3BB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC5F66E459AF3BB2)
	 */
	isOnSpecificVehicle(ped: Handle, vehicle: Handle): boolean;

	/**
	 * Native: PED::IS_PED_ON_VEHICLE
	 *
	 * Hash: 0x67722AEB798E5FAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67722AEB798E5FAB)
	 */
	isOnVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::_IS_PED_OPENING_A_DOOR
	 *
	 * Hash: 0x26AF0E8E30BD2A2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26AF0E8E30BD2A2C)
	 */
	isOpeningADoor(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_PERFORMING_DEPENDENT_COMBO_LIMIT
	 *
	 * Hash: 0xEBD0EDBA5BE957CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBD0EDBA5BE957CF)
	 */
	isPerformingDependentComboLimit(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_PERFORMING_MELEE_ACTION
	 *
	 * Hash: 0xDCCA191DF9980FD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCCA191DF9980FD7)
	 */
	isPerformingMeleeAction(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_PERFORMING_STEALTH_KILL
	 *
	 * Hash: 0xFD4CCDBCC59941B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD4CCDBCC59941B7)
	 */
	isPerformingStealthKill(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_PLANTING_BOMB
	 *
	 * Hash: 0xC70B5FAE151982D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC70B5FAE151982D8)
	 */
	isPlantingBomb(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_PRONE
	 *
	 * Hash: 0xD6A86331A537A7B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6A86331A537A7B9)
	 */
	isProne(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_RAGDOLL
	 *
	 * Hash: 0x47E4E977581C5B55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47E4E977581C5B55)
	 */
	isRagdoll(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_RELOADING
	 *
	 * Hash: 0x24B100C68C645951 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24B100C68C645951)
	 */
	isReloading(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_RESPONDING_TO_EVENT
	 *
	 * Hash: 0x625B774D75C87068 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x625B774D75C87068)
	 */
	isRespondingToEvent(ped: Handle, event: integer): boolean;

	/**
	 * Native: PED::IS_PED_RUNNING_MELEE_TASK
	 *
	 * Hash: 0xD1871251F3B5ACD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1871251F3B5ACD7)
	 */
	isRunningMeleeTask(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_RUNNING_MOBILE_PHONE_TASK
	 *
	 * Hash: 0x2AFE52F782F25775 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AFE52F782F25775)
	 */
	isRunningMobilePhoneTask(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_RUNNING_RAGDOLL_TASK
	 *
	 * Hash: 0xE3B6097CC25AA69E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3B6097CC25AA69E)
	 */
	isRunningRagdollTask(ped: Handle): boolean;

	/**
	 * Native: PED::IS_SCRIPTED_SCENARIO_PED_USING_CONDITIONAL_ANIM
	 *
	 * Hash: 0x6EC47A344923E1ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EC47A344923E1ED)
	 */
	isScriptedScenarioUsingConditionalAnim(ped: Handle, animDict: string, anim: string): boolean;

	/**
	 * Native: PED::_IS_SCUBA_GEAR_LIGHT_ENABLED
	 *
	 * Hash: 0x88274C11CF0D866D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88274C11CF0D866D)
	 */
	isScubaGearLightEnabled(ped: Handle): boolean;

	/**
	 * Native: PED::_IS_PED_SHADER_EFFECT_VALID
	 *
	 * Hash: 0x81AA517FBBA05D39 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81AA517FBBA05D39)
	 */
	isShaderEffectValid(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_SHOOTING
	 *
	 * Hash: 0x34616828CD07F1A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34616828CD07F1A1)
	 */
	isShooting(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_SHOOTING_IN_AREA
	 *
	 * Hash: 0x7E9DFE24AC1E58EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E9DFE24AC1E58EF)
	 */
	isShootingInArea(
		ped: Handle,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p7: boolean,
		p8: boolean
	): boolean;

	/**
	 * Native: PED::IS_PED_SITTING_IN_ANY_VEHICLE
	 *
	 * Hash: 0x826AA586EDB9FEF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x826AA586EDB9FEF8)
	 */
	isSittingInAnyVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_SITTING_IN_VEHICLE
	 *
	 * Hash: 0xA808AA1D79230FC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA808AA1D79230FC2)
	 */
	isSittingInVehicle(ped: Handle, vehicle: Handle): boolean;

	/**
	 * Native: PED::IS_PED_STOPPED
	 *
	 * Hash: 0x530944F6F4B8A214 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x530944F6F4B8A214)
	 */
	isStopped(ped: Handle): boolean;

	/**
	 * Native: PED::_IS_PED_SWAPPING_WEAPON
	 *
	 * Hash: 0x3795688A307E1EB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3795688A307E1EB6)
	 */
	isSwappingWeapon(Ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_SWIMMING
	 *
	 * Hash: 0x9DE327631295B4C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DE327631295B4C2)
	 */
	isSwimming(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_SWIMMING_UNDER_WATER
	 *
	 * Hash: 0xC024869A53992F34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC024869A53992F34)
	 */
	isSwimmingUnderWater(ped: Handle): boolean;

	/**
	 * Native: PED::IS_SYNCHRONIZED_SCENE_HOLD_LAST_FRAME
	 *
	 * Hash: 0x7F2F4F13AC5257EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F2F4F13AC5257EF)
	 */
	isSynchronizedSceneHoldLastFrame(sceneID: integer): boolean;

	/**
	 * Native: PED::IS_SYNCHRONIZED_SCENE_LOOPED
	 *
	 * Hash: 0x62522002E0C391BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62522002E0C391BA)
	 */
	isSynchronizedSceneLoo(sceneID: integer): boolean;

	/**
	 * Native: PED::IS_SYNCHRONIZED_SCENE_RUNNING
	 *
	 * Hash: 0x25D39B935A038A26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25D39B935A038A26)
	 */
	isSynchronizedSceneRunning(sceneId: integer): boolean;

	/**
	 * Native: PED::IS_PED_TAKING_OFF_HELMET
	 *
	 * Hash: 0x14590DDBEDB1EC85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14590DDBEDB1EC85)
	 */
	isTakingOffHelmet(ped: Handle): boolean;

	/**
	 * Native: PED::IS_TARGET_PED_IN_PERCEPTION_AREA
	 *
	 * Hash: 0x06087579E7AA85A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06087579E7AA85A9)
	 */
	isTargetInPerceptionArea(ped: Handle, targetPed: Handle, p2: number, p3: number, p4: number, p5: number): boolean;

	/**
	 * Native: PED::IS_PED_TRACKED
	 *
	 * Hash: 0x4C5E1F087CD10BB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C5E1F087CD10BB7)
	 */
	isTracked(ped: Handle): boolean;

	/**
	 * Native: PED::IS_TRACKED_PED_VISIBLE
	 *
	 * Hash: 0x91C8E617F64188AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91C8E617F64188AC)
	 */
	isTrackedVisible(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_TRYING_TO_ENTER_A_LOCKED_VEHICLE
	 *
	 * Hash: 0x44D28D5DDFE5F68C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44D28D5DDFE5F68C)
	 */
	isTryingToEnterALockedVehicle(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_USING_ACTION_MODE
	 *
	 * Hash: 0x00E73468D085F745 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00E73468D085F745)
	 */
	isUsingActionMode(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_USING_ANY_SCENARIO
	 *
	 * Hash: 0x57AB4A3080F85143 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57AB4A3080F85143)
	 */
	isUsingAnyScenario(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_USING_SCENARIO
	 *
	 * Hash: 0x1BF094736DD62C2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BF094736DD62C2E)
	 */
	isUsingScenario(ped: Handle, scenario: string): boolean;

	/**
	 * Native: PED::IS_PED_VAULTING
	 *
	 * Hash: 0x117C70D1F5730B5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x117C70D1F5730B5E)
	 */
	isVaulting(ped: Handle): boolean;

	/**
	 * Native: PED::IS_PED_WEARING_HELMET
	 *
	 * Hash: 0xF33BDFE19B309B19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF33BDFE19B309B19)
	 */
	isWearingHelmet(ped: Handle): boolean;

	/**
	 * Native: PED::KNOCK_OFF_PED_PROP
	 *
	 * Hash: 0x6FD7816A36615F48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FD7816A36615F48)
	 */
	knockOffProp(ped: Handle, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

	/**
	 * Native: PED::KNOCK_PED_OFF_VEHICLE
	 *
	 * Hash: 0x45BBCBA77C29A841 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45BBCBA77C29A841)
	 */
	knockOffVehicle(ped: Handle): void;

	/**
	 * Native: PED::PLAY_FACIAL_ANIM
	 *
	 * Hash: 0xE1E65CA8AC9C00ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1E65CA8AC9C00ED)
	 */
	playFacialAnim(ped: Handle, animName: string, animDict: string): void;

	/**
	 * Native: PED::REGISTER_HATED_TARGETS_AROUND_PED
	 *
	 * Hash: 0x9222F300BF8354FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9222F300BF8354FE)
	 */
	registerHatedTargetsAround(ped: Handle, radius: number): void;

	/**
	 * Native: PED::REGISTER_PEDHEADSHOT
	 *
	 * Hash: 0x4462658788425076 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4462658788425076)
	 */
	registerHeadshot(ped: Handle): integer;

	/**
	 * Native: PED::_REGISTER_PEDHEADSHOT_3
	 *
	 * Hash: 0xBA8805A1108A2515 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA8805A1108A2515)
	 */
	registerHeadshot3(ped: Handle): integer;

	/**
	 * Native: PED::REGISTER_PEDHEADSHOT_TRANSPARENT
	 *
	 * Hash: 0x953563CE563143AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x953563CE563143AF)
	 */
	registerHeadshotTransparent(ped: Handle): integer;

	/**
	 * Native: PED::REGISTER_TARGET
	 *
	 * Hash: 0x2F25D9AEFA34FBA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F25D9AEFA34FBA2)
	 */
	registerTarget(ped: Handle, target: Handle): void;

	/**
	 * Native: PED::RELEASE_PEDHEADSHOT_IMG_UPLOAD
	 *
	 * Hash: 0x5D517B27CF6ECD04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D517B27CF6ECD04)
	 */
	releaseHeadshotImgUpload(id: integer): void;

	/**
	 * Native: PED::RELEASE_PED_PRELOAD_PROP_DATA
	 *
	 * Hash: 0xF79F9DEF0AADE61A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF79F9DEF0AADE61A)
	 */
	releasePreloadPropData(ped: Handle): void;

	/**
	 * Native: PED::RELEASE_PED_PRELOAD_VARIATION_DATA
	 *
	 * Hash: 0x5AAB586FFEC0FD96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AAB586FFEC0FD96)
	 */
	releasePreloadVariationData(ped: Handle): void;

	/**
	 * Native: PED::REMOVE_ACTION_MODE_ASSET
	 *
	 * Hash: 0x13E940F88470FA51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13E940F88470FA51)
	 */
	removeActionModeAsset(asset: string): void;

	/**
	 * Native: PED::REMOVE_PED_DEFENSIVE_AREA
	 *
	 * Hash: 0x74D4E028107450A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74D4E028107450A9)
	 */
	removeDefensiveArea(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::REMOVE_PED_ELEGANTLY
	 *
	 * Hash: 0xAC6D445B994DF95E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC6D445B994DF95E)
	 */
	removeElegantly(): Handle;

	/**
	 * Native: PED::REMOVE_PED_FROM_GROUP
	 *
	 * Hash: 0xED74007FFB146BC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED74007FFB146BC2)
	 */
	removeFromGroup(ped: Handle): void;

	/**
	 * Native: PED::REMOVE_GROUP
	 *
	 * Hash: 0x8EB2F69076AF7053 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EB2F69076AF7053)
	 */
	removeGroup(groupId: integer): void;

	/**
	 * Native: PED::REMOVE_PED_HELMET
	 *
	 * Hash: 0xA7B2458D0AD6DED8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7B2458D0AD6DED8)
	 */
	removeHelmet(ped: Handle, instantly: boolean): void;

	/**
	 * Native: PED::REMOVE_PED_PREFERRED_COVER_SET
	 *
	 * Hash: 0xFDDB234CF74073D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDDB234CF74073D9)
	 */
	removePreferredCoverSet(ped: Handle): void;

	/**
	 * Native: PED::REMOVE_RELATIONSHIP_GROUP
	 *
	 * Hash: 0xB6BA2444AB393DA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6BA2444AB393DA2)
	 */
	removeRelationshipGroup(groupHash: integer): void;

	/**
	 * Native: PED::REMOVE_SCENARIO_BLOCKING_AREA
	 *
	 * Hash: 0x31D16B74C6E29D66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31D16B74C6E29D66)
	 */
	removeScenarioBlockingArea(p0: integer, p1: boolean): void;

	/**
	 * Native: PED::REMOVE_SCENARIO_BLOCKING_AREAS
	 *
	 * Hash: 0xD37401D78A929A49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD37401D78A929A49)
	 */
	removeScenarioBlockingAreas(): void;

	/**
	 * Native: PED::REMOVE_STEALTH_MODE_ASSET
	 *
	 * Hash: 0x9219857D21F0E842 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9219857D21F0E842)
	 */
	removeStealthModeAsset(asset: string): void;

	/**
	 * Native: PED::REQUEST_ACTION_MODE_ASSET
	 *
	 * Hash: 0x290E2780BB7AA598 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x290E2780BB7AA598)
	 */
	requestActionModeAsset(asset: string): void;

	/**
	 * Native: PED::REQUEST_PEDHEADSHOT_IMG_UPLOAD
	 *
	 * Hash: 0xF0DAEF2F545BEE25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0DAEF2F545BEE25)
	 */
	requestHeadshotImgUpload(id: integer): boolean;

	/**
	 * Native: PED::REQUEST_STEALTH_MODE_ASSET
	 *
	 * Hash: 0x2A0A62FCDEE16D4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A0A62FCDEE16D4F)
	 */
	requestStealthModeAsset(asset: string): void;

	/**
	 * Native: PED::REQUEST_PED_VEHICLE_VISIBILITY_TRACKING
	 *
	 * Hash: 0x2BC338A7B21F4608 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BC338A7B21F4608)
	 */
	requestVehicleVisibilityTracking(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::REQUEST_PED_VISIBILITY_TRACKING
	 *
	 * Hash: 0x7D7A2E43E74E2EB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D7A2E43E74E2EB8)
	 */
	requestVisibilityTracking(ped: Handle): void;

	/**
	 * Native: PED::RESET_AI_MELEE_WEAPON_DAMAGE_MODIFIER
	 *
	 * Hash: 0x46E56A7CD1D63C3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46E56A7CD1D63C3F)
	 */
	resetAiMeleeWeaponDamageModifier(): void;

	/**
	 * Native: PED::RESET_AI_WEAPON_DAMAGE_MODIFIER
	 *
	 * Hash: 0xEA16670E7BA4743C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA16670E7BA4743C)
	 */
	resetAiWeaponDamageModifier(): void;

	/**
	 * Native: PED::RESET_GROUP_FORMATION_DEFAULT_SPACING
	 *
	 * Hash: 0x63DAB4CCB3273205 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63DAB4CCB3273205)
	 */
	resetGroupFormationDefaultSpacing(groupHandle: integer): void;

	/**
	 * Native: PED::RESET_PED_IN_VEHICLE_CONTEXT
	 *
	 * Hash: 0x22EF8FF8778030EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22EF8FF8778030EB)
	 */
	resetInVehicleContext(ped: Handle): void;

	/**
	 * Native: PED::RESET_PED_LAST_VEHICLE
	 *
	 * Hash: 0xBB8DE8CF6A8DD8BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB8DE8CF6A8DD8BB)
	 */
	resetLastVehicle(ped: Handle): void;

	/**
	 * Native: PED::RESET_PED_MOVEMENT_CLIPSET
	 *
	 * Hash: 0xAA74EC0CB0AAEA2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA74EC0CB0AAEA2C)
	 */
	resetMovementClipset(ped: Handle, p1: number): void;

	/**
	 * Native: PED::RESET_PED_RAGDOLL_TIMER
	 *
	 * Hash: 0x9FA4664CF62E47E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FA4664CF62E47E8)
	 */
	resetRagdollTimer(ped: Handle): void;

	/**
	 * Native: PED::RESET_PED_STRAFE_CLIPSET
	 *
	 * Hash: 0x20510814175EA477 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20510814175EA477)
	 */
	resetStrafeClipset(ped: Handle): void;

	/**
	 * Native: PED::RESET_PED_VISIBLE_DAMAGE
	 *
	 * Hash: 0x3AC1F7B898F30C05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3AC1F7B898F30C05)
	 */
	resetVisibleDamage(ped: Handle): void;

	/**
	 * Native: PED::RESET_PED_WEAPON_MOVEMENT_CLIPSET
	 *
	 * Hash: 0x97B0DB5B4AA74E77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97B0DB5B4AA74E77)
	 */
	resetWeaponMovementClipset(ped: Handle): void;

	/**
	 * Native: PED::RESURRECT_PED
	 *
	 * Hash: 0x71BC8E838B9C6035 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71BC8E838B9C6035)
	 */
	resurrect(ped: Handle): void;

	/**
	 * Native: PED::REVIVE_INJURED_PED
	 *
	 * Hash: 0x8D8ACD8388CD99CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D8ACD8388CD99CE)
	 */
	reviveInjured(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_ACCURACY
	 *
	 * Hash: 0x7AEFB85C1D49DEB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AEFB85C1D49DEB6)
	 */
	setAccuracy(ped: Handle, accuracy: integer): void;

	/**
	 * Native: PED::SET_AI_MELEE_WEAPON_DAMAGE_MODIFIER
	 *
	 * Hash: 0x66460DEDDD417254 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66460DEDDD417254)
	 */
	setAiMeleeWeaponDamageModifier(modifier: number): void;

	/**
	 * Native: PED::SET_AI_WEAPON_DAMAGE_MODIFIER
	 *
	 * Hash: 0x1B1E2A40A65B8521 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B1E2A40A65B8521)
	 */
	setAiWeaponDamageModifier(value: number): void;

	/**
	 * Native: PED::SET_PED_ALERTNESS
	 *
	 * Hash: 0xDBA71115ED9941A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBA71115ED9941A6)
	 */
	setAlertness(ped: Handle, value: integer): void;

	/**
	 * Native: PED::SET_PED_ALLOWED_TO_DUCK
	 *
	 * Hash: 0xDA1F1B7BE1A8766F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA1F1B7BE1A8766F)
	 */
	setAllowedToDuck(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_ALLOW_VEHICLES_OVERRIDE
	 *
	 * Hash: 0x3C028C636A414ED9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C028C636A414ED9)
	 */
	setAllowVehiclesOverride(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_ALTERNATE_MOVEMENT_ANIM
	 *
	 * Hash: 0x90A43CC281FFAB46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90A43CC281FFAB46)
	 */
	setAlternateMovementAnim(
		ped: Handle,
		stance: integer,
		animDictionary: string,
		animationName: string,
		p4: number,
		p5: boolean
	): void;

	/**
	 * Native: PED::SET_PED_ALTERNATE_WALK_ANIM
	 *
	 * Hash: 0x6C60394CB4F75E9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C60394CB4F75E9A)
	 */
	setAlternateWalkAnim(ped: Handle, animDict: string, animName: string, p3: number, p4: boolean): void;

	/**
	 * Native: PED::SET_PED_ANGLED_DEFENSIVE_AREA
	 *
	 * Hash: 0xC7F76DF27A5045A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7F76DF27A5045A1)
	 */
	setAngledDefensiveArea(
		ped: Handle,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: boolean,
		p9: boolean
	): void;

	/**
	 * Native: PED::SET_PED_AO_BLOB_RENDERING
	 *
	 * Hash: 0x2B5AA717A181FB4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B5AA717A181FB4C)
	 */
	setAoBlobRendering(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_ARMOUR
	 *
	 * Hash: 0xCEA04D83135264CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEA04D83135264CC)
	 */
	setArmour(ped: Handle, amount: integer): void;

	/**
	 * Native: PED::SET_PED_AS_COP
	 *
	 * Hash: 0xBB03C38DD3FB7FFD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB03C38DD3FB7FFD)
	 */
	setAsCop(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_AS_ENEMY
	 *
	 * Hash: 0x02A0C9720B854BFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02A0C9720B854BFA)
	 */
	setAsEnemy(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_AS_GROUP_LEADER
	 *
	 * Hash: 0x2A7819605465FBCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A7819605465FBCE)
	 */
	setAsGroupLeader(ped: Handle, groupId: integer): void;

	/**
	 * Native: PED::SET_PED_AS_GROUP_MEMBER
	 *
	 * Hash: 0x9F3480FE65DB31B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F3480FE65DB31B5)
	 */
	setAsGroupMember(ped: Handle, groupId: integer): void;

	/**
	 * Native: PED::SET_PED_BLEND_FROM_PARENTS
	 *
	 * Hash: 0x137BBD05230DB22D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x137BBD05230DB22D)
	 */
	setBlendFromParents(ped: Handle, p1: integer, p2: integer, p3: number, p4: number): void;

	/**
	 * Native: PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS
	 *
	 * Hash: 0x9F8AA94D6D97DBF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F8AA94D6D97DBF4)
	 */
	setBlockingOfNonTemporaryEvents(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_BLOCKS_PATHING_WHEN_DEAD
	 *
	 * Hash: 0x576594E8D64375E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x576594E8D64375E2)
	 */
	setBlocksPathingWhenDead(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_BOUNDS_ORIENTATION
	 *
	 * Hash: 0x4F5F651ACCC9C4CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F5F651ACCC9C4CF)
	 */
	setBoundsOrientation(ped: Handle, p1: number, p2: number, p3: number, p4: number, p5: number): void;

	/**
	 * Native: PED::SET_PED_CAN_ARM_IK
	 *
	 * Hash: 0x6C3B4D6D13B4C841 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C3B4D6D13B4C841)
	 */
	setCanArmIk(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_CAN_ATTACK_FRIENDLY
	 *
	 * Hash: 0xB3B1CB349FF9C75D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3B1CB349FF9C75D)
	 */
	setCanAttackFriendly(ped: Handle, toggle: boolean, p2: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_DRAGGED_OUT
	 *
	 * Hash: 0xC1670E958EEE24E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1670E958EEE24E5)
	 */
	setCanBeDraggedOut(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_KNOCKED_OFF_VEHICLE
	 *
	 * Hash: 0x7A6535691B477C48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A6535691B477C48)
	 */
	setCanBeKnockedOffVehicle(ped: Handle, state: integer): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_SHOT_IN_VEHICLE
	 *
	 * Hash: 0xC7EF1BA83230BA07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7EF1BA83230BA07)
	 */
	setCanBeShotInVehicle(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_TARGETED_WHEN_INJURED
	 *
	 * Hash: 0x638C03B0F9878F57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x638C03B0F9878F57)
	 */
	setCanBeTargetedWhenInjured(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_TARGETED_WITHOUT_LOS
	 *
	 * Hash: 0x4328652AE5769C71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4328652AE5769C71)
	 */
	setCanBeTargetedWithoutLos(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_TARGETTED
	 *
	 * Hash: 0x63F58F7C80513AAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63F58F7C80513AAD)
	 */
	setCanBeTargetted(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_TARGETTED_BY_PLAYER
	 *
	 * Hash: 0x66B57B72E0836A76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66B57B72E0836A76)
	 */
	setCanBeTargettedByPlayer(ped: Handle, player: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_BE_TARGETTED_BY_TEAM
	 *
	 * Hash: 0xBF1CA77833E58F2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF1CA77833E58F2C)
	 */
	setCanBeTargettedByTeam(ped: Handle, team: integer, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_COWER_IN_COVER
	 *
	 * Hash: 0xCB7553CDCEF4A735 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB7553CDCEF4A735)
	 */
	setCanCowerInCover(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_EVASIVE_DIVE
	 *
	 * Hash: 0x6B7A646C242A7059 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B7A646C242A7059)
	 */
	setCanEvasiveDive(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_HEAD_IK
	 *
	 * Hash: 0xC11C18092C5530DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC11C18092C5530DC)
	 */
	setCanHeadIk(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_LEG_IK
	 *
	 * Hash: 0x73518ECE2485412B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73518ECE2485412B)
	 */
	setCanLegIk(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_LOSE_PROPS_ON_DAMAGE
	 *
	 * Hash: 0xE861D0B05C7662B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE861D0B05C7662B8)
	 */
	setCanLosePropsOnDamage(ped: Handle, toggle: boolean, p2: integer): void;

	/**
	 * Native: PED::SET_PED_CAN_PEEK_IN_COVER
	 *
	 * Hash: 0xC514825C507E3736 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC514825C507E3736)
	 */
	setCanPeekInCover(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_PLAY_AMBIENT_ANIMS
	 *
	 * Hash: 0x6373D1349925A70E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6373D1349925A70E)
	 */
	setCanPlayAmbientAnims(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_PLAY_AMBIENT_BASE_ANIMS
	 *
	 * Hash: 0x0EB0585D15254740 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EB0585D15254740)
	 */
	setCanPlayAmbientBaseAnims(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_PLAY_GESTURE_ANIMS
	 *
	 * Hash: 0xBAF20C5432058024 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAF20C5432058024)
	 */
	setCanPlayGestureAnims(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_SET_PED_CAN_PLAY_IN_CAR_IDLES
	 *
	 * Hash: 0x820E9892A77E97CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x820E9892A77E97CD)
	 */
	setCanPlayInCarIdles(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_SET_PED_CAN_PLAY_INJURED_ANIMS
	 *
	 * Hash: 0x33A60D8BDD6E508C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33A60D8BDD6E508C)
	 */
	setCanPlayInjuredAnims(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_PLAY_VISEME_ANIMS
	 *
	 * Hash: 0xF833DDBA3B104D43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF833DDBA3B104D43)
	 */
	setCanPlayVisemeAnims(ped: Handle, toggle: boolean, p2: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_RAGDOLL
	 *
	 * Hash: 0xB128377056A54E2A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB128377056A54E2A)
	 */
	setCanRagdoll(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_RAGDOLL_FROM_PLAYER_IMPACT
	 *
	 * Hash: 0xDF993EE5E90ABA25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF993EE5E90ABA25)
	 */
	setCanRagdollFromPlayerImpact(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_SMASH_GLASS
	 *
	 * Hash: 0x1CCE141467FF42A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CCE141467FF42A2)
	 */
	setCanSmashGlass(ped: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_SWITCH_WEAPON
	 *
	 * Hash: 0xED7F7EFE9FABF340 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED7F7EFE9FABF340)
	 */
	setCanSwitchWeapon(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_TELEPORT_TO_GROUP_LEADER
	 *
	 * Hash: 0x2E2F4240B3F24647 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E2F4240B3F24647)
	 */
	setCanTeleportToGroupLeader(pedHandle: Handle, groupHandle: integer, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_TORSO_IK
	 *
	 * Hash: 0xF2B7106D37947CE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2B7106D37947CE0)
	 */
	setCanTorsoIk(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_TORSO_REACT_IK
	 *
	 * Hash: 0xF5846EDB26A98A24 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5846EDB26A98A24)
	 */
	setCanTorsoReactIk(ped: Handle, p1: boolean): void;

	/**
	 * Native: PED::SET_PED_CAN_USE_AUTO_CONVERSATION_LOOKAT
	 *
	 * Hash: 0xEC4686EC06434678 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC4686EC06434678)
	 */
	setCanUseAutoConversationLookat(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_CAPSULE
	 *
	 * Hash: 0x364DF566EC833DE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x364DF566EC833DE2)
	 */
	setCapsule(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_CLOTH_PACKAGE_INDEX
	 *
	 * Hash: 0x78C4E9961DB3EB5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78C4E9961DB3EB5B)
	 */
	setClothPackageIndex(p0: integer, p1: integer): void;

	/**
	 * Native: PED::SET_PED_CLOTH_PRONE
	 *
	 * Hash: 0x82A3D6D9CC2CB8E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82A3D6D9CC2CB8E3)
	 */
	setClothProne(p0: integer, p1: integer): void;

	/**
	 * Native: PED::SET_PED_COMBAT_ABILITY
	 *
	 * Hash: 0xC7622C0D36B2FDA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7622C0D36B2FDA8)
	 */
	setCombatAbility(ped: Handle, abilityLevel: integer): void;

	/**
	 * Native: PED::SET_PED_COMBAT_ATTRIBUTES
	 *
	 * Hash: 0x9F7794730795E019 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F7794730795E019)
	 */
	setCombatAttributes(ped: Handle, attributeId: integer, enabled: boolean): void;

	/**
	 * Native: PED::SET_COMBAT_FLOAT
	 *
	 * Hash: 0xFF41B4B141ED981C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF41B4B141ED981C)
	 */
	setCombatFloat(ped: Handle, combatType: integer, p2: number): void;

	/**
	 * Native: PED::SET_PED_COMBAT_MOVEMENT
	 *
	 * Hash: 0x4D9CA1009AFBD057 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D9CA1009AFBD057)
	 */
	setCombatMovement(ped: Handle, combatMovement: integer): void;

	/**
	 * Native: PED::SET_PED_COMBAT_RANGE
	 *
	 * Hash: 0x3C606747B23E497B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C606747B23E497B)
	 */
	setCombatRange(ped: Handle, combatRange: integer): void;

	/**
	 * Native: PED::SET_PED_COMPONENT_VARIATION
	 *
	 * Hash: 0x262B14F48D29DE80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x262B14F48D29DE80)
	 */
	setComponentVariation(
		ped: Handle,
		componentId: integer,
		drawableId: integer,
		textureId: integer,
		paletteId: integer
	): void;

	/**
	 * Native: PED::SET_PED_CONFIG_FLAG
	 *
	 * Hash: 0x1913FE4CBF41C463 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1913FE4CBF41C463)
	 */
	setConfigFlag(ped: Handle, flagId: integer, value: boolean): void;

	/**
	 * Native: PED::SET_PED_COORDS_KEEP_VEHICLE
	 *
	 * Hash: 0x9AFEFF481A85AB2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AFEFF481A85AB2E)
	 */
	setCoordsKeepVehicle(ped: Handle, posX: number, posY: number, posZ: number): void;

	/**
	 * Native: PED::SET_PED_COORDS_NO_GANG
	 *
	 * Hash: 0x87052FE446E07247 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87052FE446E07247)
	 */
	setCoordsNoGang(ped: Handle, posX: number, posY: number, posZ: number): void;

	/**
	 * Native: PED::_SET_PED_COVER_CLIPSET_OVERRIDE
	 *
	 * Hash: 0x9DBA107B4937F809 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DBA107B4937F809)
	 */
	setCoverClipsetOverride(ped: Handle, p1: string): void;

	/**
	 * Native: PED::SET_PED_COWER_HASH
	 *
	 * Hash: 0xA549131166868ED3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA549131166868ED3)
	 */
	setCowerHash(ped: Handle, p1: string): void;

	/**
	 * Native: PED::SET_CREATE_RANDOM_COPS
	 *
	 * Hash: 0x102E68B2024D536D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x102E68B2024D536D)
	 */
	setCreateRandomCops(toggle: boolean): void;

	/**
	 * Native: PED::SET_CREATE_RANDOM_COPS_NOT_ON_SCENARIOS
	 *
	 * Hash: 0x8A4986851C4EF6E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A4986851C4EF6E7)
	 */
	setCreateRandomCopsNotOnScenarios(toggle: boolean): void;

	/**
	 * Native: PED::SET_CREATE_RANDOM_COPS_ON_SCENARIOS
	 *
	 * Hash: 0x444CB7D7DBE6973D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x444CB7D7DBE6973D)
	 */
	setCreateRandomCopsOnScenarios(toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_DEFAULT_COMPONENT_VARIATION
	 *
	 * Hash: 0x45EEE61580806D63 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45EEE61580806D63)
	 */
	setDefaultComponentVariation(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_DEFENSIVE_AREA_ATTACHED_TO_PED
	 *
	 * Hash: 0x4EF47FE21698A8B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EF47FE21698A8B6)
	 */
	setDefensiveAreaAttachedToPed(
		ped: Handle,
		attachPed: Handle,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: boolean,
		p10: boolean
	): void;

	/**
	 * Native: PED::SET_PED_DEFENSIVE_AREA_DIRECTION
	 *
	 * Hash: 0x413C6C763A4AFFAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x413C6C763A4AFFAD)
	 */
	setDefensiveAreaDirection(ped: Handle, p1: number, p2: number, p3: number, p4: boolean): void;

	/**
	 * Native: PED::SET_PED_DEFENSIVE_SPHERE_ATTACHED_TO_PED
	 *
	 * Hash: 0xF9B8F91AAD3B953E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9B8F91AAD3B953E)
	 */
	setDefensiveSphereAttachedToPed(
		ped: Handle,
		target: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		radius: number,
		p6: boolean
	): void;

	/**
	 * Native: PED::SET_PED_DEFENSIVE_SPHERE_ATTACHED_TO_VEHICLE
	 *
	 * Hash: 0xE4723DB6E736CCFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4723DB6E736CCFF)
	 */
	setDefensiveSphereAttachedToVehicle(
		ped: Handle,
		target: Handle,
		xOffset: number,
		yOffset: number,
		zOffset: number,
		radius: number,
		p6: boolean
	): void;

	/**
	 * Native: PED::SET_PED_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x95E3D6257B166CF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95E3D6257B166CF2)
	 */
	setDensityMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: PED::SET_PED_DESIRED_HEADING
	 *
	 * Hash: 0xAA5A7ECE2AA8FE70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA5A7ECE2AA8FE70)
	 */
	setDesiredHeading(ped: Handle, heading: number): void;

	/**
	 * Native: PED::SET_PED_DIES_IN_SINKING_VEHICLE
	 *
	 * Hash: 0xD718A22995E2B4BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD718A22995E2B4BC)
	 */
	setDiesInSinkingVehicle(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_DIES_INSTANTLY_IN_WATER
	 *
	 * Hash: 0xEEB64139BA29A7CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEB64139BA29A7CF)
	 */
	setDiesInstantlyInWater(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_DIES_IN_VEHICLE
	 *
	 * Hash: 0x2A30922C90C9B42C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A30922C90C9B42C)
	 */
	setDiesInVehicle(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_DIES_IN_WATER
	 *
	 * Hash: 0x56CEF0AC79073BDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56CEF0AC79073BDE)
	 */
	setDiesInWater(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_DIES_WHEN_INJURED
	 *
	 * Hash: 0x5BA7919BED300023 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BA7919BED300023)
	 */
	setDiesWhenInjured(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_SET_DISABLE_PED_FALL_DAMAGE
	 *
	 * Hash: 0x711794453CFD692B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x711794453CFD692B)
	 */
	setDisableFallDamage(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_DRIVE_BY_CLIPSET_OVERRIDE
	 *
	 * Hash: 0xED34AB6C5CB36520 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED34AB6C5CB36520)
	 */
	setDriveByClipsetOverride(ped: Handle, clipset: string): void;

	/**
	 * Native: PED::SET_DRIVER_ABILITY
	 *
	 * Hash: 0xB195FFA8042FC5C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB195FFA8042FC5C3)
	 */
	setDriverAbility(driver: Handle, ability: number): void;

	/**
	 * Native: PED::SET_DRIVER_AGGRESSIVENESS
	 *
	 * Hash: 0xA731F608CA104E3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA731F608CA104E3C)
	 */
	setDriverAggressiveness(driver: Handle, aggressiveness: number): void;

	/**
	 * Native: PED::SET_DRIVER_RACING_MODIFIER
	 *
	 * Hash: 0xDED5AF5A0EA4B297 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDED5AF5A0EA4B297)
	 */
	setDriverRacingModifier(driver: Handle, modifier: number): void;

	/**
	 * Native: PED::SET_PED_DUCKING
	 *
	 * Hash: 0x030983CA930B692D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x030983CA930B692D)
	 */
	setDucking(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_SET_PED_EMISSIVE_INTENSITY
	 *
	 * Hash: 0x4E90D746056E273D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E90D746056E273D)
	 */
	setEmissiveIntensity(ped: Handle, intensity: number): void;

	/**
	 * Native: PED::SET_ENABLE_BOUND_ANKLES
	 *
	 * Hash: 0xC52E0F855C58FC2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC52E0F855C58FC2E)
	 */
	setEnableBoundAnkles(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_ENABLE_PED_ENVEFF_SCALE
	 *
	 * Hash: 0xD2C5AA0C0E8D0F1E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2C5AA0C0E8D0F1E)
	 */
	setEnableEnveffScale(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_ENABLE_HANDCUFFS
	 *
	 * Hash: 0xDF1AF8B5D56542FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF1AF8B5D56542FA)
	 */
	setEnableHandcuffs(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_ENABLE_SCUBA
	 *
	 * Hash: 0xF99F62004024D506 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF99F62004024D506)
	 */
	setEnableScuba(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::_SET_ENABLE_SCUBA_GEAR_LIGHT
	 *
	 * Hash: 0xEE2476B9EE4A094F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE2476B9EE4A094F)
	 */
	setEnableScubaGearLight(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_ENABLE_WEAPON_BLOCKING
	 *
	 * Hash: 0x97A790315D3831FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97A790315D3831FD)
	 */
	setEnableWeaponBlocking(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_ENVEFF_COLOR_MODULATOR
	 *
	 * Hash: 0xD69411AA0CEBF9E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD69411AA0CEBF9E9)
	 */
	setEnveffColorModulator(ped: Handle, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: PED::SET_PED_ENVEFF_SCALE
	 *
	 * Hash: 0xBF29516833893561 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF29516833893561)
	 */
	setEnveffScale(ped: Handle, value: number): void;

	/**
	 * Native: PED::_SET_PED_EYE_COLOR
	 *
	 * Hash: 0x50B56988B170AFDF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50B56988B170AFDF)
	 */
	setEyeColor(ped: Handle, index: integer): void;

	/**
	 * Native: PED::_SET_PED_FACE_FEATURE
	 *
	 * Hash: 0x71A5C1DBA060049E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71A5C1DBA060049E)
	 */
	setFaceFeature(ped: Handle, index: integer, scale: number): void;

	/**
	 * Native: PED::_SET_FACIAL_CLIPSET_OVERRIDE
	 *
	 * Hash: 0x5687C7F05B39E401 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5687C7F05B39E401)
	 */
	setFacialClipsetOverride(ped: Handle, animDict: string): void;

	/**
	 * Native: PED::SET_FACIAL_IDLE_ANIM_OVERRIDE
	 *
	 * Hash: 0xFFC24B988B938B38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFFC24B988B938B38)
	 */
	setFacialIdleAnimOverride(ped: Handle, animName: string, animDict: string): void;

	/**
	 * Native: PED::SET_PED_FIRING_PATTERN
	 *
	 * Hash: 0x9AC577F5A12AD8A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AC577F5A12AD8A9)
	 */
	setFiringPattern(ped: Handle, patternHash: integer): void;

	/**
	 * Native: PED::SET_PED_FLEE_ATTRIBUTES
	 *
	 * Hash: 0x70A2D1137C8ED7C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70A2D1137C8ED7C9)
	 */
	setFleeAttributes(ped: Handle, attributeFlags: integer, enable: boolean): void;

	/**
	 * Native: PED::SET_FORCE_FOOTSTEP_UPDATE
	 *
	 * Hash: 0x129466ED55140F8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x129466ED55140F8D)
	 */
	setForceFootstepUpdate(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_FORCE_STEP_TYPE
	 *
	 * Hash: 0xCB968B53FC7F916D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB968B53FC7F916D)
	 */
	setForceStepType(ped: Handle, p1: boolean, type: integer, p3: integer): void;

	/**
	 * Native: PED::SET_PED_GENERATES_DEAD_BODY_EVENTS
	 *
	 * Hash: 0x7FB17BA2E7DECA5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FB17BA2E7DECA5B)
	 */
	setGeneratesDeadBodyEvents(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_GESTURE_GROUP
	 *
	 * Hash: 0xDDF803377F94AAA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDF803377F94AAA8)
	 */
	setGestureGroup(ped: Handle, animGroupGesture: string): void;

	/**
	 * Native: PED::SET_PED_GET_OUT_UPSIDE_DOWN_VEHICLE
	 *
	 * Hash: 0xBC0ED94165A48BC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC0ED94165A48BC2)
	 */
	setGetOutUpsideDownVehicle(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_GRAVITY
	 *
	 * Hash: 0x9FF447B6B6AD960A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FF447B6B6AD960A)
	 */
	setGravity(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_GROUP_FORMATION
	 *
	 * Hash: 0xCE2F5FC3AF7E8C1E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE2F5FC3AF7E8C1E)
	 */
	setGroupFormation(groupId: integer, formationType: integer): void;

	/**
	 * Native: PED::SET_GROUP_FORMATION_SPACING
	 *
	 * Hash: 0x1D9D45004C28C916 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D9D45004C28C916)
	 */
	setGroupFormationSpacing(groupId: integer, p1: number, p2: number, p3: number): void;

	/**
	 * Native: PED::SET_PED_GROUP_MEMBER_PASSENGER_INDEX
	 *
	 * Hash: 0x0BDDB8D9EC6BCF3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BDDB8D9EC6BCF3C)
	 */
	setGroupMemberPassengerIndex(ped: Handle, index: integer): void;

	/**
	 * Native: PED::SET_GROUP_SEPARATION_RANGE
	 *
	 * Hash: 0x4102C7858CFEE4E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4102C7858CFEE4E4)
	 */
	setGroupSeparationRange(groupHandle: integer, separationRange: number): void;

	/**
	 * Native: PED::_SET_PED_HAIR_COLOR
	 *
	 * Hash: 0x4CFFC65454C93A49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CFFC65454C93A49)
	 */
	setHairColor(ped: Handle, colorID: integer, highlightColorID: integer): void;

	/**
	 * Native: PED::SET_PED_HEAD_BLEND_DATA
	 *
	 * Hash: 0x9414E18B9434C2FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9414E18B9434C2FE)
	 */
	setHeadBlendData(
		ped: Handle,
		shapeFirstID: integer,
		shapeSecondID: integer,
		shapeThirdID: integer,
		skinFirstID: integer,
		skinSecondID: integer,
		skinThirdID: integer,
		shapeMix: number,
		skinMix: number,
		thirdMix: number,
		isParent: boolean
	): void;

	/**
	 * Native: PED::SET_HEAD_BLEND_PALETTE_COLOR
	 *
	 * Hash: 0xCC9682B8951C5229 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC9682B8951C5229)
	 */
	setHeadBlendPaletteColor(ped: Handle, r: integer, g: integer, b: integer, id: integer): void;

	/**
	 * Native: PED::SET_PED_HEAD_OVERLAY
	 *
	 * Hash: 0x48F44967FA05CC1E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48F44967FA05CC1E)
	 */
	setHeadOverlay(ped: Handle, overlayID: integer, index: integer, opacity: number): void;

	/**
	 * Native: PED::_SET_PED_HEAD_OVERLAY_COLOR
	 *
	 * Hash: 0x497BF74A7B9CB952 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x497BF74A7B9CB952)
	 */
	setHeadOverlayColor(
		ped: Handle,
		overlayID: integer,
		colorType: integer,
		colorID: integer,
		secondColorID: integer
	): void;

	/**
	 * Native: PED::SET_PED_HEARING_RANGE
	 *
	 * Hash: 0x33A8F7F7D5F7F33C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33A8F7F7D5F7F33C)
	 */
	setHearingRange(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_HEATSCALE_OVERRIDE
	 *
	 * Hash: 0xC1F6EBF9A3D55538 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1F6EBF9A3D55538)
	 */
	setHeatscaleOverride(ped: Handle, heatScale: number): void;

	/**
	 * Native: PED::SET_PED_HELMET
	 *
	 * Hash: 0x560A43136EB58105 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x560A43136EB58105)
	 */
	setHelmet(ped: Handle, canWearHelmet: boolean): void;

	/**
	 * Native: PED::SET_PED_HELMET_FLAG
	 *
	 * Hash: 0xC0E78D5C2CE3EB25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0E78D5C2CE3EB25)
	 */
	setHelmetFlag(ped: Handle, helmetFlag: integer): void;

	/**
	 * Native: PED::SET_PED_HELMET_PROP_INDEX
	 *
	 * Hash: 0x26D83693ED99291C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26D83693ED99291C)
	 */
	setHelmetPropIndex(ped: Handle, propIndex: integer, p2: boolean): void;

	/**
	 * Native: PED::SET_PED_HELMET_TEXTURE_INDEX
	 *
	 * Hash: 0xF1550C4BD22582E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1550C4BD22582E2)
	 */
	setHelmetTextureIndex(ped: Handle, textureIndex: integer): void;

	/**
	 * Native: PED::_SET_PED_HELMET_UNK
	 *
	 * Hash: 0x3F7325574E41B44D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F7325574E41B44D)
	 */
	setHelmetUnk(ped: Handle, p1: boolean, p2: integer, p3: integer): void;

	/**
	 * Native: PED::SET_PED_HIGHLY_PERCEPTIVE
	 *
	 * Hash: 0x52D59AB61DDC05DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52D59AB61DDC05DD)
	 */
	setHighlyPerceptive(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_ID_RANGE
	 *
	 * Hash: 0xF107E836A70DCE05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF107E836A70DCE05)
	 */
	setIdRange(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_IK_TARGET
	 *
	 * Hash: 0xC32779C16FCEECD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC32779C16FCEECD9)
	 */
	setIkTarget(
		ped: Handle,
		ikIndex: integer,
		entityLookAt: Handle,
		boneLookAt: integer,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		p7: integer,
		blendInDuration: integer,
		blendOutDuration: integer
	): void;

	/**
	 * Native: PED::SET_PED_INCREASED_AVOIDANCE_RADIUS
	 *
	 * Hash: 0x570389D1C3DE3C6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x570389D1C3DE3C6B)
	 */
	setIncreasedAvoidanceRadius(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_INTO_VEHICLE
	 *
	 * Hash: 0xF75B0D629E1C063D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF75B0D629E1C063D)
	 */
	setIntoVehicle(ped: Handle, vehicle: Handle, seatIndex: integer): void;

	/**
	 * Native: PED::SET_PED_IN_VEHICLE_CONTEXT
	 *
	 * Hash: 0x530071295899A8C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x530071295899A8C6)
	 */
	setInVehicleContext(ped: Handle, context: integer): void;

	/**
	 * Native: PED::SET_PED_KEEP_TASK
	 *
	 * Hash: 0x971D38760FBC02EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x971D38760FBC02EF)
	 */
	setKeepTask(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_LEG_IK_MODE
	 *
	 * Hash: 0xC396F5B86FF9FEBD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC396F5B86FF9FEBD)
	 */
	setLegIkMode(ped: Handle, mode: integer): void;

	/**
	 * Native: PED::SET_PED_LOD_MULTIPLIER
	 *
	 * Hash: 0xDC2C5C242AAC342B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC2C5C242AAC342B)
	 */
	setLodMultiplier(ped: Handle, multiplier: number): void;

	/**
	 * Native: PED::SET_PED_MAX_HEALTH
	 *
	 * Hash: 0xF5F6378C4F3419D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5F6378C4F3419D3)
	 */
	setMaxHealth(ped: Handle, value: integer): void;

	/**
	 * Native: PED::SET_PED_MAX_MOVE_BLEND_RATIO
	 *
	 * Hash: 0x433083750C5E064A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x433083750C5E064A)
	 */
	setMaxMoveBlendRatio(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_MAX_TIME_IN_WATER
	 *
	 * Hash: 0x43C851690662113D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43C851690662113D)
	 */
	setMaxTimeInWater(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_MAX_TIME_UNDERWATER
	 *
	 * Hash: 0x6BA428C528D9E522 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BA428C528D9E522)
	 */
	setMaxTimeUnderwater(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_MIN_GROUND_TIME_FOR_STUNGUN
	 *
	 * Hash: 0xFA0675AB151073FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA0675AB151073FA)
	 */
	setMinGroundTimeForStungun(ped: Handle, ms: integer): void;

	/**
	 * Native: PED::SET_PED_MIN_MOVE_BLEND_RATIO
	 *
	 * Hash: 0x01A898D26E2333DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01A898D26E2333DD)
	 */
	setMinMoveBlendRatio(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_MODEL_IS_SUPPRESSED
	 *
	 * Hash: 0xE163A4BCE4DE6F11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE163A4BCE4DE6F11)
	 */
	setModelIsSuppressed(modelHash: integer, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_MONEY
	 *
	 * Hash: 0xA9C8960E8684C1B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9C8960E8684C1B5)
	 */
	setMoney(ped: Handle, amount: integer): void;

	/**
	 * Native: PED::SET_PED_MOTION_BLUR
	 *
	 * Hash: 0x0A986918B102B448 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A986918B102B448)
	 */
	setMotionBlur(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_MOVE_ANIMS_BLEND_OUT
	 *
	 * Hash: 0x9E8C908F41584ECD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E8C908F41584ECD)
	 */
	setMoveAnimsBlendOut(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_MOVEMENT_CLIPSET
	 *
	 * Hash: 0xAF8A94EDE7712BEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF8A94EDE7712BEF)
	 */
	setMovementClipset(ped: Handle, clipSet: string, transitionSpeed: number): void;

	/**
	 * Native: PED::SET_MOVEMENT_MODE_OVERRIDE
	 *
	 * Hash: 0x781DE8FA214E87D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x781DE8FA214E87D2)
	 */
	setMovementModeOverride(ped: Handle, name: string): void;

	/**
	 * Native: PED::SET_PED_MOVE_RATE_OVERRIDE
	 *
	 * Hash: 0x085BF80FA50A39D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x085BF80FA50A39D1)
	 */
	setMoveRateOverride(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_NAME_DEBUG
	 *
	 * Hash: 0x98EFA132A4117BE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98EFA132A4117BE1)
	 */
	setNameDebug(ped: Handle, name: string): void;

	/**
	 * Native: PED::SET_PED_NEVER_LEAVES_GROUP
	 *
	 * Hash: 0x3DBFC55D5C9BB447 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DBFC55D5C9BB447)
	 */
	setNeverLeavesGroup(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_NON_CREATION_AREA
	 *
	 * Hash: 0xEE01041D559983EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE01041D559983EA)
	 */
	setNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

	/**
	 * Native: PED::SET_PED_PANIC_EXIT_SCENARIO
	 *
	 * Hash: 0xFE07FF6495D52E2A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE07FF6495D52E2A)
	 */
	setPanicExitScenario(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: PED::SET_PED_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0x333FC8DB079B7186 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x333FC8DB079B7186)
	 */
	setParachuteTintIndex(ped: Handle, tintIndex: integer): void;

	/**
	 * Native: PED::SET_PED_PINNED_DOWN
	 *
	 * Hash: 0xAAD6D1ACF08F4612 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAD6D1ACF08F4612)
	 */
	setPinnedDown(ped: Handle, pinned: boolean, i: integer): integer;

	/**
	 * Native: PED::SET_PED_PLAYS_HEAD_ON_HORN_ANIM_WHEN_DIES_IN_VEHICLE
	 *
	 * Hash: 0x94D94BF1A75AED3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94D94BF1A75AED3D)
	 */
	setPlaysHeadOnHornAnimWhenDiesInVehicle(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_POP_CONTROL_SPHERE_THIS_FRAME
	 *
	 * Hash: 0xD8C3BE3EE94CAF2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8C3BE3EE94CAF2D)
	 */
	setPopControlSphereThisFrame(x: number, y: number, z: number, min: number, max: number): void;

	/**
	 * Native: PED::SET_PED_PREFERRED_COVER_SET
	 *
	 * Hash: 0x8421EB4DA7E391B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8421EB4DA7E391B9)
	 */
	setPreferredCoverSet(ped: Handle, itemSet: integer): void;

	/**
	 * Native: PED::SET_PED_PRELOAD_PROP_DATA
	 *
	 * Hash: 0x2B16A3BFF1FBCE49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B16A3BFF1FBCE49)
	 */
	setPreloadPropData(ped: Handle, componentId: integer, drawableId: integer, TextureId: integer): boolean;

	/**
	 * Native: PED::SET_PED_PRELOAD_VARIATION_DATA
	 *
	 * Hash: 0x39D55A620FCB6A3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39D55A620FCB6A3A)
	 */
	setPreloadVariationData(ped: Handle, slot: integer, drawableId: integer, textureId: integer): integer;

	/**
	 * Native: PED::SET_PED_PRIMARY_LOOKAT
	 *
	 * Hash: 0xCD17B554996A8D9E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD17B554996A8D9E)
	 */
	setPrimaryLookat(ped: Handle, lookAt: Handle): void;

	/**
	 * Native: PED::SET_PED_PROP_INDEX
	 *
	 * Hash: 0x93376B65A266EB5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93376B65A266EB5F)
	 */
	setPropIndex(ped: Handle, componentId: integer, drawableId: integer, TextureId: integer, attach: boolean): void;

	/**
	 * Native: PED::SET_RAGDOLL_BLOCKING_FLAGS
	 *
	 * Hash: 0x26695EC767728D84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26695EC767728D84)
	 */
	setRagdollBlockingFlags(ped: Handle, flags: integer): void;

	/**
	 * Native: PED::SET_PED_RAGDOLL_FORCE_FALL
	 *
	 * Hash: 0x01F6594B923B9251 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01F6594B923B9251)
	 */
	setRagdollForceFall(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_RAGDOLL_ON_COLLISION
	 *
	 * Hash: 0xF0A4F1BBF4FA7497 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0A4F1BBF4FA7497)
	 */
	setRagdollOnCollision(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_RANDOM_COMPONENT_VARIATION
	 *
	 * Hash: 0xC8A9481A01E63C28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8A9481A01E63C28)
	 */
	setRandomComponentVariation(ped: Handle, p1: integer): void;

	/**
	 * Native: PED::SET_PED_RANDOM_PROPS
	 *
	 * Hash: 0xC44AA05345C992C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC44AA05345C992C6)
	 */
	setRandomProps(ped: Handle): void;

	/**
	 * Native: PED::SET_RELATIONSHIP_BETWEEN_GROUPS
	 *
	 * Hash: 0xBF25EB89375A37AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF25EB89375A37AD)
	 */
	setRelationshipBetweenGroups(relationship: integer, group1: integer, group2: integer): void;

	/**
	 * Native: PED::SET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH
	 *
	 * Hash: 0xADB3F206518799E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADB3F206518799E8)
	 */
	setRelationshipGroupDefaultHash(ped: Handle, hash: integer): void;

	/**
	 * Native: PED::_SET_RELATIONSHIP_GROUP_DONT_AFFECT_WANTED_LEVEL
	 *
	 * Hash: 0x5615E0C5EB2BC6E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5615E0C5EB2BC6E2)
	 */
	setRelationshipGroupDontAffectWantedLevel(group: integer, p1: boolean): void;

	/**
	 * Native: PED::SET_PED_RELATIONSHIP_GROUP_HASH
	 *
	 * Hash: 0xC80A74AC829DDD92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC80A74AC829DDD92)
	 */
	setRelationshipGroupHash(ped: Handle, hash: integer): void;

	/**
	 * Native: PED::SET_PED_RESERVE_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0xE88DA0751C22A2AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE88DA0751C22A2AD)
	 */
	setReserveParachuteTintIndex(ped: Handle, p1: integer): void;

	/**
	 * Native: PED::SET_PED_RESET_FLAG
	 *
	 * Hash: 0xC1E8A365BF3B29F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1E8A365BF3B29F2)
	 */
	setResetFlag(ped: Handle, flagId: integer, doReset: boolean): void;

	/**
	 * Native: PED::SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x7A556143A1C03898 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A556143A1C03898)
	 */
	setScenarioDensityMultiplierThisFrame(p0: number, p1: number): void;

	/**
	 * Native: PED::SET_SCRIPTED_ANIM_SEAT_OFFSET
	 *
	 * Hash: 0x5917BBA32D06C230 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5917BBA32D06C230)
	 */
	setScriptedAnimSeatOffset(ped: Handle, p1: number): void;

	/**
	 * Native: PED::SET_SCRIPTED_CONVERSION_COORD_THIS_FRAME
	 *
	 * Hash: 0x5086C7843552CF85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5086C7843552CF85)
	 */
	setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;

	/**
	 * Native: PED::_SET_PED_SCUBA_GEAR_VARIATION
	 *
	 * Hash: 0x36C6984C3ED0C911 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36C6984C3ED0C911)
	 */
	setScubaGearVariation(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_SEEING_RANGE
	 *
	 * Hash: 0xF29CF591C4BF6CEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF29CF591C4BF6CEE)
	 */
	setSeeingRange(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_SHOOT_RATE
	 *
	 * Hash: 0x614DA022990752DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x614DA022990752DC)
	 */
	setShootRate(ped: Handle, shootRate: integer): void;

	/**
	 * Native: PED::SET_PED_SHOOTS_AT_COORD
	 *
	 * Hash: 0x96A05E4FB321B1BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96A05E4FB321B1BA)
	 */
	setShootsAtCoord(ped: Handle, x: number, y: number, z: number, toggle: boolean): void;

	/**
	 * Native: PED::_SET_PED_SHOULD_PLAY_DIRECTED_SCENARIO_EXIT
	 *
	 * Hash: 0xEC6935EBE0847B90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC6935EBE0847B90)
	 */
	setShouldPlayDirectedScenarioExit(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: PED::SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT
	 *
	 * Hash: 0xEEED8FAFEC331A70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEED8FAFEC331A70)
	 */
	setShouldPlayFleeScenarioExit(ped: Handle, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: PED::SET_PED_SHOULD_PLAY_IMMEDIATE_SCENARIO_EXIT
	 *
	 * Hash: 0xF1C03A5352243A30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1C03A5352243A30)
	 */
	setShouldPlayImmediateScenarioExit(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_SHOULD_PLAY_NORMAL_SCENARIO_EXIT
	 *
	 * Hash: 0xA3A9299C4F2ADB98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3A9299C4F2ADB98)
	 */
	setShouldPlayNormalScenarioExit(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_SPHERE_DEFENSIVE_AREA
	 *
	 * Hash: 0x9D3151A373974804 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D3151A373974804)
	 */
	setSphereDefensiveArea(ped: Handle, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;

	/**
	 * Native: PED::SET_PED_STAY_IN_VEHICLE_WHEN_JACKED
	 *
	 * Hash: 0xEDF4079F9D54C9A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDF4079F9D54C9A1)
	 */
	setStayInVehicleWhenJacked(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_STEALTH_MOVEMENT
	 *
	 * Hash: 0x88CBB5CEB96B7BD2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88CBB5CEB96B7BD2)
	 */
	setStealthMovement(ped: Handle, p1: boolean, action: string): void;

	/**
	 * Native: PED::SET_PED_STEERS_AROUND_OBJECTS
	 *
	 * Hash: 0x1509C089ADC208BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1509C089ADC208BF)
	 */
	setSteersAroundObjects(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_STEERS_AROUND_PEDS
	 *
	 * Hash: 0x46F2193B3AD1D891 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46F2193B3AD1D891)
	 */
	setSteersAroundPeds(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_STEERS_AROUND_VEHICLES
	 *
	 * Hash: 0xEB6FB9D48DDE23EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB6FB9D48DDE23EC)
	 */
	setSteersAroundVehicles(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_STRAFE_CLIPSET
	 *
	 * Hash: 0x29A28F3F8CF6D854 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29A28F3F8CF6D854)
	 */
	setStrafeClipset(ped: Handle, clipSet: string): void;

	/**
	 * Native: PED::SET_PED_SUFFERS_CRITICAL_HITS
	 *
	 * Hash: 0xEBD76F2359F190AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBD76F2359F190AC)
	 */
	setSuffersCriticalHits(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_SWEAT
	 *
	 * Hash: 0x27B0405F59637D1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27B0405F59637D1F)
	 */
	setSweat(ped: Handle, sweat: number): void;

	/**
	 * Native: PED::SET_SYNCHRONIZED_SCENE_HOLD_LAST_FRAME
	 *
	 * Hash: 0x394B9CD12435C981 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x394B9CD12435C981)
	 */
	setSynchronizedSceneHoldLastFrame(sceneID: integer, toggle: boolean): void;

	/**
	 * Native: PED::SET_SYNCHRONIZED_SCENE_LOOPED
	 *
	 * Hash: 0xD9A897A4C6C2974F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9A897A4C6C2974F)
	 */
	setSynchronizedSceneLoo(sceneID: integer, toggle: boolean): void;

	/**
	 * Native: PED::SET_SYNCHRONIZED_SCENE_ORIGIN
	 *
	 * Hash: 0x6ACF6B7225801CD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6ACF6B7225801CD7)
	 */
	setSynchronizedSceneOrigin(
		sceneID: integer,
		x: number,
		y: number,
		z: number,
		roll: number,
		pitch: number,
		yaw: number,
		p7: boolean
	): void;

	/**
	 * Native: PED::SET_SYNCHRONIZED_SCENE_PHASE
	 *
	 * Hash: 0x734292F4F0ABF6D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x734292F4F0ABF6D0)
	 */
	setSynchronizedScenePhase(sceneID: integer, phase: number): void;

	/**
	 * Native: PED::SET_SYNCHRONIZED_SCENE_RATE
	 *
	 * Hash: 0xB6C49F8A5E295A5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6C49F8A5E295A5D)
	 */
	setSynchronizedSceneRate(sceneID: integer, rate: number): void;

	/**
	 * Native: PED::SET_PED_TARGET_LOSS_RESPONSE
	 *
	 * Hash: 0x0703B9079823DA4A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0703B9079823DA4A)
	 */
	setTargetLossResponse(ped: Handle, responseType: integer): void;

	/**
	 * Native: PED::SET_PED_TO_INFORM_RESPECTED_FRIENDS
	 *
	 * Hash: 0x112942C6E708F70B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x112942C6E708F70B)
	 */
	setToInformRespectedFriends(ped: Handle, radius: number, maxFriends: integer): void;

	/**
	 * Native: PED::SET_PED_TO_LOAD_COVER
	 *
	 * Hash: 0x332B562EEDA62399 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x332B562EEDA62399)
	 */
	setToLoadCover(ped: Handle, toggle: boolean): void;

	/**
	 * Native: PED::SET_PED_TO_RAGDOLL
	 *
	 * Hash: 0xAE99FB955581844A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE99FB955581844A)
	 */
	setToRagdoll(
		ped: Handle,
		time1: integer,
		time2: integer,
		ragdollType: integer,
		p4: boolean,
		p5: boolean,
		p6: boolean
	): boolean;

	/**
	 * Native: PED::SET_PED_TO_RAGDOLL_WITH_FALL
	 *
	 * Hash: 0xD76632D99E4966C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD76632D99E4966C8)
	 */
	setToRagdollWithFall(
		ped: Handle,
		time: integer,
		p2: integer,
		ragdollType: integer,
		x: number,
		y: number,
		z: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): boolean;

	/**
	 * Native: PED::SET_PED_USING_ACTION_MODE
	 *
	 * Hash: 0xD75ACCF5E0FB5367 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD75ACCF5E0FB5367)
	 */
	setUsingActionMode(ped: Handle, p1: boolean, p2: integer, action: string): void;

	/**
	 * Native: PED::SET_PED_VEHICLE_FORCED_SEAT_USAGE
	 *
	 * Hash: 0x952F06BEECD775CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x952F06BEECD775CC)
	 */
	setVehicleForcedSeatUsage(ped: Handle, vehicle: Handle, seatIndex: integer, flags: integer, p4: integer): void;

	/**
	 * Native: PED::SET_PED_VISUAL_FIELD_CENTER_ANGLE
	 *
	 * Hash: 0x3B6405E8AB34A907 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B6405E8AB34A907)
	 */
	setVisualFieldCenterAngle(ped: Handle, angle: number): void;

	/**
	 * Native: PED::SET_PED_VISUAL_FIELD_MAX_ANGLE
	 *
	 * Hash: 0x70793BDCA1E854D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70793BDCA1E854D4)
	 */
	setVisualFieldMaxAngle(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_VISUAL_FIELD_MAX_ELEVATION_ANGLE
	 *
	 * Hash: 0x78D0B67629D75856 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78D0B67629D75856)
	 */
	setVisualFieldMaxElevationAngle(ped: Handle, angle: number): void;

	/**
	 * Native: PED::SET_PED_VISUAL_FIELD_MIN_ANGLE
	 *
	 * Hash: 0x2DB492222FB21E26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DB492222FB21E26)
	 */
	setVisualFieldMinAngle(ped: Handle, value: number): void;

	/**
	 * Native: PED::SET_PED_VISUAL_FIELD_MIN_ELEVATION_ANGLE
	 *
	 * Hash: 0x7A276EB2C224D70F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A276EB2C224D70F)
	 */
	setVisualFieldMinElevationAngle(ped: Handle, angle: number): void;

	/**
	 * Native: PED::SET_PED_VISUAL_FIELD_PERIPHERAL_RANGE
	 *
	 * Hash: 0x9C74B0BC831B753A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C74B0BC831B753A)
	 */
	setVisualFieldPeripheralRange(ped: Handle, range: number): void;

	/**
	 * Native: PED::SET_PED_WEAPON_MOVEMENT_CLIPSET
	 *
	 * Hash: 0x2622E35B77D3ACA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2622E35B77D3ACA2)
	 */
	setWeaponMovementClipset(ped: Handle, clipSet: string): void;

	/**
	 * Native: PED::SET_PED_WETNESS_ENABLED_THIS_FRAME
	 *
	 * Hash: 0xB5485E4907B53019 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5485E4907B53019)
	 */
	setWetnessEnabledThisFrame(ped: Handle): void;

	/**
	 * Native: PED::SET_PED_WETNESS_HEIGHT
	 *
	 * Hash: 0x44CB6447D2571AA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44CB6447D2571AA0)
	 */
	setWetnessHeight(ped: Handle, height: number): void;

	/**
	 * Native: PED::SPAWNPOINTS_CANCEL_SEARCH
	 *
	 * Hash: 0xFEE4A5459472A9F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFEE4A5459472A9F8)
	 */
	spawnpointsCancelSearch(): void;

	/**
	 * Native: PED::SPAWNPOINTS_GET_NUM_SEARCH_RESULTS
	 *
	 * Hash: 0xA635C11B8C44AFC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA635C11B8C44AFC2)
	 */
	spawnpointsGetNumSearchResults(): integer;

	/**
	 * Native: PED::SPAWNPOINTS_GET_SEARCH_RESULT
	 *
	 * Hash: 0x280C7E3AC7F56E90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x280C7E3AC7F56E90)
	 */
	spawnpointsGetSearchResult(randomInt: integer): SpawnpointsGetSearchResultResult;

	/**
	 * Native: PED::SPAWNPOINTS_GET_SEARCH_RESULT_FLAGS
	 *
	 * Hash: 0xB782F8238512BAD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB782F8238512BAD5)
	 */
	spawnpointsGetSearchResultFlags(p0: integer): integer;

	/**
	 * Native: PED::SPAWNPOINTS_IS_SEARCH_ACTIVE
	 *
	 * Hash: 0x3C67506996001F5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C67506996001F5E)
	 */
	spawnpointsIsSearchActive(): boolean;

	/**
	 * Native: PED::SPAWNPOINTS_IS_SEARCH_COMPLETE
	 *
	 * Hash: 0xA586FBEB32A53DBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA586FBEB32A53DBB)
	 */
	spawnpointsIsSearchComplete(): boolean;

	/**
	 * Native: PED::SPAWNPOINTS_IS_SEARCH_FAILED
	 *
	 * Hash: 0xF445DE8DA80A1792 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF445DE8DA80A1792)
	 */
	spawnpointsIsSearchFailed(): boolean;

	/**
	 * Native: PED::SPAWNPOINTS_START_SEARCH
	 *
	 * Hash: 0x2DF9038C90AD5264 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DF9038C90AD5264)
	 */
	spawnpointsStartSearch(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		interiorFlags: integer,
		scale: number,
		duration: integer
	): void;

	/**
	 * Native: PED::SPAWNPOINTS_START_SEARCH_IN_ANGLED_AREA
	 *
	 * Hash: 0xB2AFF10216DEFA2F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2AFF10216DEFA2F)
	 */
	spawnpointsStartSearchInAngledArea(
		x: number,
		y: number,
		z: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		interiorFlags: integer,
		scale: number,
		duration: integer
	): void;

	/**
	 * Native: PED::STOP_ANY_PED_MODEL_BEING_SUPPRESSED
	 *
	 * Hash: 0xB47BD05FA66B40CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB47BD05FA66B40CF)
	 */
	stopAnyModelBeingSuppressed(): void;

	/**
	 * Native: PED::STOP_PED_WEAPON_FIRING_WHEN_DROPPED
	 *
	 * Hash: 0xC158D28142A34608 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC158D28142A34608)
	 */
	stopWeaponFiringWhenDropped(ped: Handle): void;

	/**
	 * Native: PED::UNREGISTER_PEDHEADSHOT
	 *
	 * Hash: 0x96B1361D9B24C2FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96B1361D9B24C2FF)
	 */
	unregisterHeadshot(id: integer): void;

	/**
	 * Native: PED::UPDATE_PED_HEAD_BLEND_DATA
	 *
	 * Hash: 0x723538F61C647C5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x723538F61C647C5A)
	 */
	updateHeadBlendData(ped: Handle, shapeMix: number, skinMix: number, thirdMix: number): void;

	/**
	 * Native: PED::WAS_PED_KILLED_BY_STEALTH
	 *
	 * Hash: 0xF9800AA1A771B000 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9800AA1A771B000)
	 */
	wasKilledByStealth(ped: Handle): boolean;

	/**
	 * Native: PED::WAS_PED_KILLED_BY_TAKEDOWN
	 *
	 * Hash: 0x7F08E26039C7347C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F08E26039C7347C)
	 */
	wasKilledByTakedown(ped: Handle): boolean;

	/**
	 * Native: PED::WAS_PED_KNOCKED_OUT
	 *
	 * Hash: 0x61767F73EACEED21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61767F73EACEED21)
	 */
	wasKnockedOut(ped: Handle): boolean;

	/**
	 * Native: PED::WAS_PED_SKELETON_UPDATED
	 *
	 * Hash: 0x11B499C1E0FF8559 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11B499C1E0FF8559)
	 */
	wasSkeletonUpdated(ped: Handle): boolean;

	unk: GamePedUnk;
}

interface GamePedMp extends GamePed {}
