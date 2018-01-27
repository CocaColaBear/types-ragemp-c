declare namespace RageEnums {
	const enum EventKey {
		entityCreated = "entityCreated",
		entityStreamIn = "entityStreamIn",
		entityStreamOut = "entityStreamOut",
		click = "click",
		playerChat = "playerChat",
		playerCommand = "playerCommand",
		playerDeath = "playerDeath",
		playerEnterCheckpoint = "playerEnterCheckpoint",
		playerEnterColshape = "playerEnterColshape",
		playerExitCheckpoint = "playerExitCheckpoint",
		playerExitColshape = "playerExitColshape",
		playerJoin = "playerJoin",
		playerQuit = "playerQuit",
		playerResurrect = "playerResurrect",
		playerRuleTriggered = "playerRuleTriggered",
		playerSpawn = "playerSpawn",
		playerWeaponShoot = "playerWeaponShoot",
		render = "render",
		vehicleDeath = "vehicleDeath"
	}
	
	const enum HudComponent {
		Hud = 0,
		WantedStars = 1,
		WeaponIcon = 2,
		Cash = 3,
		MpCash = 4,
		MpMessage = 5,
		VehicleName = 6,
		AreaName = 7,
		VehicleClass = 8,
		StreetName = 9,
		HelpText = 10,
		FloatingHelpText1 = 11,
		FloatingHelpText2 = 12,
		CashChange = 13,
		Reticle = 14,
		SubtitleText = 15,
		RadioStations = 16,
		SavingGame = 17,
		GameStream = 18,
		WeaponWheel = 19,
		WeaponWheelStats = 20
	}
}
