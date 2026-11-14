export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        setUserName(arg0: string): void;
        getNonProxyHosts(): string;
        setNonProxyHosts(arg0: string): void;
        getNtlmHost(): string;
        setNtlmHost(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        getNtlmDomain(): string;
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        getPassword(): string;
        getUserName(): string;
        setPassword(arg0: string): void;
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        setProtocol(arg0: string): void;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
