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
     * @returns {IComponent}
     * 
     * @memberOf IComponent
     */
    find(express: IComponent | ((item: IComponent) => boolean)): IComponent;
    /**
     * find parent component via express.
     * 
     * @param {(IComponent | ((item: IComponent) => boolean))} express
     * @returns {IComponent}
     * 
     * @memberOf IComponent
     */
    findParent(express: IComponent | ((item: IComponent) => boolean)): IComponent;
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
    prefixFormat(): string;
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
    suffixFormat(): string;
    /**
     * export code.
     * 
     * @returns {string}
     * 
     * @memberOf IComponent
     */
    exportCode(): string;
}

export default {
    code: 'code',
    class: 'class',
    method: 'method',
    field: 'field',
    getter：'getter',
    setter: 'setter',
    func: 'func',
    lambda: 'lambda',
    express: 'express',
    state: 'state',
    options: 'options',
    option: 'option',
    func: 'func',
    conditions: 'conditions',
    condition: 'condition'
}

