import { $Flushable, $InputStream, $PrintWriter, $OutputStream, $Closeable } from "@package/java/io";
import { $IntConsumer_, $IntSupplier_ } from "@package/java/util/function";
import { $Charset } from "@package/java/nio/charset";
import { $NonBlockingReader, $ColorPalette, $InfoCmp$Capability_ } from "@package/org/jline/utils";
import { $Enum, $Object } from "@package/java/lang";
import { $EnumSet, $EnumMap } from "@package/java/util";

declare module "@package/org/jline/terminal" {
    export class $Attributes$ControlFlag extends $Enum<$Attributes$ControlFlag> {
        static values(): $Attributes$ControlFlag[];
        static valueOf(arg0: string): $Attributes$ControlFlag;
        static CLOCAL: $Attributes$ControlFlag;
        static CDSR_OFLOW: $Attributes$ControlFlag;
        static CS5: $Attributes$ControlFlag;
        static PARENB: $Attributes$ControlFlag;
        static CS7: $Attributes$ControlFlag;
        static CS6: $Attributes$ControlFlag;
        static CRTS_IFLOW: $Attributes$ControlFlag;
        static CS8: $Attributes$ControlFlag;
        static CCAR_OFLOW: $Attributes$ControlFlag;
        static CREAD: $Attributes$ControlFlag;
        static CSTOPB: $Attributes$ControlFlag;
        static PARODD: $Attributes$ControlFlag;
        static HUPCL: $Attributes$ControlFlag;
        static CIGNORE: $Attributes$ControlFlag;
        static CCTS_OFLOW: $Attributes$ControlFlag;
        static CDTR_IFLOW: $Attributes$ControlFlag;
    }
    /**
     * Values that may be interpreted as {@link $Attributes$ControlFlag}.
     */
    export type $Attributes$ControlFlag_ = "cignore" | "cs5" | "cs6" | "cs7" | "cs8" | "cstopb" | "cread" | "parenb" | "parodd" | "hupcl" | "clocal" | "ccts_oflow" | "crts_iflow" | "cdtr_iflow" | "cdsr_oflow" | "ccar_oflow";
    export class $MouseEvent$Button extends $Enum<$MouseEvent$Button> {
        static values(): $MouseEvent$Button[];
        static valueOf(arg0: string): $MouseEvent$Button;
        static WheelDown: $MouseEvent$Button;
        static WheelUp: $MouseEvent$Button;
        static Button1: $MouseEvent$Button;
        static NoButton: $MouseEvent$Button;
        static Button3: $MouseEvent$Button;
        static Button2: $MouseEvent$Button;
    }
    /**
     * Values that may be interpreted as {@link $MouseEvent$Button}.
     */
    export type $MouseEvent$Button_ = "nobutton" | "button1" | "button2" | "button3" | "wheelup" | "wheeldown";
    export class $Cursor {
        getY(): number;
        getX(): number;
        constructor(arg0: number, arg1: number);
        get y(): number;
        get x(): number;
    }
    export class $Terminal$SignalHandler {
        static SIG_DFL: $Terminal$SignalHandler;
        static SIG_IGN: $Terminal$SignalHandler;
    }
    export interface $Terminal$SignalHandler {
        handle(arg0: $Terminal$Signal_): void;
    }
    /**
     * Values that may be interpreted as {@link $Terminal$SignalHandler}.
     */
    export type $Terminal$SignalHandler_ = ((arg0: $Terminal$Signal) => void);
    export class $Attributes$InputFlag extends $Enum<$Attributes$InputFlag> {
        static values(): $Attributes$InputFlag[];
        static valueOf(arg0: string): $Attributes$InputFlag;
        static ISTRIP: $Attributes$InputFlag;
        static IMAXBEL: $Attributes$InputFlag;
        static IXON: $Attributes$InputFlag;
        static IXOFF: $Attributes$InputFlag;
        static IGNPAR: $Attributes$InputFlag;
        static IXANY: $Attributes$InputFlag;
        static BRKINT: $Attributes$InputFlag;
        static ICRNL: $Attributes$InputFlag;
        static IGNBRK: $Attributes$InputFlag;
        static IUTF8: $Attributes$InputFlag;
        static IGNCR: $Attributes$InputFlag;
        static INPCK: $Attributes$InputFlag;
        static PARMRK: $Attributes$InputFlag;
        static INLCR: $Attributes$InputFlag;
    }
    /**
     * Values that may be interpreted as {@link $Attributes$InputFlag}.
     */
    export type $Attributes$InputFlag_ = "ignbrk" | "brkint" | "ignpar" | "parmrk" | "inpck" | "istrip" | "inlcr" | "igncr" | "icrnl" | "ixon" | "ixoff" | "ixany" | "imaxbel" | "iutf8";
    export class $Attributes$OutputFlag extends $Enum<$Attributes$OutputFlag> {
        static values(): $Attributes$OutputFlag[];
        static valueOf(arg0: string): $Attributes$OutputFlag;
        static ONLCR: $Attributes$OutputFlag;
        static ONOCR: $Attributes$OutputFlag;
        static ONOEOT: $Attributes$OutputFlag;
        static OCRNL: $Attributes$OutputFlag;
        static OFILL: $Attributes$OutputFlag;
        static BSDLY: $Attributes$OutputFlag;
        static OXTABS: $Attributes$OutputFlag;
        static ONLRET: $Attributes$OutputFlag;
        static FFDLY: $Attributes$OutputFlag;
        static OFDEL: $Attributes$OutputFlag;
        static VTDLY: $Attributes$OutputFlag;
        static OPOST: $Attributes$OutputFlag;
        static CRDLY: $Attributes$OutputFlag;
        static TABDLY: $Attributes$OutputFlag;
        static NLDLY: $Attributes$OutputFlag;
    }
    /**
     * Values that may be interpreted as {@link $Attributes$OutputFlag}.
     */
    export type $Attributes$OutputFlag_ = "opost" | "onlcr" | "oxtabs" | "onoeot" | "ocrnl" | "onocr" | "onlret" | "ofill" | "nldly" | "tabdly" | "crdly" | "ffdly" | "bsdly" | "vtdly" | "ofdel";
    export class $Attributes$ControlChar extends $Enum<$Attributes$ControlChar> {
        static values(): $Attributes$ControlChar[];
        static valueOf(arg0: string): $Attributes$ControlChar;
        static VTIME: $Attributes$ControlChar;
        static VERASE: $Attributes$ControlChar;
        static VEOL: $Attributes$ControlChar;
        static VQUIT: $Attributes$ControlChar;
        static VWERASE: $Attributes$ControlChar;
        static VINTR: $Attributes$ControlChar;
        static VDISCARD: $Attributes$ControlChar;
        static VKILL: $Attributes$ControlChar;
        static VDSUSP: $Attributes$ControlChar;
        static VEOF: $Attributes$ControlChar;
        static VSTATUS: $Attributes$ControlChar;
        static VREPRINT: $Attributes$ControlChar;
        static VMIN: $Attributes$ControlChar;
        static VSTART: $Attributes$ControlChar;
        static VSUSP: $Attributes$ControlChar;
        static VEOL2: $Attributes$ControlChar;
        static VSTOP: $Attributes$ControlChar;
        static VLNEXT: $Attributes$ControlChar;
    }
    /**
     * Values that may be interpreted as {@link $Attributes$ControlChar}.
     */
    export type $Attributes$ControlChar_ = "veof" | "veol" | "veol2" | "verase" | "vwerase" | "vkill" | "vreprint" | "vintr" | "vquit" | "vsusp" | "vdsusp" | "vstart" | "vstop" | "vlnext" | "vdiscard" | "vmin" | "vtime" | "vstatus";
    export class $Terminal$MouseTracking extends $Enum<$Terminal$MouseTracking> {
        static values(): $Terminal$MouseTracking[];
        static valueOf(arg0: string): $Terminal$MouseTracking;
        static Button: $Terminal$MouseTracking;
        static Normal: $Terminal$MouseTracking;
        static Any: $Terminal$MouseTracking;
        static Off: $Terminal$MouseTracking;
    }
    /**
     * Values that may be interpreted as {@link $Terminal$MouseTracking}.
     */
    export type $Terminal$MouseTracking_ = "off" | "normal" | "button" | "any";
    export class $Attributes {
        setInputFlags(arg0: $EnumSet<$Attributes$InputFlag_>): void;
        setInputFlags(arg0: $EnumSet<$Attributes$InputFlag_>, arg1: boolean): void;
        getOutputFlags(): $EnumSet<$Attributes$OutputFlag>;
        setOutputFlags(arg0: $EnumSet<$Attributes$OutputFlag_>): void;
        setOutputFlags(arg0: $EnumSet<$Attributes$OutputFlag_>, arg1: boolean): void;
        setControlFlags(arg0: $EnumSet<$Attributes$ControlFlag_>, arg1: boolean): void;
        setControlFlags(arg0: $EnumSet<$Attributes$ControlFlag_>): void;
        getLocalFlags(): $EnumSet<$Attributes$LocalFlag>;
        setLocalFlags(arg0: $EnumSet<$Attributes$LocalFlag_>, arg1: boolean): void;
        setLocalFlags(arg0: $EnumSet<$Attributes$LocalFlag_>): void;
        getControlChars(): $EnumMap<$Attributes$ControlChar, number>;
        setControlChars(arg0: $EnumMap<$Attributes$ControlChar_, number>): void;
        getInputFlags(): $EnumSet<$Attributes$InputFlag>;
        getControlFlags(): $EnumSet<$Attributes$ControlFlag>;
        copy(arg0: $Attributes): void;
        getInputFlag(arg0: $Attributes$InputFlag_): boolean;
        getOutputFlag(arg0: $Attributes$OutputFlag_): boolean;
        getControlFlag(arg0: $Attributes$ControlFlag_): boolean;
        getLocalFlag(arg0: $Attributes$LocalFlag_): boolean;
        getControlChar(arg0: $Attributes$ControlChar_): number;
        setInputFlag(arg0: $Attributes$InputFlag_, arg1: boolean): void;
        setOutputFlag(arg0: $Attributes$OutputFlag_, arg1: boolean): void;
        setControlFlag(arg0: $Attributes$ControlFlag_, arg1: boolean): void;
        setLocalFlag(arg0: $Attributes$LocalFlag_, arg1: boolean): void;
        setControlChar(arg0: $Attributes$ControlChar_, arg1: number): void;
        constructor();
        constructor(arg0: $Attributes);
    }
    export class $Terminal$Signal extends $Enum<$Terminal$Signal> {
        static values(): $Terminal$Signal[];
        static valueOf(arg0: string): $Terminal$Signal;
        static QUIT: $Terminal$Signal;
        static TSTP: $Terminal$Signal;
        static INFO: $Terminal$Signal;
        static CONT: $Terminal$Signal;
        static WINCH: $Terminal$Signal;
        static INT: $Terminal$Signal;
    }
    /**
     * Values that may be interpreted as {@link $Terminal$Signal}.
     */
    export type $Terminal$Signal_ = "int" | "quit" | "tstp" | "cont" | "info" | "winch";
    export class $MouseEvent$Modifier extends $Enum<$MouseEvent$Modifier> {
        static values(): $MouseEvent$Modifier[];
        static valueOf(arg0: string): $MouseEvent$Modifier;
        static Shift: $MouseEvent$Modifier;
        static Control: $MouseEvent$Modifier;
        static Alt: $MouseEvent$Modifier;
    }
    /**
     * Values that may be interpreted as {@link $MouseEvent$Modifier}.
     */
    export type $MouseEvent$Modifier_ = "shift" | "alt" | "control";
    export class $MouseEvent {
        getY(): number;
        getModifiers(): $EnumSet<$MouseEvent$Modifier>;
        getType(): $MouseEvent$Type;
        getX(): number;
        getButton(): $MouseEvent$Button;
        constructor(arg0: $MouseEvent$Type_, arg1: $MouseEvent$Button_, arg2: $EnumSet<$MouseEvent$Modifier_>, arg3: number, arg4: number);
        get y(): number;
        get modifiers(): $EnumSet<$MouseEvent$Modifier>;
        get type(): $MouseEvent$Type;
        get x(): number;
        get button(): $MouseEvent$Button;
    }
    export class $Attributes$LocalFlag extends $Enum<$Attributes$LocalFlag> {
        static values(): $Attributes$LocalFlag[];
        static valueOf(arg0: string): $Attributes$LocalFlag;
        static FLUSHO: $Attributes$LocalFlag;
        static PENDIN: $Attributes$LocalFlag;
        static ECHO: $Attributes$LocalFlag;
        static ICANON: $Attributes$LocalFlag;
        static IEXTEN: $Attributes$LocalFlag;
        static ECHOCTL: $Attributes$LocalFlag;
        static NOFLSH: $Attributes$LocalFlag;
        static ISIG: $Attributes$LocalFlag;
        static EXTPROC: $Attributes$LocalFlag;
        static TOSTOP: $Attributes$LocalFlag;
        static ECHOE: $Attributes$LocalFlag;
        static ECHOK: $Attributes$LocalFlag;
        static ECHOKE: $Attributes$LocalFlag;
        static ECHONL: $Attributes$LocalFlag;
        static ECHOPRT: $Attributes$LocalFlag;
        static ALTWERASE: $Attributes$LocalFlag;
        static NOKERNINFO: $Attributes$LocalFlag;
    }
    /**
     * Values that may be interpreted as {@link $Attributes$LocalFlag}.
     */
    export type $Attributes$LocalFlag_ = "echoke" | "echoe" | "echok" | "echo" | "echonl" | "echoprt" | "echoctl" | "isig" | "icanon" | "altwerase" | "iexten" | "extproc" | "tostop" | "flusho" | "nokerninfo" | "pendin" | "noflsh";
    export class $MouseEvent$Type extends $Enum<$MouseEvent$Type> {
        static values(): $MouseEvent$Type[];
        static valueOf(arg0: string): $MouseEvent$Type;
        static Wheel: $MouseEvent$Type;
        static Pressed: $MouseEvent$Type;
        static Moved: $MouseEvent$Type;
        static Released: $MouseEvent$Type;
        static Dragged: $MouseEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $MouseEvent$Type}.
     */
    export type $MouseEvent$Type_ = "released" | "pressed" | "wheel" | "moved" | "dragged";
    export class $Size {
        cursorPos(arg0: number, arg1: number): number;
        setRows(arg0: number): void;
        setColumns(arg0: number): void;
        copy(arg0: $Size): void;
        getColumns(): number;
        getRows(): number;
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $Terminal {
        static TYPE_DUMB_COLOR: string;
        static TYPE_DUMB: string;
    }
    export interface $Terminal extends $Closeable, $Flushable {
        setAttributes(arg0: $Attributes): void;
        getName(): string;
        flush(): void;
        resume(): void;
        reader(): $NonBlockingReader;
        writer(): $PrintWriter;
        encoding(): $Charset;
        getType(): string;
        getSize(): $Size;
        handle(arg0: $Terminal$Signal_, arg1: $Terminal$SignalHandler_): $Terminal$SignalHandler;
        input(): $InputStream;
        getAttributes(): $Attributes;
        raise(arg0: $Terminal$Signal_): void;
        output(): $OutputStream;
        setSize(arg0: $Size): void;
        getBufferSize(): $Size;
        canPauseResume(): boolean;
        paused(): boolean;
        enterRawMode(): $Attributes;
        echo(arg0: boolean): boolean;
        echo(): boolean;
        puts(arg0: $InfoCmp$Capability_, ...arg1: $Object[]): boolean;
        getBooleanCapability(arg0: $InfoCmp$Capability_): boolean;
        getNumericCapability(arg0: $InfoCmp$Capability_): number;
        getStringCapability(arg0: $InfoCmp$Capability_): string;
        getCursorPosition(arg0: $IntConsumer_): $Cursor;
        hasMouseSupport(): boolean;
        trackMouse(arg0: $Terminal$MouseTracking_): boolean;
        readMouseEvent(): $MouseEvent;
        readMouseEvent(arg0: $IntSupplier_): $MouseEvent;
        hasFocusSupport(): boolean;
        trackFocus(arg0: boolean): boolean;
        getPalette(): $ColorPalette;
        pause(arg0: boolean): void;
        pause(): void;
        getWidth(): number;
        getHeight(): number;
        get name(): string;
        get type(): string;
        get bufferSize(): $Size;
        get palette(): $ColorPalette;
        get width(): number;
        get height(): number;
    }
}
