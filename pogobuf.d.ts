import * as POGOProtos from 'node-pogo-protos-vnext';

/**
 * Pogobuf typings created with <3 by hands.
 */
declare namespace pogobuf {

    /**
     * Pokémon Go RPC client.
     */
    export class Client {
        /**
         * @param {Object} options Client options (see pogobuf wiki for documentation)
         */
        constructor(options?: Object);

         /**
          * Sets the specified client option to the given value.
          * Note that not all options support changes after client initialization.
          * @param {string} option Option name
          * @param {any} value Option value
          */
        setOption(option: string, value: any): void;

        /**
         * Sets the player's latitude and longitude.
         * Note that this does not actually update the player location on the server,
         * it only sets the location to be used in following API calls.
         * To update the location on the server you need to make an API call.
         * @param {number|Object} latitude - The player's latitude, or an object with parameters
         * @param {number} longitude The player's longitude
         * @param {number} accuracy The location accuracy in m (optional) (default value is 0)
         * @param {number} altitude The player's altitude (optional) (default value is 0)
         */
        setPosition(latitude: number | Object, longitude?: number, accuracy?: number, altitude?: number): void;

        /**
         * Performs client initialization and downloads needed settings from the API.
         */
        init(downloadSettings?: boolean): Promise<any>;

        /**
         * Perform client cleanUp. Stop timers and clean tokens
         */
        cleanUp(): void;

        /**
         * Sets batch mode. All further API requests will be held and executed in one RPC call when batchCall() is called.
         */
        batchStart(): Client;

        /**
         * Clears the list of batched requests and aborts batch mode.
         */
        batchClear(): void;

        /**
         * Executes any batched requests.
         */
        batchCall(): Promise<any>;

        /**
         * Gets rate limit info from the latest signature server request, if applicable.
         */
        getSignatureRateInfo(): Object;

        batchAddPlatformRequest(type: POGOProtos.Networking.Platform.PlatformRequestType, 
                                message: any): void;

        // Pokémon Go API methods

        addFortModifier(
            modifierItemID: POGOProtos.Inventory.Item.ItemId,
            fortID: string
        ): Promise<POGOProtos.Networking.Responses.AddFortModifierResponse>;

        catchPokemon(
            encounterID: string | number | Long,
            pokeballItemID: POGOProtos.Inventory.Item.ItemId,
            normalizedReticleSize: number,
            spawnPointID: string,
            hitPokemon: boolean,
            spinModifier: number,
            normalizedHitPosition: number
        ): pogobuf.Client;

        checkAwardedBadges(
        ): pogobuf.Client;

        checkChallenge(
            isDebugRequest?: boolean
        ): pogobuf.Client;

        claimCodename(
            codename: string,
            force?: boolean
        ): pogobuf.Client;

        collectDailyBonus(
        ): Promise<POGOProtos.Networking.Responses.CollectDailyBonusResponse>;

        collectDailyDefenderBonus(
        ): Promise<POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse>;

        diskEncounter(
            encounterID: string | number | Long,
            fortID: string
        ): pogobuf.Client;;

        downloadItemTemplates(
            paginate: boolean,
            pageOffset?: number,
            pageTimestamp?: Long
        ): pogobuf.Client;;

        downloadRemoteConfigVersion(
            platform: POGOProtos.Enums.Platform,
            deviceManufacturer: string,
            deviceModel: string,
            locale: string,
            appVersion: number
        ): pogobuf.Client;;

        downloadSettings(
            hash?: string
        ): pogobuf.Client;

        echo(
        ): Promise<POGOProtos.Networking.Responses.EchoResponse>;

        encounter(
            encounterID: string | number | Long,
            spawnPointID: string
        ): pogobuf.Client;

        encounterTutorialComplete(
            pokemonID: POGOProtos.Enums.PokemonId
        ): pogobuf.Client;

        equipBadge(
            badgeType: POGOProtos.Enums.BadgeType
        ): pogobuf.Client;

        evolvePokemon(
            pokemonID: string | number | Long,
            evolutionRequirementItemID?: POGOProtos.Inventory.Item.ItemId
        ): pogobuf.Client;

