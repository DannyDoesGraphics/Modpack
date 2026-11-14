import { $File_ } from "@package/java/io";
import { $CountDownLatch } from "@package/java/util/concurrent";
import { $EventApi as $EventApi$2, $ListApi, $ControlsApi as $ControlsApi$1, $StatusApi as $StatusApi$1 } from "@package/org/watermedia/videolan4j/player/list";
import { $List } from "@package/java/util";
import { $BufferedImage, $RenderedImage } from "@package/java/awt/image";
import { $MediaSlaveType_, $OptionsApi, $InfoApi, $TrackType_, $SubitemApi as $SubitemApi$1, $MediaRef, $MetaApi, $MediaEventListener, $ParseApi, $EventApi as $EventApi$1, $SlaveApi, $Media } from "@package/org/watermedia/videolan4j/media";
import { $SnapshotTakenWaiter } from "@package/org/watermedia/videolan4j/waiter/mediaplayer";
import { $libvlc_audio_flush_cb, $libvlc_audio_set_volume_cb, $libvlc_audio_drain_cb, $libvlc_media_player_t, $libvlc_audio_play_cb, $libvlc_instance_t, $libvlc_video_viewpoint_t, $libvlc_audio_resume_cb, $libvlc_audio_pause_cb } from "@package/org/watermedia/videolan4j/binding/internal";
import { $AudioCallback } from "@package/org/watermedia/videolan4j/player/base/callback";
import { $URI } from "@package/java/net";
import { $CallbackMedia } from "@package/org/watermedia/videolan4j/media/callback";
import { $Color, $Dimension } from "@package/java/awt";
import { $ClassLoader, $Enum, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $NativeEventManager } from "@package/org/watermedia/videolan4j/support/eventmanager";
import { $RendererItem } from "@package/org/watermedia/videolan4j/player/renderer";
export * as events from "@package/org/watermedia/videolan4j/player/base/events";
export * as callback from "@package/org/watermedia/videolan4j/player/base/callback";

