#!/usr/local/bin/node

const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

let translator = {
  // property: shall be the acronym of the file, 
  // value: shall be the name of the file, 
  // e.g.: "a": "some-long-filepath-you-want-to-shorten.pdf"
};

function swap(json) {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}

translator = swap(translator);

let result = {};
fs.createReadStream('result.csv')
  .pipe(csv({ headers: ["file", "searchstring", "occurence"] }))
  .on('data', (row) => {
    console.log(row);
    if (!result[row["searchstring"]]) {
      result[row["searchstring"]] = ""
    }
    if (row["occurence"] && row["occurence"].trim().length > 0) {
      let filename = path.basename(row["file"])
      result[row["searchstring"]] += translator[filename] + ":" + row["occurence"]
    }
  })
  .on('end', () => {
    console.log(result);
    for (var property in result) {
      if (result.hasOwnProperty(property)) {
        // do stuff
        console.log(result[property]);
      }
    }
    console.log('CSV file successfully processed');
  });
