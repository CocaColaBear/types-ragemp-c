/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetPlayerParachuteSmokeTrailColorResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GetPlayerRgbColourResult {
	r: integer;
	g: integer;
	b: integer;
}

interface GamePlayerLegacy {
	/**
	 * Native: PLAYER::_GET_NUMBER_OF_PLAYERS_IN_TEAM
	 *
	 * Hash: 0x1FC200409F10E6F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1FC200409F10E6F1)
	 */
	getNumberOfPlayersInTeam(team: integer): integer;

	/**
	 * Native: PLAYER::GET_PLAYERS_LAST_VEHICLE
	 *
	 * Hash: 0xB6997A7EB3F5C8C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6997A7EB3F5C8C0)
	 */
	getPlayersLastVehicle(): Handle;

	/**
	 * Native: PLAYER::UPDATE_PLAYER_TELEPORT
	 *
	 * Hash: 0xE23D5873C2394C61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE23D5873C2394C61)
	 */
	hasTeleportFinished(): boolean;

	/**
	 * Native: PLAYER::INT_TO_PLAYERINDEX
	 *
	 * Hash: 0x41BD2A6B006AF756 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41BD2A6B006AF756)
	 */
	intToindex(value: integer): Handle;

	/**
	 * Native: PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND
	 *
	 * Hash: 0xED51733DC73AED51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED51733DC73AED51)
	 */
	playerAttachVirtualBound(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number
	): void;

	/**
	 * Native: PLAYER::_SWITCH_CRIME_TYPE
	 *
	 * Hash: 0x9A987297ED8BD838 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A987297ED8BD838)
	 */
	reserveEntityExplodesOnHighExplosionCombo(p1: integer): void;

	/**
	 * Native: PLAYER::SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
	 *
	 * Hash: 0xCA7DC8329F0A1E9E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA7DC8329F0A1E9E)
	 */
	setAirDragMultiplierForPlayersVehicle(multiplier: number): void;

	/**
	 * Native: PLAYER::SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
	 *
	 * Hash: 0xCA7DC8329F0A1E9E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA7DC8329F0A1E9E)
	 */
	setAirDragMultiplierForsVehicle(multiplier: number): void;

	/**
	 * Native: PLAYER::_0xC3376F42B1FACCC6
	 *
	 * Hash: 0xC3376F42B1FACCC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3376F42B1FACCC6)
	 */
	setAreasGeneratorOrientation(): void;

	/**
	 * Native: PLAYER::_0xDE45D1A1EF45EE61
	 *
	 * Hash: 0xDE45D1A1EF45EE61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE45D1A1EF45EE61)
	 */
	setHudAnimStopLevel(toggle: boolean): void;
}

interface GamePlayerUnk {
	/**
	 * Native: PLAYER::_0x0032A6DBA562C518
	 *
	 * Hash: 0x0032A6DBA562C518 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0032A6DBA562C518)
	 */
	_0x0032A6DBA562C518(): void;

	/**
	 * Native: PLAYER::_0x237440E46D918649
	 *
	 * Hash: 0x237440E46D918649 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x237440E46D918649)
	 */
	_0x237440E46D918649(p0: integer): void;

	/**
	 * Native: PLAYER::_0x2382AB11450AE7BA
	 *
	 * Hash: 0x2382AB11450AE7BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2382AB11450AE7BA)
	 */
	_0x2382AB11450AE7BA(p0: integer, p1: integer): void;

	/**
	 * Native: PLAYER::_0x2F41A3BAE005E5FA
	 *
	 * Hash: 0x2F41A3BAE005E5FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F41A3BAE005E5FA)
	 */
	_0x2F41A3BAE005E5FA(p0: integer, p1: integer): void;

	/**
	 * Native: PLAYER::_0x2F7CEB6520288061
	 *
	 * Hash: 0x2F7CEB6520288061 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F7CEB6520288061)
	 */
	_0x2F7CEB6520288061(p0: boolean): void;

	/**
	 * Native: PLAYER::_0x31E90B8873A4CD3B
	 *
	 * Hash: 0x31E90B8873A4CD3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31E90B8873A4CD3B)
	 */
	_0x31E90B8873A4CD3B(p1: number): void;

	/**
	 * Native: PLAYER::_0x36F1B38855F2A8DF
	 *
	 * Hash: 0x36F1B38855F2A8DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36F1B38855F2A8DF)
	 */
	_0x36F1B38855F2A8DF(): void;

	/**
	 * Native: PLAYER::_0x4669B3ED80F24B4E
	 *
	 * Hash: 0x4669B3ED80F24B4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4669B3ED80F24B4E)
	 */
	_0x4669B3ED80F24B4E(): void;

	/**
	 * Native: PLAYER::_0x5501B7A5CDB79D37
	 *
	 * Hash: 0x5501B7A5CDB79D37 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5501B7A5CDB79D37)
	 */
	_0x5501B7A5CDB79D37(): void;

	/**
	 * Native: PLAYER::_0x55FCC0C390620314
	 *
	 * Hash: 0x55FCC0C390620314 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55FCC0C390620314)
	 */
	_0x55FCC0C390620314(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: PLAYER::_0x5FC472C501CCADB3
	 *
	 * Hash: 0x5FC472C501CCADB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FC472C501CCADB3)
	 */
	_0x5FC472C501CCADB3(): boolean;

	/**
	 * Native: PLAYER::_0x690A61A6D13583F6
	 *
	 * Hash: 0x690A61A6D13583F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x690A61A6D13583F6)
	 */
	_0x690A61A6D13583F6(): boolean;

	/**
	 * Native: PLAYER::_0x6E4361FF3E8CD7CA
	 *
	 * Hash: 0x6E4361FF3E8CD7CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E4361FF3E8CD7CA)
	 */
	_0x6E4361FF3E8CD7CA(p0: integer): integer;

	/**
	 * Native: PLAYER::_0x70A382ADEC069DD3
	 *
	 * Hash: 0x70A382ADEC069DD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x70A382ADEC069DD3)
	 */
	_0x70A382ADEC069DD3(coordX: number, coordY: number, coordZ: number): void;

	/**
	 * Native: PLAYER::_0x7148E0F43D11F0D9
	 *
	 * Hash: 0x7148E0F43D11F0D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7148E0F43D11F0D9)
	 */
	_0x7148E0F43D11F0D9(): void;

	/**
	 * Native: PLAYER::_0x7BAE68775557AE0B
	 *
	 * Hash: 0x7BAE68775557AE0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7BAE68775557AE0B)
	 */
	_0x7BAE68775557AE0B(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: PLAYER::_0x7E07C78925D5FD96
	 *
	 * Hash: 0x7E07C78925D5FD96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E07C78925D5FD96)
	 */
	_0x7E07C78925D5FD96(p0: integer): integer;

	/**
	 * Native: PLAYER::_0x823EC8E82BA45986
	 *
	 * Hash: 0x823EC8E82BA45986 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x823EC8E82BA45986)
	 */
	_0x823EC8E82BA45986(p0: integer): void;

	/**
	 * Native: PLAYER::_0x8D768602ADEF2245
	 *
	 * Hash: 0x8D768602ADEF2245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D768602ADEF2245)
	 */
	_0x8D768602ADEF2245(p1: number): void;

