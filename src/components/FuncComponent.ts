import { Component } from './Component';
import componentTypes from '../IComponent';

export class FuncComponent extends Component {
    name = componentTypes.func;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    exportData() {
        if (!this.jsonData) {
            return '';
        }
        let optionStr = `${this.jsonData.value}(${Array.isArray(this.jsonData.params) ? this.jsonData.params.join(',') : ''});
        `;
        return optionStr;
    }

    exportTemplate() {
        return '${templateData}';
    }
}
