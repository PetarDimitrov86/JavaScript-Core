function attachEvents() {
    $('#submit').click(sendMessage);
    $('#refresh').click(receiveMessages);

    function sendMessage(){
        let message = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };
        $.post('https://messenger-8467e.firebaseio.com/messenger.json', JSON.stringify(message))
            .then(receiveMessages);
        $('#content').val('')
    }

    function receiveMessages(){
        $('#messages').empty();
        $.get('https://messenger-8467e.firebaseio.com/messenger.json')
            .then(retrieveChatHistory);

        function retrieveChatHistory(data) {
            let keys = Object.keys(data).sort((m1, m2) => data[m1].timestamp - data[m2].timestamp);
            for (let message of keys){
                let author = data[message].author;
                let content = data[message].content;
                $('#messages').append(`${author}: ${content}\n`);
            }
        }
    }
}