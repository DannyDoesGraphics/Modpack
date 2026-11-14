import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParsedGuidePage } from "@package/guideme/compiler";
import { $Record } from "@package/java/lang";
import { $Collection_, $List, $List_, $Map_ } from "@package/java/util";

declare module "@package/guideme/navigation" {
    export class $NavigationTree {
        getRootNodes(): $List<$NavigationNode>;
        getNodeById(arg0: $ResourceLocation_): $NavigationNode;
        static build(arg0: $Collection_<$ParsedGuidePage>): $NavigationTree;
        constructor();
        constructor(arg0: $Map_<$ResourceLocation_, $NavigationNode_>, arg1: $List_<$NavigationNode_>);
        get rootNodes(): $List<$NavigationNode>;
    }
    export class $NavigationNode extends $Record {
        hasPage(): boolean;
        pageId(): $ResourceLocation;
        position(): number;
        children(): $List<$NavigationNode>;
        icon(): $ItemStack;
        title(): string;
        constructor(pageId: $ResourceLocation_, title: string, icon: $ItemStack_, children: $List_<$NavigationNode_>, position: number, hasPage: boolean);
    }
    /**
     * Values that may be interpreted as {@link $NavigationNode}.
     */
    export type $NavigationNode_ = { title?: string, children?: $List_<$NavigationNode_>, position?: number, hasPage?: boolean, pageId?: $ResourceLocation_, icon?: $ItemStack_,  } | [title?: string, children?: $List_<$NavigationNode_>, position?: number, hasPage?: boolean, pageId?: $ResourceLocation_, icon?: $ItemStack_, ];
}
