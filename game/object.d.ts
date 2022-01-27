/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetCoordsAndRotationOfClosestObjectOfTypeResult {
	outPosition: Vector3Mp;
	outRotation: Vector3Mp;
	result: integer;
}

interface GetStateOfClosestDoorOfTypeResult {
	locked: boolean;
	heading: number;
}

interface GameObjectLegacy {
	/**
	 * Native: OBJECT::CLEAR_OBJECTS_INSIDE_GARAGE
	 *
	 * Hash: 0x190428512B240692 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x190428512B240692)
	 */
	clearObjectsInsideGarage(
		garageHash: integer,
		vehicles: boolean,
		peds: boolean,
		objects: boolean,
		isNetwork: boolean
	): void;

	/**
	 * Native: OBJECT::CREATE_OBJECT
	 *
	 * Hash: 0x509D5878EB39E842 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x509D5878EB39E842)
	 */
	createObject(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		isNetwork: boolean,
		bScriptHostObj: boolean,
		dynamic: boolean
	): Handle;

	/**
	 * Native: OBJECT::CREATE_OBJECT_NO_OFFSET
	 *
	 * Hash: 0x9A294B2138ABB884 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A294B2138ABB884)
	 */
	createObjectNoOffset(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		isNetwork: boolean,
		bScriptHostObj: boolean,
		dynamic: boolean
	): Handle;

	/**
	 * Native: OBJECT::CREATE_NON_NETWORKED_PORTABLE_PICKUP
	 *
	 * Hash: 0x125494B98A21AAF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x125494B98A21AAF7)
	 */
	createPortablePickup2(
		pickupHash: integer,
		x: number,
		y: number,
		z: number,
		placeOnGround: boolean,
		modelHash: integer
	): Handle;

	/**
	 * Native: OBJECT::DELETE_OBJECT
	 *
	 * Hash: 0x539E0AE3E6634B9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x539E0AE3E6634B9F)
	 */
	deleteObject(object: Handle): Handle;

	/**
	 * Native: OBJECT::IS_DOOR_REGISTERED_WITH_SYSTEM
	 *
	 * Hash: 0xC153C43EA202C8C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC153C43EA202C8C1)
	 */
	doesDoorExist(doorHash: integer): boolean;

	/**
	 * Native: OBJECT::DOES_OBJECT_OF_TYPE_EXIST_AT_COORDS
	 *
	 * Hash: 0xBFA48E2FF417213F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFA48E2FF417213F)
	 */
	doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: integer, p5: boolean): boolean;

	/**
	 * Native: OBJECT::DOES_PICKUP_OBJECT_EXIST
	 *
	 * Hash: 0xD9EFB6DBF7DAAEA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9EFB6DBF7DAAEA3)
	 */
	doesPickupObjectExist(pickupObject: Handle): boolean;

	/**
	 * Native: OBJECT::GET_CLOSEST_OBJECT_OF_TYPE
	 *
	 * Hash: 0xE143FA2249364369 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE143FA2249364369)
	 */
	getClosestObjectOfType(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: integer,
		isMission: boolean,
		p6: boolean,
		p7: boolean
	): Handle;

	/**
	 * Native: OBJECT::GET_OBJECT_FRAGMENT_DAMAGE_HEALTH
	 *
	 * Hash: 0xB6FBFD079B8D0596 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6FBFD079B8D0596)
	 */
	getObjectFragmentDamageHealth(p0: integer, p1: boolean): number;

	/**
	 * Native: OBJECT::_GET_OBJECT_OFFSET_FROM_COORDS
	 *
	 * Hash: 0x163E252DE035A133 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x163E252DE035A133)
	 */
	getObjectOffsetFromCoords(
		xPos: number,
		yPos: number,
		zPos: number,
		heading: number,
		xOffset: number,
		yOffset: number,
		zOffset: number
	): Vector3Mp;

	/**
	 * Native: OBJECT::HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_BROKEN
	 *
	 * Hash: 0x761B0E69AC4D007E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x761B0E69AC4D007E)
	 */
	hasClosestObjectOfTypeBeenBroken(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		modelHash: integer,
		p5: integer
	): boolean;

	/**
	 * Native: OBJECT::RENDER_FAKE_PICKUP_GLOW
	 *
	 * Hash: 0x3430676B11CDF21D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3430676B11CDF21D)
	 */
	highlightPlacementCoords(x: number, y: number, z: number, colorIndex: integer): void;

	/**
	 * Native: OBJECT::IS_ANY_OBJECT_NEAR_POINT
	 *
	 * Hash: 0x397DC58FF00298D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x397DC58FF00298D1)
	 */
	isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_NEAR_POINT
	 *
	 * Hash: 0x8C90FE4B381BA60A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C90FE4B381BA60A)
	 */
	isObjectNearPoint(objectHash: integer, x: number, y: number, z: number, range: number): boolean;

	/**
	 * Native: OBJECT::DOES_PICKUP_OF_TYPE_EXIST_IN_AREA
	 *
	 * Hash: 0xF9C36251F6E48E33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9C36251F6E48E33)
	 */
	isPickupWithinRadius(pickupHash: integer, x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_DOOR_STATE
	 *
	 * Hash: 0x6BAB9442830C7F53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BAB9442830C7F53)
	 */
	setDoorAccelerationLimit(doorHash: integer, state: integer, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_OPEN_RATIO
	 *
	 * Hash: 0xB6E6FBA95C7324AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6E6FBA95C7324AC)
	 */
	setDoorAjarAngle(doorHash: integer, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::SET_FORCE_OBJECT_THIS_FRAME
	 *
	 * Hash: 0xF538081986E49E9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF538081986E49E9D)
	 */
	setForceObjectThisFrame(x: number, y: number, z: number, p3: number): void;

	/**
	 * Native: OBJECT::SET_TEAM_PICKUP_OBJECT
	 *
	 * Hash: 0x53E0DF1A2A3CF0CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53E0DF1A2A3CF0CA)
	 */
	setTeamPickupObject(object: Handle, p1: integer, p2: boolean): void;

	/**
	 * Native: OBJECT::TRACK_OBJECT_VISIBILITY
	 *
	 * Hash: 0xB252BC036B525623 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB252BC036B525623)
	 */
	trackObjectVisibility(object: Handle): void;
}

