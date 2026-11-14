import { $Event } from "@package/net/neoforged/bus/api";
import { $SoundEngine } from "@package/net/minecraft/client/sounds";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/client/event/sound" {
    /**
     * Superclass for when a sound has started to play on an audio channel.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $SoundEvent$SoundSourceEvent extends $SoundEvent {
        /**
         * @return the name of the sound being played This is equivalent to the path of the location of the original sound.
         */
        getName(): string;
        /**
         * @return the audio channel on which the sound is playing on
         */
        getChannel(): $Channel;
        /**
         * @return the sound being played
         */
        getSound(): $SoundInstance;
        get name(): string;
        get channel(): $Channel;
        get sound(): $SoundInstance;
    }
    /**
     * Fired when a *non-streaming* sound is being played. A non-streaming sound is loaded fully into memory
     * in a buffer before being played, and used for most sounds of short length such as sound effects for clicking
     * buttons.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $PlaySoundSourceEvent extends $SoundEvent$SoundSourceEvent {
        constructor(engine: $SoundEngine, sound: $SoundInstance, channel: $Channel);
    }
    /**
     * Fired when the `SoundEngine` is constructed or (re)loaded, such as during game initialization or when the sound
     * output device is changed.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the mod-specific event bus, only on the logical client.
     */
    export class $SoundEngineLoadEvent extends $SoundEvent implements $IModBusEvent {
        constructor(manager: $SoundEngine);
    }
    /**
     * Superclass for sound related events.
     * 
     * These events are fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $SoundEvent extends $Event {
        /**
         * @return the sound engine
         */
        getEngine(): $SoundEngine;
        get engine(): $SoundEngine;
    }
    /**
     * Fired when a sound is about to be played by the sound engine. This fires before the sound is played and before any
     * checks on the sound (such as a zeroed volume, an empty `Sound`, and
     * others). This can be used to change or prevent (by passing `null)` a sound from being played through
     * `#setSound(SoundInstance)`).
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $PlaySoundEvent extends $SoundEvent {
        /**
         * Sets the sound to be played, which may be `null` to prevent any sound from being played.
         */
        setSound(newSound: $SoundInstance): void;
        /**
         * @return the name of the original sound This is equivalent to the path of the location of the original sound.
         */
        getName(): string;
        /**
         * @return the original sound that was to be played
         */
        getSound(): $SoundInstance;
        /**
         * @return the original sound that was to be played
         */
        getOriginalSound(): $SoundInstance;
        constructor(manager: $SoundEngine, sound: $SoundInstance);
        get name(): string;
        get originalSound(): $SoundInstance;
    }
    /**
     * Fired when a *streaming* sound is being played. A streaming sound is streamed directly from its source
     * (such as a file), and used for sounds of long length which are unsuitable to keep fully loaded in-memory in a buffer
     * (as is done for regular non-streaming sounds), such as background music or music discs.
     * 
     * This event is not cancellable, and does not have a result.
     * 
     * This event is fired on the main Forge event bus,
     * only on the logical client.
     */
    export class $PlayStreamingSourceEvent extends $SoundEvent$SoundSourceEvent {
        constructor(engine: $SoundEngine, sound: $SoundInstance, channel: $Channel);
    }
}
