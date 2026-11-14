import { $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ItemTooltipData } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $KeyModifier_, $KeyConflictContext_ } from "@package/net/neoforged/neoforge/client/settings";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $EntityType_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleType_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeServerData_ } from "@package/dev/latvian/mods/kubejs/net";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityRenderersEvent$RegisterRenderers, $RegisterParticleProvidersEvent, $RegisterMenuScreensEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $ClientPacketListener, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Direction_, $RegistryAccess, $Direction } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider_ } from "@package/net/minecraft/client/renderer/blockentity";
import { $MenuType_ } from "@package/net/minecraft/world/inventory";
import { $Record, $Object } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $EntityRendererProvider_ } from "@package/net/minecraft/client/renderer/entity";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ParticleProvider, $SimpleAnimatedParticle, $SpriteSet, $Particle, $ParticleEngine$SpriteParticleRegistration, $ParticleProvider_ } from "@package/net/minecraft/client/particle";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Pattern } from "@package/java/util/regex";
import { $InputConstants$Type_ } from "@package/com/mojang/blaze3d/platform";
import { $BufferedImage } from "@package/java/awt/image";
import { $Float2IntFunction_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $RecipeViewerData } from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";
import { $MenuScreens$ScreenConstructor_ } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as highlight from "@package/dev/latvian/mods/kubejs/client/highlight";
export * as icon from "@package/dev/latvian/mods/kubejs/client/icon";

