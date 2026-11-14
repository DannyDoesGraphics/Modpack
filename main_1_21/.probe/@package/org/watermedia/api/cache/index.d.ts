import { $File } from "@package/java/io";
import { $URI } from "@package/java/net";
import { $WaterInternalAPI } from "@package/org/watermedia/api";

declare module "@package/org/watermedia/api/cache" {
    export class $CacheAPI extends $WaterInternalAPI {
        static updateEntry(arg0: $CacheAPI$Entry): void;
        static getEntry(arg0: $URI): $CacheAPI$Entry;
        static deleteEntry(arg0: $URI): void;
        static saveFile(arg0: $URI, arg1: string, arg2: number, arg3: number, arg4: number[]): void;
        constructor();
    }
    export class $CacheAPI$Entry {
        isExpired(): boolean;
        setTag(arg0: string): void;
        getUri(): $URI;
        getExpireTime(): number;
        setExpireTime(arg0: number): void;
        getFile(): $File;
        getTime(): number;
        setTime(arg0: number): void;
        getTag(): string;
        constructor(arg0: $URI, arg1: string, arg2: number, arg3: number);
        get expired(): boolean;
        get uri(): $URI;
        get file(): $File;
    }
}
