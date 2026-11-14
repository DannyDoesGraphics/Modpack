import { $PrintServiceAttributeSet } from "@package/javax/print/attribute";
import { $PrintService } from "@package/javax/print";

declare module "@package/javax/print/event" {
    export class $PrintJobAttributeListener {
    }
    export interface $PrintJobAttributeListener {
        attributeUpdate(arg0: $PrintJobAttributeEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $PrintJobAttributeListener}.
     */
    export type $PrintJobAttributeListener_ = ((arg0: $PrintJobAttributeEvent) => void);
    export class $PrintServiceAttributeListener {
    }
    export interface $PrintServiceAttributeListener {
        attributeUpdate(arg0: $PrintServiceAttributeEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $PrintServiceAttributeListener}.
     */
    export type $PrintServiceAttributeListener_ = ((arg0: $PrintServiceAttributeEvent) => void);
    export class $PrintJobListener {
    }
    export interface $PrintJobListener {
        printDataTransferCompleted(arg0: $PrintJobEvent): void;
        printJobCompleted(arg0: $PrintJobEvent): void;
        printJobFailed(arg0: $PrintJobEvent): void;
        printJobCanceled(arg0: $PrintJobEvent): void;
        printJobNoMoreEvents(arg0: $PrintJobEvent): void;
        printJobRequiresAttention(arg0: $PrintJobEvent): void;
    }
    export class $PrintServiceAttributeEvent extends $PrintEvent {
        getPrintService(): $PrintService;
        getAttributes(): $PrintServiceAttributeSet;
        constructor(arg0: $PrintService, arg1: $PrintServiceAttributeSet);
        get printService(): $PrintService;
        get attributes(): $PrintServiceAttributeSet;
    }
}
