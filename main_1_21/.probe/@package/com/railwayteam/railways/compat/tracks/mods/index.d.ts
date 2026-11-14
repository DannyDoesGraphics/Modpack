import { $GenericTrackCompat } from "@package/com/railwayteam/railways/compat/tracks";
import { $Mods } from "@package/com/railwayteam/railways/compat";

declare module "@package/com/railwayteam/railways/compat/tracks/mods" {
    export class $QuarkTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $BygTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $TwilightForestTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $TFCTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $BlueSkiesTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $NaturesSpiritTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $BiomesOPlentyTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $DreamsAndDesiresTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
    export class $HexCastingTrackCompat extends $GenericTrackCompat {
        static register(): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
    }
}
