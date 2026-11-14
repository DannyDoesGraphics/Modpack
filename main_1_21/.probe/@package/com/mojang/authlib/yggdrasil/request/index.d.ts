import { $AbuseReport_, $AbuseReport } from "@package/com/mojang/authlib/minecraft/report";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/mojang/authlib/yggdrasil/request" {
    export class $AbuseReportRequest$RealmInfo extends $Record {
        realmId(): string;
        slotId(): number;
        constructor(realmId: string, slotId: number);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest$RealmInfo}.
     */
    export type $AbuseReportRequest$RealmInfo_ = { realmId?: string, slotId?: number,  } | [realmId?: string, slotId?: number, ];
    export class $AbuseReportRequest extends $Record {
        clientInfo(): $AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        reportType(): string;
        report(): $AbuseReport;
        version(): number;
        id(): $UUID;
        constructor(version: number, id: $UUID_, report: $AbuseReport_, clientInfo: $AbuseReportRequest$ClientInfo_, thirdPartyServerInfo: $AbuseReportRequest$ThirdPartyServerInfo_ | null, realmInfo: $AbuseReportRequest$RealmInfo_ | null, reportType: string);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest}.
     */
    export type $AbuseReportRequest_ = { reportType?: string, version?: number, report?: $AbuseReport_, id?: $UUID_, realmInfo?: $AbuseReportRequest$RealmInfo_, thirdPartyServerInfo?: $AbuseReportRequest$ThirdPartyServerInfo_, clientInfo?: $AbuseReportRequest$ClientInfo_,  } | [reportType?: string, version?: number, report?: $AbuseReport_, id?: $UUID_, realmInfo?: $AbuseReportRequest$RealmInfo_, thirdPartyServerInfo?: $AbuseReportRequest$ThirdPartyServerInfo_, clientInfo?: $AbuseReportRequest$ClientInfo_, ];
    export class $AbuseReportRequest$ClientInfo extends $Record {
        clientVersion(): string;
        locale(): string;
        constructor(clientVersion: string, locale: string);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest$ClientInfo}.
     */
    export type $AbuseReportRequest$ClientInfo_ = { locale?: string, clientVersion?: string,  } | [locale?: string, clientVersion?: string, ];
    export class $AbuseReportRequest$ThirdPartyServerInfo extends $Record {
        address(): string;
        constructor(address: string);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportRequest$ThirdPartyServerInfo}.
     */
    export type $AbuseReportRequest$ThirdPartyServerInfo_ = { address?: string,  } | [address?: string, ];
}
