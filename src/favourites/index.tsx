import { ExtensionWebExports } from "@moonlight-mod/types";
export const TEST_SETTINGS_SURFACE_ID = 3;

export const patches: ExtensionWebExports["patches"] = [
	{
		find: "Settings proto failed to deserialize (potentially corrupt): ",
		replace: [{
			match: /return null!=\i&&\i in (\i)\?/,
			replacement: (orig, lookupTableVar) =>
				`${lookupTableVar}[${TEST_SETTINGS_SURFACE_ID}]=require("favourites_favourites").CustomUserSettings;${orig}`,
		}, {
			match: /return \i\((\i)[\i],\i\)/,
			replacement: (orig, lookupTableVar) =>
				`${lookupTableVar}[${TEST_SETTINGS_SURFACE_ID}]=require("favourites_favourites").CustomUserSettings;${orig}`,
		}],
	},
	{
		find: "\"Scheduling save from markDirty\"",
		replace: {
			match: "{await this.loadIfNecessary();let ",
			replacement: (orig: string) =>
				`{if(arguments[0]==="favorites")return require("favourites_favourites").updateFavoritesAsync(arguments);${
					orig.substring(1)
				}`,
		},
	},
];

export const webpackModules: ExtensionWebExports["webpackModules"] = {
	entrypoint: {
		entrypoint: true,
		dependencies: [{ ext: "spacepack", id: "spacepack" }, { ext: "common", id: "stores" }, {
			id: "discord/Dispatcher",
		}],
	},
	favourites: {
		dependencies: [{ ext: "spacepack", id: "spacepack" }],
	},
};
