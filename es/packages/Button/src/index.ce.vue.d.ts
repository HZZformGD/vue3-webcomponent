import { PropType } from "vue";
import { ButtonSize } from "../types";
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
    };
    onClick: {
        type: PropType<(e: Event) => void>;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    square: {
        type: BooleanConstructor;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleClick: (e: Event) => void | undefined;
    nameSpace: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
    };
    onClick: {
        type: PropType<(e: Event) => void>;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    square: {
        type: BooleanConstructor;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    size: ButtonSize;
    square: boolean;
    block: boolean;
    text: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
