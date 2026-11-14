import { $ModdedNetworkQueryComponent_ } from "@package/net/neoforged/neoforge/network/payload";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PayloadRegistration_ } from "@package/net/neoforged/neoforge/network/registration";
import { $PacketFlow, $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/network/negotiation" {
    export class $NetworkComponentNegotiator$ComponentNegotiationResult extends $Record {
        success(): boolean;
        failureReason(): $Component;
        constructor(success: boolean, failureReason: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $NetworkComponentNegotiator$ComponentNegotiationResult}.
     */
    export type $NetworkComponentNegotiator$ComponentNegotiationResult_ = { success?: boolean, failureReason?: $Component_,  } | [success?: boolean, failureReason?: $Component_, ];
    export class $NegotiableNetworkComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        optional(): boolean;
        flow(): ($PacketFlow) | undefined;
        constructor(id: $ResourceLocation_, version: string, flow: ($PacketFlow_) | undefined, optional: boolean);
        constructor(arg0: $ModdedNetworkQueryComponent_);
        constructor(arg0: $PayloadRegistration_<never>);
    }
    /**
     * Values that may be interpreted as {@link $NegotiableNetworkComponent}.
     */
    export type $NegotiableNetworkComponent_ = { version?: string, optional?: boolean, flow?: ($PacketFlow_) | undefined, id?: $ResourceLocation_,  } | [version?: string, optional?: boolean, flow?: ($PacketFlow_) | undefined, id?: $ResourceLocation_, ];
    export class $NegotiationResult extends $Record {
        failureReasons(): $Map<$ResourceLocation, $Component>;
        success(): boolean;
        components(): $List<$NegotiatedNetworkComponent>;
        constructor(components: $List_<$NegotiatedNetworkComponent_>, success: boolean, failureReasons: $Map_<$ResourceLocation_, $Component_>);
    }
    /**
     * Values that may be interpreted as {@link $NegotiationResult}.
     */
    export type $NegotiationResult_ = { success?: boolean, components?: $List_<$NegotiatedNetworkComponent_>, failureReasons?: $Map_<$ResourceLocation_, $Component_>,  } | [success?: boolean, components?: $List_<$NegotiatedNetworkComponent_>, failureReasons?: $Map_<$ResourceLocation_, $Component_>, ];
    /**
     * Negotiates the network components between the server and client.
     */
    export class $NetworkComponentNegotiator {
        /**
         * Checks if two components are compatible.
         * 
         * The following rules are followed:
         * 
         * - Check if packet flow directions are set, and if at least one is set match it to the other, by missing or wrong value fail the negotiation.
         * - Check if both sides have the same version, or none set.
         * 
         * If negotiation succeeds then an empty `Optional` is returned.
         * 
         * If negotiation fails then a `NegotiationResult` is returned with the reason for failure.
         */
        static validateComponent(left: $NegotiableNetworkComponent_, right: $NegotiableNetworkComponent_, requestingSide: string): ($NetworkComponentNegotiator$ComponentNegotiationResult) | undefined;
        /**
         * Negotiates the network components between the server and client.
         * 
         * The following rules are followed:
         * 
         * - Any component that is optional on the client but is not present on the server is removed from the client's list.
         * - Any component that is optional on the server but is not present on the client is removed from the server's list.
         * - If the client has none optional components that are not present on the server, then negotiation fails
         * - If the server has none optional components that are not present on the client, then negotiation fails
         * - For each of the matching channels the following is executed:
         * - Check if packet flow directions are set, and if at least one is set match it to the other, by missing or wrong value fail the negotiation.
         * - Check if both sides have the same version, or none set.
         * 
         * At this point the channels are considered compatible, pick the servers version. It does not matter what side is picked since either both have the same version, or no version at all.
         * 
         * If negotiation succeeds then a list of agreed upon channels and their versions is returned.
         * 
         * If negotiation fails then a `Component` is returned with the reason for failure.
         */
        static negotiate(server: $List_<$NegotiableNetworkComponent_>, client: $List_<$NegotiableNetworkComponent_>): $NegotiationResult;
        constructor();
    }
    export class $NegotiatedNetworkComponent extends $Record {
        version(): string;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, version: string);
    }
    /**
     * Values that may be interpreted as {@link $NegotiatedNetworkComponent}.
     */
    export type $NegotiatedNetworkComponent_ = { version?: string, id?: $ResourceLocation_,  } | [version?: string, id?: $ResourceLocation_, ];
}
