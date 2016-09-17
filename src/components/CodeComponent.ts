import { Component } from './Component';
import componentTypes from '../IComponent';

export class CodeComponent extends Component {
    name = componentTypes.code;
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
