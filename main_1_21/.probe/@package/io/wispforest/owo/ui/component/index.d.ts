import { $BaseComponent } from "@package/io/wispforest/owo/ui/base";

declare module "@package/io/wispforest/owo/ui/component" {
    export class $VanillaWidgetComponent extends $BaseComponent {
        notifyParentIfMounted(): void;
        hovered(): boolean;
    }
}
