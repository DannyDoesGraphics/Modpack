import { $EventObject, $EventListener } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/java/beans" {
    export class $VetoableChangeListener {
    }
    export interface $VetoableChangeListener extends $EventListener {
        vetoableChange(arg0: $PropertyChangeEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $VetoableChangeListener}.
     */
    export type $VetoableChangeListener_ = ((arg0: $PropertyChangeEvent) => void);
    export class $PropertyChangeListener {
    }
    export interface $PropertyChangeListener extends $EventListener {
        propertyChange(arg0: $PropertyChangeEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $PropertyChangeListener}.
     */
    export type $PropertyChangeListener_ = ((arg0: $PropertyChangeEvent) => void);
    export class $PropertyChangeEvent extends $EventObject {
        getPropertyName(): string;
        getOldValue(): $Object;
        getNewValue(): $Object;
        getPropagationId(): $Object;
        setPropagationId(arg0: $Object): void;
        constructor(arg0: $Object, arg1: string, arg2: $Object, arg3: $Object);
        get propertyName(): string;
        get oldValue(): $Object;
        get newValue(): $Object;
    }
}
