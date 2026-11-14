import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $DieselSmokeStackBlockEntity } from "@package/com/railwayteam/railways/content/smokestack/block/be";

declare module "@package/com/railwayteam/railways/content/smokestack/block/renderer" {
    export class $DieselSmokeStackRenderer extends $SmartBlockEntityRenderer<$DieselSmokeStackBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
