import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $NonNullConsumer } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/simibubi/create/api/behaviour/interaction" {
    export class $ConductorBlockInteractionBehavior$BlazeBurner extends $ConductorBlockInteractionBehavior {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $MovingInteractionBehaviour {
        handlePlayerInteraction(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $AbstractContraptionEntity): boolean;
        handleEntityCollision(arg0: $Entity, arg1: $BlockPos_, arg2: $AbstractContraptionEntity): void;
        static interactionBehaviour<B extends $Block>(arg0: $MovingInteractionBehaviour): $NonNullConsumer<B>;
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $ConductorBlockInteractionBehavior extends $MovingInteractionBehaviour {
        isValidConductor(arg0: $BlockState_): boolean;
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
}
