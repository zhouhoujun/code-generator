import { IComponent } from '../IComponent';
import * as _ from 'lodash';

// export * from '../IComponent';

export abstract class Component implements IComponent {
    name: string;
    children: IComponent[] = [];
    parent: IComponent;
    prefixStrs: string[] = [];
    suffixStrs: string[] = [];
    constructor(parent, protected jsonData) {
        this.parent = parent;
    }

    add(component: IComponent): void {
        this.children.push(component);
    }
    remove(component?: IComponent): void {
        _.remove(this.children, component);
    }
    find(express: IComponent | ((item: IComponent) => boolean)): IComponent {
        let component: IComponent;
        this.trans(item => {
            if (component) {
                return false;
            }
            let isFinded = _.isFunction(express) ? express(item) : (<IComponent>express) === item;
            if (isFinded) {
                component = item;
                return false;
            }
            return true;
        });
        return component;
    }
    findParent(express: IComponent | ((item: IComponent) => boolean)): IComponent {
        let component: IComponent;
        this.route(item => {
            if (component) {
                return false;
            }
            let isFinded = _.isFunction(express) ? express(item) : (<IComponent>express) === item;
            if (isFinded) {
                component = item;
                return false;
            }
            return true;
        });
        return component;
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
    prefixFormat(): string {
        return this.prefixStrs.join(';\n');
    }
    suffix(code: string, index?: number) {
        this.insert(this.suffixStrs, code, index);
    }
    suffixFormat(): string {
        return this.suffixStrs.join(';\n');
    }

    exportChildrenCode() {
        let childrenCode = '';
        _.each(this.children, item => {
            childrenCode += item.exportCode();
        });
        return childrenCode;
    }

    exportCode(): string {
        let self = this;
        let childrenCode = this.exportChildrenCode();
        return _.template(this.exportTemplate())({
            prefix: self.prefixFormat(),
            suffix: self.suffixFormat(),
            templateData: self.exportData(),
            childrenCode: childrenCode
        });
    }
    protected abstract exportTemplate(): string;
    protected abstract exportData(): string | {};
    protected insert(array: string[], code: string, index?: number) {
        if (index !== undefined) {
            array.splice(index, 0, code);
        } else {
            array.push(code);
        }
    }
}
