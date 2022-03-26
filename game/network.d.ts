/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface _0x0D77A82DC2D0DA59Result {
	p0: integer;
	p1: integer;
}

interface _0x1171A97A3D3981B6Result {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface _0x5324A0E3E4CE3570Result {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0x97A770BEEF227E2BResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0xA7862BC5ED1DFD7EResult {
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0xADB57E5B663CCA8BResult {
	p1: number;
	p2: number;
}

interface _0xB746D20B17F2A229Result {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkAreHandlesTheSameResult {
	gamerHandle1: integer;
	gamerHandle2: integer;
	result: boolean;
}

interface NetworkClanGetMembershipResult {
	p0: integer;
	clanMembership: integer;
	result: boolean;
}

interface NetworkClanGetMembershipCountResult {
	p0: integer;
	result: integer;
}

interface NetworkClanPlayerGetDescResult {
	clanDesc: integer;
	gamerHandle: integer;
	result: boolean;
}

interface NetworkDisplaynamesFromHandlesStartResult {
	p0: integer;
	result: integer;
}

interface NetworkDoTransitionToNewFreemodeResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface FilloutPmPlayerListWithNamesResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkGetDestroyerOfEntityResult {
	weaponHash: integer;
	result: integer;
}

interface NetworkGetDestroyerOfNetworkIdResult {
	weaponHash: integer;
	result: integer;
}

interface NetworkGetEntityKillerOfPlayerResult {
	weaponHash: integer;
	result: Handle;
}

interface NetworkGetGamertagFromHandleResult {
	gamerHandle: integer;
	result: string;
}

interface NetworkGetGlobalMultiplayerClockResult {
	hours: integer;
	minutes: integer;
	seconds: integer;
}

interface NetworkGetNumScriptParticipantsResult {
	p0: integer;
	result: integer;
}

interface NetworkGetPlatformPartyMembersResult {
	data: integer;
	result: integer;
}

interface NetworkGetPlayerFromGamerHandleResult {
	gamerHandle: integer;
	result: Handle;
}

interface NetworkGetPlayerKillerOfPlayerResult {
	weaponHash: integer;
	result: integer;
}

interface NetworkGetPrimaryClanDataNewResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkGetRespawnResultResult {
	coordinates: Vector3Mp;
	heading: number;
}

interface NetworkGetTransitionMembersResult {
	data: integer;
	result: integer;
}

interface NetworkHashFromGamerHandleResult {
	gamerHandle: integer;
	result: integer;
}

interface NetworkHasRosPrivilegeEndDateResult {
	banType: integer;
	timeData: integer;
	result: boolean;
}

interface NetworkInviteGamersResult {
	p0: integer;
	p2: integer;
	p3: integer;
	result: boolean;
}

interface NetworkMemberIdFromGamerHandleResult {
	gamerHandle: integer;
	result: string;
}

interface NetworkPlayerGetUseridResult {
	userID: integer;
	result: string;
}

interface NetworkQueryRespawnResultsResult {
	p0: integer;
	result: integer;
}

interface NetworkSendInviteViaPresenceResult {
	gamerHandle: integer;
	p1: integer;
	result: boolean;
}

interface NetworkSendPresenceTransitionInviteResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface NetworkStartUserContentPermissionsCheckResult {
	netHandle: integer;
	result: integer;
}

interface TextureDownloadRequestResult {
	gamerHandle: integer;
	result: integer;
}

interface UgcCopyContentResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface GameNetworkLegacy {
	/**
	 * Native: NETWORK::GET_CLOUD_TIME_AS_INT
	 *
	 * Hash: 0x9A73240B49945C76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A73240B49945C76)
	 */
	getPosixTime(): integer;
}

interface GameNetworkUnk {
	/**
	 * Native: NETWORK::_0x023ACAB2DC9DC4A4
	 *
	 * Hash: 0x023ACAB2DC9DC4A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x023ACAB2DC9DC4A4)
	 */
	_0x023ACAB2DC9DC4A4(): integer;

	/**
	 * Native: NETWORK::_0x0379DAF89BA09AA5
	 *
	 * Hash: 0x0379DAF89BA09AA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0379DAF89BA09AA5)
	 */
	_0x0379DAF89BA09AA5(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x041C7F2A6C9894E6
	 *
	 * Hash: 0x041C7F2A6C9894E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x041C7F2A6C9894E6)
	 */
	_0x041C7F2A6C9894E6(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: NETWORK::_0x04918A41BC9B8157
	 *
	 * Hash: 0x04918A41BC9B8157 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04918A41BC9B8157)
	 */
	_0x04918A41BC9B8157(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: NETWORK::_0x07EAB372C8841D99
	 *
	 * Hash: 0x07EAB372C8841D99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07EAB372C8841D99)
	 */
	_0x07EAB372C8841D99(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: NETWORK::_0x0CF6CC51AA18F0F8
	 *
	 * Hash: 0x0CF6CC51AA18F0F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CF6CC51AA18F0F8)
	 */
	_0x0CF6CC51AA18F0F8(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: NETWORK::_0x0D77A82DC2D0DA59
	 *
	 * Hash: 0x0D77A82DC2D0DA59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D77A82DC2D0DA59)
	 */
	_0x0D77A82DC2D0DA59(): _0x0D77A82DC2D0DA59Result;

	/**
	 * Native: NETWORK::_0x0E4F77F7B9D74D84
	 *
	 * Hash: 0x0E4F77F7B9D74D84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E4F77F7B9D74D84)
	 */
	_0x0E4F77F7B9D74D84(p0: integer): void;

	/**
	 * Native: NETWORK::_0x0EDE326D47CD0F3E
	 *
	 * Hash: 0x0EDE326D47CD0F3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EDE326D47CD0F3E)
	 */
	_0x0EDE326D47CD0F3E(ped: Handle, player: Handle): boolean;

	/**
	 * Native: NETWORK::_0x0F1A4B45B7693B95
	 *
	 * Hash: 0x0F1A4B45B7693B95 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F1A4B45B7693B95)
	 */
	_0x0F1A4B45B7693B95(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x1153FA02A659051C
	 *
	 * Hash: 0x1153FA02A659051C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1153FA02A659051C)
	 */
	_0x1153FA02A659051C(): void;

	/**
	 * Native: NETWORK::_0x1171A97A3D3981B6
	 *
	 * Hash: 0x1171A97A3D3981B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1171A97A3D3981B6)
	 */
	_0x1171A97A3D3981B6(p2: integer, p3: integer): _0x1171A97A3D3981B6Result;

	/**
	 * Native: NETWORK::_0x1398582B7F72B3ED
	 *
	 * Hash: 0x1398582B7F72B3ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1398582B7F72B3ED)
	 */
	_0x1398582B7F72B3ED(p0: integer): void;

	/**
	 * Native: NETWORK::_0x13F1FCB111B820B0
	 *
	 * Hash: 0x13F1FCB111B820B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13F1FCB111B820B0)
	 */
	_0x13F1FCB111B820B0(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x144DA052257AE7D8
	 *
	 * Hash: 0x144DA052257AE7D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x144DA052257AE7D8)
	 */
	_0x144DA052257AE7D8(p0: integer): void;

	/**
	 * Native: NETWORK::_0x14922ED3E38761F0
	 *
	 * Hash: 0x14922ED3E38761F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14922ED3E38761F0)
	 */
	_0x14922ED3E38761F0(): boolean;

	/**
	 * Native: NETWORK::_0x155467ACA0F55705
	 *
	 * Hash: 0x155467ACA0F55705 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x155467ACA0F55705)
	 */
	_0x155467ACA0F55705(): integer;

	/**
	 * Native: NETWORK::_0x162C23CA83ED0A62
	 *
	 * Hash: 0x162C23CA83ED0A62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x162C23CA83ED0A62)
	 */
	_0x162C23CA83ED0A62(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x17C9E241111A674D
	 *
	 * Hash: 0x17C9E241111A674D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17C9E241111A674D)
	 */
	_0x17C9E241111A674D(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x1888694923EF4591
	 *
	 * Hash: 0x1888694923EF4591 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1888694923EF4591)
	 */
	_0x1888694923EF4591(): void;

	/**
	 * Native: NETWORK::_0x1D4DC17C38FEAFF0
	 *
	 * Hash: 0x1D4DC17C38FEAFF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D4DC17C38FEAFF0)
	 */
	_0x1D4DC17C38FEAFF0(): boolean;

	/**
	 * Native: NETWORK::_0x1D610EB0FEA716D9
	 *
	 * Hash: 0x1D610EB0FEA716D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D610EB0FEA716D9)
	 */
	_0x1D610EB0FEA716D9(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x1F7BC3539F9E0224
	 *
	 * Hash: 0x1F7BC3539F9E0224 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F7BC3539F9E0224)
	 */
	_0x1F7BC3539F9E0224(): void;

	/**
	 * Native: NETWORK::_0x1F8E00FB18239600
	 *
	 * Hash: 0x1F8E00FB18239600 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F8E00FB18239600)
	 */
	_0x1F8E00FB18239600(p0: integer): void;

	/**
	 * Native: NETWORK::_0x2302C0264EA58D31
	 *
	 * Hash: 0x2302C0264EA58D31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2302C0264EA58D31)
	 */
	_0x2302C0264EA58D31(): void;

	/**
	 * Native: NETWORK::_0x2555CF7DA5473794
	 *
	 * Hash: 0x2555CF7DA5473794 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2555CF7DA5473794)
	 */
	_0x2555CF7DA5473794(): integer;

	/**
	 * Native: NETWORK::_0x25D990F8E0E3F13C
	 *
	 * Hash: 0x25D990F8E0E3F13C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25D990F8E0E3F13C)
	 */
	_0x25D990F8E0E3F13C(): void;

	/**
	 * Native: NETWORK::_0x261E97AD7BCF3D40
	 *
	 * Hash: 0x261E97AD7BCF3D40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x261E97AD7BCF3D40)
	 */
	_0x261E97AD7BCF3D40(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x265559DA40B3F327
	 *
	 * Hash: 0x265559DA40B3F327 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x265559DA40B3F327)
	 */
	_0x265559DA40B3F327(p0: integer): void;

	/**
	 * Native: NETWORK::_0x265635150FB0D82E
	 *
	 * Hash: 0x265635150FB0D82E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x265635150FB0D82E)
	 */
	_0x265635150FB0D82E(): void;

	/**
	 * Native: NETWORK::_0x26F07DD83A5F7F98
	 *
	 * Hash: 0x26F07DD83A5F7F98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26F07DD83A5F7F98)
	 */
	_0x26F07DD83A5F7F98(): integer;

	/**
	 * Native: NETWORK::_0x283B6062A2C01E9B
	 *
	 * Hash: 0x283B6062A2C01E9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x283B6062A2C01E9B)
	 */
	_0x283B6062A2C01E9B(): void;

	/**
	 * Native: NETWORK::_0x2B1C623823DB0D9D
	 *
	 * Hash: 0x2B1C623823DB0D9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B1C623823DB0D9D)
	 */
	_0x2B1C623823DB0D9D(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer
	): integer;

	/**
	 * Native: NETWORK::_0x2B51EDBEFC301339
	 *
	 * Hash: 0x2B51EDBEFC301339 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B51EDBEFC301339)
	 */
	_0x2B51EDBEFC301339(p0: integer, p1: string): boolean;

	/**
	 * Native: NETWORK::_0x2BF66D2E7414F686
	 *
	 * Hash: 0x2BF66D2E7414F686 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2BF66D2E7414F686)
	 */
	_0x2BF66D2E7414F686(): integer;

	/**
	 * Native: NETWORK::_0x2CE9D95E4051AECD
	 *
	 * Hash: 0x2CE9D95E4051AECD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CE9D95E4051AECD)
	 */
	_0x2CE9D95E4051AECD(p0: integer): void;

	/**
	 * Native: NETWORK::_0x2D5DC831176D0114
	 *
	 * Hash: 0x2D5DC831176D0114 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D5DC831176D0114)
	 */
	_0x2D5DC831176D0114(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x2E0BF682CC778D49
	 *
	 * Hash: 0x2E0BF682CC778D49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E0BF682CC778D49)
	 */
	_0x2E0BF682CC778D49(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x2E4C123D1C8A710E
	 *
	 * Hash: 0x2E4C123D1C8A710E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E4C123D1C8A710E)
	 */
	_0x2E4C123D1C8A710E(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer
	): integer;

	/**
	 * Native: NETWORK::_0x32EBD154CB6B8B99
	 *
	 * Hash: 0x32EBD154CB6B8B99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32EBD154CB6B8B99)
	 */
	_0x32EBD154CB6B8B99(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: NETWORK::_0x36391F397731595D
	 *
	 * Hash: 0x36391F397731595D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36391F397731595D)
	 */
	_0x36391F397731595D(p0: integer): integer;

	/**
	 * Native: NETWORK::_0x367EF5E2F439B4C6
	 *
	 * Hash: 0x367EF5E2F439B4C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x367EF5E2F439B4C6)
	 */
	_0x367EF5E2F439B4C6(p0: integer): void;

	/**
	 * Native: NETWORK::_0x37D5F739FD494675
	 *
	 * Hash: 0x37D5F739FD494675 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37D5F739FD494675)
	 */
	_0x37D5F739FD494675(p0: integer): integer;

	/**
	 * Native: NETWORK::_0x3855FB5EB2C5E8B2
	 *
	 * Hash: 0x3855FB5EB2C5E8B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3855FB5EB2C5E8B2)
	 */
	_0x3855FB5EB2C5E8B2(p0: integer): integer;

	/**
	 * Native: NETWORK::_0x38B7C51AB1EDC7D8
	 *
	 * Hash: 0x38B7C51AB1EDC7D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38B7C51AB1EDC7D8)
	 */
	_0x38B7C51AB1EDC7D8(entity: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::_0x39917E1B4CB0F911
	 *
	 * Hash: 0x39917E1B4CB0F911 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39917E1B4CB0F911)
	 */
	_0x39917E1B4CB0F911(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x3C5C1E2C2FF814B1
	 *
	 * Hash: 0x3C5C1E2C2FF814B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C5C1E2C2FF814B1)
	 */
	_0x3C5C1E2C2FF814B1(toggle: boolean): void;

	/**
	 * Native: NETWORK::_0x3F9990BF5F22759C
	 *
	 * Hash: 0x3F9990BF5F22759C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F9990BF5F22759C)
	 */
	_0x3F9990BF5F22759C(): integer;

	/**
	 * Native: NETWORK::_0x3FA36981311FA4FF
	 *
	 * Hash: 0x3FA36981311FA4FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FA36981311FA4FF)
	 */
	_0x3FA36981311FA4FF(netId: integer, state: boolean): void;

	/**
	 * Native: NETWORK::_0x3FC795691834481D
	 *
	 * Hash: 0x3FC795691834481D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FC795691834481D)
	 */
	_0x3FC795691834481D(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x4237E822315D8BA9
	 *
	 * Hash: 0x4237E822315D8BA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4237E822315D8BA9)
	 */
	_0x4237E822315D8BA9(): boolean;

	/**
	 * Native: NETWORK::_0x4348BFDA56023A2F
	 *
	 * Hash: 0x4348BFDA56023A2F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4348BFDA56023A2F)
	 */
	_0x4348BFDA56023A2F(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::_0x444C4525ECE0A4B9
	 *
	 * Hash: 0x444C4525ECE0A4B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x444C4525ECE0A4B9)
	 */
	_0x444C4525ECE0A4B9(): void;

	/**
	 * Native: NETWORK::_0x45A83257ED02D9BC
	 *
	 * Hash: 0x45A83257ED02D9BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45A83257ED02D9BC)
	 */
	_0x45A83257ED02D9BC(): void;

	/**
	 * Native: NETWORK::_0x45E816772E93A9DB
	 *
	 * Hash: 0x45E816772E93A9DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45E816772E93A9DB)
	 */
	_0x45E816772E93A9DB(): integer;

	/**
	 * Native: NETWORK::_0x45F35C0EDC33B03B
	 *
	 * Hash: 0x45F35C0EDC33B03B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45F35C0EDC33B03B)
	 */
	_0x45F35C0EDC33B03B(
		netScene: integer,
		modelHash: integer,
		x: number,
		y: number,
		z: number,
		p5: number,
		p6: string,
		p7: number,
		p8: number,
		flags: integer
	): void;

	/**
	 * Native: NETWORK::_0x4811BBAC21C5FCD5
	 *
	 * Hash: 0x4811BBAC21C5FCD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4811BBAC21C5FCD5)
	 */
	_0x4811BBAC21C5FCD5(p0: integer): void;

	/**
	 * Native: NETWORK::_0x4A9FDE3A5A6D0437
	 *
	 * Hash: 0x4A9FDE3A5A6D0437 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A9FDE3A5A6D0437)
	 */
	_0x4A9FDE3A5A6D0437(toggle: boolean): void;

	/**
	 * Native: NETWORK::_0x4AD490AE1536933B
	 *
	 * Hash: 0x4AD490AE1536933B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AD490AE1536933B)
	 */
	_0x4AD490AE1536933B(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::_0x4C2A9FDC22377075
	 *
	 * Hash: 0x4C2A9FDC22377075 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C2A9FDC22377075)
	 */
	_0x4C2A9FDC22377075(): void;

	/**
	 * Native: NETWORK::_0x4C9034162368E206
	 *
	 * Hash: 0x4C9034162368E206 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C9034162368E206)
	 */
	_0x4C9034162368E206(): integer;

	/**
	 * Native: NETWORK::_0x4D02279C83BE69FE
	 *
	 * Hash: 0x4D02279C83BE69FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D02279C83BE69FE)
	 */
	_0x4D02279C83BE69FE(): integer;

	/**
	 * Native: NETWORK::_0x5324A0E3E4CE3570
	 *
	 * Hash: 0x5324A0E3E4CE3570 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5324A0E3E4CE3570)
	 */
	_0x5324A0E3E4CE3570(p0: integer, p1: integer): _0x5324A0E3E4CE3570Result;

	/**
	 * Native: NETWORK::_0x53C10C8BD774F2C9
	 *
	 * Hash: 0x53C10C8BD774F2C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53C10C8BD774F2C9)
	 */
	_0x53C10C8BD774F2C9(): integer;

	/**
	 * Native: NETWORK::_0x5539C3EBF104A53A
	 *
	 * Hash: 0x5539C3EBF104A53A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5539C3EBF104A53A)
	 */
	_0x5539C3EBF104A53A(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x584770794D758C18
	 *
	 * Hash: 0x584770794D758C18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x584770794D758C18)
	 */
	_0x584770794D758C18(p0: integer): integer;

	/**
	 * Native: NETWORK::_0x59328EB08C5CEB2B
	 *
	 * Hash: 0x59328EB08C5CEB2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59328EB08C5CEB2B)
	 */
	_0x59328EB08C5CEB2B(): boolean;

	/**
	 * Native: NETWORK::_0x59D421683D31835A
	 *
	 * Hash: 0x59D421683D31835A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59D421683D31835A)
	 */
	_0x59D421683D31835A(p0: integer): void;

	/**
	 * Native: NETWORK::_0x5A34CD9C3C5BEC44
	 *
	 * Hash: 0x5A34CD9C3C5BEC44 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A34CD9C3C5BEC44)
	 */
	_0x5A34CD9C3C5BEC44(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x5C497525F803486B
	 *
	 * Hash: 0x5C497525F803486B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C497525F803486B)
	 */
	_0x5C497525F803486B(): void;

	/**
	 * Native: NETWORK::_0x5ECD378EE64450AB
	 *
	 * Hash: 0x5ECD378EE64450AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5ECD378EE64450AB)
	 */
	_0x5ECD378EE64450AB(p0: integer): void;

	/**
	 * Native: NETWORK::_0x600F8CB31C7AAB6E
	 *
	 * Hash: 0x600F8CB31C7AAB6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x600F8CB31C7AAB6E)
	 */
	_0x600F8CB31C7AAB6E(p0: integer): void;

	/**
	 * Native: NETWORK::_0x60EDD13EB3AC1FF3
	 *
	 * Hash: 0x60EDD13EB3AC1FF3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60EDD13EB3AC1FF3)
	 */
	_0x60EDD13EB3AC1FF3(): boolean;

	/**
	 * Native: NETWORK::_0x617F49C2668E6155
	 *
	 * Hash: 0x617F49C2668E6155 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x617F49C2668E6155)
	 */
	_0x617F49C2668E6155(): integer;

	/**
	 * Native: NETWORK::_0x63B406D7884BFA95
	 *
	 * Hash: 0x63B406D7884BFA95 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63B406D7884BFA95)
	 */
	_0x63B406D7884BFA95(): integer;

	/**
	 * Native: NETWORK::_0x64D779659BC37B19
	 *
	 * Hash: 0x64D779659BC37B19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x64D779659BC37B19)
	 */
	_0x64D779659BC37B19(entity: Handle): Vector3Mp;

	/**
	 * Native: NETWORK::_0x64E5C4CC82847B73
	 *
	 * Hash: 0x64E5C4CC82847B73 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x64E5C4CC82847B73)
	 */
	_0x64E5C4CC82847B73(): boolean;

	/**
	 * Native: NETWORK::_0x67FC09BC554A75E5
	 *
	 * Hash: 0x67FC09BC554A75E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67FC09BC554A75E5)
	 */
	_0x67FC09BC554A75E5(): integer;

	/**
	 * Native: NETWORK::_0x68103E2247887242
	 *
	 * Hash: 0x68103E2247887242 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68103E2247887242)
	 */
	_0x68103E2247887242(): void;

	/**
	 * Native: NETWORK::_0x692D58DF40657E8C
	 *
	 * Hash: 0x692D58DF40657E8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x692D58DF40657E8C)
	 */
	_0x692D58DF40657E8C(p0: integer, p1: integer, p2: integer, p3: string, p4: integer, p5: boolean): boolean;

	/**
	 * Native: NETWORK::_0x6A5D89D7769A40D8
	 *
	 * Hash: 0x6A5D89D7769A40D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A5D89D7769A40D8)
	 */
	_0x6A5D89D7769A40D8(toggle: boolean): void;

	/**
	 * Native: NETWORK::_0x6BFF5F84102DF80A
	 *
	 * Hash: 0x6BFF5F84102DF80A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BFF5F84102DF80A)
	 */
	_0x6BFF5F84102DF80A(player: Handle): void;

	/**
	 * Native: NETWORK::_0x6CE50E47F5543D0C
	 *
	 * Hash: 0x6CE50E47F5543D0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CE50E47F5543D0C)
	 */
	_0x6CE50E47F5543D0C(): void;

	/**
	 * Native: NETWORK::_0x6FB7BB3607D27FA2
	 *
	 * Hash: 0x6FB7BB3607D27FA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FB7BB3607D27FA2)
	 */
	_0x6FB7BB3607D27FA2(): integer;

	/**
	 * Native: NETWORK::_0x6FD992C4A1C1B986
	 *
	 * Hash: 0x6FD992C4A1C1B986 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FD992C4A1C1B986)
	 */
	_0x6FD992C4A1C1B986(): integer;

	/**
	 * Native: NETWORK::_0x702BC4D605522539
	 *
	 * Hash: 0x702BC4D605522539 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x702BC4D605522539)
	 */
	_0x702BC4D605522539(p0: integer): void;

	/**
	 * Native: NETWORK::_0x71DC455F5CD1C2B1
	 *
	 * Hash: 0x71DC455F5CD1C2B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71DC455F5CD1C2B1)
	 */
	_0x71DC455F5CD1C2B1(): integer;

