import { $Object } from "@package/java/lang";

declare module "@package/org/w3c/dom" {
    export class $DOMStringList {
    }
    export interface $DOMStringList {
        getLength(): number;
        contains(arg0: string): boolean;
        item(arg0: number): string;
        get length(): number;
    }
    export class $Node {
        static NOTATION_NODE: number;
        static ENTITY_REFERENCE_NODE: number;
        static CDATA_SECTION_NODE: number;
        static PROCESSING_INSTRUCTION_NODE: number;
        static ENTITY_NODE: number;
        static DOCUMENT_NODE: number;
        static COMMENT_NODE: number;
        static DOCUMENT_POSITION_CONTAINS: number;
        static DOCUMENT_POSITION_PRECEDING: number;
        static DOCUMENT_POSITION_DISCONNECTED: number;
        static DOCUMENT_POSITION_CONTAINED_BY: number;
        static ELEMENT_NODE: number;
        static DOCUMENT_TYPE_NODE: number;
        static DOCUMENT_FRAGMENT_NODE: number;
        static TEXT_NODE: number;
        static DOCUMENT_POSITION_FOLLOWING: number;
        static ATTRIBUTE_NODE: number;
        static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    }
    export interface $Node {
        hasAttributes(): boolean;
        getFeature(arg0: string, arg1: string): $Object;
        getNodeType(): number;
        appendChild(arg0: $Node): $Node;
        getLastChild(): $Node;
        getNodeName(): string;
        removeChild(arg0: $Node): $Node;
        setNodeValue(arg0: string): void;
        getParentNode(): $Node;
        getFirstChild(): $Node;
        cloneNode(arg0: boolean): $Node;
        getNextSibling(): $Node;
        getPreviousSibling(): $Node;
        getNodeValue(): string;
        insertBefore(arg0: $Node, arg1: $Node): $Node;
        getBaseURI(): string;
        getOwnerDocument(): $Document;
        replaceChild(arg0: $Node, arg1: $Node): $Node;
        hasChildNodes(): boolean;
        getNamespaceURI(): string;
        setPrefix(arg0: string): void;
        compareDocumentPosition(arg0: $Node): number;
        getTextContent(): string;
        setTextContent(arg0: string): void;
        isSameNode(arg0: $Node): boolean;
        lookupPrefix(arg0: string): string;
        isDefaultNamespace(arg0: string): boolean;
        lookupNamespaceURI(arg0: string): string;
        isEqualNode(arg0: $Node): boolean;
        getUserData(arg0: string): $Object;
        setUserData(arg0: string, arg1: $Object, arg2: $UserDataHandler_): $Object;
        getLocalName(): string;
        isSupported(arg0: string, arg1: string): boolean;
        getAttributes(): $NamedNodeMap;
        normalize(): void;
        getPrefix(): string;
        getChildNodes(): $NodeList;
        get nodeType(): number;
        get lastChild(): $Node;
        get nodeName(): string;
        get parentNode(): $Node;
        get firstChild(): $Node;
        get nextSibling(): $Node;
        get previousSibling(): $Node;
        get baseURI(): string;
        get ownerDocument(): $Document;
        get namespaceURI(): string;
        get localName(): string;
        get attributes(): $NamedNodeMap;
        get childNodes(): $NodeList;
    }
    export class $DocumentFragment {
    }
    export interface $DocumentFragment extends $Node {
    }
    export class $NamedNodeMap {
    }
    export interface $NamedNodeMap {
        getNamedItemNS(arg0: string, arg1: string): $Node;
        removeNamedItemNS(arg0: string, arg1: string): $Node;
        getNamedItem(arg0: string): $Node;
        setNamedItem(arg0: $Node): $Node;
        setNamedItemNS(arg0: $Node): $Node;
        getLength(): number;
        item(arg0: number): $Node;
        removeNamedItem(arg0: string): $Node;
        get length(): number;
    }
    export class $CharacterData {
    }
    export interface $CharacterData extends $Node {
        substringData(arg0: number, arg1: number): string;
        insertData(arg0: number, arg1: string): void;
        deleteData(arg0: number, arg1: number): void;
        appendData(arg0: string): void;
        replaceData(arg0: number, arg1: number, arg2: string): void;
        getLength(): number;
        getData(): string;
        setData(arg0: string): void;
        get length(): number;
    }
    export class $ProcessingInstruction {
    }
    export interface $ProcessingInstruction extends $Node {
        getTarget(): string;
        getData(): string;
        setData(arg0: string): void;
        get target(): string;
    }
    export class $DOMImplementation {
    }
    export interface $DOMImplementation {
        createDocument(arg0: string, arg1: string, arg2: $DocumentType): $Document;
        getFeature(arg0: string, arg1: string): $Object;
        createDocumentType(arg0: string, arg1: string, arg2: string): $DocumentType;
        hasFeature(arg0: string, arg1: string): boolean;
    }
    export class $UserDataHandler {
        static NODE_DELETED: number;
        static NODE_IMPORTED: number;
        static NODE_ADOPTED: number;
        static NODE_RENAMED: number;
        static NODE_CLONED: number;
    }
    export interface $UserDataHandler {
        handle(arg0: number, arg1: string, arg2: $Object, arg3: $Node, arg4: $Node): void;
    }
    /**
     * Values that may be interpreted as {@link $UserDataHandler}.
     */
    export type $UserDataHandler_ = ((arg0: number, arg1: string, arg2: $Object, arg3: $Node, arg4: $Node) => void);
    export class $Text {
    }
    export interface $Text extends $CharacterData {
        isElementContentWhitespace(): boolean;
        getWholeText(): string;
        replaceWholeText(arg0: string): $Text;
        splitText(arg0: number): $Text;
        get elementContentWhitespace(): boolean;
        get wholeText(): string;
    }
    export class $Comment {
    }
    export interface $Comment extends $CharacterData {
    }
    export class $NodeList {
    }
    export interface $NodeList {
        getLength(): number;
        item(arg0: number): $Node;
        get length(): number;
    }
    export class $Element {
    }
    export interface $Element extends $Node {
        getElementsByTagNameNS(arg0: string, arg1: string): $NodeList;
        getAttributeNS(arg0: string, arg1: string): string;
        removeAttributeNS(arg0: string, arg1: string): void;
        hasAttribute(arg0: string): boolean;
        hasAttributeNS(arg0: string, arg1: string): boolean;
        setIdAttributeNS(arg0: string, arg1: string, arg2: boolean): void;
        getSchemaTypeInfo(): $TypeInfo;
        setAttributeNodeNS(arg0: $Attr): $Attr;
        setAttributeNode(arg0: $Attr): $Attr;
        setIdAttributeNode(arg0: $Attr, arg1: boolean): void;
        getAttributeNodeNS(arg0: string, arg1: string): $Attr;
        getAttributeNode(arg0: string): $Attr;
        setAttributeNS(arg0: string, arg1: string, arg2: string): void;
        setIdAttribute(arg0: string, arg1: boolean): void;
        removeAttributeNode(arg0: $Attr): $Attr;
        getElementsByTagName(arg0: string): $NodeList;
        setAttribute(arg0: string, arg1: string): void;
        getAttribute(arg0: string): string;
        removeAttribute(arg0: string): void;
        getTagName(): string;
        get schemaTypeInfo(): $TypeInfo;
        get tagName(): string;
    }
    export class $Attr {
    }
    export interface $Attr extends $Node {
        getSchemaTypeInfo(): $TypeInfo;
        isId(): boolean;
        getOwnerElement(): $Element;
        getSpecified(): boolean;
        getName(): string;
        getValue(): string;
        setValue(arg0: string): void;
        get schemaTypeInfo(): $TypeInfo;
        get id(): boolean;
        get ownerElement(): $Element;
        get specified(): boolean;
        get name(): string;
    }
    export class $DOMConfiguration {
    }
    export interface $DOMConfiguration {
        canSetParameter(arg0: string, arg1: $Object): boolean;
        getParameterNames(): $DOMStringList;
        setParameter(arg0: string, arg1: $Object): void;
        getParameter(arg0: string): $Object;
        get parameterNames(): $DOMStringList;
    }
    export class $EntityReference {
    }
    export interface $EntityReference extends $Node {
    }
    export class $DocumentType {
    }
    export interface $DocumentType extends $Node {
        getSystemId(): string;
        getPublicId(): string;
        getInternalSubset(): string;
        getEntities(): $NamedNodeMap;
        getNotations(): $NamedNodeMap;
        getName(): string;
        get systemId(): string;
        get publicId(): string;
        get internalSubset(): string;
        get entities(): $NamedNodeMap;
        get notations(): $NamedNodeMap;
        get name(): string;
    }
    export class $TypeInfo {
        static DERIVATION_UNION: number;
        static DERIVATION_EXTENSION: number;
        static DERIVATION_RESTRICTION: number;
        static DERIVATION_LIST: number;
    }
    export interface $TypeInfo {
        getTypeNamespace(): string;
        isDerivedFrom(arg0: string, arg1: string, arg2: number): boolean;
        getTypeName(): string;
        get typeNamespace(): string;
        get typeName(): string;
    }
    export class $CDATASection {
    }
    export interface $CDATASection extends $Text {
    }
    export class $Document {
    }
    export interface $Document extends $Node {
        getDomConfig(): $DOMConfiguration;
        adoptNode(arg0: $Node): $Node;
        getElementById(arg0: string): $Element;
        getElementsByTagNameNS(arg0: string, arg1: string): $NodeList;
        createEntityReference(arg0: string): $EntityReference;
        setXmlVersion(arg0: string): void;
        createComment(arg0: string): $Comment;
        createProcessingInstruction(arg0: string, arg1: string): $ProcessingInstruction;
        setStrictErrorChecking(arg0: boolean): void;
        setDocumentURI(arg0: string): void;
        setXmlStandalone(arg0: boolean): void;
        createCDATASection(arg0: string): $CDATASection;
        createTextNode(arg0: string): $Text;
        getDocumentURI(): string;
        createAttributeNS(arg0: string, arg1: string): $Attr;
        createAttribute(arg0: string): $Attr;
        createElementNS(arg0: string, arg1: string): $Element;
        createElement(arg0: string): $Element;
        getImplementation(): $DOMImplementation;
        importNode(arg0: $Node, arg1: boolean): $Node;
        getXmlEncoding(): string;
        getXmlVersion(): string;
        getXmlStandalone(): boolean;
        normalizeDocument(): void;
        createDocumentFragment(): $DocumentFragment;
        getDoctype(): $DocumentType;
        getElementsByTagName(arg0: string): $NodeList;
        getStrictErrorChecking(): boolean;
        getInputEncoding(): string;
        renameNode(arg0: $Node, arg1: string, arg2: string): $Node;
        getDocumentElement(): $Element;
        get domConfig(): $DOMConfiguration;
        get implementation(): $DOMImplementation;
        get xmlEncoding(): string;
        get doctype(): $DocumentType;
        get inputEncoding(): string;
        get documentElement(): $Element;
    }
}
