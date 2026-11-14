import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $Weight } from "@package/net/minecraft/util/random";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $VillagerType_, $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/neoforged/neoforge/registries/datamaps/builtin" {
    export class $Waxable extends $Record {
        waxed(): $Block;
        static CODEC: $Codec<$Waxable>;
        static WAXABLE_CODEC: $Codec<$Waxable>;
        constructor(waxed: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $Waxable}.
     */
    export type $Waxable_ = { waxed?: $Block_,  } | [waxed?: $Block_, ];
    export class $Oxidizable extends $Record {
        nextOxidationStage(): $Block;
        static CODEC: $Codec<$Oxidizable>;
        static OXIDIZABLE_CODEC: $Codec<$Oxidizable>;
        constructor(nextOxidationStage: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $Oxidizable}.
     */
    export type $Oxidizable_ = { nextOxidationStage?: $Block_,  } | [nextOxidationStage?: $Block_, ];
    export class $ParrotImitation extends $Record {
        sound(): $SoundEvent;
        static CODEC: $Codec<$ParrotImitation>;
        static SOUND_CODEC: $Codec<$ParrotImitation>;
        constructor(sound: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $ParrotImitation}.
     */
    export type $ParrotImitation_ = { sound?: $SoundEvent_,  } | [sound?: $SoundEvent_, ];
    export class $VibrationFrequency extends $Record {
        frequency(): number;
        static CODEC: $Codec<$VibrationFrequency>;
        static FREQUENCY_CODEC: $Codec<$VibrationFrequency>;
        constructor(frequency: number);
    }
    /**
     * Values that may be interpreted as {@link $VibrationFrequency}.
     */
    export type $VibrationFrequency_ = { frequency?: number,  } | [frequency?: number, ];
    export class $RaidHeroGift extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        static LOOT_TABLE_CODEC: $Codec<$RaidHeroGift>;
        static CODEC: $Codec<$RaidHeroGift>;
        constructor(lootTable: $ResourceKey_<$LootTable>);
    }
    /**
     * Values that may be interpreted as {@link $RaidHeroGift}.
     */
    export type $RaidHeroGift_ = { lootTable?: $ResourceKey_<$LootTable>,  } | [lootTable?: $ResourceKey_<$LootTable>, ];
    export class $Strippable extends $Record {
        strippedBlock(): $Block;
        static CODEC: $Codec<$Strippable>;
        static STRIPPED_BLOCK_CODEC: $Codec<$Strippable>;
        constructor(strippedBlock: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $Strippable}.
     */
    export type $Strippable_ = { strippedBlock?: $Block_,  } | [strippedBlock?: $Block_, ];
    export class $Compostable extends $Record {
        chance(): number;
        canVillagerCompost(): boolean;
        static CODEC: $Codec<$Compostable>;
        static CHANCE_CODEC: $Codec<$Compostable>;
        constructor(arg0: number);
        constructor(chance: number, canVillagerCompost: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Compostable}.
     */
    export type $Compostable_ = { chance?: number, canVillagerCompost?: boolean,  } | [chance?: number, canVillagerCompost?: boolean, ];
    export class $BiomeVillagerType extends $Record {
        type(): $VillagerType;
        static TYPE_CODEC: $Codec<$BiomeVillagerType>;
        static CODEC: $Codec<$BiomeVillagerType>;
        constructor(type: $VillagerType_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeVillagerType}.
     */
    export type $BiomeVillagerType_ = { type?: $VillagerType_,  } | [type?: $VillagerType_, ];
    /**
     * Holds all data maps provided by NeoForge.
     * 
     * These data maps are usually replacements for vanilla in-code maps, and are optionally
     * synced so that mods can use them on the client side.
     */
    export class $NeoForgeDataMaps {
        static RAID_HERO_GIFTS: $DataMapType<$VillagerProfession, $RaidHeroGift>;
        static WAXABLES: $DataMapType<$Block, $Waxable>;
        static OXIDIZABLES: $DataMapType<$Block, $Oxidizable>;
        static VILLAGER_TYPES: $DataMapType<$Biome, $BiomeVillagerType>;
        static STRIPPABLES: $DataMapType<$Block, $Strippable>;
        static VIBRATION_FREQUENCIES: $DataMapType<$GameEvent, $VibrationFrequency>;
        static FURNACE_FUELS: $DataMapType<$Item, $FurnaceFuel>;
        static MONSTER_ROOM_MOBS: $DataMapType<$EntityType<never>, $MonsterRoomMob>;
        static PARROT_IMITATIONS: $DataMapType<$EntityType<never>, $ParrotImitation>;
        static COMPOSTABLES: $DataMapType<$Item, $Compostable>;
        constructor();
    }
    export class $FurnaceFuel extends $Record {
        burnTime(): number;
        static CODEC: $Codec<$FurnaceFuel>;
        static BURN_TIME_CODEC: $Codec<$FurnaceFuel>;
        constructor(burnTime: number);
    }
    /**
     * Values that may be interpreted as {@link $FurnaceFuel}.
     */
    export type $FurnaceFuel_ = { burnTime?: number,  } | [burnTime?: number, ];
    export class $MonsterRoomMob extends $Record {
        weight(): $Weight;
        static CODEC: $Codec<$MonsterRoomMob>;
        static WEIGHT_CODEC: $Codec<$MonsterRoomMob>;
        constructor(weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $MonsterRoomMob}.
     */
    export type $MonsterRoomMob_ = { weight?: $Weight,  } | [weight?: $Weight, ];
}
