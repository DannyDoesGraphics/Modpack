import { $ByteBufferBuilder$Result } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/caffeinemc/mods/sodium/mixin/features/render/immediate/buffer_builder/sorting" {
    export class $MeshDataAccessor {
    }
    export interface $MeshDataAccessor {
        sodium$setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
    }
    /**
     * Values that may be interpreted as {@link $MeshDataAccessor}.
     */
    export type $MeshDataAccessor_ = ((arg0: $ByteBufferBuilder$Result) => void);
}
