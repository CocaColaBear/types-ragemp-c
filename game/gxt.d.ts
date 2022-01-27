/**
 * This is an automatically generated file from https://github.com/CocaColaBear/types-ragemp-c
 */

interface GameGxtLegacy {}

interface GameGxt extends GameGxtLegacy {}

interface GameGxtMp extends GameGxt {
	/**
	 * This function is used to get the value of a GXT entry.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=GXT::get)
	 */
	get(labelNameOrHash: string | integer): void;

	/**
	 * This function is used to get the default value of a GXT entry.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=GXT::getDefault)
	 */
	getDefault(labelNameOrHash: string | integer): void;

	/**
	 * This function is used to reset all changes done to GXT entries.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=GXT::reset)
	 */
	reset(): void;

	/**
	 * This function is used to add new GXT entries or replace existing ones.
	 *
	 * [RAGE:MP Wiki article](https://wiki.rage.mp/index.php?title=GXT::set)
	 */
	set(labelNameOrHash: string | integer, newLabelvalue: string): void;
}
