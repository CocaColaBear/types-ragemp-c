/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GamePadLegacy {
	/**
	 * Native: PAD::GET_CONTROL_INSTRUCTIONAL_BUTTON
	 *
	 * Hash: 0x0499D7B09FC9B407 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0499D7B09FC9B407)
	 */
	getControlActionName(padIndex: integer, control: integer, p2: boolean): string;

	/**
	 * Native: PAD::_IS_USING_KEYBOARD
	 *
	 * Hash: 0xA571D46727E2B718 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA571D46727E2B718)
	 */
	isInputDisabled(padIndex: integer): boolean;

	/**
	 * Native: PAD::_IS_USING_KEYBOARD_2
	 *
	 * Hash: 0x13337B38DB572509 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13337B38DB572509)
	 */
	isInputJustDisabled(padIndex: integer): boolean;

	/**
	 * Native: PAD::SET_PAD_SHAKE
	 *
	 * Hash: 0x48B3886C1358D0D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48B3886C1358D0D5)
	 */
	setPadShake(padIndex: integer, duration: integer, frequency: integer): void;

	/**
	 * Native: PAD::SET_PLAYERPAD_SHAKES_WHEN_CONTROLLER_DISABLED
	 *
	 * Hash: 0x798FDEB5B1575088 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x798FDEB5B1575088)
	 */
	setPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;

	/**
	 * Native: PAD::STOP_PAD_SHAKE
	 *
	 * Hash: 0x38C16A305E8CDC8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38C16A305E8CDC8D)
	 */
	stopPadShake(padIndex: integer): void;
}

interface GamePadUnk {
	/**
	 * Native: PAD::_0x14D29BB12D47F68C
	 *
	 * Hash: 0x14D29BB12D47F68C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x14D29BB12D47F68C)
	 */
	_0x14D29BB12D47F68C(p0: integer, p1: integer, p2: integer, p3: integer, p4: integer): void;

	/**
	 * Native: PAD::_0x23F09EADC01449D6
	 *
	 * Hash: 0x23F09EADC01449D6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x23F09EADC01449D6)
	 */
	_0x23F09EADC01449D6(padIndex: integer): boolean;

	/**
	 * Native: PAD::_0x25AAA32BDC98F2A3
	 *
	 * Hash: 0x25AAA32BDC98F2A3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25AAA32BDC98F2A3)
	 */
	_0x25AAA32BDC98F2A3(): integer;

	/**
	 * Native: PAD::_0x5B73C77D9EB66E24
	 *
	 * Hash: 0x5B73C77D9EB66E24 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B73C77D9EB66E24)
	 */
	_0x5B73C77D9EB66E24(p0: boolean): void;

	/**
	 * Native: PAD::_0x6CD79468A1E595C6
	 *
	 * Hash: 0x6CD79468A1E595C6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CD79468A1E595C6)
	 */
	_0x6CD79468A1E595C6(padIndex: integer): boolean;

	/**
	 * Native: PAD::_0x7F4724035FDCA1DD
	 *
	 * Hash: 0x7F4724035FDCA1DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7F4724035FDCA1DD)
	 */
	_0x7F4724035FDCA1DD(padIndex: integer): void;

	/**
	 * Native: PAD::_0xA0CEFCEA390AAB9B
	 *
	 * Hash: 0xA0CEFCEA390AAB9B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA0CEFCEA390AAB9B)
	 */
	_0xA0CEFCEA390AAB9B(p0: integer): void;

	/**
	 * Native: PAD::_0xCB0360EFEFB2580D
	 *
	 * Hash: 0xCB0360EFEFB2580D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCB0360EFEFB2580D)
	 */
	_0xCB0360EFEFB2580D(padIndex: integer): void;

	/**
	 * Native: PAD::_0xD7D22F5592AED8BA
	 *
	 * Hash: 0xD7D22F5592AED8BA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD7D22F5592AED8BA)
	 */
	_0xD7D22F5592AED8BA(p0: integer): integer;

	/**
	 * Native: PAD::_0xE1615EC03B3BB4FD
	 *
	 * Hash: 0xE1615EC03B3BB4FD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE1615EC03B3BB4FD)
	 */
	_0xE1615EC03B3BB4FD(): boolean;
}

interface GamePad extends GamePadLegacy {
	/**
	 * Native: PAD::DISABLE_ALL_CONTROL_ACTIONS
	 *
	 * Hash: 0x5F4B6931816E599B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5F4B6931816E599B)
	 */
	disableAllControlActions(padIndex: integer): void;

	/**
	 * Native: PAD::DISABLE_CONTROL_ACTION
	 *
	 * Hash: 0xFE99B66D079CF6BC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFE99B66D079CF6BC)
	 */
	disableControlAction(padIndex: integer, control: integer, disable: boolean): void;

	/**
	 * Native: PAD::ENABLE_ALL_CONTROL_ACTIONS
	 *
	 * Hash: 0xA5FFE9B05F199DE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5FFE9B05F199DE7)
	 */
	enableAllControlActions(padIndex: integer): void;

