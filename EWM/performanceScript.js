const fs = require("fs");
const path = require("path");
const { Parser } = require('json2csv');


const fields = ["Transaction Label", "Duration", "Date of Run", "Time of Run"]
const resultsArray = [["Login", 2.5, "9/29/21", "9:01 PM"], ["Different", 2.1, "9/30/21", "1:00 AM"]]
const fileName = path.join("C:\\Users\\rmacdonald\\", "CSV", "EWMPerformance.csv");
const parser = new Parser();
let csvRaw = parser.parse(resultsArray);
let csv = csvRaw.slice(16);
console.log("Write to file: " + fileName);


        if (!fs.existsSync(fileName)){
        csv = csvRaw.replace('"0","1","2","3"', 'Transaction Label, Duration, Date of Run, Time of Run');
        console.log("Creating new CSV file with headers.")
        } else {
            console.log("Appending results to existing file.")
        }
        fs.appendFileSync(fileName, csv, (err) => {
            if (err) console.error(err);

        });
    










