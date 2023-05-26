const express = require('express');
const bodyParser = require('body-parser');
const { parseString } = require('xml2js');
const fetch = require('node-fetch');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

const fetchData = (callback) => {
  const url = "http://openapi.seoul.go.kr:8088/4d635141516a656f3131337278414b77/xml/GlobalJobSearch/1/5/";

  fetch(url)
    .then((res) => res.text())
    .then((resText) => {
      parseString(resText, (err, result) => {
        if (err !== null) {
          console.log("Failed to get data.");
          callback(err, null);
        } else {
          const jsonResult = JSON.stringify(result); // Convert to JSON string
          callback(null, jsonResult);
        }
      });
    })
    .catch((e) => {
      console.log("Error fetching the feed: ", e);
      callback(e, null);
    });
};

app.get('/api/jobdata', (req, res) => {
  fetchData((err, result) => {
    if (err) {
      res.status(500).send('Error fetching data.');
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
