require("dotenv").config();
const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const postEmoji = () => {
  T.post("statuses/update", { status: "😷" }, function (err, data, response) {
    console.log(data);
  });
};

postEmoji();
