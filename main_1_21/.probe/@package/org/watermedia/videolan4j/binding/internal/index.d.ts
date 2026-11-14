import { $Union, $Structure, $Structure$ByValue, $Callback, $Pointer, $Structure$ByReference, $PointerType } from "@package/com/sun/jna";
import { $size_t } from "@package/org/watermedia/videolan4j/binding/lib";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $IntByReference, $PointerByReference, $LongByReference } from "@package/com/sun/jna/ptr";

declare module "@package/org/watermedia/videolan4j/binding/internal" {
    export class $libvlc_title_description_t extends $Structure {
        i_duration: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        b_menu: number;
        static ALIGN_DEFAULT: number;
        psz_name: $Pointer;
        constructor();
    }
    export class $media_duration_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_duration: number;
        constructor();
    }
    export class $libvlc_media_stats_t extends $Structure {
        i_demux_read_bytes: number;
        i_demux_corrupted: number;
        i_lost_pictures: number;
        i_displayed_pictures: number;
        f_send_bitrate: number;
        i_read_bytes: number;
        i_decoded_audio: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_decoded_video: number;
        i_demux_discontinuity: number;
        static ALIGN_DEFAULT: number;
        f_input_bitrate: number;
        i_played_abuffers: number;
        i_lost_abuffers: number;
        i_sent_bytes: number;
        f_demux_bitrate: number;
        i_sent_packets: number;
        constructor();
    }
    export class $media_player_chapter_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        new_chapter: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_audio_output_device_t$ByReference extends $libvlc_audio_output_device_t implements $Structure$ByReference {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_device: $Pointer;
        psz_description: $Pointer;
        static ALIGN_DEFAULT: number;
        p_next: $libvlc_audio_output_device_t$ByReference;
        constructor();
    }
    export class $vlm_media_event extends $Structure {
        getFieldOrder(): $List<string>;
        psz_instance_name: string;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_media_name: string;
        static ALIGN_DEFAULT: number;
        constructor();
        get fieldOrder(): $List<string>;
    }
    export class $libvlc_chapter_description_t$ByReference extends $libvlc_chapter_description_t implements $Structure$ByReference {
        i_duration: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_time_offset: number;
        static ALIGN_DEFAULT: number;
        psz_name: $Pointer;
        constructor();
    }
    export class $libvlc_media_slave_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_priority: number;
        static ALIGN_DEFAULT: number;
        i_type: number;
        psz_uri: $Pointer;
        constructor();
        constructor(arg0: $Pointer);
    }
    export class $libvlc_media_track_u extends $Union {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        subtitle: $libvlc_subtitle_track_t;
        static ALIGN_DEFAULT: number;
        audio: $libvlc_audio_track_t;
        video: $libvlc_video_track_t;
        constructor();
    }
    export class $libvlc_media_track_t extends $Structure {
        i_id: number;
        i_level: number;
        psz_description: $Pointer;
        psz_language: $Pointer;
        i_type: number;
        i_codec: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        u: $libvlc_media_track_u$ByReference;
        static ALIGN_DEFAULT: number;
        i_original_fourcc: number;
        i_profile: number;
        i_bitrate: number;
        constructor();
    }
    export class $libvlc_video_update_output_cb {
    }
    export interface $libvlc_video_update_output_cb extends $Callback {
        updateOutput(arg0: $Pointer, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_update_output_cb}.
     */
    export type $libvlc_video_update_output_cb_ = ((arg0: $Pointer, arg1: number, arg2: number) => void);
    export class $media_player_media_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        md: $libvlc_media_t;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $media_subitem_added extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_child: $libvlc_media_t;
        constructor();
    }
    export class $libvlc_media_track_u$ByReference extends $libvlc_media_track_u implements $Structure$ByReference {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        subtitle: $libvlc_subtitle_track_t;
        static ALIGN_DEFAULT: number;
        audio: $libvlc_audio_track_t;
        video: $libvlc_video_track_t;
        constructor();
    }
    export class $libvlc_track_description_t extends $Structure {
        i_id: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        p_next: $libvlc_track_description_t$ByReference;
        constructor();
    }
    export class $media_player_scrambled_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        new_scrambled: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_renderer_item_t extends $PointerType {
        constructor();
    }
    export class $libvlc_callback_t {
    }
    export interface $libvlc_callback_t extends $Callback {
        callback(arg0: $libvlc_event_t, arg1: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_callback_t}.
     */
    export type $libvlc_callback_t_ = ((arg0: $libvlc_event_t, arg1: $Pointer) => void);
    export class $media_player_snapshot_taken extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        filename: string;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $media_player_vout extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        new_count: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_unlock_callback_t {
    }
    export interface $libvlc_unlock_callback_t extends $Callback {
        unlock(arg0: $Pointer, arg1: $Pointer, arg2: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_unlock_callback_t}.
     */
    export type $libvlc_unlock_callback_t_ = ((arg0: $Pointer, arg1: $Pointer, arg2: $Pointer) => void);
    export class $libvlc_media_list_t extends $PointerType {
        constructor();
    }
    export class $media_meta_changed extends $Structure {
        meta_type: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_media_list_player_t extends $PointerType {
        constructor();
    }
    export class $media_list_player_next_item_set extends $Structure {
        item: $libvlc_media_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_track_description_t$ByReference extends $libvlc_track_description_t implements $Structure$ByReference {
        i_id: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        p_next: $libvlc_track_description_t$ByReference;
        constructor();
    }
    export class $libvlc_video_viewpoint_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        f_pitch: number;
        f_roll: number;
        static ALIGN_DEFAULT: number;
        f_yaw: number;
        f_field_of_view: number;
        constructor();
    }
    export class $libvlc_display_callback_t {
    }
    export interface $libvlc_display_callback_t extends $Callback {
        display(arg0: $Pointer, arg1: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_display_callback_t}.
     */
    export type $libvlc_display_callback_t_ = ((arg0: $Pointer, arg1: $Pointer) => void);
    export class $libvlc_media_seek_cb {
    }
    export interface $libvlc_media_seek_cb extends $Callback {
        seek(arg0: $Pointer, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_media_seek_cb}.
     */
    export type $libvlc_media_seek_cb_ = ((arg0: $Pointer, arg1: number) => number);
    export class $media_state_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_state: number;
        constructor();
    }
    export class $libvlc_rd_description_t$ByReference extends $libvlc_rd_description_t implements $Structure$ByReference {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        psz_longname: string;
        constructor();
    }
    export class $libvlc_title_description_t$ByReference extends $libvlc_title_description_t implements $Structure$ByReference {
        i_duration: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        b_menu: number;
        static ALIGN_DEFAULT: number;
        psz_name: $Pointer;
        constructor();
    }
    export class $libvlc_audio_cleanup_cb {
    }
    export interface $libvlc_audio_cleanup_cb extends $Callback {
        cleanup(arg0: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_cleanup_cb}.
     */
    export type $libvlc_audio_cleanup_cb_ = ((arg0: $Pointer) => void);
    export class $libvlc_video_format_cb {
    }
    export interface $libvlc_video_format_cb extends $Callback {
        format(arg0: $PointerByReference, arg1: $PointerByReference, arg2: $IntByReference, arg3: $IntByReference, arg4: $PointerByReference, arg5: $PointerByReference): number;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_format_cb}.
     */
    export type $libvlc_video_format_cb_ = ((arg0: $PointerByReference, arg1: $PointerByReference, arg2: $IntByReference, arg3: $IntByReference, arg4: $PointerByReference, arg5: $PointerByReference) => number);
    export class $libvlc_event_e extends $Enum<$libvlc_event_e> {
        static values(): $libvlc_event_e[];
        intValue(): number;
        static valueOf(arg0: string): $libvlc_event_e;
        static event(arg0: number): $libvlc_event_e;
        static libvlc_RendererDiscovererItemAdded: $libvlc_event_e;
        static libvlc_MediaSubItemTreeAdded: $libvlc_event_e;
        static libvlc_MediaListItemDeleted: $libvlc_event_e;
        static libvlc_MediaPlayerPaused: $libvlc_event_e;
        static libvlc_MediaPlayerUnmuted: $libvlc_event_e;
        static libvlc_MediaListPlayerPlayed: $libvlc_event_e;
        static libvlc_MediaPlayerTitleChanged: $libvlc_event_e;
        static libvlc_MediaPlayerAudioVolume: $libvlc_event_e;
        static libvlc_MediaMetaChanged: $libvlc_event_e;
        static libvlc_MediaListPlayerStopped: $libvlc_event_e;
        static libvlc_MediaPlayerAudioDevice: $libvlc_event_e;
        static libvlc_MediaPlayerBackward: $libvlc_event_e;
        static libvlc_MediaPlayerEndReached: $libvlc_event_e;
        static libvlc_MediaSubItemAdded: $libvlc_event_e;
        static libvlc_MediaListPlayerNextItemSet: $libvlc_event_e;
        static libvlc_MediaStateChanged: $libvlc_event_e;
        static libvlc_MediaPlayerLengthChanged: $libvlc_event_e;
        static libvlc_RendererDiscovererItemDeleted: $libvlc_event_e;
        static libvlc_MediaDurationChanged: $libvlc_event_e;
        static libvlc_MediaPlayerPlaying: $libvlc_event_e;
        static libvlc_MediaPlayerMuted: $libvlc_event_e;
        static libvlc_MediaListWillDeleteItem: $libvlc_event_e;
        static libvlc_MediaPlayerESAdded: $libvlc_event_e;
        static libvlc_MediaPlayerTimeChanged: $libvlc_event_e;
        static libvlc_MediaPlayerPositionChanged: $libvlc_event_e;
        static libvlc_MediaPlayerSeekableChanged: $libvlc_event_e;
        static libvlc_MediaPlayerStopped: $libvlc_event_e;
        static libvlc_MediaListViewItemAdded: $libvlc_event_e;
        static libvlc_MediaPlayerCorked: $libvlc_event_e;
        static libvlc_MediaPlayerPausableChanged: $libvlc_event_e;
        static libvlc_MediaPlayerUncorked: $libvlc_event_e;
        static libvlc_MediaListEndReached: $libvlc_event_e;
        static libvlc_MediaListViewWillAddItem: $libvlc_event_e;
        static libvlc_MediaPlayerScrambledChanged: $libvlc_event_e;
        static libvlc_MediaPlayerForward: $libvlc_event_e;
        static libvlc_MediaParsedChanged: $libvlc_event_e;
        static libvlc_MediaPlayerBuffering: $libvlc_event_e;
        static libvlc_MediaPlayerESSelected: $libvlc_event_e;
        static libvlc_MediaPlayerEncounteredError: $libvlc_event_e;
        static libvlc_MediaPlayerChapterChanged: $libvlc_event_e;
        static libvlc_MediaPlayerNothingSpecial: $libvlc_event_e;
        static libvlc_MediaListItemAdded: $libvlc_event_e;
        static libvlc_MediaListViewItemDeleted: $libvlc_event_e;
        static libvlc_MediaThumbnailGenerated: $libvlc_event_e;
        static libvlc_MediaPlayerOpening: $libvlc_event_e;
        static libvlc_MediaFreed: $libvlc_event_e;
        static libvlc_MediaPlayerESDeleted: $libvlc_event_e;
        static libvlc_MediaPlayerVout: $libvlc_event_e;
        static libvlc_MediaListWillAddItem: $libvlc_event_e;
        static libvlc_MediaListViewWillDeleteItem: $libvlc_event_e;
        static libvlc_MediaPlayerMediaChanged: $libvlc_event_e;
        static libvlc_MediaPlayerSnapshotTaken: $libvlc_event_e;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_event_e}.
     */
    export type $libvlc_event_e_ = "libvlc_mediametachanged" | "libvlc_mediasubitemadded" | "libvlc_mediadurationchanged" | "libvlc_mediaparsedchanged" | "libvlc_mediafreed" | "libvlc_mediastatechanged" | "libvlc_mediasubitemtreeadded" | "libvlc_mediathumbnailgenerated" | "libvlc_mediaplayermediachanged" | "libvlc_mediaplayernothingspecial" | "libvlc_mediaplayeropening" | "libvlc_mediaplayerbuffering" | "libvlc_mediaplayerplaying" | "libvlc_mediaplayerpaused" | "libvlc_mediaplayerstopped" | "libvlc_mediaplayerforward" | "libvlc_mediaplayerbackward" | "libvlc_mediaplayerendreached" | "libvlc_mediaplayerencounterederror" | "libvlc_mediaplayertimechanged" | "libvlc_mediaplayerpositionchanged" | "libvlc_mediaplayerseekablechanged" | "libvlc_mediaplayerpausablechanged" | "libvlc_mediaplayertitlechanged" | "libvlc_mediaplayersnapshottaken" | "libvlc_mediaplayerlengthchanged" | "libvlc_mediaplayervout" | "libvlc_mediaplayerscrambledchanged" | "libvlc_mediaplayeresadded" | "libvlc_mediaplayeresdeleted" | "libvlc_mediaplayeresselected" | "libvlc_mediaplayercorked" | "libvlc_mediaplayeruncorked" | "libvlc_mediaplayermuted" | "libvlc_mediaplayerunmuted" | "libvlc_mediaplayeraudiovolume" | "libvlc_mediaplayeraudiodevice" | "libvlc_mediaplayerchapterchanged" | "libvlc_medialistitemadded" | "libvlc_medialistwilladditem" | "libvlc_medialistitemdeleted" | "libvlc_medialistwilldeleteitem" | "libvlc_medialistendreached" | "libvlc_medialistviewitemadded" | "libvlc_medialistviewwilladditem" | "libvlc_medialistviewitemdeleted" | "libvlc_medialistviewwilldeleteitem" | "libvlc_medialistplayerplayed" | "libvlc_medialistplayernextitemset" | "libvlc_medialistplayerstopped" | "libvlc_rendererdiscovereritemadded" | "libvlc_rendererdiscovereritemdeleted";
    export class $libvlc_event_u extends $Union {
        media_duration_changed: $media_duration_changed;
        media_freed: $media_freed;
        media_meta_changed: $media_meta_changed;
        media_player_seekable_changed: $media_player_seekable_changed;
        media_player_length_changed: $media_player_length_changed;
        media_subitem_added: $media_subitem_added;
        media_player_snapshot_taken: $media_player_snapshot_taken;
        media_player_position_changed: $media_player_position_changed;
        media_player_vout: $media_player_vout;
        vlm_media_event: $vlm_media_event;
        media_player_media_changed: $media_player_media_changed;
        media_subitemtree_added: $media_subitemtree_added;
        media_parsed_changed: $media_parsed_changed;
        media_player_title_changed: $media_player_title_changed;
        static ALIGN_NONE: number;
        static ALIGN_MSVC: number;
        media_list_will_delete_item: $media_list_will_delete_item;
        static ALIGN_DEFAULT: number;
        media_player_buffering: $media_player_buffering;
        media_player_es_changed: $media_player_es_changed;
        media_thumbnail_generated: $media_thumbnail_generated;
        media_list_item_deleted: $media_list_item_deleted;
        media_list_player_next_item_set: $media_list_player_next_item_set;
        static ALIGN_GNUC: number;
        media_list_will_add_item: $media_list_will_add_item;
        media_state_changed: $media_state_changed;
        media_player_time_changed: $media_player_time_changed;
        media_player_pausable_changed: $media_player_pausable_changed;
        renderer_discoverer_item_added: $renderer_discoverer_item_added;
        media_player_scrambled_changed: $media_player_scrambled_changed;
        media_player_chapter_changed: $media_player_chapter_changed;
        media_list_item_added: $media_list_item_added;
        media_player_audio_device: $media_player_audio_device;
        renderer_discoverer_item_deleted: $renderer_discoverer_item_deleted;
        media_player_audio_volume: $media_player_audio_volume;
        constructor();
    }
    export class $libvlc_event_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        u: $libvlc_event_u;
        obj: $Pointer;
        static ALIGN_DEFAULT: number;
        type: number;
        constructor();
    }
    export class $libvlc_audio_pause_cb {
    }
    export interface $libvlc_audio_pause_cb extends $Callback {
        pause(arg0: $Pointer, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_pause_cb}.
     */
    export type $libvlc_audio_pause_cb_ = ((arg0: $Pointer, arg1: number) => void);
    export class $libvlc_audio_output_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_description: $Pointer;
        static ALIGN_DEFAULT: number;
        psz_name: $Pointer;
        p_next: $libvlc_audio_output_t$ByReference;
        constructor();
    }
    export class $libvlc_dialog_cancel_cb {
    }
    export interface $libvlc_dialog_cancel_cb extends $Callback {
        callback(arg0: $Pointer, arg1: $libvlc_dialog_id): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_dialog_cancel_cb}.
     */
    export type $libvlc_dialog_cancel_cb_ = ((arg0: $Pointer, arg1: $libvlc_dialog_id) => void);
    export class $libvlc_media_thumbnail_request_t extends $PointerType {
        constructor();
    }
    export class $media_player_buffering extends $Structure {
        new_cache: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $media_freed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        md: $libvlc_media_t;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $media_list_will_add_item extends $Structure {
        item: $libvlc_media_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        index: number;
        constructor();
    }
    export class $libvlc_media_read_cb {
    }
    export interface $libvlc_media_read_cb extends $Callback {
        read(arg0: $Pointer, arg1: $Pointer, arg2: $size_t): $size_t;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_media_read_cb}.
     */
    export type $libvlc_media_read_cb_ = ((arg0: $Pointer, arg1: $Pointer, arg2: $size_t) => $size_t);
    export class $libvlc_media_discoverer_t extends $PointerType {
        constructor();
    }
    export class $libvlc_video_makeCurrent_cb {
    }
    export interface $libvlc_video_makeCurrent_cb extends $Callback {
        makeCurrent(arg0: $Pointer, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_makeCurrent_cb}.
     */
    export type $libvlc_video_makeCurrent_cb_ = ((arg0: $Pointer, arg1: number) => number);
    export class $libvlc_dialog_display_error_cb {
    }
    export interface $libvlc_dialog_display_error_cb extends $Callback {
        callback(arg0: $Pointer, arg1: string, arg2: string): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_dialog_display_error_cb}.
     */
    export type $libvlc_dialog_display_error_cb_ = ((arg0: $Pointer, arg1: string, arg2: string) => void);
    export class $libvlc_subtitle_track_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_encoding: $Pointer;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_media_open_cb {
    }
    export interface $libvlc_media_open_cb extends $Callback {
        open(arg0: $Pointer, arg1: $PointerByReference, arg2: $LongByReference): number;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_media_open_cb}.
     */
    export type $libvlc_media_open_cb_ = ((arg0: $Pointer, arg1: $PointerByReference, arg2: $LongByReference) => number);
    export class $libvlc_audio_drain_cb {
    }
    export interface $libvlc_audio_drain_cb extends $Callback {
        drain(arg0: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_drain_cb}.
     */
    export type $libvlc_audio_drain_cb_ = ((arg0: $Pointer) => void);
    export class $libvlc_audio_output_t$ByReference extends $libvlc_audio_output_t implements $Structure$ByReference {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_description: $Pointer;
        static ALIGN_DEFAULT: number;
        psz_name: $Pointer;
        p_next: $libvlc_audio_output_t$ByReference;
        constructor();
    }
    export class $libvlc_rd_description_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        psz_longname: string;
        constructor();
    }
    export class $libvlc_dialog_display_login_cb {
    }
    export interface $libvlc_dialog_display_login_cb extends $Callback {
        callback(arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: string, arg3: string, arg4: string, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_dialog_display_login_cb}.
     */
    export type $libvlc_dialog_display_login_cb_ = ((arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: string, arg3: string, arg4: string, arg5: number) => void);
    export class $libvlc_media_player_t extends $PointerType {
        constructor();
    }
    export class $media_player_length_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_length: number;
        constructor();
    }
    export class $media_player_time_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        new_time: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_video_track_t$ByValue extends $libvlc_video_track_t implements $Structure$ByValue {
        i_frame_rate_den: number;
        pose: $libvlc_video_viewpoint_t$ByValue;
        i_orientation: number;
        i_projection: number;
        i_sar_num: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_width: number;
        static ALIGN_DEFAULT: number;
        i_frame_rate_num: number;
        i_sar_den: number;
        i_height: number;
        constructor();
    }
    export class $libvlc_media_discoverer_description_t$ByReference extends $libvlc_media_discoverer_description_t implements $Structure$ByReference {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_cat: number;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        psz_longname: string;
        constructor();
    }
    export class $libvlc_video_swap_cb {
    }
    export interface $libvlc_video_swap_cb extends $Callback {
        swap(arg0: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_swap_cb}.
     */
    export type $libvlc_video_swap_cb_ = ((arg0: $Pointer) => void);
    export class $libvlc_audio_set_volume_cb {
    }
    export interface $libvlc_audio_set_volume_cb extends $Callback {
        setVolume(arg0: $Pointer, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_set_volume_cb}.
     */
    export type $libvlc_audio_set_volume_cb_ = ((arg0: $Pointer, arg1: number, arg2: number) => void);
    export class $libvlc_video_cleanup_cb {
    }
    export interface $libvlc_video_cleanup_cb extends $Callback {
        cleanup(arg0: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_cleanup_cb}.
     */
    export type $libvlc_video_cleanup_cb_ = ((arg0: $Pointer) => void);
    export class $media_preparsed_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_status: number;
        constructor();
    }
    export class $libvlc_chapter_description_t extends $Structure {
        i_duration: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_time_offset: number;
        static ALIGN_DEFAULT: number;
        psz_name: $Pointer;
        constructor();
    }
    export class $libvlc_picture_t extends $PointerType {
        constructor();
    }
    export class $libvlc_dialog_cbs extends $Structure {
        pf_cancel: $libvlc_dialog_cancel_cb;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        pf_display_question: $libvlc_dialog_display_question_cb;
        pf_display_progress: $libvlc_dialog_display_progress_cb;
        static ALIGN_DEFAULT: number;
        pf_display_error: $libvlc_dialog_display_error_cb;
        pf_display_login: $libvlc_dialog_display_login_cb;
        pf_update_progress: $libvlc_dialog_update_progress_cb;
        constructor();
    }
    export class $media_list_will_delete_item extends $Structure {
        item: $libvlc_media_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        index: number;
        constructor();
    }
    export class $libvlc_audio_resume_cb {
    }
    export interface $libvlc_audio_resume_cb extends $Callback {
        resume(arg0: $Pointer, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_resume_cb}.
     */
    export type $libvlc_audio_resume_cb_ = ((arg0: $Pointer, arg1: number) => void);
    export class $libvlc_dialog_id extends $PointerType {
        constructor();
    }
    export class $libvlc_video_marquee_option_t extends $Enum<$libvlc_video_marquee_option_t> {
        static values(): $libvlc_video_marquee_option_t[];
        intValue(): number;
        static valueOf(arg0: string): $libvlc_video_marquee_option_t;
        static option(arg0: number): $libvlc_video_marquee_option_t;
        static libvlc_marquee_Color: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Y: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Refresh: $libvlc_video_marquee_option_t;
        static libvlc_marquee_X: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Enable: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Size: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Position: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Timeout: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Opacity: $libvlc_video_marquee_option_t;
        static libvlc_marquee_Text: $libvlc_video_marquee_option_t;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_marquee_option_t}.
     */
    export type $libvlc_video_marquee_option_t_ = "libvlc_marquee_enable" | "libvlc_marquee_text" | "libvlc_marquee_color" | "libvlc_marquee_opacity" | "libvlc_marquee_position" | "libvlc_marquee_refresh" | "libvlc_marquee_size" | "libvlc_marquee_timeout" | "libvlc_marquee_x" | "libvlc_marquee_y";
    export class $libvlc_video_track_t extends $Structure {
        i_frame_rate_den: number;
        pose: $libvlc_video_viewpoint_t$ByValue;
        i_orientation: number;
        i_projection: number;
        i_sar_num: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_width: number;
        static ALIGN_DEFAULT: number;
        i_frame_rate_num: number;
        i_sar_den: number;
        i_height: number;
        constructor();
    }
    export class $media_thumbnail_generated extends $Structure {
        p_thumbnail: $libvlc_picture_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $media_subitemtree_added extends $Structure {
        item: $libvlc_media_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $renderer_discoverer_item_deleted extends $Structure {
        getFieldOrder(): $List<string>;
        item: $libvlc_renderer_item_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
        get fieldOrder(): $List<string>;
    }
    export class $libvlc_module_description_t extends $Structure {
        psz_help: string;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_shortname: string;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        psz_longname: string;
        p_next: $libvlc_module_description_t$ByReference;
        constructor();
    }
    export class $media_player_audio_device extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        device: string;
        constructor();
    }
    export class $media_parsed_status extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_status: number;
        constructor();
    }
    export class $libvlc_rectangle_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        top: number;
        left: number;
        bottom: number;
        static ALIGN_DEFAULT: number;
        right: number;
        constructor();
    }
    export class $libvlc_audio_output_device_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_device: $Pointer;
        psz_description: $Pointer;
        static ALIGN_DEFAULT: number;
        p_next: $libvlc_audio_output_device_t$ByReference;
        constructor();
    }
    export class $libvlc_lock_callback_t {
    }
    export interface $libvlc_lock_callback_t extends $Callback {
        lock(arg0: $Pointer, arg1: $PointerByReference): $Pointer;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_lock_callback_t}.
     */
    export type $libvlc_lock_callback_t_ = ((arg0: $Pointer, arg1: $PointerByReference) => $Pointer);
    export class $libvlc_dialog_display_progress_cb {
    }
    export interface $libvlc_dialog_display_progress_cb extends $Callback {
        callback(arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: string, arg3: string, arg4: number, arg5: number, arg6: string): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_dialog_display_progress_cb}.
     */
    export type $libvlc_dialog_display_progress_cb_ = ((arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: string, arg3: string, arg4: number, arg5: number, arg6: string) => void);
    export class $media_player_pausable_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_pausable: number;
        constructor();
    }
    export class $media_player_es_changed extends $Structure {
        i_id: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        i_type: number;
        constructor();
    }
    export class $media_player_title_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_title: number;
        constructor();
    }
    export class $libvlc_instance_t extends $PointerType {
        constructor();
    }
    export class $libvlc_event_manager_t extends $PointerType {
        constructor();
    }
    export class $libvlc_audio_flush_cb {
    }
    export interface $libvlc_audio_flush_cb extends $Callback {
        flush(arg0: $Pointer, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_flush_cb}.
     */
    export type $libvlc_audio_flush_cb_ = ((arg0: $Pointer, arg1: number) => void);
    export class $libvlc_video_adjust_option_t extends $Enum<$libvlc_video_adjust_option_t> {
        static values(): $libvlc_video_adjust_option_t[];
        intValue(): number;
        static valueOf(arg0: string): $libvlc_video_adjust_option_t;
        static libvlc_adjust_Brightness: $libvlc_video_adjust_option_t;
        static libvlc_adjust_Enable: $libvlc_video_adjust_option_t;
        static libvlc_adjust_Saturation: $libvlc_video_adjust_option_t;
        static libvlc_adjust_Contrast: $libvlc_video_adjust_option_t;
        static libvlc_adjust_Hue: $libvlc_video_adjust_option_t;
        static libvlc_adjust_Gamma: $libvlc_video_adjust_option_t;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_adjust_option_t}.
     */
    export type $libvlc_video_adjust_option_t_ = "libvlc_adjust_enable" | "libvlc_adjust_contrast" | "libvlc_adjust_brightness" | "libvlc_adjust_hue" | "libvlc_adjust_saturation" | "libvlc_adjust_gamma";
    export class $media_parsed_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_status: number;
        constructor();
    }
    export class $libvlc_module_description_t$ByReference extends $libvlc_module_description_t implements $Structure$ByReference {
        psz_help: string;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_shortname: string;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        psz_longname: string;
        p_next: $libvlc_module_description_t$ByReference;
        constructor();
    }
    export class $libvlc_log_t extends $PointerType {
        constructor();
    }
    export class $libvlc_audio_play_cb {
    }
    export interface $libvlc_audio_play_cb extends $Callback {
        play(arg0: $Pointer, arg1: $Pointer, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_play_cb}.
     */
    export type $libvlc_audio_play_cb_ = ((arg0: $Pointer, arg1: $Pointer, arg2: number, arg3: number) => void);
    export class $libvlc_dialog_display_question_cb {
    }
    export interface $libvlc_dialog_display_question_cb extends $Callback {
        callback(arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: string, arg3: string, arg4: number, arg5: string, arg6: string, arg7: string): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_dialog_display_question_cb}.
     */
    export type $libvlc_dialog_display_question_cb_ = ((arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: string, arg3: string, arg4: number, arg5: string, arg6: string, arg7: string) => void);
    export class $libvlc_video_getProcAddress_cb {
    }
    export interface $libvlc_video_getProcAddress_cb extends $Callback {
        getProcAddress(arg0: $Pointer, arg1: string): $Pointer;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_getProcAddress_cb}.
     */
    export type $libvlc_video_getProcAddress_cb_ = ((arg0: $Pointer, arg1: string) => $Pointer);
    export class $renderer_discoverer_item_added extends $Structure {
        getFieldOrder(): $List<string>;
        item: $libvlc_renderer_item_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
        get fieldOrder(): $List<string>;
    }
    export class $libvlc_subtitle_track_t$ByValue extends $libvlc_subtitle_track_t implements $Structure$ByValue {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        psz_encoding: $Pointer;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_video_viewpoint_t$ByValue extends $libvlc_video_viewpoint_t implements $Structure$ByValue {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        f_pitch: number;
        f_roll: number;
        static ALIGN_DEFAULT: number;
        f_yaw: number;
        f_field_of_view: number;
        constructor();
    }
    export class $libvlc_media_t extends $PointerType {
        constructor();
    }
    export class $libvlc_audio_track_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        i_rate: number;
        i_channels: number;
        constructor();
    }
    export class $libvlc_video_setup_cb {
    }
    export interface $libvlc_video_setup_cb extends $Callback {
        setup(arg0: $Pointer): number;
        set up(value: $Pointer);
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_setup_cb}.
     */
    export type $libvlc_video_setup_cb_ = ((arg0: $Pointer) => number);
    export class $libvlc_renderer_discoverer_t extends $PointerType {
        constructor();
    }
    export class $media_player_seekable_changed extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        new_seekable: number;
        constructor();
    }
    export class $libvlc_audio_track_t$ByValue extends $libvlc_audio_track_t implements $Structure$ByValue {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        i_rate: number;
        i_channels: number;
        constructor();
    }
    export class $libvlc_log_cb {
    }
    export interface $libvlc_log_cb extends $Callback {
        log(arg0: $Pointer, arg1: number, arg2: $libvlc_log_t, arg3: string, arg4: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_log_cb}.
     */
    export type $libvlc_log_cb_ = ((arg0: $Pointer, arg1: number, arg2: $libvlc_log_t, arg3: string, arg4: $Pointer) => void);
    export class $media_list_item_deleted extends $Structure {
        item: $libvlc_media_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        index: number;
        constructor();
    }
    export class $libvlc_dialog_update_progress_cb {
    }
    export interface $libvlc_dialog_update_progress_cb extends $Callback {
        callback(arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: number, arg3: string): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_dialog_update_progress_cb}.
     */
    export type $libvlc_dialog_update_progress_cb_ = ((arg0: $Pointer, arg1: $libvlc_dialog_id, arg2: number, arg3: string) => void);
    export class $libvlc_equalizer_t extends $PointerType {
        constructor();
    }
    export class $libvlc_audio_setup_cb {
    }
    export interface $libvlc_audio_setup_cb extends $Callback {
        setup(arg0: $PointerByReference, arg1: string, arg2: $IntByReference, arg3: $IntByReference): number;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_audio_setup_cb}.
     */
    export type $libvlc_audio_setup_cb_ = ((arg0: $PointerByReference, arg1: string, arg2: $IntByReference, arg3: $IntByReference) => number);
    export class $media_player_audio_volume extends $Structure {
        volume: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $media_list_item_added extends $Structure {
        item: $libvlc_media_t;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        index: number;
        constructor();
    }
    export class $libvlc_navigate_mode_e extends $Enum<$libvlc_navigate_mode_e> {
        static values(): $libvlc_navigate_mode_e[];
        /**
         * @deprecated
         */
        intValue(): number;
        static valueOf(arg0: string): $libvlc_navigate_mode_e;
        static event(arg0: number): $libvlc_navigate_mode_e;
        static libvlc_navigate_up: $libvlc_navigate_mode_e;
        static libvlc_navigate_activate: $libvlc_navigate_mode_e;
        static libvlc_navigate_popup: $libvlc_navigate_mode_e;
        static libvlc_navigate_left: $libvlc_navigate_mode_e;
        static libvlc_navigate_right: $libvlc_navigate_mode_e;
        static libvlc_navigate_down: $libvlc_navigate_mode_e;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_navigate_mode_e}.
     */
    export type $libvlc_navigate_mode_e_ = "libvlc_navigate_activate" | "libvlc_navigate_up" | "libvlc_navigate_down" | "libvlc_navigate_left" | "libvlc_navigate_right" | "libvlc_navigate_popup";
    export class $libvlc_media_discoverer_description_t extends $Structure {
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        i_cat: number;
        static ALIGN_DEFAULT: number;
        psz_name: string;
        psz_longname: string;
        constructor();
    }
    export class $media_player_position_changed extends $Structure {
        new_position: number;
        static ALIGN_NONE: number;
        static ALIGN_GNUC: number;
        static ALIGN_MSVC: number;
        static ALIGN_DEFAULT: number;
        constructor();
    }
    export class $libvlc_video_logo_option_t extends $Enum<$libvlc_video_logo_option_t> {
        static values(): $libvlc_video_logo_option_t[];
        intValue(): number;
        static valueOf(arg0: string): $libvlc_video_logo_option_t;
        static libvlc_logo_opacity: $libvlc_video_logo_option_t;
        static libvlc_logo_file: $libvlc_video_logo_option_t;
        static libvlc_logo_position: $libvlc_video_logo_option_t;
        static libvlc_logo_delay: $libvlc_video_logo_option_t;
        static libvlc_logo_y: $libvlc_video_logo_option_t;
        static libvlc_logo_repeat: $libvlc_video_logo_option_t;
        static libvlc_logo_enable: $libvlc_video_logo_option_t;
        static libvlc_logo_x: $libvlc_video_logo_option_t;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_video_logo_option_t}.
     */
    export type $libvlc_video_logo_option_t_ = "libvlc_logo_enable" | "libvlc_logo_file" | "libvlc_logo_x" | "libvlc_logo_y" | "libvlc_logo_delay" | "libvlc_logo_repeat" | "libvlc_logo_opacity" | "libvlc_logo_position";
    export class $libvlc_media_close_cb {
    }
    export interface $libvlc_media_close_cb extends $Callback {
        close(arg0: $Pointer): void;
    }
    /**
     * Values that may be interpreted as {@link $libvlc_media_close_cb}.
     */
    export type $libvlc_media_close_cb_ = ((arg0: $Pointer) => void);
}
