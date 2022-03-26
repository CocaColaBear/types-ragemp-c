/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface DataarrayAddDictResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetFloatResult {
	arrayData: integer;
	result: number;
}

interface DataarrayGetIntResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetDictResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetCountResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetStringResult {
	arrayData: integer;
	result: string;
}

interface DataarrayGetTypeResult {
	arrayData: integer;
	result: integer;
}

interface DataarrayGetVectorResult {
	arrayData: integer;
	result: Vector3Mp;
}

interface DatadictCreateArrayResult {
	objectData: integer;
	result: integer;
}

interface DatadictCreateDictResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetArrayResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetFloatResult {
	objectData: integer;
	result: number;
}

interface DatadictGetIntResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetDictResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetStringResult {
	objectData: integer;
	result: string;
}

interface DatadictGetTypeResult {
	objectData: integer;
	result: integer;
}

interface DatadictGetVectorResult {
	objectData: integer;
	result: Vector3Mp;
}

interface GameDatafileLegacy {
	/**
	 * Native: DATAFILE::DATAARRAY_ADD_BOOL
	 *
	 * Hash: 0xF8B0F5A43E928C76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8B0F5A43E928C76)
	 */
	arrayValueAddBoolean(value: boolean): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_FLOAT
	 *
	 * Hash: 0x57A995FD75D37F56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57A995FD75D37F56)
	 */
	arrayValueAddFloat(value: number): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_INT
	 *
	 * Hash: 0xCABDB751D86FE93B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCABDB751D86FE93B)
	 */
	arrayValueAddInteger(value: integer): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_DICT
	 *
	 * Hash: 0x6889498B3E19C797 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6889498B3E19C797)
	 */
	arrayValueAddObject(): DataarrayAddDictResult;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_STRING
	 *
	 * Hash: 0x2F0661C155AEEEAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F0661C155AEEEAA)
	 */
	arrayValueAddString(value: string): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_VECTOR
	 *
	 * Hash: 0x407F8D034F70F0C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x407F8D034F70F0C2)
	 */
	arrayValueAddVector3(valueX: number, valueY: number, valueZ: number): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_BOOL
	 *
	 * Hash: 0x50C1B2874E50C114 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50C1B2874E50C114)
	 */
	arrayValueGetBoolean(arrayIndex: integer): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_FLOAT
	 *
	 * Hash: 0xC0C527B525D7CFB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0C527B525D7CFB5)
	 */
	arrayValueGetFloat(arrayIndex: integer): DataarrayGetFloatResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_INT
	 *
	 * Hash: 0x3E5AE19425CD74BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E5AE19425CD74BE)
	 */
	arrayValueGetInteger(arrayIndex: integer): DataarrayGetIntResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_DICT
	 *
	 * Hash: 0x8B5FADCC4E3A145F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B5FADCC4E3A145F)
	 */
	arrayValueGetObject(arrayIndex: integer): DataarrayGetDictResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_COUNT
	 *
	 * Hash: 0x065DB281590CEA2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x065DB281590CEA2D)
	 */
	arrayValueGetSize(): DataarrayGetCountResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_STRING
	 *
	 * Hash: 0xD3F2FFEB8D836F52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3F2FFEB8D836F52)
	 */
	arrayValueGetString(arrayIndex: integer): DataarrayGetStringResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_TYPE
	 *
	 * Hash: 0x3A0014ADB172A3C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A0014ADB172A3C5)
	 */
	arrayValueGetType(arrayIndex: integer): DataarrayGetTypeResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_VECTOR
	 *
	 * Hash: 0x8D2064E5B64A628A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D2064E5B64A628A)
	 */
	arrayValueGetVector3(arrayIndex: integer): DataarrayGetVectorResult;

	/**
	 * Native: DATAFILE::DATAFILE_LOAD_OFFLINE_UGC
	 *
	 * p1 defaults to 0
	 *
	 * Hash: 0xC5238C011AF405E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5238C011AF405E4)
	 */
	loadUgcFile(filename: string, p1?: integer): boolean;

	/**
	 * Native: DATAFILE::DATADICT_CREATE_ARRAY
	 *
	 * Hash: 0x5B11728527CA6E5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B11728527CA6E5F)
	 */
	objectValueAddArray(key: string): DatadictCreateArrayResult;

	/**
	 * Native: DATAFILE::DATADICT_SET_BOOL
	 *
	 * Hash: 0x35124302A556A325 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35124302A556A325)
	 */
	objectValueAddBoolean(key: string, value: boolean): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_FLOAT
	 *
	 * Hash: 0xC27E1CC2D795105E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC27E1CC2D795105E)
	 */
	objectValueAddFloat(key: string, value: number): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_INT
	 *
	 * Hash: 0xE7E035450A7948D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7E035450A7948D5)
	 */
	objectValueAddInteger(key: string, value: integer): integer;

	/**
	 * Native: DATAFILE::DATADICT_CREATE_DICT
	 *
	 * Hash: 0xA358F56F10732EE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA358F56F10732EE1)
	 */
	objectValueAddObject(key: string): DatadictCreateDictResult;

	/**
	 * Native: DATAFILE::DATADICT_SET_STRING
	 *
	 * Hash: 0x8FF3847DADD8E30C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FF3847DADD8E30C)
	 */
	objectValueAddString(key: string, value: string): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_VECTOR
	 *
	 * Hash: 0x4CD49B76338C7DEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CD49B76338C7DEE)
	 */
	objectValueAddVector3(key: string, valueX: number, valueY: number, valueZ: number): integer;

	/**
	 * Native: DATAFILE::DATADICT_GET_ARRAY
	 *
	 * Hash: 0x7A983AA9DA2659ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A983AA9DA2659ED)
	 */
	objectValueGetArray(key: string): DatadictGetArrayResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_BOOL
	 *
	 * Hash: 0x1186940ED72FFEEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1186940ED72FFEEC)
	 */
	objectValueGetBoolean(key: string): integer;

	/**
	 * Native: DATAFILE::DATADICT_GET_FLOAT
	 *
	 * Hash: 0x06610343E73B9727 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06610343E73B9727)
	 */
	objectValueGetFloat(key: string): DatadictGetFloatResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_INT
	 *
	 * Hash: 0x78F06F6B1FB5A80C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78F06F6B1FB5A80C)
	 */
	objectValueGetInteger(key: string): DatadictGetIntResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_DICT
	 *
	 * Hash: 0xB6B9DDC412FCEEE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6B9DDC412FCEEE2)
	 */
	objectValueGetObject(key: string): DatadictGetDictResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_STRING
	 *
	 * Hash: 0x3D2FD9E763B24472 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D2FD9E763B24472)
	 */
	objectValueGetString(key: string): DatadictGetStringResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_TYPE
	 *
	 * Hash: 0x031C55ED33227371 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x031C55ED33227371)
	 */
	objectValueGetType(key: string): DatadictGetTypeResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_VECTOR
	 *
	 * Hash: 0x46CD3CB66E0825CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46CD3CB66E0825CC)
	 */
	objectValueGetVector3(key: string): DatadictGetVectorResult;
}

