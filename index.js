require('dotenv').config();

const modmail = require('modmail.js') 

modmail.on({ 
  token: process.env.token, 
  inbox: process.env.inbox, 
  prefix: '>', 
  message: '@here', 
  inline: true, 
  plugins: []

})
