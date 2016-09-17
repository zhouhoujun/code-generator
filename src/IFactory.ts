import { IComponent } from './IComponent';

export interface IFactory {
    create(json: any, parent?: IComponent): IComponent;
}
