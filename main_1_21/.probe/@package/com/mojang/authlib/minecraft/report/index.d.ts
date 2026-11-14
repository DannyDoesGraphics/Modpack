import { $Instant } from "@package/java/time";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/authlib/minecraft/report" {
    export class $AbuseReport extends $Record {
        skinUrl(): string;
        createdTime(): $Instant;
        evidence(): $ReportEvidence;
        opinionComments(): string;
        reportedEntity(): $ReportedEntity;
        static name(arg0: string, arg1: $ReportedEntity_, arg2: $Instant): $AbuseReport;
        reason(): string;
        static skin(arg0: string, arg1: string, arg2: string | null, arg3: $ReportedEntity_, arg4: $Instant): $AbuseReport;
        static chat(arg0: string, arg1: string, arg2: $ReportEvidence_, arg3: $ReportedEntity_, arg4: $Instant): $AbuseReport;
        constructor(opinionComments: string, reason: string | null, evidence: $ReportEvidence_ | null, skinUrl: string | null, reportedEntity: $ReportedEntity_, createdTime: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReport}.
     */
    export type $AbuseReport_ = { createdTime?: $Instant, opinionComments?: string, skinUrl?: string, reason?: string, evidence?: $ReportEvidence_, reportedEntity?: $ReportedEntity_,  } | [createdTime?: $Instant, opinionComments?: string, skinUrl?: string, reason?: string, evidence?: $ReportEvidence_, reportedEntity?: $ReportedEntity_, ];
    export class $ReportedEntity extends $Record {
        profileId(): $UUID;
        constructor(profileId: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $ReportedEntity}.
     */
    export type $ReportedEntity_ = { profileId?: $UUID_,  } | [profileId?: $UUID_, ];
    export class $ReportChatMessage extends $Record {
        messageReported(): boolean;
        lastSeen(): $List<$ByteBuffer>;
        signature(): $ByteBuffer;
        index(): number;
        message(): string;
        timestamp(): $Instant;
        sessionId(): $UUID;
        salt(): number;
        profileId(): $UUID;
        constructor(index: number, profileId: $UUID_, sessionId: $UUID_, timestamp: $Instant, salt: number, lastSeen: $List_<$ByteBuffer>, message: string, signature: $ByteBuffer, messageReported: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ReportChatMessage}.
     */
    export type $ReportChatMessage_ = { profileId?: $UUID_, timestamp?: $Instant, signature?: $ByteBuffer, sessionId?: $UUID_, messageReported?: boolean, salt?: number, message?: string, index?: number, lastSeen?: $List_<$ByteBuffer>,  } | [profileId?: $UUID_, timestamp?: $Instant, signature?: $ByteBuffer, sessionId?: $UUID_, messageReported?: boolean, salt?: number, message?: string, index?: number, lastSeen?: $List_<$ByteBuffer>, ];
    export class $ReportEvidence extends $Record {
        messages(): $List<$ReportChatMessage>;
        constructor(messages: $List_<$ReportChatMessage_>);
    }
    /**
     * Values that may be interpreted as {@link $ReportEvidence}.
     */
    export type $ReportEvidence_ = { messages?: $List_<$ReportChatMessage_>,  } | [messages?: $List_<$ReportChatMessage_>, ];
    export class $AbuseReportLimits extends $Record {
        trailingContextMessageCount(): number;
        maxEvidenceMessageCount(): number;
        maxOpinionCommentsLength(): number;
        leadingContextMessageCount(): number;
        maxReportedMessageCount(): number;
        static DEFAULTS: $AbuseReportLimits;
        constructor(maxOpinionCommentsLength: number, maxReportedMessageCount: number, maxEvidenceMessageCount: number, leadingContextMessageCount: number, trailingContextMessageCount: number);
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportLimits}.
     */
    export type $AbuseReportLimits_ = { maxOpinionCommentsLength?: number, maxReportedMessageCount?: number, maxEvidenceMessageCount?: number, leadingContextMessageCount?: number, trailingContextMessageCount?: number,  } | [maxOpinionCommentsLength?: number, maxReportedMessageCount?: number, maxEvidenceMessageCount?: number, leadingContextMessageCount?: number, trailingContextMessageCount?: number, ];
}
