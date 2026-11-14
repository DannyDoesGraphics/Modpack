import { $EmiStack } from "@package/dev/emi/emi/api/stack";
import { $List } from "@package/java/util";
import { $Class } from "@package/java/lang";
import { $GenericStack_, $GenericStack } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/integrations/emi" {
    export class $EmiStackConverters {
        static getConverters(): $List<$EmiStackConverter>;
        static register(arg0: $EmiStackConverter): boolean;
        static get converters(): $List<$EmiStackConverter>;
    }
    export class $EmiStackConverter {
    }
    export interface $EmiStackConverter {
        toEmiStack(arg0: $GenericStack_): $EmiStack;
        toGenericStack(arg0: $EmiStack): $GenericStack;
        getKeyType(): $Class<never>;
        get keyType(): $Class<never>;
    }
}