interface GameObjectUnk {
	/**
	 * Native: OBJECT::_0x006E4B040ED37EC3
	 *
	 * Hash: 0x006E4B040ED37EC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x006E4B040ED37EC3)
	 */
	_0x006E4B040ED37EC3(p0: integer): void;

	/**
	 * Native: OBJECT::_0x0596843B34B95CE5
	 *
	 * Hash: 0x0596843B34B95CE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0596843B34B95CE5)
	 */
	_0x0596843B34B95CE5(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x1A6CBB06E2D0D79D
	 *
	 * Hash: 0x1A6CBB06E2D0D79D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A6CBB06E2D0D79D)
	 */
	_0x1A6CBB06E2D0D79D(object: Handle, p1: boolean): void;

	/**
	 * Native: OBJECT::_0x1C57C94A6446492A
	 *
	 * Hash: 0x1C57C94A6446492A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C57C94A6446492A)
	 */
	_0x1C57C94A6446492A(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0x1E3F1B1B891A2AAA
	 *
	 * Hash: 0x1E3F1B1B891A2AAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E3F1B1B891A2AAA)
	 */
	_0x1E3F1B1B891A2AAA(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x2542269291C6AC84
	 *
	 * Hash: 0x2542269291C6AC84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2542269291C6AC84)
	 */
	_0x2542269291C6AC84(p0: integer): integer;

	/**
	 * Native: OBJECT::_0x27F248C3FEBFAAD3
	 *
	 * Hash: 0x27F248C3FEBFAAD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27F248C3FEBFAAD3)
	 */
	_0x27F248C3FEBFAAD3(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x31574B1B41268673
	 *
	 * Hash: 0x31574B1B41268673 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31574B1B41268673)
	 */
	_0x31574B1B41268673(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x31F924B53EADDF65
	 *
	 * Hash: 0x31F924B53EADDF65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31F924B53EADDF65)
	 */
	_0x31F924B53EADDF65(p0: boolean): void;

	/**
	 * Native: OBJECT::_0x394CD08E31313C28
	 *
	 * Hash: 0x394CD08E31313C28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x394CD08E31313C28)
	 */
	_0x394CD08E31313C28(): void;

	/**
	 * Native: OBJECT::_0x39A5FB7EAF150840
	 *
	 * Hash: 0x39A5FB7EAF150840 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39A5FB7EAF150840)
	 */
	_0x39A5FB7EAF150840(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x3B2FD68DB5F8331C
	 *
	 * Hash: 0x3B2FD68DB5F8331C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B2FD68DB5F8331C)
	 */
	_0x3B2FD68DB5F8331C(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0x3BD770D281982DB5
	 *
	 * Hash: 0x3BD770D281982DB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BD770D281982DB5)
	 */
	_0x3BD770D281982DB5(p0: integer, p1: integer): integer;

	/**
	 * Native: OBJECT::_0x46F3ADD1E2D5BAF2
	 *
	 * Hash: 0x46F3ADD1E2D5BAF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46F3ADD1E2D5BAF2)
	 */
	_0x46F3ADD1E2D5BAF2(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x4C134B4DF76025D0
	 *
	 * Hash: 0x4C134B4DF76025D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C134B4DF76025D0)
	 */
	_0x4C134B4DF76025D0(pickup: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0x62454A641B41F3C5
	 *
	 * Hash: 0x62454A641B41F3C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62454A641B41F3C5)
	 */
	_0x62454A641B41F3C5(p0: integer): void;

	/**
	 * Native: OBJECT::_0x63ECF581BC70E363
	 *
	 * Hash: 0x63ECF581BC70E363 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63ECF581BC70E363)
	 */
	_0x63ECF581BC70E363(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x641F272B52E2F0F8
	 *
	 * Hash: 0x641F272B52E2F0F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x641F272B52E2F0F8)
	 */
	_0x641F272B52E2F0F8(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x659F9D71F52843F8
	 *
	 * Hash: 0x659F9D71F52843F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x659F9D71F52843F8)
	 */
	_0x659F9D71F52843F8(id: integer, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0x66A49D021870FE88
	 *
	 * Hash: 0x66A49D021870FE88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66A49D021870FE88)
	 */
	_0x66A49D021870FE88(): void;

	/**
	 * Native: OBJECT::_0x701FDA1E82076BA4
	 *
	 * Hash: 0x701FDA1E82076BA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x701FDA1E82076BA4)
	 */
	_0x701FDA1E82076BA4(): void;

	/**
	 * Native: OBJECT::_0x734E1714D077DA9A
	 *
	 * Hash: 0x734E1714D077DA9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x734E1714D077DA9A)
	 */
	_0x734E1714D077DA9A(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0x762DB2D380B48D04
	 *
	 * Hash: 0x762DB2D380B48D04 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x762DB2D380B48D04)
	 */
	_0x762DB2D380B48D04(p0: integer): void;

	/**
	 * Native: OBJECT::_0x7813E8B8C4AE4799
	 *
	 * Hash: 0x7813E8B8C4AE4799 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7813E8B8C4AE4799)
	 */
	_0x7813E8B8C4AE4799(pickup: Handle): void;

	/**
	 * Native: OBJECT::_0x826D1EE4D1CAFC78
	 *
	 * Hash: 0x826D1EE4D1CAFC78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x826D1EE4D1CAFC78)
	 */
	_0x826D1EE4D1CAFC78(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x834344A414C7C85D
	 *
	 * Hash: 0x834344A414C7C85D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x834344A414C7C85D)
	 */
	_0x834344A414C7C85D(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x858EC9FD25DE04AA
	 *
	 * Hash: 0x858EC9FD25DE04AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x858EC9FD25DE04AA)
	 */
	_0x858EC9FD25DE04AA(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x8881C98A31117998
	 *
	 * Hash: 0x8881C98A31117998 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8881C98A31117998)
	 */
	_0x8881C98A31117998(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0x8CAAB2BD3EA58BD4
	 *
	 * Hash: 0x8CAAB2BD3EA58BD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8CAAB2BD3EA58BD4)
	 */
	_0x8CAAB2BD3EA58BD4(p0: integer): void;

