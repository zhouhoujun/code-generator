import modes, { Component } from './Component';
import componentTypes, {IJsonNode, IComponent, ILanguage } from '../IComponent';
import * as _ from 'lodash';

export interface Arg {
    way?: number;
    type?: string;
    name: string;
    val: any;
    miss?: boolean;
}

export interface ArgsJson extends IJsonNode {
    args: Arg[];
}

export class ArgsComponent extends Component implements IComponent {
    name = componentTypes.args;
    constructor(parent: IComponent, jsonData: IJsonNode) {
        super(parent, jsonData);
    }

    exportData(language: ILanguage) {
        return '';
    }

    exportChildrenCode(language: ILanguage) {
        let args = _.map((<ArgsJson>this.jsonData).args || [], it => {
            return _.template(this.getTemplate(language))({
                name: it.name,
                way: it.way ? language.argWays[it.way] : '',
                miss: it.miss ? language.argMiss : '',
                type: it.type || language.defaultType,
                val: _.isUndefined(it.val) ? '' : (language.argAssign + it.val)
            });
        });

        return args.join(',');
    }
}



// export class ArgComponent extends Component {
//     name = componentTypes.arg;
//     constructor(parent: IComponent, jsonData: IJsonNode) {
//         super(parent, jsonData);
//     }

//     protected exportData(language: ILanguage) {
//         return '';
//     }

//     exportChildrenCode(language: ILanguage) {
//         let args = (<ArgsJson>this.jsonData).args || [];
//         args.forEach(it=>{

//         });
//         return '';
//     }
// }
