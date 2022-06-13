import { PropType } from "vue";
import { RowAlign, RowJustify, RowDirection, RowWrap } from "../types";
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
    };
    align: {
        type: PropType<RowAlign>;
        default: string;
    };
    justify: {
        type: PropType<RowJustify>;
        default: string;
    };
    direction: {
        type: PropType<RowDirection>;
        default: string;
    };
    wrap: {
        type: PropType<RowWrap>;
        default: string;
    };
}, {
    nameSpace: string;
    style: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
    };
    align: {
        type: PropType<RowAlign>;
        default: string;
    };
    justify: {
        type: PropType<RowJustify>;
        default: string;
    };
    direction: {
        type: PropType<RowDirection>;
        default: string;
    };
    wrap: {
        type: PropType<RowWrap>;
        default: string;
    };
}>>, {
    wrap: RowWrap;
    align: RowAlign;
    justify: RowJustify;
    direction: RowDirection;
}>;
export default _sfc_main;
