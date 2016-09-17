import { Component } from './Component';

export class TestOptionComponent extends Component {
    constructor(public parent) {
        super();
    }

    extra() {
        return 'test special option';
    }

    exportData() {
        return 'testSpecialOption();';
    }

    exportTemplate() {
        return '${templateData}';
    }
}
