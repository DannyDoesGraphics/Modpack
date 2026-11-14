import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";

declare module "@package/fuzs/puzzleslib/neoforge/impl/data" {
    export class $FileHelperDataProvider {
    }
    export interface $FileHelperDataProvider {
        puzzleslib$setExistingFileHelper(arg0: $ExistingFileHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $FileHelperDataProvider}.
     */
    export type $FileHelperDataProvider_ = ((arg0: $ExistingFileHelper) => void);
}
