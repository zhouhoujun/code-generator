import { IJsonNode, IComponent } from './IComponent';

export interface IFactory {
    create(json: IJsonNode, parent?: IComponent): IComponent;
}
