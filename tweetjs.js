// TweetJS.com - Display your tweets on your website using Javascript alone
// Copyright 2019 Infinite Loop Development Ltd - InfiniteLoop.ie
// Do not remove this notice.
var XMLHttpRequest = require("xhr2");
const tweetArr = [];
const TweetJs = {
  ListTweetsOnUserTimeline: function (screenName, callback) {
    TweetJs._callApi(
      {
        Action: "ListTweetsOnUserTimeline",
        ScreenName: screenName,
      },
      callback
    );
  },
  Search: function (query, callback) {
    TweetJs._callApi(
      {
        Action: "Search",
        Query: query,
      },
      callback
    );
  },
  _callApi: function (request, callback) {
    var xhr = new XMLHttpRequest();
    URL = "https://www.tweetjs.com/API.aspx";
    xhr.open("POST", URL);
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        callback(JSON.parse(xhr.response));
      }
    };
    xhr.send(JSON.stringify(request));
  },
};

TweetJs.Search("#thane", function (data) {
  data.statuses.map((el) => {
    tweetArr.push(el.text);
  });
  console.log(tweetArr); //Your data is in tweetArr array. Keep filename as it is and function name as it is too.
  // Use this data to and feed elements one by one to sentiment analyzer
});
