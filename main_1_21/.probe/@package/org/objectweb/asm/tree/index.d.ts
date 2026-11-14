import { $Consumer_ } from "@package/java/util/function";
import { $ClassVisitor, $FieldVisitor, $Label, $MethodVisitor, $AnnotationVisitor, $ModuleVisitor, $Attribute, $RecordComponentVisitor, $TypePath } from "@package/org/objectweb/asm";
import { $Object, $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $Map_, $ListIterator, $List_ } from "@package/java/util";

declare module "@package/org/objectweb/asm/tree" {
    export class $FieldNode extends $FieldVisitor {
        accept(arg0: $ClassVisitor): void;
        check(arg0: number): void;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        access: number;
        signature: string;
        invisibleAnnotations: $List<$AnnotationNode>;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        name: string;
        visibleAnnotations: $List<$AnnotationNode>;
        value: $Object;
        desc: string;
        attrs: $List<$Attribute>;
        constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: $Object);
        constructor(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: $Object);
    }
    export class $RecordComponentNode extends $RecordComponentVisitor {
        accept(arg0: $ClassVisitor): void;
        check(arg0: number): void;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        signature: string;
        invisibleAnnotations: $List<$AnnotationNode>;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        name: string;
        visibleAnnotations: $List<$AnnotationNode>;
        descriptor: string;
        attrs: $List<$Attribute>;
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
    }
    export class $ModuleProvideNode {
        accept(arg0: $ModuleVisitor): void;
        service: string;
        providers: $List<string>;
        constructor(arg0: string, arg1: $List_<string>);
    }
    export class $LocalVariableAnnotationNode extends $TypeAnnotationNode {
        accept(arg0: $MethodVisitor, arg1: boolean): void;
        typePath: $TypePath;
        values: $List<$Object>;
        start: $List<$LabelNode>;
        index: $List<number>;
        end: $List<$LabelNode>;
        typeRef: number;
        desc: string;
        constructor(arg0: number, arg1: $TypePath, arg2: $LabelNode[], arg3: $LabelNode[], arg4: number[], arg5: string);
        constructor(arg0: number, arg1: number, arg2: $TypePath, arg3: $LabelNode[], arg4: $LabelNode[], arg5: number[], arg6: string);
    }
    export class $ModuleExportNode {
        accept(arg0: $ModuleVisitor): void;
        access: number;
        packaze: string;
        modules: $List<string>;
        constructor(arg0: string, arg1: number, arg2: $List_<string>);
    }
    export class $ModuleNode extends $ModuleVisitor {
        accept(arg0: $ClassVisitor): void;
        access: number;
        mainClass: string;
        exports: $List<$ModuleExportNode>;
        provides: $List<$ModuleProvideNode>;
        name: string;
        opens: $List<$ModuleOpenNode>;
        uses: $List<string>;
        packages: $List<string>;
        version: string;
        requires: $List<$ModuleRequireNode>;
        constructor(arg0: string, arg1: number, arg2: string);
        constructor(arg0: number, arg1: string, arg2: number, arg3: string, arg4: $List_<$ModuleRequireNode>, arg5: $List_<$ModuleExportNode>, arg6: $List_<$ModuleOpenNode>, arg7: $List_<string>, arg8: $List_<$ModuleProvideNode>);
    }
    export class $InnerClassNode {
        accept(arg0: $ClassVisitor): void;
        access: number;
        innerName: string;
        name: string;
        outerName: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: number);
    }
    export class $LabelNode extends $AbstractInsnNode {
        getLabel(): $Label;
        resetLabel(): void;
        static INT_INSN: number;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        static INSN: number;
        static LDC_INSN: number;
        static FIELD_INSN: number;
        static FRAME: number;
        static TYPE_INSN: number;
        static METHOD_INSN: number;
        static LOOKUPSWITCH_INSN: number;
        static INVOKE_DYNAMIC_INSN: number;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        static LINE: number;
        static TABLESWITCH_INSN: number;
        static LABEL: number;
        static IINC_INSN: number;
        static MULTIANEWARRAY_INSN: number;
        static VAR_INSN: number;
        static JUMP_INSN: number;
        constructor();
        constructor(arg0: $Label);
        get label(): $Label;
    }
    export class $MethodNode extends $MethodVisitor {
        accept(arg0: $ClassVisitor): void;
        accept(arg0: $MethodVisitor): void;
        check(arg0: number): void;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        invisibleAnnotableParameterCount: number;
        instructions: $InsnList;
        access: number;
        tryCatchBlocks: $List<$TryCatchBlockNode>;
        signature: string;
        visibleLocalVariableAnnotations: $List<$LocalVariableAnnotationNode>;
        invisibleLocalVariableAnnotations: $List<$LocalVariableAnnotationNode>;
        maxStack: number;
        exceptions: $List<string>;
        attrs: $List<$Attribute>;
        visibleParameterAnnotations: $List<$AnnotationNode>[];
        maxLocals: number;
        localVariables: $List<$LocalVariableNode>;
        invisibleAnnotations: $List<$AnnotationNode>;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        annotationDefault: $Object;
        name: string;
        visibleAnnotations: $List<$AnnotationNode>;
        invisibleParameterAnnotations: $List<$AnnotationNode>[];
        parameters: $List<$ParameterNode>;
        visibleAnnotableParameterCount: number;
        desc: string;
        constructor();
        constructor(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]);
        constructor(arg0: number);
        constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]);
    }
    export class $TryCatchBlockNode {
        accept(arg0: $MethodVisitor): void;
        updateIndex(arg0: number): void;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        handler: $LabelNode;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        start: $LabelNode;
        end: $LabelNode;
        type: string;
        constructor(arg0: $LabelNode, arg1: $LabelNode, arg2: $LabelNode, arg3: string);
    }
    export class $InsnList implements $Iterable<$AbstractInsnNode> {
        insertBefore(arg0: $AbstractInsnNode, arg1: $AbstractInsnNode): void;
        insertBefore(arg0: $AbstractInsnNode, arg1: $InsnList): void;
        remove(arg0: $AbstractInsnNode): void;
        size(): number;
        get(arg0: number): $AbstractInsnNode;
        indexOf(arg0: $AbstractInsnNode): number;
        insert(arg0: $AbstractInsnNode): void;
        insert(arg0: $AbstractInsnNode, arg1: $AbstractInsnNode): void;
        insert(arg0: $AbstractInsnNode, arg1: $InsnList): void;
        insert(arg0: $InsnList): void;
        clear(): void;
        add(arg0: $InsnList): void;
        add(arg0: $AbstractInsnNode): void;
        toArray(): $AbstractInsnNode[];
        iterator(arg0: number): $ListIterator<$AbstractInsnNode>;
        contains(arg0: $AbstractInsnNode): boolean;
        set(arg0: $AbstractInsnNode, arg1: $AbstractInsnNode): void;
        accept(arg0: $MethodVisitor): void;
        getFirst(): $AbstractInsnNode;
        getLast(): $AbstractInsnNode;
        resetLabels(): void;
        spliterator(): $Spliterator<$AbstractInsnNode>;
        forEach(arg0: $Consumer_<$AbstractInsnNode>): void;
        iterator(): $Iterator<$AbstractInsnNode>;
        constructor();
        [Symbol.iterator](): Iterator<$AbstractInsnNode>
        get first(): $AbstractInsnNode;
        get last(): $AbstractInsnNode;
    }
    export class $ModuleRequireNode {
        accept(arg0: $ModuleVisitor): void;
        access: number;
        module: string;
        version: string;
        constructor(arg0: string, arg1: number, arg2: string);
    }
    export class $AnnotationNode extends $AnnotationVisitor {
        accept(arg0: $AnnotationVisitor): void;
        check(arg0: number): void;
        values: $List<$Object>;
        desc: string;
        constructor(arg0: number, arg1: string);
        constructor(arg0: string);
    }
    export class $LocalVariableNode {
        accept(arg0: $MethodVisitor): void;
        signature: string;
        name: string;
        start: $LabelNode;
        index: number;
        end: $LabelNode;
        desc: string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $LabelNode, arg4: $LabelNode, arg5: number);
    }
    export class $TypeAnnotationNode extends $AnnotationNode {
        typePath: $TypePath;
        values: $List<$Object>;
        typeRef: number;
        desc: string;
        constructor(arg0: number, arg1: $TypePath, arg2: string);
        constructor(arg0: number, arg1: number, arg2: $TypePath, arg3: string);
    }
    export class $ParameterNode {
        accept(arg0: $MethodVisitor): void;
        access: number;
        name: string;
        constructor(arg0: string, arg1: number);
    }
    export class $ClassNode extends $ClassVisitor {
        accept(arg0: $ClassVisitor): void;
        check(arg0: number): void;
        superName: string;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        interfaces: $List<string>;
        access: number;
        signature: string;
        methods: $List<$MethodNode>;
        module: $ModuleNode;
        sourceDebug: string;
        version: number;
        sourceFile: string;
        nestMembers: $List<string>;
        attrs: $List<$Attribute>;
        nestHostClass: string;
        outerMethodDesc: string;
        permittedSubclasses: $List<string>;
        recordComponents: $List<$RecordComponentNode>;
        invisibleAnnotations: $List<$AnnotationNode>;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        name: string;
        outerMethod: string;
        visibleAnnotations: $List<$AnnotationNode>;
        outerClass: string;
        fields: $List<$FieldNode>;
        innerClasses: $List<$InnerClassNode>;
        constructor();
        constructor(arg0: number);
    }
    export class $AbstractInsnNode {
        getNext(): $AbstractInsnNode;
        clone(arg0: $Map_<$LabelNode, $LabelNode>): $AbstractInsnNode;
        accept(arg0: $MethodVisitor): void;
        getType(): number;
        getOpcode(): number;
        getPrevious(): $AbstractInsnNode;
        static INT_INSN: number;
        visibleTypeAnnotations: $List<$TypeAnnotationNode>;
        static INSN: number;
        static LDC_INSN: number;
        static FIELD_INSN: number;
        static FRAME: number;
        static TYPE_INSN: number;
        static METHOD_INSN: number;
        static LOOKUPSWITCH_INSN: number;
        static INVOKE_DYNAMIC_INSN: number;
        invisibleTypeAnnotations: $List<$TypeAnnotationNode>;
        static LINE: number;
        static TABLESWITCH_INSN: number;
        static LABEL: number;
        static IINC_INSN: number;
        static MULTIANEWARRAY_INSN: number;
        static VAR_INSN: number;
        static JUMP_INSN: number;
        get next(): $AbstractInsnNode;
        get type(): number;
        get opcode(): number;
        get previous(): $AbstractInsnNode;
    }
    export class $ModuleOpenNode {
        accept(arg0: $ModuleVisitor): void;
        access: number;
        packaze: string;
        modules: $List<string>;
        constructor(arg0: string, arg1: number, arg2: $List_<string>);
    }
}
