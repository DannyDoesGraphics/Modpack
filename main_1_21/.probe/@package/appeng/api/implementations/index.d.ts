export * as parts from "@package/appeng/api/implementations/parts";
export * as menuobjects from "@package/appeng/api/implementations/menuobjects";
export * as blockentities from "@package/appeng/api/implementations/blockentities";
export * as items from "@package/appeng/api/implementations/items";
export * as menus from "@package/appeng/api/implementations/menus";

declare module "@package/appeng/api/implementations" {
    export class $IPowerChannelState {
    }
    export interface $IPowerChannelState {
        isPowered(): boolean;
        isActive(): boolean;
        get powered(): boolean;
        get active(): boolean;
    }
}
