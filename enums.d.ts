declare namespace RageEnums {
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

	const enum VehicleColorsHex {
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
