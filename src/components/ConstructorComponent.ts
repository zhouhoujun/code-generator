import modes, { Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export interface ConstructorJson extends IJsonNode {
    fieldName?: string;
    level?: number;
    type?: string;
    val?: any;
}
export class ConstructorComponent extends Component {
    name = componentTypes.constructors;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected exportData(language: ILanguage) {
        let cstrJson = <ConstructorJson>this.jsonData;
        let levels = language.levels;
        let idx: number = <number>cstrJson.level || language.defaultLevel || 0;
        let level = levels ? (levels[idx] + ' ') : '';
        let args = this.getArgsCode();
        return {
            openLevel: level,
            args: args
        };
    }

    protected getArgsCode() {
        let ps = this.find(it => it.name === componentTypes.args);
        return ps ? ps.exportCode() : '';
    }

    protected getChildren() {
        return this.filter(it => it.name !== componentTypes.args, modes.children);
    }
}