        fortDeployPokemon(
            fortID: string,
            pokemonID: string | number | Long
        ): pogobuf.Client;

        fortDetails(
            fortID: string,
            fortLatitude: number,
            fortLongitude: number
        ): pogobuf.Client;

        fortRecallPokemon(
            fortID: string,
            pokemonID: string | number | Long
        ): pogobuf.Client;

        fortSearch(
            fortID: string,
            fortLatitude: number,
            fortLongitude: number
        ): pogobuf.Client;

        getRaidDetails(
            raidSeed: string | number | Long, 
            gymId: string,
            lobbyIds: string[] | number[] | Long[]
        ): pogobuf.Client;

        getAssetDigest(
            platform: POGOProtos.Enums.Platform,
            deviceManufacturer: string,
            deviceModel: string,
            locale: string,
            appVersion: number,
            paginate?: boolean,
            pageOffset?: number,
            pageTimestamp?: number
        ): pogobuf.Client;

        getBuddyWalked(
        ): pogobuf.Client;

        getDownloadURLs(
            assetIDs: string[]
        ): pogobuf.Client;

        getGymBadgeDetails(
            fortId: string | Long,
            latitude: number,
            longitude: number,
        ): pogobuf.Client;

        getGymDetails(
            gymID: string,
            gymLatitude: number,
            gymLongitude: number,
            clientVersion: string
        ): pogobuf.Client;

        getHatchedEggs(
        ): pogobuf.Client;

        getInbox(
            isHistory?: boolean,
            isReverse?: boolean,
            notBefore?: string | number | Long,
        ): pogobuf.Client;

        getIncensePokemon(
        ): Promise<POGOProtos.Networking.Responses.GetIncensePokemonResponse>;

        getInventory(
            lastTimestamp?: string | number | Long
        ): pogobuf.Client;

        getMapObjects(
            cellIDs: string[] | number[] | Long[],
            sinceTimestamps: string[] | number[] | Long[]
        ): pogobuf.Client;

        getPlayer(
            country: string,
            language: string,
            timezone: string
        ): pogobuf.Client;

        getPlayerProfile(
            playerName: string
        ): pogobuf.Client;

        gymGetInfo(
            gymID: string,
            gymLatitude: number,
            gymLongitude: number
        ): pogobuf.Client;

        incenseEncounter(
            encounterID: string | number | Long,
            encounterLocation: string
        ): Promise<POGOProtos.Networking.Responses.IncenseEncounterResponse>;

        levelUpRewards(
            level: number
        ): Promise<POGOProtos.Networking.Responses.LevelUpRewardsResponse>;

        listAvatarCustomizations(
            avatarType: POGOProtos.Data.Player.PlayerAvatarType,
            slots: POGOProtos.Enums.Slot[],
            filters: POGOProtos.Enums.Filter[],
            start: number,
            limit: number
        ): Promise<POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse>;

        listGymBadges(
        ): pogobuf.Client;

        markTutorialComplete(
            tutorialsCompleted: POGOProtos.Enums.TutorialState[],
            sendMarketingEmails?: boolean,
            sendPushNotifications?: boolean
        ): Promise<POGOProtos.Networking.Responses.MarkTutorialCompleteResponse>;

        nicknamePokemon(
            pokemonID: string | number | Long,
            nickname: string
        ): Promise<POGOProtos.Networking.Responses.NicknamePokemonResponse>;

        registerBackgroundDevice(
            deviceType: string,
            deviceID: string
        ): Promise<POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse>;

        recycleInventoryItem(
            itemID: POGOProtos.Inventory.Item.ItemId,
            count: number
        ): Promise<POGOProtos.Networking.Responses.RecycleInventoryItemResponse>;

        releasePokemon(
            pokemonIDs: string | number | Long | string[] | number[] | Long[]
        ): Promise<POGOProtos.Networking.Responses.ReleasePokemonResponse>;

        setAvatar(
            playerAvatar: POGOProtos.Data.Player.PlayerAvatar
        ): Promise<POGOProtos.Networking.Responses.SetAvatarResponse>;

