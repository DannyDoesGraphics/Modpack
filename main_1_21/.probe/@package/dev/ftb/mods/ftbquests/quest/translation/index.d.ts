import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_ } from "@package/java/nio/file";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BaseQuestFile, $QuestObjectBase, $ServerQuestFile } from "@package/dev/ftb/mods/ftbquests/quest";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/quest/translation" {
    export class $TranslationKey extends $Enum<$TranslationKey> {
        getTranslationKey(): string;
        isListVal(): boolean;
        getName(): string;
        static values(): $TranslationKey[];
        static valueOf(name: string): $TranslationKey;
        validate(either: $Either<string, $List_<string>>): $Either<string, $List<string>>;
        emptyValue(): $Either<string, $List<string>>;
        static QUEST_DESC: $TranslationKey;
        static NAME_MAP: $NameMap<$TranslationKey>;
        static TITLE: $TranslationKey;
        static QUEST_SUBTITLE: $TranslationKey;
        static CHAPTER_SUBTITLE: $TranslationKey;
        get translationKey(): string;
        get listVal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TranslationKey}.
     */
    export type $TranslationKey_ = "title" | "quest_subtitle" | "quest_desc" | "chapter_subtitle";
    export class $TranslationTable {
        static fromNBT(tag: $CompoundTag_): $TranslationTable;
        saveToNBT(): $CompoundTag;
        getStringTranslation(key: string): (string) | undefined;
        getStringListTranslation(key: string): ($List<string>) | undefined;
        findStaleEntries(file: $ServerQuestFile): $List<string>;
        remove(key: string): void;
        size(): number;
        put(key: string, message: string): void;
        put(key: string, message: $List_<string>): void;
        contains(key: string): boolean;
        getEntry(key: string, def: $Either<string, $List_<string>>): $Either<string, $List<string>>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TranslationTable>;
        constructor();
    }
    export class $TranslationManager {
        hasMissingTranslation(object: $QuestObjectBase, key: $TranslationKey_): boolean;
        removeTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): void;
        cleanupTranslations(source: $CommandSourceStack, dryRun: boolean): void;
        static syncTable(player: $ServerPlayer, language: string): void;
        loadFromNBT(file: $BaseQuestFile, langFolder: $Path_): void;
        saveToNBT(langFolder: $Path_, force: boolean): void;
        addTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_, message: $List_<string>): void;
        addTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_, message: string): void;
        removeAllTranslations(object: $QuestObjectBase): void;
        sendTranslationsToPlayer(player: $ServerPlayer): void;
        getStringTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): (string) | undefined;
        getStringListTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): ($List<string>) | undefined;
        addInitialTranslation(extra: $CompoundTag_, locale: string, translationKey: $TranslationKey_, value: string): void;
        processInitialTranslation(extra: $CompoundTag_, object: $QuestObjectBase): void;
        sendTableToPlayer(player: $ServerPlayer, locale: string): void;
        syncTableFromServer(locale: string, table: $TranslationTable): void;
        getEntry(qob: $QuestObjectBase, locale: string, subKey: $TranslationKey_): $Either<string, $List<string>>;
        static DEFAULT_FALLBACK_LOCALE: string;
        constructor();
    }
}
