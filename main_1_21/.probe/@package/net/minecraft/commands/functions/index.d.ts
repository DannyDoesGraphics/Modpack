import { $ExecutionCommandSource } from "@package/net/minecraft/commands";
import { $UnboundEntryAction, $UnboundEntryAction_ } from "@package/net/minecraft/commands/execution";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StringReader, $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $CharSequence, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/commands/functions" {
    export class $MacroFunction<T extends $ExecutionCommandSource<T>> implements $CommandFunction<T> {
        id(): $ResourceLocation;
        instantiate(_arguments: $CompoundTag_ | null, dispatcher: $CommandDispatcher<T>): $InstantiatedFunction<T>;
        constructor(id: $ResourceLocation_, entries: $List_<$MacroFunction$Entry<T>>, parameters: $List_<string>);
    }
    export class $CommandFunction<T> {
        static checkCommandLineLength(command: $CharSequence): void;
        static fromLines<T extends $ExecutionCommandSource<T>>(id: $ResourceLocation_, dispatcher: $CommandDispatcher<T>, source: T, lines: $List_<string>): $CommandFunction<T>;
        static parseCommand<T extends $ExecutionCommandSource<T>>(dispatcher: $CommandDispatcher<T>, source: T, command: $StringReader): $UnboundEntryAction<T>;
    }
    export interface $CommandFunction<T> {
        id(): $ResourceLocation;
        instantiate(_arguments: $CompoundTag_ | null, dispatcher: $CommandDispatcher<T>): $InstantiatedFunction<T>;
    }
    export class $MacroFunction$Entry<T> {
    }
    export interface $MacroFunction$Entry<T> {
    }
    export class $InstantiatedFunction<T> {
    }
    export interface $InstantiatedFunction<T> {
        id(): $ResourceLocation;
        entries(): $List<$UnboundEntryAction<T>>;
    }
    export class $StringTemplate extends $Record {
        segments(): $List<string>;
        static fromString(name: string, lineNumber: number): $StringTemplate;
        substitute(_arguments: $List_<string>): string;
        variables(): $List<string>;
        constructor(arg0: $List_<string>, arg1: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $StringTemplate}.
     */
    export type $StringTemplate_ = { segments?: $List_<string>, variables?: $List_<string>,  } | [segments?: $List_<string>, variables?: $List_<string>, ];
    export class $MacroFunction$PlainTextEntry<T> implements $MacroFunction$Entry<T> {
    }
    export class $FunctionBuilder<T extends $ExecutionCommandSource<T>> {
    }
    export class $MacroFunction$MacroEntry<T extends $ExecutionCommandSource<T>> implements $MacroFunction$Entry<T> {
    }
    export class $PlainTextFunction<T> extends $Record implements $CommandFunction<T>, $InstantiatedFunction<T> {
        id(): $ResourceLocation;
        entries(): $List<$UnboundEntryAction<T>>;
        instantiate(arg0: $CompoundTag_ | null, arg1: $CommandDispatcher<T>): $InstantiatedFunction<T>;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$UnboundEntryAction_<T>>);
    }
    /**
     * Values that may be interpreted as {@link $PlainTextFunction}.
     */
    export type $PlainTextFunction_<T> = { entries?: $List_<$UnboundEntryAction_<any>>, id?: $ResourceLocation_,  } | [entries?: $List_<$UnboundEntryAction_<any>>, id?: $ResourceLocation_, ];
}
