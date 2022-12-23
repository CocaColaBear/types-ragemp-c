/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetHudColourResult {
	r: integer;
	g: integer;
	b: integer;
	a: integer;
}

interface SetWarningMessageWithHeaderResult {
	showBackground: integer;
	p7: integer;
}

interface _0x632B2940C67F4EA9Result {
	p1: integer;
	p2: integer;
	p3: integer;
	result: boolean;
}

interface _0x817B86108EB94E51Result {
	p1: integer;
	p2: integer;
	p3: integer;
	p4: integer;
	p5: integer;
	p6: integer;
	p7: integer;
	p8: integer;
}

interface _0xA238192F33110615Result {
	r: integer;
	g: integer;
	b: integer;
	result: boolean;
}

interface _0xC8E1071177A23BE5Result {
	p0: integer;
	p1: integer;
	p2: integer;
	result: boolean;
}

interface EndTextCommandThefeedPostCrewtagResult {
	p2: integer;
	result: integer;
}

interface EndTextCommandThefeedPostCrewtagWithGameNameResult {
	p2: integer;
	result: integer;
}

interface EndTextCommandThefeedPostVersusTuResult {
	p0: integer;
	p1: integer;
	p3: integer;
	p4: integer;
	result: integer;
}

interface GetPauseMenuSelectionResult {
	lastItemMenuId: integer;
	selectedItemUniqueId: integer;
}

interface GetPauseMenuSelectionDataResult {
	lastItemMenuId: integer;
	selectedItemMenuId: integer;
	selectedItemUniqueId: integer;
}

interface GetHudScreenPositionFromWorldPositionResult {
	screenX: number;
	screenY: number;
	result: boolean;
}

interface SetWarningMessageWithHeaderUnkResult {
	p6: integer;
	p7: integer;
}

interface ThefeedAddTxdRefResult {
	p0: integer;
	p1: integer;
	p2: integer;
	p3: integer;
}

interface GameHudLegacy {
	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL
	 *
	 * Hash: 0xC63CD5D2920ACBE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC63CD5D2920ACBE7)
	 */
	addTextComponentItemString(labelName: string): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_FORMATTED_INTEGER
	 *
	 * Hash: 0x0E4C749FF9DE9CC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E4C749FF9DE9CC4)
	 */
	addTextComponentSubstringCash(value: integer, commaSeparated: boolean): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY
	 *
	 * Hash: 0x17299B63C7683A2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17299B63C7683A2B)
	 */
	addTextComponentSubstringLocalized(gxtEntryHash: integer): void;

	/**
	 * Native: HUD::IS_MP_GAMER_TAG_FREE
	 *
	 * Hash: 0x595B5178E412E199 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x595B5178E412E199)
	 */
	addTrevorRandomModifier(gamerTagId: integer): boolean;

	/**
	 * Native: HUD::END_TEXT_COMMAND_DISPLAY_HELP
	 *
	 * Hash: 0x238FFE5C7B0498A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x238FFE5C7B0498A6)
	 */
	displayHelpTextFromStringLabel(p0: integer, loop: boolean, beep: boolean, shape: integer): void;

	/**
	 * Native: HUD::DISPLAY_HUD
	 *
	 * Hash: 0xA6294919E56FF02A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6294919E56FF02A)
	 */
	displayHud(toggle: boolean): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_TICKER
	 *
	 * Hash: 0x2ED7843F8F801023 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2ED7843F8F801023)
	 */
	drawNotification(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_TICKER_FORCED
	 *
	 * Hash: 0x44FA03975424A0EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44FA03975424A0EE)
	 */
	drawNotification2(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_TICKER_WITH_TOKENS
	 *
	 * Hash: 0x378E809BF61EC840 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x378E809BF61EC840)
	 */
	drawNotification3(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MPTICKER
	 *
	 * Hash: 0xF020C96915705B3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF020C96915705B3A)
	 */
	drawNotification4(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_PRINT
	 *
	 * Hash: 0x9D77056A530643F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D77056A530643F6)
	 */
	drawSubtitleTimed(duration: integer, drawImmediately: boolean): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_DISPLAY_TEXT
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0xCD015E5BB0D96A57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD015E5BB0D96A57)
	 */
	drawText(x: number, y: number, p2?: integer): void;

	/**
	 * Native: HUD::_0x4895BDEA16E7C080
	 *
	 * Hash: 0x4895BDEA16E7C080 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4895BDEA16E7C080)
	 */
	enableDeathbloodSeethrough(p0: integer): void;

	/**
	 * Native: GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING
	 *
	 * Hash: 0x362E2D3FE93A9959 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x362E2D3FE93A9959)
	 */
	endTextComponent(): void;

	/**
	 * Native: HUD::GET_HUD_COLOUR
	 *
	 * Hash: 0x7C9C91AB74A0360F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C9C91AB74A0360F)
	 */
	getHudColour(hudColorIndex: integer): GetHudColourResult;

	/**
	 * Native: HUD::GET_HUD_COMPONENT_POSITION
	 *
	 * Hash: 0x223CA69A8C4417FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x223CA69A8C4417FD)
	 */
	getHudComponentPosition(id: integer): Vector3Mp;

	/**
	 * Native: HUD::GET_RENDERED_CHARACTER_HEIGHT
	 *
	 * Hash: 0xDB88A37483346780 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB88A37483346780)
	 */
	getTextScaleHeight(size: number, font: integer): number;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_GET_WIDTH
	 *
	 * Hash: 0x85F061DA64ED2F67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85F061DA64ED2F67)
	 */
	getTextScreenWidth(p0: boolean): number;

	/**
	 * Native: HUD::IS_MP_GAMER_TAG_ACTIVE
	 *
	 * Hash: 0x4E929E7A5796FD26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E929E7A5796FD26)
	 */
	hasHeadDisplayLoaded(gamerTagId: integer): boolean;

	/**
	 * Native: HUD::HIDE_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0x6806C51AD12B83B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6806C51AD12B83B8)
	 */
	hideHudComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::HIDE_SCRIPTED_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0xE374C498D8BADC14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE374C498D8BADC14)
	 */
	hideScriptedHudComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::SET_PED_AI_BLIP_HAS_CONE
	 *
	 * Hash: 0x3EED80DFF7325CAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EED80DFF7325CAA)
	 */
	hideSpecialAbilityLockonOperation(ped: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::IS_HUD_COMPONENT_ACTIVE
	 *
	 * Hash: 0xBC4C9EA5391ECC0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC4C9EA5391ECC0D)
	 */
	isHudComponentActive(id: integer): boolean;

	/**
	 * Native: HUD::GET_MINIMAP_FOW_COORDINATE_IS_REVEALED
	 *
	 * Hash: 0x6E31B91145873922 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E31B91145873922)
	 */
	isMinimapAreaRevealed(x: number, y: number, z: number): boolean;

	/**
	 * Native: HUD::IS_SCRIPTED_HUD_COMPONENT_ACTIVE
	 *
	 * Hash: 0xDD100EB17A94FF65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD100EB17A94FF65)
	 */
	isScriptedHudComponentActive(id: integer): boolean;

	/**
	 * Native: HUD::SET_MINIMAP_IN_SPECTATOR_MODE
	 *
	 * Hash: 0x1A5CD7752DD28CD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A5CD7752DD28CD3)
	 */
	keyHudColour(toggle: boolean, ped: Handle): void;

	/**
	 * Native: HUD::PAUSE_MENU_DEACTIVATE_CONTEXT
	 *
	 * Hash: 0x444D8CF241EC25C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x444D8CF241EC25C5)
	 */
	objectDecalToggle(contextHash: integer): void;

	/**
	 * Native: HUD::THEFEED_REMOVE_ITEM
	 *
	 * Hash: 0xBE4390CB40B3E627 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE4390CB40B3E627)
	 */
	removeNotification(notificationId: integer): void;

	/**
	 * Native: HUD::REQUEST_ADDITIONAL_TEXT_FOR_DLC
	 *
	 * Hash: 0x6009F9F1AE90D8A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6009F9F1AE90D8A6)
	 */
	requestAdditionalText2(gxt: string, slot: integer): void;

	/**
	 * Native: HUD::RESET_HUD_COMPONENT_VALUES
	 *
	 * Hash: 0x450930E616475D0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x450930E616475D0D)
	 */
	resetHudComponentValues(id: integer): void;

	/**
	 * Native: HUD::SET_RADAR_ZOOM_PRECISE
	 *
	 * Hash: 0xBD12C5EEE184C337 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD12C5EEE184C337)
	 */
	respondingAsTemp(zoom: number): void;

	/**
	 * Native: HUD::_SET_MOUSE_CURSOR_SPRITE
	 *
	 * Hash: 0x8DB8CFFD58B62552 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DB8CFFD58B62552)
	 */
	setCursorSprite(spriteId: integer): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_VISIBILITY
	 *
	 * p3 defaults to 0
	 *
	 * Hash: 0x63BB75ABEDC1F6A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63BB75ABEDC1F6A0)
	 */
	setHeadDisplayFlag(gamerTagId: integer, component: integer, toggle: boolean, p3?: integer): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_NAME
	 *
	 * Hash: 0xDEA2B8283BAA3944 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEA2B8283BAA3944)
	 */
	setHeadDisplayString(gamerTagId: integer, string: string): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_WANTED_LEVEL
	 *
	 * Hash: 0xCF228E2AA03099C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF228E2AA03099C3)
	 */
	setHeadDisplayWanted(gamerTagId: integer, wantedlvl: integer): void;

	/**
	 * Native: HUD::REPLACE_HUD_COLOUR_WITH_RGBA
	 *
	 * Hash: 0xF314CF4F0211894E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF314CF4F0211894E)
	 */
	setHudColour(hudColorIndex: integer, r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::SET_HUD_COMPONENT_POSITION
	 *
	 * Hash: 0xAABB1F56E2A17CED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAABB1F56E2A17CED)
	 */
	setHudComponentPosition(id: integer, x: number, y: number): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_BUSYSPINNER_ON
	 *
	 * Hash: 0xABA17D7CE615ADBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xABA17D7CE615ADBF)
	 */
	setLoadingPromptTextEntry(string: string): void;

	/**
	 * Native: HUD::_SET_MINIMAP_ALTITUDE_INDICATOR_LEVEL
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0xD201F3FF917A506D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD201F3FF917A506D)
	 */
	setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean, p2?: integer): void;

	/**
	 * Native: HUD::SET_MINIMAP_HIDE_FOW
	 *
	 * Hash: 0xF8DEE0A5600CBB93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8DEE0A5600CBB93)
	 */
	setMinimapRevealed(toggle: boolean): void;

	/**
	 * Native: HUD::SET_MINIMAP_IN_PROLOGUE
	 *
	 * Hash: 0x9133955F1A2DA957 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9133955F1A2DA957)
	 */
	setMinimapVisible(toggle: boolean): void;

	/**
	 * Native: HUD::SET_MULTIPLAYER_HUD_CASH
	 *
	 * Hash: 0xFD1D220394BCB824 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD1D220394BCB824)
	 */
	setMultiplayerHudCash(p0: integer, p1: integer): void;

	/**
	 * Native: HUD::_THEFEED_SET_ANIMPOSTFX_COLOR
	 *
	 * Hash: 0x17430B918701C342 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17430B918701C342)
	 */
	setNotificationFlashColor(red: integer, green: integer, blue: integer, alpha: integer): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT
	 *
	 * Hash: 0x1CCD9A37359072CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CCD9A37359072CF)
	 */
	setNotificationMessage(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: integer,
		sender: string,
		subject: string
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_WITH_CREW_TAG
	 *
	 * Hash: 0x5CBF7BADE20DB93E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CBF7BADE20DB93E)
	 */
	setNotificationMessageClanTag(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: integer,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_WITH_CREW_TAG_AND_ADDITIONAL_ICON
	 *
	 * Hash: 0x531B84E7DA981FB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x531B84E7DA981FB6)
	 */
	setNotificationMessageClanTag2(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType1: integer,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string,
		iconType2: integer,
		p9: integer
	): integer;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_THEFEED_POST
	 *
	 * Hash: 0x202709F4C58A0424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x202709F4C58A0424)
	 */
	setNotificationTextEntry(text: string): void;

	/**
	 * Native: HUD::SET_BIGMAP_ACTIVE
	 *
	 * Hash: 0x231C8F89D0539D8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x231C8F89D0539D8F)
	 */
	setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;

	/**
	 * Native: HUD::SET_RADAR_ZOOM_TO_DISTANCE
	 *
	 * Hash: 0xCB7CC0D58405AD41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB7CC0D58405AD41)
	 */
	setRadarZoomLevelThisFrame(zoom: number): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_DISPLAY_HELP
	 *
	 * Hash: 0x8509B634FBE7DA11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8509B634FBE7DA11)
	 */
	setTextComponentFormat(inputType: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_DISPLAY_TEXT
	 *
	 * Hash: 0x25FBB336DF1804CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25FBB336DF1804CB)
	 */
	setTextEntry(text: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_PRINT
	 *
	 * Hash: 0xB87A37EEB7FAA67D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB87A37EEB7FAA67D)
	 */
	setTextEntry2(GxtEntry: string): void;

	/**
	 * Native: HUD::_BEGIN_TEXT_COMMAND_GET_WIDTH
	 *
	 * Hash: 0x54CE8AC98E120CAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54CE8AC98E120CAB)
	 */
	setTextEntryForWidth(text: string): void;

	/**
	 * Native: HUD::_BEGIN_TEXT_COMMAND_LINE_COUNT
	 *
	 * Hash: 0x521FB041D93DD0E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x521FB041D93DD0E4)
	 */
	setTextGxtEntry(entry: string): void;

	/**
	 * Native: HUD::GET_MENU_PED_INT_STAT
	 *
	 * Hash: 0xEF4CED81CEBEDC6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF4CED81CEBEDC6D)
	 */
	setUseridsUihidden(p0: integer): integer;

	/**
	 * Native: HUD::SET_WARNING_MESSAGE_WITH_HEADER
	 *
	 * p9 defaults to 0
	 *
	 * Hash: 0xDC38CC1E35B6A5D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC38CC1E35B6A5D7)
	 */
	setWarningMessage2(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: integer,
		entryLine2: string,
		p4: boolean,
		p5: integer,
		p8: boolean,
		p9?: integer
	): SetWarningMessageWithHeaderResult;

	/**
	 * Native: HUD::SET_WARNING_MESSAGE_WITH_HEADER_AND_SUBSTRING_FLAGS
	 *
	 * errorCode defaults to 0
	 *
	 * Hash: 0x701919482C74B5AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x701919482C74B5AB)
	 */
	setWarningMessage3(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: integer,
		entryLine2: string,
		p4: boolean,
		p5: integer,
		additionalIntInfo: integer,
		additionalTextInfoLine1: string,
		additionalTextInfoLine2: string,
		showBackground: boolean,
		errorCode?: integer
	): void;

	/**
	 * Native: HUD::SHOW_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0x0B4DF1FA60C0E664 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B4DF1FA60C0E664)
	 */
	showHudComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_BUSYSPINNER_ON
	 *
	 * Hash: 0xBD12F8228410D9B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD12F8228410D9B4)
	 */
	showLoadingPrompt(busySpinnerType: integer): void;

	/**
	 * Native: HUD::HUD_FORCE_WEAPON_WHEEL
	 *
	 * Hash: 0xEB354E5376BC81A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB354E5376BC81A7)
	 */
	showWeaponWheel(show: boolean): void;
}

interface GameHudUnk {
	/**
	 * Native: HUD::_0x04655F9D075D0AE5
	 *
	 * Hash: 0x04655F9D075D0AE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x04655F9D075D0AE5)
	 */
	_0x04655F9D075D0AE5(toggle: boolean): void;

	/**
	 * Native: HUD::_0x0C698D8F099174C7
	 *
	 * Hash: 0x0C698D8F099174C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C698D8F099174C7)
	 */
	_0x0C698D8F099174C7(p0: integer): void;

	/**
	 * Native: HUD::_0x0CF54F20DE43879C
	 *
	 * Hash: 0x0CF54F20DE43879C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CF54F20DE43879C)
	 */
	_0x0CF54F20DE43879C(p0: integer): void;

	/**
	 * Native: HUD::_0x1185A8087587322C
	 *
	 * Hash: 0x1185A8087587322C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1185A8087587322C)
	 */
	_0x1185A8087587322C(p0: boolean): void;

	/**
	 * Native: HUD::_0x13C4B962653A5280
	 *
	 * Hash: 0x13C4B962653A5280 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13C4B962653A5280)
	 */
	_0x13C4B962653A5280(): integer;

	/**
	 * Native: HUD::_0x170F541E1CADD1DE
	 *
	 * Hash: 0x170F541E1CADD1DE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x170F541E1CADD1DE)
	 */
	_0x170F541E1CADD1DE(p0: boolean): void;

	/**
	 * Native: HUD::_0x211C4EF450086857
	 *
	 * Hash: 0x211C4EF450086857 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x211C4EF450086857)
	 */
	_0x211C4EF450086857(): void;

	/**
	 * Native: HUD::_0x214CD562A939246A
	 *
	 * Hash: 0x214CD562A939246A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x214CD562A939246A)
	 */
	_0x214CD562A939246A(): boolean;

	/**
	 * Native: HUD::_0x243296A510B562B6
	 *
	 * Hash: 0x243296A510B562B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x243296A510B562B6)
	 */
	_0x243296A510B562B6(): void;

	/**
	 * Native: HUD::_0x24A49BEAF468DC90
	 *
	 * Hash: 0x24A49BEAF468DC90 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24A49BEAF468DC90)
	 */
	_0x24A49BEAF468DC90(p0: integer, p2: integer, p3: integer, p4: integer): integer;

	/**
	 * Native: HUD::_0x2790F4B17D098E26
	 *
	 * Hash: 0x2790F4B17D098E26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2790F4B17D098E26)
	 */
	_0x2790F4B17D098E26(toggle: boolean): void;

