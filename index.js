require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "debug" },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'domenik1024',
    password: `oauth:${process.env.TWITCH_OAUTH_TOKEN}`
  },
  channels: [ 'teamspeak_tv', 'domenik1023' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  if (self) return;
  if (tags['display-name'] == 'TeamSpeak_TV' || tags['display-name'] == 'Viantes' || tags['display-name'] == 'soraundshiro' || tags['display-name'] == 'FunnysBanana' || tags['display-name'] == 'domenik1023' || tags['display-name'] == 'bananasboti' || tags['display-name'] == 'PlatinCasino140')
    {
      client.say(channel, '!redeem');
      console.log(`[${channel}]: ${tags['display-name']}: ${message}`);
      console.log(`[${channel}]: domenik1024: !redeem || Send!`)
    }
    else
    {
    }
    
});
