import { $Stream } from "@package/java/util/stream";
import { $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UnsignedLong } from "@package/com/google/common/primitives";
import { $Set } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/timers" {
    export class $TimerQueue$Event<T> {
        callback: $TimerCallback<T>;
        id: string;
        triggerTime: number;
        sequentialId: $UnsignedLong;
    }
    export class $TimerCallback$Serializer<T, C extends $TimerCallback<T>> {
        getCls(): $Class<never>;
        getId(): $ResourceLocation;
        deserialize(tag: $CompoundTag_): C;
        serialize(tag: $CompoundTag_, callback: C): void;
        constructor(id: $ResourceLocation_, cls: $Class<never>);
        get cls(): $Class<never>;
        get id(): $ResourceLocation;
    }
    export class $FunctionCallback implements $TimerCallback<$MinecraftServer> {
        handle(obj: $MinecraftServer, manager: $TimerQueue<$MinecraftServer>, gameTime: number): void;
        constructor(functionId: $ResourceLocation_);
    }
    export class $FunctionCallback$Serializer extends $TimerCallback$Serializer<$MinecraftServer, $FunctionCallback> {
        serialize(arg0: $CompoundTag_, arg1: $FunctionCallback): void;
        constructor();
    }
    export class $TimerQueue<T> {
        getEventsIds(): $Set<string>;
        remove(eventId: string): number;
        store(): $ListTag;
        schedule(id: string, triggerTime: number, arg2: $TimerCallback_<T>): void;
        tick(obj: T, gameTime: number): void;
        constructor(callbacksRegistry: $TimerCallbacks<T>, scheduledEventsDynamic: $Stream<$Dynamic<never>>);
        constructor(callbacksRegistry: $TimerCallbacks<T>);
        get eventsIds(): $Set<string>;
    }
    export class $TimerCallbacks<C> {
        register(serializer: $TimerCallback$Serializer<C, never>): $TimerCallbacks<C>;
        deserialize(tag: $CompoundTag_): $TimerCallback<C>;
        serialize<T extends $TimerCallback<C>>(callback: T): $CompoundTag;
        static SERVER_CALLBACKS: $TimerCallbacks<$MinecraftServer>;
        constructor();
    }
    export class $TimerCallback<T> {
    }
    export interface $TimerCallback<T> {
        handle(obj: T, manager: $TimerQueue<T>, gameTime: number): void;
    }
    /**
     * Values that may be interpreted as {@link $TimerCallback}.
     */
    export type $TimerCallback_<T> = ((arg0: T, arg1: $TimerQueue<T>, arg2: number) => void);
    export class $FunctionTagCallback implements $TimerCallback<$MinecraftServer> {
        handle(obj: $MinecraftServer, manager: $TimerQueue<$MinecraftServer>, gameTime: number): void;
        constructor(tagId: $ResourceLocation_);
    }
    export class $FunctionTagCallback$Serializer extends $TimerCallback$Serializer<$MinecraftServer, $FunctionTagCallback> {
        serialize(arg0: $CompoundTag_, arg1: $FunctionTagCallback): void;
        constructor();
    }
}
