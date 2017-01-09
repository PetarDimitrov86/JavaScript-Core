function hideInfo(input){
    let finalText = input.join('\n');

    let pattern1 = /(\*[A-Z][A-Za-z]*)(?=\s|$|\n)/g;
    let pattern2 = /(\+[0-9-]{10})(?=\s|$|\n)/g;
    let pattern3 = /(![A-Za-z0-9]+)(?=\s|$|\n)/g;
    let pattern4 = /(_[A-Za-z0-9]+)(?=\s|$|\n)/g;

    finalText = finalText.replace(pattern1, encrypt);
    finalText = finalText.replace(pattern2, encrypt);
    finalText = finalText.replace(pattern3, encrypt);
    finalText = finalText.replace(pattern4, encrypt);

    function encrypt(match){
        return '|'.repeat(match.length);
    }

    return finalText
}