	/**
	 * Native: HUD::_0x2916A928514C9827
	 *
	 * Hash: 0x2916A928514C9827 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2916A928514C9827)
	 */
	_0x2916A928514C9827(): void;

	/**
	 * Native: HUD::_0x2C9F302398E13141
	 *
	 * Hash: 0x2C9F302398E13141 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C9F302398E13141)
	 */
	_0x2C9F302398E13141(p0: integer, p1: integer): void;

	/**
	 * Native: HUD::_0x2DE6C5E2E996F178
	 *
	 * Hash: 0x2DE6C5E2E996F178 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2DE6C5E2E996F178)
	 */
	_0x2DE6C5E2E996F178(p0: integer): void;

	/**
	 * Native: HUD::_0x2E22FEFA0100275E
	 *
	 * Hash: 0x2E22FEFA0100275E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E22FEFA0100275E)
	 */
	_0x2E22FEFA0100275E(): boolean;

	/**
	 * Native: HUD::_0x2F057596F2BD0061
	 *
	 * Hash: 0x2F057596F2BD0061 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F057596F2BD0061)
	 */
	_0x2F057596F2BD0061(): boolean;

	/**
	 * Native: HUD::_0x359AF31A4B52F5ED
	 *
	 * Hash: 0x359AF31A4B52F5ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x359AF31A4B52F5ED)
	 */
	_0x359AF31A4B52F5ED(): integer;

	/**
	 * Native: HUD::_0x35A3CD97B2C0A6D2
	 *
	 * Hash: 0x35A3CD97B2C0A6D2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35A3CD97B2C0A6D2)
	 */
	_0x35A3CD97B2C0A6D2(blip: Handle): void;

	/**
	 * Native: HUD::_0x3D9ACB1EB139E702
	 *
	 * Hash: 0x3D9ACB1EB139E702 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D9ACB1EB139E702)
	 */
	_0x3D9ACB1EB139E702(): integer;

	/**
	 * Native: HUD::_0x41350B4FC28E3941
	 *
	 * Hash: 0x41350B4FC28E3941 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x41350B4FC28E3941)
	 */
	_0x41350B4FC28E3941(p0: boolean): void;

	/**
	 * Native: HUD::_0x4895BDEA16E7C080
	 *
	 * Hash: 0x4895BDEA16E7C080 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4895BDEA16E7C080)
	 */
	_0x4895BDEA16E7C080(p0: integer): void;

	/**
	 * Native: HUD::_0x4B5B620C9B59ED34
	 *
	 * Hash: 0x4B5B620C9B59ED34 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B5B620C9B59ED34)
	 */
	_0x4B5B620C9B59ED34(p0: integer, p1: integer): void;

	/**
	 * Native: HUD::_0x55F5A5F07134DE60
	 *
	 * Hash: 0x55F5A5F07134DE60 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55F5A5F07134DE60)
	 */
	_0x55F5A5F07134DE60(): void;

	/**
	 * Native: HUD::_0x577599CCED639CA2
	 *
	 * Hash: 0x577599CCED639CA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x577599CCED639CA2)
	 */
	_0x577599CCED639CA2(p0: integer): void;

	/**
	 * Native: HUD::_0x57D760D55F54E071
	 *
	 * Hash: 0x57D760D55F54E071 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57D760D55F54E071)
	 */
	_0x57D760D55F54E071(p0: integer): void;

	/**
	 * Native: HUD::_0x593FEAE1F73392D4
	 *
	 * Hash: 0x593FEAE1F73392D4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x593FEAE1F73392D4)
	 */
	_0x593FEAE1F73392D4(): integer;

	/**
	 * Native: HUD::_0x5BFF36D6ED83E0AE
	 *
	 * Hash: 0x5BFF36D6ED83E0AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5BFF36D6ED83E0AE)
	 */
	_0x5BFF36D6ED83E0AE(): Vector3Mp;

	/**
	 * Native: HUD::_0x62E849B7EB28E770
	 *
	 * Hash: 0x62E849B7EB28E770 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x62E849B7EB28E770)
	 */
	_0x62E849B7EB28E770(p0: boolean): void;

	/**
	 * Native: HUD::_0x632B2940C67F4EA9
	 *
	 * Hash: 0x632B2940C67F4EA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x632B2940C67F4EA9)
	 */
	_0x632B2940C67F4EA9(scaleformHandle: integer): _0x632B2940C67F4EA9Result;

	/**
	 * Native: HUD::_0x66E7CB63C97B7D20
	 *
	 * Hash: 0x66E7CB63C97B7D20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66E7CB63C97B7D20)
	 */
	_0x66E7CB63C97B7D20(): boolean;

	/**
	 * Native: HUD::_0x6CDD58146A436083
	 *
	 * Hash: 0x6CDD58146A436083 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CDD58146A436083)
	 */
	_0x6CDD58146A436083(p0: integer): void;

	/**
	 * Native: HUD::_0x77F16B447824DA6C
	 *
	 * Hash: 0x77F16B447824DA6C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77F16B447824DA6C)
	 */
	_0x77F16B447824DA6C(p0: integer): void;

	/**
	 * Native: HUD::_0x7C226D5346D4D10A
	 *
	 * Hash: 0x7C226D5346D4D10A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C226D5346D4D10A)
	 */
	_0x7C226D5346D4D10A(p0: integer): void;

	/**
	 * Native: HUD::_0x801879A9B4F4B2FB
	 *
	 * Hash: 0x801879A9B4F4B2FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x801879A9B4F4B2FB)
	 */
	_0x801879A9B4F4B2FB(): boolean;

	/**
	 * Native: HUD::_0x817B86108EB94E51
	 *
	 * Hash: 0x817B86108EB94E51 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x817B86108EB94E51)
	 */
	_0x817B86108EB94E51(p0: boolean): _0x817B86108EB94E51Result;

	/**
	 * Native: HUD::_0x8410C5E0CD847B9D
	 *
	 * Hash: 0x8410C5E0CD847B9D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8410C5E0CD847B9D)
	 */
	_0x8410C5E0CD847B9D(): void;

	/**
	 * Native: HUD::_0x8F08017F9D7C47BD
	 *
	 * Hash: 0x8F08017F9D7C47BD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F08017F9D7C47BD)
	 */
	_0x8F08017F9D7C47BD(p0: integer, p2: integer): integer;

	/**
	 * Native: HUD::_0x9245E81072704B8A
	 *
	 * Hash: 0x9245E81072704B8A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9245E81072704B8A)
	 */
	_0x9245E81072704B8A(p0: boolean): void;

	/**
	 * Native: HUD::_0x98C3CF913D895111
	 *
	 * Hash: 0x98C3CF913D895111 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98C3CF913D895111)
	 */
	_0x98C3CF913D895111(string: string, length: integer): string;

	/**
	 * Native: HUD::_0x9FCB3CBFB3EAD69A
	 *
	 * Hash: 0x9FCB3CBFB3EAD69A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FCB3CBFB3EAD69A)
	 */
	_0x9FCB3CBFB3EAD69A(p0: integer, p1: number): void;

	/**
	 * Native: HUD::_0xA17784FCA9548D15
	 *
	 * Hash: 0xA17784FCA9548D15 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA17784FCA9548D15)
	 */
	_0xA17784FCA9548D15(p0: integer, p1: integer, p2: integer): void;

	/**
	 * Native: HUD::_0xA238192F33110615
	 *
	 * Hash: 0xA238192F33110615 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA238192F33110615)
	 */
	_0xA238192F33110615(): _0xA238192F33110615Result;

	/**
	 * Native: HUD::_0xB552929B85FC27EC
	 *
	 * Hash: 0xB552929B85FC27EC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB552929B85FC27EC)
	 */
	_0xB552929B85FC27EC(p0: integer, p1: integer): void;

	/**
	 * Native: HUD::_0xB7B873520C84C118
	 *
	 * Hash: 0xB7B873520C84C118 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB7B873520C84C118)
	 */
	_0xB7B873520C84C118(): void;

	/**
	 * Native: HUD::_0xBA8D65C1C65702E5
	 *
	 * Hash: 0xBA8D65C1C65702E5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA8D65C1C65702E5)
	 */
	_0xBA8D65C1C65702E5(toggle: boolean): void;

	/**
	 * Native: HUD::_0xBF4F34A85CA2970C
	 *
	 * Hash: 0xBF4F34A85CA2970C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBF4F34A85CA2970C)
	 */
	_0xBF4F34A85CA2970C(): void;

	/**
	 * Native: HUD::_0xC2D2AD9EAAE265B8
	 *
	 * Hash: 0xC2D2AD9EAAE265B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2D2AD9EAAE265B8)
	 */
	_0xC2D2AD9EAAE265B8(): boolean;

	/**
	 * Native: HUD::_0xC594B315EDF2D4AF
	 *
	 * Hash: 0xC594B315EDF2D4AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC594B315EDF2D4AF)
	 */
	_0xC594B315EDF2D4AF(ped: Handle): void;

	/**
	 * Native: HUD::_0xC8E1071177A23BE5
	 *
	 * Hash: 0xC8E1071177A23BE5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8E1071177A23BE5)
	 */
	_0xC8E1071177A23BE5(): _0xC8E1071177A23BE5Result;

	/**
	 * Native: HUD::_0xCA6B2F7CE32AB653
	 *
	 * Hash: 0xCA6B2F7CE32AB653 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCA6B2F7CE32AB653)
	 */
	_0xCA6B2F7CE32AB653(p0: integer, p2: integer): integer;

	/**
	 * Native: HUD::_0xCD74233600C4EA6B
	 *
	 * Hash: 0xCD74233600C4EA6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD74233600C4EA6B)
	 */
	_0xCD74233600C4EA6B(toggle: boolean): void;

	/**
	 * Native: HUD::_0xCDCA26E80FAECB8F
	 *
	 * Hash: 0xCDCA26E80FAECB8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCDCA26E80FAECB8F)
	 */
	_0xCDCA26E80FAECB8F(): void;

	/**
	 * Native: HUD::_0xD1942374085C8469
	 *
	 * Hash: 0xD1942374085C8469 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD1942374085C8469)
	 */
	_0xD1942374085C8469(disabled: boolean): void;

	/**
	 * Native: HUD::_0xD2049635DEB9C375
	 *
	 * Hash: 0xD2049635DEB9C375 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2049635DEB9C375)
	 */
	_0xD2049635DEB9C375(): void;

	/**
	 * Native: HUD::_0xDAF87174BE7454FF
	 *
	 * Hash: 0xDAF87174BE7454FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAF87174BE7454FF)
	 */
	_0xDAF87174BE7454FF(p0: integer): boolean;

	/**
	 * Native: HUD::_0xDE03620F8703A9DF
	 *
	 * Hash: 0xDE03620F8703A9DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDE03620F8703A9DF)
	 */
	_0xDE03620F8703A9DF(): integer;

	/**
	 * Native: HUD::_0xE4C3B169876D33D7
	 *
	 * Hash: 0xE4C3B169876D33D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE4C3B169876D33D7)
	 */
	_0xE4C3B169876D33D7(p0: integer): void;

	/**
	 * Native: HUD::_0xE67C6DFD386EA5E7
	 *
	 * Hash: 0xE67C6DFD386EA5E7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE67C6DFD386EA5E7)
	 */
	_0xE67C6DFD386EA5E7(p0: boolean): void;

	/**
	 * Native: HUD::_0xEB81A3DADD503187
	 *
	 * Hash: 0xEB81A3DADD503187 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB81A3DADD503187)
	 */
	_0xEB81A3DADD503187(): void;

	/**
	 * Native: HUD::_0xF06EBB91A81E09E3
	 *
	 * Hash: 0xF06EBB91A81E09E3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF06EBB91A81E09E3)
	 */
	_0xF06EBB91A81E09E3(p0: boolean): void;

	/**
	 * Native: HUD::_0xF13FE2A80C05C561
	 *
	 * Hash: 0xF13FE2A80C05C561 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF13FE2A80C05C561)
	 */
	_0xF13FE2A80C05C561(): boolean;

	/**
	 * Native: HUD::_0xF284AC67940C6812
	 *
	 * Hash: 0xF284AC67940C6812 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF284AC67940C6812)
	 */
	_0xF284AC67940C6812(): boolean;

	/**
	 * Native: HUD::_0xF83D0FEBE75E62C9
	 *
	 * Hash: 0xF83D0FEBE75E62C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF83D0FEBE75E62C9)
	 */
	_0xF83D0FEBE75E62C9(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer,
		p6: integer,
		p7: integer,
		p8: integer
	): void;
}

interface GameHud extends GameHudLegacy {
	/**
	 * Native: HUD::ACTIVATE_FRONTEND_MENU
	 *
	 * Hash: 0xEF01D36B9C9D0C7B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF01D36B9C9D0C7B)
	 */
	activateFrontendMenu(menuhash: integer, togglePause: boolean, component: integer): void;

	/**
	 * Native: HUD::_ADD_BLIP_FOR_AREA
	 *
	 * Hash: 0xCE5D0E5E315DB238 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE5D0E5E315DB238)
	 */
	addBlipForArea(x: number, y: number, z: number, width: number, height: number): Handle;

	/**
	 * Native: HUD::ADD_BLIP_FOR_COORD
	 *
	 * Hash: 0x5A039BB0BCA604B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5A039BB0BCA604B6)
	 */
	addBlipForCoord(x: number, y: number, z: number): Handle;

	/**
	 * Native: HUD::ADD_BLIP_FOR_ENTITY
	 *
	 * Hash: 0x5CDE92C702A8FCE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CDE92C702A8FCE7)
	 */
	addBlipForEntity(entity: Handle): Handle;

	/**
	 * Native: HUD::ADD_BLIP_FOR_PICKUP
	 *
	 * Hash: 0xBE339365C863BD36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE339365C863BD36)
	 */
	addBlipForPickup(pickup: Handle): Handle;

