import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Widget, $Button, $Panel } from "@package/dev/ftb/mods/ftblibrary/ui";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Predicate, $Consumer_, $Consumer } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $QuestObjectBase, $TeamData, $Quest, $QuestObject } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/task" {
    export class $TaskType {
        setDisplayName(name: $Component_): $TaskType;
        makeExtraNBT(): $CompoundTag;
        setGuiProvider(p: $TaskType$GuiProvider_): $TaskType;
        getGuiProvider(): $TaskType$GuiProvider;
        getTypeForNBT(): string;
        getIconSupplier(): $Icon;
        static requireCreateTask(id: number, quest: $Quest, typeId: string): $Task;
        static createTask(id: number, quest: $Quest, typeId: string): $Task;
        createTask(id: number, quest: $Quest): $Task;
        getTypeId(): $ResourceLocation;
        getDisplayName(): $Component;
        internalId: number;
        get typeForNBT(): string;
        get iconSupplier(): $Icon;
        get typeId(): $ResourceLocation;
    }
    export class $CustomTask$Check {
    }
    export interface $CustomTask$Check {
        check(arg0: $CustomTask$Data_, arg1: $ServerPlayer): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomTask$Check}.
     */
    export type $CustomTask$Check_ = ((arg0: $CustomTask$Data, arg1: $ServerPlayer) => void);
    export class $CustomTask$Data extends $Record {
        setProgress(l: number): void;
        getProgress(): number;
        addProgress(l: number): void;
        teamData(): $TeamData;
        task(): $CustomTask;
        constructor(task: $CustomTask, teamData: $TeamData);
    }
    /**
     * Values that may be interpreted as {@link $CustomTask$Data}.
     */
    export type $CustomTask$Data_ = { teamData?: $TeamData, task?: $CustomTask,  } | [teamData?: $TeamData, task?: $CustomTask, ];
    export class $CustomTask extends $Task {
        setCheckTimer(checkTimer: number): void;
        setEnableButton(enableButton: boolean): void;
        setCheck(check: $CustomTask$Check_): void;
        setMaxProgress(maxProgress: number): void;
        static PREDICATE: $Predicate<$QuestObjectBase>;
        id: number;
        constructor(id: number, quest: $Quest);
        set checkTimer(value: number);
        set enableButton(value: boolean);
        set check(value: $CustomTask$Check_);
        set maxProgress(value: number);
    }
    export class $TaskType$GuiProvider {
    }
    export interface $TaskType$GuiProvider {
        openCreationGui(arg0: $Panel, arg1: $Quest, arg2: $Consumer_<$Task>): void;
    }
    /**
     * Values that may be interpreted as {@link $TaskType$GuiProvider}.
     */
    export type $TaskType$GuiProvider_ = ((arg0: $Panel, arg1: $Quest, arg2: $Consumer<$Task>) => void);
    export class $Task extends $QuestObject {
        getIngredient(widget: $Widget): ($PositionedIngredient) | undefined;
        addMouseOverText(list: $TooltipList, teamData: $TeamData): void;
        canInsertItem(): boolean;
        formatMaxProgress(): string;
        formatProgress(teamData: $TeamData, progress: number): string;
        drawGUI(teamData: $TeamData, graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        consumesResources(): boolean;
        hideProgressNumbers(): boolean;
        addMouseOverHeader(list: $TooltipList, teamData: $TeamData, advanced: boolean): void;
        addTitleInMouseOverText(): boolean;
        onButtonClicked(button: $Button, canClick: boolean): void;
        autoSubmitOnPlayerTick(): number;
        getQuest(): $Quest;
        submitItemsOnInventoryChange(): boolean;
        getMaxProgress(): number;
        checkOnLogin(): boolean;
        submitTask(teamData: $TeamData, player: $ServerPlayer): void;
        submitTask(teamData: $TeamData, player: $ServerPlayer, craftedItem: $ItemStack_): void;
        getType(): $TaskType;
        getButtonText(): $MutableComponent;
        id: number;
        constructor(id: number, quest: $Quest);
        get quest(): $Quest;
        get maxProgress(): number;
        get type(): $TaskType;
        get buttonText(): $MutableComponent;
    }
}
