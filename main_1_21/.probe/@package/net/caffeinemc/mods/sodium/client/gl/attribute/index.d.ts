import { $VertexFormatAttribute_ } from "@package/net/caffeinemc/mods/sodium/client/render/vertex";
import { $Map_ } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/attribute" {
    export class $GlVertexAttributeBinding extends $GlVertexAttribute {
        getIndex(): number;
        constructor(arg0: number, arg1: $GlVertexAttribute);
        get index(): number;
    }
    export class $GlVertexFormat {
        static builder(arg0: number): $GlVertexFormat$Builder;
        getAttribute(arg0: $VertexFormatAttribute_): $GlVertexAttribute;
        getStride(): number;
        getShaderBindings(): $GlVertexAttributeBinding[];
        constructor(arg0: $Map_<$VertexFormatAttribute_, $GlVertexAttribute>, arg1: $GlVertexAttributeBinding[], arg2: number);
        get stride(): number;
        get shaderBindings(): $GlVertexAttributeBinding[];
    }
}
