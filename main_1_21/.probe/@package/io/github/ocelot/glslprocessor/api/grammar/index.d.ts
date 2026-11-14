import { $Enum, $Record } from "@package/java/lang";
import { $Collection_, $List, $List_ } from "@package/java/util";
import { $GlslNode } from "@package/io/github/ocelot/glslprocessor/api/node";

declare module "@package/io/github/ocelot/glslprocessor/api/grammar" {
    export class $GlslStructField {
        getName(): string;
        setName(arg0: string): $GlslStructField;
        getType(): $GlslSpecifiedType;
        copy(): $GlslStructField;
        setType(arg0: $GlslSpecifiedType): $GlslStructField;
        constructor(arg0: $GlslType_, arg1: string);
    }
    export class $GlslParameterDeclaration {
        setQualifiers(...arg0: $GlslTypeQualifier[]): $GlslParameterDeclaration;
        setQualifiers(arg0: $Collection_<$GlslTypeQualifier>): $GlslParameterDeclaration;
        getName(): string;
        setName(arg0: string): $GlslParameterDeclaration;
        getType(): $GlslSpecifiedType;
        copy(): $GlslParameterDeclaration;
        setType(arg0: $GlslType_): $GlslParameterDeclaration;
        constructor(arg0: $GlslType_, arg1: string);
    }
    export class $GlslTypeSpecifier$BuiltinType extends $Enum<$GlslTypeSpecifier$BuiltinType> implements $GlslTypeSpecifier {
        isUnsignedInteger(): boolean;
        isBool(): boolean;
        isVector(): boolean;
        isMatrix(): boolean;
        getName(): string;
        static values(): $GlslTypeSpecifier$BuiltinType[];
        isPrimitive(): boolean;
        static valueOf(arg0: string): $GlslTypeSpecifier$BuiltinType;
        isInteger(): boolean;
        isFloat(): boolean;
        getComponents(): number;
        getConstant(arg0: number): string;
        isDouble(): boolean;
        isStruct(): boolean;
        asStructSpecifier(): $GlslStructSpecifier;
        asSpecifiedType(): $GlslSpecifiedType;
        isNamed(): boolean;
        static ISAMPLERCUBEARRAY: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER2DRECT: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER2DARRAY: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DSHADOW: $GlslTypeSpecifier$BuiltinType;
        static IMAGE2D: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER1DSHADOW: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DARRAY: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DMS: $GlslTypeSpecifier$BuiltinType;
        static UIMAGECUBE: $GlslTypeSpecifier$BuiltinType;
        static DMAT3X4: $GlslTypeSpecifier$BuiltinType;
        static IIMAGEBUFFER: $GlslTypeSpecifier$BuiltinType;
        static DMAT3X3: $GlslTypeSpecifier$BuiltinType;
        static VEC2: $GlslTypeSpecifier$BuiltinType;
        static DMAT3X2: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLERCUBE: $GlslTypeSpecifier$BuiltinType;
        static VEC3: $GlslTypeSpecifier$BuiltinType;
        static IMAGE2DMSARRAY: $GlslTypeSpecifier$BuiltinType;
        static IVEC3: $GlslTypeSpecifier$BuiltinType;
        static IVEC4: $GlslTypeSpecifier$BuiltinType;
        static IVEC2: $GlslTypeSpecifier$BuiltinType;
        static MAT3X2: $GlslTypeSpecifier$BuiltinType;
        static SAMPLERCUBEARRAY: $GlslTypeSpecifier$BuiltinType;
        static IMAGE3D: $GlslTypeSpecifier$BuiltinType;
        static MAT3X3: $GlslTypeSpecifier$BuiltinType;
        static MAT3X4: $GlslTypeSpecifier$BuiltinType;
        static IMAGECUBEARRAY: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER3D: $GlslTypeSpecifier$BuiltinType;
        static IMAGECUBE: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE2DMSARRAY: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE1DARRAY: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE1D: $GlslTypeSpecifier$BuiltinType;
        static SAMPLERCUBEARRAYSHADOW: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE2DRECT: $GlslTypeSpecifier$BuiltinType;
        static BVEC4: $GlslTypeSpecifier$BuiltinType;
        static BVEC2: $GlslTypeSpecifier$BuiltinType;
        static SAMPLERCUBESHADOW: $GlslTypeSpecifier$BuiltinType;
        static BVEC3: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER3D: $GlslTypeSpecifier$BuiltinType;
        static DMAT4X4: $GlslTypeSpecifier$BuiltinType;
        static DMAT4X3: $GlslTypeSpecifier$BuiltinType;
        static DMAT4X2: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2D: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DRECT: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER2D: $GlslTypeSpecifier$BuiltinType;
        static IMAGE2DRECT: $GlslTypeSpecifier$BuiltinType;
        static DOUBLE: $GlslTypeSpecifier$BuiltinType;
        static UIMAGEBUFFER: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER1DARRAY: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE2D: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE2DMS: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE2DARRAY: $GlslTypeSpecifier$BuiltinType;
        static DVEC4: $GlslTypeSpecifier$BuiltinType;
        static DVEC2: $GlslTypeSpecifier$BuiltinType;
        static DVEC3: $GlslTypeSpecifier$BuiltinType;
        static SAMPLERCUBE: $GlslTypeSpecifier$BuiltinType;
        static VEC4: $GlslTypeSpecifier$BuiltinType;
        static MAT2X2: $GlslTypeSpecifier$BuiltinType;
        static MAT2X3: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER2DMS: $GlslTypeSpecifier$BuiltinType;
        static MAT2X4: $GlslTypeSpecifier$BuiltinType;
        static IMAGE1D: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER2D: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE3D: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER1D: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE3D: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER3D: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DARRAYSHADOW: $GlslTypeSpecifier$BuiltinType;
        static UINT: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER1DARRAYSHADOW: $GlslTypeSpecifier$BuiltinType;
        static IIMAGECUBE: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DMSARRAY: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER2DMS: $GlslTypeSpecifier$BuiltinType;
        static UIMAGECUBEARRAY: $GlslTypeSpecifier$BuiltinType;
        static IMAGE2DMS: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE2DARRAY: $GlslTypeSpecifier$BuiltinType;
        static ATOMIC_UINT: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER1D: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE2D: $GlslTypeSpecifier$BuiltinType;
        static IMAGEBUFFER: $GlslTypeSpecifier$BuiltinType;
        static SAMPLERBUFFER: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER1DARRAY: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE1D: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER1D: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER1DARRAY: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE2DMS: $GlslTypeSpecifier$BuiltinType;
        static VOID: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLERBUFFER: $GlslTypeSpecifier$BuiltinType;
        static UVEC4: $GlslTypeSpecifier$BuiltinType;
        static UVEC3: $GlslTypeSpecifier$BuiltinType;
        static FLOAT: $GlslTypeSpecifier$BuiltinType;
        static UVEC2: $GlslTypeSpecifier$BuiltinType;
        static SAMPLER2DRECTSHADOW: $GlslTypeSpecifier$BuiltinType;
        static INT: $GlslTypeSpecifier$BuiltinType;
        static MAT3: $GlslTypeSpecifier$BuiltinType;
        static MAT2: $GlslTypeSpecifier$BuiltinType;
        static IMAGE1DARRAY: $GlslTypeSpecifier$BuiltinType;
        static DMAT2: $GlslTypeSpecifier$BuiltinType;
        static DMAT3: $GlslTypeSpecifier$BuiltinType;
        static DMAT2X4: $GlslTypeSpecifier$BuiltinType;
        static USAMPLERBUFFER: $GlslTypeSpecifier$BuiltinType;
        static DMAT2X3: $GlslTypeSpecifier$BuiltinType;
        static MAT4: $GlslTypeSpecifier$BuiltinType;
        static DMAT2X2: $GlslTypeSpecifier$BuiltinType;
        static DMAT4: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER2DARRAY: $GlslTypeSpecifier$BuiltinType;
        static USAMPLERCUBE: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE2DRECT: $GlslTypeSpecifier$BuiltinType;
        static IIMAGECUBEARRAY: $GlslTypeSpecifier$BuiltinType;
        static IIMAGE1DARRAY: $GlslTypeSpecifier$BuiltinType;
        static UIMAGE2DMSARRAY: $GlslTypeSpecifier$BuiltinType;
        static USAMPLERCUBEARRAY: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER2DMSARRAY: $GlslTypeSpecifier$BuiltinType;
        static MAT4X2: $GlslTypeSpecifier$BuiltinType;
        static USAMPLER2DMSARRAY: $GlslTypeSpecifier$BuiltinType;
        static MAT4X3: $GlslTypeSpecifier$BuiltinType;
        static MAT4X4: $GlslTypeSpecifier$BuiltinType;
        static IMAGE2DARRAY: $GlslTypeSpecifier$BuiltinType;
        static BOOL: $GlslTypeSpecifier$BuiltinType;
        static ISAMPLER2DRECT: $GlslTypeSpecifier$BuiltinType;
        get unsignedInteger(): boolean;
        get bool(): boolean;
        get vector(): boolean;
        get matrix(): boolean;
        get primitive(): boolean;
        get integer(): boolean;
        get float(): boolean;
        get components(): number;
        get double(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GlslTypeSpecifier$BuiltinType}.
     */
    export type $GlslTypeSpecifier$BuiltinType_ = "void" | "float" | "double" | "int" | "uint" | "bool" | "vec2" | "vec3" | "vec4" | "dvec2" | "dvec3" | "dvec4" | "bvec2" | "bvec3" | "bvec4" | "ivec2" | "ivec3" | "ivec4" | "uvec2" | "uvec3" | "uvec4" | "mat2" | "mat3" | "mat4" | "mat2x2" | "mat2x3" | "mat2x4" | "mat3x2" | "mat3x3" | "mat3x4" | "mat4x2" | "mat4x3" | "mat4x4" | "dmat2" | "dmat3" | "dmat4" | "dmat2x2" | "dmat2x3" | "dmat2x4" | "dmat3x2" | "dmat3x3" | "dmat3x4" | "dmat4x2" | "dmat4x3" | "dmat4x4" | "atomic_uint" | "sampler2d" | "sampler3d" | "samplercube" | "sampler2dshadow" | "samplercubeshadow" | "sampler2darray" | "sampler2darrayshadow" | "samplercubearray" | "samplercubearrayshadow" | "isampler2d" | "isampler3d" | "isamplercube" | "isampler2darray" | "isamplercubearray" | "usampler2d" | "usampler3d" | "usamplercube" | "usampler2darray" | "usamplercubearray" | "sampler1d" | "sampler1dshadow" | "sampler1darray" | "sampler1darrayshadow" | "isampler1d" | "isampler1darray" | "usampler1d" | "usampler1darray" | "sampler2drect" | "sampler2drectshadow" | "isampler2drect" | "usampler2drect" | "samplerbuffer" | "isamplerbuffer" | "usamplerbuffer" | "sampler2dms" | "isampler2dms" | "usampler2dms" | "sampler2dmsarray" | "isampler2dmsarray" | "usampler2dmsarray" | "image2d" | "iimage2d" | "uimage2d" | "image3d" | "iimage3d" | "uimage3d" | "imagecube" | "iimagecube" | "uimagecube" | "imagebuffer" | "iimagebuffer" | "uimagebuffer" | "image1d" | "iimage1d" | "uimage1d" | "image1darray" | "iimage1darray" | "uimage1darray" | "image2drect" | "iimage2drect" | "uimage2drect" | "image2darray" | "iimage2darray" | "uimage2darray" | "imagecubearray" | "iimagecubearray" | "uimagecubearray" | "image2dms" | "iimage2dms" | "uimage2dms" | "image2dmsarray" | "iimage2dmsarray" | "uimage2dmsarray";
    export class $GlslTypeQualifier$Precision extends $Enum<$GlslTypeQualifier$Precision> implements $GlslTypeQualifier {
        static values(): $GlslTypeQualifier$Precision[];
        static valueOf(arg0: string): $GlslTypeQualifier$Precision;
        static LOW_PRECISION: $GlslTypeQualifier$Precision;
        static MEDIUM_PRECISION: $GlslTypeQualifier$Precision;
        static HIGH_PRECISION: $GlslTypeQualifier$Precision;
    }
    /**
     * Values that may be interpreted as {@link $GlslTypeQualifier$Precision}.
     */
    export type $GlslTypeQualifier$Precision_ = "high_precision" | "medium_precision" | "low_precision";
    export class $GlslSpecifiedType implements $GlslType {
        addLayoutId(arg0: string, arg1: $GlslNode): $GlslSpecifiedType;
        setSpecifier(arg0: $GlslTypeSpecifier_): $GlslSpecifiedType;
        setQualifiers(...arg0: $GlslTypeQualifier[]): $GlslSpecifiedType;
        setQualifiers(arg0: $Collection_<$GlslTypeQualifier>): $GlslSpecifiedType;
        asSpecifiedType(): $GlslSpecifiedType;
        getQualifiers(): $List<$GlslTypeQualifier>;
        copy(): $GlslSpecifiedType;
        getSpecifier(): $GlslTypeSpecifier;
        constructor(arg0: $GlslTypeSpecifier_);
        constructor(arg0: $GlslTypeSpecifier_, ...arg1: $GlslTypeQualifier[]);
        constructor(arg0: $GlslTypeSpecifier_, arg1: $Collection_<$GlslTypeQualifier>);
    }
    export class $GlslTypeQualifier {
        static layoutId(arg0: string, arg1: $GlslNode): $GlslTypeQualifier$LayoutId;
        static layout(arg0: $Collection_<$GlslTypeQualifier$LayoutId_>): $GlslTypeQualifier$Layout;
        static layout(...arg0: $GlslTypeQualifier$LayoutId_[]): $GlslTypeQualifier$Layout;
        static storage(...arg0: string[]): $GlslTypeQualifier;
    }
    export interface $GlslTypeQualifier {
    }
    export class $GlslTypeQualifier$LayoutId extends $Record {
        shared(): boolean;
        expression(): $GlslNode;
        identifier(): string;
        static SHARED: $GlslTypeQualifier$LayoutId;
        constructor(identifier: string, expression: $GlslNode);
    }
    /**
     * Values that may be interpreted as {@link $GlslTypeQualifier$LayoutId}.
     */
    export type $GlslTypeQualifier$LayoutId_ = { expression?: $GlslNode, identifier?: string,  } | [expression?: $GlslNode, identifier?: string, ];
    export class $GlslTypeSpecifier {
        static array(arg0: $GlslTypeSpecifier_, arg1: $GlslNode): $GlslTypeSpecifier;
        static named(arg0: string): $GlslTypeSpecifier;
        static struct(arg0: string, arg1: $Collection_<$GlslStructField>): $GlslStructSpecifier;
    }
    export interface $GlslTypeSpecifier extends $GlslType {
        isStruct(): boolean;
        asStructSpecifier(): $GlslStructSpecifier;
        asSpecifiedType(): $GlslSpecifiedType;
        getName(): string;
        isNamed(): boolean;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlslTypeSpecifier}.
     */
    export type $GlslTypeSpecifier_ = (() => string);
    export class $GlslStructSpecifier implements $GlslTypeSpecifier {
        isStruct(): boolean;
        getName(): string;
        getFields(): $List<$GlslStructField>;
        setName(arg0: string): $GlslStructSpecifier;
        copy(): $GlslStructSpecifier;
        setFields(arg0: $Collection_<$GlslStructField>): $GlslStructSpecifier;
        setFields(...arg0: $GlslStructField[]): $GlslStructSpecifier;
        asStructSpecifier(): $GlslStructSpecifier;
        asSpecifiedType(): $GlslSpecifiedType;
        isNamed(): boolean;
    }
    export class $GlslTypeQualifier$Layout extends $Record implements $GlslTypeQualifier {
        addLayoutIds(...arg0: $GlslTypeQualifier$LayoutId_[]): $GlslTypeQualifier;
        addLayoutIds(arg0: $Collection_<$GlslTypeQualifier$LayoutId_>): $GlslTypeQualifier;
        addLayoutId(arg0: string, arg1: $GlslNode): $GlslTypeQualifier;
        layoutIds(): $List<$GlslTypeQualifier$LayoutId>;
        constructor(layoutIds: $List_<$GlslTypeQualifier$LayoutId_>);
    }
    /**
     * Values that may be interpreted as {@link $GlslTypeQualifier$Layout}.
     */
    export type $GlslTypeQualifier$Layout_ = { layoutIds?: $List_<$GlslTypeQualifier$LayoutId_>,  } | [layoutIds?: $List_<$GlslTypeQualifier$LayoutId_>, ];
    export class $GlslFunctionHeader {
        setReturnType(arg0: $GlslType_): $GlslFunctionHeader;
        getName(): string;
        getReturnType(): $GlslSpecifiedType;
        setName(arg0: string): $GlslFunctionHeader;
        copy(): $GlslFunctionHeader;
        getParameters(): $List<$GlslParameterDeclaration>;
        setParameters(arg0: $Collection_<$GlslParameterDeclaration>): $GlslFunctionHeader;
        setParameters(...arg0: $GlslParameterDeclaration[]): $GlslFunctionHeader;
        constructor(arg0: string, arg1: $GlslType_, arg2: $Collection_<$GlslParameterDeclaration>);
    }
    export class $GlslType {
    }
    export interface $GlslType {
        asSpecifiedType(): $GlslSpecifiedType;
    }
    /**
     * Values that may be interpreted as {@link $GlslType}.
     */
    export type $GlslType_ = (() => $GlslSpecifiedType);
}
