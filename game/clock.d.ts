/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GetUtcTimeResult {
	year: integer;
	month: integer;
	day: integer;
	hour: integer;
	minute: integer;
	second: integer;
}

interface GetLocalTimeResult {
	year: integer;
	month: integer;
	day: integer;
	hour: integer;
	minute: integer;
	second: integer;
}

interface GetPosixTimeResult {
	year: integer;
	month: integer;
	day: integer;
	hour: integer;
	minute: integer;
	second: integer;
}

interface GameClockLegacy {
	/**
	 * Native: CLOCK::ADD_TO_CLOCK_TIME
	 *
	 * Hash: 0xD716F30D8C8980E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD716F30D8C8980E2)
	 */
	addToClockTime(hours: integer, minutes: integer, seconds: integer): void;

	/**
	 * Native: CLOCK::ADVANCE_CLOCK_TIME_TO
	 *
	 * Hash: 0xC8CA9670B9D83B3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8CA9670B9D83B3B)
	 */
	advanceClockTimeTo(hour: integer, minute: integer, second: integer): void;

	/**
	 * Native: CLOCK::GET_UTC_TIME
	 *
	 * Hash: 0x8117E09A19EEF4D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8117E09A19EEF4D3)
	 */
	getLocalTimeGmt(): GetUtcTimeResult;

	/**
	 * Native: CLOCK::PAUSE_CLOCK
	 *
	 * Hash: 0x4055E40BD2DBEC1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4055E40BD2DBEC1D)
	 */
	pauseClock(toggle: boolean): void;

	/**
	 * Native: CLOCK::SET_CLOCK_DATE
	 *
	 * Hash: 0xB096419DF0D06CE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB096419DF0D06CE7)
	 */
	setClockDate(day: integer, month: integer, year: integer): void;

	/**
	 * Native: CLOCK::SET_CLOCK_TIME
	 *
	 * Hash: 0x47C3B5848C3E45D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47C3B5848C3E45D8)
	 */
	setClockTime(hour: integer, minute: integer, second: integer): void;
}

interface GameClockUnk {}

interface GameClock extends GameClockLegacy {
	/**
	 * Native: CLOCK::ADD_TO_CLOCK_TIME
	 *
	 * Hash: 0xD716F30D8C8980E2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD716F30D8C8980E2)
	 */
	addToTime(hours: integer, minutes: integer, seconds: integer): void;

	/**
	 * Native: CLOCK::ADVANCE_CLOCK_TIME_TO
	 *
	 * Hash: 0xC8CA9670B9D83B3B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC8CA9670B9D83B3B)
	 */
	advanceTimeTo(hour: integer, minute: integer, second: integer): void;

	/**
	 * Native: CLOCK::GET_CLOCK_DAY_OF_MONTH
	 *
	 * Hash: 0x3D10BC92A4DB1D35 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D10BC92A4DB1D35)
	 */
	getDayOfMonth(): integer;

	/**
	 * Native: CLOCK::GET_CLOCK_DAY_OF_WEEK
	 *
	 * Hash: 0xD972E4BD7AEB235F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD972E4BD7AEB235F)
	 */
	getDayOfWeek(): integer;

	/**
	 * Native: CLOCK::GET_CLOCK_HOURS
	 *
	 * Hash: 0x25223CA6B4D20B7F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x25223CA6B4D20B7F)
	 */
	getHours(): integer;

	/**
	 * Native: CLOCK::GET_LOCAL_TIME
	 *
	 * Hash: 0x50C7A99057A69748 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50C7A99057A69748)
	 */
	getLocalTime(): GetLocalTimeResult;

	/**
	 * Native: CLOCK::GET_MILLISECONDS_PER_GAME_MINUTE
	 *
	 * Hash: 0x2F8B4D1C595B11DB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F8B4D1C595B11DB)
	 */
	getMillisecondsPerGameMinute(): integer;

	/**
	 * Native: CLOCK::GET_CLOCK_MINUTES
	 *
	 * Hash: 0x13D2B8ADD79640F2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x13D2B8ADD79640F2)
	 */
	getMinutes(): integer;

	/**
	 * Native: CLOCK::GET_CLOCK_MONTH
	 *
	 * Hash: 0xBBC72712E80257A1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBBC72712E80257A1)
	 */
	getMonth(): integer;

	/**
	 * Native: CLOCK::GET_POSIX_TIME
	 *
	 * Hash: 0xDA488F299A5B164E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDA488F299A5B164E)
	 */
	getPosixTime(): GetPosixTimeResult;

	/**
	 * Native: CLOCK::GET_CLOCK_SECONDS
	 *
	 * Hash: 0x494E97C2EF27C470 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x494E97C2EF27C470)
	 */
	getSeconds(): integer;

	/**
	 * Native: CLOCK::GET_UTC_TIME
	 *
	 * Hash: 0x8117E09A19EEF4D3 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8117E09A19EEF4D3)
	 */
	getUtcTime(): GetUtcTimeResult;

	/**
	 * Native: CLOCK::GET_CLOCK_YEAR
	 *
	 * Hash: 0x961777E64BDAF717 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x961777E64BDAF717)
	 */
	getYear(): integer;

	/**
	 * Native: CLOCK::PAUSE_CLOCK
	 *
	 * Hash: 0x4055E40BD2DBEC1D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4055E40BD2DBEC1D)
	 */
	pause(toggle: boolean): void;

	/**
	 * Native: CLOCK::SET_CLOCK_DATE
	 *
	 * Hash: 0xB096419DF0D06CE7 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB096419DF0D06CE7)
	 */
	setDate(day: integer, month: integer, year: integer): void;

	/**
	 * Native: CLOCK::SET_CLOCK_TIME
	 *
	 * Hash: 0x47C3B5848C3E45D8 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x47C3B5848C3E45D8)
	 */
	setTime(hour: integer, minute: integer, second: integer): void;

	unk: GameClockUnk;
}

interface GameClockMp extends GameClock {
	serverTickCount: number;

	resetClockTime(): void;
}
