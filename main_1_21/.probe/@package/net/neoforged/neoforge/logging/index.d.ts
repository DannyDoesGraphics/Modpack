import { $File_, $File } from "@package/java/io";
import { $ThreadInfo } from "@package/java/lang/management";
import { $CrashReport, $SystemReport } from "@package/net/minecraft";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $List_ } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StackTraceElement, $Throwable, $Exception, $StringBuilder } from "@package/java/lang";
import { $ModLoadingIssue_ } from "@package/net/neoforged/fml";

declare module "@package/net/neoforged/neoforge/logging" {
    export class $CrashReportExtender$ModLoadingCrashException extends $Exception {
    }
    export class $PacketDump {
        static getContentDump(buffer: $ByteBuf): string;
        constructor();
    }
    export class $ThreadInfoUtil {
        static getEntireStacktrace(threadInfo: $ThreadInfo): string;
        constructor();
    }
    export class $CrashReportExtender {
        static generateEnhancedStackTrace(stacktrace: $StackTraceElement[]): string;
        static generateEnhancedStackTrace(throwable: $Throwable): string;
        static generateEnhancedStackTrace(throwable: $Throwable, header: boolean): string;
        static extendSystemReport(systemReport: $SystemReport): void;
        static addCrashReportHeader(stringbuilder: $StringBuilder, crashReport: $CrashReport): void;
        static dumpModLoadingCrashReport(logger: $Logger, issues: $List_<$ModLoadingIssue_>, topLevelDir: $File_): $File;
        constructor();
    }
}
