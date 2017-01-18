function extractText() {
    let textToAppend = $('li');
    let resultText = '';
    for (let text of textToAppend)
        resultText += text.textContent + ', ';
    resultText = resultText.substr(0, resultText.length - 2);
    $('#result').append(resultText);
}