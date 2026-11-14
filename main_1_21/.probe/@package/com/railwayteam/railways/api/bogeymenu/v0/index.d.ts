import { $BogeyEntry, $CategoryEntry } from "@package/com/railwayteam/railways/api/bogeymenu/v0/entry";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BogeyStyle, $BogeySizes$BogeySize_ } from "@package/com/simibubi/create/content/trains/bogey";
export * as neoforge from "@package/com/railwayteam/railways/api/bogeymenu/v0/neoforge";
export * as entry from "@package/com/railwayteam/railways/api/bogeymenu/v0/entry";

declare module "@package/com/railwayteam/railways/api/bogeymenu/v0" {
    export class $BogeyMenuManager {
        static INSTANCE: $BogeyMenuManager;
    }
    export interface $BogeyMenuManager {
        registerCategory(arg0: $Component_, arg1: $ResourceLocation_): $CategoryEntry;
        addToCategory(arg0: $CategoryEntry, arg1: $BogeyStyle, arg2: $ResourceLocation_, arg3: number): $BogeyEntry;
        addToCategory(arg0: $CategoryEntry, arg1: $BogeyStyle, arg2: $ResourceLocation_): $BogeyEntry;
        setScalesForBogeySizes(arg0: $BogeyStyle, arg1: $BogeySizes$BogeySize_, arg2: number): void;
        getCategoryById(arg0: $ResourceLocation_): $CategoryEntry;
    }
}
