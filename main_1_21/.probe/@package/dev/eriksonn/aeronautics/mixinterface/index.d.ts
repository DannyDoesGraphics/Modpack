
declare module "@package/dev/eriksonn/aeronautics/mixinterface" {
    export class $TickingInstructionExtension {
    }
    export interface $TickingInstructionExtension {
        aeronautics$stopInstruction(): void;
    }
    /**
     * Values that may be interpreted as {@link $TickingInstructionExtension}.
     */
    export type $TickingInstructionExtension_ = (() => void);
    export class $PotatoProjectileEntityExtension {
    }
    export interface $PotatoProjectileEntityExtension {
        aeronautics$setIsFromMountedPotatoCannon(arg0: boolean): void;
        aeronautics$setDamageMultiplier(arg0: number): void;
    }
}
