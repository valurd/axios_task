require('dotenv').config();
const axios = require('axios');

const CITY = process.env.CITY;

axios
  .get(`https://wttr.in/${CITY}?format=%t`)
  .then((res) => console.log(`Temperature in ${CITY}: ${res.data}`))
  .catch((err) => console.log('Error:', err.message));
