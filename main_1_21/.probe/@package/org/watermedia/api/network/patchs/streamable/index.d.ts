
declare module "@package/org/watermedia/api/network/patchs/streamable" {
    export class $SAVideo {
        files: $SAFiles;
        message: string;
        percent: number;
        status: number;
        constructor();
    }
    export class $SAFile {
        duration: number;
        size: number;
        framerate: number;
        width: number;
        bitrate: number;
        url: string;
        status: number;
        height: number;
        constructor();
    }
    export class $SAFiles {
        mp4: $SAFile;
        mp4_mobile: $SAFile;
        constructor();
    }
}
