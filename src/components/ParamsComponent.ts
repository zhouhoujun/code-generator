import modes, { Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';

export class ParamsComponent extends Component {
    name = componentTypes.params;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        return '';
    }

    exportChildrenCode(language: ILanguage) {
        let states = [];
        this.each((item) => {
            if (item.name === componentTypes.express) {
                let codeStr = _.map((item.exportCode() || '').split('\n'), item => {
                    return '\t' + item;
                }).join('\n');
                states.push(codeStr);
            }
        }, modes.children);
        return states.join('\n');
    }
}