	/**
	 * Native: NETWORK::_0x741A3D8380319A81
	 *
	 * Hash: 0x741A3D8380319A81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x741A3D8380319A81)
	 */
	_0x741A3D8380319A81(): void;

	/**
	 * Native: NETWORK::_0x742B58F723233ED9
	 *
	 * Hash: 0x742B58F723233ED9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x742B58F723233ED9)
	 */
	_0x742B58F723233ED9(p0: integer): integer;

	/**
	 * Native: NETWORK::_0x74FB3E29E6D10FA9
	 *
	 * Hash: 0x74FB3E29E6D10FA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74FB3E29E6D10FA9)
	 */
	_0x74FB3E29E6D10FA9(): integer;

	/**
	 * Native: NETWORK::_0x754615490A029508
	 *
	 * Hash: 0x754615490A029508 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x754615490A029508)
	 */
	_0x754615490A029508(): integer;

	/**
	 * Native: NETWORK::_0x76B3F29D3F967692
	 *
	 * Hash: 0x76B3F29D3F967692 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76B3F29D3F967692)
	 */
	_0x76B3F29D3F967692(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x7808619F31FF22DB
	 *
	 * Hash: 0x7808619F31FF22DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7808619F31FF22DB)
	 */
	_0x7808619F31FF22DB(): integer;

	/**
	 * Native: NETWORK::_0x78321BEA235FD8CD
	 *
	 * Hash: 0x78321BEA235FD8CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78321BEA235FD8CD)
	 */
	_0x78321BEA235FD8CD(p0: integer, p1: boolean): boolean;

	/**
	 * Native: NETWORK::_0x793FF272D5B365F4
	 *
	 * Hash: 0x793FF272D5B365F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x793FF272D5B365F4)
	 */
	_0x793FF272D5B365F4(): integer;

	/**
	 * Native: NETWORK::_0x7D395EA61622E116
	 *
	 * Hash: 0x7D395EA61622E116 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D395EA61622E116)
	 */
	_0x7D395EA61622E116(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x7DB53B37A2F211A0
	 *
	 * Hash: 0x7DB53B37A2F211A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DB53B37A2F211A0)
	 */
	_0x7DB53B37A2F211A0(): integer;

	/**
	 * Native: NETWORK::_0x7EF7649B64D7FF10
	 *
	 * Hash: 0x7EF7649B64D7FF10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EF7649B64D7FF10)
	 */
	_0x7EF7649B64D7FF10(entity: Handle): boolean;

	/**
	 * Native: NETWORK::_0x7FCC39C46C3C03BD
	 *
	 * Hash: 0x7FCC39C46C3C03BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FCC39C46C3C03BD)
	 */
	_0x7FCC39C46C3C03BD(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x83FE8D7229593017
	 *
	 * Hash: 0x83FE8D7229593017 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83FE8D7229593017)
	 */
	_0x83FE8D7229593017(): void;

	/**
	 * Native: NETWORK::_0x88B588B41FF7868E
	 *
	 * Hash: 0x88B588B41FF7868E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88B588B41FF7868E)
	 */
	_0x88B588B41FF7868E(): integer;

	/**
	 * Native: NETWORK::_0x8B0C2964BA471961
	 *
	 * Hash: 0x8B0C2964BA471961 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B0C2964BA471961)
	 */
	_0x8B0C2964BA471961(): integer;

	/**
	 * Native: NETWORK::_0x8B4FFC790CA131EF
	 *
	 * Hash: 0x8B4FFC790CA131EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B4FFC790CA131EF)
	 */
	_0x8B4FFC790CA131EF(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: NETWORK::_0x8C8D2739BA44AF0F
	 *
	 * Hash: 0x8C8D2739BA44AF0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C8D2739BA44AF0F)
	 */
	_0x8C8D2739BA44AF0F(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0x8D11E61A4ABF49CC
	 *
	 * Hash: 0x8D11E61A4ABF49CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D11E61A4ABF49CC)
	 */
	_0x8D11E61A4ABF49CC(): boolean;

	/**
	 * Native: NETWORK::_0x8EF52ACAECC51D9C
	 *
	 * Hash: 0x8EF52ACAECC51D9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EF52ACAECC51D9C)
	 */
	_0x8EF52ACAECC51D9C(toggle: boolean): void;

	/**
	 * Native: NETWORK::_0x906CA41A4B74ECA4
	 *
	 * Hash: 0x906CA41A4B74ECA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x906CA41A4B74ECA4)
	 */
	_0x906CA41A4B74ECA4(): integer;

	/**
	 * Native: NETWORK::_0x94538037EE44F5CF
	 *
	 * Hash: 0x94538037EE44F5CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94538037EE44F5CF)
	 */
	_0x94538037EE44F5CF(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x9465E683B12D3F6B
	 *
	 * Hash: 0x9465E683B12D3F6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9465E683B12D3F6B)
	 */
	_0x9465E683B12D3F6B(): void;

	/**
	 * Native: NETWORK::_0x95BAF97C82464629
	 *
	 * Hash: 0x95BAF97C82464629 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95BAF97C82464629)
	 */
	_0x95BAF97C82464629(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x973D76AA760A6CB6
	 *
	 * Hash: 0x973D76AA760A6CB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x973D76AA760A6CB6)
	 */
	_0x973D76AA760A6CB6(p0: boolean): void;

	/**
	 * Native: NETWORK::_0x97A770BEEF227E2B
	 *
	 * Hash: 0x97A770BEEF227E2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97A770BEEF227E2B)
	 */
	_0x97A770BEEF227E2B(p0: integer, p1: integer): _0x97A770BEEF227E2BResult;

	/**
	 * Native: NETWORK::_0x9D724B400A7E8FFC
	 *
	 * Hash: 0x9D724B400A7E8FFC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D724B400A7E8FFC)
	 */
	_0x9D724B400A7E8FFC(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0x9D7AFCBF21C51712
	 *
	 * Hash: 0x9D7AFCBF21C51712 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D7AFCBF21C51712)
	 */
	_0x9D7AFCBF21C51712(toggle: boolean): void;

	/**
	 * Native: NETWORK::_0x9FEDF86898F100E9
	 *
	 * Hash: 0x9FEDF86898F100E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FEDF86898F100E9)
	 */
	_0x9FEDF86898F100E9(): integer;

	/**
	 * Native: NETWORK::_0xA0FA4EC6A05DA44E
	 *
	 * Hash: 0xA0FA4EC6A05DA44E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0FA4EC6A05DA44E)
	 */
	_0xA0FA4EC6A05DA44E(): integer;

	/**
	 * Native: NETWORK::_0xA12D3A5A3753CC23
	 *
	 * Hash: 0xA12D3A5A3753CC23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA12D3A5A3753CC23)
	 */
	_0xA12D3A5A3753CC23(): integer;

	/**
	 * Native: NETWORK::_0xA2E9C1AB8A92E8CD
	 *
	 * Hash: 0xA2E9C1AB8A92E8CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2E9C1AB8A92E8CD)
	 */
	_0xA2E9C1AB8A92E8CD(toggle: boolean): void;

	/**
	 * Native: NETWORK::_0xA5EAFE473E45C442
	 *
	 * Hash: 0xA5EAFE473E45C442 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5EAFE473E45C442)
	 */
	_0xA5EAFE473E45C442(
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
	 * Native: NETWORK::_0xA6FCECCF4721D679
	 *
	 * Hash: 0xA6FCECCF4721D679 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6FCECCF4721D679)
	 */
	_0xA6FCECCF4721D679(p0: integer): void;

	/**
	 * Native: NETWORK::_0xA7862BC5ED1DFD7E
	 *
	 * Hash: 0xA7862BC5ED1DFD7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7862BC5ED1DFD7E)
	 */
	_0xA7862BC5ED1DFD7E(p0: integer, p1: integer): _0xA7862BC5ED1DFD7EResult;

	/**
	 * Native: NETWORK::_0xA8ACB6459542A8C8
	 *
	 * Hash: 0xA8ACB6459542A8C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8ACB6459542A8C8)
	 */
	_0xA8ACB6459542A8C8(): integer;

	/**
	 * Native: NETWORK::_0xAA5FAFCD2C5F5E47
	 *
	 * Hash: 0xAA5FAFCD2C5F5E47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA5FAFCD2C5F5E47)
	 */
	_0xAA5FAFCD2C5F5E47(entity: Handle): Vector3Mp;

	/**
	 * Native: NETWORK::_0xADB57E5B663CCA8B
	 *
	 * Hash: 0xADB57E5B663CCA8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADB57E5B663CCA8B)
	 */
	_0xADB57E5B663CCA8B(p0: Handle): _0xADB57E5B663CCA8BResult;

	/**
	 * Native: NETWORK::_0xAEAB987727C5A8A4
	 *
	 * Hash: 0xAEAB987727C5A8A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEAB987727C5A8A4)
	 */
	_0xAEAB987727C5A8A4(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0xAEDF1BC1C133D6E3
	 *
	 * Hash: 0xAEDF1BC1C133D6E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEDF1BC1C133D6E3)
	 */
	_0xAEDF1BC1C133D6E3(): integer;

	/**
	 * Native: NETWORK::_0xB13E88E655E5A3BC
	 *
	 * Hash: 0xB13E88E655E5A3BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB13E88E655E5A3BC)
	 */
	_0xB13E88E655E5A3BC(): void;

	/**
	 * Native: NETWORK::_0xB309EBEA797E001F
	 *
	 * Hash: 0xB309EBEA797E001F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB309EBEA797E001F)
	 */
	_0xB309EBEA797E001F(p0: integer): integer;

	/**
	 * Native: NETWORK::_0xB37E4E6A2388CA7B
	 *
	 * Hash: 0xB37E4E6A2388CA7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB37E4E6A2388CA7B)
	 */
	_0xB37E4E6A2388CA7B(): boolean;

	/**
	 * Native: NETWORK::_0xB5D3453C98456528
	 *
	 * Hash: 0xB5D3453C98456528 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5D3453C98456528)
	 */
	_0xB5D3453C98456528(): integer;

	/**
	 * Native: NETWORK::_0xB606E6CC59664972
	 *
	 * Hash: 0xB606E6CC59664972 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB606E6CC59664972)
	 */
	_0xB606E6CC59664972(p0: integer): void;

	/**
	 * Native: NETWORK::_0xB746D20B17F2A229
	 *
	 * Hash: 0xB746D20B17F2A229 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB746D20B17F2A229)
	 */
	_0xB746D20B17F2A229(): _0xB746D20B17F2A229Result;

	/**
	 * Native: NETWORK::_0xB9351A07A0D458B1
	 *
	 * Hash: 0xB9351A07A0D458B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9351A07A0D458B1)
	 */
	_0xB9351A07A0D458B1(p0: integer): integer;

	/**
	 * Native: NETWORK::_0xBD545D44CCE70597
	 *
	 * Hash: 0xBD545D44CCE70597 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD545D44CCE70597)
	 */
	_0xBD545D44CCE70597(): boolean;

	/**
	 * Native: NETWORK::_0xBDB6F89C729CF388
	 *
	 * Hash: 0xBDB6F89C729CF388 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDB6F89C729CF388)
	 */
	_0xBDB6F89C729CF388(): boolean;

	/**
	 * Native: NETWORK::_0xC32EA7A2F6CA7557
	 *
	 * Hash: 0xC32EA7A2F6CA7557 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC32EA7A2F6CA7557)
	 */
	_0xC32EA7A2F6CA7557(): integer;

	/**
	 * Native: NETWORK::_0xC42DD763159F3461
	 *
	 * Hash: 0xC42DD763159F3461 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC42DD763159F3461)
	 */
	_0xC42DD763159F3461(): boolean;

	/**
	 * Native: NETWORK::_0xC571D0E77D8BBC29
	 *
	 * Hash: 0xC571D0E77D8BBC29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC571D0E77D8BBC29)
	 */
	_0xC571D0E77D8BBC29(): boolean;

	/**
	 * Native: NETWORK::_0xC87E740D9F3872CC
	 *
	 * Hash: 0xC87E740D9F3872CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC87E740D9F3872CC)
	 */
	_0xC87E740D9F3872CC(): integer;

	/**
	 * Native: NETWORK::_0xC9B43A33D09CADA7
	 *
	 * Hash: 0xC9B43A33D09CADA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9B43A33D09CADA7)
	 */
	_0xC9B43A33D09CADA7(p0: integer): void;

	/**
	 * Native: NETWORK::_0xCA59CCAE5D01E4CE
	 *
	 * Hash: 0xCA59CCAE5D01E4CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA59CCAE5D01E4CE)
	 */
	_0xCA59CCAE5D01E4CE(): void;

	/**
	 * Native: NETWORK::_0xCFEB46DCD7D8D5EB
	 *
	 * Hash: 0xCFEB46DCD7D8D5EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFEB46DCD7D8D5EB)
	 */
	_0xCFEB46DCD7D8D5EB(p0: boolean): void;

	/**
	 * Native: NETWORK::_0xD313DE83394AF134
	 *
	 * Hash: 0xD313DE83394AF134 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD313DE83394AF134)
	 */
	_0xD313DE83394AF134(): boolean;

	/**
	 * Native: NETWORK::_0xD6D7478CA62B8D41
	 *
	 * Hash: 0xD6D7478CA62B8D41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6D7478CA62B8D41)
	 */
	_0xD6D7478CA62B8D41(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0xD7B6C73CAD419BCF
	 *
	 * Hash: 0xD7B6C73CAD419BCF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7B6C73CAD419BCF)
	 */
	_0xD7B6C73CAD419BCF(p0: boolean): void;

	/**
	 * Native: NETWORK::_0xDB663CC9FF3407A9
	 *
	 * Hash: 0xDB663CC9FF3407A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB663CC9FF3407A9)
	 */
	_0xDB663CC9FF3407A9(player: Handle): integer;

	/**
	 * Native: NETWORK::_0xE16AA70CE9BEEDC3
	 *
	 * Hash: 0xE16AA70CE9BEEDC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE16AA70CE9BEEDC3)
	 */
	_0xE16AA70CE9BEEDC3(p0: integer): integer;

	/**
	 * Native: NETWORK::_0xE42D626EEC94E5D9
	 *
	 * Hash: 0xE42D626EEC94E5D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE42D626EEC94E5D9)
	 */
	_0xE42D626EEC94E5D9(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: NETWORK::_0xE6717E652B8C8D8A
	 *
	 * Hash: 0xE6717E652B8C8D8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6717E652B8C8D8A)
	 */
	_0xE6717E652B8C8D8A(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0xEA8C0DDB10E2822A
	 *
	 * Hash: 0xEA8C0DDB10E2822A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA8C0DDB10E2822A)
	 */
	_0xEA8C0DDB10E2822A(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::_0xEBCAB9E5048434F4
	 *
	 * Hash: 0xEBCAB9E5048434F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBCAB9E5048434F4)
	 */
	_0xEBCAB9E5048434F4(): integer;

	/**
	 * Native: NETWORK::_0xEBF8284D8CADEB53
	 *
	 * Hash: 0xEBF8284D8CADEB53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBF8284D8CADEB53)
	 */
	_0xEBF8284D8CADEB53(): void;

	/**
	 * Native: NETWORK::_0xEBFA8D50ADDC54C4
	 *
	 * Hash: 0xEBFA8D50ADDC54C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBFA8D50ADDC54C4)
	 */
	_0xEBFA8D50ADDC54C4(p0: integer): boolean;

	/**
	 * Native: NETWORK::_0xF083835B70BA9BFE
	 *
	 * Hash: 0xF083835B70BA9BFE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF083835B70BA9BFE)
	 */
	_0xF083835B70BA9BFE(): void;

	/**
	 * Native: NETWORK::_0xF287F506767CC8A9
	 *
	 * Hash: 0xF287F506767CC8A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF287F506767CC8A9)
	 */
	_0xF287F506767CC8A9(): integer;

	/**
	 * Native: NETWORK::_0xF49ABC20D8552257
	 *
	 * Hash: 0xF49ABC20D8552257 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF49ABC20D8552257)
	 */
	_0xF49ABC20D8552257(p0: integer): void;

	/**
	 * Native: NETWORK::_0xF6F4383B7C92F11A
	 *
	 * Hash: 0xF6F4383B7C92F11A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6F4383B7C92F11A)
	 */
	_0xF6F4383B7C92F11A(p0: integer): void;

	/**
	 * Native: NETWORK::_0xF814FEC6A19FD6E0
	 *
	 * Hash: 0xF814FEC6A19FD6E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF814FEC6A19FD6E0)
	 */
	_0xF814FEC6A19FD6E0(): void;

	/**
	 * Native: NETWORK::_0xFA2888E3833C8E96
	 *
	 * Hash: 0xFA2888E3833C8E96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA2888E3833C8E96)
	 */
	_0xFA2888E3833C8E96(): void;

	/**
	 * Native: NETWORK::_0xFAC18E7356BD3210
	 *
	 * Hash: 0xFAC18E7356BD3210 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAC18E7356BD3210)
	 */
	_0xFAC18E7356BD3210(): void;

	/**
	 * Native: NETWORK::_0xFAE628F1E9ADB239
	 *
	 * Hash: 0xFAE628F1E9ADB239 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAE628F1E9ADB239)
	 */
	_0xFAE628F1E9ADB239(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: NETWORK::_0xFB1F9381E80FA13F
	 *
	 * Hash: 0xFB1F9381E80FA13F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB1F9381E80FA13F)
	 */
	_0xFB1F9381E80FA13F(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::_0xFB680D403909DC70
	 *
	 * Hash: 0xFB680D403909DC70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB680D403909DC70)
	 */
	_0xFB680D403909DC70(teamId: integer, instanceId: integer): void;

	/**
	 * Native: NETWORK::_0xFD75DABC0957BF33
	 *
	 * Hash: 0xFD75DABC0957BF33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD75DABC0957BF33)
	 */
	_0xFD75DABC0957BF33(p0: boolean): void;
}

interface GameNetwork extends GameNetworkLegacy {
	/**
	 * Native: NETWORK::_NETWORK_ACCEPT_INVITE
	 *
	 * Hash: 0x62A0296C1BB1CEB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62A0296C1BB1CEB3)
	 */
	acceptInvite(): boolean;

	/**
	 * Native: NETWORK::NETWORK_ACCEPT_PRESENCE_INVITE
	 *
	 * Hash: 0xFA91550DF9318B22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA91550DF9318B22)
	 */
	acceptPresenceInvite(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_ACCESS_TUNABLE_BOOL
	 *
	 * Hash: 0xAA6A47A573ABB75A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA6A47A573ABB75A)
	 */
	accessTunableBool(tunableContext: string, tunableName: string): boolean;

	/**
	 * Native: NETWORK::NETWORK_ACCESS_TUNABLE_BOOL_HASH
	 *
	 * Hash: 0xEA16B69D93D71A45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA16B69D93D71A45)
	 */
	accessTunableBoolHash(tunableContext: integer, tunableName: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_ACCESS_TUNABLE_FLOAT
	 *
	 * Hash: 0xE5608CA7BC163A5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5608CA7BC163A5F)
	 */
	accessTunableFloat(tunableContext: string, tunableName: string): number;

	/**
	 * Native: NETWORK::NETWORK_ACCESS_TUNABLE_FLOAT_HASH
	 *
	 * Hash: 0x972BC203BBC4C4D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x972BC203BBC4C4D5)
	 */
	accessTunableFloatHash(tunableContext: integer, tunableName: integer): number;

	/**
	 * Native: NETWORK::NETWORK_ACCESS_TUNABLE_INT
	 *
	 * Hash: 0x8BE1146DFD5D4468 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BE1146DFD5D4468)
	 */
	accessTunableInt(tunableContext: string, tunableName: string): integer;

	/**
	 * Native: NETWORK::NETWORK_ACCESS_TUNABLE_INT_HASH
	 *
	 * Hash: 0x40FCE03E50E8DBE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40FCE03E50E8DBE8)
	 */
	accessTunableIntHash(tunableContext: integer, tunableName: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_ACTION_FOLLOW_INVITE
	 *
	 * Hash: 0xC88156EBB786F8D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC88156EBB786F8D5)
	 */
	actionFollowInvite(): integer;

	/**
	 * Native: NETWORK::ACTIVATE_DAMAGE_TRACKER_ON_NETWORK_ID
	 *
	 * Hash: 0xD45B1FFCCD52FF19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD45B1FFCCD52FF19)
	 */
	activateDamageTrackerOnId(netID: integer, toggle: boolean): void;

	/**
	 * Native: NETWORK::_ACTIVATE_DAMAGE_TRACKER_ON_PLAYER
	 *
	 * Hash: 0xBEC0816FF5ACBCDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBEC0816FF5ACBCDA)
	 */
	activateDamageTrackerOnPlayer(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_ADD_ENTITY_ANGLED_AREA
	 *
	 * Hash: 0x376C6375BA60293A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x376C6375BA60293A)
	 */
	addEntityAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, width: number): integer;

	/**
	 * Native: NETWORK::NETWORK_ADD_ENTITY_AREA
	 *
	 * Hash: 0x494C8FB299290269 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x494C8FB299290269)
	 */
	addEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): integer;

	/**
	 * Native: NETWORK::NETWORK_ADD_ENTITY_DISPLAYED_BOUNDARIES
	 *
	 * Hash: 0x25B99872D588A101 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25B99872D588A101)
	 */
	addEntityDisplayedBoundaries(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): integer;

	/**
	 * Native: NETWORK::NETWORK_ADD_ENTITY_TO_SYNCHRONISED_SCENE
	 *
	 * Hash: 0xF2404D68CBC855FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2404D68CBC855FA)
	 */
	addEntityToSynchronisedScene(
		entity: Handle,
		netScene: integer,
		animDict: string,
		animName: string,
		speed: number,
		speedMulitiplier: number,
		flag: integer
	): void;

	/**
	 * Native: NETWORK::NETWORK_ADD_FOLLOWERS
	 *
	 * Hash: 0x236406F60CF216D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x236406F60CF216D6)
	 */
	addFollowers(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_ADD_FRIEND
	 *
	 * Hash: 0x8E02D73914064223 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8E02D73914064223)
	 */
	addFriend(message: string): integer;

	/**
	 * Native: NETWORK::NETWORK_ADD_PED_TO_SYNCHRONISED_SCENE
	 *
	 * Hash: 0x742A637471BCECD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x742A637471BCECD9)
	 */
	addPedToSynchronisedScene(
		ped: Handle,
		netScene: integer,
		animDict: string,
		animnName: string,
		speed: number,
		speedMultiplier: number,
		duration: integer,
		flag: integer,
		playbackRate: number,
		p9: integer
	): void;

	/**
	 * Native: NETWORK::NETWORK_ADD_SYNCHRONISED_SCENE_CAMERA
	 *
	 * Hash: 0xCF8BD3B0BD6D42D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF8BD3B0BD6D42D7)
	 */
	addSynchronisedSceneCamera(netScene: integer, animDict: string, animName: string): void;

	/**
	 * Native: NETWORK::_NETWORK_ALLOCATE_TUNABLES_REGISTRATION_DATA_MAP
	 *
	 * Hash: 0xFAFC23AEE23868DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAFC23AEE23868DB)
	 */
	allocateTunablesRegistrationDataMap(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_ALLOW_LOCAL_ENTITY_ATTACHMENT
	 *
	 * Hash: 0x267C78C60E806B9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x267C78C60E806B9A)
	 */
	allowLocalEntityAttachment(entity: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_AM_I_BLOCKED_BY_GAMER
	 *
	 * Hash: 0x15337C7C268A27B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15337C7C268A27B2)
	 */
	amIBlockedByGamer(): integer;

