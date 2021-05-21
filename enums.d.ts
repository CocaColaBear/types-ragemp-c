declare namespace RageEnums {
	const enum Alarms {
		AGENCY_HEIST_FIB_TOWER_ALARMS = 'AGENCY_HEIST_FIB_TOWER_ALARMS',
		AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER = 'AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER',
		AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B = 'AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B',
		BIG_SCORE_HEIST_VAULT_ALARMS = 'BIG_SCORE_HEIST_VAULT_ALARMS',
		FBI_01_MORGUE_ALARMS = 'FBI_01_MORGUE_ALARMS',
		FIB_05_BIOTECH_LAB_ALARMS = 'FIB_05_BIOTECH_LAB_ALARMS',
		JEWEL_STORE_HEIST_ALARMS = 'JEWEL_STORE_HEIST_ALARMS',
		PALETO_BAY_SCORE_ALARM = 'PALETO_BAY_SCORE_ALARM',
		PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM = 'PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM',
		PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS = 'PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS',
		PORT_OF_LS_HEIST_SHIP_ALARMS = 'PORT_OF_LS_HEIST_SHIP_ALARMS',
		PRISON_ALARMS = 'PRISON_ALARMS',
		PROLOGUE_VAULT_ALARMS = 'PROLOGUE_VAULT_ALARMS'
	}

	const enum Clothes {
		/** https://wiki.rage.mp/index.php?title=Masks */
		MASK = 1,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Hair_Styles
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Hair_Styles
		 */
		HAIR_STYLE = 2,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Torsos
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Torsos
		 */
		TORSO = 3,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Legs
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Legs
		 */
		LEGS = 4,
		/**
		 * Male + Female: https://wiki.rage.mp/index.php?title=Bags_and_Parachutes
		 */
		BAGS_AND_PARACHUTE = 5,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Shoes
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Shoes
		 */
		SHOES = 6,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Accessories
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Accessories
		 */
		ACCESSORIES = 7,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Undershirts
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Undershirts
		 */
		UNDERSHIRTS = 8,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Body_Armors
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Body_Armors
		 */
		BODY_ARMORS = 9,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Decals
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Decals
		 */
		DECALS = 10,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Tops
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Tops
		 */
		TOPS = 11
	}

	const enum ConsoleVerbosity {
		ERROR = "error",
		FATAL = "fatal",
		INFO = "info",
		WARNING = "warning"
	}

	const enum Controls {
		/**
		 * V (Back on Xbox)
		 */
		INPUT_NEXT_CAMERA = 0,
		/**
		 * Left Mouse Button
		 */
		INPUT_LOOK_LR = 1,
		/**
		 * Right Mouse Button
		 */
		INPUT_LOOK_UD = 2,
		/**
		 * Control-Break Processing
		 */
		INPUT_LOOK_UP_ONLY = 3,
		/**
		 * Middle Mouse Button
		 */
		INPUT_LOOK_DOWN_ONLY = 4,
		/**
		 * undefined */
		INPUT_LOOK_LEFT_ONLY = 5,
		/**
		 * Right Mouse Button
		 */
		INPUT_LOOK_RIGHT_ONLY = 6,
		/**
		 * undefined */
		INPUT_CINEMATIC_SLOWMO = 7,
		/**
		 * S
		 */
		INPUT_SCRIPTED_FLY_UD = 8,
		/**
		 * D
		 */
		INPUT_SCRIPTED_FLY_LR = 9,
		/**
		 * PAGE UP
		 */
		INPUT_SCRIPTED_FLY_ZUP = 10,
		/**
		 * PAGE DOWN
		 */
		INPUT_SCRIPTED_FLY_ZDOWN = 11,
		/**
		 * MOUSE DOWN
		 */
		INPUT_WEAPON_WHEEL_UD = 12,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_WEAPON_WHEEL_LR = 13,
		/**
		 * MOUSE SCROLL WHEEL DOWN
		 */
		INPUT_WEAPON_WHEEL_NEXT = 14,
		/**
		 * MOUSE SCROLL WHEEL UP
		 */
		INPUT_WEAPON_WHEEL_PREV = 15,
		/**
		 * MOUSE SCROLL WHEEL DOWN
		 */
		INPUT_SELECT_NEXT_WEAPON = 16,
		/**
		 * MOUSE SCROLL WHEEL UP
		 */
		INPUT_SELECT_PREV_WEAPON = 17,
		/**
		 * ENTER / LEFT MOUSE BUTTON / SPACEBAR
		 */
		INPUT_SKIP_CUTSCENE = 18,
		/**
		 * LEFT ALT
		 */
		INPUT_CHARACTER_WHEEL = 19,
		/**
		 * Z
		 */
		INPUT_MULTIPLAYER_INFO = 20,
		/**
		 * Shift Key
		 */
		INPUT_SPRINT = 21,
		/**
		 * Space Key
		 */
		INPUT_JUMP = 22,
		/**
		 * Enter Key
		 */
		INPUT_ENTER = 23,
		/**
		 * Left Mouse Button
		 */
		INPUT_ATTACK = 24,
		/**
		 * Right Mouse Button
		 */
		INPUT_AIM = 25,
		/**
		 * C
		 */
		INPUT_LOOK_BEHIND = 26,
		/**
		 * ARROW UP/SCROLLWHEEL BUTTON (press)
		 */
		INPUT_PHONE = 27,
		INPUT_SPECIAL_ABILITY = 28,
		/**
		 * B
		 */
		INPUT_SPECIAL_ABILITY_SECONDARY = 29,
		/**
		 * D
		 */
		INPUT_MOVE_LR = 30,
		/**
		 * S
		 */
		INPUT_MOVE_UD = 31,
		/**
		 * W
		 */
		INPUT_MOVE_UP_ONLY = 32,
		/**
		 * S
		 */
		INPUT_MOVE_DOWN_ONLY = 33,
		/**
		 * A
		 */
		INPUT_MOVE_LEFT_ONLY = 34,
		/**
		 * D
		 */
		INPUT_MOVE_RIGHT_ONLY = 35,
		/**
		 * LEFT CONTROL
		 */
		INPUT_DUCK = 36,
		/**
		 * TAB
		 */
		INPUT_SELECT_WEAPON = 37,
		/**
		 * E
		 */
		INPUT_PICKUP = 38,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM = 39,
		/**
		 * ]
		 */
		INPUT_SNIPER_ZOOM_IN_ONLY = 40,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_ONLY = 41,
		/**
		 * ]
		 */
		INPUT_SNIPER_ZOOM_IN_SECONDARY = 42,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_SECONDARY = 43,
		/**
		 * Q
		 */
		INPUT_COVER = 44,
		/**
		 * R
		 */
		INPUT_RELOAD = 45,
		/**
		 * E
		 */
		INPUT_TALK = 46,
		/**
		 * G
		 */
		INPUT_DETONATE = 47,
		/**
		 * Z
		 */
		INPUT_HUD_SPECIAL = 48,
		/**
		 * F
		 */
		INPUT_ARREST = 49,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_ACCURATE_AIM = 50,
		/**
		 * E
		 */
		INPUT_CONTEXT = 51,
		/**
		 * Q
		 */
		INPUT_CONTEXT_SECONDARY = 52,
		INPUT_WEAPON_SPECIAL = 53,
		/**
		 * E
		 */
		INPUT_WEAPON_SPECIAL_TWO = 54,
		/**
		 * SPACEBAR
		 */
		INPUT_DIVE = 55,
		/**
		 * F9
		 */
		INPUT_DROP_WEAPON = 56,
		/**
		 * F10
		 */
		INPUT_DROP_AMMO = 57,
		/**
		 * G
		 */
		INPUT_THROW_GRENADE = 58,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_LR = 59,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_UD = 60,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_MOVE_UP_ONLY = 61,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_DOWN_ONLY = 62,
		/**
		 * A
		 */
		INPUT_VEH_MOVE_LEFT_ONLY = 63,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_RIGHT_ONLY = 64,
		INPUT_VEH_SPECIAL = 65,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_LR = 66,
		/**
		 * MOUSE DOWN
		 */
		INPUT_VEH_GUN_UD = 67,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_AIM = 68,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_ATTACK = 69,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_ATTACK2 = 70,
		/**
		 * W
		 */
		INPUT_VEH_ACCELERATE = 71,
		/**
		 * S
		 */
		INPUT_VEH_BRAKE = 72,
		/**
		 * X
		 */
		INPUT_VEH_DUCK = 73,
		/**
		 * H
		 */
		INPUT_VEH_HEADLIGHT = 74,
		/**
		 * F
		 */
		INPUT_VEH_EXIT = 75,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_HANDBRAKE = 76,
		/**
		 * W
		 */
		INPUT_VEH_HOTWIRE_LEFT = 77,
		/**
		 * S
		 */
		INPUT_VEH_HOTWIRE_RIGHT = 78,
		/**
		 * C
		 */
		INPUT_VEH_LOOK_BEHIND = 79,
		/**
		 * R
		 */
		INPUT_VEH_CIN_CAM = 80,
		/**
		 * .
		 */
		INPUT_VEH_NEXT_RADIO = 81,
		/**
		 * ,
		 */
		INPUT_VEH_PREV_RADIO = 82,
		/**
		 * =
		 */
		INPUT_VEH_NEXT_RADIO_TRACK = 83,
		/**
		 * -
		 */
		INPUT_VEH_PREV_RADIO_TRACK = 84,
		/**
		 * Q
		 */
		INPUT_VEH_RADIO_WHEEL = 85,
		/**
		 * E
		 */
		INPUT_VEH_HORN = 86,
		/**
		 * W
		 */
		INPUT_VEH_FLY_THROTTLE_UP = 87,
		/**
		 * S
		 */
		INPUT_VEH_FLY_THROTTLE_DOWN = 88,
		/**
		 * A
		 */
		INPUT_VEH_FLY_YAW_LEFT = 89,
		/**
		 * D
		 */
		INPUT_VEH_FLY_YAW_RIGHT = 90,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_PASSENGER_AIM = 91,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_PASSENGER_ATTACK = 92,
		/**
		 *
		 */
		INPUT_VEH_SPECIAL_ABILITY_FRANKLIN = 93,
		/**
		 *
		 */
		INPUT_VEH_STUNT_UD = 94,
		/**
		 * MOUSE DOWN
		 */
		INPUT_VEH_CINEMATIC_UD = 95,
		/**
		 * NUMPAD- / SCROLLWHEEL UP
		 */
		INPUT_VEH_CINEMATIC_UP_ONLY = 96,
		/**
		 * NUMPAD+ / SCROLLWHEEL DOWN
		 */
		INPUT_VEH_CINEMATIC_DOWN_ONLY = 97,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_CINEMATIC_LR = 98,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_SELECT_NEXT_WEAPON = 99,
		/**
		 * [
		 */
		INPUT_VEH_SELECT_PREV_WEAPON = 100,
		/**
		 * H
		 */
		INPUT_VEH_ROOF = 101,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_JUMP = 102,
		/**
		 * E
		 */
		INPUT_VEH_GRAPPLING_HOOK = 103,
		/**
		 * H
		 */
		INPUT_VEH_SHUFFLE = 104,
		/**
		 * X
		 */
		INPUT_VEH_DROP_PROJECTILE = 105,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_MOUSE_CONTROL_OVERRIDE = 106,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_FLY_ROLL_LR = 107,
		/**
		 * NUMPAD 4
		 */
		INPUT_VEH_FLY_ROLL_LEFT_ONLY = 108,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_FLY_ROLL_RIGHT_ONLY = 109,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_FLY_PITCH_UD = 110,
		/**
		 * NUMPAD 8
		 */
		INPUT_VEH_FLY_PITCH_UP_ONLY = 111,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_FLY_PITCH_DOWN_ONLY = 112,
		/**
		 * G
		 */
		INPUT_VEH_FLY_UNDERCARRIAGE = 113,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_ATTACK = 114,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_FLY_SELECT_NEXT_WEAPON = 115,
		/**
		 * [
		 */
		INPUT_VEH_FLY_SELECT_PREV_WEAPON = 116,
		/**
		 * NUMPAD 7
		 */
		INPUT_VEH_FLY_SELECT_TARGET_LEFT = 117,
		/**
		 * NUMPAD 9
		 */
		INPUT_VEH_FLY_SELECT_TARGET_RIGHT = 118,
		/**
		 * E
		 */
		INPUT_VEH_FLY_VERTICAL_FLIGHT_MODE = 119,
		/**
		 * X
		 */
		INPUT_VEH_FLY_DUCK = 120,
		/**
		 * INSERT
		 */
		INPUT_VEH_FLY_ATTACK_CAMERA = 121,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_MOUSE_CONTROL_OVERRIDE = 122,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_SUB_TURN_LR = 123,
		/**
		 * NUMPAD 4
		 */
		INPUT_VEH_SUB_TURN_LEFT_ONLY = 124,
		/**
		 * NUMPAD 6
		 */
		INPUT_VEH_SUB_TURN_RIGHT_ONLY = 125,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_SUB_PITCH_UD = 126,
		/**
		 * NUMPAD 8
		 */
		INPUT_VEH_SUB_PITCH_UP_ONLY = 127,
		/**
		 * NUMPAD 5
		 */
		INPUT_VEH_SUB_PITCH_DOWN_ONLY = 128,
		/**
		 * W
		 */
		INPUT_VEH_SUB_THROTTLE_UP = 129,
		/**
		 * S
		 */
		INPUT_VEH_SUB_THROTTLE_DOWN = 130,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_SUB_ASCEND = 131,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_SUB_DESCEND = 132,
		/**
		 * A
		 */
		INPUT_VEH_SUB_TURN_HARD_LEFT = 133,
		/**
		 * D
		 */
		INPUT_VEH_SUB_TURN_HARD_RIGHT = 134,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_SUB_MOUSE_CONTROL_OVERRIDE = 135,
		/**
		 * W
		 */
		INPUT_VEH_PUSHBIKE_PEDAL = 136,
		/**
		 * CAPSLOCK
		 */
		INPUT_VEH_PUSHBIKE_SPRINT = 137,
		/**
		 * Q
		 */
		INPUT_VEH_PUSHBIKE_FRONT_BRAKE = 138,
		/**
		 * S
		 */
		INPUT_VEH_PUSHBIKE_REAR_BRAKE = 139,
		/**
		 * R
		 */
		INPUT_MELEE_ATTACK_LIGHT = 140,
		/**
		 * Q
		 */
		INPUT_MELEE_ATTACK_HEAVY = 141,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_MELEE_ATTACK_ALTERNATE = 142,
		/**
		 * SPACEBAR
		 */
		INPUT_MELEE_BLOCK = 143,
		/**
		 * F / LEFT MOUSE BUTTON
		 */
		INPUT_PARACHUTE_DEPLOY = 144,
		/**
		 * F
		 */
		INPUT_PARACHUTE_DETACH = 145,
		/**
		 * D
		 */
		INPUT_PARACHUTE_TURN_LR = 146,
		/**
		 * A
		 */
		INPUT_PARACHUTE_TURN_LEFT_ONLY = 147,
		/**
		 * D
		 */
		INPUT_PARACHUTE_TURN_RIGHT_ONLY = 148,
		/**
		 * S
		 */
		INPUT_PARACHUTE_PITCH_UD = 149,
		/**
		 * W
		 */
		INPUT_PARACHUTE_PITCH_UP_ONLY = 150,
		/**
		 * S
		 */
		INPUT_PARACHUTE_PITCH_DOWN_ONLY = 151,
		/**
		 * Q
		 */
		INPUT_PARACHUTE_BRAKE_LEFT = 152,
		/**
		 * E
		 */
		INPUT_PARACHUTE_BRAKE_RIGHT = 153,
		/**
		 * X
		 */
		INPUT_PARACHUTE_SMOKE = 154,
		/**
		 * LEFT SHIFT
		 */
		INPUT_PARACHUTE_PRECISION_LANDING = 155,
		INPUT_MAP = 156,
		/**
		 * 1
		 */
		INPUT_SELECT_WEAPON_UNARMED = 157,
		/**
		 * 2
		 */
		INPUT_SELECT_WEAPON_MELEE = 158,
		/**
		 * 6
		 */
		INPUT_SELECT_WEAPON_HANDGUN = 159,
		/**
		 * 3
		 */
		INPUT_SELECT_WEAPON_SHOTGUN = 160,
		/**
		 * 7
		 */
		INPUT_SELECT_WEAPON_SMG = 161,
		/**
		 * 8
		 */
		INPUT_SELECT_WEAPON_AUTO_RIFLE = 162,
		/**
		 * 9
		 */
		INPUT_SELECT_WEAPON_SNIPER = 163,
		/**
		 * 4
		 */
		INPUT_SELECT_WEAPON_HEAVY = 164,
		/**
		 * 5
		 */
		INPUT_SELECT_WEAPON_SPECIAL = 165,
		/**
		 * F5
		 */
		INPUT_SELECT_CHARACTER_MICHAEL = 166,
		/**
		 * F6
		 */
		INPUT_SELECT_CHARACTER_FRANKLIN = 167,
		/**
		 * F7
		 */
		INPUT_SELECT_CHARACTER_TREVOR = 168,
		/**
		 * F8
		 */
		INPUT_SELECT_CHARACTER_MULTIPLAYER = 169,
		/**
		 * F3
		 */
		INPUT_SAVE_REPLAY_CLIP = 170,
		/**
		 * CAPSLOCK
		 */
		INPUT_SPECIAL_ABILITY_PC = 171,
		/**
		 * ARROW UP
		 */
		INPUT_CELLPHONE_UP = 172,
		/**
		 * ARROW DOWN
		 */
		INPUT_CELLPHONE_DOWN = 173,
		/**
		 * ARROW LEFT
		 */
		INPUT_CELLPHONE_LEFT = 174,
		/**
		 * ARROW RIGHT
		 */
		INPUT_CELLPHONE_RIGHT = 175,
		/**
		 * ENTER/LEFT MOUSE BUTTON
		 */
		INPUT_CELLPHONE_SELECT = 176,
		/**
		 * BACKSPACE/ESC/RIGHT MOUSE BUTTON
		 */
		INPUT_CELLPHONE_CANCEL = 177,
		/**
		 * DELETE
		 */
		INPUT_CELLPHONE_OPTION = 178,
		/**
		 * SPACEBAR
		 */
		INPUT_CELLPHONE_EXTRA_OPTION = 179,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_CELLPHONE_SCROLL_FORWARD = 180,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_CELLPHONE_SCROLL_BACKWARD = 181,
		/**
		 * L
		 */
		INPUT_CELLPHONE_CAMERA_FOCUS_LOCK = 182,
		/**
		 * G
		 */
		INPUT_CELLPHONE_CAMERA_GRID = 183,
		/**
		 * E
		 */
		INPUT_CELLPHONE_CAMERA_SELFIE = 184,
		/**
		 * F
		 */
		INPUT_CELLPHONE_CAMERA_DOF = 185,
		/**
		 * X
		 */
		INPUT_CELLPHONE_CAMERA_EXPRESSION = 186,
		/**
		 * ARROW DOWN
		 */
		INPUT_FRONTEND_DOWN = 187,
		/**
		 * ARROW UP
		 */
		INPUT_FRONTEND_UP = 188,
		/**
		 * ARROW LEFT
		 */
		INPUT_FRONTEND_LEFT = 189,
		/**
		 * ARROW RIGHT
		 */
		INPUT_FRONTEND_RIGHT = 190,
		/**
		 * ENTER
		 */
		INPUT_FRONTEND_RDOWN = 191,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_RUP = 192,
		INPUT_FRONTEND_RLEFT = 193,
		/**
		 * BACKSPACE
		 */
		INPUT_FRONTEND_RRIGHT = 194,
		/**
		 * D
		 */
		INPUT_FRONTEND_AXIS_X = 195,
		/**
		 * S
		 */
		INPUT_FRONTEND_AXIS_Y = 196,
		/**
		 * ]
		 */
		INPUT_FRONTEND_RIGHT_AXIS_X = 197,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_FRONTEND_RIGHT_AXIS_Y = 198,
		/**
		 * P
		 */
		INPUT_FRONTEND_PAUSE = 199,
		/**
		 * ESC
		 */
		INPUT_FRONTEND_PAUSE_ALTERNATE = 200,
		/**
		 * ENTER/NUMPAD ENTER
		 */
		INPUT_FRONTEND_ACCEPT = 201,
		/**
		 * BACKSPACE/ESC
		 */
		INPUT_FRONTEND_CANCEL = 202,
		/**
		 * SPACEBAR
		 */
		INPUT_FRONTEND_X = 203,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_Y = 204,
		/**
		 * Q
		 */
		INPUT_FRONTEND_LB = 205,
		/**
		 * E
		 */
		INPUT_FRONTEND_RB = 206,
		/**
		 * PAGE DOWN
		 */
		INPUT_FRONTEND_LT = 207,
		/**
		 * PAGE UP
		 */
		INPUT_FRONTEND_RT = 208,
		/**
		 * LEFT SHIFT
		 */
		INPUT_FRONTEND_LS = 209,
		/**
		 * LEFT CTRL
		 */
		INPUT_FRONTEND_RS = 210,
		/**
		 * TAB
		 */
		INPUT_FRONTEND_LEADERBOARD = 211,
		/**
		 * HOME
		 */
		INPUT_FRONTEND_SOCIAL_CLUB = 212,
		/**
		 * HOME
		 */
		INPUT_FRONTEND_SOCIAL_CLUB_SECONDARY = 213,
		/**
		 * DELETE
		 */
		INPUT_FRONTEND_DELETE = 214,
		/**
		 * ENTER
		 */
		INPUT_FRONTEND_ENDSCREEN_ACCEPT = 215,
		/**
		 * SPACEBAR
		 */
		INPUT_FRONTEND_ENDSCREEN_EXPAND = 216,
		/**
		 * CAPSLOCK
		 */
		INPUT_FRONTEND_SELECT = 217,
		/**
		 * D
		 */
		INPUT_SCRIPT_LEFT_AXIS_X = 218,
		/**
		 * S
		 */
		INPUT_SCRIPT_LEFT_AXIS_Y = 219,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_SCRIPT_RIGHT_AXIS_X = 220,
		/**
		 * MOUSE DOWN
		 */
		INPUT_SCRIPT_RIGHT_AXIS_Y = 221,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RUP = 222,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RDOWN = 223,
		/**
		 * LEFT CTRL
		 */
		INPUT_SCRIPT_RLEFT = 224,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RRIGHT = 225,
		INPUT_SCRIPT_LB = 226,
		INPUT_SCRIPT_RB = 227,
		INPUT_SCRIPT_LT = 228,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_SCRIPT_RT = 229,
		INPUT_SCRIPT_LS = 230,
		INPUT_SCRIPT_RS = 231,
		/**
		 * W
		 */
		INPUT_SCRIPT_PAD_UP = 232,
		/**
		 * S
		 */
		INPUT_SCRIPT_PAD_DOWN = 233,
		/**
		 * A
		 */
		INPUT_SCRIPT_PAD_LEFT = 234,
		/**
		 * D
		 */
		INPUT_SCRIPT_PAD_RIGHT = 235,
		/**
		 * V
		 */
		INPUT_SCRIPT_SELECT = 236,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_CURSOR_ACCEPT = 237,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_CURSOR_CANCEL = 238,
		INPUT_CURSOR_X = 239,
		INPUT_CURSOR_Y = 240,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_CURSOR_SCROLL_UP = 241,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_CURSOR_SCROLL_DOWN = 242,
		/**
		 * ~ / `
		 */
		INPUT_ENTER_CHEAT_CODE = 243,
		/**
		 * M
		 */
		INPUT_INTERACTION_MENU = 244,
		/**
		 * T
		 */
		INPUT_MP_TEXT_CHAT_ALL = 245,
		/**
		 * Y
		 */
		INPUT_MP_TEXT_CHAT_TEAM = 246,
		INPUT_MP_TEXT_CHAT_FRIENDS = 247,
		INPUT_MP_TEXT_CHAT_CREW = 248,
		/**
		 * N
		 */
		INPUT_PUSH_TO_TALK = 249,
		/**
		 * R
		 */
		INPUT_CREATOR_LS = 250,
		/**
		 * F
		 */
		INPUT_CREATOR_RS = 251,
		/**
		 * X
		 */
		INPUT_CREATOR_LT = 252,
		/**
		 * C
		 */
		INPUT_CREATOR_RT = 253,
		/**
		 * LEFT SHIFT
		 */
		INPUT_CREATOR_MENU_TOGGLE = 254,
		/**
		 * SPACEBAR
		 */
		INPUT_CREATOR_ACCEPT = 255,
		/**
		 * DELETE
		 */
		INPUT_CREATOR_DELETE = 256,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_ATTACK2 = 257,
		INPUT_RAPPEL_JUMP = 258,
		INPUT_RAPPEL_LONG_JUMP = 259,
		INPUT_RAPPEL_SMASH_WINDOW = 260,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_PREV_WEAPON = 261,
		/**
		 * undefined | probably Scroll Down */
		INPUT_NEXT_WEAPON = 262,
		/**
		 * R
		 */
		INPUT_MELEE_ATTACK1 = 263,
		/**
		 * Q
		 */
		INPUT_MELEE_ATTACK2 = 264,
		INPUT_WHISTLE = 265,
		/**
		 * D
		 */
		INPUT_MOVE_LEFT = 266,
		/**
		 * D
		 */
		INPUT_MOVE_RIGHT = 267,
		/**
		 * S
		 */
		INPUT_MOVE_UP = 268,
		/**
		 * S
		 */
		INPUT_MOVE_DOWN = 269,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_LOOK_LEFT = 270,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_LOOK_RIGHT = 271,
		/**
		 * MOUSE DOWN
		 */
		INPUT_LOOK_UP = 272,
		/**
		 * MOUSE DOWN
		 */
		INPUT_LOOK_DOWN = 273,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_IN = 274,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT = 275,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_IN_ALTERNATE = 276,
		/**
		 * [
		 */
		INPUT_SNIPER_ZOOM_OUT_ALTERNATE = 277,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_LEFT = 278,
		/**
		 * D
		 */
		INPUT_VEH_MOVE_RIGHT = 279,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_UP = 280,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_MOVE_DOWN = 281,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_LEFT = 282,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_RIGHT = 283,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_UP = 284,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_GUN_DOWN = 285,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_LOOK_LEFT = 286,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_VEH_LOOK_RIGHT = 287,
		/**
		 * F1
		 */
		INPUT_REPLAY_START_STOP_RECORDING = 288,
		/**
		 * F2
		 */
		INPUT_REPLAY_START_STOP_RECORDING_SECONDARY = 289,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_SCALED_LOOK_LR = 290,
		/**
		 * MOUSE DOWN
		 */
		INPUT_SCALED_LOOK_UD = 291,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_UP_ONLY = 292,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_DOWN_ONLY = 293,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_LEFT_ONLY = 294,
		/**
		 *
		 */
		INPUT_SCALED_LOOK_RIGHT_ONLY = 295,
		/**
		 * DELETE
		 */
		INPUT_REPLAY_MARKER_DELETE = 296,
		/**
		 * DELETE
		 */
		INPUT_REPLAY_CLIP_DELETE = 297,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PAUSE = 298,
		/**
		 * ARROW DOWN
		 */
		INPUT_REPLAY_REWIND = 299,
		/**
		 * ARROW UP
		 */
		INPUT_REPLAY_FFWD = 300,
		/**
		 * M
		 */
		INPUT_REPLAY_NEWMARKER = 301,
		/**
		 * S
		 */
		INPUT_REPLAY_RECORD = 302,
		/**
		 * U
		 */
		INPUT_REPLAY_SCREENSHOT = 303,
		/**
		 * H
		 */
		INPUT_REPLAY_HIDEHUD = 304,
		/**
		 * B
		 */
		INPUT_REPLAY_STARTPOINT = 305,
		/**
		 * N
		 */
		INPUT_REPLAY_ENDPOINT = 306,
		/**
		 * ARROW RIGHT
		 */
		INPUT_REPLAY_ADVANCE = 307,
		/**
		 * ARROW LEFT
		 */
		INPUT_REPLAY_BACK = 308,
		/**
		 * T
		 */
		INPUT_REPLAY_TOOLS = 309,
		/**
		 * R
		 */
		INPUT_REPLAY_RESTART = 310,
		/**
		 * K
		 */
		INPUT_REPLAY_SHOWHOTKEY = 311,
		/**
		 * [
		 */
		INPUT_REPLAY_CYCLEMARKERLEFT = 312,
		/**
		 * ]
		 */
		INPUT_REPLAY_CYCLEMARKERRIGHT = 313,
		/**
		 * NUMPAD+
		 */
		INPUT_REPLAY_FOVINCREASE = 314,
		/**
		 * NUMPAD-
		 */
		INPUT_REPLAY_FOVDECREASE = 315,
		/**
		 * PAGE UP
		 */
		INPUT_REPLAY_CAMERAUP = 316,
		/**
		 * PAGE DOWN
		 */
		INPUT_REPLAY_CAMERADOWN = 317,
		/**
		 * F5
		 */
		INPUT_REPLAY_SAVE = 318,
		/**
		 * C
		 */
		INPUT_REPLAY_TOGGLETIME = 319,
		/**
		 * V
		 */
		INPUT_REPLAY_TOGGLETIPS = 320,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PREVIEW = 321,
		/**
		 * ESC
		 */
		INPUT_REPLAY_TOGGLE_TIMELINE = 322,
		/**
		 * X
		 */
		INPUT_REPLAY_TIMELINE_PICKUP_CLIP = 323,
		/**
		 * C
		 */
		INPUT_REPLAY_TIMELINE_DUPLICATE_CLIP = 324,
		/**
		 * V
		 */
		INPUT_REPLAY_TIMELINE_PLACE_CLIP = 325,
		/**
		 * LEFT CTRL
		 */
		INPUT_REPLAY_CTRL = 326,
		/**
		 * F5
		 */
		INPUT_REPLAY_TIMELINE_SAVE = 327,
		/**
		 * SPACEBAR
		 */
		INPUT_REPLAY_PREVIEW_AUDIO = 328,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_DRIVE_LOOK = 329,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_DRIVE_LOOK2 = 330,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_FLY_ATTACK2 = 331,
		/**
		 * MOUSE DOWN
		 */
		INPUT_RADIO_WHEEL_UD = 332,
		/**
		 * MOUSE RIGHT
		 */
		INPUT_RADIO_WHEEL_LR = 333,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_VEH_SLOWMO_UD = 334,
		/**
		 * SCROLLWHEEL UP
		 */
		INPUT_VEH_SLOWMO_UP_ONLY = 335,
		/**
		 * SCROLLWHEEL DOWN
		 */
		INPUT_VEH_SLOWMO_DOWN_ONLY = 336,
		/**
		 * X
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_TOGGLE = 337,
		/**
		 * A
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_LEFT = 338,
		/**
		 * D
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_RIGHT = 339,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_UP = 340,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_DOWN = 341,
		/**
		 * D
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_LR = 342,
		/**
		 * LEFT CTRL
		 */
		INPUT_VEH_HYDRAULICS_CONTROL_UD = 343,
		/**
		 * F11
		 */
		INPUT_SWITCH_VISOR = 344,
		/**
		 * X
		 */
		INPUT_VEH_MELEE_HOLD = 345,
		/**
		 * LEFT MOUSE BUTTON
		 */
		INPUT_VEH_MELEE_LEFT = 346,
		/**
		 * RIGHT MOUSE BUTTON
		 */
		INPUT_VEH_MELEE_RIGHT = 347,
		/**
		 * SCROLLWHEEL BUTTON (PRESS)
		 */
		INPUT_MAP_POI = 348,
		/**
		 * TAB
		 */
		INPUT_REPLAY_SNAPMATIC_PHOTO = 349,
		/**
		 * E
		 */
		INPUT_VEH_CAR_JUMP = 350,
		/**
		 * E
		 */
		INPUT_VEH_ROCKET_BOOST = 351,
		/**
		 * LEFT SHIFT
		 */
		INPUT_VEH_FLY_BOOST = 352,
		/**
		 * SPACEBAR
		 */
		INPUT_VEH_PARACHUTE = 353,
		/**
		 * X
		 */
		INPUT_VEH_BIKE_WINGS = 354,
		/**
		 * E
		 */
		INPUT_VEH_FLY_BOMB_BAY = 355,
		/**
		 * E
		 */
		INPUT_VEH_FLY_COUNTER = 356,
		/**
		 * X
		 */
		INPUT_VEH_TRANSFORM = 357,
	}

	const enum EventKey {
		BROWSER_CREATED = "browserCreated",
		BROWSER_DOM_READY = "browserDomReady",
		BROWSER_LOADING_FAILED = "browserLoadingFailed",
		CLICK = "click",
		CONSOLE_COMMAND = "consoleCommand",
		DUMMY_ENTITY_CREATED = "dummyEntityCreated",
		DUMMY_ENTITY_DESTROYED = "dummyEntityDestroyed",
		ENTITY_CONTROLLER_CHANGE = "entityControllerChange",
		ENTITY_CREATED = "entityCreated",
		ENTITY_STREAM_IN = "entityStreamIn",
		ENTITY_STREAM_OUT = "entityStreamOut",
		GUI_READY = "guiReady",
		INCOMING_DAMAGE = "incomingDamage",
		OUTGOING_DAMAGE = "outgoingDamage",
		PLAYER_CHAT = "playerChat",
		PLAYER_CREATE_WAYPOINT = "playerCreateWaypoint",
		PLAYER_COMMAND = "playerCommand",
		PLAYER_DEATH = "playerDeath",
		PLAYER_ENTER_CHECKPOINT = "playerEnterCheckpoint",
		PLAYER_ENTER_COLSHAPE = "playerEnterColshape",
		PLAYER_ENTER_VEHICLE = "playerEnterVehicle",
		PLAYER_EXIT_CHECKPOINT = "playerExitCheckpoint",
		PLAYER_EXIT_COLSHAPE = "playerExitColshape",
		PLAYER_JOIN = "playerJoin",
		PLAYER_LEAVE_VEHICLE = "playerLeaveVehicle",
		PLAYER_QUIT = "playerQuit",
		PLAYER_REACH_WAYPOINT = "playerReachWaypoint",
		PLAYER_READY = "playerReady",
		PLAYER_REMOVE_WAYPOINT = "playerRemoveWaypoint",
		PLAYER_RESURRECT = "playerResurrect",
		PLAYER_RULE_TRIGGERED = "playerRuleTriggered",
		PLAYER_SPAWN = "playerSpawn",
		PLAYER_START_TALKING = "playerStartTalking",
		PLAYER_STOP_TALKING = "playerStopTalking",
		PLAYER_WEAPON_SHOT = "playerWeaponShot",
		RENDER = "render",
		VEHICLE_DEATH = "vehicleDeath"
	}

	const enum Explosions {
		EXP_TAG_GRENADE = 0,
		EXP_TAG_GRENADELAUNCHER = 1,
		EXP_TAG_STICKYBOMB = 2,
		EXP_TAG_MOLOTOV = 3,
		EXP_TAG_ROCKET = 4,
		EXP_TAG_TANKSHELL = 5,
		EXP_TAG_HI_OCTANE = 6,
		EXP_TAG_CAR = 7,
		EXP_TAG_PLANE = 8,
		EXP_TAG_PETROL_PUMP = 9,
		EXP_TAG_BIKE = 10,
		EXP_TAG_DIR_STEAM = 11,
		EXP_TAG_DIR_FLAME = 12,
		EXP_TAG_DIR_WATER_HYDRANT = 13,
		EXP_TAG_DIR_GAS_CANISTER = 14,
		EXP_TAG_BOAT = 15,
		EXP_TAG_SHIP_DESTROY = 16,
		EXP_TAG_TRUCK = 17,
		EXP_TAG_BULLET = 18,
		EXP_TAG_SMOKEGRENADELAUNCHER = 19,
		EXP_TAG_SMOKEGRENADE = 20,
		EXP_TAG_BZGAS = 21,
		EXP_TAG_FLARE = 22,
		EXP_TAG_GAS_CANISTER = 23,
		EXP_TAG_EXTINGUISHER = 24,
		EXP_TAG_PROGRAMMABLEAR = 25,
		EXP_TAG_TRAIN = 26,
		EXP_TAG_BARREL = 27,
		EXP_TAG_PROPANE = 28,
		EXP_TAG_BLIMP = 29,
		EXP_TAG_DIR_FLAME_EXPLODE = 30,
		EXP_TAG_TANKER = 31,
		EXP_TAG_PLANE_ROCKET = 32,
		EXP_TAG_VEHICLE_BULLET = 33,
		EXP_TAG_GAS_TANK = 34,
		EXP_TAG_BIRD_CRAP = 35,
		EXP_TAG_RAILGUN = 36,
		EXP_TAG_BLIMP2 = 37,
		EXP_TAG_FIREWORK = 38,
		EXP_TAG_SNOWBALL = 39,
		EXP_TAG_PROXMINE = 40,
		EXP_TAG_VALKYRIE_CANNON = 41,
		EXP_TAG_AIR_DEFENSE = 42,
		EXP_TAG_PIPEBOMB = 43,
		EXP_TAG_VEHICLEMINE = 44,
		EXP_TAG_EXPLOSIVEAMMO = 45,
		EXP_TAG_APCSHELL = 46,
		EXP_TAG_BOMB_CLUSTER = 47,
		EXP_TAG_BOMB_GAS = 48,
		EXP_TAG_BOMB_INCENDIARY = 49,
		EXP_TAG_BOMB_STANDARD = 50,
		EXP_TAG_TORPEDO = 51,
		EXP_TAG_TORPEDO_UNDERWATER = 52,
		EXP_TAG_BOMBUSHKA_CANNON = 53,
		EXP_TAG_BOMB_CLUSTER_SECONDARY = 54,
		EXP_TAG_HUNTER_BARRAGE = 55,
		EXP_TAG_HUNTER_CANNON = 56,
		EXP_TAG_ROGUE_CANNON = 57,
		EXP_TAG_MINE_UNDERWATER = 58,
		EXP_TAG_ORBITAL_CANNON = 59,
		EXP_TAG_BOMB_STANDARD_WIDE = 60,
		EXP_TAG_EXPLOSIVEAMMO_SHOTGUN = 61,
		EXP_TAG_OPPRESSOR2_CANNON = 62,
		EXP_TAG_MORTAR_KINETIC = 63,
		EXP_TAG_VEHICLEMINE_KINETIC = 64,
		EXP_TAG_VEHICLEMINE_EMP = 65,
		EXP_TAG_VEHICLEMINE_SPIKE = 66,
		EXP_TAG_VEHICLEMINE_SLICK = 67,
		EXP_TAG_VEHICLEMINE_TAR = 68,
		EXP_TAG_SCRIPT_DRONE = 69,
		EXP_TAG_RAYGUN = 70,
		EXP_TAG_BURIEDMINE = 71,
		EXP_TAG_SCRIPT_MISSILE = 72
	}
	
	const enum HudColors {
		/** ![FFFFFF](https://htmlcolors.com/color-image/FFFFFF.png) */
		HUD_COLOUR_PURE_WHITE = 0,
		/** ![F0F0F0](https://htmlcolors.com/color-image/F0F0F0.png) */
		HUD_COLOUR_WHITE = 1,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_BLACK = 2,
		/** ![9B9B9B](https://htmlcolors.com/color-image/9B9B9B.png) */
		HUD_COLOUR_GREY = 3,
		/** ![CDCDCD](https://htmlcolors.com/color-image/CDCDCD.png) */
		HUD_COLOUR_GREYLIGHT = 4,
		/** ![4D4D4D](https://htmlcolors.com/color-image/4D4D4D.png) */
		HUD_COLOUR_GREYDARK = 5,
		/** ![E03232](https://htmlcolors.com/color-image/E03232.png) */
		HUD_COLOUR_RED = 6,
		/** ![F09999](https://htmlcolors.com/color-image/F09999.png) */
		HUD_COLOUR_REDLIGHT = 7,
		/** ![701919](https://htmlcolors.com/color-image/701919.png) */
		HUD_COLOUR_REDDARK = 8,
		/** ![5DB6E5](https://htmlcolors.com/color-image/5DB6E5.png) */
		HUD_COLOUR_BLUE = 9,
		/** ![AEDBF2](https://htmlcolors.com/color-image/AEDBF2.png) */
		HUD_COLOUR_BLUELIGHT = 10,
		/** ![2F5C73](https://htmlcolors.com/color-image/2F5C73.png) */
		HUD_COLOUR_BLUEDARK = 11,
		/** ![F0C850](https://htmlcolors.com/color-image/F0C850.png) */
		HUD_COLOUR_YELLOW = 12,
		/** ![FEEBA9](https://htmlcolors.com/color-image/FEEBA9.png) */
		HUD_COLOUR_YELLOWLIGHT = 13,
		/** ![7E6B29](https://htmlcolors.com/color-image/7E6B29.png) */
		HUD_COLOUR_YELLOWDARK = 14,
		/** ![FF8555](https://htmlcolors.com/color-image/FF8555.png) */
		HUD_COLOUR_ORANGE = 15,
		/** ![FFC2AA](https://htmlcolors.com/color-image/FFC2AA.png) */
		HUD_COLOUR_ORANGELIGHT = 16,
		/** ![7F422A](https://htmlcolors.com/color-image/7F422A.png) */
		HUD_COLOUR_ORANGEDARK = 17,
		/** ![72CC72](https://htmlcolors.com/color-image/72CC72.png) */
		HUD_COLOUR_GREEN = 18,
		/** ![B9E6B9](https://htmlcolors.com/color-image/B9E6B9.png) */
		HUD_COLOUR_GREENLIGHT = 19,
		/** ![396639](https://htmlcolors.com/color-image/396639.png) */
		HUD_COLOUR_GREENDARK = 20,
		/** ![8466E2](https://htmlcolors.com/color-image/8466E2.png) */
		HUD_COLOUR_PURPLE = 21,
		/** ![C0B3EF](https://htmlcolors.com/color-image/C0B3EF.png) */
		HUD_COLOUR_PURPLELIGHT = 22,
		/** ![43396F](https://htmlcolors.com/color-image/43396F.png) */
		HUD_COLOUR_PURPLEDARK = 23,
		/** ![CB3694](https://htmlcolors.com/color-image/CB3694.png) */
		HUD_COLOUR_PINK = 24,
		/** ![359A47](https://htmlcolors.com/color-image/359A47.png) */
		HUD_COLOUR_RADAR_HEALTH = 25,
		/** ![5DB6E5](https://htmlcolors.com/color-image/5DB6E5.png) */
		HUD_COLOUR_RADAR_ARMOUR = 26,
		/** ![EB2427](https://htmlcolors.com/color-image/EB2427.png) */
		HUD_COLOUR_RADAR_DAMAGE = 27,
		/** ![C25050](https://htmlcolors.com/color-image/C25050.png) */
		HUD_COLOUR_NET_PLAYER1 = 28,
		/** ![9C6EAF](https://htmlcolors.com/color-image/9C6EAF.png) */
		HUD_COLOUR_NET_PLAYER2 = 29,
		/** ![FF7BC4](https://htmlcolors.com/color-image/FF7BC4.png) */
		HUD_COLOUR_NET_PLAYER3 = 30,
		/** ![F79F7B](https://htmlcolors.com/color-image/F79F7B.png) */
		HUD_COLOUR_NET_PLAYER4 = 31,
		/** ![B29084](https://htmlcolors.com/color-image/B29084.png) */
		HUD_COLOUR_NET_PLAYER5 = 32,
		/** ![8DCEA7](https://htmlcolors.com/color-image/8DCEA7.png) */
		HUD_COLOUR_NET_PLAYER6 = 33,
		/** ![71A9AF](https://htmlcolors.com/color-image/71A9AF.png) */
		HUD_COLOUR_NET_PLAYER7 = 34,
		/** ![D3D1E7](https://htmlcolors.com/color-image/D3D1E7.png) */
		HUD_COLOUR_NET_PLAYER8 = 35,
		/** ![907F99](https://htmlcolors.com/color-image/907F99.png) */
		HUD_COLOUR_NET_PLAYER9 = 36,
		/** ![6AC4BF](https://htmlcolors.com/color-image/6AC4BF.png) */
		HUD_COLOUR_NET_PLAYER10 = 37,
		/** ![D6C499](https://htmlcolors.com/color-image/D6C499.png) */
		HUD_COLOUR_NET_PLAYER11 = 38,
		/** ![EA8E50](https://htmlcolors.com/color-image/EA8E50.png) */
		HUD_COLOUR_NET_PLAYER12 = 39,
		/** ![98CBEA](https://htmlcolors.com/color-image/98CBEA.png) */
		HUD_COLOUR_NET_PLAYER13 = 40,
		/** ![B26287](https://htmlcolors.com/color-image/B26287.png) */
		HUD_COLOUR_NET_PLAYER14 = 41,
		/** ![908E7A](https://htmlcolors.com/color-image/908E7A.png) */
		HUD_COLOUR_NET_PLAYER15 = 42,
		/** ![A6755E](https://htmlcolors.com/color-image/A6755E.png) */
		HUD_COLOUR_NET_PLAYER16 = 43,
		/** ![AFA8A8](https://htmlcolors.com/color-image/AFA8A8.png) */
		HUD_COLOUR_NET_PLAYER17 = 44,
		/** ![E88E9B](https://htmlcolors.com/color-image/E88E9B.png) */
		HUD_COLOUR_NET_PLAYER18 = 45,
		/** ![BBD65B](https://htmlcolors.com/color-image/BBD65B.png) */
		HUD_COLOUR_NET_PLAYER19 = 46,
		/** ![0C7B56](https://htmlcolors.com/color-image/0C7B56.png) */
		HUD_COLOUR_NET_PLAYER20 = 47,
		/** ![7BC4FF](https://htmlcolors.com/color-image/7BC4FF.png) */
		HUD_COLOUR_NET_PLAYER21 = 48,
		/** ![AB3CE6](https://htmlcolors.com/color-image/AB3CE6.png) */
		HUD_COLOUR_NET_PLAYER22 = 49,
		/** ![CEA90D](https://htmlcolors.com/color-image/CEA90D.png) */
		HUD_COLOUR_NET_PLAYER23 = 50,
		/** ![4763AD](https://htmlcolors.com/color-image/4763AD.png) */
		HUD_COLOUR_NET_PLAYER24 = 51,
		/** ![2AA6B9](https://htmlcolors.com/color-image/2AA6B9.png) */
		HUD_COLOUR_NET_PLAYER25 = 52,
		/** ![BA9D7D](https://htmlcolors.com/color-image/BA9D7D.png) */
		HUD_COLOUR_NET_PLAYER26 = 53,
		/** ![C9E1FF](https://htmlcolors.com/color-image/C9E1FF.png) */
		HUD_COLOUR_NET_PLAYER27 = 54,
		/** ![F0F096](https://htmlcolors.com/color-image/F0F096.png) */
		HUD_COLOUR_NET_PLAYER28 = 55,
		/** ![ED8CA1](https://htmlcolors.com/color-image/ED8CA1.png) */
		HUD_COLOUR_NET_PLAYER29 = 56,
		/** ![F98A8A](https://htmlcolors.com/color-image/F98A8A.png) */
		HUD_COLOUR_NET_PLAYER30 = 57,
		/** ![FCEFA6](https://htmlcolors.com/color-image/FCEFA6.png) */
		HUD_COLOUR_NET_PLAYER31 = 58,
		/** ![F0F0F0](https://htmlcolors.com/color-image/F0F0F0.png) */
		HUD_COLOUR_NET_PLAYER32 = 59,
		/** ![9FC9A6](https://htmlcolors.com/color-image/9FC9A6.png) */
		HUD_COLOUR_SIMPLEBLIP_DEFAULT = 60,
		/** ![8C8C8C](https://htmlcolors.com/color-image/8C8C8C.png) */
		HUD_COLOUR_MENU_BLUE = 61,
		/** ![8C8C8C](https://htmlcolors.com/color-image/8C8C8C.png) */
		HUD_COLOUR_MENU_GREY_LIGHT = 62,
		/** ![282828](https://htmlcolors.com/color-image/282828.png) */
		HUD_COLOUR_MENU_BLUE_EXTRA_DARK = 63,
		/** ![F0A000](https://htmlcolors.com/color-image/F0A000.png) */
		HUD_COLOUR_MENU_YELLOW = 64,
		/** ![F0A000](https://htmlcolors.com/color-image/F0A000.png) */
		HUD_COLOUR_MENU_YELLOW_DARK = 65,
		/** ![F0A000](https://htmlcolors.com/color-image/F0A000.png) */
		HUD_COLOUR_MENU_GREEN = 66,
		/** ![8C8C8C](https://htmlcolors.com/color-image/8C8C8C.png) */
		HUD_COLOUR_MENU_GREY = 67,
		/** ![3C3C3C](https://htmlcolors.com/color-image/3C3C3C.png) */
		HUD_COLOUR_MENU_GREY_DARK = 68,
		/** ![1E1E1E](https://htmlcolors.com/color-image/1E1E1E.png) */
		HUD_COLOUR_MENU_HIGHLIGHT = 69,
		/** ![8C8C8C](https://htmlcolors.com/color-image/8C8C8C.png) */
		HUD_COLOUR_MENU_STANDARD = 70,
		/** ![4B4B4B](https://htmlcolors.com/color-image/4B4B4B.png) */
		HUD_COLOUR_MENU_DIMMED = 71,
		/** ![323232](https://htmlcolors.com/color-image/323232.png) */
		HUD_COLOUR_MENU_EXTRA_DIMMED = 72,
		/** ![5F5F5F](https://htmlcolors.com/color-image/5F5F5F.png) */
		HUD_COLOUR_BRIEF_TITLE = 73,
		/** ![646464](https://htmlcolors.com/color-image/646464.png) */
		HUD_COLOUR_MID_GREY_MP = 74,
		/** ![5D2727](https://htmlcolors.com/color-image/5D2727.png) */
		HUD_COLOUR_NET_PLAYER1_DARK = 75,
		/** ![4D3759](https://htmlcolors.com/color-image/4D3759.png) */
		HUD_COLOUR_NET_PLAYER2_DARK = 76,
		/** ![7C3E63](https://htmlcolors.com/color-image/7C3E63.png) */
		HUD_COLOUR_NET_PLAYER3_DARK = 77,
		/** ![785050](https://htmlcolors.com/color-image/785050.png) */
		HUD_COLOUR_NET_PLAYER4_DARK = 78,
		/** ![574842](https://htmlcolors.com/color-image/574842.png) */
		HUD_COLOUR_NET_PLAYER5_DARK = 79,
		/** ![4A6753](https://htmlcolors.com/color-image/4A6753.png) */
		HUD_COLOUR_NET_PLAYER6_DARK = 80,
		/** ![3C5558](https://htmlcolors.com/color-image/3C5558.png) */
		HUD_COLOUR_NET_PLAYER7_DARK = 81,
		/** ![696940](https://htmlcolors.com/color-image/696940.png) */
		HUD_COLOUR_NET_PLAYER8_DARK = 82,
		/** ![483F4C](https://htmlcolors.com/color-image/483F4C.png) */
		HUD_COLOUR_NET_PLAYER9_DARK = 83,
		/** ![35625F](https://htmlcolors.com/color-image/35625F.png) */
		HUD_COLOUR_NET_PLAYER10_DARK = 84,
		/** ![6B624C](https://htmlcolors.com/color-image/6B624C.png) */
		HUD_COLOUR_NET_PLAYER11_DARK = 85,
		/** ![754728](https://htmlcolors.com/color-image/754728.png) */
		HUD_COLOUR_NET_PLAYER12_DARK = 86,
		/** ![4C6575](https://htmlcolors.com/color-image/4C6575.png) */
		HUD_COLOUR_NET_PLAYER13_DARK = 87,
		/** ![41232F](https://htmlcolors.com/color-image/41232F.png) */
		HUD_COLOUR_NET_PLAYER14_DARK = 88,
		/** ![48473D](https://htmlcolors.com/color-image/48473D.png) */
		HUD_COLOUR_NET_PLAYER15_DARK = 89,
		/** ![553A2F](https://htmlcolors.com/color-image/553A2F.png) */
		HUD_COLOUR_NET_PLAYER16_DARK = 90,
		/** ![575454](https://htmlcolors.com/color-image/575454.png) */
		HUD_COLOUR_NET_PLAYER17_DARK = 91,
		/** ![74474D](https://htmlcolors.com/color-image/74474D.png) */
		HUD_COLOUR_NET_PLAYER18_DARK = 92,
		/** ![5D6B2D](https://htmlcolors.com/color-image/5D6B2D.png) */
		HUD_COLOUR_NET_PLAYER19_DARK = 93,
		/** ![063D2B](https://htmlcolors.com/color-image/063D2B.png) */
		HUD_COLOUR_NET_PLAYER20_DARK = 94,
		/** ![3D627F](https://htmlcolors.com/color-image/3D627F.png) */
		HUD_COLOUR_NET_PLAYER21_DARK = 95,
		/** ![551E73](https://htmlcolors.com/color-image/551E73.png) */
		HUD_COLOUR_NET_PLAYER22_DARK = 96,
		/** ![675406](https://htmlcolors.com/color-image/675406.png) */
		HUD_COLOUR_NET_PLAYER23_DARK = 97,
		/** ![233156](https://htmlcolors.com/color-image/233156.png) */
		HUD_COLOUR_NET_PLAYER24_DARK = 98,
		/** ![15535C](https://htmlcolors.com/color-image/15535C.png) */
		HUD_COLOUR_NET_PLAYER25_DARK = 99,
		/** ![5D623E](https://htmlcolors.com/color-image/5D623E.png) */
		HUD_COLOUR_NET_PLAYER26_DARK = 100,
		/** ![64707F](https://htmlcolors.com/color-image/64707F.png) */
		HUD_COLOUR_NET_PLAYER27_DARK = 101,
		/** ![78784B](https://htmlcolors.com/color-image/78784B.png) */
		HUD_COLOUR_NET_PLAYER28_DARK = 102,
		/** ![984C5D](https://htmlcolors.com/color-image/984C5D.png) */
		HUD_COLOUR_NET_PLAYER29_DARK = 103,
		/** ![7C4545](https://htmlcolors.com/color-image/7C4545.png) */
		HUD_COLOUR_NET_PLAYER30_DARK = 104,
		/** ![0A2B32](https://htmlcolors.com/color-image/0A2B32.png) */
		HUD_COLOUR_NET_PLAYER31_DARK = 105,
		/** ![5F5F0A](https://htmlcolors.com/color-image/5F5F0A.png) */
		HUD_COLOUR_NET_PLAYER32_DARK = 106,
		/** ![B48261](https://htmlcolors.com/color-image/B48261.png) */
		HUD_COLOUR_BRONZE = 107,
		/** ![9699A1](https://htmlcolors.com/color-image/9699A1.png) */
		HUD_COLOUR_SILVER = 108,
		/** ![D6B563](https://htmlcolors.com/color-image/D6B563.png) */
		HUD_COLOUR_GOLD = 109,
		/** ![A6DDBE](https://htmlcolors.com/color-image/A6DDBE.png) */
		HUD_COLOUR_PLATINUM = 110,
		/** ![1D6499](https://htmlcolors.com/color-image/1D6499.png) */
		HUD_COLOUR_GANG1 = 111,
		/** ![D6740F](https://htmlcolors.com/color-image/D6740F.png) */
		HUD_COLOUR_GANG2 = 112,
		/** ![877D8E](https://htmlcolors.com/color-image/877D8E.png) */
		HUD_COLOUR_GANG3 = 113,
		/** ![E577B9](https://htmlcolors.com/color-image/E577B9.png) */
		HUD_COLOUR_GANG4 = 114,
		/** ![FCEFA6](https://htmlcolors.com/color-image/FCEFA6.png) */
		HUD_COLOUR_SAME_CREW = 115,
		/** ![2D6EB9](https://htmlcolors.com/color-image/2D6EB9.png) */
		HUD_COLOUR_FREEMODE = 116,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_PAUSE_BG = 117,
		/** ![5DB6E5](https://htmlcolors.com/color-image/5DB6E5.png) */
		HUD_COLOUR_FRIENDLY = 118,
		/** ![C25050](https://htmlcolors.com/color-image/C25050.png) */
		HUD_COLOUR_ENEMY = 119,
		/** ![F0C850](https://htmlcolors.com/color-image/F0C850.png) */
		HUD_COLOUR_LOCATION = 120,
		/** ![72CC72](https://htmlcolors.com/color-image/72CC72.png) */
		HUD_COLOUR_PICKUP = 121,
		/** ![72CC72](https://htmlcolors.com/color-image/72CC72.png) */
		HUD_COLOUR_PAUSE_SINGLEPLAYER = 122,
		/** ![16375C](https://htmlcolors.com/color-image/16375C.png) */
		HUD_COLOUR_FREEMODE_DARK = 123,
		/** ![9A9A9A](https://htmlcolors.com/color-image/9A9A9A.png) */
		HUD_COLOUR_INACTIVE_MISSION = 124,
		/** ![C25050](https://htmlcolors.com/color-image/C25050.png) */
		HUD_COLOUR_DAMAGE = 125,
		/** ![FC73C9](https://htmlcolors.com/color-image/FC73C9.png) */
		HUD_COLOUR_PINKLIGHT = 126,
		/** ![FCB131](https://htmlcolors.com/color-image/FCB131.png) */
		HUD_COLOUR_PM_MITEM_HIGHLIGHT = 127,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_SCRIPT_VARIABLE = 128,
		/** ![6DF7CC](https://htmlcolors.com/color-image/6DF7CC.png) */
		HUD_COLOUR_YOGA = 129,
		/** ![F16522](https://htmlcolors.com/color-image/F16522.png) */
		HUD_COLOUR_TENNIS = 130,
		/** ![D6BD61](https://htmlcolors.com/color-image/D6BD61.png) */
		HUD_COLOUR_GOLF = 131,
		/** ![701919](https://htmlcolors.com/color-image/701919.png) */
		HUD_COLOUR_SHOOTING_RANGE = 132,
		/** ![2F5C73](https://htmlcolors.com/color-image/2F5C73.png) */
		HUD_COLOUR_FLIGHT_SCHOOL = 133,
		/** ![5DB6E5](https://htmlcolors.com/color-image/5DB6E5.png) */
		HUD_COLOUR_NORTH_BLUE = 134,
		/** ![EA991C](https://htmlcolors.com/color-image/EA991C.png) */
		HUD_COLOUR_SOCIAL_CLUB = 135,
		/** ![0B377B](https://htmlcolors.com/color-image/0B377B.png) */
		HUD_COLOUR_PLATFORM_BLUE = 136,
		/** ![92C83E](https://htmlcolors.com/color-image/92C83E.png) */
		HUD_COLOUR_PLATFORM_GREEN = 137,
		/** ![EA991C](https://htmlcolors.com/color-image/EA991C.png) */
		HUD_COLOUR_PLATFORM_GREY = 138,
		/** ![425994](https://htmlcolors.com/color-image/425994.png) */
		HUD_COLOUR_FACEBOOK_BLUE = 139,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_INGAME_BG = 140,
		/** ![72CC72](https://htmlcolors.com/color-image/72CC72.png) */
		HUD_COLOUR_DARTS = 141,
		/** ![A44CF2](https://htmlcolors.com/color-image/A44CF2.png) */
		HUD_COLOUR_WAYPOINT = 142,
		/** ![65B4D4](https://htmlcolors.com/color-image/65B4D4.png) */
		HUD_COLOUR_MICHAEL = 143,
		/** ![ABEDAB](https://htmlcolors.com/color-image/ABEDAB.png) */
		HUD_COLOUR_FRANKLIN = 144,
		/** ![FFA357](https://htmlcolors.com/color-image/FFA357.png) */
		HUD_COLOUR_TREVOR = 145,
		/** ![F0F0F0](https://htmlcolors.com/color-image/F0F0F0.png) */
		HUD_COLOUR_GOLF_P1 = 146,
		/** ![EBEF1E](https://htmlcolors.com/color-image/EBEF1E.png) */
		HUD_COLOUR_GOLF_P2 = 147,
		/** ![FF950E](https://htmlcolors.com/color-image/FF950E.png) */
		HUD_COLOUR_GOLF_P3 = 148,
		/** ![F63CA1](https://htmlcolors.com/color-image/F63CA1.png) */
		HUD_COLOUR_GOLF_P4 = 149,
		/** ![D2A6F9](https://htmlcolors.com/color-image/D2A6F9.png) */
		HUD_COLOUR_WAYPOINTLIGHT = 150,
		/** ![522679](https://htmlcolors.com/color-image/522679.png) */
		HUD_COLOUR_WAYPOINTDARK = 151,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_PANEL_LIGHT = 152,
		/** ![486774](https://htmlcolors.com/color-image/486774.png) */
		HUD_COLOUR_MICHAEL_DARK = 153,
		/** ![557655](https://htmlcolors.com/color-image/557655.png) */
		HUD_COLOUR_FRANKLIN_DARK = 154,
		/** ![7F512B](https://htmlcolors.com/color-image/7F512B.png) */
		HUD_COLOUR_TREVOR_DARK = 155,
		/** ![F0C850](https://htmlcolors.com/color-image/F0C850.png) */
		HUD_COLOUR_OBJECTIVE_ROUTE = 156,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_PAUSEMAP_TINT = 157,
		/** ![646464](https://htmlcolors.com/color-image/646464.png) */
		HUD_COLOUR_PAUSE_DESELECT = 158,
		/** ![2D6EB9](https://htmlcolors.com/color-image/2D6EB9.png) */
		HUD_COLOUR_PM_WEAPONS_PURCHASABLE = 159,
		/** ![F0F0F0](https://htmlcolors.com/color-image/F0F0F0.png) */
		HUD_COLOUR_PM_WEAPONS_LOCKED = 160,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_END_SCREEN_BG = 161,
		/** ![E03232](https://htmlcolors.com/color-image/E03232.png) */
		HUD_COLOUR_CHOP = 162,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_PAUSEMAP_TINT_HALF = 163,
		/** ![004785](https://htmlcolors.com/color-image/004785.png) */
		HUD_COLOUR_NORTH_BLUE_OFFICIAL = 164,
		/** ![000000](https://htmlcolors.com/color-image/000000.png) */
		HUD_COLOUR_SCRIPT_VARIABLE_2 = 165,
		/** ![217625](https://htmlcolors.com/color-image/217625.png) */
		HUD_COLOUR_H = 166,
		/** ![256628](https://htmlcolors.com/color-image/256628.png) */
		HUD_COLOUR_HDARK = 167,
		/** ![EA991C](https://htmlcolors.com/color-image/EA991C.png) */
		HUD_COLOUR_T = 168,
		/** ![E18C08](https://htmlcolors.com/color-image/E18C08.png) */
		HUD_COLOUR_TDARK = 169,
		/** ![142800](https://htmlcolors.com/color-image/142800.png) */
		HUD_COLOUR_HSHARD = 170,
		/** ![30FFFF](https://htmlcolors.com/color-image/30FFFF.png) */
		HUD_COLOUR_CONTROLLER_MICHAEL = 171,
		/** ![30FF00](https://htmlcolors.com/color-image/30FF00.png) */
		HUD_COLOUR_CONTROLLER_FRANKLIN = 172,
		/** ![B05000](https://htmlcolors.com/color-image/B05000.png) */
		HUD_COLOUR_CONTROLLER_TREVOR = 173,
		/** ![7F0000](https://htmlcolors.com/color-image/7F0000.png) */
		HUD_COLOUR_CONTROLLER_CHOP = 174,
		/** ![35A6E0](https://htmlcolors.com/color-image/35A6E0.png) */
		HUD_COLOUR_VIDEO_EDITOR_VIDEO = 175,
		/** ![A24F9D](https://htmlcolors.com/color-image/A24F9D.png) */
		HUD_COLOUR_VIDEO_EDITOR_AUDIO = 176,
		/** ![68C08D](https://htmlcolors.com/color-image/68C08D.png) */
		HUD_COLOUR_VIDEO_EDITOR_TEXT = 177,
		/** ![1D6499](https://htmlcolors.com/color-image/1D6499.png) */
		HUD_COLOUR_HB_BLUE = 178,
		/** ![EA991C](https://htmlcolors.com/color-image/EA991C.png) */
		HUD_COLOUR_HB_YELLOW = 179,
		/** ![F0A001](https://htmlcolors.com/color-image/F0A001.png) */
		HUD_COLOUR_VIDEO_EDITOR_SCORE = 180,
		/** ![3B2239](https://htmlcolors.com/color-image/3B2239.png) */
		HUD_COLOUR_VIDEO_EDITOR_AUDIO_FADEOUT = 181,
		/** ![294435](https://htmlcolors.com/color-image/294435.png) */
		HUD_COLOUR_VIDEO_EDITOR_TEXT_FADEOUT = 182,
		/** ![523A0A](https://htmlcolors.com/color-image/523A0A.png) */
		HUD_COLOUR_VIDEO_EDITOR_SCORE_FADEOUT = 183,
		/** ![256628](https://htmlcolors.com/color-image/256628.png) */
		HUD_COLOUR_HEIST_BACKGROUND = 184,
		/** ![F0C850](https://htmlcolors.com/color-image/F0C850.png) */
		HUD_COLOUR_VIDEO_EDITOR_AMBIENT = 185,
		/** ![504622](https://htmlcolors.com/color-image/504622.png) */
		HUD_COLOUR_VIDEO_EDITOR_AMBIENT_FADEOUT = 186,
		/** ![FF8555](https://htmlcolors.com/color-image/FF8555.png) */
		HUD_COLOUR_VIDEO_EDITOR_AMBIENT_DARK = 187,
		/** ![FFC2AA](https://htmlcolors.com/color-image/FFC2AA.png) */
		HUD_COLOUR_VIDEO_EDITOR_AMBIENT_LIGHT = 188,
		/** ![FF8555](https://htmlcolors.com/color-image/FF8555.png) */
		HUD_COLOUR_VIDEO_EDITOR_AMBIENT_MID = 189,
		/** ![F0C850](https://htmlcolors.com/color-image/F0C850.png) */
		HUD_COLOUR_LOW_FLOW = 190,
		/** ![7E6B29](https://htmlcolors.com/color-image/7E6B29.png) */
		HUD_COLOUR_LOW_FLOW_DARK = 191,
		/** ![F79F7B](https://htmlcolors.com/color-image/F79F7B.png) */
		HUD_COLOUR_G1 = 192,
		/** ![E286BB](https://htmlcolors.com/color-image/E286BB.png) */
		HUD_COLOUR_G2 = 193,
		/** ![EFEE97](https://htmlcolors.com/color-image/EFEE97.png) */
		HUD_COLOUR_G3 = 194,
		/** ![71A9AF](https://htmlcolors.com/color-image/71A9AF.png) */
		HUD_COLOUR_G4 = 195,
		/** ![A08CC1](https://htmlcolors.com/color-image/A08CC1.png) */
		HUD_COLOUR_G5 = 196,
		/** ![8DCEA7](https://htmlcolors.com/color-image/8DCEA7.png) */
		HUD_COLOUR_G6 = 197,
		/** ![B5D6EA](https://htmlcolors.com/color-image/B5D6EA.png) */
		HUD_COLOUR_G7 = 198,
		/** ![B29084](https://htmlcolors.com/color-image/B29084.png) */
		HUD_COLOUR_G8 = 199,
		/** ![008472](https://htmlcolors.com/color-image/008472.png) */
		HUD_COLOUR_G9 = 200,
		/** ![D85575](https://htmlcolors.com/color-image/D85575.png) */
		HUD_COLOUR_G10 = 201,
		/** ![1E6498](https://htmlcolors.com/color-image/1E6498.png) */
		HUD_COLOUR_G11 = 202,
		/** ![2BB575](https://htmlcolors.com/color-image/2BB575.png) */
		HUD_COLOUR_G12 = 203,
		/** ![E98D4F](https://htmlcolors.com/color-image/E98D4F.png) */
		HUD_COLOUR_G13 = 204,
		/** ![89D2D7](https://htmlcolors.com/color-image/89D2D7.png) */
		HUD_COLOUR_G14 = 205,
		/** ![867D8D](https://htmlcolors.com/color-image/867D8D.png) */
		HUD_COLOUR_G15 = 206,
		/** ![6D2221](https://htmlcolors.com/color-image/6D2221.png) */
		HUD_COLOUR_ADVERSARY = 207,
		/** ![FF0000](https://htmlcolors.com/color-image/FF0000.png) */
		HUD_COLOUR_DEGEN_RED = 208,
		/** ![FFFF00](https://htmlcolors.com/color-image/FFFF00.png) */
		HUD_COLOUR_DEGEN_YELLOW = 209,
		/** ![00FF00](https://htmlcolors.com/color-image/00FF00.png) */
		HUD_COLOUR_DEGEN_GREEN = 210,
		/** ![00FFFF](https://htmlcolors.com/color-image/00FFFF.png) */
		HUD_COLOUR_DEGEN_CYAN = 211,
		/** ![0000FF](https://htmlcolors.com/color-image/0000FF.png) */
		HUD_COLOUR_DEGEN_BLUE = 212,
		/** ![FF00FF](https://htmlcolors.com/color-image/FF00FF.png) */
		HUD_COLOUR_DEGEN_MAGENTA = 213,
		/** ![2688EA](https://htmlcolors.com/color-image/2688EA.png) */
		HUD_COLOUR_STUNT_1 = 214,
		/** ![E03232](https://htmlcolors.com/color-image/E03232.png) */
		HUD_COLOUR_STUNT_2 = 215,
		/** ![9AB236](https://htmlcolors.com/color-image/9AB236.png) */
		HUD_COLOUR_SPECIAL_RACE_SERIES = 216,
		/** ![5D6B2D](https://htmlcolors.com/color-image/5D6B2D.png) */
		HUD_COLOUR_SPECIAL_RACE_SERIES_DARK = 217,
		/** ![CEA90D](https://htmlcolors.com/color-image/CEA90D.png) */
		HUD_COLOUR_CS = 218,
		/** ![675406](https://htmlcolors.com/color-image/675406.png) */
		HUD_COLOUR_CS_DARK = 219,
		/** ![009797](https://htmlcolors.com/color-image/009797.png) */
		HUD_COLOUR_TECH_GREEN = 220,
		/** ![057771](https://htmlcolors.com/color-image/057771.png) */
		HUD_COLOUR_TECH_GREEN_DARK = 221,
		/** ![970000](https://htmlcolors.com/color-image/970000.png) */
		HUD_COLOUR_TECH_RED = 222,
		/** ![002828](https://htmlcolors.com/color-image/002828.png) */
		HUD_COLOUR_TECH_GREEN_VERY_DARK = 223,
	}

	const enum HudComponent {
		HUD = 0,
		WANTED_STARS = 1,
		WEAPON_ICON = 2,
		CASH = 3,
		MP_CASH = 4,
		MP_MESSAGE = 5,
		VEHICLE_NAME = 6,
		AREA_NAME = 7,
		VEHICLE_CLASS = 8,
		STREET_NAME = 9,
		HELP_TEXT = 10,
		FLOATING_HELP_TEXT_1 = 11,
		FLOATING_HELP_TEXT_2 = 12,
		CASH_CHANGE = 13,
		RETICLE = 14,
		SUBTITLE_TEXT = 15,
		RADIO_STATIONS = 16,
		SAVING_GAME = 17,
		GAME_STREAM = 18,
		WEAPON_WHEEL = 19,
		WEAPON_WHEEL_STATS = 20
	}

	const enum InputGroup {
		INPUTGROUP_MOVE = 0,
		INPUTGROUP_LOOK = 1,
		INPUTGROUP_WHEEL = 2,
		INPUTGROUP_CELLPHONE_NAVIGATE = 3,
		INPUTGROUP_CELLPHONE_NAVIGATE_UD = 4,
		INPUTGROUP_CELLPHONE_NAVIGATE_LR = 5,
		INPUTGROUP_FRONTEND_DPAD_ALL = 6,
		INPUTGROUP_FRONTEND_DPAD_UD = 7,
		INPUTGROUP_FRONTEND_DPAD_LR = 8,
		INPUTGROUP_FRONTEND_LSTICK_ALL = 9,
		INPUTGROUP_FRONTEND_RSTICK_ALL = 10,
		INPUTGROUP_FRONTEND_GENERIC_UD = 11,
		INPUTGROUP_FRONTEND_GENERIC_LR = 12,
		INPUTGROUP_FRONTEND_GENERIC_ALL = 13,
		INPUTGROUP_FRONTEND_BUMPERS = 14,
		INPUTGROUP_FRONTEND_TRIGGERS = 15,
		INPUTGROUP_FRONTEND_STICKS = 16,
		INPUTGROUP_SCRIPT_DPAD_ALL = 17,
		INPUTGROUP_SCRIPT_DPAD_UD = 18,
		INPUTGROUP_SCRIPT_DPAD_LR = 19,
		INPUTGROUP_SCRIPT_LSTICK_ALL = 20,
		INPUTGROUP_SCRIPT_RSTICK_ALL = 21,
		INPUTGROUP_SCRIPT_BUMPERS = 22,
		INPUTGROUP_SCRIPT_TRIGGERS = 23,
		INPUTGROUP_WEAPON_WHEEL_CYCLE = 24,
		INPUTGROUP_FLY = 25,
		INPUTGROUP_SUB = 26,
		INPUTGROUP_VEH_MOVE_ALL = 27,
		INPUTGROUP_CURSOR = 28,
		INPUTGROUP_CURSOR_SCROLL = 29,
		INPUTGROUP_SNIPER_ZOOM_SECONDARY = 30,
		INPUTGROUP_VEH_HYDRAULICS_CONTROL = 31,
		MAX_INPUTGROUPS = 32,
		INPUTGROUP_INVALID = 33
	}
	
	const enum Markers {
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/60/Markers_0.png/200px-Markers_0.png)
		 */
		UPSIDE_DOWN_CONE = 0,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/5/53/Markers_1.png/200px-Markers_1.png)
		 */
		VERTICAL_CYLINDER = 1,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/7/76/Markers_2.png/200px-Markers_2.png)
		 */
		THICK_CEVRON_UP = 2,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/67/Markers_3.png/200px-Markers_3.png)
		 */
		THIN_CEVRON_UP = 3,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/8/84/Markers_4.png/200px-Markers_4.png)
		 */
		CHECKERED_FLAG_RECT = 4,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/5/50/Markers_5.png/200px-Markers_5.png)
		 */
		CHECKERED_FLAG_CIRCLE = 5,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/b6/Markers_6.png/200px-Markers_6.png)
		 */
		VERTICAL_CIRCLE = 6,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/d1/Markers_7.png/200px-Markers_7.png)
		 */
		PLANE_MODEL = 7,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/c2/Markers_8.png/200px-Markers_8.png)
		 */
		LOST_MC_DARK = 8,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/68/Markers_9.png/200px-Markers_9.png)
		 */
		LOST_MC_LIGHT = 9,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/7/70/Markers_10.png/200px-Markers_10.png)
		 */
		NUMBER_0 = 10,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/b4/Markers_11.png/200px-Markers_11.png)
		 */
		NUMBER_1 = 11,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/c2/Markers_12.png/200px-Markers_12.png)
		 */
		NUMBER_2 = 12,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/7/7d/Markers_13.png/200px-Markers_13.png)
		 */
		NUMBER_3 = 13,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/6e/Markers_14.png/200px-Markers_14.png)
		 */
		NUMBER_4 = 14,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/be/Markers_15.png/200px-Markers_15.png)
		 */
		NUMBER_5 = 15,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/9/95/Markers_16.png/200px-Markers_16.png)
		 */
		NUMBER_6 = 16,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/b/bc/Markers_17.png/200px-Markers_17.png)
		 */
		NUMBER_7 = 17,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/1/14/Markers_18.png/200px-Markers_18.png)
		 */
		NUMBER_8 = 18,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/c9/Markers_19.png/200px-Markers_19.png)
		 */
		NUMBER_9 = 19,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/8/8f/Markers_20.png/200px-Markers_20.png)
		 */
		CHEVRON_UP = 20,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/9/9e/Markers_21.png/200px-Markers_21.png)
		 */
		DOUBLE_CHEVRON_UP = 21,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/dd/Markers_22.png/200px-Markers_22.png)
		 */
		TRIPLE__CHEVRON_UP = 22,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/8/8a/Markers_23.png/200px-Markers_23.png)
		 */
		HORIZONTAL_CIRCLE_FLAT = 23,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/64/Markers_24.png/200px-Markers_24.png)
		 */
		REPLAY_ICON = 24,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/2/27/Markers_25.png/200px-Markers_25.png)
		 */
		HORIZONTAL_CIRCLE_SKINNY = 25,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/c/ca/Markers_26.png/200px-Markers_26.png)
		 */
		HORIZONTAL_CIRCLE_ARROW = 26,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/5/54/Markers_27.png/200px-Markers_27.png)
		 */
		HORIZONTAL_SPLIT_ARROW_CIRCLE = 27,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/0/00/Markers_28.png/200px-Markers_28.png)
		 */
		SPHERE = 28,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/d2/Markers_29.png/200px-Markers_29.png)
		 */
		DOLLOR_SIGN = 29,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/6/64/Markers_30.png/200px-Markers_30.png)
		 */
		HORIZONTAL_BARS = 30,
		/**
		 * ![](https://wiki.rage.mp//images/thumb/d/d0/Markers_31.png/200px-Markers_31.png)
		 */
		WOLF_HEAD = 31,
	}

	/**
	 * These pictures are used with {@link https://wiki.rage.mp/index.php?title=Ui::setNotificationMessage|Ui::setNotificationMessage}.
	 *
	 * If a notification picture doesn't work without requesting, request it first with {@link https://wiki.rage.mp/index.php?title=Graphics::requestStreamedTextureDict|Graphics::requestStreamedTextureDict}.
	 *
	 * Wikipedia: https://wiki.rage.mp/index.php?title=Notification_Pictures
	 */
	const enum NotificationPictures {
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ABIGAIL](https://wiki.rage.mp/images/c/c8/Char_abigail.jpg),
		 */
		CHAR_ABIGAIL = 'CHAR_ABIGAIL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ACTING_UP](https://wiki.rage.mp/images/b/b4/Char_acting_up.jpg),
		 */
		CHAR_ACTING_UP = 'CHAR_ACTING_UP',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_AGENT14](https://wiki.rage.mp/images/d/dd/Char_agent14.jpg),
		 */
		CHAR_AGENT14 = 'CHAR_AGENT14',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ALL_PLAYERS_CONF](https://wiki.rage.mp/images/5/5a/Char_all_players_conf.jpg),
		 */
		CHAR_ALL_PLAYERS_CONF = 'CHAR_ALL_PLAYERS_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_AMANDA](https://wiki.rage.mp/images/7/7d/Char_amanda.jpg),
		 */
		CHAR_AMANDA = 'CHAR_AMANDA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_AMMUNATION](https://wiki.rage.mp/images/b/b1/Char_ammunation.jpg),
		 */
		CHAR_AMMUNATION = 'CHAR_AMMUNATION',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ANDREAS](https://wiki.rage.mp/images/c/c2/Char_andreas.jpg),
		 */
		CHAR_ANDREAS = 'CHAR_ANDREAS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ANTONIA](https://wiki.rage.mp/images/6/6c/Char_antonia.jpg),
		 */
		CHAR_ANTONIA = 'CHAR_ANTONIA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ARTHUR](https://wiki.rage.mp/images/3/3a/Char_arthur.jpg),
		 */
		CHAR_ARTHUR = 'CHAR_ARTHUR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ASHLEY](https://wiki.rage.mp/images/9/98/Char_ashley.jpg),
		 */
		CHAR_ASHLEY = 'CHAR_ASHLEY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BANK_BOL](https://wiki.rage.mp/images/b/b3/Char_bank_bol.jpg),
		 */
		CHAR_BANK_BOL = 'CHAR_BANK_BOL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BANK_FLEECA](https://wiki.rage.mp/images/1/1d/Char_bank_fleeca.jpg),
		 */
		CHAR_BANK_FLEECA = 'CHAR_BANK_FLEECA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BANK_MAZE](https://wiki.rage.mp/images/b/bc/Char_bank_maze.jpg),
		 */
		CHAR_BANK_MAZE = 'CHAR_BANK_MAZE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BARRY](https://wiki.rage.mp/images/a/a6/Char_barry.jpg),
		 */
		CHAR_BARRY = 'CHAR_BARRY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BEVERLY](https://wiki.rage.mp/images/f/f4/Char_beverly.jpg),
		 */
		CHAR_BEVERLY = 'CHAR_BEVERLY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BIKESITE](https://wiki.rage.mp/images/1/11/Char_bikesite.jpg),
		 */
		CHAR_BIKESITE = 'CHAR_BIKESITE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BLANK_ENTRY](https://wiki.rage.mp/images/4/40/Char_blank_entry.jpg),
		 */
		CHAR_BLANK_ENTRY = 'CHAR_BLANK_ENTRY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BLIMP](https://wiki.rage.mp/images/b/b3/Char_blimp.jpg),
		 */
		CHAR_BLIMP = 'CHAR_BLIMP',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BLIMP2](https://wiki.rage.mp/images/f/f7/Char_blimp2.jpg),
		 */
		CHAR_BLIMP2 = 'CHAR_BLIMP2',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BLOCKED](https://wiki.rage.mp/images/9/97/Char_blocked.jpg),
		 */
		CHAR_BLOCKED = 'CHAR_BLOCKED',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BOATSITE](https://wiki.rage.mp/images/3/36/Char_boatsite.jpg),
		 */
		CHAR_BOATSITE = 'CHAR_BOATSITE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BOATSITE2](https://wiki.rage.mp/images/8/8c/Char_boatsite2.jpg),
		 */
		CHAR_BOATSITE2 = 'CHAR_BOATSITE2',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BROKEN_DOWN_GIRL](https://wiki.rage.mp/images/b/bd/Char_broken_down_girl.jpg),
		 */
		CHAR_BROKEN_DOWN_GIRL = 'CHAR_BROKEN_DOWN_GIRL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BRYONY](https://wiki.rage.mp/images/e/e1/Char_bryony.jpg),
		 */
		CHAR_BRYONY = 'CHAR_BRYONY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_BUGSTARS](https://wiki.rage.mp/images/0/00/Char_bugstars.jpg),
		 */
		CHAR_BUGSTARS = 'CHAR_BUGSTARS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CALL911](https://wiki.rage.mp/images/a/ac/Char_call911.jpg),
		 */
		CHAR_CALL911 = 'CHAR_CALL911',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CARSITE](https://wiki.rage.mp/images/2/21/Char_carsite.jpg),
		 */
		CHAR_CARSITE = 'CHAR_CARSITE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CARSITE2](https://wiki.rage.mp/images/b/be/Char_carsite2.jpg),
		 */
		CHAR_CARSITE2 = 'CHAR_CARSITE2',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CARSITE3](https://wiki.rage.mp/images/4/4e/Char_carsite3.jpg),
		 */
		CHAR_CARSITE3 = 'CHAR_CARSITE3',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CARSITE4](https://wiki.rage.mp/images/4/4f/Char_carsite4.jpg),
		 */
		CHAR_CARSITE4 = 'CHAR_CARSITE4',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CASINO](https://wiki.rage.mp/images/c/c6/Char_casino.jpg),
		 */
		CHAR_CASINO = 'CHAR_CASINO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CASINO_MANAGER](https://wiki.rage.mp/images/d/de/Char_casino_manager.jpg),
		 */
		CHAR_CASINO_MANAGER = 'CHAR_CASINO_MANAGER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CASTRO](https://wiki.rage.mp/images/2/28/Char_castro.jpg),
		 */
		CHAR_CASTRO = 'CHAR_CASTRO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CHAT_CALL](https://wiki.rage.mp/images/c/ca/Char_chat_call.jpg),
		 */
		CHAR_CHAT_CALL = 'CHAR_CHAT_CALL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CHEF](https://wiki.rage.mp/images/c/c4/Char_chef.jpg),
		 */
		CHAR_CHEF = 'CHAR_CHEF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CHENG](https://wiki.rage.mp/images/f/f5/Char_cheng.jpg),
		 */
		CHAR_CHENG = 'CHAR_CHENG',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CHENGSR](https://wiki.rage.mp/images/4/4c/Char_chengsr.jpg),
		 */
		CHAR_CHENGSR = 'CHAR_CHENGSR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CHOP](https://wiki.rage.mp/images/0/0f/Char_chop.jpg),
		 */
		CHAR_CHOP = 'CHAR_CHOP',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_COMIC_STORE](https://wiki.rage.mp/images/5/5d/Char_comic_store.jpg),
		 */
		CHAR_COMIC_STORE = 'CHAR_COMIC_STORE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_CRIS](https://wiki.rage.mp/images/5/54/Char_cris.jpg),
		 */
		CHAR_CRIS = 'CHAR_CRIS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DAVE](https://wiki.rage.mp/images/1/12/Char_dave.jpg),
		 */
		CHAR_DAVE = 'CHAR_DAVE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DEFAULT](https://wiki.rage.mp/images/f/f2/Char_default.jpg),
		 */
		CHAR_DEFAULT = 'CHAR_DEFAULT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DENISE](https://wiki.rage.mp/images/2/28/Char_denise.jpg),
		 */
		CHAR_DENISE = 'CHAR_DENISE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DETONATEBOMB](https://wiki.rage.mp/images/7/74/Char_detonatebomb.jpg),
		 */
		CHAR_DETONATEBOMB = 'CHAR_DETONATEBOMB',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DETONATEPHONE](https://wiki.rage.mp/images/d/d3/Char_detonatephone.jpg),
		 */
		CHAR_DETONATEPHONE = 'CHAR_DETONATEPHONE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DEVIN](https://wiki.rage.mp/images/3/32/Char_devin.jpg),
		 */
		CHAR_DEVIN = 'CHAR_DEVIN',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DIAL_A_SUB](https://wiki.rage.mp/images/4/4c/Char_dial_a_sub.jpg),
		 */
		CHAR_DIAL_A_SUB = 'CHAR_DIAL_A_SUB',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DOM](https://wiki.rage.mp/images/7/7e/Char_dom.jpg),
		 */
		CHAR_DOM = 'CHAR_DOM',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DOMESTIC_GIRL](https://wiki.rage.mp/images/2/28/Char_domestic_girl.jpg),
		 */
		CHAR_DOMESTIC_GIRL = 'CHAR_DOMESTIC_GIRL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DREYFUSS](https://wiki.rage.mp/images/d/dd/Char_dreyfuss.jpg),
		 */
		CHAR_DREYFUSS = 'CHAR_DREYFUSS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_DR_FRIEDLANDER](https://wiki.rage.mp/images/f/fa/Char_dr_friedlander.jpg),
		 */
		CHAR_DR_FRIEDLANDER = 'CHAR_DR_FRIEDLANDER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ENGLISH_DAVE](https://wiki.rage.mp/images/e/e9/Char_english_dave.jpg),
		 */
		CHAR_ENGLISH_DAVE = 'CHAR_ENGLISH_DAVE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_EPSILON](https://wiki.rage.mp/images/e/ed/Char_epsilon.jpg),
		 */
		CHAR_EPSILON = 'CHAR_EPSILON',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ESTATE_AGENT](https://wiki.rage.mp/images/9/9b/Char_estate_agent.jpg),
		 */
		CHAR_ESTATE_AGENT = 'CHAR_ESTATE_AGENT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_FACEBOOK](https://wiki.rage.mp/images/2/2d/Char_facebook.jpg),
		 */
		CHAR_FACEBOOK = 'CHAR_FACEBOOK',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_FILMNOIR](https://wiki.rage.mp/images/3/31/Char_filmnoir.jpg),
		 */
		CHAR_FILMNOIR = 'CHAR_FILMNOIR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_FLOYD](https://wiki.rage.mp/images/2/2e/Char_floyd.jpg),
		 */
		CHAR_FLOYD = 'CHAR_FLOYD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_FRANKLIN](https://wiki.rage.mp/images/e/e5/Char_franklin.jpg),
		 */
		CHAR_FRANKLIN = 'CHAR_FRANKLIN',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_FRANK_TREV_CONF](https://wiki.rage.mp/images/f/f0/Char_frank_trev_conf.jpg),
		 */
		CHAR_FRANK_TREV_CONF = 'CHAR_FRANK_TREV_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_GANGAPP](https://wiki.rage.mp/images/f/f9/Char_gangapp.jpg),
		 */
		CHAR_GANGAPP = 'CHAR_GANGAPP',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_GAYMILITARY](https://wiki.rage.mp/images/9/9d/Char_gaymilitary.jpg),
		 */
		CHAR_GAYMILITARY = 'CHAR_GAYMILITARY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_HAO](https://wiki.rage.mp/images/1/16/Char_hao.jpg),
		 */
		CHAR_HAO = 'CHAR_HAO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_HITCHER_GIRL](https://wiki.rage.mp/images/2/2a/Char_hitcher_girl.jpg),
		 */
		CHAR_HITCHER_GIRL = 'CHAR_HITCHER_GIRL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_HUMANDEFAULT](https://wiki.rage.mp/images/2/2b/Char_humandefault.jpg),
		 */
		CHAR_HUMANDEFAULT = 'CHAR_HUMANDEFAULT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_HUNTER](https://wiki.rage.mp/images/5/51/Char_hunter.jpg),
		 */
		CHAR_HUNTER = 'CHAR_HUNTER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_JIMMY](https://wiki.rage.mp/images/5/57/Char_jimmy.jpg),
		 */
		CHAR_JIMMY = 'CHAR_JIMMY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_JIMMY_BOSTON](https://wiki.rage.mp/images/f/f4/Char_jimmy_boston.jpg),
		 */
		CHAR_JIMMY_BOSTON = 'CHAR_JIMMY_BOSTON',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_JOE](https://wiki.rage.mp/images/0/02/Char_joe.jpg),
		 */
		CHAR_JOE = 'CHAR_JOE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_JOSEF](https://wiki.rage.mp/images/3/3d/Char_josef.jpg),
		 */
		CHAR_JOSEF = 'CHAR_JOSEF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_JOSH](https://wiki.rage.mp/images/5/56/Char_josh.jpg),
		 */
		CHAR_JOSH = 'CHAR_JOSH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LAMAR](https://wiki.rage.mp/images/f/fe/Char_lamar.jpg),
		 */
		CHAR_LAMAR = 'CHAR_LAMAR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LAZLOW](https://wiki.rage.mp/images/1/19/Char_lazlow.jpg),
		 */
		CHAR_LAZLOW = 'CHAR_LAZLOW',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LAZLOW2](https://wiki.rage.mp/images/6/62/Char_lazlow2.jpg),
		 */
		CHAR_LAZLOW2 = 'CHAR_LAZLOW2',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LESTER](https://wiki.rage.mp/images/5/54/Char_lester.jpg),
		 */
		CHAR_LESTER = 'CHAR_LESTER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LESTER_DEATHWISH](https://wiki.rage.mp/images/5/52/Char_lester_deathwish.jpg),
		 */
		CHAR_LESTER_DEATHWISH = 'CHAR_LESTER_DEATHWISH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LEST_FRANK_CONF](https://wiki.rage.mp/images/c/cb/Char_lest_frank_conf.jpg),
		 */
		CHAR_LEST_FRANK_CONF = 'CHAR_LEST_FRANK_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LEST_MIKE_CONF](https://wiki.rage.mp/images/1/1f/Char_lest_mike_conf.jpg),
		 */
		CHAR_LEST_MIKE_CONF = 'CHAR_LEST_MIKE_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LIFEINVADER](https://wiki.rage.mp/images/5/5e/Char_lifeinvader.jpg),
		 */
		CHAR_LIFEINVADER = 'CHAR_LIFEINVADER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LJT](https://wiki.rage.mp/images/5/5f/Char_ljt.jpg),
		 */
		CHAR_LJT = 'CHAR_LJT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LS_CUSTOMS](https://wiki.rage.mp/images/7/7d/Char_ls_customs.jpg),
		 */
		CHAR_LS_CUSTOMS = 'CHAR_LS_CUSTOMS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_LS_TOURIST_BOARD](https://wiki.rage.mp/images/d/d4/Char_ls_tourist_board.jpg),
		 */
		CHAR_LS_TOURIST_BOARD = 'CHAR_LS_TOURIST_BOARD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MALC](https://wiki.rage.mp/images/6/67/Char_malc.jpg),
		 */
		CHAR_MALC = 'CHAR_MALC',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MANUEL](https://wiki.rage.mp/images/4/43/Char_manuel.jpg),
		 */
		CHAR_MANUEL = 'CHAR_MANUEL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MARNIE](https://wiki.rage.mp/images/f/f3/Char_marnie.jpg),
		 */
		CHAR_MARNIE = 'CHAR_MARNIE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MARTIN](https://wiki.rage.mp/images/0/0c/Char_martin.jpg),
		 */
		CHAR_MARTIN = 'CHAR_MARTIN',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MARY_ANN](https://wiki.rage.mp/images/1/1b/Char_mary_ann.jpg),
		 */
		CHAR_MARY_ANN = 'CHAR_MARY_ANN',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MAUDE](https://wiki.rage.mp/images/6/6b/Char_maude.jpg),
		 */
		CHAR_MAUDE = 'CHAR_MAUDE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MECHANIC](https://wiki.rage.mp/images/3/30/Char_mechanic.jpg),
		 */
		CHAR_MECHANIC = 'CHAR_MECHANIC',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MICHAEL](https://wiki.rage.mp/images/c/c1/Char_michael.jpg),
		 */
		CHAR_MICHAEL = 'CHAR_MICHAEL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MIKE_FRANK_CONF](https://wiki.rage.mp/images/5/5f/Char_mike_frank_conf.jpg),
		 */
		CHAR_MIKE_FRANK_CONF = 'CHAR_MIKE_FRANK_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MIKE_TREV_CONF](https://wiki.rage.mp/images/d/db/Char_mike_trev_conf.jpg),
		 */
		CHAR_MIKE_TREV_CONF = 'CHAR_MIKE_TREV_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MILSITE](https://wiki.rage.mp/images/0/07/Char_milsite.jpg),
		 */
		CHAR_MILSITE = 'CHAR_MILSITE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MINOTAUR](https://wiki.rage.mp/images/6/61/Char_minotaur.jpg),
		 */
		CHAR_MINOTAUR = 'CHAR_MINOTAUR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MOLLY](https://wiki.rage.mp/images/1/19/Char_molly.jpg),
		 */
		CHAR_MOLLY = 'CHAR_MOLLY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_ARMY_CONTACT](https://wiki.rage.mp/images/d/df/Char_mp_army_contact.jpg),
		 */
		CHAR_MP_ARMY_CONTACT = 'CHAR_MP_ARMY_CONTACT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_BIKER_BOSS](https://wiki.rage.mp/images/8/89/Char_mp_biker_boss.jpg),
		 */
		CHAR_MP_BIKER_BOSS = 'CHAR_MP_BIKER_BOSS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_BIKER_MECHANIC](https://wiki.rage.mp/images/8/87/Char_mp_biker_mechanic.jpg),
		 */
		CHAR_MP_BIKER_MECHANIC = 'CHAR_MP_BIKER_MECHANIC',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_BRUCIE](https://wiki.rage.mp/images/b/bb/Char_mp_brucie.jpg),
		 */
		CHAR_MP_BRUCIE = 'CHAR_MP_BRUCIE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_DETONATEPHONE](https://wiki.rage.mp/images/9/9f/Char_mp_detonatephone.jpg),
		 */
		CHAR_MP_DETONATEPHONE = 'CHAR_MP_DETONATEPHONE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_FAM_BOSS](https://wiki.rage.mp/images/5/55/Char_mp_fam_boss.jpg),
		 */
		CHAR_MP_FAM_BOSS = 'CHAR_MP_FAM_BOSS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_FIB_CONTACT](https://wiki.rage.mp/images/3/3e/Char_mp_fib_contact.jpg),
		 */
		CHAR_MP_FIB_CONTACT = 'CHAR_MP_FIB_CONTACT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_FM_CONTACT](https://wiki.rage.mp/images/0/02/Char_mp_fm_contact.jpg),
		 */
		CHAR_MP_FM_CONTACT = 'CHAR_MP_FM_CONTACT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_GERALD](https://wiki.rage.mp/images/0/05/Char_mp_gerald.jpg),
		 */
		CHAR_MP_GERALD = 'CHAR_MP_GERALD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_JULIO](https://wiki.rage.mp/images/b/b7/Char_mp_julio.jpg),
		 */
		CHAR_MP_JULIO = 'CHAR_MP_JULIO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_MECHANIC](https://wiki.rage.mp/images/8/8f/Char_mp_mechanic.jpg),
		 */
		CHAR_MP_MECHANIC = 'CHAR_MP_MECHANIC',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_MERRYWEATHER](https://wiki.rage.mp/images/6/60/Char_mp_merryweather.jpg),
		 */
		CHAR_MP_MERRYWEATHER = 'CHAR_MP_MERRYWEATHER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_MEX_BOSS](https://wiki.rage.mp/images/a/ae/Char_mp_mex_boss.jpg),
		 */
		CHAR_MP_MEX_BOSS = 'CHAR_MP_MEX_BOSS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_MEX_DOCKS](https://wiki.rage.mp/images/2/2c/Char_mp_mex_docks.jpg),
		 */
		CHAR_MP_MEX_DOCKS = 'CHAR_MP_MEX_DOCKS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_MEX_LT](https://wiki.rage.mp/images/7/75/Char_mp_mex_lt.jpg),
		 */
		CHAR_MP_MEX_LT = 'CHAR_MP_MEX_LT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_MORS_MUTUAL](https://wiki.rage.mp/images/5/56/Char_mp_mors_mutual.jpg),
		 */
		CHAR_MP_MORS_MUTUAL = 'CHAR_MP_MORS_MUTUAL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_PROF_BOSS](https://wiki.rage.mp/images/9/98/Char_mp_prof_boss.jpg),
		 */
		CHAR_MP_PROF_BOSS = 'CHAR_MP_PROF_BOSS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_RAY_LAVOY](https://wiki.rage.mp/images/c/c0/Char_mp_ray_lavoy.jpg),
		 */
		CHAR_MP_RAY_LAVOY = 'CHAR_MP_RAY_LAVOY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_ROBERTO](https://wiki.rage.mp/images/1/1d/Char_mp_roberto.jpg),
		 */
		CHAR_MP_ROBERTO = 'CHAR_MP_ROBERTO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_SNITCH](https://wiki.rage.mp/images/c/c6/Char_mp_snitch.jpg),
		 */
		CHAR_MP_SNITCH = 'CHAR_MP_SNITCH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_STRETCH](https://wiki.rage.mp/images/b/ba/Char_mp_stretch.jpg),
		 */
		CHAR_MP_STRETCH = 'CHAR_MP_STRETCH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MP_STRIPCLUB_PR](https://wiki.rage.mp/images/0/08/Char_mp_stripclub_pr.jpg),
		 */
		CHAR_MP_STRIPCLUB_PR = 'CHAR_MP_STRIPCLUB_PR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MRS_THORNHILL](https://wiki.rage.mp/images/d/d7/Char_mrs_thornhill.jpg),
		 */
		CHAR_MRS_THORNHILL = 'CHAR_MRS_THORNHILL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_MULTIPLAYER](https://wiki.rage.mp/images/0/02/Char_multiplayer.jpg),
		 */
		CHAR_MULTIPLAYER = 'CHAR_MULTIPLAYER',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_NIGEL](https://wiki.rage.mp/images/e/ed/Char_nigel.jpg),
		 */
		CHAR_NIGEL = 'CHAR_NIGEL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_OMEGA](https://wiki.rage.mp/images/0/02/Char_omega.jpg),
		 */
		CHAR_OMEGA = 'CHAR_OMEGA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ONEIL](https://wiki.rage.mp/images/c/cd/Char_oneil.jpg),
		 */
		CHAR_ONEIL = 'CHAR_ONEIL',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_ORTEGA](https://wiki.rage.mp/images/c/c4/Char_ortega.jpg),
		 */
		CHAR_ORTEGA = 'CHAR_ORTEGA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_OSCAR](https://wiki.rage.mp/images/1/13/Char_oscar.jpg),
		 */
		CHAR_OSCAR = 'CHAR_OSCAR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PAIGE](https://wiki.rage.mp/images/9/9a/Char_paige.jpg),
		 */
		CHAR_PAIGE = 'CHAR_PAIGE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PATRICIA](https://wiki.rage.mp/images/6/65/Char_patricia.jpg),
		 */
		CHAR_PATRICIA = 'CHAR_PATRICIA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PA_FEMALE](https://wiki.rage.mp/images/6/68/Char_pa_female.jpg),
		 */
		CHAR_PA_FEMALE = 'CHAR_PA_FEMALE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PA_MALE](https://wiki.rage.mp/images/8/88/Char_pa_male.jpg),
		 */
		CHAR_PA_MALE = 'CHAR_PA_MALE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PEGASUS_DELIVERY](https://wiki.rage.mp/images/6/6a/Char_pegasus_delivery.jpg),
		 */
		CHAR_PEGASUS_DELIVERY = 'CHAR_PEGASUS_DELIVERY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PLANESITE](https://wiki.rage.mp/images/0/06/Char_planesite.jpg),
		 */
		CHAR_PLANESITE = 'CHAR_PLANESITE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_ARMS_TRAFFICKING](https://wiki.rage.mp/images/8/8a/Char_property_arms_trafficking.jpg),
		 */
		CHAR_PROPERTY_ARMS_TRAFFICKING = 'CHAR_PROPERTY_ARMS_TRAFFICKING',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_AIRPORT](https://wiki.rage.mp/images/2/2e/Char_property_bar_airport.jpg),
		 */
		CHAR_PROPERTY_BAR_AIRPORT = 'CHAR_PROPERTY_BAR_AIRPORT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_BAYVIEW](https://wiki.rage.mp/images/2/29/Char_property_bar_bayview.jpg),
		 */
		CHAR_PROPERTY_BAR_BAYVIEW = 'CHAR_PROPERTY_BAR_BAYVIEW',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_CAFE_ROJO](https://wiki.rage.mp/images/2/2f/Char_property_bar_cafe_rojo.jpg),
		 */
		CHAR_PROPERTY_BAR_CAFE_ROJO = 'CHAR_PROPERTY_BAR_CAFE_ROJO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_COCKOTOOS](https://wiki.rage.mp/images/5/5b/Char_property_bar_cockotoos.jpg),
		 */
		CHAR_PROPERTY_BAR_COCKOTOOS = 'CHAR_PROPERTY_BAR_COCKOTOOS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_ECLIPSE](https://wiki.rage.mp/images/2/21/Char_property_bar_eclipse.jpg),
		 */
		CHAR_PROPERTY_BAR_ECLIPSE = 'CHAR_PROPERTY_BAR_ECLIPSE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_FES](https://wiki.rage.mp/images/f/fe/Char_property_bar_fes.jpg),
		 */
		CHAR_PROPERTY_BAR_FES = 'CHAR_PROPERTY_BAR_FES',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_HEN_HOUSE](https://wiki.rage.mp/images/b/bc/Char_property_bar_hen_house.jpg),
		 */
		CHAR_PROPERTY_BAR_HEN_HOUSE = 'CHAR_PROPERTY_BAR_HEN_HOUSE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_HI_MEN](https://wiki.rage.mp/images/c/c4/Char_property_bar_hi_men.jpg),
		 */
		CHAR_PROPERTY_BAR_HI_MEN = 'CHAR_PROPERTY_BAR_HI_MEN',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_HOOKIES](https://wiki.rage.mp/images/3/38/Char_property_bar_hookies.jpg),
		 */
		CHAR_PROPERTY_BAR_HOOKIES = 'CHAR_PROPERTY_BAR_HOOKIES',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_IRISH](https://wiki.rage.mp/images/4/40/Char_property_bar_irish.jpg),
		 */
		CHAR_PROPERTY_BAR_IRISH = 'CHAR_PROPERTY_BAR_IRISH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_LES_BIANCO](https://wiki.rage.mp/images/9/90/Char_property_bar_les_bianco.jpg),
		 */
		CHAR_PROPERTY_BAR_LES_BIANCO = 'CHAR_PROPERTY_BAR_LES_BIANCO',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_MIRROR_PARK](https://wiki.rage.mp/images/e/ec/Char_property_bar_mirror_park.jpg),
		 */
		CHAR_PROPERTY_BAR_MIRROR_PARK = 'CHAR_PROPERTY_BAR_MIRROR_PARK',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_PITCHERS](https://wiki.rage.mp/images/e/e7/Char_property_bar_pitchers.jpg),
		 */
		CHAR_PROPERTY_BAR_PITCHERS = 'CHAR_PROPERTY_BAR_PITCHERS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_SINGLETONS](https://wiki.rage.mp/images/f/f8/Char_property_bar_singletons.jpg),
		 */
		CHAR_PROPERTY_BAR_SINGLETONS = 'CHAR_PROPERTY_BAR_SINGLETONS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_TEQUILALA](https://wiki.rage.mp/images/d/df/Char_property_bar_tequilala.jpg),
		 */
		CHAR_PROPERTY_BAR_TEQUILALA = 'CHAR_PROPERTY_BAR_TEQUILALA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_BAR_UNBRANDED](https://wiki.rage.mp/images/e/eb/Char_property_bar_unbranded.jpg),
		 */
		CHAR_PROPERTY_BAR_UNBRANDED = 'CHAR_PROPERTY_BAR_UNBRANDED',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_CAR_MOD_SHOP](https://wiki.rage.mp/images/f/f8/Char_property_car_mod_shop.jpg),
		 */
		CHAR_PROPERTY_CAR_MOD_SHOP = 'CHAR_PROPERTY_CAR_MOD_SHOP',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_CAR_SCRAP_YARD](https://wiki.rage.mp/images/7/79/Char_property_car_scrap_yard.jpg),
		 */
		CHAR_PROPERTY_CAR_SCRAP_YARD = 'CHAR_PROPERTY_CAR_SCRAP_YARD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_CINEMA_DOWNTOWN](https://wiki.rage.mp/images/e/e5/Char_property_cinema_downtown.jpg),
		 */
		CHAR_PROPERTY_CINEMA_DOWNTOWN = 'CHAR_PROPERTY_CINEMA_DOWNTOWN',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_CINEMA_MORNINGWOOD](https://wiki.rage.mp/images/8/84/Char_property_cinema_morningwood.jpg),
		 */
		CHAR_PROPERTY_CINEMA_MORNINGWOOD = 'CHAR_PROPERTY_CINEMA_MORNINGWOOD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_CINEMA_VINEWOOD](https://wiki.rage.mp/images/2/22/Char_property_cinema_vinewood.jpg),
		 */
		CHAR_PROPERTY_CINEMA_VINEWOOD = 'CHAR_PROPERTY_CINEMA_VINEWOOD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_GOLF_CLUB](https://wiki.rage.mp/images/e/e3/Char_property_golf_club.jpg),
		 */
		CHAR_PROPERTY_GOLF_CLUB = 'CHAR_PROPERTY_GOLF_CLUB',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_PLANE_SCRAP_YARD](https://wiki.rage.mp/images/1/1f/Char_property_plane_scrap_yard.jpg),
		 */
		CHAR_PROPERTY_PLANE_SCRAP_YARD = 'CHAR_PROPERTY_PLANE_SCRAP_YARD',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_SONAR_COLLECTIONS](https://wiki.rage.mp/images/f/fd/Char_property_sonar_collections.jpg),
		 */
		CHAR_PROPERTY_SONAR_COLLECTIONS = 'CHAR_PROPERTY_SONAR_COLLECTIONS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_TAXI_LOT](https://wiki.rage.mp/images/9/9b/Char_property_taxi_lot.jpg),
		 */
		CHAR_PROPERTY_TAXI_LOT = 'CHAR_PROPERTY_TAXI_LOT',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_TOWING_IMPOUND](https://wiki.rage.mp/images/5/5a/Char_property_towing_impound.jpg),
		 */
		CHAR_PROPERTY_TOWING_IMPOUND = 'CHAR_PROPERTY_TOWING_IMPOUND',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_PROPERTY_WEED_SHOP](https://wiki.rage.mp/images/c/c4/Char_property_weed_shop.jpg),
		 */
		CHAR_PROPERTY_WEED_SHOP = 'CHAR_PROPERTY_WEED_SHOP',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_RICKIE](https://wiki.rage.mp/images/d/d7/Char_rickie.jpg),
		 */
		CHAR_RICKIE = 'CHAR_RICKIE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_RON](https://wiki.rage.mp/images/1/1b/Char_ron.jpg),
		 */
		CHAR_RON = 'CHAR_RON',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_SAEEDA](https://wiki.rage.mp/images/4/42/Char_saeeda.jpg),
		 */
		CHAR_SAEEDA = 'CHAR_SAEEDA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_SASQUATCH](https://wiki.rage.mp/images/5/58/Char_sasquatch.jpg),
		 */
		CHAR_SASQUATCH = 'CHAR_SASQUATCH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_SIMEON](https://wiki.rage.mp/images/f/ff/Char_simeon.jpg),
		 */
		CHAR_SIMEON = 'CHAR_SIMEON',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_SOCIAL_CLUB](https://wiki.rage.mp/images/4/42/Char_social_club.jpg),
		 */
		CHAR_SOCIAL_CLUB = 'CHAR_SOCIAL_CLUB',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_SOLOMON](https://wiki.rage.mp/images/c/c1/Char_solomon.jpg),
		 */
		CHAR_SOLOMON = 'CHAR_SOLOMON',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STEVE](https://wiki.rage.mp/images/2/22/Char_steve.jpg),
		 */
		CHAR_STEVE = 'CHAR_STEVE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STEVE_MIKE_CONF](https://wiki.rage.mp/images/d/db/Char_steve_mike_conf.jpg),
		 */
		CHAR_STEVE_MIKE_CONF = 'CHAR_STEVE_MIKE_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STEVE_TREV_CONF](https://wiki.rage.mp/images/1/1e/Char_steve_trev_conf.jpg),
		 */
		CHAR_STEVE_TREV_CONF = 'CHAR_STEVE_TREV_CONF',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRETCH](https://wiki.rage.mp/images/7/7b/Char_stretch.jpg),
		 */
		CHAR_STRETCH = 'CHAR_STRETCH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_CHASTITY](https://wiki.rage.mp/images/8/89/Char_stripper_chastity.jpg),
		 */
		CHAR_STRIPPER_CHASTITY = 'CHAR_STRIPPER_CHASTITY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_CHEETAH](https://wiki.rage.mp/images/a/a4/Char_stripper_cheetah.jpg),
		 */
		CHAR_STRIPPER_CHEETAH = 'CHAR_STRIPPER_CHEETAH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_FUFU](https://wiki.rage.mp/images/5/50/Char_stripper_fufu.jpg),
		 */
		CHAR_STRIPPER_FUFU = 'CHAR_STRIPPER_FUFU',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_INFERNUS](https://wiki.rage.mp/images/d/d9/Char_stripper_infernus.jpg),
		 */
		CHAR_STRIPPER_INFERNUS = 'CHAR_STRIPPER_INFERNUS',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_JULIET](https://wiki.rage.mp/images/7/7a/Char_stripper_juliet.jpg),
		 */
		CHAR_STRIPPER_JULIET = 'CHAR_STRIPPER_JULIET',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_NIKKI](https://wiki.rage.mp/images/2/28/Char_stripper_nikki.jpg),
		 */
		CHAR_STRIPPER_NIKKI = 'CHAR_STRIPPER_NIKKI',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_PEACH](https://wiki.rage.mp/images/6/62/Char_stripper_peach.jpg),
		 */
		CHAR_STRIPPER_PEACH = 'CHAR_STRIPPER_PEACH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_STRIPPER_SAPPHIRE](https://wiki.rage.mp/images/3/31/Char_stripper_sapphire.jpg),
		 */
		CHAR_STRIPPER_SAPPHIRE = 'CHAR_STRIPPER_SAPPHIRE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TANISHA](https://wiki.rage.mp/images/5/52/Char_tanisha.jpg),
		 */
		CHAR_TANISHA = 'CHAR_TANISHA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TAOTRANSLATOR](https://wiki.rage.mp/images/9/97/Char_taotranslator.jpg),
		 */
		CHAR_TAOTRANSLATOR = 'CHAR_TAOTRANSLATOR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TAXI](https://wiki.rage.mp/images/4/46/Char_taxi.jpg),
		 */
		CHAR_TAXI = 'CHAR_TAXI',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TAXI_LIZ](https://wiki.rage.mp/images/c/c7/Char_taxi_liz.jpg),
		 */
		CHAR_TAXI_LIZ = 'CHAR_TAXI_LIZ',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TENNIS_COACH](https://wiki.rage.mp/images/3/37/Char_tennis_coach.jpg),
		 */
		CHAR_TENNIS_COACH = 'CHAR_TENNIS_COACH',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TOM](https://wiki.rage.mp/images/7/77/Char_tom.jpg),
		 */
		CHAR_TOM = 'CHAR_TOM',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TONY_PRINCE](https://wiki.rage.mp/images/0/06/Char_tony_prince.jpg),
		 */
		CHAR_TONY_PRINCE = 'CHAR_TONY_PRINCE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TOW_TONYA](https://wiki.rage.mp/images/c/c9/Char_tow_tonya.jpg),
		 */
		CHAR_TOW_TONYA = 'CHAR_TOW_TONYA',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TRACEY](https://wiki.rage.mp/images/0/06/Char_tracey.jpg),
		 */
		CHAR_TRACEY = 'CHAR_TRACEY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TREVOR](https://wiki.rage.mp/images/1/17/Char_trevor.jpg),
		 */
		CHAR_TREVOR = 'CHAR_TREVOR',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_TW](https://wiki.rage.mp/images/b/b6/Char_tw.jpg),
		 */
		CHAR_TW = 'CHAR_TW',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_WADE](https://wiki.rage.mp/images/e/e4/Char_wade.jpg),
		 */
		CHAR_WADE = 'CHAR_WADE',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_WENDY](https://wiki.rage.mp/images/6/64/Char_wendy.jpg),
		 */
		CHAR_WENDY = 'CHAR_WENDY',
		/**
		 * Works without requesting: **Yes**
		 *
		 * ![CHAR_YOUTUBE](https://wiki.rage.mp/images/6/6a/Char_youtube.jpg),
		 */
		CHAR_YOUTUBE = 'CHAR_YOUTUBE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ACULT](https://wiki.rage.mp/images/4/4e/Dia_acult.jpg),
		 */
		DIA_ACULT = 'DIA_ACULT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_AGENT14](https://wiki.rage.mp/images/8/84/Dia_agent14.jpg),
		 */
		DIA_AGENT14 = 'DIA_AGENT14',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_AH1_JANITOR](https://wiki.rage.mp/images/b/be/Dia_ah1_janitor.jpg),
		 */
		DIA_AH1_JANITOR = 'DIA_AH1_JANITOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_AH2_ARCHITECT](https://wiki.rage.mp/images/e/e5/Dia_ah2_architect.jpg),
		 */
		DIA_AH2_ARCHITECT = 'DIA_AH2_ARCHITECT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ALAN](https://wiki.rage.mp/images/1/12/Dia_alan.jpg),
		 */
		DIA_ALAN = 'DIA_ALAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ANTON](https://wiki.rage.mp/images/c/c3/Dia_anton.jpg),
		 */
		DIA_ANTON = 'DIA_ANTON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ARMY](https://wiki.rage.mp/images/d/d0/Dia_army.jpg),
		 */
		DIA_ARMY = 'DIA_ARMY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_AVERY](https://wiki.rage.mp/images/8/8c/Dia_avery.jpg),
		 */
		DIA_AVERY = 'DIA_AVERY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_AVI](https://wiki.rage.mp/images/d/d4/Dia_avi.jpg),
		 */
		DIA_AVI = 'DIA_AVI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_AVON](https://wiki.rage.mp/images/9/97/Dia_avon.jpg),
		 */
		DIA_AVON = 'DIA_AVON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BANKMAN](https://wiki.rage.mp/images/5/5a/Dia_bankman.jpg),
		 */
		DIA_BANKMAN = 'DIA_BANKMAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BANKMANAGER](https://wiki.rage.mp/images/d/d5/Dia_bankmanager.jpg),
		 */
		DIA_BANKMANAGER = 'DIA_BANKMANAGER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BAYGOR](https://wiki.rage.mp/images/5/5d/Dia_baygor.jpg),
		 */
		DIA_BAYGOR = 'DIA_BAYGOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BESTMEN](https://wiki.rage.mp/images/2/27/Dia_bestmen.jpg),
		 */
		DIA_BESTMEN = 'DIA_BESTMEN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BIKERENTAL](https://wiki.rage.mp/images/4/41/Dia_bikerental.jpg),
		 */
		DIA_BIKERENTAL = 'DIA_BIKERENTAL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BOGDAN](https://wiki.rage.mp/images/5/56/Dia_bogdan.jpg),
		 */
		DIA_BOGDAN = 'DIA_BOGDAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_BRAD](https://wiki.rage.mp/images/d/df/Dia_brad.jpg),
		 */
		DIA_BRAD = 'DIA_BRAD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CAMCREW](https://wiki.rage.mp/images/5/56/Dia_camcrew.jpg),
		 */
		DIA_CAMCREW = 'DIA_CAMCREW',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CAR3_ACTRESS](https://wiki.rage.mp/images/f/f5/Dia_car3_actress.jpg),
		 */
		DIA_CAR3_ACTRESS = 'DIA_CAR3_ACTRESS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CAR3_DIRECTOR](https://wiki.rage.mp/images/c/c0/Dia_car3_director.jpg),
		 */
		DIA_CAR3_DIRECTOR = 'DIA_CAR3_DIRECTOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CAR3_SAMUEL](https://wiki.rage.mp/images/c/c4/Dia_car3_samuel.jpg),
		 */
		DIA_CAR3_SAMUEL = 'DIA_CAR3_SAMUEL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CASEY](https://wiki.rage.mp/images/5/5d/Dia_casey.jpg),
		 */
		DIA_CASEY = 'DIA_CASEY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CLIFFORD](https://wiki.rage.mp/images/7/7c/Dia_clifford.jpg),
		 */
		DIA_CLIFFORD = 'DIA_CLIFFORD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_COMJANE](https://wiki.rage.mp/images/9/96/Dia_comjane.jpg),
		 */
		DIA_COMJANE = 'DIA_COMJANE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CONSTRUCTION](https://wiki.rage.mp/images/b/b4/Dia_construction.jpg),
		 */
		DIA_CONSTRUCTION = 'DIA_CONSTRUCTION',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_CUSTOMER](https://wiki.rage.mp/images/4/4b/Dia_customer.jpg),
		 */
		DIA_CUSTOMER = 'DIA_CUSTOMER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_DEALER](https://wiki.rage.mp/images/f/f1/Dia_dealer.jpg),
		 */
		DIA_DEALER = 'DIA_DEALER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_DRIVER](https://wiki.rage.mp/images/9/91/Dia_driver.jpg),
		 */
		DIA_DRIVER = 'DIA_DRIVER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_EXT1_RETRIEVER](https://wiki.rage.mp/images/b/b9/Dia_ext1_retriever.jpg),
		 */
		DIA_EXT1_RETRIEVER = 'DIA_EXT1_RETRIEVER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_FIB2_MRK](https://wiki.rage.mp/images/9/9f/Dia_fib2_mrk.jpg),
		 */
		DIA_FIB2_MRK = 'DIA_FIB2_MRK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_FINGURU](https://wiki.rage.mp/images/a/ae/Dia_finguru.jpg),
		 */
		DIA_FINGURU = 'DIA_FINGURU',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GARDENER](https://wiki.rage.mp/images/6/65/Dia_gardener.jpg),
		 */
		DIA_GARDENER = 'DIA_GARDENER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GARDENING](https://wiki.rage.mp/images/5/5d/Dia_gardening.jpg),
		 */
		DIA_GARDENING = 'DIA_GARDENING',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GEORGINA_CHENG](https://wiki.rage.mp/images/f/ff/Dia_georgina_cheng.jpg),
		 */
		DIA_GEORGINA_CHENG = 'DIA_GEORGINA_CHENG',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GOON](https://wiki.rage.mp/images/9/9d/Dia_goon.jpg),
		 */
		DIA_GOON = 'DIA_GOON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GRIFF](https://wiki.rage.mp/images/1/1a/Dia_griff.jpg),
		 */
		DIA_GRIFF = 'DIA_GRIFF',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GROOM](https://wiki.rage.mp/images/2/2d/Dia_groom.jpg),
		 */
		DIA_GROOM = 'DIA_GROOM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_GUIDO](https://wiki.rage.mp/images/7/76/Dia_guido.jpg),
		 */
		DIA_GUIDO = 'DIA_GUIDO',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HEIAGENT1](https://wiki.rage.mp/images/3/37/Dia_heiagent1.jpg),
		 */
		DIA_HEIAGENT1 = 'DIA_HEIAGENT1',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HEIBUSINESS](https://wiki.rage.mp/images/2/2a/Dia_heibusiness.jpg),
		 */
		DIA_HEIBUSINESS = 'DIA_HEIBUSINESS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HEIJETSKI](https://wiki.rage.mp/images/b/b0/Dia_heijetski.jpg),
		 */
		DIA_HEIJETSKI = 'DIA_HEIJETSKI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HILLBILLY](https://wiki.rage.mp/images/3/3f/Dia_hillbilly.jpg),
		 */
		DIA_HILLBILLY = 'DIA_HILLBILLY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HOOKER](https://wiki.rage.mp/images/e/e2/Dia_hooker.jpg),
		 */
		DIA_HOOKER = 'DIA_HOOKER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HOSTAGE](https://wiki.rage.mp/images/b/bb/Dia_hostage.jpg),
		 */
		DIA_HOSTAGE = 'DIA_HOSTAGE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_HUANG](https://wiki.rage.mp/images/b/bb/Dia_huang.jpg),
		 */
		DIA_HUANG = 'DIA_HUANG',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_IMPORAGE](https://wiki.rage.mp/images/5/5d/Dia_imporage.jpg),
		 */
		DIA_IMPORAGE = 'DIA_IMPORAGE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_INFORMANT](https://wiki.rage.mp/images/b/b9/Dia_informant.jpg),
		 */
		DIA_INFORMANT = 'DIA_INFORMANT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_JANET](https://wiki.rage.mp/images/f/f9/Dia_janet.jpg),
		 */
		DIA_JANET = 'DIA_JANET',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_JEROME](https://wiki.rage.mp/images/7/74/Dia_jerome.jpg),
		 */
		DIA_JEROME = 'DIA_JEROME',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_JESUS](https://wiki.rage.mp/images/a/a7/Dia_jesus.jpg),
		 */
		DIA_JESUS = 'DIA_JESUS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_JETPILOT](https://wiki.rage.mp/images/1/16/Dia_jetpilot.jpg),
		 */
		DIA_JETPILOT = 'DIA_JETPILOT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_JOCK](https://wiki.rage.mp/images/6/61/Dia_jock.jpg),
		 */
		DIA_JOCK = 'DIA_JOCK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_KAREN](https://wiki.rage.mp/images/0/02/Dia_karen.jpg),
		 */
		DIA_KAREN = 'DIA_KAREN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_KENNETH](https://wiki.rage.mp/images/7/74/Dia_kenneth.jpg),
		 */
		DIA_KENNETH = 'DIA_KENNETH',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_LAMAR](https://wiki.rage.mp/images/3/31/Dia_lamar.jpg),
		 */
		DIA_LAMAR = 'DIA_LAMAR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_LENNY](https://wiki.rage.mp/images/e/ec/Dia_lenny.jpg),
		 */
		DIA_LENNY = 'DIA_LENNY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_LOST](https://wiki.rage.mp/images/6/62/Dia_lost.jpg),
		 */
		DIA_LOST = 'DIA_LOST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_LOVEFIST](https://wiki.rage.mp/images/4/45/Dia_lovefist.jpg),
		 */
		DIA_LOVEFIST = 'DIA_LOVEFIST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MADISON](https://wiki.rage.mp/images/a/a9/Dia_madison.jpg),
		 */
		DIA_MADISON = 'DIA_MADISON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MAID](https://wiki.rage.mp/images/a/aa/Dia_maid.jpg),
		 */
		DIA_MAID = 'DIA_MAID',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MANI](https://wiki.rage.mp/images/8/85/Dia_mani.jpg),
		 */
		DIA_MANI = 'DIA_MANI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MARKFOST](https://wiki.rage.mp/images/3/3b/Dia_markfost.jpg),
		 */
		DIA_MARKFOST = 'DIA_MARKFOST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MAXIM](https://wiki.rage.mp/images/d/d6/Dia_maxim.jpg),
		 */
		DIA_MAXIM = 'DIA_MAXIM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MAXSEC](https://wiki.rage.mp/images/9/90/Dia_maxsec.jpg),
		 */
		DIA_MAXSEC = 'DIA_MAXSEC',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MELVIN](https://wiki.rage.mp/images/7/71/Dia_melvin.jpg),
		 */
		DIA_MELVIN = 'DIA_MELVIN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MET1_STALKER](https://wiki.rage.mp/images/d/d1/Dia_met1_stalker.jpg),
		 */
		DIA_MET1_STALKER = 'DIA_MET1_STALKER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MIC](https://wiki.rage.mp/images/9/9a/Dia_mic.jpg),
		 */
		DIA_MIC = 'DIA_MIC',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MIGRANT](https://wiki.rage.mp/images/2/24/Dia_migrant.jpg),
		 */
		DIA_MIGRANT = 'DIA_MIGRANT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MILITARYBUM](https://wiki.rage.mp/images/9/9f/Dia_militarybum.jpg),
		 */
		DIA_MILITARYBUM = 'DIA_MILITARYBUM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MILTON](https://wiki.rage.mp/images/5/58/Dia_milton.jpg),
		 */
		DIA_MILTON = 'DIA_MILTON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MIME](https://wiki.rage.mp/images/8/8e/Dia_mime.jpg),
		 */
		DIA_MIME = 'DIA_MIME',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MOVIESTAR](https://wiki.rage.mp/images/9/96/Dia_moviestar.jpg),
		 */
		DIA_MOVIESTAR = 'DIA_MOVIESTAR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_MRSR](https://wiki.rage.mp/images/c/c8/Dia_mrsr.jpg),
		 */
		DIA_MRSR = 'DIA_MRSR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_NATALIA](https://wiki.rage.mp/images/e/ec/Dia_natalia.jpg),
		 */
		DIA_NATALIA = 'DIA_NATALIA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_OJBB1_TRUCKER](https://wiki.rage.mp/images/7/76/Dia_ojbb1_trucker.jpg),
		 */
		DIA_OJBB1_TRUCKER = 'DIA_OJBB1_TRUCKER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_OJBB2_BIKER](https://wiki.rage.mp/images/6/62/Dia_ojbb2_biker.jpg),
		 */
		DIA_OJBB2_BIKER = 'DIA_OJBB2_BIKER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_OJBB3_XMECH](https://wiki.rage.mp/images/4/40/Dia_ojbb3_xmech.jpg),
		 */
		DIA_OJBB3_XMECH = 'DIA_OJBB3_XMECH',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_OJBB4_ACULT](https://wiki.rage.mp/images/f/fe/Dia_ojbb4_acult.jpg),
		 */
		DIA_OJBB4_ACULT = 'DIA_OJBB4_ACULT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PATRICIA](https://wiki.rage.mp/images/8/88/Dia_patricia.jpg),
		 */
		DIA_PATRICIA = 'DIA_PATRICIA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PILOT](https://wiki.rage.mp/images/f/f3/Dia_pilot.jpg),
		 */
		DIA_PILOT = 'DIA_PILOT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_POLICE](https://wiki.rage.mp/images/b/b5/Dia_police.jpg),
		 */
		DIA_POLICE = 'DIA_POLICE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_POPOV](https://wiki.rage.mp/images/f/fc/Dia_popov.jpg),
		 */
		DIA_POPOV = 'DIA_POPOV',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_POPPYMICH](https://wiki.rage.mp/images/a/a2/Dia_poppymich.jpg),
		 */
		DIA_POPPYMICH = 'DIA_POPPYMICH',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PRINCESS](https://wiki.rage.mp/images/b/b2/Dia_princess.jpg),
		 */
		DIA_PRINCESS = 'DIA_PRINCESS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PRO1_CLERGY](https://wiki.rage.mp/images/5/5a/Dia_pro1_clergy.jpg),
		 */
		DIA_PRO1_CLERGY = 'DIA_PRO1_CLERGY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PRO1_HOSTF1](https://wiki.rage.mp/images/a/aa/Dia_pro1_hostf1.jpg),
		 */
		DIA_PRO1_HOSTF1 = 'DIA_PRO1_HOSTF1',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PRO1_MICHAELMASK](https://wiki.rage.mp/images/0/0f/Dia_pro1_michaelmask.jpg),
		 */
		DIA_PRO1_MICHAELMASK = 'DIA_PRO1_MICHAELMASK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_PRO1_TREVORMASK](https://wiki.rage.mp/images/7/77/Dia_pro1_trevormask.jpg),
		 */
		DIA_PRO1_TREVORMASK = 'DIA_PRO1_TREVORMASK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_RACER](https://wiki.rage.mp/images/e/eb/Dia_racer.jpg),
		 */
		DIA_RACER = 'DIA_RACER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_RE25_LACEY](https://wiki.rage.mp/images/1/1e/Dia_re25_lacey.jpg),
		 */
		DIA_RE25_LACEY = 'DIA_RE25_LACEY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_RE31A_AIRPORT](https://wiki.rage.mp/images/0/0b/Dia_re31a_airport.jpg),
		 */
		DIA_RE31A_AIRPORT = 'DIA_RE31A_AIRPORT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_RE31C_HIPSTER](https://wiki.rage.mp/images/8/85/Dia_re31c_hipster.jpg),
		 */
		DIA_RE31C_HIPSTER = 'DIA_RE31C_HIPSTER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_RE31E_BRIDE](https://wiki.rage.mp/images/e/e2/Dia_re31e_bride.jpg),
		 */
		DIA_RE31E_BRIDE = 'DIA_RE31E_BRIDE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_RE44B_PRISONER](https://wiki.rage.mp/images/2/2b/Dia_re44b_prisoner.jpg),
		 */
		DIA_RE44B_PRISONER = 'DIA_RE44B_PRISONER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ROCCOPELOSI](https://wiki.rage.mp/images/c/ce/Dia_roccopelosi.jpg),
		 */
		DIA_ROCCOPELOSI = 'DIA_ROCCOPELOSI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_SAS1_HUNTER](https://wiki.rage.mp/images/3/3e/Dia_sas1_hunter.jpg),
		 */
		DIA_SAS1_HUNTER = 'DIA_SAS1_HUNTER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_SCIENTIST](https://wiki.rage.mp/images/f/f5/Dia_scientist.jpg),
		 */
		DIA_SCIENTIST = 'DIA_SCIENTIST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_SECURITY](https://wiki.rage.mp/images/9/96/Dia_security.jpg),
		 */
		DIA_SECURITY = 'DIA_SECURITY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_SHOP](https://wiki.rage.mp/images/0/07/Dia_shop.jpg),
		 */
		DIA_SHOP = 'DIA_SHOP',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_SP1_ANDY](https://wiki.rage.mp/images/5/55/Dia_sp1_andy.jpg),
		 */
		DIA_SP1_ANDY = 'DIA_SP1_ANDY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TANNOY](https://wiki.rage.mp/images/3/38/Dia_tannoy.jpg),
		 */
		DIA_TANNOY = 'DIA_TANNOY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TAOTRANSLATOR](https://wiki.rage.mp/images/5/53/Dia_taotranslator.jpg),
		 */
		DIA_TAOTRANSLATOR = 'DIA_TAOTRANSLATOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TARGET](https://wiki.rage.mp/images/f/fa/Dia_target.jpg),
		 */
		DIA_TARGET = 'DIA_TARGET',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TENNIS](https://wiki.rage.mp/images/6/6b/Dia_tennis.jpg),
		 */
		DIA_TENNIS = 'DIA_TENNIS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TERRY](https://wiki.rage.mp/images/b/b1/Dia_terry.jpg),
		 */
		DIA_TERRY = 'DIA_TERRY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_THORNTON](https://wiki.rage.mp/images/e/ed/Dia_thornton.jpg),
		 */
		DIA_THORNTON = 'DIA_THORNTON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TOMEPSILON](https://wiki.rage.mp/images/6/65/Dia_tomepsilon.jpg),
		 */
		DIA_TOMEPSILON = 'DIA_TOMEPSILON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TON3_OWNER](https://wiki.rage.mp/images/e/e6/Dia_ton3_owner.jpg),
		 */
		DIA_TON3_OWNER = 'DIA_TON3_OWNER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TOUR](https://wiki.rage.mp/images/2/28/Dia_tour.jpg),
		 */
		DIA_TOUR = 'DIA_TOUR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TOURIST](https://wiki.rage.mp/images/4/4f/Dia_tourist.jpg),
		 */
		DIA_TOURIST = 'DIA_TOURIST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_TYLERDIX](https://wiki.rage.mp/images/1/1d/Dia_tylerdix.jpg),
		 */
		DIA_TYLERDIX = 'DIA_TYLERDIX',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ULP](https://wiki.rage.mp/images/6/69/Dia_ulp.jpg),
		 */
		DIA_ULP = 'DIA_ULP',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_VICTIM](https://wiki.rage.mp/images/0/03/Dia_victim.jpg),
		 */
		DIA_VICTIM = 'DIA_VICTIM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_VINCENT](https://wiki.rage.mp/images/e/e8/Dia_vincent.jpg),
		 */
		DIA_VINCENT = 'DIA_VINCENT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_VIOLET](https://wiki.rage.mp/images/9/93/Dia_violet.jpg),
		 */
		DIA_VIOLET = 'DIA_VIOLET',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_WILLY](https://wiki.rage.mp/images/4/4c/Dia_willy.jpg),
		 */
		DIA_WILLY = 'DIA_WILLY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![DIA_ZOMBIE1](https://wiki.rage.mp/images/d/db/Dia_zombie1.jpg),
		 */
		DIA_ZOMBIE1 = 'DIA_ZOMBIE1',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_ARR](https://wiki.rage.mp/images/3/30/Hc_n_arr.jpg),
		 */
		HC_N_ARR = 'HC_N_ARR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_CHE](https://wiki.rage.mp/images/0/0d/Hc_n_che.jpg),
		 */
		HC_N_CHE = 'HC_N_CHE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_CHR](https://wiki.rage.mp/images/c/cf/Hc_n_chr.jpg),
		 */
		HC_N_CHR = 'HC_N_CHR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_DAR](https://wiki.rage.mp/images/b/b8/Hc_n_dar.jpg),
		 */
		HC_N_DAR = 'HC_N_DAR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_EDD](https://wiki.rage.mp/images/2/25/Hc_n_edd.jpg),
		 */
		HC_N_EDD = 'HC_N_EDD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_FRANKLIN](https://wiki.rage.mp/images/c/c2/Hc_n_franklin.jpg),
		 */
		HC_N_FRANKLIN = 'HC_N_FRANKLIN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_GAN](https://wiki.rage.mp/images/c/cf/Hc_n_gan.jpg),
		 */
		HC_N_GAN = 'HC_N_GAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_GET](https://wiki.rage.mp/images/a/a3/Hc_n_get.jpg),
		 */
		HC_N_GET = 'HC_N_GET',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_GUS](https://wiki.rage.mp/images/6/64/Hc_n_gus.jpg),
		 */
		HC_N_GUS = 'HC_N_GUS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_HUG](https://wiki.rage.mp/images/e/e1/Hc_n_hug.jpg),
		 */
		HC_N_HUG = 'HC_N_HUG',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_KAR](https://wiki.rage.mp/images/7/7d/Hc_n_kar.jpg),
		 */
		HC_N_KAR = 'HC_N_KAR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_KRM](https://wiki.rage.mp/images/a/a0/Hc_n_krm.jpg),
		 */
		HC_N_KRM = 'HC_N_KRM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_LESTER](https://wiki.rage.mp/images/f/f7/Hc_n_lester.jpg),
		 */
		HC_N_LESTER = 'HC_N_LESTER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_LIF](https://wiki.rage.mp/images/4/41/Hc_n_lif.jpg),
		 */
		HC_N_LIF = 'HC_N_LIF',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_MICHAEL](https://wiki.rage.mp/images/c/cc/Hc_n_michael.jpg),
		 */
		HC_N_MICHAEL = 'HC_N_MICHAEL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_NOR](https://wiki.rage.mp/images/c/c1/Hc_n_nor.jpg),
		 */
		HC_N_NOR = 'HC_N_NOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_PAC](https://wiki.rage.mp/images/5/5c/Hc_n_pac.jpg),
		 */
		HC_N_PAC = 'HC_N_PAC',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_PAI](https://wiki.rage.mp/images/b/b5/Hc_n_pai.jpg),
		 */
		HC_N_PAI = 'HC_N_PAI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_RIC](https://wiki.rage.mp/images/2/2d/Hc_n_ric.jpg),
		 */
		HC_N_RIC = 'HC_N_RIC',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_TAL](https://wiki.rage.mp/images/4/4b/Hc_n_tal.jpg),
		 */
		HC_N_TAL = 'HC_N_TAL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![HC_N_TREVOR](https://wiki.rage.mp/images/7/7e/Hc_n_trevor.jpg),
		 */
		HC_N_TREVOR = 'HC_N_TREVOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ACCOUNTANTTVSHOW](https://wiki.rage.mp/images/d/de/Web_accountanttvshow.jpg),
		 */
		WEB_ACCOUNTANTTVSHOW = 'WEB_ACCOUNTANTTVSHOW',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ALAMOSEATOURISTBOARD](https://wiki.rage.mp/images/9/9b/Web_alamoseatouristboard.jpg),
		 */
		WEB_ALAMOSEATOURISTBOARD = 'WEB_ALAMOSEATOURISTBOARD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ALDINAPOLI](https://wiki.rage.mp/images/1/18/Web_aldinapoli.jpg),
		 */
		WEB_ALDINAPOLI = 'WEB_ALDINAPOLI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ALPHADEV_87](https://wiki.rage.mp/images/d/da/Web_alphadev_87.jpg),
		 */
		WEB_ALPHADEV_87 = 'WEB_ALPHADEV_87',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_APPASS](https://wiki.rage.mp/images/6/66/Web_appass.jpg),
		 */
		WEB_APPASS = 'WEB_APPASS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BAHAMAMAMASWEST](https://wiki.rage.mp/images/b/be/Web_bahamamamaswest.jpg),
		 */
		WEB_BAHAMAMAMASWEST = 'WEB_BAHAMAMAMASWEST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BARBEQUESPACEFLIGHT](https://wiki.rage.mp/images/6/67/Web_barbequespaceflight.jpg),
		 */
		WEB_BARBEQUESPACEFLIGHT = 'WEB_BARBEQUESPACEFLIGHT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BENEFACTOR](https://wiki.rage.mp/images/3/30/Web_benefactor.jpg),
		 */
		WEB_BENEFACTOR = 'WEB_BENEFACTOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BILLANTHONY](https://wiki.rage.mp/images/5/57/Web_billanthony.jpg),
		 */
		WEB_BILLANTHONY = 'WEB_BILLANTHONY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BILLYBLUE](https://wiki.rage.mp/images/d/dd/Web_billyblue.jpg),
		 */
		WEB_BILLYBLUE = 'WEB_BILLYBLUE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BITTERSWEETCELLPHONE](https://wiki.rage.mp/images/7/75/Web_bittersweetcellphone.jpg),
		 */
		WEB_BITTERSWEETCELLPHONE = 'WEB_BITTERSWEETCELLPHONE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BRIANLEATHERDD](https://wiki.rage.mp/images/1/14/Web_brianleatherdd.jpg),
		 */
		WEB_BRIANLEATHERDD = 'WEB_BRIANLEATHERDD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BROTHERADRIAN](https://wiki.rage.mp/images/5/59/Web_brotheradrian.jpg),
		 */
		WEB_BROTHERADRIAN = 'WEB_BROTHERADRIAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BRUCESPADE](https://wiki.rage.mp/images/c/c4/Web_brucespade.jpg),
		 */
		WEB_BRUCESPADE = 'WEB_BRUCESPADE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BRUCIE_K](https://wiki.rage.mp/images/d/d0/Web_brucie_k.jpg),
		 */
		WEB_BRUCIE_K = 'WEB_BRUCIE_K',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_BUNUELOADDICT5](https://wiki.rage.mp/images/d/d6/Web_bunueloaddict5.jpg),
		 */
		WEB_BUNUELOADDICT5 = 'WEB_BUNUELOADDICT5',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CASHFORDEADDREAMS](https://wiki.rage.mp/images/8/8a/Web_cashfordeaddreams.jpg),
		 */
		WEB_CASHFORDEADDREAMS = 'WEB_CASHFORDEADDREAMS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CHADMULLIGAN](https://wiki.rage.mp/images/0/07/Web_chadmulligan.jpg),
		 */
		WEB_CHADMULLIGAN = 'WEB_CHADMULLIGAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CHERENKOVVODKA](https://wiki.rage.mp/images/8/86/Web_cherenkovvodka.jpg),
		 */
		WEB_CHERENKOVVODKA = 'WEB_CHERENKOVVODKA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CHUMASH_KIKI](https://wiki.rage.mp/images/c/cc/Web_chumash_kiki.jpg),
		 */
		WEB_CHUMASH_KIKI = 'WEB_CHUMASH_KIKI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CLAYPGJACKSON](https://wiki.rage.mp/images/6/61/Web_claypgjackson.jpg),
		 */
		WEB_CLAYPGJACKSON = 'WEB_CLAYPGJACKSON',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CLUCKINBELL](https://wiki.rage.mp/images/5/58/Web_cluckinbell.jpg),
		 */
		WEB_CLUCKINBELL = 'WEB_CLUCKINBELL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_COWBOY_BECKY](https://wiki.rage.mp/images/f/f2/Web_cowboy_becky.jpg),
		 */
		WEB_COWBOY_BECKY = 'WEB_COWBOY_BECKY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CREDITCARDCONSOLIDATIONKINGS](https://wiki.rage.mp/images/6/62/Web_creditcardconsolidationkings.jpg),
		 */
		WEB_CREDITCARDCONSOLIDATIONKINGS = 'WEB_CREDITCARDCONSOLIDATIONKINGS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CREVISOUTDOORAPPAREL](https://wiki.rage.mp/images/b/b2/Web_crevisoutdoorapparel.jpg),
		 */
		WEB_CREVISOUTDOORAPPAREL = 'WEB_CREVISOUTDOORAPPAREL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CRISFORMAGE](https://wiki.rage.mp/images/6/68/Web_crisformage.jpg),
		 */
		WEB_CRISFORMAGE = 'WEB_CRISFORMAGE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_CUNNINGSTUNTACADEMY](https://wiki.rage.mp/images/d/db/Web_cunningstuntacademy.jpg),
		 */
		WEB_CUNNINGSTUNTACADEMY = 'WEB_CUNNINGSTUNTACADEMY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DEBBIEBABES85](https://wiki.rage.mp/images/9/98/Web_debbiebabes85.jpg),
		 */
		WEB_DEBBIEBABES85 = 'WEB_DEBBIEBABES85',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DEBRA_PUERTODELSOL](https://wiki.rage.mp/images/1/1b/Web_debra_puertodelsol.jpg),
		 */
		WEB_DEBRA_PUERTODELSOL = 'WEB_DEBRA_PUERTODELSOL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DELANCEYMEDUA](https://wiki.rage.mp/images/5/5b/Web_delanceymedua.jpg),
		 */
		WEB_DELANCEYMEDUA = 'WEB_DELANCEYMEDUA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DIGIFARM](https://wiki.rage.mp/images/a/a6/Web_digifarm.jpg),
		 */
		WEB_DIGIFARM = 'WEB_DIGIFARM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DOA](https://wiki.rage.mp/images/d/d8/Web_doa.jpg),
		 */
		WEB_DOA = 'WEB_DOA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DONTELFORD](https://wiki.rage.mp/images/9/91/Web_dontelford.jpg),
		 */
		WEB_DONTELFORD = 'WEB_DONTELFORD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DRDALEJENKINS](https://wiki.rage.mp/images/7/78/Web_drdalejenkins.jpg),
		 */
		WEB_DRDALEJENKINS = 'WEB_DRDALEJENKINS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DRUGOBSERVATIONAGENCY](https://wiki.rage.mp/images/b/bc/Web_drugobservationagency.jpg),
		 */
		WEB_DRUGOBSERVATIONAGENCY = 'WEB_DRUGOBSERVATIONAGENCY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_DUDEEATDOG](https://wiki.rage.mp/images/6/6a/Web_dudeeatdog.jpg),
		 */
		WEB_DUDEEATDOG = 'WEB_DUDEEATDOG',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ECOLASOFTDRINK](https://wiki.rage.mp/images/a/ac/Web_ecolasoftdrink.jpg),
		 */
		WEB_ECOLASOFTDRINK = 'WEB_ECOLASOFTDRINK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ELECTROTOKE](https://wiki.rage.mp/images/9/9b/Web_electrotoke.jpg),
		 */
		WEB_ELECTROTOKE = 'WEB_ELECTROTOKE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ERIS](https://wiki.rage.mp/images/f/fa/Web_eris.jpg),
		 */
		WEB_ERIS = 'WEB_ERIS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FABIENLAROUCHE](https://wiki.rage.mp/images/1/18/Web_fabienlarouche.jpg),
		 */
		WEB_FABIENLAROUCHE = 'WEB_FABIENLAROUCHE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FACADECOMPUTERS](https://wiki.rage.mp/images/9/9f/Web_facadecomputers.jpg),
		 */
		WEB_FACADECOMPUTERS = 'WEB_FACADECOMPUTERS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FAMEORSHAME](https://wiki.rage.mp/images/8/8e/Web_fameorshame.jpg),
		 */
		WEB_FAMEORSHAME = 'WEB_FAMEORSHAME',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FEARFIRST](https://wiki.rage.mp/images/9/9d/Web_fearfirst.jpg),
		 */
		WEB_FEARFIRST = 'WEB_FEARFIRST',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FOOTLONG_FREDDIE](https://wiki.rage.mp/images/a/a8/Web_footlong_freddie.jpg),
		 */
		WEB_FOOTLONG_FREDDIE = 'WEB_FOOTLONG_FREDDIE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FRUIT](https://wiki.rage.mp/images/d/df/Web_fruit.jpg),
		 */
		WEB_FRUIT = 'WEB_FRUIT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_FUKUDAD3](https://wiki.rage.mp/images/f/f8/Web_fukudad3.jpg),
		 */
		WEB_FUKUDAD3 = 'WEB_FUKUDAD3',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_GERALDINOK6](https://wiki.rage.mp/images/3/38/Web_geraldinok6.jpg),
		 */
		WEB_GERALDINOK6 = 'WEB_GERALDINOK6',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_GRAPESEEDCHARLIE](https://wiki.rage.mp/images/5/55/Web_grapeseedcharlie.jpg),
		 */
		WEB_GRAPESEEDCHARLIE = 'WEB_GRAPESEEDCHARLIE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_HONKERS](https://wiki.rage.mp/images/2/2c/Web_honkers.jpg),
		 */
		WEB_HONKERS = 'WEB_HONKERS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_HUSHSMUSH](https://wiki.rage.mp/images/2/2a/Web_hushsmush.jpg),
		 */
		WEB_HUSHSMUSH = 'WEB_HUSHSMUSH',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_IMPOTENTRAGE](https://wiki.rage.mp/images/1/18/Web_impotentrage.jpg),
		 */
		WEB_IMPOTENTRAGE = 'WEB_IMPOTENTRAGE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JACKHOWITZER](https://wiki.rage.mp/images/8/82/Web_jackhowitzer.jpg),
		 */
		WEB_JACKHOWITZER = 'WEB_JACKHOWITZER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JACKSONBBJ](https://wiki.rage.mp/images/7/7b/Web_jacksonbbj.jpg),
		 */
		WEB_JACKSONBBJ = 'WEB_JACKSONBBJ',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JENNRATT73](https://wiki.rage.mp/images/2/2a/Web_jennratt73.jpg),
		 */
		WEB_JENNRATT73 = 'WEB_JENNRATT73',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JILLSTHENEWBLACK](https://wiki.rage.mp/images/2/22/Web_jillsthenewblack.jpg),
		 */
		WEB_JILLSTHENEWBLACK = 'WEB_JILLSTHENEWBLACK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JILLVONCRASTENBURG](https://wiki.rage.mp/images/a/a7/Web_jillvoncrastenburg.jpg),
		 */
		WEB_JILLVONCRASTENBURG = 'WEB_JILLVONCRASTENBURG',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JOCKCRANLEY](https://wiki.rage.mp/images/f/fd/Web_jockcranley.jpg),
		 */
		WEB_JOCKCRANLEY = 'WEB_JOCKCRANLEY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JOSHBERNSTEINREALTOR](https://wiki.rage.mp/images/5/5f/Web_joshbernsteinrealtor.jpg),
		 */
		WEB_JOSHBERNSTEINREALTOR = 'WEB_JOSHBERNSTEINREALTOR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JUNKENERGYDRINK](https://wiki.rage.mp/images/c/c3/Web_junkenergydrink.jpg),
		 */
		WEB_JUNKENERGYDRINK = 'WEB_JUNKENERGYDRINK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_JUSTICEFORLEONORA](https://wiki.rage.mp/images/4/49/Web_justiceforleonora.jpg),
		 */
		WEB_JUSTICEFORLEONORA = 'WEB_JUSTICEFORLEONORA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_KANKANJILL](https://wiki.rage.mp/images/7/76/Web_kankanjill.jpg),
		 */
		WEB_KANKANJILL = 'WEB_KANKANJILL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_KERRYMCINTOSH](https://wiki.rage.mp/images/1/18/Web_kerrymcintosh.jpg),
		 */
		WEB_KERRYMCINTOSH = 'WEB_KERRYMCINTOSH',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_KEVMEISTER_YO](https://wiki.rage.mp/images/9/94/Web_kevmeister_yo.jpg),
		 */
		WEB_KEVMEISTER_YO = 'WEB_KEVMEISTER_YO',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_KEVTRIMBALT22](https://wiki.rage.mp/images/5/5a/Web_kevtrimbalt22.jpg),
		 */
		WEB_KEVTRIMBALT22 = 'WEB_KEVTRIMBALT22',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_KUNGFURAINBOW](https://wiki.rage.mp/images/a/a1/Web_kungfurainbow.jpg),
		 */
		WEB_KUNGFURAINBOW = 'WEB_KUNGFURAINBOW',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LAZLOW](https://wiki.rage.mp/images/7/7b/Web_lazlow.jpg),
		 */
		WEB_LAZLOW = 'WEB_LAZLOW',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LOGGERLIGHT](https://wiki.rage.mp/images/d/d7/Web_loggerlight.jpg),
		 */
		WEB_LOGGERLIGHT = 'WEB_LOGGERLIGHT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LOMBANK](https://wiki.rage.mp/images/7/75/Web_lombank.jpg),
		 */
		WEB_LOMBANK = 'WEB_LOMBANK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LONNIE_FIG3](https://wiki.rage.mp/images/4/4d/Web_lonnie_fig3.jpg),
		 */
		WEB_LONNIE_FIG3 = 'WEB_LONNIE_FIG3',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LOSSANTOSPOLICEDEPT](https://wiki.rage.mp/images/4/48/Web_lossantospolicedept.jpg),
		 */
		WEB_LOSSANTOSPOLICEDEPT = 'WEB_LOSSANTOSPOLICEDEPT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LOUISAXOX91](https://wiki.rage.mp/images/8/8e/Web_louisaxox91.jpg),
		 */
		WEB_LOUISAXOX91 = 'WEB_LOUISAXOX91',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LSMORTICIANPETE](https://wiki.rage.mp/images/0/0c/Web_lsmorticianpete.jpg),
		 */
		WEB_LSMORTICIANPETE = 'WEB_LSMORTICIANPETE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_LSPAPACARLOS](https://wiki.rage.mp/images/d/d5/Web_lspapacarlos.jpg),
		 */
		WEB_LSPAPACARLOS = 'WEB_LSPAPACARLOS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MACKINIT2009](https://wiki.rage.mp/images/7/72/Web_mackinit2009.jpg),
		 */
		WEB_MACKINIT2009 = 'WEB_MACKINIT2009',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MAGENTA](https://wiki.rage.mp/images/f/f0/Web_magenta.jpg),
		 */
		WEB_MAGENTA = 'WEB_MAGENTA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MANDYBROCOLI](https://wiki.rage.mp/images/d/dd/Web_mandybrocoli.jpg),
		 */
		WEB_MANDYBROCOLI = 'WEB_MANDYBROCOLI',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MANOLODEORO2](https://wiki.rage.mp/images/d/d4/Web_manolodeoro2.jpg),
		 */
		WEB_MANOLODEORO2 = 'WEB_MANOLODEORO2',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MCCLIP](https://wiki.rage.mp/images/0/0f/Web_mcclip.jpg),
		 */
		WEB_MCCLIP = 'WEB_MCCLIP',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_METV](https://wiki.rage.mp/images/1/11/Web_metv.jpg),
		 */
		WEB_METV = 'WEB_METV',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MISFIREGAMES](https://wiki.rage.mp/images/7/7e/Web_misfiregames.jpg),
		 */
		WEB_MISFIREGAMES = 'WEB_MISFIREGAMES',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MITCHDEXTER](https://wiki.rage.mp/images/9/95/Web_mitchdexter.jpg),
		 */
		WEB_MITCHDEXTER = 'WEB_MITCHDEXTER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MORGANCHESTER](https://wiki.rage.mp/images/9/9a/Web_morganchester.jpg),
		 */
		WEB_MORGANCHESTER = 'WEB_MORGANCHESTER',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_MOUSKATEAR](https://wiki.rage.mp/images/d/dc/Web_mouskatear.jpg),
		 */
		WEB_MOUSKATEAR = 'WEB_MOUSKATEAR',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_NATIONALOFFICEOFSECURITYENFORCEMENT](https://wiki.rage.mp/images/c/c1/Web_nationalofficeofsecurityenforcement.jpg),
		 */
		WEB_NATIONALOFFICEOFSECURITYENFORCEMENT = 'WEB_NATIONALOFFICEOFSECURITYENFORCEMENT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_NOBBLY_HEAD](https://wiki.rage.mp/images/f/f4/Web_nobbly_head.jpg),
		 */
		WEB_NOBBLY_HEAD = 'WEB_NOBBLY_HEAD',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PAMELADRAKE](https://wiki.rage.mp/images/f/fb/Web_pameladrake.jpg),
		 */
		WEB_PAMELADRAKE = 'WEB_PAMELADRAKE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PATO_GRANDE26](https://wiki.rage.mp/images/e/e7/Web_pato_grande26.jpg),
		 */
		WEB_PATO_GRANDE26 = 'WEB_PATO_GRANDE26',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PFISTERDESIGN](https://wiki.rage.mp/images/1/16/Web_pfisterdesign.jpg),
		 */
		WEB_PFISTERDESIGN = 'WEB_PFISTERDESIGN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PILLPHARM](https://wiki.rage.mp/images/b/bb/Web_pillpharm.jpg),
		 */
		WEB_PILLPHARM = 'WEB_PILLPHARM',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PORCUPINEPETE](https://wiki.rage.mp/images/d/d5/Web_porcupinepete.jpg),
		 */
		WEB_PORCUPINEPETE = 'WEB_PORCUPINEPETE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_POUNDERSFOOTBALL](https://wiki.rage.mp/images/7/72/Web_poundersfootball.jpg),
		 */
		WEB_POUNDERSFOOTBALL = 'WEB_POUNDERSFOOTBALL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_POWCLEANSE](https://wiki.rage.mp/images/4/4c/Web_powcleanse.jpg),
		 */
		WEB_POWCLEANSE = 'WEB_POWCLEANSE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PREMIUMDELUXEMOTORSPORT](https://wiki.rage.mp/images/2/2e/Web_premiumdeluxemotorsport.jpg),
		 */
		WEB_PREMIUMDELUXEMOTORSPORT = 'WEB_PREMIUMDELUXEMOTORSPORT',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_PROP116](https://wiki.rage.mp/images/3/3c/Web_prop116.jpg),
		 */
		WEB_PROP116 = 'WEB_PROP116',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_RAILROAD_PETE47](https://wiki.rage.mp/images/4/46/Web_railroad_pete47.jpg),
		 */
		WEB_RAILROAD_PETE47 = 'WEB_RAILROAD_PETE47',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_RECYCLEHUGO17](https://wiki.rage.mp/images/a/ac/Web_recyclehugo17.jpg),
		 */
		WEB_RECYCLEHUGO17 = 'WEB_RECYCLEHUGO17',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_REDWOODCIGARETTES](https://wiki.rage.mp/images/8/80/Web_redwoodcigarettes.jpg),
		 */
		WEB_REDWOODCIGARETTES = 'WEB_REDWOODCIGARETTES',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_REPUBLICANSPACERANGERS](https://wiki.rage.mp/images/4/45/Web_republicanspacerangers.jpg),
		 */
		WEB_REPUBLICANSPACERANGERS = 'WEB_REPUBLICANSPACERANGERS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_RIGHT4EVA](https://wiki.rage.mp/images/b/b7/Web_right4eva.jpg),
		 */
		WEB_RIGHT4EVA = 'WEB_RIGHT4EVA',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ROCKFORD_CAPTAIN67](https://wiki.rage.mp/images/1/16/Web_rockford_captain67.jpg),
		 */
		WEB_ROCKFORD_CAPTAIN67 = 'WEB_ROCKFORD_CAPTAIN67',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_ROCKFORD_PRIVATETENNIS](https://wiki.rage.mp/images/3/32/Web_rockford_privatetennis.jpg),
		 */
		WEB_ROCKFORD_PRIVATETENNIS = 'WEB_ROCKFORD_PRIVATETENNIS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_RUSTYBROWNSDONUTS](https://wiki.rage.mp/images/7/73/Web_rustybrownsdonuts.jpg),
		 */
		WEB_RUSTYBROWNSDONUTS = 'WEB_RUSTYBROWNSDONUTS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SANDYSURESTEVE](https://wiki.rage.mp/images/b/bb/Web_sandysuresteve.jpg),
		 */
		WEB_SANDYSURESTEVE = 'WEB_SANDYSURESTEVE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SEBASTIANDIXFASHION](https://wiki.rage.mp/images/7/7a/Web_sebastiandixfashion.jpg),
		 */
		WEB_SEBASTIANDIXFASHION = 'WEB_SEBASTIANDIXFASHION',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SERIOUSCOUGARSHOW](https://wiki.rage.mp/images/5/57/Web_seriouscougarshow.jpg),
		 */
		WEB_SERIOUSCOUGARSHOW = 'WEB_SERIOUSCOUGARSHOW',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SEXTONDANIELS](https://wiki.rage.mp/images/0/0c/Web_sextondaniels.jpg),
		 */
		WEB_SEXTONDANIELS = 'WEB_SEXTONDANIELS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SEXXISANDRA_RUGGIRL](https://wiki.rage.mp/images/0/00/Web_sexxisandra_ruggirl.jpg),
		 */
		WEB_SEXXISANDRA_RUGGIRL = 'WEB_SEXXISANDRA_RUGGIRL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SILLYJILLY28](https://wiki.rage.mp/images/0/02/Web_sillyjilly28.jpg),
		 */
		WEB_SILLYJILLY28 = 'WEB_SILLYJILLY28',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SIXFIGURETEMPS](https://wiki.rage.mp/images/d/d1/Web_sixfiguretemps.jpg),
		 */
		WEB_SIXFIGURETEMPS = 'WEB_SIXFIGURETEMPS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SORRYCOMMODEBAND](https://wiki.rage.mp/images/f/ff/Web_sorrycommodeband.jpg),
		 */
		WEB_SORRYCOMMODEBAND = 'WEB_SORRYCOMMODEBAND',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SPRUNK](https://wiki.rage.mp/images/e/ea/Web_sprunk.jpg),
		 */
		WEB_SPRUNK = 'WEB_SPRUNK',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_STABFINO](https://wiki.rage.mp/images/2/27/Web_stabfino.jpg),
		 */
		WEB_STABFINO = 'WEB_STABFINO',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SUEMURRY](https://wiki.rage.mp/images/6/66/Web_suemurry.jpg),
		 */
		WEB_SUEMURRY = 'WEB_SUEMURRY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SWALLOWCLOTHING](https://wiki.rage.mp/images/e/e3/Web_swallowclothing.jpg),
		 */
		WEB_SWALLOWCLOTHING = 'WEB_SWALLOWCLOTHING',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_SWINGERSBASEBALL](https://wiki.rage.mp/images/f/f4/Web_swingersbaseball.jpg),
		 */
		WEB_SWINGERSBASEBALL = 'WEB_SWINGERSBASEBALL',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_TACOBRENDAN](https://wiki.rage.mp/images/d/d1/Web_tacobrendan.jpg),
		 */
		WEB_TACOBRENDAN = 'WEB_TACOBRENDAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_THECRAZE](https://wiki.rage.mp/images/0/03/Web_thecraze.jpg),
		 */
		WEB_THECRAZE = 'WEB_THECRAZE',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_THOMASSTIGHT_YEAH](https://wiki.rage.mp/images/a/ad/Web_thomasstight_yeah.jpg),
		 */
		WEB_THOMASSTIGHT_YEAH = 'WEB_THOMASSTIGHT_YEAH',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_TITOTITTYFAN](https://wiki.rage.mp/images/1/18/Web_titotittyfan.jpg),
		 */
		WEB_TITOTITTYFAN = 'WEB_TITOTITTYFAN',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_TOESHOES](https://wiki.rage.mp/images/4/40/Web_toeshoes.jpg),
		 */
		WEB_TOESHOES = 'WEB_TOESHOES',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_TONYMCTONY](https://wiki.rage.mp/images/7/74/Web_tonymctony.jpg),
		 */
		WEB_TONYMCTONY = 'WEB_TONYMCTONY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_TUMMYTODD_92](https://wiki.rage.mp/images/4/4e/Web_tummytodd_92.jpg),
		 */
		WEB_TUMMYTODD_92 = 'WEB_TUMMYTODD_92',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_USAFRANKIEG](https://wiki.rage.mp/images/3/37/Web_usafrankieg.jpg),
		 */
		WEB_USAFRANKIEG = 'WEB_USAFRANKIEG',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_VINEWOODLIONEL67](https://wiki.rage.mp/images/8/81/Web_vinewoodlionel67.jpg),
		 */
		WEB_VINEWOODLIONEL67 = 'WEB_VINEWOODLIONEL67',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_WHIZWIRELESS](https://wiki.rage.mp/images/4/4c/Web_whizwireless.jpg),
		 */
		WEB_WHIZWIRELESS = 'WEB_WHIZWIRELESS',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_YOURDEADFAMILY](https://wiki.rage.mp/images/7/72/Web_yourdeadfamily.jpg),
		 */
		WEB_YOURDEADFAMILY = 'WEB_YOURDEADFAMILY',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_YOURNEWBABYSNAME](https://wiki.rage.mp/images/3/39/Web_yournewbabysname.jpg),
		 */
		WEB_YOURNEWBABYSNAME = 'WEB_YOURNEWBABYSNAME',
		/**
		 * Works without requesting: **No**
		 *
		 * ![WEB_YUNGMARLON](https://wiki.rage.mp/images/5/5a/Web_yungmarlon.jpg),
		 */
		WEB_YUNGMARLON = 'WEB_YUNGMARLON',
	}

	const enum Pickups {
		PICKUP_AMMO_BULLET_MP = 0x550447A9,
		PICKUP_AMMO_FIREWORK = 0xF92F486C,
		PICKUP_AMMO_FIREWORK_MP = 0x602941D0,
		PICKUP_AMMO_FLAREGUN = 0xE013E01C,
		PICKUP_AMMO_GRENADELAUNCHER = 0x881AB0A8,
		PICKUP_AMMO_GRENADELAUNCHER_MP = 0xA421A532,
		PICKUP_AMMO_HOMINGLAUNCHER = 0x5C517D97,
		PICKUP_AMMO_MG = 0xDE58E0B3,
		PICKUP_AMMO_MINIGUN = 0xF25A01B9,
		PICKUP_AMMO_MISSILE_MP = 0xF99E15D0,
		PICKUP_AMMO_PISTOL = 0x20796A82,
		PICKUP_AMMO_RIFLE = 0xE4BD2FC6,
		PICKUP_AMMO_RPG = 0x84837FD7,
		PICKUP_AMMO_SHOTGUN = 0x77F3F2DD,
		PICKUP_AMMO_SMG = 0x116FC4E6,
		PICKUP_AMMO_SNIPER = 0xC02CF125,
		PICKUP_ARMOUR_STANDARD = 0x4BFB42D1,
		PICKUP_CAMERA = 0xE33D8630,
		PICKUP_CUSTOM_SCRIPT = 0x2C014CA6,
		PICKUP_GANG_ATTACK_MONEY = 0xE175C698,
		PICKUP_HEALTH_SNACK = 0x1CD2CF66,
		PICKUP_HEALTH_STANDARD = 0x8F707C18,
		PICKUP_MONEY_CASE = 0xCE6FDD6B,
		PICKUP_MONEY_DEP_BAG = 0x20893292,
		PICKUP_MONEY_MED_BAG = 0x14568F28,
		PICKUP_MONEY_PAPER_BAG = 0x711D02A4,
		PICKUP_MONEY_PURSE = 0x1E9A99F8,
		PICKUP_MONEY_SECURITY_CASE = 0xDE78F17E,
		PICKUP_MONEY_VARIABLE = 0xFE18F3AF,
		PICKUP_MONEY_WALLET = 0x5DE0AD3E,
		PICKUP_PARACHUTE = 0x6773257D,
		PICKUP_PORTABLE_CRATE_FIXED_INCAR = 0xEE0E26F3,
		PICKUP_PORTABLE_CRATE_FIXED_INCAR_SMALL = 0xA7EA40CE,
		PICKUP_PORTABLE_CRATE_FIXED_INCAR_WITH_PASSENGERS = 0xA04E8B0D,
		PICKUP_PORTABLE_CRATE_UNFIXED = 0x6E717A95,
		PICKUP_PORTABLE_CRATE_UNFIXED_INAIRVEHICLE_WITH_PASSENGERS = 0x90EFDF3B,
		PICKUP_PORTABLE_CRATE_UNFIXED_INCAR = 0x4B5259BE,
		PICKUP_PORTABLE_CRATE_UNFIXED_INCAR_SMALL = 0xC3CD8B31,
		PICKUP_PORTABLE_CRATE_UNFIXED_INCAR_WITH_PASSENGERS = 0x4C35269,
		PICKUP_PORTABLE_CRATE_UNFIXED_LOW_GLOW = 0x94FA0B5E,
		PICKUP_PORTABLE_DLC_VEHICLE_PACKAGE = 0x31EA45C9,
		PICKUP_PORTABLE_PACKAGE = 0x80AB931C,
		PICKUP_SUBMARINE = 0xE7CF07CC,
		PICKUP_VEHICLE_ARMOUR_STANDARD = 0x4316CC09,
		PICKUP_VEHICLE_CUSTOM_SCRIPT = 0xA5B8CAA9,
		PICKUP_VEHICLE_CUSTOM_SCRIPT_LOW_GLOW = 0x41D2CF56,
		PICKUP_VEHICLE_CUSTOM_SCRIPT_NO_ROTATE = 0x4F92184,
		PICKUP_VEHICLE_HEALTH_STANDARD = 0x98D79EF,
		PICKUP_VEHICLE_HEALTH_STANDARD_LOW_GLOW = 0xFDEE8368,
		PICKUP_VEHICLE_MONEY_VARIABLE = 0x65948212,
		PICKUP_VEHICLE_WEAPON_APPISTOL = 0xCC8B3905,
		PICKUP_VEHICLE_WEAPON_ASSAULTSMG = 0x68605A36,
		PICKUP_VEHICLE_WEAPON_COMBATPISTOL = 0xD0AACEF7,
		PICKUP_VEHICLE_WEAPON_GRENADE = 0xA717F898,
		PICKUP_VEHICLE_WEAPON_MICROSMG = 0xB86AEE5B,
		PICKUP_VEHICLE_WEAPON_MOLOTOV = 0x84D676D4,
		PICKUP_VEHICLE_WEAPON_PISTOL = 0xA54AE7B7,
		PICKUP_VEHICLE_WEAPON_PISTOL50 = 0xD3A39366,
		PICKUP_VEHICLE_WEAPON_SAWNOFF = 0x2E071B5A,
		PICKUP_VEHICLE_WEAPON_SMG = 0xCC7CCD1B,
		PICKUP_VEHICLE_WEAPON_SMOKEGRENADE = 0x65A7D8E9,
		PICKUP_VEHICLE_WEAPON_STICKYBOMB = 0x2C804FE3,
		PICKUP_WEAPON_ADVANCEDRIFLE = 0xB2B5325E,
		PICKUP_WEAPON_APPISTOL = 0x3B662889,
		PICKUP_WEAPON_ASSAULTRIFLE = 0xF33C83B0,
		PICKUP_WEAPON_ASSAULTRIFLE_MK2 = 0x8187206F,
		PICKUP_WEAPON_ASSAULTSHOTGUN = 0x9299C95B,
		PICKUP_WEAPON_ASSAULTSMG = 0x741C684A,
		PICKUP_WEAPON_AUTOSHOTGUN = 0xBCC5C1F2,
		PICKUP_WEAPON_BAT = 0x81EE601E,
		PICKUP_WEAPON_BATTLEAXE = 0x977C0F2,
		PICKUP_WEAPON_BOTTLE = 0xFA51ABF5,
		PICKUP_WEAPON_BULLPUPRIFLE = 0x815D66E8,
		PICKUP_WEAPON_BULLPUPRIFLE_MK2 = 0x8C0FCB13,
		PICKUP_WEAPON_BULLPUPSHOTGUN = 0x6E4E65C2,
		PICKUP_WEAPON_CARBINERIFLE = 0xDF711959,
		PICKUP_WEAPON_CARBINERIFLE_MK2 = 0xBDD874BC,
		PICKUP_WEAPON_COMBATMG = 0xB2930A14,
		PICKUP_WEAPON_COMBATMG_MK2 = 0xA91FDC8B,
		PICKUP_WEAPON_COMBATPDW = 0x789576E2,
		PICKUP_WEAPON_COMBATPISTOL = 0x8967B4F3,
		PICKUP_WEAPON_COMPACTLAUNCHER = 0xF0EA0639,
		PICKUP_WEAPON_COMPACTRIFLE = 0xFE73AB5,
		PICKUP_WEAPON_CROWBAR = 0x872DC888,
		PICKUP_WEAPON_DAGGER = 0xBFEE6C3B,
		PICKUP_WEAPON_DBSHOTGUN = 0xF9E2DF1F,
		PICKUP_WEAPON_DOUBLEACTION = 0x3B0F70A7,
		PICKUP_WEAPON_FIREWORK = 0x22B15640,
		PICKUP_WEAPON_FLAREGUN = 0xBD4DE242,
		PICKUP_WEAPON_FLASHLIGHT = 0xBDB6FFA5,
		PICKUP_WEAPON_GOLFCLUB = 0x88EAACA7,
		PICKUP_WEAPON_GRENADE = 0x5E0683A1,
		PICKUP_WEAPON_GRENADELAUNCHER = 0x2E764125,
		PICKUP_WEAPON_GUSENBERG = 0x5307A4EC,
		PICKUP_WEAPON_HAMMER = 0x295691A9,
		PICKUP_WEAPON_HATCHET = 0x4E301CD0,
		PICKUP_WEAPON_HEAVYPISTOL = 0x9CF13918,
		PICKUP_WEAPON_HEAVYSHOTGUN = 0xBED46EC5,
		PICKUP_WEAPON_HEAVYSNIPER = 0x693583AD,
		PICKUP_WEAPON_HEAVYSNIPER_MK2 = 0xFF0A8297,
		PICKUP_WEAPON_HOMINGLAUNCHER = 0xC01EB678,
		PICKUP_WEAPON_KNIFE = 0x278D8734,
		PICKUP_WEAPON_KNUCKLE = 0xFD9CAEDE,
		PICKUP_WEAPON_MACHETE = 0xD8257ABF,
		PICKUP_WEAPON_MACHINEPISTOL = 0xF5C5DADC,
		PICKUP_WEAPON_MARKSMANPISTOL = 0x8ADDEC75,
		PICKUP_WEAPON_MARKSMANRIFLE = 0x79284A9,
		PICKUP_WEAPON_MARKSMANRIFLE_MK2 = 0x9F55D149,
		PICKUP_WEAPON_MG = 0x85CAA9B1,
		PICKUP_WEAPON_MICROSMG = 0x1D9588D3,
		PICKUP_WEAPON_MINIGUN = 0x2F36B434,
		PICKUP_WEAPON_MINISMG = 0xD3722A5B,
		PICKUP_WEAPON_MOLOTOV = 0x2DD30479,
		PICKUP_WEAPON_MUSKET = 0x763F7121,
		PICKUP_WEAPON_NIGHTSTICK = 0x5EA16D74,
		PICKUP_WEAPON_PETROLCAN = 0xC69DE3FF,
		PICKUP_WEAPON_PIPEBOMB = 0xAF692CA9,
		PICKUP_WEAPON_PISTOL = 0xF9AFB48F,
		PICKUP_WEAPON_PISTOL_MK2 = 0x499A096A,
		PICKUP_WEAPON_PISTOL50 = 0x6C5B941A,
		PICKUP_WEAPON_POOLCUE = 0x93EBB26,
		PICKUP_WEAPON_PROXMINE = 0x624F7213,
		PICKUP_WEAPON_PUMPSHOTGUN = 0xA9355DCD,
		PICKUP_WEAPON_PUMPSHOTGUN_MK2 = 0x5DB6C18A,
		PICKUP_WEAPON_RAILGUN = 0xE46E11B4,
		PICKUP_WEAPON_REVOLVER = 0x614BFCAC,
		PICKUP_WEAPON_REVOLVER_MK2 = 0x6D60976C,
		PICKUP_WEAPON_RPG = 0x4D36C349,
		PICKUP_WEAPON_SAWNOFFSHOTGUN = 0x96B412A3,
		PICKUP_WEAPON_SMG = 0x3A4C2AD2,
		PICKUP_WEAPON_SMG_MK2 = 0xEF2B7390,
		PICKUP_WEAPON_SMOKEGRENADE = 0x1CD604C7,
		PICKUP_WEAPON_SNIPERRIFLE = 0xFE2A352C,
		PICKUP_WEAPON_SNSPISTOL = 0xC5B72713,
		PICKUP_WEAPON_SNSPISTOL_MK2 = 0x3DE942BD,
		PICKUP_WEAPON_SPECIALCARBINE = 0x968339D,
		PICKUP_WEAPON_SPECIALCARBINE_MK2 = 0x5A26FE0,
		PICKUP_WEAPON_STICKYBOMB = 0x7C119D58,
		PICKUP_WEAPON_STONE_HATCHET = 0xCC90A373,
		PICKUP_WEAPON_STUNGUN = 0xFD16169E,
		PICKUP_WEAPON_SWITCHBLADE = 0xDDE4181A,
		PICKUP_WEAPON_VINTAGEPISTOL = 0xEBF89D5F,
		PICKUP_WEAPON_WRENCH = 0xE5121369,
	}

	const enum Props {
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Hats
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Hats
		 */
		HATS = 0,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Glasses
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Glasses
		 */
		GLASSES = 1,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Ears
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Ears
		 */
		EARS = 2,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Watches
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Watches
		 */
		WATCHES = 6,
		/**
		 * Male: https://wiki.rage.mp/index.php?title=Male_Bracelets
		 *
		 * Female: https://wiki.rage.mp/index.php?title=Female_Bracelets
		 */
		BRACELETS = 7
	}

	const enum ScreenshotType {
		JPG = 0,
		PNG = 1,
		BMP = 2
	}

	const enum VehicleBones {
		CHASSIS = 'chassis',
		CHASSIS_LOWLOD = 'chassis_lowlod',
		CHASSIS_DUMMY = 'chassis_dummy',
		SEAT_DSIDE_F = 'seat_dside_f',
		SEAT_DSIDE_R = 'seat_dside_r',
		SEAT_DSIDE_R1 = 'seat_dside_r1',
		SEAT_DSIDE_R2 = 'seat_dside_r2',
		SEAT_DSIDE_R3 = 'seat_dside_r3',
		SEAT_DSIDE_R4 = 'seat_dside_r4',
		SEAT_DSIDE_R5 = 'seat_dside_r5',
		SEAT_DSIDE_R6 = 'seat_dside_r6',
		SEAT_DSIDE_R7 = 'seat_dside_r7',
		SEAT_PSIDE_F = 'seat_pside_f',
		SEAT_PSIDE_R = 'seat_pside_r',
		SEAT_PSIDE_R1 = 'seat_pside_r1',
		SEAT_PSIDE_R2 = 'seat_pside_r2',
		SEAT_PSIDE_R3 = 'seat_pside_r3',
		SEAT_PSIDE_R4 = 'seat_pside_r4',
		SEAT_PSIDE_R5 = 'seat_pside_r5',
		SEAT_PSIDE_R6 = 'seat_pside_r6',
		SEAT_PSIDE_R7 = 'seat_pside_r7',
		WINDOW_LF1 = 'window_lf1',
		WINDOW_LF2 = 'window_lf2',
		WINDOW_LF3 = 'window_lf3',
		WINDOW_RF1 = 'window_rf1',
		WINDOW_RF2 = 'window_rf2',
		WINDOW_RF3 = 'window_rf3',
		WINDOW_LR1 = 'window_lr1',
		WINDOW_LR2 = 'window_lr2',
		WINDOW_LR3 = 'window_lr3',
		WINDOW_RR1 = 'window_rr1',
		WINDOW_RR2 = 'window_rr2',
		WINDOW_RR3 = 'window_rr3',
		DOOR_DSIDE_F = 'door_dside_f',
		DOOR_DSIDE_R = 'door_dside_r',
		DOOR_PSIDE_F = 'door_pside_f',
		DOOR_PSIDE_R = 'door_pside_r',
		HANDLE_DSIDE_F = 'handle_dside_f',
		HANDLE_DSIDE_R = 'handle_dside_r',
		HANDLE_PSIDE_F = 'handle_pside_f',
		HANDLE_PSIDE_R = 'handle_pside_r',
		WHEEL_LF = 'wheel_lf',
		WHEEL_RF = 'wheel_rf',
		WHEEL_LM1 = 'wheel_lm1',
		WHEEL_RM1 = 'wheel_rm1',
		WHEEL_LM2 = 'wheel_lm2',
		WHEEL_RM2 = 'wheel_rm2',
		WHEEL_LM3 = 'wheel_lm3',
		WHEEL_RM3 = 'wheel_rm3',
		WHEEL_LR = 'wheel_lr',
		WHEEL_RR = 'wheel_rr',
		SUSPENSION_LF = 'suspension_lf',
		SUSPENSION_RF = 'suspension_rf',
		SUSPENSION_LM = 'suspension_lm',
		SUSPENSION_RM = 'suspension_rm',
		SUSPENSION_LR = 'suspension_lr',
		SUSPENSION_RR = 'suspension_rr',
		SPRING_RF = 'spring_rf',
		SPRING_LF = 'spring_lf',
		SPRING_RR = 'spring_rr',
		SPRING_LR = 'spring_lr',
		TRANSMISSION_F = 'transmission_f',
		TRANSMISSION_M = 'transmission_m',
		TRANSMISSION_R = 'transmission_r',
		HUB_LF = 'hub_lf',
		HUB_RF = 'hub_rf',
		HUB_LM1 = 'hub_lm1',
		HUB_RM1 = 'hub_rm1',
		HUB_LM2 = 'hub_lm2',
		HUB_RM2 = 'hub_rm2',
		HUB_LM3 = 'hub_lm3',
		HUB_RM3 = 'hub_rm3',
		HUB_LR = 'hub_lr',
		HUB_RR = 'hub_rr',
		WINDSCREEN = 'windscreen',
		WINDSCREEN_R = 'windscreen_r',
		WINDOW_LF = 'window_lf',
		WINDOW_RF = 'window_rf',
		WINDOW_LR = 'window_lr',
		WINDOW_RR = 'window_rr',
		WINDOW_LM = 'window_lm',
		WINDOW_RM = 'window_rm',
		BODYSHELL = 'bodyshell',
		BUMPER_F = 'bumper_f',
		BUMPER_R = 'bumper_r',
		WING_RF = 'wing_rf',
		WING_LF = 'wing_lf',
		BONNET = 'bonnet',
		BOOT = 'boot',
		EXHAUST = 'exhaust',
		EXHAUST_2 = 'exhaust_2',
		EXHAUST_3 = 'exhaust_3',
		EXHAUST_4 = 'exhaust_4',
		EXHAUST_5 = 'exhaust_5',
		EXHAUST_6 = 'exhaust_6',
		EXHAUST_7 = 'exhaust_7',
		EXHAUST_8 = 'exhaust_8',
		EXHAUST_9 = 'exhaust_9',
		EXHAUST_10 = 'exhaust_10',
		EXHAUST_11 = 'exhaust_11',
		EXHAUST_12 = 'exhaust_12',
		EXHAUST_13 = 'exhaust_13',
		EXHAUST_14 = 'exhaust_14',
		EXHAUST_15 = 'exhaust_15',
		EXHAUST_16 = 'exhaust_16',
		ENGINE = 'engine',
		OVERHEAT = 'overheat',
		OVERHEAT_2 = 'overheat_2',
		PETROLCAP = 'petrolcap',
		PETROLTANK = 'petroltank',
		PETROLTANK_L = 'petroltank_l',
		PETROLTANK_R = 'petroltank_r',
		STEERING = 'steering',
		HBGRIP_L = 'hbgrip_l',
		HBGRIP_R = 'hbgrip_r',
		HEADLIGHT_L = 'headlight_l',
		HEADLIGHT_R = 'headlight_r',
		TAILLIGHT_L = 'taillight_l',
		TAILLIGHT_R = 'taillight_r',
		INDICATOR_LF = 'indicator_lf',
		INDICATOR_RF = 'indicator_rf',
		INDICATOR_LR = 'indicator_lr',
		INDICATOR_RR = 'indicator_rr',
		BRAKELIGHT_L = 'brakelight_l',
		BRAKELIGHT_R = 'brakelight_r',
		BRAKELIGHT_M = 'brakelight_m',
		REVERSINGLIGHT_L = 'reversinglight_l',
		REVERSINGLIGHT_R = 'reversinglight_r',
		EXTRALIGHT_1 = 'extralight_1',
		EXTRALIGHT_2 = 'extralight_2',
		EXTRALIGHT_3 = 'extralight_3',
		EXTRALIGHT_4 = 'extralight_4',
		NUMBERPLATE = 'numberplate',
		INTERIORLIGHT = 'interiorlight',
		SIREN1 = 'siren1',
		SIREN2 = 'siren2',
		SIREN3 = 'siren3',
		SIREN4 = 'siren4',
		SIREN5 = 'siren5',
		SIREN6 = 'siren6',
		SIREN7 = 'siren7',
		SIREN8 = 'siren8',
		SIREN9 = 'siren9',
		SIREN10 = 'siren10',
		SIREN11 = 'siren11',
		SIREN12 = 'siren12',
		SIREN13 = 'siren13',
		SIREN14 = 'siren14',
		SIREN15 = 'siren15',
		SIREN16 = 'siren16',
		SIREN17 = 'siren17',
		SIREN18 = 'siren18',
		SIREN19 = 'siren19',
		SIREN20 = 'siren20',
		SIREN_GLASS1 = 'siren_glass1',
		SIREN_GLASS2 = 'siren_glass2',
		SIREN_GLASS3 = 'siren_glass3',
		SIREN_GLASS4 = 'siren_glass4',
		SIREN_GLASS5 = 'siren_glass5',
		SIREN_GLASS6 = 'siren_glass6',
		SIREN_GLASS7 = 'siren_glass7',
		SIREN_GLASS8 = 'siren_glass8',
		SIREN_GLASS9 = 'siren_glass9',
		SIREN_GLASS10 = 'siren_glass10',
		SIREN_GLASS11 = 'siren_glass11',
		SIREN_GLASS12 = 'siren_glass12',
		SIREN_GLASS13 = 'siren_glass13',
		SIREN_GLASS14 = 'siren_glass14',
		SIREN_GLASS15 = 'siren_glass15',
		SIREN_GLASS16 = 'siren_glass16',
		SIREN_GLASS17 = 'siren_glass17',
		SIREN_GLASS18 = 'siren_glass18',
		SIREN_GLASS19 = 'siren_glass19',
		SIREN_GLASS20 = 'siren_glass20',
		SPOILER = 'spoiler',
		STRUTS = 'struts',
		MISC_A = 'misc_a',
		MISC_B = 'misc_b',
		MISC_C = 'misc_c',
		MISC_D = 'misc_d',
		MISC_E = 'misc_e',
		MISC_F = 'misc_f',
		MISC_G = 'misc_g',
		MISC_H = 'misc_h',
		MISC_I = 'misc_i',
		MISC_J = 'misc_j',
		MISC_K = 'misc_k',
		MISC_L = 'misc_l',
		MISC_M = 'misc_m',
		MISC_N = 'misc_n',
		MISC_O = 'misc_o',
		MISC_P = 'misc_p',
		MISC_Q = 'misc_q',
		MISC_R = 'misc_r',
		MISC_S = 'misc_s',
		MISC_T = 'misc_t',
		MISC_U = 'misc_u',
		MISC_V = 'misc_v',
		MISC_W = 'misc_w',
		MISC_X = 'misc_x',
		MISC_Y = 'misc_y',
		MISC_Z = 'misc_z',
		MISC_1 = 'misc_1',
		MISC_2 = 'misc_2',
		WEAPON_1A = 'weapon_1a',
		WEAPON_1B = 'weapon_1b',
		WEAPON_1C = 'weapon_1c',
		WEAPON_1D = 'weapon_1d',
		WEAPON_1A_ROT = 'weapon_1a_rot',
		WEAPON_1B_ROT = 'weapon_1b_rot',
		WEAPON_1C_ROT = 'weapon_1c_rot',
		WEAPON_1D_ROT = 'weapon_1d_rot',
		WEAPON_2A = 'weapon_2a',
		WEAPON_2B = 'weapon_2b',
		WEAPON_2C = 'weapon_2c',
		WEAPON_2D = 'weapon_2d',
		WEAPON_2A_ROT = 'weapon_2a_rot',
		WEAPON_2B_ROT = 'weapon_2b_rot',
		WEAPON_2C_ROT = 'weapon_2c_rot',
		WEAPON_2D_ROT = 'weapon_2d_rot',
		WEAPON_3A = 'weapon_3a',
		WEAPON_3B = 'weapon_3b',
		WEAPON_3C = 'weapon_3c',
		WEAPON_3D = 'weapon_3d',
		WEAPON_3A_ROT = 'weapon_3a_rot',
		WEAPON_3B_ROT = 'weapon_3b_rot',
		WEAPON_3C_ROT = 'weapon_3c_rot',
		WEAPON_3D_ROT = 'weapon_3d_rot',
		WEAPON_4A = 'weapon_4a',
		WEAPON_4B = 'weapon_4b',
		WEAPON_4C = 'weapon_4c',
		WEAPON_4D = 'weapon_4d',
		WEAPON_4A_ROT = 'weapon_4a_rot',
		WEAPON_4B_ROT = 'weapon_4b_rot',
		WEAPON_4C_ROT = 'weapon_4c_rot',
		WEAPON_4D_ROT = 'weapon_4d_rot',
		TURRET_1BASE = 'turret_1base',
		TURRET_1BARREL = 'turret_1barrel',
		TURRET_2BASE = 'turret_2base',
		TURRET_2BARREL = 'turret_2barrel',
		TURRET_3BASE = 'turret_3base',
		TURRET_3BARREL = 'turret_3barrel',
		AMMOBELT = 'ammobelt',
		SEARCHLIGHT_BASE = 'searchlight_base',
		SEARCHLIGHT_LIGHT = 'searchlight_light',
		ATTACH_FEMALE = 'attach_female',
		ROOF = 'roof',
		ROOF2 = 'roof2',
		SOFT_1 = 'soft_1',
		SOFT_2 = 'soft_2',
		SOFT_3 = 'soft_3',
		SOFT_4 = 'soft_4',
		SOFT_5 = 'soft_5',
		SOFT_6 = 'soft_6',
		SOFT_7 = 'soft_7',
		SOFT_8 = 'soft_8',
		SOFT_9 = 'soft_9',
		SOFT_10 = 'soft_10',
		SOFT_11 = 'soft_11',
		SOFT_12 = 'soft_12',
		SOFT_13 = 'soft_13',
		FORKS = 'forks',
		MAST = 'mast',
		CARRIAGE = 'carriage',
		FORK_L = 'fork_l',
		FORK_R = 'fork_r',
		FORKS_ATTACH = 'forks_attach',
		FRAME_1 = 'frame_1',
		FRAME_2 = 'frame_2',
		FRAME_3 = 'frame_3',
		FRAME_PICKUP_1 = 'frame_pickup_1',
		FRAME_PICKUP_2 = 'frame_pickup_2',
		FRAME_PICKUP_3 = 'frame_pickup_3',
		FRAME_PICKUP_4 = 'frame_pickup_4',
		FREIGHT_CONT = 'freight_cont',
		FREIGHT_BOGEY = 'freight_bogey',
		FREIGHTGRAIN_SLIDEDOOR = 'freightgrain_slidedoor',
		DOOR_HATCH_R = 'door_hatch_r',
		DOOR_HATCH_L = 'door_hatch_l',
		TOW_ARM = 'tow_arm',
		TOW_MOUNT_A = 'tow_mount_a',
		TOW_MOUNT_B = 'tow_mount_b',
		TIPPER = 'tipper',
		COMBINE_REEL = 'combine_reel',
		COMBINE_AUGER = 'combine_auger',
		SLIPSTREAM_L = 'slipstream_l',
		SLIPSTREAM_R = 'slipstream_r',
		ARM_1 = 'arm_1',
		ARM_2 = 'arm_2',
		ARM_3 = 'arm_3',
		ARM_4 = 'arm_4',
		SCOOP = 'scoop',
		BOOM = 'boom',
		STICK = 'stick',
		BUCKET = 'bucket',
		SHOVEL_2 = 'shovel_2',
		SHOVEL_3 = 'shovel_3',
		LOOKAT_UPPRPISTON_HEAD = 'Lookat_UpprPiston_head',
		LOOKAT_LOWRPISTON_BOOM = 'Lookat_LowrPiston_boom',
		BOOM_DRIVER = 'Boom_Driver',
		CUTTER_DRIVER = 'cutter_driver',
		VEHICLE_BLOCKER = 'vehicle_blocker',
		EXTRA_1 = 'extra_1',
		EXTRA_2 = 'extra_2',
		EXTRA_3 = 'extra_3',
		EXTRA_4 = 'extra_4',
		EXTRA_5 = 'extra_5',
		EXTRA_6 = 'extra_6',
		EXTRA_7 = 'extra_7',
		EXTRA_8 = 'extra_8',
		EXTRA_9 = 'extra_9',
		EXTRA_TEN = 'extra_ten',
		EXTRA_11 = 'extra_11',
		EXTRA_12 = 'extra_12',
		BREAK_EXTRA_1 = 'break_extra_1',
		BREAK_EXTRA_2 = 'break_extra_2',
		BREAK_EXTRA_3 = 'break_extra_3',
		BREAK_EXTRA_4 = 'break_extra_4',
		BREAK_EXTRA_5 = 'break_extra_5',
		BREAK_EXTRA_6 = 'break_extra_6',
		BREAK_EXTRA_7 = 'break_extra_7',
		BREAK_EXTRA_8 = 'break_extra_8',
		BREAK_EXTRA_9 = 'break_extra_9',
		BREAK_EXTRA_10 = 'break_extra_10',
		MOD_COL_1 = 'mod_col_1',
		MOD_COL_2 = 'mod_col_2',
		MOD_COL_3 = 'mod_col_3',
		MOD_COL_4 = 'mod_col_4',
		MOD_COL_5 = 'mod_col_5',
		HANDLEBARS = 'handlebars',
		FORKS_U = 'forks_u',
		FORKS_L = 'forks_l',
		WHEEL_F = 'wheel_f',
		SWINGARM = 'swingarm',
		WHEEL_R = 'wheel_r',
		CRANK = 'crank',
		PEDAL_R = 'pedal_r',
		PEDAL_L = 'pedal_l',
		STATIC_PROP = 'static_prop',
		MOVING_PROP = 'moving_prop',
		STATIC_PROP2 = 'static_prop2',
		MOVING_PROP2 = 'moving_prop2',
		RUDDER = 'rudder',
		RUDDER2 = 'rudder2',
		WHEEL_RF1_DUMMY = 'wheel_rf1_dummy',
		WHEEL_RF2_DUMMY = 'wheel_rf2_dummy',
		WHEEL_RF3_DUMMY = 'wheel_rf3_dummy',
		WHEEL_RB1_DUMMY = 'wheel_rb1_dummy',
		WHEEL_RB2_DUMMY = 'wheel_rb2_dummy',
		WHEEL_RB3_DUMMY = 'wheel_rb3_dummy',
		WHEEL_LF1_DUMMY = 'wheel_lf1_dummy',
		WHEEL_LF2_DUMMY = 'wheel_lf2_dummy',
		WHEEL_LF3_DUMMY = 'wheel_lf3_dummy',
		WHEEL_LB1_DUMMY = 'wheel_lb1_dummy',
		WHEEL_LB2_DUMMY = 'wheel_lb2_dummy',
		WHEEL_LB3_DUMMY = 'wheel_lb3_dummy',
		BOGIE_FRONT = 'bogie_front',
		BOGIE_REAR = 'bogie_rear',
		ROTOR_MAIN = 'rotor_main',
		ROTOR_REAR = 'rotor_rear',
		ROTOR_MAIN_2 = 'rotor_main_2',
		ROTOR_REAR_2 = 'rotor_rear_2',
		ELEVATORS = 'elevators',
		TAIL = 'tail',
		OUTRIGGERS_L = 'outriggers_l',
		OUTRIGGERS_R = 'outriggers_r',
		ROPE_ATTACH_A = 'rope_attach_a',
		ROPE_ATTACH_B = 'rope_attach_b',
		PROP_1 = 'prop_1',
		PROP_2 = 'prop_2',
		ELEVATOR_L = 'elevator_l',
		ELEVATOR_R = 'elevator_r',
		RUDDER_L = 'rudder_l',
		RUDDER_R = 'rudder_r',
		PROP_3 = 'prop_3',
		PROP_4 = 'prop_4',
		PROP_5 = 'prop_5',
		PROP_6 = 'prop_6',
		PROP_7 = 'prop_7',
		PROP_8 = 'prop_8',
		RUDDER_2 = 'rudder_2',
		AILERON_L = 'aileron_l',
		AILERON_R = 'aileron_r',
		AIRBRAKE_L = 'airbrake_l',
		AIRBRAKE_R = 'airbrake_r',
		WING_L = 'wing_l',
		WING_R = 'wing_r',
		WING_LR = 'wing_lr',
		WING_RR = 'wing_rr',
		ENGINE_L = 'engine_l',
		ENGINE_R = 'engine_r',
		NOZZLES_F = 'nozzles_f',
		NOZZLES_R = 'nozzles_r',
		AFTERBURNER = 'afterburner',
		WINGTIP_1 = 'wingtip_1',
		WINGTIP_2 = 'wingtip_2',
		GEAR_DOOR_FL = 'gear_door_fl',
		GEAR_DOOR_FR = 'gear_door_fr',
		GEAR_DOOR_RL1 = 'gear_door_rl1',
		GEAR_DOOR_RR1 = 'gear_door_rr1',
		GEAR_DOOR_RL2 = 'gear_door_rl2',
		GEAR_DOOR_RR2 = 'gear_door_rr2',
		GEAR_DOOR_RML = 'gear_door_rml',
		GEAR_DOOR_RMR = 'gear_door_rmr',
		GEAR_F = 'gear_f',
		GEAR_RL = 'gear_rl',
		GEAR_LM1 = 'gear_lm1',
		GEAR_RR = 'gear_rr',
		GEAR_RM1 = 'gear_rm1',
		GEAR_RM = 'gear_rm',
		PROP_LEFT = 'prop_left',
		PROP_RIGHT = 'prop_right',
		LEGS = 'legs',
		ATTACH_MALE = 'attach_male',
		DRAFT_ANIMAL_ATTACH_LR = 'draft_animal_attach_lr',
		DRAFT_ANIMAL_ATTACH_RR = 'draft_animal_attach_rr',
		DRAFT_ANIMAL_ATTACH_LM = 'draft_animal_attach_lm',
		DRAFT_ANIMAL_ATTACH_RM = 'draft_animal_attach_rm',
		DRAFT_ANIMAL_ATTACH_LF = 'draft_animal_attach_lf',
		DRAFT_ANIMAL_ATTACH_RF = 'draft_animal_attach_rf',
		WHEELCOVER_L = 'wheelcover_l',
		WHEELCOVER_R = 'wheelcover_r',
		BARRACKS = 'barracks',
		PONTOON_L = 'pontoon_l',
		PONTOON_R = 'pontoon_r',
		NO_PED_COL_STEP_L = 'no_ped_col_step_l',
		NO_PED_COL_STRUT_1_L = 'no_ped_col_strut_1_l',
		NO_PED_COL_STRUT_2_L = 'no_ped_col_strut_2_l',
		NO_PED_COL_STEP_R = 'no_ped_col_step_r',
		NO_PED_COL_STRUT_1_R = 'no_ped_col_strut_1_r',
		NO_PED_COL_STRUT_2_R = 'no_ped_col_strut_2_r',
		LIGHT_COVER = 'light_cover',
		EMISSIVES = 'emissives',
		NEON_L = 'neon_l',
		NEON_R = 'neon_r',
		NEON_F = 'neon_f',
		NEON_B = 'neon_b',
		DASHGLOW = 'dashglow',
		DOORLIGHT_LF = 'doorlight_lf',
		DOORLIGHT_RF = 'doorlight_rf',
		DOORLIGHT_LR = 'doorlight_lr',
		DOORLIGHT_RR = 'doorlight_rr',
		UNKNOWN_ID = 'unknown_id',
		DIALS = 'dials',
		ENGINEBLOCK = 'engineblock',
		BOBBLE_HEAD = 'bobble_head',
		BOBBLE_BASE = 'bobble_base',
		BOBBLE_HAND = 'bobble_hand',
		CHASSIS_CONTROL = 'chassis_Control',
	}

	const enum VehicleClasses {
		COMPACTS,
		SEDANS,
		SUVS,
		COUPES,
		MUSCLE,
		SPORTS_CLASSIC,
		SPORTS,
		SUPER,
		MOTORCYCLES,
		OFF_ROAD,
		INDUSTRIAl,
		UTILITY,
		VANS,
		CYCLES,
		BOATS,
		HELICOPTERS,
		PLANES,
		SERVICE,
		EMERGENCY,
		MILITARY,
		COMMERCIAl,
		TRAINS
	}

	const enum VehicleFlags {
		PRESSINGHORN = 1,
		SHOOTING = 2,
		SIRENACTIVE = 4,
		VEHICLEDEAD = 8,
		AIMING = 16,
		DRIVER = 32,
		HASAIMDATA = 64,
		BURNOUT = 128,
		EXITINGFVEHICLE = 256,
		PLAYERDEAD = 512
	}

	const enum VehicleMods {
		SPOILERS = 0,
		FRONT_BUMPER = 1,
		REAR_BUMPER = 2,
		SIDE_SKIRT = 3,
		EXHAUST = 4,
		FRAME = 5,
		GRILLE = 6,
		HOOD = 7,
		FENDER = 8,
		RIGHT_FENDER = 9,
		ROOF = 10,
		ENGINE = 11,
		BRAKES = 12,
		TRANSMISSION = 13,
		/** 0 to 51 */
		HORNS = 14,
		SUSPENSION = 15,
		ARMOR = 16,
		TURBO = 18,
		XENON = 22,
		FRONT_WHEELS = 23,
		UTIL_SHADOW_SILVER = 20,
		/** Only for Motorcycles */
		BACK_WHEELS = 24,
		PLATE_HOLDERS = 25,
		TRIM_DESIGN = 27,
		ORNAMENTS = 28,
		DIAL_DESIGN = 30,
		STEERING_WHEEL = 33,
		SHIFT_LEVER = 34,
		PLAQUES = 35,
		HYDRAULICS = 38,
		BOOST = 40,
		WINDOW_TINT = 55,
		LIVERY = 48,
		PLATE = 62,
		/** 0 to 74 */
		COLOUR_1 = 66,
		/** 0 to 74 */
		COLOUR_2 = 67,
	}

	/**
	 * Wikipedia: [https://wiki.rage.mp/index.php?title=Weather](https://wiki.rage.mp/index.php?title=Weather)
	 */
	const enum Weather {
		/**
		 * ![EXTRASUNNY](https://wiki.rage.mp/images/8/8b/280px-weather_0_day.png)
		 */
		EXTRASUNNY = 0,
		/**
		 * ![CLEAR](https://wiki.rage.mp/images/d/d3/280px-weather_1_day.png)
		 */
		CLEAR = 1,
		/**
		 * ![CLOUDS](https://wiki.rage.mp/images/8/81/280px-weather_2_day.png)
		 */
		CLOUDS = 2,
		/**
		 * ![SMOG](https://wiki.rage.mp/images/4/4b/280px-weather_3_day.png)
		 */
		SMOG = 3,
		/**
		 * ![FOGGY](https://wiki.rage.mp/images/5/51/280px-weather_4_day.png)
		 */
		FOGGY = 4,
		/**
		 * ![OVERCAST](https://wiki.rage.mp/images/e/ed/280px-weather_5_day.png)
		 */
		OVERCAST = 5,
		/**
		 * ![RAIN](https://wiki.rage.mp/images/8/8e/280px-weather_6_day.png)
		 */
		RAIN = 6,
		/**
		 * ![THUNDER](https://wiki.rage.mp/images/4/42/280px-weather_7_day.png)
		 */
		THUNDER = 7,
		/**
		 * ![CLEARING](https://wiki.rage.mp/images/7/75/280px-weather_8_day.png)
		 */
		CLEARING = 8,
		/**
		 * ![NEUTRAL](https://wiki.rage.mp/images/c/c8/280px-weather_9_day.png)
		 */
		NEUTRAL = 9,
		/**
		 * ![SNOW](https://wiki.rage.mp/images/3/3d/280px-weather_10_day.png)
		 */
		SNOW = 10,
		/**
		 * ![BLIZZARD](https://wiki.rage.mp/images/0/06/280px-weather_11_day.png)
		 */
		BLIZZARD = 11,
		/**
		 * ![SNOWLIGHT](https://wiki.rage.mp/images/a/ad/280px-weather_12_day.png)
		 */
		SNOWLIGHT = 12,
		/**
		 * Set serverside to leave snow on the ground (capital letter)
		 * 
		 * ![XMAS](https://wiki.rage.mp/images/6/65/280px-weather_13_day.png)
		 */
		XMAS = 13,
		/**
		 * ![HALLOWEEN](https://wiki.rage.mp/images/5/5b/280px-weather_14_day.png)
		 */
		HALLOWEEN = 14
	}
}
