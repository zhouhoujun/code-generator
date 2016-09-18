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
    code: string;
    defaultType?: string;
    defaultLevel?: number;
    levels?: string[];
    class?: string;
    constructors?: string;
    method: string;
    field: string;
    attr?: string;
    func?: string;
    lambda?: string;
    express: string;
    if: string;
    elseif: string;
    else: string;
    switch: string;
    case: string;
}

export default <ILanguage>{
    code: 'code',
    class: 'class',
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

