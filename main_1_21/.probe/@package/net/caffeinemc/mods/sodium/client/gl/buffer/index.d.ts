import { $EnumBitField, $EnumBit } from "@package/net/caffeinemc/mods/sodium/client/gl/util";
import { $GlObject } from "@package/net/caffeinemc/mods/sodium/client/gl";
import { $Enum } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/buffer" {
    export class $GlBufferTarget extends $Enum<$GlBufferTarget> {
        getTargetParameter(): number;
        getBindingParameter(): number;
        static values(): $GlBufferTarget[];
        static valueOf(arg0: string): $GlBufferTarget;
        static COPY_WRITE_BUFFER: $GlBufferTarget;
        static COPY_READ_BUFFER: $GlBufferTarget;
        static VALUES: $GlBufferTarget[];
        static COUNT: number;
        static ELEMENT_BUFFER: $GlBufferTarget;
        static ARRAY_BUFFER: $GlBufferTarget;
        get targetParameter(): number;
        get bindingParameter(): number;
    }
    /**
     * Values that may be interpreted as {@link $GlBufferTarget}.
     */
    export type $GlBufferTarget_ = "array_buffer" | "element_buffer" | "copy_read_buffer" | "copy_write_buffer";
    export class $GlImmutableBuffer extends $GlBuffer {
        getFlags(): $EnumBitField<$GlBufferStorageFlags>;
        constructor(arg0: $EnumBitField<$GlBufferStorageFlags_>);
        get flags(): $EnumBitField<$GlBufferStorageFlags>;
    }
    export class $GlBuffer extends $GlObject {
        getActiveMapping(): $GlBufferMapping;
        setActiveMapping(arg0: $GlBufferMapping): void;
    }
    export class $GlMutableBuffer extends $GlBuffer {
        getSize(): number;
        setSize(arg0: number): void;
        constructor();
    }
    export class $GlBufferUsage extends $Enum<$GlBufferUsage> {
        static values(): $GlBufferUsage[];
        static valueOf(arg0: string): $GlBufferUsage;
        getId(): number;
        static STATIC_COPY: $GlBufferUsage;
        static STREAM_DRAW: $GlBufferUsage;
        static STREAM_READ: $GlBufferUsage;
        static STREAM_COPY: $GlBufferUsage;
        static DYNAMIC_COPY: $GlBufferUsage;
        static DYNAMIC_DRAW: $GlBufferUsage;
        static STATIC_READ: $GlBufferUsage;
        static STATIC_DRAW: $GlBufferUsage;
        static DYNAMIC_READ: $GlBufferUsage;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $GlBufferUsage}.
     */
    export type $GlBufferUsage_ = "stream_draw" | "stream_read" | "stream_copy" | "static_draw" | "static_read" | "static_copy" | "dynamic_draw" | "dynamic_read" | "dynamic_copy";
    export class $GlBufferStorageFlags extends $Enum<$GlBufferStorageFlags> implements $EnumBit {
        getBits(): number;
        static values(): $GlBufferStorageFlags[];
        static valueOf(arg0: string): $GlBufferStorageFlags;
        static PERSISTENT: $GlBufferStorageFlags;
        static COHERENT: $GlBufferStorageFlags;
        static CLIENT_STORAGE: $GlBufferStorageFlags;
        static MAP_READ: $GlBufferStorageFlags;
        static MAP_WRITE: $GlBufferStorageFlags;
        get bits(): number;
    }
    /**
     * Values that may be interpreted as {@link $GlBufferStorageFlags}.
     */
    export type $GlBufferStorageFlags_ = "persistent" | "map_read" | "map_write" | "client_storage" | "coherent";
    export class $GlBufferMapFlags extends $Enum<$GlBufferMapFlags> implements $EnumBit {
        getBits(): number;
        static values(): $GlBufferMapFlags[];
        static valueOf(arg0: string): $GlBufferMapFlags;
        static READ: $GlBufferMapFlags;
        static PERSISTENT: $GlBufferMapFlags;
        static INVALIDATE_RANGE: $GlBufferMapFlags;
        static COHERENT: $GlBufferMapFlags;
        static EXPLICIT_FLUSH: $GlBufferMapFlags;
        static UNSYNCHRONIZED: $GlBufferMapFlags;
        static INVALIDATE_BUFFER: $GlBufferMapFlags;
        static WRITE: $GlBufferMapFlags;
        get bits(): number;
    }
    /**
     * Values that may be interpreted as {@link $GlBufferMapFlags}.
     */
    export type $GlBufferMapFlags_ = "read" | "write" | "persistent" | "invalidate_buffer" | "invalidate_range" | "explicit_flush" | "coherent" | "unsynchronized";
    export class $GlBufferMapping {
        getBufferObject(): $GlBuffer;
        isDisposed(): boolean;
        getMemoryBuffer(): $ByteBuffer;
        write(arg0: $ByteBuffer, arg1: number): void;
        dispose(): void;
        constructor(arg0: $GlBuffer, arg1: $ByteBuffer);
        get bufferObject(): $GlBuffer;
        get disposed(): boolean;
        get memoryBuffer(): $ByteBuffer;
    }
}
