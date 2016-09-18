import { Component } from './Component';
import componentTypes, { ILanguage } from '../IComponent';

export class CodeComponent extends Component {
    name = componentTypes.code;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        return '';
    }
}
