var request = require('request');
var ACCESS_TOKEN = null;
var API_END_POINT = 'https://developers.zomato.com/api/v2.1';

var callAPI = function(resource, qs, callback) {
    var options = {
        method: 'GET',
        url: API_END_POINT + resource,
        headers: {
            'user-key': ACCESS_TOKEN,
            'content-type': 'application/json'
        }
    };

    request(options, function(error, response, body) {
        callback(error, response);
    });
};

var Zomato = {
    init : function(user_key) {
        ACCESS_TOKEN = user_key;
    },

    verify: function () {
        callAPI('categories', {}, function () {

        });
    }
};

exports.Zomato = Zomato;