	/**
	 * Native: PLAYER::_0x9097EB6D4BB9A12A
	 *
	 * Hash: 0x9097EB6D4BB9A12A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9097EB6D4BB9A12A)
	 */
	_0x9097EB6D4BB9A12A(entity: Handle): void;

	/**
	 * Native: PLAYER::_0x9EDD76E87D5D51BA
	 *
	 * Hash: 0x9EDD76E87D5D51BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EDD76E87D5D51BA)
	 */
	_0x9EDD76E87D5D51BA(): void;

	/**
	 * Native: PLAYER::_0x9F260BFB59ADBCA3
	 *
	 * Hash: 0x9F260BFB59ADBCA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F260BFB59ADBCA3)
	 */
	_0x9F260BFB59ADBCA3(entity: Handle): void;

	/**
	 * Native: PLAYER::_0xAD73CE5A09E42D12
	 *
	 * Hash: 0xAD73CE5A09E42D12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD73CE5A09E42D12)
	 */
	_0xAD73CE5A09E42D12(): void;

	/**
	 * Native: PLAYER::_0xB45EFF719D8427A6
	 *
	 * Hash: 0xB45EFF719D8427A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB45EFF719D8427A6)
	 */
	_0xB45EFF719D8427A6(p0: number): void;

	/**
	 * Native: PLAYER::_0xB885852C39CC265D
	 *
	 * Hash: 0xB885852C39CC265D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB885852C39CC265D)
	 */
	_0xB885852C39CC265D(): void;

	/**
	 * Native: PLAYER::_0xB9CF1F793A9F1BF1
	 *
	 * Hash: 0xB9CF1F793A9F1BF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9CF1F793A9F1BF1)
	 */
	_0xB9CF1F793A9F1BF1(): boolean;

	/**
	 * Native: PLAYER::_0xBC0753C9CA14B506
	 *
	 * Hash: 0xBC0753C9CA14B506 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC0753C9CA14B506)
	 */
	_0xBC0753C9CA14B506(p1: integer, p2: boolean): boolean;

	/**
	 * Native: PLAYER::_0xBC9490CA15AEA8FB
	 *
	 * Hash: 0xBC9490CA15AEA8FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC9490CA15AEA8FB)
	 */
	_0xBC9490CA15AEA8FB(): void;

	/**
	 * Native: PLAYER::_0xC3376F42B1FACCC6
	 *
	 * Hash: 0xC3376F42B1FACCC6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3376F42B1FACCC6)
	 */
	_0xC3376F42B1FACCC6(): void;

	/**
	 * Native: PLAYER::_0xCAC57395B151135F
	 *
	 * Hash: 0xCAC57395B151135F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCAC57395B151135F)
	 */
	_0xCAC57395B151135F(p1: boolean): void;

	/**
	 * Native: PLAYER::_0xCB645E85E97EA48B
	 *
	 * Hash: 0xCB645E85E97EA48B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB645E85E97EA48B)
	 */
	_0xCB645E85E97EA48B(): boolean;

	/**
	 * Native: PLAYER::_0xD821056B9ACF8052
	 *
	 * Hash: 0xD821056B9ACF8052 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD821056B9ACF8052)
	 */
	_0xD821056B9ACF8052(p1: integer): void;

	/**
	 * Native: PLAYER::_0xDCC07526B8EC45AF
	 *
	 * Hash: 0xDCC07526B8EC45AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCC07526B8EC45AF)
	 */
	_0xDCC07526B8EC45AF(): boolean;

	/**
	 * Native: PLAYER::_0xDD2620B7B9D16FF1
	 *
	 * Hash: 0xDD2620B7B9D16FF1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD2620B7B9D16FF1)
	 */
	_0xDD2620B7B9D16FF1(p1: number): boolean;

	/**
	 * Native: PLAYER::_0xDE45D1A1EF45EE61
	 *
	 * Hash: 0xDE45D1A1EF45EE61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE45D1A1EF45EE61)
	 */
	_0xDE45D1A1EF45EE61(toggle: boolean): void;

	/**
	 * Native: PLAYER::_0xF10B44FD479D69F3
	 *
	 * Hash: 0xF10B44FD479D69F3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF10B44FD479D69F3)
	 */
	_0xF10B44FD479D69F3(p1: integer): boolean;

	/**
	 * Native: PLAYER::_0xFAC75988A7D078D3
	 *
	 * Hash: 0xFAC75988A7D078D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFAC75988A7D078D3)
	 */
	_0xFAC75988A7D078D3(): void;

	/**
	 * Native: PLAYER::_0xFFEE8FA29AB9A18E
	 *
	 * Hash: 0xFFEE8FA29AB9A18E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFFEE8FA29AB9A18E)
	 */
	_0xFFEE8FA29AB9A18E(p1: integer): void;
}

interface GamePlayer extends GamePlayerLegacy {
	/**
	 * Native: PLAYER::ARE_PLAYER_FLASHING_STARS_ABOUT_TO_DROP
	 *
	 * Hash: 0xAFAF86043E5874E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFAF86043E5874E9)
	 */
	areFlashingStarsAboutToDrop(): boolean;

	/**
	 * Native: PLAYER::ARE_PLAYER_STARS_GREYED_OUT
	 *
	 * Hash: 0x0A6EB355EE14A2DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A6EB355EE14A2DB)
	 */
	areStarsGreyedOut(): boolean;

	/**
	 * Native: PLAYER::ASSISTED_MOVEMENT_CLOSE_ROUTE
	 *
	 * Hash: 0xAEBF081FFC0A0E5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAEBF081FFC0A0E5E)
	 */
	assistedMovementCloseRoute(): void;

	/**
	 * Native: PLAYER::ASSISTED_MOVEMENT_FLUSH_ROUTE
	 *
	 * Hash: 0x8621390F0CDCFE1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8621390F0CDCFE1F)
	 */
	assistedMovementFlushRoute(): void;

	/**
	 * Native: PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND
	 *
	 * Hash: 0xED51733DC73AED51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED51733DC73AED51)
	 */
	attachVirtualBound(
		p0: number,
		p1: number,
		p2: number,
		p3: number,
		p4: number,
		p5: number,
		p6: number,
		p7: number
	): void;

	/**
	 * Native: PLAYER::CAN_PED_HEAR_PLAYER
	 *
	 * Hash: 0xF297383AA91DCA29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF297383AA91DCA29)
	 */
	canPedHear(ped: Handle): boolean;

	/**
	 * Native: PLAYER::CAN_PLAYER_START_MISSION
	 *
	 * Hash: 0xDE7465A27D403C06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE7465A27D403C06)
	 */
	canStartMission(): boolean;

	/**
	 * Native: PLAYER::CHANGE_PLAYER_PED
	 *
	 * Hash: 0x048189FAC643DEEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x048189FAC643DEEE)
	 */
	changePed(ped: Handle, p2: boolean, resetDamage: boolean): void;

	/**
	 * Native: PLAYER::CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED
	 *
	 * Hash: 0x4AACB96203D11A31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AACB96203D11A31)
	 */
	clearHasDamagedAtLeastOneNonAnimalPed(): void;

	/**
	 * Native: PLAYER::CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_PED
	 *
	 * Hash: 0xF0B67A4DE6AB5F98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF0B67A4DE6AB5F98)
	 */
	clearHasDamagedAtLeastOnePed(): void;

