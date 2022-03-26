/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GenerateDirectionsToCoordResult {
	direction: integer;
	p5: number;
	distToNxJunction: number;
	result: integer;
}

interface GetClosestRoadResult {
	p5: Vector3Mp;
	p6: Vector3Mp;
	p7: integer;
	p8: integer;
	p9: number;
	result: integer;
}

interface GetClosestVehicleNodeWithHeadingResult {
	outPosition: Vector3Mp;
	outHeading: number;
	result: boolean;
}

interface GetNthClosestVehicleNodeFavourDirectionResult {
	outPosition: Vector3Mp;
	outHeading: number;
	result: boolean;
}

interface GetNthClosestVehicleNodeIdWithHeadingResult {
	outPosition: Vector3Mp;
	outHeading: number;
	result: integer;
}

interface GetNthClosestVehicleNodeWithHeadingResult {
	outPosition: Vector3Mp;
	outHeading: number;
	unknown1: integer;
	result: boolean;
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

interface GetVehicleNodePropertiesResult {
	density: integer;
	flags: integer;
	result: boolean;
}

interface GamePathfindLegacy {
	/**
	 * Native: PATHFIND::GET_VEHICLE_NODE_IS_SWITCHED_OFF
	 *
	 * Hash: 0x4F5070AA58F69279 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F5070AA58F69279)
	 */
	getIsSlowRoadFlag(nodeID: integer): boolean;

	/**
	 * Native: PATHFIND::GET_VEHICLE_NODE_IS_GPS_ALLOWED
	 *
	 * Hash: 0xA2AE5C478B96E3B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2AE5C478B96E3B6)
	 */
	getSupportsGpsRouteFlag(nodeID: integer): boolean;
}

interface GamePathfindUnk {
	/**
	 * Native: PATHFIND::_0x01708E8DD3FF8C65
	 *
	 * Hash: 0x01708E8DD3FF8C65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01708E8DD3FF8C65)
	 */
	_0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): integer;

	/**
	 * Native: PATHFIND::_0xAA76052DDA9BFC3E
	 *
	 * Hash: 0xAA76052DDA9BFC3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA76052DDA9BFC3E)
	 */
	_0xAA76052DDA9BFC3E(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: PATHFIND::_0xF3162836C28F9DA5
	 *
	 * Hash: 0xF3162836C28F9DA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3162836C28F9DA5)
	 */
	_0xF3162836C28F9DA5(p0: integer, p1: integer, p2: integer, p3: integer): integer;
}

interface GamePathfind extends GamePathfindLegacy {
	/**
	 * Native: PATHFIND::ADD_NAVMESH_BLOCKING_OBJECT
	 *
	 * Hash: 0xFCD5C8E06E502F5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCD5C8E06E502F5A)
	 */
	addNavmeshBlockingObject(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: boolean,
		p8: integer
	): integer;

	/**
	 * Native: PATHFIND::ADD_NAVMESH_REQUIRED_REGION
	 *
	 * Hash: 0x387EAD7EE42F6685 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x387EAD7EE42F6685)
	 */
	addNavmeshRequiredRegion(x: number, y: number, radius: number): void;

	/**
	 * Native: PATHFIND::ARE_ALL_NAVMESH_REGIONS_LOADED
	 *
	 * Hash: 0x8415D95B194A3AEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8415D95B194A3AEA)
	 */
	areAllNavmeshRegionsLoaded(): boolean;

	/**
	 * Native: PATHFIND::ARE_NODES_LOADED_FOR_AREA
	 *
	 * Hash: 0xF7B79A50B905A30D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7B79A50B905A30D)
	 */
	areNodesLoadedForArea(x1: number, y1: number, x2: number, y2: number): boolean;

	/**
	 * Native: PATHFIND::CALCULATE_TRAVEL_DISTANCE_BETWEEN_POINTS
	 *
	 * Hash: 0xADD95C7005C4A197 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADD95C7005C4A197)
	 */
	calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

	/**
	 * Native: PATHFIND::CLEAR_GPS_DISABLED_ZONE_AT_INDEX
	 *
	 * Hash: 0x2801D0012266DF07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2801D0012266DF07)
	 */
	clearGpsDisabledZoneAtIndex(index: integer): void;

	/**
	 * Native: PATHFIND::DISABLE_NAVMESH_IN_AREA
	 *
	 * Hash: 0x4C8872D8CDBE1B8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C8872D8CDBE1B8B)
	 */
	disableNavmeshInArea(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: PATHFIND::DOES_NAVMESH_BLOCKING_OBJECT_EXIST
	 *
	 * Hash: 0x0EAEB0DB4B132399 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EAEB0DB4B132399)
	 */
	doesNavmeshBlockingObjectExist(p0: integer): boolean;