	/**
	 * Native: HUD::ADD_BLIP_FOR_RADIUS
	 *
	 * Hash: 0x46818D79B1F7499A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46818D79B1F7499A)
	 */
	addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): Handle;

	/**
	 * Native: HUD::ADD_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS
	 *
	 * Hash: 0x60296AF4BA14ABC5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60296AF4BA14ABC5)
	 */
	addNextMessageToPreviousBriefs(p0: boolean): void;

	/**
	 * Native: HUD::ADD_POINT_TO_GPS_CUSTOM_ROUTE
	 *
	 * Hash: 0x311438A071DD9B1A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x311438A071DD9B1A)
	 */
	addPointToGpsCustomRoute(x: number, y: number, z: number): void;

	/**
	 * Native: HUD::ADD_POINT_TO_GPS_MULTI_ROUTE
	 *
	 * Hash: 0xA905192A6781C41B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA905192A6781C41B)
	 */
	addPointToGpsMultiRoute(x: number, y: number, z: number): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_FLOAT
	 *
	 * Hash: 0xE7DCB5B874BCD96E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7DCB5B874BCD96E)
	 */
	addTextComponentFloat(value: number, decimalPlaces: integer): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_FORMATTED_INTEGER
	 *
	 * Hash: 0x0E4C749FF9DE9CC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0E4C749FF9DE9CC4)
	 */
	addTextComponentFormattedInteger(value: integer, commaSeparated: boolean): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_INTEGER
	 *
	 * Hash: 0x03B504CF259931BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03B504CF259931BC)
	 */
	addTextComponentInteger(value: integer): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_BLIP_NAME
	 *
	 * Hash: 0x80EAD8E2E1D5D52E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80EAD8E2E1D5D52E)
	 */
	addTextComponentSubstringBlipName(blip: Handle): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_KEYBOARD_DISPLAY
	 *
	 * Hash: 0x5F68520888E69014 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F68520888E69014)
	 */
	addTextComponentSubstringKeyboardDisplay(string: string): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_PHONE_NUMBER
	 *
	 * Hash: 0x761B77454205A61D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x761B77454205A61D)
	 */
	addTextComponentSubstringPhoneNumber(p0: string, p1: integer): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME
	 *
	 * Hash: 0x6C188BE134E074AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6C188BE134E074AA)
	 */
	addTextComponentSubstringPlayerName(text: string): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL
	 *
	 * Hash: 0xC63CD5D2920ACBE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC63CD5D2920ACBE7)
	 */
	addTextComponentSubstringTextLabel(labelName: string): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY
	 *
	 * Hash: 0x17299B63C7683A2B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17299B63C7683A2B)
	 */
	addTextComponentSubstringTextLabelHashKey(gxtEntryHash: integer): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_TIME
	 *
	 * Hash: 0x1115F16B8AB9E8BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1115F16B8AB9E8BF)
	 */
	addTextComponentSubstringTime(timestamp: integer, flags: integer): void;

	/**
	 * Native: HUD::ADD_TEXT_COMPONENT_SUBSTRING_WEBSITE
	 *
	 * Hash: 0x94CF4AC034C9C986 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x94CF4AC034C9C986)
	 */
	addTextComponentSubstringWebsite(website: string): void;

	/**
	 * Native: HUD::_ALLOW_PAUSE_MENU_WHEN_DEAD_THIS_FRAME
	 *
	 * Hash: 0xCC3FDDED67BCFC63 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC3FDDED67BCFC63)
	 */
	allowPauseMenuWhenDeadThisFrame(): void;

	/**
	 * Native: HUD::ALLOW_SONAR_BLIPS
	 *
	 * Hash: 0x60734CC207C9833C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60734CC207C9833C)
	 */
	allowSonarBlips(toggle: boolean): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_BUSYSPINNER_ON
	 *
	 * Hash: 0xABA17D7CE615ADBF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xABA17D7CE615ADBF)
	 */
	beginTextCommandBusyspinnerOn(string: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_CLEAR_PRINT
	 *
	 * Hash: 0xE124FA80A759019C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE124FA80A759019C)
	 */
	beginTextCommandClearPrint(text: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_DISPLAY_HELP
	 *
	 * Hash: 0x8509B634FBE7DA11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8509B634FBE7DA11)
	 */
	beginTextCommandDisplayHelp(inputType: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_DISPLAY_TEXT
	 *
	 * Hash: 0x25FBB336DF1804CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25FBB336DF1804CB)
	 */
	beginTextCommandDisplayText(text: string): void;

	/**
	 * Native: HUD::_BEGIN_TEXT_COMMAND_GET_WIDTH
	 *
	 * Hash: 0x54CE8AC98E120CAB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54CE8AC98E120CAB)
	 */
	beginTextCommandGetWidth(text: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED
	 *
	 * Hash: 0x853648FD1063A213 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x853648FD1063A213)
	 */
	beginTextCommandIsMessageDisplayed(text: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED
	 *
	 * Hash: 0x0A24DA3A41B718F5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0A24DA3A41B718F5)
	 */
	beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;

	/**
	 * Native: HUD::_BEGIN_TEXT_COMMAND_LINE_COUNT
	 *
	 * Hash: 0x521FB041D93DD0E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x521FB041D93DD0E4)
	 */
	beginTextCommandLineCount(entry: string): void;

	/**
	 * Native: HUD::_BEGIN_TEXT_COMMAND_OBJECTIVE
	 *
	 * Hash: 0x23D69E0465570028 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23D69E0465570028)
	 */
	beginTextCommandObjective(p0: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_OVERRIDE_BUTTON_TEXT
	 *
	 * Hash: 0x8F9EE5687F8EECCD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F9EE5687F8EECCD)
	 */
	beginTextCommandOverrideButtonText(gxtEntry: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_PRINT
	 *
	 * Hash: 0xB87A37EEB7FAA67D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB87A37EEB7FAA67D)
	 */
	beginTextCommandPrint(GxtEntry: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_SET_BLIP_NAME
	 *
	 * Hash: 0xF9113A30DE5C6670 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9113A30DE5C6670)
	 */
	beginTextCommandSetBlipName(textLabel: string): void;

	/**
	 * Native: HUD::BEGIN_TEXT_COMMAND_THEFEED_POST
	 *
	 * Hash: 0x202709F4C58A0424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x202709F4C58A0424)
	 */
	beginTextCommandThefeedPost(text: string): void;

	/**
	 * Native: HUD::BUSYSPINNER_IS_DISPLAYING
	 *
	 * Hash: 0xB2A592B04648A9CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2A592B04648A9CB)
	 */
	busyspinnerIsDisplaying(): boolean;

	/**
	 * Native: HUD::BUSYSPINNER_IS_ON
	 *
	 * Hash: 0xD422FCC5F239A915 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD422FCC5F239A915)
	 */
	busyspinnerIsOn(): boolean;

	/**
	 * Native: HUD::BUSYSPINNER_OFF
	 *
	 * Hash: 0x10D373323E5B9C0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10D373323E5B9C0D)
	 */
	busyspinnerOff(): void;

	/**
	 * Native: HUD::CLEAR_ADDITIONAL_TEXT
	 *
	 * Hash: 0x2A179DF17CCF04CD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A179DF17CCF04CD)
	 */
	clearAdditionalText(p0: integer, p1: boolean): void;

	/**
	 * Native: HUD::_CLEAR_ALL_BLIP_ROUTES
	 *
	 * Hash: 0xD12882D3FF82BF11 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD12882D3FF82BF11)
	 */
	clearAllBlipRoutes(): void;

	/**
	 * Native: HUD::CLEAR_ALL_HELP_MESSAGES
	 *
	 * Hash: 0x6178F68A87A4D3A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6178F68A87A4D3A0)
	 */
	clearAllHelpMessages(): void;

	/**
	 * Native: HUD::CLEAR_BRIEF
	 *
	 * Hash: 0x9D292F73ADBD9313 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D292F73ADBD9313)
	 */
	clearBrief(): void;

	/**
	 * Native: HUD::CLEAR_DYNAMIC_PAUSE_MENU_ERROR_MESSAGE
	 *
	 * Hash: 0x7792424AA0EAC32E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7792424AA0EAC32E)
	 */
	clearDynamicPauseMenuErrorMessage(): void;

	/**
	 * Native: HUD::CLEAR_FLOATING_HELP
	 *
	 * Hash: 0x50085246ABD3FEFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50085246ABD3FEFA)
	 */
	clearFloatingHelp(hudIndex: integer, p1: boolean): void;

	/**
	 * Native: HUD::CLEAR_GPS_CUSTOM_ROUTE
	 *
	 * Hash: 0xE6DE0561D9232A64 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE6DE0561D9232A64)
	 */
	clearGpsCustomRoute(): void;

	/**
	 * Native: HUD::CLEAR_GPS_FLAGS
	 *
	 * Hash: 0x21986729D6A3A830 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x21986729D6A3A830)
	 */
	clearGpsFlags(): void;

	/**
	 * Native: HUD::CLEAR_GPS_MULTI_ROUTE
	 *
	 * Hash: 0x67EEDEA1B9BAFD94 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x67EEDEA1B9BAFD94)
	 */
	clearGpsMultiRoute(): void;

	/**
	 * Native: HUD::CLEAR_GPS_PLAYER_WAYPOINT
	 *
	 * Hash: 0xFF4FB7C8CDFA3DA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFF4FB7C8CDFA3DA7)
	 */
	clearGpsPlayerWaypoint(): void;

	/**
	 * Native: HUD::CLEAR_GPS_RACE_TRACK
	 *
	 * Hash: 0x7AA5B4CE533C858B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AA5B4CE533C858B)
	 */
	clearGpsRaceTrack(): void;

	/**
	 * Native: HUD::CLEAR_HELP
	 *
	 * Hash: 0x8DFCED7A656F8802 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DFCED7A656F8802)
	 */
	clearHelp(toggle: boolean): void;

	/**
	 * Native: HUD::CLEAR_PED_IN_PAUSE_MENU
	 *
	 * Hash: 0x5E62BE5DC58E9E06 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E62BE5DC58E9E06)
	 */
	clearPedInPauseMenu(): void;

	/**
	 * Native: HUD::CLEAR_PRINTS
	 *
	 * Hash: 0xCC33FA791322B9D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCC33FA791322B9D9)
	 */
	clearPrints(): void;

	/**
	 * Native: HUD::CLEAR_REMINDER_MESSAGE
	 *
	 * Hash: 0xB57D8DD645CFA2CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB57D8DD645CFA2CF)
	 */
	clearReminderMessage(): void;

	/**
	 * Native: HUD::CLEAR_SMALL_PRINTS
	 *
	 * Hash: 0x2CEA2839313C09AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2CEA2839313C09AC)
	 */
	clearSmallPrints(): void;

	/**
	 * Native: HUD::CLEAR_THIS_PRINT
	 *
	 * Hash: 0xCF708001E1E536DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF708001E1E536DD)
	 */
	clearThisPrint(p0: string): void;

	/**
	 * Native: HUD::_CLOSE_MULTIPLAYER_CHAT
	 *
	 * Hash: 0x1AC8F4AD40E22127 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1AC8F4AD40E22127)
	 */
	closeMultiplayerChat(): void;

	/**
	 * Native: HUD::CLOSE_SOCIAL_CLUB_MENU
	 *
	 * Hash: 0xD2B32BE3FC1626C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD2B32BE3FC1626C6)
	 */
	closeSocialClubMenu(): void;

	/**
	 * Native: HUD::CREATE_FAKE_MP_GAMER_TAG
	 *
	 * Hash: 0xBFEFE3321A3F5015 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBFEFE3321A3F5015)
	 */
	createFakeMpGamerTag(
		ped: Handle,
		username: string,
		pointedClanTag: boolean,
		isRockstarClan: boolean,
		clanTag: string,
		clanFlag: integer
	): integer;

	/**
	 * Native: HUD::CREATE_MP_GAMER_TAG_WITH_CREW_COLOR
	 *
	 * Hash: 0x6DD05E9D83EFA4C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6DD05E9D83EFA4C9)
	 */
	createMpGamerTagWithCrewColor(
		player: Handle,
		username: string,
		pointedClanTag: boolean,
		isRockstarClan: boolean,
		clanTag: string,
		clanFlag: integer,
		r: integer,
		g: integer,
		b: integer
	): void;

	/**
	 * Native: HUD::CUSTOM_MINIMAP_CLEAR_BLIPS
	 *
	 * Hash: 0x2708FC083123F9FF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2708FC083123F9FF)
	 */
	customMinimapClearBlips(): void;

	/**
	 * Native: HUD::CUSTOM_MINIMAP_CREATE_BLIP
	 *
	 * Hash: 0x551DF99658DB6EE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x551DF99658DB6EE8)
	 */
	customMinimapCreateBlip(x: number, y: number, z: number): integer;

	/**
	 * Native: HUD::CUSTOM_MINIMAP_SET_ACTIVE
	 *
	 * Hash: 0x5354C5BA2EA868A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5354C5BA2EA868A4)
	 */
	customMinimapSetActive(toggle: boolean): void;

	/**
	 * Native: HUD::CUSTOM_MINIMAP_SET_BLIP_OBJECT
	 *
	 * Hash: 0x1EAE6DD17B7A5EFA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EAE6DD17B7A5EFA)
	 */
	customMinimapSetBlipObject(spriteId: integer): void;

	/**
	 * Native: HUD::_DELETE_WAYPOINT
	 *
	 * Hash: 0xD8E694757BCEA8E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD8E694757BCEA8E9)
	 */
	deleteWaypoint(): void;

	/**
	 * Native: HUD::DISABLE_FRONTEND_THIS_FRAME
	 *
	 * Hash: 0x6D3465A73092F0E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D3465A73092F0E6)
	 */
	disableFrontendThisFrame(): void;

	/**
	 * Native: HUD::DISPLAY_HUD
	 *
	 * Hash: 0xA6294919E56FF02A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6294919E56FF02A)
	 */
	display(toggle: boolean): void;

	/**
	 * Native: HUD::DISPLAY_AMMO_THIS_FRAME
	 *
	 * Hash: 0xA5E78BA2B1331C55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5E78BA2B1331C55)
	 */
	displayAmmoThisFrame(display: boolean): void;

	/**
	 * Native: HUD::DISPLAY_AREA_NAME
	 *
	 * Hash: 0x276B6CE369C33678 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x276B6CE369C33678)
	 */
	displayAreaName(toggle: boolean): void;

	/**
	 * Native: HUD::DISPLAY_CASH
	 *
	 * Hash: 0x96DEC8D5430208B7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x96DEC8D5430208B7)
	 */
	displayCash(toggle: boolean): void;

	/**
	 * Native: HUD::DISPLAY_HELP_TEXT_THIS_FRAME
	 *
	 * Hash: 0x960C9FF8F616E41C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x960C9FF8F616E41C)
	 */
	displayHelpTextThisFrame(message: string, p1: boolean): void;

	/**
	 * Native: HUD::_HUD_DISPLAY_LOADING_SCREEN_TIPS
	 *
	 * Hash: 0x488043841BBE156F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x488043841BBE156F)
	 */
	displayLoadingScreenTips(): void;

	/**
	 * Native: HUD::DISPLAY_PLAYER_NAME_TAGS_ON_BLIPS
	 *
	 * Hash: 0x82CEDC33687E1F50 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82CEDC33687E1F50)
	 */
	displayPlayerNameTagsOnBlips(toggle: boolean): void;

	/**
	 * Native: HUD::DISPLAY_RADAR
	 *
	 * Hash: 0xA0EBB943C300E693 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0EBB943C300E693)
	 */
	displayRadar(toggle: boolean): void;

	/**
	 * Native: HUD::DISPLAY_SNIPER_SCOPE_THIS_FRAME
	 *
	 * Hash: 0x73115226F4814E62 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x73115226F4814E62)
	 */
	displaySniperScopeThisFrame(): void;

	/**
	 * Native: HUD::_DISPLAY_HUD_WHEN_DEAD_THIS_FRAME
	 *
	 * Hash: 0x7669F9E39DC17063 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7669F9E39DC17063)
	 */
	displayWhenDeadThisFrame(): void;

	/**
	 * Native: HUD::DISPLAY_HUD_WHEN_PAUSED_THIS_FRAME
	 *
	 * Hash: 0x402F9ED62087E898 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x402F9ED62087E898)
	 */
	displayWhenPausedThisFrame(): void;

	/**
	 * Native: HUD::DOES_BLIP_EXIST
	 *
	 * Hash: 0xA6DB27D19ECBB7DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6DB27D19ECBB7DA)
	 */
	doesBlipExist(blip: Handle): boolean;

	/**
	 * Native: HUD::DOES_BLIP_HAVE_GPS_ROUTE
	 *
	 * Hash: 0xDD2238F57B977751 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD2238F57B977751)
	 */
	doesBlipHaveGpsRoute(blip: Handle): boolean;

	/**
	 * Native: HUD::DOES_PED_HAVE_AI_BLIP
	 *
	 * Hash: 0x15B8ECF844EE67ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15B8ECF844EE67ED)
	 */
	doesPedHaveAiBlip(ped: Handle): boolean;

	/**
	 * Native: HUD::DOES_TEXT_BLOCK_EXIST
	 *
	 * Hash: 0x1C7302E725259789 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C7302E725259789)
	 */
	doesTextBlockExist(gxt: string): boolean;

	/**
	 * Native: HUD::DOES_TEXT_LABEL_EXIST
	 *
	 * Hash: 0xAC09CA973C564252 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC09CA973C564252)
	 */
	doesTextLabelExist(gxt: string): boolean;

	/**
	 * Native: HUD::DONT_TILT_MINIMAP_THIS_FRAME
	 *
	 * Hash: 0x6D14BFDC33B34F55 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6D14BFDC33B34F55)
	 */
	dontTiltMinimapThisFrame(): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_BUSYSPINNER_ON
	 *
	 * Hash: 0xBD12F8228410D9B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD12F8228410D9B4)
	 */
	endTextCommandBusyspinnerOn(busySpinnerType: integer): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_CLEAR_PRINT
	 *
	 * Hash: 0xFCC75460ABA29378 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCC75460ABA29378)
	 */
	endTextCommandClearPrint(): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_DISPLAY_HELP
	 *
	 * Hash: 0x238FFE5C7B0498A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x238FFE5C7B0498A6)
	 */
	endTextCommandDisplayHelp(p0: integer, loop: boolean, beep: boolean, shape: integer): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_DISPLAY_TEXT
	 *
	 * Hash: 0xCD015E5BB0D96A57 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD015E5BB0D96A57)
	 */
	endTextCommandDisplayText(x: number, y: number, p2: integer): void;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_GET_WIDTH
	 *
	 * Hash: 0x85F061DA64ED2F67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x85F061DA64ED2F67)
	 */
	endTextCommandGetWidth(p0: boolean): number;

	/**
	 * Native: HUD::END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED
	 *
	 * Hash: 0x8A9BA1AB3E237613 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8A9BA1AB3E237613)
	 */
	endTextCommandIsMessageDisplayed(): boolean;

	/**
	 * Native: HUD::END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED
	 *
	 * Hash: 0x10BDDBFC529428DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10BDDBFC529428DD)
	 */
	endTextCommandIsThisHelpMessageBeingDisplayed(p0: integer): boolean;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_LINE_COUNT
	 *
	 * Hash: 0x9040DFB09BE75706 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9040DFB09BE75706)
	 */
	endTextCommandLineCount(x: number, y: number): integer;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_OBJECTIVE
	 *
	 * Hash: 0xCFDBDF5AE59BA0F4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCFDBDF5AE59BA0F4)
	 */
	endTextCommandObjective(p0: boolean): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_OVERRIDE_BUTTON_TEXT
	 *
	 * Hash: 0xA86911979638106F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA86911979638106F)
	 */
	endTextCommandOverrideButtonText(p0: integer): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_PRINT
	 *
	 * Hash: 0x9D77056A530643F6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9D77056A530643F6)
	 */
	endTextCommandPrint(duration: integer, drawImmediately: boolean): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_SET_BLIP_NAME
	 *
	 * Hash: 0xBC38B49BCB83BC9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC38B49BCB83BC9B)
	 */
	endTextCommandSetBlipName(blip: Handle): void;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_AWARD
	 *
	 * Hash: 0xAA295B6F28BD587D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA295B6F28BD587D)
	 */
	endTextCommandThefeedPostAward(
		textureDict: string,
		textureName: string,
		rpBonus: integer,
		colorOverlay: integer,
		titleLabel: string
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_CREW_RANKUP
	 *
	 * Hash: 0x8EFCCF6EC66D85E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8EFCCF6EC66D85E4)
	 */
	endTextCommandThefeedPostCrewRankup(p0: string, p1: string, p2: string, p3: boolean, p4: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_CREWTAG
	 *
	 * Hash: 0x97C9E4E7024A8F2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97C9E4E7024A8F2C)
	 */
	endTextCommandThefeedPostCrewtag(
		p0: boolean,
		p1: boolean,
		p3: integer,
		isLeader: boolean,
		unk0: boolean,
		clanDesc: integer,
		R: integer,
		G: integer,
		B: integer
	): EndTextCommandThefeedPostCrewtagResult;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_CREWTAG_WITH_GAME_NAME
	 *
	 * Hash: 0x137BC35589E34E1E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x137BC35589E34E1E)
	 */
	endTextCommandThefeedPostCrewtagWithGameName(
		p0: boolean,
		p1: boolean,
		p3: integer,
		isLeader: boolean,
		unk0: boolean,
		clanDesc: integer,
		playerName: string,
		R: integer,
		G: integer,
		B: integer
	): EndTextCommandThefeedPostCrewtagWithGameNameResult;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT
	 *
	 * Hash: 0x1CCD9A37359072CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CCD9A37359072CF)
	 */
	endTextCommandThefeedPostMessagetext(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: integer,
		sender: string,
		subject: string
	): integer;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_GXT_ENTRY
	 *
	 * Hash: 0xC6F580E4C94926AC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC6F580E4C94926AC)
	 */
	endTextCommandThefeedPostMessagetextGxtEntry(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: integer,
		sender: string,
		subject: string
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_TU
	 *
	 * Hash: 0x1E6611149DB3DB6B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E6611149DB3DB6B)
	 */
	endTextCommandThefeedPostMessagetextTu(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: integer,
		sender: string,
		subject: string,
		duration: number
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_WITH_CREW_TAG
	 *
	 * Hash: 0x5CBF7BADE20DB93E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5CBF7BADE20DB93E)
	 */
	endTextCommandThefeedPostMessagetextWithCrewTag(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType: integer,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT_WITH_CREW_TAG_AND_ADDITIONAL_ICON
	 *
	 * Hash: 0x531B84E7DA981FB6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x531B84E7DA981FB6)
	 */
	endTextCommandThefeedPostMessagetextWithCrewTagAndAdditionalIcon(
		txdName: string,
		textureName: string,
		flash: boolean,
		iconType1: integer,
		sender: string,
		subject: string,
		duration: number,
		clanTag: string,
		iconType2: integer,
		p9: integer
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_MPTICKER
	 *
	 * Hash: 0xF020C96915705B3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF020C96915705B3A)
	 */
	endTextCommandThefeedPostMpticker(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_THEFEED_POST_REPLAY_ICON
	 *
	 * Hash: 0xD202B92CBF1D816F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD202B92CBF1D816F)
	 */
	endTextCommandThefeedPostReplayIcon(type: integer, image: integer, text: string): integer;

	/**
	 * Native: HUD::_END_TEXT_COMMAND_THEFEED_POST_REPLAY_INPUT
	 *
	 * Hash: 0xDD6CB2CCE7C2735C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD6CB2CCE7C2735C)
	 */
	endTextCommandThefeedPostReplayInput(type: integer, button: string, text: string): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_STATS
	 *
	 * Hash: 0x2B7E9A4EAAA93C89 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B7E9A4EAAA93C89)
	 */
	endTextCommandThefeedPostStats(
		statTitle: string,
		iconEnum: integer,
		stepVal: boolean,
		barValue: integer,
		isImportant: boolean,
		pictureTextureDict: string,
		pictureTextureName: string
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_TICKER
	 *
	 * Hash: 0x2ED7843F8F801023 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2ED7843F8F801023)
	 */
	endTextCommandThefeedPostTicker(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_TICKER_FORCED
	 *
	 * Hash: 0x44FA03975424A0EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x44FA03975424A0EE)
	 */
	endTextCommandThefeedPostTickerForced(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_TICKER_WITH_TOKENS
	 *
	 * Hash: 0x378E809BF61EC840 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x378E809BF61EC840)
	 */
	endTextCommandThefeedPostTickerWithTokens(blink: boolean, p1: boolean): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_UNLOCK
	 *
	 * Hash: 0x33EE12743CCD6343 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x33EE12743CCD6343)
	 */
	endTextCommandThefeedPostUnlock(p0: integer, p1: integer, p2: integer): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_UNLOCK_TU
	 *
	 * Hash: 0xC8F3AAF93D0600BF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8F3AAF93D0600BF)
	 */
	endTextCommandThefeedPostUnlockTu(p0: integer, p1: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_UNLOCK_TU_WITH_COLOR
	 *
	 * Hash: 0x7AE0589093A2E088 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7AE0589093A2E088)
	 */
	endTextCommandThefeedPostUnlockTuWithColor(
		p0: integer,
		p1: integer,
		p2: integer,
		p3: integer,
		p4: integer,
		p5: integer
	): integer;

	/**
	 * Native: HUD::END_TEXT_COMMAND_THEFEED_POST_VERSUS_TU
	 *
	 * Hash: 0xB6871B0555B02996 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6871B0555B02996)
	 */
	endTextCommandThefeedPostVersusTu(
		p2: integer,
		p5: integer,
		p6: integer,
		p7: integer
	): EndTextCommandThefeedPostVersusTuResult;

	/**
	 * Native: HUD::FLAG_PLAYER_CONTEXT_IN_TOURNAMENT
	 *
	 * Hash: 0xCEF214315D276FD1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCEF214315D276FD1)
	 */
	flagPlayerContextInTournament(toggle: boolean): void;

	/**
	 * Native: HUD::FLASH_ABILITY_BAR
	 *
	 * Hash: 0x02CFBA0C9E9275CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02CFBA0C9E9275CE)
	 */
	flashAbilityBar(millisecondsToFlash: integer): void;

	/**
	 * Native: HUD::FLASH_MINIMAP_DISPLAY
	 *
	 * Hash: 0xF2DD778C22B15BDA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF2DD778C22B15BDA)
	 */
	flashMinimapDisplay(): void;

	/**
	 * Native: HUD::FLASH_MINIMAP_DISPLAY_WITH_COLOR
	 *
	 * Hash: 0x6B1DE27EE78E6A19 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B1DE27EE78E6A19)
	 */
	flashMinimapDisplayWithColor(hudColorIndex: integer): void;

	/**
	 * Native: HUD::FLASH_WANTED_DISPLAY
	 *
	 * Hash: 0xA18AFB39081B6A1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA18AFB39081B6A1F)
	 */
	flashWantedDisplay(p0: boolean): void;

	/**
	 * Native: HUD::FORCE_CLOSE_REPORTUGC_MENU
	 *
	 * Hash: 0xEE4C0E6DBC6F2C6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE4C0E6DBC6F2C6F)
	 */
	forceCloseReportugcMenu(): void;

	/**
	 * Native: HUD::_FORCE_CLOSE_TEXT_INPUT_BOX
	 *
	 * Hash: 0x8817605C2BA76200 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8817605C2BA76200)
	 */
	forceCloseTextInputBox(): void;

	/**
	 * Native: HUD::FORCE_SONAR_BLIPS_THIS_FRAME
	 *
	 * Hash: 0x1121BFA1A1A522A8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1121BFA1A1A522A8)
	 */
	forceSonarBlipsThisFrame(): integer;

	/**
	 * Native: HUD::HUD_FORCE_WEAPON_WHEEL
	 *
	 * Hash: 0xEB354E5376BC81A7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB354E5376BC81A7)
	 */
	forceWeaponWheel(show: boolean): void;

	/**
	 * Native: HUD::_GET_AI_BLIP
	 *
	 * Hash: 0x56176892826A4FE8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56176892826A4FE8)
	 */
	getAiBlip(ped: Handle): Handle;

	/**
	 * Native: HUD::_GET_AI_BLIP_2
	 *
	 * Hash: 0x7CD934010E115C2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7CD934010E115C2C)
	 */
	getAiBlip2(ped: Handle): Handle;

	/**
	 * Native: HUD::GET_BLIP_ALPHA
	 *
	 * Hash: 0x970F608F0EE6C885 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x970F608F0EE6C885)
	 */
	getBlipAlpha(blip: Handle): integer;

	/**
	 * Native: HUD::GET_BLIP_COLOUR
	 *
	 * Hash: 0xDF729E8D20CF7327 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF729E8D20CF7327)
	 */
	getBlipColour(blip: Handle): integer;

	/**
	 * Native: HUD::GET_BLIP_COORDS
	 *
	 * Hash: 0x586AFE3FF72D996E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x586AFE3FF72D996E)
	 */
	getBlipCoords(blip: Handle): Vector3Mp;

	/**
	 * Native: HUD::_GET_BLIP_FADE_STATUS
	 *
	 * Hash: 0x2C173AE2BDB9385E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2C173AE2BDB9385E)
	 */
	getBlipFadeStatus(blip: Handle): integer;

	/**
	 * Native: HUD::GET_BLIP_FROM_ENTITY
	 *
	 * Hash: 0xBC8DBDCA2436F7E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC8DBDCA2436F7E8)
	 */
	getBlipFromEntity(entity: Handle): Handle;

	/**
	 * Native: HUD::GET_BLIP_INFO_ID_COORD
	 *
	 * Hash: 0xFA7C7F0AADF25D09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFA7C7F0AADF25D09)
	 */
	getBlipInfoIdCoord(blip: Handle): Vector3Mp;

	/**
	 * Native: HUD::GET_BLIP_INFO_ID_DISPLAY
	 *
	 * Hash: 0x1E314167F701DC3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1E314167F701DC3B)
	 */
	getBlipInfoIdDisplay(blip: Handle): integer;

	/**
	 * Native: HUD::GET_BLIP_INFO_ID_ENTITY_INDEX
	 *
	 * Hash: 0x4BA4E2553AFEDC2C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4BA4E2553AFEDC2C)
	 */
	getBlipInfoIdEntityIndex(blip: Handle): Handle;

	/**
	 * Native: HUD::GET_BLIP_INFO_ID_PICKUP_INDEX
	 *
	 * Hash: 0x9B6786E4C03DD382 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9B6786E4C03DD382)
	 */
	getBlipInfoIdPickupIndex(blip: Handle): Handle;

	/**
	 * Native: HUD::GET_BLIP_INFO_ID_TYPE
	 *
	 * Hash: 0xBE9B0959FFD0779B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE9B0959FFD0779B)
	 */
	getBlipInfoIdType(blip: Handle): integer;

	/**
	 * Native: HUD::_GET_BLIP_ROTATION
	 *
	 * Hash: 0x003E92BA477F9D7F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x003E92BA477F9D7F)
	 */
	getBlipRotation(blip: Handle): integer;

	/**
	 * Native: HUD::GET_BLIP_SPRITE
	 *
	 * Hash: 0x1FC877464A04FC4F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1FC877464A04FC4F)
	 */
	getBlipSprite(blip: Handle): integer;

	/**
	 * Native: HUD::_GET_CLOSEST_BLIP_OF_TYPE
	 *
	 * Hash: 0xD484BF71050CA1EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD484BF71050CA1EE)
	 */
	getClosestBlipOfType(blipSprite: integer): Handle;

	/**
	 * Native: HUD::GET_HUD_COLOUR
	 *
	 * Hash: 0x7C9C91AB74A0360F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7C9C91AB74A0360F)
	 */
	getColour(hudColorIndex: integer): GetHudColourResult;

	/**
	 * Native: HUD::GET_HUD_COMPONENT_POSITION
	 *
	 * Hash: 0x223CA69A8C4417FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x223CA69A8C4417FD)
	 */
	getComponentPosition(id: integer): Vector3Mp;

	/**
	 * Native: HUD::GET_CURRENT_FRONTEND_MENU_VERSION
	 *
	 * Hash: 0x2309595AD6145265 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2309595AD6145265)
	 */
	getCurrentFrontendMenuVersion(): integer;

	/**
	 * Native: HUD::GET_CURRENT_WEBPAGE_ID
	 *
	 * Hash: 0x01A358D9128B7A86 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01A358D9128B7A86)
	 */
	getCurrentWebpageId(): integer;

	/**
	 * Native: HUD::GET_CURRENT_WEBSITE_ID
	 *
	 * Hash: 0x97D47996FC48CBAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97D47996FC48CBAD)
	 */
	getCurrentWebsiteId(): integer;

	/**
	 * Native: HUD::GET_DEFAULT_SCRIPT_RENDERTARGET_RENDER_ID
	 *
	 * Hash: 0x52F0982D7FD156B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52F0982D7FD156B6)
	 */
	getDefaultScriptRendertargetRenderId(): integer;

	/**
	 * Native: HUD::GET_FIRST_BLIP_INFO_ID
	 *
	 * Hash: 0x1BEDE233E6CD2A1F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1BEDE233E6CD2A1F)
	 */
	getFirstBlipInfoId(blipSprite: integer): Handle;

	/**
	 * Native: HUD::GET_GLOBAL_ACTIONSCRIPT_FLAG
	 *
	 * Hash: 0xE3B05614DCE1D014 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE3B05614DCE1D014)
	 */
	getGlobalActionscriptFlag(flagIndex: integer): integer;

	/**
	 * Native: HUD::_GET_LABEL_TEXT
	 *
	 * Hash: 0x7B5280EBA9840C72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B5280EBA9840C72)
	 */
	getLabelText(labelName: string): string;

	/**
	 * Native: HUD::GET_LENGTH_OF_LITERAL_STRING
	 *
	 * Hash: 0xF030907CCBB8A9FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF030907CCBB8A9FD)
	 */
	getLengthOfLiteralString(string: string): integer;

	/**
	 * Native: HUD::GET_LENGTH_OF_LITERAL_STRING_IN_BYTES
	 *
	 * Hash: 0x43E4111189E54F0E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x43E4111189E54F0E)
	 */
	getLengthOfLiteralStringInBytes(string: string): integer;

	/**
	 * Native: HUD::GET_LENGTH_OF_STRING_WITH_THIS_TEXT_LABEL
	 *
	 * Hash: 0x801BD273D3A23F74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x801BD273D3A23F74)
	 */
	getLengthOfStringWithThisTextLabel(gxt: string): integer;

	/**
	 * Native: HUD::GET_MAIN_PLAYER_BLIP_ID
	 *
	 * Hash: 0xDCD4EC3F419D02FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCD4EC3F419D02FA)
	 */
	getMainPlayerBlipId(): Handle;

	/**
	 * Native: HUD::GET_MENU_PED_BOOL_STAT
	 *
	 * Hash: 0x052991E59076E4E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x052991E59076E4E4)
	 */
	getMenuPedBoolStat(p0: integer): integer;

	/**
	 * Native: HUD::GET_MENU_PED_FLOAT_STAT
	 *
	 * Hash: 0x5FBD7095FE7AE57F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FBD7095FE7AE57F)
	 */
	getMenuPedFloatStat(p0: integer): number;

	/**
	 * Native: HUD::GET_MENU_PED_INT_STAT
	 *
	 * Hash: 0xEF4CED81CEBEDC6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEF4CED81CEBEDC6D)
	 */
	getMenuPedIntStat(p0: integer): integer;

	/**
	 * Native: HUD::GET_MENU_PED_MASKED_INT_STAT
	 *
	 * Hash: 0x90A6526CF0381030 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x90A6526CF0381030)
	 */
	getMenuPedMaskedIntStat(p0: integer, p2: integer, p3: integer): integer;

	/**
	 * Native: HUD::GET_MINIMAP_FOW_COORDINATE_IS_REVEALED
	 *
	 * Hash: 0x6E31B91145873922 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E31B91145873922)
	 */
	getMinimapFowCoordinateIsRevealed(x: number, y: number, z: number): boolean;

	/**
	 * Native: HUD::GET_MINIMAP_FOW_DISCOVERY_RATIO
	 *
	 * Hash: 0xE0130B41D3CF4574 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE0130B41D3CF4574)
	 */
	getMinimapFowDiscoveryRatio(): number;

	/**
	 * Native: HUD::GET_NAMED_RENDERTARGET_RENDER_ID
	 *
	 * Hash: 0x1A6478B61C6BDC3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A6478B61C6BDC3B)
	 */
	getNamedRendertargetRenderId(name: string): integer;

	/**
	 * Native: HUD::GET_NEW_SELECTED_MISSION_CREATOR_BLIP
	 *
	 * Hash: 0x5C90988E7C8E1AF4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5C90988E7C8E1AF4)
	 */
	getNewSelectedMissionCreatorBlip(): Handle;

	/**
	 * Native: HUD::GET_NEXT_BLIP_INFO_ID
	 *
	 * Hash: 0x14F96AA50D6FBEA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14F96AA50D6FBEA7)
	 */
	getNextBlipInfoId(blipSprite: integer): Handle;

	/**
	 * Native: HUD::_GET_NORTH_RADAR_BLIP
	 *
	 * Hash: 0x3F0CF9CB7E589B88 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F0CF9CB7E589B88)
	 */
	getNorthRadarBlip(): Handle;

	/**
	 * Native: HUD::GET_NUMBER_OF_ACTIVE_BLIPS
	 *
	 * Hash: 0x9A3FF3DE163034E8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9A3FF3DE163034E8)
	 */
	getNumberOfActiveBlips(): integer;

	/**
	 * Native: HUD::_GET_PAUSE_MENU_SELECTION
	 *
	 * Hash: 0x36C1451A88A09630 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x36C1451A88A09630)
	 */
	getPauseMenuSelection(): GetPauseMenuSelectionResult;

	/**
	 * Native: HUD::_GET_PAUSE_MENU_SELECTION_DATA
	 *
	 * Hash: 0x7E17BE53E1AAABAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7E17BE53E1AAABAF)
	 */
	getPauseMenuSelectionData(): GetPauseMenuSelectionDataResult;

	/**
	 * Native: HUD::GET_PAUSE_MENU_STATE
	 *
	 * Hash: 0x272ACD84970869C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x272ACD84970869C5)
	 */
	getPauseMenuState(): integer;

	/**
	 * Native: HUD::GET_RENDERED_CHARACTER_HEIGHT
	 *
	 * Hash: 0xDB88A37483346780 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB88A37483346780)
	 */
	getRenderedCharacterHeight(size: number, font: integer): number;

	/**
	 * Native: HUD::GET_HUD_SCREEN_POSITION_FROM_WORLD_POSITION
	 *
	 * Hash: 0xF9904D11F1ACBEC3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF9904D11F1ACBEC3)
	 */
	getScreenPositionFromWorldPosition(
		worldX: number,
		worldY: number,
		worldZ: number
	): GetHudScreenPositionFromWorldPositionResult;

	/**
	 * Native: HUD::GET_STANDARD_BLIP_ENUM_ID
	 *
	 * Hash: 0x4A9923385BDB9DAD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A9923385BDB9DAD)
	 */
	getStandardBlipEnumId(): boolean;

	/**
	 * Native: HUD::GET_STREET_NAME_FROM_HASH_KEY
	 *
	 * Hash: 0xD0EF8A959B8A4CB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD0EF8A959B8A4CB9)
	 */
	getStreetNameFromHashKey(hash: integer): string;

	/**
	 * Native: HUD::_GET_TEXT_SUBSTRING
	 *
	 * Hash: 0x169BD9382084C8C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x169BD9382084C8C0)
	 */
	getTextSubstring(text: string, position: integer, length: integer): string;

	/**
	 * Native: HUD::_GET_TEXT_SUBSTRING_SAFE
	 *
	 * Hash: 0xB2798643312205C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB2798643312205C5)
	 */
	getTextSubstringSafe(text: string, position: integer, length: integer, maxLength: integer): string;

	/**
	 * Native: HUD::_GET_TEXT_SUBSTRING_SLICE
	 *
	 * Hash: 0xCE94AEBA5D82908A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCE94AEBA5D82908A)
	 */
	getTextSubstringSlice(text: string, startPosition: integer, endPosition: integer): string;

	/**
	 * Native: HUD::_GET_WARNING_MESSAGE_TITLE_HASH
	 *
	 * Hash: 0x81DF9ABA6C83DFF9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81DF9ABA6C83DFF9)
	 */
	getWarningMessageTitleHash(): integer;

	/**
	 * Native: HUD::GET_WAYPOINT_BLIP_ENUM_ID
	 *
	 * Hash: 0x186E5D252FA50E7D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x186E5D252FA50E7D)
	 */
	getWaypointBlipEnumId(): integer;

	/**
	 * Native: HUD::GIVE_PED_TO_PAUSE_MENU
	 *
	 * Hash: 0xAC0BFBDC3BE00E14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAC0BFBDC3BE00E14)
	 */
	givePedToPauseMenu(ped: Handle, p1: integer): void;

	/**
	 * Native: HUD::HAS_ADDITIONAL_TEXT_LOADED
	 *
	 * Hash: 0x02245FE4BED318B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x02245FE4BED318B8)
	 */
	hasAdditionalTextLoaded(slot: integer): boolean;

	/**
	 * Native: HUD::_HAS_DIRECTOR_MODE_BEEN_TRIGGERED
	 *
	 * Hash: 0xA277800A9EAE340E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA277800A9EAE340E)
	 */
	hasDirectorModeBeenTriggered(): boolean;

	/**
	 * Native: HUD::HAS_THIS_ADDITIONAL_TEXT_LOADED
	 *
	 * Hash: 0xADBF060E2B30C5BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADBF060E2B30C5BC)
	 */
	hasThisAdditionalTextLoaded(gxt: string, slot: integer): boolean;

	/**
	 * Native: HUD::HIDE_HUD_AND_RADAR_THIS_FRAME
	 *
	 * Hash: 0x719FF505F097FD20 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x719FF505F097FD20)
	 */
	hideAndRadarThisFrame(): void;

	/**
	 * Native: HUD::_HIDE_AREA_AND_VEHICLE_NAME_THIS_FRAME
	 *
	 * Hash: 0xA4DEDE28B1814289 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA4DEDE28B1814289)
	 */
	hideAreaAndVehicleNameThisFrame(): void;

	/**
	 * Native: HUD::HIDE_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0x6806C51AD12B83B8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6806C51AD12B83B8)
	 */
	hideComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::HIDE_HELP_TEXT_THIS_FRAME
	 *
	 * Hash: 0xD46923FC481CA285 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD46923FC481CA285)
	 */
	hideHelpTextThisFrame(): void;

	/**
	 * Native: HUD::HIDE_LOADING_ON_FADE_THIS_FRAME
	 *
	 * Hash: 0x4B0311D3CDC4648F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4B0311D3CDC4648F)
	 */
	hideLoadingOnFadeThisFrame(): void;

	/**
	 * Native: HUD::HIDE_MINIMAP_EXTERIOR_MAP_THIS_FRAME
	 *
	 * Hash: 0x5FBAE526203990C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FBAE526203990C9)
	 */
	hideMinimapExteriorMapThisFrame(): void;

	/**
	 * Native: HUD::HIDE_MINIMAP_INTERIOR_MAP_THIS_FRAME
	 *
	 * Hash: 0x20FE7FDFEEAD38C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x20FE7FDFEEAD38C0)
	 */
	hideMinimapInteriorMapThisFrame(): void;

	/**
	 * Native: HUD::HIDE_NUMBER_ON_BLIP
	 *
	 * Hash: 0x532CFF637EF80148 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x532CFF637EF80148)
	 */
	hideNumberOnBlip(blip: Handle): void;

	/**
	 * Native: HUD::HIDE_SCRIPTED_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0xE374C498D8BADC14 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE374C498D8BADC14)
	 */
	hideScriptedComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::IS_BLIP_FLASHING
	 *
	 * Hash: 0xA5E41FD83AD6CEF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5E41FD83AD6CEF0)
	 */
	isBlipFlashing(blip: Handle): boolean;

	/**
	 * Native: HUD::IS_BLIP_ON_MINIMAP
	 *
	 * Hash: 0xE41CA53051197A27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE41CA53051197A27)
	 */
	isBlipOnMinimap(blip: Handle): boolean;

	/**
	 * Native: HUD::IS_BLIP_SHORT_RANGE
	 *
	 * Hash: 0xDA5F8727EB75B926 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA5F8727EB75B926)
	 */
	isBlipShortRange(blip: Handle): boolean;

	/**
	 * Native: HUD::IS_HUD_COMPONENT_ACTIVE
	 *
	 * Hash: 0xBC4C9EA5391ECC0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBC4C9EA5391ECC0D)
	 */
	isComponentActive(id: integer): boolean;

	/**
	 * Native: HUD::IS_FLOATING_HELP_TEXT_ON_SCREEN
	 *
	 * Hash: 0x2432784ACA090DA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2432784ACA090DA4)
	 */
	isFloatingHelpTextOnScreen(hudIndex: integer): boolean;

	/**
	 * Native: HUD::IS_FRONTEND_READY_FOR_CONTROL
	 *
	 * Hash: 0x3BAB9A4E4F2FF5C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3BAB9A4E4F2FF5C7)
	 */
	isFrontendReadyForControl(): boolean;

	/**
	 * Native: HUD::IS_HELP_MESSAGE_BEING_DISPLAYED
	 *
	 * Hash: 0x4D79439A6B55AC67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4D79439A6B55AC67)
	 */
	isHelpMessageBeingDisplayed(): boolean;

	/**
	 * Native: HUD::IS_HELP_MESSAGE_FADING_OUT
	 *
	 * Hash: 0x327EDEEEAC55C369 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x327EDEEEAC55C369)
	 */
	isHelpMessageFadingOut(): boolean;

	/**
	 * Native: HUD::IS_HELP_MESSAGE_ON_SCREEN
	 *
	 * Hash: 0xDAD37F45428801AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDAD37F45428801AE)
	 */
	isHelpMessageOnScreen(): boolean;

	/**
	 * Native: HUD::IS_HUD_HIDDEN
	 *
	 * Hash: 0xA86478C6958735C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA86478C6958735C5)
	 */
	isHidden(): boolean;

	/**
	 * Native: HUD::IS_HOVERING_OVER_MISSION_CREATOR_BLIP
	 *
	 * Hash: 0x4167EFE0527D706E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4167EFE0527D706E)
	 */
	isHoveringOverMissionCreatorBlip(): boolean;

	/**
	 * Native: HUD::IS_MESSAGE_BEING_DISPLAYED
	 *
	 * Hash: 0x7984C03AA5CC2F41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7984C03AA5CC2F41)
	 */
	isMessageBeingDisplayed(): boolean;

	/**
	 * Native: HUD::_IS_MINIMAP_IN_INTERIOR
	 *
	 * Hash: 0x9049FE339D5F6F6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9049FE339D5F6F6F)
	 */
	isMinimapInInterior(): boolean;

	/**
	 * Native: HUD::IS_MINIMAP_RENDERING
	 *
	 * Hash: 0xAF754F20EB5CD51A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF754F20EB5CD51A)
	 */
	isMinimapRendering(): boolean;

	/**
	 * Native: HUD::IS_MISSION_CREATOR_BLIP
	 *
	 * Hash: 0x26F49BF3381D933D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x26F49BF3381D933D)
	 */
	isMissionCreatorBlip(blip: Handle): boolean;

	/**
	 * Native: HUD::IS_MP_GAMER_TAG_ACTIVE
	 *
	 * Hash: 0x4E929E7A5796FD26 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E929E7A5796FD26)
	 */
	isMpGamerTagActive(gamerTagId: integer): boolean;

	/**
	 * Native: HUD::IS_MP_GAMER_TAG_FREE
	 *
	 * Hash: 0x595B5178E412E199 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x595B5178E412E199)
	 */
	isMpGamerTagFree(gamerTagId: integer): boolean;

	/**
	 * Native: HUD::IS_MP_GAMER_TAG_MOVIE_ACTIVE
	 *
	 * Hash: 0x6E0EB3EB47C8D7AA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6E0EB3EB47C8D7AA)
	 */
	isMpGamerTagMovieActive(): boolean;

	/**
	 * Native: HUD::_IS_MULTIPLAYER_CHAT_ACTIVE
	 *
	 * Hash: 0xB118AF58B5F332A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB118AF58B5F332A1)
	 */
	isMultiplayerChatActive(): boolean;

	/**
	 * Native: HUD::IS_NAMED_RENDERTARGET_LINKED
	 *
	 * Hash: 0x113750538FA31298 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x113750538FA31298)
	 */
	isNamedRendertargetLinked(modelHash: integer): boolean;

	/**
	 * Native: HUD::IS_NAMED_RENDERTARGET_REGISTERED
	 *
	 * Hash: 0x78DCDC15C9F116B4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78DCDC15C9F116B4)
	 */
	isNamedRendertargetRegistered(name: string): boolean;

	/**
	 * Native: HUD::IS_NAVIGATING_MENU_CONTENT
	 *
	 * Hash: 0x4E3CD0EF8A489541 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E3CD0EF8A489541)
	 */
	isNavigatingMenuContent(): boolean;

	/**
	 * Native: HUD::IS_ONLINE_POLICIES_MENU_ACTIVE
	 *
	 * Hash: 0x6F72CD94F7B5B68C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F72CD94F7B5B68C)
	 */
	isOnlinePoliciesMenuActive(): boolean;

	/**
	 * Native: HUD::IS_PAUSE_MENU_ACTIVE
	 *
	 * Hash: 0xB0034A223497FFCB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB0034A223497FFCB)
	 */
	isPauseMenuActive(): boolean;

	/**
	 * Native: HUD::IS_PAUSE_MENU_RESTARTING
	 *
	 * Hash: 0x1C491717107431C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1C491717107431C7)
	 */
	isPauseMenuRestarting(): boolean;

	/**
	 * Native: HUD::IS_HUD_PREFERENCE_SWITCHED_ON
	 *
	 * Hash: 0x1930DFA731813EC4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1930DFA731813EC4)
	 */
	isPreferenceSwitchedOn(): boolean;

	/**
	 * Native: HUD::IS_RADAR_HIDDEN
	 *
	 * Hash: 0x157F93B036700462 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x157F93B036700462)
	 */
	isRadarHidden(): boolean;

	/**
	 * Native: HUD::IS_RADAR_PREFERENCE_SWITCHED_ON
	 *
	 * Hash: 0x9EB6522EA68F22FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9EB6522EA68F22FE)
	 */
	isRadarPreferenceSwitchedOn(): boolean;

	/**
	 * Native: HUD::IS_REPORTUGC_MENU_OPEN
	 *
	 * Hash: 0x9135584D09A3437E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9135584D09A3437E)
	 */
	isReportugcMenuOpen(): boolean;

	/**
	 * Native: HUD::IS_SCRIPTED_HUD_COMPONENT_ACTIVE
	 *
	 * Hash: 0xDD100EB17A94FF65 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD100EB17A94FF65)
	 */
	isScriptedComponentActive(id: integer): boolean;

	/**
	 * Native: HUD::IS_SCRIPTED_HUD_COMPONENT_HIDDEN_THIS_FRAME
	 *
	 * Hash: 0x09C0403ED9A751C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x09C0403ED9A751C2)
	 */
	isScriptedComponentHiddenThisFrame(id: integer): boolean;

	/**
	 * Native: HUD::IS_SOCIAL_CLUB_ACTIVE
	 *
	 * Hash: 0xC406BE343FC4B9AF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC406BE343FC4B9AF)
	 */
	isSocialClubActive(): boolean;

	/**
	 * Native: HUD::IS_STREAMING_ADDITIONAL_TEXT
	 *
	 * Hash: 0x8B6817B71B85EBF0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B6817B71B85EBF0)
	 */
	isStreamingAdditionalText(p0: integer): boolean;

	/**
	 * Native: HUD::IS_SUBTITLE_PREFERENCE_SWITCHED_ON
	 *
	 * Hash: 0xAD6DACA4BA53E0A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD6DACA4BA53E0A4)
	 */
	isSubtitlePreferenceSwitchedOn(): boolean;

	/**
	 * Native: HUD::_IS_VALID_MP_GAMER_TAG_MOVIE
	 *
	 * Hash: 0xEB709A36958ABE0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEB709A36958ABE0D)
	 */
	isValidMpGamerTagMovie(gamerTagId: integer): boolean;

	/**
	 * Native: HUD::IS_WARNING_MESSAGE_ACTIVE
	 *
	 * Hash: 0xE18B138FABC53103 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE18B138FABC53103)
	 */
	isWarningMessageActive(): boolean;

	/**
	 * Native: HUD::_IS_WARNING_MESSAGE_ACTIVE_2
	 *
	 * Hash: 0xAF42195A42C63BBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAF42195A42C63BBA)
	 */
	isWarningMessageActive2(): boolean;

	/**
	 * Native: HUD::IS_WAYPOINT_ACTIVE
	 *
	 * Hash: 0x1DD1F58F493F1DA5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DD1F58F493F1DA5)
	 */
	isWaypointActive(): boolean;

	/**
	 * Native: HUD::LINK_NAMED_RENDERTARGET
	 *
	 * Hash: 0xF6C09E276AEB3F2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF6C09E276AEB3F2D)
	 */
	linkNamedRendertarget(modelHash: integer): void;

	/**
	 * Native: HUD::LOCK_MINIMAP_ANGLE
	 *
	 * Hash: 0x299FAEBB108AE05B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x299FAEBB108AE05B)
	 */
	lockMinimapAngle(angle: integer): void;

	/**
	 * Native: HUD::LOCK_MINIMAP_POSITION
	 *
	 * Hash: 0x1279E861A329E73F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1279E861A329E73F)
	 */
	lockMinimapPosition(x: number, y: number): void;

	/**
	 * Native: HUD::_LOG_DEBUG_INFO
	 *
	 * Hash: 0x2162C446DFDF38FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2162C446DFDF38FD)
	 */
	logDebugInfo(p0: string): void;

	/**
	 * Native: HUD::OPEN_ONLINE_POLICIES_MENU
	 *
	 * Hash: 0x805D7CBB36FD6C4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x805D7CBB36FD6C4C)
	 */
	openOnlinePoliciesMenu(): void;

	/**
	 * Native: HUD::OPEN_REPORTUGC_MENU
	 *
	 * Hash: 0x523A590C1A3CC0D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x523A590C1A3CC0D3)
	 */
	openReportugcMenu(): void;

	/**
	 * Native: HUD::OPEN_SOCIAL_CLUB_MENU
	 *
	 * Hash: 0x75D3691713C3B05A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75D3691713C3B05A)
	 */
	openSocialClubMenu(): void;

	/**
	 * Native: HUD::_OVERRIDE_MULTIPLAYER_CHAT_COLOUR
	 *
	 * Hash: 0xF47E567B3630DD12 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF47E567B3630DD12)
	 */
	overrideMultiplayerChatColour(p0: integer, hudColor: integer): void;

	/**
	 * Native: HUD::_OVERRIDE_MULTIPLAYER_CHAT_PREFIX
	 *
	 * Hash: 0x6A1738B4323FE2D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6A1738B4323FE2D9)
	 */
	overrideMultiplayerChatPrefix(gxtEntryHash: integer): void;

	/**
	 * Native: HUD::PAUSE_MENU_ACTIVATE_CONTEXT
	 *
	 * Hash: 0xDD564BDD0472C936 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD564BDD0472C936)
	 */
	pauseMenuActivateContext(contextHash: integer): void;

	/**
	 * Native: HUD::PAUSE_MENU_DEACTIVATE_CONTEXT
	 *
	 * Hash: 0x444D8CF241EC25C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x444D8CF241EC25C5)
	 */
	pauseMenuDeactivateContext(contextHash: integer): void;

	/**
	 * Native: HUD::PAUSE_MENU_IS_CONTEXT_ACTIVE
	 *
	 * Hash: 0x84698AB38D0C6636 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x84698AB38D0C6636)
	 */
	pauseMenuIsContextActive(contextHash: integer): boolean;

	/**
	 * Native: HUD::PAUSE_MENU_IS_CONTEXT_MENU_ACTIVE
	 *
	 * Hash: 0x2A25ADC48F87841F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2A25ADC48F87841F)
	 */
	pauseMenuIsContextMenuActive(): boolean;

	/**
	 * Native: HUD::PAUSE_MENU_SET_BUSY_SPINNER
	 *
	 * Hash: 0xC78E239AC5B2DDB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC78E239AC5B2DDB9)
	 */
	pauseMenuSetBusySpinner(p0: boolean, position: integer, spinnerIndex: integer): void;

	/**
	 * Native: HUD::PRELOAD_BUSYSPINNER
	 *
	 * Hash: 0xC65AB383CD91DF98 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC65AB383CD91DF98)
	 */
	preloadBusyspinner(): void;

	/**
	 * Native: HUD::PULSE_BLIP
	 *
	 * Hash: 0x742D6FD43115AF73 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x742D6FD43115AF73)
	 */
	pulseBlip(blip: Handle): void;

	/**
	 * Native: HUD::REFRESH_WAYPOINT
	 *
	 * Hash: 0x81FA173F170560D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x81FA173F170560D1)
	 */
	refreshWaypoint(): void;

	/**
	 * Native: HUD::REGISTER_NAMED_RENDERTARGET
	 *
	 * Hash: 0x57D9C12635E25CE3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57D9C12635E25CE3)
	 */
	registerNamedRendertarget(name: string, p1: boolean): boolean;

	/**
	 * Native: HUD::RELEASE_CONTROL_OF_FRONTEND
	 *
	 * Hash: 0x14621BB1DF14E2B2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14621BB1DF14E2B2)
	 */
	releaseControlOfFrontend(): void;

	/**
	 * Native: HUD::RELEASE_NAMED_RENDERTARGET
	 *
	 * Hash: 0xE9F6FFE837354DD4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE9F6FFE837354DD4)
	 */
	releaseNamedRendertarget(name: string): boolean;

	/**
	 * Native: HUD::REMOVE_BLIP
	 *
	 * Hash: 0x86A652570E5F25DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x86A652570E5F25DD)
	 */
	removeBlip(blip: Handle): Handle;

	/**
	 * Native: HUD::REMOVE_MP_GAMER_TAG
	 *
	 * Hash: 0x31698AA80E0223F8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x31698AA80E0223F8)
	 */
	removeMpGamerTag(gamerTagId: integer): void;

	/**
	 * Native: HUD::REMOVE_MULTIPLAYER_BANK_CASH
	 *
	 * Hash: 0xC7C6789AA1CFEDD0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC7C6789AA1CFEDD0)
	 */
	removeMultiplayerBankCash(): void;

	/**
	 * Native: HUD::REMOVE_MULTIPLAYER_HUD_CASH
	 *
	 * Hash: 0x968F270E39141ECA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x968F270E39141ECA)
	 */
	removeMultiplayerCash(): void;

	/**
	 * Native: HUD::REMOVE_MULTIPLAYER_WALLET_CASH
	 *
	 * Hash: 0x95CF81BD06EE1887 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95CF81BD06EE1887)
	 */
	removeMultiplayerWalletCash(): void;

	/**
	 * Native: HUD::_REMOVE_WARNING_MESSAGE_LIST_ITEMS
	 *
	 * Hash: 0x6EF54AB721DC6242 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6EF54AB721DC6242)
	 */
	removeWarningMessageListItems(): void;

	/**
	 * Native: HUD::REPLACE_HUD_COLOUR
	 *
	 * Hash: 0x1CCC708F0F850613 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CCC708F0F850613)
	 */
	replaceColour(hudColorIndex: integer, hudColorIndex2: integer): void;

	/**
	 * Native: HUD::REPLACE_HUD_COLOUR_WITH_RGBA
	 *
	 * Hash: 0xF314CF4F0211894E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF314CF4F0211894E)
	 */
	replaceColourWithRgba(hudColorIndex: integer, r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::REQUEST_ADDITIONAL_TEXT
	 *
	 * Hash: 0x71A78003C8E71424 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71A78003C8E71424)
	 */
	requestAdditionalText(gxt: string, slot: integer): void;

	/**
	 * Native: HUD::REQUEST_ADDITIONAL_TEXT_FOR_DLC
	 *
	 * Hash: 0x6009F9F1AE90D8A6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6009F9F1AE90D8A6)
	 */
	requestAdditionalTextForDlc(gxt: string, slot: integer): void;

	/**
	 * Native: HUD::RESET_HUD_COMPONENT_VALUES
	 *
	 * Hash: 0x450930E616475D0D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x450930E616475D0D)
	 */
	resetComponentValues(id: integer): void;

	/**
	 * Native: HUD::RESET_GLOBAL_ACTIONSCRIPT_FLAG
	 *
	 * Hash: 0xB99C4E4D9499DF29 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB99C4E4D9499DF29)
	 */
	resetGlobalActionscriptFlag(flagIndex: integer): void;

	/**
	 * Native: HUD::RESET_RETICULE_VALUES
	 *
	 * Hash: 0x12782CE0A636E9F0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x12782CE0A636E9F0)
	 */
	resetReticuleValues(): void;

	/**
	 * Native: HUD::RESTART_FRONTEND_MENU
	 *
	 * Hash: 0x10706DC6AD2D49C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x10706DC6AD2D49C0)
	 */
	restartFrontendMenu(menuHash: integer, p1: integer): void;

	/**
	 * Native: HUD::SET_ABILITY_BAR_VALUE
	 *
	 * Hash: 0x9969599CCFF5D85E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9969599CCFF5D85E)
	 */
	setAbilityBarValue(p0: number, p1: number): void;

	/**
	 * Native: HUD::_SET_ABILITY_BAR_VISIBILITY_IN_MULTIPLAYER
	 *
	 * Hash: 0x1DFEDD15019315A9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DFEDD15019315A9)
	 */
	setAbilityBarVisibilityInMultiplayer(visible: boolean): void;

	/**
	 * Native: HUD::_SET_ALLOW_ABILITY_BAR_IN_MULTIPLAYER
	 *
	 * Hash: 0x889329C80FE5963C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x889329C80FE5963C)
	 */
	setAllowAbilityBarInMultiplayer(toggle: boolean): void;

	/**
	 * Native: HUD::SET_BIGMAP_ACTIVE
	 *
	 * Hash: 0x231C8F89D0539D8F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x231C8F89D0539D8F)
	 */
	setBigmapActive(toggleBigMap: boolean, showFullMap: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_ALPHA
	 *
	 * Hash: 0x45FF974EEE1C8734 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x45FF974EEE1C8734)
	 */
	setBlipAlpha(blip: Handle, alpha: integer): void;

	/**
	 * Native: HUD::SET_BLIP_AS_FRIENDLY
	 *
	 * Hash: 0x6F6F290102C02AB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F6F290102C02AB4)
	 */
	setBlipAsFriendly(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_AS_MINIMAL_ON_EDGE
	 *
	 * Hash: 0x2B6D467DAB714E8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2B6D467DAB714E8D)
	 */
	setBlipAsMinimalOnEdge(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_AS_MISSION_CREATOR_BLIP
	 *
	 * Hash: 0x24AC0137444F9FD5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x24AC0137444F9FD5)
	 */
	setBlipAsMissionCreatorBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_AS_SHORT_RANGE
	 *
	 * Hash: 0xBE8BE4FE60E27B72 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE8BE4FE60E27B72)
	 */
	setBlipAsShortRange(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_BRIGHT
	 *
	 * Hash: 0xB203913733F27884 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB203913733F27884)
	 */
	setBlipBright(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_CATEGORY
	 *
	 * Hash: 0x234CDD44D996FD9A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x234CDD44D996FD9A)
	 */
	setBlipCategory(blip: Handle, index: integer): void;

	/**
	 * Native: HUD::SET_BLIP_COLOUR
	 *
	 * Hash: 0x03D7FB09E75D6B7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x03D7FB09E75D6B7E)
	 */
	setBlipColour(blip: Handle, color: integer): void;

	/**
	 * Native: HUD::SET_BLIP_COORDS
	 *
	 * Hash: 0xAE2AF67E9D9AF65D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE2AF67E9D9AF65D)
	 */
	setBlipCoords(blip: Handle, posX: number, posY: number, posZ: number): void;

	/**
	 * Native: HUD::SET_BLIP_DISPLAY
	 *
	 * Hash: 0x9029B2F3DA924928 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9029B2F3DA924928)
	 */
	setBlipDisplay(blip: Handle, displayId: integer): void;

	/**
	 * Native: HUD::_SET_BLIP_DISPLAY_INDICATOR_ON_BLIP
	 *
	 * Hash: 0xC4278F70131BAA6D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC4278F70131BAA6D)
	 */
	setBlipDisplayIndicatorOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_FADE
	 *
	 * Hash: 0x2AEE8F8390D2298C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2AEE8F8390D2298C)
	 */
	setBlipFade(blip: Handle, opacity: integer, duration: integer): void;

	/**
	 * Native: HUD::SET_BLIP_FLASHES
	 *
	 * Hash: 0xB14552383D39CE3E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB14552383D39CE3E)
	 */
	setBlipFlashes(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_FLASHES_ALTERNATE
	 *
	 * Hash: 0x2E8D9498C56DD0D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2E8D9498C56DD0D1)
	 */
	setBlipFlashesAlternate(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_FLASH_INTERVAL
	 *
	 * Hash: 0xAA51DB313C010A7E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAA51DB313C010A7E)
	 */
	setBlipFlashInterval(blip: Handle, p1: integer): void;

	/**
	 * Native: HUD::SET_BLIP_FLASH_TIMER
	 *
	 * Hash: 0xD3CD6FD297AE87CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3CD6FD297AE87CC)
	 */
	setBlipFlashTimer(blip: Handle, duration: integer): void;

	/**
	 * Native: HUD::SET_BLIP_HIDDEN_ON_LEGEND
	 *
	 * Hash: 0x54318C915D27E4CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x54318C915D27E4CE)
	 */
	setBlipHiddenOnLegend(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_HIGH_DETAIL
	 *
	 * Hash: 0xE2590BC29220CEBB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2590BC29220CEBB)
	 */
	setBlipHighDetail(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_NAME_FROM_TEXT_FILE
	 *
	 * Hash: 0xEAA0FFE120D92784 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEAA0FFE120D92784)
	 */
	setBlipNameFromTextFile(blip: Handle, gxtEntry: string): void;

	/**
	 * Native: HUD::SET_BLIP_NAME_TO_PLAYER_NAME
	 *
	 * Hash: 0x127DE7B20C60A6A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x127DE7B20C60A6A3)
	 */
	setBlipNameToPlayerName(blip: Handle, player: Handle): void;

	/**
	 * Native: HUD::SET_BLIP_PRIORITY
	 *
	 * Hash: 0xAE9FC9EF6A9FAC79 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAE9FC9EF6A9FAC79)
	 */
	setBlipPriority(blip: Handle, priority: integer): void;

	/**
	 * Native: HUD::SET_BLIP_ROTATION
	 *
	 * Hash: 0xF87683CDF73C3F6E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF87683CDF73C3F6E)
	 */
	setBlipRotation(blip: Handle, rotation: integer): void;

	/**
	 * Native: HUD::SET_BLIP_ROUTE
	 *
	 * Hash: 0x4F7D8A9BFB0B43E9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F7D8A9BFB0B43E9)
	 */
	setBlipRoute(blip: Handle, enabled: boolean): void;

	/**
	 * Native: HUD::SET_BLIP_ROUTE_COLOUR
	 *
	 * Hash: 0x837155CD2F63DA09 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x837155CD2F63DA09)
	 */
	setBlipRouteColour(blip: Handle, colour: integer): void;

	/**
	 * Native: HUD::SET_BLIP_SCALE
	 *
	 * Hash: 0xD38744167B2FA257 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD38744167B2FA257)
	 */
	setBlipScale(blip: Handle, scale: number): void;

	/**
	 * Native: HUD::_SET_BLIP_SCALE_TRANSFORMATION
	 *
	 * Hash: 0xCD6524439909C979 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCD6524439909C979)
	 */
	setBlipScaleTransformation(blip: Handle, xScale: number, yScale: number): void;

	/**
	 * Native: HUD::SET_BLIP_SECONDARY_COLOUR
	 *
	 * Hash: 0x14892474891E09EB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14892474891E09EB)
	 */
	setBlipSecondaryColour(blip: Handle, r: integer, g: integer, b: integer): void;

	/**
	 * Native: HUD::SET_BLIP_SHOW_CONE
	 *
	 * p2 defaults to 0
	 *
	 * Hash: 0x13127EC3665E8EE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13127EC3665E8EE1)
	 */
	setBlipShowCone(blip: Handle, toggle: boolean, p2?: integer): void;

	/**
	 * Native: HUD::SET_BLIP_SPRITE
	 *
	 * Hash: 0xDF735600A4696DAF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF735600A4696DAF)
	 */
	setBlipSprite(blip: Handle, spriteId: integer): void;

	/**
	 * Native: HUD::_SET_BLIP_SQUARED_ROTATION
	 *
	 * Hash: 0xA8B6AFDAC320AC87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8B6AFDAC320AC87)
	 */
	setBlipSquaredRotation(blip: Handle, heading: number): void;

	/**
	 * Native: HUD::SET_COLOUR_OF_NEXT_TEXT_COMPONENT
	 *
	 * Hash: 0x39BBF623FC803EAC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x39BBF623FC803EAC)
	 */
	setColourOfNextTextComponent(hudColor: integer): void;

	/**
	 * Native: HUD::SET_HUD_COMPONENT_POSITION
	 *
	 * Hash: 0xAABB1F56E2A17CED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAABB1F56E2A17CED)
	 */
	setComponentPosition(id: integer, x: number, y: number): void;

	/**
	 * Native: HUD::_SET_DIRECTOR_MODE_CLEAR_TRIGGERED_FLAG
	 *
	 * Hash: 0x2632482FD6B9AB87 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2632482FD6B9AB87)
	 */
	setDirectorModeClearTriggeredFlag(): void;

	/**
	 * Native: HUD::SET_FLOATING_HELP_TEXT_SCREEN_POSITION
	 *
	 * Hash: 0x7679CC1BCEBE3D4C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7679CC1BCEBE3D4C)
	 */
	setFloatingHelpTextScreenPosition(hudIndex: integer, x: number, y: number): void;

	/**
	 * Native: HUD::SET_FLOATING_HELP_TEXT_STYLE
	 *
	 * Hash: 0x788E7FD431BD67F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x788E7FD431BD67F1)
	 */
	setFloatingHelpTextStyle(hudIndex: integer, p1: integer, p2: integer, p3: integer, p4: integer, p5: integer): void;

	/**
	 * Native: HUD::SET_FLOATING_HELP_TEXT_TO_ENTITY
	 *
	 * Hash: 0xB094BC1DB4018240 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB094BC1DB4018240)
	 */
	setFloatingHelpTextToEntity(hudIndex: integer, entity: Handle, offsetX: number, offsetY: number): void;

	/**
	 * Native: HUD::SET_FLOATING_HELP_TEXT_WORLD_POSITION
	 *
	 * Hash: 0x784BA7E0ECEB4178 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x784BA7E0ECEB4178)
	 */
	setFloatingHelpTextWorldPosition(hudIndex: integer, x: number, y: number, z: number): void;

	/**
	 * Native: HUD::SET_FRONTEND_ACTIVE
	 *
	 * Hash: 0x745711A75AB09277 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x745711A75AB09277)
	 */
	setFrontendActive(active: boolean): void;

	/**
	 * Native: HUD::SET_GPS_CUSTOM_ROUTE_RENDER
	 *
	 * Hash: 0x900086F371220B6F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x900086F371220B6F)
	 */
	setGpsCustomRouteRender(toggle: boolean, radarThickness: integer, mapThickness: integer): void;

	/**
	 * Native: HUD::SET_GPS_FLAGS
	 *
	 * Hash: 0x5B440763A4C8D15B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B440763A4C8D15B)
	 */
	setGpsFlags(p0: integer, p1: number): void;

	/**
	 * Native: HUD::SET_GPS_FLASHES
	 *
	 * Hash: 0x320D0E0D936A0E9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x320D0E0D936A0E9B)
	 */
	setGpsFlashes(toggle: boolean): void;

	/**
	 * Native: HUD::SET_GPS_MULTI_ROUTE_RENDER
	 *
	 * Hash: 0x3DDA37128DD1ACA8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3DDA37128DD1ACA8)
	 */
	setGpsMultiRouteRender(toggle: boolean): void;

	/**
	 * Native: HUD::SET_HEALTH_HUD_DISPLAY_VALUES
	 *
	 * Hash: 0x3F5CC444DCAAA8F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3F5CC444DCAAA8F2)
	 */
	setHealthDisplayValues(health: integer, capacity: integer, wasAdded: boolean): void;

	/**
	 * Native: HUD::_SET_HELP_MESSAGE_TEXT_STYLE
	 *
	 * Hash: 0xB9C362BABECDDC7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB9C362BABECDDC7A)
	 */
	setHelpMessageTextStyle(style: integer, hudColor: integer, alpha: integer, p3: integer, p4: integer): void;

	/**
	 * Native: HUD::_SET_INTERIOR_ZOOM_LEVEL_DECREASED
	 *
	 * Hash: 0x7EC8ABA5E74B3D7A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7EC8ABA5E74B3D7A)
	 */
	setInteriorZoomLevelDecreased(toggle: boolean): void;

	/**
	 * Native: HUD::_SET_INTERIOR_ZOOM_LEVEL_INCREASED
	 *
	 * Hash: 0x504DFE62A1692296 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x504DFE62A1692296)
	 */
	setInteriorZoomLevelIncreased(toggle: boolean): void;

	/**
	 * Native: HUD::_SET_MAIN_PLAYER_BLIP_COLOUR
	 *
	 * Hash: 0x7B21E0BB01E8224A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B21E0BB01E8224A)
	 */
	setMainPlayerBlipColour(color: integer): void;

	/**
	 * Native: HUD::SET_MAX_ARMOUR_HUD_DISPLAY
	 *
	 * Hash: 0x06A320535F5F0248 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06A320535F5F0248)
	 */
	setMaxArmourDisplay(maximumValue: integer): void;

	/**
	 * Native: HUD::SET_MAX_HEALTH_HUD_DISPLAY
	 *
	 * Hash: 0x975D66A0BC17064C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x975D66A0BC17064C)
	 */
	setMaxHealthDisplay(maximumValue: integer): void;

	/**
	 * Native: HUD::_SET_MINIMAP_ALTITUDE_INDICATOR_LEVEL
	 *
	 * Hash: 0xD201F3FF917A506D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD201F3FF917A506D)
	 */
	setMinimapAltitudeIndicatorLevel(altitude: number, p1: boolean, p2: integer): void;

	/**
	 * Native: HUD::SET_MINIMAP_BLOCK_WAYPOINT
	 *
	 * Hash: 0x58FADDED207897DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x58FADDED207897DC)
	 */
	setMinimapBlockWaypoint(toggle: boolean): void;

	/**
	 * Native: HUD::SET_MINIMAP_COMPONENT
	 *
	 * Hash: 0x75A9A10948D1DEA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75A9A10948D1DEA6)
	 */
	setMinimapComponent(componentId: integer, toggle: boolean, overrideColor: integer): integer;

	/**
	 * Native: HUD::SET_MINIMAP_FOW_REVEAL_COORDINATE
	 *
	 * Hash: 0x0923DBF87DFF735E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0923DBF87DFF735E)
	 */
	setMinimapFowRevealCoordinate(x: number, y: number, z: number): void;

	/**
	 * Native: HUD::SET_MINIMAP_GOLF_COURSE
	 *
	 * Hash: 0x71BDB63DBAF8DA59 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x71BDB63DBAF8DA59)
	 */
	setMinimapGolfCourse(hole: integer): void;

	/**
	 * Native: HUD::SET_MINIMAP_GOLF_COURSE_OFF
	 *
	 * Hash: 0x35EDD5B2E3FF01C0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35EDD5B2E3FF01C0)
	 */
	setMinimapGolfCourseOff(): void;

	/**
	 * Native: HUD::SET_MINIMAP_HIDE_FOW
	 *
	 * Hash: 0xF8DEE0A5600CBB93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8DEE0A5600CBB93)
	 */
	setMinimapHideFow(toggle: boolean): void;

	/**
	 * Native: HUD::SET_MINIMAP_IN_PROLOGUE
	 *
	 * Hash: 0x9133955F1A2DA957 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9133955F1A2DA957)
	 */
	setMinimapInPrologue(toggle: boolean): void;

	/**
	 * Native: HUD::SET_MINIMAP_IN_SPECTATOR_MODE
	 *
	 * Hash: 0x1A5CD7752DD28CD3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1A5CD7752DD28CD3)
	 */
	setMinimapInSpectatorMode(toggle: boolean, ped: Handle): void;

	/**
	 * Native: HUD::_SET_MINIMAP_SONAR_ENABLED
	 *
	 * Hash: 0x6B50FC8749632EC1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B50FC8749632EC1)
	 */
	setMinimapSonarEnabled(toggle: boolean): void;

	/**
	 * Native: HUD::SET_MISSION_NAME
	 *
	 * Hash: 0x5F28ECF5FC84772F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F28ECF5FC84772F)
	 */
	setMissionName(p0: boolean, name: string): void;

	/**
	 * Native: HUD::_SET_MISSION_NAME_2
	 *
	 * Hash: 0xE45087D85F468BC2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE45087D85F468BC2)
	 */
	setMissionName2(p0: boolean, name: string): void;

	/**
	 * Native: HUD::_SET_MOUSE_CURSOR_ACTIVE_THIS_FRAME
	 *
	 * Hash: 0xAAE7CE1D63167423 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAAE7CE1D63167423)
	 */
	setMouseCursorActiveThisFrame(): void;

	/**
	 * Native: HUD::_SET_MOUSE_CURSOR_SPRITE
	 *
	 * Hash: 0x8DB8CFFD58B62552 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8DB8CFFD58B62552)
	 */
	setMouseCursorSprite(spriteId: integer): void;

	/**
	 * Native: HUD::_SET_MOUSE_CURSOR_VISIBLE_IN_MENUS
	 *
	 * Hash: 0x98215325A695E78A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x98215325A695E78A)
	 */
	setMouseCursorVisibleInMenus(toggle: boolean): void;

	/**
	 * Native: HUD::_SET_MP_GAMER_HEALTH_BAR_DISPLAY
	 *
	 * Hash: 0xD29EC58C2F6B5014 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD29EC58C2F6B5014)
	 */
	setMpGamerHealthBarDisplay(gamerTagId: integer, toggle: boolean): void;

	/**
	 * Native: HUD::_SET_MP_GAMER_HEALTH_BAR_MAX
	 *
	 * Hash: 0x1563FE35E9928E67 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1563FE35E9928E67)
	 */
	setMpGamerHealthBarMax(gamerTagId: integer, value: integer, maximumValue: integer): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_ALPHA
	 *
	 * Hash: 0xD48FE545CD46F857 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD48FE545CD46F857)
	 */
	setMpGamerTagAlpha(gamerTagId: integer, component: integer, alpha: integer): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_BIG_TEXT
	 *
	 * Hash: 0x7B7723747CCB55B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B7723747CCB55B6)
	 */
	setMpGamerTagBigText(gamerTagId: integer, string: string): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_COLOUR
	 *
	 * Hash: 0x613ED644950626AE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x613ED644950626AE)
	 */
	setMpGamerTagColour(gamerTagId: integer, component: integer, hudColorIndex: integer): void;

	/**
	 * Native: HUD::_SET_MP_GAMER_TAG_ENABLED
	 *
	 * Hash: 0xEE76FF7E6A0166B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEE76FF7E6A0166B0)
	 */
	setMpGamerTagEnabled(gamerTagId: integer, toggle: boolean): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_HEALTH_BAR_COLOUR
	 *
	 * Hash: 0x3158C77A7E888AB4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3158C77A7E888AB4)
	 */
	setMpGamerTagHealthBarColour(gamerTagId: integer, hudColorIndex: integer): void;

	/**
	 * Native: HUD::_SET_MP_GAMER_TAG_ICONS
	 *
	 * Hash: 0xA67F9C46D612B6F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA67F9C46D612B6F1)
	 */
	setMpGamerTagIcons(gamerTagId: integer, toggle: boolean): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_NAME
	 *
	 * Hash: 0xDEA2B8283BAA3944 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDEA2B8283BAA3944)
	 */
	setMpGamerTagName(gamerTagId: integer, string: string): void;

	/**
	 * Native: HUD::_SET_MP_GAMER_TAG_UNK
	 *
	 * Hash: 0x9C16459B2324B2CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9C16459B2324B2CF)
	 */
	setMpGamerTagUnk(gamerTagId: integer, p1: integer): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_VISIBILITY
	 *
	 * Hash: 0x63BB75ABEDC1F6A0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63BB75ABEDC1F6A0)
	 */
	setMpGamerTagVisibility(gamerTagId: integer, component: integer, toggle: boolean, p3: integer): void;

	/**
	 * Native: HUD::SET_MP_GAMER_TAG_WANTED_LEVEL
	 *
	 * Hash: 0xCF228E2AA03099C3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCF228E2AA03099C3)
	 */
	setMpGamerTagWantedLevel(gamerTagId: integer, wantedlvl: integer): void;

	/**
	 * Native: HUD::SET_MULTIPLAYER_BANK_CASH
	 *
	 * Hash: 0xDD21B55DF695CD0A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDD21B55DF695CD0A)
	 */
	setMultiplayerBankCash(): void;

	/**
	 * Native: HUD::SET_MULTIPLAYER_HUD_CASH
	 *
	 * Hash: 0xFD1D220394BCB824 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFD1D220394BCB824)
	 */
	setMultiplayerCash(p0: integer, p1: integer): void;

	/**
	 * Native: HUD::SET_MULTIPLAYER_WALLET_CASH
	 *
	 * Hash: 0xC2D15BEF167E27BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC2D15BEF167E27BC)
	 */
	setMultiplayerWalletCash(): void;

	/**
	 * Native: HUD::SET_NEW_WAYPOINT
	 *
	 * Hash: 0xFE43368D2AA4F2FC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE43368D2AA4F2FC)
	 */
	setNewWaypoint(x: number, y: number): void;

	/**
	 * Native: HUD::SET_PAUSE_MENU_ACTIVE
	 *
	 * Hash: 0xDF47FC56C71569CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDF47FC56C71569CF)
	 */
	setPauseMenuActive(toggle: boolean): void;

	/**
	 * Native: HUD::SET_PAUSE_MENU_PED_LIGHTING
	 *
	 * Hash: 0x3CA6050692BC61B0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3CA6050692BC61B0)
	 */
	setPauseMenuPedLighting(state: boolean): void;

	/**
	 * Native: HUD::SET_PAUSE_MENU_PED_SLEEP_STATE
	 *
	 * Hash: 0xECF128344E9FF9F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xECF128344E9FF9F1)
	 */
	setPauseMenuPedSleepState(state: boolean): void;

	/**
	 * Native: HUD::SET_PED_AI_BLIP_FORCED_ON
	 *
	 * Hash: 0x0C4BBF625CA98C4E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C4BBF625CA98C4E)
	 */
	setPedAiBlipForcedOn(ped: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_PED_AI_BLIP_GANG_ID
	 *
	 * Hash: 0xE52B8E7F85D39A08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE52B8E7F85D39A08)
	 */
	setPedAiBlipGangId(ped: Handle, gangId: integer): void;

	/**
	 * Native: HUD::SET_PED_AI_BLIP_HAS_CONE
	 *
	 * Hash: 0x3EED80DFF7325CAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3EED80DFF7325CAA)
	 */
	setPedAiBlipHasCone(ped: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SET_PED_AI_BLIP_NOTICE_RANGE
	 *
	 * Hash: 0x97C65887D4B37FA9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x97C65887D4B37FA9)
	 */
	setPedAiBlipNoticeRange(ped: Handle, range: number): void;

	/**
	 * Native: HUD::_SET_PED_AI_BLIP_SPRITE
	 *
	 * Hash: 0xFCFACD0DB9D7A57D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCFACD0DB9D7A57D)
	 */
	setPedAiBlipSprite(ped: Handle, spriteId: integer): void;

	/**
	 * Native: HUD::SET_PED_HAS_AI_BLIP
	 *
	 * Hash: 0xD30C50DF888D58B5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD30C50DF888D58B5)
	 */
	setPedHasAiBlip(ped: Handle, hasCone: boolean): void;

	/**
	 * Native: HUD::_SET_PED_HAS_AI_BLIP_WITH_COLOR
	 *
	 * Hash: 0xB13DCB4C6FAAD238 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB13DCB4C6FAAD238)
	 */
	setPedHasAiBlipWithColor(ped: Handle, hasCone: boolean, color: integer): void;

	/**
	 * Native: HUD::_SET_PLAYER_BLIP_POSITION_THIS_FRAME
	 *
	 * Hash: 0x77E2DD177910E1CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77E2DD177910E1CF)
	 */
	setPlayerBlipPositionThisFrame(x: number, y: number): void;

	/**
	 * Native: HUD::_SET_PLAYER_CASH_CHANGE
	 *
	 * Hash: 0x0772DF77852C2E30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0772DF77852C2E30)
	 */
	setPlayerCashChange(cash: integer, bank: integer): void;

	/**
	 * Native: HUD::_SET_PLAYER_IS_IN_DIRECTOR_MODE
	 *
	 * Hash: 0x808519373FD336A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x808519373FD336A3)
	 */
	setPlayerIsInDirectorMode(toggle: boolean): void;

	/**
	 * Native: HUD::SET_RACE_TRACK_RENDER
	 *
	 * Hash: 0x1EAC5F91BCBC5073 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1EAC5F91BCBC5073)
	 */
	setRaceTrackRender(toggle: boolean): void;

	/**
	 * Native: HUD::SET_RADAR_AS_EXTERIOR_THIS_FRAME
	 *
	 * Hash: 0xE81B7D2A3DAB2D81 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE81B7D2A3DAB2D81)
	 */
	setRadarAsExteriorThisFrame(): void;

	/**
	 * Native: HUD::SET_RADAR_AS_INTERIOR_THIS_FRAME
	 *
	 * Hash: 0x59E727A1C9D3E31A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59E727A1C9D3E31A)
	 */
	setRadarAsInteriorThisFrame(interior: integer, x: number, y: number, z: integer, zoom: integer): void;

	/**
	 * Native: HUD::SET_RADAR_ZOOM
	 *
	 * Hash: 0x096EF57A0C999BBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x096EF57A0C999BBA)
	 */
	setRadarZoom(zoomLevel: integer): void;

	/**
	 * Native: HUD::SET_RADAR_ZOOM_PRECISE
	 *
	 * Hash: 0xBD12C5EEE184C337 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBD12C5EEE184C337)
	 */
	setRadarZoomPrecise(zoom: number): void;

	/**
	 * Native: HUD::SET_RADAR_ZOOM_TO_BLIP
	 *
	 * Hash: 0xF98E4B3E56AFC7B1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF98E4B3E56AFC7B1)
	 */
	setRadarZoomToBlip(blip: Handle, zoom: number): void;

	/**
	 * Native: HUD::SET_RADAR_ZOOM_TO_DISTANCE
	 *
	 * Hash: 0xCB7CC0D58405AD41 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB7CC0D58405AD41)
	 */
	setRadarZoomToDistance(zoom: number): void;

	/**
	 * Native: HUD::SET_RADIUS_BLIP_EDGE
	 *
	 * Hash: 0x25615540D894B814 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25615540D894B814)
	 */
	setRadiusBlipEdge(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::_SET_SCRIPT_VARIABLE_2_HUD_COLOUR
	 *
	 * Hash: 0x16A304E6CB2BFAB9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x16A304E6CB2BFAB9)
	 */
	setScriptVariable2Colour(r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::SET_SCRIPT_VARIABLE_HUD_COLOUR
	 *
	 * Hash: 0xD68A5FF8A3A89874 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD68A5FF8A3A89874)
	 */
	setScriptVariableColour(r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::SET_SOCIAL_CLUB_TOUR
	 *
	 * Hash: 0x9E778248D6685FE0 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9E778248D6685FE0)
	 */
	setSocialClubTour(name: string): void;

	/**
	 * Native: HUD::SET_TEXT_CENTRE
	 *
	 * Hash: 0xC02F4DBFB51D988B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC02F4DBFB51D988B)
	 */
	setTextCentre(align: boolean): void;

	/**
	 * Native: HUD::_SET_TEXT_CHAT_UNK
	 *
	 * Hash: 0x1DB21A44B09E8BA3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1DB21A44B09E8BA3)
	 */
	setTextChatUnk(p0: boolean): void;

	/**
	 * Native: HUD::SET_TEXT_COLOUR
	 *
	 * Hash: 0xBE6B23FFA53FB442 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE6B23FFA53FB442)
	 */
	setTextColour(red: integer, green: integer, blue: integer, alpha: integer): void;

	/**
	 * Native: HUD::SET_TEXT_DROPSHADOW
	 *
	 * Hash: 0x465C84BC39F1C351 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x465C84BC39F1C351)
	 */
	setTextDropshadow(distance: integer, r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::SET_TEXT_DROP_SHADOW
	 *
	 * Hash: 0x1CA3E9EAC9D93E5E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CA3E9EAC9D93E5E)
	 */
	setTextDropShadow(distance: integer, r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::SET_TEXT_EDGE
	 *
	 * Hash: 0x441603240D202FA6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x441603240D202FA6)
	 */
	setTextEdge(p0: integer, r: integer, g: integer, b: integer, a: integer): void;

	/**
	 * Native: HUD::SET_TEXT_FONT
	 *
	 * Hash: 0x66E0276CC5F6B9DA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x66E0276CC5F6B9DA)
	 */
	setTextFont(fontType: integer): void;

	/**
	 * Native: HUD::SET_TEXT_JUSTIFICATION
	 *
	 * Hash: 0x4E096588B13FFECA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4E096588B13FFECA)
	 */
	setTextJustification(justifyType: integer): void;

	/**
	 * Native: HUD::SET_TEXT_LEADING
	 *
	 * Hash: 0xA50ABC31E3CDFAFF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA50ABC31E3CDFAFF)
	 */
	setTextLeading(p0: integer): void;

	/**
	 * Native: HUD::SET_TEXT_OUTLINE
	 *
	 * Hash: 0x2513DFB0FB8400FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2513DFB0FB8400FE)
	 */
	setTextOutline(): void;

	/**
	 * Native: HUD::SET_TEXT_PROPORTIONAL
	 *
	 * Hash: 0x038C1F517D7FDCF8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x038C1F517D7FDCF8)
	 */
	setTextProportional(p0: boolean): void;

	/**
	 * Native: HUD::SET_TEXT_RENDER_ID
	 *
	 * Hash: 0x5F15302936E07111 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F15302936E07111)
	 */
	setTextRenderId(renderId: integer): void;

	/**
	 * Native: HUD::SET_TEXT_RIGHT_JUSTIFY
	 *
	 * Hash: 0x6B3C4650BC8BEE47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B3C4650BC8BEE47)
	 */
	setTextRightJustify(toggle: boolean): void;

	/**
	 * Native: HUD::SET_TEXT_SCALE
	 *
	 * Hash: 0x07C837F9A01C34C9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x07C837F9A01C34C9)
	 */
	setTextScale(scale: number, size: number): void;

	/**
	 * Native: HUD::SET_TEXT_WRAP
	 *
	 * Hash: 0x63145D9C883A1A70 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x63145D9C883A1A70)
	 */
	setTextWrap(start: number, end: number): void;

	/**
	 * Native: HUD::_SET_TOGGLE_MINIMAP_HEIST_ISLAND
	 *
	 * Hash: 0x5E1460624D194A38 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5E1460624D194A38)
	 */
	setToggleMinimapHeistIsland(toggle: boolean): void;

	/**
	 * Native: HUD::SET_WARNING_MESSAGE
	 *
	 * errorCode defaults to 0
	 *
	 * Hash: 0x7B1776B3B53F8D74 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7B1776B3B53F8D74)
	 */
	setWarningMessage(
		titleMsg: string,
		flags: integer,
		promptMsg: string,
		p3: boolean,
		p4: integer,
		p5: string,
		p6: string,
		showBackground: boolean,
		errorCode?: integer
	): void;

	/**
	 * Native: HUD::_SET_WARNING_MESSAGE_LIST_ROW
	 *
	 * Hash: 0x0C5A80A9E096D529 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0C5A80A9E096D529)
	 */
	setWarningMessageListRow(
		index: integer,
		name: string,
		cash: integer,
		rp: integer,
		lvl: integer,
		colour: integer
	): boolean;

	/**
	 * Native: HUD::_SET_WARNING_MESSAGE_WITH_ALERT
	 *
	 * Hash: 0x15803FEC3B9A872B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15803FEC3B9A872B)
	 */
	setWarningMessageWithAlert(
		labelTitle: string,
		labelMessage: string,
		p2: integer,
		p3: integer,
		labelMessage2: string,
		p5: boolean,
		p6: integer,
		p7: integer,
		p8: string,
		p9: string,
		background: boolean,
		errorCode: integer
	): void;

	/**
	 * Native: HUD::SET_WARNING_MESSAGE_WITH_HEADER
	 *
	 * Hash: 0xDC38CC1E35B6A5D7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDC38CC1E35B6A5D7)
	 */
	setWarningMessageWithHeader(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: integer,
		entryLine2: string,
		p4: boolean,
		p5: integer,
		p8: boolean,
		p9: integer
	): SetWarningMessageWithHeaderResult;

	/**
	 * Native: HUD::SET_WARNING_MESSAGE_WITH_HEADER_AND_SUBSTRING_FLAGS
	 *
	 * Hash: 0x701919482C74B5AB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x701919482C74B5AB)
	 */
	setWarningMessageWithHeaderAndSubstringFlags(
		entryHeader: string,
		entryLine1: string,
		instructionalKey: integer,
		entryLine2: string,
		p4: boolean,
		p5: integer,
		additionalIntInfo: integer,
		additionalTextInfoLine1: string,
		additionalTextInfoLine2: string,
		showBackground: boolean,
		errorCode: integer
	): void;

	/**
	 * Native: HUD::_SET_WARNING_MESSAGE_WITH_HEADER_UNK
	 *
	 * Hash: 0x38B55259C2E078ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38B55259C2E078ED)
	 */
	setWarningMessageWithHeaderUnk(
		entryHeader: string,
		entryLine1: string,
		flags: integer,
		entryLine2: string,
		p4: boolean,
		p5: integer,
		showBg: boolean,
		p9: integer,
		p10: integer
	): SetWarningMessageWithHeaderUnkResult;

	/**
	 * Native: HUD::SET_WAYPOINT_OFF
	 *
	 * Hash: 0xA7E4E2D361C2627F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA7E4E2D361C2627F)
	 */
	setWaypointOff(): void;

	/**
	 * Native: HUD::HUD_SET_WEAPON_WHEEL_TOP_SLOT
	 *
	 * Hash: 0x72C1056D678BB7D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72C1056D678BB7D8)
	 */
	setWeaponWheelTopSlot(weaponHash: integer): void;

	/**
	 * Native: HUD::SET_WIDESCREEN_FORMAT
	 *
	 * Hash: 0xC3B07BA00A83B0F1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC3B07BA00A83B0F1)
	 */
	setWidescreenFormat(p0: integer): void;

	/**
	 * Native: HUD::SHOW_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0x0B4DF1FA60C0E664 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0B4DF1FA60C0E664)
	 */
	showComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::SHOW_CREW_INDICATOR_ON_BLIP
	 *
	 * Hash: 0xDCFB5D4DB8BF367E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDCFB5D4DB8BF367E)
	 */
	showCrewIndicatorOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SHOW_FRIEND_INDICATOR_ON_BLIP
	 *
	 * Hash: 0x23C3EB807312F01A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23C3EB807312F01A)
	 */
	showFriendIndicatorOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SHOW_HEADING_INDICATOR_ON_BLIP
	 *
	 * Hash: 0x5FBCA48327B914DF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5FBCA48327B914DF)
	 */
	showHeadingIndicatorOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SHOW_HEIGHT_ON_BLIP
	 *
	 * Hash: 0x75A16C3DA34F1245 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x75A16C3DA34F1245)
	 */
	showHeightOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::SHOW_NUMBER_ON_BLIP
	 *
	 * Hash: 0xA3C0B359DCB848B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA3C0B359DCB848B6)
	 */
	showNumberOnBlip(blip: Handle, number: integer): void;

	/**
	 * Native: HUD::SHOW_OUTLINE_INDICATOR_ON_BLIP
	 *
	 * Hash: 0xB81656BC81FE24D1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB81656BC81FE24D1)
	 */
	showOutlineIndicatorOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::_SHOW_SCRIPTED_HUD_COMPONENT_THIS_FRAME
	 *
	 * Hash: 0x4F38DCA127DAAEA2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F38DCA127DAAEA2)
	 */
	showScriptedComponentThisFrame(id: integer): void;

	/**
	 * Native: HUD::_SHOW_SIGNIN_UI
	 *
	 * Hash: 0x60E892BA4F5BDCA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x60E892BA4F5BDCA4)
	 */
	showSigninUi(): void;

	/**
	 * Native: HUD::SHOW_START_MISSION_INSTRUCTIONAL_BUTTON
	 *
	 * Hash: 0xF1A6C18B35BCADE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF1A6C18B35BCADE6)
	 */
	showStartMissionInstructionalButton(p0: boolean): void;

	/**
	 * Native: HUD::SHOW_TICK_ON_BLIP
	 *
	 * Hash: 0x74513EA3E505181E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x74513EA3E505181E)
	 */
	showTickOnBlip(blip: Handle, toggle: boolean): void;

	/**
	 * Native: HUD::START_GPS_CUSTOM_ROUTE
	 *
	 * Hash: 0xDB34E8D56FC13B08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDB34E8D56FC13B08)
	 */
	startGpsCustomRoute(hudColor: integer, displayOnFoot: boolean, followPlayer: boolean): void;

	/**
	 * Native: HUD::START_GPS_MULTI_ROUTE
	 *
	 * Hash: 0x3D3D15AF7BCAAF83 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D3D15AF7BCAAF83)
	 */
	startGpsMultiRoute(hudColor: integer, routeFromPlayer: boolean, displayOnFoot: boolean): void;

	/**
	 * Native: HUD::SUPPRESS_FRONTEND_RENDERING_THIS_FRAME
	 *
	 * Hash: 0xBA751764F0821256 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBA751764F0821256)
	 */
	suppressFrontendRenderingThisFrame(): void;

	/**
	 * Native: HUD::TAKE_CONTROL_OF_FRONTEND
	 *
	 * Hash: 0xEC9264727EEC0F28 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC9264727EEC0F28)
	 */
	takeControlOfFrontend(): void;

	/**
	 * Native: HUD::_THEFEED_ADD_TXD_REF
	 *
	 * Hash: 0x317EBA71D7543F52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x317EBA71D7543F52)
	 */
	thefeedAddTxdRef(): ThefeedAddTxdRefResult;

	/**
	 * Native: HUD::THEFEED_CLEAR_FROZEN_POST
	 *
	 * Hash: 0x80FE4F3AB4E1B62A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80FE4F3AB4E1B62A)
	 */
	thefeedClearFrozenPost(): void;

	/**
	 * Native: HUD::THEFEED_COMMENT_TELEPORT_POOL_OFF
	 *
	 * Hash: 0xADED7F5748ACAFE6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xADED7F5748ACAFE6)
	 */
	thefeedCommentTeleportPoolOff(): void;

	/**
	 * Native: HUD::THEFEED_COMMENT_TELEPORT_POOL_ON
	 *
	 * Hash: 0x56C8B608CFD49854 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x56C8B608CFD49854)
	 */
	thefeedCommentTeleportPoolOn(): void;

	/**
	 * Native: HUD::_THEFEED_DISABLE_LOADING_SCREEN_TIPS
	 *
	 * Hash: 0x32888337579A5970 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x32888337579A5970)
	 */
	thefeedDisableLoadingScreenTips(): void;

	/**
	 * Native: HUD::_THEFEED_DISPLAY_LOADING_SCREEN_TIPS
	 *
	 * Hash: 0x15CFA549788D35EF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15CFA549788D35EF)
	 */
	thefeedDisplayLoadingScreenTips(): void;

	/**
	 * Native: HUD::THEFEED_FLUSH_QUEUE
	 *
	 * Hash: 0xA8FDB297A8D25FBA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA8FDB297A8D25FBA)
	 */
	thefeedFlushQueue(): void;

	/**
	 * Native: HUD::THEFEED_FORCE_RENDER_OFF
	 *
	 * Hash: 0x583049884A2EEE3C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x583049884A2EEE3C)
	 */
	thefeedForceRenderOff(): void;

	/**
	 * Native: HUD::THEFEED_FORCE_RENDER_ON
	 *
	 * Hash: 0xA13C11E1B5C06BFC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA13C11E1B5C06BFC)
	 */
	thefeedForceRenderOn(): void;

	/**
	 * Native: HUD::THEFEED_FREEZE_NEXT_POST
	 *
	 * Hash: 0xFDEC055AB549E328 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDEC055AB549E328)
	 */
	thefeedFreezeNextPost(): void;

	/**
	 * Native: HUD::THEFEED_GET_FIRST_VISIBLE_DELETE_REMAINING
	 *
	 * Hash: 0x82352748437638CA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x82352748437638CA)
	 */
	thefeedGetFirstVisibleDeleteRemaining(): integer;

	/**
	 * Native: HUD::THEFEED_HIDE_THIS_FRAME
	 *
	 * Hash: 0x25F87B30C382FCA7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25F87B30C382FCA7)
	 */
	thefeedHideThisFrame(): void;

	/**
	 * Native: HUD::THEFEED_IS_PAUSED
	 *
	 * Hash: 0xA9CBFD40B3FA3010 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9CBFD40B3FA3010)
	 */
	thefeedIsPaused(): boolean;

	/**
	 * Native: HUD::THEFEED_ONLY_SHOW_TOOLTIPS
	 *
	 * Hash: 0x6F1554B0CC2089FA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6F1554B0CC2089FA)
	 */
	thefeedOnlyShowTooltips(toggle: boolean): void;

	/**
	 * Native: HUD::THEFEED_PAUSE
	 *
	 * Hash: 0xFDB423997FA30340 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDB423997FA30340)
	 */
	thefeedPause(): void;

	/**
	 * Native: HUD::THEFEED_REMOVE_ITEM
	 *
	 * Hash: 0xBE4390CB40B3E627 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBE4390CB40B3E627)
	 */
	thefeedRemoveItem(notificationId: integer): void;

	/**
	 * Native: HUD::THEFEED_RESET_ALL_PARAMETERS
	 *
	 * Hash: 0xFDD85225B2DEA55E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFDD85225B2DEA55E)
	 */
	thefeedResetAllParameters(): void;

	/**
	 * Native: HUD::THEFEED_RESUME
	 *
	 * Hash: 0xE1CD1E48E025E661 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1CD1E48E025E661)
	 */
	thefeedResume(): void;

	/**
	 * Native: HUD::_THEFEED_SET_ANIMPOSTFX_COLOR
	 *
	 * Hash: 0x17430B918701C342 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17430B918701C342)
	 */
	thefeedSetAnimpostfxColor(red: integer, green: integer, blue: integer, alpha: integer): void;

	/**
	 * Native: HUD::_THEFEED_SET_ANIMPOSTFX_COUNT
	 *
	 * Hash: 0x17AD8C9706BDD88A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x17AD8C9706BDD88A)
	 */
	thefeedSetAnimpostfxCount(count: integer): void;

	/**
	 * Native: HUD::_THEFEED_SET_ANIMPOSTFX_SOUND
	 *
	 * Hash: 0x4A0C7C9BB10ABB36 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4A0C7C9BB10ABB36)
	 */
	thefeedSetAnimpostfxSound(toggle: boolean): void;

	/**
	 * Native: HUD::_THEFEED_SET_FLUSH_ANIMPOSTFX
	 *
	 * Hash: 0xBAE4F9B97CD43B30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBAE4F9B97CD43B30)
	 */
	thefeedSetFlushAnimpostfx(p0: boolean): void;

	/**
	 * Native: HUD::_THEFEED_SET_NEXT_POST_BACKGROUND_COLOR
	 *
	 * Hash: 0x92F0DA1E27DB96DC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x92F0DA1E27DB96DC)
	 */
	thefeedSetNextPostBackgroundColor(hudColorIndex: integer): void;

	/**
	 * Native: HUD::THEFEED_SET_SCRIPTED_MENU_HEIGHT
	 *
	 * Hash: 0x55598D21339CB998 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x55598D21339CB998)
	 */
	thefeedSetScriptedMenuHeight(pos: number): void;

	/**
	 * Native: HUD::THEFEED_SPS_EXTEND_WIDESCREEN_OFF
	 *
	 * Hash: 0xB695E2CD0A2DA9EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB695E2CD0A2DA9EE)
	 */
	thefeedSpsExtendWidescreenOff(): void;

	/**
	 * Native: HUD::THEFEED_SPS_EXTEND_WIDESCREEN_ON
	 *
	 * Hash: 0xD4438C0564490E63 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD4438C0564490E63)
	 */
	thefeedSpsExtendWidescreenOn(): void;

	/**
	 * Native: HUD::TOGGLE_STEALTH_RADAR
	 *
	 * Hash: 0x6AFDFB93754950C7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6AFDFB93754950C7)
	 */
	toggleStealthRadar(toggle: boolean): void;

	/**
	 * Native: HUD::TRIGGER_SONAR_BLIP
	 *
	 * Hash: 0x72DD432F3CDFC0EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x72DD432F3CDFC0EE)
	 */
	triggerSonarBlip(posX: number, posY: number, posZ: number, radius: number, p4: integer): void;

	/**
	 * Native: HUD::UNLOCK_MINIMAP_ANGLE
	 *
	 * Hash: 0x8183455E16C42E3A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8183455E16C42E3A)
	 */
	unlockMinimapAngle(): void;

	/**
	 * Native: HUD::UNLOCK_MINIMAP_POSITION
	 *
	 * Hash: 0x3E93E06DB8EF1F30 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E93E06DB8EF1F30)
	 */
	unlockMinimapPosition(): void;

	/**
	 * Native: HUD::_HUD_WEAPON_WHEEL_GET_SELECTED_HASH
	 *
	 * Hash: 0xA48931185F0536FE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA48931185F0536FE)
	 */
	weaponWheelGetSelectedHash(): integer;

	/**
	 * Native: HUD::_HUD_WEAPON_WHEEL_GET_SLOT_HASH
	 *
	 * Hash: 0xA13E93403F26C812 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA13E93403F26C812)
	 */
	weaponWheelGetSlotHash(weaponTypeIndex: integer): integer;

	/**
	 * Native: HUD::_HUD_WEAPON_WHEEL_IGNORE_CONTROL_INPUT
	 *
	 * Hash: 0x14C9FDCC41F81F63 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14C9FDCC41F81F63)
	 */
	weaponWheelIgnoreControlInput(toggle: boolean): void;

	/**
	 * Native: HUD::_HUD_WEAPON_WHEEL_IGNORE_SELECTION
	 *
	 * Hash: 0x0AFC4AF510774B47 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0AFC4AF510774B47)
	 */
	weaponWheelIgnoreSelection(): void;

	unk: GameHudUnk;
}

