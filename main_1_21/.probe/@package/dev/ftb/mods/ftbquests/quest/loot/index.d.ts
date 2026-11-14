import { $ConfigGroup } from "@package/dev/ftb/mods/ftblibrary/config";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Color4I } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $List, $Map, $Collection } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Reward } from "@package/dev/ftb/mods/ftbquests/quest/reward";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BaseQuestFile, $QuestObjectBase, $Quest } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/loot" {
    export class $LootCrate {
        initFromTable(): void;
        getItemName(): string;
        getDrops(): $EntityWeight;
        writeData(nbt: $CompoundTag_): void;
        getStringID(): string;
        readData(nbt: $CompoundTag_): void;
        static getLootCrates(isClient: boolean): $Map<string, $LootCrate>;
        static allCrateStacks(isClientSide: boolean): $Collection<$ItemStack>;
        writeNetData(data: $FriendlyByteBuf): void;
        readNetData(data: $FriendlyByteBuf): void;
        fillConfigGroup(config: $ConfigGroup): void;
        isGlow(): boolean;
        getTable(): $RewardTable;
        getColor(): $Color4I;
        createStack(): $ItemStack;
        constructor(table: $RewardTable, initFromTable: boolean);
        get itemName(): string;
        get drops(): $EntityWeight;
        get stringID(): string;
        get glow(): boolean;
        get table(): $RewardTable;
        get color(): $Color4I;
    }
    export class $EntityWeight {
        getWeight(entity: $Entity): number;
        writeData(nbt: $CompoundTag_): void;
        readData(nbt: $CompoundTag_): void;
        writeNetData(data: $FriendlyByteBuf): void;
        readNetData(data: $FriendlyByteBuf): void;
        boss: number;
        passive: number;
        monster: number;
        constructor();
    }
    export class $RewardTable extends $QuestObjectBase {
        getTotalWeight(includeEmpty: boolean): number;
        addMouseOverText(list: $TooltipList, includeWeight: boolean, includeEmpty: boolean): void;
        removeReward(weightedReward: $WeightedReward): void;
        getLootCrate(): $LootCrate;
        static isFakeQuestId(id: number): boolean;
        static createRewardForTable(id: number, type: string, file: $BaseQuestFile): $QuestObjectBase;
        addReward(weightedReward: $WeightedReward): void;
        getWeightedRewards(): $List<$WeightedReward>;
        generateWeightedRandomRewards(random: $RandomSource, nAttempts: number, includeEmpty: boolean): $Collection<$WeightedReward>;
        getTitleOrElse(def: $Component_): $Component;
        getFakeQuest(): $Quest;
        makeWeightedItemReward(stack: $ItemStack_, weight: number): $WeightedReward;
        toggleLootCrate(): $LootCrate;
        shouldShowTooltip(): boolean;
        copy(): $RewardTable;
        getFile(): $BaseQuestFile;
        getFilename(): string;
        id: number;
        constructor(id: number, file: $BaseQuestFile, filename: string);
        constructor(id: number, file: $BaseQuestFile);
        get lootCrate(): $LootCrate;
        get weightedRewards(): $List<$WeightedReward>;
        get fakeQuest(): $Quest;
        get file(): $BaseQuestFile;
        get filename(): string;
    }
    export class $WeightedReward implements $Comparable<$WeightedReward> {
        getWeight(): number;
        setWeight(weight: number): void;
        getReward(): $Reward;
        static chanceString(weight: number, totalWeight: number): string;
        static chanceString(weight: number, totalWeight: number, empty: boolean): string;
        compareTo(o: $WeightedReward): number;
        copy(): $WeightedReward;
        constructor(reward: $Reward, weight: number);
        get reward(): $Reward;
    }
}
