import { $Direction_ } from "@package/net/minecraft/core";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $Set_, $List, $List_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/model/geom/builders" {
    export class $CubeDefinition {
        bake(texWidth: number, texHeight: number): $ModelPart$Cube;
    }
    export class $CubeDeformation {
        extend(grow: number): $CubeDeformation;
        extend(growX: number, growY: number, growZ: number): $CubeDeformation;
        static NONE: $CubeDeformation;
        constructor(growX: number, growY: number, growZ: number);
        constructor(grow: number);
    }
    export class $PartDefinition {
        addOrReplaceChild(name: string, cubes: $CubeListBuilder, partPose: $PartPose): $PartDefinition;
        getChild(name: string): $PartDefinition;
        bake(texWidth: number, texHeight: number): $ModelPart;
        partPose: $PartPose;
        children: $Map<string, $PartDefinition>;
        cubes: $List<$CubeDefinition>;
        constructor(cubes: $List_<$CubeDefinition>, partPose: $PartPose);
    }
    export class $LayerDefinition {
        bakeRoot(): $ModelPart;
        static create(mesh: $MeshDefinition, texWidth: number, texHeight: number): $LayerDefinition;
        material: $MaterialDefinition;
        mesh: $MeshDefinition;
        constructor(mesh: $MeshDefinition, material: $MaterialDefinition);
    }
    export class $CubeListBuilder {
        getCubes(): $List<$CubeDefinition>;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation, texScaleU: number, texScaleV: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, visibleFaces: $Set_<$Direction_>): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, mirror: boolean): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation, xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        texOffs(xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        static create(): $CubeListBuilder;
        mirror(mirror: boolean): $CubeListBuilder;
        mirror(): $CubeListBuilder;
        constructor();
        get cubes(): $List<$CubeDefinition>;
    }
    export class $MaterialDefinition {
        constructor(xTexSize: number, yTexSize: number);
    }
    export class $MeshDefinition {
        getRoot(): $PartDefinition;
        constructor();
        get root(): $PartDefinition;
    }
    export class $UVPair {
        v(): number;
        u(): number;
        constructor(u: number, v: number);
    }
}
