/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface TaskScriptedAnimationResult {
	p1: integer;
	p2: integer;
	p3: integer;
}

interface GetNavmeshRouteDistanceRemainingResult {
	distanceRemaining: number;
	isPathReady: boolean;
	result: integer;
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

interface GameTaskLegacy {
	/**
	 * Native: TASK::CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
	 *
	 * Hash: 0xC35B5CDB2824CF69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC35B5CDB2824CF69)
	 */
	clearDrivebyTaskUnderneathDrivingTask(ped: Handle): void;

	/**
	 * Native: TASK::CLEAR_PED_SECONDARY_TASK
	 *
	 * Hash: 0x176CECF6F920D707 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x176CECF6F920D707)
	 */
	clearPedSecondaryTask(ped: Handle): void;

	/**
	 * Native: TASK::CLEAR_PED_TASKS_IMMEDIATELY
	 *
	 * Hash: 0xAAA34F8A7CB32098 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAA34F8A7CB32098)
	 */
	clearPedTasksImmediately(ped: Handle): void;

	/**
	 * Native: TASK::GET_IS_TASK_ACTIVE
	 *
	 * Hash: 0xB0760331C7AA4155 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0760331C7AA4155)
	 */
	getIsTaskActive(ped: Handle, taskIndex: integer): boolean;

	/**
	 * Native: TASK::GET_SCRIPT_TASK_STATUS
	 *
	 * Hash: 0x77F1BEB8863288D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77F1BEB8863288D5)
	 */
	getScriptTaskStatus(ped: Handle, taskHash: integer): integer;

	/**
	 * Native: TASK::IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
	 *
	 * Hash: 0x8785E6E40C7A8818 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8785E6E40C7A8818)
	 */
	isDrivebyTaskUnderneathDrivingTask(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK
	 *
	 * Hash: 0xA320EF046186FA3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA320EF046186FA3B)
	 */
	isMountedWeaponTaskUnderneathDrivingTask(ped: Handle): boolean;

	/**
	 * Native: TASK::PED_HAS_USE_SCENARIO_TASK
	 *
	 * Hash: 0x295E3CCEC879CCD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x295E3CCEC879CCD7)
	 */
	pedHasUseScenarioTask(ped: Handle): boolean;

	/**
	 * Native: TASK::SET_DRIVE_TASK_CRUISE_SPEED
	 *
	 * Hash: 0x5C9B84BD7D31D908 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C9B84BD7D31D908)
	 */
	setDriveTaskCruiseSpeed(driver: Handle, cruiseSpeed: number): void;

	/**
	 * Native: TASK::SET_DRIVE_TASK_DRIVING_STYLE
	 *
	 * Hash: 0xDACE1BE37D88AF67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDACE1BE37D88AF67)
	 */
	setDriveTaskDrivingStyle(ped: Handle, drivingStyle: integer): void;

	/**
	 * Native: TASK::SET_HIGH_FALL_TASK
	 *
	 * Hash: 0x8C825BDC7741D37C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C825BDC7741D37C)
	 */
	setHighFallTask(ped: Handle, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::SET_PARACHUTE_TASK_TARGET
	 *
	 * Hash: 0xC313379AF0FCEDA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC313379AF0FCEDA7)
	 */
	setParachuteTaskTarget(ped: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::SET_PARACHUTE_TASK_THRUST
	 *
	 * Hash: 0x0729BAC1B8C64317 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0729BAC1B8C64317)
	 */
	setParachuteTaskThrust(ped: Handle, thrust: number): void;

	/**
	 * Native: TASK::SET_TASK_VEHICLE_CHASE_BEHAVIOR_FLAG
	 *
	 * Hash: 0xCC665AAC360D31E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC665AAC360D31E7)
	 */
	setTaskVehicleChaseBehaviorFlag(ped: Handle, flag: integer, set: boolean): void;

	/**
	 * Native: TASK::SET_TASK_VEHICLE_CHASE_IDEAL_PURSUIT_DISTANCE
	 *
	 * Hash: 0x639B642FACBE4EDD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x639B642FACBE4EDD)
	 */
	setTaskVehicleChaseIdealPursuitDistance(ped: Handle, distance: number): void;

	/**
	 * Native: TASK::STOP_ANIM_TASK
	 *
	 * Hash: 0x97FF36A1D40EA00A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97FF36A1D40EA00A)
	 */
	stopAnimTask(ped: Handle, animDictionary: string, animationName: string, p3: number): void;

	/**
	 * Native: TASK::TASK_ACHIEVE_HEADING
	 *
	 * Hash: 0x93B93A37987F1F3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93B93A37987F1F3D)
	 */
	taskAchieveHeading(ped: Handle, heading: number, timeout: integer): void;

	/**
	 * Native: TASK::TASK_AIM_GUN_AT_COORD
	 *
	 * Hash: 0x6671F3EEC681BDA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6671F3EEC681BDA1)
	 */
	taskAimGunAtCoord(ped: Handle, x: number, y: number, z: number, time: integer, p5: boolean, p6: boolean): void;

	/**
	 * Native: TASK::TASK_AIM_GUN_SCRIPTED
	 *
	 * Hash: 0x7A192BE16D373D00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A192BE16D373D00)
	 */
	taskAimGunScripted(ped: Handle, scriptTask: integer, p2: boolean, p3: boolean): void;

	/**
	 * Native: TASK::TASK_BOAT_MISSION
	 *
	 * Hash: 0x15C86013127CE63F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15C86013127CE63F)
	 */
	taskBoatMission(
		pedDriver: Handle,
		boat: Handle,
		p2: integer,
		p3: integer,
		x: number,
		y: number,
		z: number,
		p7: integer,
		maxSpeed: number,
		drivingStyle: integer,
		p10: number,
		p11: integer
	): void;

	/**
	 * Native: TASK::TASK_CLEAR_LOOK_AT
	 *
	 * Hash: 0x0F804F1DB19B9689 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F804F1DB19B9689)
	 */
	taskClearLookAt(ped: Handle): void;

	/**
	 * Native: TASK::TASK_CLIMB
	 *
	 * Hash: 0x89D9FCC2435112F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89D9FCC2435112F1)
	 */
	taskClimb(ped: Handle, unused: boolean): void;

	/**
	 * Native: TASK::TASK_CLIMB_LADDER
	 *
	 * Hash: 0xB6C987F9285A3814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6C987F9285A3814)
	 */
	taskClimbLadder(ped: Handle, p1: integer): void;

	/**
	 * Native: TASK::TASK_COMBAT_HATED_TARGETS_IN_AREA
	 *
	 * Hash: 0x4CF5F55DAC3280A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CF5F55DAC3280A0)
	 */
	taskCombatHatedTargetsInArea(ped: Handle, x: number, y: number, z: number, radius: number, p5: integer): void;

	/**
	 * Native: TASK::TASK_COWER
	 *
	 * Hash: 0x3EB1FE9E8E908E15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EB1FE9E8E908E15)
	 */
	taskCower(ped: Handle, duration: integer): void;

	/**
	 * Native: TASK::TASK_DRIVE_BY
	 *
	 * Hash: 0x2F8AF0E82773A171 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F8AF0E82773A171)
	 */
	taskDriveBy(
		driverPed: Handle,
		targetPed: Handle,
		targetVehicle: Handle,
		targetX: number,
		targetY: number,
		targetZ: number,
		distanceToShoot: number,
		pedAccuracy: integer,
		p8: boolean,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_ENTER_VEHICLE
	 *
	 * Hash: 0xC20E50AA46D09CA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC20E50AA46D09CA8)
	 */
	taskEnterVehicle(
		ped: Handle,
		vehicle: Handle,
		timeout: integer,
		seat: integer,
		speed: number,
		flag: integer,
		p6: integer
	): void;

	/**
	 * Native: TASK::TASK_FOLLOW_NAV_MESH_TO_COORD
	 *
	 * Hash: 0x15D3A79D4E44B913 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15D3A79D4E44B913)
	 */
	taskFollowNavMeshToCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: integer,
		stoppingRange: number,
		persistFollowing: boolean,
		unk: number
	): void;

	/**
	 * Native: TASK::TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED
	 *
	 * Hash: 0x17F58B88D085DBAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17F58B88D085DBAC)
	 */
	taskFollowNavMeshToCoordAdvanced(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: integer,
		unkFloat: number,
		unkInt: integer,
		unkX: number,
		unkY: number,
		unkZ: number,
		unk_40000f: number
	): void;

	/**
	 * Native: TASK::TASK_FOLLOW_POINT_ROUTE
	 *
	 * Hash: 0x595583281858626E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x595583281858626E)
	 */
	taskFollowPointRoute(ped: Handle, speed: number, unknown: integer): void;

	/**
	 * Native: TASK::TASK_FORCE_MOTION_STATE
	 *
	 * Hash: 0x4F056E1AFFEF17AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F056E1AFFEF17AB)
	 */
	taskForceMotionState(ped: Handle, state: integer, p2: boolean): void;

	/**
	 * Native: TASK::TASK_GET_OFF_BOAT
	 *
	 * Hash: 0x9C00E77AF14B2DFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C00E77AF14B2DFF)
	 */
	taskGetOffBoat(ped: Handle, boat: Handle): void;

