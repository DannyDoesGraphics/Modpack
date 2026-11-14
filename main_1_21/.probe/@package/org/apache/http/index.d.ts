import { $InputStream, $OutputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isStreaming(): boolean;
        isRepeatable(): boolean;
        isChunked(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContent(): $InputStream;
        writeTo(arg0: $OutputStream): void;
        getContentLength(): number;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        get streaming(): boolean;
        get repeatable(): boolean;
        get chunked(): boolean;
        get content(): $InputStream;
        get contentLength(): number;
        get contentType(): $Header;
        get contentEncoding(): $Header;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameterByName(arg0: string): $NameValuePair;
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameters(): $NameValuePair[];
        getParameter(arg0: number): $NameValuePair;
        get name(): string;
        get value(): string;
        get parameterCount(): number;
        get parameters(): $NameValuePair[];
    }
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
}