	/**
	 * Native: PATHFIND::GENERATE_DIRECTIONS_TO_COORD
	 *
	 * Hash: 0xF90125F1F79ECDF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF90125F1F79ECDF8)
	 */
	generateDirectionsToCoord(x: number, y: number, z: number, p3: boolean): GenerateDirectionsToCoordResult;

	/**
	 * Native: PATHFIND::GET_APPROX_FLOOR_FOR_AREA
	 *
	 * Hash: 0x3599D741C9AC6310 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3599D741C9AC6310)
	 */
	getApproxFloorForArea(x1: number, y1: number, x2: number, y2: number): number;

	/**
	 * Native: PATHFIND::GET_APPROX_FLOOR_FOR_POINT
	 *
	 * Hash: 0x336511A34F2E5185 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x336511A34F2E5185)
	 */
	getApproxFloorForPoint(x: number, y: number): number;

	/**
	 * Native: PATHFIND::GET_APPROX_HEIGHT_FOR_AREA
	 *
	 * Hash: 0x8ABE8608576D9CE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8ABE8608576D9CE3)
	 */
	getApproxHeightForArea(x1: number, y1: number, x2: number, y2: number): number;

	/**
	 * Native: PATHFIND::GET_APPROX_HEIGHT_FOR_POINT
	 *
	 * Hash: 0x29C24BFBED8AB8FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29C24BFBED8AB8FB)
	 */
	getApproxHeightForPoint(x: number, y: number): number;

