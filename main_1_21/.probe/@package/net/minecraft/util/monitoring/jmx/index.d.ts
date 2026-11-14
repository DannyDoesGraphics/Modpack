import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MBeanInfo, $DynamicMBean, $AttributeList, $Attribute } from "@package/javax/management";
import { $Object } from "@package/java/lang";

declare module "@package/net/minecraft/util/monitoring/jmx" {
    export class $MinecraftServerStatistics implements $DynamicMBean {
        static registerJmxMonitoring(server: $MinecraftServer): void;
        getMBeanInfo(): $MBeanInfo;
        setAttributes(attributes: $AttributeList): $AttributeList;
        invoke(actionName: string, params: $Object[], signature: string[]): $Object;
        getAttributes(attributes: string[]): $AttributeList;
        setAttribute(attribute: $Attribute): void;
        getAttribute(name: string): $Object;
        get MBeanInfo(): $MBeanInfo;
    }
    export class $MinecraftServerStatistics$AttributeDescription {
    }
}
