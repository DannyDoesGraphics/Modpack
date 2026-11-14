import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $JsonObject_ } from "@package/com/google/gson";

declare module "@package/net/minecraft/client/resources/metadata/texture" {
    export class $TextureMetadataSection {
        isBlur(): boolean;
        isClamp(): boolean;
        static DEFAULT_BLUR: boolean;
        static DEFAULT_CLAMP: boolean;
        static SERIALIZER: $TextureMetadataSectionSerializer;
        constructor(blur: boolean, clamp: boolean);
        get blur(): boolean;
        get clamp(): boolean;
    }
    export class $TextureMetadataSectionSerializer implements $MetadataSectionSerializer<$TextureMetadataSection> {
        /**
         * The name of this section type as it appears in JSON.
         */
        getMetadataSectionName(): string;
        fromJson(json: $JsonObject_): $TextureMetadataSection;
        constructor();
        get metadataSectionName(): string;
    }
}
