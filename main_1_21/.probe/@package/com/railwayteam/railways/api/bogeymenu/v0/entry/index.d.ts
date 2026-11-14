import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BogeyStyle } from "@package/com/simibubi/create/content/trains/bogey";
import { $Record } from "@package/java/lang";
import { $Map, $List } from "@package/java/util";

declare module "@package/com/railwayteam/railways/api/bogeymenu/v0/entry" {
    export class $BogeyEntry extends $Record {
        bogeyStyle(): $BogeyStyle;
        iconLocation(): $ResourceLocation;
        scale(): number;
        static getOrCreate(arg0: $CategoryEntry, arg1: $BogeyStyle, arg2: $ResourceLocation_, arg3: number): $BogeyEntry;
        static getOrCreate(arg0: $BogeyStyle, arg1: $ResourceLocation_, arg2: number): $BogeyEntry;
        static STYLE_TO_ENTRY: $Map<$BogeyStyle, $BogeyEntry>;
        constructor(bogeyStyle: $BogeyStyle, iconLocation: $ResourceLocation_, scale: number);
    }
    /**
     * Values that may be interpreted as {@link $BogeyEntry}.
     */
    export type $BogeyEntry_ = { bogeyStyle?: $BogeyStyle, scale?: number, iconLocation?: $ResourceLocation_,  } | [bogeyStyle?: $BogeyStyle, scale?: number, iconLocation?: $ResourceLocation_, ];
    export class $CategoryEntry$FavoritesCategory extends $CategoryEntry {
        static INSTANCE: $CategoryEntry;
    }
    export class $CategoryEntry {
        getBogeyEntryList(): $List<$BogeyEntry>;
        getName(): $Component;
        getId(): $ResourceLocation;
        constructor(arg0: $Component_, arg1: $ResourceLocation_);
        get bogeyEntryList(): $List<$BogeyEntry>;
        get name(): $Component;
        get id(): $ResourceLocation;
    }
}