	/**
	 * Native: OBJECT::_0x8CFF648FBD7330F1
	 *
	 * Hash: 0x8CFF648FBD7330F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8CFF648FBD7330F1)
	 */
	_0x8CFF648FBD7330F1(p0: integer): void;

	/**
	 * Native: OBJECT::_0x8DCA505A5C196F05
	 *
	 * Hash: 0x8DCA505A5C196F05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DCA505A5C196F05)
	 */
	_0x8DCA505A5C196F05(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0xA08FE5E49BDC39DD
	 *
	 * Hash: 0xA08FE5E49BDC39DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA08FE5E49BDC39DD)
	 */
	_0xA08FE5E49BDC39DD(p0: integer, p1: number, p2: boolean): void;

	/**
	 * Native: OBJECT::_0xA2C1F5E92AFE49ED
	 *
	 * Hash: 0xA2C1F5E92AFE49ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2C1F5E92AFE49ED)
	 */
	_0xA2C1F5E92AFE49ED(): void;

	/**
	 * Native: OBJECT::_0xA85A21582451E951
	 *
	 * Hash: 0xA85A21582451E951 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA85A21582451E951)
	 */
	_0xA85A21582451E951(doorHash: integer, p1: boolean): void;

	/**
	 * Native: OBJECT::_0xAA059C615DE9DD03
	 *
	 * Hash: 0xAA059C615DE9DD03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA059C615DE9DD03)
	 */
	_0xAA059C615DE9DD03(pickup: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0xADF084FB8F075D06
	 *
	 * Hash: 0xADF084FB8F075D06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADF084FB8F075D06)
	 */
	_0xADF084FB8F075D06(object: Handle): boolean;

	/**
	 * Native: OBJECT::_0xAFE24E4D29249E4A
	 *
	 * Hash: 0xAFE24E4D29249E4A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFE24E4D29249E4A)
	 */
	_0xAFE24E4D29249E4A(object: Handle, p1: number, p2: number, p3: boolean): boolean;

	/**
	 * Native: OBJECT::_0xB2D0BDE54F0E8E5A
	 *
	 * Hash: 0xB2D0BDE54F0E8E5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2D0BDE54F0E8E5A)
	 */
	_0xB2D0BDE54F0E8E5A(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0xB5B7742424BD4445
	 *
	 * Hash: 0xB5B7742424BD4445 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5B7742424BD4445)
	 */
	_0xB5B7742424BD4445(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0xB7C6D80FB371659A
	 *
	 * Hash: 0xB7C6D80FB371659A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7C6D80FB371659A)
	 */
	_0xB7C6D80FB371659A(): void;

	/**
	 * Native: OBJECT::_0xBFFE53AE7E67FCDC
	 *
	 * Hash: 0xBFFE53AE7E67FCDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFFE53AE7E67FCDC)
	 */
	_0xBFFE53AE7E67FCDC(pickup: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0xC6033D32241F6FB5
	 *
	 * Hash: 0xC6033D32241F6FB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6033D32241F6FB5)
	 */
	_0xC6033D32241F6FB5(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0xC7F29CA00F46350E
	 *
	 * Hash: 0xC7F29CA00F46350E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7F29CA00F46350E)
	 */
	_0xC7F29CA00F46350E(p0: boolean): void;

	/**
	 * Native: OBJECT::_0xD05A3241B9A86F19
	 *
	 * Hash: 0xD05A3241B9A86F19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD05A3241B9A86F19)
	 */
	_0xD05A3241B9A86F19(entity: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_0xD4A7A435B3710D05
	 *
	 * Hash: 0xD4A7A435B3710D05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4A7A435B3710D05)
	 */
	_0xD4A7A435B3710D05(x: number, y: number, z: number, radius: number): void;

	/**
	 * Native: OBJECT::_0xDB41D07A45A6D4B7
	 *
	 * Hash: 0xDB41D07A45A6D4B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB41D07A45A6D4B7)
	 */
	_0xDB41D07A45A6D4B7(p0: integer): integer;

	/**
	 * Native: OBJECT::_0xE05F6AEEFEB0BB02
	 *
	 * Hash: 0xE05F6AEEFEB0BB02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE05F6AEEFEB0BB02)
	 */
	_0xE05F6AEEFEB0BB02(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: OBJECT::_0xEB6F1A9B5510A5D2
	 *
	 * Hash: 0xEB6F1A9B5510A5D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB6F1A9B5510A5D2)
	 */
	_0xEB6F1A9B5510A5D2(p0: integer, p1: boolean): void;

	/**
	 * Native: OBJECT::_0xF92099527DB8E2A7
	 *
	 * Hash: 0xF92099527DB8E2A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF92099527DB8E2A7)
	 */
	_0xF92099527DB8E2A7(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::_0xF9C1681347C8BD15
	 *
	 * Hash: 0xF9C1681347C8BD15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9C1681347C8BD15)
	 */
	_0xF9C1681347C8BD15(object: Handle): void;

	/**
	 * Native: OBJECT::_0xFDC07C58E8AAB715
	 *
	 * Hash: 0xFDC07C58E8AAB715 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDC07C58E8AAB715)
	 */
	_0xFDC07C58E8AAB715(pickupHash: integer): void;
}

interface GameObject extends GameObjectLegacy {
	/**
	 * Native: OBJECT::ADD_DOOR_TO_SYSTEM
	 *
	 * Hash: 0x6F8838D03D1DC226 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F8838D03D1DC226)
	 */
	addDoorToSystem(
		doorHash: integer,
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		p5: boolean,
		scriptDoor: boolean,
		isLocal: boolean
	): void;

	/**
	 * Native: OBJECT::ARE_ENTITIES_ENTIRELY_INSIDE_GARAGE
	 *
	 * Hash: 0x85B6C850546FDDE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85B6C850546FDDE2)
	 */
	areEntitiesEntirelyInsideGarage(garageHash: integer, p1: boolean, p2: boolean, p3: boolean, p4: integer): boolean;

	/**
	 * Native: OBJECT::ATTACH_PORTABLE_PICKUP_TO_PED
	 *
	 * Hash: 0x8DC39368BDD57755 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DC39368BDD57755)
	 */
	attachPortablePickupToPed(pickupObject: Handle, ped: Handle): void;

