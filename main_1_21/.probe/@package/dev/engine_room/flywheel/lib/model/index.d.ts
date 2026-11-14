import { $Mesh, $IndexSequence } from "@package/dev/engine_room/flywheel/api/model";
export * as baked from "@package/dev/engine_room/flywheel/lib/model/baked";

declare module "@package/dev/engine_room/flywheel/lib/model" {
    export class $QuadMesh {
    }
    export interface $QuadMesh extends $Mesh {
        indexSequence(): $IndexSequence;
        indexCount(): number;
    }
}