        setAvatarItemAsViewed(
            avatarTemplateIDs: string[]
        ): Promise<POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse>;

        setBuddyPokemon(
            pokemonID: string | number | Long
        ): Promise<POGOProtos.Networking.Responses.SetBuddyPokemonResponse>;

        setContactSettings(
            sendMarketingEmails: boolean,
            sendPushNotifications: boolean
        ): Promise<POGOProtos.Networking.Responses.SetContactSettingsResponse>;

        setFavoritePokemon(
            pokemonID: string | number | Long,
            isFavorite: boolean
        ): Promise<POGOProtos.Networking.Responses.SetFavoritePokemonResponse>;

        setPlayerTeam(
            teamColor: POGOProtos.Enums.TeamColor
        ): Promise<POGOProtos.Networking.Responses.SetPlayerTeamResponse>;

        sfidaActionLog(
        ): Promise<POGOProtos.Networking.Responses.SfidaActionLogResponse>;

        upgradePokemon(
            pokemonID: string | number | Long
        ): Promise<POGOProtos.Networking.Responses.UpgradePokemonResponse>;

        useIncense(
            itemID: POGOProtos.Inventory.Item.ItemId
        ): Promise<POGOProtos.Networking.Responses.UseIncenseResponse>;

        useItemCapture(
            itemID: POGOProtos.Inventory.Item.ItemId,
            encounterID: string | number | Long,
            spawnPointID: string
        ): Promise<POGOProtos.Networking.Responses.UseItemCaptureResponse>;

        useItemEggIncubator(
            itemID: POGOProtos.Inventory.Item.ItemId,
            pokemonID: string | number | Long
        ): Promise<POGOProtos.Networking.Responses.UseItemEggIncubatorResponse>;

        useItemEncounter(
            itemID: POGOProtos.Inventory.Item.ItemId,
            encounterID: string | number | Long,
            spawnPointGUID: string
        ): Promise<POGOProtos.Networking.Responses.UseItemEncounterResponse>;

        useItemGym(
            itemID: POGOProtos.Inventory.Item.ItemId,
            gymID: string
        ): Promise<POGOProtos.Networking.Responses.UseItemGymResponse>;

        useItemPotion(
            itemID: POGOProtos.Inventory.Item.ItemId,
            pokemonID: string | number | Long
        ): Promise<POGOProtos.Networking.Responses.UseItemPotionResponse>;

        useItemRevive(
            itemID: POGOProtos.Inventory.Item.ItemId,
            pokemonID: string | number | Long
        ): Promise<POGOProtos.Networking.Responses.UseItemReviveResponse>;

        useItemXPBoost(
            itemID: POGOProtos.Inventory.Item.ItemId
        ): Promise<POGOProtos.Networking.Responses.UseItemXpBoostResponse>;

        verifyChallenge(
            token: string
        ): Promise<POGOProtos.Networking.Responses.VerifyChallengeResponse>;

        // platform client action

        optOutPushNotificationCategory(
            categories: string[]
        ): pogobuf.Client;

        registerPushNotification(
            apnToken?: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.ApnToken,
            gcmToken?: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.GcmToken
        ): pogobuf.Client;
    }

    /**
     * Pokémon Trainer Club login client.
     */
    export class PTCLogin {
        /**
         * Performs the PTC login process and returns a Promise that will be resolved with the auth token.
         * @param {string} username
         * @param {string} password
         */
        login(username: string, password: string): Promise<string>;

        /**
         * Sets a proxy address to use for PTC logins.
         * @param {string} proxy
         */
        setProxy(proxy: string): void;
    }

    /**
     * Google login client.
     */
    export class GoogleLogin {
        /**
         * Performs the Google Login using Android Device and returns a Promise that will be resolved with the auth token.
         * @param {string} username
         * @param {string} password
         */
        login(username: string, password: string): Promise<string>;

        /**
         * Sets a proxy address to use for logins.
         * @param {string} proxy
         */
        setProxy(proxy: string): void;

