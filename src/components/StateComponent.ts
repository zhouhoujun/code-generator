import { Component } from './Component';
import componentTypes, { IComponent } from '../IComponent';
import * as _ from 'lodash';

export class StateComponent extends Component {
    name = componentTypes.state;
    constructor(parent, jsonData) {
        super(parent, jsonData);
    }

    private getConditions() {
        return this.find((item: IComponent) => {
            return item.name === componentTypes.conditions;
        });
    }

    private getOptions() {
        return this.find((item: IComponent) => {
            return item.name === componentTypes.options;
        });
    }

    exportChildrenCode() {
        let states = [];
        this.eachChildren((item) => {
            if (item.name === componentTypes.state) {
                let codeStr = _.map((item.exportCode() || '').split('\n'), item => {
                    return '\t' + item;
                }).join('\n');
                states.push(codeStr);
            }
        });
        return states.join('\n');
    }

    exportData() {
        let conditions = this.getConditions();
        let options = this.getOptions();
        if (!conditions || !options) {
            return null;
        }
        let optionstr = _.map((options.exportCode() || '').split('\n'), item => {
            return '\t' + item;
        }).join('\n');
        return {
            conditions: conditions.exportCode(),
            options: optionstr
        };
    }

    exportTemplate() {
        return `
if (<%= templateData.conditions %>) {
<%= prefix %><%= templateData.options %><%= childrenCode %>
}`;
    }
}
