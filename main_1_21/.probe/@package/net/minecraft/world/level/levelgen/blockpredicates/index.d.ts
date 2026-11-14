import { $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $BiPredicate, $BiPredicate_, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $CombinedBlockPredicateExtension } from "@package/com/ishland/c2me/opts/allocs/common/ducks";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/world/level/levelgen/blockpredicates" {
    export class $InsideWorldBoundsPredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$InsideWorldBoundsPredicate>;
        constructor(offset: $Vec3i);
    }
    export class $BlockPredicate {
        static replaceable(offset: $Vec3i): $BlockPredicate;
        static replaceable(): $BlockPredicate;
        static matchesBlocks(offset: $Vec3i, blocks: $List_<$Block_>): $BlockPredicate;
        static matchesBlocks(predicates: $List_<$Block_>): $BlockPredicate;
        static matchesBlocks(offset: $Vec3i, ...blocks: $Block_[]): $BlockPredicate;
        static matchesBlocks(...blocks: $Block_[]): $BlockPredicate;
        static solid(): $BlockPredicate;
        static solid(offset: $Vec3i): $BlockPredicate;
        static unobstructed(): $BlockPredicate;
        static unobstructed(offset: $Vec3i): $BlockPredicate;
        static matchesTag(offset: $Vec3i, tag: $TagKey_<$Block>): $BlockPredicate;
        static matchesTag(tag: $TagKey_<$Block>): $BlockPredicate;
        static matchesFluids(offset: $Vec3i, ...fluids: $Fluid_[]): $BlockPredicate;
        static matchesFluids(offset: $Vec3i, blocks: $List_<$Fluid_>): $BlockPredicate;
        static matchesFluids(...fluids: $Fluid_[]): $BlockPredicate;
        static wouldSurvive(state: $BlockState_, offset: $Vec3i): $BlockPredicate;
        static hasSturdyFace(direction: $Direction_): $BlockPredicate;
        static hasSturdyFace(offset: $Vec3i, direction: $Direction_): $BlockPredicate;
        static noFluid(): $BlockPredicate;
        static noFluid(offset: $Vec3i): $BlockPredicate;
        static insideWorld(offset: $Vec3i): $BlockPredicate;
        static alwaysTrue(): $BlockPredicate;
        static anyOf(predicate1: $BlockPredicate, predicate2: $BlockPredicate): $BlockPredicate;
        static anyOf(predicates: $List_<$BlockPredicate>): $BlockPredicate;
        static anyOf(...predicates: $BlockPredicate[]): $BlockPredicate;
        static not(predicate: $BlockPredicate): $BlockPredicate;
        static allOf(predicate1: $BlockPredicate, predicate2: $BlockPredicate): $BlockPredicate;
        static allOf(predicates: $List_<$BlockPredicate>): $BlockPredicate;
        static allOf(...predicates: $BlockPredicate[]): $BlockPredicate;
        static ONLY_IN_AIR_OR_WATER_PREDICATE: $BlockPredicate;
        static CODEC: $Codec<$BlockPredicate>;
        static ONLY_IN_AIR_PREDICATE: $BlockPredicate;
    }
    export interface $BlockPredicate extends $BiPredicate<$WorldGenLevel, $BlockPos> {
        type(): $BlockPredicateType<never>;
    }
    export class $StateTestingPredicate implements $BlockPredicate {
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export class $AllOfPredicate extends $CombiningPredicate implements $CombinedBlockPredicateExtension {
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        static CODEC: $MapCodec<$AllOfPredicate>;
        constructor(predicates: $List_<$BlockPredicate>);
    }
    export class $TrueBlockPredicate implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export class $MatchingFluidsPredicate extends $StateTestingPredicate {
    }
    export class $BlockPredicateType<P extends $BlockPredicate> {
        static UNOBSTRUCTED: $BlockPredicateType<$UnobstructedPredicate>;
        static MATCHING_BLOCK_TAG: $BlockPredicateType<$MatchingBlockTagPredicate>;
        static MATCHING_BLOCKS: $BlockPredicateType<$MatchingBlocksPredicate>;
        static INSIDE_WORLD_BOUNDS: $BlockPredicateType<$InsideWorldBoundsPredicate>;
        static ALL_OF: $BlockPredicateType<$AllOfPredicate>;
        static TRUE: $BlockPredicateType<$TrueBlockPredicate>;
        static ANY_OF: $BlockPredicateType<$AnyOfPredicate>;
        static HAS_STURDY_FACE: $BlockPredicateType<$HasSturdyFacePredicate>;
        static NOT: $BlockPredicateType<$NotPredicate>;
        static REPLACEABLE: $BlockPredicateType<$ReplaceablePredicate>;
        static WOULD_SURVIVE: $BlockPredicateType<$WouldSurvivePredicate>;
        static MATCHING_FLUIDS: $BlockPredicateType<$MatchingFluidsPredicate>;
        static SOLID: $BlockPredicateType<$SolidPredicate>;
    }
    export interface $BlockPredicateType<P extends $BlockPredicate> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicateType}.
     */
    export type $BlockPredicateType_<P> = RegistryTypes.BlockPredicateType | (() => $MapCodec_<P>);
    export class $CombiningPredicate implements $BlockPredicate, $CombinedBlockPredicateExtension {
        c2me$getPredicatesArray(): $BlockPredicate[];
        static codec<T extends $CombiningPredicate>(factory: $Function_<$List<$BlockPredicate>, T>): $MapCodec<T>;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    /**
     * @deprecated
     */
    export class $SolidPredicate extends $StateTestingPredicate {
        static CODEC: $MapCodec<$SolidPredicate>;
        constructor(arg0: $Vec3i);
    }
    export class $ReplaceablePredicate extends $StateTestingPredicate {
    }
    export class $UnobstructedPredicate extends $Record implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $UnobstructedPredicate}.
     */
    export type $UnobstructedPredicate_ = { offset?: $Vec3i,  } | [offset?: $Vec3i, ];
    export interface $BlockPredicateType<P> extends RegistryMarked<RegistryTypes.BlockPredicateTypeTag, RegistryTypes.BlockPredicateType> {}
    export class $HasSturdyFacePredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$HasSturdyFacePredicate>;
        constructor(offset: $Vec3i, direction: $Direction_);
    }
    export class $MatchingBlocksPredicate extends $StateTestingPredicate {
    }
    export class $WouldSurvivePredicate implements $BlockPredicate {
        type(): $BlockPredicateType<never>;
        test(level: $WorldGenLevel, pos: $BlockPos_): boolean;
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        static CODEC: $MapCodec<$WouldSurvivePredicate>;
    }
    export class $MatchingBlockTagPredicate extends $StateTestingPredicate {
        static CODEC: $MapCodec<$MatchingBlockTagPredicate>;
    }
    export class $NotPredicate implements $BlockPredicate {
        or(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
        negate(): $BiPredicate<$WorldGenLevel, $BlockPos>;
        and(arg0: $BiPredicate_<$WorldGenLevel, $BlockPos>): $BiPredicate<$WorldGenLevel, $BlockPos>;
    }
    export class $AnyOfPredicate extends $CombiningPredicate implements $CombinedBlockPredicateExtension {
        test(structureWorldAccess: $WorldGenLevel, blockPos: $BlockPos_): boolean;
        static CODEC: $MapCodec<$AnyOfPredicate>;
        constructor(arg0: $List_<$BlockPredicate>);
    }
}
