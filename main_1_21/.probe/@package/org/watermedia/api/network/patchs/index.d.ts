import { $InputStream } from "@package/java/io";
import { $URI } from "@package/java/net";
import { $KickChannel, $KickVideo } from "@package/org/watermedia/api/network/patchs/kick";
import { $Pattern } from "@package/java/util/regex";
import { $Object, $Throwable, $Enum, $Exception } from "@package/java/lang";
export * as streamable from "@package/org/watermedia/api/network/patchs/streamable";
export * as twitch from "@package/org/watermedia/api/network/patchs/twitch";
export * as kick from "@package/org/watermedia/api/network/patchs/kick";
export * as onedrive from "@package/org/watermedia/api/network/patchs/onedrive";

declare module "@package/org/watermedia/api/network/patchs" {
    export class $TwitterPatch$MediaDetail {
    }
    export class $TwitterPatch$User {
    }
    export class $MediaFirePatch extends $AbstractPatch {
        constructor();
    }
    export class $TikTokPatch {
        constructor();
    }
    export class $TwitterPatch$VideoInfo {
    }
    export class $AbstractPatch$FixingURLException extends $Exception {
        constructor(arg0: string, arg1: $Throwable);
        constructor(arg0: $URI, arg1: $Throwable);
    }
    export class $TwitterPatch extends $AbstractPatch {
        constructor();
    }
    export class $DrivePatch extends $AbstractPatch {
        constructor();
    }
    export class $StreamablePatch extends $AbstractPatch {
        constructor();
    }
    export class $TwitchPatch extends $AbstractPatch {
        constructor();
    }
    export class $TwitterPatch$Media {
    }
    export class $KickPatch extends $AbstractPatch {
        getVideoInfo(arg0: string): $KickVideo;
        getChannelInfo(arg0: string): $KickChannel;
        getInputStream(arg0: $URI): $InputStream;
        constructor();
    }
    export class $TwitterPatch$Text {
    }
    export class $PornHubPatch$FlashVars$NextVideo {
        uploaderLink: string;
        thumb: string;
        rating: number;
        nextUrl: string;
        title: string;
        duration: number;
        badge: string;
        viewsText: string;
        isHD: number;
        isJoinPageEntry: boolean;
        vkey: string;
        views: string;
        channelTitle: $Object;
        constructor();
    }
    export class $AbstractPatch {
        name(): string;
        platform(): string;
        patch(arg0: $URI, arg1: $AbstractPatch$Quality_): $AbstractPatch$Result;
        isValid(arg0: $URI): boolean;
        constructor();
    }
    export class $PornHubPatch extends $AbstractPatch {
        static PATTERN: $Pattern;
        constructor();
    }
    export class $AbstractPatch$Quality extends $Enum<$AbstractPatch$Quality> {
        static values(): $AbstractPatch$Quality[];
        static valueOf(arg0: string): $AbstractPatch$Quality;
        static LOWEST: $AbstractPatch$Quality;
        static HIGH: $AbstractPatch$Quality;
        static LOW: $AbstractPatch$Quality;
        static HIGHEST: $AbstractPatch$Quality;
        static MIDDLE: $AbstractPatch$Quality;
    }
    /**
     * Values that may be interpreted as {@link $AbstractPatch$Quality}.
     */
    export type $AbstractPatch$Quality_ = "lowest" | "low" | "middle" | "high" | "highest";
    export class $PornHubPatch$FlashVars$PlaybackTracking {
        video_duration: number;
        video_timestamp: number;
        hostname: string;
        sample_size: number;
        munged_session_id: string;
        eventName: string;
        watch_session: string;
        app_id: number;
        video_id: number;
        constructor();
    }
    export class $TwitterPatch$Video {
    }
    export class $PornHubPatch$FlashVars {
        vcServerUrl: string;
        isp: string;
        related_url: string;
        customLogo: string;
        startLagThreshold: number;
        pauseroll_url: string;
        language: string;
        mostviewed_url: string;
        disable_sharebar: number;
        actionTags: string;
        mediaPriority: string;
        toprated_url: string;
        video_unavailable_country: string;
        adRollGlobalConfig: $PornHubPatch$FlashVars$AdRollConfig[];
        autoreplay: string;
        isHD: string;
        appId: string;
        options: string;
        link_url: string;
        experimentId: string;
        embedCode: string;
        mediaDefinitions: $PornHubPatch$FlashVars$MediaDefinition[];
        outBufferLagThreshold: number;
        image_url: string;
        postroll_url: string;
        cdn: string;
        autoplay: string;
        chromecast: boolean;
        video_title: string;
        isVertical: string;
        trackingTimeWatched: boolean;
        cdnProvider: string;
        defaultQuality: number[];
        thumbs: $PornHubPatch$FlashVars$Thumbs;
        autoFullscreen: boolean;
        mp4_seek: string;
        video_duration: number;
        nextVideo: $PornHubPatch$FlashVars$NextVideo;
        hotspots: number[];
        geo: string;
        isVR: number;
        hidePostPauseRoll: boolean;
        tubesCmsPrerollConfigType: string;
        htmlPauseRoll: string;
        searchEngineData: $Object;
        htmlPostRoll: string;
        maxInitialBufferLength: number;
        video_unavailable: string;
        playbackTracking: $PornHubPatch$FlashVars$PlaybackTracking;
        service: string;
        constructor();
    }
    export class $AbstractPatch$Result {
        setAudioTrack(arg0: $URI): $AbstractPatch$Result;
        fallbackResult: $AbstractPatch$FallbackResult;
        audioUrl: $URI;
        assumeVideo: boolean;
        assumeStream: boolean;
        uri: $URI;
        quality: $AbstractPatch$Quality;
        constructor(arg0: $URI, arg1: boolean, arg2: boolean);
        constructor(arg0: $URI, arg1: boolean, arg2: boolean, arg3: $AbstractPatch$FallbackResult_);
        set audioTrack(value: $URI);
    }
    export class $TwitterPatch$VideoVariant {
    }
    export class $DiskPatch extends $AbstractPatch {
        constructor();
    }
    export class $OnedrivePatch extends $AbstractPatch {
        constructor();
    }
    export class $TwitterPatch$Tweet {
    }
    export class $PornHubPatch$FlashVars$MediaDefinition {
        videoUrl: string;
        width: number;
        format: string;
        defaultQuality: boolean;
        remote: boolean;
        group: number;
        height: number;
        quality: $Object;
        constructor();
    }
    export class $TwitterPatch$Tombstone {
    }
    export class $TwitterPatch$Photo {
    }
    export class $AbstractPatch$FallbackResult {
    }
    export interface $AbstractPatch$FallbackResult {
        compute(arg0: $URI): $AbstractPatch$Result;
    }
    /**
     * Values that may be interpreted as {@link $AbstractPatch$FallbackResult}.
     */
    export type $AbstractPatch$FallbackResult_ = ((arg0: $URI) => $AbstractPatch$Result);
    export class $PornHubPatch$FlashVars$Thumbs {
        thumbHeight: string;
        cdnType: string;
        samplingFrequency: number;
        urlPattern: string;
        thumbWidth: string;
        type: string;
        constructor();
    }
    export class $DropboxPatch extends $AbstractPatch {
        constructor();
    }
    export class $PornHubPatch$FlashVars$AdRollConfig {
        skipDelay: number;
        delay: number[];
        user_accept_language: string;
        forgetUserAfter: number;
        vastSkipDelay: boolean;
        startPoint: number;
        json: string;
        skippable: boolean;
        onNth: number;
        maxVideoTimeout: number;
        constructor();
    }
    export class $LightshotPatch extends $AbstractPatch {
        connectToLightshot(arg0: $URI): string;
        constructor();
    }
}
