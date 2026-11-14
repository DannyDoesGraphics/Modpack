import { $Supplier_ } from "@package/java/util/function";
import { $StatusCode_, $HTTPConnection, $StatusCode } from "@package/dev/latvian/apps/tinyserver";
import { $HTTPRequest, $HTTPUpgrade } from "@package/dev/latvian/apps/tinyserver/http";
import { $Throwable, $Enum, $Record, $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $UUID, $Map_, $Map, $UUID_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/dev/latvian/apps/tinyserver/ws" {
    export class $FrameInfo extends $Record {
        rsv1(): boolean;
        rsv2(): boolean;
        rsv3(): boolean;
        maskKey(): number;
        maskZero(): boolean;
        applyMask(payload: number[]): void;
        size(): number;
        put(buf: $ByteBuffer): void;
        bytes(): number;
        static read(connection: $HTTPConnection<any>): $FrameInfo;
        mask(): boolean;
        opcode(): $Opcode;
        fin(): boolean;
        constructor(opcode: $Opcode_, mask: boolean, fin: boolean, rsv1: boolean, rsv2: boolean, rsv3: boolean, maskKey: number, size: number);
    }
    /**
     * Values that may be interpreted as {@link $FrameInfo}.
     */
    export type $FrameInfo_ = { maskKey?: number, size?: number, mask?: boolean, opcode?: $Opcode_, rsv3?: boolean, rsv2?: boolean, rsv1?: boolean, fin?: boolean,  } | [maskKey?: number, size?: number, mask?: boolean, opcode?: $Opcode_, rsv3?: boolean, rsv2?: boolean, rsv1?: boolean, fin?: boolean, ];
    export class $WSSessionFactory<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> {
        static DEFAULT: $WSSessionFactory<$HTTPRequest, $WSSession<$HTTPRequest>>;
    }
    export interface $WSSessionFactory<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> {
        create(): WSS;
    }
    /**
     * Values that may be interpreted as {@link $WSSessionFactory}.
     */
    export type $WSSessionFactory_<REQ, WSS> = (() => WSS);
    export class $Frame extends $Record {
        applyMask(): void;
        static ping(buffer: number[]): $Frame;
        payload(): number[];
        info(): $FrameInfo;
        appendTo(previous: $Frame_): $Frame;
        static text(text: string): $Frame;
        static simple(opcode: $Opcode_, mask: number, payload: number[]): $Frame;
        static binary(buffer: number[]): $Frame;
        constructor(info: $FrameInfo_, payload: number[]);
    }
    /**
     * Values that may be interpreted as {@link $Frame}.
     */
    export type $Frame_ = { info?: $FrameInfo_, payload?: number[],  } | [info?: $FrameInfo_, payload?: number[], ];
    export class $WSCloseStatus extends $Enum<$WSCloseStatus> {
        static values(): $WSCloseStatus[];
        static valueOf(name: string): $WSCloseStatus;
        static CLOSED: $WSCloseStatus;
        static GOING_AWAY: $WSCloseStatus;
        static UNSUPPORTED_DATA: $WSCloseStatus;
        static PROTOCOL_ERROR: $WSCloseStatus;
        statusCode: $StatusCode;
    }
    /**
     * Values that may be interpreted as {@link $WSCloseStatus}.
     */
    export type $WSCloseStatus_ = "closed" | "going_away" | "protocol_error" | "unsupported_data";
    export class $WSSession<REQ extends $HTTPRequest> implements $HTTPUpgrade<REQ> {
        onOpen(req: REQ): void;
        onTextMessage(message: string): void;
        sendText(payload: string): void;
        sendBinary(payload: number[]): void;
        sendPing(payload: number[]): void;
        onBinaryMessage(message: number[]): void;
        onPing(payload: number[]): void;
        onPong(payload: number[]): void;
        id(): $UUID;
        start(req: REQ): void;
        close(status: $WSCloseStatus_, reason: string): void;
        protocol(): string;
        onClose(reason: $StatusCode_, remote: boolean): void;
        isClosed(): boolean;
        send(frame: $Frame_): void;
        onError(error: $Throwable): void;
        constructor();
        get closed(): boolean;
    }
    export class $Opcode extends $Enum<$Opcode> {
        static get(opcode: number): $Opcode;
        static values(): $Opcode[];
        static valueOf(name: string): $Opcode;
        static CLOSING: $Opcode;
        static PING: $Opcode;
        static BINARY: $Opcode;
        static TEXT: $Opcode;
        opcode: number;
        static CONTINUOUS: $Opcode;
        static PONG: $Opcode;
    }
    /**
     * Values that may be interpreted as {@link $Opcode}.
     */
    export type $Opcode_ = "continuous" | "text" | "binary" | "closing" | "ping" | "pong";
    export class $WSHandler<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> {
        static empty<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>>(): $WSHandler<REQ, WSS>;
        [Symbol.iterator](): Iterator<WSS>
    }
    export interface $WSHandler<REQ extends $HTTPRequest, WSS extends $WSSession<REQ>> extends $Iterable<WSS> {
        sessions(): $Map<$UUID, WSS>;
        broadcastText(payload: $Supplier_<string>): void;
        broadcastText(payload: string): void;
        broadcastBinary(payload: $Supplier_<number[]>): void;
        broadcastBinary(payload: number[]): void;
        broadcastPing(payload: number[]): void;
        broadcastPing(payload: $Supplier_<number[]>): void;
        iterator(): $Iterator<WSS>;
        spliterator(): $Spliterator<WSS>;
        broadcast(frame: $Frame_): void;
        [Symbol.iterator](): Iterator<WSS>
    }
    /**
     * Values that may be interpreted as {@link $WSHandler}.
     */
    export type $WSHandler_<REQ, WSS> = (() => $Map_<$UUID_, WSS>);
}
