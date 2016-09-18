import modes, { IJsonNode, Component } from './Component';
import componentTypes, { IComponent, ILanguage } from '../IComponent';

export class ClassComponent extends Component {
    name = componentTypes.class;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected getFields(): IComponent[] {
        return this.filter(it => {
            return it.name === componentTypes.field;
        }, modes.children);
    }

    protected getMethods(): IComponent[] {
        return this.filter(it => {
            return it.name === componentTypes.method;
        }, modes.children);
    }

    protected getAttrs(): IComponent[] {
        return this.filter(it => {
            return it.name === componentTypes.attr;
        }, modes.children);
    }

    protected getConstructors(): IComponent[] {
        return this.filter(it => {
            return it.name === componentTypes.constructors;
        }, modes.children);
    }

    exportChildrenCode(language: ILanguage) {
        return '';
        // let childrenCode = '';
        // this.each(it => {
        //     if (it.name !== componentTypes.method
        //         && it.name !== componentTypes.field
        //         && it.name !== componentTypes.attr) {
        //         childrenCode += it.exportCode(language);
        //     }
        // }, modes.children);
        // return childrenCode;
    }

    exportData(language: ILanguage) {
        let clsName = this.jsonData['className'] || this.jsonData['name'];
        let exts = (this.jsonData['extends']) ? ` ${language['extends']} ${this.jsonData['extends']}` : '';
        let imps = (this.jsonData['implements']) ? ` ${language['implements']} ${this.jsonData['implements']}` : '';
        let fileds = '';
        this.getFields().forEach(it => {
            fileds += it.exportCode(language);
        });

        let attrs = '';
        this.getAttrs().forEach(it => {
            attrs += it.exportCode(language);
        });

        let methods = '';
        this.getMethods().forEach(it => {
            methods += it.exportCode(language);
        });

        let constructors = '';
        this.getConstructors().forEach(it => {
            constructors += it.exportCode(language);
        });

        return {
            className: clsName,
            extends: exts,
            implements: imps,
            fileds: fileds,
            attrs: attrs,
            constructors: constructors,
            methods: methods
        };
    }
}
