import { Component } from './Component';
import componentTypes from '../IComponent';

export class OptionsComponent extends Component {
    name = componentTypes.options;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData() {
        return '';
    }

    exportTemplate() {
        return '${childrenCode}';
    }
}