	/**
	 * Native: OBJECT::BREAK_OBJECT_FRAGMENT_CHILD
	 *
	 * Hash: 0xE7E4C198B0185900 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7E4C198B0185900)
	 */
	breakFragmentChild(p0: Handle, p1: integer, p2: boolean): void;

	/**
	 * Native: OBJECT::_CLEAR_GARAGE_AREA
	 *
	 * Hash: 0xDA05194260CDCDF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA05194260CDCDF9)
	 */
	clearGarageArea(garageHash: integer, isNetwork: boolean): void;

	/**
	 * Native: OBJECT::CREATE_OBJECT
	 *
	 * Hash: 0x509D5878EB39E842 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x509D5878EB39E842)
	 */
	create(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		isNetwork: boolean,
		bScriptHostObj: boolean,
		dynamic: boolean
	): Handle;

	/**
	 * Native: OBJECT::CREATE_AMBIENT_PICKUP
	 *
	 * Hash: 0x673966A0C0FD7171 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x673966A0C0FD7171)
	 */
	createAmbientPickup(
		pickupHash: integer,
		posX: number,
		posY: number,
		posZ: number,
		flags: integer,
		value: integer,
		modelHash: integer,
		p7: boolean,
		p8: boolean
	): Handle;

	/**
	 * Native: OBJECT::CREATE_MONEY_PICKUPS
	 *
	 * Hash: 0x0589B5E791CE9B2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0589B5E791CE9B2B)
	 */
	createMoneyPickups(x: number, y: number, z: number, value: integer, amount: integer, model: integer): void;

	/**
	 * Native: OBJECT::_CREATE_NON_NETWORKED_AMBIENT_PICKUP
	 *
	 * Hash: 0x9C93764223E29C50 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C93764223E29C50)
	 */
	createNonNetworkedAmbientPickup(
		pickupHash: integer,
		posX: number,
		posY: number,
		posZ: number,
		flags: integer,
		value: integer,
		modelHash: integer,
		p7: boolean,
		p8: boolean
	): Handle;

	/**
	 * Native: OBJECT::CREATE_NON_NETWORKED_PORTABLE_PICKUP
	 *
	 * Hash: 0x125494B98A21AAF7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x125494B98A21AAF7)
	 */
	createNonNetworkedPortablePickup(
		pickupHash: integer,
		x: number,
		y: number,
		z: number,
		placeOnGround: boolean,
		modelHash: integer
	): Handle;

	/**
	 * Native: OBJECT::CREATE_OBJECT_NO_OFFSET
	 *
	 * Hash: 0x9A294B2138ABB884 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A294B2138ABB884)
	 */
	createNoOffset(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		isNetwork: boolean,
		bScriptHostObj: boolean,
		dynamic: boolean
	): Handle;

	/**
	 * Native: OBJECT::CREATE_PICKUP
	 *
	 * Hash: 0xFBA08C503DD5FA58 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBA08C503DD5FA58)
	 */
	createPickup(
		pickupHash: integer,
		posX: number,
		posY: number,
		posZ: number,
		p4: integer,
		value: integer,
		p6: boolean,
		modelHash: integer
	): Handle;

	/**
	 * Native: OBJECT::CREATE_PICKUP_ROTATE
	 *
	 * Hash: 0x891804727E0A98B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x891804727E0A98B7)
	 */
	createPickupRotate(
		pickupHash: integer,
		posX: number,
		posY: number,
		posZ: number,
		rotX: number,
		rotY: number,
		rotZ: number,
		flag: integer,
		amount: integer,
		p9: integer,
		p10: boolean,
		modelHash: integer
	): Handle;

	/**
	 * Native: OBJECT::CREATE_PORTABLE_PICKUP
	 *
	 * Hash: 0x2EAF1FDB2FB55698 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2EAF1FDB2FB55698)
	 */
	createPortablePickup(
		pickupHash: integer,
		x: number,
		y: number,
		z: number,
		placeOnGround: boolean,
		modelHash: integer
	): Handle;

	/**
	 * Native: OBJECT::DELETE_OBJECT
	 *
	 * Hash: 0x539E0AE3E6634B9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x539E0AE3E6634B9F)
	 */
	delete(object: Handle): Handle;

	/**
	 * Native: OBJECT::DETACH_PORTABLE_PICKUP_FROM_PED
	 *
	 * Hash: 0xCF463D1E9A0AECB1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF463D1E9A0AECB1)
	 */
	detachPortablePickupFromPed(pickupObject: Handle): void;

