import { IFactory } from './IFactory';
import componentTypes, { IComponent } from './IComponent';
import { CodeComponent } from './components/CodeComponent';
import { ClassComponent } from './components/ClassComponent';
import { AttrComponent } from './components/AttrComponent';
import { FuncComponent } from './components/FuncComponent';
import { ParamsComponent } from './components/ParamsComponent';
import { FieldComponent } from './components/FieldComponent';
import { MethodComponent } from './components/MethodComponent';

export class Factory implements IFactory {
    constructor() {

    }
    create(jsonNode, parentComponent?: IComponent) {
        let component;
        switch (jsonNode.t) {
            case componentTypes.code:
                component = new CodeComponent(parentComponent, jsonNode);
                break;
            case componentTypes.class:
                component = new ClassComponent(parentComponent, jsonNode);
                break;
            case componentTypes.attr:
                component = new AttrComponent(parentComponent, jsonNode);
                break;
            case componentTypes.params:
                component = new ParamsComponent(parentComponent, jsonNode);
                break;
            case componentTypes.func:
                component = new FuncComponent(parentComponent, jsonNode);
                break;
            case componentTypes.field:
                component = new FieldComponent(parentComponent, jsonNode);
                break;
            case componentTypes.method:
                component = new MethodComponent(parentComponent, jsonNode);
                break;
            default:
                component = new CodeComponent(null, null);
                break;
        }
        return component;
    }
}
