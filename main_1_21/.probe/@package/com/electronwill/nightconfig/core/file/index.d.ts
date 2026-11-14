import { $InputStream, $File_ } from "@package/java/io";
import { $ConfigFormat } from "@package/com/electronwill/nightconfig/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $URL } from "@package/java/net";

declare module "@package/com/electronwill/nightconfig/core/file" {
    export class $FileNotFoundAction {
        static copyResource(arg0: string): $FileNotFoundAction;
        static copyData(arg0: $Path_): $FileNotFoundAction;
        static copyData(arg0: $File_): $FileNotFoundAction;
        static copyData(arg0: $InputStream): $FileNotFoundAction;
        static copyData(arg0: $URL): $FileNotFoundAction;
        static READ_NOTHING: $FileNotFoundAction;
        static CREATE_EMPTY: $FileNotFoundAction;
        static THROW_ERROR: $FileNotFoundAction;
    }
    export interface $FileNotFoundAction {
        run(arg0: $Path_, arg1: $ConfigFormat<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FileNotFoundAction}.
     */
    export type $FileNotFoundAction_ = ((arg0: $Path, arg1: $ConfigFormat<never>) => boolean);
}
