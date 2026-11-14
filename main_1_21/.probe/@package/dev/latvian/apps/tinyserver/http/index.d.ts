import { $Instant } from "@package/java/time";
import { $HTTPResponse, $HTTPPayload } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $OptionalString, $HTTPServer, $OptionalString_, $CompiledPath, $CompiledPath_, $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $Throwable, $Enum, $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
export * as file from "@package/dev/latvian/apps/tinyserver/http/file";
export * as response from "@package/dev/latvian/apps/tinyserver/http/response";

declare module "@package/dev/latvian/apps/tinyserver/http" {
    export class $HTTPMethod extends $Enum<$HTTPMethod> {
        static values(): $HTTPMethod[];
        static valueOf(name: string): $HTTPMethod;
        body(): boolean;
        static fromString(method: string): $HTTPMethod;
        static TRACE: $HTTPMethod;
        static HEAD: $HTTPMethod;
        static DELETE: $HTTPMethod;
        static POST: $HTTPMethod;
        static GET: $HTTPMethod;
        static CONNECT: $HTTPMethod;
        static OPTIONS: $HTTPMethod;
        static PUT: $HTTPMethod;
        static PATCH: $HTTPMethod;
    }
    /**
     * Values that may be interpreted as {@link $HTTPMethod}.
     */
    export type $HTTPMethod_ = "head" | "get" | "post" | "put" | "patch" | "delete" | "options" | "trace" | "connect";
    export class $HTTPPathHandler<REQ extends $HTTPRequest> extends $Record {
        method(): $HTTPMethod;
        handler(): $HTTPHandler<REQ>;
        path(): $CompiledPath;
        static DEFAULT: $HTTPPathHandler<never>;
        constructor(method: $HTTPMethod_, path: $CompiledPath_, handler: $HTTPHandler_<REQ>);
    }
    /**
     * Values that may be interpreted as {@link $HTTPPathHandler}.
     */
    export type $HTTPPathHandler_<REQ> = { method?: $HTTPMethod_, handler?: $HTTPHandler_<$HTTPRequest>, path?: $CompiledPath_,  } | [method?: $HTTPMethod_, handler?: $HTTPHandler_<$HTTPRequest>, path?: $CompiledPath_, ];
    export class $Body {
        getPostData(): $Map<string, $OptionalString>;
        name(): string;
        fileName(): string;
        bytes(): number[];
        property(key: string): $OptionalString;
        text(): string;
        byteBuffer(): $ByteBuffer;
        contentType(): string;
        constructor();
        get postData(): $Map<string, $OptionalString>;
    }
    export class $HTTPRequest {
        createPreResponse(handler: $HTTPHandler_<never>): $HTTPResponse;
        afterResponse(payload: $HTTPPayload, response: $HTTPResponse, handler: $HTTPHandler_<never>, error: $Throwable): void;
        queryString(): string;
        mainBody(): $Body;
        bodyList(): $List<$Body>;
        formData(): $Map<string, $OptionalString>;
        formData(key: string): $OptionalString;
        acceptedEncodings(): $Set<string>;
        bodyBuffer(): $ByteBuffer;
        gitHubSignature(): string;
        gitHubEvent(): string;
        afterInit(): void;
        fullPath(): string;
        handleResponse(payload: $HTTPPayload, response: $HTTPResponse, error: $Throwable): $HTTPResponse;
        cookie(key: string): $OptionalString;
        variable(name: string): $OptionalString;
        cookies(): $Map<string, $OptionalString>;
        method(): $HTTPMethod;
        init(path: string, pathParts: string[], compiledPath: $CompiledPath_, headers: $List_<$Header_>, queryString: string, query: $Map_<string, $OptionalString_>): void;
        startTime(): $Instant;
        query(): $Map<string, $OptionalString>;
        query(key: string): $OptionalString;
        path(): string;
        ip(): string;
        header(name: string): $OptionalString;
        country(): string;
        connection(): $HTTPConnection<never>;
        server(): $HTTPServer<never>;
        userAgent(): string;
        pathParts(): string[];
        headers(): $List<$Header>;
        variables(): $Map<string, $OptionalString>;
        ipv6(): string;
        preInit(session: $HTTPConnection<never>, startTime: $Instant, method: $HTTPMethod_): void;
        constructor();
    }
    export class $Header extends $Record {
        value(): $OptionalString;
        key(): string;
        is(name: string): boolean;
        constructor(key: string, value: string);
        constructor(key: string, value: $OptionalString_);
    }
    /**
     * Values that may be interpreted as {@link $Header}.
     */
    export type $Header_ = { key?: string, value?: $OptionalString_,  } | [key?: string, value?: $OptionalString_, ];
    export class $HTTPHandler<REQ extends $HTTPRequest> {
    }
    export interface $HTTPHandler<REQ extends $HTTPRequest> {
        isFileHandler(): boolean;
        handle(req: REQ): $HTTPResponse;
        get fileHandler(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HTTPHandler}.
     */
    export type $HTTPHandler_<REQ> = ((req: REQ) => $HTTPResponse);
    export class $HTTPUpgrade<REQ extends $HTTPRequest> {
    }
    export interface $HTTPUpgrade<REQ extends $HTTPRequest> {
        start(req: REQ): void;
        protocol(): string;
        isClosed(): boolean;
        get closed(): boolean;
    }
}
