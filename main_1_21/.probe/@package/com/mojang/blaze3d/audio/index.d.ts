import { $ChannelAccessor } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $SourceAccessor } from "@package/com/redsmods/sound_physics_perfected/mixin/client";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/mojang/blaze3d/audio" {
    export class $Library$CountingChannelPool implements $Library$ChannelPool {
    }
    export class $ListenerTransform extends $Record {
        position(): $Vec3;
        right(): $Vec3;
        up(): $Vec3;
        forward(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ListenerTransform}.
     */
    export type $ListenerTransform_ = { up?: $Vec3_, position?: $Vec3_, forward?: $Vec3_,  } | [up?: $Vec3_, position?: $Vec3_, forward?: $Vec3_, ];
    export class $Library {
        /**
         * @return the name of the default audio device, or `null` if it cannot be determined
         */
        getDebugString(): string;
        getListener(): $Listener;
        /**
         * Initializes the OpenAL device and context.
         * @throws IllegalStateException if an error occurs during initialization.
         */
        init(deviceSpecifier: string | null, enableHrtf: boolean): void;
        /**
         * Cleans up all resources used by the library.
         */
        cleanup(): void;
        /**
         * @return A list of strings representing the names of available sound devices, or an empty list if no devices are available.
         */
        getAvailableSoundDevices(): $List<string>;
        /**
         * @return the name of the default audio device, or `null` if it cannot be determined
         */
        static getDefaultDeviceName(): string;
        /**
         * Acquires a sound channel based on the given mode.
         */
        acquireChannel(pool: $Library$Pool_): $Channel;
        /**
         * Releases a channel.
         * @return whether the channel was successfully released
         */
        releaseChannel(channel: $Channel): void;
        /**
         * Checks if the default audio device has changed since the last time this method was called.
         * 
         * If the default device has changed, updates the stored default device name accordingly.
         * @return `true` if the default device has changed since the last time this method was called, `false` otherwise
         */
        isCurrentDeviceDisconnected(): boolean;
        /**
         * Checks if the default audio device has changed since the last time this method was called.
         * 
         * If the default device has changed, updates the stored default device name accordingly.
         * @return `true` if the default device has changed since the last time this method was called, `false` otherwise
         */
        hasDefaultDeviceChanged(): boolean;
        /**
         * @return the name of the default audio device, or `null` if it cannot be determined
         */
        getCurrentDeviceName(): string;
        constructor();
        get debugString(): string;
        get listener(): $Listener;
        get availableSoundDevices(): $List<string>;
        static get defaultDeviceName(): string;
        get currentDeviceDisconnected(): boolean;
        get currentDeviceName(): string;
    }
    export class $Library$Pool extends $Enum<$Library$Pool> {
        static values(): $Library$Pool[];
        static valueOf(arg0: string): $Library$Pool;
        static STREAMING: $Library$Pool;
        static STATIC: $Library$Pool;
    }
    /**
     * Values that may be interpreted as {@link $Library$Pool}.
     */
    export type $Library$Pool_ = "static" | "streaming";
    export class $Library$ChannelPool {
    }
    export interface $Library$ChannelPool {
    }
    /**
     * The Listener class represents the listener in a 3D audio environment.
     * 
     * The listener's position and orientation determine how sounds are perceived by the listener.
     */
    export class $Listener {
        getTransform(): $ListenerTransform;
        setTransform(transform: $ListenerTransform_): void;
        /**
         * Resets the listener's position and orientation to default values.
         */
        reset(): void;
        /**
         * Sets the listener's gain.
         */
        setGain(gain: number): void;
        /**
         * @return the current gain value of the listener
         */
        getGain(): number;
        constructor();
    }
    /**
     * The OpenALUtil class provides utility functions for working with OpenAL audio.
     */
    export class $OpenAlUtil {
        constructor();
    }
    /**
     * Represents an OpenAL audio channel.
     */
    export class $Channel implements $SourceAccessor, $ChannelAccessor {
        /**
         * @return `true` if the audio channel is currently playing, `false` otherwise
         */
        playing(): boolean;
        /**
         * Stops the audio channel and releases resources.
         */
        play(): void;
        /**
         * Sets whether the audio channel should loop.
         */
        setRelative(looping: boolean): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        setPitch(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        unpause(): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        setVolume(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        stop(): void;
        /**
         * Stops the audio channel and releases resources.
         */
        destroy(): void;
        /**
         * @return `true` if the audio channel is currently playing, `false` otherwise
         */
        stopped(): boolean;
        /**
         * Stops the audio channel and releases resources.
         */
        pause(): void;
        /**
         * Attaches a buffer stream to the audio channel.
         */
        attachBufferStream(stream: $AudioStream): void;
        /**
         * Attaches a static buffer to the audio channel.
         */
        attachStaticBuffer(buffer: $SoundBuffer): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        linearAttenuation(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        disableAttenuation(): void;
        /**
         * Sets whether the audio channel should loop.
         */
        setLooping(looping: boolean): void;
        /**
         * Sets the position of the audio channel.
         */
        setSelfPosition(source: $Vec3_): void;
        /**
         * Stops the audio channel and releases resources.
         */
        updateStream(): void;
        /**
         * @return the state of the audio channel
         */
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set relative(value: boolean);
        set pitch(value: number);
        set volume(value: number);
        set looping(value: boolean);
        set selfPosition(value: $Vec3_);
        get source(): number;
    }
    /**
     * The SoundBuffer class represents an audio buffer containing audio data in a particular format.
     * 
     * The audio data can be used to create an OpenAL buffer, which can be played in a 3D audio environment.
     */
    export class $SoundBuffer {
        /**
         * Returns an OptionalInt containing the OpenAL buffer handle for this SoundBuffer.
         * If the buffer has not been created yet, creates the buffer and returns the handle.
         * If the buffer cannot be created, returns an empty OptionalInt.
         * @return An OptionalInt containing the OpenAL buffer handle, or an empty OptionalInt if the buffer cannot be created.
         */
        releaseAlBuffer(): $OptionalInt;
        /**
         * Deletes the OpenAL buffer associated with this SoundBuffer, if it exists.
         */
        discardAlBuffer(): void;
        constructor(data: $ByteBuffer, format: $AudioFormat);
    }
}
