import { $Duration, $Instant } from "@package/java/time";
import { $ValueDescriptor, $EventType } from "@package/jdk/jfr";
import { $List } from "@package/java/util";

declare module "@package/jdk/jfr/consumer" {
    export class $RecordedClassLoader extends $RecordedObject {
        getName(): string;
        getId(): number;
        getType(): $RecordedClass;
        get name(): string;
        get id(): number;
        get type(): $RecordedClass;
    }
    export class $RecordedMethod extends $RecordedObject {
        getName(): string;
        getModifiers(): number;
        isHidden(): boolean;
        getDescriptor(): string;
        getType(): $RecordedClass;
        get name(): string;
        get modifiers(): number;
        get hidden(): boolean;
        get descriptor(): string;
        get type(): $RecordedClass;
    }
    export class $RecordedFrame extends $RecordedObject {
        isJavaFrame(): boolean;
        getBytecodeIndex(): number;
        getMethod(): $RecordedMethod;
        getType(): string;
        getLineNumber(): number;
        get javaFrame(): boolean;
        get bytecodeIndex(): number;
        get method(): $RecordedMethod;
        get type(): string;
        get lineNumber(): number;
    }
    export class $RecordedClass extends $RecordedObject {
        getName(): string;
        getModifiers(): number;
        getClassLoader(): $RecordedClassLoader;
        getId(): number;
        get name(): string;
        get modifiers(): number;
        get classLoader(): $RecordedClassLoader;
        get id(): number;
    }
    export class $RecordedStackTrace extends $RecordedObject {
        isTruncated(): boolean;
        getFrames(): $List<$RecordedFrame>;
        get truncated(): boolean;
        get frames(): $List<$RecordedFrame>;
    }
    export class $RecordedObject {
        getThread(arg0: string): $RecordedThread;
        hasField(arg0: string): boolean;
        getInstant(arg0: string): $Instant;
        getClass(arg0: string): $RecordedClass;
        getBoolean(arg0: string): boolean;
        getByte(arg0: string): number;
        getShort(arg0: string): number;
        getChar(arg0: string): string;
        getInt(arg0: string): number;
        getLong(arg0: string): number;
        getFloat(arg0: string): number;
        getDouble(arg0: string): number;
        getValue<T>(arg0: string): T;
        getFields(): $List<$ValueDescriptor>;
        getString(arg0: string): string;
        getDuration(arg0: string): $Duration;
        get fields(): $List<$ValueDescriptor>;
    }
    export class $RecordedThreadGroup extends $RecordedObject {
        getName(): string;
        getParent(): $RecordedThreadGroup;
        get name(): string;
        get parent(): $RecordedThreadGroup;
    }
    export class $RecordedThread extends $RecordedObject {
        getOSName(): string;
        getJavaName(): string;
        getOSThreadId(): number;
        getJavaThreadId(): number;
        isVirtual(): boolean;
        getThreadGroup(): $RecordedThreadGroup;
        getId(): number;
        get OSName(): string;
        get javaName(): string;
        get OSThreadId(): number;
        get javaThreadId(): number;
        get virtual(): boolean;
        get threadGroup(): $RecordedThreadGroup;
        get id(): number;
    }
    export class $RecordedEvent extends $RecordedObject {
        getEventType(): $EventType;
        getThread(): $RecordedThread;
        getEndTime(): $Instant;
        getStackTrace(): $RecordedStackTrace;
        getDuration(): $Duration;
        getStartTime(): $Instant;
        get eventType(): $EventType;
        get thread(): $RecordedThread;
        get endTime(): $Instant;
        get stackTrace(): $RecordedStackTrace;
        get duration(): $Duration;
        get startTime(): $Instant;
    }
}
