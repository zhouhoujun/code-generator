import { IComponent } from './IComponent';

export interface IBuilder {
    build(json: any): IComponent;
}