interface GameDatafileUnk {
	/**
	 * Native: DATAFILE::_0x6AD0BD5E087866CB
	 *
	 * Hash: 0x6AD0BD5E087866CB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6AD0BD5E087866CB)
	 */
	_0x6AD0BD5E087866CB(p0: integer): void;

	/**
	 * Native: DATAFILE::_0xA6EEF01087181EDD
	 *
	 * Hash: 0xA6EEF01087181EDD - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA6EEF01087181EDD)
	 */
	_0xA6EEF01087181EDD(p0: integer, p1: integer): integer;

	/**
	 * Native: DATAFILE::_0xDBF860CF1DB8E599
	 *
	 * Hash: 0xDBF860CF1DB8E599 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xDBF860CF1DB8E599)
	 */
	_0xDBF860CF1DB8E599(p0: integer): integer;
}

interface GameDatafile extends GameDatafileLegacy {
	/**
	 * Native: DATAFILE::DATAFILE_CLEAR_WATCH_LIST
	 *
	 * Hash: 0x6CC86E78358D5119 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6CC86E78358D5119)
	 */
	clearWatchList(): void;

	/**
	 * Native: DATAFILE::DATAFILE_CREATE
	 *
	 * Hash: 0xD27058A1CA2B13EE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD27058A1CA2B13EE)
	 */
	create(p0: integer): void;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_BOOL
	 *
	 * Hash: 0xF8B0F5A43E928C76 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8B0F5A43E928C76)
	 */
	dataarrayAddBool(value: boolean): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_DICT
	 *
	 * Hash: 0x6889498B3E19C797 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x6889498B3E19C797)
	 */
	dataarrayAddDict(): DataarrayAddDictResult;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_FLOAT
	 *
	 * Hash: 0x57A995FD75D37F56 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x57A995FD75D37F56)
	 */
	dataarrayAddFloat(value: number): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_INT
	 *
	 * Hash: 0xCABDB751D86FE93B - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xCABDB751D86FE93B)
	 */
	dataarrayAddInt(value: integer): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_STRING
	 *
	 * Hash: 0x2F0661C155AEEEAA - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2F0661C155AEEEAA)
	 */
	dataarrayAddString(value: string): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_ADD_VECTOR
	 *
	 * Hash: 0x407F8D034F70F0C2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x407F8D034F70F0C2)
	 */
	dataarrayAddVector(valueX: number, valueY: number, valueZ: number): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_BOOL
	 *
	 * Hash: 0x50C1B2874E50C114 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x50C1B2874E50C114)
	 */
	dataarrayGetBool(arrayIndex: integer): integer;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_COUNT
	 *
	 * Hash: 0x065DB281590CEA2D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x065DB281590CEA2D)
	 */
	dataarrayGetCount(): DataarrayGetCountResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_DICT
	 *
	 * Hash: 0x8B5FADCC4E3A145F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8B5FADCC4E3A145F)
	 */
	dataarrayGetDict(arrayIndex: integer): DataarrayGetDictResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_FLOAT
	 *
	 * Hash: 0xC0C527B525D7CFB5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC0C527B525D7CFB5)
	 */
	dataarrayGetFloat(arrayIndex: integer): DataarrayGetFloatResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_INT
	 *
	 * Hash: 0x3E5AE19425CD74BE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3E5AE19425CD74BE)
	 */
	dataarrayGetInt(arrayIndex: integer): DataarrayGetIntResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_STRING
	 *
	 * Hash: 0xD3F2FFEB8D836F52 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xD3F2FFEB8D836F52)
	 */
	dataarrayGetString(arrayIndex: integer): DataarrayGetStringResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_TYPE
	 *
	 * Hash: 0x3A0014ADB172A3C5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3A0014ADB172A3C5)
	 */
	dataarrayGetType(arrayIndex: integer): DataarrayGetTypeResult;

	/**
	 * Native: DATAFILE::DATAARRAY_GET_VECTOR
	 *
	 * Hash: 0x8D2064E5B64A628A - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8D2064E5B64A628A)
	 */
	dataarrayGetVector(arrayIndex: integer): DataarrayGetVectorResult;

	/**
	 * Native: DATAFILE::DATADICT_CREATE_ARRAY
	 *
	 * Hash: 0x5B11728527CA6E5F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x5B11728527CA6E5F)
	 */
	datadictCreateArray(key: string): DatadictCreateArrayResult;

	/**
	 * Native: DATAFILE::DATADICT_CREATE_DICT
	 *
	 * Hash: 0xA358F56F10732EE1 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA358F56F10732EE1)
	 */
	datadictCreateDict(key: string): DatadictCreateDictResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_ARRAY
	 *
	 * Hash: 0x7A983AA9DA2659ED - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x7A983AA9DA2659ED)
	 */
	datadictGetArray(key: string): DatadictGetArrayResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_BOOL
	 *
	 * Hash: 0x1186940ED72FFEEC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x1186940ED72FFEEC)
	 */
	datadictGetBool(key: string): integer;

	/**
	 * Native: DATAFILE::DATADICT_GET_DICT
	 *
	 * Hash: 0xB6B9DDC412FCEEE2 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xB6B9DDC412FCEEE2)
	 */
	datadictGetDict(key: string): DatadictGetDictResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_FLOAT
	 *
	 * Hash: 0x06610343E73B9727 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x06610343E73B9727)
	 */
	datadictGetFloat(key: string): DatadictGetFloatResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_INT
	 *
	 * Hash: 0x78F06F6B1FB5A80C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x78F06F6B1FB5A80C)
	 */
	datadictGetInt(key: string): DatadictGetIntResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_STRING
	 *
	 * Hash: 0x3D2FD9E763B24472 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x3D2FD9E763B24472)
	 */
	datadictGetString(key: string): DatadictGetStringResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_TYPE
	 *
	 * Hash: 0x031C55ED33227371 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x031C55ED33227371)
	 */
	datadictGetType(key: string): DatadictGetTypeResult;

	/**
	 * Native: DATAFILE::DATADICT_GET_VECTOR
	 *
	 * Hash: 0x46CD3CB66E0825CC - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x46CD3CB66E0825CC)
	 */
	datadictGetVector(key: string): DatadictGetVectorResult;

	/**
	 * Native: DATAFILE::DATADICT_SET_BOOL
	 *
	 * Hash: 0x35124302A556A325 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x35124302A556A325)
	 */
	datadictSetBool(key: string, value: boolean): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_FLOAT
	 *
	 * Hash: 0xC27E1CC2D795105E - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC27E1CC2D795105E)
	 */
	datadictSetFloat(key: string, value: number): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_INT
	 *
	 * Hash: 0xE7E035450A7948D5 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xE7E035450A7948D5)
	 */
	datadictSetInt(key: string, value: integer): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_STRING
	 *
	 * Hash: 0x8FF3847DADD8E30C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8FF3847DADD8E30C)
	 */
	datadictSetString(key: string, value: string): integer;

	/**
	 * Native: DATAFILE::DATADICT_SET_VECTOR
	 *
	 * Hash: 0x4CD49B76338C7DEE - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4CD49B76338C7DEE)
	 */
	datadictSetVector(key: string, valueX: number, valueY: number, valueZ: number): integer;

	/**
	 * Native: DATAFILE::DATAFILE_DELETE
	 *
	 * Hash: 0x9AB9C1CFC8862DFB - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9AB9C1CFC8862DFB)
	 */
	delete(p0: integer): void;

	/**
	 * Native: DATAFILE::DATAFILE_DELETE_REQUESTED_FILE
	 *
	 * Hash: 0x8F5EA1C01D65A100 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x8F5EA1C01D65A100)
	 */
	deleteRequestedFile(p0: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_FLUSH_MISSION_HEADER
	 *
	 * Hash: 0xC55854C7D7274882 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC55854C7D7274882)
	 */
	flushMissionHeader(): void;

	/**
	 * Native: DATAFILE::DATAFILE_GET_FILE_DICT
	 *
	 * Hash: 0x906B778CA1DC72B6 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x906B778CA1DC72B6)
	 */
	getFileDict(p0: integer): string;

	/**
	 * Native: DATAFILE::DATAFILE_HAS_LOADED_FILE_DATA
	 *
	 * Hash: 0x15FF52B809DB2353 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x15FF52B809DB2353)
	 */
	hasLoadedFileData(p0: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_HAS_VALID_FILE_DATA
	 *
	 * Hash: 0xF8CC1EBE0B62E29F - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xF8CC1EBE0B62E29F)
	 */
	hasValidFileData(p0: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_IS_SAVE_PENDING
	 *
	 * Hash: 0xBEDB96A7584AA8CF - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xBEDB96A7584AA8CF)
	 */
	isSavePending(): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_IS_VALID_REQUEST_ID
	 *
	 * Hash: 0xFCCAE5B92A830878 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xFCCAE5B92A830878)
	 */
	isValidRequestId(index: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_LOAD_OFFLINE_UGC
	 *
	 * Hash: 0xC5238C011AF405E4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC5238C011AF405E4)
	 */
	loadOfflineUgc(filename: string, p1: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_SELECT_ACTIVE_FILE
	 *
	 * Hash: 0x22DA66936E0FFF37 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x22DA66936E0FFF37)
	 */
	selectActiveFile(p0: integer, p1: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_SELECT_CREATOR_STATS
	 *
	 * Hash: 0x01095C95CD46B624 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x01095C95CD46B624)
	 */
	selectCreatorStats(p0: integer, p1: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_SELECT_UGC_DATA
	 *
	 * Hash: 0xA69AC4ADE82B57A4 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA69AC4ADE82B57A4)
	 */
	selectUgcData(p0: integer, p1: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_SELECT_UGC_PLAYER_DATA
	 *
	 * Hash: 0x52818819057F2B40 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x52818819057F2B40)
	 */
	selectUgcPlayerData(p0: integer, p1: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_SELECT_UGC_STATS
	 *
	 * Hash: 0x9CB0BFA7A9342C3D - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x9CB0BFA7A9342C3D)
	 */
	selectUgcStats(p0: integer, p1: boolean, p2: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_START_SAVE_TO_CLOUD
	 *
	 * Hash: 0x83BCCE3224735F05 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x83BCCE3224735F05)
	 */
	startSaveToCloud(filename: string, p1: integer): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_STORE_MISSION_HEADER
	 *
	 * Hash: 0x2ED61456317B8178 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x2ED61456317B8178)
	 */
	storeMissionHeader(p0: integer): void;

	/**
	 * Native: DATAFILE::UGC_CREATE_CONTENT
	 *
	 * Hash: 0xC84527E235FCA219 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xC84527E235FCA219)
	 */
	ugcCreateContent(
		dataCount: integer,
		contentName: string,
		description: string,
		tagsCsv: string,
		contentTypeName: string,
		publish: boolean,
		p7: integer
	): integer;

	/**
	 * Native: DATAFILE::UGC_CREATE_MISSION
	 *
	 * Hash: 0xA5EFC3E847D60507 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xA5EFC3E847D60507)
	 */
	ugcCreateMission(
		contentName: string,
		description: string,
		tagsCsv: string,
		contentTypeName: string,
		publish: boolean,
		p5: integer
	): boolean;

	/**
	 * Native: DATAFILE::UGC_SET_PLAYER_DATA
	 *
	 * Hash: 0x692D808C34A82143 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x692D808C34A82143)
	 */
	ugcSetPlayerData(contentId: string, rating: number, contentTypeName: string, p3: integer): boolean;

	/**
	 * Native: DATAFILE::UGC_UPDATE_CONTENT
	 *
	 * Hash: 0x648E7A5434AF7969 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x648E7A5434AF7969)
	 */
	ugcUpdateContent(
		contentId: string,
		dataCount: integer,
		contentName: string,
		description: string,
		tagsCsv: string,
		contentTypeName: string,
		p7: integer
	): integer;

	/**
	 * Native: DATAFILE::UGC_UPDATE_MISSION
	 *
	 * Hash: 0x4645DE9980999E93 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4645DE9980999E93)
	 */
	ugcUpdateMission(
		contentId: string,
		contentName: string,
		description: string,
		tagsCsv: string,
		contentTypeName: string,
		p5: integer
	): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_UPDATE_SAVE_TO_CLOUD
	 *
	 * Hash: 0x4DFDD9EB705F8140 - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0x4DFDD9EB705F8140)
	 */
	updateSaveToCloud(): boolean;

	/**
	 * Native: DATAFILE::DATAFILE_WATCH_REQUEST_ID
	 *
	 * Hash: 0xAD6875BBC0FC899C - [NativeDB Reference](https://alloc8or.re/gta5/nativedb/?n=0xAD6875BBC0FC899C)
	 */
	watchRequestId(id: integer): void;

	unk: GameDatafileUnk;
}

interface GameDatafileMp extends GameDatafile {}
