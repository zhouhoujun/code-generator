export default {
    code: '${childrenCode}',
    defaultType: 'any',
    extends: 'extends',
    implements: 'implements',
    defaultLevel: 0,
    levels: [
        'public',
        'protected',
        'private'
    ],
    class: `
export class \${templateData.className}\${templateData.extends}\${templateData.implements} {
\${ templateData.fileds }
\${ templateData.attrs }
\${ templateData.constructors }
\${ templateData.methods }
}`,
    params: '${childrenCode}',
    constructor: `
constructor(\${ templateData.params }){
    \${childrenCode}
}
`,
    method: `
\${templateData.openLevel}\${ templateData.methodName } (\${ templateData.params }): \${templateData.type} {
    \${childrenCode}
}
`,
    field: `
\${templateData.openLevel}\${ templateData.fieldName }: \${templateData.type}
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
    state: 'state',
    options: 'options',
    option: 'option',
    conditions: 'conditions',
    condition: 'condition'
}
