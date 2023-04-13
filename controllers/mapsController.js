var db = require('../models/modelDB');

// Display HomePage.
exports.maps = function(req, res) {
    
    // sql
    let survey_sql = "SELECT * FROM patient_survey ";

    // storage for render
    let survey_list; 

    // execute promise for sql query
    let p1 = db.execute(survey_sql).then(
        result => survey_list = result
    ).catch(
        error => error_handle(error)
    );

    

	// wait for all the promises and call next function
    Promise.all([p1]).then(
        result => res.render('maps', {ejs_survey_list: survey_list})
                                                
    ).catch(
        error => error_handle(error)
    );
    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};