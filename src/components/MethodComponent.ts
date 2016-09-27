import * as _ from 'lodash';
import modes from './Component';
import { FuncComponent } from './FuncComponent';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export interface MethodJson extends IJsonNode {
    methodName?: string;
    level?: number;
    type?: string;
    val?: any;
}
export class MethodComponent extends FuncComponent {
    name = componentTypes.method;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected exportData(language: ILanguage) {
        let mthJson = <MethodJson>this.jsonData;

        let idx = mthJson.level || language.defaultLevel;
        let level = language.levels ? (language.levels[idx] + ' ') : '';

        let name = mthJson.methodName || mthJson.name;
        let args = this.getArgsCode(language);
        let type = mthJson.type || language.methodDefaultType;
        return {
            openLevel: level,
            name: name,
            args: args,
            type: type
        };
    }
}
