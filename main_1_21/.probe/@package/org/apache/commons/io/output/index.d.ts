import { $FilterOutputStream, $OutputStream } from "@package/java/io";

declare module "@package/org/apache/commons/io/output" {
    export class $ProxyOutputStream extends $FilterOutputStream {
        constructor(arg0: $OutputStream);
    }
    export class $CountingOutputStream extends $ProxyOutputStream {
        getCount(): number;
        resetCount(): number;
        getByteCount(): number;
        resetByteCount(): number;
        constructor(arg0: $OutputStream);
        get count(): number;
        get byteCount(): number;
    }
}
