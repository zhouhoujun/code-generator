import { IFactory } from './IFactory';
import { IComponent } from './IComponent';
import { CodeComponent } from './components/CodeComponent';
import { ClassComponent } from './components/ClassComponent';
import { AttrComponent } from './components/AttrComponent';
import { FuncComponent } from './components/FuncComponent';
import { ParamsComponent } from './components/ParamsComponent';

export class Factory implements IFactory {
    constructor() {

    }
    create(jsonNode, parentComponent?: IComponent) {
        let component;
        switch (jsonNode.t) {
            case 'code':
                component = new CodeComponent(parentComponent, jsonNode);
                break;
            case 'class':
                component = new ClassComponent(parentComponent, jsonNode);
                break;
            case 'attr':
                component = new AttrComponent(parentComponent, jsonNode);
                break;
            case 'params':
                component = new ParamsComponent(parentComponent, jsonNode);
                break;
            case 'func':
                component = new FuncComponent(parentComponent, jsonNode);
                break;
            case 'conditions':
                component = new ConditionsComponent(parentComponent, jsonNode);
                break;
            case 'condition':
                component = new ConditionComponent(parentComponent, jsonNode);
                break;
            default:
                component = new CodeComponent(null, null);
                break;
        }
        return component;
    }
}
