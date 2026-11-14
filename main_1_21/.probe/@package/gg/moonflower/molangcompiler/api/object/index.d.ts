import { $MolangExpression_, $MolangExpression } from "@package/gg/moonflower/molangcompiler/api";
import { $Collection } from "@package/java/util";

declare module "@package/gg/moonflower/molangcompiler/api/object" {
    export class $MolangObject {
    }
    export interface $MolangObject {
        remove(arg0: string): void;
        get(arg0: string): $MolangExpression;
        set(arg0: string, arg1: $MolangExpression_): void;
        getKeys(): $Collection<string>;
        has(arg0: string): boolean;
        getCopy(): $MolangObject;
        isMutable(): boolean;
        get keys(): $Collection<string>;
        get copy(): $MolangObject;
        get mutable(): boolean;
    }
}