interface GameHudMp extends GameHud {
	/**
	 * Applies the batch this frame. Example:
	 *
	 * ```
	 * // Disable weapon reticle
	 * mp.game.hud.setShowHudComponentsThisFrameBatch(false, [14]);
	 * mp.events.add('render', () => {
	 * 	mp.game.hud.applyShowHudComponentsThisFrameBatch();
	 * });
	 * ```
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::applyShowHudComponentsThisFrameBatch)
	 */
	applyShowHudComponentsThisFrameBatch(): void;

	/**
	 * Returns current area hash.
	 *
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::getCurrentAreaNameHash)
	 */
	getCurrentAreaNameHash(): Hash;

	/**
	 * Returns the current area name's label. You can use this with `mp.game.hud.getZoneFromNameId(label)` 
	 * or `mp.game.gxt.get(label)` to get the name of the zone but you probably want to use 
	 * `mp.game.hud.getCurrentAreaNameString()` instad.
	 *
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::getCurrentAreaNameLabel)
	 */
	getCurrentAreaNameLabel(): string;

	/**
	 * Returns current area name as a string. By using this you can avoid having to use `mp.game.ui.getNameOfZone(x, y, z)`.
	 *
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::getCurrentAreaNameString)
	 */
	getCurrentAreaNameString(): string;

