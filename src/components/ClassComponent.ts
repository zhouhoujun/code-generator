import modes, { Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export interface ClassJson extends IJsonNode {
    className?: string;
    level?: number;
    export?: number;
    extends?: number;
    implements?: string;
}

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
        let classJson = <ClassJson>this.jsonData;

        let clsName = classJson.className || classJson.name;
        let exportStr = classJson.export ? language.export : '';
        let exts = (classJson.extends) ? ` ${language.extends} ${classJson.extends}` : '';
        let imps = (classJson.implements) ? ` ${language.implements} ${classJson.implements}` : '';
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
            export: exportStr,
            fileds: fileds,
            attrs: attrs,
            constructors: constructors,
            methods: methods
        };
    }
}
