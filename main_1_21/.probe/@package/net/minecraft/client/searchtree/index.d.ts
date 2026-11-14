import { $Function_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $Comparator, $List_, $Iterator, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/searchtree" {
    export class $SuffixArray<T> {
        add(object: T, contents: string): void;
        search(query: string): $List<T>;
        /**
         * Prints the entire array to the logger, on debug level
         */
        generate(): void;
        constructor();
    }
    export class $ResourceLocationSearchTree<T> {
        static empty<T>(): $ResourceLocationSearchTree<T>;
        static create<T>(contents: $List_<T>, idGetter: $Function_<T, $Stream<$ResourceLocation>>): $ResourceLocationSearchTree<T>;
    }
    export interface $ResourceLocationSearchTree<T> {
        searchNamespace(query: string): $List<T>;
        searchPath(query: string): $List<T>;
    }
    export class $IdSearchTree<T> implements $SearchTree<T> {
        /**
         * Searches this search tree for the given text.
         * 
         * If the query does not contain a `:`, then only `#byName` is searched. If it does contain a colon, both `#byName` and `#byId` are searched and the results are merged using a `MergingIterator`.
         * @return A list of all matching items in this search tree.
         */
        search(query: string): $List<T>;
        constructor(idGetter: $Function_<T, $Stream<$ResourceLocation>>, contents: $List_<T>);
    }
    export class $FullTextSearchTree<T> extends $IdSearchTree<T> {
        constructor(filter: $Function_<T, $Stream<string>>, idGetter: $Function_<T, $Stream<$ResourceLocation>>, contents: $List_<T>);
    }
    export class $MergingUniqueIterator<T> extends $AbstractIterator<T> {
        constructor(firstIterator: $Iterator<T>, secondIterator: $Iterator<T>, comparator: $Comparator<T>);
    }
    export class $IntersectionIterator<T> extends $AbstractIterator<T> {
        constructor(firstIterator: $Iterator<T>, secondIterator: $Iterator<T>, comparator: $Comparator<T>);
    }
    export class $SearchTree<T> {
        static plainText<T>(contents: $List_<T>, filter: $Function_<T, $Stream<string>>): $SearchTree<T>;
        static empty<T>(): $SearchTree<T>;
    }
    export interface $SearchTree<T> {
        /**
         * Searches this search tree for the given text.
         * 
         * If the query does not contain a `:`, then only `#byName` is searched. If it does contain a colon, both `#byName` and `#byId` are searched and the results are merged using a `MergingIterator`.
         * @return A list of all matching items in this search tree.
         */
        search(query: string): $List<T>;
    }
    /**
     * Values that may be interpreted as {@link $SearchTree}.
     */
    export type $SearchTree_<T> = ((arg0: string) => $List_<T>);
}