	/**
	 * Returns current street name as a hash which you can then use with `mp.game.hud.getStreetNameFromHashKey(hash)` 
	 * to return the localised street name.
	 *
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::getCurrentStreetNameHash)
	 */
	getCurrentStreetNameHash(): Hash;

	/**
	 * Returns current street name as a string.
	 *
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::getCurrentStreetNameString)
	 */
	getCurrentStreetNameString(): string;

	/**
	 * Gets minimap component data for given name in frontend.xml. Returns undefined for invalid components.
	 *
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::getMinimapComponentValues)
	 */
	getMinimapComponentValues(
		name: string
	): { alignX: string; alignY: string; posX: number; posY: number; sizeX: number; sizeY: number } | undefined;

	/**
	 * Resets all minimap component data or specific component data if `name` argument is provided.
	 *
	 * You might want to use [mp.game.ui.setBigmapActive](https://wiki.rage.mp/index.php?title=Ui::setBigmapActive) to 
	 * force the minimap to re-render.
	 * 
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::resetMinimapComponentValues)
	 */
	resetMinimapComponentValues(name?: string): void;

	/**
	 * Sets minimap component data. Check frontend.xml for more data.
	 *
	 * You might want to use mp.game.ui.setBigmapActive to force the minimap to re-render.
	 * 
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::setMinimapComponentValues)
	 */
	setMinimapComponentValues(
		name: string,
		alignX: number,
		alignY: number,
		posX: number,
		posY: number,
		sizeX: number,
		sizeY: number
	): void;

	/**
	 * Sets the batch of hud components to show/not show. The batch is retained/persists between frames. Example:
	 *
	 * ```
	 * // Disable weapon reticle
	 * mp.game.hud.setShowHudComponentsThisFrameBatch(false, [14]);
	 * mp.events.add('render', () => {
	 * 	mp.game.hud.applyShowHudComponentsThisFrameBatch();
	 * });
	 * ```
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Ui::setShowHudComponentsThisFrameBatch)
	 * | [HUD Components List](https://wiki.rage.mp/index.php?title=HUD_Components)
	 */
	setShowHudComponentsThisFrameBatch(show: boolean, hudComponents: Array<RageEnums.Hud.Component | number>): void;
}
