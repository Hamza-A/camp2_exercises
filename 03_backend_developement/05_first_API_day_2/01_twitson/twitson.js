const request = require("request");
const oauth = require("OAuth");

//TWITTER AUTHENTIFICATION

const OAuth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A",
  null,
  "HMAC-SHA1"
);

//WATSON AUTHENTIFICATION
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const watsonUrl = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");



function fetchTweets(name, callback){
  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${name}`;
  console.log(url);
  OAuth.get(url, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {

    const text = JSON.parse(data).map(function (tweet) {
      return tweet.text;
    });

    const joinedText = text.join();
    callback(joinedText);
  });

}


function getEmotions(text){
  console.log(text);

  const uri = encodeURI(watsonUrl + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {

    console.log("joy rate: " + JSON.parse(body).emotion.document.emotion.joy * 100 + " %");
    console.log("sadness rate: " + JSON.parse(body).emotion.document.emotion.sadness * 100 + " %");

  });
  return request;
}



fetchTweets("HamzaHLR", getEmotions);
