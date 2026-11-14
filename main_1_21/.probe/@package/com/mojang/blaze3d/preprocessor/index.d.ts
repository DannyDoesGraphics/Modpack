import { $List } from "@package/java/util";

declare module "@package/com/mojang/blaze3d/preprocessor" {
    export class $GlslPreprocessor$Context {
    }
    export class $GlslPreprocessor {
        process(shaderData: string): $List<string>;
        applyImport(useFullPath: boolean, directory: string): string;
        constructor();
    }
}
