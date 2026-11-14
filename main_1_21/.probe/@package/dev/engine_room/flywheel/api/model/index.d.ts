import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Material } from "@package/dev/engine_room/flywheel/api/material";
import { $MutableVertexList } from "@package/dev/engine_room/flywheel/api/vertex";
import { $Vector4fc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/api/model" {
    export class $Model$ConfiguredMesh extends $Record {
        material(): $Material;
        mesh(): $Mesh;
        constructor(material: $Material, mesh: $Mesh);
    }
    /**
     * Values that may be interpreted as {@link $Model$ConfiguredMesh}.
     */
    export type $Model$ConfiguredMesh_ = { material?: $Material, mesh?: $Mesh,  } | [material?: $Material, mesh?: $Mesh, ];
    export class $IndexSequence {
    }
    export interface $IndexSequence {
        fill(arg0: number, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IndexSequence}.
     */
    export type $IndexSequence_ = ((arg0: number, arg1: number) => void);
    export class $Mesh {
    }
    export interface $Mesh {
        boundingSphere(): $Vector4fc;
        indexSequence(): $IndexSequence;
        write(arg0: $MutableVertexList): void;
        vertexCount(): number;
        indexCount(): number;
    }
    export class $Model {
    }
    export interface $Model {
        boundingSphere(): $Vector4fc;
        meshes(): $List<$Model$ConfiguredMesh>;
    }
}
