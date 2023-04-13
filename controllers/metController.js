var db = require('../models/modelDB');

// Display HomePage.
exports.met = function(req, res) {
    
    
    res.render('met', { title: 'MET calories' });

    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};