	/**
	 * Native: PLAYER::CLEAR_PLAYER_PARACHUTE_MODEL_OVERRIDE
	 *
	 * Hash: 0x8753997EB5F6EE3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8753997EB5F6EE3F)
	 */
	clearParachuteModelOverride(): void;

	/**
	 * Native: PLAYER::CLEAR_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE
	 *
	 * Hash: 0x10C54E4389C12B42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10C54E4389C12B42)
	 */
	clearParachutePackModelOverride(): void;

	/**
	 * Native: PLAYER::CLEAR_PLAYER_PARACHUTE_VARIATION_OVERRIDE
	 *
	 * Hash: 0x0F4CC924CF8C7B21 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F4CC924CF8C7B21)
	 */
	clearParachuteVariationOverride(): void;

	/**
	 * Native: PLAYER::_CLEAR_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
	 *
	 * Hash: 0x290D248E25815AE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x290D248E25815AE8)
	 */
	clearReserveParachuteModelOverride(): void;

	/**
	 * Native: PLAYER::CLEAR_PLAYER_WANTED_LEVEL
	 *
	 * Hash: 0xB302540597885499 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB302540597885499)
	 */
	clearWantedLevel(): void;

	/**
	 * Native: PLAYER::PLAYER_DETACH_VIRTUAL_BOUND
	 *
	 * Hash: 0x1DD5897E2FA6E7C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DD5897E2FA6E7C9)
	 */
	detachVirtualBound(): void;

	/**
	 * Native: PLAYER::DISABLE_PLAYER_FIRING
	 *
	 * Hash: 0x5E6CC07646BBEAB8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E6CC07646BBEAB8)
	 */
	disableFiring(toggle: boolean): void;

	/**
	 * Native: PLAYER::DISABLE_PLAYER_VEHICLE_REWARDS
	 *
	 * Hash: 0xC142BE3BB9CE125F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC142BE3BB9CE125F)
	 */
	disableVehicleRewards(): void;

	/**
	 * Native: PLAYER::DISPLAY_SYSTEM_SIGNIN_UI
	 *
	 * Hash: 0x94DD7888C10A979E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94DD7888C10A979E)
	 */
	displaySystemSigninUi(unk: boolean): void;

	/**
	 * Native: PLAYER::ENABLE_SPECIAL_ABILITY
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x181EC197DAEFE121 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x181EC197DAEFE121)
	 */
	enableSpecialAbility(toggle: boolean, p2?: integer): void;

	/**
	 * Native: PLAYER::EXTEND_WORLD_BOUNDARY_FOR_PLAYER
	 *
	 * Hash: 0x5006D96C995A5827 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5006D96C995A5827)
	 */
	extendWorldBoundaryFor(x: number, y: number, z: number): void;

	/**
	 * Native: PLAYER::FORCE_CLEANUP
	 *
	 * Hash: 0xBC8983F38F78ED51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC8983F38F78ED51)
	 */
	forceCleanup(cleanupFlags: integer): void;

