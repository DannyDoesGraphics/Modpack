import { $Record } from "@package/java/lang";

declare module "@package/mezz/jei/api/ingredients/rendering" {
    export class $BatchRenderElement<T> extends $Record {
        ingredient(): T;
        x(): number;
        y(): number;
        constructor(ingredient: T, x: number, y: number);
    }
    /**
     * Values that may be interpreted as {@link $BatchRenderElement}.
     */
    export type $BatchRenderElement_<T> = { ingredient?: any, x?: number, y?: number,  } | [ingredient?: any, x?: number, y?: number, ];
}