	/**
	 * Native: TASK::TASK_GO_STRAIGHT_TO_COORD
	 *
	 * Hash: 0xD76B57B44F1E6F8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD76B57B44F1E6F8B)
	 */
	taskGoStraightToCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: integer,
		targetHeading: number,
		distanceToSlide: number
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD
	 *
	 * Hash: 0xA55547801EB331FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA55547801EB331FC)
	 */
	taskGoToCoordAndAimAtHatedEntitiesNearCoord(
		pedHandle: Handle,
		goToLocationX: number,
		goToLocationY: number,
		goToLocationZ: number,
		focusLocationX: number,
		focusLocationY: number,
		focusLocationZ: number,
		speed: number,
		shootAtEnemies: boolean,
		distanceToStopAt: number,
		noRoadsDistance: number,
		unkTrue: boolean,
		unkFlag: integer,
		aimingFlag: integer,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_ANY_MEANS
	 *
	 * Hash: 0x5BC448CB78FA3E88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BC448CB78FA3E88)
	 */
	taskGoToCoordAnyMeans(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: integer,
		p6: boolean,
		walkingStyle: integer,
		p8: number
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS
	 *
	 * p12 defaults to 0
	 *
	 * Hash: 0x1DD45F9ECFDB1BC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DD45F9ECFDB1BC9)
	 */
	taskGoToCoordAnyMeansExtraParams(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: integer,
		p6: boolean,
		walkingStyle: integer,
		p8: number,
		p9: integer,
		p10: integer,
		p11: integer,
		p12?: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED
	 *
	 * p13 defaults to 0
	 *
	 * Hash: 0xB8ECD61F531A7B02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8ECD61F531A7B02)
	 */
	taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: integer,
		p6: boolean,
		walkingStyle: integer,
		p8: number,
		p9: integer,
		p10: integer,
		p11: integer,
		p12: integer,
		p13?: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD
	 *
	 * Hash: 0x11315AB3385B8AC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11315AB3385B8AC0)
	 */
	taskGoToCoordWhileAimingAtCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		aimAtX: number,
		aimAtY: number,
		aimAtZ: number,
		moveSpeed: number,
		p8: boolean,
		p9: number,
		p10: number,
		p11: boolean,
		flags: integer,
		p13: boolean,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_GOTO_ENTITY_OFFSET
	 *
	 * Hash: 0xE39B4FF4FDEBDE27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE39B4FF4FDEBDE27)
	 */
	taskGotoEntityOffset(ped: Handle, p1: integer, p2: integer, x: number, y: number, z: number, duration: integer): void;

	/**
	 * Native: TASK::TASK_GUARD_CURRENT_POSITION
	 *
	 * Hash: 0x4A58A47A72E3FCB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A58A47A72E3FCB4)
	 */
	taskGuardCurrentPosition(p0: Handle, p1: number, p2: number, p3: boolean): void;

	/**
	 * Native: TASK::TASK_GUARD_SPHERE_DEFENSIVE_AREA
	 *
	 * Hash: 0xC946FE14BE0EB5E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC946FE14BE0EB5E2)
	 */
	taskGuardSphereDefensiveArea(
		p0: Handle,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: integer,
		p7: number,
		p8: number,
		p9: number,
		p10: number
	): void;

	/**
	 * Native: TASK::TASK_HANDS_UP
	 *
	 * Hash: 0xF2EAB31979A7F910 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2EAB31979A7F910)
	 */
	taskHandsUp(ped: Handle, duration: integer, facingPed: Handle, p3: integer, p4: boolean): void;

	/**
	 * Native: TASK::TASK_HELI_CHASE
	 *
	 * Hash: 0xAC83B1DB38D0ADA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC83B1DB38D0ADA0)
	 */
	taskHeliChase(pilot: Handle, entityToFollow: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_HELI_MISSION
	 *
	 * Hash: 0xDAD029E187A2BEB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAD029E187A2BEB4)
	 */
	taskHeliMission(
		pilot: Handle,
		aircraft: Handle,
		targetVehicle: Handle,
		targetPed: Handle,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: integer,
		maxSpeed: number,
		radius: number,
		targetHeading: number,
		maxHeight: integer,
		minHeight: integer,
		unk3: number,
		behaviorFlags: integer
	): void;

	/**
	 * Native: TASK::TASK_JUMP
	 *
	 * Hash: 0x0AE4086104E067B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AE4086104E067B1)
	 */
	taskJump(ped: Handle, unused: boolean, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::TASK_LEAVE_ANY_VEHICLE
	 *
	 * Hash: 0x504D54DF3F6F2247 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x504D54DF3F6F2247)
	 */
	taskLeaveAnyVehicle(ped: Handle, p1: integer, flags: integer): void;

	/**
	 * Native: TASK::TASK_LEAVE_VEHICLE
	 *
	 * Hash: 0xD3DBCE61A490BE02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3DBCE61A490BE02)
	 */
	taskLeaveVehicle(ped: Handle, vehicle: Handle, flags: integer): void;

	/**
	 * Native: TASK::TASK_MOVE_NETWORK_BY_NAME
	 *
	 * Hash: 0x2D537BA194896636 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D537BA194896636)
	 */
	taskMoveNetwork(ped: Handle, task: string, multiplier: number, p3: boolean, animDict: string, flags: integer): void;

	/**
	 * Native: TASK::TASK_MOVE_NETWORK_ADVANCED_BY_NAME
	 *
	 * Hash: 0xD5B35BEA41919ACB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5B35BEA41919ACB)
	 */
	taskMoveNetworkAdvanced(
		ped: Handle,
		p1: string,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: integer,
		p9: number,
		p10: boolean,
		animDict: string,
		flags: integer
	): void;

	/**
	 * Native: TASK::TASK_OPEN_VEHICLE_DOOR
	 *
	 * Hash: 0x965791A9A488A062 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x965791A9A488A062)
	 */
	taskOpenVehicleDoor(ped: Handle, vehicle: Handle, timeOut: integer, seat: integer, speed: number): void;

	/**
	 * Native: TASK::TASK_PARACHUTE
	 *
	 * p2 defaults to false
	 *
	 * Hash: 0xD2F1C53C97EE81AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2F1C53C97EE81AB)
	 */
	taskParachute(ped: Handle, p1: boolean, p2?: boolean): void;

	/**
	 * Native: TASK::TASK_PARACHUTE_TO_TARGET
	 *
	 * Hash: 0xB33E291AFA6BD03A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB33E291AFA6BD03A)
	 */
	taskParachuteToTarget(ped: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_PATROL
	 *
	 * Hash: 0xBDA5DF49D080FE4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDA5DF49D080FE4E)
	 */
	taskPatrol(ped: Handle, p1: string, p2: integer, p3: boolean, p4: boolean): void;

	/**
	 * Native: TASK::TASK_PAUSE
	 *
	 * Hash: 0xE73A266DB0CA9042 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE73A266DB0CA9042)
	 */
	taskPause(ped: Handle, ms: integer): void;

	/**
	 * Native: TASK::TASK_PERFORM_SEQUENCE
	 *
	 * Hash: 0x5ABA3986D90D8A3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5ABA3986D90D8A3B)
	 */
	taskPerformSequence(ped: Handle, taskSequenceId: integer): void;

	/**
	 * Native: TASK::TASK_PLANE_CHASE
	 *
	 * Hash: 0x2D2386F273FF7A25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D2386F273FF7A25)
	 */
	taskPlaneChase(pilot: Handle, entityToFollow: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_PLANE_LAND
	 *
	 * Hash: 0xBF19721FA34D32C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF19721FA34D32C0)
	 */
	taskPlaneLand(
		pilot: Handle,
		plane: Handle,
		runwayStartX: number,
		runwayStartY: number,
		runwayStartZ: number,
		runwayEndX: number,
		runwayEndY: number,
		runwayEndZ: number
	): void;

	/**
	 * Native: TASK::TASK_PLANE_MISSION
	 *
	 * p13 defaults to 0
	 *
	 * Hash: 0x23703CD154E83B88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23703CD154E83B88)
	 */
	taskPlaneMission(
		pilot: Handle,
		aircraft: Handle,
		targetVehicle: Handle,
		targetPed: Handle,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: integer,
		angularDrag: number,
		unk: number,
		targetHeading: number,
		maxZ: number,
		minZ: number,
		p13?: integer
	): void;

	/**
	 * Native: TASK::TASK_PLANT_BOMB
	 *
	 * Hash: 0x965FEC691D55E9BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x965FEC691D55E9BF)
	 */
	taskPlantBomb(ped: Handle, x: number, y: number, z: number, heading: number): void;

	/**
	 * Native: TASK::TASK_PLAY_ANIM
	 *
	 * Hash: 0xEA47FE3719165B94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA47FE3719165B94)
	 */
	taskPlayAnim(
		ped: Handle,
		animDictionary: string,
		animationName: string,
		blendInSpeed: number,
		blendOutSpeed: number,
		duration: integer,
		flag: integer,
		playbackRate: number,
		lockX: boolean,
		lockY: boolean,
		lockZ: boolean
	): void;

	/**
	 * Native: TASK::TASK_PLAY_ANIM_ADVANCED
	 *
	 * Hash: 0x83CDB10EA29B370B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83CDB10EA29B370B)
	 */
	taskPlayAnimAdvanced(
		ped: Handle,
		animDict: string,
		animName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		animEnterSpeed: number,
		animExitSpeed: number,
		duration: integer,
		flag: integer,
		animTime: number,
		p14: integer,
		p15: integer
	): void;

	/**
	 * Native: TASK::TASK_PLAY_PHONE_GESTURE_ANIMATION
	 *
	 * Hash: 0x8FBB6758B3B3E9EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FBB6758B3B3E9EC)
	 */
	taskPlayPhoneGestureAnimation(
		ped: Handle,
		animDict: string,
		animation: string,
		boneMaskType: string,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: TASK::TASK_RAPPEL_FROM_HELI
	 *
	 * Hash: 0x09693B0312F91649 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x09693B0312F91649)
	 */
	taskRappelFromHeli(ped: Handle, p1: number): void;

	/**
	 * Native: TASK::TASK_RELOAD_WEAPON
	 *
	 * Hash: 0x62D2916F56B9CD2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62D2916F56B9CD2D)
	 */
	taskReloadWeapon(ped: Handle, unused: boolean): void;

	/**
	 * Native: TASK::TASK_SCRIPTED_ANIMATION
	 *
	 * Hash: 0x126EF75F1E17ABE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x126EF75F1E17ABE5)
	 */
	taskScriptedAnimation(ped: Handle, p4: number, p5: number): TaskScriptedAnimationResult;

	/**
	 * Native: TASK::TASK_SEEK_COVER_TO_COORDS
	 *
	 * Hash: 0x39246A6958EF072C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39246A6958EF072C)
	 */
	taskSeekCoverToCoords(
		ped: Handle,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p7: integer,
		p8: boolean
	): void;

	/**
	 * Native: TASK::TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS
	 *
	 * Hash: 0x90D2156198831D69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90D2156198831D69)
	 */
	taskSetBlockingOfNonTemporaryEvents(ped: Handle, toggle: boolean): void;

	/**
	 * Native: TASK::TASK_SET_DECISION_MAKER
	 *
	 * Hash: 0xEB8517DDA73720DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB8517DDA73720DA)
	 */
	taskSetDecisionMaker(ped: Handle, p1: integer): void;

	/**
	 * Native: TASK::TASK_SHOCKING_EVENT_REACT
	 *
	 * Hash: 0x452419CBD838065B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x452419CBD838065B)
	 */
	taskShockingEventReact(ped: Handle, eventHandle: integer): void;

	/**
	 * Native: TASK::TASK_SHOOT_AT_COORD
	 *
	 * Hash: 0x46A6CC01E0826106 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46A6CC01E0826106)
	 */
	taskShootAtCoord(ped: Handle, x: number, y: number, z: number, duration: integer, firingPattern: integer): void;

	/**
	 * Native: TASK::TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x7AA80209BDA643EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AA80209BDA643EB)
	 */
	taskShuffleToNextVehicleSeat(ped: Handle, vehicle: Handle, p2?: integer): void;

	/**
	 * Native: TASK::TASK_SKY_DIVE
	 *
	 * p1 defaults fo false
	 *
	 * Hash: 0x601736CFE536B0A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x601736CFE536B0A0)
	 */
	taskSkyDive(ped: Handle, p1?: boolean): void;

	/**
	 * Native: TASK::TASK_SMART_FLEE_COORD
	 *
	 * Hash: 0x94587F17E9C365D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94587F17E9C365D5)
	 */
	taskSmartFleeCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		distance: number,
		time: integer,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: TASK::TASK_STAND_GUARD
	 *
	 * Hash: 0xAE032F8BBA959E90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE032F8BBA959E90)
	 */
	taskStandGuard(ped: Handle, x: number, y: number, z: number, heading: number, scenarioName: string): void;

	/**
	 * Native: TASK::TASK_STAND_STILL
	 *
	 * Hash: 0x919BE13EED931959 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x919BE13EED931959)
	 */
	taskStandStill(ped: Handle, time: integer): void;

	/**
	 * Native: TASK::TASK_START_SCENARIO_AT_POSITION
	 *
	 * Hash: 0xFA4EFC79F69D4F07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA4EFC79F69D4F07)
	 */
	taskStartScenarioAtPosition(
		ped: Handle,
		scenarioName: string,
		x: number,
		y: number,
		z: number,
		heading: number,
		duration: integer,
		sittingScenario: boolean,
		teleport: boolean
	): void;

	/**
	 * Native: TASK::TASK_START_SCENARIO_IN_PLACE
	 *
	 * Hash: 0x142A02425FF02BD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x142A02425FF02BD9)
	 */
	taskStartScenarioInPlace(ped: Handle, scenarioName: string, unkDelay: integer, playEnterAnim: boolean): void;

	/**
	 * Native: TASK::TASK_STAY_IN_COVER
	 *
	 * Hash: 0xE5DA8615A6180789 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5DA8615A6180789)
	 */
	taskStayInCover(ped: Handle): void;

	/**
	 * Native: TASK::TASK_STEALTH_KILL
	 *
	 * Hash: 0xAA5DC05579D60BD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA5DC05579D60BD9)
	 */
	taskStealthKill(killer: Handle, target: Handle, actionType: integer, p3: number, p4: integer): void;

	/**
	 * Native: TASK::TASK_STOP_PHONE_GESTURE_ANIMATION
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0x3FA00D4F4641BFAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FA00D4F4641BFAE)
	 */
	taskStopPhoneGestureAnimation(ped: Handle, p1?: integer): void;

	/**
	 * Native: TASK::TASK_SWAP_WEAPON
	 *
	 * Hash: 0xA21C51255B205245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA21C51255B205245)
	 */
	taskSwapWeapon(ped: Handle, p1: boolean): void;

	/**
	 * Native: TASK::TASK_SYNCHRONIZED_SCENE
	 *
	 * Hash: 0xEEA929141F699854 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEA929141F699854)
	 */
	taskSynchronizedScene(
		ped: Handle,
		scene: integer,
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: integer,
		flag: integer,
		playbackRate: number,
		p9: integer
	): void;

	/**
	 * Native: TASK::TASK_USE_MOBILE_PHONE
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0xBD2A8EC3AF4DE7DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD2A8EC3AF4DE7DB)
	 */
	taskUseMobilePhone(ped: Handle, p1: integer, p2?: integer): void;

	/**
	 * Native: TASK::TASK_USE_MOBILE_PHONE_TIMED
	 *
	 * Hash: 0x5EE02954A14C69DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EE02954A14C69DB)
	 */
	taskUseMobilePhoneTimed(ped: Handle, duration: integer): void;

	/**
	 * Native: TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD
	 *
	 * Hash: 0x277F471BA9DB000B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x277F471BA9DB000B)
	 */
	taskUseNearestScenarioToCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		distance: number,
		duration: integer
	): void;

	/**
	 * Native: TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP
	 *
	 * Hash: 0x58E2E0F23F6B76C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58E2E0F23F6B76C3)
	 */
	taskUseNearestScenarioToCoordWarp(ped: Handle, x: number, y: number, z: number, radius: number, p5: integer): void;

	/**
	 * Native: TASK::TASK_VEHICLE_CHASE
	 *
	 * Hash: 0x3C08A8E30363B353 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C08A8E30363B353)
	 */
	taskVehicleChase(driver: Handle, targetEnt: Handle): void;

	/**
	 * Native: TASK::TASK_VEHICLE_DRIVE_TO_COORD
	 *
	 * Hash: 0xE2A2AA2F659D77A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2A2AA2F659D77A7)
	 */
	taskVehicleDriveToCoord(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p6: integer,
		vehicleModel: integer,
		drivingMode: integer,
		stopRange: number,
		p10: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_DRIVE_TO_COORD_LONGRANGE
	 *
	 * Hash: 0x158BB33F920D360C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x158BB33F920D360C)
	 */
	taskVehicleDriveToCoordLongrange(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		driveMode: integer,
		stopRange: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_DRIVE_WANDER
	 *
	 * Hash: 0x480142959D337D00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x480142959D337D00)
	 */
	taskVehicleDriveWander(ped: Handle, vehicle: Handle, speed: number, drivingStyle: integer): void;

	/**
	 * Native: TASK::TASK_VEHICLE_ESCORT
	 *
	 * Hash: 0x0FA6E4B75F302400 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FA6E4B75F302400)
	 */
	taskVehicleEscort(
		ped: Handle,
		vehicle: Handle,
		targetVehicle: Handle,
		mode: integer,
		speed: number,
		drivingStyle: integer,
		minDistance: number,
		p7: integer,
		noRoadsDistance: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_FOLLOW
	 *
	 * Hash: 0xFC545A9F0626E3B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC545A9F0626E3B6)
	 */
	taskVehicleFollow(
		driver: Handle,
		vehicle: Handle,
		targetEntity: Handle,
		speed: number,
		drivingStyle: integer,
		minDistance: integer
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING
	 *
	 * Hash: 0x3123FAA6DB1CF7ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3123FAA6DB1CF7ED)
	 */
	taskVehicleFollowWaypointRecording(
		ped: Handle,
		vehicle: Handle,
		WPRecording: string,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: number,
		p8: boolean,
		p9: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_GOTO_NAVMESH
	 *
	 * Hash: 0x195AEEB13CEFE2EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x195AEEB13CEFE2EE)
	 */
	taskVehicleGotoNavmesh(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		behaviorFlag: integer,
		stoppingRange: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_HELI_PROTECT
	 *
	 * Hash: 0x1E09C32048FEFD1C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E09C32048FEFD1C)
	 */
	taskVehicleHeliProtect(
		pilot: Handle,
		vehicle: Handle,
		entityToFollow: Handle,
		targetSpeed: number,
		p4: integer,
		radius: number,
		altitude: integer,
		p7: integer
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_MISSION
	 *
	 * Hash: 0x659427E0EF36BCDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x659427E0EF36BCDE)
	 */
	taskVehicleMission(
		driver: Handle,
		vehicle: Handle,
		vehicleTarget: Handle,
		missionType: integer,
		p4: number,
		p5: integer,
		p6: number,
		p7: number,
		DriveAgainstTraffic: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_MISSION_COORS_TARGET
	 *
	 * Hash: 0xF0AF20AA7731F8C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0AF20AA7731F8C3)
	 */
	taskVehicleMissionCoorsTarget(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: number,
		p9: number,
		DriveAgainstTraffic: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_PARK
	 *
	 * Hash: 0x0F3E34E968EA374E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F3E34E968EA374E)
	 */
	taskVehiclePark(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		heading: number,
		mode: integer,
		radius: number,
		keepEngineOn: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_SHOOT_AT_PED
	 *
	 * Hash: 0x10AB107B887214D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10AB107B887214D8)
	 */
	taskVehicleShootAtPed(ped: Handle, target: Handle, p2: number): void;

	/**
	 * Native: TASK::TASK_VEHICLE_TEMP_ACTION
	 *
	 * Hash: 0xC429DCEEB339E129 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC429DCEEB339E129)
	 */
	taskVehicleTempAction(driver: Handle, vehicle: Handle, action: integer, time: integer): void;

	/**
	 * Native: TASK::TASK_WANDER_IN_AREA
	 *
	 * Hash: 0xE054346CA3A0F315 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE054346CA3A0F315)
	 */
	taskWanderInArea(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		radius: number,
		minimalLength: number,
		timeBetweenWalks: number
	): void;

	/**
	 * Native: TASK::TASK_WANDER_STANDARD
	 *
	 * Hash: 0xBB9CE077274F6A1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB9CE077274F6A1B)
	 */
	taskWanderStandard(ped: Handle, p1: number, p2: integer): void;

	/**
	 * Native: TASK::TASK_WRITHE
	 *
	 * p4 defaults to 0
	 * p5 defaults to 0
	 *
	 * Hash: 0xCDDC2B77CE54AC6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCDDC2B77CE54AC6E)
	 */
	taskWrithe(ped: Handle, target: Handle, time: integer, p3: integer, p4?: integer, p5?: integer): void;

	/**
	 * Native: TASK::UPDATE_TASK_AIM_GUN_SCRIPTED_TARGET
	 *
	 * Hash: 0x9724FB59A3E72AD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9724FB59A3E72AD0)
	 */
	updateTaskAimGunScriptedTarget(p0: Handle, p1: Handle, p2: number, p3: number, p4: number, p5: boolean): void;

	/**
	 * Native: TASK::UPDATE_TASK_HANDS_UP_DURATION
	 *
	 * Hash: 0xA98FCAFD7893C834 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA98FCAFD7893C834)
	 */
	updateTaskHandsUpDuration(ped: Handle, duration: integer): void;

	/**
	 * Native: TASK::UPDATE_TASK_SWEEP_AIM_ENTITY
	 *
	 * Hash: 0xE4973DBDBE6E44B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4973DBDBE6E44B3)
	 */
	updateTaskSweepAimEntity(ped: Handle, entity: Handle): void;
}

