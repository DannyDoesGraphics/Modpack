import { $Codec } from "@package/com/mojang/serialization";
import { $TagType, $Tag_, $CompoundTag, $ListTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Number, $Class } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/dev/ftb/mods/ftblibrary/snbt/config";

declare module "@package/dev/ftb/mods/ftblibrary/snbt" {
    export class $SNBTCompoundTag extends $CompoundTag {
        singleLine(): void;
        singleLine(key: string): void;
        putNumber(key: string, number: $Number): void;
        getNullableList(key: string, type: number): $ListTag;
        putNull(key: string): void;
        static of(tag: $Tag_): $SNBTCompoundTag;
        merge(other: $CompoundTag_, overwrite: boolean): $CompoundTag;
        comment(key: string, comment: string): void;
        comment(key: string, ...comment: string[]): void;
        getComment(key: string): string;
        getList<T extends $Tag>(key: string, type: $Class<T>): $List<T>;
        isBoolean(key: string): boolean;
        getCompound(string: string): $SNBTCompoundTag;
        copy(): $CompoundTag;
        static CODEC: $Codec<$CompoundTag>;
        static TYPE: $TagType<$CompoundTag>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $SNBTCompoundTag>;
        tags: $Map<string, $Tag>;
        constructor();
    }
}