	/**
	 * Native: PAD::ENABLE_CONTROL_ACTION
	 *
	 * Hash: 0x351220255D64C155 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x351220255D64C155)
	 */
	enableControlAction(padIndex: integer, control: integer, enable: boolean): void;

	/**
	 * Native: PAD::GET_ALLOW_MOVEMENT_WHILE_ZOOMED
	 *
	 * Hash: 0xFC859E2374407556 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC859E2374407556)
	 */
	getAllowMovementWhileZoomed(): boolean;

	/**
	 * Native: PAD::GET_CONTROL_GROUP_INSTRUCTIONAL_BUTTON
	 *
	 * Hash: 0x80C2FD58D720C801 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x80C2FD58D720C801)
	 */
	getControlGroupInstructionalButton(padIndex: integer, controlGroup: integer, p2: boolean): string;

	/**
	 * Native: PAD::GET_CONTROL_INSTRUCTIONAL_BUTTON
	 *
	 * Hash: 0x0499D7B09FC9B407 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0499D7B09FC9B407)
	 */
	getControlInstructionalButton(padIndex: integer, control: integer, p2: boolean): string;

	/**
	 * Native: PAD::GET_CONTROL_NORMAL
	 *
	 * Hash: 0xEC3C9B8D5327B563 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEC3C9B8D5327B563)
	 */
	getControlNormal(padIndex: integer, control: integer): number;

	/**
	 * Native: PAD::GET_CONTROL_UNBOUND_NORMAL
	 *
	 * Hash: 0x5B84D09CEC5209C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B84D09CEC5209C5)
	 */
	getControlUnboundNormal(padIndex: integer, control: integer): number;

	/**
	 * Native: PAD::GET_CONTROL_VALUE
	 *
	 * Hash: 0xD95E79E8686D2C27 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD95E79E8686D2C27)
	 */
	getControlValue(padIndex: integer, control: integer): integer;

	/**
	 * Native: PAD::GET_DISABLED_CONTROL_NORMAL
	 *
	 * Hash: 0x11E65974A982637C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x11E65974A982637C)
	 */
	getDisabledControlNormal(padIndex: integer, control: integer): number;

	/**
	 * Native: PAD::GET_DISABLED_CONTROL_UNBOUND_NORMAL
	 *
	 * Hash: 0x4F8A26A890FD62FB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F8A26A890FD62FB)
	 */
	getDisabledControlUnboundNormal(padIndex: integer, control: integer): number;

	/**
	 * Native: PAD::GET_IS_USING_ALTERNATE_DRIVEBY
	 *
	 * Hash: 0x0F70731BACCFBB96 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0F70731BACCFBB96)
	 */
	getIsUsingAlternateDriveby(): boolean;

	/**
	 * Native: PAD::GET_LOCAL_PLAYER_AIM_STATE
	 *
	 * Hash: 0xBB41AFBBBC0A0287 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBB41AFBBBC0A0287)
	 */
	getLocalPlayerAimState(): integer;

	/**
	 * Native: PAD::_GET_LOCAL_PLAYER_AIM_STATE_2
	 *
	 * Hash: 0x59B9A7AF4C95133C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x59B9A7AF4C95133C)
	 */
	getLocalPlayerAimState2(): integer;

	/**
	 * Native: PAD::IS_CONTROL_ENABLED
	 *
	 * Hash: 0x1CEA6BFDF248E5D9 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1CEA6BFDF248E5D9)
	 */
	isControlEnabled(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_CONTROL_JUST_PRESSED
	 *
	 * Hash: 0x580417101DDB492F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x580417101DDB492F)
	 */
	isControlJustPressed(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_CONTROL_JUST_RELEASED
	 *
	 * Hash: 0x50F940259D3841E6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50F940259D3841E6)
	 */
	isControlJustReleased(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_CONTROL_PRESSED
	 *
	 * Hash: 0xF3A21BCD95725A4A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF3A21BCD95725A4A)
	 */
	isControlPressed(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_CONTROL_RELEASED
	 *
	 * Hash: 0x648EE3E7F38877DD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x648EE3E7F38877DD)
	 */
	isControlReleased(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_DISABLED_CONTROL_JUST_PRESSED
	 *
	 * Hash: 0x91AEF906BCA88877 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x91AEF906BCA88877)
	 */
	isDisabledControlJustPressed(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_DISABLED_CONTROL_JUST_RELEASED
	 *
	 * Hash: 0x305C8DCD79DA8B0F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x305C8DCD79DA8B0F)
	 */
	isDisabledControlJustReleased(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_DISABLED_CONTROL_PRESSED
	 *
	 * Hash: 0xE2587F8CBBD87B1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE2587F8CBBD87B1D)
	 */
	isDisabledControlPressed(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_DISABLED_CONTROL_RELEASED
	 *
	 * Hash: 0xFB6C4072E9A32E92 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFB6C4072E9A32E92)
	 */
	isDisabledControlReleased(padIndex: integer, control: integer): boolean;

