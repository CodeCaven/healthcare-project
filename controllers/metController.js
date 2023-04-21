var db = require('../models/modelDB');
const fs = require('fs');

// Display HomePage.
exports.met = function(req, res) {
    
    // read json file
    let metJson = fs.readFileSync("./public/jsons/activities-met-table.json", 'utf8');
    
    res.render('met', { ejs_met: metJson });

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};