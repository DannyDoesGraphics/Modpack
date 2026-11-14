import { $Function_, $Function } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record, $Class } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/permission/nodes" {
    export class $PermissionDynamicContextKey<T> extends $Record {
        name(): string;
        typeToken(): $Class<T>;
        serializer(): $Function<T, string>;
        createContext(arg0: T): $PermissionDynamicContext<T>;
        constructor(typeToken: $Class<T>, name: string, serializer: $Function_<T, string>);
    }
    /**
     * Values that may be interpreted as {@link $PermissionDynamicContextKey}.
     */
    export type $PermissionDynamicContextKey_<T> = { typeToken?: $Class<any>, serializer?: $Function_<any, string>, name?: string,  } | [typeToken?: $Class<any>, serializer?: $Function_<any, string>, name?: string, ];
    /**
     * Represents the basic unit at the heart of the permission system.
     * 
     * A permission indicates the ability for an actor to perform an action,
     * in its most general sense. In the permission system, all permissions are encoded as instances of this class,
     * optionally integrated by a `PermissionDynamicContext`.
     * 
     * A node is uniquely identified by its `nodeName`,
     * which is a dot-separated string providing meaning to the node itself.
     * The suggested structure of the name is `modid.name`, where `modid` is the ID of the owner of the node.
     * This API **does not require** any implicit hierarchy,
     * so `modid.name` is not considered a parent of `modid.name.sub`. Such decisions are left to the `IPermissionHandler`.
     * 
     * Each node also has an associated `PermissionType`, detailing its exact type,
     * along with a `PermissionResolver` that is used to obtain the default value of the permission.
     * More information can be found on their documentation.
     * 
     * A node can also be bound to additional `PermissionDynamicContextKey`s,
     * which are used when querying the availability of the permission.
     * There are no restrictions on their amount. It is also not mandatory to provide a value for all dynamics in a permission query.
     * See the above link for more information.
     * 
     * Each node should be registered via the `Nodes` and stored statically in a field.
     * That instance should then be reused every-time a permission check needs to be performed via `PermissionAPI#getPermission(ServerPlayer, PermissionNode, PermissionDynamicContext[])`.
     */
    export class $PermissionNode<T> {
        /**
         * Allows you to set a human-readable name and description for your Permission.
         * 
         * Note: Even though not used by Default, PermissionHandlers may display this information in game,
         * or provide it to the user by other means.
         * 
         * You may use translatable components, but you'll
         * need 2 language files. One inside the data directory for the server and one inside assets for the client.
         */
        setInformation(readableName: $Component_, description: $Component_): $PermissionNode<any>;
        getDynamics(): $PermissionDynamicContextKey<never>[];
        getDefaultResolver(): $PermissionNode$PermissionResolver<T>;
        getNodeName(): string;
        getDescription(): $Component;
        getType(): $PermissionType<T>;
        getReadableName(): $Component;
        constructor(arg0: $ResourceLocation_, arg1: $PermissionType<T>, arg2: $PermissionNode$PermissionResolver_<T>, ...arg3: $PermissionDynamicContextKey_<any>[]);
        constructor(arg0: string, arg1: string, arg2: $PermissionType<T>, arg3: $PermissionNode$PermissionResolver_<T>, ...arg4: $PermissionDynamicContextKey_<any>[]);
        get dynamics(): $PermissionDynamicContextKey<never>[];
        get defaultResolver(): $PermissionNode$PermissionResolver<T>;
        get nodeName(): string;
        get description(): $Component;
        get type(): $PermissionType<T>;
        get readableName(): $Component;
    }
    /**
     * Default PermissionTypes, if you need additional ones, please PR it.
     */
    export class $PermissionTypes {
        static getTypeByName(name: string): $PermissionType<never>;
        static STRING: $PermissionType<string>;
        static COMPONENT: $PermissionType<$Component>;
        static BOOLEAN: $PermissionType<boolean>;
        static INTEGER: $PermissionType<number>;
    }
    /**
     * Type of a Permission, use the existing Types in `PermissionTypes`
     */
    export class $PermissionType<T> {
        typeName(): string;
        typeToken(): $Class<T>;
    }
    /**
     * Utility Interface used for resolving the default value of PermissionNodes
     */
    export class $PermissionNode$PermissionResolver<T> {
    }
    export interface $PermissionNode$PermissionResolver<T> {
        resolve(arg0: $ServerPlayer, arg1: $UUID_, ...arg2: $PermissionDynamicContext<never>[]): T;
    }
    /**
     * Values that may be interpreted as {@link $PermissionNode$PermissionResolver}.
     */
    export type $PermissionNode$PermissionResolver_<T> = ((arg0: $ServerPlayer, arg1: $UUID, arg2: $PermissionDynamicContext<never>[]) => T);
    /**
     * Pair of a PermissionDynamicContextKey and a value of the corresponding type.
     * Use `PermissionDynamicContextKey#createContext(Object)` )} for constructing.
     * 
     * Note: While the DynamicContext behaves similar to BlockStates, it does not oblige to the same limitations.
     * There is no string representation that you have to follow, nor is there a limit on how many unique value a DynamicContext may have
     */
    export class $PermissionDynamicContext<T> {
        getDynamic(): $PermissionDynamicContextKey<T>;
        getSerializedValue(): string;
        getValue(): T;
        get dynamic(): $PermissionDynamicContextKey<T>;
        get serializedValue(): string;
        get value(): T;
    }
}
