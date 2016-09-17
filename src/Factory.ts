import { IFactory } from './IFactory';
import { IComponent } from './IComponent';
import { PolicyComponent } from './components/PolicyComponent';
import { ActionComponent } from './components/ActionComponent';
import { StateComponent } from './components/StateComponent';
import { OptionsComponent } from './components/OptionsComponent';
import { OptionComponent } from './components/OptionComponent';
import { FuncComponent } from './components/FuncComponent';
import { ConditionsComponent } from './components/ConditionsComponent';
import { ConditionComponent } from './components/ConditionComponent';

export class Factory implements IFactory {
    constructor() {

    }
    create(jsonNode, parentComponent?: IComponent) {
        let component;
        switch (jsonNode.componentType) {
            case 'code':
                component = new CodeComponent(parentComponent, jsonNode);
                break;
            case 'action':
                component = new ActionComponent(parentComponent, jsonNode);
                break;
            case 'state':
                component = new StateComponent(parentComponent, jsonNode);
                break;
            case 'options':
                component = new OptionsComponent(parentComponent, jsonNode);
                break;
            case 'option':
                component = new OptionComponent(parentComponent, jsonNode);
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
