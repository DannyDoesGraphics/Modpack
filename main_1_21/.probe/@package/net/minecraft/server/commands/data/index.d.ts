import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Function_, $Function } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $ArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/server/commands/data" {
    export class $BlockDataAccessor implements $DataAccessor {
        getModifiedSuccess(): $Component;
        /**
         * Gets the message used as a result of querying the given NBT (both for /data get and /data get path)
         */
        getPrintSuccess(nbt: $Tag_): $Component;
        /**
         * Gets the message used as a result of querying the given path with a scale.
         */
        getPrintSuccess(path: $NbtPathArgument$NbtPath, scale: number, arg2: number): $Component;
        getData(): $CompoundTag;
        setData(other: $CompoundTag_): void;
        static PROVIDER: $Function<string, $DataCommands$DataProvider>;
        constructor(entity: $BlockEntity, pos: $BlockPos_);
        get modifiedSuccess(): $Component;
    }
    export class $DataAccessor {
    }
    export interface $DataAccessor {
        getModifiedSuccess(): $Component;
        /**
         * Gets the message used as a result of querying the given NBT (both for /data get and /data get path)
         */
        getPrintSuccess(nbt: $Tag_): $Component;
        /**
         * Gets the message used as a result of querying the given path with a scale.
         */
        getPrintSuccess(path: $NbtPathArgument$NbtPath, scale: number, arg2: number): $Component;
        getData(): $CompoundTag;
        setData(other: $CompoundTag_): void;
        get modifiedSuccess(): $Component;
    }
    export class $DataCommands$DataProvider {
    }
    export interface $DataCommands$DataProvider {
        /**
         * Creates an argument used for accessing data related to this type of thing, including a literal to distinguish from other types.
         */
        wrap(builder: $ArgumentBuilder<$CommandSourceStack, never>, action: $Function_<$ArgumentBuilder<$CommandSourceStack, never>, $ArgumentBuilder<$CommandSourceStack, never>>): $ArgumentBuilder<$CommandSourceStack, never>;
        /**
         * Creates an accessor based on the command context. This should only refer to arguments registered in `createArgument`.
         */
        access(context: $CommandContext<$CommandSourceStack>): $DataAccessor;
    }
    export class $EntityDataAccessor implements $DataAccessor {
        getModifiedSuccess(): $Component;
        /**
         * Gets the message used as a result of querying the given path with a scale.
         */
        getPrintSuccess(path: $NbtPathArgument$NbtPath, scale: number, arg2: number): $Component;
        /**
         * Gets the message used as a result of querying the given NBT (both for /data get and /data get path)
         */
        getPrintSuccess(nbt: $Tag_): $Component;
        getData(): $CompoundTag;
        setData(other: $CompoundTag_): void;
        static PROVIDER: $Function<string, $DataCommands$DataProvider>;
        constructor(entity: $Entity);
        get modifiedSuccess(): $Component;
    }
    export class $DataCommands {
        static getSingleTag(path: $NbtPathArgument$NbtPath, accessor: $DataAccessor): $Tag;
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static TARGET_PROVIDERS: $List<$DataCommands$DataProvider>;
        static ALL_PROVIDERS: $List<$Function<string, $DataCommands$DataProvider>>;
        static SOURCE_PROVIDERS: $List<$DataCommands$DataProvider>;
        constructor();
    }
    export class $DataCommands$DataManipulator {
    }
    export interface $DataCommands$DataManipulator {
    }
    /**
     * Values that may be interpreted as {@link $DataCommands$DataManipulator}.
     */
    export type $DataCommands$DataManipulator_ = (() => void);
    export class $StorageDataAccessor implements $DataAccessor {
        getModifiedSuccess(): $Component;
        /**
         * Gets the message used as a result of querying the given path with a scale.
         */
        getPrintSuccess(path: $NbtPathArgument$NbtPath, scale: number, arg2: number): $Component;
        /**
         * Gets the message used as a result of querying the given NBT (both for /data get and /data get path)
         */
        getPrintSuccess(nbt: $Tag_): $Component;
        getData(): $CompoundTag;
        setData(other: $CompoundTag_): void;
        static PROVIDER: $Function<string, $DataCommands$DataProvider>;
        get modifiedSuccess(): $Component;
    }
    export class $DataCommands$DataManipulatorDecorator {
    }
    export interface $DataCommands$DataManipulatorDecorator {
    }
    /**
     * Values that may be interpreted as {@link $DataCommands$DataManipulatorDecorator}.
     */
    export type $DataCommands$DataManipulatorDecorator_ = (() => void);
    export class $DataCommands$StringProcessor {
    }
    export interface $DataCommands$StringProcessor {
    }
    /**
     * Values that may be interpreted as {@link $DataCommands$StringProcessor}.
     */
    export type $DataCommands$StringProcessor_ = (() => void);
}
