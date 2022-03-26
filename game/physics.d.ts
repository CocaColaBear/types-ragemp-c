/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface AddRopeResult {
	unkPtr: integer;
	result: integer;
}

interface AttachEntitiesToRopeResult {
	p12: integer;
	p13: integer;
}

interface GamePhysicsLegacy {
	/**
	 * Native: PHYSICS::ROPE_GET_DISTANCE_BETWEEN_ENDS
	 *
	 * Hash: 0x73040398DFF9A4A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73040398DFF9A4A6)
	 */
	getRopeLength(ropeId: integer): number;
}

interface GamePhysicsUnk {
	/**
	 * Native: PHYSICS::_0x15F944730C832252
	 *
	 * Hash: 0x15F944730C832252 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15F944730C832252)
	 */
	_0x15F944730C832252(entity: Handle, toggle: boolean): void;

	/**
	 * Native: PHYSICS::_0x36CCB9BE67B970FD
	 *
	 * Hash: 0x36CCB9BE67B970FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36CCB9BE67B970FD)
	 */
	_0x36CCB9BE67B970FD(ropeId: integer, p1: boolean): void;

	/**
	 * Native: PHYSICS::_0x84DE3B5FB3E666F0
	 *
	 * Hash: 0x84DE3B5FB3E666F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84DE3B5FB3E666F0)
	 */
	_0x84DE3B5FB3E666F0(): integer;

	/**
	 * Native: PHYSICS::_0x9EBD751E5787BAF2
	 *
	 * Hash: 0x9EBD751E5787BAF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EBD751E5787BAF2)
	 */
	_0x9EBD751E5787BAF2(p0: boolean): void;

	/**
	 * Native: PHYSICS::_0xA1AE736541B0FCA3
	 *
	 * Hash: 0xA1AE736541B0FCA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1AE736541B0FCA3)
	 */
	_0xA1AE736541B0FCA3(p1: boolean): integer;

	/**
	 * Native: PHYSICS::_0xB743F735C03D7810
	 *
	 * Hash: 0xB743F735C03D7810 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB743F735C03D7810)
	 */
	_0xB743F735C03D7810(ropeId: integer, p1: integer): void;

	/**
	 * Native: PHYSICS::_0xBC0CE682D4D05650
	 *
	 * Hash: 0xBC0CE682D4D05650 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC0CE682D4D05650)
	 */
	_0xBC0CE682D4D05650(
		ropeId: integer,
		p1: integer,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		p11: number,
		p12: number,
		p13: number
	): void;

	/**
	 * Native: PHYSICS::_0xCC6E963682533882
	 *
	 * Hash: 0xCC6E963682533882 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC6E963682533882)
	 */
	_0xCC6E963682533882(object: Handle): void;
}

interface GamePhysics extends GamePhysicsLegacy {
	/**
	 * Native: PHYSICS::ACTIVATE_PHYSICS
	 *
	 * Hash: 0x710311ADF0E20730 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x710311ADF0E20730)
	 */
	activate(entity: Handle): void;

	/**
	 * Native: PHYSICS::ADD_ROPE
	 *
	 * Hash: 0xE832D760399EB220 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE832D760399EB220)
	 */
	addRope(
		x: number,
		y: number,
		z: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		length: number,
		ropeType: integer,
		maxLength: number,
		minLength: number,
		windingSpeed: number,
		p11: boolean,
		p12: boolean,
		rigid: boolean,
		p14: number,
		breakWhenShot: boolean
	): AddRopeResult;

	/**
	 * Native: PHYSICS::APPLY_IMPULSE_TO_CLOTH
	 *
	 * Hash: 0xE37F721824571784 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE37F721824571784)
	 */
	applyImpulseToCloth(
		posX: number,
		posY: number,
		posZ: number,
		vecX: number,
		vecY: number,
		vecZ: number,
		impulse: number
	): void;

	/**
	 * Native: PHYSICS::ATTACH_ENTITIES_TO_ROPE
	 *
	 * Hash: 0x3D95EC8B6D940AC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D95EC8B6D940AC3)
	 */
	attachEntitiesToRope(
		ropeId: integer,
		ent1: Handle,
		ent2: Handle,
		ent1_x: number,
		ent1_y: number,
		ent1_z: number,
		ent2_x: number,
		ent2_y: number,
		ent2_z: number,
		length: number,
		p10: boolean,
		p11: boolean
	): AttachEntitiesToRopeResult;

	/**
	 * Native: PHYSICS::ATTACH_ROPE_TO_ENTITY
	 *
	 * Hash: 0x4B490A6832559A65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B490A6832559A65)
	 */
	attachRopeToEntity(ropeId: integer, entity: Handle, x: number, y: number, z: number, p5: boolean): void;

