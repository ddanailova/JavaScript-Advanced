let solution = function (action) {

    let that = this;
    let actions = {};
    actions.upvote = function () {
        that.upvotes += 1;
    };
    actions.downvote = function () {
        that.downvotes += 1;
    };

    function getRating() {
        let totalVotes = that.upvotes + that.downvotes;
        let voteDif = that.upvotes - that.downvotes;

        if (voteDif >= 0) {
            if (that.upvotes / totalVotes < 0.66) {
                if (totalVotes >= 0 && that.upvotes > 100 && that.downvotes > 100) {
                    return that.rating = "controversial";
                } else {
                    return that.rating = "new";
                }
            }else{
                return that.rating = "hot";
            }
        } else {
            return that.rating = "unpopular";
        }
    }

    actions.score = function () {
        let reportedUp = 0;
        let reportedDown = 0;
        let rating = getRating();
        if (that.upvotes - that.downvotes < 50) {
            reportedUp = that.upvotes + 0.25 * Math.max(that.upvotes, that.downvotes);
            reportedDown = that.upvotes + 0.25 * Math.max(that.upvotes, that.downvotes);
        } else {
            reportedUp = that.upvotes;
            reportedDown = that.downvotes;
        }

        let balance = that.upvotes - that.downvotes;
        console.log(`${Math.ceil(reportedUp)}, ${Math.ceil(reportedDown)}, ${balance}, ${rating}`);
    };

    actions[action]();

    return obj[action]();
};


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
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
