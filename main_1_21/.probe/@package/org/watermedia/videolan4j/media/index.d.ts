import { $libvlc_picture_t, $libvlc_media_stats_t, $libvlc_instance_t, $libvlc_media_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $State, $State_ } from "@package/org/watermedia/videolan4j/player/base";
import { $URI } from "@package/java/net";
import { $CallbackMedia } from "@package/org/watermedia/videolan4j/media/callback";
import { $MediaListRef, $MediaList } from "@package/org/watermedia/videolan4j/medialist";
import { $Enum } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";
import { $NativeEventManager } from "@package/org/watermedia/videolan4j/support/eventmanager";
export * as events from "@package/org/watermedia/videolan4j/media/events";
export * as callback from "@package/org/watermedia/videolan4j/media/callback";
export * as discoverer from "@package/org/watermedia/videolan4j/media/discoverer";

declare module "@package/org/watermedia/videolan4j/media" {
    export class $Media {
        slaves(): $SlaveApi;
        mediaInstance(): $libvlc_media_t;
        newMediaRef(): $MediaRef;
        newMedia(): $Media;
        subitems(): $SubitemApi;
        parsing(): $ParseApi;
        duplicateMediaRef(): $MediaRef;
        duplicateMedia(): $Media;
        info(): $InfoApi;
        options(): $OptionsApi;
        release(): void;
        events(): $EventApi;
        meta(): $MetaApi;
        constructor(arg0: $libvlc_instance_t, arg1: $libvlc_media_t);
    }
    export class $MediaSlave {
        priority(): number;
        type(): $MediaSlaveType;
        uri(): string;
        constructor(arg0: string, arg1: $MediaSlaveType_, arg2: number);
    }
    export class $TrackInfo {
        codecName(): string;
        codecDescription(): string;
        bitRate(): number;
        originalCodecName(): string;
        orignalCodec(): number;
        profile(): number;
        id(): number;
        level(): number;
        language(): string;
        description(): string;
        codec(): number;
    }
    export class $ThumbnailApi extends $BaseApi {
        requestByTime(arg0: number, arg1: $ThumbnailerSeekSpeed_, arg2: number, arg3: number, arg4: $PictureType_, arg5: number): $ThumbnailRequest;
        requestByPosition(arg0: number, arg1: $ThumbnailerSeekSpeed_, arg2: number, arg3: number, arg4: $PictureType_, arg5: number): $ThumbnailRequest;
        cancel(arg0: $ThumbnailRequest): void;
    }
    export class $InfoApi extends $BaseApi {
        statistics(): $MediaStatistics;
        statistics(arg0: $MediaStatistics): boolean;
        tracks(...arg0: $TrackType_[]): $List<$TrackInfo>;
        mrl(): string;
        audioTracks(): $List<$AudioTrackInfo>;
        videoTracks(): $List<$VideoTrackInfo>;
        textTracks(): $List<$TextTrackInfo>;
        type(): $MediaType;
        duration(): number;
        state(): $State;
    }
    export class $BaseApi {
    }
    export class $MediaNativeEventManager extends $NativeEventManager<$Media, $MediaEventListener> {
    }
    export class $MediaOptions {
    }
    export class $MetaData {
        get(arg0: $Meta_): string;
        values(): $Map<$Meta, string>;
        constructor(arg0: $Map_<$Meta_, string>);
    }
    export class $MediaEventAdapter implements $MediaEventListener {
        mediaThumbnailGenerated(arg0: $Media, arg1: $Picture): void;
        mediaSubItemTreeAdded(arg0: $Media, arg1: $MediaRef): void;
        mediaStateChanged(arg0: $Media, arg1: $State_): void;
        mediaFreed(arg0: $Media, arg1: $MediaRef): void;
        mediaParsedChanged(arg0: $Media, arg1: $MediaParsedStatus_): void;
        mediaDurationChanged(arg0: $Media, arg1: number): void;
        mediaSubItemAdded(arg0: $Media, arg1: $MediaRef): void;
        mediaMetaChanged(arg0: $Media, arg1: $Meta_): void;
        constructor();
    }
    export class $MetaApi extends $BaseApi {
        asMetaData(): $MetaData;
        get(arg0: $Meta_): string;
        set(arg0: $Meta_, arg1: string): void;
        save(): boolean;
    }
    export class $ParseFlag extends $Enum<$ParseFlag> {
        static parseFlag(arg0: number): $ParseFlag;
        static values(): $ParseFlag[];
        intValue(): number;
        static valueOf(arg0: string): $ParseFlag;
        static PARSE_LOCAL: $ParseFlag;
        static FETCH_NETWORK: $ParseFlag;
        static PARSE_NETWORK: $ParseFlag;
        static FETCH_LOCAL: $ParseFlag;
        static DO_INTERACT: $ParseFlag;
    }
    /**
     * Values that may be interpreted as {@link $ParseFlag}.
     */
    export type $ParseFlag_ = "parse_local" | "parse_network" | "fetch_local" | "fetch_network" | "do_interact";
    export class $MediaSlavePriority extends $Enum<$MediaSlavePriority> {
        static mediaSlavePriority(arg0: number): $MediaSlavePriority;
        static values(): $MediaSlavePriority[];
        intValue(): number;
        static valueOf(arg0: string): $MediaSlavePriority;
        static LOWEST: $MediaSlavePriority;
        static HIGH: $MediaSlavePriority;
        static MEDIUM: $MediaSlavePriority;
        static LOW: $MediaSlavePriority;
        static HIGHEST: $MediaSlavePriority;
    }
    /**
     * Values that may be interpreted as {@link $MediaSlavePriority}.
     */
    export type $MediaSlavePriority_ = "lowest" | "low" | "medium" | "high" | "highest";
    export class $VideoProjection extends $Enum<$VideoProjection> {
        static videoProjection(arg0: number): $VideoProjection;
        static values(): $VideoProjection[];
        intValue(): number;
        static valueOf(arg0: string): $VideoProjection;
        static RECTANGULAR: $VideoProjection;
        static CUBEMAP_LAYOUT_STANDARD: $VideoProjection;
        static EQUIRECTANGULAR: $VideoProjection;
    }
    /**
     * Values that may be interpreted as {@link $VideoProjection}.
     */
    export type $VideoProjection_ = "rectangular" | "equirectangular" | "cubemap_layout_standard";
    export class $Multiview extends $Enum<$Multiview> {
        static multiview(arg0: number): $Multiview;
        static values(): $Multiview[];
        intValue(): number;
        static valueOf(arg0: string): $Multiview;
        static STEREO_COL: $Multiview;
        static STEREO_FRAME: $Multiview;
        static STEREO_SBS: $Multiview;
        static TWO_D: $Multiview;
        static STEREO_TB: $Multiview;
        static STEREO_ROW: $Multiview;
        static CHECKERBOARD: $Multiview;
    }
    /**
     * Values that may be interpreted as {@link $Multiview}.
     */
    export type $Multiview_ = "two_d" | "stereo_sbs" | "stereo_tb" | "stereo_row" | "stereo_col" | "stereo_frame" | "checkerboard";
    export class $MediaEventListener {
    }
    export interface $MediaEventListener {
        mediaThumbnailGenerated(arg0: $Media, arg1: $Picture): void;
        mediaSubItemTreeAdded(arg0: $Media, arg1: $MediaRef): void;
        mediaStateChanged(arg0: $Media, arg1: $State_): void;
        mediaFreed(arg0: $Media, arg1: $MediaRef): void;
        mediaParsedChanged(arg0: $Media, arg1: $MediaParsedStatus_): void;
        mediaDurationChanged(arg0: $Media, arg1: number): void;
        mediaSubItemAdded(arg0: $Media, arg1: $MediaRef): void;
        mediaMetaChanged(arg0: $Media, arg1: $Meta_): void;
    }
    export class $MediaParsedStatus extends $Enum<$MediaParsedStatus> {
        static mediaParsedStatus(arg0: number): $MediaParsedStatus;
        static values(): $MediaParsedStatus[];
        intValue(): number;
        static valueOf(arg0: string): $MediaParsedStatus;
        static DONE: $MediaParsedStatus;
        static FAILED: $MediaParsedStatus;
        static SKIPPED: $MediaParsedStatus;
        static TIMEOUT: $MediaParsedStatus;
    }
    /**
     * Values that may be interpreted as {@link $MediaParsedStatus}.
     */
    export type $MediaParsedStatus_ = "skipped" | "failed" | "timeout" | "done";
    export class $MediaStatistics {
        sentBytes(): number;
        sentPackets(): number;
        inputBytesRead(): number;
        inputBitrate(): number;
        demuxBytesRead(): number;
        demuxBitrate(): number;
        demuxCorrupted(): number;
        demuxDiscontinuity(): number;
        decodedVideo(): number;
        decodedAudio(): number;
        picturesDisplayed(): number;
        picturesLost(): number;
        audioBuffersPlayed(): number;
        audioBuffersLost(): number;
        sendBitrate(): number;
        apply(arg0: $libvlc_media_stats_t): void;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number);
    }
    export class $OptionFlag extends $Enum<$OptionFlag> {
        static values(): $OptionFlag[];
        intValue(): number;
        static valueOf(arg0: string): $OptionFlag;
        static optionFlag(arg0: number): $OptionFlag;
        static UNIQUE: $OptionFlag;
        static TRUSTED: $OptionFlag;
    }
    /**
     * Values that may be interpreted as {@link $OptionFlag}.
     */
    export type $OptionFlag_ = "trusted" | "unique";
    export class $VideoTrackInfo extends $TrackInfo {
        projection(): $VideoProjection;
        sampleAspectRatio(): number;
        sampleAspectRatioBase(): number;
        frameRateBase(): number;
        multiview(): $Multiview;
        frameRate(): number;
        width(): number;
        roll(): number;
        height(): number;
        orientation(): $VideoOrientation;
        pitch(): number;
        yaw(): number;
        fov(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: string, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: $VideoOrientation_, arg15: $VideoProjection_, arg16: number, arg17: number, arg18: number, arg19: number, arg20: $Multiview_, arg21: string);
    }
    export class $MediaFactory {
        static newMediaRef(arg0: $libvlc_instance_t, arg1: $CallbackMedia, ...arg2: string[]): $MediaRef;
        static newMediaRef(arg0: $libvlc_instance_t, arg1: $Media, ...arg2: string[]): $MediaRef;
        static newMediaRef(arg0: $libvlc_instance_t, arg1: $MediaRef, ...arg2: string[]): $MediaRef;
        static newMediaRef(arg0: $libvlc_instance_t, arg1: $URI, ...arg2: string[]): $MediaRef;
        static newMediaRef(arg0: $libvlc_instance_t, arg1: $libvlc_media_t, ...arg2: string[]): $MediaRef;
        static newMedia(arg0: $libvlc_instance_t, arg1: $MediaRef, ...arg2: string[]): $Media;
        static newMedia(arg0: $libvlc_instance_t, arg1: $CallbackMedia, ...arg2: string[]): $Media;
        static newMedia(arg0: $libvlc_instance_t, arg1: $Media, ...arg2: string[]): $Media;
        static newMedia(arg0: $libvlc_instance_t, arg1: $URI, ...arg2: string[]): $Media;
        static newMedia(arg0: $libvlc_instance_t, arg1: $libvlc_media_t, ...arg2: string[]): $Media;
        static duplicateMediaRef(arg0: $libvlc_instance_t, arg1: $MediaRef, ...arg2: string[]): $MediaRef;
        static duplicate(arg0: $libvlc_instance_t, arg1: $Media, ...arg2: string[]): $Media;
    }
    export class $SlaveApi extends $BaseApi {
        get(): $List<$MediaSlave>;
        clear(): void;
        add(arg0: $MediaSlaveType_, arg1: $MediaSlavePriority_, arg2: string): boolean;
    }
    export class $AudioTrackInfo extends $TrackInfo {
        rate(): number;
        channels(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: string, arg8: number, arg9: number, arg10: string);
    }
    export class $MediaSlaveType extends $Enum<$MediaSlaveType> {
        static mediaSlaveType(arg0: number): $MediaSlaveType;
        static values(): $MediaSlaveType[];
        intValue(): number;
        static valueOf(arg0: string): $MediaSlaveType;
        static SUBTITLE: $MediaSlaveType;
        static AUDIO: $MediaSlaveType;
    }
    /**
     * Values that may be interpreted as {@link $MediaSlaveType}.
     */
    export type $MediaSlaveType_ = "subtitle" | "audio";
    export class $ThumbnailRequest {
    }
    export class $PictureType extends $Enum<$PictureType> {
        static pictureType(arg0: number): $PictureType;
        static values(): $PictureType[];
        intValue(): number;
        static valueOf(arg0: string): $PictureType;
        static JPG: $PictureType;
        static ARGB: $PictureType;
        static PNG: $PictureType;
    }
    /**
     * Values that may be interpreted as {@link $PictureType}.
     */
    export type $PictureType_ = "argb" | "png" | "jpg";
    export class $UnknownTrackInfo extends $TrackInfo {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: string, arg8: string);
    }
    export class $ParseApi extends $BaseApi {
        status(): $MediaParsedStatus;
        stop(): void;
        parse(arg0: number, ...arg1: $ParseFlag_[]): boolean;
        parse(arg0: number): boolean;
        parse(): boolean;
        parse(...arg0: $ParseFlag_[]): boolean;
    }
    export class $Picture {
        size(): number;
        type(): $PictureType;
        buffer(): number[];
        time(): number;
        stride(): number;
        width(): number;
        height(): number;
        constructor(arg0: $libvlc_picture_t);
        constructor(arg0: number, arg1: number, arg2: $PictureType_, arg3: number, arg4: number, arg5: number[], arg6: number);
    }
    export class $Meta extends $Enum<$Meta> {
        static values(): $Meta[];
        intValue(): number;
        static valueOf(arg0: string): $Meta;
        static meta(arg0: number): $Meta;
        static PUBLISHER: $Meta;
        static URL: $Meta;
        static NOW_PLAYING: $Meta;
        static TRACK_ID: $Meta;
        static DISC_TOTAL: $Meta;
        static ARTIST: $Meta;
        static DESCRIPTION: $Meta;
        static DISC_NUMBER: $Meta;
        static SETTING: $Meta;
        static DIRECTOR: $Meta;
        static ACTORS: $Meta;
        static ENCODED_BY: $Meta;
        static ALBUM_ARTIST: $Meta;
        static LANGUAGE: $Meta;
        static TRACK_TOTAL: $Meta;
        static EPISODE: $Meta;
        static SHOW_NAME: $Meta;
        static GENRE: $Meta;
        static SEASON: $Meta;
        static DATE: $Meta;
        static TRACK_NUMBER: $Meta;
        static RATING: $Meta;
        static ALBUM: $Meta;
        static TITLE: $Meta;
        static COPYRIGHT: $Meta;
        static ARTWORK_URL: $Meta;
    }
    /**
     * Values that may be interpreted as {@link $Meta}.
     */
    export type $Meta_ = "title" | "artist" | "genre" | "copyright" | "album" | "track_number" | "description" | "rating" | "date" | "setting" | "url" | "language" | "now_playing" | "publisher" | "encoded_by" | "artwork_url" | "track_id" | "track_total" | "director" | "season" | "episode" | "show_name" | "actors" | "album_artist" | "disc_number" | "disc_total";
    export class $TrackType extends $Enum<$TrackType> {
        static trackType(arg0: number): $TrackType;
        static values(): $TrackType[];
        intValue(): number;
        static valueOf(arg0: string): $TrackType;
        static VIDEO: $TrackType;
        static TEXT: $TrackType;
        static UNKNOWN: $TrackType;
        static AUDIO: $TrackType;
    }
    /**
     * Values that may be interpreted as {@link $TrackType}.
     */
    export type $TrackType_ = "unknown" | "audio" | "video" | "text";
    export class $OptionsApi extends $BaseApi {
        add(arg0: string, ...arg1: $OptionFlag_[]): boolean;
        add(arg0: string[], ...arg1: $OptionFlag_[]): boolean;
        add(...arg0: string[]): boolean;
    }
    export class $SubitemApi extends $BaseApi {
        newMediaListRef(): $MediaListRef;
        newMediaList(): $MediaList;
    }
    export class $VideoOrientation extends $Enum<$VideoOrientation> {
        static videoOrientation(arg0: number): $VideoOrientation;
        static values(): $VideoOrientation[];
        intValue(): number;
        static valueOf(arg0: string): $VideoOrientation;
        static TOP_LEFT: $VideoOrientation;
        static RIGHT_BOTTOM: $VideoOrientation;
        static BOTTOM_RIGHT: $VideoOrientation;
        static RIGHT_TOP: $VideoOrientation;
        static TOP_RIGHT: $VideoOrientation;
        static LEFT_BOTTOM: $VideoOrientation;
        static LEFT_TOP: $VideoOrientation;
        static BOTTOM_LEFT: $VideoOrientation;
    }
    /**
     * Values that may be interpreted as {@link $VideoOrientation}.
     */
    export type $VideoOrientation_ = "top_left" | "top_right" | "bottom_left" | "bottom_right" | "left_top" | "left_bottom" | "right_top" | "right_bottom";
    export class $EventApi extends $BaseApi {
        addMediaEventListener(arg0: $MediaEventListener): void;
        removeMediaEventListener(arg0: $MediaEventListener): void;
    }
    export class $TextTrackInfo extends $TrackInfo {
        encoding(): string;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string, arg7: string, arg8: string, arg9: string);
    }
    export class $ThumbnailerSeekSpeed extends $Enum<$ThumbnailerSeekSpeed> {
        static pictureType(arg0: number): $ThumbnailerSeekSpeed;
        static values(): $ThumbnailerSeekSpeed[];
        intValue(): number;
        static valueOf(arg0: string): $ThumbnailerSeekSpeed;
        static PRECISE: $ThumbnailerSeekSpeed;
        static FAST: $ThumbnailerSeekSpeed;
    }
    /**
     * Values that may be interpreted as {@link $ThumbnailerSeekSpeed}.
     */
    export type $ThumbnailerSeekSpeed_ = "precise" | "fast";
    export class $MediaSlaves {
    }
    export class $TrackInformation {
    }
    export class $MediaRef {
        mediaInstance(): $libvlc_media_t;
        newMediaRef(): $MediaRef;
        newMedia(): $Media;
        duplicateMediaRef(): $MediaRef;
        duplicateMedia(): $Media;
        release(): void;
        constructor(arg0: $libvlc_instance_t, arg1: $libvlc_media_t);
    }
    export class $MediaType extends $Enum<$MediaType> {
        static mediaType(arg0: number): $MediaType;
        static values(): $MediaType[];
        intValue(): number;
        static valueOf(arg0: string): $MediaType;
        static DIRECTORY: $MediaType;
        static DISC: $MediaType;
        static STREAM: $MediaType;
        static UNKNOWN: $MediaType;
        static FILE: $MediaType;
        static PLAYLIST: $MediaType;
    }
    /**
     * Values that may be interpreted as {@link $MediaType}.
     */
    export type $MediaType_ = "unknown" | "file" | "directory" | "disc" | "stream" | "playlist";
}
