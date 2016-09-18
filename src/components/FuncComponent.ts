import modes, { Component } from './Component';
import componentTypes, { IJsonNode, ILanguage, IComponent } from '../IComponent';

export class FuncComponent extends Component {
    name = componentTypes.func;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected getParams(): IComponent {
        return this.find(it => it.name === componentTypes.params);
    }

    exportData(language: ILanguage) {
        let params = this.getParams();
        let paramsStr = params.exportCode(language);
        let name = this.jsonData['funcName'] || this.jsonData['name'];
        let type = this.jsonData['type'] || language.defaultType;
        return {
            funcName: name,
            params: paramsStr,
            type: type
        };
    }

    exportChildrenCode(language: ILanguage) {
        let code = '';
        this.each(item => {
            if (item.name !== componentTypes.params) {
                code += item.exportCode(language);
            }
        }, modes.children);
        return code;
    }
}
