declare const _default: {
    name: string;
    customElement: import("vue").VueElementConstructor<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: StringConstructor;
        };
        onClick: {
            type: import("vue").PropType<(e: Event) => void>;
        };
        size: {
            type: import("vue").PropType<import("./types").ButtonSize>;
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
    }>>>;
    component: import("vue").DefineComponent<{
        color: {
            type: StringConstructor;
        };
        onClick: {
            type: import("vue").PropType<(e: Event) => void>;
        };
        size: {
            type: import("vue").PropType<import("./types").ButtonSize>;
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
            type: import("vue").PropType<(e: Event) => void>;
        };
        size: {
            type: import("vue").PropType<import("./types").ButtonSize>;
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
        size: import("./types").ButtonSize;
        square: boolean;
        block: boolean;
        text: boolean;
        disabled: boolean;
    }>;
};
export default _default;
