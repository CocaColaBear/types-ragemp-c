/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameDecoratorLegacy {}

interface GameDecoratorUnk {}

interface GameDecorator extends GameDecoratorLegacy {
	/**
	 * Native: DECORATOR::DECOR_EXIST_ON
	 *
	 * Hash: 0x05661B80A8C9165F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x05661B80A8C9165F)
	 */
	decorExistOn(entity: Handle, propertyName: string): boolean;

	/**
	 * Native: DECORATOR::DECOR_GET_BOOL
	 *
	 * Hash: 0xDACE671663F2F5DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDACE671663F2F5DB)
	 */
	decorGetBool(entity: Handle, propertyName: string): boolean;

	/**
	 * Native: DECORATOR::DECOR_GET_FLOAT
	 *
	 * Hash: 0x6524A2F114706F43 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6524A2F114706F43)
	 */
	decorGetFloat(entity: Handle, propertyName: string): number;

	/**
	 * Native: DECORATOR::DECOR_GET_INT
	 *
	 * Hash: 0xA06C969B02A97298 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA06C969B02A97298)
	 */
	decorGetInt(entity: Handle, propertyName: string): integer;

	/**
	 * Native: DECORATOR::DECOR_IS_REGISTERED_AS_TYPE
	 *
	 * Hash: 0x4F14F9F870D6FBC8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4F14F9F870D6FBC8)
	 */
	decorIsRegisteredAsType(propertyName: string, type: integer): boolean;

	/**
	 * Native: DECORATOR::DECOR_REGISTER
	 *
	 * Hash: 0x9FD90732F56403CE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9FD90732F56403CE)
	 */
	decorRegister(propertyName: string, type: integer): void;

	/**
	 * Native: DECORATOR::DECOR_REGISTER_LOCK
	 *
	 * Hash: 0xA9D14EEA259F9248 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA9D14EEA259F9248)
	 */
	decorRegisterLock(): void;

	/**
	 * Native: DECORATOR::DECOR_REMOVE
	 *
	 * Hash: 0x00EE9F297C738720 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x00EE9F297C738720)
	 */
	decorRemove(entity: Handle, propertyName: string): boolean;

	/**
	 * Native: DECORATOR::DECOR_SET_BOOL
	 *
	 * Hash: 0x6B1E8E2ED1335B71 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6B1E8E2ED1335B71)
	 */
	decorSetBool(entity: Handle, propertyName: string, value: boolean): boolean;

	/**
	 * Native: DECORATOR::DECOR_SET_FLOAT
	 *
	 * Hash: 0x211AB1DD8D0F363A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x211AB1DD8D0F363A)
	 */
	decorSetFloat(entity: Handle, propertyName: string, value: number): boolean;

	/**
	 * Native: DECORATOR::DECOR_SET_INT
	 *
	 * Hash: 0x0CE3AA5E1CA19E10 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x0CE3AA5E1CA19E10)
	 */
	decorSetInt(entity: Handle, propertyName: string, value: integer): boolean;

	/**
	 * Native: DECORATOR::DECOR_SET_TIME
	 *
	 * Hash: 0x95AED7B8E39ECAA4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x95AED7B8E39ECAA4)
	 */
	decorSetTime(entity: Handle, propertyName: string, timestamp: integer): boolean;

	unk: GameDecoratorUnk;
}

interface GameDecoratorMp extends GameDecorator {}
