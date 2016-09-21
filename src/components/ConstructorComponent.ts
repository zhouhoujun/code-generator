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

        let idx = cstrJson.level || language.defaultLevel;
        let level = language.levels ? (language.levels[idx] + ' ') : '';

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