	/**
	 * Native: NETWORK::NETWORK_AM_I_BLOCKED_BY_PLAYER
	 *
	 * Hash: 0x87F395D957D4353D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87F395D957D4353D)
	 */
	amIBlockedByPlayer(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_AM_I_MUTED_BY_GAMER
	 *
	 * Hash: 0xDF02A2C93F1F26DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF02A2C93F1F26DA)
	 */
	amIMutedByGamer(): integer;

	/**
	 * Native: NETWORK::NETWORK_AM_I_MUTED_BY_PLAYER
	 *
	 * Hash: 0x9D6981DFC91A8604 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D6981DFC91A8604)
	 */
	amIMutedByPlayer(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_APPLY_CACHED_PLAYER_HEAD_BLEND_DATA
	 *
	 * Hash: 0x99B72C7ABDE5C910 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99B72C7ABDE5C910)
	 */
	applyCachedPlayerHeadBlendData(ped: Handle, player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_APPLY_PED_SCAR_DATA
	 *
	 * Hash: 0xE66C690248F11150 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE66C690248F11150)
	 */
	applyPedScarData(ped: Handle, p1: integer): void;

	/**
	 * Native: NETWORK::NETWORK_APPLY_TRANSITION_PARAMETER
	 *
	 * Hash: 0x521638ADA1BA0D18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x521638ADA1BA0D18)
	 */
	applyTransitionParameter(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::NETWORK_APPLY_TRANSITION_PARAMETER_STRING
	 *
	 * Hash: 0xEBEFC2E77084F599 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEBEFC2E77084F599)
	 */
	applyTransitionParameterString(p0: integer, string: string, p2: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_APPLY_VOICE_PROXIMITY_OVERRIDE
	 *
	 * Hash: 0xDBD2056652689917 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBD2056652689917)
	 */
	applyVoiceProximityOverride(x: number, y: number, z: number): void;

	/**
	 * Native: NETWORK::NETWORK_ARE_HANDLES_THE_SAME
	 *
	 * Hash: 0x57DBA049E110F217 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57DBA049E110F217)
	 */
	areHandlesTheSame(): NetworkAreHandlesTheSameResult;

	/**
	 * Native: NETWORK::NETWORK_ARE_SOCIAL_CLUB_POLICIES_CURRENT
	 *
	 * Hash: 0xBA9775570DB788CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA9775570DB788CF)
	 */
	areSocialClubPoliciesCurrent(): boolean;

	/**
	 * Native: NETWORK::NETWORK_ARE_TRANSITION_DETAILS_VALID
	 *
	 * Hash: 0x2615AA2A695930C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2615AA2A695930C1)
	 */
	areTransitionDetailsValid(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_ATTACH_SYNCHRONISED_SCENE_TO_ENTITY
	 *
	 * Hash: 0x478DCBD2A98B705A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x478DCBD2A98B705A)
	 */
	attachSynchronisedSceneToEntity(netScene: integer, entity: Handle, bone: integer): void;

	/**
	 * Native: NETWORK::BAD_SPORT_PLAYER_LEFT_DETECTED
	 *
	 * Hash: 0xEC5E3AF5289DCA81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC5E3AF5289DCA81)
	 */
	badSportPlayerLeftDetected(event: integer, amountReceived: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_BAIL
	 *
	 * Hash: 0x95914459A87EBA28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95914459A87EBA28)
	 */
	bail(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: NETWORK::NETWORK_BAIL_TRANSITION
	 *
	 * Hash: 0xEAA572036990CD1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAA572036990CD1B)
	 */
	bailTransition(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: NETWORK::NETWORK_BLOCK_INVITES
	 *
	 * Hash: 0x34F9E9049454A7A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34F9E9049454A7A0)
	 */
	blockInvites(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_BLOCK_JOIN_QUEUE_INVITES
	 *
	 * Hash: 0xCFEB8AF24FC1D0BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFEB8AF24FC1D0BB)
	 */
	blockJoinQueueInvites(toggle: boolean): void;

	/**
	 * Native: NETWORK::_NETWORK_BLOCK_KICKED_PLAYERS
	 *
	 * Hash: 0x6B07B9CE4D390375 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B07B9CE4D390375)
	 */
	blockKickedPlayers(p0: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_CACHE_LOCAL_PLAYER_HEAD_BLEND_DATA
	 *
	 * Hash: 0xBD0BE0BFC927EAC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD0BE0BFC927EAC1)
	 */
	cacheLocalPlayerHeadBlendData(): void;

	/**
	 * Native: NETWORK::NETWORK_CAN_ACCESS_MULTIPLAYER
	 *
	 * Hash: 0xAF50DA1A3F8B1BA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF50DA1A3F8B1BA4)
	 */
	canAccessMultiplayer(): integer;

	/**
	 * Native: NETWORK::NETWORK_CAN_BAIL
	 *
	 * Hash: 0x580CE4438479CC61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x580CE4438479CC61)
	 */
	canBail(): boolean;

	/**
	 * Native: NETWORK::NETWORK_CANCEL_RESPAWN_SEARCH
	 *
	 * Hash: 0xFB8F2A6F3DF08CBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB8F2A6F3DF08CBE)
	 */
	cancelRespawnSearch(): void;

	/**
	 * Native: NETWORK::NETWORK_CAN_COMMUNICATE_WITH_GAMER
	 *
	 * Hash: 0xA150A4F065806B1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA150A4F065806B1F)
	 */
	canCommunicateWithGamer(): integer;

	/**
	 * Native: NETWORK::_NETWORK_CAN_COMMUNICATE_WITH_GAMER_2
	 *
	 * Hash: 0x8F5D1AD832AEB06C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F5D1AD832AEB06C)
	 */
	canCommunicateWithGamer2(): integer;

	/**
	 * Native: NETWORK::NETWORK_CAN_ENTER_MULTIPLAYER
	 *
	 * Hash: 0x7E782A910C362C25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E782A910C362C25)
	 */
	canEnterMultiplayer(): boolean;

	/**
	 * Native: NETWORK::NETWORK_CAN_GAMER_PLAY_MULTIPLAYER_WITH_ME
	 *
	 * Hash: 0x135F9B7B7ADD2185 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x135F9B7B7ADD2185)
	 */
	canGamerPlayMultiplayerWithMe(): integer;

	/**
	 * Native: NETWORK::NETWORK_CAN_PLAY_MULTIPLAYER_WITH_GAMER
	 *
	 * Hash: 0x07DD29D5E22763F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07DD29D5E22763F1)
	 */
	canPlayMultiplayerWithGamer(): integer;

	/**
	 * Native: NETWORK::CAN_REGISTER_MISSION_ENTITIES
	 *
	 * Hash: 0x69778E7564BADE6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69778E7564BADE6D)
	 */
	canRegisterMissionEntities(ped_amt: integer, vehicle_amt: integer, object_amt: integer, pickup_amt: integer): boolean;

	/**
	 * Native: NETWORK::CAN_REGISTER_MISSION_OBJECTS
	 *
	 * Hash: 0x800DD4721A8B008B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x800DD4721A8B008B)
	 */
	canRegisterMissionObjects(amount: integer): boolean;

	/**
	 * Native: NETWORK::CAN_REGISTER_MISSION_PEDS
	 *
	 * Hash: 0xBCBF4FEF9FA5D781 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCBF4FEF9FA5D781)
	 */
	canRegisterMissionPeds(amount: integer): boolean;

	/**
	 * Native: NETWORK::_CAN_REGISTER_MISSION_PICKUPS
	 *
	 * Hash: 0x0A49D1CB6E34AF72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A49D1CB6E34AF72)
	 */
	canRegisterMissionPickups(amount: integer): boolean;

	/**
	 * Native: NETWORK::CAN_REGISTER_MISSION_VEHICLES
	 *
	 * Hash: 0x7277F1F2E085EE74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7277F1F2E085EE74)
	 */
	canRegisterMissionVehicles(amount: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_CAN_SESSION_END
	 *
	 * Hash: 0x4EEBC3694E49C572 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EEBC3694E49C572)
	 */
	canSessionEnd(): boolean;

	/**
	 * Native: NETWORK::NETWORK_CAN_SET_WAYPOINT
	 *
	 * Hash: 0xC927EC229934AF60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC927EC229934AF60)
	 */
	canSetWaypoint(): boolean;

	/**
	 * Native: NETWORK::NETWORK_CAN_VIEW_GAMER_USER_CONTENT
	 *
	 * Hash: 0xB57A49545BA53CE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB57A49545BA53CE7)
	 */
	canViewGamerUserContent(): integer;

	/**
	 * Native: NETWORK::NETWORK_CHANGE_TRANSITION_SLOTS
	 *
	 * Hash: 0xEEEDA5E6D7080987 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEEDA5E6D7080987)
	 */
	changeTransitionSlots(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::NETWORK_CHECK_COMMUNICATION_PRIVILEGES
	 *
	 * Hash: 0x83F28CE49FBBFFBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83F28CE49FBBFFBA)
	 */
	checkCommunicationPrivileges(p0: integer, p1: integer, p2: boolean): boolean;

	/**
	 * Native: NETWORK::NETWORK_CHECK_DATA_MANAGER_SUCCEEDED_FOR_HANDLE
	 *
	 * Hash: 0x44B37CDCAE765AAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44B37CDCAE765AAE)
	 */
	checkDataManagerSucceededForHandle(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CHECK_USER_CONTENT_PRIVILEGES
	 *
	 * Hash: 0x595F028698072DD9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x595F028698072DD9)
	 */
	checkUserContentPrivileges(p0: integer, p1: integer, p2: boolean): boolean;

	/**
	 * Native: NETWORK::_NETWORK_CLAN_ANIMATION
	 *
	 * Hash: 0x729E3401F0430686 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x729E3401F0430686)
	 */
	clanAnimation(animDict: string, animName: string): boolean;

	/**
	 * Native: NETWORK::NETWORK_CLAN_ANY_DOWNLOAD_MEMBERSHIP_PENDING
	 *
	 * Hash: 0xB3F64A6A91432477 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3F64A6A91432477)
	 */
	clanAnyDownloadMembershipPending(): boolean;

	/**
	 * Native: NETWORK::NETWORK_CLAN_DOWNLOAD_MEMBERSHIP
	 *
	 * Hash: 0xA989044E70010ABE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA989044E70010ABE)
	 */
	clanDownloadMembership(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_DOWNLOAD_MEMBERSHIP_PENDING
	 *
	 * Hash: 0x5B9E023DC6EBEDC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B9E023DC6EBEDC0)
	 */
	clanDownloadMembershipPending(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_EMBLEM_TXD_NAME
	 *
	 * Hash: 0x5835D9CD92E83184 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5835D9CD92E83184)
	 */
	clanGetEmblemTxdName(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_LOCAL_MEMBERSHIPS_COUNT
	 *
	 * Hash: 0x1F471B79ACC90BEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F471B79ACC90BEF)
	 */
	clanGetLocalMembershipsCount(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_MEMBERSHIP
	 *
	 * Hash: 0xC8BC2011F67B3411 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8BC2011F67B3411)
	 */
	clanGetMembership(p2: integer): NetworkClanGetMembershipResult;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_MEMBERSHIP_COUNT
	 *
	 * Hash: 0xAAB11F6C4ADBC2C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAB11F6C4ADBC2C1)
	 */
	clanGetMembershipCount(): NetworkClanGetMembershipCountResult;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_MEMBERSHIP_DESC
	 *
	 * Hash: 0x48DE78AF2C8885B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48DE78AF2C8885B8)
	 */
	clanGetMembershipDesc(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_MEMBERSHIP_VALID
	 *
	 * Hash: 0x48A59CF88D43DF0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48A59CF88D43DF0E)
	 */
	clanGetMembershipValid(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_GET_UI_FORMATTED_TAG
	 *
	 * Hash: 0xF45352426FF3A4F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF45352426FF3A4F0)
	 */
	clanGetUiFormattedTag(bufferSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_IS_EMBLEM_READY
	 *
	 * Hash: 0xA134777FF7F33331 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA134777FF7F33331)
	 */
	clanIsEmblemReady(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_IS_ROCKSTAR_CLAN
	 *
	 * Hash: 0x7543BB439F63792B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7543BB439F63792B)
	 */
	clanIsRockstarClan(bufferSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_JOIN
	 *
	 * Hash: 0x9FAAA4F4FC71F87F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FAAA4F4FC71F87F)
	 */
	clanJoin(clanDesc: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_CLAN_PLAYER_GET_DESC
	 *
	 * Hash: 0xEEE6EACBE8874FBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEEE6EACBE8874FBA)
	 */
	clanPlayerGetDesc(bufferSize: integer): NetworkClanPlayerGetDescResult;

	/**
	 * Native: NETWORK::NETWORK_CLAN_PLAYER_IS_ACTIVE
	 *
	 * Hash: 0xB124B57F571D8F18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB124B57F571D8F18)
	 */
	clanPlayerIsActive(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_RELEASE_EMBLEM
	 *
	 * Hash: 0x113E6E3E50E286B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x113E6E3E50E286B0)
	 */
	clanReleaseEmblem(p0: integer): void;

