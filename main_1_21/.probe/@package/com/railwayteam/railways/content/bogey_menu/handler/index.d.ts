import { $Indicator$State } from "@package/com/simibubi/create/foundation/gui/widget";
import { $BogeyEntry_ } from "@package/com/railwayteam/railways/api/bogeymenu/v0/entry";
import { $BogeyStyle, $BogeySizes$BogeySize_, $BogeySizes$BogeySize } from "@package/com/simibubi/create/content/trains/bogey";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/com/railwayteam/railways/content/bogey_menu/handler" {
    export class $BogeyMenuHandlerServer {
        static setCurrentPlayer(arg0: $UUID_): void;
        static getCurrentPlayer(): $UUID;
        static addStyle(arg0: $UUID_, arg1: $Pair<$BogeyStyle, $BogeySizes$BogeySize_>): void;
        static getStyle(arg0: $UUID_): $Pair<$BogeyStyle, $BogeySizes$BogeySize>;
        constructor();
    }
    export class $BogeyMenuHandlerClient {
        static addFavorite(arg0: $BogeyStyle): void;
        static removeFavorite(arg0: $BogeyStyle): void;
        static getTrackCompat(arg0: $BogeyEntry_): $Indicator$State[];
        static getRenderCycle(arg0: $BogeyStyle): $List<$Pair<$BogeyStyle, $BogeySizes$BogeySize>>;
        static toggleFavorite(arg0: $BogeyStyle): void;
        static isFavorited(arg0: $BogeyStyle): boolean;
        static getFavorites(): $List<$BogeyStyle>;
        static getSize(arg0: $BogeyStyle): $BogeySizes$BogeySize;
        constructor();
        static get favorites(): $List<$BogeyStyle>;
    }
    export class $BogeyMenuEventsHandler {
        static clientTick(): void;
        static onKeyInput(arg0: number, arg1: boolean): void;
        static COOLDOWN: number;
        constructor();
    }
}
