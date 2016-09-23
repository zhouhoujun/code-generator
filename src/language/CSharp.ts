import { ILanguage } from '../IComponent';

export default <ILanguage>{

    defaultType: 'any',
    methodDefaultType: 'any',
    extends: ':',
    implements: ':',
    exportLevel: [
        '',
        'public',
        'internal'
    ],

    argMiss: '',
    argAssign: ' = ',
    argWays: [
        '',
        'ref',
        'out'
    ],

    // opters: {
    //     '+': '+',
    //     '-': '-',
    //     '*': '*',
    //     '/': '/',
    //     '=': '='
    // },
    defaultLevel: 2,
    levels: [
        'public',
        'protected',
        'private'
    ],

    template: {
        code: `
\${templateData.imports}
\${templateData.namespace}
\${childrenCode}
`,
        class: `
\${templateData.export}class \${templateData.className}\${templateData.extends}\${templateData.implements} {
\${ templateData.fileds }
\${ templateData.attrs }
\${ templateData.constructors }
\${ templateData.methods }
}`,
        params: '${childrenCode}',
        // args: '${childrenCode}',
        args: '${way} ${type} ${name}${miss}${val}',
        constructor: `
\${templateData.openLevel}\constructor(\${ templateData.args }){
    \${childrenCode}
}
`,
        method: `
\${templateData.openLevel}\${ templateData.methodName } (\${ templateData.args }): \${templateData.type} {
    \${childrenCode}
}
`,
        field: `
\${templateData.openLevel}\${ templateData.fieldName }: \${templateData.type}\${templateData.defaultValue}
`,
        attr: '${childrenCode}',
        attr_getter: `
get \${ templateData.methodName } (): \${templateData.type} {
    \${childrenCode}
}`,
        attr_setter: `
set \${ templateData.methodName } (\${ templateData.params }): \${templateData.type} {
    \${childrenCode}
}`,
        func: `
function \${ templateData.funcName } (\${templateData.params}): \${templateData.type} {
    \${childrenCode}
}`,
        lambda: `(\${templateData.params}) => {
        \${childrenCode}
    }`,
        express: '${paramA} ${opter} ${paramsB}',
        if: `
\${ prefix }
if (\${templateData.conditions}) {
\${childrenCode}
}`,
        elseif: ` else if (\${templateData.conditions}) {
\${childrenCode}
}`,
        else: ` else (\${templateData.conditions}) {
\${childrenCode}
}`,
        switch: `
switch (\${templateData.key}) {
    \${ templateData.cases }
    default:
        \${childrenCode}
        break;
}`,
        case: `
case \${templateData.key}:
    \${childrenCode}
    break;
`,

        condition: 'condition'
    }

}
