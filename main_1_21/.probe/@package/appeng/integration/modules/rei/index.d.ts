import { $IngredientConverter } from "@package/appeng/api/integrations/rei";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemListModAdapter } from "@package/appeng/integration/abstraction";
import { $FluidStack } from "@package/dev/architectury/fluid";
export * as transfer from "@package/appeng/integration/modules/rei/transfer";

declare module "@package/appeng/integration/modules/rei" {
    export class $FluidIngredientConverter implements $IngredientConverter<$FluidStack> {
        constructor();
    }
    export class $ItemIngredientConverter implements $IngredientConverter<$ItemStack> {
        constructor();
    }
    export class $ReiItemListModAdapter implements $ItemListModAdapter {
        setSearchText(arg0: string): void;
        getSearchText(): string;
        hasSearchFocus(): boolean;
    }
    export class $GenericEntryStackHelper {
    }
}
