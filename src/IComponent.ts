/**
 * object map. 
 * 
 * @export
 * @interface IMap
 * @template T
 */
export interface IMap<T> {
    [K: string]: T;
}

// export * from '../IComponent';
export interface IJsonNode extends IMap<string | Number | Boolean | any[]> {
    /**
     * type 
     * 
     * @type {string}
     * @memberOf IJsonNode
     */
    t: string;
    /**
     * the node name. class name, field name...
     * 
     * @type {string}
     * @memberOf IJsonNode
     */
    name: string;
    /**
     * children json node.
     * 
     * @type {IJsonNode[]}
     * @memberOf IJsonNode
     */
    chn?: IJsonNode[]
}

/**
 * code component.
 * 
 * @export
 * @interface IComponent
 */
export interface IComponent {
    /**
     * add sub component
     * 
     * @param {IComponent} component
     * 
     * @memberOf IComponent
     */
    add(component: IComponent): void;
    /**
     * remove sub component.
     * 
     * @param {IComponent} [component]
     * 
     * @memberOf IComponent
     */
    remove(component?: IComponent): void;
    /**
     * 
     * parent component.
     * @type {IComponent}
     * @memberOf IComponent
     */
    parent: IComponent;
    /**
     * component identify
     */
    name: string;
    /**
     * find sub component via express.
     * 
     * @param {(IComponent | ((item: IComponent) => boolean))} express
     * @param {string} [mode] {enum:['route','children', traverse']} default traverse.
     * @returns {IComponent}
     * 
     * @memberOf IComponent
     */
    find(express: IComponent | ((item: IComponent) => boolean), mode?: string): IComponent

    /**
     * filter items.
     * 
     * @param {(((item: IComponent) => void | boolean))} express
     * @param {string} [mode] {enum:['route','children', traverse']} default traverse.
     * @returns {IComponent[]}
     * 
     * @memberOf IComponent
     */
    filter(express: ((item: IComponent) => void | boolean), mode?: string): IComponent[]
    /**
     * find parent component via express.
     * 
     * @param {(IComponent | ((item: IComponent) => boolean))} express
     * @param {string} [mode] {enum:['route','children', traverse']} default traverse.
     * 
     * @memberOf IComponent
     */
    each(express: ((item: IComponent) => void | boolean), mode?: string);
    /**
     * do express work in routing.
     * 
     * @param {(((item: IComponent) => void | boolean))} express
     * 
     * @memberOf IComponent
     */
    route(express: ((item: IComponent) => void | boolean));
    /**
     * translate all sub component to do express work.
     * 
     * @param {(((item: IComponent) => void | boolean))} express
     * 
     * @memberOf IComponent
     */
    trans(express: ((item: IComponent) => void | boolean));
    /**
     * add prefix code of this component.
     * 
     * @param {string} code
     * @param {number} [index]
     * 
     * @memberOf IComponent
     */
    prefix(code: string, index?: number);
    /**
     * prefix codes format of this component.
     * 
     * @returns {string}
     * 
     * @memberOf IComponent
     */
    prefixFormat(language: ILanguage): string;
    /**
     * add suffix code of this component
     * 
     * @param {string} code
     * @param {number} [index]
     * 
     * @memberOf IComponent
     */
    suffix(code: string, index?: number);
    /**
     * suffix codes format of this component.
     * 
     * @returns {string}
     * 
     * @memberOf IComponent
     */
    suffixFormat(language: ILanguage): string;
    /**
     * export code.
     * 
     * @returns {string}
     * 
     * @memberOf IComponent
     */
    exportCode(language?: ILanguage): string;
}

export interface ILanguage {
    defaultType?: string;
    methodDefaultType?: string;
    extends?: string;
    implements?: string;
    defaultLevel?: number;
    levels?: string[];
    opters?: IMap<string>;
    args?: IMap<string>;
    template: ILanguageTemplate;
}
export interface ILanguageTemplate {
    code: string;
    class?: string;
    params: string;
    args: string;
    arg: string;
    constructors?: string;
    method: string;
    field: string;
    attr?: string;
    attr_getter?: string;
    attr_setter?: string;
    func?: string;
    lambda?: string;
    express: string;
    if: string;
    elseif: string;
    else: string;
    switch: string;
    case: string;
}

export default <ILanguageTemplate>{
    code: 'code',
    class: 'class',
    params: 'params',
    args: 'args',
    arg: 'arg',
    constructors: 'constructors',
    method: 'method',
    field: 'field',
    attr: 'attr',
    func: 'func',
    lambda: 'lambda',
    express: 'express',
    if: 'if',
    elseif: 'elseif',
    else: 'else',
    switch: 'switch',
    case: 'case',

    state: 'state',
    options: 'options',
    option: 'option',
    conditions: 'conditions',
    condition: 'condition'
}