        /**
         * Performs the Google login by skipping the password step and starting with the Master Token instead.
         * Returns a Promise that will be resolved with the auth token.
         * @param {string} username
         * @param {string} token
         */
        loginWithToken(username: string, token: string): Promise<string>;
    }

    /**
     * Various utilities for dealing with Pokémon Go API requests.
     */
    export module Utils {

        interface Inventory {
            pokemon: POGOProtos.Data.PokemonData[],
            removed_pokemon: number[],
            items: POGOProtos.Inventory.Item.ItemData[],
            pokedex: POGOProtos.Data.PokedexEntry[],
            player: POGOProtos.Data.Player.PlayerStats,
            currency: POGOProtos.Data.Player.PlayerCurrency[],
            camera: POGOProtos.Data.Player.PlayerCamera,
            inventory_upgrades: POGOProtos.Inventory.InventoryUpgrades[],
            applied_items: POGOProtos.Inventory.AppliedItems[],
            egg_incubators: POGOProtos.Inventory.EggIncubators[],
            candies: POGOProtos.Inventory.Candy[],
            quests: POGOProtos.Data.Quests.Quest[]
        }

        interface ItemTemplates {
            pokemon_settings: POGOProtos.Settings.Master.PokemonSettings[],
            item_settings: POGOProtos.Settings.Master.ItemSettings[],
            move_settings: POGOProtos.Settings.Master.MoveSettings[],
            move_sequence_settings: POGOProtos.Settings.Master.MoveSequenceSettings[],
            type_effective_settings: POGOProtos.Settings.Master.TypeEffectiveSettings[],
            badge_settings: POGOProtos.Settings.Master.BadgeSettings[],
            camera_settings: POGOProtos.Settings.Master.CameraSettings,
            player_level_settings: POGOProtos.Settings.Master.PlayerLevelSettings,
            gym_level_settings: POGOProtos.Settings.Master.GymLevelSettings,
            battle_settings: POGOProtos.Settings.Master.GymBattleSettings,
            encounter_settings: POGOProtos.Settings.Master.EncounterSettings,
            iap_item_display: POGOProtos.Settings.Master.IapItemDisplay[],
            iap_settings: POGOProtos.Settings.Master.IapSettings,
            pokemon_upgrade_settings: POGOProtos.Settings.Master.PokemonUpgradeSettings,
            equipped_badge_settings: POGOProtos.Settings.Master.EquippedBadgeSettings
        }

        interface Stats {
            attack: number,
            defend: number,
            stamina: number,
            percent: number
        }

        /**
         * Provides cell IDs of nearby cells based on the given coords and radius
         * @param {number} latitude Latitude
         * @param {number} longitude Longitude
         * @param {number} radius Radius of the square in cells (optional) (default value is 3)
         * @param {number} level S2 cell level (default value is 15)
         */
        function getCellIDs(latitude: number, longitude: number, radius?: number, level?: number): string[];

        /**
         * Takes a getInventory() response and separates it into pokemon, items, candies, player data, eggs, quests, and pokedex.
         * @param {object} inventory API response message as returned by getInventory()
         */
        function splitInventory(inventory: POGOProtos.Networking.Responses.GetInventoryResponse): Inventory;

        /**
         * Takes a downloadItemTemplates() response and separates it into the individual settings objects.
         * @param {object} templates API response message as returned by downloadItemTemplates()
         */
        function splitItemTemplates(templates: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse): ItemTemplates;

        /**
         * Utility method that finds the name of the key for a given enum value and makes it look a little nicer.
         * @param {object} enumObjekt
         * @param {number} value
         */
        function getEnumKeyByValue(enumObjekt: Object, value: number): string;

        /**
         * Utility method to get the Individual Values from Pokémon
         * @param {object} pokemon A pokemon_data structure
         * @param {number} decimals Amount of decimals, negative values do not round, max 20
         */
        function getIVsFromPokemon(pokemon: Object, decimals: number): Stats;

        /**
         * Utility method to convert all Long.js objects to integers or strings
         * @param {object} object An object
         */
        function convertLongs(object: Object): Object;
    }
}

export = pogobuf;
