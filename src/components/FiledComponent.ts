import modes, {Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export class FiledComponent extends Component {
    name = componentTypes.field;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        let levels = language.levels;
        let idx: number = <number>this.jsonData['level'] || language.defaultLevel || 0;
        let level = levels ? (levels[idx] + ' ') : '';

        let field = this.jsonData['fieldName'] || this.jsonData['name'];
        let type = this.jsonData['type'] || language.defaultType;
        return {
            openLevel: level,
            fieldName: field,
            type: type
        };
    }

    exportChildrenCode(language: ILanguage) {
        return '';
    }

}
