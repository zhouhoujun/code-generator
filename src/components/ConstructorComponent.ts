import modes from './Component';
import { FuncComponent } from './FuncComponent';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export interface ConstructorJson extends IJsonNode {
    fieldName?: string;
    level?: number;
    type?: string;
    val?: any;
}

export class ConstructorComponent extends FuncComponent {
    name = componentTypes.constructors;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected exportData(language: ILanguage) {
        let cstrJson = <ConstructorJson>this.jsonData;

        let idx = cstrJson.level || language.defaultLevel;
        let level = language.levels ? (language.levels[idx] + ' ') : '';

        let args = this.getArgsCode(language);
        return {
            openLevel: level,
            args: args
        };
    }
}
