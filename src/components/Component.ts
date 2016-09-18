import { IJsonNode, IComponent, ILanguage } from '../IComponent';
import * as _ from 'lodash';
import TypeScript from '../language/TypeScript';




/**
 * each mode types.
 */
export default {
    route: 'route',
    children: 'children',
    traverse: 'traverse'
}
/**
 * Component for code.
 * 
 * @export
 * @abstract
 * @class Component
 * @implements {IComponent}
 */
export abstract class Component implements IComponent {
    name: string;
    children: IComponent[] = [];
    parent: IComponent;
    prefixStrs: string[] = [];
    suffixStrs: string[] = [];
    constructor(parent: IComponent, protected jsonData: IJsonNode) {
        this.parent = parent;
    }

    add(component: IComponent): void {
        this.children.push(component);
    }
    remove(component?: IComponent): void {
        _.remove(this.children, component);
    }
    find(express: IComponent | ((item: IComponent) => boolean), mode?: string): IComponent {
        let component: IComponent;
        this.each(item => {
            if (component) {
                return false;
            }
            let isFinded = _.isFunction(express) ? express(item) : (<IComponent>express) === item;
            if (isFinded) {
                component = item;
                return false;
            }
            return true;
        }, mode);
        return component;
    }

    filter(express: ((item: IComponent) => void | boolean), mode?: string): IComponent[] {
        let componts: IComponent[] = [];
        this.each(item => {
            if (express(item)) {
                componts.push(item);
            }
        }, mode);
        return componts;
    }

    each(express: ((item: IComponent) => void | boolean), mode?: string) {
        mode = mode || '';
        let r;
        switch (mode) {
            case 'route':
                r = this.route(express);
                break;
            case 'children':
                r = this.eachChildren(express);
                break;

            case 'traverse':
                r = this.trans(express);
                break;
            default:
                r = this.trans(express);
                break;
        }
        return r;
    }

    route(express: ((item: IComponent) => void | boolean)) {
        if (!express(this)) {
            return false;
        };
        return this.parent.route(express);
    }
    trans(express: ((item: IComponent) => void | boolean)) {
        if (express(this) === false) {
            return false;
        }
        _.each(this.children, item => {
            return item.trans(express);
        });
        return true;
    }

    eachChildren(express: ((item: IComponent) => void | boolean)) {
        _.each(this.children, item => {
            return express(item);
        });
    }

    prefix(code: string, index?: number) {
        this.insert(this.prefixStrs, code, index);
    }
    prefixFormat(language: ILanguage): string {
        return this.prefixStrs.join(';\n');
    }
    suffix(code: string, index?: number) {
        this.insert(this.suffixStrs, code, index);
    }
    suffixFormat(language: ILanguage): string {
        return this.suffixStrs.join(';\n');
    }

    exportChildrenCode(language: ILanguage) {
        let childrenCode = '';
        _.each(this.children, item => {
            childrenCode += item.exportCode(language);
        });
        return childrenCode;
    }

    exportCode(language?: ILanguage): string {
        language = language || TypeScript;
        let self = this;
        let childrenCode = this.exportChildrenCode(language);
        return _.template(this.exportTemplate(language))({
            prefix: self.prefixFormat(language),
            suffix: self.suffixFormat(language),
            templateData: self.exportData(language),
            childrenCode: childrenCode
        });
    }
    protected exportTemplate(language: ILanguage): string {
        return language[this.name];
    }
    protected abstract exportData(language: ILanguage): string | {};
    protected insert(array: string[], code: string, index?: number) {
        if (index !== undefined) {
            array.splice(index, 0, code);
        } else {
            array.push(code);
        }
    }
}
