
declare module "@package/dev/ryanhcode/sable/mixin/sublevel_sounds" {
    export class $ChannelAccessor {
    }
    export interface $ChannelAccessor {
        getSource(): number;
        get source(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChannelAccessor}.
     */
    export type $ChannelAccessor_ = (() => number);
}
