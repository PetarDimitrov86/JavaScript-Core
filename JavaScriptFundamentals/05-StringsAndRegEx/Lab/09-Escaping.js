function htmlEscape(input) {
    let result = '<ul>\n';
    for (let code of input){
        let replacedText = code.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        result += '  <li>' + replacedText + '</li>\n';
    }
    result += '</ul>';
    return result;
}

console.log(htmlEscape(['<b>unescaped text</b>', 'normal text']));