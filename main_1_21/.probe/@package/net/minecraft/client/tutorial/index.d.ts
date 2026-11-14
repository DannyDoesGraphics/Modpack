import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TutorialToast } from "@package/net/minecraft/client/gui/components/toasts";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer, $Input } from "@package/net/minecraft/client/player";
import { $ClickAction_ } from "@package/net/minecraft/world/inventory";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $HitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/tutorial" {
    export class $MovementTutorialStepInstance implements $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        onMouse(velocityX: number, arg1: number): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        constructor(tutorial: $Tutorial);
    }
    export class $Tutorial$TimedToast {
    }
    export class $CraftPlanksTutorialStep implements $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        static hasCraftedPlanksPreviously(player: $LocalPlayer, items: $TagKey_<$Item>): boolean;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        onMouse(velocityX: number, arg1: number): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        constructor(tutorial: $Tutorial);
    }
    export class $TutorialStepInstance {
    }
    export interface $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        onMouse(velocityX: number, arg1: number): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
    }
    export class $BundleTutorial {
        onInventoryAction(carriedStack: $ItemStack_, slottedStack: $ItemStack_, action: $ClickAction_): void;
        constructor(tutorial: $Tutorial, options: $Options);
    }
    export class $FindTreeTutorialStepInstance implements $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        static hasPunchedTreesPreviously(player: $LocalPlayer): boolean;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        onMouse(velocityX: number, arg1: number): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        constructor(tutorial: $Tutorial);
    }
    export class $CompletedTutorialStepInstance implements $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        onMouse(velocityX: number, arg1: number): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        constructor(tutorial: $Tutorial);
    }
    export class $Tutorial {
        isSurvival(): boolean;
        static key(keybind: string): $Component;
        /**
         * Called when the player opens his inventory
         */
        start(): void;
        /**
         * Called when the player opens his inventory
         */
        stop(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        getMinecraft(): $Minecraft;
        onInput(input: $Input): void;
        onInventoryAction(carriedStack: $ItemStack_, slottedStack: $ItemStack_, action: $ClickAction_): void;
        onLookAt(level: $ClientLevel | null, result: $HitResult | null): void;
        addTimedToast(toast: $TutorialToast, durationTicks: number): void;
        removeTimedToast(toast: $TutorialToast): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        /**
         * Sets a new step to the tutorial
         */
        setStep(step: $TutorialSteps_): void;
        onMouse(velocityX: number, arg1: number): void;
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        constructor(minecraft: $Minecraft, options: $Options);
        get survival(): boolean;
        get minecraft(): $Minecraft;
        set step(value: $TutorialSteps_);
    }
    export class $OpenInventoryTutorialStep implements $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        onMouse(velocityX: number, arg1: number): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        constructor(tutorial: $Tutorial);
    }
    export class $PunchTreeTutorialStepInstance implements $TutorialStepInstance {
        /**
         * Called when the player opens his inventory
         */
        clear(): void;
        /**
         * Called when the player opens his inventory
         */
        tick(): void;
        /**
         * Called when a player hits block to destroy it.
         */
        onDestroyBlock(level: $ClientLevel, pos: $BlockPos_, state: $BlockState_, diggingStage: number): void;
        /**
         * Called when the player pick up an ItemStack
         */
        onGetItem(stack: $ItemStack_): void;
        /**
         * Handles the player movement
         */
        onInput(input: $Input): void;
        /**
         * Handles blocks and entities hovering
         */
        onLookAt(level: $ClientLevel, result: $HitResult): void;
        /**
         * Called when the player opens his inventory
         */
        onOpenInventory(): void;
        onMouse(velocityX: number, arg1: number): void;
        constructor(tutorial: $Tutorial);
    }
    export class $TutorialSteps extends $Enum<$TutorialSteps> {
        getName(): string;
        static values(): $TutorialSteps[];
        static valueOf(name: string): $TutorialSteps;
        create(tutorial: $Tutorial): $TutorialStepInstance;
        static getByName(name: string): $TutorialSteps;
        static PUNCH_TREE: $TutorialSteps;
        static MOVEMENT: $TutorialSteps;
        static FIND_TREE: $TutorialSteps;
        static OPEN_INVENTORY: $TutorialSteps;
        static NONE: $TutorialSteps;
        static CRAFT_PLANKS: $TutorialSteps;
    }
    /**
     * Values that may be interpreted as {@link $TutorialSteps}.
     */
    export type $TutorialSteps_ = "movement" | "find_tree" | "punch_tree" | "open_inventory" | "craft_planks" | "none";
}
