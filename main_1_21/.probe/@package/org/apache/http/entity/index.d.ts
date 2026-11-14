import { $Serializable, $InputStream } from "@package/java/io";
import { $HttpEntity, $Header, $NameValuePair } from "@package/org/apache/http";
import { $Charset } from "@package/java/nio/charset";

declare module "@package/org/apache/http/entity" {
    export class $AbstractHttpEntity implements $HttpEntity {
        setChunked(arg0: boolean): void;
        setContentEncoding(arg0: $Header): void;
        setContentEncoding(arg0: string): void;
        isChunked(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        setContentType(arg0: $Header): void;
        setContentType(arg0: string): void;
    }
    export class $InputStreamEntity extends $AbstractHttpEntity {
        constructor(arg0: $InputStream);
        constructor(arg0: $InputStream, arg1: number);
        constructor(arg0: $InputStream, arg1: number, arg2: $ContentType);
        constructor(arg0: $InputStream, arg1: $ContentType);
    }
    export class $ContentType implements $Serializable {
        static getLenientOrDefault(arg0: $HttpEntity): $ContentType;
        static getLenient(arg0: $HttpEntity): $ContentType;
        static getByMimeType(arg0: string): $ContentType;
        withParameters(...arg0: $NameValuePair[]): $ContentType;
        getMimeType(): string;
        static get(arg0: $HttpEntity): $ContentType;
        static getOrDefault(arg0: $HttpEntity): $ContentType;
        static parse(arg0: string): $ContentType;
        static create(arg0: string): $ContentType;
        static create(arg0: string, arg1: string): $ContentType;
        static create(arg0: string, arg1: $Charset): $ContentType;
        static create(arg0: string, ...arg1: $NameValuePair[]): $ContentType;
        withCharset(arg0: $Charset): $ContentType;
        withCharset(arg0: string): $ContentType;
        getParameter(arg0: string): string;
        getCharset(): $Charset;
        static TEXT_HTML: $ContentType;
        static WILDCARD: $ContentType;
        static TEXT_XML: $ContentType;
        static APPLICATION_SVG_XML: $ContentType;
        static IMAGE_JPEG: $ContentType;
        static APPLICATION_ATOM_XML: $ContentType;
        static APPLICATION_SOAP_XML: $ContentType;
        static APPLICATION_OCTET_STREAM: $ContentType;
        static IMAGE_WEBP: $ContentType;
        static APPLICATION_FORM_URLENCODED: $ContentType;
        static APPLICATION_JSON: $ContentType;
        static IMAGE_PNG: $ContentType;
        static MULTIPART_FORM_DATA: $ContentType;
        static DEFAULT_BINARY: $ContentType;
        static IMAGE_BMP: $ContentType;
        static IMAGE_GIF: $ContentType;
        static IMAGE_SVG: $ContentType;
        static IMAGE_TIFF: $ContentType;
        static DEFAULT_TEXT: $ContentType;
        static APPLICATION_XHTML_XML: $ContentType;
        static APPLICATION_XML: $ContentType;
        static TEXT_PLAIN: $ContentType;
        get mimeType(): string;
        get charset(): $Charset;
    }
}
