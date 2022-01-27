/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface _0x14E0B2D1AD1044E0Result {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface _0x6DEE77AFF8C21BD1Result {
	playerAccountId: integer;
	posixTime: integer;
	result: boolean;
}

interface _0xA736CF7FB7C5BFF4Result {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface _0xDEAAF77EB3687E97Result {
	p1: integer;
	result: integer;
}

interface _0xF5BB8DAC426A52C0Result {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface _0xF8C54A461C3E11DCResult {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface Leaderboards2ReadByHandleResult {
	p0: integer;
	p1: integer;
	result: boolean;
}

interface Leaderboards2ReadByRadiusResult {
	p0: integer;
	p2: integer;
	result: boolean;
}

interface Leaderboards2ReadByRowResult {
	p0: integer;
	p1: integer;
	p3: integer;
	p5: integer;
	result: boolean;
}

interface Leaderboards2ReadFriendsByRowResult {
	p0: integer;
	p1: integer;
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

interface StatGetPosResult {
	p1: integer;
	p2: integer;
	p3: integer;
	result: boolean;
}

interface StatGetSaveMigrationConsumeContentUnlockStatusResult {
	p0: integer;
	result: integer;
}

interface StatGetSaveMigrationStatusResult {
	data: integer;
	result: integer;
}

interface GameStatsLegacy {
	/**
	 * Native: STATS::PLAYSTATS_AWARD_XP
	 *
	 * Hash: 0x46F917F6B4128FE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46F917F6B4128FE4)
	 */
	playstatsAwardXp(amount: integer, type: integer, category: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_CHEAT_APPLIED
	 *
	 * Hash: 0x6058665D72302D3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6058665D72302D3F)
	 */
	playstatsCheatApplied(cheat: string): void;

	/**
	 * Native: STATS::PLAYSTATS_CLOTH_CHANGE
	 *
	 * Hash: 0x34B973047A2268B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34B973047A2268B9)
	 */
	playstatsClothChange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_FRIEND_ACTIVITY
	 *
	 * Hash: 0x0F71DE29AB2258F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F71DE29AB2258F1)
	 */
	playstatsFriendActivity(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_MATCH_STARTED
	 *
	 * Hash: 0xBC80E22DED931E3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC80E22DED931E3D)
	 */
	playstatsMatchStarted(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_MISSION_CHECKPOINT
	 *
	 * Hash: 0xC900596A63978C1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC900596A63978C1D)
	 */
	playstatsMissionCheckpoint(p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: STATS::PLAYSTATS_MISSION_OVER
	 *
	 * Hash: 0x7C4BB33A8CED7324 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C4BB33A8CED7324)
	 */
	playstatsMissionOver(p1: integer, p2: integer, p3: boolean, p4: boolean, p5: boolean): integer;

	/**
	 * Native: STATS::PLAYSTATS_MISSION_STARTED
	 *
	 * Hash: 0xC19A2925C34D2231 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC19A2925C34D2231)
	 */
	playstatsMissionStarted(p1: integer, p2: integer, p3: boolean): integer;

	/**
	 * Native: STATS::PLAYSTATS_NPC_INVITE
	 *
	 * Hash: 0x93054C88E6AA7C44 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93054C88E6AA7C44)
	 */
	playstatsNpcInvite(): integer;

	/**
	 * Native: STATS::PLAYSTATS_ODDJOB_DONE
	 *
	 * Hash: 0x69DEA3E9DB727B4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69DEA3E9DB727B4C)
	 */
	playstatsOddjobDone(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_PROP_CHANGE
	 *
	 * Hash: 0xBA739D6D5A05D6E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA739D6D5A05D6E7)
	 */
	playstatsPropChange(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_RACE_CHECKPOINT
	 *
	 * Hash: 0x9C375C315099DDE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C375C315099DDE4)
	 */
	playstatsRaceCheckpoint(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_RANK_UP
	 *
	 * Hash: 0xC7F2DE41D102BFB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7F2DE41D102BFB4)
	 */
	playstatsRankUp(rank: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_SHOP_ITEM
	 *
	 * Hash: 0x176852ACAAC173D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x176852ACAAC173D1)
	 */
	playstatsShopItem(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_WEBSITE_VISITED
	 *
	 * Hash: 0xDDF24D535060F811 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDF24D535060F811)
	 */
	playstatsWebsiteVisited(scaleformHash: integer, p1: integer): void;

	/**
	 * Native: STATS::STAT_SAVE
	 *
	 * Hash: 0xE07BCA305B82D2FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE07BCA305B82D2FD)
	 */
	statSave(p0: integer, p1: boolean, p2: integer, p3: integer): boolean;

	/**
	 * Native: STATS::_STAT_SAVE_MIGRATION_CANCEL
	 *
	 * Hash: 0x4FEF53183C3C6414 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4FEF53183C3C6414)
	 */
	statSaveMigrationCancel(): boolean;

	/**
	 * Native: STATS::_STAT_SAVE_MIGRATION_CONSUME_CONTENT_UNLOCK
	 *
	 * Hash: 0x3270F67EED31FBC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3270F67EED31FBC1)
	 */
	statSaveMigrationConsumeContentUnlock(contentId: integer, srcPlatform: string, srcGamerHandle: string): boolean;

	/**
	 * Native: STATS::STAT_SAVE_PENDING
	 *
	 * Hash: 0x7D3A583856F2C5AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D3A583856F2C5AC)
	 */
	statSavePending(): boolean;

	/**
	 * Native: STATS::STAT_SAVE_PENDING_OR_REQUESTED
	 *
	 * Hash: 0xBBB6AD006F1BBEA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBB6AD006F1BBEA3)
	 */
	statSavePendingOrRequested(): boolean;

	/**
	 * Native: STATS::STAT_SET_BLOCK_SAVES
	 *
	 * Hash: 0xF434A10BA01C37D0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF434A10BA01C37D0)
	 */
	statSetBlockSaves(toggle: boolean): void;

	/**
	 * Native: STATS::STAT_SET_BOOL
	 *
	 * Hash: 0x4B33C4243DE0C432 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B33C4243DE0C432)
	 */
	statSetBool(statName: integer, value: boolean, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_BOOL_MASKED
	 *
	 * Hash: 0x5BC62EC1937B9E5B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BC62EC1937B9E5B)
	 */
	statSetBoolMasked(statName: integer, value: boolean, mask: integer, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_CHEAT_IS_ACTIVE
	 *
	 * Hash: 0x047CBED6F6F8B63C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x047CBED6F6F8B63C)
	 */
	statSetCheatIsActive(): void;

	/**
	 * Native: STATS::STAT_SET_CURRENT_POSIX_TIME
	 *
	 * Hash: 0xC2F84B7F9C4D0C61 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2F84B7F9C4D0C61)
	 */
	statSetCurrentPosixTime(statName: integer, p1: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_DATE
	 *
	 * Hash: 0x2C29BFB64F4FCBE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C29BFB64F4FCBE4)
	 */
	statSetDate(statName: integer, numFields: integer, save: boolean): integer;

	/**
	 * Native: STATS::STAT_SET_FLOAT
	 *
	 * Hash: 0x4851997F37FE9B3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4851997F37FE9B3C)
	 */
	statSetFloat(statName: integer, value: number, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_GXT_LABEL
	 *
	 * Hash: 0x17695002FD8B2AE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17695002FD8B2AE0)
	 */
	statSetGxtLabel(statName: integer, value: string, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_INT
	 *
	 * Hash: 0xB3271D7AB655B441 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3271D7AB655B441)
	 */
	statSetInt(statName: integer, value: integer, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_LICENSE_PLATE
	 *
	 * Hash: 0x69FF13266D7296DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69FF13266D7296DA)
	 */
	statSetLicensePlate(statName: integer, str: string): boolean;

	/**
	 * Native: STATS::STAT_SET_MASKED_INT
	 *
	 * Hash: 0x7BBB1B54583ED410 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7BBB1B54583ED410)
	 */
	statSetMaskedInt(statName: integer, p1: integer, p2: integer, p3: integer, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_POS
	 *
	 * Hash: 0xDB283FDE680FE72E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB283FDE680FE72E)
	 */
	statSetPos(statName: integer, x: number, y: number, z: number, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_PROFILE_SETTING_VALUE
	 *
	 * Hash: 0x68F01422BE1D838F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68F01422BE1D838F)
	 */
	statSetProfileSetting(profileSetting: integer, value: integer): void;

	/**
	 * Native: STATS::STAT_SET_PROFILE_SETTING_VALUE
	 *
	 * Hash: 0x68F01422BE1D838F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x68F01422BE1D838F)
	 */
	statSetProfileSettingValue(profileSetting: integer, value: integer): void;

	/**
	 * Native: STATS::STAT_SET_STRING
	 *
	 * Hash: 0xA87B2335D12531D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA87B2335D12531D7)
	 */
	statSetString(statName: integer, value: string, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SET_USER_ID
	 *
	 * Hash: 0x8CDDF1E452BABE11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8CDDF1E452BABE11)
	 */
	statSetUserId(statName: integer, value: string, save: boolean): boolean;

	/**
	 * Native: STATS::STAT_SLOT_IS_LOADED
	 *
	 * Hash: 0x0D0A9F0E7BD91E3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D0A9F0E7BD91E3C)
	 */
	statSlotIsLoaded(p0: integer): boolean;
}

interface GameStatsUnk {
	/**
	 * Native: STATS::_0x0D01D20616FC73FB
	 *
	 * Hash: 0x0D01D20616FC73FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0D01D20616FC73FB)
	 */
	_0x0D01D20616FC73FB(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_0x14E0B2D1AD1044E0
	 *
	 * Hash: 0x14E0B2D1AD1044E0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14E0B2D1AD1044E0)
	 */
	_0x14E0B2D1AD1044E0(): _0x14E0B2D1AD1044E0Result;

	/**
	 * Native: STATS::_0x26D7399B9587FE89
	 *
	 * Hash: 0x26D7399B9587FE89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26D7399B9587FE89)
	 */
	_0x26D7399B9587FE89(p0: integer): void;

	/**
	 * Native: STATS::_0x34770B9CE0E03B91
	 *
	 * Hash: 0x34770B9CE0E03B91 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34770B9CE0E03B91)
	 */
	_0x34770B9CE0E03B91(p0: integer): integer;

	/**
	 * Native: STATS::_0x38491439B6BA7F7D
	 *
	 * Hash: 0x38491439B6BA7F7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38491439B6BA7F7D)
	 */
	_0x38491439B6BA7F7D(p0: integer, p1: integer): number;

	/**
	 * Native: STATS::_0x38BAAA5DD4C9D19F
	 *
	 * Hash: 0x38BAAA5DD4C9D19F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38BAAA5DD4C9D19F)
	 */
	_0x38BAAA5DD4C9D19F(value: integer): void;

	/**
	 * Native: STATS::_0x428EAF89E24F6C36
	 *
	 * Hash: 0x428EAF89E24F6C36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x428EAF89E24F6C36)
	 */
	_0x428EAF89E24F6C36(p0: integer, p1: number): void;

	/**
	 * Native: STATS::_0x4AFF7E02E485E92B
	 *
	 * Hash: 0x4AFF7E02E485E92B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4AFF7E02E485E92B)
	 */
	_0x4AFF7E02E485E92B(): void;

	/**
	 * Native: STATS::_0x4C89FE2BDEB3F169
	 *
	 * Hash: 0x4C89FE2BDEB3F169 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4C89FE2BDEB3F169)
	 */
	_0x4C89FE2BDEB3F169(): integer;

	/**
	 * Native: STATS::_0x55384438FC55AD8E
	 *
	 * Hash: 0x55384438FC55AD8E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55384438FC55AD8E)
	 */
	_0x55384438FC55AD8E(value: integer): void;

	/**
	 * Native: STATS::_0x5688585E6D563CD8
	 *
	 * Hash: 0x5688585E6D563CD8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5688585E6D563CD8)
	 */
	_0x5688585E6D563CD8(p0: integer): void;

	/**
	 * Native: STATS::_0x5BD5F255321C4AAF
	 *
	 * Hash: 0x5BD5F255321C4AAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BD5F255321C4AAF)
	 */
	_0x5BD5F255321C4AAF(p0: integer): integer;

	/**
	 * Native: STATS::_0x5EAD2BF6484852E4
	 *
	 * Hash: 0x5EAD2BF6484852E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5EAD2BF6484852E4)
	 */
	_0x5EAD2BF6484852E4(): boolean;

	/**
	 * Native: STATS::_0x6483C25849031C4F
	 *
	 * Hash: 0x6483C25849031C4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6483C25849031C4F)
	 */
	_0x6483C25849031C4F(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: STATS::_0x6A7F19756F1A9016
	 *
	 * Hash: 0x6A7F19756F1A9016 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A7F19756F1A9016)
	 */
	_0x6A7F19756F1A9016(): boolean;

	/**
	 * Native: STATS::_0x6BC0ACD0673ACEBE
	 *
	 * Hash: 0x6BC0ACD0673ACEBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BC0ACD0673ACEBE)
	 */
	_0x6BC0ACD0673ACEBE(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_0x6DEE77AFF8C21BD1
	 *
	 * Hash: 0x6DEE77AFF8C21BD1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DEE77AFF8C21BD1)
	 */
	_0x6DEE77AFF8C21BD1(): _0x6DEE77AFF8C21BD1Result;

	/**
	 * Native: STATS::_0x6F361B8889A792A3
	 *
	 * Hash: 0x6F361B8889A792A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F361B8889A792A3)
	 */
	_0x6F361B8889A792A3(): void;

	/**
	 * Native: STATS::_0x71B008056E5692D6
	 *
	 * Hash: 0x71B008056E5692D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71B008056E5692D6)
	 */
	_0x71B008056E5692D6(): void;

	/**
	 * Native: STATS::_0x723C1CE13FBFDB67
	 *
	 * Hash: 0x723C1CE13FBFDB67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x723C1CE13FBFDB67)
	 */
	_0x723C1CE13FBFDB67(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_0x7E6946F68A38B74F
	 *
	 * Hash: 0x7E6946F68A38B74F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E6946F68A38B74F)
	 */
	_0x7E6946F68A38B74F(p0: integer): boolean;

	/**
	 * Native: STATS::_0x7F2C4CDF2E82DF4C
	 *
	 * Hash: 0x7F2C4CDF2E82DF4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F2C4CDF2E82DF4C)
	 */
	_0x7F2C4CDF2E82DF4C(p0: integer): boolean;

	/**
	 * Native: STATS::_0x88578F6EC36B4A3A
	 *
	 * Hash: 0x88578F6EC36B4A3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88578F6EC36B4A3A)
	 */
	_0x88578F6EC36B4A3A(p0: integer, p1: integer): integer;

	/**
	 * Native: STATS::_0x8EC74CEB042E7CFF
	 *
	 * Hash: 0x8EC74CEB042E7CFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EC74CEB042E7CFF)
	 */
	_0x8EC74CEB042E7CFF(p0: integer): void;

	/**
	 * Native: STATS::_0x9A62EC95AE10E011
	 *
	 * Hash: 0x9A62EC95AE10E011 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A62EC95AE10E011)
	 */
	_0x9A62EC95AE10E011(): integer;

	/**
	 * Native: STATS::_0x9B4BD21D69B1E609
	 *
	 * Hash: 0x9B4BD21D69B1E609 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B4BD21D69B1E609)
	 */
	_0x9B4BD21D69B1E609(): void;

	/**
	 * Native: STATS::_0xA0F93D5465B3094D
	 *
	 * Hash: 0xA0F93D5465B3094D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0F93D5465B3094D)
	 */
	_0xA0F93D5465B3094D(): integer;

	/**
	 * Native: STATS::_0xA736CF7FB7C5BFF4
	 *
	 * Hash: 0xA736CF7FB7C5BFF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA736CF7FB7C5BFF4)
	 */
	_0xA736CF7FB7C5BFF4(): _0xA736CF7FB7C5BFF4Result;

	/**
	 * Native: STATS::_0xA78B8FA58200DA56
	 *
	 * Hash: 0xA78B8FA58200DA56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA78B8FA58200DA56)
	 */
	_0xA78B8FA58200DA56(p0: integer): void;

	/**
	 * Native: STATS::_0xA8733668D1047B51
	 *
	 * Hash: 0xA8733668D1047B51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8733668D1047B51)
	 */
	_0xA8733668D1047B51(p0: integer): void;

	/**
	 * Native: STATS::_0xB3DA2606774A8E2D
	 *
	 * Hash: 0xB3DA2606774A8E2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB3DA2606774A8E2D)
	 */
	_0xB3DA2606774A8E2D(): boolean;

	/**
	 * Native: STATS::_0xC01D2470F22CDE5A
	 *
	 * Hash: 0xC01D2470F22CDE5A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC01D2470F22CDE5A)
	 */
	_0xC01D2470F22CDE5A(): void;

	/**
	 * Native: STATS::_0xC0E0D686DDFC6EAE
	 *
	 * Hash: 0xC0E0D686DDFC6EAE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0E0D686DDFC6EAE)
	 */
	_0xC0E0D686DDFC6EAE(): integer;

	/**
	 * Native: STATS::_0xC141B8917E0017EC
	 *
	 * Hash: 0xC141B8917E0017EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC141B8917E0017EC)
	 */
	_0xC141B8917E0017EC(): void;

	/**
	 * Native: STATS::_0xC67E2DA1CBE759E2
	 *
	 * Hash: 0xC67E2DA1CBE759E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC67E2DA1CBE759E2)
	 */
	_0xC67E2DA1CBE759E2(): void;

	/**
	 * Native: STATS::_0xC6E0E2616A7576BB
	 *
	 * Hash: 0xC6E0E2616A7576BB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6E0E2616A7576BB)
	 */
	_0xC6E0E2616A7576BB(): integer;

	/**
	 * Native: STATS::_0xC847B43F369AC0B5
	 *
	 * Hash: 0xC847B43F369AC0B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC847B43F369AC0B5)
	 */
	_0xC847B43F369AC0B5(): void;

	/**
	 * Native: STATS::_0xD1032E482629049E
	 *
	 * Hash: 0xD1032E482629049E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1032E482629049E)
	 */
	_0xD1032E482629049E(p0: integer): void;

	/**
	 * Native: STATS::_0xDEAAF77EB3687E97
	 *
	 * Hash: 0xDEAAF77EB3687E97 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEAAF77EB3687E97)
	 */
	_0xDEAAF77EB3687E97(p0: integer): _0xDEAAF77EB3687E97Result;

	/**
	 * Native: STATS::_0xE496A53BA5F50A56
	 *
	 * Hash: 0xE496A53BA5F50A56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE496A53BA5F50A56)
	 */
	_0xE496A53BA5F50A56(p0: integer): integer;

	/**
	 * Native: STATS::_0xECB41AC6AB754401
	 *
	 * Hash: 0xECB41AC6AB754401 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xECB41AC6AB754401)
	 */
	_0xECB41AC6AB754401(): boolean;

	/**
	 * Native: STATS::_0xF1A1803D3476F215
	 *
	 * Hash: 0xF1A1803D3476F215 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1A1803D3476F215)
	 */
	_0xF1A1803D3476F215(value: integer): void;

	/**
	 * Native: STATS::_0xF5BB8DAC426A52C0
	 *
	 * Hash: 0xF5BB8DAC426A52C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF5BB8DAC426A52C0)
	 */
	_0xF5BB8DAC426A52C0(): _0xF5BB8DAC426A52C0Result;

	/**
	 * Native: STATS::_0xF8C54A461C3E11DC
	 *
	 * Hash: 0xF8C54A461C3E11DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8C54A461C3E11DC)
	 */
	_0xF8C54A461C3E11DC(): _0xF8C54A461C3E11DCResult;
}

interface GameStats extends GameStatsLegacy {
	/**
	 * Native: STATS::_GET_NGSTAT_BOOL_HASH
	 *
	 * Hash: 0xBA52FF538ED2BC71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA52FF538ED2BC71)
	 */
	getNgstatBoolHash(index: integer, spStat: boolean, charStat: boolean, character: integer, section: string): integer;

	/**
	 * Native: STATS::_GET_NGSTAT_INT_HASH
	 *
	 * Hash: 0x2B4CDCA6F07FF3DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B4CDCA6F07FF3DA)
	 */
	getNgstatIntHash(index: integer, spStat: boolean, charStat: boolean, character: integer, section: string): integer;

	/**
	 * Native: STATS::GET_PACKED_BOOL_STAT_KEY
	 *
	 * Hash: 0x80C75307B1C42837 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80C75307B1C42837)
	 */
	getPackedBoolStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;

	/**
	 * Native: STATS::GET_PACKED_INT_STAT_KEY
	 *
	 * Hash: 0x61E111E323419E07 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x61E111E323419E07)
	 */
	getPackedIntStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;

	/**
	 * Native: STATS::GET_PACKED_TU_BOOL_STAT_KEY
	 *
	 * Hash: 0xC4BB08EE7907471E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4BB08EE7907471E)
	 */
	getPackedTuBoolStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;

	/**
	 * Native: STATS::GET_PACKED_TU_INT_STAT_KEY
	 *
	 * Hash: 0xD16C2AD6B8E32854 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD16C2AD6B8E32854)
	 */
	getPackedTuIntStatKey(index: integer, spStat: boolean, charStat: boolean, character: integer): integer;

	/**
	 * Native: STATS::_HIRED_LIMO
	 *
	 * Hash: 0x792271AB35C356A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x792271AB35C356A4)
	 */
	hiredLimo(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_BY_HANDLE
	 *
	 * Hash: 0xC30713A383BFBF0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC30713A383BFBF0E)
	 */
	leaderboards2ReadByHandle(): Leaderboards2ReadByHandleResult;

	/**
	 * Native: STATS::_LEADERBOARDS2_READ_BY_PLATFORM
	 *
	 * Hash: 0xF1AE5DCDBFCA2721 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1AE5DCDBFCA2721)
	 */
	leaderboards2ReadByPlatform(gamerHandleCsv: string, platformName: string): integer;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_BY_RADIUS
	 *
	 * Hash: 0x5CE587FB5A42C8C4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CE587FB5A42C8C4)
	 */
	leaderboards2ReadByRadius(p1: integer): Leaderboards2ReadByRadiusResult;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_BY_RANK
	 *
	 * Hash: 0xBA2C7DB0C129449A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA2C7DB0C129449A)
	 */
	leaderboards2ReadByRank(p1: integer, p2: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_BY_ROW
	 *
	 * Hash: 0xA9CDB1E3F0A49883 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9CDB1E3F0A49883)
	 */
	leaderboards2ReadByRow(p2: integer, p4: integer, p6: integer): Leaderboards2ReadByRowResult;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_BY_SCORE_FLOAT
	 *
	 * Hash: 0xE662C8B759D08F3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE662C8B759D08F3C)
	 */
	leaderboards2ReadByScoreFloat(p1: number, p2: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_BY_SCORE_INT
	 *
	 * Hash: 0x7EEC7E4F6984A16A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EEC7E4F6984A16A)
	 */
	leaderboards2ReadByScoreInt(p1: integer, p2: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_FRIENDS_BY_ROW
	 *
	 * Hash: 0x918B101666F9CB83 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x918B101666F9CB83)
	 */
	leaderboards2ReadFriendsByRow(
		p2: integer,
		p3: boolean,
		p4: integer,
		p5: integer
	): Leaderboards2ReadFriendsByRowResult;

	/**
	 * Native: STATS::LEADERBOARDS2_READ_RANK_PREDICTION
	 *
	 * Hash: 0xC38DC1E90D22547C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC38DC1E90D22547C)
	 */
	leaderboards2ReadRankPrediction(): Leaderboards2ReadRankPredictionResult;

	/**
	 * Native: STATS::LEADERBOARDS2_WRITE_DATA
	 *
	 * Hash: 0xAE2206545888AE49 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE2206545888AE49)
	 */
	leaderboards2WriteData(): integer;

	/**
	 * Native: STATS::LEADERBOARDS2_WRITE_DATA_FOR_EVENT_TYPE
	 *
	 * Hash: 0xC980E62E33DF1D5C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC980E62E33DF1D5C)
	 */
	leaderboards2WriteDataForEventType(): Leaderboards2WriteDataForEventTypeResult;

	/**
	 * Native: STATS::LEADERBOARDS_CACHE_DATA_ROW
	 *
	 * Hash: 0xB9BB18E2C40142ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9BB18E2C40142ED)
	 */
	leaderboardsCacheDataRow(): integer;

	/**
	 * Native: STATS::LEADERBOARDS_CLEAR_CACHE_DATA
	 *
	 * Hash: 0xD4B02A6B476E1FDC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4B02A6B476E1FDC)
	 */
	leaderboardsClearCacheData(): void;

	/**
	 * Native: STATS::LEADERBOARDS_GET_CACHE_DATA_ROW
	 *
	 * Hash: 0x9120E8DBA3D69273 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9120E8DBA3D69273)
	 */
	leaderboardsGetCacheDataRow(p0: integer, p1: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_GET_CACHE_EXISTS
	 *
	 * Hash: 0x9C51349BE6CDFE2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C51349BE6CDFE2C)
	 */
	leaderboardsGetCacheExists(p0: integer): boolean;

	/**
	 * Native: STATS::LEADERBOARDS_GET_CACHE_NUMBER_OF_ROWS
	 *
	 * Hash: 0x58A651CD201D89AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58A651CD201D89AD)
	 */
	leaderboardsGetCacheNumberOfRows(p0: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_GET_CACHE_TIME
	 *
	 * Hash: 0xF04C1C27DA35F6C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF04C1C27DA35F6C8)
	 */
	leaderboardsGetCacheTime(p0: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_GET_COLUMN_ID
	 *
	 * Hash: 0xC4B5467A1886EA7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4B5467A1886EA7E)
	 */
	leaderboardsGetColumnId(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_GET_COLUMN_TYPE
	 *
	 * Hash: 0xBF4FEF46DB7894D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF4FEF46DB7894D3)
	 */
	leaderboardsGetColumnType(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_GET_NUMBER_OF_COLUMNS
	 *
	 * Hash: 0x117B45156D7EFF2E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x117B45156D7EFF2E)
	 */
	leaderboardsGetNumberOfColumns(p0: integer, p1: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_READ_ANY_PENDING
	 *
	 * Hash: 0xA31FD15197B192BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA31FD15197B192BD)
	 */
	leaderboardsReadAnyPending(): boolean;

	/**
	 * Native: STATS::LEADERBOARDS_READ_CLEAR
	 *
	 * Hash: 0x7CCE5C737A665701 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CCE5C737A665701)
	 */
	leaderboardsReadClear(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: STATS::LEADERBOARDS_READ_CLEAR_ALL
	 *
	 * Hash: 0xA34CB6E6F0DF4A0B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA34CB6E6F0DF4A0B)
	 */
	leaderboardsReadClearAll(): integer;

	/**
	 * Native: STATS::LEADERBOARDS_READ_PENDING
	 *
	 * Hash: 0xAC392C8483342AC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC392C8483342AC2)
	 */
	leaderboardsReadPending(p0: integer, p1: integer, p2: integer): boolean;

	/**
	 * Native: STATS::LEADERBOARDS_READ_SUCCESSFUL
	 *
	 * Hash: 0x2FB19228983E832C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FB19228983E832C)
	 */
	leaderboardsReadSuccessful(p0: integer, p1: integer, p2: integer): boolean;

	/**
	 * Native: STATS::LEADERBOARDS_WRITE_ADD_COLUMN
	 *
	 * Hash: 0x0BCA1D2C47B0D269 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BCA1D2C47B0D269)
	 */
	leaderboardsWriteAddColumn(p0: integer, p1: integer, p2: number): void;

	/**
	 * Native: STATS::LEADERBOARDS_WRITE_ADD_COLUMN_LONG
	 *
	 * Hash: 0x2E65248609523599 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E65248609523599)
	 */
	leaderboardsWriteAddColumnLong(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_ORDERED_BOSS_VEHICLE
	 *
	 * Hash: 0xCEA553E35C2246E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEA553E35C2246E1)
	 */
	orderedBossVehicle(p0: integer, p1: integer, vehicleHash: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ABANDONING_MC
	 *
	 * Hash: 0xD558BEC0BBA7E8D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD558BEC0BBA7E8D2)
	 */
	playAbandoningMc(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_ACQUIRED_HIDDEN_PACKAGE
	 *
	 * Hash: 0x79AB33F0FBFAC40C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x79AB33F0FBFAC40C)
	 */
	playAcquiredHiddenPackage(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_ACTIVITY_DONE
	 *
	 * Hash: 0xA071E0ED98F91286 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA071E0ED98F91286)
	 */
	playActivityDone(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ARCADE_CABINET
	 *
	 * Hash: 0xF9096193DF1F99D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9096193DF1F99D4)
	 */
	playArcadeCabinet(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ARCADEGAME
	 *
	 * Hash: 0x533A7D1EA58DF958 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x533A7D1EA58DF958)
	 */
	playArcadegame(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ARCADE_LOVEMATCH
	 *
	 * Hash: 0x4FCDBD3F0A813C25 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4FCDBD3F0A813C25)
	 */
	playArcadeLovematch(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ARENA_WARS_ENDED
	 *
	 * Hash: 0xB479D9F0D48A1BC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB479D9F0D48A1BC5)
	 */
	playArenaWarsEnded(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_ARENA_WAR_SPECTATOR
	 *
	 * Hash: 0x6F4F599753F8200A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F4F599753F8200A)
	 */
	playArenaWarSpectator(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_AWARD_BADSPORT
	 *
	 * Hash: 0x47B32F5611E6E483 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47B32F5611E6E483)
	 */
	playAwardBadsport(id: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_AWARD_XP
	 *
	 * Hash: 0x46F917F6B4128FE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46F917F6B4128FE4)
	 */
	playAwardXp(amount: integer, type: integer, category: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_BACKGROUND_SCRIPT_ACTION
	 *
	 * Hash: 0x5009DFD741329729 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5009DFD741329729)
	 */
	playBackgroundScriptAction(action: string, value: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BAN_ALERT
	 *
	 * Hash: 0x516FC96EB88EEFE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x516FC96EB88EEFE5)
	 */
	playBanAlert(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_CAR_JACKING
	 *
	 * Hash: 0x7B18DA61F6BAE9D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B18DA61F6BAE9D5)
	 */
	playBcCarJacking(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_CASHING
	 *
	 * Hash: 0x53CAE13E9B426993 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53CAE13E9B426993)
	 */
	playBcCashing(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_FINDERS_KEEPERS
	 *
	 * Hash: 0xE3261D791EB44ACB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3261D791EB44ACB)
	 */
	playBcFindersKeepers(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_MOST_WANTED
	 *
	 * Hash: 0x930F504203F561C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x930F504203F561C9)
	 */
	playBcMostWanted(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_POINT_TO_POINT
	 *
	 * Hash: 0x73001E34F85137F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73001E34F85137F8)
	 */
	playBcPointToPoint(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_PROTECTION_RACKET
	 *
	 * Hash: 0x14EDA9EE27BD1626 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14EDA9EE27BD1626)
	 */
	playBcProtectionRacket(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_SALVAGE
	 *
	 * Hash: 0x7D36291161859389 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D36291161859389)
	 */
	playBcSalvage(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BC_SMASH_AND_GRAB
	 *
	 * Hash: 0x06EAF70AE066441E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06EAF70AE066441E)
	 */
	playBcSmashAndGrab(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BECOME_BOSS
	 *
	 * Hash: 0x3EBEAC6C3F81F6BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EBEAC6C3F81F6BD)
	 */
	playBecomeBoss(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BECOME_GOON
	 *
	 * Hash: 0x96E6D5150DBF1C09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96E6D5150DBF1C09)
	 */
	playBecomeGoon(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BUSINESS_BATTLE_ENDED
	 *
	 * Hash: 0x316DB59CD14C1774 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x316DB59CD14C1774)
	 */
	playBusinessBattleEnded(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BUY_CONTRABAND
	 *
	 * Hash: 0xD6781E42755531F7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6781E42755531F7)
	 */
	playBuyContraband(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_BW_AIR_FREIGHT
	 *
	 * Hash: 0xF06A6F41CB445443 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF06A6F41CB445443)
	 */
	playBwAirFreight(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_ASSAULT
	 *
	 * Hash: 0x678F86D8FC040BDB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x678F86D8FC040BDB)
	 */
	playBwAssault(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_BELLY_OF_THE_BEAST
	 *
	 * Hash: 0xA6F54BB2FFCA35EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6F54BB2FFCA35EA)
	 */
	playBwBellyOfTheBeast(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_BOSS_ON_BOSS_DEATH_MATCH
	 *
	 * Hash: 0x8D8ADB562F09A245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D8ADB562F09A245)
	 */
	playBwBossOnBossDeathMatch(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_FRAGILE_GOOODS
	 *
	 * Hash: 0x282B6739644F4347 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x282B6739644F4347)
	 */
	playBwFragileGooods(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_HEADHUNTER
	 *
	 * Hash: 0x5FF2C33B13A02A11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FF2C33B13A02A11)
	 */
	playBwHeadhunter(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_HUNT_THE_BOSS
	 *
	 * Hash: 0x88087EE1F28024AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x88087EE1F28024AE)
	 */
	playBwHuntTheBoss(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_SIGHTSEER
	 *
	 * Hash: 0xFCC228E07217FCAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCC228E07217FCAC)
	 */
	playBwSightseer(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_BW_YACHT_ATTACK
	 *
	 * Hash: 0xD1A1EE3B4FA8E760 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1A1EE3B4FA8E760)
	 */
	playBwYachtAttack(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CARCLUB_CHALLENGE
	 *
	 * Hash: 0x1187CB58D7F3BED7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1187CB58D7F3BED7)
	 */
	playCarclubChallenge(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CARCLUB_POINTS
	 *
	 * Hash: 0xFF14D6FEEC507BBE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF14D6FEEC507BBE)
	 */
	playCarclubPoints(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CARCLUB_PRIZE
	 *
	 * Hash: 0x69C922B677621428 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69C922B677621428)
	 */
	playCarclubPrize(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_BLACKJACK
	 *
	 * Hash: 0x3EAE97309727E7AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EAE97309727E7AD)
	 */
	playCasinoBlackjack(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_BLACKJACK_LIGHT
	 *
	 * Hash: 0xD5451C7BF151EB6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD5451C7BF151EB6F)
	 */
	playCasinoBlackjackLight(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_CHIP
	 *
	 * Hash: 0x0999F3F090EC5012 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0999F3F090EC5012)
	 */
	playCasinoChip(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_INSIDETRACK
	 *
	 * Hash: 0x049F059625058A86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x049F059625058A86)
	 */
	playCasinoInsidetrack(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_INSIDETRACK_LIGHT
	 *
	 * Hash: 0x23A3CBCD50D54E47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23A3CBCD50D54E47)
	 */
	playCasinoInsidetrackLight(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_LUCKYSEVEN
	 *
	 * Hash: 0x0C432C1435F5E4FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C432C1435F5E4FA)
	 */
	playCasinoLuckyseven(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_MISSION_ENDED
	 *
	 * Hash: 0x1A0D4A6C336B7BC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A0D4A6C336B7BC5)
	 */
	playCasinoMissionEnded(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_ROULETTE
	 *
	 * Hash: 0x95101C443A84E7F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95101C443A84E7F1)
	 */
	playCasinoRoulette(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_ROULETTE_LIGHT
	 *
	 * Hash: 0x6572ABA3DE1197FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6572ABA3DE1197FC)
	 */
	playCasinoRouletteLight(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_SLOTMACHINE
	 *
	 * Hash: 0xEF5EC67D392B830A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF5EC67D392B830A)
	 */
	playCasinoSlotmachine(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_SLOTMACHINE_LIGHT
	 *
	 * Hash: 0xE60054A0FAE8227F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE60054A0FAE8227F)
	 */
	playCasinoSlotmachineLight(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_STORY_MISSION_ENDED
	 *
	 * Hash: 0xFCCCAC2BD3C1F180 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCCCAC2BD3C1F180)
	 */
	playCasinoStoryMissionEnded(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_THREECARDPOKER
	 *
	 * Hash: 0xF740FB339D471C35 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF740FB339D471C35)
	 */
	playCasinoThreecardpoker(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CASINO_THREECARDPOKER_LIGHT
	 *
	 * Hash: 0xC9001364B4388F22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC9001364B4388F22)
	 */
	playCasinoThreecardpokerLight(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CHANGE_GOON_LOOKING_FOR_WORK
	 *
	 * Hash: 0x44919CC079BB60BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44919CC079BB60BF)
	 */
	playChangeGoonLookingForWork(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CHANGE_MC_EMBLEM
	 *
	 * Hash: 0x0A50D2604E05CB94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A50D2604E05CB94)
	 */
	playChangeMcEmblem(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CHANGE_MC_OUTFIT
	 *
	 * Hash: 0x28ECB8AC2F607DB2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x28ECB8AC2F607DB2)
	 */
	playChangeMcOutfit(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CHANGE_MC_ROLE
	 *
	 * Hash: 0x0B565B0AAE56A0E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B565B0AAE56A0E8)
	 */
	playChangeMcRole(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_CHANGE_UNIFORM
	 *
	 * Hash: 0xD1C9B92BDD3F151D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1C9B92BDD3F151D)
	 */
	playChangeUniform(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_CHEAT_APPLIED
	 *
	 * Hash: 0x6058665D72302D3F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6058665D72302D3F)
	 */
	playCheatApplied(cheat: string): void;

	/**
	 * Native: STATS::PLAYSTATS_CLOTH_CHANGE
	 *
	 * Hash: 0x34B973047A2268B9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x34B973047A2268B9)
	 */
	playClothChange(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_COLLECTIBLE
	 *
	 * Hash: 0xCD0A8A9338681CF2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD0A8A9338681CF2)
	 */
	playCollectible(
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
	 * Native: STATS::_PLAYSTATS_COPY_RANK_INTO_NEW_SLOT
	 *
	 * Hash: 0xB7257BA2550EA10A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7257BA2550EA10A)
	 */
	playCopyRankIntoNewSlot(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer
	): void;

	/**
	 * Native: STATS::_PLAYSTATS_CRATE_CREATED_MISSION_DONE
	 *
	 * Hash: 0xAFC7E5E075A96F46 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFC7E5E075A96F46)
	 */
	playCrateCreatedMissionDone(p0: number, p1: number, p2: number): void;

	/**
	 * Native: STATS::PLAYSTATS_CRATE_DROP_MISSION_DONE
	 *
	 * Hash: 0x1CAE5D2E3F9A07F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CAE5D2E3F9A07F0)
	 */
	playCrateDropMissionDone(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer
	): void;

	/**
	 * Native: STATS::_PLAYSTATS_DAR_MISSION_END
	 *
	 * Hash: 0x0BC254FF3A911501 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0BC254FF3A911501)
	 */
	playDarMissionEnd(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_DEFEND_CONTRABAND
	 *
	 * Hash: 0x2605663BD4F23B5D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2605663BD4F23B5D)
	 */
	playDefendContraband(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_DIRECTOR_MODE
	 *
	 * Hash: 0x46326E13DA4E0546 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46326E13DA4E0546)
	 */
	playDirectorMode(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_DJ_MISSION_ENDED
	 *
	 * Hash: 0xD6CA58B3B53A0F22 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD6CA58B3B53A0F22)
	 */
	playDjMissionEnded(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_DJ_USAGE
	 *
	 * Hash: 0xB26F670685631727 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB26F670685631727)
	 */
	playDjUsage(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_DRONE_USAGE
	 *
	 * Hash: 0x66C7BB2416ED3FCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66C7BB2416ED3FCE)
	 */
	playDroneUsage(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_DUPE_DETECTION
	 *
	 * Hash: 0x848B66100EE33B05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x848B66100EE33B05)
	 */
	playDupeDetection(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_EARNED_MC_POINTS
	 *
	 * Hash: 0x501478855A6074CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x501478855A6074CE)
	 */
	playEarnedMcPoints(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_END_BEING_BOSS
	 *
	 * Hash: 0xA3C53804BDB68ED2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3C53804BDB68ED2)
	 */
	playEndBeingBoss(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_END_BEING_GOON
	 *
	 * Hash: 0x6BCCF9948492FD85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6BCCF9948492FD85)
	 */
	playEndBeingGoon(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ENTER_SESSION_PACK
	 *
	 * Hash: 0x878FF156D36E9956 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x878FF156D36E9956)
	 */
	playEnterSessionPack(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_EXTRA_EVENT
	 *
	 * Hash: 0xFA5B74BAB8A7EF99 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA5B74BAB8A7EF99)
	 */
	playExtraEvent(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FAST_TRVL
	 *
	 * Hash: 0x4DC416F246A41FC8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4DC416F246A41FC8)
	 */
	playFastTrvl(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_ATOB
	 *
	 * Hash: 0xBAA2F0490E146BE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAA2F0490E146BE8)
	 */
	playFreemodeAtob(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_CHALLENGES
	 *
	 * Hash: 0x6A60E43998228229 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A60E43998228229)
	 */
	playFreemodeChallenges(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_CHECKPOINT_COLLECTION
	 *
	 * Hash: 0x3DE3AA516FB126A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DE3AA516FB126A4)
	 */
	playFreemodeCheckpointCollection(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_COMPETITIVE_URBAN_WARFARE
	 *
	 * Hash: 0x6551B1F7F6CD46EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6551B1F7F6CD46EA)
	 */
	playFreemodeCompetitiveUrbanWarfare(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_CRIMINAL_DAMAGE
	 *
	 * Hash: 0xEDBF6C9B0D2C65C8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDBF6C9B0D2C65C8)
	 */
	playFreemodeCriminalDamage(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_DEADDROP
	 *
	 * Hash: 0x0A9C7F36E5D7B683 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A9C7F36E5D7B683)
	 */
	playFreemodeDeaddrop(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_HOT_PROPERTY
	 *
	 * Hash: 0x84DFC579C2FC214C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84DFC579C2FC214C)
	 */
	playFreemodeHotProperty(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_HUNT_BEAST
	 *
	 * Hash: 0x2CD90358F67D0AA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CD90358F67D0AA8)
	 */
	playFreemodeHuntBeast(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_KING_OF_THE_CASTLE
	 *
	 * Hash: 0x164C5FF663790845 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x164C5FF663790845)
	 */
	playFreemodeKingOfTheCastle(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_PASS_THE_PARCEL
	 *
	 * Hash: 0x419615486BBF1956 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x419615486BBF1956)
	 */
	playFreemodePassTheParcel(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_PENNED_IN
	 *
	 * Hash: 0x1A7CE7CD3E653485 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A7CE7CD3E653485)
	 */
	playFreemodePennedIn(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_URBAN_WARFARE
	 *
	 * Hash: 0x8C9D11605E59D955 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8C9D11605E59D955)
	 */
	playFreemodeUrbanWarfare(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_FREEMODE_VEHICLE_TARGET
	 *
	 * Hash: 0xBFAFDB5FAAA5C5AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFAFDB5FAAA5C5AB)
	 */
	playFreemodeVehicleTarget(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_FRIEND_ACTIVITY
	 *
	 * Hash: 0x0F71DE29AB2258F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F71DE29AB2258F1)
	 */
	playFriendActivity(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_GHOSTING_TO_PLAYER
	 *
	 * Hash: 0x7033EEFD9B28088E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7033EEFD9B28088E)
	 */
	playGhostingToPlayer(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_GUNRUN_MISSION_ENDED
	 *
	 * Hash: 0x0EACDF8487D5155A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0EACDF8487D5155A)
	 */
	playGunrunMissionEnded(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_GUNRUN_RND
	 *
	 * Hash: 0xDAF80797FC534BEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAF80797FC534BEC)
	 */
	playGunrunRnd(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_H2_FMPREP_END
	 *
	 * Hash: 0xD8AFB345A9C5CCBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8AFB345A9C5CCBB)
	 */
	playH2FmprepEnd(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_H2_INSTANCE_END
	 *
	 * Hash: 0x1E1497D0D2108115 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E1497D0D2108115)
	 */
	playH2InstanceEnd(p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST3_DRONE
	 *
	 * Hash: 0xDFBD93BF2943E29B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFBD93BF2943E29B)
	 */
	playHeist3Drone(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST3_FINALE
	 *
	 * Hash: 0x2E0259BABC27A327 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E0259BABC27A327)
	 */
	playHeist3Finale(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST3_HACK
	 *
	 * Hash: 0x92FC0EEDFAC04A14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92FC0EEDFAC04A14)
	 */
	playHeist3Hack(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST3_PREP
	 *
	 * Hash: 0x53C31853EC9531FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x53C31853EC9531FF)
	 */
	playHeist3Prep(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST4_FINALE
	 *
	 * Hash: 0xC1E963C58664B556 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC1E963C58664B556)
	 */
	playHeist4Finale(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST4_HACK
	 *
	 * Hash: 0x2FA3173480008493 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2FA3173480008493)
	 */
	playHeist4Hack(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST4_PREP
	 *
	 * Hash: 0xDFCDB14317A9B361 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDFCDB14317A9B361)
	 */
	playHeist4Prep(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HEIST_SAVE_CHEAT
	 *
	 * Hash: 0xF4FF020A08BC8863 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4FF020A08BC8863)
	 */
	playHeistSaveCheat(hash: integer, p1: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HIT_CONTRABAND_DESTROY_LIMIT
	 *
	 * Hash: 0x60EEDC12AF66E846 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60EEDC12AF66E846)
	 */
	playHitContrabandDestroyLimit(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_HOLD_UP_MISSION_DONE
	 *
	 * Hash: 0xCB00196B31C39EB1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB00196B31C39EB1)
	 */
	playHoldUpMissionDone(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_HUB_ENTRY
	 *
	 * Hash: 0x2818FF6638CB09DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2818FF6638CB09DE)
	 */
	playHubEntry(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_IDLE_KICK
	 *
	 * Hash: 0x5DA3A8DE8CB6226F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5DA3A8DE8CB6226F)
	 */
	playIdleKick(time: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_IMPEXP_MISSION_ENDED
	 *
	 * Hash: 0x7D8BA05688AD64C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7D8BA05688AD64C7)
	 */
	playImpexpMissionEnded(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_IMPORT_EXPORT_MISSION_DONE
	 *
	 * Hash: 0x2B69F5074C894811 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B69F5074C894811)
	 */
	playImportExportMissionDone(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_KILLED_RIVAL_MC_MEMBER
	 *
	 * Hash: 0xF534D94DFA2EAD26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF534D94DFA2EAD26)
	 */
	playKilledRivalMcMember(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_LEAVE_JOB_CHAIN
	 *
	 * Hash: 0xC5BE134EC7BA96A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5BE134EC7BA96A0)
	 */
	playLeaveJobChain(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_MASTER_CONTROL
	 *
	 * Hash: 0x810B5FCC52EC7FF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x810B5FCC52EC7FF0)
	 */
	playMasterControl(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_MATCH_STARTED
	 *
	 * Hash: 0xBC80E22DED931E3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC80E22DED931E3D)
	 */
	playMatchStarted(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_MC_CLUBHOUSE_ACTIVITY
	 *
	 * Hash: 0x8989CBD7B4E82534 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8989CBD7B4E82534)
	 */
	playMcClubhouseActivity(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer
	): void;

	/**
	 * Native: STATS::_PLAYSTATS_MC_FORMATION_ENDS
	 *
	 * Hash: 0x03C2EEBB04B3FB72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03C2EEBB04B3FB72)
	 */
	playMcFormationEnds(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer, p6: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_MC_REQUEST_BIKE
	 *
	 * Hash: 0xCC25A4553DFBF9EA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC25A4553DFBF9EA)
	 */
	playMcRequestBike(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_MINIGAME_USAGE
	 *
	 * Hash: 0xC14BD9F5337219B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC14BD9F5337219B2)
	 */
	playMinigameUsage(p0: integer, p1: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_MISSION_CHECKPOINT
	 *
	 * Hash: 0xC900596A63978C1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC900596A63978C1D)
	 */
	playMissionCheckpoint(p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: STATS::_PLAYSTATS_MISSION_ENDED
	 *
	 * Hash: 0xBF371CD2B64212FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF371CD2B64212FD)
	 */
	playMissionEnded(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_MISSION_OVER
	 *
	 * Hash: 0x7C4BB33A8CED7324 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C4BB33A8CED7324)
	 */
	playMissionOver(p1: integer, p2: integer, p3: boolean, p4: boolean, p5: boolean): integer;

	/**
	 * Native: STATS::PLAYSTATS_MISSION_STARTED
	 *
	 * Hash: 0xC19A2925C34D2231 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC19A2925C34D2231)
	 */
	playMissionStarted(p1: integer, p2: integer, p3: boolean): integer;

	/**
	 * Native: STATS::_PLAYSTATS_MISSION_VOTE
	 *
	 * Hash: 0xC03FAB2C2F92289B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC03FAB2C2F92289B)
	 */
	playMissionVote(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_NIGHTCLUB_MISSION_ENDED
	 *
	 * Hash: 0x830C3A44EB3F2CF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x830C3A44EB3F2CF9)
	 */
	playNightclubMissionEnded(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_NJVS_VOTE
	 *
	 * Hash: 0x5CDAED54B34B0ED0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CDAED54B34B0ED0)
	 */
	playNjvsVote(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_NPC_INVITE
	 *
	 * Hash: 0x93054C88E6AA7C44 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x93054C88E6AA7C44)
	 */
	playNpcInvite(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_NPC_PHONE
	 *
	 * Hash: 0x0077F15613D36993 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0077F15613D36993)
	 */
	playNpcPhone(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_ODDJOB_DONE
	 *
	 * Hash: 0x69DEA3E9DB727B4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x69DEA3E9DB727B4C)
	 */
	playOddjobDone(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_PASSIVE_MODE
	 *
	 * Hash: 0x35EEC6C2BC821A71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35EEC6C2BC821A71)
	 */
	playPassiveMode(p0: boolean, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_PEGASAIRCRAFT
	 *
	 * Hash: 0x9572BD4DD6B72122 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9572BD4DD6B72122)
	 */
	playPegasaircraft(modelHash: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_PI_MENU_HIDE_SETTINGS
	 *
	 * Hash: 0x203B381133817079 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x203B381133817079)
	 */
	playPiMenuHideSettings(): integer;

	/**
	 * Native: STATS::PLAYSTATS_PROP_CHANGE
	 *
	 * Hash: 0xBA739D6D5A05D6E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA739D6D5A05D6E7)
	 */
	playPropChange(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_PUNISH_BODYGUARD
	 *
	 * Hash: 0x015B03EE1C43E6EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x015B03EE1C43E6EC)
	 */
	playPunishBodyguard(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_QUICKFIX_TOOL
	 *
	 * Hash: 0x90D0622866E80445 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90D0622866E80445)
	 */
	playQuickfixTool(element: integer, item: string): void;

	/**
	 * Native: STATS::_PLAYSTATS_QUIT_MODE
	 *
	 * Hash: 0x5BF29846C6527C54 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BF29846C6527C54)
	 */
	playQuitMode(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_RACE_CHECKPOINT
	 *
	 * Hash: 0x9C375C315099DDE4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C375C315099DDE4)
	 */
	playRaceCheckpoint(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_RACE_TO_POINT_MISSION_DONE
	 *
	 * Hash: 0xADDD1C754E2E2914 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADDD1C754E2E2914)
	 */
	playRaceToPointMissionDone(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_RANDOM_MISSION_DONE
	 *
	 * Hash: 0x71862B1D855F32E1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71862B1D855F32E1)
	 */
	playRandomMissionDone(name: string, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_RANK_UP
	 *
	 * Hash: 0xC7F2DE41D102BFB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7F2DE41D102BFB4)
	 */
	playRankUp(rank: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_RECOVER_CONTRABAND
	 *
	 * Hash: 0x04D90BA8207ADA2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04D90BA8207ADA2D)
	 */
	playRecoverContraband(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_RIVAL_BEHAVIOUR
	 *
	 * Hash: 0x27AA1C973CACFE63 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x27AA1C973CACFE63)
	 */
	playRivalBehaviour(
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
	 * Native: STATS::_PLAYSTATS_ROBBERY_FINALE
	 *
	 * Hash: 0xBBA55BE9AAAABF44 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBA55BE9AAAABF44)
	 */
	playRobberyFinale(p0: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_ROBBERY_PREP
	 *
	 * Hash: 0x1A67DFBF1F5C3835 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A67DFBF1F5C3835)
	 */
	playRobberyPrep(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_ROS_BET
	 *
	 * Hash: 0x121FB4DDDC2D5291 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x121FB4DDDC2D5291)
	 */
	playRosBet(amount: integer, act: integer, player: Handle, cm: number): void;

	/**
	 * Native: STATS::_PLAYSTATS_SELL_CONTRABAND
	 *
	 * Hash: 0xC729991A9065376E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC729991A9065376E)
	 */
	playSellContraband(): integer;

	/**
	 * Native: STATS::PLAYSTATS_SHOP_ITEM
	 *
	 * Hash: 0x176852ACAAC173D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x176852ACAAC173D1)
	 */
	playShopItem(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_SMUG_MISSION_ENDED
	 *
	 * Hash: 0x320C35147D5B5DDD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x320C35147D5B5DDD)
	 */
	playSmugMissionEnded(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_SPECTATOR_WHEEL_SPIN
	 *
	 * Hash: 0x6731DE84A38BFAD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6731DE84A38BFAD0)
	 */
	playSpectatorWheelSpin(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_SPENT_PI_CUSTOM_LOADOUT
	 *
	 * Hash: 0xBE509B0A3693DE8B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE509B0A3693DE8B)
	 */
	playSpentPiCustomLoadout(amount: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_START_OFFLINE_MODE
	 *
	 * Hash: 0x098760C7461724CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x098760C7461724CD)
	 */
	playStartOfflineMode(): void;

	/**
	 * Native: STATS::_PLAYSTATS_STONE_HATCHET_END
	 *
	 * Hash: 0x35E39E5570358630 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35E39E5570358630)
	 */
	playStoneHatchetEnd(): integer;

	/**
	 * Native: STATS::_PLAYSTATS_STUNT_PERFORMED_EVENT_ALLOW_TRIGGER
	 *
	 * Hash: 0x928DBFB892638EF3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x928DBFB892638EF3)
	 */
	playStuntPerformedEventAllowTrigger(): void;

	/**
	 * Native: STATS::_PLAYSTATS_STUNT_PERFORMED_EVENT_DISALLOW_TRIGGER
	 *
	 * Hash: 0x8A800DACCC0DA55D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A800DACCC0DA55D)
	 */
	playStuntPerformedEventDisallowTrigger(): void;

	/**
	 * Native: STATS::_PLAYSTATS_SUB_WEAP
	 *
	 * Hash: 0xD4367D310F079DB0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4367D310F079DB0)
	 */
	playSubWeap(p0: integer, p1: integer, p2: integer, p3: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_VIP_POACH
	 *
	 * Hash: 0xAA525DFF66BB82F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA525DFF66BB82F5)
	 */
	playVipPoach(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: STATS::_PLAYSTATS_WAREHOUSE_MISSION_ENDED
	 *
	 * Hash: 0x2D7A9B577E72385E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2D7A9B577E72385E)
	 */
	playWarehouseMissionEnded(p0: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_WEAPON_MODE_CHANGE
	 *
	 * Hash: 0xE95C8A1875A02CA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE95C8A1875A02CA4)
	 */
	playWeaponModeChange(weaponHash: integer, componentHashTo: integer, componentHashFrom: integer): void;

	/**
	 * Native: STATS::PLAYSTATS_WEBSITE_VISITED
	 *
	 * Hash: 0xDDF24D535060F811 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDDF24D535060F811)
	 */
	playWebsiteVisited(scaleformHash: integer, p1: integer): void;

	/**
	 * Native: STATS::_SET_HAS_CONTENT_UNLOCKS_FLAGS
	 *
	 * Hash: 0xDAC073C7901F9E15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAC073C7901F9E15)
	 */
	setHasContentUnlocksFlags(value: integer): void;

	/**
	 * Native: STATS::SET_PROFILE_SETTING_PROLOGUE_COMPLETE
	 *
	 * Hash: 0xB475F27C6A994D65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB475F27C6A994D65)
	 */
	setProfileSettingPrologueComplete(): void;

	/**
	 * Native: STATS::_SET_SAVE_MIGRATION_TRANSACTION_ID
	 *
	 * Hash: 0xF6792800AC95350D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6792800AC95350D)
	 */
	setSaveMigrationTransactionId(transactionId: integer): void;

	/**
	 * Native: STATS::STAT_CLEAR_SLOT_FOR_RELOAD
	 *
	 * Hash: 0xEB0A72181D4AA4AD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB0A72181D4AA4AD)
	 */
	statClearSlotForReload(statSlot: integer): integer;

	/**
	 * Native: STATS::STAT_COMMUNITY_GET_HISTORY
	 *
	 * Hash: 0xBED9F5693F34ED17 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBED9F5693F34ED17)
	 */
	statCommunityGetHistory(statName: integer, p1: integer): number;

	/**
	 * Native: STATS::STAT_COMMUNITY_START_SYNCH
	 *
	 * Hash: 0x5A556B229A169402 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A556B229A169402)
	 */
	statCommunityStartSynch(): boolean;

	/**
	 * Native: STATS::STAT_COMMUNITY_SYNCH_IS_PENDING
	 *
	 * Hash: 0xB1D2BB1E1631F5B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB1D2BB1E1631F5B1)
	 */
	statCommunitySynchIsPending(): boolean;

	/**
	 * Native: STATS::STAT_DELETE_SLOT
	 *
	 * Hash: 0x49A49BED12794D70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x49A49BED12794D70)
	 */
	statDeleteSlot(p0: integer): integer;

	/**
	 * Native: STATS::STAT_GET_BOOL
	 *
	 * Hash: 0x11B5E6D2AE73F48E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11B5E6D2AE73F48E)
	 */
	statGetBool(statHash: integer, p2: integer): boolean;

	/**
	 * Native: STATS::STAT_GET_BOOL_MASKED
	 *
	 * Hash: 0x10FE3F1B79F9B071 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10FE3F1B79F9B071)
	 */
	statGetBoolMasked(statName: integer, mask: integer, p2: integer): boolean;

	/**
	 * Native: STATS::_STAT_GET_CANCEL_SAVE_MIGRATION_STATUS
	 *
	 * Hash: 0x567384DFA67029E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x567384DFA67029E6)
	 */
	statGetCancelSaveMigrationStatus(): integer;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_HIGHEST_SPEED
	 *
	 * Hash: 0x55A8BECAF28A4EB7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55A8BECAF28A4EB7)
	 */
	statGetChallengeHighestSpeed(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_LONGEST_FREEFALL
	 *
	 * Hash: 0xAFF47709F1D5DCCE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAFF47709F1D5DCCE)
	 */
	statGetChallengeLongestFreefall(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_LONGEST_JUMP
	 *
	 * Hash: 0x9EC8858184CD253A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EC8858184CD253A)
	 */
	statGetChallengeLongestJump(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_LONGEST_STOPPIE
	 *
	 * Hash: 0x84A810B375E69C0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84A810B375E69C0E)
	 */
	statGetChallengeLongestStoppie(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_LONGEST_WHEELIE
	 *
	 * Hash: 0xA943FD1722E11EFD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA943FD1722E11EFD)
	 */
	statGetChallengeLongestWheelie(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_LOW_FLYING
	 *
	 * Hash: 0x6E0A5253375C4584 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E0A5253375C4584)
	 */
	statGetChallengeLowFlying(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_NEAR_MISSES
	 *
	 * Hash: 0xE8853FBCE7D8D0D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8853FBCE7D8D0D6)
	 */
	statGetChallengeNearMisses(): integer;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_NO_CRASHES
	 *
	 * Hash: 0xBA9749CC94C1FD85 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA9749CC94C1FD85)
	 */
	statGetChallengeNoCrashes(): number;

	/**
	 * Native: STATS::_STAT_GET_CHALLENGE_REVERSE_DRIVING
	 *
	 * Hash: 0x32CAC93C9DE73D32 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32CAC93C9DE73D32)
	 */
	statGetChallengeReverseDriving(): number;

	/**
	 * Native: STATS::STAT_GET_DATE
	 *
	 * Hash: 0x8B0FACEFC36C824B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B0FACEFC36C824B)
	 */
	statGetDate(statHash: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: STATS::STAT_GET_FLOAT
	 *
	 * Hash: 0xD7AE6C9C9C6AC54C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7AE6C9C9C6AC54C)
	 */
	statGetFloat(statHash: integer, p2: integer): number;

	/**
	 * Native: STATS::_STAT_GET_HEIGHT_ABOVE_GROUND
	 *
	 * Hash: 0x1A8EA222F9C67DBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A8EA222F9C67DBB)
	 */
	statGetHeightAboveGround(): number;

	/**
	 * Native: STATS::STAT_GET_INT
	 *
	 * Hash: 0x767FBC2AC802EF3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x767FBC2AC802EF3D)
	 */
	statGetInt(statHash: integer, p2: integer): integer;

	/**
	 * Native: STATS::STAT_GET_LICENSE_PLATE
	 *
	 * Hash: 0x5473D4195058B2E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5473D4195058B2E4)
	 */
	statGetLicensePlate(statName: integer): string;

	/**
	 * Native: STATS::_STAT_GET_LONGEST_BAIL
	 *
	 * Hash: 0x0B8B7F74BF061C6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B8B7F74BF061C6D)
	 */
	statGetLongestBail(): number;

	/**
	 * Native: STATS::STAT_GET_MASKED_INT
	 *
	 * Hash: 0x655185A06D9EEAAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x655185A06D9EEAAB)
	 */
	statGetMaskedInt(p0: integer, p2: integer, p3: integer, p4: integer): integer;

	/**
	 * Native: STATS::STAT_GET_NUMBER_OF_DAYS
	 *
	 * Hash: 0xE0E854F5280FB769 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0E854F5280FB769)
	 */
	statGetNumberOfDays(statName: integer): integer;

	/**
	 * Native: STATS::STAT_GET_NUMBER_OF_HOURS
	 *
	 * Hash: 0xF2D4B2FE415AAFC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2D4B2FE415AAFC3)
	 */
	statGetNumberOfHours(statName: integer): integer;

	/**
	 * Native: STATS::STAT_GET_NUMBER_OF_MINUTES
	 *
	 * Hash: 0x7583B4BE4C5A41B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7583B4BE4C5A41B5)
	 */
	statGetNumberOfMinutes(statName: integer): integer;

	/**
	 * Native: STATS::STAT_GET_NUMBER_OF_SECONDS
	 *
	 * Hash: 0x2CE056FF3723F00B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CE056FF3723F00B)
	 */
	statGetNumberOfSeconds(statName: integer): integer;

	/**
	 * Native: STATS::_STAT_GET_PACKED_BOOL_MASK
	 *
	 * Hash: 0xF4D8E7AC2A27758C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF4D8E7AC2A27758C)
	 */
	statGetPackedBoolMask(p0: integer): integer;

	/**
	 * Native: STATS::_STAT_GET_PACKED_INT_MASK
	 *
	 * Hash: 0x94F12ABF9C79E339 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94F12ABF9C79E339)
	 */
	statGetPackedIntMask(p0: integer): integer;

	/**
	 * Native: STATS::STAT_GET_POS
	 *
	 * Hash: 0x350F82CCB186AA1B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x350F82CCB186AA1B)
	 */
	statGetPos(p0: integer, p4: integer): StatGetPosResult;

	/**
	 * Native: STATS::_STAT_GET_PROGRESS_OF_TRACKED_STAT
	 *
	 * Hash: 0xF11F01D98113536A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF11F01D98113536A)
	 */
	statGetProgressOfTrackedStat(): number;

	/**
	 * Native: STATS::_STAT_GET_SAVE_MIGRATION_CONSUME_CONTENT_UNLOCK_STATUS
	 *
	 * Hash: 0xCE5AA445ABA8DEE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE5AA445ABA8DEE0)
	 */
	statGetSaveMigrationConsumeContentUnlockStatus(): StatGetSaveMigrationConsumeContentUnlockStatusResult;

	/**
	 * Native: STATS::STAT_GET_SAVE_MIGRATION_STATUS
	 *
	 * Hash: 0x886913BBEACA68C1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x886913BBEACA68C1)
	 */
	statGetSaveMigrationStatus(): StatGetSaveMigrationStatusResult;

	/**
	 * Native: STATS::STAT_GET_STRING
	 *
	 * Hash: 0xE50384ACC2C3DB74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE50384ACC2C3DB74)
	 */
	statGetString(statHash: integer, p1: integer): string;

	/**
	 * Native: STATS::STAT_GET_USER_ID
	 *
	 * Hash: 0x2365C388E393BBE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2365C388E393BBE2)
	 */
	statGetUserId(p0: integer): string;

	/**
	 * Native: STATS::STAT_INCREMENT
	 *
	 * Hash: 0x9B5A68C6489E9909 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B5A68C6489E9909)
	 */
	statIncrement(statName: integer, value: number): void;

	/**
	 * Native: STATS::_STAT_IS_ABOVE_DEEP_WATER
	 *
	 * Hash: 0xF9F2922717B819EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9F2922717B819EC)
	 */
	statIsAboveDeepWater(): boolean;

	/**
	 * Native: STATS::_STAT_IS_TRACKING_ENABLED
	 *
	 * Hash: 0x8B9CDBD6C566C38C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B9CDBD6C566C38C)
	 */
	statIsTrackingEnabled(): boolean;

	/**
	 * Native: STATS::STAT_LOAD
	 *
	 * Hash: 0xA651443F437B1CE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA651443F437B1CE6)
	 */
	statLoad(p0: integer): boolean;

	/**
	 * Native: STATS::STAT_LOAD_PENDING
	 *
	 * Hash: 0xA1750FFAFA181661 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA1750FFAFA181661)
	 */
	statLoadPending(p0: integer): boolean;

	/**
	 * Native: STATS::_STAT_MANAGER_IS_MUTABLE
	 *
	 * Hash: 0xBE3DB208333D9844 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE3DB208333D9844)
	 */
	statManagerIsMutable(): boolean;

	/**
	 * Native: STATS::_STAT_MANAGER_SET_IMMUTABLE
	 *
	 * Hash: 0x629526ABA383BCAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x629526ABA383BCAA)
	 */
	statManagerSetImmutable(): void;

	/**
	 * Native: STATS::_STAT_MANAGER_SET_MUTABLE
	 *
	 * Hash: 0x98E2BC1CA26287C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98E2BC1CA26287C3)
	 */
	statManagerSetMutable(): void;

	/**
	 * Native: STATS::_STAT_MIGRATE_SAVE
	 *
	 * Hash: 0xA5C80D8E768A9E66 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5C80D8E768A9E66)
	 */
	statMigrateSave(platformName: string): boolean;

	/**
	 * Native: STATS::_STAT_TRACKING_CLEAR_PROGRESS
	 *
	 * Hash: 0xA761D4AC6115623D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA761D4AC6115623D)
	 */
	statTrackingClearProgress(): boolean;

	/**
	 * Native: STATS::_STAT_TRACKING_ENABLE
	 *
	 * Hash: 0x33D72899E24C3365 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33D72899E24C3365)
	 */
	statTrackingEnable(statType: integer, valueType: integer): integer;

	/**
	 * Native: STATS::_UPDATE_STAT_FLOAT
	 *
	 * Hash: 0x30A6614C1F7799B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x30A6614C1F7799B8)
	 */
	updateStatFloat(statHash: integer, value: number, p2: integer): void;

	/**
	 * Native: STATS::_UPDATE_STAT_INT
	 *
	 * Hash: 0x11FF1C80276097ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11FF1C80276097ED)
	 */
	updateStatInt(statHash: integer, value: integer, p2: integer): void;

	unk: GameStatsUnk;
}

interface GameStatsMp extends GameStats {}