declare module "@package/org/watermedia/videolan4j/player/base" {
    export class $SubpictureApi extends $BaseApi {
        trackCount(): number;
        setTrack(arg0: number): number;
        trackDescriptions(): $List<$TrackDescription>;
        setSubTitleUri(arg0: string): boolean;
        setSubTitleFile(arg0: $File_): boolean;
        setSubTitleFile(arg0: string): boolean;
        delay(): number;
        setDelay(arg0: number): void;
        track(): number;
        set subTitleUri(value: string);
    }
    export class $MediaPlayerLatch {
    }
    export class $MediaPlayerLatch$LatchListener extends $MediaPlayerEventAdapter {
    }
    export class $SynchronisedOneShotMediaPlayerEventListener extends $OneShotMediaPlayerEventListener {
        constructor(arg0: $CountDownLatch);
    }
    export class $AudioCallbacks$SetVolumeCallback implements $libvlc_audio_set_volume_cb {
    }
    export class $SubitemApi extends $BaseApi {
        list(): $ListApi;
        status(): $StatusApi$1;
        events(): $EventApi$2;
        controls(): $ControlsApi$1;
    }
    export class $MediaPlayerRole extends $Enum<$MediaPlayerRole> {
        static values(): $MediaPlayerRole[];
        intValue(): number;
        static valueOf(arg0: string): $MediaPlayerRole;
        static role(arg0: number): $MediaPlayerRole;
        static MUSIC: $MediaPlayerRole;
        static NOTIFICATION: $MediaPlayerRole;
        static GAME: $MediaPlayerRole;
        static VIDEO: $MediaPlayerRole;
        static TEST: $MediaPlayerRole;
        static ANIMATION: $MediaPlayerRole;
        static ACCESSIBILITY: $MediaPlayerRole;
        static NONE: $MediaPlayerRole;
        static COMMUNICATION: $MediaPlayerRole;
        static PRODUCTION: $MediaPlayerRole;
    }
    /**
     * Values that may be interpreted as {@link $MediaPlayerRole}.
     */
    export type $MediaPlayerRole_ = "none" | "music" | "video" | "communication" | "game" | "notification" | "animation" | "production" | "accessibility" | "test";
    export class $AudioCallbacks {
    }
    export class $AudioDevice {
        getLongName(): string;
        getDeviceId(): string;
        constructor(arg0: string, arg1: string);
        get longName(): string;
        get deviceId(): string;
    }
    export class $MediaPlayerNativeEventManager extends $NativeEventManager<$MediaPlayer, $MediaPlayerEventListener> {
    }
    export class $Equalizer {
        setPreamp(arg0: number): void;
        setAmp(arg0: number, arg1: number): void;
        bandCount(): number;
        preamp(): number;
        addEqualizerListener(arg0: $EqualizerListener_): void;
        removeEqualizerListener(arg0: $EqualizerListener_): void;
        amps(): number[];
        setAmps(arg0: number[]): void;
        setEqualizer(arg0: $Equalizer): void;
        amp(arg0: number): number;
        reset(): void;
        constructor(arg0: number);
        set equalizer(value: $Equalizer);
    }
    export class $AudioCallbacks$FlushCallback implements $libvlc_audio_flush_cb {
    }
    export class $EventApi extends $BaseApi {
        addMediaPlayerEventListener(arg0: $MediaPlayerEventListener): void;
        addMediaEventListener(arg0: $MediaEventListener): void;
        removeMediaPlayerEventListener(arg0: $MediaPlayerEventListener): void;
        removeMediaEventListener(arg0: $MediaEventListener): void;
    }
    export class $AudioApi extends $BaseApi implements $EqualizerListener {
        trackCount(): number;
        setOutput(arg0: string): boolean;
        masterVolume(): number;
        setVolume(arg0: number): boolean;
        setMute(arg0: boolean): void;
        mute(): boolean;
        enforceVolume(): boolean;
        isMute(): boolean;
        equalizer(): $Equalizer;
        outputDevice(): string;
        setOutputDevice(arg0: string, arg1: string): void;
        outputDevices(): $List<$AudioDevice>;
        equalizerChanged(arg0: $Equalizer): void;
        setTrack(arg0: number): number;
        trackDescriptions(): $List<$TrackDescription>;
        setEqualizer(arg0: $Equalizer): void;
        delay(): number;
        channel(): $AudioChannel;
        setDelay(arg0: number): void;
        track(): number;
        setChannel(arg0: $AudioChannel_): boolean;
        volume(): number;
        callback(arg0: string, arg1: number, arg2: number, arg3: $AudioCallback, arg4: boolean): void;
        callback(arg0: string, arg1: number, arg2: number, arg3: $AudioCallback): void;
        set output(value: string);
    }
    export class $LibVlcConst {
        static MIN_SATURATION: number;
        static MAX_CONTRAST: number;
        static MIN_HUE: number;
        static MIN_VOLUME: number;
        static MIN_BRIGHTNESS: number;
        static MAX_GAMMA: number;
        static MIN_CONTRAST: number;
        static MIN_GAMMA: number;
        static MAX_GAIN: number;
        static MAX_HUE: number;
        static MAX_VOLUME: number;
        static MAX_BRIGHTNESS: number;
        static MAX_SATURATION: number;
        static MIN_GAIN: number;
    }
    export interface $LibVlcConst {
    }
    export class $VideoApi extends $BaseApi {
        trackCount(): number;
        aspectRatio(): string;
        setHue(arg0: number): void;
        setBrightness(arg0: number): void;
        hue(): number;
        saturation(): number;
        videoDimension(): $Dimension;
        contrast(): number;
        setDeinterlace(arg0: $DeinterlaceMode_): void;
        setAdjustVideo(arg0: boolean): void;
        isAdjustVideo(): boolean;
        setContrast(arg0: number): void;
        setGamma(arg0: number): void;
        setVideoTitleDisplay(arg0: $Position_, arg1: number): void;
        setAspectRatio(arg0: string): void;
        cropGeometry(): string;
        setCropGeometry(arg0: string): void;
        setTrack(arg0: number): number;
        newViewpoint(): $Viewpoint;
        updateViewpoint(arg0: $Viewpoint, arg1: boolean): boolean;
        trackDescriptions(): $List<$TrackDescription>;
        scale(): number;
        setScale(arg0: number): void;
        gamma(): number;
        track(): number;
        brightness(): number;
        setSaturation(arg0: number): void;
        set deinterlace(value: $DeinterlaceMode_);
    }
    export class $MediaPlayerEventAdapter implements $MediaPlayerEventListener {
        positionChanged(arg0: $MediaPlayer, arg1: number): void;
        playing(arg0: $MediaPlayer): void;
        opening(arg0: $MediaPlayer): void;
        buffering(arg0: $MediaPlayer, arg1: number): void;
        corked(arg0: $MediaPlayer, arg1: boolean): void;
        mediaPlayerReady(arg0: $MediaPlayer): void;
        mediaChanged(arg0: $MediaPlayer, arg1: $MediaRef): void;
        timeChanged(arg0: $MediaPlayer, arg1: number): void;
        seekableChanged(arg0: $MediaPlayer, arg1: number): void;
        pausableChanged(arg0: $MediaPlayer, arg1: number): void;
        titleChanged(arg0: $MediaPlayer, arg1: number): void;
        snapshotTaken(arg0: $MediaPlayer, arg1: string): void;
        lengthChanged(arg0: $MediaPlayer, arg1: number): void;
        videoOutput(arg0: $MediaPlayer, arg1: number): void;
        scrambledChanged(arg0: $MediaPlayer, arg1: number): void;
        elementaryStreamAdded(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        elementaryStreamDeleted(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        elementaryStreamSelected(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        volumeChanged(arg0: $MediaPlayer, arg1: number): void;
        audioDeviceChanged(arg0: $MediaPlayer, arg1: string): void;
        chapterChanged(arg0: $MediaPlayer, arg1: number): void;
        error(arg0: $MediaPlayer): void;
        finished(arg0: $MediaPlayer): void;
        stopped(arg0: $MediaPlayer): void;
        forward(arg0: $MediaPlayer): void;
        backward(arg0: $MediaPlayer): void;
        paused(arg0: $MediaPlayer): void;
        muted(arg0: $MediaPlayer, arg1: boolean): void;
        constructor();
    }
    export class $WaitForSnapshot extends $SnapshotTakenWaiter {
    }
    export class $LogoPosition extends $Enum<$LogoPosition> {
        static values(): $LogoPosition[];
        intValue(): number;
        static valueOf(arg0: string): $LogoPosition;
        static position(arg0: number): $LogoPosition;
        static TOP_LEFT: $LogoPosition;
        static LEFT: $LogoPosition;
        static TOP: $LogoPosition;
        static BOTTOM_RIGHT: $LogoPosition;
        static TOP_RIGHT: $LogoPosition;
        static RIGHT: $LogoPosition;
        static BOTTOM: $LogoPosition;
        static BOTTOM_LEFT: $LogoPosition;
        static CENTRE: $LogoPosition;
    }
    /**
     * Values that may be interpreted as {@link $LogoPosition}.
     */
    export type $LogoPosition_ = "centre" | "left" | "right" | "top" | "top_left" | "top_right" | "bottom" | "bottom_left" | "bottom_right";
    export class $LogoApi extends $BaseApi {
        setRepeat(arg0: number): void;
        setImage(arg0: $RenderedImage): void;
        setOpacity(arg0: number): void;
        setOpacity(arg0: number): void;
        setDuration(arg0: number): void;
        set(arg0: $Logo): void;
        enable(arg0: boolean): void;
        setPosition(arg0: $LogoPosition_): void;
        setLocation(arg0: number, arg1: number): void;
        setFile(arg0: string): void;
        set repeat(value: number);
        set image(value: $RenderedImage);
        set duration(value: number);
        set position(value: $LogoPosition_);
        set file(value: string);
    }
    export class $TitleDescription {
        isMenu(): boolean;
        name(): string;
        duration(): number;
        constructor(arg0: number, arg1: string, arg2: boolean);
        get menu(): boolean;
    }
    export class $TeletextKey extends $Enum<$TeletextKey> {
        static values(): $TeletextKey[];
        intValue(): number;
        static valueOf(arg0: string): $TeletextKey;
        static key(arg0: number): $TeletextKey;
        static RED: $TeletextKey;
        static BLUE: $TeletextKey;
        static YELLOW: $TeletextKey;
        static INDEX: $TeletextKey;
        static GREEN: $TeletextKey;
    }
    /**
     * Values that may be interpreted as {@link $TeletextKey}.
     */
    export type $TeletextKey_ = "red" | "green" | "yellow" | "blue" | "index";
    export class $AudioCallbacks$ResumeCallback implements $libvlc_audio_resume_cb {
    }
    export class $MediaPlayerEventListener {
    }
    export interface $MediaPlayerEventListener {
        positionChanged(arg0: $MediaPlayer, arg1: number): void;
        playing(arg0: $MediaPlayer): void;
        opening(arg0: $MediaPlayer): void;
        buffering(arg0: $MediaPlayer, arg1: number): void;
        corked(arg0: $MediaPlayer, arg1: boolean): void;
        mediaPlayerReady(arg0: $MediaPlayer): void;
        mediaChanged(arg0: $MediaPlayer, arg1: $MediaRef): void;
        timeChanged(arg0: $MediaPlayer, arg1: number): void;
        seekableChanged(arg0: $MediaPlayer, arg1: number): void;
        pausableChanged(arg0: $MediaPlayer, arg1: number): void;
        titleChanged(arg0: $MediaPlayer, arg1: number): void;
        snapshotTaken(arg0: $MediaPlayer, arg1: string): void;
        lengthChanged(arg0: $MediaPlayer, arg1: number): void;
        videoOutput(arg0: $MediaPlayer, arg1: number): void;
        scrambledChanged(arg0: $MediaPlayer, arg1: number): void;
        elementaryStreamAdded(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        elementaryStreamDeleted(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        elementaryStreamSelected(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        volumeChanged(arg0: $MediaPlayer, arg1: number): void;
        audioDeviceChanged(arg0: $MediaPlayer, arg1: string): void;
        chapterChanged(arg0: $MediaPlayer, arg1: number): void;
        error(arg0: $MediaPlayer): void;
        finished(arg0: $MediaPlayer): void;
        stopped(arg0: $MediaPlayer): void;
        forward(arg0: $MediaPlayer): void;
        backward(arg0: $MediaPlayer): void;
        paused(arg0: $MediaPlayer): void;
        muted(arg0: $MediaPlayer, arg1: boolean): void;
    }
    export class $RoleApi extends $BaseApi {
        get(): $MediaPlayerRole;
        set(arg0: $MediaPlayerRole_): void;
    }
    export class $Descriptions {
    }
    export class $EmbededMediaPlayerEventListener implements $MediaPlayerEventListener {
        positionChanged(arg0: $MediaPlayer, arg1: number): void;
        playing(arg0: $MediaPlayer): void;
        opening(arg0: $MediaPlayer): void;
        buffering(arg0: $MediaPlayer, arg1: number): void;
        corked(arg0: $MediaPlayer, arg1: boolean): void;
        mediaPlayerReady(arg0: $MediaPlayer): void;
        mediaChanged(arg0: $MediaPlayer, arg1: $MediaRef): void;
        timeChanged(arg0: $MediaPlayer, arg1: number): void;
        seekableChanged(arg0: $MediaPlayer, arg1: number): void;
        pausableChanged(arg0: $MediaPlayer, arg1: number): void;
        titleChanged(arg0: $MediaPlayer, arg1: number): void;
        snapshotTaken(arg0: $MediaPlayer, arg1: string): void;
        lengthChanged(arg0: $MediaPlayer, arg1: number): void;
        videoOutput(arg0: $MediaPlayer, arg1: number): void;
        scrambledChanged(arg0: $MediaPlayer, arg1: number): void;
        elementaryStreamAdded(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        elementaryStreamDeleted(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        elementaryStreamSelected(arg0: $MediaPlayer, arg1: $TrackType_, arg2: number): void;
        volumeChanged(arg0: $MediaPlayer, arg1: number): void;
        audioDeviceChanged(arg0: $MediaPlayer, arg1: string): void;
        chapterChanged(arg0: $MediaPlayer, arg1: number): void;
        error(arg0: $MediaPlayer): void;
        finished(arg0: $MediaPlayer): void;
        stopped(arg0: $MediaPlayer): void;
        forward(arg0: $MediaPlayer): void;
        backward(arg0: $MediaPlayer): void;
        paused(arg0: $MediaPlayer): void;
        muted(arg0: $MediaPlayer, arg1: boolean): void;
        constructor();
    }
    export class $ControlsApi extends $BaseApi {
        setRepeat(arg0: boolean): void;
        play(): void;
        setRate(arg0: number): boolean;
        skipTime(arg0: number): void;
        getRepeat(): boolean;
        skipPosition(arg0: number): void;
        start(): boolean;
        stop(): void;
        nextFrame(): void;
        setTime(arg0: number): void;
        setPosition(arg0: number): void;
        pause(): void;
        setPause(arg0: boolean): void;
        set rate(value: number);
        set time(value: number);
        set position(value: number);
    }
    export class $TeletextApi extends $BaseApi {
        setPage(arg0: number): void;
        setKey(arg0: $TeletextKey_): void;
        page(): number;
        set key(value: $TeletextKey_);
    }
    export class $ChapterApi extends $BaseApi {
        chapter(): number;
        setChapter(arg0: number): void;
        allDescriptions(): $List<$List<$ChapterDescription>>;
        next(): void;
        count(): number;
        previous(): void;
        descriptions(): $List<$ChapterDescription>;
        descriptions(arg0: number): $List<$ChapterDescription>;
    }
    export class $MarqueeApi extends $BaseApi {
        setColour(arg0: number): void;
        setColour(arg0: $Color): void;
        setRefresh(arg0: number): void;
        setOpacity(arg0: number): void;
        setOpacity(arg0: number): void;
        setTimeout(arg0: number): void;
        set(arg0: $Marquee): void;
        enable(arg0: boolean): void;
        setSize(arg0: number): void;
        setText(arg0: string): void;
        setPosition(arg0: $MarqueePosition_): void;
        setLocation(arg0: number, arg1: number): void;
        set refresh(value: number);
        set timeout(value: number);
        set size(value: number);
        set text(value: string);
        set position(value: $MarqueePosition_);
    }
    export class $TrackDescription {
        id(): number;
        description(): string;
        constructor(arg0: number, arg1: string);
    }
    export class $ChapterDescription {
        name(): string;
        offset(): number;
        duration(): number;
        constructor(arg0: number, arg1: number, arg2: string);
    }
    export class $Logo {
        getIntegerOpacity(): number;
        getFloatOpacity(): number;
        getEnable(): boolean;
        getY(): number;
        position(arg0: $LogoPosition_): $Logo;
        repeat(arg0: number): $Logo;
        apply(arg0: $MediaPlayer): void;
        location(arg0: number, arg1: number): $Logo;
        file(arg0: string, arg1: number, arg2: number): $Logo;
        file(arg0: string): $Logo;
        file(arg0: $File_): $Logo;
        file(arg0: $File_, arg1: number, arg2: number): $Logo;
        duration(arg0: number): $Logo;
        getFile(): string;
        enable(): $Logo;
        enable(arg0: boolean): $Logo;
        getDuration(): number;
        image(arg0: $RenderedImage): $Logo;
        static logo(): $Logo;
        getImage(): $RenderedImage;
        disable(): $Logo;
        opacity(arg0: number): $Logo;
        opacity(arg0: number): $Logo;
        getX(): number;
        getPosition(): $LogoPosition;
        get integerOpacity(): number;
        get floatOpacity(): number;
        get y(): number;
        get x(): number;
    }
    export class $State extends $Enum<$State> {
        static values(): $State[];
        intValue(): number;
        static valueOf(arg0: string): $State;
        static state(arg0: number): $State;
        static BUFFERING: $State;
        static NOTHING_SPECIAL: $State;
        static PAUSED: $State;
        static STOPPED: $State;
        static OPENING: $State;
        static ENDED: $State;
        static ERROR: $State;
        static PLAYING: $State;
    }
    /**
     * Values that may be interpreted as {@link $State}.
     */
    export type $State_ = "nothing_special" | "opening" | "buffering" | "playing" | "paused" | "stopped" | "ended" | "error";
    export class $StatusApi extends $BaseApi {
        isPlaying(): boolean;
        isPlayable(): boolean;
        canPause(): boolean;
        isSeekable(): boolean;
        programScrambled(): boolean;
        videoOutputs(): number;
        length(): number;
        position(): number;
        time(): number;
        state(): $State;
        rate(): number;
        get playing(): boolean;
        get playable(): boolean;
        get seekable(): boolean;
    }
    export class $MediaPlayer {
        titles(): $TitleApi;
        video(): $VideoApi;
        media(): $MediaApi;
        chapters(): $ChapterApi;
        isReleased(): boolean;
        audio(): $AudioApi;
        mediaPlayerInstance(): $libvlc_media_player_t;
        marquee(): $MarqueeApi;
        subitems(): $SubitemApi;
        subpictures(): $SubpictureApi;
        teletext(): $TeletextApi;
        setRenderer(arg0: $RendererItem): boolean;
        userData(): $Object;
        userData(arg0: $Object): void;
        getClassLoader(): $ClassLoader;
        status(): $StatusApi;
        release(): void;
        events(): $EventApi;
        submit(arg0: $Runnable_): void;
        logo(): $LogoApi;
        controls(): $ControlsApi;
        snapshots(): $SnapshotApi;
        menu(): $MenuApi;
        role(): $RoleApi;
        constructor(arg0: $libvlc_instance_t, arg1: $libvlc_media_player_t);
        constructor(arg0: $libvlc_instance_t);
        get released(): boolean;
        set renderer(value: $RendererItem);
        get classLoader(): $ClassLoader;
    }
    export class $Viewpoint {
        viewpoint(): $libvlc_video_viewpoint_t;
        setPitch(arg0: number): void;
        setYaw(arg0: number): void;
        setRoll(arg0: number): void;
        setFov(arg0: number): void;
        release(): void;
        roll(): number;
        pitch(): number;
        yaw(): number;
        fov(): number;
        constructor(arg0: $libvlc_video_viewpoint_t);
    }
    export class $Marquee {
        getRgb(): number;
        getTimeout(): number;
        static marquee(): $Marquee;
        getColour(): $Color;
        getRefresh(): number;
        getIntegerOpacity(): number;
        getFloatOpacity(): number;
        getEnable(): boolean;
        getY(): number;
        refresh(arg0: number): $Marquee;
        size(arg0: number): $Marquee;
        position(arg0: $MarqueePosition_): $Marquee;
        apply(arg0: $MediaPlayer): void;
        location(arg0: number, arg1: number): $Marquee;
        getSize(): number;
        timeout(arg0: number): $Marquee;
        text(arg0: string): $Marquee;
        enable(): $Marquee;
        enable(arg0: boolean): $Marquee;
        getText(): string;
        disable(): $Marquee;
        colour(arg0: $Color): $Marquee;
        colour(arg0: number): $Marquee;
        opacity(arg0: number): $Marquee;
        opacity(arg0: number): $Marquee;
        getX(): number;
        getPosition(): $MarqueePosition;
        get rgb(): number;
        get integerOpacity(): number;
        get floatOpacity(): number;
        get y(): number;
        get x(): number;
    }
    export class $SnapshotApi extends $BaseApi {
        setSnapshotDirectory(arg0: string): void;
        get(arg0: number, arg1: number): $BufferedImage;
        get(): $BufferedImage;
        save(arg0: $File_): boolean;
        save(): boolean;
        save(arg0: $File_, arg1: number, arg2: number): boolean;
        save(arg0: number, arg1: number): boolean;
        set snapshotDirectory(value: string);
    }
    export class $ResetMediaEventHandler$ResetMediaTask implements $Runnable {
    }
    export class $MediaApi extends $BaseApi {
        play(arg0: $CallbackMedia, ...arg1: string[]): boolean;
        play(arg0: $URI, ...arg1: string[]): boolean;
        play(arg0: $MediaRef, ...arg1: string[]): boolean;
        slaves(): $SlaveApi;
        startPaused(arg0: $URI, ...arg1: string[]): boolean;
        startPaused(arg0: $MediaRef, ...arg1: string[]): boolean;
        startPaused(arg0: $CallbackMedia, ...arg1: string[]): boolean;
        newMediaRef(): $MediaRef;
        newMedia(): $Media;
        subitems(): $SubitemApi$1;
        parsing(): $ParseApi;
        addSlave(arg0: $MediaSlaveType_, arg1: string, arg2: boolean): boolean;
        info(): $InfoApi;
        start(arg0: $URI, ...arg1: string[]): boolean;
        start(arg0: $CallbackMedia, ...arg1: string[]): boolean;
        start(arg0: $MediaRef, ...arg1: string[]): boolean;
        options(): $OptionsApi;
        prepare(arg0: $URI, ...arg1: string[]): boolean;
        prepare(arg0: $MediaRef, ...arg1: string[]): boolean;
        prepare(arg0: $CallbackMedia, ...arg1: string[]): boolean;
        events(): $EventApi$1;
        isValid(): boolean;
        meta(): $MetaApi;
        get valid(): boolean;
    }
    export class $AudioChannel extends $Enum<$AudioChannel> {
        static audioChannel(arg0: number): $AudioChannel;
        static values(): $AudioChannel[];
        intValue(): number;
        static valueOf(arg0: string): $AudioChannel;
        static LEFT: $AudioChannel;
        static MONO: $AudioChannel;
        static HEADPHONES: $AudioChannel;
        static RIGHT: $AudioChannel;
        static ERROR: $AudioChannel;
        static STEREO: $AudioChannel;
        static UNSET: $AudioChannel;
        static RSTEREO: $AudioChannel;
        static DOLBYS: $AudioChannel;
    }
    /**
     * Values that may be interpreted as {@link $AudioChannel}.
     */
    export type $AudioChannel_ = "error" | "unset" | "stereo" | "rstereo" | "left" | "right" | "dolbys" | "headphones" | "mono";
    export class $AudioCallbacks$PauseCallback implements $libvlc_audio_pause_cb {
    }
    export class $OneShotMediaPlayerEventListener extends $MediaPlayerEventAdapter {
        constructor();
    }
    export class $EqualizerListener {
    }
    export interface $EqualizerListener {
        equalizerChanged(arg0: $Equalizer): void;
    }
    /**
     * Values that may be interpreted as {@link $EqualizerListener}.
     */
    export type $EqualizerListener_ = ((arg0: $Equalizer) => void);
    export class $TitleApi extends $BaseApi {
        titleCount(): number;
        titleDescriptions(): $List<$TitleDescription>;
        title(): number;
        setTitle(arg0: number): void;
    }
    export class $BaseApi {
    }
    export class $MediaPlayerReadyEventHandler extends $MediaPlayerEventAdapter {
    }
    export class $ResetMediaEventHandler extends $MediaPlayerEventAdapter {
    }
    export class $AudioCallbacks$PlayCallback implements $libvlc_audio_play_cb {
    }
    export class $AudioCallbacks$DrainCallback implements $libvlc_audio_drain_cb {
    }
    export class $RepeatPlayEventHandler$ReplayMediaTask implements $Runnable {
    }
    export class $RepeatPlayEventHandler extends $MediaPlayerEventAdapter {
    }
    export class $MenuApi extends $BaseApi {
        left(): void;
        right(): void;
        up(): void;
        down(): void;
        activate(): void;
    }
    export class $Position extends $Enum<$Position> {
        static values(): $Position[];
        intValue(): number;
        static valueOf(arg0: string): $Position;
        static position(arg0: number): $Position;
        static CENTER: $Position;
        static TOP_LEFT: $Position;
        static DISABLE: $Position;
        static LEFT: $Position;
        static TOP: $Position;
        static BOTTOM_RIGHT: $Position;
        static TOP_RIGHT: $Position;
        static RIGHT: $Position;
        static BOTTOM: $Position;
        static BOTTOM_LEFT: $Position;
    }
    /**
     * Values that may be interpreted as {@link $Position}.
     */
    export type $Position_ = "disable" | "center" | "left" | "right" | "top" | "top_left" | "top_right" | "bottom" | "bottom_left" | "bottom_right";
    export class $MarqueePosition extends $Enum<$MarqueePosition> {
        static values(): $MarqueePosition[];
        intValue(): number;
        static valueOf(arg0: string): $MarqueePosition;
        static position(arg0: number): $MarqueePosition;
        static TOP_LEFT: $MarqueePosition;
        static LEFT: $MarqueePosition;
        static TOP: $MarqueePosition;
        static BOTTOM_RIGHT: $MarqueePosition;
        static TOP_RIGHT: $MarqueePosition;
        static RIGHT: $MarqueePosition;
        static BOTTOM: $MarqueePosition;
        static BOTTOM_LEFT: $MarqueePosition;
        static CENTRE: $MarqueePosition;
    }
    /**
     * Values that may be interpreted as {@link $MarqueePosition}.
     */
    export type $MarqueePosition_ = "centre" | "left" | "right" | "top" | "top_left" | "top_right" | "bottom" | "bottom_left" | "bottom_right";
    export class $DeinterlaceMode extends $Enum<$DeinterlaceMode> {
        static deinterlaceMode(arg0: string): $DeinterlaceMode;
        static values(): $DeinterlaceMode[];
        static valueOf(arg0: string): $DeinterlaceMode;
        stringValue(): string;
        static MEAN: $DeinterlaceMode;
        static AUTO: $DeinterlaceMode;
        static PHOSPHOR: $DeinterlaceMode;
        static DISCARD: $DeinterlaceMode;
        static BLEND: $DeinterlaceMode;
        static BOB: $DeinterlaceMode;
        static X: $DeinterlaceMode;
        static YADIF2X: $DeinterlaceMode;
        static LINEAR: $DeinterlaceMode;
        static YADIF: $DeinterlaceMode;
        static IVTC: $DeinterlaceMode;
    }
    /**
     * Values that may be interpreted as {@link $DeinterlaceMode}.
     */
    export type $DeinterlaceMode_ = "discard" | "blend" | "mean" | "bob" | "linear" | "x" | "yadif" | "yadif2x" | "phosphor" | "ivtc" | "auto";
}
