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
  if (tags['display-name'] == 'teamspeak_tv')
    {
      client.say(channel, '!redeem');
      console.log(`[${channel}]: ${tags['display-name']}: ${message}`);
      console.log(`[${channel}]: domenik1024: !redeem || Send!`)
    }
    else if(tags['display-name'] == 'viantes')
    {
      client.say(channel, '!redeem');
      console.log(`[${channel}]: ${tags['display-name']}: ${message}`);
      console.log(`[${channel}]: domenik1024: !redeem || Send!`)
    }
    else if(tags['display-name'] == 'soraundshiro')
    {
      client.say(channel, '!redeem');
      console.log(`[${channel}]: ${tags['display-name']}: ${message}`);
      console.log(`[${channel}]: domenik1024: !redeem || Send!`)
    }
    else if(tags['display-name'] == 'funnysbanana')
    {
      client.say(channel, '!redeem');
      console.log(`[${channel}]: ${tags['display-name']}: ${message}`);
      console.log(`[${channel}]: domenik1024: !redeem || Send!`)
    }
    else if(tags['display-name'] == 'domenik1023')
    {
      client.say(channel, '!redeem');
      console.log(`[${channel}]: ${tags['display-name']}: ${message}`);
      console.log(`[${channel}]: domenik1024: !redeem || Send!`)
    }
    else
    {
    }
});