	/**
	 * Native: PHYSICS::BREAK_ENTITY_GLASS
	 *
	 * Hash: 0x2E648D16F6E308F3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E648D16F6E308F3)
	 */
	breakEntityGlass(
		entity: Handle,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number,
		p8: number,
		p9: integer,
		p10: boolean
	): void;

	/**
	 * Native: PHYSICS::DELETE_CHILD_ROPE
	 *
	 * Hash: 0xAA5D6B1888E4DB20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA5D6B1888E4DB20)
	 */
	deleteChildRope(ropeId: integer): void;

	/**
	 * Native: PHYSICS::DELETE_ROPE
	 *
	 * Hash: 0x52B4829281364649 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52B4829281364649)
	 */
	deleteRope(): integer;

	/**
	 * Native: PHYSICS::DETACH_ROPE_FROM_ENTITY
	 *
	 * Hash: 0xBCF3026912A8647D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCF3026912A8647D)
	 */
	detachRopeFromEntity(ropeId: integer, entity: Handle): void;

	/**
	 * Native: PHYSICS::_DOES_ROPE_BELONG_TO_THIS_SCRIPT
	 *
	 * Hash: 0x271C9D3ACA5D6409 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x271C9D3ACA5D6409)
	 */
	doesRopeBelongToThisScript(ropeId: integer): boolean;

	/**
	 * Native: PHYSICS::DOES_ROPE_EXIST
	 *
	 * Hash: 0xFD5448BE3111ED96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD5448BE3111ED96)
	 */
	doesRopeExist(): integer;

	/**
	 * Native: PHYSICS::GET_CGOFFSET
	 *
	 * Hash: 0x8214A4B5A7A33612 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8214A4B5A7A33612)
	 */
	getCgoffset(entity: Handle): Vector3Mp;

	/**
	 * Native: PHYSICS::_GET_HAS_OBJECT_FRAG_INST
	 *
	 * Hash: 0x0C112765300C7E1E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C112765300C7E1E)
	 */
	getHasObjectFragInst(object: Handle): boolean;

	/**
	 * Native: PHYSICS::GET_ROPE_LAST_VERTEX_COORD
	 *
	 * Hash: 0x21BB0FBD3E217C2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21BB0FBD3E217C2D)
	 */
	getRopeLastVertexCoord(ropeId: integer): Vector3Mp;

	/**
	 * Native: PHYSICS::GET_ROPE_VERTEX_COORD
	 *
	 * Hash: 0xEA61CA8E80F09E4D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA61CA8E80F09E4D)
	 */
	getRopeVertexCoord(ropeId: integer, vertex: integer): Vector3Mp;

	/**
	 * Native: PHYSICS::GET_ROPE_VERTEX_COUNT
	 *
	 * Hash: 0x3655F544CD30F0B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3655F544CD30F0B5)
	 */
	getRopeVertexCount(ropeId: integer): integer;

	/**
	 * Native: PHYSICS::LOAD_ROPE_DATA
	 *
	 * Hash: 0xCBB203C04D1ABD27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBB203C04D1ABD27)
	 */
	loadRopeData(ropeId: integer, rope_preset: string): void;

	/**
	 * Native: PHYSICS::PIN_ROPE_VERTEX
	 *
	 * Hash: 0x2B320CF14146B69A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B320CF14146B69A)
	 */
	pinRopeVertex(ropeId: integer, vertex: integer, x: number, y: number, z: number): void;

	/**
	 * Native: PHYSICS::ROPE_ARE_TEXTURES_LOADED
	 *
	 * Hash: 0xF2D0E6A75CC05597 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2D0E6A75CC05597)
	 */
	ropeAreTexturesLoaded(): boolean;

	/**
	 * Native: PHYSICS::ROPE_CHANGE_SCRIPT_OWNER
	 *
	 * Hash: 0xB1B6216CA2E7B55E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1B6216CA2E7B55E)
	 */
	ropeChangeScriptOwner(p0: integer, p1: boolean, p2: boolean): void;

	/**
	 * Native: PHYSICS::ROPE_CONVERT_TO_SIMPLE
	 *
	 * Hash: 0x5389D48EFA2F079A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5389D48EFA2F079A)
	 */
	ropeConvertToSimple(ropeId: integer): void;

	/**
	 * Native: PHYSICS::ROPE_DRAW_SHADOW_ENABLED
	 *
	 * Hash: 0xF159A63806BB5BA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF159A63806BB5BA8)
	 */
	ropeDrawShadowEnabled(toggle: boolean): integer;