	/**
	 * Native: PLAYER::FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME
	 *
	 * Hash: 0x4C68DDDDF0097317 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C68DDDDF0097317)
	 */
	forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: integer): void;

	/**
	 * Native: PLAYER::FORCE_CLEANUP_FOR_THREAD_WITH_THIS_ID
	 *
	 * Hash: 0xF745B37630DF176B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF745B37630DF176B)
	 */
	forceCleanupForThreadWithThisId(id: integer, cleanupFlags: integer): void;

	/**
	 * Native: PLAYER::_GET_ACHIEVEMENT_PROGRESS
	 *
	 * Hash: 0x1C186837D0619335 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C186837D0619335)
	 */
	getAchievementProgress(achievementId: integer): integer;

	/**
	 * Native: PLAYER::GET_CAUSE_OF_MOST_RECENT_FORCE_CLEANUP
	 *
	 * Hash: 0x9A41CF4674A12272 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A41CF4674A12272)
	 */
	getCauseOfMostRecentForceCleanup(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_CURRENT_STEALTH_NOISE
	 *
	 * Hash: 0x2F395D61F3A1F877 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F395D61F3A1F877)
	 */
	getCurrentStealthNoise(): number;

	/**
	 * Native: PLAYER::GET_ENTITY_PLAYER_IS_FREE_AIMING_AT
	 *
	 * Hash: 0x2975C866E6713290 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2975C866E6713290)
	 */
	getEntityIsFreeAimingAt(): Handle;

	/**
	 * Native: PLAYER::GET_ENTITY_PLAYER_IS_FREE_AIMING_AT
	 *
	 * Hash: 0x2975C866E6713290 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2975C866E6713290)
	 */
	getEntityIsFreeAimingAtRaw(): Handle;

	/**
	 * Native: PLAYER::GET_PLAYER_FAKE_WANTED_LEVEL
	 *
	 * Hash: 0x56105E599CAB0EFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56105E599CAB0EFA)
	 */
	getFakeWantedLevel(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_GROUP
	 *
	 * Hash: 0x0D127585F77030AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D127585F77030AF)
	 */
	getGroup(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_HAS_RESERVE_PARACHUTE
	 *
	 * Hash: 0x5DDFE2FF727F3CA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DDFE2FF727F3CA3)
	 */
	getHasReserveParachute(): boolean;

	/**
	 * Native: PLAYER::_GET_PLAYER_HEALTH_RECHARGE_LIMIT
	 *
	 * Hash: 0x8BC515BAE4AAF8FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8BC515BAE4AAF8FF)
	 */
	getHealthRechargeLimit(): number;

	/**
	 * Native: PLAYER::GET_PLAYER_INDEX
	 *
	 * Hash: 0xA5EDC40EF369B48D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5EDC40EF369B48D)
	 */
	getIndex(): Handle;

	/**
	 * Native: PLAYER::GET_PLAYER_INVINCIBLE
	 *
	 * Hash: 0xB721981B2B939E07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB721981B2B939E07)
	 */
	getInvincible(): boolean;

	/**
	 * Native: PLAYER::GET_PLAYER_MAX_ARMOUR
	 *
	 * Hash: 0x92659B4CE1863CB3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92659B4CE1863CB3)
	 */
	getMaxArmour(): integer;

	/**
	 * Native: PLAYER::GET_MAX_WANTED_LEVEL
	 *
	 * Hash: 0x462E0DB9B137DC5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x462E0DB9B137DC5F)
	 */
	getMaxWantedLevel(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_NAME
	 *
	 * Hash: 0x6D0DE6A7B5DA71F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D0DE6A7B5DA71F8)
	 */
	getName(): string;

	/**
	 * Native: PLAYER::GET_NUMBER_OF_PLAYERS
	 *
	 * Hash: 0x407C7F91DDB46C16 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x407C7F91DDB46C16)
	 */
	getNumberOfS(): integer;

	/**
	 * Native: PLAYER::_GET_PLAYER_PARACHUTE_MODEL_OVERRIDE
	 *
	 * Hash: 0xC219887CA3E65C41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC219887CA3E65C41)
	 */
	getParachuteModelOverride(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_PARACHUTE_PACK_TINT_INDEX
	 *
	 * Hash: 0x6E9C742F340CE5A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E9C742F340CE5A2)
	 */
	getParachutePackTintIndex(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR
	 *
	 * Hash: 0xEF56DBABD3CD4887 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF56DBABD3CD4887)
	 */
	getParachuteSmokeTrailColor(): GetPlayerParachuteSmokeTrailColorResult;

	/**
	 * Native: PLAYER::GET_PLAYER_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0x75D3F7A1B0D9B145 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75D3F7A1B0D9B145)
	 */
	getParachuteTintIndex(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_PED
	 *
	 * Hash: 0x43A66C31C68491C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43A66C31C68491C0)
	 */
	getPed(): Handle;

	/**
	 * Native: PLAYER::GET_PLAYER_PED_SCRIPT_INDEX
	 *
	 * Hash: 0x50FAC3A3E030A6E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50FAC3A3E030A6E1)
	 */
	getPedScriptIndex(): Handle;

	/**
	 * Native: PLAYER::_GET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
	 *
	 * Hash: 0x37FAAA68DCA9D08D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37FAAA68DCA9D08D)
	 */
	getReserveParachuteModelOverride(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0xD5A016BC3C09CF40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5A016BC3C09CF40)
	 */
	getReserveParachuteTintIndex(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_RGB_COLOUR
	 *
	 * Hash: 0xE902EF951DCE178F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE902EF951DCE178F)
	 */
	getRgbColour(): GetPlayerRgbColourResult;

	/**
	 * Native: PLAYER::GET_PLAYER_SPRINT_STAMINA_REMAINING
	 *
	 * Hash: 0x3F9F16F8E65A7ED7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F9F16F8E65A7ED7)
	 */
	getSprintStaminaRemaining(): number;

	/**
	 * Native: PLAYER::GET_PLAYER_SPRINT_TIME_REMAINING
	 *
	 * Hash: 0x1885BC9B108B4C99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1885BC9B108B4C99)
	 */
	getSprintTimeRemaining(): number;

	/**
	 * Native: PLAYER::GET_PLAYER_TARGET_ENTITY
	 *
	 * Hash: 0x13EDE1A5DBF797C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13EDE1A5DBF797C9)
	 */
	getTargetEntity(): Handle;

	/**
	 * Native: PLAYER::GET_PLAYER_TEAM
	 *
	 * Hash: 0x37039302F4E0A008 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x37039302F4E0A008)
	 */
	getTeam(): integer;

	/**
	 * Native: PLAYER::GET_TIME_SINCE_PLAYER_DROVE_AGAINST_TRAFFIC
	 *
	 * Hash: 0xDB89591E290D9182 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB89591E290D9182)
	 */
	getTimeSinceDroveAgainstTraffic(): integer;

	/**
	 * Native: PLAYER::GET_TIME_SINCE_PLAYER_DROVE_ON_PAVEMENT
	 *
	 * Hash: 0xD559D2BE9E37853B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD559D2BE9E37853B)
	 */
	getTimeSinceDroveOnPavement(): integer;

	/**
	 * Native: PLAYER::GET_TIME_SINCE_PLAYER_HIT_PED
	 *
	 * Hash: 0xE36A25322DC35F42 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE36A25322DC35F42)
	 */
	getTimeSinceHitPed(): integer;

	/**
	 * Native: PLAYER::GET_TIME_SINCE_PLAYER_HIT_VEHICLE
	 *
	 * Hash: 0x5D35ECF3A81A0EE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D35ECF3A81A0EE0)
	 */
	getTimeSinceHitVehicle(): integer;

	/**
	 * Native: PLAYER::GET_TIME_SINCE_LAST_ARREST
	 *
	 * Hash: 0x5063F92F07C2A316 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5063F92F07C2A316)
	 */
	getTimeSinceLastArrest(): integer;

	/**
	 * Native: PLAYER::GET_TIME_SINCE_LAST_DEATH
	 *
	 * Hash: 0xC7034807558DDFCA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7034807558DDFCA)
	 */
	getTimeSinceLastDeath(): integer;

	/**
	 * Native: PLAYER::GET_PLAYER_UNDERWATER_TIME_REMAINING
	 *
	 * Hash: 0xA1FCF8E6AF40B731 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1FCF8E6AF40B731)
	 */
	getUnderwaterTimeRemaining(): number;

	/**
	 * Native: PLAYER::GET_PLAYER_WANTED_CENTRE_POSITION
	 *
	 * Hash: 0x0C92BA89F1AF26F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C92BA89F1AF26F8)
	 */
	getWantedCentrePosition(): Vector3Mp;

	/**
	 * Native: PLAYER::GET_PLAYER_WANTED_LEVEL
	 *
	 * Hash: 0xE28E54788CE8F12D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE28E54788CE8F12D)
	 */
	getWantedLevel(): integer;

	/**
	 * Native: PLAYER::_GET_WANTED_LEVEL_PAROLE_DURATION
	 *
	 * Hash: 0xA72200F51875FEA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA72200F51875FEA4)
	 */
	getWantedLevelParoleDuration(): integer;

	/**
	 * Native: PLAYER::GET_WANTED_LEVEL_RADIUS
	 *
	 * Hash: 0x085DEB493BE80812 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x085DEB493BE80812)
	 */
	getWantedLevelRadius(): number;

	/**
	 * Native: PLAYER::GET_WANTED_LEVEL_THRESHOLD
	 *
	 * Hash: 0xFDD179EAF45B556C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDD179EAF45B556C)
	 */
	getWantedLevelThreshold(wantedLevel: integer): integer;

	/**
	 * Native: PLAYER::GIVE_ACHIEVEMENT_TO_PLAYER
	 *
	 * Hash: 0xBEC7076D64130195 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBEC7076D64130195)
	 */
	giveAchievementTo(achievementId: integer): boolean;

	/**
	 * Native: PLAYER::GIVE_PLAYER_RAGDOLL_CONTROL
	 *
	 * Hash: 0x3C49C870E66F0A28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C49C870E66F0A28)
	 */
	giveRagdollControl(toggle: boolean): void;

	/**
	 * Native: PLAYER::HAS_ACHIEVEMENT_BEEN_PASSED
	 *
	 * Hash: 0x867365E111A3B6EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x867365E111A3B6EB)
	 */
	hasAchievementBeenPassed(achievementId: integer): boolean;

	/**
	 * Native: PLAYER::HAS_PLAYER_BEEN_SPOTTED_IN_STOLEN_VEHICLE
	 *
	 * Hash: 0xD705740BB0A1CF4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD705740BB0A1CF4C)
	 */
	hasBeenSpottedInStolenVehicle(): boolean;

	/**
	 * Native: PLAYER::HAS_PLAYER_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED
	 *
	 * Hash: 0xE4B90F367BD81752 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4B90F367BD81752)
	 */
	hasDamagedAtLeastOneNonAnimalPed(): boolean;

	/**
	 * Native: PLAYER::HAS_PLAYER_DAMAGED_AT_LEAST_ONE_PED
	 *
	 * Hash: 0x20CE80B0C2BF4ACC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20CE80B0C2BF4ACC)
	 */
	hasDamagedAtLeastOnePed(): boolean;

	/**
	 * Native: PLAYER::HAS_FORCE_CLEANUP_OCCURRED
	 *
	 * Hash: 0xC968670BFACE42D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC968670BFACE42D9)
	 */
	hasForceCleanupOccurred(cleanupFlags: integer): boolean;

	/**
	 * Native: PLAYER::HAS_PLAYER_LEFT_THE_WORLD
	 *
	 * Hash: 0xD55DDFB47991A294 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD55DDFB47991A294)
	 */
	hasLeftTheWorld(): boolean;

	/**
	 * Native: PLAYER::PLAYER_ID
	 *
	 * Hash: 0x4F8644AF03D0E0D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F8644AF03D0E0D6)
	 */
	id(): Handle;

	/**
	 * Native: PLAYER::INT_TO_PLAYERINDEX
	 *
	 * Hash: 0x41BD2A6B006AF756 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41BD2A6B006AF756)
	 */
	intToIndex(value: integer): Handle;

	/**
	 * Native: PLAYER::INT_TO_PARTICIPANTINDEX
	 *
	 * Hash: 0x9EC6603812C24710 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EC6603812C24710)
	 */
	intToParticipantindex(value: integer): integer;

	/**
	 * Native: PLAYER::IS_PLAYER_BATTLE_AWARE
	 *
	 * Hash: 0x38D28DA81E4E9BF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38D28DA81E4E9BF9)
	 */
	isBattleAware(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_BEING_ARRESTED
	 *
	 * Hash: 0x388A47C51ABDAC8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x388A47C51ABDAC8E)
	 */
	isBeingArrested(atArresting: boolean): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_BLUETOOTH_ENABLE
	 *
	 * Hash: 0x65FAEE425DE637B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x65FAEE425DE637B0)
	 */
	isBluetoothEnable(): boolean;

	/**
	 * Native: PLAYER::_IS_PLAYER_CAM_CONTROL_DISABLED
	 *
	 * Hash: 0x7C814D2FB49F40C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C814D2FB49F40C0)
	 */
	isCamControlDisabled(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_CLIMBING
	 *
	 * Hash: 0x95E8F73DC65EFB9C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95E8F73DC65EFB9C)
	 */
	isClimbing(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_CONTROL_ON
	 *
	 * Hash: 0x49C32D60007AFA47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49C32D60007AFA47)
	 */
	isControlOn(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_DEAD
	 *
	 * Hash: 0x424D4687FA1E5652 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x424D4687FA1E5652)
	 */
	isDead(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_FREE_AIMING
	 *
	 * Hash: 0x2E397FD2ECD37C87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E397FD2ECD37C87)
	 */
	isFreeAiming(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_FREE_AIMING_AT_ENTITY
	 *
	 * Hash: 0x3C06B5C839B38F7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3C06B5C839B38F7B)
	 */
	isFreeAimingAtEntity(entity: Handle): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_FREE_FOR_AMBIENT_TASK
	 *
	 * Hash: 0xDCCFD3F106C36AB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCCFD3F106C36AB4)
	 */
	isFreeForAmbientTask(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_LOGGING_IN_NP
	 *
	 * Hash: 0x74556E1420867ECA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74556E1420867ECA)
	 */
	isLoggingInNp(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_ONLINE
	 *
	 * Hash: 0xF25D331DC2627BBC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF25D331DC2627BBC)
	 */
	isOnline(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_PLAYING
	 *
	 * Hash: 0x5E9564D8246B909A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E9564D8246B909A)
	 */
	isPlaying(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_PRESSING_HORN
	 *
	 * Hash: 0xFA1E2BF8B10598F9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA1E2BF8B10598F9)
	 */
	isPressingHorn(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_READY_FOR_CUTSCENE
	 *
	 * Hash: 0x908CBECC2CAA3690 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x908CBECC2CAA3690)
	 */
	isReadyForCutscene(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_RIDING_TRAIN
	 *
	 * Hash: 0x4EC12697209F2196 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4EC12697209F2196)
	 */
	isRidingTrain(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_SCRIPT_CONTROL_ON
	 *
	 * Hash: 0x8A876A65283DD7D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A876A65283DD7D7)
	 */
	isScriptControlOn(): boolean;

	/**
	 * Native: PLAYER::IS_SPECIAL_ABILITY_ACTIVE
	 *
	 * Hash: 0x3E5F7FC85D854E15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E5F7FC85D854E15)
	 */
	isSpecialAbilityActive(p1: integer): boolean;

	/**
	 * Native: PLAYER::IS_SPECIAL_ABILITY_ENABLED
	 *
	 * Hash: 0xB1D200FE26AEF3CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1D200FE26AEF3CB)
	 */
	isSpecialAbilityEnabled(p1: integer): boolean;

	/**
	 * Native: PLAYER::IS_SPECIAL_ABILITY_METER_FULL
	 *
	 * Hash: 0x05A1FE504B7F2587 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05A1FE504B7F2587)
	 */
	isSpecialAbilityMeterFull(p1: integer): boolean;

	/**
	 * Native: PLAYER::IS_SPECIAL_ABILITY_UNLOCKED
	 *
	 * Hash: 0xC6017F6A6CDFA694 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6017F6A6CDFA694)
	 */
	isSpecialAbilityUnlocked(playerModel: integer): boolean;

	/**
	 * Native: PLAYER::IS_SYSTEM_UI_BEING_DISPLAYED
	 *
	 * Hash: 0x5D511E3867C87139 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5D511E3867C87139)
	 */
	isSystemUiBeingDisplayed(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_TARGETTING_ANYTHING
	 *
	 * Hash: 0x78CFE51896B6B8A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78CFE51896B6B8A4)
	 */
	isTargettingAnything(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_TARGETTING_ENTITY
	 *
	 * Hash: 0x7912F7FC4F6264B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7912F7FC4F6264B6)
	 */
	isTargettingEntity(entity: Handle): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_TELEPORT_ACTIVE
	 *
	 * Hash: 0x02B15662D7F8886F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02B15662D7F8886F)
	 */
	isTeleportActive(): boolean;

	/**
	 * Native: PLAYER::IS_PLAYER_WANTED_LEVEL_GREATER
	 *
	 * Hash: 0x238DB2A2C23EE9EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x238DB2A2C23EE9EF)
	 */
	isWantedLevelGreater(wantedLevel: integer): boolean;

	/**
	 * Native: PLAYER::NETWORK_PLAYER_ID_TO_INT
	 *
	 * Hash: 0xEE68096F9F37341E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE68096F9F37341E)
	 */
	networkIdToInt(): integer;

	/**
	 * Native: PLAYER::PLAYER_PED_ID
	 *
	 * Hash: 0xD80958FC74E988A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD80958FC74E988A6)
	 */
	pedId(): Handle;

	/**
	 * Native: PLAYER::REMOVE_PLAYER_HELMET
	 *
	 * Hash: 0xF3AC26D3CC576528 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3AC26D3CC576528)
	 */
	removeHelmet(p2: boolean): void;

	/**
	 * Native: PLAYER::REPORT_CRIME
	 *
	 * Hash: 0xE9B09589827545E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE9B09589827545E7)
	 */
	reportCrime(crimeType: integer, wantedLvlThresh: integer): void;

	/**
	 * Native: PLAYER::REPORT_POLICE_SPOTTED_PLAYER
	 *
	 * Hash: 0xDC64D2C53493ED12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC64D2C53493ED12)
	 */
	reportPoliceSpotted(): void;

	/**
	 * Native: PLAYER::RESET_PLAYER_ARREST_STATE
	 *
	 * Hash: 0x2D03E13C460760D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D03E13C460760D6)
	 */
	resetArrestState(): void;

	/**
	 * Native: PLAYER::RESET_PLAYER_INPUT_GAIT
	 *
	 * Hash: 0x19531C47A2ABD691 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x19531C47A2ABD691)
	 */
	resetInputGait(): void;

	/**
	 * Native: PLAYER::RESET_PLAYER_STAMINA
	 *
	 * Hash: 0xA6F312FCCE9C1DFE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6F312FCCE9C1DFE)
	 */
	resetStamina(): void;

	/**
	 * Native: PLAYER::RESET_WANTED_LEVEL_DIFFICULTY
	 *
	 * Hash: 0xB9D0DD990DC141DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9D0DD990DC141DD)
	 */
	resetWantedLevelDifficulty(): void;

	/**
	 * Native: PLAYER::RESET_WORLD_BOUNDARY_FOR_PLAYER
	 *
	 * Hash: 0xDA1DF03D5A315F4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA1DF03D5A315F4E)
	 */
	resetWorldBoundaryFor(): void;

	/**
	 * Native: PLAYER::RESTORE_PLAYER_STAMINA
	 *
	 * Hash: 0xA352C1B864CAFD33 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA352C1B864CAFD33)
	 */
	restoreStamina(p1: number): void;

	/**
	 * Native: PLAYER::_SET_ACHIEVEMENT_PROGRESS
	 *
	 * Hash: 0xC2AFFFDABBDC2C5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2AFFFDABBDC2C5C)
	 */
	setAchievementProgress(achievementId: integer, progress: integer): boolean;

	/**
	 * Native: PLAYER::SET_ALL_RANDOM_PEDS_FLEE
	 *
	 * Hash: 0x056E0FE8534C2949 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x056E0FE8534C2949)
	 */
	setAllRandomPedsFlee(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
	 *
	 * Hash: 0x471D2FF42A94B4F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x471D2FF42A94B4F2)
	 */
	setAllRandomPedsFleeThisFrame(): void;

	/**
	 * Native: PLAYER::SET_AUTO_GIVE_PARACHUTE_WHEN_ENTER_PLANE
	 *
	 * Hash: 0x9F343285A00B4BB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F343285A00B4BB6)
	 */
	setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_AUTO_GIVE_SCUBA_GEAR_WHEN_EXIT_VEHICLE
	 *
	 * Hash: 0xD2B315B6689D537D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2B315B6689D537D)
	 */
	setAutoGiveScubaGearWhenExitVehicle(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_BLUETOOTH_STATE
	 *
	 * Hash: 0x5DC40A8869C22141 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DC40A8869C22141)
	 */
	setBluetoothState(state: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CAN_BE_HASSLED_BY_GANGS
	 *
	 * Hash: 0xD5E460AD7020A246 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5E460AD7020A246)
	 */
	setCanBeHassledByGangs(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CAN_DO_DRIVE_BY
	 *
	 * Hash: 0x6E8834B52EC20C77 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E8834B52EC20C77)
	 */
	setCanDoDriveBy(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CAN_LEAVE_PARACHUTE_SMOKE_TRAIL
	 *
	 * Hash: 0xF401B182DBA8AF53 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF401B182DBA8AF53)
	 */
	setCanLeaveParachuteSmokeTrail(enabled: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CAN_USE_COVER
	 *
	 * Hash: 0xD465A8599DFF6814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD465A8599DFF6814)
	 */
	setCanUseCover(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CLOTH_LOCK_COUNTER
	 *
	 * Hash: 0x14D913B777DFF5DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14D913B777DFF5DA)
	 */
	setClothLockCounter(value: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CLOTH_PACKAGE_INDEX
	 *
	 * Hash: 0x9F7BBA2EA6372500 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9F7BBA2EA6372500)
	 */
	setClothPackageIndex(index: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CLOTH_PIN_FRAMES
	 *
	 * Hash: 0x749FADDF97DFE930 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x749FADDF97DFE930)
	 */
	setClothPinFrames(p1: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_CONTROL
	 *
	 * Hash: 0x8D32347D6D4C40A2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D32347D6D4C40A2)
	 */
	setControl(bHasControl: boolean, flags: integer): void;

	/**
	 * Native: PLAYER::SET_DISABLE_AMBIENT_MELEE_MOVE
	 *
	 * Hash: 0x2E8AABFA40A84F8C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E8AABFA40A84F8C)
	 */
	setDisableAmbientMeleeMove(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_DISPATCH_COPS_FOR_PLAYER
	 *
	 * Hash: 0xDB172424876553F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB172424876553F4)
	 */
	setDispatchCopsFor(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_EVERYONE_IGNORE_PLAYER
	 *
	 * Hash: 0x8EEDA153AD141BA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EEDA153AD141BA4)
	 */
	setEveryoneIgnore(toggle: boolean): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_FALL_DISTANCE
	 *
	 * Hash: 0xEFD79FA81DFBA9CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEFD79FA81DFBA9CB)
	 */
	setFallDistance(p1: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_FORCED_AIM
	 *
	 * Hash: 0x0FEE4F80AC44A726 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0FEE4F80AC44A726)
	 */
	setForcedAim(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_FORCED_ZOOM
	 *
	 * Hash: 0x75E7D505F2B15902 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75E7D505F2B15902)
	 */
	setForcedZoom(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_FORCE_SKIP_AIM_INTRO
	 *
	 * Hash: 0x7651BC64AE59E128 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7651BC64AE59E128)
	 */
	setForceSkipAimIntro(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_HAS_RESERVE_PARACHUTE
	 *
	 * Hash: 0x7DDAB28D31FAC363 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7DDAB28D31FAC363)
	 */
	setHasReserveParachute(): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_HEALTH_RECHARGE_LIMIT
	 *
	 * Hash: 0xC388A0F065F5BC34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC388A0F065F5BC34)
	 */
	setHealthRechargeLimit(limit: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_HEALTH_RECHARGE_MULTIPLIER
	 *
	 * Hash: 0x5DB660B38DD98A31 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DB660B38DD98A31)
	 */
	setHealthRechargeMultiplier(regenRate: number): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_HOMING_ROCKET_DISABLED
	 *
	 * Hash: 0xEE4EBDD2593BA844 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE4EBDD2593BA844)
	 */
	setHomingRocketDisabled(p0: integer, p1: integer): void;

	/**
	 * Native: PLAYER::SET_IGNORE_LOW_PRIORITY_SHOCKING_EVENTS
	 *
	 * Hash: 0x596976B02B6B5700 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x596976B02B6B5700)
	 */
	setIgnoreLowPriorityShockingEvents(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_INVINCIBLE
	 *
	 * Hash: 0x239528EACDC3E7DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x239528EACDC3E7DE)
	 */
	setInvincible(toggle: boolean): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED
	 *
	 * Hash: 0x6BC97F4F4BB3C04B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BC97F4F4BB3C04B)
	 */
	setInvincibleKeepRagdollEnabled(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_LEAVE_PED_BEHIND
	 *
	 * Hash: 0xFF300C7649724A0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF300C7649724A0B)
	 */
	setLeavePedBehind(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_LOCKON
	 *
	 * Hash: 0x5C8B2F450EE4328E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C8B2F450EE4328E)
	 */
	setLockon(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_LOCKON_RANGE_OVERRIDE
	 *
	 * Hash: 0x29961D490E5814FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x29961D490E5814FD)
	 */
	setLockonRangeOverride(range: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_MAX_ARMOUR
	 *
	 * Hash: 0x77DFCCF5948B8C71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77DFCCF5948B8C71)
	 */
	setMaxArmour(value: integer): void;

	/**
	 * Native: PLAYER::SET_MAX_WANTED_LEVEL
	 *
	 * Hash: 0xAA5F02DB48D704B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA5F02DB48D704B9)
	 */
	setMaxWantedLevel(maxWantedLevel: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_MAY_NOT_ENTER_ANY_VEHICLE
	 *
	 * Hash: 0x1DE37BBF9E9CC14A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DE37BBF9E9CC14A)
	 */
	setMayNotEnterAnyVehicle(): void;

	/**
	 * Native: PLAYER::SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE
	 *
	 * Hash: 0x8026FF78F208978A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8026FF78F208978A)
	 */
	setMayOnlyEnterThisVehicle(vehicle: Handle): void;

	/**
	 * Native: PLAYER::SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER
	 *
	 * p2 defaults to false
	 *
	 * Hash: 0x4A3DC7ECCC321032 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A3DC7ECCC321032)
	 */
	setMeleeWeaponDamageModifier(modifier: number, p2?: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER
	 *
	 * Hash: 0xAE540335B4ABC4E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE540335B4ABC4E2)
	 */
	setMeleeWeaponDefenseModifier(modifier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_MODEL
	 *
	 * Hash: 0x00A1CADD00108836 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00A1CADD00108836)
	 */
	setModel(model: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_NOISE_MULTIPLIER
	 *
	 * Hash: 0xDB89EF50FF25FCE9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB89EF50FF25FCE9)
	 */
	setNoiseMultiplier(multiplier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_PARACHUTE_MODEL_OVERRIDE
	 *
	 * Hash: 0x977DB4641F6FC3DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x977DB4641F6FC3DB)
	 */
	setParachuteModelOverride(model: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE
	 *
	 * Hash: 0xDC80A4C2F18A2B64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC80A4C2F18A2B64)
	 */
	setParachutePackModelOverride(model: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_PARACHUTE_PACK_TINT_INDEX
	 *
	 * Hash: 0x93B0FB27C9A04060 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93B0FB27C9A04060)
	 */
	setParachutePackTintIndex(tintIndex: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_PARACHUTE_SMOKE_TRAIL_COLOR
	 *
	 * Hash: 0x8217FD371A4625CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8217FD371A4625CF)
	 */
	setParachuteSmokeTrailColor(r: integer, g: integer, b: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0xA3D0E54541D9A5E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3D0E54541D9A5E5)
	 */
	setParachuteTintIndex(tintIndex: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_PARACHUTE_VARIATION_OVERRIDE
	 *
	 * Hash: 0xD9284A8C0D48352C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD9284A8C0D48352C)
	 */
	setParachuteVariationOverride(p1: integer, p2: integer, p3: integer, p4: boolean): void;

	/**
	 * Native: PLAYER::SET_POLICE_IGNORE_PLAYER
	 *
	 * Hash: 0x32C62AA929C2DA6A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32C62AA929C2DA6A)
	 */
	setPoliceIgnore(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_POLICE_RADAR_BLIPS
	 *
	 * Hash: 0x43286D561B72B8BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43286D561B72B8BF)
	 */
	setPoliceRadarBlips(toggle: boolean): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
	 *
	 * Hash: 0x0764486AEDE748DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0764486AEDE748DB)
	 */
	setReserveParachuteModelOverride(model: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_RESERVE_PARACHUTE_TINT_INDEX
	 *
	 * Hash: 0xAF04C87F5DC1DF38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF04C87F5DC1DF38)
	 */
	setReserveParachuteTintIndex(index: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS
	 *
	 * Hash: 0x11D5F725F0E780E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11D5F725F0E780E0)
	 */
	setResetFlagPreferRearSeats(flags: integer): void;

	/**
	 * Native: PLAYER::SET_RUN_SPRINT_MULTIPLIER_FOR_PLAYER
	 *
	 * Hash: 0x6DB47AA77FD94E09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DB47AA77FD94E09)
	 */
	setRunSprintMultiplierFor(multiplier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_SIMULATE_AIMING
	 *
	 * Hash: 0xC54C95DA968EC5B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC54C95DA968EC5B5)
	 */
	setSimulateAiming(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_SNEAKING_NOISE_MULTIPLIER
	 *
	 * Hash: 0xB2C1A29588A9F47C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2C1A29588A9F47C)
	 */
	setSneakingNoiseMultiplier(multiplier: number): void;

	/**
	 * Native: PLAYER::_SET_SPECIAL_ABILITY
	 *
	 * Hash: 0xB214D570EAD7F81A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB214D570EAD7F81A)
	 */
	setSpecialAbility(p1: integer, p2: integer): void;

	/**
	 * Native: PLAYER::SET_SPECIAL_ABILITY_MULTIPLIER
	 *
	 * Hash: 0xA49C426ED0CA4AB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA49C426ED0CA4AB7)
	 */
	setSpecialAbilityMultiplier(multiplier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_SPRINT
	 *
	 * Hash: 0xA01B8075D8B92DF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA01B8075D8B92DF4)
	 */
	setSprint(toggle: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_STEALTH_PERCEPTION_MODIFIER
	 *
	 * Hash: 0x4E9021C1FCDD507A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E9021C1FCDD507A)
	 */
	setStealthPerceptionModifier(value: number): void;

	/**
	 * Native: PLAYER::SET_SWIM_MULTIPLIER_FOR_PLAYER
	 *
	 * Hash: 0xA91C6F0FF7D16A13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA91C6F0FF7D16A13)
	 */
	setSwimMultiplierFor(multiplier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_TARGETING_MODE
	 *
	 * Hash: 0xB1906895227793F3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1906895227793F3)
	 */
	setTargetingMode(targetMode: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_TARGET_LEVEL
	 *
	 * Hash: 0x5702B917B99DB1CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5702B917B99DB1CD)
	 */
	setTargetLevel(targetLevel: integer): void;

	/**
	 * Native: PLAYER::SET_PLAYER_TEAM
	 *
	 * Hash: 0x0299FA38396A4940 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0299FA38396A4940)
	 */
	setTeam(team: integer): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_UNDERWATER_TIME_REMAINING
	 *
	 * Hash: 0xA0D3E4F7AAFB7E78 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0D3E4F7AAFB7E78)
	 */
	setUnderwaterTimeRemaining(time: number): integer;

	/**
	 * Native: PLAYER::SET_PLAYER_VEHICLE_DAMAGE_MODIFIER
	 *
	 * Hash: 0xA50E117CDDF82F0C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA50E117CDDF82F0C)
	 */
	setVehicleDamageModifier(modifier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_VEHICLE_DEFENSE_MODIFIER
	 *
	 * Hash: 0x4C60E6EFDAFF2462 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C60E6EFDAFF2462)
	 */
	setVehicleDefenseModifier(modifier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_WANTED_CENTRE_POSITION
	 *
	 * Hash: 0x520E541A97A13354 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x520E541A97A13354)
	 */
	setWantedCentrePosition(p2: boolean, p3: boolean): Vector3Mp;

	/**
	 * Native: PLAYER::SET_PLAYER_WANTED_LEVEL
	 *
	 * Hash: 0x39FF19C64EF7DA5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39FF19C64EF7DA5B)
	 */
	setWantedLevel(wantedLevel: integer, disableNoMission: boolean): void;

	/**
	 * Native: PLAYER::SET_WANTED_LEVEL_DIFFICULTY
	 *
	 * Hash: 0x9B0BB33B04405E7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B0BB33B04405E7A)
	 */
	setWantedLevelDifficulty(difficulty: number): void;

	/**
	 * Native: PLAYER::_SET_WANTED_LEVEL_HIDDEN_EVASION_TIME
	 *
	 * Hash: 0x49B856B1360C47C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49B856B1360C47C7)
	 */
	setWantedLevelHiddenEvasionTime(wantedLevel: integer, lossTime: integer): void;

	/**
	 * Native: PLAYER::SET_WANTED_LEVEL_MULTIPLIER
	 *
	 * Hash: 0x020E5F00CDA207BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x020E5F00CDA207BA)
	 */
	setWantedLevelMultiplier(multiplier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_WANTED_LEVEL_NO_DROP
	 *
	 * Hash: 0x340E61DE7F471565 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x340E61DE7F471565)
	 */
	setWantedLevelNoDrop(wantedLevel: integer, p2: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_WANTED_LEVEL_NOW
	 *
	 * Hash: 0xE0A7D1E497FFCD6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0A7D1E497FFCD6F)
	 */
	setWantedLevelNow(p1: boolean): void;

	/**
	 * Native: PLAYER::SET_PLAYER_WEAPON_DAMAGE_MODIFIER
	 *
	 * Hash: 0xCE07B9F7817AADA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE07B9F7817AADA3)
	 */
	setWeaponDamageModifier(modifier: number): void;

	/**
	 * Native: PLAYER::SET_PLAYER_WEAPON_DEFENSE_MODIFIER
	 *
	 * Hash: 0x2D83BC011CA14A3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D83BC011CA14A3C)
	 */
	setWeaponDefenseModifier(modifier: number): void;

	/**
	 * Native: PLAYER::_SET_PLAYER_WEAPON_DEFENSE_MODIFIER_2
	 *
	 * Hash: 0xBCFDE9EDE4CF27DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBCFDE9EDE4CF27DC)
	 */
	setWeaponDefenseModifier2(modifier: number): void;

	/**
	 * Native: PLAYER::SIMULATE_PLAYER_INPUT_GAIT
	 *
	 * Hash: 0x477D5D63E63ECA5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x477D5D63E63ECA5D)
	 */
	simulateInputGait(amount: number, gaitType: integer, speed: number, p4: boolean, p5: boolean): void;

	/**
	 * Native: PLAYER::_SPECIAL_ABILITY_ACTIVATE
	 *
	 * Hash: 0x821FDC827D6F4090 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x821FDC827D6F4090)
	 */
	specialAbilityActivate(p1: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_ABSOLUTE
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0xB7B0870EB531D08D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7B0870EB531D08D)
	 */
	specialAbilityChargeAbsolute(p1: integer, p2: boolean, p3?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_CONTINUOUS
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0xED481732DFF7E997 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xED481732DFF7E997)
	 */
	specialAbilityChargeContinuous(p1: Handle, p2?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_LARGE
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0xF733F45FA4497D93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF733F45FA4497D93)
	 */
	specialAbilityChargeLarge(p1: boolean, p2: boolean, p3?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_MEDIUM
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0xF113E3AA9BC54613 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF113E3AA9BC54613)
	 */
	specialAbilityChargeMedium(p1: boolean, p2: boolean, p3?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_NORMALIZED
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0xA0696A65F009EE18 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0696A65F009EE18)
	 */
	specialAbilityChargeNormalized(normalizedValue: number, p2: boolean, p3: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_ON_MISSION_FAILED
	 *
	 * Hash: 0xC9A763D8FE87436A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9A763D8FE87436A)
	 */
	specialAbilityChargeOnMissionFailed(p1: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_CHARGE_SMALL
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0x2E7B9B683481687D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E7B9B683481687D)
	 */
	specialAbilityChargeSmall(p1: boolean, p2: boolean, p3?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_DEACTIVATE
	 *
	 * Hash: 0xD6A953C6D1492057 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6A953C6D1492057)
	 */
	specialAbilityDeactivate(p1: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_DEACTIVATE_FAST
	 *
	 * Hash: 0x9CB5CE07A3968D5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CB5CE07A3968D5A)
	 */
	specialAbilityDeactivateFast(p1: integer): void;

	/**
	 * Native: PLAYER::_SPECIAL_ABILITY_DEPLETE
	 *
	 * Hash: 0x17F7471EACA78290 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17F7471EACA78290)
	 */
	specialAbilityDeplete(p1: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_DEPLETE_METER
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x1D506DBBBC51E64B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1D506DBBBC51E64B)
	 */
	specialAbilityDepleteMeter(p1: boolean, p2?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_FILL_METER
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x3DACA8DDC6FD4980 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DACA8DDC6FD4980)
	 */
	specialAbilityFillMeter(p1: boolean, p2?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_LOCK
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0x6A09D0D590A47D13 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A09D0D590A47D13)
	 */
	specialAbilityLock(playerModel: integer, p1?: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_RESET
	 *
	 * Hash: 0x375F0E738F861A94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x375F0E738F861A94)
	 */
	specialAbilityReset(p1: integer): void;

	/**
	 * Native: PLAYER::SPECIAL_ABILITY_UNLOCK
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0xF145F3BE2EFA9A3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF145F3BE2EFA9A3B)
	 */
	specialAbilityUnlock(playerModel: integer, p1?: integer): void;

	/**
	 * Native: PLAYER::START_FIRING_AMNESTY
	 *
	 * Hash: 0xBF9BD71691857E48 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF9BD71691857E48)
	 */
	startFiringAmnesty(duration: integer): void;

	/**
	 * Native: PLAYER::START_PLAYER_TELEPORT
	 *
	 * Hash: 0xAD15F075A4DA0FDE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD15F075A4DA0FDE)
	 */
	startTeleport(
		x: number,
		y: number,
		z: number,
		heading: number,
		p5: boolean,
		findCollisionLand: boolean,
		p7: boolean
	): void;

	/**
	 * Native: PLAYER::STOP_PLAYER_TELEPORT
	 *
	 * Hash: 0xC449EDED9D73009C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC449EDED9D73009C)
	 */
	stopTeleport(): void;

	/**
	 * Native: PLAYER::_SWITCH_CRIME_TYPE
	 *
	 * Hash: 0x9A987297ED8BD838 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A987297ED8BD838)
	 */
	switchCrimeType(p1: integer): void;

	/**
	 * Native: PLAYER::UPDATE_PLAYER_TELEPORT
	 *
	 * Hash: 0xE23D5873C2394C61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE23D5873C2394C61)
	 */
	updateTeleport(): boolean;

	unk: GamePlayerUnk;
}

interface GamePlayerMp extends GamePlayer {}
