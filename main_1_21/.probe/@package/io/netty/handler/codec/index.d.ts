import { $ChannelOutboundHandlerAdapter, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $ByteBuf, $ByteBufAllocator } from "@package/io/netty/buffer";
import { $Throwable, $Object, $RuntimeException } from "@package/java/lang";

declare module "@package/io/netty/handler/codec" {
    export class $MessageToMessageDecoder<I> extends $ChannelInboundHandlerAdapter {
        acceptInboundMessage(arg0: $Object): boolean;
    }
    export class $ByteToMessageDecoder extends $ChannelInboundHandlerAdapter {
        setSingleDecode(arg0: boolean): void;
        isSingleDecode(): boolean;
        setCumulator(arg0: $ByteToMessageDecoder$Cumulator_): void;
        setDiscardAfterReads(arg0: number): void;
        static COMPOSITE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        static MERGE_CUMULATOR: $ByteToMessageDecoder$Cumulator;
        set cumulator(value: $ByteToMessageDecoder$Cumulator_);
        set discardAfterReads(value: number);
    }
    export class $MessageToByteEncoder<I> extends $ChannelOutboundHandlerAdapter {
        acceptOutboundMessage(arg0: $Object): boolean;
    }
    export class $EncoderException extends $CodecException {
        constructor(arg0: $Throwable);
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Throwable);
        constructor();
    }
    export class $CodecException extends $RuntimeException {
        constructor(arg0: $Throwable);
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Throwable);
        constructor();
    }
    export class $ByteToMessageDecoder$Cumulator {
    }
    export interface $ByteToMessageDecoder$Cumulator {
        cumulate(arg0: $ByteBufAllocator, arg1: $ByteBuf, arg2: $ByteBuf): $ByteBuf;
    }
    /**
     * Values that may be interpreted as {@link $ByteToMessageDecoder$Cumulator}.
     */
    export type $ByteToMessageDecoder$Cumulator_ = ((arg0: $ByteBufAllocator, arg1: $ByteBuf, arg2: $ByteBuf) => $ByteBuf);
    export class $MessageToMessageEncoder<I> extends $ChannelOutboundHandlerAdapter {
        acceptOutboundMessage(arg0: $Object): boolean;
    }
}