	/**
	 * Native: PATHFIND::GET_CLOSEST_MAJOR_VEHICLE_NODE
	 *
	 * Hash: 0x2EABE3B06F58C1BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2EABE3B06F58C1BE)
	 */
	getClosestMajorVehicleNode(x: number, y: number, z: number, unknown1: number, unknown2: integer): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_CLOSEST_ROAD
	 *
	 * Hash: 0x132F52BBA570FE92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x132F52BBA570FE92)
	 */
	getClosestRoad(x: number, y: number, z: number, p3: number, p4: integer, p10: boolean): GetClosestRoadResult;

	/**
	 * Native: PATHFIND::GET_CLOSEST_VEHICLE_NODE
	 *
	 * Hash: 0x240A18690AE96513 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x240A18690AE96513)
	 */
	getClosestVehicleNode(x: number, y: number, z: number, nodeType: integer, p5: number, p6: number): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_CLOSEST_VEHICLE_NODE_WITH_HEADING
	 *
	 * Hash: 0xFF071FB798B803B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF071FB798B803B0)
	 */
	getClosestVehicleNodeWithHeading(
		x: number,
		y: number,
		z: number,
		nodeType: integer,
		p6: number,
		p7: integer
	): GetClosestVehicleNodeWithHeadingResult;

	/**
	 * Native: PATHFIND::GET_GPS_BLIP_ROUTE_FOUND
	 *
	 * Hash: 0x869DAACBBE9FA006 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x869DAACBBE9FA006)
	 */
	getGpsBlipRouteFound(): boolean;

	/**
	 * Native: PATHFIND::GET_GPS_BLIP_ROUTE_LENGTH
	 *
	 * Hash: 0xBBB45C3CF5C8AA85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBB45C3CF5C8AA85)
	 */
	getGpsBlipRouteLength(): integer;

	/**
	 * Native: PATHFIND::GET_NEXT_GPS_DISABLED_ZONE_INDEX
	 *
	 * Hash: 0xD3A6A0EF48823A8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3A6A0EF48823A8C)
	 */
	getNextGpsDisabledZoneIndex(): integer;

	/**
	 * Native: PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE
	 *
	 * Hash: 0xE50E52416CCF948B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE50E52416CCF948B)
	 */
	getNthClosestVehicleNode(
		x: number,
		y: number,
		z: number,
		nthClosest: integer,
		unknown1: integer,
		unknown2: integer,
		unknown3: integer
	): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION
	 *
	 * Hash: 0x45905BE8654AE067 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45905BE8654AE067)
	 */
	getNthClosestVehicleNodeFavourDirection(
		x: number,
		y: number,
		z: number,
		desiredX: number,
		desiredY: number,
		desiredZ: number,
		nthClosest: integer,
		nodetype: integer,
		p10: number,
		p11: integer
	): GetNthClosestVehicleNodeFavourDirectionResult;

	/**
	 * Native: PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE_ID
	 *
	 * Hash: 0x22D7275A79FE8215 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22D7275A79FE8215)
	 */
	getNthClosestVehicleNodeId(
		x: number,
		y: number,
		z: number,
		nth: integer,
		nodetype: integer,
		p5: number,
		p6: number
	): integer;

	/**
	 * Native: PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE_ID_WITH_HEADING
	 *
	 * Hash: 0x6448050E9C2A7207 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6448050E9C2A7207)
	 */
	getNthClosestVehicleNodeIdWithHeading(
		x: number,
		y: number,
		z: number,
		nthClosest: integer,
		p6: integer,
		p7: number,
		p8: number
	): GetNthClosestVehicleNodeIdWithHeadingResult;

	/**
	 * Native: PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING
	 *
	 * Hash: 0x80CA6A8B6C094CC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80CA6A8B6C094CC4)
	 */
	getNthClosestVehicleNodeWithHeading(
		x: number,
		y: number,
		z: number,
		nthClosest: integer,
		unknown2: integer,
		unknown3: number,
		unknown4: number
	): GetNthClosestVehicleNodeWithHeadingResult;

	/**
	 * Native: PATHFIND::_GET_POINT_ON_ROAD_SIDE
	 *
	 * Hash: 0x16F46FB18C8009E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16F46FB18C8009E4)
	 */
	getPointOnRoadSide(x: number, y: number, z: number, p3: integer): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_RANDOM_VEHICLE_NODE
	 *
	 * Hash: 0x93E0DB8440B73A7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93E0DB8440B73A7D)
	 */
	getRandomVehicleNode(
		x: number,
		y: number,
		z: number,
		radius: number,
		p4: boolean,
		p5: boolean,
		p6: boolean
	): GetRandomVehicleNodeResult;

	/**
	 * Native: PATHFIND::_GET_ROAD_SIDE_POINT_WITH_HEADING
	 *
	 * Hash: 0xA0F8A7517A273C05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0F8A7517A273C05)
	 */
	getRoadSidePointWithHeading(x: number, y: number, z: number, heading: number): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_SAFE_COORD_FOR_PED
	 *
	 * Hash: 0xB61C8E878A4199CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB61C8E878A4199CA)
	 */
	getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: integer): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_STREET_NAME_AT_COORD
	 *
	 * Hash: 0x2EB41072B4C1E4C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2EB41072B4C1E4C0)
	 */
	getStreetNameAtCoord(x: number, y: number, z: number): GetStreetNameAtCoordResult;

	/**
	 * Native: PATHFIND::GET_VEHICLE_NODE_IS_GPS_ALLOWED
	 *
	 * Hash: 0xA2AE5C478B96E3B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2AE5C478B96E3B6)
	 */
	getVehicleNodeIsGpsAllowed(nodeID: integer): boolean;

	/**
	 * Native: PATHFIND::GET_VEHICLE_NODE_IS_SWITCHED_OFF
	 *
	 * Hash: 0x4F5070AA58F69279 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F5070AA58F69279)
	 */
	getVehicleNodeIsSwitchedOff(nodeID: integer): boolean;

	/**
	 * Native: PATHFIND::GET_VEHICLE_NODE_POSITION
	 *
	 * Hash: 0x703123E5E7D429C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x703123E5E7D429C2)
	 */
	getVehicleNodePosition(nodeId: integer): Vector3Mp;

	/**
	 * Native: PATHFIND::GET_VEHICLE_NODE_PROPERTIES
	 *
	 * Hash: 0x0568566ACBB5DEDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0568566ACBB5DEDC)
	 */
	getVehicleNodeProperties(x: number, y: number, z: number): GetVehicleNodePropertiesResult;

	/**
	 * Native: PATHFIND::IS_NAVMESH_LOADED_IN_AREA
	 *
	 * Hash: 0xF813C7E63F9062A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF813C7E63F9062A5)
	 */
	isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

	/**
	 * Native: PATHFIND::_IS_NAVMESH_REQUIRED_REGION_OWNED_BY_ANY_THREAD
	 *
	 * Hash: 0x705A844002B39DC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x705A844002B39DC0)
	 */
	isNavmeshRequiredRegionOwnedByAnyThread(): boolean;

	/**
	 * Native: PATHFIND::IS_POINT_ON_ROAD
	 *
	 * Hash: 0x125BF4ABFC536B09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x125BF4ABFC536B09)
	 */
	isPointOnRoad(x: number, y: number, z: number, vehicle: Handle): boolean;

	/**
	 * Native: PATHFIND::IS_VEHICLE_NODE_ID_VALID
	 *
	 * Hash: 0x1EAF30FCFBF5AF74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EAF30FCFBF5AF74)
	 */
	isVehicleNodeIdValid(vehicleNodeId: integer): boolean;

	/**
	 * Native: PATHFIND::REMOVE_NAVMESH_BLOCKING_OBJECT
	 *
	 * Hash: 0x46399A7895957C0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46399A7895957C0E)
	 */
	removeNavmeshBlockingObject(p0: integer): void;

	/**
	 * Native: PATHFIND::REMOVE_NAVMESH_REQUIRED_REGIONS
	 *
	 * Hash: 0x916F0A3CDEC3445E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x916F0A3CDEC3445E)
	 */
	removeNavmeshRequiredRegions(): void;

	/**
	 * Native: PATHFIND::_REQUEST_PATHS_PREFER_ACCURATE_BOUNDINGSTRUCT
	 *
	 * Hash: 0x07FB139B592FA687 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07FB139B592FA687)
	 */
	requestPathsPreferAccurateBoundingstruct(x1: number, y1: number, x2: number, y2: number): boolean;

	/**
	 * Native: PATHFIND::_SET_AI_GLOBAL_PATH_NODES_TYPE
	 *
	 * Hash: 0xF74B1FFA4A15FBEA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF74B1FFA4A15FBEA)
	 */
	setAiGlobalPathNodesType(type: integer): void;

	/**
	 * Native: PATHFIND::_SET_ALL_PATHS_CACHE_BOUNDINGSTRUCT
	 *
	 * Hash: 0x228E5C6AD4D74BFD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x228E5C6AD4D74BFD)
	 */
	setAllPathsCacheBoundingstruct(toggle: boolean): void;

	/**
	 * Native: PATHFIND::SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME
	 *
	 * Hash: 0x0B919E1FB47CC4E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B919E1FB47CC4E0)
	 */
	setAmbientPedRangeMultiplierThisFrame(multiplier: number): void;

	/**
	 * Native: PATHFIND::SET_GPS_DISABLED_ZONE
	 *
	 * Hash: 0xDC20483CD3DD5201 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC20483CD3DD5201)
	 */
	setGpsDisabledZone(x1: number, y1: number, z1: number, x2: number, y2: number, z3: number): void;

	/**
	 * Native: PATHFIND::SET_GPS_DISABLED_ZONE_AT_INDEX
	 *
	 * Hash: 0xD0BC1C6FB18EE154 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0BC1C6FB18EE154)
	 */
	setGpsDisabledZoneAtIndex(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		index: integer
	): void;

	/**
	 * Native: PATHFIND::SET_IGNORE_NO_GPS_FLAG
	 *
	 * Hash: 0x72751156E7678833 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72751156E7678833)
	 */
	setIgnoreNoGpsFlag(toggle: boolean): void;

	/**
	 * Native: PATHFIND::_SET_IGNORE_SECONDARY_ROUTE_NODES
	 *
	 * Hash: 0x1FC289A0C3FF470F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1FC289A0C3FF470F)
	 */
	setIgnoreSecondaryRouteNodes(toggle: boolean): void;

	/**
	 * Native: PATHFIND::SET_PED_PATHS_BACK_TO_ORIGINAL
	 *
	 * p6 defaults to 0
	 *
	 * Hash: 0xE04B48F2CC926253 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE04B48F2CC926253)
	 */
	setPedPathsBackToOriginal(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6?: integer
	): void;

	/**
	 * Native: PATHFIND::SET_PED_PATHS_IN_AREA
	 *
	 * p7 defaults to 0
	 *
	 * Hash: 0x34F060F4BF92E018 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34F060F4BF92E018)
	 */
	setPedPathsInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		unknown: boolean,
		p7?: integer
	): void;

	/**
	 * Native: PATHFIND::SET_ROADS_BACK_TO_ORIGINAL
	 *
	 * p6 defaults to 0
	 *
	 * Hash: 0x1EE7063B80FFC77C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EE7063B80FFC77C)
	 */
	setRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6?: integer): void;

	/**
	 * Native: PATHFIND::SET_ROADS_BACK_TO_ORIGINAL_IN_ANGLED_AREA
	 *
	 * p7 defaults to 0
	 *
	 * Hash: 0x0027501B9F3B407E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0027501B9F3B407E)
	 */
	setRoadsBackToOriginalInAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p7?: integer
	): void;

	/**
	 * Native: PATHFIND::SET_ROADS_IN_ANGLED_AREA
	 *
	 * Hash: 0x1A5AA1208AF5DB59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A5AA1208AF5DB59)
	 */
	setRoadsInAngledArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		unknown1: boolean,
		unknown2: boolean,
		unknown3: boolean
	): void;

	/**
	 * Native: PATHFIND::SET_ROADS_IN_AREA
	 *
	 * Hash: 0xBF1A602B5BA52FEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF1A602B5BA52FEE)
	 */
	setRoadsInArea(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		nodeEnabled: boolean,
		unknown2: boolean
	): void;

	/**
	 * Native: PATHFIND::UPDATE_NAVMESH_BLOCKING_OBJECT
	 *
	 * Hash: 0x109E99373F290687 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x109E99373F290687)
	 */
	updateNavmeshBlockingObject(
		p0: integer,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: integer
	): void;

	unk: GamePathfindUnk;
}

interface GamePathfindMp extends GamePathfind {}
