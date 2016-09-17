import { Component } from './Component';
import * as _ from 'lodash';
import componentTypes from '../IComponent';

export class ConditionsComponent extends Component {
    name = componentTypes.conditions;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData() {
        return '';
    }

    exportTemplate() {
        return '${childrenCode}';
    }

    exportCode(): string {
        let childrenCode = '';
        this.children.forEach((item, index, arr) => {
            childrenCode += item.exportCode() + (index === arr.length - 1 ? '' : (' ' + this.jsonData.sign + ' '));
        });
        return _.template(this.exportTemplate())({
            childrenCode: childrenCode
        });
    }
}