	/**
	 * Native: NETWORK::NETWORK_CLAN_REMOTE_MEMBERSHIPS_ARE_IN_CACHE
	 *
	 * Hash: 0xBB6E6FEE99D866B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB6E6FEE99D866B2)
	 */
	clanRemoteMembershipsAreInCache(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLAN_REQUEST_EMBLEM
	 *
	 * Hash: 0x13518FF1C6B28938 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13518FF1C6B28938)
	 */
	clanRequestEmblem(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_CLAN_SERVICE_IS_VALID
	 *
	 * Hash: 0x579CCED0265D4896 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x579CCED0265D4896)
	 */
	clanServiceIsValid(): boolean;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_CLOCK_TIME_OVERRIDE
	 *
	 * Hash: 0xD972DF67326F966E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD972DF67326F966E)
	 */
	clearClockTimeOverride(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_FOLLOWERS
	 *
	 * Hash: 0x058F43EC59A8631A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x058F43EC59A8631A)
	 */
	clearFollowers(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_FOLLOW_INVITE
	 *
	 * Hash: 0x439BFDE3CD0610F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x439BFDE3CD0610F6)
	 */
	clearFollowInvite(): integer;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_FOUND_GAMERS
	 *
	 * Hash: 0x6D14CCEE1B40381A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D14CCEE1B40381A)
	 */
	clearFoundGamers(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_GET_GAMER_STATUS
	 *
	 * Hash: 0x86E0660E4F5C956D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x86E0660E4F5C956D)
	 */
	clearGetGamerStatus(): void;

	/**
	 * Native: NETWORK::_CLEAR_LAUNCH_PARAMS
	 *
	 * Hash: 0x966DD84FB6A46017 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x966DD84FB6A46017)
	 */
	clearLaunchParams(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_OFFLINE_INVITE_PENDING
	 *
	 * Hash: 0x140E6A44870A11CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x140E6A44870A11CE)
	 */
	clearOfflineInvitePending(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_PROPERTY_ID
	 *
	 * Hash: 0xC2B82527CA77053E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2B82527CA77053E)
	 */
	clearPropertyId(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_TRANSITION_CREATOR_HANDLE
	 *
	 * Hash: 0xFB3272229A82C759 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB3272229A82C759)
	 */
	clearTransitionCreatorHandle(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_VOICE_CHANNEL
	 *
	 * Hash: 0xE036A705F989E049 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE036A705F989E049)
	 */
	clearVoiceChannel(): void;

	/**
	 * Native: NETWORK::NETWORK_CLEAR_VOICE_PROXIMITY_OVERRIDE
	 *
	 * Hash: 0xF03755696450470C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF03755696450470C)
	 */
	clearVoiceProximityOverride(): void;

	/**
	 * Native: NETWORK::NETWORK_CLOSE_TRANSITION_MATCHMAKING
	 *
	 * Hash: 0x43F4DBA69710E01E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43F4DBA69710E01E)
	 */
	closeTransitionMatchmaking(): void;

	/**
	 * Native: NETWORK::CLOUD_CHECK_AVAILABILITY
	 *
	 * Hash: 0x4F18196C8D38768D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F18196C8D38768D)
	 */
	cloudCheckAvailability(): void;

	/**
	 * Native: NETWORK::CLOUD_DELETE_MEMBER_FILE
	 *
	 * Hash: 0xC64DED7EF0D2FE37 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC64DED7EF0D2FE37)
	 */
	cloudDeleteMemberFile(p0: string): integer;

	/**
	 * Native: NETWORK::CLOUD_DID_REQUEST_SUCCEED
	 *
	 * Hash: 0x3A3D5568AF297CD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A3D5568AF297CD5)
	 */
	cloudDidRequestSucceed(handle: integer): boolean;

	/**
	 * Native: NETWORK::CLOUD_GET_AVAILABILITY_CHECK_RESULT
	 *
	 * Hash: 0x0B0CC10720653F3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B0CC10720653F3B)
	 */
	cloudGetAvailabilityCheckResult(): boolean;

	/**
	 * Native: NETWORK::CLOUD_HAS_REQUEST_COMPLETED
	 *
	 * Hash: 0x4C61B39930D045DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C61B39930D045DA)
	 */
	cloudHasRequestCompleted(handle: integer): boolean;

	/**
	 * Native: NETWORK::CLOUD_IS_CHECKING_AVAILABILITY
	 *
	 * Hash: 0xC7ABAC5DE675EE3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7ABAC5DE675EE3B)
	 */
	cloudIsCheckingAvailability(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_CONCEAL_ENTITY
	 *
	 * Hash: 0x1632BE0AC1E62876 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1632BE0AC1E62876)
	 */
	concealEntity(entity: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_CONCEAL_PLAYER
	 *
	 * Hash: 0xBBDF066252829606 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBDF066252829606)
	 */
	concealPlayer(player: Handle, toggle: boolean, p2: boolean): void;

	/**
	 * Native: NETWORK::CONVERT_POSIX_TIME
	 *
	 * Hash: 0xAC97AF97FA68E5D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC97AF97FA68E5D5)
	 */
	convertPosixTime(posixTime: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_CREATE_SYNCHRONISED_SCENE
	 *
	 * animTime defaults to 0.0
	 * p11 defaults to 0.0
	 *
	 * Hash: 0x7CD6BC4C2BBDD526 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CD6BC4C2BBDD526)
	 */
	createSynchronisedScene(
		x: number,
		y: number,
		z: number,
		xRot: number,
		yRot: number,
		zRot: number,
		rotationOrder: integer,
		useOcclusionPortal: boolean,
		looped: boolean,
		p9: number,
		animTime?: number,
		p11?: number
	): integer;

	/**
	 * Native: NETWORK::NETWORK_DID_FIND_GAMERS_SUCCEED
	 *
	 * Hash: 0xF9B83B77929D8863 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9B83B77929D8863)
	 */
	didFindGamersSucceed(): boolean;

	/**
	 * Native: NETWORK::NETWORK_DID_GET_GAMER_STATUS_SUCCEED
	 *
	 * Hash: 0x5AE17C6B0134B7F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5AE17C6B0134B7F1)
	 */
	didGetGamerStatusSucceed(): boolean;

	/**
	 * Native: NETWORK::NETWORK_DISABLE_INVINCIBLE_FLASHING
	 *
	 * Hash: 0x9DD368BF06983221 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DD368BF06983221)
	 */
	disableInvincibleFlashing(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_DISABLE_LEAVE_REMOTE_PED_BEHIND
	 *
	 * Hash: 0xC505036A35AFD01B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC505036A35AFD01B)
	 */
	disableLeaveRemotePedBehind(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_DISABLE_PROXIMITY_MIGRATION
	 *
	 * Hash: 0x407091CF6037118E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x407091CF6037118E)
	 */
	disableProximityMigration(netID: integer): void;

	/**
	 * Native: NETWORK::NETWORK_DISABLE_VOICE_BANDWIDTH_RESTRICTION
	 *
	 * Hash: 0xCA575C391FEA25CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA575C391FEA25CC)
	 */
	disableVoiceBandwidthRestriction(player: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_DISPLAYNAMES_FROM_HANDLES_START
	 *
	 * Hash: 0xD66C9E72B3CC4982 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD66C9E72B3CC4982)
	 */
	displaynamesFromHandlesStart(p1: integer): NetworkDisplaynamesFromHandlesStartResult;

	/**
	 * Native: NETWORK::NETWORK_DOES_ENTITY_EXIST_WITH_NETWORK_ID
	 *
	 * Hash: 0x18A47D074708FD68 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18A47D074708FD68)
	 */
	doesEntityExistWithNetworkId(netId: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_DOES_NETWORK_ID_EXIST
	 *
	 * Hash: 0x38CE16C96BD11344 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38CE16C96BD11344)
	 */
	doesNetworkIdExist(netId: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_DOES_TUNABLE_EXIST
	 *
	 * Hash: 0x85E5F8B9B898B20A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85E5F8B9B898B20A)
	 */
	doesTunableExist(tunableContext: string, tunableName: string): boolean;

	/**
	 * Native: NETWORK::NETWORK_DOES_TUNABLE_EXIST_HASH
	 *
	 * Hash: 0xE4E53E1419D81127 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4E53E1419D81127)
	 */
	doesTunableExistHash(tunableContext: integer, tunableName: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_QUICKMATCH
	 *
	 * p4 defaults to 0
	 * p5 defaults to 0
	 *
	 * Hash: 0x71FB0EBCD4915D56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71FB0EBCD4915D56)
	 */
	doTransitionQuickmatch(p0: integer, p1: integer, p2: integer, p3: integer, p4?: integer, p5?: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_QUICKMATCH_ASYNC
	 *
	 * Hash: 0xA091A5E44F0072E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA091A5E44F0072E5)
	 */
	doTransitionQuickmatchAsync(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_QUICKMATCH_WITH_GROUP
	 *
	 * p6 defaults to 0
	 * p7 defaults to 0
	 *
	 * Hash: 0x9C4AB58491FDC98A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C4AB58491FDC98A)
	 */
	doTransitionQuickmatchWithGroup(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p5: integer,
		p6?: integer,
		p7?: integer
	): integer;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_TO_FREEMODE
	 *
	 * Hash: 0x3AAD8B2FCA1E289F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3AAD8B2FCA1E289F)
	 */
	doTransitionToFreemode(p1: integer, p2: boolean, players: integer, p4: boolean): integer;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_TO_GAME
	 *
	 * Hash: 0x3E9BB38102A589B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E9BB38102A589B0)
	 */
	doTransitionToGame(p0: boolean, maxPlayers: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_TO_NEW_FREEMODE
	 *
	 * Hash: 0x9E80A5BA8109F974 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E80A5BA8109F974)
	 */
	doTransitionToNewFreemode(
		players: integer,
		p3: boolean,
		p4: boolean,
		p5: boolean
	): NetworkDoTransitionToNewFreemodeResult;

	/**
	 * Native: NETWORK::NETWORK_DO_TRANSITION_TO_NEW_GAME
	 *
	 * Hash: 0x4665F51EFED00034 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4665F51EFED00034)
	 */
	doTransitionToNewGame(p0: boolean, maxPlayers: integer, p2: boolean): boolean;

	/**
	 * Native: NETWORK::NETWORK_ENABLE_VOICE_BANDWIDTH_RESTRICTION
	 *
	 * Hash: 0x5E3AA4CA2B6FB0EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E3AA4CA2B6FB0EE)
	 */
	enableVoiceBandwidthRestriction(player: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_END_TUTORIAL_SESSION
	 *
	 * Hash: 0xD0AFAFF5A51D72F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0AFAFF5A51D72F7)
	 */
	endTutorialSession(): void;

	/**
	 * Native: NETWORK::NETWORK_ENTITY_AREA_DOES_EXIST
	 *
	 * Hash: 0xE64A3CA08DFA37A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE64A3CA08DFA37A9)
	 */
	entityAreaDoesExist(areaHandle: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_ENTITY_AREA_HAVE_ALL_REPLIED
	 *
	 * Hash: 0x4DF7CFFF471A7FB1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4DF7CFFF471A7FB1)
	 */
	entityAreaHaveAllReplied(areaHandle: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_ENTITY_AREA_IS_OCCUPIED
	 *
	 * Hash: 0x4A2D4E8BF4265B0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A2D4E8BF4265B0F)
	 */
	entityAreaIsOccupied(areaHandle: integer): boolean;

	/**
	 * Native: NETWORK::_NETWORK_EXPLODE_HELI
	 *
	 * Hash: 0x2A5E0621DD815A9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A5E0621DD815A9A)
	 */
	explodeHeli(vehicle: Handle, isAudible: boolean, isInvisible: boolean, netId: integer): void;

	/**
	 * Native: NETWORK::NETWORK_EXPLODE_VEHICLE
	 *
	 * Hash: 0x301A42153C9AD707 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x301A42153C9AD707)
	 */
	explodeVehicle(vehicle: Handle, isAudible: boolean, isInvisible: boolean, netId: integer): void;

	/**
	 * Native: NETWORK::_FACEBOOK_DO_UNK_CHECK
	 *
	 * Hash: 0xA75E2B6733DA5142 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA75E2B6733DA5142)
	 */
	facebookDoUnkCheck(): boolean;

	/**
	 * Native: NETWORK::_FACEBOOK_IS_AVAILABLE
	 *
	 * Hash: 0x43865688AE10F0D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43865688AE10F0D7)
	 */
	facebookIsAvailable(): boolean;

	/**
	 * Native: NETWORK::_FACEBOOK_IS_SENDING_DATA
	 *
	 * Hash: 0x62B9FEC9A11F10EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62B9FEC9A11F10EF)
	 */
	facebookIsSendingData(): boolean;

	/**
	 * Native: NETWORK::FACEBOOK_POST_COMPLETED_HEIST
	 *
	 * Hash: 0x098AB65B9ED9A9EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x098AB65B9ED9A9EC)
	 */
	facebookPostCompletedHeist(heistName: string, cashEarned: integer, xpEarned: integer): boolean;

	/**
	 * Native: NETWORK::FACEBOOK_POST_COMPLETED_MILESTONE
	 *
	 * Hash: 0x0AE1F1653B554AB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AE1F1653B554AB9)
	 */
	facebookPostCompletedMilestone(milestoneId: integer): boolean;

	/**
	 * Native: NETWORK::FACEBOOK_POST_CREATE_CHARACTER
	 *
	 * Hash: 0xDC48473142545431 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC48473142545431)
	 */
	facebookPostCreateCharacter(): boolean;

	/**
	 * Native: NETWORK::NETWORK_FADE_IN_ENTITY
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x1F4ED342ACEFE62D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F4ED342ACEFE62D)
	 */
	fadeInEntity(entity: Handle, state: boolean, p2?: integer): void;

	/**
	 * Native: NETWORK::NETWORK_FADE_OUT_ENTITY
	 *
	 * Hash: 0xDE564951F95E09ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE564951F95E09ED)
	 */
	fadeOutEntity(entity: Handle, normal: boolean, slow: boolean): void;

	/**
	 * Native: NETWORK::FADE_OUT_LOCAL_PLAYER
	 *
	 * Hash: 0x416DBD4CD6ED8DD2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x416DBD4CD6ED8DD2)
	 */
	fadeOutLocalPlayer(p0: boolean): void;

	/**
	 * Native: NETWORK::FILLOUT_PM_PLAYER_LIST
	 *
	 * Hash: 0xCBBD7C4991B64809 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBBD7C4991B64809)
	 */
	filloutPmPlayerList(p1: integer, p2: integer): integer;

	/**
	 * Native: NETWORK::FILLOUT_PM_PLAYER_LIST_WITH_NAMES
	 *
	 * Hash: 0x716B6DB9D1886106 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x716B6DB9D1886106)
	 */
	filloutPmPlayerListWithNames(p2: integer, p3: integer): FilloutPmPlayerListWithNamesResult;

	/**
	 * Native: NETWORK::NETWORK_FIND_GAMERS_IN_CREW
	 *
	 * Hash: 0xE532D6811B3A4D2A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE532D6811B3A4D2A)
	 */
	findGamersInCrew(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_FIND_MATCHED_GAMERS
	 *
	 * Hash: 0xF7B2CFDE5C9F700D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF7B2CFDE5C9F700D)
	 */
	findMatchedGamers(p0: integer, p1: number, p2: number, p3: number): boolean;

	/**
	 * Native: NETWORK::NETWORK_FINISH_BROADCASTING_DATA
	 *
	 * Hash: 0x64F62AFB081E260D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x64F62AFB081E260D)
	 */
	finishBroadcastingData(): void;

	/**
	 * Native: NETWORK::NETWORK_GAMER_HAS_HEADSET
	 *
	 * Hash: 0xF2FD55CB574BCC55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2FD55CB574BCC55)
	 */
	gamerHasHeadset(): integer;

	/**
	 * Native: NETWORK::NETWORK_GAMERTAG_FROM_HANDLE_PENDING
	 *
	 * Hash: 0xB071E27958EF4CF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB071E27958EF4CF0)
	 */
	gamertagFromHandlePending(): boolean;

	/**
	 * Native: NETWORK::NETWORK_GAMERTAG_FROM_HANDLE_START
	 *
	 * Hash: 0x9F0C0A981D73FA56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F0C0A981D73FA56)
	 */
	gamertagFromHandleStart(): integer;

	/**
	 * Native: NETWORK::NETWORK_GAMERTAG_FROM_HANDLE_SUCCEEDED
	 *
	 * Hash: 0xFD00798DBA7523DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD00798DBA7523DD)
	 */
	gamertagFromHandleSucceeded(): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_ACTIVITY_PLAYER_NUM
	 *
	 * Hash: 0x73E2B500410DA5A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73E2B500410DA5A2)
	 */
	getActivityPlayerNum(p0: boolean): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_AGE_GROUP
	 *
	 * Hash: 0x9614B71F8ADB982B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9614B71F8ADB982B)
	 */
	getAgeGroup(): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_ASSISTED_DAMAGE_OF_DEAD_ENTITY
	 *
	 * Hash: 0x83660B734994124D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83660B734994124D)
	 */
	getAssistedDamageOfDeadEntity(player: Handle, entity: Handle): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY
	 *
	 * Hash: 0x4CACA84440FA26F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CACA84440FA26F6)
	 */
	getAssistedDamageOfEntity(player: Handle, entity: Handle): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER
	 *
	 * Hash: 0xD414BE129BB81B32 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD414BE129BB81B32)
	 */
	getAverageLatencyForPlayer(player: Handle): number;

	/**
	 * Native: NETWORK::_NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER_2
	 *
	 * Hash: 0x0E3A041ED6AC2B45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E3A041ED6AC2B45)
	 */
	getAverageLatencyForPlayer2(player: Handle): number;

	/**
	 * Native: NETWORK::_NETWORK_GET_AVERAGE_PACKET_LOSS_FOR_PLAYER
	 *
	 * Hash: 0x350C23949E43686C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x350C23949E43686C)
	 */
	getAveragePacketLossForPlayer(player: Handle): number;

	/**
	 * Native: NETWORK::GET_CLOUD_TIME_AS_INT
	 *
	 * Hash: 0x9A73240B49945C76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A73240B49945C76)
	 */
	getCloudTimeAsInt(): integer;

	/**
	 * Native: NETWORK::_GET_CLOUD_TIME_AS_STRING
	 *
	 * Hash: 0xF12E6CD06C73D69E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF12E6CD06C73D69E)
	 */
	getCloudTimeAsString(): string;

	/**
	 * Native: NETWORK::GET_COMMERCE_ITEM_CAT
	 *
	 * Hash: 0x6F44CBF56D79FAC0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F44CBF56D79FAC0)
	 */
	getCommerceItemCat(index: integer, index2: integer): string;

	/**
	 * Native: NETWORK::GET_COMMERCE_ITEM_ID
	 *
	 * Hash: 0x662635855957C411 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x662635855957C411)
	 */
	getCommerceItemId(index: integer): string;

	/**
	 * Native: NETWORK::GET_COMMERCE_ITEM_NAME
	 *
	 * Hash: 0xB4271092CA7EDF48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4271092CA7EDF48)
	 */
	getCommerceItemName(index: integer): string;

	/**
	 * Native: NETWORK::GET_COMMERCE_ITEM_NUM_CATS
	 *
	 * Hash: 0x2A7776C709904AB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A7776C709904AB0)
	 */
	getCommerceItemNumCats(index: integer): integer;

	/**
	 * Native: NETWORK::GET_COMMERCE_ITEM_TEXTURENAME
	 *
	 * Hash: 0x722F5D28B61C5EA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x722F5D28B61C5EA8)
	 */
	getCommerceItemTexturename(index: integer): string;

	/**
	 * Native: NETWORK::GET_COMMERCE_PRODUCT_PRICE
	 *
	 * Hash: 0xCA94551B50B4932C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA94551B50B4932C)
	 */
	getCommerceProductPrice(index: integer): string;

	/**
	 * Native: NETWORK::NETWORK_GET_CONTENT_MODIFIER_LIST_ID
	 *
	 * Hash: 0x187382F8A3E0A6C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x187382F8A3E0A6C3)
	 */
	getContentModifierListId(contentHash: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_CURRENTLY_SELECTED_GAMER_HANDLE_FROM_INVITE_MENU
	 *
	 * Hash: 0x74881E6BCAE2327C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74881E6BCAE2327C)
	 */
	getCurrentlySelectedGamerHandleFromInviteMenu(): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_DESTROYER_OF_ENTITY
	 *
	 * Hash: 0xC434133D9BA52777 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC434133D9BA52777)
	 */
	getDestroyerOfEntity(entity: Handle): NetworkGetDestroyerOfEntityResult;

	/**
	 * Native: NETWORK::NETWORK_GET_DESTROYER_OF_NETWORK_ID
	 *
	 * Hash: 0x7A1ADEEF01740A24 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A1ADEEF01740A24)
	 */
	getDestroyerOfNetworkId(netId: integer): NetworkGetDestroyerOfNetworkIdResult;

	/**
	 * Native: NETWORK::NETWORK_GET_DISPLAYNAMES_FROM_HANDLES
	 *
	 * Hash: 0x58CC181719256197 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58CC181719256197)
	 */
	getDisplaynamesFromHandles(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_ENTITY_FROM_NETWORK_ID
	 *
	 * Hash: 0xCE4E5D9B0A4FF560 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE4E5D9B0A4FF560)
	 */
	getEntityFromNetworkId(netId: integer): Handle;

	/**
	 * Native: NETWORK::NETWORK_GET_ENTITY_IS_LOCAL
	 *
	 * Hash: 0x0991549DE4D64762 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0991549DE4D64762)
	 */
	getEntityIsLocal(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_ENTITY_IS_NETWORKED
	 *
	 * Hash: 0xC7827959479DCC78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7827959479DCC78)
	 */
	getEntityIsNetworked(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_ENTITY_KILLER_OF_PLAYER
	 *
	 * Hash: 0x42B2DAA6B596F5F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42B2DAA6B596F5F8)
	 */
	getEntityKillerOfPlayer(player: Handle): NetworkGetEntityKillerOfPlayerResult;

	/**
	 * Native: NETWORK::_NETWORK_GET_ENTITY_NET_SCRIPT_ID
	 *
	 * Hash: 0x815F18AD865F057F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x815F18AD865F057F)
	 */
	getEntityNetScriptId(entity: Handle): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_FOUND_GAMER
	 *
	 * Hash: 0x9DCFF2AFB68B3476 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DCFF2AFB68B3476)
	 */
	getFoundGamer(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_FRIEND_COUNT
	 *
	 * Hash: 0x203F1CFD823B27A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x203F1CFD823B27A4)
	 */
	getFriendCount(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_FRIEND_NAME
	 *
	 * Hash: 0xE11EBBB2A783FE8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE11EBBB2A783FE8B)
	 */
	getFriendName(friendIndex: integer): string;

	/**
	 * Native: NETWORK::_NETWORK_GET_FRIEND_NAME_FROM_INDEX
	 *
	 * Hash: 0x4164F227D052E293 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4164F227D052E293)
	 */
	getFriendNameFromIndex(friendIndex: integer): string;

	/**
	 * Native: NETWORK::NETWORK_GET_GAMER_STATUS_FROM_QUEUE
	 *
	 * Hash: 0x2CC848A861D01493 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CC848A861D01493)
	 */
	getGamerStatusFromQueue(): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_GAMER_STATUS_RESULT
	 *
	 * Hash: 0x02A8BEC6FD9AF660 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02A8BEC6FD9AF660)
	 */
	getGamerStatusResult(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_GAMERTAG_FROM_HANDLE
	 *
	 * Hash: 0x426141162EBE5CDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x426141162EBE5CDB)
	 */
	getGamertagFromHandle(): NetworkGetGamertagFromHandleResult;

	/**
	 * Native: NETWORK::NETWORK_GET_GLOBAL_MULTIPLAYER_CLOCK
	 *
	 * Hash: 0x6D03BFBD643B2A02 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D03BFBD643B2A02)
	 */
	getGlobalMultiplayerClock(): NetworkGetGlobalMultiplayerClockResult;

	/**
	 * Native: NETWORK::NETWORK_GET_HOST_OF_SCRIPT
	 *
	 * Hash: 0x1D6A14F1F9A736FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D6A14F1F9A736FC)
	 */
	getHostOfScript(scriptName: string, p1: integer, p2: integer): Handle;

	/**
	 * Native: NETWORK::NETWORK_GET_HOST_OF_THIS_SCRIPT
	 *
	 * Hash: 0xC7B4D79B01FA7A5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7B4D79B01FA7A5C)
	 */
	getHostOfThisScript(): Handle;

	/**
	 * Native: NETWORK::NETWORK_GET_INSTANCE_ID_OF_THIS_SCRIPT
	 *
	 * Hash: 0x638A3A81733086DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x638A3A81733086DB)
	 */
	getInstanceIdOfThisScript(): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_LAST_VELOCITY_RECEIVED
	 *
	 * Hash: 0x33DE49EDF4DDE77A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33DE49EDF4DDE77A)
	 */
	getLastVelocityReceived(entity: Handle): Vector3Mp;

	/**
	 * Native: NETWORK::NETWORK_GET_LOCAL_HANDLE
	 *
	 * Hash: 0xE86051786B66CD8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE86051786B66CD8E)
	 */
	getLocalHandle(gamerHandleSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_LOCAL_SCENE_FROM_NETWORK_ID
	 *
	 * Hash: 0x02C40BF885C567B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02C40BF885C567B6)
	 */
	getLocalSceneFromNetworkId(netId: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_MAX_FRIENDS
	 *
	 * Hash: 0xAFEBB0D5D8F687D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFEBB0D5D8F687D2)
	 */
	getMaxFriends(): integer;

	/**
	 * Native: NETWORK::GET_MAX_NUM_NETWORK_OBJECTS
	 *
	 * Hash: 0xC7BE335216B5EC7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7BE335216B5EC7C)
	 */
	getMaxNumObjects(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_MAX_NUM_PARTICIPANTS
	 *
	 * Hash: 0xA6C90FBC38E395EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6C90FBC38E395EE)
	 */
	getMaxNumParticipants(): integer;

	/**
	 * Native: NETWORK::GET_MAX_NUM_NETWORK_PEDS
	 *
	 * Hash: 0x0C1F7D49C39D2289 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C1F7D49C39D2289)
	 */
	getMaxNumPeds(): integer;

	/**
	 * Native: NETWORK::GET_MAX_NUM_NETWORK_PICKUPS
	 *
	 * Hash: 0xA72835064DD63E4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA72835064DD63E4C)
	 */
	getMaxNumPickups(): integer;

	/**
	 * Native: NETWORK::GET_MAX_NUM_NETWORK_VEHICLES
	 *
	 * Hash: 0x0AFCE529F69B21FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AFCE529F69B21FF)
	 */
	getMaxNumVehicles(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_NETWORK_ID_FROM_ENTITY
	 *
	 * Hash: 0xA11700682F3AD45C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA11700682F3AD45C)
	 */
	getNetworkIdFromEntity(entity: Handle): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_NUM_BODY_TRACKERS
	 *
	 * Hash: 0xD38C4A6D047C019D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD38C4A6D047C019D)
	 */
	getNumBodyTrackers(): integer;

	/**
	 * Native: NETWORK::GET_NUM_COMMERCE_ITEMS
	 *
	 * Hash: 0xF2EAC213D5EA0623 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2EAC213D5EA0623)
	 */
	getNumCommerceItems(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_NUM_CONNECTED_PLAYERS
	 *
	 * Hash: 0xA4A79DD2D9600654 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4A79DD2D9600654)
	 */
	getNumConnectedPlayers(): integer;

	/**
	 * Native: NETWORK::GET_NUM_CREATED_MISSION_OBJECTS
	 *
	 * Hash: 0x12B6281B6C6706C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12B6281B6C6706C0)
	 */
	getNumCreatedMissionObjects(p0: boolean): integer;

	/**
	 * Native: NETWORK::GET_NUM_CREATED_MISSION_PEDS
	 *
	 * Hash: 0xCB215C4B56A7FAE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB215C4B56A7FAE7)
	 */
	getNumCreatedMissionPeds(p0: boolean): integer;

	/**
	 * Native: NETWORK::GET_NUM_CREATED_MISSION_VEHICLES
	 *
	 * Hash: 0x0CD9AB83489430EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CD9AB83489430EA)
	 */
	getNumCreatedMissionVehicles(p0: boolean): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_NUM_FOUND_GAMERS
	 *
	 * Hash: 0xA1B043EE79A916FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1B043EE79A916FB)
	 */
	getNumFoundGamers(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_NUM_PARTICIPANTS
	 *
	 * Hash: 0x18D0456E86604654 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x18D0456E86604654)
	 */
	getNumParticipants(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_NUM_PRESENCE_INVITES
	 *
	 * Hash: 0xCEFA968912D0F78D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEFA968912D0F78D)
	 */
	getNumPresenceInvites(): integer;

	/**
	 * Native: NETWORK::GET_NUM_RESERVED_MISSION_OBJECTS
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0xAA81B5F10BC43AC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA81B5F10BC43AC2)
	 */
	getNumReservedMissionObjects(p0: boolean, p1?: integer): integer;

	/**
	 * Native: NETWORK::GET_NUM_RESERVED_MISSION_PEDS
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0x1F13D5AE5CB17E17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1F13D5AE5CB17E17)
	 */
	getNumReservedMissionPeds(p0: boolean, p1?: integer): integer;

	/**
	 * Native: NETWORK::GET_NUM_RESERVED_MISSION_VEHICLES
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0xCF3A965906452031 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF3A965906452031)
	 */
	getNumReservedMissionVehicles(p0: boolean, p1?: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_NUM_SCRIPT_PARTICIPANTS
	 *
	 * Hash: 0x3658E8CD94FC121A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3658E8CD94FC121A)
	 */
	getNumScriptParticipants(p1: integer, p2: integer): NetworkGetNumScriptParticipantsResult;

	/**
	 * Native: NETWORK::_NETWORK_GET_NUM_UNACKED_FOR_PLAYER
	 *
	 * Hash: 0xFF8FCF9FFC458A1C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF8FCF9FFC458A1C)
	 */
	getNumUnackedForPlayer(player: Handle): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_OLDEST_RESEND_COUNT_FOR_PLAYER
	 *
	 * Hash: 0x52C1EADAF7B10302 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52C1EADAF7B10302)
	 */
	getOldestResendCountForPlayer(player: Handle): integer;

	/**
	 * Native: NETWORK::_GET_ONLINE_VERSION
	 *
	 * Hash: 0xFCA9373EF340AC0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCA9373EF340AC0A)
	 */
	getOnlineVersion(): string;

	/**
	 * Native: NETWORK::NETWORK_GET_PARTICIPANT_INDEX
	 *
	 * Hash: 0x1B84DF6AF2A46938 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B84DF6AF2A46938)
	 */
	getParticipantIndex(index: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PLATFORM_PARTY_MEMBERS
	 *
	 * Hash: 0x120364DE2845DAF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x120364DE2845DAF8)
	 */
	getPlatformPartyMembers(dataSize: integer): NetworkGetPlatformPartyMembersResult;

	/**
	 * Native: NETWORK::_NETWORK_GET_PLATFORM_PARTY_UNK
	 *
	 * Hash: 0x01ABCE5E7CBDA196 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01ABCE5E7CBDA196)
	 */
	getPlatformPartyUnk(): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_PLAYER_COORDS
	 *
	 * Hash: 0x125E6D638B8605D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x125E6D638B8605D4)
	 */
	getPlayerCoords(player: Handle): Vector3Mp;

	/**
	 * Native: NETWORK::NETWORK_GET_PLAYER_FROM_GAMER_HANDLE
	 *
	 * Hash: 0xCE5F689CF5A0A49D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE5F689CF5A0A49D)
	 */
	getPlayerFromGamerHandle(): NetworkGetPlayerFromGamerHandleResult;

	/**
	 * Native: NETWORK::NETWORK_GET_PLAYER_INDEX
	 *
	 * Hash: 0x24FB80D107371267 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24FB80D107371267)
	 */
	getPlayerIndex(player: Handle): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PLAYER_INDEX_FROM_PED
	 *
	 * Hash: 0x6C0E2E0125610278 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C0E2E0125610278)
	 */
	getPlayerIndexFromPed(ped: Handle): Handle;

	/**
	 * Native: NETWORK::_NETWORK_GET_PLAYER_KILLER_OF_PLAYER
	 *
	 * Hash: 0x2DA41ED6E1FCD7A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DA41ED6E1FCD7A5)
	 */
	getPlayerKillerOfPlayer(player: Handle): NetworkGetPlayerKillerOfPlayerResult;

	/**
	 * Native: NETWORK::NETWORK_GET_PLAYER_LOUDNESS
	 *
	 * Hash: 0x21A1684A25C2867F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21A1684A25C2867F)
	 */
	getPlayerLoudness(player: Handle): number;

	/**
	 * Native: NETWORK::NETWORK_GET_PLAYER_OWNS_WAYPOINT
	 *
	 * Hash: 0x82377B65E943F72D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82377B65E943F72D)
	 */
	getPlayerOwnsWaypoint(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_PLAYER_TUTORIAL_SESSION_INSTANCE
	 *
	 * Hash: 0x3B39236746714134 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B39236746714134)
	 */
	getPlayerTutorialSessionInstance(player: Handle): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_POSITION_HASH_OF_THIS_SCRIPT
	 *
	 * Hash: 0x257ED0FADF750BCF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x257ED0FADF750BCF)
	 */
	getPositionHashOfThisScript(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_CONTENT_ID
	 *
	 * Hash: 0x24409FC4C55CB22D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24409FC4C55CB22D)
	 */
	getPresenceInviteContentId(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_FROM_ADMIN
	 *
	 * Hash: 0x3DBF2DF0AEB7D289 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DBF2DF0AEB7D289)
	 */
	getPresenceInviteFromAdmin(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_HANDLE
	 *
	 * Hash: 0x38D5B0FEBB086F75 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38D5B0FEBB086F75)
	 */
	getPresenceInviteHandle(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_ID
	 *
	 * Hash: 0xDFF09646E12EC386 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFF09646E12EC386)
	 */
	getPresenceInviteId(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_INVITER
	 *
	 * Hash: 0x4962CC4AA2F345B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4962CC4AA2F345B7)
	 */
	getPresenceInviteInviter(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_IS_TOURNAMENT
	 *
	 * Hash: 0x8806CEBFABD3CE05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8806CEBFABD3CE05)
	 */
	getPresenceInviteIsTournament(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_PLAYLIST_CURRENT
	 *
	 * Hash: 0x728C4CC7920CD102 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x728C4CC7920CD102)
	 */
	getPresenceInvitePlaylistCurrent(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_PLAYLIST_LENGTH
	 *
	 * Hash: 0xD39B3FFF8FFDD5BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD39B3FFF8FFDD5BF)
	 */
	getPresenceInvitePlaylistLength(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRESENCE_INVITE_SESSION_ID
	 *
	 * Hash: 0x26E1CD96B0903D60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26E1CD96B0903D60)
	 */
	getPresenceInviteSessionId(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRIMARY_CLAN_DATA_CANCEL
	 *
	 * Hash: 0x042E4B70B93E6054 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x042E4B70B93E6054)
	 */
	getPrimaryClanDataCancel(): void;

	/**
	 * Native: NETWORK::NETWORK_GET_PRIMARY_CLAN_DATA_CLEAR
	 *
	 * Hash: 0x9AA46BADAD0E27ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AA46BADAD0E27ED)
	 */
	getPrimaryClanDataClear(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRIMARY_CLAN_DATA_NEW
	 *
	 * Hash: 0xC080FF658B2E41DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC080FF658B2E41DA)
	 */
	getPrimaryClanDataNew(): NetworkGetPrimaryClanDataNewResult;

	/**
	 * Native: NETWORK::NETWORK_GET_PRIMARY_CLAN_DATA_PENDING
	 *
	 * Hash: 0xB5074DB804E28CE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB5074DB804E28CE7)
	 */
	getPrimaryClanDataPending(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRIMARY_CLAN_DATA_START
	 *
	 * Hash: 0xCE86D8191B762107 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE86D8191B762107)
	 */
	getPrimaryClanDataStart(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_PRIMARY_CLAN_DATA_SUCCESS
	 *
	 * Hash: 0x5B4F04F19376A0BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B4F04F19376A0BA)
	 */
	getPrimaryClanDataSuccess(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_RANDOM_INT
	 *
	 * Hash: 0x599E4FA1F87EB5FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x599E4FA1F87EB5FF)
	 */
	getRandomInt(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_RANDOM_INT_RANGED
	 *
	 * Hash: 0xE30CF56F1EFA5F43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE30CF56F1EFA5F43)
	 */
	getRandomIntRanged(rangeStart: integer, rangeEnd: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_RESPAWN_RESULT
	 *
	 * Hash: 0x371EA43692861CF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x371EA43692861CF1)
	 */
	getRespawnResult(randomInt: integer): NetworkGetRespawnResultResult;

	/**
	 * Native: NETWORK::NETWORK_GET_RESPAWN_RESULT_FLAGS
	 *
	 * Hash: 0x6C34F1208B8923FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C34F1208B8923FD)
	 */
	getRespawnResultFlags(p0: integer): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_ROS_PRIVILEGE_24
	 *
	 * Hash: 0x593570C289A77688 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x593570C289A77688)
	 */
	getRosPrivilege24(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_GET_ROS_PRIVILEGE_25
	 *
	 * Hash: 0x91B87C55093DE351 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91B87C55093DE351)
	 */
	getRosPrivilege25(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_GET_ROS_PRIVILEGE_9
	 *
	 * Hash: 0x66B59CFFD78467AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66B59CFFD78467AF)
	 */
	getRosPrivilege9(): boolean;

	/**
	 * Native: NETWORK::NETWORK_GET_SCRIPT_STATUS
	 *
	 * Hash: 0x57D158647A6BFABF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57D158647A6BFABF)
	 */
	getScriptStatus(): integer;

	/**
	 * Native: NETWORK::GET_STATUS_OF_TEXTURE_DOWNLOAD
	 *
	 * Hash: 0x8BD6C6DEA20E82C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BD6C6DEA20E82C6)
	 */
	getStatusOfTextureDownload(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_TALKER_PROXIMITY
	 *
	 * Hash: 0x84F0F13120B4E098 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84F0F13120B4E098)
	 */
	getTalkerProximity(): number;

	/**
	 * Native: NETWORK::_NETWORK_GET_TARGETING_MODE
	 *
	 * Hash: 0xDFFA5BE8381C3314 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFFA5BE8381C3314)
	 */
	getTargetingMode(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_THIS_SCRIPT_IS_NETWORK_SCRIPT
	 *
	 * Hash: 0x2910669969E9535E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2910669969E9535E)
	 */
	getThisScriptIsNetworkScript(): boolean;

	/**
	 * Native: NETWORK::GET_NETWORK_TIME
	 *
	 * Hash: 0x7A5487FE9FAA6B48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A5487FE9FAA6B48)
	 */
	getTime(): integer;

	/**
	 * Native: NETWORK::GET_NETWORK_TIME_ACCURATE
	 *
	 * Hash: 0x89023FBBF9200E9F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x89023FBBF9200E9F)
	 */
	getTimeAccurate(): integer;

	/**
	 * Native: NETWORK::GET_TIME_AS_STRING
	 *
	 * Hash: 0x9E23B1777A927DAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E23B1777A927DAD)
	 */
	getTimeAsString(time: integer): string;

	/**
	 * Native: NETWORK::GET_TIME_DIFFERENCE
	 *
	 * Hash: 0xA2C6FC031D46FFF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2C6FC031D46FFF0)
	 */
	getTimeDifference(timeA: integer, timeB: integer): integer;

	/**
	 * Native: NETWORK::GET_TIME_OFFSET
	 *
	 * Hash: 0x017008CCDAD48503 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x017008CCDAD48503)
	 */
	getTimeOffset(timeA: integer, timeB: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_TIMEOUT_TIME
	 *
	 * Hash: 0x5ED0356A0CE3A34F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5ED0356A0CE3A34F)
	 */
	getTimeoutTime(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_TOTAL_NUM_PLAYERS
	 *
	 * Hash: 0xCF61D4B4702EE9EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF61D4B4702EE9EB)
	 */
	getTotalNumPlayers(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_TRANSITION_HOST
	 *
	 * Hash: 0x65042B9774C4435E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65042B9774C4435E)
	 */
	getTransitionHost(): integer;

	/**
	 * Native: NETWORK::NETWORK_GET_TRANSITION_MEMBERS
	 *
	 * Hash: 0x73B000F7FBC55829 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73B000F7FBC55829)
	 */
	getTransitionMembers(dataCount: integer): NetworkGetTransitionMembersResult;

	/**
	 * Native: NETWORK::NETWORK_GET_TUNABLE_CLOUD_CRC
	 *
	 * Hash: 0x10BD227A753B0D84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10BD227A753B0D84)
	 */
	getTunableCloudCrc(): integer;

	/**
	 * Native: NETWORK::_NETWORK_GET_UNRELIABLE_RESEND_COUNT_FOR_PLAYER
	 *
	 * Hash: 0x3765C3A3E8192E10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3765C3A3E8192E10)
	 */
	getUnreliableResendCountForPlayer(player: Handle): integer;

	/**
	 * Native: NETWORK::NETWORK_HANDLE_FROM_FRIEND
	 *
	 * Hash: 0xD45CB817D7E177D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD45CB817D7E177D2)
	 */
	handleFromFriend(friendIndex: integer, gamerHandleSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_HANDLE_FROM_MEMBER_ID
	 *
	 * Hash: 0xA0FD21BED61E5C4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0FD21BED61E5C4C)
	 */
	handleFromMemberId(memberId: string, gamerHandleSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_HANDLE_FROM_PLAYER
	 *
	 * Hash: 0x388EB2B86C73B6B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x388EB2B86C73B6B3)
	 */
	handleFromPlayer(player: Handle, gamerHandleSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_HANDLE_FROM_USER_ID
	 *
	 * Hash: 0xDCD51DD8F87AEC5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCD51DD8F87AEC5C)
	 */
	handleFromUserId(userId: string, gamerHandleSize: integer): integer;

	/**
	 * Native: NETWORK::_NETWORK_HAS_AGE_RESTRICTED_PROFILE
	 *
	 * Hash: 0x1353F87E89946207 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1353F87E89946207)
	 */
	hasAgeRestrictedProfile(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_CACHED_PLAYER_HEAD_BLEND_DATA
	 *
	 * Hash: 0x237D5336A9A54108 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x237D5336A9A54108)
	 */
	hasCachedPlayerHeadBlendData(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_CONTROL_OF_DOOR
	 *
	 * Hash: 0xCB3C68ADB06195DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB3C68ADB06195DF)
	 */
	hasControlOfDoor(doorHash: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_CONTROL_OF_ENTITY
	 *
	 * Hash: 0x01BF60A500E28887 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01BF60A500E28887)
	 */
	hasControlOfEntity(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_CONTROL_OF_NETWORK_ID
	 *
	 * Hash: 0x4D36070FE0215186 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D36070FE0215186)
	 */
	hasControlOfNetworkId(netId: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_CONTROL_OF_PICKUP
	 *
	 * Hash: 0x5BC9495F0B3B6FA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BC9495F0B3B6FA6)
	 */
	hasControlOfPickup(pickup: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_ENTITY_BEEN_REGISTERED_WITH_THIS_THREAD
	 *
	 * Hash: 0xB07D3185E11657A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB07D3185E11657A5)
	 */
	hasEntityBeenRegisteredWithThisThread(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_FOLLOW_INVITE
	 *
	 * Hash: 0x76D9B976C4C09FDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76D9B976C4C09FDE)
	 */
	hasFollowInvite(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_HAS_GAME_BEEN_ALTERED
	 *
	 * Hash: 0x659CF2EF7F550C4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x659CF2EF7F550C4F)
	 */
	hasGameBeenAltered(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_HEADSET
	 *
	 * Hash: 0xE870F9F1F7B4F1FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE870F9F1F7B4F1FA)
	 */
	hasHeadset(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HASH_FROM_GAMER_HANDLE
	 *
	 * Hash: 0x58575AC3CF2CA8EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58575AC3CF2CA8EC)
	 */
	hashFromGamerHandle(): NetworkHashFromGamerHandleResult;

	/**
	 * Native: NETWORK::NETWORK_HASH_FROM_PLAYER_HANDLE
	 *
	 * Hash: 0xBC1D768F2F5D6C05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC1D768F2F5D6C05)
	 */
	hashFromPlayerHandle(player: Handle): integer;

	/**
	 * Native: NETWORK::NETWORK_HAS_INVITED_GAMER
	 *
	 * Hash: 0x4D86CD31E8976ECE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D86CD31E8976ECE)
	 */
	hasInvitedGamer(): integer;

	/**
	 * Native: NETWORK::NETWORK_HAS_INVITED_GAMER_TO_TRANSITION
	 *
	 * Hash: 0x7284A47B3540E6CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7284A47B3540E6CF)
	 */
	hasInvitedGamerToTransition(): integer;

	/**
	 * Native: NETWORK::NETWORK_HAS_PENDING_INVITE
	 *
	 * Hash: 0xAC8C7B9B88C4A668 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC8C7B9B88C4A668)
	 */
	hasPendingInvite(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_PLAYER_STARTED_TRANSITION
	 *
	 * Hash: 0x9AC9CCBFA8C29795 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AC9CCBFA8C29795)
	 */
	hasPlayerStartedTransition(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_RECEIVED_HOST_BROADCAST_DATA
	 *
	 * Hash: 0x5D10B3795F3FC886 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D10B3795F3FC886)
	 */
	hasReceivedHostBroadcastData(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_ROS_PRIVILEGE
	 *
	 * Hash: 0xA699957E60D80214 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA699957E60D80214)
	 */
	hasRosPrivilege(index: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_ROS_PRIVILEGE_END_DATE
	 *
	 * Hash: 0xC22912B1D85F26B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC22912B1D85F26B1)
	 */
	hasRosPrivilegeEndDate(privilege: integer): NetworkHasRosPrivilegeEndDateResult;

	/**
	 * Native: NETWORK::NETWORK_HAS_SOCIAL_CLUB_ACCOUNT
	 *
	 * Hash: 0x67A5589628E0CFF6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67A5589628E0CFF6)
	 */
	hasSocialClubAccount(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_SOCIAL_NETWORKING_SHARING_PRIV
	 *
	 * Hash: 0x76BF03FADBF154F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76BF03FADBF154F5)
	 */
	hasSocialNetworkingSharingPriv(): boolean;

	/**
	 * Native: NETWORK::HAS_NETWORK_TIME_STARTED
	 *
	 * Hash: 0x46718ACEEDEAFC84 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46718ACEEDEAFC84)
	 */
	hasTimeStarted(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_VALID_ROS_CREDENTIALS
	 *
	 * Hash: 0x85443FF4C328F53B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85443FF4C328F53B)
	 */
	hasValidRosCredentials(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAS_VIEW_GAMER_USER_CONTENT_RESULT
	 *
	 * Hash: 0xCCA4318E1AB03F1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCCA4318E1AB03F1F)
	 */
	hasViewGamerUserContentResult(): integer;

	/**
	 * Native: NETWORK::NETWORK_HAVE_COMMUNICATION_PRIVILEGES
	 *
	 * Hash: 0xAEEF48CDF5B6CE7C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEEF48CDF5B6CE7C)
	 */
	haveCommunicationPrivileges(p0: integer, player: Handle): boolean;

	/**
	 * Native: NETWORK::_NETWORK_HAVE_ONLINE_PRIVILEGE_2
	 *
	 * Hash: 0x5EA784D197556507 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EA784D197556507)
	 */
	haveOnlinePrivilege2(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_ONLINE_PRIVILEGES
	 *
	 * Hash: 0x25CB5A9F37BFD063 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25CB5A9F37BFD063)
	 */
	haveOnlinePrivileges(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_ROS_BANNED_PRIV
	 *
	 * Hash: 0x8020A73847E0CA7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8020A73847E0CA7D)
	 */
	haveRosBannedPriv(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_ROS_CREATE_TICKET_PRIV
	 *
	 * Hash: 0xA0AD7E2AF5349F61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0AD7E2AF5349F61)
	 */
	haveRosCreateTicketPriv(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_ROS_LEADERBOARD_WRITE_PRIV
	 *
	 * Hash: 0x422D396F80A96547 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x422D396F80A96547)
	 */
	haveRosLeaderboardWritePriv(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_ROS_MULTIPLAYER_PRIV
	 *
	 * Hash: 0x5F91D5D0B36AA310 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F91D5D0B36AA310)
	 */
	haveRosMultiplayerPriv(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_ROS_SOCIAL_CLUB_PRIV
	 *
	 * Hash: 0x606E4D3E3CCCF3EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x606E4D3E3CCCF3EB)
	 */
	haveRosSocialClubPriv(): boolean;

	/**
	 * Native: NETWORK::NETWORK_HAVE_USER_CONTENT_PRIVILEGES
	 *
	 * Hash: 0x72D918C99BCACC54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72D918C99BCACC54)
	 */
	haveUserContentPrivileges(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_HOST_TRANSITION
	 *
	 * p6 defaults to 0
	 * p7 defaults to 0
	 * p8 defaults to 0
	 * p9 defaults to 0
	 *
	 * Hash: 0xA60BB5CE242BB254 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA60BB5CE242BB254)
	 */
	hostTransition(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: boolean,
		p6?: boolean,
		p7?: integer,
		p8?: integer,
		p9?: integer
	): boolean;

	/**
	 * Native: NETWORK::NETWORK_INVITE_GAMERS
	 *
	 * Hash: 0x9D80CD1D0E6327DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D80CD1D0E6327DE)
	 */
	inviteGamers(p1: integer): NetworkInviteGamersResult;

	/**
	 * Native: NETWORK::NETWORK_INVITE_GAMERS_TO_TRANSITION
	 *
	 * Hash: 0x4A595C32F77DFF76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A595C32F77DFF76)
	 */
	inviteGamersToTransition(p1: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_ACTIVITY_SESSION
	 *
	 * Hash: 0x05095437424397FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05095437424397FA)
	 */
	isActivitySession(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_ACTIVITY_SPECTATOR
	 *
	 * Hash: 0x12103B9E0C9F92FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12103B9E0C9F92FB)
	 */
	isActivitySpectator(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_ACTIVITY_SPECTATOR_FROM_HANDLE
	 *
	 * Hash: 0x2763BBAA72A7BCB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2763BBAA72A7BCB9)
	 */
	isActivitySpectatorFromHandle(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_ADDING_FRIEND
	 *
	 * Hash: 0x6EA101606F6E4D81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EA101606F6E4D81)
	 */
	isAddingFriend(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_CABLE_CONNECTED
	 *
	 * Hash: 0xEFFB25453D8600F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFFB25453D8600F9)
	 */
	isCableConnected(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_CHATTING_IN_PLATFORM_PARTY
	 *
	 * Hash: 0x8DE9945BCC9AEC52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DE9945BCC9AEC52)
	 */
	isChattingInPlatformParty(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_CLOCK_TIME_OVERRIDDEN
	 *
	 * Hash: 0xD7C95D322FF57522 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7C95D322FF57522)
	 */
	isClockTimeOverridden(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_CLOUD_AVAILABLE
	 *
	 * Hash: 0x9A4CF4F48AD77302 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A4CF4F48AD77302)
	 */
	isCloudAvailable(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_CLOUD_BACKGROUND_SCRIPT_REQUEST_PENDING
	 *
	 * Hash: 0x8132C0EB8B2B3293 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8132C0EB8B2B3293)
	 */
	isCloudBackgroundScriptRequestPending(): boolean;

	/**
	 * Native: NETWORK::IS_COMMERCE_DATA_VALID
	 *
	 * Hash: 0xEA14EEF5B7CD2C30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA14EEF5B7CD2C30)
	 */
	isCommerceDataValid(): boolean;

	/**
	 * Native: NETWORK::IS_COMMERCE_STORE_OPEN
	 *
	 * Hash: 0x2EAC52B4019E2782 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2EAC52B4019E2782)
	 */
	isCommerceStoreOpen(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_CONNECTION_ENDPOINT_RELAY_SERVER
	 *
	 * Hash: 0x16D3D49902F697BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16D3D49902F697BB)
	 */
	isConnectionEndpointRelayServer(player: Handle): boolean;

	/**
	 * Native: NETWORK::IS_DAMAGE_TRACKER_ACTIVE_ON_NETWORK_ID
	 *
	 * Hash: 0x6E192E33AD436366 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E192E33AD436366)
	 */
	isDamageTrackerActiveOnId(netID: integer): boolean;

	/**
	 * Native: NETWORK::_IS_DAMAGE_TRACKER_ACTIVE_ON_PLAYER
	 *
	 * Hash: 0xB2092A1EAA7FD45F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2092A1EAA7FD45F)
	 */
	isDamageTrackerActiveOnPlayer(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_DOOR_NETWORKED
	 *
	 * Hash: 0xC01E93FAC20C3346 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC01E93FAC20C3346)
	 */
	isDoorNetworked(doorHash: integer): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_ENTITY_CONCEALED
	 *
	 * Hash: 0x71302EC70689052A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71302EC70689052A)
	 */
	isEntityConcealed(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_ENTITY_FADING
	 *
	 * Hash: 0x422F32CC7E56ABAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x422F32CC7E56ABAD)
	 */
	isEntityFading(entity: Handle): boolean;

	/**
	 * Native: NETWORK::_IS_ENTITY_GHOSTED_TO_LOCAL_PLAYER
	 *
	 * Hash: 0x21D04D7BC538C146 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21D04D7BC538C146)
	 */
	isEntityGhostedToLocalPlayer(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_FINDING_GAMERS
	 *
	 * Hash: 0xDDDF64C91BFCF0AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDDF64C91BFCF0AA)
	 */
	isFindingGamers(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_FRIEND
	 *
	 * Hash: 0x1A24A179F9B31654 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A24A179F9B31654)
	 */
	isFriend(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_FRIEND_HANDLE_ONLINE
	 *
	 * Hash: 0x87EB7A3FFCB314DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87EB7A3FFCB314DB)
	 */
	isFriendHandleOnline(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_FRIEND_INDEX_ONLINE
	 *
	 * Hash: 0xBAD8F2A42B844821 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAD8F2A42B844821)
	 */
	isFriendIndexOnline(friendIndex: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_FRIEND_IN_MULTIPLAYER
	 *
	 * Hash: 0x57005C18827F3A28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57005C18827F3A28)
	 */
	isFriendInMultiplayer(friendName: string): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_FRIEND_IN_SAME_TITLE
	 *
	 * Hash: 0x2EA9A3BEDF3F17B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2EA9A3BEDF3F17B8)
	 */
	isFriendInSameTitle(friendName: string): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_FRIEND_ONLINE
	 *
	 * Hash: 0x425A44533437B64D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x425A44533437B64D)
	 */
	isFriendOnline(name: string): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_GAME_IN_PROGRESS
	 *
	 * Hash: 0x10FAB35428CCC9D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10FAB35428CCC9D7)
	 */
	isGameInProgress(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_GAMER_BLOCKED_BY_ME
	 *
	 * Hash: 0xE944C4F5AF1B5883 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE944C4F5AF1B5883)
	 */
	isGamerBlockedByMe(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_GAMER_IN_MY_SESSION
	 *
	 * Hash: 0x0F10B05DDF8D16E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F10B05DDF8D16E9)
	 */
	isGamerInMySession(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_GAMER_MUTED_BY_ME
	 *
	 * Hash: 0xCE60DE011B6C7978 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE60DE011B6C7978)
	 */
	isGamerMutedByMe(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_GAMER_TALKING
	 *
	 * Hash: 0x71C33B22606CD88A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71C33B22606CD88A)
	 */
	isGamerTalking(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_GETTING_GAMER_STATUS
	 *
	 * Hash: 0x94A8394D150B013A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94A8394D150B013A)
	 */
	isGettingGamerStatus(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_HANDLE_VALID
	 *
	 * Hash: 0x6F79B93B0A8E4133 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F79B93B0A8E4133)
	 */
	isHandleValid(gamerHandleSize: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_HOST
	 *
	 * Hash: 0x8DB296B814EDDA07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DB296B814EDDA07)
	 */
	isHost(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_HOST_OF_THIS_SCRIPT
	 *
	 * Hash: 0x83CD99A1E6061AB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83CD99A1E6061AB5)
	 */
	isHostOfThisScript(): boolean;

	/**
	 * Native: NETWORK::IS_NETWORK_ID_OWNED_BY_PARTICIPANT
	 *
	 * Hash: 0xA1607996431332DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1607996431332DF)
	 */
	isIdOwnedByParticipant(netId: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_INACTIVE_PROFILE
	 *
	 * Hash: 0x7E58745504313A2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E58745504313A2E)
	 */
	isInactiveProfile(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_MP_CUTSCENE
	 *
	 * Hash: 0x6CC27C9FA2040220 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CC27C9FA2040220)
	 */
	isInMpCutscene(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_PLATFORM_PARTY
	 *
	 * Hash: 0x2FC5650B0271CB57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FC5650B0271CB57)
	 */
	isInPlatformParty(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_PLATFORM_PARTY_CHAT
	 *
	 * Hash: 0xFD8B834A8BA05048 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD8B834A8BA05048)
	 */
	isInPlatformPartyChat(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_SESSION
	 *
	 * Hash: 0xCA97246103B63917 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA97246103B63917)
	 */
	isInSession(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_SPECTATOR_MODE
	 *
	 * Hash: 0x048746E388762E11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x048746E388762E11)
	 */
	isInSpectatorMode(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_TRANSITION
	 *
	 * Hash: 0x68049AEFF83D8F0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68049AEFF83D8F0A)
	 */
	isInTransition(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_IN_TUTORIAL_SESSION
	 *
	 * Hash: 0xADA24309FE08DACF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADA24309FE08DACF)
	 */
	isInTutorialSession(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_LOCAL_PLAYER_INVINCIBLE
	 *
	 * Hash: 0x8A8694B48715B000 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A8694B48715B000)
	 */
	isLocalPlayerInvincible(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_LOCAL_TALKING
	 *
	 * Hash: 0xC0D2AF00BCC234CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0D2AF00BCC234CA)
	 */
	isLocalTalking(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_MULTIPLAYER_DISABLED
	 *
	 * Hash: 0x9747292807126EDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9747292807126EDA)
	 */
	isMultiplayerDisabled(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_NETWORK_ID_A_CLONE
	 *
	 * Hash: 0x7242F8B741CE1086 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7242F8B741CE1086)
	 */
	isNetworkIdAClone(netId: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_OFFLINE_INVITE_PENDING
	 *
	 * Hash: 0x74698374C45701D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74698374C45701D2)
	 */
	isOfflineInvitePending(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE
	 *
	 * Hash: 0x6FF8FF40B6357D45 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6FF8FF40B6357D45)
	 */
	isParticipantActive(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PENDING_FRIEND
	 *
	 * Hash: 0x0BE73DA6984A6E33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BE73DA6984A6E33)
	 */
	isPendingFriend(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_ACTIVE
	 *
	 * Hash: 0xB8DFD30D6973E135 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8DFD30D6973E135)
	 */
	isPlayerActive(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_A_PARTICIPANT
	 *
	 * Hash: 0x3CA58F6CB7CBD784 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3CA58F6CB7CBD784)
	 */
	isPlayerAParticipant(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_A_PARTICIPANT_ON_SCRIPT
	 *
	 * Hash: 0x1AD5B71586B94820 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1AD5B71586B94820)
	 */
	isPlayerAParticipantOnScript(player1: Handle, script: string, player2: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_BLOCKED_BY_ME
	 *
	 * Hash: 0x57AF1F8E27483721 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57AF1F8E27483721)
	 */
	isPlayerBlockedByMe(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_CONCEALED
	 *
	 * Hash: 0x919B3C98ED8292F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x919B3C98ED8292F9)
	 */
	isPlayerConcealed(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_CONNECTED
	 *
	 * Hash: 0x93DC1BE4E1ABE9D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93DC1BE4E1ABE9D1)
	 */
	isPlayerConnected(player: Handle): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_PLAYER_EQUAL_TO_INDEX
	 *
	 * Hash: 0x9DE986FC9A87C474 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DE986FC9A87C474)
	 */
	isPlayerEqualToIndex(player: Handle, index: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_FADING
	 *
	 * Hash: 0x631DC5DFF4B110E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x631DC5DFF4B110E3)
	 */
	isPlayerFading(player: Handle): boolean;

	/**
	 * Native: NETWORK::IS_PLAYER_IN_CUTSCENE
	 *
	 * Hash: 0xE73092F4157CD126 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE73092F4157CD126)
	 */
	isPlayerInCutscene(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_IN_MP_CUTSCENE
	 *
	 * Hash: 0x63F9EE203C3619F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63F9EE203C3619F2)
	 */
	isPlayerInMpCutscene(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_MUTED_BY_ME
	 *
	 * Hash: 0x8C71288AE68EDE39 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C71288AE68EDE39)
	 */
	isPlayerMutedByMe(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_PLAYER_TALKING
	 *
	 * Hash: 0x031E11F3D447647E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x031E11F3D447647E)
	 */
	isPlayerTalking(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SCRIPT_ACTIVE
	 *
	 * Hash: 0x9D40DF90FAD26098 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D40DF90FAD26098)
	 */
	isScriptActive(scriptName: string, player: Handle, p2: boolean, p3: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SCRIPT_ACTIVE_BY_HASH
	 *
	 * Hash: 0xDA7DE67F5FE5EE13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA7DE67F5FE5EE13)
	 */
	isScriptActiveByHash(scriptHash: integer, p1: integer, p2: boolean, p3: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SESSION_ACTIVE
	 *
	 * Hash: 0xD83C2B94E7508980 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD83C2B94E7508980)
	 */
	isSessionActive(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SESSION_BUSY
	 *
	 * Hash: 0xF4435D66A8E2905E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4435D66A8E2905E)
	 */
	isSessionBusy(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SESSION_STARTED
	 *
	 * Hash: 0x9DE624D2FC4B603F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9DE624D2FC4B603F)
	 */
	isSessionStarted(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SIGNED_IN
	 *
	 * Hash: 0x054354A99211EB96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x054354A99211EB96)
	 */
	isSignedIn(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_SIGNED_ONLINE
	 *
	 * Hash: 0x1077788E268557C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1077788E268557C2)
	 */
	isSignedOnline(): boolean;

	/**
	 * Native: NETWORK::IS_SPHERE_VISIBLE_TO_ANOTHER_MACHINE
	 *
	 * Hash: 0xD82CF8E64C8729D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD82CF8E64C8729D8)
	 */
	isSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): boolean;

	/**
	 * Native: NETWORK::IS_SPHERE_VISIBLE_TO_PLAYER
	 *
	 * Hash: 0xDC3A310219E5DA62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC3A310219E5DA62)
	 */
	isSphereVisibleToPlayer(p0: integer, p1: number, p2: number, p3: number, p4: number): boolean;

	/**
	 * Native: NETWORK::IS_STORE_AVAILABLE_TO_USER
	 *
	 * Hash: 0x883D79C4071E18B3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x883D79C4071E18B3)
	 */
	isStoreAvailableToUser(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_TEXT_CHAT_ACTIVE
	 *
	 * Hash: 0x5FCF4D7069B09026 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FCF4D7069B09026)
	 */
	isTextChatActive(): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_THIS_SCRIPT_MARKED
	 *
	 * Hash: 0xD1110739EEADB592 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1110739EEADB592)
	 */
	isThisScriptMarked(p0: integer, p1: boolean, p2: integer): boolean;

	/**
	 * Native: NETWORK::_NETWORK_IS_THREAD_ACTIVE
	 *
	 * Hash: 0x560B423D73015E77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x560B423D73015E77)
	 */
	isThreadActive(threadId: integer): boolean;

	/**
	 * Native: NETWORK::IS_TIME_EQUAL_TO
	 *
	 * Hash: 0xF5BC95857BD6D512 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5BC95857BD6D512)
	 */
	isTimeEqualTo(timeA: integer, timeB: integer): boolean;

	/**
	 * Native: NETWORK::IS_TIME_LESS_THAN
	 *
	 * Hash: 0xCB2CF5148012C8D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB2CF5148012C8D0)
	 */
	isTimeLessThan(timeA: integer, timeB: integer): boolean;

	/**
	 * Native: NETWORK::IS_TIME_MORE_THAN
	 *
	 * Hash: 0xDE350F8651E4346C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE350F8651E4346C)
	 */
	isTimeMoreThan(timeA: integer, timeB: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_BUSY
	 *
	 * Hash: 0x520F3282A53D26B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x520F3282A53D26B7)
	 */
	isTransitionBusy(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_CLOSED_CREW
	 *
	 * Hash: 0x0DBD5D7E3C5BEC3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0DBD5D7E3C5BEC3B)
	 */
	isTransitionClosedCrew(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_CLOSED_FRIENDS
	 *
	 * Hash: 0x6512765E3BE78C50 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6512765E3BE78C50)
	 */
	isTransitionClosedFriends(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_HOST
	 *
	 * Hash: 0x0B824797C9BF2159 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B824797C9BF2159)
	 */
	isTransitionHost(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_HOST_FROM_HANDLE
	 *
	 * Hash: 0x6B5C83BA3EFE6A10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B5C83BA3EFE6A10)
	 */
	isTransitionHostFromHandle(): integer;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_MATCHMAKING
	 *
	 * Hash: 0x292564C735375EDF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x292564C735375EDF)
	 */
	isTransitionMatchmaking(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_OPEN_TO_MATCHMAKING
	 *
	 * Hash: 0x37A4494483B9F5C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37A4494483B9F5C9)
	 */
	isTransitionOpenToMatchmaking(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_PRIVATE
	 *
	 * Hash: 0x5A6AA44FF8E931E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A6AA44FF8E931E6)
	 */
	isTransitionPrivate(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_SOLO
	 *
	 * Hash: 0x5DC577201723960A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DC577201723960A)
	 */
	isTransitionSolo(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_STARTED
	 *
	 * Hash: 0x53FA83401D9C07FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53FA83401D9C07FE)
	 */
	isTransitionStarted(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_TO_GAME
	 *
	 * Hash: 0x9D7696D8F4FA6CB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D7696D8F4FA6CB7)
	 */
	isTransitionToGame(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TRANSITION_VISIBILITY_LOCKED
	 *
	 * Hash: 0xD0A484CB2F829FBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0A484CB2F829FBE)
	 */
	isTransitionVisibilityLocked(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TUNABLE_CLOUD_REQUEST_PENDING
	 *
	 * Hash: 0x0467C11ED88B7D28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0467C11ED88B7D28)
	 */
	isTunableCloudRequestPending(): boolean;

	/**
	 * Native: NETWORK::NETWORK_IS_TUTORIAL_SESSION_CHANGE_PENDING
	 *
	 * Hash: 0x35F0B98A8387274D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35F0B98A8387274D)
	 */
	isTutorialSessionChangePending(): boolean;

	/**
	 * Native: NETWORK::NETWORK_JOIN_GROUP_ACTIVITY
	 *
	 * Hash: 0xA06509A691D12BE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA06509A691D12BE4)
	 */
	joinGroupActivity(): integer;

	/**
	 * Native: NETWORK::NETWORK_JOIN_PREVIOUSLY_FAILED_SESSION
	 *
	 * Hash: 0x59DF79317F85A7E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59DF79317F85A7E0)
	 */
	joinPreviouslyFailedSession(): boolean;

	/**
	 * Native: NETWORK::NETWORK_JOIN_PREVIOUSLY_FAILED_TRANSITION
	 *
	 * Hash: 0xFFE1E5B792D92B34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFFE1E5B792D92B34)
	 */
	joinPreviouslyFailedTransition(): boolean;

	/**
	 * Native: NETWORK::NETWORK_JOIN_TRANSITION
	 *
	 * Hash: 0x9D060B08CD63321A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D060B08CD63321A)
	 */
	joinTransition(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_LAUNCH_TRANSITION
	 *
	 * Hash: 0x2DCF46CB1A4F0884 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DCF46CB1A4F0884)
	 */
	launchTransition(): boolean;

	/**
	 * Native: NETWORK::NETWORK_LEAVE_PED_BEHIND_BEFORE_CUTSCENE
	 *
	 * Hash: 0xBF22E0F32968E967 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF22E0F32968E967)
	 */
	leavePedBehindBeforeCutscene(player: Handle, p1: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_LEAVE_PED_BEHIND_BEFORE_WARP
	 *
	 * Hash: 0x9769F811D1785B03 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9769F811D1785B03)
	 */
	leavePedBehindBeforeWarp(player: Handle, x: number, y: number, z: number, p4: boolean, p5: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_LEAVE_TRANSITION
	 *
	 * Hash: 0xD23A1A815D21DB19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD23A1A815D21DB19)
	 */
	leaveTransition(): boolean;

	/**
	 * Native: NETWORK::NETWORK_MARK_TRANSITION_GAMER_AS_FULLY_JOINED
	 *
	 * Hash: 0x5728BB6D63E3FF1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5728BB6D63E3FF1D)
	 */
	markTransitionGamerAsFullyJoined(): integer;

	/**
	 * Native: NETWORK::NETWORK_MEMBER_ID_FROM_GAMER_HANDLE
	 *
	 * Hash: 0xC82630132081BB6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC82630132081BB6F)
	 */
	memberIdFromGamerHandle(): NetworkMemberIdFromGamerHandleResult;

	/**
	 * Native: NETWORK::NET_TO_ENT
	 *
	 * Hash: 0xBFFEAB45A9A9094A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFFEAB45A9A9094A)
	 */
	netToEnt(netHandle: integer): Handle;

	/**
	 * Native: NETWORK::NET_TO_OBJ
	 *
	 * Hash: 0xD8515F5FEA14CB3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8515F5FEA14CB3F)
	 */
	netToObj(netHandle: integer): Handle;

	/**
	 * Native: NETWORK::NET_TO_PED
	 *
	 * Hash: 0xBDCD95FC216A8B3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBDCD95FC216A8B3E)
	 */
	netToPed(netHandle: integer): Handle;

	/**
	 * Native: NETWORK::NET_TO_VEH
	 *
	 * Hash: 0x367B936610BA360C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x367B936610BA360C)
	 */
	netToVeh(netHandle: integer): Handle;

	/**
	 * Native: NETWORK::OBJ_TO_NET
	 *
	 * Hash: 0x99BFDC94A603E541 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x99BFDC94A603E541)
	 */
	objToNet(object: Handle): integer;

	/**
	 * Native: NETWORK::OPEN_COMMERCE_STORE
	 *
	 * Hash: 0x58C21165F6545892 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58C21165F6545892)
	 */
	openCommerceStore(p0: string, p1: string, p2: integer): void;

	/**
	 * Native: NETWORK::NETWORK_OPEN_TRANSITION_MATCHMAKING
	 *
	 * Hash: 0x2B3A8F7CA3A38FDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B3A8F7CA3A38FDE)
	 */
	openTransitionMatchmaking(): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_CHAT_RESTRICTIONS
	 *
	 * Hash: 0x3039AE5AD2C9C0C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3039AE5AD2C9C0C4)
	 */
	overrideChatRestrictions(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::_NETWORK_OVERRIDE_CLOCK_MILLISECONDS_PER_GAME_MINUTE
	 *
	 * Hash: 0x42BF1D2E723B6D7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42BF1D2E723B6D7E)
	 */
	overrideClockMillisecondsPerGameMinute(ms: integer): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_CLOCK_TIME
	 *
	 * Hash: 0xE679E3E06E363892 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE679E3E06E363892)
	 */
	overrideClockTime(hours: integer, minutes: integer, seconds: integer): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_COORDS_AND_HEADING
	 *
	 * Hash: 0xA7E30DE9272B6D49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7E30DE9272B6D49)
	 */
	overrideCoordsAndHeading(entity: Handle, x: number, y: number, z: number, heading: number): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS
	 *
	 * Hash: 0xDDF73E2B1FEC5AB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDF73E2B1FEC5AB4)
	 */
	overrideReceiveRestrictions(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS_ALL
	 *
	 * Hash: 0x0FF2862B61A58AF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FF2862B61A58AF9)
	 */
	overrideReceiveRestrictionsAll(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_SEND_RESTRICTIONS
	 *
	 * Hash: 0x97DD4C5944CC2E6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97DD4C5944CC2E6A)
	 */
	overrideSendRestrictions(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_SEND_RESTRICTIONS_ALL
	 *
	 * Hash: 0x57B192B4D4AD23D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57B192B4D4AD23D5)
	 */
	overrideSendRestrictionsAll(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_TEAM_RESTRICTIONS
	 *
	 * Hash: 0x6F697A66CE78674E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F697A66CE78674E)
	 */
	overrideTeamRestrictions(team: integer, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_OVERRIDE_TRANSITION_CHAT
	 *
	 * Hash: 0xAF66059A131AA269 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF66059A131AA269)
	 */
	overrideTransitionChat(p0: boolean): void;

	/**
	 * Native: NETWORK::PARTICIPANT_ID
	 *
	 * Hash: 0x90986E8876CE0A83 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90986E8876CE0A83)
	 */
	participantId(): Handle;

	/**
	 * Native: NETWORK::PARTICIPANT_ID_TO_INT
	 *
	 * Hash: 0x57A3BDDAD8E5AA0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57A3BDDAD8E5AA0A)
	 */
	participantIdToInt(): integer;

	/**
	 * Native: NETWORK::_NETWORK_PED_FORCE_GAME_STATE_UPDATE
	 *
	 * Hash: 0xF0BC9BCD24A511D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0BC9BCD24A511D5)
	 */
	pedForceGameStateUpdate(ped: Handle): void;

	/**
	 * Native: NETWORK::PED_TO_NET
	 *
	 * Hash: 0x0EDEC3C276198689 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EDEC3C276198689)
	 */
	pedToNet(ped: Handle): integer;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_GET_CHEATER_REASON
	 *
	 * Hash: 0x172F75B6EE2233BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x172F75B6EE2233BA)
	 */
	playerGetCheaterReason(): integer;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_GET_NAME
	 *
	 * Hash: 0x7718D2E2060837D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7718D2E2060837D2)
	 */
	playerGetName(player: Handle): string;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_GET_USERID
	 *
	 * Hash: 0x4927FC39CD0869A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4927FC39CD0869A0)
	 */
	playerGetUserid(player: Handle): NetworkPlayerGetUseridResult;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_HAS_HEADSET
	 *
	 * Hash: 0x3FB99A8B08D18FD6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3FB99A8B08D18FD6)
	 */
	playerHasHeadset(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_INDEX_IS_CHEATER
	 *
	 * Hash: 0x565E430DB3B05BEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x565E430DB3B05BEC)
	 */
	playerIndexIsCheater(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_IS_BADSPORT
	 *
	 * Hash: 0x19D8DA0E5A68045A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19D8DA0E5A68045A)
	 */
	playerIsBadsport(): boolean;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_IS_CHEATER
	 *
	 * Hash: 0x655B91F1495A9090 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x655B91F1495A9090)
	 */
	playerIsCheater(): boolean;

	/**
	 * Native: NETWORK::NETWORK_PLAYER_IS_ROCKSTAR_DEV
	 *
	 * Hash: 0x544ABDDA3B409B6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x544ABDDA3B409B6D)
	 */
	playerIsRockstarDev(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_QUERY_RESPAWN_RESULTS
	 *
	 * Hash: 0x3C891A251567DFCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C891A251567DFCE)
	 */
	queryRespawnResults(): NetworkQueryRespawnResultsResult;

	/**
	 * Native: NETWORK::NETWORK_QUEUE_GAMER_FOR_STATUS
	 *
	 * Hash: 0x85A0EF54A500882C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85A0EF54A500882C)
	 */
	queueGamerForStatus(): integer;

	/**
	 * Native: NETWORK::REFRESH_PLAYER_LIST_STATS
	 *
	 * Hash: 0xE26CCFF8094D8C74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE26CCFF8094D8C74)
	 */
	refreshPlayerListStats(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_REGISTER_ENTITY_AS_NETWORKED
	 *
	 * Hash: 0x06FAACD625D80CAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06FAACD625D80CAA)
	 */
	registerEntityAsNetworked(entity: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_REGISTER_HOST_BROADCAST_VARIABLES
	 *
	 * Hash: 0x3E9B2F01C50DF595 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E9B2F01C50DF595)
	 */
	registerHostBroadcastVariables(numVars: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_REGISTER_PLAYER_BROADCAST_VARIABLES
	 *
	 * Hash: 0x3364AA97340CA215 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3364AA97340CA215)
	 */
	registerPlayerBroadcastVariables(numVars: integer): integer;

	/**
	 * Native: NETWORK::_NETWORK_REGISTER_TUNABLE_BOOL_HASH
	 *
	 * Hash: 0x697F508861875B42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x697F508861875B42)
	 */
	registerTunableBoolHash(contextHash: integer, nameHash: integer): boolean;

	/**
	 * Native: NETWORK::_NETWORK_REGISTER_TUNABLE_FLOAT_HASH
	 *
	 * Hash: 0x1950DAE9848A4739 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1950DAE9848A4739)
	 */
	registerTunableFloatHash(contextHash: integer, nameHash: integer): number;

	/**
	 * Native: NETWORK::_NETWORK_REGISTER_TUNABLE_INT_HASH
	 *
	 * Hash: 0x3A8B55FDA4C8DDEF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A8B55FDA4C8DDEF)
	 */
	registerTunableIntHash(contextHash: integer, nameHash: integer): integer;

	/**
	 * Native: NETWORK::RELEASE_ALL_COMMERCE_ITEM_IMAGES
	 *
	 * Hash: 0x72D0706CD6CCDB58 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72D0706CD6CCDB58)
	 */
	releaseAllCommerceItemImages(): void;

	/**
	 * Native: NETWORK::_REMOTE_CHEAT_DETECTED
	 *
	 * Hash: 0x472841A026D26D8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x472841A026D26D8B)
	 */
	remoteCheatDetected(player: Handle, a: integer, b: integer): boolean;

	/**
	 * Native: NETWORK::REMOVE_ALL_STICKY_BOMBS_FROM_ENTITY
	 *
	 * Hash: 0x715135F4B82AC90D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x715135F4B82AC90D)
	 */
	removeAllStickyBombsFromEntity(entity: Handle, ped: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_REMOVE_ALL_TRANSITION_INVITE
	 *
	 * Hash: 0x726E0375C7A26368 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x726E0375C7A26368)
	 */
	removeAllTransitionInvite(): void;

	/**
	 * Native: NETWORK::NETWORK_REMOVE_ENTITY_AREA
	 *
	 * Hash: 0x93CF869BAA0C4874 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93CF869BAA0C4874)
	 */
	removeEntityArea(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_REMOVE_PRESENCE_INVITE
	 *
	 * Hash: 0xF0210268DB0974B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0210268DB0974B1)
	 */
	removePresenceInvite(p0: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_REMOVE_TRANSITION_INVITE
	 *
	 * Hash: 0x7524B431B2E6F7EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7524B431B2E6F7EE)
	 */
	removeTransitionInvite(): integer;

	/**
	 * Native: NETWORK::_NETWORK_REPORT_MYSELF
	 *
	 * Hash: 0x5626D9D6810730D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5626D9D6810730D5)
	 */
	reportMyself(): void;

	/**
	 * Native: NETWORK::NETWORK_REQUEST_CLOUD_BACKGROUND_SCRIPTS
	 *
	 * Hash: 0x924426BFFD82E915 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x924426BFFD82E915)
	 */
	requestCloudBackgroundScripts(): boolean;

	/**
	 * Native: NETWORK::NETWORK_REQUEST_CLOUD_TUNABLES
	 *
	 * Hash: 0x42FB3B532D526E6C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42FB3B532D526E6C)
	 */
	requestCloudTunables(): void;

	/**
	 * Native: NETWORK::REQUEST_COMMERCE_ITEM_IMAGE
	 *
	 * Hash: 0xA2F952104FC6DD4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2F952104FC6DD4B)
	 */
	requestCommerceItemImage(index: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_REQUEST_CONTROL_OF_DOOR
	 *
	 * Hash: 0x870DDFD5A4A796E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x870DDFD5A4A796E4)
	 */
	requestControlOfDoor(doorID: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_REQUEST_CONTROL_OF_ENTITY
	 *
	 * Hash: 0xB69317BF5E782347 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB69317BF5E782347)
	 */
	requestControlOfEntity(entity: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_REQUEST_CONTROL_OF_NETWORK_ID
	 *
	 * Hash: 0xA670B3662FAFFBD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA670B3662FAFFBD0)
	 */
	requestControlOfNetworkId(netId: integer): boolean;

	/**
	 * Native: NETWORK::_RESERVE_NETWORK_LOCAL_OBJECTS
	 *
	 * Hash: 0x797F9C5E661D920E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x797F9C5E661D920E)
	 */
	reserveLocalObjects(amount: integer): void;

	/**
	 * Native: NETWORK::_RESERVE_NETWORK_LOCAL_PEDS
	 *
	 * Hash: 0x2C8DF5D129595281 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C8DF5D129595281)
	 */
	reserveLocalPeds(amount: integer): void;

	/**
	 * Native: NETWORK::_RESERVE_NETWORK_LOCAL_VEHICLES
	 *
	 * Hash: 0x42613035157E4208 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x42613035157E4208)
	 */
	reserveLocalVehicles(amount: integer): void;

	/**
	 * Native: NETWORK::RESERVE_NETWORK_MISSION_OBJECTS
	 *
	 * Hash: 0x4E5C93BD0C32FBF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E5C93BD0C32FBF8)
	 */
	reserveMissionObjects(amount: integer): void;

	/**
	 * Native: NETWORK::RESERVE_NETWORK_MISSION_PEDS
	 *
	 * Hash: 0xB60FEBA45333D36F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB60FEBA45333D36F)
	 */
	reserveMissionPeds(amount: integer): void;

	/**
	 * Native: NETWORK::RESERVE_NETWORK_MISSION_VEHICLES
	 *
	 * Hash: 0x76B02E21ED27A469 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x76B02E21ED27A469)
	 */
	reserveMissionVehicles(amount: integer): void;

	/**
	 * Native: NETWORK::NETWORK_RESET_BODY_TRACKER
	 *
	 * Hash: 0x72433699B4E6DD64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72433699B4E6DD64)
	 */
	resetBodyTracker(): void;

	/**
	 * Native: NETWORK::_RESET_GHOSTED_ENTITY_ALPHA
	 *
	 * Hash: 0x17330EBF2F2124A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17330EBF2F2124A8)
	 */
	resetGhostedEntityAlpha(): void;

	/**
	 * Native: NETWORK::NETWORK_RESURRECT_LOCAL_PLAYER
	 *
	 * p7 defaults to 0
	 *
	 * Hash: 0xEA23C49EAA83ACFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEA23C49EAA83ACFB)
	 */
	resurrectLocalPlayer(
		x: number,
		y: number,
		z: number,
		heading: number,
		unk: boolean,
		changetime: boolean,
		p6?: integer
	): void;

	/**
	 * Native: NETWORK::NETWORK_SEED_RANDOM_NUMBER_GENERATOR
	 *
	 * Hash: 0xF1B84178F8674195 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1B84178F8674195)
	 */
	seedRandomNumberGenerator(seed: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SEND_INVITE_VIA_PRESENCE
	 *
	 * Hash: 0xC3C7A6AFDB244624 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3C7A6AFDB244624)
	 */
	sendInviteViaPresence(p2: integer, p3: integer): NetworkSendInviteViaPresenceResult;

	/**
	 * Native: NETWORK::_NETWORK_SEND_PRESENCE_TRANSITION_INVITE
	 *
	 * Hash: 0xC116FF9B4D488291 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC116FF9B4D488291)
	 */
	sendPresenceTransitionInvite(p2: integer, p3: integer): NetworkSendPresenceTransitionInviteResult;

	/**
	 * Native: NETWORK::NETWORK_SEND_TEXT_MESSAGE
	 *
	 * Hash: 0x3A214F2EC889B100 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A214F2EC889B100)
	 */
	sendTextMessage(message: string): integer;

	/**
	 * Native: NETWORK::NETWORK_SEND_TRANSITION_GAMER_INSTRUCTION
	 *
	 * Hash: 0x31D1D2B858D25E6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31D1D2B858D25E6B)
	 */
	sendTransitionGamerInstruction(p1: string, p2: integer, p3: integer, p4: boolean): integer;

	/**
	 * Native: NETWORK::NETWORK_SESSION_ACTIVITY_QUICKMATCH
	 *
	 * Hash: 0xBE3E347A87ACEB82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE3E347A87ACEB82)
	 */
	sessionActivityQuickmatch(p0: integer, p1: integer, p2: integer, p3: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_ADD_ACTIVE_MATCHMAKING_GROUP
	 *
	 * Hash: 0xCAE55F48D3D7875C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCAE55F48D3D7875C)
	 */
	sessionAddActiveMatchmakingGroup(groupId: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_BLOCK_JOIN_REQUESTS
	 *
	 * Hash: 0xA73667484D7037C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA73667484D7037C3)
	 */
	sessionBlockJoinRequests(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_CANCEL_INVITE
	 *
	 * Hash: 0x2FBF47B1B36D36F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FBF47B1B36D36F9)
	 */
	sessionCancelInvite(): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_CHANGE_SLOTS
	 *
	 * Hash: 0xB4AB419E0D86ACAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4AB419E0D86ACAE)
	 */
	sessionChangeSlots(p0: integer, p1: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_CREW_MATCHMAKING
	 *
	 * Hash: 0x94BC51E9449D917F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94BC51E9449D917F)
	 */
	sessionCrewMatchmaking(p0: integer, p1: integer, p2: integer, maxPlayers: integer, p4: boolean): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_END
	 *
	 * Hash: 0xA02E59562D711006 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA02E59562D711006)
	 */
	sessionEnd(p0: boolean, p1: boolean): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_ENTER
	 *
	 * Hash: 0x330ED4D05491934F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x330ED4D05491934F)
	 */
	sessionEnter(p0: integer, p1: integer, p2: integer, maxPlayers: integer, p4: integer, p5: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_SESSION_FORCE_CANCEL_INVITE
	 *
	 * Hash: 0xA29177F7703B5644 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA29177F7703B5644)
	 */
	sessionForceCancelInvite(): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_FRIEND_MATCHMAKING
	 *
	 * Hash: 0x2CFC76E0D087C994 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CFC76E0D087C994)
	 */
	sessionFriendMatchmaking(p0: integer, p1: integer, maxPlayers: integer, p3: boolean): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_GET_INVITER
	 *
	 * Hash: 0xE57397B4A3429DD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE57397B4A3429DD0)
	 */
	sessionGetInviter(): integer;

	/**
	 * Native: NETWORK::NETWORK_SESSION_GET_KICK_VOTE
	 *
	 * Hash: 0xD6D09A6F32F49EF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6D09A6F32F49EF1)
	 */
	sessionGetKickVote(player: Handle): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_GET_MATCHMAKING_GROUP_FREE
	 *
	 * Hash: 0x56CE820830EF040B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56CE820830EF040B)
	 */
	sessionGetMatchmakingGroupFree(p0: integer): integer;

	/**
	 * Native: NETWORK::NETWORK_SESSION_GET_PRIVATE_SLOTS
	 *
	 * Hash: 0x53AFD64C6758F2F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53AFD64C6758F2F9)
	 */
	sessionGetPrivateSlots(): integer;

	/**
	 * Native: NETWORK::NETWORK_SESSION_HOST
	 *
	 * Hash: 0x6F3D4ED9BEE4E61D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F3D4ED9BEE4E61D)
	 */
	sessionHost(p0: integer, maxPlayers: integer, p2: boolean): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_HOST_CLOSED
	 *
	 * Hash: 0xED34C0C02C098BB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED34C0C02C098BB7)
	 */
	sessionHostClosed(p0: integer, maxPlayers: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_HOST_FRIENDS_ONLY
	 *
	 * Hash: 0xB9CFD27A5D578D83 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9CFD27A5D578D83)
	 */
	sessionHostFriendsOnly(p0: integer, maxPlayers: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_HOST_SINGLE_PLAYER
	 *
	 * Hash: 0xC74C33FCA52856D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC74C33FCA52856D5)
	 */
	sessionHostSinglePlayer(p0: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_CLOSED_CREW
	 *
	 * Hash: 0x74732C6CA90DA2B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74732C6CA90DA2B4)
	 */
	sessionIsClosedCrew(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_CLOSED_FRIENDS
	 *
	 * Hash: 0xFBCFA2EA2E206890 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBCFA2EA2E206890)
	 */
	sessionIsClosedFriends(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_IN_VOICE_SESSION
	 *
	 * Hash: 0x855BC38818F6F684 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x855BC38818F6F684)
	 */
	sessionIsInVoiceSession(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_PRIVATE
	 *
	 * Hash: 0xCEF70AA5B3F89BA1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEF70AA5B3F89BA1)
	 */
	sessionIsPrivate(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_SOLO
	 *
	 * Hash: 0xF3929C2379B60CCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3929C2379B60CCE)
	 */
	sessionIsSolo(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_VISIBLE
	 *
	 * Hash: 0xBA416D68C631496A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA416D68C631496A)
	 */
	sessionIsVisible(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_IS_VOICE_SESSION_BUSY
	 *
	 * Hash: 0xEF0912DDF7C4CB4B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF0912DDF7C4CB4B)
	 */
	sessionIsVoiceSessionBusy(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SESSION_JOIN_INVITE
	 *
	 * Hash: 0xC6F8AB8A4189CF3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6F8AB8A4189CF3A)
	 */
	sessionJoinInvite(): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_KICK_PLAYER
	 *
	 * Hash: 0xFA8904DC5F304220 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA8904DC5F304220)
	 */
	sessionKickPlayer(player: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_LEAVE_SINGLE_PLAYER
	 *
	 * Hash: 0x3442775428FD2DAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3442775428FD2DAA)
	 */
	sessionLeaveSinglePlayer(): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_MARK_VISIBLE
	 *
	 * Hash: 0x271CC6AB59EBF9A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x271CC6AB59EBF9A5)
	 */
	sessionMarkVisible(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_SET_MATCHMAKING_GROUP
	 *
	 * Hash: 0x49EC8030F5015F8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49EC8030F5015F8B)
	 */
	sessionSetMatchmakingGroup(matchmakingGroup: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_SET_MATCHMAKING_GROUP_MAX
	 *
	 * Hash: 0x8B6A4DD0AF9CE215 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B6A4DD0AF9CE215)
	 */
	sessionSetMatchmakingGroupMax(playerType: integer, playerCount: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_SET_MATCHMAKING_MENTAL_STATE
	 *
	 * Hash: 0xF1EEA2DDA9FFA69D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1EEA2DDA9FFA69D)
	 */
	sessionSetMatchmakingMentalState(p0: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_SET_MATCHMAKING_PROPERTY_ID
	 *
	 * Hash: 0x3F52E880AAF6C8CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F52E880AAF6C8CA)
	 */
	sessionSetMatchmakingPropertyId(p0: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_VALIDATE_JOIN
	 *
	 * Hash: 0xC19F6C8E7865A6FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC19F6C8E7865A6FF)
	 */
	sessionValidateJoin(p0: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_VOICE_CONNECT_TO_PLAYER
	 *
	 * Hash: 0xABD5E88B8A2D3DB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xABD5E88B8A2D3DB2)
	 */
	sessionVoiceConnectToPlayer(): integer;

	/**
	 * Native: NETWORK::NETWORK_SESSION_VOICE_HOST
	 *
	 * Hash: 0x9C1556705F864230 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C1556705F864230)
	 */
	sessionVoiceHost(): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_VOICE_LEAVE
	 *
	 * Hash: 0x6793E42BE02B575D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6793E42BE02B575D)
	 */
	sessionVoiceLeave(): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_VOICE_RESPOND_TO_REQUEST
	 *
	 * Hash: 0x7F8413B7FC2AA6B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F8413B7FC2AA6B9)
	 */
	sessionVoiceRespondToRequest(p0: boolean, p1: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_VOICE_SET_TIMEOUT
	 *
	 * Hash: 0x5B8ED3DB018927B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B8ED3DB018927B1)
	 */
	sessionVoiceSetTimeout(timeout: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SESSION_WAS_INVITED
	 *
	 * Hash: 0x23DFB504655D0CE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23DFB504655D0CE4)
	 */
	sessionWasInvited(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SET_ACTIVITY_SPECTATOR
	 *
	 * Hash: 0x75138790B4359A74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75138790B4359A74)
	 */
	setActivitySpectator(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_ACTIVITY_SPECTATOR_MAX
	 *
	 * Hash: 0x9D277B76D1D12222 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D277B76D1D12222)
	 */
	setActivitySpectatorMax(maxSpectators: integer): void;

	/**
	 * Native: NETWORK::SET_BALANCE_ADD_MACHINE
	 *
	 * Hash: 0x815E5E3073DA1D67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x815E5E3073DA1D67)
	 */
	setBalanceAddMachine(contentId: string, contentTypeName: string): boolean;

	/**
	 * Native: NETWORK::SET_BALANCE_ADD_MACHINES
	 *
	 * Hash: 0xB8322EEB38BE7C26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB8322EEB38BE7C26)
	 */
	setBalanceAddMachines(dataCount: integer, contentTypeName: string): integer;

	/**
	 * Native: NETWORK::NETWORK_SET_CHOICE_MIGRATE_OPTIONS
	 *
	 * Hash: 0x5C707A667DF8B9FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C707A667DF8B9FA)
	 */
	setChoiceMigrateOptions(toggle: boolean, player: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_SET_CURRENT_DATA_MANAGER_HANDLE
	 *
	 * Hash: 0x796A87B3B68D1F3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x796A87B3B68D1F3D)
	 */
	setCurrentDataManagerHandle(): integer;

	/**
	 * Native: NETWORK::NETWORK_SET_CURRENTLY_SELECTED_GAMER_HANDLE_FROM_INVITE_MENU
	 *
	 * Hash: 0x7206F674F2A3B1BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7206F674F2A3B1BB)
	 */
	setCurrentlySelectedGamerHandleFromInviteMenu(): integer;

	/**
	 * Native: NETWORK::SET_NETWORK_CUTSCENE_ENTITIES
	 *
	 * Hash: 0xAAA553E7DD28A457 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAA553E7DD28A457)
	 */
	setCutsceneEntities(toggle: boolean): void;

	/**
	 * Native: NETWORK::_SET_NETWORK_ENABLE_VEHICLE_POSITION_CORRECTION
	 *
	 * Hash: 0x838DA0936A24ED4D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x838DA0936A24ED4D)
	 */
	setEnableVehiclePositionCorrection(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_ENTITY_CAN_BLEND
	 *
	 * Hash: 0xD830567D88A1E873 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD830567D88A1E873)
	 */
	setEntityCanBlend(entity: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::_NETWORK_SET_ENTITY_GHOSTED_WITH_OWNER
	 *
	 * Hash: 0x4BA166079D658ED4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4BA166079D658ED4)
	 */
	setEntityGhostedWithOwner(entity: Handle, p1: boolean): void;

	/**
	 * Native: NETWORK::_NETWORK_SET_ENTITY_INVISIBLE_TO_NETWORK
	 *
	 * Hash: 0xF1CA12B18AEF5298 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1CA12B18AEF5298)
	 */
	setEntityInvisibleToNetwork(entity: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_ENTITY_LOCALLY_INVISIBLE
	 *
	 * Hash: 0xE135A9FF3F5D05D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE135A9FF3F5D05D8)
	 */
	setEntityLocallyInvisible(entity: Handle): void;

	/**
	 * Native: NETWORK::SET_ENTITY_LOCALLY_VISIBLE
	 *
	 * Hash: 0x241E289B5C059EDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x241E289B5C059EDC)
	 */
	setEntityLocallyVisible(entity: Handle): void;

	/**
	 * Native: NETWORK::SET_ENTITY_VISIBLE_IN_CUTSCENE
	 *
	 * Hash: 0xE0031D3C8F36AB82 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0031D3C8F36AB82)
	 */
	setEntityVisibleInCutscene(p0: integer, p1: boolean, p2: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_FRIENDLY_FIRE_OPTION
	 *
	 * Hash: 0xF808475FA571D823 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF808475FA571D823)
	 */
	setFriendlyFireOption(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_GAMER_INVITED_TO_TRANSITION
	 *
	 * Hash: 0xCA2C8073411ECDB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA2C8073411ECDB6)
	 */
	setGamerInvitedToTransition(): integer;

	/**
	 * Native: NETWORK::_SET_GHOSTED_ENTITY_ALPHA
	 *
	 * Hash: 0x658500AE6D723A7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x658500AE6D723A7E)
	 */
	setGhostedEntityAlpha(alpha: integer): void;

	/**
	 * Native: NETWORK::SET_NETWORK_ID_ALWAYS_EXISTS_FOR_PLAYER
	 *
	 * Hash: 0xA8A024587329F36A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8A024587329F36A)
	 */
	setIdAlwaysExistsForPlayer(netId: integer, player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_NETWORK_ID_CAN_MIGRATE
	 *
	 * Hash: 0x299EEB23175895FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x299EEB23175895FC)
	 */
	setIdCanMigrate(netId: integer, toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES
	 *
	 * Hash: 0xE05E81A888FA63C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE05E81A888FA63C8)
	 */
	setIdExistsOnAllMachines(netId: integer, toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_NETWORK_ID_VISIBLE_IN_CUTSCENE
	 *
	 * Hash: 0xA6928482543022B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6928482543022B4)
	 */
	setIdVisibleInCutscene(netId: integer, p1: boolean, p2: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_IN_FREE_CAM_MODE
	 *
	 * Hash: 0xFC18DB55AE19E046 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC18DB55AE19E046)
	 */
	setInFreeCamMode(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_IN_MP_CUTSCENE
	 *
	 * Hash: 0x9CA5DE655269FEC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CA5DE655269FEC4)
	 */
	setInMpCutscene(p0: boolean, p1: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_IN_SPECTATOR_MODE
	 *
	 * Hash: 0x423DE3854BB50894 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x423DE3854BB50894)
	 */
	setInSpectatorMode(toggle: boolean, playerPed: Handle): void;

	/**
	 * Native: NETWORK::NETWORK_SET_IN_SPECTATOR_MODE_EXTENDED
	 *
	 * Hash: 0x419594E137637120 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x419594E137637120)
	 */
	setInSpectatorModeExtended(toggle: boolean, playerPed: Handle, p2: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_INVITE_ON_CALL_FOR_INVITE_MENU
	 *
	 * Hash: 0x66F010A4B031A331 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66F010A4B031A331)
	 */
	setInviteOnCallForInviteMenu(): integer;

	/**
	 * Native: NETWORK::_SET_LOCAL_PLAYER_AS_GHOST
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0x5FFE9B4144F9712F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FFE9B4144F9712F)
	 */
	setLocalPlayerAsGhost(toggle: boolean, p1?: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_LOCAL_PLAYER_INVINCIBLE_TIME
	 *
	 * Hash: 0x2D95C7E2D7E07307 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D95C7E2D7E07307)
	 */
	setLocalPlayerInvincibleTime(time: integer): void;

	/**
	 * Native: NETWORK::SET_LOCAL_PLAYER_INVISIBLE_LOCALLY
	 *
	 * Hash: 0xE5F773C1A1D9D168 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE5F773C1A1D9D168)
	 */
	setLocalPlayerInvisibleLocally(p0: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_LOCAL_PLAYER_SYNC_LOOK_AT
	 *
	 * Hash: 0x524FF0AEFF9C3973 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x524FF0AEFF9C3973)
	 */
	setLocalPlayerSyncLookAt(toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_LOCAL_PLAYER_VISIBLE_IN_CUTSCENE
	 *
	 * Hash: 0xD1065D68947E7B6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1065D68947E7B6E)
	 */
	setLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;

	/**
	 * Native: NETWORK::SET_LOCAL_PLAYER_VISIBLE_LOCALLY
	 *
	 * Hash: 0x7619364C82D3BF14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7619364C82D3BF14)
	 */
	setLocalPlayerVisibleLocally(p0: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_MISSION_FINISHED
	 *
	 * Hash: 0x3B3D11CD9FFCDFC9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3B3D11CD9FFCDFC9)
	 */
	setMissionFinished(): void;

	/**
	 * Native: NETWORK::NETWORK_SET_NO_SPECTATOR_CHAT
	 *
	 * Hash: 0xF46A1E03E8755980 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF46A1E03E8755980)
	 */
	setNoSpectatorChat(toggle: boolean): void;

	/**
	 * Native: NETWORK::_NETWORK_SET_OBJECT_INTEREST_RANGE
	 *
	 * Hash: 0xBA7F0B77D80A4EB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA7F0B77D80A4EB7)
	 */
	setObjectInterestRange(object: Handle, range: number): void;

	/**
	 * Native: NETWORK::NETWORK_SET_OVERRIDE_SPECTATOR_MODE
	 *
	 * Hash: 0x70DA3BF8DACD3210 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70DA3BF8DACD3210)
	 */
	setOverrideSpectatorMode(toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_PLAYER_INVISIBLE_LOCALLY
	 *
	 * Hash: 0x12B37D54667DB0B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12B37D54667DB0B8)
	 */
	setPlayerInvisibleLocally(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_PLAYER_IS_PASSIVE
	 *
	 * Hash: 0x1B857666604B1A74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1B857666604B1A74)
	 */
	setPlayerIsPassive(toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_PLAYER_VISIBLE_LOCALLY
	 *
	 * Hash: 0xFAA10F1FAFB11AF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAA10F1FAFB11AF2)
	 */
	setPlayerVisibleLocally(player: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_PROPERTY_ID
	 *
	 * Hash: 0x1775961C2FBBCB5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1775961C2FBBCB5C)
	 */
	setPropertyId(id: integer): void;

	/**
	 * Native: NETWORK::_SET_RELATIONSHIP_TO_PLAYER
	 *
	 * Hash: 0xA7C511FA1C5BDA38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7C511FA1C5BDA38)
	 */
	setRelationshipToPlayer(player: Handle, p1: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_RICH_PRESENCE
	 *
	 * Hash: 0x1DCCACDCFC569362 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DCCACDCFC569362)
	 */
	setRichPresence(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SET_RICH_PRESENCE_STRING
	 *
	 * Hash: 0x3E200C2BCF4164EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E200C2BCF4164EB)
	 */
	setRichPresenceString(p0: integer, textLabel: string): void;

	/**
	 * Native: NETWORK::NETWORK_SET_SCRIPT_READY_FOR_EVENTS
	 *
	 * Hash: 0x7AC752103856FB20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AC752103856FB20)
	 */
	setScriptReadyForEvents(toggle: boolean): void;

	/**
	 * Native: NETWORK::SET_STORE_ENABLED
	 *
	 * Hash: 0x9641A9FF718E9C5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9641A9FF718E9C5E)
	 */
	setStoreEnabled(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_TALKER_PROXIMITY
	 *
	 * Hash: 0xCBF12D65F95AD686 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCBF12D65F95AD686)
	 */
	setTalkerProximity(value: number): void;

	/**
	 * Native: NETWORK::NETWORK_SET_TEAM_ONLY_CHAT
	 *
	 * Hash: 0xD5B4883AC32F24C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5B4883AC32F24C3)
	 */
	setTeamOnlyChat(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_THIS_SCRIPT_IS_NETWORK_SCRIPT
	 *
	 * Hash: 0x1CA59E306ECB80A5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CA59E306ECB80A5)
	 */
	setThisScriptIsNetworkScript(maxNumMissionParticipants: integer, p1: boolean, instanceId: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SET_TRANSITION_ACTIVITY_ID
	 *
	 * Hash: 0x30DE938B516F0AD2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30DE938B516F0AD2)
	 */
	setTransitionActivityId(p0: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SET_TRANSITION_CREATOR_HANDLE
	 *
	 * Hash: 0xEF26739BCD9907D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF26739BCD9907D5)
	 */
	setTransitionCreatorHandle(): integer;

	/**
	 * Native: NETWORK::NETWORK_SET_TRANSITION_VISIBILITY_LOCK
	 *
	 * Hash: 0x0C978FDA19692C2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C978FDA19692C2C)
	 */
	setTransitionVisibilityLock(p0: boolean, p1: boolean): void;

	/**
	 * Native: NETWORK::SET_NETWORK_VEHICLE_AS_GHOST
	 *
	 * Hash: 0x6274C4712850841E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6274C4712850841E)
	 */
	setVehicleAsGhost(vehicle: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::_SET_NETWORK_VEHICLE_POSITION_UPDATE_MULTIPLIER
	 *
	 * Hash: 0xA2A707979FE754DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA2A707979FE754DC)
	 */
	setVehiclePositionUpdateMultiplier(vehicle: Handle, multiplier: number): void;

	/**
	 * Native: NETWORK::SET_NETWORK_VEHICLE_RESPOT_TIMER
	 *
	 * p2 defaults to 0
	 * p3 defaults to 0
	 *
	 * Hash: 0xEC51713AB6EC36E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC51713AB6EC36E8)
	 */
	setVehicleRespotTimer(netId: integer, time: integer, p2?: integer, p3?: integer): void;

	/**
	 * Native: NETWORK::_NETWORK_SET_VEHICLE_WHEELS_DESTRUCTIBLE
	 *
	 * Hash: 0x890E2C5ABED7236D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x890E2C5ABED7236D)
	 */
	setVehicleWheelsDestructible(entity: Handle, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_VOICE_ACTIVE
	 *
	 * Hash: 0xBABEC9E69A91C57B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBABEC9E69A91C57B)
	 */
	setVoiceActive(toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_SET_VOICE_CHANNEL
	 *
	 * Hash: 0xEF6212C2EFEF1A23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF6212C2EFEF1A23)
	 */
	setVoiceChannel(channel: integer): void;

	/**
	 * Native: NETWORK::_NETWORK_SHOULD_SHOW_CONNECTIVITY_TROUBLESHOOTING
	 *
	 * Hash: 0x82A2B386716608F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82A2B386716608F1)
	 */
	shouldShowConnectivityTroubleshooting(): boolean;

	/**
	 * Native: NETWORK::NETWORK_SHOW_PROFILE_UI
	 *
	 * Hash: 0x859ED1CEA343FCA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x859ED1CEA343FCA8)
	 */
	showProfileUi(): integer;

	/**
	 * Native: NETWORK::SHUTDOWN_AND_LAUNCH_SINGLE_PLAYER_GAME
	 *
	 * Hash: 0x593850C16A36B692 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x593850C16A36B692)
	 */
	shutdownAndLaunchSinglePlayerGame(): void;

	/**
	 * Native: NETWORK::_SHUTDOWN_AND_LOAD_MOST_RECENT_SAVE
	 *
	 * Hash: 0x9ECA15ADFE141431 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9ECA15ADFE141431)
	 */
	shutdownAndLoadMostRecentSave(): boolean;

	/**
	 * Native: NETWORK::NETWORK_START_RESPAWN_SEARCH_FOR_PLAYER
	 *
	 * Hash: 0x5A6FFA2433E2F14C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A6FFA2433E2F14C)
	 */
	startRespawnSearchForPlayer(
		player: Handle,
		x: number,
		y: number,
		z: number,
		radius: number,
		p5: number,
		p6: number,
		p7: number,
		flags: integer
	): boolean;

	/**
	 * Native: NETWORK::NETWORK_START_RESPAWN_SEARCH_IN_ANGLED_AREA_FOR_PLAYER
	 *
	 * Hash: 0x4BA92A18502BCA61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4BA92A18502BCA61)
	 */
	startRespawnSearchInAngledAreaForPlayer(
		player: Handle,
		x1: number,
		y1: number,
		z1: number,
		x2: number,
		y2: number,
		z2: number,
		width: number,
		p8: number,
		p9: number,
		p10: number,
		flags: integer
	): boolean;

	/**
	 * Native: NETWORK::NETWORK_START_SOLO_TUTORIAL_SESSION
	 *
	 * Hash: 0x17E0198B3882C2CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17E0198B3882C2CB)
	 */
	startSoloTutorialSession(): void;

	/**
	 * Native: NETWORK::NETWORK_START_SYNCHRONISED_SCENE
	 *
	 * Hash: 0x9A1B3FCDB36C8697 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A1B3FCDB36C8697)
	 */
	startSynchronisedScene(netScene: integer): void;

	/**
	 * Native: NETWORK::NETWORK_START_USER_CONTENT_PERMISSIONS_CHECK
	 *
	 * Hash: 0xDEB2B99A1AF1A2A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEB2B99A1AF1A2A6)
	 */
	startUserContentPermissionsCheck(): NetworkStartUserContentPermissionsCheckResult;

	/**
	 * Native: NETWORK::NETWORK_STOP_SYNCHRONISED_SCENE
	 *
	 * Hash: 0xC254481A4574CB2F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC254481A4574CB2F)
	 */
	stopSynchronisedScene(netScene: integer): void;

	/**
	 * Native: NETWORK::NETWORK_SUPPRESS_INVITE
	 *
	 * Hash: 0xA0682D67EF1FBA3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0682D67EF1FBA3D)
	 */
	suppressInvite(toggle: boolean): void;

	/**
	 * Native: NETWORK::TEXTURE_DOWNLOAD_GET_NAME
	 *
	 * Hash: 0x3448505B6E35262D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3448505B6E35262D)
	 */
	textureDownloadGetName(p0: integer): string;

	/**
	 * Native: NETWORK::TEXTURE_DOWNLOAD_HAS_FAILED
	 *
	 * Hash: 0x5776ED562C134687 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5776ED562C134687)
	 */
	textureDownloadHasFailed(p0: integer): boolean;

	/**
	 * Native: NETWORK::TEXTURE_DOWNLOAD_RELEASE
	 *
	 * Hash: 0x487EB90B98E9FB19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x487EB90B98E9FB19)
	 */
	textureDownloadRelease(p0: integer): void;

	/**
	 * Native: NETWORK::TEXTURE_DOWNLOAD_REQUEST
	 *
	 * Hash: 0x16160DA74A8E74A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16160DA74A8E74A2)
	 */
	textureDownloadRequest(filePath: string, name: string, p3: boolean): TextureDownloadRequestResult;

	/**
	 * Native: NETWORK::TITLE_TEXTURE_DOWNLOAD_REQUEST
	 *
	 * Hash: 0x0B203B4AFDE53A4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B203B4AFDE53A4F)
	 */
	titleTextureDownloadRequest(filePath: string, name: string, p2: boolean): integer;

	/**
	 * Native: NETWORK::_NETWORK_TRANSITION_TRACK
	 *
	 * Hash: 0xC3BFED92026A2AAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3BFED92026A2AAD)
	 */
	transitionTrack(hash: integer, p1: integer, p2: integer, state: integer, p4: integer): void;

	/**
	 * Native: NETWORK::_TRIGGER_SCRIPT_CRC_CHECK_ON_PLAYER
	 *
	 * Hash: 0x46FB3ED415C7641C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46FB3ED415C7641C)
	 */
	triggerScriptCrcCheckOnPlayer(player: Handle, p1: integer, scriptHash: integer): boolean;

	/**
	 * Native: NETWORK::NETWORK_TRY_ACCESS_TUNABLE_BOOL_HASH
	 *
	 * Hash: 0xC7420099936CE286 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7420099936CE286)
	 */
	tryAccessTunableBoolHash(tunableContext: integer, tunableName: integer, defaultValue: boolean): boolean;

	/**
	 * Native: NETWORK::UGC_CANCEL_QUERY
	 *
	 * Hash: 0xE9B99B6853181409 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE9B99B6853181409)
	 */
	ugcCancelQuery(): void;

	/**
	 * Native: NETWORK::UGC_CLEAR_CREATE_RESULT
	 *
	 * Hash: 0x17440AA15D1D3739 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17440AA15D1D3739)
	 */
	ugcClearCreateResult(): void;

	/**
	 * Native: NETWORK::UGC_CLEAR_MODIFY_RESULT
	 *
	 * Hash: 0xA1E5E0204A6FCC70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1E5E0204A6FCC70)
	 */
	ugcClearModifyResult(): void;

	/**
	 * Native: NETWORK::UGC_CLEAR_OFFLINE_QUERY
	 *
	 * Hash: 0x61A885D3F7CFEE9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61A885D3F7CFEE9A)
	 */
	ugcClearOfflineQuery(): void;

	/**
	 * Native: NETWORK::UGC_CLEAR_QUERY_RESULTS
	 *
	 * Hash: 0xBA96394A0EECFA65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA96394A0EECFA65)
	 */
	ugcClearQueryResults(): void;

	/**
	 * Native: NETWORK::UGC_COPY_CONTENT
	 *
	 * Hash: 0x152D90E4C1B4738A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x152D90E4C1B4738A)
	 */
	ugcCopyContent(): UgcCopyContentResult;

	/**
	 * Native: NETWORK::UGC_DID_CREATE_SUCCEED
	 *
	 * Hash: 0x24E4E51FC16305F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24E4E51FC16305F9)
	 */
	ugcDidCreateSucceed(): integer;

	/**
	 * Native: NETWORK::UGC_DID_GET_SUCCEED
	 *
	 * Hash: 0x941E5306BCD7C2C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x941E5306BCD7C2C7)
	 */
	ugcDidGetSucceed(): integer;

	/**
	 * Native: NETWORK::UGC_GET_BOOKMARKED_CONTENT
	 *
	 * Hash: 0xD5A4B59980401588 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5A4B59980401588)
	 */
	ugcGetBookmarkedContent(p0: integer, p1: integer, p2: string): integer;

	/**
	 * Native: NETWORK::UGC_GET_CACHED_DESCRIPTION
	 *
	 * Hash: 0x40F7E66472DF3E5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x40F7E66472DF3E5C)
	 */
	ugcGetCachedDescription(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_CATEGORY
	 *
	 * Hash: 0xA7BAB11E7C9C6C5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7BAB11E7C9C6C5A)
	 */
	ugcGetContentCategory(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_DESCRIPTION_HASH
	 *
	 * Hash: 0x7CF0448787B23758 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CF0448787B23758)
	 */
	ugcGetContentDescriptionHash(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_FILE_VERSION
	 *
	 * Hash: 0x37025B27D9B658B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37025B27D9B658B1)
	 */
	ugcGetContentFileVersion(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_HASH
	 *
	 * Hash: 0x3A17A27D75C74887 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A17A27D75C74887)
	 */
	ugcGetContentHash(): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_HAS_PLAYER_BOOKMARKED
	 *
	 * Hash: 0x993CBE59D350D225 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x993CBE59D350D225)
	 */
	ugcGetContentHasPlayerBookmarked(p0: integer): boolean;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_HAS_PLAYER_RECORD
	 *
	 * Hash: 0x70EA8DA57840F9BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70EA8DA57840F9BE)
	 */
	ugcGetContentHasPlayerRecord(p0: integer): boolean;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_ID
	 *
	 * Hash: 0x55AA95F481D694D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55AA95F481D694D2)
	 */
	ugcGetContentId(p0: integer): string;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_IS_PUBLISHED
	 *
	 * Hash: 0x3054F114121C21EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3054F114121C21EA)
	 */
	ugcGetContentIsPublished(p0: integer): boolean;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_IS_VERIFIED
	 *
	 * Hash: 0xA9240A96C74CCA13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9240A96C74CCA13)
	 */
	ugcGetContentIsVerified(p0: integer): boolean;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_LANGUAGE
	 *
	 * Hash: 0x32DD916F3F7C9672 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32DD916F3F7C9672)
	 */
	ugcGetContentLanguage(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_NAME
	 *
	 * Hash: 0xBF09786A7FCAB582 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF09786A7FCAB582)
	 */
	ugcGetContentName(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_NUM
	 *
	 * Hash: 0xE0A6138401BCB837 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0A6138401BCB837)
	 */
	ugcGetContentNum(): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_PATH
	 *
	 * Hash: 0xBAF6BABF9E7CCC13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAF6BABF9E7CCC13)
	 */
	ugcGetContentPath(p0: integer, p1: integer): string;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_RATING
	 *
	 * Hash: 0x1ACCFBA3D8DAB2EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1ACCFBA3D8DAB2EE)
	 */
	ugcGetContentRating(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_RATING_COUNT
	 *
	 * Hash: 0x759299C5BB31D2A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x759299C5BB31D2A9)
	 */
	ugcGetContentRatingCount(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_RATING_NEGATIVE_COUNT
	 *
	 * Hash: 0x4E548C0D7AE39FF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E548C0D7AE39FF9)
	 */
	ugcGetContentRatingNegativeCount(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_RATING_POSITIVE_COUNT
	 *
	 * Hash: 0x87E5C46C187FE0AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x87E5C46C187FE0AE)
	 */
	ugcGetContentRatingPositiveCount(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_TOTAL
	 *
	 * Hash: 0x769951E2455E2EB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x769951E2455E2EB5)
	 */
	ugcGetContentTotal(): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_UPDATED_DATE
	 *
	 * Hash: 0xCFD115B373C0DF63 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFD115B373C0DF63)
	 */
	ugcGetContentUpdatedDate(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_USER_ID
	 *
	 * Hash: 0xCD67AD041A394C9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD67AD041A394C9C)
	 */
	ugcGetContentUserId(p0: integer): string;

	/**
	 * Native: NETWORK::UGC_GET_CONTENT_USER_NAME
	 *
	 * Hash: 0x703F12425ECA8BF5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x703F12425ECA8BF5)
	 */
	ugcGetContentUserName(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_GET_CREATE_CONTENT_ID
	 *
	 * Hash: 0xC55A0B40FFB1ED23 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC55A0B40FFB1ED23)
	 */
	ugcGetCreateContentId(): integer;

	/**
	 * Native: NETWORK::UGC_GET_CREATE_RESULT
	 *
	 * Hash: 0xFBC5E768C7A77A6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFBC5E768C7A77A6A)
	 */
	ugcGetCreateResult(): integer;

	/**
	 * Native: NETWORK::UGC_GET_CREATOR_NUM
	 *
	 * Hash: 0x597F8DBA9B206FC7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x597F8DBA9B206FC7)
	 */
	ugcGetCreatorNum(): integer;

	/**
	 * Native: NETWORK::UGC_GET_CREW_CONTENT
	 *
	 * Hash: 0x9F6E2821885CAEE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F6E2821885CAEE2)
	 */
	ugcGetCrewContent(p0: integer, p1: integer, p2: integer, p3: string): integer;

	/**
	 * Native: NETWORK::UGC_GET_FRIEND_CONTENT
	 *
	 * Hash: 0xF9E1CCAE8BA4C281 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9E1CCAE8BA4C281)
	 */
	ugcGetFriendContent(p0: integer, p1: integer, p2: string): integer;

	/**
	 * Native: NETWORK::UGC_GET_GET_BY_CATEGORY
	 *
	 * Hash: 0x678BB03C1A3BD51E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x678BB03C1A3BD51E)
	 */
	ugcGetGetByCategory(p0: integer, p1: integer, p2: integer, p3: string): integer;

	/**
	 * Native: NETWORK::UGC_GET_MODIFY_RESULT
	 *
	 * Hash: 0x5A0A3D1A186A5508 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A0A3D1A186A5508)
	 */
	ugcGetModifyResult(): integer;

	/**
	 * Native: NETWORK::UGC_GET_MY_CONTENT
	 *
	 * Hash: 0x3195F8DD0D531052 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3195F8DD0D531052)
	 */
	ugcGetMyContent(p0: integer, p1: integer, p2: string): integer;

	/**
	 * Native: NETWORK::UGC_GET_QUERY_RESULT
	 *
	 * Hash: 0xEDF7F927136C224B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDF7F927136C224B)
	 */
	ugcGetQueryResult(): integer;

	/**
	 * Native: NETWORK::UGC_GET_ROOT_CONTENT_ID
	 *
	 * Hash: 0xC0173D6BFF4E0348 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0173D6BFF4E0348)
	 */
	ugcGetRootContentId(p0: integer): string;

	/**
	 * Native: NETWORK::UGC_HAS_CREATE_FINISHED
	 *
	 * Hash: 0x5E24341A7F92A74B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E24341A7F92A74B)
	 */
	ugcHasCreateFinished(): boolean;

	/**
	 * Native: NETWORK::UGC_HAS_GET_FINISHED
	 *
	 * Hash: 0x02ADA21EA2F6918F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02ADA21EA2F6918F)
	 */
	ugcHasGetFinished(): boolean;

	/**
	 * Native: NETWORK::UGC_HAS_MODIFY_FINISHED
	 *
	 * Hash: 0x299EF3C576773506 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x299EF3C576773506)
	 */
	ugcHasModifyFinished(): boolean;

	/**
	 * Native: NETWORK::UGC_IS_GETTING
	 *
	 * Hash: 0xD53ACDBEF24A46E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD53ACDBEF24A46E8)
	 */
	ugcIsGetting(): boolean;

	/**
	 * Native: NETWORK::UGC_IS_LANGUAGE_SUPPORTED
	 *
	 * Hash: 0xF53E48461B71EECB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF53E48461B71EECB)
	 */
	ugcIsLanguageSupported(p0: integer): boolean;

	/**
	 * Native: NETWORK::_NETWORK_UGC_NAV
	 *
	 * Hash: 0xC1447451DDB512F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1447451DDB512F0)
	 */
	ugcNav(p0: integer, p1: integer): void;

	/**
	 * Native: NETWORK::UGC_POLICIES_MAKE_PRIVATE
	 *
	 * Hash: 0x5CAE833B0EE0C500 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CAE833B0EE0C500)
	 */
	ugcPoliciesMakePrivate(p0: integer): boolean;

	/**
	 * Native: NETWORK::UGC_PUBLISH
	 *
	 * Hash: 0x1DE0F5F50D723CAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DE0F5F50D723CAA)
	 */
	ugcPublish(contentId: string, baseContentId: string, contentTypeName: string): boolean;

	/**
	 * Native: NETWORK::UGC_QUERY_BY_CONTENT_ID
	 *
	 * Hash: 0x158EC424F35EC469 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x158EC424F35EC469)
	 */
	ugcQueryByContentId(contentId: string, latestVersion: boolean, contentTypeName: string): boolean;

	/**
	 * Native: NETWORK::UGC_QUERY_BY_CONTENT_IDS
	 *
	 * Hash: 0xC7397A83F7A2A462 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7397A83F7A2A462)
	 */
	ugcQueryByContentIds(count: integer, latestVersion: boolean, contentTypeName: string): integer;

	/**
	 * Native: NETWORK::UGC_QUERY_MY_CONTENT
	 *
	 * Hash: 0x9BF438815F5D96EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9BF438815F5D96EA)
	 */
	ugcQueryMyContent(p0: integer, p1: integer, p3: integer, p4: integer, p5: integer): integer;

	/**
	 * Native: NETWORK::_UGC_QUERY_RECENTLY_CREATED_CONTENT
	 *
	 * Hash: 0x6D4CB481FAC835E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D4CB481FAC835E8)
	 */
	ugcQueryRecentlyCreatedContent(offset: integer, count: integer, contentTypeName: string, p3: integer): boolean;

	/**
	 * Native: NETWORK::UGC_REQUEST_CACHED_DESCRIPTION
	 *
	 * Hash: 0x5E0165278F6339EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E0165278F6339EE)
	 */
	ugcRequestCachedDescription(p0: integer): integer;

	/**
	 * Native: NETWORK::UGC_REQUEST_CONTENT_DATA_FROM_INDEX
	 *
	 * Hash: 0x171DF6A0C07FB3DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x171DF6A0C07FB3DC)
	 */
	ugcRequestContentDataFromIndex(p0: integer, p1: integer): integer;

	/**
	 * Native: NETWORK::UGC_REQUEST_CONTENT_DATA_FROM_PARAMS
	 *
	 * Hash: 0x7FD2990AF016795E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7FD2990AF016795E)
	 */
	ugcRequestContentDataFromParams(
		contentTypeName: string,
		contentId: string,
		p2: integer,
		p3: integer,
		p4: integer
	): integer;

	/**
	 * Native: NETWORK::UGC_SET_BOOKMARKED
	 *
	 * Hash: 0x274A1519DFC1094F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x274A1519DFC1094F)
	 */
	ugcSetBookmarked(contentId: string, bookmarked: boolean, contentTypeName: string): boolean;

	/**
	 * Native: NETWORK::UGC_SET_DELETED
	 *
	 * Hash: 0xD05D1A6C74DA3498 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD05D1A6C74DA3498)
	 */
	ugcSetDeleted(p1: boolean, p2: string): integer;

	/**
	 * Native: NETWORK::UGC_SET_QUERY_DATA_FROM_OFFLINE
	 *
	 * Hash: 0xF98DDE0A8ED09323 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF98DDE0A8ED09323)
	 */
	ugcSetQueryDataFromOffline(p0: boolean): void;

	/**
	 * Native: NETWORK::UGC_TEXTURE_DOWNLOAD_REQUEST
	 *
	 * Hash: 0x308F96458B7087CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x308F96458B7087CC)
	 */
	ugcTextureDownloadRequest(p0: string, p1: integer, p2: integer, p3: integer, p4: string, p5: boolean): integer;

	/**
	 * Native: NETWORK::NETWORK_UNREGISTER_NETWORKED_ENTITY
	 *
	 * Hash: 0x7368E683BB9038D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7368E683BB9038D6)
	 */
	unregisterNetworkedEntity(entity: Handle): void;

	/**
	 * Native: NETWORK::_NETWORK_UPDATE_PLAYER_SCARS
	 *
	 * Hash: 0xB7C7F6AD6424304B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7C7F6AD6424304B)
	 */
	updatePlayerScars(): void;

	/**
	 * Native: NETWORK::NETWORK_USE_HIGH_PRECISION_BLENDING
	 *
	 * Hash: 0x2B1813ABA29016C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B1813ABA29016C5)
	 */
	useHighPrecisionBlending(netID: integer, toggle: boolean): void;

	/**
	 * Native: NETWORK::NETWORK_USE_LOGARITHMIC_BLENDING_THIS_FRAME
	 *
	 * Hash: 0xCD71A4ECAB22709E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD71A4ECAB22709E)
	 */
	useLogarithmicBlendingThisFrame(entity: Handle): void;

	/**
	 * Native: NETWORK::USE_PLAYER_COLOUR_INSTEAD_OF_TEAM_COLOUR
	 *
	 * Hash: 0x77758139EC9B66C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77758139EC9B66C7)
	 */
	usePlayerColourInsteadOfTeamColour(toggle: boolean): void;

	/**
	 * Native: NETWORK::VEH_TO_NET
	 *
	 * Hash: 0xB4C94523F023419C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB4C94523F023419C)
	 */
	vehToNet(vehicle: Handle): integer;

	unk: GameNetworkUnk;
}

interface GameNetworkMp extends GameNetwork {}