declare module "@package/dev/latvian/mods/kubejs/client" {
    export class $KeybindRegistryKubeEvent$Builder {
        mouseInputType(): $KeybindRegistryKubeEvent$Builder;
        scanCodeInputType(): $KeybindRegistryKubeEvent$Builder;
        defaultKey(keyName: string): $KeybindRegistryKubeEvent$Builder;
        modifier(modifier: $KeyModifier_): $KeybindRegistryKubeEvent$Builder;
        category(category: string): $KeybindRegistryKubeEvent$Builder;
        gui(): $KeybindRegistryKubeEvent$Builder;
        inputType(inputType: $InputConstants$Type_): $KeybindRegistryKubeEvent$Builder;
        inGame(): $KeybindRegistryKubeEvent$Builder;
        conflictContext(keyConflictContext: $KeyConflictContext_): $KeybindRegistryKubeEvent$Builder;
    }
    export class $MultipartBlockStateGenerator {
        part(when: string, consumer: $Consumer_<$MultipartBlockStateGenerator$Part>): void;
        part(when: string, model: $ResourceLocation_): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $ModelGenerator$Override {
        predicate(property: $ResourceLocation_, value: number): void;
        toJson(): $JsonObject;
        constructor(model: $ResourceLocation_);
    }
    export class $KubeAnimatedParticle extends $SimpleAnimatedParticle {
        setGravity(g: number): void;
        getZSpeed(): number;
        getSpriteSet(): $SpriteSet;
        /**
         * Sets teh friction of the particle, the particle's motion is multiplied by this value every tick
         */
        setFriction(f: number): void;
        getXSpeed(): number;
        setFasterWhenYMotionBlocked(b: boolean): void;
        setPhysicality(hasPhysics: boolean): void;
        setLightColor(arg0: $Float2IntFunction_): void;
        getYSpeed(): number;
        getY(): number;
        setColor(color: $KubeColor_): void;
        setColor(color: $KubeColor_, alpha: boolean): void;
        getLevel(): $ClientLevel;
        onTick(tick: $Consumer_<$KubeAnimatedParticle>): void;
        getX(): number;
        getZ(): number;
        getRandom(): $RandomSource;
        setSpeed(speed: $Vec3_): void;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
        constructor(level: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet);
        get ZSpeed(): number;
        get spriteSet(): $SpriteSet;
        get XSpeed(): number;
        set fasterWhenYMotionBlocked(value: boolean);
        set physicality(value: boolean);
        set lightColor(value: $Float2IntFunction_);
        get YSpeed(): number;
        set speed(value: $Vec3_);
    }
    export class $LangKubeEvent extends $Record implements $KubeEvent {
        renameItem(item: $ItemStack_, name: string): void;
        renameEntity(id: $ResourceLocation_, name: string): void;
        renameBiome(id: $ResourceLocation_, name: string): void;
        painting(paintingId: $ResourceLocation_, title: string, author: string): void;
        add(namespace: string, key: string, value: string): void;
        add(key: string, value: string): void;
        map(): $Map<$LangKubeEvent$Key, string>;
        addAll(map: $Map_<string, string>): void;
        addAll(namespace: string, map: $Map_<string, string>): void;
        lang(): string;
        renameBlock(block: $Block_, name: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        static PATTERN: $Pattern;
        constructor(lang: string, map: $Map_<$LangKubeEvent$Key_, string>);
    }
    /**
     * Values that may be interpreted as {@link $LangKubeEvent}.
     */
    export type $LangKubeEvent_ = { map?: $Map_<$LangKubeEvent$Key_, string>, lang?: string,  } | [map?: $Map_<$LangKubeEvent$Key_, string>, lang?: string, ];
    export class $EntityRendererRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $EntityType_<never>, renderer: $EntityRendererProvider_<any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $EntityRenderersEvent$RegisterRenderers);
        get client(): $Minecraft;
    }
    export class $ParticleProviderRegistryKubeEvent implements $ClientKubeEvent {
        registerSpecial<T extends $ParticleOptions>(type: $ParticleType_<T>, provider: $ParticleProvider_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>, spriteProvider: $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>): void;
        register<T extends $ParticleOptions>(type: $ParticleType_<T>, particle: $Consumer_<$KubeAnimatedParticle>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $RegisterParticleProvidersEvent);
        get client(): $Minecraft;
    }
    export class $SoundsGenerator {
        addSound(path: string, consumer: $Consumer_<$SoundsGenerator$SoundGen>): void;
        addSound(path: string, consumer: $Consumer_<$SoundsGenerator$SoundGen>, overlayExisting: boolean): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $LoadedTexture {
        tint(tint: $KubeColor_): $LoadedTexture;
        toBytes(): number[];
        static load(id: $ResourceLocation_): $LoadedTexture;
        copy(): $LoadedTexture;
        resize(newWidth: number, newHeight: number): $LoadedTexture;
        remap(remap: $Map_<$KubeColor_, $KubeColor_>): $LoadedTexture;
        pixels: number[];
        width: number;
        static EMPTY: $LoadedTexture;
        mcmeta: number[];
        height: number;
        constructor(img: $BufferedImage, mcmeta: number[]);
        constructor(width: number, height: number, pixels: number[], mcmeta: number[]);
    }
    export class $VariantBlockStateGenerator$Model {
        uvlock(): $VariantBlockStateGenerator$Model;
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        x(x: number): $VariantBlockStateGenerator$Model;
        y(y: number): $VariantBlockStateGenerator$Model;
        toJson(): $JsonObject;
        constructor();
    }
    export class $LangKubeEvent$Key extends $Record {
        namespace(): string;
        key(): string;
        lang(): string;
        constructor(namespace: string, lang: string, key: string);
    }
    /**
     * Values that may be interpreted as {@link $LangKubeEvent$Key}.
     */
    export type $LangKubeEvent$Key_ = { key?: string, namespace?: string, lang?: string,  } | [key?: string, namespace?: string, lang?: string, ];
    export class $BlockEntityRendererRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $BlockEntityType_<never>, renderer: $BlockEntityRendererProvider_<any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $EntityRenderersEvent$RegisterRenderers);
        get client(): $Minecraft;
    }
    export class $KubeJSKeybinds$KubeKey {
        id: string;
        constructor(id: string);
    }
    export class $ClientKubeEvent {
    }
    export interface $ClientKubeEvent extends $KubeEvent {
        getClient(): $Minecraft;
        get client(): $Minecraft;
    }
    export class $ModelGenerator {
        textures(map: $Map_<string, string>): void;
        texture(name: string[], texture: string): void;
        parent(s: $ResourceLocation_): void;
        override(model: $ResourceLocation_, override: $Consumer_<$ModelGenerator$Override>): void;
        element(consumer: $Consumer_<$ModelGenerator$Element>): void;
        toJson(): $JsonObject;
        custom(json: $Consumer_<$JsonObject>): void;
        constructor();
    }
    export class $SoundsGenerator$SoundGen {
        sounds(...sounds: string[]): $SoundsGenerator$SoundGen;
        subtitle(subtitle: string): $SoundsGenerator$SoundGen;
        replace(): $SoundsGenerator$SoundGen;
        replace(b: boolean): $SoundsGenerator$SoundGen;
        toJson(): $JsonObject;
        sound(file: string): $SoundsGenerator$SoundGen;
        sound(file: string, consumer: $Consumer_<$SoundsGenerator$SoundInstance>): $SoundsGenerator$SoundGen;
        constructor();
    }
    export class $KeybindRegistryKubeEvent implements $ClientKubeEvent {
        register(id: string, defaultKey: string): $KeybindRegistryKubeEvent$Builder;
        register(id: string): $KeybindRegistryKubeEvent$Builder;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
        get client(): $Minecraft;
    }
    export class $ModelGenerator$Face {
        tintindex(i: number): $ModelGenerator$Face;
        uv(u0: number, v0: number, u1: number, v1: number): $ModelGenerator$Face;
        tex(t: string): $ModelGenerator$Face;
        toJson(): $JsonObject;
        cull(): $ModelGenerator$Face;
        cull(d: $Direction_): $ModelGenerator$Face;
        side: $Direction;
        constructor(side: $Direction_);
    }
    export class $ClientPlayerKubeEvent implements $KubePlayerEvent, $ClientKubeEvent {
        getPlayer(): $LocalPlayer;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        getEntity(): $LivingEntity;
        constructor(player: $LocalPlayer);
        get player(): $LocalPlayer;
        get client(): $Minecraft;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $AtlasSpriteRegistryKubeEvent implements $KubeEvent {
        register(id: $ResourceLocation_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(registry: $Consumer_<$ResourceLocation>);
    }
    export class $MenuScreenRegistryKubeEvent implements $ClientKubeEvent {
        register(type: $MenuType_<never>, arg1: $MenuScreens$ScreenConstructor_<any, any>): void;
        getClient(): $Minecraft;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $RegisterMenuScreensEvent);
        get client(): $Minecraft;
    }
    export class $DebugInfoKubeEvent extends $ClientPlayerKubeEvent {
        /**
         * Whether the debug info should be rendered.
         */
        getShowDebug(): boolean;
        /**
         * The lines of debug info. Mutating this list will change the debug info.
         */
        getLines(): $List<string>;
        constructor(player: $LocalPlayer, l: $List_<string>);
        get showDebug(): boolean;
        get lines(): $List<string>;
    }
    export class $VariantBlockStateGenerator$Variant {
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        toJson(): $JsonElement;
        constructor();
    }
    export class $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider<T extends $ParticleOptions> extends $ParticleEngine$SpriteParticleRegistration<T> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
        create(type: T, clientLevel: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet, xSpeed: number, ySpeed: number, zSpeed: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider}.
     */
    export type $ParticleProviderRegistryKubeEvent$SpriteSetParticleProvider_<T> = ((type: T, clientLevel: $ClientLevel, x: number, y: number, z: number, sprites: $SpriteSet, xSpeed: number, ySpeed: number, zSpeed: number) => $Particle);
    export class $SoundsGenerator$SoundInstance {
        attenuationDistance(i: number): $SoundsGenerator$SoundInstance;
        asReferenceToEvent(): $SoundsGenerator$SoundInstance;
        stream(): $SoundsGenerator$SoundInstance;
        stream(b: boolean): $SoundsGenerator$SoundInstance;
        toJson(): $JsonElement;
        weight(i: number): $SoundsGenerator$SoundInstance;
        preload(): $SoundsGenerator$SoundInstance;
        preload(b: boolean): $SoundsGenerator$SoundInstance;
        volume(f: number): $SoundsGenerator$SoundInstance;
        pitch(f: number): $SoundsGenerator$SoundInstance;
        constructor(fileLocation: string);
    }
    export class $KubeSessionData {
        static of(mc: $Minecraft): $KubeSessionData;
        static of(listener: $ClientPacketListener): $KubeSessionData;
        sync(data: $KubeServerData_): void;
        activePostShader: $ResourceLocation;
        itemTooltips: $List<$ItemTooltipData>;
        recipeViewerData: $RecipeViewerData;
        constructor();
    }
    export class $VariantBlockStateGenerator {
        simpleVariant(key: string, model: $ResourceLocation_): void;
        variant(key: string, consumer: $Consumer_<$VariantBlockStateGenerator$Variant>): void;
        toJson(): $JsonObject;
        constructor();
    }
    export class $ParticleGenerator {
        textures(textures: $List_<string>): $ParticleGenerator;
        texture(texture: string): $ParticleGenerator;
        toJson(): $JsonObject;
        constructor();
    }
    export class $MultipartBlockStateGenerator$Part {
        model(s: $ResourceLocation_): $VariantBlockStateGenerator$Model;
        toJson(): $JsonObject;
        constructor();
    }
    export class $ModelGenerator$Element {
        faces(sides: $Direction_[], face: $Consumer_<$ModelGenerator$Face>): void;
        allFaces(face: $Consumer_<$ModelGenerator$Face>): void;
        size(b: $AABB_): $ModelGenerator$Element;
        toJson(): $JsonObject;
        constructor();
    }
    export class $KubeJSKeybinds$TickingKeyEvent extends $KubeJSKeybinds$KeyEvent {
        getTicks(): number;
        constructor(player: $LocalPlayer, key: $KubeJSKeybinds$KubeKey);
        get ticks(): number;
    }
    export class $KubeJSKeybinds$KeyEvent extends $ClientPlayerKubeEvent {
        constructor(player: $LocalPlayer, key: $KubeJSKeybinds$KubeKey);
    }
}
