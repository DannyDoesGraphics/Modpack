import { $Waiter } from "@package/org/watermedia/videolan4j/waiter";
import { $MediaPlayerEventListener, $MediaPlayerEventAdapter, $MediaPlayer } from "@package/org/watermedia/videolan4j/player/base";
import { $Object } from "@package/java/lang";
import { $TrackType_, $MediaRef } from "@package/org/watermedia/videolan4j/media";

declare module "@package/org/watermedia/videolan4j/waiter/mediaplayer" {
    export class $TimeReachedWaiter extends $MediaPlayerWaiter<number> {
        constructor(arg0: $MediaPlayer, arg1: number);
    }
    export class $PausedWaiter extends $MediaPlayerWaiter<$Object> {
        constructor(arg0: $MediaPlayer);
    }
    export class $MediaPlayerWaiter<R> extends $Waiter<$MediaPlayer, R> implements $MediaPlayerEventListener {
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
    export class $PositionReachedWaiter extends $MediaPlayerWaiter<number> {
        constructor(arg0: $MediaPlayer, arg1: number);
    }
    export class $ReadyWaiter extends $MediaPlayerWaiter<$Object> {
        constructor(arg0: $MediaPlayer);
    }
    export class $PlayingWaiter extends $MediaPlayerWaiter<$Object> {
        constructor(arg0: $MediaPlayer);
    }
    export class $LengthChangedWaiter extends $MediaPlayerWaiter<number> {
        constructor(arg0: $MediaPlayer);
    }
    export class $MediaPlayerWaiter$InternalListener extends $MediaPlayerEventAdapter {
    }
    export class $VideoOutputCreatedWaiter extends $MediaPlayerWaiter<number> {
        constructor(arg0: $MediaPlayer);
    }
    export class $SnapshotTakenWaiter extends $MediaPlayerWaiter<string> {
        constructor(arg0: $MediaPlayer);
    }
}
