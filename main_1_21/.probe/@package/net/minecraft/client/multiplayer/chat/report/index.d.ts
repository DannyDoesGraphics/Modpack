import { $IntSet, $IntCollection } from "@package/it/unimi/dsi/fastutil/ints";
import { $Unit, $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component_, $ThrowingComponent, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $Tooltip } from "@package/net/minecraft/client/gui/components";
import { $AbuseReport_, $AbuseReportLimits_, $AbuseReport, $AbuseReportLimits } from "@package/com/mojang/authlib/minecraft/report";
import { $Minecraft } from "@package/net/minecraft/client";
import { $AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$RealmInfo, $AbuseReportRequest$ClientInfo } from "@package/com/mojang/authlib/yggdrasil/request";
import { $LoggedChatMessage$Player_, $LoggedChatMessage$Player, $ChatLog } from "@package/net/minecraft/client/multiplayer/chat";
import { $UUID, $UUID_ } from "@package/java/util";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $Instant } from "@package/java/time";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Throwable, $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/multiplayer/chat/report" {
    export class $ChatReportContextBuilder {
        acceptContext(lastChainMessage: $PlayerChatMessage_): boolean;
        trackContext(lastChainMessage: $PlayerChatMessage_): void;
        collectAllContext(chatLog: $ChatLog, reportedMessages: $IntCollection, handler: $ChatReportContextBuilder$Handler_): void;
        isActive(): boolean;
        constructor(leadingCount: number);
        get active(): boolean;
    }
    export class $ChatReport extends $Report {
        toggleReported(id: number, limits: $AbuseReportLimits_): void;
    }
    export class $ReportEnvironment$Server {
    }
    export interface $ReportEnvironment$Server {
    }
    export class $NameReport$Builder extends $Report$Builder<$NameReport> {
        constructor(report: $NameReport, limits: $AbuseReportLimits_);
        constructor(reportedProfileId: $UUID_, reportedName: string, limits: $AbuseReportLimits_);
    }
    export class $Report$Builder<R extends $Report> {
        setComments(comments: string): void;
        attested(): boolean;
        checkBuildable(): $Report$CannotBuildReason;
        setAttested(attested: boolean): void;
        reportedProfileId(): $UUID;
        setReason(reason: $ReportReason_): void;
        report(): R;
        hasContent(): boolean;
        comments(): string;
        reason(): $ReportReason;
        build(reportingContext: $ReportingContext): $Either<$Report$Result, $Report$CannotBuildReason>;
    }
    export class $Report$CannotBuildReason extends $Record {
        message(): $Component;
        tooltip(): $Tooltip;
        static NO_REPORTED_MESSAGES: $Report$CannotBuildReason;
        static NOT_ATTESTED: $Report$CannotBuildReason;
        static COMMENT_TOO_LONG: $Report$CannotBuildReason;
        static NO_REASON: $Report$CannotBuildReason;
        static TOO_MANY_MESSAGES: $Report$CannotBuildReason;
        constructor(arg0: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $Report$CannotBuildReason}.
     */
    export type $Report$CannotBuildReason_ = { message?: $Component_,  } | [message?: $Component_, ];
    export class $AbuseReportSender$Services extends $Record implements $AbuseReportSender {
        reportLimits(): $AbuseReportLimits;
        isEnabled(): boolean;
        environment(): $ReportEnvironment;
        send(id: $UUID_, reportType: $ReportType_, report: $AbuseReport_): $CompletableFuture<$Unit>;
        userApiService(): $UserApiService;
        constructor(arg0: $ReportEnvironment_, arg1: $UserApiService);
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportSender$Services}.
     */
    export type $AbuseReportSender$Services_ = { environment?: $ReportEnvironment_, userApiService?: $UserApiService,  } | [environment?: $ReportEnvironment_, userApiService?: $UserApiService, ];
    export class $ReportingContext {
        sender(): $AbuseReportSender;
        setReportDraft(draftReport: $Report | null): void;
        hasDraftReportFor(uuid: $UUID_): boolean;
        chatLog(): $ChatLog;
        matches(environment: $ReportEnvironment_): boolean;
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $ReportingContext;
        hasDraftReport(): boolean;
        draftReportHandled(minecraft: $Minecraft, screen: $Screen, quitter: $Runnable_, quitToTitle: boolean): void;
        constructor(sender: $AbuseReportSender, enviroment: $ReportEnvironment_, chatLog: $ChatLog);
        set reportDraft(value: $Report | null);
    }
    export class $ReportEnvironment extends $Record {
        static thirdParty(ip: string): $ReportEnvironment;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        clientVersion(): string;
        static create(server: $ReportEnvironment$Server | null): $ReportEnvironment;
        static local(): $ReportEnvironment;
        server(): $ReportEnvironment$Server;
        static realm(realmsServer: $RealmsServer): $ReportEnvironment;
        constructor(arg0: string, arg1: $ReportEnvironment$Server | null);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment}.
     */
    export type $ReportEnvironment_ = { server?: $ReportEnvironment$Server, clientVersion?: string,  } | [server?: $ReportEnvironment$Server, clientVersion?: string, ];
    export class $AbuseReportSender$SendException extends $ThrowingComponent {
        constructor(arg0: $Component_, arg1: $Throwable);
    }
    export class $SkinReport extends $Report {
        getSkinGetter(): $Supplier<$PlayerSkin>;
        get skinGetter(): $Supplier<$PlayerSkin>;
    }
    export class $ReportEnvironment$Server$ThirdParty extends $Record implements $ReportEnvironment$Server {
        ip(): string;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment$Server$ThirdParty}.
     */
    export type $ReportEnvironment$Server$ThirdParty_ = { ip?: string,  } | [ip?: string, ];
    export class $SkinReport$Builder extends $Report$Builder<$SkinReport> {
        constructor(report: $SkinReport, limits: $AbuseReportLimits_);
        constructor(reportedPlayerId: $UUID_, skinGetter: $Supplier_<$PlayerSkin>, limits: $AbuseReportLimits_);
    }
    export class $ReportReason extends $Enum<$ReportReason> {
        backendName(): string;
        static values(): $ReportReason[];
        static valueOf(arg0: string): $ReportReason;
        description(): $Component;
        title(): $Component;
        static HATE_SPEECH: $ReportReason;
        static ALCOHOL_TOBACCO_DRUGS: $ReportReason;
        static GENERIC: $ReportReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $ReportReason;
        static NON_CONSENSUAL_INTIMATE_IMAGERY: $ReportReason;
        static SELF_HARM_OR_SUICIDE: $ReportReason;
        static HARASSMENT_OR_BULLYING: $ReportReason;
        static CHILD_SEXUAL_EXPLOITATION_OR_ABUSE: $ReportReason;
        static IMMINENT_HARM: $ReportReason;
        static TERRORISM_OR_VIOLENT_EXTREMISM: $ReportReason;
    }
    /**
     * Values that may be interpreted as {@link $ReportReason}.
     */
    export type $ReportReason_ = "generic" | "hate_speech" | "harassment_or_bullying" | "self_harm_or_suicide" | "imminent_harm" | "defamation_impersonation_false_information" | "alcohol_tobacco_drugs" | "child_sexual_exploitation_or_abuse" | "terrorism_or_violent_extremism" | "non_consensual_intimate_imagery";
    export class $ChatReport$Builder extends $Report$Builder<$ChatReport> {
        reportedMessages(): $IntSet;
        toggleReported(id: number): void;
        isReported(id: number): boolean;
        copy(): $ChatReport$Builder;
        constructor(report: $ChatReport, limits: $AbuseReportLimits_);
        constructor(reportedProfileId: $UUID_, limits: $AbuseReportLimits_);
    }
    export class $ReportType extends $Enum<$ReportType> {
        backendName(): string;
        static values(): $ReportType[];
        static valueOf(arg0: string): $ReportType;
        static CHAT: $ReportType;
        static USERNAME: $ReportType;
        static SKIN: $ReportType;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = "chat" | "skin" | "username";
    export class $BanReason extends $Enum<$BanReason> {
        static values(): $BanReason[];
        static valueOf(arg0: string): $BanReason;
        title(): $Component;
        static byId(id: number): $BanReason;
        static HATE_SPEECH: $BanReason;
        static FRAUD: $BanReason;
        static SPAM_OR_ADVERTISING: $BanReason;
        static FALSE_REPORTING: $BanReason;
        static GENERIC_VIOLATION: $BanReason;
        static HARASSMENT_OR_BULLYING: $BanReason;
        static SEXUALLY_INAPPROPRIATE: $BanReason;
        static HATE_TERRORISM_NOTORIOUS_FIGURE: $BanReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $BanReason;
        static NUDITY_OR_PORNOGRAPHY: $BanReason;
        static DRUGS: $BanReason;
        static EXTREME_VIOLENCE_OR_GORE: $BanReason;
        static IMMINENT_HARM_TO_PERSON_OR_PROPERTY: $BanReason;
    }
    /**
     * Values that may be interpreted as {@link $BanReason}.
     */
    export type $BanReason_ = "generic_violation" | "false_reporting" | "hate_speech" | "hate_terrorism_notorious_figure" | "harassment_or_bullying" | "defamation_impersonation_false_information" | "drugs" | "fraud" | "spam_or_advertising" | "nudity_or_pornography" | "sexually_inappropriate" | "extreme_violence_or_gore" | "imminent_harm_to_person_or_property";
    export class $ReportEnvironment$Server$Realm extends $Record implements $ReportEnvironment$Server {
        realmId(): number;
        slotId(): number;
        constructor(arg0: number, arg1: number);
        constructor(realmsServer: $RealmsServer);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment$Server$Realm}.
     */
    export type $ReportEnvironment$Server$Realm_ = { realmId?: number, slotId?: number,  } | [realmId?: number, slotId?: number, ];
    export class $AbuseReportSender {
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $AbuseReportSender;
    }
    export interface $AbuseReportSender {
        reportLimits(): $AbuseReportLimits;
        isEnabled(): boolean;
        send(id: $UUID_, reportType: $ReportType_, report: $AbuseReport_): $CompletableFuture<$Unit>;
        get enabled(): boolean;
    }
    export class $ChatReportContextBuilder$Handler {
    }
    export interface $ChatReportContextBuilder$Handler {
        accept(index: number, player: $LoggedChatMessage$Player_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChatReportContextBuilder$Handler}.
     */
    export type $ChatReportContextBuilder$Handler_ = ((arg0: number, arg1: $LoggedChatMessage$Player) => void);
    export class $ChatReportContextBuilder$Collector {
    }
    export class $Report {
        isReportedPlayer(playerId: $UUID_): boolean;
        copy(): $Report;
        createScreen(lastScreen: $Screen, reportingContext: $ReportingContext): $Screen;
        constructor(reportId: $UUID_, createdAt: $Instant, reportedProfileId: $UUID_);
    }
    export class $NameReport extends $Report {
        getReportedName(): string;
        get reportedName(): string;
    }
    export class $Report$Result extends $Record {
        reportType(): $ReportType;
        report(): $AbuseReport;
        id(): $UUID;
        constructor(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_);
    }
    /**
     * Values that may be interpreted as {@link $Report$Result}.
     */
    export type $Report$Result_ = { id?: $UUID_, report?: $AbuseReport_, reportType?: $ReportType_,  } | [id?: $UUID_, report?: $AbuseReport_, reportType?: $ReportType_, ];
}
