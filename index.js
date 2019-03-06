const config = require('./config.json')

var Twit = require('twit')

var T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var newZealand = [ '-38.53', '173.45', '-48.39', '178.52' ]

var stream = T.stream('statuses/filter', { track: 'Capitals', language: 'en'})

stream.on('tweet', function (tweet) {
  if (tweet.user.verified === true){
    //console.log('Username: '+tweet.user.screen_name)
    //console.log('Tweet text: '+tweet.text)
    //console.log(tweet.user.verified)
    //console.log(tweet.user.name)
    console.log(tweet)
  }
})