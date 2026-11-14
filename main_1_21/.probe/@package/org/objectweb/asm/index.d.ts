import { $InputStream } from "@package/java/io";
import { $Constructor, $Method } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";
export * as tree from "@package/org/objectweb/asm/tree";

declare module "@package/org/objectweb/asm" {
    export class $ModuleVisitor {
        visitEnd(): void;
        getDelegate(): $ModuleVisitor;
        visitMainClass(arg0: string): void;
        visitPackage(arg0: string): void;
        visitRequire(arg0: string, arg1: number, arg2: string): void;
        visitExport(arg0: string, arg1: number, ...arg2: string[]): void;
        visitOpen(arg0: string, arg1: number, ...arg2: string[]): void;
        visitUse(arg0: string): void;
        visitProvide(arg0: string, ...arg1: string[]): void;
        get delegate(): $ModuleVisitor;
    }
    export class $Handle {
        getName(): string;
        isInterface(): boolean;
        getOwner(): string;
        getTag(): number;
        getDesc(): string;
        /**
         * @deprecated
         */
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
        constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean);
        get name(): string;
        get interface(): boolean;
        get owner(): string;
        get tag(): number;
        get desc(): string;
    }
    export class $FieldVisitor {
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitEnd(): void;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitAttribute(arg0: $Attribute): void;
        getDelegate(): $FieldVisitor;
        get delegate(): $FieldVisitor;
    }
    export class $TypePath {
        getStep(arg0: number): number;
        getStepArgument(arg0: number): number;
        getLength(): number;
        static fromString(arg0: string): $TypePath;
        static WILDCARD_BOUND: number;
        static INNER_TYPE: number;
        static TYPE_ARGUMENT: number;
        static ARRAY_ELEMENT: number;
        get length(): number;
    }
    export class $ClassVisitor {
        visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
        visitSource(arg0: string, arg1: string): void;
        visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: $Object): $FieldVisitor;
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitEnd(): void;
        visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): $MethodVisitor;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitAttribute(arg0: $Attribute): void;
        visitModule(arg0: string, arg1: number, arg2: string): $ModuleVisitor;
        visitNestHost(arg0: string): void;
        visitOuterClass(arg0: string, arg1: string, arg2: string): void;
        visitNestMember(arg0: string): void;
        visitPermittedSubclass(arg0: string): void;
        visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
        visitRecordComponent(arg0: string, arg1: string, arg2: string): $RecordComponentVisitor;
        getDelegate(): $ClassVisitor;
        get delegate(): $ClassVisitor;
    }
    export class $AnnotationVisitor {
        visit(arg0: string, arg1: $Object): void;
        visitAnnotation(arg0: string, arg1: string): $AnnotationVisitor;
        visitEnd(): void;
        visitEnum(arg0: string, arg1: string, arg2: string): void;
        visitArray(arg0: string): $AnnotationVisitor;
        getDelegate(): $AnnotationVisitor;
        get delegate(): $AnnotationVisitor;
    }
    export class $ClassWriter extends $ClassVisitor {
        newModule(arg0: string): number;
        toByteArray(): number[];
        /**
         * @deprecated
         */
        newHandle(arg0: number, arg1: string, arg2: string, arg3: string): number;
        newHandle(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): number;
        hasFlags(arg0: number): boolean;
        newConst(arg0: $Object): number;
        newUTF8(arg0: string): number;
        newClass(arg0: string): number;
        newMethodType(arg0: string): number;
        newPackage(arg0: string): number;
        newConstantDynamic(arg0: string, arg1: string, arg2: $Handle, ...arg3: $Object[]): number;
        newInvokeDynamic(arg0: string, arg1: string, arg2: $Handle, ...arg3: $Object[]): number;
        newField(arg0: string, arg1: string, arg2: string): number;
        newMethod(arg0: string, arg1: string, arg2: string, arg3: boolean): number;
        newNameType(arg0: string, arg1: string): number;
        setFlags(arg0: number): void;
        static COMPUTE_MAXS: number;
        static COMPUTE_FRAMES: number;
        constructor(arg0: number);
        constructor(arg0: $ClassReader, arg1: number);
        set flags(value: number);
    }
    export class $RecordComponentVisitor {
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitEnd(): void;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitAttribute(arg0: $Attribute): void;
        getDelegate(): $RecordComponentVisitor;
        get delegate(): $RecordComponentVisitor;
    }
    export class $Attribute {
        static write(arg0: $Attribute, arg1: $ClassWriter, arg2: number[], arg3: number, arg4: number, arg5: number): number[];
        static read(arg0: $Attribute, arg1: $ClassReader, arg2: number, arg3: number, arg4: string[], arg5: number, arg6: $Label[]): $Attribute;
        isUnknown(): boolean;
        isCodeAttribute(): boolean;
        static readLabel(arg0: $ClassReader, arg1: number, arg2: $Label[]): $Label;
        type: string;
        get unknown(): boolean;
        get codeAttribute(): boolean;
    }
    export class $MethodVisitor {
        visitFrame(arg0: number, arg1: number, arg2: $Object[], arg3: number, arg4: $Object[]): void;
        visitAnnotation(arg0: string, arg1: boolean): $AnnotationVisitor;
        visitEnd(): void;
        visitCode(): void;
        visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
        visitInsn(arg0: number): void;
        visitMaxs(arg0: number, arg1: number): void;
        visitVarInsn(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
        visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
        visitTypeInsn(arg0: number, arg1: string): void;
        visitIntInsn(arg0: number, arg1: number): void;
        visitLdcInsn(arg0: $Object): void;
        visitParameter(arg0: string, arg1: number): void;
        visitAnnotationDefault(): $AnnotationVisitor;
        visitTypeAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitAnnotableParameterCount(arg0: number, arg1: boolean): void;
        visitParameterAnnotation(arg0: number, arg1: string, arg2: boolean): $AnnotationVisitor;
        visitAttribute(arg0: $Attribute): void;
        visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: $Handle, ...arg3: $Object[]): void;
        visitJumpInsn(arg0: number, arg1: $Label): void;
        visitLabel(arg0: $Label): void;
        visitIincInsn(arg0: number, arg1: number): void;
        visitTableSwitchInsn(arg0: number, arg1: number, arg2: $Label, ...arg3: $Label[]): void;
        visitLookupSwitchInsn(arg0: $Label, arg1: number[], arg2: $Label[]): void;
        visitMultiANewArrayInsn(arg0: string, arg1: number): void;
        visitInsnAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitTryCatchBlock(arg0: $Label, arg1: $Label, arg2: $Label, arg3: string): void;
        visitTryCatchAnnotation(arg0: number, arg1: $TypePath, arg2: string, arg3: boolean): $AnnotationVisitor;
        visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: $Label, arg4: $Label, arg5: number): void;
        visitLocalVariableAnnotation(arg0: number, arg1: $TypePath, arg2: $Label[], arg3: $Label[], arg4: number[], arg5: string, arg6: boolean): $AnnotationVisitor;
        visitLineNumber(arg0: number, arg1: $Label): void;
        getDelegate(): $MethodVisitor;
        get delegate(): $MethodVisitor;
    }
    export class $Type {
        static getDescriptor(arg0: $Class<never>): string;
        getDescriptor(): string;
        static getReturnType(arg0: string): $Type;
        static getReturnType(arg0: $Method): $Type;
        getReturnType(): $Type;
        static getType(arg0: string): $Type;
        static getType(arg0: $Class<never>): $Type;
        static getType(arg0: $Method): $Type;
        static getType(arg0: $Constructor<never>): $Type;
        getSize(): number;
        static getMethodType(arg0: string): $Type;
        static getMethodType(arg0: $Type, ...arg1: $Type[]): $Type;
        static getMethodDescriptor(arg0: $Type, ...arg1: $Type[]): string;
        static getMethodDescriptor(arg0: $Method): string;
        getClassName(): string;
        static getInternalName(arg0: $Class<never>): string;
        getInternalName(): string;
        getSort(): number;
        static getObjectType(arg0: string): $Type;
        getArgumentTypes(): $Type[];
        static getArgumentTypes(arg0: $Method): $Type[];
        static getArgumentTypes(arg0: string): $Type[];
        static getArgumentsAndReturnSizes(arg0: string): number;
        getArgumentsAndReturnSizes(): number;
        static getConstructorDescriptor(arg0: $Constructor<never>): string;
        getDimensions(): number;
        getElementType(): $Type;
        getOpcode(arg0: number): number;
        static getArgumentCount(arg0: string): number;
        getArgumentCount(): number;
        static CHAR_TYPE: $Type;
        static FLOAT: number;
        static DOUBLE_TYPE: $Type;
        static ARRAY: number;
        static LONG_TYPE: $Type;
        static BYTE_TYPE: $Type;
        static CHAR: number;
        static VOID_TYPE: $Type;
        static OBJECT: number;
        static BOOLEAN_TYPE: $Type;
        static FLOAT_TYPE: $Type;
        static BOOLEAN: number;
        static INT: number;
        static SHORT: number;
        static BYTE: number;
        static METHOD: number;
        static SHORT_TYPE: $Type;
        static DOUBLE: number;
        static VOID: number;
        static LONG: number;
        static INT_TYPE: $Type;
        get size(): number;
        get className(): string;
        get sort(): number;
        get dimensions(): number;
        get elementType(): $Type;
    }
    export class $ClassReader {
        getInterfaces(): string[];
        accept(arg0: $ClassVisitor, arg1: $Attribute[], arg2: number): void;
        accept(arg0: $ClassVisitor, arg1: number): void;
        readInt(arg0: number): number;
        getClassName(): string;
        readBytes(arg0: number, arg1: number): number[];
        readByte(arg0: number): number;
        readShort(arg0: number): number;
        readUnsignedShort(arg0: number): number;
        readLong(arg0: number): number;
        getMaxStringLength(): number;
        readConst(arg0: number, arg1: string[]): $Object;
        readModule(arg0: number, arg1: string[]): string;
        getItem(arg0: number): number;
        getItemCount(): number;
        readClass(arg0: number, arg1: string[]): string;
        readUTF8(arg0: number, arg1: string[]): string;
        getAccess(): number;
        getSuperName(): string;
        readPackage(arg0: number, arg1: string[]): string;
        static SKIP_CODE: number;
        /**
         * @deprecated
         */
        b: number[];
        static EXPAND_FRAMES: number;
        static SKIP_FRAMES: number;
        header: number;
        static SKIP_DEBUG: number;
        constructor(arg0: $InputStream);
        constructor(arg0: string);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[]);
        get interfaces(): string[];
        get className(): string;
        get maxStringLength(): number;
        get itemCount(): number;
        get access(): number;
        get superName(): string;
    }
    export class $Label {
        getOffset(): number;
        info: $Object;
        constructor();
        get offset(): number;
    }
}
