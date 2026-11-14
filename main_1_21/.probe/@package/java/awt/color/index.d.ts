import { $Serializable } from "@package/java/io";

declare module "@package/java/awt/color" {
    export class $ColorSpace implements $Serializable {
        toRGB(arg0: number[]): number[];
        toCIEXYZ(arg0: number[]): number[];
        fromCIEXYZ(arg0: number[]): number[];
        getMinValue(arg0: number): number;
        getMaxValue(arg0: number): number;
        fromRGB(arg0: number[]): number[];
        isCS_sRGB(): boolean;
        getName(arg0: number): string;
        static getInstance(arg0: number): $ColorSpace;
        getType(): number;
        getNumComponents(): number;
        static TYPE_ECLR: number;
        static TYPE_Lab: number;
        static TYPE_Luv: number;
        static TYPE_RGB: number;
        static TYPE_GRAY: number;
        static TYPE_CMY: number;
        static TYPE_CCLR: number;
        static TYPE_ACLR: number;
        static TYPE_HSV: number;
        static TYPE_YCbCr: number;
        static TYPE_7CLR: number;
        static CS_LINEAR_RGB: number;
        static TYPE_9CLR: number;
        static TYPE_5CLR: number;
        static CS_sRGB: number;
        static TYPE_3CLR: number;
        static CS_PYCC: number;
        static TYPE_XYZ: number;
        static TYPE_FCLR: number;
        static TYPE_DCLR: number;
        static TYPE_HLS: number;
        static TYPE_CMYK: number;
        static TYPE_BCLR: number;
        static CS_GRAY: number;
        static TYPE_8CLR: number;
        static TYPE_6CLR: number;
        static TYPE_4CLR: number;
        static TYPE_Yxy: number;
        static TYPE_2CLR: number;
        static CS_CIEXYZ: number;
        get type(): number;
        get numComponents(): number;
    }
}
