import { $RepositorySource } from "@package/net/minecraft/server/packs/repository";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $GameConfig$UserData } from "@package/net/minecraft/client/main";
import { $HashCode } from "@package/com/google/common/hash";
import { $Path_, $Path } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DownloadQueue$DownloadRequest_, $DownloadQueue$BatchResult, $DownloadQueue$DownloadRequest } from "@package/net/minecraft/server/packs";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Runnable_, $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $UUID, $List, $Map_, $Map, $UUID_ } from "@package/java/util";

declare module "@package/net/minecraft/client/resources/server" {
    export class $PackLoadFeedback$FinalResult extends $Enum<$PackLoadFeedback$FinalResult> {
        static values(): $PackLoadFeedback$FinalResult[];
        static valueOf(arg0: string): $PackLoadFeedback$FinalResult;
        static DISCARDED: $PackLoadFeedback$FinalResult;
        static ACTIVATION_FAILED: $PackLoadFeedback$FinalResult;
        static DECLINED: $PackLoadFeedback$FinalResult;
        static DOWNLOAD_FAILED: $PackLoadFeedback$FinalResult;
        static APPLIED: $PackLoadFeedback$FinalResult;
    }
    /**
     * Values that may be interpreted as {@link $PackLoadFeedback$FinalResult}.
     */
    export type $PackLoadFeedback$FinalResult_ = "declined" | "applied" | "discarded" | "download_failed" | "activation_failed";
    export class $PackReloadConfig {
    }
    export interface $PackReloadConfig {
        scheduleReload(callbacks: $PackReloadConfig$Callbacks): void;
    }
    /**
     * Values that may be interpreted as {@link $PackReloadConfig}.
     */
    export type $PackReloadConfig_ = ((arg0: $PackReloadConfig$Callbacks) => void);
    export class $PackLoadFeedback$Update extends $Enum<$PackLoadFeedback$Update> {
        static values(): $PackLoadFeedback$Update[];
        static valueOf(arg0: string): $PackLoadFeedback$Update;
        static ACCEPTED: $PackLoadFeedback$Update;
        static DOWNLOADED: $PackLoadFeedback$Update;
    }
    /**
     * Values that may be interpreted as {@link $PackLoadFeedback$Update}.
     */
    export type $PackLoadFeedback$Update_ = "accepted" | "downloaded";
    export class $ServerPackManager$RemovalReason extends $Enum<$ServerPackManager$RemovalReason> {
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$RemovalReason}.
     */
    export type $ServerPackManager$RemovalReason_ = "download_failed" | "activation_failed" | "declined" | "discarded" | "server_removed" | "server_replaced";
    export class $PackDownloader {
    }
    export interface $PackDownloader {
        download(packs: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>, resultConsumer: $Consumer_<$DownloadQueue$BatchResult>): void;
    }
    /**
     * Values that may be interpreted as {@link $PackDownloader}.
     */
    export type $PackDownloader_ = ((arg0: $Map<$UUID, $DownloadQueue$DownloadRequest>, arg1: $Consumer<$DownloadQueue$BatchResult>) => void);
    export class $ServerPackManager {
        popAll(): void;
        tick(): void;
        pushPack(id: $UUID_, url: $URL, hash: $HashCode | null): void;
        pushLocalPack(id: $UUID_, path: $Path_): void;
        popPack(id: $UUID_): void;
        allowServerPacks(): void;
        rejectServerPacks(): void;
        resetPromptStatus(): void;
        constructor(downloader: $PackDownloader_, packLoadFeedback: $PackLoadFeedback, reloadConfig: $PackReloadConfig_, updateRequest: $Runnable_, packPromptStatus: $ServerPackManager$PackPromptStatus_);
    }
    export class $PackLoadFeedback {
    }
    export interface $PackLoadFeedback {
        reportUpdate(id: $UUID_, update: $PackLoadFeedback$Update_): void;
        reportFinalResult(id: $UUID_, result: $PackLoadFeedback$FinalResult_): void;
    }
    export class $ServerPackManager$PackDownloadStatus extends $Enum<$ServerPackManager$PackDownloadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$PackDownloadStatus}.
     */
    export type $ServerPackManager$PackDownloadStatus_ = "requested" | "pending" | "done";
    export class $DownloadedPackSource implements $AutoCloseable {
        popAll(): void;
        close(): void;
        createRepositorySource(): $RepositorySource;
        onRecovery(): void;
        cleanupAfterDisconnect(): void;
        onReloadSuccess(): void;
        onRecoveryFailure(): void;
        pushPack(uuid: $UUID_, url: $URL, hash: string | null): void;
        pushLocalPack(uuid: $UUID_, path: $Path_): void;
        popPack(uuid: $UUID_): void;
        configureForServerControl(connection: $Connection, packPromptStatus: $ServerPackManager$PackPromptStatus_): void;
        allowServerPacks(): void;
        rejectServerPacks(): void;
        configureForLocalWorld(): void;
        waitForPackFeedback(uuid: $UUID_): $CompletableFuture<void>;
        constructor(minecraft: $Minecraft, directory: $Path_, userData: $GameConfig$UserData);
    }
    export class $ServerPackManager$PackPromptStatus extends $Enum<$ServerPackManager$PackPromptStatus> {
        static values(): $ServerPackManager$PackPromptStatus[];
        static valueOf(arg0: string): $ServerPackManager$PackPromptStatus;
        static ALLOWED: $ServerPackManager$PackPromptStatus;
        static PENDING: $ServerPackManager$PackPromptStatus;
        static DECLINED: $ServerPackManager$PackPromptStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$PackPromptStatus}.
     */
    export type $ServerPackManager$PackPromptStatus_ = "pending" | "allowed" | "declined";
    export class $ServerPackManager$ActivationStatus extends $Enum<$ServerPackManager$ActivationStatus> {
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$ActivationStatus}.
     */
    export type $ServerPackManager$ActivationStatus_ = "inactive" | "pending" | "active";
    export class $PackReloadConfig$IdAndPath extends $Record {
        id(): $UUID;
        path(): $Path;
        constructor(arg0: $UUID_, arg1: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $PackReloadConfig$IdAndPath}.
     */
    export type $PackReloadConfig$IdAndPath_ = { id?: $UUID_, path?: $Path_,  } | [id?: $UUID_, path?: $Path_, ];
    export class $ServerPackManager$ServerPackData {
    }
    export class $PackReloadConfig$Callbacks {
    }
    export interface $PackReloadConfig$Callbacks {
        packsToLoad(): $List<$PackReloadConfig$IdAndPath>;
        onFailure(recoveryFailure: boolean): void;
        onSuccess(): void;
    }
}
