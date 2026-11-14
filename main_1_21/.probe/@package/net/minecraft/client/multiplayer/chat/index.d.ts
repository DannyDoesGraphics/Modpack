import { $Instant } from "@package/java/time";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MessageSignature_, $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Minecraft, $GuiMessageTag } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $UUID_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as report from "@package/net/minecraft/client/multiplayer/chat/report";

declare module "@package/net/minecraft/client/multiplayer/chat" {
    export class $LoggedChatMessage$Player extends $Record implements $LoggedChatMessage {
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        canReport(uuid: $UUID_): boolean;
        trustLevel(): $ChatTrustLevel;
        toHeadingComponent(): $Component;
        type(): $LoggedChatEvent$Type;
        profile(): $GameProfile;
        message(): $PlayerChatMessage;
        profileId(): $UUID;
        static CODEC: $MapCodec<$LoggedChatMessage$Player>;
        constructor(arg0: $GameProfile, arg1: $PlayerChatMessage_, arg2: $ChatTrustLevel_);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$Player}.
     */
    export type $LoggedChatMessage$Player_ = { message?: $PlayerChatMessage_, trustLevel?: $ChatTrustLevel_, profile?: $GameProfile,  } | [message?: $PlayerChatMessage_, trustLevel?: $ChatTrustLevel_, profile?: $GameProfile, ];
    export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
        static values(): $LoggedChatEvent$Type[];
        static valueOf(arg0: string): $LoggedChatEvent$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $LoggedChatEvent$Type;
        static SYSTEM: $LoggedChatEvent$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent$Type}.
     */
    export type $LoggedChatEvent$Type_ = "player" | "system";
    export class $ChatTrustLevel extends $Enum<$ChatTrustLevel> implements $StringRepresentable {
        isNotSecure(): boolean;
        createTag(chatMessage: $PlayerChatMessage_): $GuiMessageTag;
        static values(): $ChatTrustLevel[];
        static valueOf(arg0: string): $ChatTrustLevel;
        static evaluate(chatMessage: $PlayerChatMessage_, decoratedServerContent: $Component_, timestamp: $Instant): $ChatTrustLevel;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChatTrustLevel>;
        static SECURE: $ChatTrustLevel;
        static MODIFIED: $ChatTrustLevel;
        static NOT_SECURE: $ChatTrustLevel;
        get notSecure(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTrustLevel}.
     */
    export type $ChatTrustLevel_ = "secure" | "modified" | "not_secure";
    export class $ChatListener {
        handlePlayerChatMessage(chatMessage: $PlayerChatMessage_, gameProfile: $GameProfile, boundChatType: $ChatType$Bound_): void;
        handleChatMessageError(sender: $UUID_, boundChatType: $ChatType$Bound_): void;
        removeFromDelayedMessageQueue(signature: $MessageSignature_): boolean;
        handleDisguisedChatMessage(message: $Component_, boundChatType: $ChatType$Bound_): void;
        tick(): void;
        queueSize(): number;
        handleSystemMessage(message: $Component_, isOverlay: boolean): void;
        setMessageDelay(delaySeconds: number): void;
        clearQueue(): void;
        acceptNextDelayedMessage(): void;
        constructor(minecraft: $Minecraft);
        set messageDelay(value: number);
    }
    export class $LoggedChatMessage {
        static system(message: $Component_, timestamp: $Instant): $LoggedChatMessage$System;
        static player(profile: $GameProfile, message: $PlayerChatMessage_, trustLevel: $ChatTrustLevel_): $LoggedChatMessage$Player;
    }
    export interface $LoggedChatMessage extends $LoggedChatEvent {
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        canReport(uuid: $UUID_): boolean;
    }
    export class $ChatListener$Message extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatListener$Message}.
     */
    export type $ChatListener$Message_ = { signature?: $MessageSignature_, handler?: $BooleanSupplier_,  } | [signature?: $MessageSignature_, handler?: $BooleanSupplier_, ];
    export class $LoggedChatMessage$System extends $Record implements $LoggedChatMessage {
        toContentComponent(): $Component;
        canReport(uuid: $UUID_): boolean;
        timeStamp(): $Instant;
        type(): $LoggedChatEvent$Type;
        message(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$System>;
        constructor(arg0: $Component_, arg1: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$System}.
     */
    export type $LoggedChatMessage$System_ = { message?: $Component_, timeStamp?: $Instant,  } | [message?: $Component_, timeStamp?: $Instant, ];
    export class $LoggedChatEvent {
        static CODEC: $Codec<$LoggedChatEvent>;
    }
    export interface $LoggedChatEvent {
        type(): $LoggedChatEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent}.
     */
    export type $LoggedChatEvent_ = (() => $LoggedChatEvent$Type_);
    export class $ChatLog {
        end(): number;
        lookup(id: number): $LoggedChatEvent;
        start(): number;
        push(event: $LoggedChatEvent_): void;
        static codec(size: number): $Codec<$ChatLog>;
        constructor(size: number);
    }
}
