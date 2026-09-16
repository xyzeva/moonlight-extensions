import { UserSettingsProtoStore } from "@moonlight-mod/wp/common_stores";
import Dispatcher from "@moonlight-mod/wp/discord/Dispatcher";
import spacepack from "@moonlight-mod/wp/spacepack_spacepack";
import { TEST_SETTINGS_SURFACE_ID } from "favourites";
import { rerouteFavoritesOnSettingsStore, testUserSettings, TestUserSettingsActionCreators } from "./favourites";

const logger = moonlight.getLogger("Favourites/entrypoint");

const UserSettingsMigrations = spacepack.findObjectFromKey(
	spacepack.findByCode(".PRELOADED_USER_SETTINGS]:[]")[0].exports,
	"2",
);

Dispatcher.subscribe("CONNECTION_OPEN", async () => {
	Dispatcher.dispatch({
		type: "APEX_EXPERIMENT_OVERRIDE_CREATE",
		experimentName: "2026-08-favorites-server",
		variantId: 1,
	});

	rerouteFavoritesOnSettingsStore();
	await TestUserSettingsActionCreators.loadIfNecessary();
	logger.info("rerouted favorite settings!");
});

Dispatcher.subscribe("USER_SETTINGS_PROTO_UPDATE", rerouteFavoritesOnSettingsStore)
Dispatcher.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", rerouteFavoritesOnSettingsStore)

UserSettingsProtoStore.getFullState()[TEST_SETTINGS_SURFACE_ID] = testUserSettings;
UserSettingsMigrations[TEST_SETTINGS_SURFACE_ID] = [];
