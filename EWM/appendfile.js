console.log(fileExists)
const fs = require("fs");
const path = require("path");
const newLine = '\r\n';
json2csv = json2csv.parse;

let fields = ["Transaction Label", "Duration", "Date of Run", "Time of Run"];

const toCsv = {
    data: resultsArray,
    fields: fields,
    header: false
    };
    
const fileName = path.join(path.resolve(), "CSV", "EWMPerformance.csv" )

console.log("Write to file: " + fileName);
console.log("Data to write: " + JSON.stringify(toCsv));



    const csv = json2csv(toCsv) + newLine
    console.log("csv: " + csv)
    fs.appendFile(fileName, csv, (err) => {
      if (err) console.error(err);
     console.log('The data was appended to file.');
    });
  
    //write the headers and newline
    console.log('New file, writing headers');
    fields = fields + newLine;

    fs.writeFile(fileName, fields, (err) => {
      if (err) return console.error(err);
      console.log('file saved');
    })
  







   