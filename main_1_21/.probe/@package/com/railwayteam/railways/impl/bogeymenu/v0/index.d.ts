import { $BogeyEntry, $CategoryEntry } from "@package/com/railwayteam/railways/api/bogeymenu/v0/entry";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BogeyStyle, $BogeySizes$BogeySize_, $BogeySizes$BogeySize } from "@package/com/simibubi/create/content/trains/bogey";
import { $Map, $List } from "@package/java/util";
import { $BogeyMenuManager } from "@package/com/railwayteam/railways/api/bogeymenu/v0";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/com/railwayteam/railways/impl/bogeymenu/v0" {
    export class $BogeyMenuManagerImpl implements $BogeyMenuManager {
        registerCategory(arg0: $Component_, arg1: $ResourceLocation_): $CategoryEntry;
        addToCategory(arg0: $CategoryEntry, arg1: $BogeyStyle, arg2: $ResourceLocation_, arg3: number): $BogeyEntry;
        addToCategory(arg0: $CategoryEntry, arg1: $BogeyStyle, arg2: $ResourceLocation_): $BogeyEntry;
        setScalesForBogeySizes(arg0: $BogeyStyle, arg1: $BogeySizes$BogeySize_, arg2: number): void;
        getCategoryById(arg0: $ResourceLocation_): $CategoryEntry;
        static defaultScale: number;
        static CATEGORIES: $List<$CategoryEntry>;
        static SIZES_TO_SCALE: $Map<$Pair<$BogeyStyle, $BogeySizes$BogeySize>, number>;
        constructor();
    }
}
