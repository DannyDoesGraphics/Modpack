import { $Consumer_ } from "@package/java/util/function";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $TickingInstructionExtension } from "@package/dev/eriksonn/aeronautics/mixinterface";
import { $TickingInstructionAccessor } from "@package/dev/eriksonn/aeronautics/mixin/ponder";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";

declare module "@package/net/createmod/ponder/foundation/instruction" {
    export class $PonderInstruction {
        onScheduled(arg0: $PonderScene): void;
        reset(arg0: $PonderScene): void;
        tick(arg0: $PonderScene): void;
        isComplete(): boolean;
        static simple(arg0: $Consumer_<$PonderScene>): $PonderInstruction;
        isBlocking(): boolean;
        constructor();
        get complete(): boolean;
        get blocking(): boolean;
    }
    export class $TickingInstruction extends $PonderInstruction implements $TickingInstructionAccessor, $TickingInstructionExtension {
        handler$dkk000$aeronautics$isComplete(arg0: $CallbackInfoReturnable<any>): void;
        aeronautics$stopInstruction(): void;
        setRemainingTicks(arg0: number): void;
        constructor(arg0: boolean, arg1: number);
        set remainingTicks(value: number);
    }
}
