
declare module "@package/net/caffeinemc/mods/sodium/client/render/viewport/frustum" {
    export class $Frustum {
    }
    export interface $Frustum {
        intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        testSectionExpanded(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testSection(arg0: number, arg1: number, arg2: number): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
}
