import { Component } from './Component';
import componentTypes, { ILanguage } from '../IComponent';

export class AttrComponent extends Component {
    name = componentTypes.attr;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        return '';
    }
}
