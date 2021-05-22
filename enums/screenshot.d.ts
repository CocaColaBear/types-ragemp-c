declare namespace RageEnums.Screenshot {
	/** [https://wiki.rage.mp/index.php?title=Gui.takeScreenshot](https://wiki.rage.mp/index.php?title=Gui.takeScreenshot) */
	const enum Type {
		JPG = 0,
		PNG = 1,
		BMP = 2
	}
}

declare namespace RageEnums {
	export import ScreenshotType = RageEnums.Screenshot.Type;
}