	/**
	 * Native: OBJECT::DOES_OBJECT_OF_TYPE_EXIST_AT_COORDS
	 *
	 * Hash: 0xBFA48E2FF417213F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFA48E2FF417213F)
	 */
	doesOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: integer, p5: boolean): boolean;

	/**
	 * Native: OBJECT::DOES_PICKUP_OBJECT_EXIST
	 *
	 * Hash: 0xD9EFB6DBF7DAAEA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9EFB6DBF7DAAEA3)
	 */
	doesPickupExist(pickupObject: Handle): boolean;

	/**
	 * Native: OBJECT::DOES_PICKUP_OF_TYPE_EXIST_IN_AREA
	 *
	 * Hash: 0xF9C36251F6E48E33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9C36251F6E48E33)
	 */
	doesPickupOfTypeExistInArea(pickupHash: integer, x: number, y: number, z: number, radius: number): boolean;

	/**
	 * Native: OBJECT::DOES_RAYFIRE_MAP_OBJECT_EXIST
	 *
	 * Hash: 0x52AF537A0C5B8AAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52AF537A0C5B8AAD)
	 */
	doesRayfireMapExist(object: Handle): boolean;

	/**
	 * Native: OBJECT::_DOOR_CONTROL
	 *
	 * Hash: 0x9B12F9A24FABEDB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B12F9A24FABEDB0)
	 */
	doorControl(
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		locked: boolean,
		xRotMult: number,
		yRotMult: number,
		zRotMult: number
	): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_FIND_EXISTING_DOOR
	 *
	 * Hash: 0x589F80B325CC82C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x589F80B325CC82C5)
	 */
	doorSystemFindExistingDoor(x: number, y: number, z: number, modelHash: integer): integer;

	/**
	 * Native: OBJECT::_DOOR_SYSTEM_GET_AUTOMATIC_DISTANCE
	 *
	 * Hash: 0xE851471AEFC3374F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE851471AEFC3374F)
	 */
	doorSystemGetAutomaticDistance(doorHash: integer): integer;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_GET_DOOR_PENDING_STATE
	 *
	 * Hash: 0x4BC2854478F3A749 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4BC2854478F3A749)
	 */
	doorSystemGetDoorPendingState(doorHash: integer): integer;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_GET_DOOR_STATE
	 *
	 * Hash: 0x160AA1B32F6139B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x160AA1B32F6139B8)
	 */
	doorSystemGetDoorState(doorHash: integer): integer;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_GET_IS_PHYSICS_LOADED
	 *
	 * Hash: 0xDF97CDD4FC08FD34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF97CDD4FC08FD34)
	 */
	doorSystemGetIsPhysicsLoaded(p0: integer): boolean;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_GET_OPEN_RATIO
	 *
	 * Hash: 0x65499865FCA6E5EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65499865FCA6E5EC)
	 */
	doorSystemGetOpenRatio(doorHash: integer): number;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_AUTOMATIC_DISTANCE
	 *
	 * Hash: 0x9BA001CB45CBF627 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BA001CB45CBF627)
	 */
	doorSystemSetAutomaticDistance(doorHash: integer, distance: number, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_AUTOMATIC_RATE
	 *
	 * Hash: 0x03C27E13B42A0E82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03C27E13B42A0E82)
	 */
	doorSystemSetAutomaticRate(doorHash: integer, rate: number, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_DOOR_STATE
	 *
	 * Hash: 0x6BAB9442830C7F53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BAB9442830C7F53)
	 */
	doorSystemSetDoorState(doorHash: integer, state: integer, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_HOLD_OPEN
	 *
	 * Hash: 0xD9B71952F78A2640 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9B71952F78A2640)
	 */
	doorSystemSetHoldOpen(doorHash: integer, toggle: boolean): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_OPEN_RATIO
	 *
	 * Hash: 0xB6E6FBA95C7324AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6E6FBA95C7324AC)
	 */
	doorSystemSetOpenRatio(doorHash: integer, ajar: number, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::DOOR_SYSTEM_SET_SPRING_REMOVED
	 *
	 * Hash: 0xC485E07E4F0B7958 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC485E07E4F0B7958)
	 */
	doorSystemSetSpringRemoved(doorHash: integer, removed: boolean, requestDoor: boolean, forceUpdate: boolean): void;

	/**
	 * Native: OBJECT::ENABLE_SAVING_IN_GARAGE
	 *
	 * Hash: 0xF2E1A7133DD356A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2E1A7133DD356A6)
	 */
	enableSavingInGarage(garageHash: integer, toggle: boolean): void;

	/**
	 * Native: OBJECT::FORCE_PICKUP_REGENERATE
	 *
	 * Hash: 0x758A5C1B3B1E1990 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x758A5C1B3B1E1990)
	 */
	forcePickupRegenerate(p0: integer): void;

	/**
	 * Native: OBJECT::GET_CLOSEST_OBJECT_OF_TYPE
	 *
	 * Hash: 0xE143FA2249364369 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE143FA2249364369)
	 */
	getClosestOfType(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: integer,
		isMission: boolean,
		p6: boolean,
		p7: boolean
	): Handle;

	/**
	 * Native: OBJECT::GET_COORDS_AND_ROTATION_OF_CLOSEST_OBJECT_OF_TYPE
	 *
	 * Hash: 0x163F8B586BC95F2A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x163F8B586BC95F2A)
	 */
	getCoordsAndRotationOfClosestOfType(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: integer,
		rotationOrder: integer
	): GetCoordsAndRotationOfClosestObjectOfTypeResult;

	/**
	 * Native: OBJECT::GET_OBJECT_FRAGMENT_DAMAGE_HEALTH
	 *
	 * Hash: 0xB6FBFD079B8D0596 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6FBFD079B8D0596)
	 */
	getFragmentDamageHealth(p0: integer, p1: boolean): number;

	/**
	 * Native: OBJECT::_GET_IS_ARENA_PROP_PHYSICS_DISABLED
	 *
	 * Hash: 0x43C677F1E1158005 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43C677F1E1158005)
	 */
	getIsArenaPropPhysicsDisabled(object: Handle, p1: integer): boolean;

	/**
	 * Native: OBJECT::_GET_OBJECT_OFFSET_FROM_COORDS
	 *
	 * Hash: 0x163E252DE035A133 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x163E252DE035A133)
	 */
	getOffsetFromCoords(
		xPos: number,
		yPos: number,
		zPos: number,
		heading: number,
		xOffset: number,
		yOffset: number,
		zOffset: number
	): Vector3Mp;

	/**
	 * Native: OBJECT::GET_PICKUP_OBJECT
	 *
	 * Hash: 0x5099BC55630B25AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5099BC55630B25AE)
	 */
	getPickup(pickup: Handle): Handle;

	/**
	 * Native: OBJECT::GET_PICKUP_COORDS
	 *
	 * Hash: 0x225B8B35C88029B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x225B8B35C88029B3)
	 */
	getPickupCoords(pickup: Handle): Vector3Mp;

	/**
	 * Native: OBJECT::_GET_PICKUP_GENERATION_RANGE_MULTIPLIER
	 *
	 * Hash: 0xB3ECA65C7317F174 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3ECA65C7317F174)
	 */
	getPickupGenerationRangeMultiplier(): number;

	/**
	 * Native: OBJECT::_GET_PICKUP_HASH
	 *
	 * Hash: 0x5EAAD83F8CFB4575 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EAAD83F8CFB4575)
	 */
	getPickupHash(pickupHash: integer): integer;

	/**
	 * Native: OBJECT::_GET_PICKUP_HASH_FROM_WEAPON
	 *
	 * Hash: 0xD6429A016084F1A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6429A016084F1A5)
	 */
	getPickupHashFromWeapon(weaponHash: integer): integer;

	/**
	 * Native: OBJECT::GET_RAYFIRE_MAP_OBJECT
	 *
	 * Hash: 0xB48FCED898292E52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB48FCED898292E52)
	 */
	getRayfireMap(x: number, y: number, z: number, radius: number, name: string): Handle;

	/**
	 * Native: OBJECT::GET_RAYFIRE_MAP_OBJECT_ANIM_PHASE
	 *
	 * Hash: 0x260EE4FDBDF4DB01 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x260EE4FDBDF4DB01)
	 */
	getRayfireMapAnimPhase(object: Handle): number;

	/**
	 * Native: OBJECT::GET_SAFE_PICKUP_COORDS
	 *
	 * Hash: 0x6E16BC2503FF1FF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E16BC2503FF1FF0)
	 */
	getSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): Vector3Mp;

	/**
	 * Native: OBJECT::GET_STATE_OF_CLOSEST_DOOR_OF_TYPE
	 *
	 * Hash: 0xEDC1A5B84AEF33FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDC1A5B84AEF33FF)
	 */
	getStateOfClosestDoorOfType(type: integer, x: number, y: number, z: number): GetStateOfClosestDoorOfTypeResult;

	/**
	 * Native: OBJECT::GET_STATE_OF_RAYFIRE_MAP_OBJECT
	 *
	 * Hash: 0x899BA936634A322E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x899BA936634A322E)
	 */
	getStateOfRayfireMap(object: Handle): integer;

	/**
	 * Native: OBJECT::_GET_OBJECT_TEXTURE_VARIATION
	 *
	 * Hash: 0xE84EB93729C5F36A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE84EB93729C5F36A)
	 */
	getTextureVariation(object: Handle): integer;

	/**
	 * Native: OBJECT::GET_WEAPON_TYPE_FROM_PICKUP_TYPE
	 *
	 * Hash: 0x08F96CA6C551AD51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x08F96CA6C551AD51)
	 */
	getWeaponTypeFromPickupType(pickupHash: integer): integer;

	/**
	 * Native: OBJECT::HAS_OBJECT_BEEN_BROKEN
	 *
	 * Hash: 0x8ABFB70C49CC43E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8ABFB70C49CC43E2)
	 */
	hasBeenBroken(object: Handle, p1: integer): boolean;

	/**
	 * Native: OBJECT::HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_BROKEN
	 *
	 * Hash: 0x761B0E69AC4D007E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x761B0E69AC4D007E)
	 */
	hasClosestOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: integer, p5: integer): boolean;

	/**
	 * Native: OBJECT::HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_COMPLETELY_DESTROYED
	 *
	 * Hash: 0x46494A2475701343 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46494A2475701343)
	 */
	hasClosestOfTypeBeenCompletelyDestroyed(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: integer,
		p5: boolean
	): boolean;

	/**
	 * Native: OBJECT::HAS_PICKUP_BEEN_COLLECTED
	 *
	 * Hash: 0x80EC48E6679313F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80EC48E6679313F9)
	 */
	hasPickupBeenCollected(pickup: Handle): boolean;

	/**
	 * Native: OBJECT::_HIDE_PICKUP
	 *
	 * Hash: 0x867458251D47CCB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x867458251D47CCB2)
	 */
	hidePickup(pickupObject: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::IS_ANY_ENTITY_ENTIRELY_INSIDE_GARAGE
	 *
	 * Hash: 0x673ED815D6E323B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x673ED815D6E323B7)
	 */
	isAnyEntityEntirelyInsideGarage(garageHash: integer, p1: boolean, p2: boolean, p3: boolean, p4: integer): boolean;

	/**
	 * Native: OBJECT::IS_ANY_OBJECT_NEAR_POINT
	 *
	 * Hash: 0x397DC58FF00298D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x397DC58FF00298D1)
	 */
	isAnyNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_A_PICKUP
	 *
	 * Hash: 0x0378C08504160D0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0378C08504160D0D)
	 */
	isAPickup(object: Handle): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_A_PORTABLE_PICKUP
	 *
	 * Hash: 0xFC481C641EBBD27D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC481C641EBBD27D)
	 */
	isAPortablePickup(object: Handle): boolean;

	/**
	 * Native: OBJECT::IS_DOOR_CLOSED
	 *
	 * Hash: 0xC531EE8A1145A149 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC531EE8A1145A149)
	 */
	isDoorClosed(doorHash: integer): boolean;

	/**
	 * Native: OBJECT::IS_DOOR_REGISTERED_WITH_SYSTEM
	 *
	 * Hash: 0xC153C43EA202C8C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC153C43EA202C8C1)
	 */
	isDoorRegisteredWithSystem(doorHash: integer): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_ENTIRELY_INSIDE_GARAGE
	 *
	 * Hash: 0x372EF6699146A1E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x372EF6699146A1E4)
	 */
	isEntirelyInsideGarage(garageHash: integer, entity: Handle, p2: number, p3: integer): boolean;

	/**
	 * Native: OBJECT::IS_GARAGE_EMPTY
	 *
	 * Hash: 0x90E47239EA1980B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90E47239EA1980B8)
	 */
	isGarageEmpty(garageHash: integer, p1: boolean, p2: integer): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_NEAR_POINT
	 *
	 * Hash: 0x8C90FE4B381BA60A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C90FE4B381BA60A)
	 */
	isNearPoint(objectHash: integer, x: number, y: number, z: number, range: number): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_PARTIALLY_INSIDE_GARAGE
	 *
	 * Hash: 0xF0EED5A6BC7B237A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0EED5A6BC7B237A)
	 */
	isPartiallyInsideGarage(garageHash: integer, entity: Handle, p2: integer): boolean;

	/**
	 * Native: OBJECT::IS_PICKUP_WEAPON_OBJECT_VALID
	 *
	 * Hash: 0x11D1E53A726891FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11D1E53A726891FE)
	 */
	isPickupWeaponValid(object: Handle): boolean;

	/**
	 * Native: OBJECT::IS_PLAYER_ENTIRELY_INSIDE_GARAGE
	 *
	 * Hash: 0x024A60DEB0EA69F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x024A60DEB0EA69F0)
	 */
	isPlayerEntirelyInsideGarage(garageHash: integer, player: Handle, p2: number, p3: integer): boolean;

	/**
	 * Native: OBJECT::IS_PLAYER_PARTIALLY_INSIDE_GARAGE
	 *
	 * Hash: 0x1761DC5D8471CBAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1761DC5D8471CBAA)
	 */
	isPlayerPartiallyInsideGarage(garageHash: integer, player: Handle, p2: integer): boolean;

	/**
	 * Native: OBJECT::IS_POINT_IN_ANGLED_AREA
	 *
	 * Hash: 0x2A70BAE8883E4C81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A70BAE8883E4C81)
	 */
	isPointInAngledArea(
		xPos: number,
		yPos: number,
		zPos: number,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		debug: boolean,
		includeZ: boolean
	): boolean;

	/**
	 * Native: OBJECT::IS_OBJECT_VISIBLE
	 *
	 * Hash: 0x8B32ACE6326A7546 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B32ACE6326A7546)
	 */
	isVisible(object: Handle): boolean;

	/**
	 * Native: OBJECT::_MARK_OBJECT_FOR_DELETION
	 *
	 * Hash: 0xADBE4809F19F927A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADBE4809F19F927A)
	 */
	markForDeletion(object: Handle): void;

	/**
	 * Native: OBJECT::PLACE_OBJECT_ON_GROUND_PROPERLY
	 *
	 * Hash: 0x58A850EAEE20FAA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58A850EAEE20FAA3)
	 */
	placeOnGroundProperly(object: Handle): boolean;

	/**
	 * Native: OBJECT::_PLACE_OBJECT_ON_GROUND_PROPERLY_2
	 *
	 * Hash: 0xD76EEEF746057FD6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD76EEEF746057FD6)
	 */
	placeOnGroundProperly2(object: Handle): boolean;

	/**
	 * Native: OBJECT::PREVENT_COLLECTION_OF_PORTABLE_PICKUP
	 *
	 * Hash: 0x92AEFB5F6E294023 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92AEFB5F6E294023)
	 */
	preventCollectionOfPortablePickup(object: Handle, p1: boolean, p2: boolean): void;

	/**
	 * Native: OBJECT::REMOVE_ALL_PICKUPS_OF_TYPE
	 *
	 * Hash: 0x27F9D613092159CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27F9D613092159CF)
	 */
	removeAllPickupsOfType(pickupHash: integer): void;

	/**
	 * Native: OBJECT::REMOVE_DOOR_FROM_SYSTEM
	 *
	 * Hash: 0x464D8E1427156FE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x464D8E1427156FE4)
	 */
	removeDoorFromSystem(doorHash: integer): void;

	/**
	 * Native: OBJECT::REMOVE_OBJECT_HIGH_DETAIL_MODEL
	 *
	 * Hash: 0x4A39DB43E47CF3AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A39DB43E47CF3AA)
	 */
	removeHighDetailModel(object: Handle): void;

	/**
	 * Native: OBJECT::REMOVE_PICKUP
	 *
	 * Hash: 0x3288D8ACAECD2AB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3288D8ACAECD2AB2)
	 */
	removePickup(pickup: Handle): void;

	/**
	 * Native: OBJECT::RENDER_FAKE_PICKUP_GLOW
	 *
	 * Hash: 0x3430676B11CDF21D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3430676B11CDF21D)
	 */
	renderFakePickupGlow(x: number, y: number, z: number, colorIndex: integer): void;

	/**
	 * Native: OBJECT::SET_ACTIVATE_OBJECT_PHYSICS_AS_SOON_AS_IT_IS_UNFROZEN
	 *
	 * Hash: 0x406137F8EF90EAF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x406137F8EF90EAF5)
	 */
	setActivatePhysicsAsSoonAsItIsUnfrozen(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::SET_OBJECT_ALLOW_LOW_LOD_BUOYANCY
	 *
	 * Hash: 0x4D89D607CB3DD1D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D89D607CB3DD1D2)
	 */
	setAllowLowLodBuoyancy(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_SET_CREATE_WEAPON_OBJECT_LIGHT_SOURCE
	 *
	 * Hash: 0xBCE595371A5FBAAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCE595371A5FBAAF)
	 */
	setCreateWeaponLightSource(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_SET_ENABLE_ARENA_PROP_PHYSICS
	 *
	 * Hash: 0x911024442F4898F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x911024442F4898F0)
	 */
	setEnableArenaPropPhysics(object: Handle, toggle: boolean, p2: integer): void;

	/**
	 * Native: OBJECT::_SET_ENABLE_ARENA_PROP_PHYSICS_ON_PED
	 *
	 * Hash: 0xB20834A7DD3D8896 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB20834A7DD3D8896)
	 */
	setEnableArenaPropPhysicsOnPed(object: Handle, toggle: boolean, p2: integer, ped: Handle): void;

	/**
	 * Native: OBJECT::SET_FORCE_OBJECT_THIS_FRAME
	 *
	 * Hash: 0xF538081986E49E9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF538081986E49E9D)
	 */
	setForceThisFrame(x: number, y: number, z: number, p3: number): void;

	/**
	 * Native: OBJECT::SET_OBJECT_FORCE_VEHICLES_TO_AVOID
	 *
	 * Hash: 0x77F33F2CCF64B3AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77F33F2CCF64B3AA)
	 */
	setForceVehiclesToAvoid(object: Handle, toggle: boolean): void;

	/**
	 * Native: OBJECT::_SET_OBJECT_LIGHT_COLOR
	 *
	 * Hash: 0x5F048334B4A4E774 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F048334B4A4E774)
	 */
	setLightColor(object: Handle, p1: boolean, r: integer, g: integer, b: integer): integer;

	/**
	 * Native: OBJECT::SET_LOCAL_PLAYER_CAN_COLLECT_PORTABLE_PICKUPS
	 *
	 * Hash: 0x78857FC65CADB909 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78857FC65CADB909)
	 */
	setLocalPlayerCanCollectPortablePickups(p0: boolean): void;

	/**
	 * Native: OBJECT::_SET_LOCAL_PLAYER_CAN_USE_PICKUPS_WITH_THIS_MODEL
	 *
	 * Hash: 0x88EAEC617CD26926 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88EAEC617CD26926)
	 */
	setLocalPlayerCanUsePickupsWithThisModel(modelHash: integer, toggle: boolean): void;

	/**
	 * Native: OBJECT::SET_MAX_NUM_PORTABLE_PICKUPS_CARRIED_BY_PLAYER
	 *
	 * Hash: 0x0BF3B3BD47D79C08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BF3B3BD47D79C08)
	 */
	setMaxNumPortablePickupsCarriedByPlayer(modelHash: integer, p1: integer): void;

	/**
	 * Native: OBJECT::SET_OBJECT_PHYSICS_PARAMS
	 *
	 * Hash: 0xF6DF6E90DE7DF90F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6DF6E90DE7DF90F)
	 */
	setPhysicsParams(
		object: Handle,
		weight: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		gravity: number,
		p7: number,
		p8: number,
		p9: number,
		p10: number,
		buoyancy: number
	): void;

	/**
	 * Native: OBJECT::SET_PICKUP_GENERATION_RANGE_MULTIPLIER
	 *
	 * Hash: 0x318516E02DE3ECE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x318516E02DE3ECE2)
	 */
	setPickupGenerationRangeMultiplier(multiplier: number): void;

	/**
	 * Native: OBJECT::SET_PICKUP_HIDDEN_WHEN_UNCOLLECTABLE
	 *
	 * Hash: 0x3ED2B83AB2E82799 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3ED2B83AB2E82799)
	 */
	setPickupHiddenWhenUncollectable(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::SET_PICKUP_REGENERATION_TIME
	 *
	 * Hash: 0x78015C9B4B3ECC9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78015C9B4B3ECC9D)
	 */
	setPickupRegenerationTime(pickup: Handle, duration: integer): void;

	/**
	 * Native: OBJECT::SET_PICKUP_UNCOLLECTABLE
	 *
	 * Hash: 0x1C1B69FAE509BA97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C1B69FAE509BA97)
	 */
	setPickupUncollectable(p0: integer, p1: integer): void;

	/**
	 * Native: OBJECT::SET_STATE_OF_CLOSEST_DOOR_OF_TYPE
	 *
	 * Hash: 0xF82D8F1926A02C3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF82D8F1926A02C3D)
	 */
	setStateOfClosestDoorOfType(
		type: integer,
		x: number,
		y: number,
		z: number,
		locked: boolean,
		heading: number,
		p6: boolean
	): void;

	/**
	 * Native: OBJECT::SET_STATE_OF_RAYFIRE_MAP_OBJECT
	 *
	 * Hash: 0x5C29F698D404C5E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C29F698D404C5E1)
	 */
	setStateOfRayfireMap(object: Handle, state: integer): void;

	/**
	 * Native: OBJECT::_SET_OBJECT_STUNT_PROP_DURATION
	 *
	 * Hash: 0xDF6CA0330F2E737B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF6CA0330F2E737B)
	 */
	setStuntPropDuration(object: Handle, duration: number): void;

	/**
	 * Native: OBJECT::_SET_OBJECT_STUNT_PROP_SPEEDUP
	 *
	 * Hash: 0x96EE0EBA0163DF80 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96EE0EBA0163DF80)
	 */
	setStuntPropSpeedup(object: Handle, p1: integer): void;

	/**
	 * Native: OBJECT::SET_OBJECT_TARGETTABLE
	 *
	 * Hash: 0x8A7391690F5AFD81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A7391690F5AFD81)
	 */
	setTargettable(object: Handle, targettable: boolean): void;

	/**
	 * Native: OBJECT::SET_TEAM_PICKUP_OBJECT
	 *
	 * Hash: 0x53E0DF1A2A3CF0CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53E0DF1A2A3CF0CA)
	 */
	setTeamPickup(object: Handle, p1: integer, p2: boolean): void;

	/**
	 * Native: OBJECT::_SET_OBJECT_TEXTURE_VARIATION
	 *
	 * Hash: 0x971DA0055324D033 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x971DA0055324D033)
	 */
	setTextureVariation(object: Handle, textureVariation: integer): void;

	/**
	 * Native: OBJECT::_SET_TEXTURE_VARIATION_OF_CLOSEST_OBJECT_OF_TYPE
	 *
	 * Hash: 0xF12E33034D887F66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF12E33034D887F66)
	 */
	setTextureVariationOfClosestOfType(
		x: number,
		y: number,
		z: number,
		radius: number,
		modelHash: integer,
		textureVariation: integer
	): boolean;

	/**
	 * Native: OBJECT::_SET_UNK_GLOBAL_BOOL_RELATED_TO_DAMAGE
	 *
	 * Hash: 0xABDABF4E1EDECBFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xABDABF4E1EDECBFA)
	 */
	setUnkGlobalBoolRelatedToDamage(value: boolean): void;

	/**
	 * Native: OBJECT::SLIDE_OBJECT
	 *
	 * Hash: 0x2FDFF4107B8C1147 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FDFF4107B8C1147)
	 */
	slide(
		object: Handle,
		toX: number,
		toY: number,
		toZ: number,
		speedX: number,
		speedY: number,
		speedZ: number,
		collision: boolean
	): boolean;

	/**
	 * Native: OBJECT::_TOGGLE_USE_PICKUPS_FOR_PLAYER
	 *
	 * Hash: 0x616093EC6B139DD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x616093EC6B139DD9)
	 */
	toggleUsePickupsForPlayer(player: Handle, pickupHash: integer, toggle: boolean): void;

	/**
	 * Native: OBJECT::TRACK_OBJECT_VISIBILITY
	 *
	 * Hash: 0xB252BC036B525623 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB252BC036B525623)
	 */
	trackVisibility(object: Handle): void;

	unk: GameObjectUnk;
}

interface GameObjectMp extends GameObject {
	/**
	 * Returns positions of world objects with specified hash in stream range.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Object::getAllByHash)
	 */
	getAllByHash(hash: integer): Vector3Mp[] | undefined;

	/**
	 * Returns data of world objects within specified range.
	 *
	 * Each element in the array that is returned will contain:
	 * 	[Number model, Vector3Mp position, Vector3Mp rotation]
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Object::getAllInRange)
	 */
	getAllInRange(position: Vector3Mp, range: number): [number, Vector3Mp, Vector3Mp][] | undefined;

	/**
	 * Returns data of world objects within specified range.
	 *
	 * Each element in the array that is returned will contain:
	 * 	[number model, Vector3Mp position, Vector3Mp rotation, number distanceSquared]
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=Object::getAllInRange)
	 */
	getAllInRange(
		position: Vector3Mp,
		range: number,
		includeDistance: boolean,
		sortByDistance?: boolean
	): [number, Vector3Mp, Vector3Mp, number][] | undefined;
}