interface GameTaskUnk {
	/**
	 * Native: TASK::_0x0FFB3C758E8C07B9
	 *
	 * Hash: 0x0FFB3C758E8C07B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FFB3C758E8C07B9)
	 */
	_0x0FFB3C758E8C07B9(ped: Handle, p1: boolean): integer;

	/**
	 * Native: TASK::_0x1F351CF1C6475734
	 *
	 * Hash: 0x1F351CF1C6475734 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F351CF1C6475734)
	 */
	_0x1F351CF1C6475734(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer
	): void;

	/**
	 * Native: TASK::_0x29682E2CCF21E9B5
	 *
	 * Hash: 0x29682E2CCF21E9B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29682E2CCF21E9B5)
	 */
	_0x29682E2CCF21E9B5(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer,
		p10: integer,
		p11: integer,
		p12: integer,
		p13: integer
	): void;

	/**
	 * Native: TASK::_0x3E38E28A1D80DDF6
	 *
	 * Hash: 0x3E38E28A1D80DDF6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E38E28A1D80DDF6)
	 */
	_0x3E38E28A1D80DDF6(ped: Handle): boolean;

	/**
	 * Native: TASK::_0x53DDC75BC3AC0A90
	 *
	 * Hash: 0x53DDC75BC3AC0A90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53DDC75BC3AC0A90)
	 */
	_0x53DDC75BC3AC0A90(vehicle: Handle): void;

	/**
	 * Native: TASK::_0x6100B3CEFD43452E
	 *
	 * Hash: 0x6100B3CEFD43452E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6100B3CEFD43452E)
	 */
	_0x6100B3CEFD43452E(p0: Handle): void;

	/**
	 * Native: TASK::_0x8423541E8B3A1589
	 *
	 * Hash: 0x8423541E8B3A1589 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8423541E8B3A1589)
	 */
	_0x8423541E8B3A1589(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: TASK::_0x8634CEF2522D987B
	 *
	 * Hash: 0x8634CEF2522D987B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8634CEF2522D987B)
	 */
	_0x8634CEF2522D987B(ped: Handle, p1: string, value: number): void;

	/**
	 * Native: TASK::_0x9D252648778160DF
	 *
	 * Hash: 0x9D252648778160DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D252648778160DF)
	 */
	_0x9D252648778160DF(p0: integer): integer;

	/**
	 * Native: TASK::_0xAB13A5565480B6D9
	 *
	 * Hash: 0xAB13A5565480B6D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAB13A5565480B6D9)
	 */
	_0xAB13A5565480B6D9(ped: Handle, p1: string): integer;

	/**
	 * Native: TASK::_0xFA83CA6776038F64
	 *
	 * Hash: 0xFA83CA6776038F64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA83CA6776038F64)
	 */
	_0xFA83CA6776038F64(x: number, y: number, z: number): void;
}

interface GameTask extends GameTaskLegacy {
	/**
	 * Native: TASK::TASK_ACHIEVE_HEADING
	 *
	 * Hash: 0x93B93A37987F1F3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93B93A37987F1F3D)
	 */
	achieveHeading(ped: Handle, heading: number, timeout: integer): void;

	/**
	 * Native: TASK::ADD_COVER_BLOCKING_AREA
	 *
	 * Hash: 0x45C597097DD7CB81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45C597097DD7CB81)
	 */
	addCoverBlockingArea(
		playerX: number,
		playerY: number,
		playerZ: number,
		radiusX: number,
		radiusY: number,
		radiusZ: number,
		p6: boolean,
		p7: boolean,
		p8: boolean,
		p9: boolean
	): void;

	/**
	 * Native: TASK::ADD_COVER_POINT
	 *
	 * Hash: 0xD5C12A75C7B9497F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5C12A75C7B9497F)
	 */
	addCoverPoint(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: boolean
	): Handle;

	/**
	 * Native: TASK::ADD_PATROL_ROUTE_LINK
	 *
	 * Hash: 0x23083260DEC3A551 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23083260DEC3A551)
	 */
	addPatrolRouteLink(p0: integer, p1: integer): void;

	/**
	 * Native: TASK::ADD_PATROL_ROUTE_NODE
	 *
	 * Hash: 0x8EDF950167586B7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EDF950167586B7C)
	 */
	addPatrolRouteNode(
		p0: integer,
		p1: string,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p8: integer
	): void;

	/**
	 * Native: TASK::ADD_VEHICLE_SUBTASK_ATTACK_COORD
	 *
	 * Hash: 0x5CF0D8F9BBA0DD75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CF0D8F9BBA0DD75)
	 */
	addVehicleSubAttackCoord(ped: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::ADD_VEHICLE_SUBTASK_ATTACK_PED
	 *
	 * Hash: 0x85F462BADC7DA47F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85F462BADC7DA47F)
	 */
	addVehicleSubAttackPed(ped: Handle, ped2: Handle): void;

	/**
	 * Native: TASK::TASK_AGITATED_ACTION
	 *
	 * Hash: 0x19D1B791CB3670FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19D1B791CB3670FE)
	 */
	agitatedAction(ped: Handle, ped2: Handle): void;

	/**
	 * Native: TASK::TASK_AIM_GUN_AT_COORD
	 *
	 * Hash: 0x6671F3EEC681BDA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6671F3EEC681BDA1)
	 */
	aimGunAtCoord(ped: Handle, x: number, y: number, z: number, time: integer, p5: boolean, p6: boolean): void;

	/**
	 * Native: TASK::TASK_AIM_GUN_AT_ENTITY
	 *
	 * Hash: 0x9B53BB6E8943AF53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B53BB6E8943AF53)
	 */
	aimGunAtEntity(ped: Handle, entity: Handle, duration: integer, p3: boolean): void;

	/**
	 * Native: TASK::TASK_AIM_GUN_SCRIPTED
	 *
	 * Hash: 0x7A192BE16D373D00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A192BE16D373D00)
	 */
	aimGunScripted(ped: Handle, scriptTask: integer, p2: boolean, p3: boolean): void;

	/**
	 * Native: TASK::TASK_AIM_GUN_SCRIPTED_WITH_TARGET
	 *
	 * Hash: 0x8605AF0DE8B3A5AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8605AF0DE8B3A5AC)
	 */
	aimGunScriptedWithTarget(
		p0: integer,
		p1: integer,
		p2: number,
		p3: number,
		p4: number,
		p5: integer,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: TASK::TASK_ARREST_PED
	 *
	 * Hash: 0xF3B9A78A178572B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3B9A78A178572B1)
	 */
	arrestPed(ped: Handle, target: Handle): void;

	/**
	 * Native: TASK::ASSISTED_MOVEMENT_IS_ROUTE_LOADED
	 *
	 * Hash: 0x60F9A4393A21F741 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60F9A4393A21F741)
	 */
	assistedMovementIsRouteLoaded(route: string): boolean;

	/**
	 * Native: TASK::ASSISTED_MOVEMENT_OVERRIDE_LOAD_DISTANCE_THIS_FRAME
	 *
	 * Hash: 0x13945951E16EF912 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13945951E16EF912)
	 */
	assistedMovementOverrideLoadDistanceThisFrame(dist: number): void;

	/**
	 * Native: TASK::ASSISTED_MOVEMENT_REMOVE_ROUTE
	 *
	 * Hash: 0x3548536485DD792B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3548536485DD792B)
	 */
	assistedMovementRemoveRoute(route: string): void;

	/**
	 * Native: TASK::ASSISTED_MOVEMENT_REQUEST_ROUTE
	 *
	 * Hash: 0x817268968605947A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x817268968605947A)
	 */
	assistedMovementRequestRoute(route: string): void;

	/**
	 * Native: TASK::ASSISTED_MOVEMENT_SET_ROUTE_PROPERTIES
	 *
	 * Hash: 0xD5002D78B7162E1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5002D78B7162E1B)
	 */
	assistedMovementSetRouteProperties(route: string, props: integer): void;

	/**
	 * Native: TASK::TASK_BOAT_MISSION
	 *
	 * Hash: 0x15C86013127CE63F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15C86013127CE63F)
	 */
	boatMission(
		pedDriver: Handle,
		boat: Handle,
		p2: integer,
		p3: integer,
		x: number,
		y: number,
		z: number,
		p7: integer,
		maxSpeed: number,
		drivingStyle: integer,
		p10: number,
		p11: integer
	): void;

	/**
	 * Native: TASK::TASK_CHAT_TO_PED
	 *
	 * Hash: 0x8C338E0263E4FD19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C338E0263E4FD19)
	 */
	chatToPed(ped: Handle, target: Handle, p2: integer, p3: number, p4: number, p5: number, p6: number, p7: number): void;

	/**
	 * Native: TASK::TASK_CLEAR_DEFENSIVE_AREA
	 *
	 * Hash: 0x95A6C46A31D1917D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95A6C46A31D1917D)
	 */
	clearDefensiveArea(p0: integer): void;

	/**
	 * Native: TASK::CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
	 *
	 * Hash: 0xC35B5CDB2824CF69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC35B5CDB2824CF69)
	 */
	clearDrivebyUnderneathDrivingTask(ped: Handle): void;

	/**
	 * Native: TASK::TASK_CLEAR_LOOK_AT
	 *
	 * Hash: 0x0F804F1DB19B9689 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F804F1DB19B9689)
	 */
	clearLookAt(ped: Handle): void;

	/**
	 * Native: TASK::CLEAR_PED_TASKS
	 *
	 * Hash: 0xE1EF3C1216AFF2CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1EF3C1216AFF2CD)
	 */
	clearPedS(ped: Handle): void;

	/**
	 * Native: TASK::CLEAR_PED_SECONDARY_TASK
	 *
	 * Hash: 0x176CECF6F920D707 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x176CECF6F920D707)
	 */
	clearPedSecondary(ped: Handle): void;

	/**
	 * Native: TASK::CLEAR_SEQUENCE_TASK
	 *
	 * Hash: 0x3841422E9C488D8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3841422E9C488D8C)
	 */
	clearSequence(): integer;

	/**
	 * Native: TASK::_CLEAR_VEHICLE_TASKS
	 *
	 * Hash: 0xDBBC7A2432524127 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBBC7A2432524127)
	 */
	clearVehicleS(vehicle: Handle): void;

	/**
	 * Native: TASK::TASK_CLIMB
	 *
	 * Hash: 0x89D9FCC2435112F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89D9FCC2435112F1)
	 */
	climb(ped: Handle, unused: boolean): void;

	/**
	 * Native: TASK::TASK_CLIMB_LADDER
	 *
	 * Hash: 0xB6C987F9285A3814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6C987F9285A3814)
	 */
	climbLadder(ped: Handle, p1: integer): void;

	/**
	 * Native: TASK::CLOSE_PATROL_ROUTE
	 *
	 * Hash: 0xB043ECA801B8CBC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB043ECA801B8CBC1)
	 */
	closePatrolRoute(): void;

	/**
	 * Native: TASK::CLOSE_SEQUENCE_TASK
	 *
	 * Hash: 0x39E72BC99E6360CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39E72BC99E6360CB)
	 */
	closeSequence(taskSequenceId: integer): void;

	/**
	 * Native: TASK::TASK_COMBAT_HATED_TARGETS_AROUND_PED
	 *
	 * Hash: 0x7BF835BB9E2698C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7BF835BB9E2698C8)
	 */
	combatHatedTargetsAroundPed(ped: Handle, radius: number, p2: integer): void;

