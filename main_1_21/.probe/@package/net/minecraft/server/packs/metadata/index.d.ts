import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $Codec_ } from "@package/com/mojang/serialization";
export * as pack from "@package/net/minecraft/server/packs/metadata/pack";

declare module "@package/net/minecraft/server/packs/metadata" {
    export class $MetadataSectionType<T> {
        static fromCodec<T>(name: string, codec: $Codec_<T>): $MetadataSectionType<T>;
    }
    export interface $MetadataSectionType<T> extends $MetadataSectionSerializer<T> {
        toJson(data: T): $JsonObject;
    }
    export class $MetadataSectionSerializer<T> {
    }
    export interface $MetadataSectionSerializer<T> {
        fromJson(json: $JsonObject_): T;
        /**
         * The name of this section type as it appears in JSON.
         */
        getMetadataSectionName(): string;
        get metadataSectionName(): string;
    }
}
