import { $ILinkStatus } from "@package/appeng/api/storage";
import { $Annotation } from "@package/java/lang/annotation";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Field } from "@package/java/lang/reflect";
import { $Object, $Enum } from "@package/java/lang";
import { $GenericStack } from "@package/appeng/api/stacks";
import { $ShortSet } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/appeng/menu/guisync" {
    export class $SynchronizedField$StringField extends $SynchronizedField<string> {
    }
    export class $SynchronizedField$CustomField extends $SynchronizedField<$Object> {
    }
    export class $SynchronizedField$LongField extends $SynchronizedField<number> {
    }
    export class $SynchronizedField$EnumField<T extends $Enum<T>> extends $SynchronizedField<T> {
    }
    export class $LinkStatusAwareMenu {
    }
    export interface $LinkStatusAwareMenu {
        setLinkStatus(arg0: $ILinkStatus): void;
        set linkStatus(value: $ILinkStatus);
    }
    /**
     * Values that may be interpreted as {@link $LinkStatusAwareMenu}.
     */
    export type $LinkStatusAwareMenu_ = ((arg0: $ILinkStatus) => void);
    export class $SynchronizedField$TextComponentField extends $SynchronizedField<$Component> {
    }
    export class $SynchronizedField$GenericStackField extends $SynchronizedField<$GenericStack> {
    }
    export class $GuiSync implements $Annotation {
        value(): number;
    }
    export class $SynchronizedField$IntegerField extends $SynchronizedField<number> {
    }
    export class $SynchronizedField$DoubleField extends $SynchronizedField<number> {
    }
    export class $DataSynchronization {
        writeUpdate(arg0: $RegistryFriendlyByteBuf): void;
        writeFull(arg0: $RegistryFriendlyByteBuf): void;
        hasChanges(): boolean;
        hasFields(): boolean;
        readUpdate(arg0: $RegistryFriendlyByteBuf, arg1: $ShortSet): void;
        constructor(arg0: $Object);
    }
    export class $PacketWritable {
    }
    export interface $PacketWritable {
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
    }
    /**
     * Values that may be interpreted as {@link $PacketWritable}.
     */
    export type $PacketWritable_ = ((arg0: $RegistryFriendlyByteBuf) => void);
    export class $SynchronizedField$ResourceLocationField extends $SynchronizedField<$ResourceLocation> {
    }
    export class $SynchronizedField<T> {
        hasChanges(): boolean;
        write(arg0: $RegistryFriendlyByteBuf): void;
        read(arg0: $RegistryFriendlyByteBuf): void;
        static create(arg0: $Object, arg1: $Field): $SynchronizedField<never>;
    }
    export class $SynchronizedField$BooleanField extends $SynchronizedField<boolean> {
    }
}
