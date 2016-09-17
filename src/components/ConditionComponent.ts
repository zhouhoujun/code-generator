import { Component } from './Component';
import componentTypes from '../IComponent';

export class ConditionComponent extends Component {
    name = componentTypes.condition;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData() {
        if (!this.jsonData) {
            return '';
        }
        let optionStr = '';
        if (Array.isArray(this.jsonData.conditionList)) {
            this.jsonData.conditionList.forEach(v => {
                if (v) {
                    optionStr += v.value + ' ';
                }
            });
        }
        return '(' + optionStr.trim() + ')';
    }

    exportTemplate() {
        return '${templateData}';
    }
}
