var ZomatoAPI = require(__dirname + '/index');

var api = new ZomatoAPI('YOUR_API_KEY');

// api.verify(function(isVerified) {
//     console.log(isVerified);
// });

api.getCategories(function(error, response) {
    if(error) {
        console.log(error);
    } else {
        console.log(JSON.parse(response.body));
    }
});
