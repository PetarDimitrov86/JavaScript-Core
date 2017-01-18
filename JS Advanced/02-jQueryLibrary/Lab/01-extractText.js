function extractText() {
    let textToAppend = $('li');
    let resultText = '';
    for (let text of textToAppend)
        resultText += text.textContent + ', ';
    resultText = resultText.substr(0, resultText.length - 2);
    $('#result').append(resultText);
}

// Version 2 : Shorter
// function extractText() {
//     let liElements = $('li');
//     let resultText = '';
//     [...liElements].forEach(li => resultText += `${li.textContent}, `);
//     $('#result').append(resultText.substr(0, resultText.length - 2));
// }
