import modes, { Component } from './Component';
import componentTypes, { IJsonNode, ILanguage, IComponent } from '../IComponent';

export class FuncComponent extends Component {
    name = componentTypes.func;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    protected exportData(language: ILanguage): any {
        let args = this.getArgsCode(language);
        let name = this.jsonData['funcName'] || this.jsonData['name'];
        let type = this.jsonData['type'] || language.defaultType;
        return {
            name: name,
            args: args,
            type: type
        };
    }

    protected getArgsCode(language: ILanguage): string {
        let args = this.find(it => it.name === componentTypes.args);
        return args ? args.exportCode() : '';
    }

    protected getChildren() {
        return this.filter(it => it.name !== componentTypes.args, modes.children);
    }
}
