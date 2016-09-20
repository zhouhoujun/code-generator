import modes, { Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export interface MethodJson extends IJsonNode {
    methodName?: string;
    level?: number;
    type?: string;
    val?: any;
}
export class MethodComponent extends Component {
    name = componentTypes.method;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected exportData(language: ILanguage) {
        let mthJson = <MethodJson>this.jsonData;
        let levels = language.levels;
        let idx: number = <number>mthJson.level || language.defaultLevel || 0;
        let level = levels ? (levels[idx] + ' ') : '';
        let name = mthJson.methodName || mthJson.name;
        let args = this.getArgsCode();
        let type = mthJson.type || language.methodDefaultType;
        return {
            openLevel: level,
            methodName: name,
            args: args,
            type: type
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
