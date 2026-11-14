import { $Enum } from "@package/java/lang";
export * as visitor from "@package/io/github/ocelot/glslprocessor/api/visitor";
export * as node from "@package/io/github/ocelot/glslprocessor/api/node";
export * as grammar from "@package/io/github/ocelot/glslprocessor/api/grammar";

declare module "@package/io/github/ocelot/glslprocessor/api" {
    export class $GlslInjectionPoint extends $Enum<$GlslInjectionPoint> {
        static values(): $GlslInjectionPoint[];
        static valueOf(arg0: string): $GlslInjectionPoint;
        static AFTER_DECLARATIONS: $GlslInjectionPoint;
        static BEFORE_DECLARATIONS: $GlslInjectionPoint;
        static AFTER_MAIN: $GlslInjectionPoint;
        static BEFORE_MAIN: $GlslInjectionPoint;
        static AFTER_FUNCTIONS: $GlslInjectionPoint;
        static BEFORE_FUNCTIONS: $GlslInjectionPoint;
    }
    /**
     * Values that may be interpreted as {@link $GlslInjectionPoint}.
     */
    export type $GlslInjectionPoint_ = "before_declarations" | "after_declarations" | "before_main" | "after_main" | "before_functions" | "after_functions";
}
