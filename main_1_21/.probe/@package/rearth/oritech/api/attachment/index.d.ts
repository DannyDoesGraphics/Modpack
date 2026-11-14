import { $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/api/attachment" {
    export class $Attachment<A> {
    }
    export interface $Attachment<A> {
        networkCodec(): $StreamCodec<$ByteBuf, A>;
        persistenceCodec(): $Codec<A>;
        initializer(): $Supplier<A>;
        identifier(): $ResourceLocation;
    }
    export class $AttachmentApi {
        static removeAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>): void;
        static hasAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>): boolean;
        static getAttachmentValue<T>(arg0: $LivingEntity, arg1: $Attachment<T>): T;
        static setAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>, arg2: T): void;
        static register<T>(arg0: $Attachment<T>): void;
    }
    export interface $AttachmentApi {
    }
}
