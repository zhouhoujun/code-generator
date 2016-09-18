import { Component } from './Component';
import componentTypes, {IJsonNode, ILanguage } from '../IComponent';

export class CodeComponent extends Component {
    name = componentTypes.code;
    constructor(parent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        return '';
    }
}
