declare namespace RageEnums.Event {
	/** [https://wiki.rage.mp/index.php?title=Client-side_events](https://wiki.rage.mp/index.php?title=Client-side_events) */
	const enum Key {
		/** [https://wiki.rage.mp/index.php?title=BrowserCreated](https://wiki.rage.mp/index.php?title=BrowserCreated) */
		BROWSER_CREATED = "browserCreated",
		/** [https://wiki.rage.mp/index.php?title=BrowserDomReady](https://wiki.rage.mp/index.php?title=BrowserDomReady) */
		BROWSER_DOM_READY = "browserDomReady",
		/** [https://wiki.rage.mp/index.php?title=BrowserLoadingFailed](https://wiki.rage.mp/index.php?title=BrowserLoadingFailed) */
		BROWSER_LOADING_FAILED = "browserLoadingFailed",
		/** [https://wiki.rage.mp/index.php?title=Click](https://wiki.rage.mp/index.php?title=Click) */
		CLICK = "click",
		/** [https://wiki.rage.mp/index.php?title=ConsoleCommand](https://wiki.rage.mp/index.php?title=ConsoleCommand) */
		CONSOLE_COMMAND = "consoleCommand",
		/** [https://wiki.rage.mp/index.php?title=DummyEntityCreated](https://wiki.rage.mp/index.php?title=DummyEntityCreated) */
		DUMMY_ENTITY_CREATED = "dummyEntityCreated",
		/** [https://wiki.rage.mp/index.php?title=DummyEntityDestroyed](https://wiki.rage.mp/index.php?title=DummyEntityDestroyed) */
		DUMMY_ENTITY_DESTROYED = "dummyEntityDestroyed",
		/** [https://wiki.rage.mp/index.php?title=EntityControllerChange](https://wiki.rage.mp/index.php?title=EntityControllerChange) */
		ENTITY_CONTROLLER_CHANGE = "entityControllerChange",
		/** [https://wiki.rage.mp/index.php?title=EntityCreated](https://wiki.rage.mp/index.php?title=EntityCreated) */
		ENTITY_CREATED = "entityCreated",
		/** [https://wiki.rage.mp/index.php?title=EntityStreamIn](https://wiki.rage.mp/index.php?title=EntityStreamIn) */
		ENTITY_STREAM_IN = "entityStreamIn",
		/** [https://wiki.rage.mp/index.php?title=EntityStreamOut](https://wiki.rage.mp/index.php?title=EntityStreamOut) */
		ENTITY_STREAM_OUT = "entityStreamOut",
		/** [https://wiki.rage.mp/index.php?title=Explosion](https://wiki.rage.mp/index.php?title=Explosion) */
		EXPLOSION = "explosion",
		/** [https://wiki.rage.mp/index.php?title=GuiReady](https://wiki.rage.mp/index.php?title=GuiReady) */
		GUI_READY = "guiReady",
		/** [https://wiki.rage.mp/index.php?title=IncomingDamage](https://wiki.rage.mp/index.php?title=IncomingDamage) */
		INCOMING_DAMAGE = "incomingDamage",
		/** [https://wiki.rage.mp/index.php?title=OutgoingDamage](https://wiki.rage.mp/index.php?title=OutgoingDamage) */
		OUTGOING_DAMAGE = "outgoingDamage",
		/** [https://wiki.rage.mp/index.php?title=PlayerChat](https://wiki.rage.mp/index.php?title=PlayerChat) */
		PLAYER_CHAT = "playerChat",
		/** [https://wiki.rage.mp/index.php?title=PlayerCommand](https://wiki.rage.mp/index.php?title=PlayerCommand) */
		PLAYER_COMMAND = "playerCommand",
		/** [https://wiki.rage.mp/index.php?title=PlayerCreateWaypoint](https://wiki.rage.mp/index.php?title=PlayerCreateWaypoint) */
		PLAYER_CREATE_WAYPOINT = "playerCreateWaypoint",
		/** [https://wiki.rage.mp/index.php?title=PlayerDeath](https://wiki.rage.mp/index.php?title=PlayerDeath) */
		PLAYER_DEATH = "playerDeath",
		/** [https://wiki.rage.mp/index.php?title=PlayerEnterCheckpoint](https://wiki.rage.mp/index.php?title=PlayerEnterCheckpoint) */
		PLAYER_ENTER_CHECKPOINT = "playerEnterCheckpoint",
		/** [https://wiki.rage.mp/index.php?title=PlayerEnterColshape](https://wiki.rage.mp/index.php?title=PlayerEnterColshape) */
		PLAYER_ENTER_COLSHAPE = "playerEnterColshape",
		/** [https://wiki.rage.mp/index.php?title=PlayerEnterVehicle](https://wiki.rage.mp/index.php?title=PlayerEnterVehicle) */
		PLAYER_ENTER_VEHICLE = "playerEnterVehicle",
		/** [https://wiki.rage.mp/index.php?title=PlayerExitCheckpoint](https://wiki.rage.mp/index.php?title=PlayerExitCheckpoint) */
		PLAYER_EXIT_CHECKPOINT = "playerExitCheckpoint",
		/** [https://wiki.rage.mp/index.php?title=PlayerExitColshape](https://wiki.rage.mp/index.php?title=PlayerExitColshape) */
		PLAYER_EXIT_COLSHAPE = "playerExitColshape",
		/** [https://wiki.rage.mp/index.php?title=PlayerJoin](https://wiki.rage.mp/index.php?title=PlayerJoin) */
		PLAYER_JOIN = "playerJoin",
		/** [https://wiki.rage.mp/index.php?title=PlayerLeaveVehicle](https://wiki.rage.mp/index.php?title=PlayerLeaveVehicle) */
		PLAYER_LEAVE_VEHICLE = "playerLeaveVehicle",
		/** [https://wiki.rage.mp/index.php?title=PlayerQuit](https://wiki.rage.mp/index.php?title=PlayerQuit) */
		PLAYER_QUIT = "playerQuit",
		/** [https://wiki.rage.mp/index.php?title=PlayerReachWaypoint](https://wiki.rage.mp/index.php?title=PlayerReachWaypoint) */
		PLAYER_REACH_WAYPOINT = "playerReachWaypoint",
		/** [https://wiki.rage.mp/index.php?title=PlayerReady](https://wiki.rage.mp/index.php?title=PlayerReady) */
		PLAYER_READY = "playerReady",
		/** [https://wiki.rage.mp/index.php?title=PlayerRemoveWaypoint](https://wiki.rage.mp/index.php?title=PlayerRemoveWaypoint) */
		PLAYER_REMOVE_WAYPOINT = "playerRemoveWaypoint",
		/** [https://wiki.rage.mp/index.php?title=PlayerResurrect](https://wiki.rage.mp/index.php?title=PlayerResurrect) */
		PLAYER_RESURRECT = "playerResurrect",
		/** [https://wiki.rage.mp/index.php?title=PlayerRuleTriggered](https://wiki.rage.mp/index.php?title=PlayerRuleTriggered) */
		PLAYER_RULE_TRIGGERED = "playerRuleTriggered",
		/** [https://wiki.rage.mp/index.php?title=PlayerSpawn](https://wiki.rage.mp/index.php?title=PlayerSpawn) */
		PLAYER_SPAWN = "playerSpawn",
		/** [https://wiki.rage.mp/index.php?title=PlayerStartTalking](https://wiki.rage.mp/index.php?title=PlayerStartTalking) */
		PLAYER_START_TALKING = "playerStartTalking",
		/** [https://wiki.rage.mp/index.php?title=PlayerStopTalking](https://wiki.rage.mp/index.php?title=PlayerStopTalking) */
		PLAYER_STOP_TALKING = "playerStopTalking",
		/** [https://wiki.rage.mp/index.php?title=PlayerWeaponShot](https://wiki.rage.mp/index.php?title=PlayerWeaponShot) */
		PLAYER_WEAPON_SHOT = "playerWeaponShot",
		/** [https://wiki.rage.mp/index.php?title=Projectile](https://wiki.rage.mp/index.php?title=Projectile) */
		PROJECTILE = "projectile",
		/** [https://wiki.rage.mp/index.php?title=Render](https://wiki.rage.mp/index.php?title=Render) */
		RENDER = "render",
		/** [https://wiki.rage.mp/index.php?title=VehicleDeath](https://wiki.rage.mp/index.php?title=VehicleDeath) */
		VEHICLE_DEATH = "vehicleDeath"
	}
}

declare namespace RageEnums {
  export import EventKey = RageEnums.Event.Key;
}
