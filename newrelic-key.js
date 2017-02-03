const fs = require('fs');

fs.readFile('newrelic.js', (err, data) => {
  if (err) console.log(err);
  const dataString = data.toString();
  const result = dataString.replace('@@NEW_RELIC_KEY', process.env.NEW_RELIC_KEY);
  fs.writeFileSync('newrelic.js', result);
});
