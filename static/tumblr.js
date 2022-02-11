fetch('https://eggscellence.tumblr.com/api/read/json?tagged=words&type=photo&num=5')
    .then(function (response) {
        return response;
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });