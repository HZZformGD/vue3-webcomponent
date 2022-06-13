import { PropType } from "vue";
import { Grow, Shrink, Basis } from "../types";
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
    };
    grow: {
        type: PropType<Grow>;
        default: string;
    };
    shrink: {
        type: PropType<Shrink>;
        default: string;
    };
    basis: {
        type: PropType<Basis>;
        default: string;
    };
    flex: {
        default: number;
    };
}, {
    nameSpace: string;
    style: any;
    ele: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
    };
    grow: {
        type: PropType<Grow>;
        default: string;
    };
    shrink: {
        type: PropType<Shrink>;
        default: string;
    };
    basis: {
        type: PropType<Basis>;
        default: string;
    };
    flex: {
        default: number;
    };
}>>, {
    grow: Grow;
    shrink: Shrink;
    basis: Basis;
    flex: number;
}>;
export default _sfc_main;