	/**
	 * Native: TASK::TASK_COMBAT_HATED_TARGETS_AROUND_PED_TIMED
	 *
	 * Hash: 0x2BBA30B854534A0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BBA30B854534A0C)
	 */
	combatHatedTargetsAroundPedTimed(p0: integer, p1: number, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::TASK_COMBAT_HATED_TARGETS_IN_AREA
	 *
	 * Hash: 0x4CF5F55DAC3280A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CF5F55DAC3280A0)
	 */
	combatHatedTargetsInArea(ped: Handle, x: number, y: number, z: number, radius: number, p5: integer): void;

	/**
	 * Native: TASK::TASK_COMBAT_PED
	 *
	 * Hash: 0xF166E48407BAC484 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF166E48407BAC484)
	 */
	combatPed(ped: Handle, targetPed: Handle, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::TASK_COMBAT_PED_TIMED
	 *
	 * Hash: 0x944F30DCB7096BDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x944F30DCB7096BDE)
	 */
	combatPedTimed(p0: integer, ped: Handle, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::CONTROL_MOUNTED_WEAPON
	 *
	 * Hash: 0xDCFE42068FE0135A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCFE42068FE0135A)
	 */
	controlMountedWeapon(ped: Handle): boolean;

	/**
	 * Native: TASK::TASK_COWER
	 *
	 * Hash: 0x3EB1FE9E8E908E15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EB1FE9E8E908E15)
	 */
	cower(ped: Handle, duration: integer): void;

	/**
	 * Native: TASK::CREATE_PATROL_ROUTE
	 *
	 * Hash: 0xAF8A443CCC8018DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF8A443CCC8018DC)
	 */
	createPatrolRoute(): void;

	/**
	 * Native: TASK::DELETE_PATROL_ROUTE
	 *
	 * Hash: 0x7767DD9D65E91319 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7767DD9D65E91319)
	 */
	deletePatrolRoute(patrolRoute: string): void;

