import { Component } from './Component';
import componentTypes from '../IComponent';

export class OptionComponent extends Component {
    name = componentTypes.option;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData() {
        if (!this.jsonData) {
            return '';
        }
        let optionStr = '';
        if (Array.isArray(this.jsonData.expressions)) {
            this.jsonData.expressions.forEach(v => {
                if (v) {
                    optionStr += v.value + ' ';
                }
            });
        }
        return optionStr.trim() + `;\n`;
    }

    exportTemplate() {
        return '${templateData}';
    }
}
