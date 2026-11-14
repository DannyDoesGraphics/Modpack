import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $Quaterniond, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create/schematics" {
    export class $SchematicLevelExtension$SchematicSubLevel extends $Record {
        position(): $Vector3d;
        level(): $SchematicLevel;
        uuid(): $UUID;
        orientation(): $Quaterniond;
        constructor(uuid: $UUID_, position: $Vector3d, orientation: $Quaterniond, level: $SchematicLevel);
    }
    /**
     * Values that may be interpreted as {@link $SchematicLevelExtension$SchematicSubLevel}.
     */
    export type $SchematicLevelExtension$SchematicSubLevel_ = { position?: $Vector3d, orientation?: $Quaterniond, level?: $SchematicLevel, uuid?: $UUID_,  } | [position?: $Vector3d, orientation?: $Quaterniond, level?: $SchematicLevel, uuid?: $UUID_, ];
    export class $SchematicPrinterExtension {
    }
    export interface $SchematicPrinterExtension {
        sable$getSchematicLevel(): $SchematicLevel;
    }
    /**
     * Values that may be interpreted as {@link $SchematicPrinterExtension}.
     */
    export type $SchematicPrinterExtension_ = (() => $SchematicLevel);
    export class $StructureTemplateExtension {
    }
    export interface $StructureTemplateExtension {
        sable$getSubLevels(): $List<$StructureTemplateExtension$SubLevelTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateExtension}.
     */
    export type $StructureTemplateExtension_ = (() => $List_<$StructureTemplateExtension$SubLevelTemplate_>);
    export class $SchematicLevelExtension {
    }
    export interface $SchematicLevelExtension {
        sable$getSubLevels(): $List<$SchematicLevelExtension$SchematicSubLevel>;
    }
    /**
     * Values that may be interpreted as {@link $SchematicLevelExtension}.
     */
    export type $SchematicLevelExtension_ = (() => $List_<$SchematicLevelExtension$SchematicSubLevel_>);
    export class $StructureTemplateExtension$SubLevelTemplate extends $Record {
        position(): $Vector3d;
        uuid(): $UUID;
        template(): $StructureTemplate;
        orientation(): $Quaterniond;
        constructor(uuid: $UUID_, position: $Vector3d, orientation: $Quaterniond, template: $StructureTemplate);
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplateExtension$SubLevelTemplate}.
     */
    export type $StructureTemplateExtension$SubLevelTemplate_ = { template?: $StructureTemplate, position?: $Vector3d, orientation?: $Quaterniond, uuid?: $UUID_,  } | [template?: $StructureTemplate, position?: $Vector3d, orientation?: $Quaterniond, uuid?: $UUID_, ];
}
