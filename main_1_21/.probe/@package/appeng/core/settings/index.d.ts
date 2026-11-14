import { $Enum } from "@package/java/lang";

declare module "@package/appeng/core/settings" {
    export class $TickRates extends $Enum<$TickRates> {
        getDefaultMin(): number;
        getDefaultMax(): number;
        static values(): $TickRates[];
        static valueOf(arg0: string): $TickRates;
        getMin(): number;
        getMax(): number;
        setMin(arg0: number): void;
        setMax(arg0: number): void;
        static ExportBus: $TickRates;
        static METunnel: $TickRates;
        static IOPort: $TickRates;
        static ItemTunnel: $TickRates;
        static ImportBus: $TickRates;
        static Inscriber: $TickRates;
        static Charger: $TickRates;
        static LightTunnel: $TickRates;
        static VibrationChamber: $TickRates;
        static Interface: $TickRates;
        static StorageBus: $TickRates;
        static AnnihilationPlane: $TickRates;
        get defaultMin(): number;
        get defaultMax(): number;
    }
    /**
     * Values that may be interpreted as {@link $TickRates}.
     */
    export type $TickRates_ = "interface" | "importbus" | "exportbus" | "annihilationplane" | "metunnel" | "inscriber" | "charger" | "ioport" | "vibrationchamber" | "storagebus" | "itemtunnel" | "lighttunnel";
}