	/**
	 * Native: PHYSICS::ROPE_FORCE_LENGTH
	 *
	 * Hash: 0xD009F759A723DB1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD009F759A723DB1B)
	 */
	ropeForceLength(ropeId: integer, length: number): void;

	/**
	 * Native: PHYSICS::ROPE_GET_DISTANCE_BETWEEN_ENDS
	 *
	 * Hash: 0x73040398DFF9A4A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73040398DFF9A4A6)
	 */
	ropeGetDistanceBetweenEnds(ropeId: integer): number;

	/**
	 * Native: PHYSICS::ROPE_LOAD_TEXTURES
	 *
	 * Hash: 0x9B9039DBF2D258C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B9039DBF2D258C1)
	 */
	ropeLoadTextures(): void;

	/**
	 * Native: PHYSICS::ROPE_RESET_LENGTH
	 *
	 * Hash: 0xC16DE94D9BEA14A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC16DE94D9BEA14A0)
	 */
	ropeResetLength(ropeId: integer, length: number): void;

	/**
	 * Native: PHYSICS::ROPE_SET_UPDATE_ORDER
	 *
	 * Hash: 0xDC57A637A20006ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC57A637A20006ED)
	 */
	ropeSetUpdateOrder(ropeId: integer, p1: integer): void;

	/**
	 * Native: PHYSICS::ROPE_SET_UPDATE_PINVERTS
	 *
	 * Hash: 0xC8D667EE52114ABA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8D667EE52114ABA)
	 */
	ropeSetUpdatePinverts(ropeId: integer): void;

	/**
	 * Native: PHYSICS::ROPE_UNLOAD_TEXTURES
	 *
	 * Hash: 0x6CE36C35C1AC8163 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CE36C35C1AC8163)
	 */
	ropeUnloadTextures(): void;

	/**
	 * Native: PHYSICS::SET_CG_AT_BOUNDCENTER
	 *
	 * Hash: 0xBE520D9761FF811F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE520D9761FF811F)
	 */
	setCgAtBoundcenter(entity: Handle): void;

	/**
	 * Native: PHYSICS::SET_CGOFFSET
	 *
	 * Hash: 0xD8FA3908D7B86904 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8FA3908D7B86904)
	 */
	setCgoffset(entity: Handle, x: number, y: number, z: number): void;

	/**
	 * Native: PHYSICS::SET_DAMPING
	 *
	 * Hash: 0xEEA3B200A6FEB65B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEA3B200A6FEB65B)
	 */
	setDamping(entity: Handle, vertex: integer, value: number): void;

	/**
	 * Native: PHYSICS::SET_DISABLE_BREAKING
	 *
	 * Hash: 0x5CEC1A84620E7D5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CEC1A84620E7D5B)
	 */
	setDisableBreaking(object: Handle, toggle: boolean): void;

	/**
	 * Native: PHYSICS::SET_DISABLE_FRAG_DAMAGE
	 *
	 * Hash: 0x01BA3AED21C16CFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01BA3AED21C16CFB)
	 */
	setDisableFragDamage(object: Handle, toggle: boolean): void;

	/**
	 * Native: PHYSICS::_SET_LAUNCH_CONTROL_ENABLED
	 *
	 * Hash: 0xAA6A6098851C396F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA6A6098851C396F)
	 */
	setLaunchControlEnabled(toggle: boolean): void;

	/**
	 * Native: PHYSICS::START_ROPE_UNWINDING_FRONT
	 *
	 * Hash: 0x538D1179EC1AA9A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x538D1179EC1AA9A9)
	 */
	startRopeUnwindingFront(ropeId: integer): void;

	/**
	 * Native: PHYSICS::START_ROPE_WINDING
	 *
	 * Hash: 0x1461C72C889E343E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1461C72C889E343E)
	 */
	startRopeWinding(ropeId: integer): void;

	/**
	 * Native: PHYSICS::STOP_ROPE_UNWINDING_FRONT
	 *
	 * Hash: 0xFFF3A50779EFBBB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFFF3A50779EFBBB3)
	 */
	stopRopeUnwindingFront(ropeId: integer): void;

	/**
	 * Native: PHYSICS::STOP_ROPE_WINDING
	 *
	 * Hash: 0xCB2D4AB84A19AA7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB2D4AB84A19AA7C)
	 */
	stopRopeWinding(ropeId: integer): void;

	/**
	 * Native: PHYSICS::UNPIN_ROPE_VERTEX
	 *
	 * Hash: 0x4B5AE2EEE4A8F180 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B5AE2EEE4A8F180)
	 */
	unpinRopeVertex(ropeId: integer, vertex: integer): void;

	unk: GamePhysicsUnk;
}

interface GamePhysicsMp extends GamePhysics {}
