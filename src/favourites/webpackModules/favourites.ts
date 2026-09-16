import { UserSettingsProtoStore } from "@moonlight-mod/wp/common_stores";
import spacepack from "@moonlight-mod/wp/spacepack_spacepack";
import { TEST_SETTINGS_SURFACE_ID } from "favourites";
import { CustomUserSettings, CustomUserSettings_ClientSettings } from "../proto";

const logger = moonlight.getLogger("Favourites");

export const Favorites = spacepack.findObjectFromKeyValuePair(
	spacepack.findByCode(
		"\"unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels\"",
	)[0].exports,
	"typeName",
	"discord_protos.discord_users.v1.PreloadedUserSettings",
).fields.find((f: { name: string }) => f.name === "favorites").T();

const UserSettingsProtoActionCreators =
	spacepack.findObjectFromKey(spacepack.findByCode("\"Scheduling save from markDirty\"")[0].exports, "persistChanges")
		.__proto__.constructor;

const createEmptyEditInfo = spacepack.findFunctionByStrings(
	spacepack.findByCode("\"APPLICATION_SUBSCRIPTION_SUBSECTION\"")[0].exports,
	"timeoutDelay:Number.MIN_SAFE_INTEGER",
) as () => unknown;

export const testUserSettings = {
	ProtoClass: CustomUserSettings,
	proto: CustomUserSettings.create(),
	lazyLoaded: true,
	editInfo: createEmptyEditInfo(),
};

export const rerouteFavoritesOnSettingsStore = () => {
	Object.defineProperty(UserSettingsProtoStore.settings, "favorites", {
		enumerable: false,
		configurable: true,
		get() {
			return testUserSettings.proto.settings?.favorites;
		},
		set() {},
	});
};

export const TestUserSettingsActionCreators = new UserSettingsProtoActionCreators(
	CustomUserSettings,
	TEST_SETTINGS_SURFACE_ID,
);

export const updateFavoritesAsync = (originalArgs: unknown[]) => {
	const originalUpdater = originalArgs[1] as (favorites: unknown) => void | boolean;

	originalArgs[0] = "settings";
	originalArgs[1] = (originalProto: CustomUserSettings_ClientSettings) => {
		originalProto.favorites ??= Favorites.create();
		return originalUpdater(originalProto.favorites);
	};

	logger.info("forwarding favorites update to custom user settings proto");
	return TestUserSettingsActionCreators.updateAsync(...originalArgs);
};

export { CustomUserSettings };
