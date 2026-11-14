import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";

declare module "@package/appeng/init/internal" {
    export class $InitGridLinkables {
        static init(): void;
    }
    export class $InitUpgrades {
        static init(): void;
    }
    export class $InitP2PAttunements {
        static init(): void;
    }
    export class $InitStorageCells {
        static getModels(): $Collection<$ResourceLocation>;
        static init(): void;
        static get models(): $Collection<$ResourceLocation>;
    }
    export class $InitBlockEntityMoveStrategies {
        static init(): void;
    }
    export class $InitGridServices {
        static init(): void;
    }
}
