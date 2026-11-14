
declare module "@package/org/watermedia/api/network/patchs/onedrive" {
    export class $OneDriveItem {
        getName(): string;
        getId(): string;
        getSize(): number;
        getUrl(): string;
        constructor();
        constructor(arg0: string, arg1: string, arg2: number, arg3: string);
        get name(): string;
        get id(): string;
        get size(): number;
        get url(): string;
    }
    export class $OneDriveUtil {
        static getDownloableItem(arg0: string): $OneDriveItem;
        constructor();
    }
}
