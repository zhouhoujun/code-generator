import { Component } from './Component';
import componentTypes, {IJsonNode, ILanguage } from '../IComponent';

export class AttrComponent extends Component {
    name = componentTypes.attr;
    constructor(parent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        return '';
    }
}
