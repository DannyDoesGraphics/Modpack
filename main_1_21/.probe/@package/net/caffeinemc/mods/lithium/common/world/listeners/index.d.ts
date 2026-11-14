import { $BorderChangeListener, $WorldBorder } from "@package/net/minecraft/world/level/border";

declare module "@package/net/caffeinemc/mods/lithium/common/world/listeners" {
    export class $WorldBorderListenerOnce {
    }
    export interface $WorldBorderListenerOnce extends $BorderChangeListener {
        lithium$onWorldBorderShapeChange(arg0: $WorldBorder): void;
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onAreaReplaced(arg0: $WorldBorder): void;
    }
    /**
     * Values that may be interpreted as {@link $WorldBorderListenerOnce}.
     */
    export type $WorldBorderListenerOnce_ = ((arg0: $WorldBorder) => void);
}
