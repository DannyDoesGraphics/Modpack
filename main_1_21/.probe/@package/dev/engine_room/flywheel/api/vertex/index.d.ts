
declare module "@package/dev/engine_room/flywheel/api/vertex" {
    export class $VertexList {
    }
    export interface $VertexList {
        writeAll(dst: $MutableVertexList): void;
        isEmpty(): boolean;
        b(arg0: number): number;
        x(arg0: number): number;
        a(arg0: number): number;
        write(dst: $MutableVertexList, srcIndex: number, dstIndex: number): void;
        write(dst: $MutableVertexList, srcStartIndex: number, dstStartIndex: number, vertexCount: number): void;
        g(arg0: number): number;
        v(arg0: number): number;
        z(arg0: number): number;
        u(arg0: number): number;
        r(arg0: number): number;
        y(arg0: number): number;
        normalX(arg0: number): number;
        normalY(arg0: number): number;
        vertexCount(): number;
        overlay(arg0: number): number;
        normalZ(arg0: number): number;
        light(arg0: number): number;
        get empty(): boolean;
    }
    export class $MutableVertexList {
    }
    export interface $MutableVertexList extends $VertexList {
        b(arg0: number, arg1: number): void;
        x(arg0: number, arg1: number): void;
        a(arg0: number, arg1: number): void;
        g(arg0: number, arg1: number): void;
        v(arg0: number, arg1: number): void;
        z(arg0: number, arg1: number): void;
        u(arg0: number, arg1: number): void;
        r(arg0: number, arg1: number): void;
        y(arg0: number, arg1: number): void;
        normalX(arg0: number, arg1: number): void;
        normalY(arg0: number, arg1: number): void;
        overlay(arg0: number, arg1: number): void;
        normalZ(arg0: number, arg1: number): void;
        light(arg0: number, arg1: number): void;
    }
}
