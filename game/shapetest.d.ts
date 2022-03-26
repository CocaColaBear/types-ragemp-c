/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetShapeTestResultResult {
	hit: boolean;
	endCoords: Vector3Mp;
	surfaceNormal: Vector3Mp;
	entityHit: Handle;
	result: integer;
}

interface GetShapeTestResultIncludingMaterialResult {
	hit: boolean;
	endCoords: Vector3Mp;
	surfaceNormal: Vector3Mp;
	materialHash: integer;
	entityHit: Handle;
	result: integer;
}

interface StartShapeTestSurroundingCoordsResult {
	pVec1: Vector3Mp;
	pVec2: Vector3Mp;
	result: integer;
}

interface GameShapetestLegacy {
	/**
	 * Native: SHAPETEST::GET_SHAPE_TEST_RESULT
	 *
	 * Hash: 0x3D87450E15D98694 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D87450E15D98694)
	 */
	getShapeTestResult(shapeTestHandle: integer): GetShapeTestResultResult;

	/**
	 * Native: SHAPETEST::GET_SHAPE_TEST_RESULT_INCLUDING_MATERIAL
	 *
	 * Hash: 0x65287525D951F6BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65287525D951F6BE)
	 */
	getShapeTestResultIncludingMaterial(shapeTestHandle: integer): GetShapeTestResultIncludingMaterialResult;

	/**
	 * Native: SHAPETEST::START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE
	 *
	 * Hash: 0x377906D8A31E5586 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x377906D8A31E5586)
	 */
	startExpensiveSynchronousShapeTestLosProbe(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		flags: integer,
		entity: Handle,
		p8: integer
	): integer;

	/**
	 * Native: SHAPETEST::START_SHAPE_TEST_BOUND
	 *
	 * Hash: 0x37181417CE7C8900 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37181417CE7C8900)
	 */
	startShapeTestBound(entity: Handle, flags1: integer, flags2: integer): integer;

	/**
	 * Native: SHAPETEST::START_SHAPE_TEST_BOUNDING_BOX
	 *
	 * Hash: 0x052837721A854EC7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x052837721A854EC7)
	 */
	startShapeTestBoundingBox(entity: Handle, flags1: integer, flags2: integer): integer;

	/**
	 * Native: SHAPETEST::START_SHAPE_TEST_BOX
	 *
	 * Hash: 0xFE466162C4401D18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE466162C4401D18)
	 */
	startShapeTestBox(
		x: number,
		y: number,
		z: number,
		x1: number,
		y2: number,
		z2: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		p9: integer,
		flags: integer,
		entity: Handle,
		p12: integer
	): integer;

	/**
	 * Native: SHAPETEST::START_SHAPE_TEST_CAPSULE
	 *
	 * Hash: 0x28579D1B8F8AAC80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28579D1B8F8AAC80)
	 */
	startShapeTestCapsule(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number,
		flags: integer,
		entity: Handle,
		p9: integer
	): integer;

	/**
	 * Native: SHAPETEST::START_SHAPE_TEST_LOS_PROBE
	 *
	 * Hash: 0x7EE9F5D83DD4F90E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EE9F5D83DD4F90E)
	 */
	startShapeTestLosProbe(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		flags: integer,
		entity: Handle,
		p8: integer
	): integer;

	/**
	 * Native: SHAPETEST::_START_SHAPE_TEST_SURROUNDING_COORDS
	 *
	 * Hash: 0xFF6BE494C7987F34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF6BE494C7987F34)
	 */
	startShapeTestSurroundingCoords(flag: integer, entity: Handle, flag2: integer): StartShapeTestSurroundingCoordsResult;

	/**
	 * Native: SHAPETEST::START_SHAPE_TEST_SWEPT_SPHERE
	 *
	 * Hash: 0xE6AC6C45FBE83004 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6AC6C45FBE83004)
	 */
	startShapeTestSweptSphere(
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		radius: number,
		flags: integer,
		entity: Handle,
		p9: integer
	): integer;
}

interface GameShapetestUnk {}

interface GameShapetest extends GameShapetestLegacy {
	/**
	 * Native: SHAPETEST::RELEASE_SCRIPT_GUID_FROM_ENTITY
	 *
	 * Hash: 0x2B3334BCA57CD799 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B3334BCA57CD799)
	 */
	releaseScriptGuidFromEntity(entityHit: Handle): void;

	unk: GameShapetestUnk;
}

interface GameShapetestMp extends GameShapetest {}