	/**
	 * Native: TASK::DOES_SCENARIO_EXIST_IN_AREA
	 *
	 * Hash: 0x5A59271FFADD33C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A59271FFADD33C1)
	 */
	doesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): boolean;

	/**
	 * Native: TASK::DOES_SCENARIO_GROUP_EXIST
	 *
	 * Hash: 0xF9034C136C9E00D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9034C136C9E00D3)
	 */
	doesScenarioGroupExist(scenarioGroup: string): boolean;

	/**
	 * Native: TASK::DOES_SCENARIO_OF_TYPE_EXIST_IN_AREA
	 *
	 * Hash: 0x0A9D0C2A3BBC86C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A9D0C2A3BBC86C1)
	 */
	doesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p4: number, p5: boolean): integer;

	/**
	 * Native: TASK::DOES_SCRIPTED_COVER_POINT_EXIST_AT_COORDS
	 *
	 * Hash: 0xA98B8E3C088E5A31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA98B8E3C088E5A31)
	 */
	doesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): boolean;

	/**
	 * Native: TASK::TASK_DRIVE_BY
	 *
	 * Hash: 0x2F8AF0E82773A171 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F8AF0E82773A171)
	 */
	driveBy(
		driverPed: Handle,
		targetPed: Handle,
		targetVehicle: Handle,
		targetX: number,
		targetY: number,
		targetZ: number,
		distanceToShoot: number,
		pedAccuracy: integer,
		p8: boolean,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_ENTER_VEHICLE
	 *
	 * Hash: 0xC20E50AA46D09CA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC20E50AA46D09CA8)
	 */
	enterVehicle(
		ped: Handle,
		vehicle: Handle,
		timeout: integer,
		seat: integer,
		speed: number,
		flag: integer,
		p6: integer
	): void;

	/**
	 * Native: TASK::TASK_EVERYONE_LEAVE_VEHICLE
	 *
	 * Hash: 0x7F93691AB4B92272 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F93691AB4B92272)
	 */
	everyoneLeaveVehicle(vehicle: Handle): void;

	/**
	 * Native: TASK::TASK_EXIT_COVER
	 *
	 * Hash: 0x79B258E397854D29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79B258E397854D29)
	 */
	exitCover(p0: integer, p1: integer, p2: number, p3: number, p4: number): void;

	/**
	 * Native: TASK::TASK_EXTEND_ROUTE
	 *
	 * Hash: 0x1E7889778264843A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E7889778264843A)
	 */
	extendRoute(x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_FLUSH_ROUTE
	 *
	 * Hash: 0x841142A1376E9006 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x841142A1376E9006)
	 */
	flushRoute(): void;

	/**
	 * Native: TASK::TASK_FOLLOW_NAV_MESH_TO_COORD
	 *
	 * Hash: 0x15D3A79D4E44B913 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15D3A79D4E44B913)
	 */
	followNavMeshToCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: integer,
		stoppingRange: number,
		persistFollowing: boolean,
		unk: number
	): void;

	/**
	 * Native: TASK::TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED
	 *
	 * Hash: 0x17F58B88D085DBAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17F58B88D085DBAC)
	 */
	followNavMeshToCoordAdvanced(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: integer,
		unkFloat: number,
		unkInt: integer,
		unkX: number,
		unkY: number,
		unkZ: number,
		unk_40000f: number
	): void;

	/**
	 * Native: TASK::TASK_FOLLOW_POINT_ROUTE
	 *
	 * Hash: 0x595583281858626E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x595583281858626E)
	 */
	followPointRoute(ped: Handle, speed: number, unknown: integer): void;

	/**
	 * Native: TASK::TASK_FOLLOW_TO_OFFSET_OF_ENTITY
	 *
	 * Hash: 0x304AE42E357B8C7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x304AE42E357B8C7E)
	 */
	followToOffsetOfEntity(
		ped: Handle,
		entity: Handle,
		offsetX: number,
		offsetY: number,
		offsetZ: number,
		movementSpeed: number,
		timeout: integer,
		stoppingRange: number,
		persistFollowing: boolean
	): void;

	/**
	 * Native: TASK::TASK_FOLLOW_WAYPOINT_RECORDING
	 *
	 * Hash: 0x0759591819534F7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0759591819534F7B)
	 */
	followWaypointRecording(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: TASK::TASK_FORCE_MOTION_STATE
	 *
	 * Hash: 0x4F056E1AFFEF17AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F056E1AFFEF17AB)
	 */
	forceMotionState(ped: Handle, state: integer, p2: boolean): void;

	/**
	 * Native: TASK::GET_ACTIVE_VEHICLE_MISSION_TYPE
	 *
	 * Hash: 0x534AEBA6E5ED4CAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x534AEBA6E5ED4CAB)
	 */
	getActiveVehicleMissionType(vehicle: Handle): integer;

	/**
	 * Native: TASK::GET_CLIP_SET_FOR_SCRIPTED_GUN_TASK
	 *
	 * Hash: 0x3A8CADC7D37AACC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A8CADC7D37AACC5)
	 */
	getClipSetForScriptedGun(p0: integer): string;

	/**
	 * Native: TASK::GET_IS_TASK_ACTIVE
	 *
	 * Hash: 0xB0760331C7AA4155 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0760331C7AA4155)
	 */
	getIsActive(ped: Handle, taskIndex: integer): boolean;

	/**
	 * Native: TASK::GET_IS_WAYPOINT_RECORDING_LOADED
	 *
	 * Hash: 0xCB4E8BE8A0063C5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB4E8BE8A0063C5D)
	 */
	getIsWaypointRecordingLoaded(name: string): boolean;

	/**
	 * Native: TASK::GET_TASK_MOVE_NETWORK_EVENT
	 *
	 * Hash: 0xB4F47213DF45A64C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4F47213DF45A64C)
	 */
	getMoveNetworkEvent(ped: Handle, eventName: string): boolean;

	/**
	 * Native: TASK::GET_TASK_MOVE_NETWORK_SIGNAL_BOOL
	 *
	 * Hash: 0xA7FFBA498E4AAF67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7FFBA498E4AAF67)
	 */
	getMoveNetworkSignalBool(ped: Handle, signalName: string): boolean;

	/**
	 * Native: TASK::_GET_TASK_MOVE_NETWORK_SIGNAL_FLOAT
	 *
	 * Hash: 0x44AB0B3AFECCE242 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44AB0B3AFECCE242)
	 */
	getMoveNetworkSignalFloat(ped: Handle, signalName: string): number;

	/**
	 * Native: TASK::GET_TASK_MOVE_NETWORK_STATE
	 *
	 * Hash: 0x717E4D1F2048376D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x717E4D1F2048376D)
	 */
	getMoveNetworkState(ped: Handle): string;

	/**
	 * Native: TASK::GET_NAVMESH_ROUTE_DISTANCE_REMAINING
	 *
	 * Hash: 0xC6F5C0BCDC74D62D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6F5C0BCDC74D62D)
	 */
	getNavmeshRouteDistanceRemaining(ped: Handle): GetNavmeshRouteDistanceRemainingResult;

	/**
	 * Native: TASK::GET_NAVMESH_ROUTE_RESULT
	 *
	 * Hash: 0x632E831F382A0FA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x632E831F382A0FA8)
	 */
	getNavmeshRouteResult(ped: Handle): integer;

	/**
	 * Native: TASK::TASK_GET_OFF_BOAT
	 *
	 * Hash: 0x9C00E77AF14B2DFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C00E77AF14B2DFF)
	 */
	getOffBoat(ped: Handle, boat: Handle): void;

	/**
	 * Native: TASK::GET_PED_DESIRED_MOVE_BLEND_RATIO
	 *
	 * Hash: 0x8517D4A6CA8513ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8517D4A6CA8513ED)
	 */
	getPedDesiredMoveBlendRatio(ped: Handle): number;

	/**
	 * Native: TASK::GET_PED_WAYPOINT_DISTANCE
	 *
	 * Hash: 0xE6A877C64CAF1BC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6A877C64CAF1BC5)
	 */
	getPedWaypointDistance(p0: integer): number;

	/**
	 * Native: TASK::GET_PED_WAYPOINT_PROGRESS
	 *
	 * Hash: 0x2720AAA75001E094 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2720AAA75001E094)
	 */
	getPedWaypointProgress(ped: Handle): integer;

	/**
	 * Native: TASK::GET_PHONE_GESTURE_ANIM_CURRENT_TIME
	 *
	 * Hash: 0x47619ABE8B268C60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47619ABE8B268C60)
	 */
	getPhoneGestureAnimCurrentTime(ped: Handle): number;

	/**
	 * Native: TASK::GET_PHONE_GESTURE_ANIM_TOTAL_TIME
	 *
	 * Hash: 0x1EE0F68A7C25DEC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EE0F68A7C25DEC6)
	 */
	getPhoneGestureAnimTotalTime(ped: Handle): number;

	/**
	 * Native: TASK::GET_SCRIPTED_COVER_POINT_COORDS
	 *
	 * Hash: 0x594A1028FC2A3E85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x594A1028FC2A3E85)
	 */
	getScriptedCoverPointCoords(coverpoint: Handle): Vector3Mp;

	/**
	 * Native: TASK::GET_SCRIPT_TASK_STATUS
	 *
	 * Hash: 0x77F1BEB8863288D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77F1BEB8863288D5)
	 */
	getScriptStatus(ped: Handle, taskHash: integer): integer;

	/**
	 * Native: TASK::GET_SEQUENCE_PROGRESS
	 *
	 * Hash: 0x00A9010CFE1E3533 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00A9010CFE1E3533)
	 */
	getSequenceProgress(ped: Handle): integer;

	/**
	 * Native: TASK::GET_VEHICLE_WAYPOINT_PROGRESS
	 *
	 * Hash: 0x9824CFF8FC66E159 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9824CFF8FC66E159)
	 */
	getVehicleWaypointProgress(vehicle: Handle): integer;

	/**
	 * Native: TASK::GET_VEHICLE_WAYPOINT_TARGET_POINT
	 *
	 * Hash: 0x416B62AC8B9E5BBD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x416B62AC8B9E5BBD)
	 */
	getVehicleWaypointTargetPoint(vehicle: Handle): integer;

	/**
	 * Native: TASK::GET_WAYPOINT_DISTANCE_ALONG_ROUTE
	 *
	 * Hash: 0xA5B769058763E497 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5B769058763E497)
	 */
	getWaypointDistanceAlongRoute(p0: string, p1: integer): number;

	/**
	 * Native: TASK::TASK_GO_STRAIGHT_TO_COORD
	 *
	 * Hash: 0xD76B57B44F1E6F8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD76B57B44F1E6F8B)
	 */
	goStraightToCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		timeout: integer,
		targetHeading: number,
		distanceToSlide: number
	): void;

	/**
	 * Native: TASK::TASK_GO_STRAIGHT_TO_COORD_RELATIVE_TO_ENTITY
	 *
	 * Hash: 0x61E360B7E040D12E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61E360B7E040D12E)
	 */
	goStraightToCoordRelativeToEntity(
		entity1: Handle,
		entity2: Handle,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD
	 *
	 * Hash: 0xA55547801EB331FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA55547801EB331FC)
	 */
	goToCoordAndAimAtHatedEntitiesNearCoord(
		pedHandle: Handle,
		goToLocationX: number,
		goToLocationY: number,
		goToLocationZ: number,
		focusLocationX: number,
		focusLocationY: number,
		focusLocationZ: number,
		speed: number,
		shootAtEnemies: boolean,
		distanceToStopAt: number,
		noRoadsDistance: number,
		unkTrue: boolean,
		unkFlag: integer,
		aimingFlag: integer,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_ANY_MEANS
	 *
	 * Hash: 0x5BC448CB78FA3E88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BC448CB78FA3E88)
	 */
	goToCoordAnyMeans(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: integer,
		p6: boolean,
		walkingStyle: integer,
		p8: number
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS
	 *
	 * Hash: 0x1DD45F9ECFDB1BC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DD45F9ECFDB1BC9)
	 */
	goToCoordAnyMeansExtraParams(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: integer,
		p6: boolean,
		walkingStyle: integer,
		p8: number,
		p9: integer,
		p10: integer,
		p11: integer,
		p12: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED
	 *
	 * Hash: 0xB8ECD61F531A7B02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8ECD61F531A7B02)
	 */
	goToCoordAnyMeansExtraParamsWithCruiseSpeed(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p5: integer,
		p6: boolean,
		walkingStyle: integer,
		p8: number,
		p9: integer,
		p10: integer,
		p11: integer,
		p12: integer,
		p13: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD
	 *
	 * Hash: 0x11315AB3385B8AC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11315AB3385B8AC0)
	 */
	goToCoordWhileAimingAtCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		aimAtX: number,
		aimAtY: number,
		aimAtZ: number,
		moveSpeed: number,
		p8: boolean,
		p9: number,
		p10: number,
		p11: boolean,
		flags: integer,
		p13: boolean,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY
	 *
	 * Hash: 0xB2A16444EAD9AE47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2A16444EAD9AE47)
	 */
	goToCoordWhileAimingAtEntity(
		p0: integer,
		p1: number,
		p2: number,
		p3: number,
		p4: integer,
		p5: number,
		p6: boolean,
		p7: number,
		p8: number,
		p9: boolean,
		p10: integer,
		p11: boolean,
		p12: integer,
		p13: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_ENTITY
	 *
	 * Hash: 0x6A071245EB0D1882 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A071245EB0D1882)
	 */
	goToEntity(
		entity: Handle,
		target: Handle,
		duration: integer,
		distance: number,
		speed: number,
		p5: number,
		p6: integer
	): void;

	/**
	 * Native: TASK::TASK_GOTO_ENTITY_AIMING
	 *
	 * Hash: 0xA9DA48FAB8A76C12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9DA48FAB8A76C12)
	 */
	gotoEntityAiming(ped: Handle, target: Handle, distanceToStopAt: number, StartAimingDist: number): void;

	/**
	 * Native: TASK::TASK_GOTO_ENTITY_OFFSET
	 *
	 * Hash: 0xE39B4FF4FDEBDE27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE39B4FF4FDEBDE27)
	 */
	gotoEntityOffset(ped: Handle, p1: integer, p2: integer, x: number, y: number, z: number, duration: integer): void;

	/**
	 * Native: TASK::TASK_GOTO_ENTITY_OFFSET_XY
	 *
	 * Hash: 0x338E7EF52B6095A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x338E7EF52B6095A9)
	 */
	gotoEntityOffsetXy(
		p0: integer,
		oed: Handle,
		duration: integer,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: boolean
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_ENTITY_WHILE_AIMING_AT_COORD
	 *
	 * Hash: 0x04701832B739DCE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04701832B739DCE5)
	 */
	goToEntityWhileAimingAtCoord(
		p0: integer,
		p1: integer,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: boolean,
		p7: number,
		p8: number,
		p9: boolean,
		p10: boolean,
		p11: integer
	): void;

	/**
	 * Native: TASK::TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY
	 *
	 * Hash: 0x97465886D35210E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97465886D35210E9)
	 */
	goToEntityWhileAimingAtEntity(
		ped: Handle,
		entityToWalkTo: Handle,
		entityToAimAt: Handle,
		speed: number,
		shootatEntity: boolean,
		p5: number,
		p6: number,
		p7: boolean,
		p8: boolean,
		firingPattern: integer
	): void;

	/**
	 * Native: TASK::TASK_GUARD_ASSIGNED_DEFENSIVE_AREA
	 *
	 * Hash: 0xD2A207EEBDF9889B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2A207EEBDF9889B)
	 */
	guardAssignedDefensiveArea(
		p0: integer,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: integer
	): void;

	/**
	 * Native: TASK::TASK_GUARD_CURRENT_POSITION
	 *
	 * Hash: 0x4A58A47A72E3FCB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A58A47A72E3FCB4)
	 */
	guardCurrentPosition(p0: Handle, p1: number, p2: number, p3: boolean): void;

	/**
	 * Native: TASK::TASK_GUARD_SPHERE_DEFENSIVE_AREA
	 *
	 * Hash: 0xC946FE14BE0EB5E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC946FE14BE0EB5E2)
	 */
	guardSphereDefensiveArea(
		p0: Handle,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: integer,
		p7: number,
		p8: number,
		p9: number,
		p10: number
	): void;

	/**
	 * Native: TASK::TASK_HANDS_UP
	 *
	 * Hash: 0xF2EAB31979A7F910 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2EAB31979A7F910)
	 */
	handsUp(ped: Handle, duration: integer, facingPed: Handle, p3: integer, p4: boolean): void;

	/**
	 * Native: TASK::TASK_HELI_CHASE
	 *
	 * Hash: 0xAC83B1DB38D0ADA0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC83B1DB38D0ADA0)
	 */
	heliChase(pilot: Handle, entityToFollow: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_HELI_ESCORT_HELI
	 *
	 * Hash: 0xB385523325077210 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB385523325077210)
	 */
	heliEscortHeli(pilot: Handle, heli1: Handle, heli2: Handle, p3: number, p4: number, p5: number): void;

	/**
	 * Native: TASK::TASK_HELI_MISSION
	 *
	 * Hash: 0xDAD029E187A2BEB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAD029E187A2BEB4)
	 */
	heliMission(
		pilot: Handle,
		aircraft: Handle,
		targetVehicle: Handle,
		targetPed: Handle,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: integer,
		maxSpeed: number,
		radius: number,
		targetHeading: number,
		maxHeight: integer,
		minHeight: integer,
		unk3: number,
		behaviorFlags: integer
	): void;

	/**
	 * Native: TASK::IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
	 *
	 * Hash: 0x8785E6E40C7A8818 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8785E6E40C7A8818)
	 */
	isDrivebyUnderneathDrivingTask(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK
	 *
	 * Hash: 0xA320EF046186FA3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA320EF046186FA3B)
	 */
	isMountedWeaponUnderneathDrivingTask(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_MOVE_BLEND_RATIO_RUNNING
	 *
	 * Hash: 0xD4D8636C0199A939 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4D8636C0199A939)
	 */
	isMoveBlendRatioRunning(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_MOVE_BLEND_RATIO_SPRINTING
	 *
	 * Hash: 0x24A2AD74FA9814E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24A2AD74FA9814E2)
	 */
	isMoveBlendRatioSprinting(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_MOVE_BLEND_RATIO_STILL
	 *
	 * Hash: 0x349CE7B56DAFD95C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x349CE7B56DAFD95C)
	 */
	isMoveBlendRatioStill(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_MOVE_BLEND_RATIO_WALKING
	 *
	 * Hash: 0xF133BBBE91E1691F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF133BBBE91E1691F)
	 */
	isMoveBlendRatioWalking(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_TASK_MOVE_NETWORK_ACTIVE
	 *
	 * Hash: 0x921CE12C489C4C41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x921CE12C489C4C41)
	 */
	isMoveNetworkActive(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_TASK_MOVE_NETWORK_READY_FOR_TRANSITION
	 *
	 * Hash: 0x30ED88D5E0C56A37 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30ED88D5E0C56A37)
	 */
	isMoveNetworkReadyForTransition(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_ACTIVE_IN_SCENARIO
	 *
	 * Hash: 0xAA135F9482C82CC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA135F9482C82CC3)
	 */
	isPedActiveInScenario(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_BEING_ARRESTED
	 *
	 * Hash: 0x90A09F3A45FED688 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90A09F3A45FED688)
	 */
	isPedBeingArrested(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_CUFFED
	 *
	 * Hash: 0x74E559B3BC910685 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74E559B3BC910685)
	 */
	isPedCuffed(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_GETTING_UP
	 *
	 * Hash: 0x2A74E1D5F2F00EEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A74E1D5F2F00EEC)
	 */
	isPedGettingUp(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_IN_WRITHE
	 *
	 * Hash: 0xDEB6D52126E7D640 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEB6D52126E7D640)
	 */
	isPedInWrithe(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_PLAYING_BASE_CLIP_IN_SCENARIO
	 *
	 * Hash: 0x621C6E4729388E41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x621C6E4729388E41)
	 */
	isPedPlayingBaseClipInScenario(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_RUNNING
	 *
	 * Hash: 0xC5286FFC176F28A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5286FFC176F28A2)
	 */
	isPedRunning(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_RUNNING_ARREST_TASK
	 *
	 * Hash: 0x3DC52677769B4AE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DC52677769B4AE0)
	 */
	isPedRunningArrest(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_SPRINTING
	 *
	 * Hash: 0x57E457CD2C0FC168 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57E457CD2C0FC168)
	 */
	isPedSprinting(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_STILL
	 *
	 * Hash: 0xAC29253EEF8F0180 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC29253EEF8F0180)
	 */
	isPedStill(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_STRAFING
	 *
	 * Hash: 0xE45B7F222DE47E09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE45B7F222DE47E09)
	 */
	isPedStrafing(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PED_WALKING
	 *
	 * Hash: 0xDE4C184B2B9B071A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE4C184B2B9B071A)
	 */
	isPedWalking(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_PLAYING_PHONE_GESTURE_ANIM
	 *
	 * Hash: 0xB8EBB1E9D3588C10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8EBB1E9D3588C10)
	 */
	isPlayingPhoneGestureAnim(ped: Handle): boolean;

	/**
	 * Native: TASK::IS_SCENARIO_GROUP_ENABLED
	 *
	 * Hash: 0x367A09DED4E05B99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x367A09DED4E05B99)
	 */
	isScenarioGroupEnabled(scenarioGroup: string): boolean;

	/**
	 * Native: TASK::IS_SCENARIO_OCCUPIED
	 *
	 * Hash: 0x788756D73AC2E07C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x788756D73AC2E07C)
	 */
	isScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;

	/**
	 * Native: TASK::IS_SCENARIO_TYPE_ENABLED
	 *
	 * Hash: 0x3A815DB3EA088722 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A815DB3EA088722)
	 */
	isScenarioTypeEnabled(scenarioType: string): boolean;

	/**
	 * Native: TASK::IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_PED
	 *
	 * Hash: 0xE03B3F2D3DC59B64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE03B3F2D3DC59B64)
	 */
	isWaypointPlaybackGoingOnForPed(p0: integer): boolean;

	/**
	 * Native: TASK::IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_VEHICLE
	 *
	 * Hash: 0xF5134943EA29868C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5134943EA29868C)
	 */
	isWaypointPlaybackGoingOnForVehicle(vehicle: Handle): boolean;

	/**
	 * Native: TASK::TASK_JUMP
	 *
	 * Hash: 0x0AE4086104E067B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AE4086104E067B1)
	 */
	jump(ped: Handle, unused: boolean, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::TASK_LEAVE_ANY_VEHICLE
	 *
	 * Hash: 0x504D54DF3F6F2247 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x504D54DF3F6F2247)
	 */
	leaveAnyVehicle(ped: Handle, p1: integer, flags: integer): void;

	/**
	 * Native: TASK::TASK_LEAVE_VEHICLE
	 *
	 * Hash: 0xD3DBCE61A490BE02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3DBCE61A490BE02)
	 */
	leaveVehicle(ped: Handle, vehicle: Handle, flags: integer): void;

	/**
	 * Native: TASK::TASK_LOOK_AT_COORD
	 *
	 * Hash: 0x6FA46612594F7973 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FA46612594F7973)
	 */
	lookAtCoord(entity: Handle, x: number, y: number, z: number, duration: integer, p5: integer, p6: integer): void;

	/**
	 * Native: TASK::TASK_LOOK_AT_ENTITY
	 *
	 * Hash: 0x69F4BE8C8CC4796C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69F4BE8C8CC4796C)
	 */
	lookAtEntity(ped: Handle, lookAt: Handle, duration: integer, unknown1: integer, unknown2: integer): void;

	/**
	 * Native: TASK::TASK_MOVE_NETWORK_ADVANCED_BY_NAME
	 *
	 * Hash: 0xD5B35BEA41919ACB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5B35BEA41919ACB)
	 */
	moveNetworkAdvancedByName(
		ped: Handle,
		p1: string,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: integer,
		p9: number,
		p10: boolean,
		animDict: string,
		flags: integer
	): void;

	/**
	 * Native: TASK::TASK_MOVE_NETWORK_BY_NAME
	 *
	 * Hash: 0x2D537BA194896636 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D537BA194896636)
	 */
	moveNetworkByName(ped: Handle, task: string, multiplier: number, p3: boolean, animDict: string, flags: integer): void;

	/**
	 * Native: TASK::_TASK_MOVE_NETWORK_BY_NAME_WITH_INIT_PARAMS
	 *
	 * Hash: 0x3D45B0B355C5E0C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D45B0B355C5E0C9)
	 */
	moveNetworkByNameWithInitParams(
		ped: Handle,
		p1: string,
		p3: number,
		p4: boolean,
		animDict: string,
		flags: integer
	): integer;

	/**
	 * Native: TASK::OPEN_PATROL_ROUTE
	 *
	 * Hash: 0xA36BFB5EE89F3D82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA36BFB5EE89F3D82)
	 */
	openPatrolRoute(patrolRoute: string): void;

	/**
	 * Native: TASK::OPEN_SEQUENCE_TASK
	 *
	 * Hash: 0xE8854A4326B9E12B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8854A4326B9E12B)
	 */
	openSequence(): integer;

	/**
	 * Native: TASK::TASK_OPEN_VEHICLE_DOOR
	 *
	 * Hash: 0x965791A9A488A062 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x965791A9A488A062)
	 */
	openVehicleDoor(ped: Handle, vehicle: Handle, timeOut: integer, seat: integer, speed: number): void;

	/**
	 * Native: TASK::TASK_PARACHUTE
	 *
	 * Hash: 0xD2F1C53C97EE81AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2F1C53C97EE81AB)
	 */
	parachute(ped: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: TASK::TASK_PARACHUTE_TO_TARGET
	 *
	 * Hash: 0xB33E291AFA6BD03A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB33E291AFA6BD03A)
	 */
	parachuteToTarget(ped: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_PATROL
	 *
	 * Hash: 0xBDA5DF49D080FE4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDA5DF49D080FE4E)
	 */
	patrol(ped: Handle, p1: string, p2: integer, p3: boolean, p4: boolean): void;

	/**
	 * Native: TASK::TASK_PAUSE
	 *
	 * Hash: 0xE73A266DB0CA9042 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE73A266DB0CA9042)
	 */
	pause(ped: Handle, ms: integer): void;

	/**
	 * Native: TASK::PED_HAS_USE_SCENARIO_TASK
	 *
	 * Hash: 0x295E3CCEC879CCD7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x295E3CCEC879CCD7)
	 */
	pedHasUseScenario(ped: Handle): boolean;

	/**
	 * Native: TASK::TASK_PED_SLIDE_TO_COORD
	 *
	 * Hash: 0xD04FE6765D990A06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD04FE6765D990A06)
	 */
	pedSlideToCoord(ped: Handle, x: number, y: number, z: number, heading: number, p5: number): void;

	/**
	 * Native: TASK::TASK_PED_SLIDE_TO_COORD_HDG_RATE
	 *
	 * Hash: 0x5A4A6A6D3DC64F52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A4A6A6D3DC64F52)
	 */
	pedSlideToCoordHdgRate(ped: Handle, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;

	/**
	 * Native: TASK::TASK_PERFORM_SEQUENCE
	 *
	 * Hash: 0x5ABA3986D90D8A3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5ABA3986D90D8A3B)
	 */
	performSequence(ped: Handle, taskSequenceId: integer): void;

	/**
	 * Native: TASK::TASK_PERFORM_SEQUENCE_FROM_PROGRESS
	 *
	 * Hash: 0x89221B16730234F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89221B16730234F0)
	 */
	performSequenceFromProgress(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::TASK_PERFORM_SEQUENCE_LOCALLY
	 *
	 * Hash: 0x8C33220C8D78CA0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C33220C8D78CA0D)
	 */
	performSequenceLocally(ped: Handle, taskSequenceId: integer): void;

	/**
	 * Native: TASK::TASK_PLANE_CHASE
	 *
	 * Hash: 0x2D2386F273FF7A25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D2386F273FF7A25)
	 */
	planeChase(pilot: Handle, entityToFollow: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_PLANE_GOTO_PRECISE_VTOL
	 *
	 * Hash: 0xF7F9DCCA89E7505B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7F9DCCA89E7505B)
	 */
	planeGotoPreciseVtol(
		ped: Handle,
		vehicle: Handle,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer
	): void;

	/**
	 * Native: TASK::TASK_PLANE_LAND
	 *
	 * Hash: 0xBF19721FA34D32C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF19721FA34D32C0)
	 */
	planeLand(
		pilot: Handle,
		plane: Handle,
		runwayStartX: number,
		runwayStartY: number,
		runwayStartZ: number,
		runwayEndX: number,
		runwayEndY: number,
		runwayEndZ: number
	): void;

	/**
	 * Native: TASK::TASK_PLANE_MISSION
	 *
	 * Hash: 0x23703CD154E83B88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23703CD154E83B88)
	 */
	planeMission(
		pilot: Handle,
		aircraft: Handle,
		targetVehicle: Handle,
		targetPed: Handle,
		destinationX: number,
		destinationY: number,
		destinationZ: number,
		missionFlag: integer,
		angularDrag: number,
		unk: number,
		targetHeading: number,
		maxZ: number,
		minZ: number,
		p13: integer
	): void;

	/**
	 * Native: TASK::TASK_PLANE_TAXI
	 *
	 * Hash: 0x92C360B5F15D2302 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92C360B5F15D2302)
	 */
	planeTaxi(pilot: Handle, aircraft: Handle, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: TASK::TASK_PLANT_BOMB
	 *
	 * Hash: 0x965FEC691D55E9BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x965FEC691D55E9BF)
	 */
	plantBomb(ped: Handle, x: number, y: number, z: number, heading: number): void;

	/**
	 * Native: TASK::TASK_PLAY_ANIM
	 *
	 * Hash: 0xEA47FE3719165B94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA47FE3719165B94)
	 */
	playAnim(
		ped: Handle,
		animDictionary: string,
		animationName: string,
		blendInSpeed: number,
		blendOutSpeed: number,
		duration: integer,
		flag: integer,
		playbackRate: number,
		lockX: boolean,
		lockY: boolean,
		lockZ: boolean
	): void;

	/**
	 * Native: TASK::TASK_PLAY_ANIM_ADVANCED
	 *
	 * Hash: 0x83CDB10EA29B370B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83CDB10EA29B370B)
	 */
	playAnimAdvanced(
		ped: Handle,
		animDict: string,
		animName: string,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		animEnterSpeed: number,
		animExitSpeed: number,
		duration: integer,
		flag: integer,
		animTime: number,
		p14: integer,
		p15: integer
	): void;

	/**
	 * Native: TASK::PLAY_ANIM_ON_RUNNING_SCENARIO
	 *
	 * Hash: 0x748040460F8DF5DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x748040460F8DF5DC)
	 */
	playAnimOnRunningScenario(ped: Handle, animDict: string, animName: string): void;

	/**
	 * Native: TASK::PLAY_ENTITY_SCRIPTED_ANIM
	 *
	 * Hash: 0x77A1EEC547E7FCF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77A1EEC547E7FCF1)
	 */
	playEntityScriptedAnim(p0: integer, p4: number, p5: number): PlayEntityScriptedAnimResult;

	/**
	 * Native: TASK::TASK_PLAY_PHONE_GESTURE_ANIMATION
	 *
	 * Hash: 0x8FBB6758B3B3E9EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FBB6758B3B3E9EC)
	 */
	playPhoneGestureAnimation(
		ped: Handle,
		animDict: string,
		animation: string,
		boneMaskType: string,
		p4: number,
		p5: number,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: TASK::TASK_PUT_PED_DIRECTLY_INTO_COVER
	 *
	 * Hash: 0x4172393E6BE1FECE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4172393E6BE1FECE)
	 */
	putPedDirectlyIntoCover(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		timeout: integer,
		p5: boolean,
		p6: number,
		p7: boolean,
		p8: boolean,
		p9: integer,
		p10: boolean
	): void;

	/**
	 * Native: TASK::TASK_PUT_PED_DIRECTLY_INTO_MELEE
	 *
	 * Hash: 0x1C6CD14A876FFE39 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C6CD14A876FFE39)
	 */
	putPedDirectlyIntoMelee(ped: Handle, meleeTarget: Handle, p2: number, p3: number, p4: number, p5: boolean): void;

	/**
	 * Native: TASK::TASK_RAPPEL_DOWN_WALL
	 *
	 * Hash: 0xEAF66ACDDC794793 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAF66ACDDC794793)
	 */
	rappelDownWall(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer,
		p9: integer,
		p10: integer
	): void;

	/**
	 * Native: TASK::TASK_RAPPEL_FROM_HELI
	 *
	 * Hash: 0x09693B0312F91649 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x09693B0312F91649)
	 */
	rappelFromHeli(ped: Handle, p1: number): void;

	/**
	 * Native: TASK::TASK_REACT_AND_FLEE_PED
	 *
	 * Hash: 0x72C896464915D1B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72C896464915D1B1)
	 */
	reactAndFleePed(ped: Handle, fleeTarget: Handle): void;

	/**
	 * Native: TASK::TASK_RELOAD_WEAPON
	 *
	 * Hash: 0x62D2916F56B9CD2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62D2916F56B9CD2D)
	 */
	reloadWeapon(ped: Handle, unused: boolean): void;

	/**
	 * Native: TASK::REMOVE_ALL_COVER_BLOCKING_AREAS
	 *
	 * Hash: 0xDB6708C0B46F56D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB6708C0B46F56D8)
	 */
	removeAllCoverBlockingAreas(): void;

	/**
	 * Native: TASK::REMOVE_COVER_POINT
	 *
	 * Hash: 0xAE287C923D891715 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE287C923D891715)
	 */
	removeCoverPoint(coverpoint: Handle): void;

	/**
	 * Native: TASK::REMOVE_WAYPOINT_RECORDING
	 *
	 * Hash: 0xFF1B8B4AA1C25DC8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF1B8B4AA1C25DC8)
	 */
	removeWaypointRecording(name: string): void;

	/**
	 * Native: TASK::REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION
	 *
	 * Hash: 0xD01015C7316AE176 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD01015C7316AE176)
	 */
	requestMoveNetworkStateTransition(ped: Handle, name: string): boolean;

	/**
	 * Native: TASK::REQUEST_WAYPOINT_RECORDING
	 *
	 * Hash: 0x9EEFB62EB27B5792 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EEFB62EB27B5792)
	 */
	requestWaypointRecording(name: string): void;

	/**
	 * Native: TASK::RESET_EXCLUSIVE_SCENARIO_GROUP
	 *
	 * Hash: 0x4202BBCB8684563D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4202BBCB8684563D)
	 */
	resetExclusiveScenarioGroup(): void;

	/**
	 * Native: TASK::RESET_SCENARIO_GROUPS_ENABLED
	 *
	 * Hash: 0xDD902D0349AFAD3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD902D0349AFAD3A)
	 */
	resetScenarioGroupsEnabled(): void;

	/**
	 * Native: TASK::RESET_SCENARIO_TYPES_ENABLED
	 *
	 * Hash: 0x0D40EE2A7F2B2D6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D40EE2A7F2B2D6D)
	 */
	resetScenarioTypesEnabled(): void;

	/**
	 * Native: TASK::TASK_SCRIPTED_ANIMATION
	 *
	 * Hash: 0x126EF75F1E17ABE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x126EF75F1E17ABE5)
	 */
	scriptedAnimation(ped: Handle, p4: number, p5: number): TaskScriptedAnimationResult;

	/**
	 * Native: TASK::TASK_SEEK_COVER_FROM_PED
	 *
	 * Hash: 0x84D32B3BEC531324 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84D32B3BEC531324)
	 */
	seekCoverFromPed(ped: Handle, target: Handle, duration: integer, p3: boolean): void;

	/**
	 * Native: TASK::TASK_SEEK_COVER_FROM_POS
	 *
	 * Hash: 0x75AC2B60386D89F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75AC2B60386D89F2)
	 */
	seekCoverFromPos(ped: Handle, x: number, y: number, z: number, duration: integer, p5: boolean): void;

	/**
	 * Native: TASK::TASK_SEEK_COVER_TO_COORDS
	 *
	 * Hash: 0x39246A6958EF072C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39246A6958EF072C)
	 */
	seekCoverToCoords(
		ped: Handle,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		p7: integer,
		p8: boolean
	): void;

	/**
	 * Native: TASK::TASK_SEEK_COVER_TO_COVER_POINT
	 *
	 * Hash: 0xD43D95C7A869447F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD43D95C7A869447F)
	 */
	seekCoverToCoverPoint(p0: integer, p1: integer, p2: number, p3: number, p4: number, p5: integer, p6: boolean): void;

	/**
	 * Native: TASK::SET_ANIM_LOOPED
	 *
	 * Hash: 0x70033C3CC29A1FF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70033C3CC29A1FF4)
	 */
	setAnimLooped(p0: integer, p1: boolean, p2: integer, p3: boolean): void;

	/**
	 * Native: TASK::_SET_ANIM_PLAYBACK_TIME
	 *
	 * Hash: 0xDDF3CB5A0A4C0B49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDF3CB5A0A4C0B49)
	 */
	setAnimPlaybackTime(entity: Handle, p1: number, p2: integer, p3: boolean): void;

	/**
	 * Native: TASK::SET_ANIM_RATE
	 *
	 * Hash: 0x032D49C5E359C847 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x032D49C5E359C847)
	 */
	setAnimRate(p0: integer, p1: number, p2: integer, p3: boolean): void;

	/**
	 * Native: TASK::SET_ANIM_WEIGHT
	 *
	 * Hash: 0x207F1A47C0342F48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x207F1A47C0342F48)
	 */
	setAnimWeight(p0: integer, p1: number, p2: integer, p3: integer, p4: boolean): void;

	/**
	 * Native: TASK::TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS
	 *
	 * Hash: 0x90D2156198831D69 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90D2156198831D69)
	 */
	setBlockingOfNonTemporaryEvents(ped: Handle, toggle: boolean): void;

	/**
	 * Native: TASK::TASK_SET_DECISION_MAKER
	 *
	 * Hash: 0xEB8517DDA73720DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB8517DDA73720DA)
	 */
	setDecisionMaker(ped: Handle, p1: integer): void;

	/**
	 * Native: TASK::SET_DRIVEBY_TASK_TARGET
	 *
	 * Hash: 0xE5B302114D8162EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5B302114D8162EE)
	 */
	setDrivebyTarget(
		shootingPed: Handle,
		targetPed: Handle,
		targetVehicle: Handle,
		x: number,
		y: number,
		z: number
	): void;

	/**
	 * Native: TASK::SET_DRIVE_TASK_CRUISE_SPEED
	 *
	 * Hash: 0x5C9B84BD7D31D908 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C9B84BD7D31D908)
	 */
	setDriveCruiseSpeed(driver: Handle, cruiseSpeed: number): void;

	/**
	 * Native: TASK::SET_DRIVE_TASK_DRIVING_STYLE
	 *
	 * Hash: 0xDACE1BE37D88AF67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDACE1BE37D88AF67)
	 */
	setDriveDrivingStyle(ped: Handle, drivingStyle: integer): void;

	/**
	 * Native: TASK::SET_DRIVE_TASK_MAX_CRUISE_SPEED
	 *
	 * Hash: 0x404A5AA9B9F0B746 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x404A5AA9B9F0B746)
	 */
	setDriveMaxCruiseSpeed(p0: integer, p1: number): void;

	/**
	 * Native: TASK::SET_EXCLUSIVE_SCENARIO_GROUP
	 *
	 * Hash: 0x535E97E1F7FC0C6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x535E97E1F7FC0C6A)
	 */
	setExclusiveScenarioGroup(scenarioGroup: string): void;

	/**
	 * Native: TASK::SET_GLOBAL_MIN_BIRD_FLIGHT_HEIGHT
	 *
	 * Hash: 0x6C6B148586F934F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C6B148586F934F7)
	 */
	setGlobalMinBirdFlightHeight(height: number): void;

	/**
	 * Native: TASK::SET_HIGH_FALL_TASK
	 *
	 * Hash: 0x8C825BDC7741D37C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C825BDC7741D37C)
	 */
	setHighFall(ped: Handle, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::SET_MOUNTED_WEAPON_TARGET
	 *
	 * Hash: 0xCCD892192C6D2BB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCD892192C6D2BB9)
	 */
	setMountedWeaponTarget(
		shootingPed: Handle,
		targetPed: Handle,
		targetVehicle: Handle,
		x: number,
		y: number,
		z: number,
		p6: integer,
		p7: integer
	): void;

	/**
	 * Native: TASK::SET_TASK_MOVE_NETWORK_SIGNAL_BOOL
	 *
	 * Hash: 0xB0A6CFD2C69C1088 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0A6CFD2C69C1088)
	 */
	setMoveNetworkSignalBool(ped: Handle, signalName: string, value: boolean): void;

	/**
	 * Native: TASK::SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT
	 *
	 * Hash: 0xD5BB4025AE449A4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5BB4025AE449A4E)
	 */
	setMoveNetworkSignalFloat(ped: Handle, signalName: string, value: number): void;

	/**
	 * Native: TASK::_SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT_2
	 *
	 * Hash: 0x373EF409B82697A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x373EF409B82697A3)
	 */
	setMoveNetworkSignalFloat2(ped: Handle, signalName: string, value: number): void;

	/**
	 * Native: TASK::SET_NEXT_DESIRED_MOVE_STATE
	 *
	 * Hash: 0xF1B9F16E89E2C93A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1B9F16E89E2C93A)
	 */
	setNextDesiredMoveState(p0: number): void;

	/**
	 * Native: TASK::SET_PARACHUTE_TASK_TARGET
	 *
	 * Hash: 0xC313379AF0FCEDA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC313379AF0FCEDA7)
	 */
	setParachuteTarget(ped: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::SET_PARACHUTE_TASK_THRUST
	 *
	 * Hash: 0x0729BAC1B8C64317 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0729BAC1B8C64317)
	 */
	setParachuteThrust(ped: Handle, thrust: number): void;

	/**
	 * Native: TASK::SET_PED_CAN_PLAY_AMBIENT_IDLES
	 *
	 * Hash: 0x8FD89A6240813FD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FD89A6240813FD0)
	 */
	setPedCanPlayAmbientIdles(ped: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: TASK::SET_PED_DESIRED_MOVE_BLEND_RATIO
	 *
	 * Hash: 0x1E982AC8716912C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E982AC8716912C5)
	 */
	setPedDesiredMoveBlendRatio(ped: Handle, p1: number): void;

	/**
	 * Native: TASK::SET_PED_PATH_AVOID_FIRE
	 *
	 * Hash: 0x4455517B28441E60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4455517B28441E60)
	 */
	setPedPathAvoidFire(ped: Handle, avoidFire: boolean): void;

	/**
	 * Native: TASK::SET_PED_PATH_CAN_DROP_FROM_HEIGHT
	 *
	 * Hash: 0xE361C5C71C431A4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE361C5C71C431A4F)
	 */
	setPedPathCanDropFromHeight(ped: Handle, Toggle: boolean): void;

	/**
	 * Native: TASK::SET_PED_PATH_CAN_USE_CLIMBOVERS
	 *
	 * Hash: 0x8E06A6FE76C9EFF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E06A6FE76C9EFF4)
	 */
	setPedPathCanUseClimbovers(ped: Handle, Toggle: boolean): void;

	/**
	 * Native: TASK::SET_PED_PATH_CAN_USE_LADDERS
	 *
	 * Hash: 0x77A5B103C87F476E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77A5B103C87F476E)
	 */
	setPedPathCanUseLadders(ped: Handle, Toggle: boolean): void;

	/**
	 * Native: TASK::SET_PED_PATH_CLIMB_COST_MODIFIER
	 *
	 * Hash: 0x88E32DB8C1A4AA4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88E32DB8C1A4AA4B)
	 */
	setPedPathClimbCostModifier(ped: Handle, modifier: number): void;

	/**
	 * Native: TASK::SET_PED_PATH_MAY_ENTER_WATER
	 *
	 * Hash: 0xF35425A4204367EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF35425A4204367EC)
	 */
	setPedPathMayEnterWater(ped: Handle, mayEnterWater: boolean): void;

	/**
	 * Native: TASK::SET_PED_PATH_PREFER_TO_AVOID_WATER
	 *
	 * Hash: 0x38FE1EC73743793C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38FE1EC73743793C)
	 */
	setPedPathPreferToAvoidWater(ped: Handle, avoidWater: boolean): void;

	/**
	 * Native: TASK::SET_PED_WAYPOINT_ROUTE_OFFSET
	 *
	 * Hash: 0xED98E10B0AFCE4B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED98E10B0AFCE4B4)
	 */
	setPedWaypointRouteOffset(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: TASK::SET_SCENARIO_GROUP_ENABLED
	 *
	 * Hash: 0x02C8E5B49848664E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02C8E5B49848664E)
	 */
	setScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;

	/**
	 * Native: TASK::SET_SCENARIO_TYPE_ENABLED
	 *
	 * Hash: 0xEB47EC4E34FB7EE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB47EC4E34FB7EE1)
	 */
	setScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;

	/**
	 * Native: TASK::SET_SEQUENCE_TO_REPEAT
	 *
	 * Hash: 0x58C70CF3A41E4AE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58C70CF3A41E4AE7)
	 */
	setSequenceToRepeat(taskSequenceId: integer, repeat: boolean): void;

	/**
	 * Native: TASK::TASK_SET_SPHERE_DEFENSIVE_AREA
	 *
	 * Hash: 0x933C06518B52A9A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x933C06518B52A9A4)
	 */
	setSphereDefensiveArea(p0: integer, p1: number, p2: number, p3: number, p4: number): void;

	/**
	 * Native: TASK::SET_TASK_VEHICLE_CHASE_BEHAVIOR_FLAG
	 *
	 * Hash: 0xCC665AAC360D31E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC665AAC360D31E7)
	 */
	setVehicleChaseBehaviorFlag(ped: Handle, flag: integer, set: boolean): void;

	/**
	 * Native: TASK::SET_TASK_VEHICLE_CHASE_IDEAL_PURSUIT_DISTANCE
	 *
	 * Hash: 0x639B642FACBE4EDD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x639B642FACBE4EDD)
	 */
	setVehicleChaseIdealPursuitDistance(ped: Handle, distance: number): void;

	/**
	 * Native: TASK::TASK_SHOCKING_EVENT_REACT
	 *
	 * Hash: 0x452419CBD838065B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x452419CBD838065B)
	 */
	shockingEventReact(ped: Handle, eventHandle: integer): void;

	/**
	 * Native: TASK::TASK_SHOOT_AT_COORD
	 *
	 * Hash: 0x46A6CC01E0826106 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46A6CC01E0826106)
	 */
	shootAtCoord(ped: Handle, x: number, y: number, z: number, duration: integer, firingPattern: integer): void;

	/**
	 * Native: TASK::TASK_SHOOT_AT_ENTITY
	 *
	 * Hash: 0x08DA95E8298AE772 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x08DA95E8298AE772)
	 */
	shootAtEntity(entity: Handle, target: Handle, duration: integer, firingPattern: integer): void;

	/**
	 * Native: TASK::TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT
	 *
	 * Hash: 0x7AA80209BDA643EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AA80209BDA643EB)
	 */
	shuffleToNextVehicleSeat(ped: Handle, vehicle: Handle, p2: integer): void;

	/**
	 * Native: TASK::TASK_SKY_DIVE
	 *
	 * Hash: 0x601736CFE536B0A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x601736CFE536B0A0)
	 */
	skyDive(ped: Handle, p1: boolean): void;

	/**
	 * Native: TASK::TASK_SMART_FLEE_COORD
	 *
	 * Hash: 0x94587F17E9C365D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94587F17E9C365D5)
	 */
	smartFleeCoord(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		distance: number,
		time: integer,
		p6: boolean,
		p7: boolean
	): void;

	/**
	 * Native: TASK::TASK_SMART_FLEE_PED
	 *
	 * Hash: 0x22B0D0E37CCB840D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22B0D0E37CCB840D)
	 */
	smartFleePed(ped: Handle, fleeTarget: Handle, distance: number, fleeTime: integer, p4: boolean, p5: boolean): void;

	/**
	 * Native: TASK::TASK_STAND_GUARD
	 *
	 * Hash: 0xAE032F8BBA959E90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE032F8BBA959E90)
	 */
	standGuard(ped: Handle, x: number, y: number, z: number, heading: number, scenarioName: string): void;

	/**
	 * Native: TASK::TASK_STAND_STILL
	 *
	 * Hash: 0x919BE13EED931959 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x919BE13EED931959)
	 */
	standStill(ped: Handle, time: integer): void;

	/**
	 * Native: TASK::TASK_START_SCENARIO_AT_POSITION
	 *
	 * Hash: 0xFA4EFC79F69D4F07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA4EFC79F69D4F07)
	 */
	startScenarioAtPosition(
		ped: Handle,
		scenarioName: string,
		x: number,
		y: number,
		z: number,
		heading: number,
		duration: integer,
		sittingScenario: boolean,
		teleport: boolean
	): void;

	/**
	 * Native: TASK::TASK_START_SCENARIO_IN_PLACE
	 *
	 * Hash: 0x142A02425FF02BD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x142A02425FF02BD9)
	 */
	startScenarioInPlace(ped: Handle, scenarioName: string, unkDelay: integer, playEnterAnim: boolean): void;

	/**
	 * Native: TASK::TASK_STAY_IN_COVER
	 *
	 * Hash: 0xE5DA8615A6180789 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5DA8615A6180789)
	 */
	stayInCover(ped: Handle): void;

	/**
	 * Native: TASK::TASK_STEALTH_KILL
	 *
	 * Hash: 0xAA5DC05579D60BD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA5DC05579D60BD9)
	 */
	stealthKill(killer: Handle, target: Handle, actionType: integer, p3: number, p4: integer): void;

	/**
	 * Native: TASK::STOP_ANIM_TASK
	 *
	 * Hash: 0x97FF36A1D40EA00A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97FF36A1D40EA00A)
	 */
	stopAnim(ped: Handle, animDictionary: string, animationName: string, p3: number): void;

	/**
	 * Native: TASK::STOP_ANIM_PLAYBACK
	 *
	 * Hash: 0xEE08C992D238C5D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE08C992D238C5D1)
	 */
	stopAnimPlayback(ped: Handle, p1: integer, p2: boolean): void;

	/**
	 * Native: TASK::TASK_STOP_PHONE_GESTURE_ANIMATION
	 *
	 * Hash: 0x3FA00D4F4641BFAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FA00D4F4641BFAE)
	 */
	stopPhoneGestureAnimation(ped: Handle, p1: integer): void;

	/**
	 * Native: TASK::TASK_SUBMARINE_GOTO_AND_STOP
	 *
	 * Hash: 0xC22B40579A498CA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC22B40579A498CA4)
	 */
	submarineGotoAndStop(p0: integer, submarine: Handle, x: number, y: number, z: number, p5: integer): void;

	/**
	 * Native: TASK::TASK_SWAP_WEAPON
	 *
	 * Hash: 0xA21C51255B205245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA21C51255B205245)
	 */
	swapWeapon(ped: Handle, p1: boolean): void;

	/**
	 * Native: TASK::TASK_SWEEP_AIM_ENTITY
	 *
	 * Hash: 0x2047C02158D6405A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2047C02158D6405A)
	 */
	sweepAimEntity(
		ped: Handle,
		anim: string,
		p2: string,
		p3: string,
		p4: string,
		p5: integer,
		vehicle: Handle,
		p7: number,
		p8: number
	): void;

	/**
	 * Native: TASK::TASK_SWEEP_AIM_POSITION
	 *
	 * Hash: 0x7AFE8FDC10BC07D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AFE8FDC10BC07D2)
	 */
	sweepAimPosition(
		p0: integer,
		p5: integer,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number
	): TaskSweepAimPositionResult;

	/**
	 * Native: TASK::TASK_SYNCHRONIZED_SCENE
	 *
	 * Hash: 0xEEA929141F699854 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEA929141F699854)
	 */
	synchronizedScene(
		ped: Handle,
		scene: integer,
		animDictionary: string,
		animationName: string,
		speed: number,
		speedMultiplier: number,
		duration: integer,
		flag: integer,
		playbackRate: number,
		p9: integer
	): void;

	/**
	 * Native: TASK::TASK_THROW_PROJECTILE
	 *
	 * Hash: 0x7285951DBF6B5A51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7285951DBF6B5A51)
	 */
	throwProjectile(ped: Handle, x: number, y: number, z: number, p4: integer, p5: integer): void;

	/**
	 * Native: TASK::TASK_TOGGLE_DUCK
	 *
	 * Hash: 0xAC96609B9995EDF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC96609B9995EDF8)
	 */
	toggleDuck(p0: boolean, p1: boolean): void;

	/**
	 * Native: TASK::TASK_TURN_PED_TO_FACE_COORD
	 *
	 * Hash: 0x1DDA930A0AC38571 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DDA930A0AC38571)
	 */
	turnPedToFaceCoord(ped: Handle, x: number, y: number, z: number, duration: integer): void;

	/**
	 * Native: TASK::TASK_TURN_PED_TO_FACE_ENTITY
	 *
	 * Hash: 0x5AD23D40115353AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AD23D40115353AC)
	 */
	turnPedToFaceEntity(ped: Handle, entity: Handle, duration: integer): void;

	/**
	 * Native: TASK::UNCUFF_PED
	 *
	 * Hash: 0x67406F2C8F87FC4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67406F2C8F87FC4F)
	 */
	uncuffPed(ped: Handle): void;

	/**
	 * Native: TASK::UPDATE_TASK_AIM_GUN_SCRIPTED_TARGET
	 *
	 * Hash: 0x9724FB59A3E72AD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9724FB59A3E72AD0)
	 */
	updateAimGunScriptedTarget(p0: Handle, p1: Handle, p2: number, p3: number, p4: number, p5: boolean): void;

	/**
	 * Native: TASK::UPDATE_TASK_HANDS_UP_DURATION
	 *
	 * Hash: 0xA98FCAFD7893C834 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA98FCAFD7893C834)
	 */
	updateHandsUpDuration(ped: Handle, duration: integer): void;

	/**
	 * Native: TASK::UPDATE_TASK_SWEEP_AIM_ENTITY
	 *
	 * Hash: 0xE4973DBDBE6E44B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4973DBDBE6E44B3)
	 */
	updateSweepAimEntity(ped: Handle, entity: Handle): void;

	/**
	 * Native: TASK::UPDATE_TASK_SWEEP_AIM_POSITION
	 *
	 * Hash: 0xBB106883F5201FC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB106883F5201FC4)
	 */
	updateSweepAimPosition(p0: integer, p1: number, p2: number, p3: number): void;

	/**
	 * Native: TASK::TASK_USE_MOBILE_PHONE
	 *
	 * Hash: 0xBD2A8EC3AF4DE7DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD2A8EC3AF4DE7DB)
	 */
	useMobilePhone(ped: Handle, p1: integer, p2: integer): void;

	/**
	 * Native: TASK::TASK_USE_MOBILE_PHONE_TIMED
	 *
	 * Hash: 0x5EE02954A14C69DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EE02954A14C69DB)
	 */
	useMobilePhoneTimed(ped: Handle, duration: integer): void;

	/**
	 * Native: TASK::TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD
	 *
	 * Hash: 0x9FDA1B3D7E7028B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FDA1B3D7E7028B3)
	 */
	useNearestScenarioChainToCoord(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: integer): void;

	/**
	 * Native: TASK::TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD_WARP
	 *
	 * Hash: 0x97A28E63F0BA5631 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97A28E63F0BA5631)
	 */
	useNearestScenarioChainToCoordWarp(p0: integer, p1: number, p2: number, p3: number, p4: number, p5: integer): void;

	/**
	 * Native: TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD
	 *
	 * Hash: 0x277F471BA9DB000B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x277F471BA9DB000B)
	 */
	useNearestScenarioToCoord(ped: Handle, x: number, y: number, z: number, distance: number, duration: integer): void;

	/**
	 * Native: TASK::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP
	 *
	 * Hash: 0x58E2E0F23F6B76C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58E2E0F23F6B76C3)
	 */
	useNearestScenarioToCoordWarp(ped: Handle, x: number, y: number, z: number, radius: number, p5: integer): void;

	/**
	 * Native: TASK::USE_WAYPOINT_RECORDING_AS_ASSISTED_MOVEMENT_ROUTE
	 *
	 * Hash: 0x5A353B8E6B1095B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A353B8E6B1095B5)
	 */
	useWaypointRecordingAsAssistedMovementRoute(name: string, p1: boolean, p2: number, p3: number): void;

	/**
	 * Native: TASK::TASK_VEHICLE_AIM_AT_COORD
	 *
	 * Hash: 0x447C1E9EF844BC0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x447C1E9EF844BC0F)
	 */
	vehicleAimAtCoord(ped: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: TASK::TASK_VEHICLE_AIM_AT_PED
	 *
	 * Hash: 0xE41885592B08B097 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE41885592B08B097)
	 */
	vehicleAimAtPed(ped: Handle, target: Handle): void;

	/**
	 * Native: TASK::TASK_VEHICLE_CHASE
	 *
	 * Hash: 0x3C08A8E30363B353 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C08A8E30363B353)
	 */
	vehicleChase(driver: Handle, targetEnt: Handle): void;

	/**
	 * Native: TASK::TASK_VEHICLE_DRIVE_TO_COORD
	 *
	 * Hash: 0xE2A2AA2F659D77A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2A2AA2F659D77A7)
	 */
	vehicleDriveToCoord(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		p6: integer,
		vehicleModel: integer,
		drivingMode: integer,
		stopRange: number,
		p10: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_DRIVE_TO_COORD_LONGRANGE
	 *
	 * Hash: 0x158BB33F920D360C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x158BB33F920D360C)
	 */
	vehicleDriveToCoordLongrange(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		driveMode: integer,
		stopRange: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_DRIVE_WANDER
	 *
	 * Hash: 0x480142959D337D00 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x480142959D337D00)
	 */
	vehicleDriveWander(ped: Handle, vehicle: Handle, speed: number, drivingStyle: integer): void;

	/**
	 * Native: TASK::TASK_VEHICLE_ESCORT
	 *
	 * Hash: 0x0FA6E4B75F302400 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FA6E4B75F302400)
	 */
	vehicleEscort(
		ped: Handle,
		vehicle: Handle,
		targetVehicle: Handle,
		mode: integer,
		speed: number,
		drivingStyle: integer,
		minDistance: number,
		p7: integer,
		noRoadsDistance: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_FOLLOW
	 *
	 * Hash: 0xFC545A9F0626E3B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC545A9F0626E3B6)
	 */
	vehicleFollow(
		driver: Handle,
		vehicle: Handle,
		targetEntity: Handle,
		speed: number,
		drivingStyle: integer,
		minDistance: integer
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING
	 *
	 * Hash: 0x3123FAA6DB1CF7ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3123FAA6DB1CF7ED)
	 */
	vehicleFollowWaypointRecording(
		ped: Handle,
		vehicle: Handle,
		WPRecording: string,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: number,
		p8: boolean,
		p9: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_GOTO_NAVMESH
	 *
	 * Hash: 0x195AEEB13CEFE2EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x195AEEB13CEFE2EE)
	 */
	vehicleGotoNavmesh(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		speed: number,
		behaviorFlag: integer,
		stoppingRange: number
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_HELI_PROTECT
	 *
	 * Hash: 0x1E09C32048FEFD1C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E09C32048FEFD1C)
	 */
	vehicleHeliProtect(
		pilot: Handle,
		vehicle: Handle,
		entityToFollow: Handle,
		targetSpeed: number,
		p4: integer,
		radius: number,
		altitude: integer,
		p7: integer
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_MISSION
	 *
	 * Hash: 0x659427E0EF36BCDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x659427E0EF36BCDE)
	 */
	vehicleMission(
		driver: Handle,
		vehicle: Handle,
		vehicleTarget: Handle,
		missionType: integer,
		p4: number,
		p5: integer,
		p6: number,
		p7: number,
		DriveAgainstTraffic: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_MISSION_COORS_TARGET
	 *
	 * Hash: 0xF0AF20AA7731F8C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0AF20AA7731F8C3)
	 */
	vehicleMissionCoorsTarget(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: number,
		p9: number,
		DriveAgainstTraffic: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_MISSION_PED_TARGET
	 *
	 * Hash: 0x9454528DF15D657A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9454528DF15D657A)
	 */
	vehicleMissionPedTarget(
		ped: Handle,
		vehicle: Handle,
		pedTarget: Handle,
		missionType: integer,
		maxSpeed: number,
		drivingStyle: integer,
		minDistance: number,
		p7: number,
		DriveAgainstTraffic: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_PARK
	 *
	 * Hash: 0x0F3E34E968EA374E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F3E34E968EA374E)
	 */
	vehiclePark(
		ped: Handle,
		vehicle: Handle,
		x: number,
		y: number,
		z: number,
		heading: number,
		mode: integer,
		radius: number,
		keepEngineOn: boolean
	): void;

	/**
	 * Native: TASK::TASK_VEHICLE_PLAY_ANIM
	 *
	 * Hash: 0x69F5C3BD0F3EBD89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69F5C3BD0F3EBD89)
	 */
	vehiclePlayAnim(vehicle: Handle, animationSet: string, animationName: string): void;

	/**
	 * Native: TASK::TASK_VEHICLE_SHOOT_AT_COORD
	 *
	 * Hash: 0x5190796ED39C9B6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5190796ED39C9B6D)
	 */
	vehicleShootAtCoord(ped: Handle, x: number, y: number, z: number, p4: number): void;

	/**
	 * Native: TASK::TASK_VEHICLE_SHOOT_AT_PED
	 *
	 * Hash: 0x10AB107B887214D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10AB107B887214D8)
	 */
	vehicleShootAtPed(ped: Handle, target: Handle, p2: number): void;

	/**
	 * Native: TASK::TASK_VEHICLE_TEMP_ACTION
	 *
	 * Hash: 0xC429DCEEB339E129 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC429DCEEB339E129)
	 */
	vehicleTempAction(driver: Handle, vehicle: Handle, action: integer, time: integer): void;

	/**
	 * Native: TASK::VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED
	 *
	 * Hash: 0x121F0593E0A431D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x121F0593E0A431D7)
	 */
	vehicleWaypointPlaybackOverrideSpeed(vehicle: Handle, speed: number): void;

	/**
	 * Native: TASK::VEHICLE_WAYPOINT_PLAYBACK_PAUSE
	 *
	 * Hash: 0x8A4E6AC373666BC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A4E6AC373666BC5)
	 */
	vehicleWaypointPlaybackPause(vehicle: Handle): void;

	/**
	 * Native: TASK::VEHICLE_WAYPOINT_PLAYBACK_RESUME
	 *
	 * Hash: 0xDC04FCAA7839D492 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC04FCAA7839D492)
	 */
	vehicleWaypointPlaybackResume(vehicle: Handle): void;

	/**
	 * Native: TASK::VEHICLE_WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED
	 *
	 * Hash: 0x5CEB25A7D2848963 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CEB25A7D2848963)
	 */
	vehicleWaypointPlaybackUseDefaultSpeed(vehicle: Handle): void;

	/**
	 * Native: TASK::TASK_WANDER_IN_AREA
	 *
	 * Hash: 0xE054346CA3A0F315 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE054346CA3A0F315)
	 */
	wanderInArea(
		ped: Handle,
		x: number,
		y: number,
		z: number,
		radius: number,
		minimalLength: number,
		timeBetweenWalks: number
	): void;

	/**
	 * Native: TASK::TASK_WANDER_SPECIFIC
	 *
	 * Hash: 0x6919A2F136426098 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6919A2F136426098)
	 */
	wanderSpecific(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::TASK_WANDER_STANDARD
	 *
	 * Hash: 0xBB9CE077274F6A1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB9CE077274F6A1B)
	 */
	wanderStandard(ped: Handle, p1: number, p2: integer): void;

	/**
	 * Native: TASK::TASK_WARP_PED_INTO_VEHICLE
	 *
	 * Hash: 0x9A7D091411C5F684 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A7D091411C5F684)
	 */
	warpPedIntoVehicle(ped: Handle, vehicle: Handle, seat: integer): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_GET_IS_PAUSED
	 *
	 * Hash: 0x701375A7D43F01CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x701375A7D43F01CB)
	 */
	waypointPlaybackGetIsPaused(p0: integer): boolean;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_OVERRIDE_SPEED
	 *
	 * Hash: 0x7D7D2B47FA788E85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D7D2B47FA788E85)
	 */
	waypointPlaybackOverrideSpeed(p0: integer, p1: number, p2: boolean): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_PAUSE
	 *
	 * Hash: 0x0F342546AA06FED5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F342546AA06FED5)
	 */
	waypointPlaybackPause(p0: integer, p1: boolean, p2: boolean): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_RESUME
	 *
	 * Hash: 0x244F70C84C547D2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x244F70C84C547D2D)
	 */
	waypointPlaybackResume(p0: integer, p1: boolean, p2: integer, p3: integer): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_START_AIMING_AT_COORD
	 *
	 * Hash: 0x8968400D900ED8B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8968400D900ED8B3)
	 */
	waypointPlaybackStartAimingAtCoord(p0: integer, p1: number, p2: number, p3: number, p4: boolean): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_START_AIMING_AT_PED
	 *
	 * Hash: 0x20E330937C399D29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20E330937C399D29)
	 */
	waypointPlaybackStartAimingAtPed(p0: integer, p1: integer, p2: boolean): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_START_SHOOTING_AT_COORD
	 *
	 * Hash: 0x057A25CFCC9DB671 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x057A25CFCC9DB671)
	 */
	waypointPlaybackStartShootingAtCoord(p0: integer, p1: number, p2: number, p3: number, p4: boolean, p5: integer): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_START_SHOOTING_AT_PED
	 *
	 * Hash: 0xE70BA7B90F8390DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE70BA7B90F8390DC)
	 */
	waypointPlaybackStartShootingAtPed(p0: integer, p1: integer, p2: boolean, p3: integer): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_STOP_AIMING_OR_SHOOTING
	 *
	 * Hash: 0x47EFA040EBB8E2EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47EFA040EBB8E2EA)
	 */
	waypointPlaybackStopAimingOrShooting(p0: integer): void;

	/**
	 * Native: TASK::WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED
	 *
	 * Hash: 0x6599D834B12D0800 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6599D834B12D0800)
	 */
	waypointPlaybackUseDefaultSpeed(p0: integer): void;

	/**
	 * Native: TASK::WAYPOINT_RECORDING_GET_CLOSEST_WAYPOINT
	 *
	 * Hash: 0xB629A298081F876F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB629A298081F876F)
	 */
	waypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number): integer;

	/**
	 * Native: TASK::WAYPOINT_RECORDING_GET_COORD
	 *
	 * Hash: 0x2FB897405C90B361 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FB897405C90B361)
	 */
	waypointRecordingGetCoord(name: string, point: integer): Vector3Mp;

	/**
	 * Native: TASK::WAYPOINT_RECORDING_GET_NUM_POINTS
	 *
	 * Hash: 0x5343532C01A07234 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5343532C01A07234)
	 */
	waypointRecordingGetNumPoints(name: string): integer;

	/**
	 * Native: TASK::WAYPOINT_RECORDING_GET_SPEED_AT_POINT
	 *
	 * Hash: 0x005622AEBC33ACA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x005622AEBC33ACA9)
	 */
	waypointRecordingGetSpeedAtPoint(name: string, point: integer): number;

	/**
	 * Native: TASK::TASK_WRITHE
	 *
	 * Hash: 0xCDDC2B77CE54AC6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCDDC2B77CE54AC6E)
	 */
	writhe(ped: Handle, target: Handle, time: integer, p3: integer, p4: integer, p5: integer): void;

	unk: GameTaskUnk;
}

interface GameTaskMp extends GameTask {}
