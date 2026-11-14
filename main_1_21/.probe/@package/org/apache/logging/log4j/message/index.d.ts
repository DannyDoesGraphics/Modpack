import { $Serializable } from "@package/java/io";
import { $Throwable, $Object } from "@package/java/lang";

declare module "@package/org/apache/logging/log4j/message" {
    export class $EntryMessage {
    }
    export interface $EntryMessage extends $FlowMessage {
    }
    export class $FlowMessage {
    }
    export interface $FlowMessage extends $Message {
        getMessage(): $Message;
        getText(): string;
        get message(): $Message;
        get text(): string;
    }
    export class $FlowMessageFactory {
    }
    export interface $FlowMessageFactory {
        newEntryMessage(message: string, ...params: $Object[]): $EntryMessage;
        newEntryMessage(message: $Message): $EntryMessage;
        newExitMessage(message: $EntryMessage): $ExitMessage;
        newExitMessage(result: $Object, message: $Message): $ExitMessage;
        newExitMessage(result: $Object, message: $EntryMessage): $ExitMessage;
        newExitMessage(message: $Message): $ExitMessage;
        newExitMessage(format: string, result: $Object): $ExitMessage;
    }
    export class $MessageFactory {
    }
    export interface $MessageFactory {
        newMessage(message: $Object): $Message;
        newMessage(message: string): $Message;
        newMessage(message: string, ...params: $Object[]): $Message;
    }
    export class $Message {
    }
    export interface $Message extends $Serializable {
        getParameters(): $Object[];
        getFormat(): string;
        getFormattedMessage(): string;
        getThrowable(): $Throwable;
        get parameters(): $Object[];
        get format(): string;
        get formattedMessage(): string;
        get throwable(): $Throwable;
    }
    export class $ExitMessage {
    }
    export interface $ExitMessage extends $FlowMessage {
    }
}
