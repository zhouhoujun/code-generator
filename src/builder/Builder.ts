import { IBuilder } from '../IBuilder';
import { IFactory } from '../IFactory';
import { IComponent } from '../IComponent';

export class Builder implements IBuilder {
    constructor(private factory: IFactory) {

    }

    build(jsonData) {
        if (!jsonData) {
            return;
        }
        let root = this.buildRoot(jsonData);
        this.buildNode(jsonData, root);
        return root;
    }

    buildNode(jsonData, parent: IComponent) {
        if (Array.isArray(jsonData.children)) {
            jsonData.children.forEach((v) => {
                let comp = this.factory.create(v, parent);
                parent.add(comp);
                this.buildNode(v, comp);
            });
        }
    }

    buildRoot(jsonData): IComponent {
        return this.factory.create(jsonData);
    }
}
