function solution(action){
    switch(action){
        case 'upvote': this.upvotes++; break;
        case 'downvote': this.downvotes++; break;
        case 'score': return score(this)
    }

    function score(obj){
        let rating = '';
        let totalVotesScore = obj.upvotes - obj.downvotes;
        let totalVotesCount = obj.upvotes + obj.downvotes;
        let reportedUpvotes = obj.upvotes;
        let reportedDownvotes = obj.downvotes;
        if (totalVotesCount > 50) {
            let votesToAdd = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);
            reportedUpvotes = obj.upvotes + votesToAdd;
            reportedDownvotes = obj.downvotes + votesToAdd;
        }
        if (totalVotesCount < 10)
            rating = 'new';
        else if (totalVotesScore < 0)
            rating = 'unpopular';
        else if (obj.upvotes / totalVotesCount > 0.66)
            rating = 'hot';
        else if (obj.upvotes > 100 || obj.downvotes > 100)
            rating = 'controversial';
        else
            rating = 'new';

        return [reportedUpvotes, reportedDownvotes, totalVotesScore, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i=0; i< 50; i++){
    solution.call(post, 'downvote');
}       // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
