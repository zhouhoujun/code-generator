import { Component } from './Component';
import componentTypes from '../IComponent';

export class ActionComponent extends Component {
    name = componentTypes.action;
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