	/**
	 * Native: PAD::IS_LOOK_INVERTED
	 *
	 * Hash: 0x77B612531280010D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x77B612531280010D)
	 */
	isLookInverted(): boolean;

	/**
	 * Native: PAD::_IS_USING_KEYBOARD
	 *
	 * Hash: 0xA571D46727E2B718 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA571D46727E2B718)
	 */
	isUsingKeyboard(padIndex: integer): boolean;

	/**
	 * Native: PAD::_IS_USING_KEYBOARD_2
	 *
	 * Hash: 0x13337B38DB572509 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13337B38DB572509)
	 */
	isUsingKeyboard2(padIndex: integer): boolean;

	/**
	 * Native: PAD::_RESET_INPUT_MAPPING_SCHEME
	 *
	 * Hash: 0x643ED62D5EA3BEBD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x643ED62D5EA3BEBD)
	 */
	resetInputMappingScheme(): void;

	/**
	 * Native: PAD::SET_CONTROL_LIGHT_EFFECT_COLOR
	 *
	 * Hash: 0x8290252FFF36ACB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8290252FFF36ACB5)
	 */
	setControlLightEffectColor(padIndex: integer, red: integer, green: integer, blue: integer): void;

	/**
	 * Native: PAD::_SET_CONTROL_NORMAL
	 *
	 * Hash: 0xE8A25867FBA3B05E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE8A25867FBA3B05E)
	 */
	setControlNormal(padIndex: integer, control: integer, amount: number): boolean;

	/**
	 * Native: PAD::_SET_CURSOR_LOCATION
	 *
	 * Hash: 0xFC695459D4D0E219 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFC695459D4D0E219)
	 */
	setCursorLocation(x: number, y: number): boolean;

	/**
	 * Native: PAD::SET_INPUT_EXCLUSIVE
	 *
	 * Hash: 0xEDE476E5EE29EDB1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xEDE476E5EE29EDB1)
	 */
	setInputExclusive(padIndex: integer, control: integer): void;

	/**
	 * Native: PAD::SET_PLAYERPAD_SHAKES_WHEN_CONTROLLER_DISABLED
	 *
	 * Hash: 0x798FDEB5B1575088 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x798FDEB5B1575088)
	 */
	setPlayerShakesWhenControllerDisabled(toggle: boolean): void;

	/**
	 * Native: PAD::SET_PAD_SHAKE
	 *
	 * Hash: 0x48B3886C1358D0D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x48B3886C1358D0D5)
	 */
	setShake(padIndex: integer, duration: integer, frequency: integer): void;

	/**
	 * Native: PAD::SET_PAD_SHAKE_SUPPRESSED_ID
	 *
	 * Hash: 0xF239400E16C23E08 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF239400E16C23E08)
	 */
	setShakeSuppressedId(padIndex: integer, p1: integer): void;

	/**
	 * Native: PAD::STOP_PAD_SHAKE
	 *
	 * Hash: 0x38C16A305E8CDC8D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x38C16A305E8CDC8D)
	 */
	stopShake(padIndex: integer): void;

	/**
	 * Native: PAD::_SWITCH_TO_INPUT_MAPPING_SCHEME
	 *
	 * Hash: 0x3D42B92563939375 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D42B92563939375)
	 */
	switchToInputMappingScheme(name: string): boolean;

	/**
	 * Native: PAD::_SWITCH_TO_INPUT_MAPPING_SCHEME_2
	 *
	 * Hash: 0x4683149ED1DDE7A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4683149ED1DDE7A1)
	 */
	switchToInputMappingScheme2(name: string): boolean;

	unk: GamePadUnk;
}

interface GamePadMp extends GamePad {
	useDefaultVehicleEntering: boolean;

	/**
	 * Applies the batch this frame. Example:
	 *
	 * ```
	 * // Disable switching view (Default key: V)
	 * mp.game.controls.setDisableControlActionBatch(false, [0]);
	 * mp.events.add('render', () => {
	 * 	mp.game.controls.applyDisableControlActionBatch();
	 * });
	 * ```
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Controls::applyDisableControlActionBatch)
	 */
	applyDisableControlActionBatch(): void;

	/**
	 * Sets the batch of control actions to disable. The batch is retained/persists between frames. Example:
	 *
	 * ```
	 * // Disable switching view (Default key: V)
	 * mp.game.controls.setDisableControlActionBatch(false, [0]);
	 * mp.events.add('render', () => {
	 * 	mp.game.controls.applyDisableControlActionBatch();
	 * });
	 * ```
	 * [RAGE:MP Wiki page](https://wiki.rage.mp/index.php?title=Controls::setDisableControlActionBatch)
	 *  | [Game Controls List](https://wiki.rage.mp/index.php?title=Controls)
	 */
	setDisableControlActionBatch(
		isMoveOrLookInputGroup: boolean,
		controlActions: Array<RageEnums.Controls | number>
	): void;
}
