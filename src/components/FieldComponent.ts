import modes, {Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export interface FieldJson extends IJsonNode {
    fieldName?: string;
    level?: number;
    type?: string;
    val?: any;
}

export class FieldComponent extends Component {
    name = componentTypes.field;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        let fieldJson = <FieldJson>this.jsonData;
        let levels = language.levels;
        let idx: number = <number>fieldJson.level || language.defaultLevel || 0;
        let level = levels ? (levels[idx] + ' ') : '';

        let field = fieldJson.fieldName || fieldJson.name;
        let type = fieldJson.type || language.defaultType;
        let defaultValue = fieldJson.val ? ` ${this.getOpter(language, '=')} ${fieldJson.val}` : '';
        return {
            openLevel: level,
            fieldName: field,
            type: type,
            defaultValue: defaultValue
        };
    }

    exportChildrenCode(language: ILanguage) {
        return '';
    }

}
