// Imports the Google Cloud client library
const PubSub = require('@google-cloud/pubsub');
const express = require('express')
var bodyParser = require('body-parser')

// Creates a client
const pubsub = new PubSub();
const app = express()
const defaultTopic = "projects/costco-202313/topics/testtopic";
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


app.post('/api/messages', (req, res) => {
  pubsub.topic(defaultTopic)
    .publisher()
    .publish(Buffer.from(JSON.stringify(req.body)))
    .then(messageId => {
      console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });

  res.send(req.body);
})

app.get('/api/topics', (req, res) => {
  pubsub.getTopics()
    .then(results => {
      res.send(results[0].map(o => o.name));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
})

app.post('/api/push', (req, res) => {
  console.log(`Received a push notification ${req.body}.`);
  res.send("ok");
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))