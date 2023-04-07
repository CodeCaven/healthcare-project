var db = require('../models/modelDB');

// Display HomePage.
exports.private = function(req, res) {
    
    // sql
    let priv_age_sql = "SELECT * FROM private_age_group ";
    let priv_care_sql = "SELECT * FROM private_care_type ";
    let priv_charge_sql = "SELECT * FROM private_charge ";
    let priv_cost_sql = "SELECT * FROM private_cost ";
    let priv_fund_sql = "SELECT * FROM private_fund ";

    // storage for render
    let priv_age_list; 
    let priv_care_list;
    let priv_charge_list; 
    let priv_cost_list;
    let priv_fund_list; 

    // execute promise for sql query
    let p1 = db.execute(priv_age_sql).then(
        result => priv_age_list = result
    ).catch(
        error => error_handle(error)
    );

    // execute promise for sql query
    let p2 = db.execute(priv_care_sql).then(
        result => priv_care_list = result
    ).catch(
        error => error_handle(error)
    );

    // execute promise for sql query
    let p3 = db.execute(priv_charge_sql).then(
        result => priv_charge_list = result
    ).catch(
        error => error_handle(error)
    );

    // execute promise for sql query
    let p4 = db.execute(priv_cost_sql).then(
        result => priv_cost_list = result
    ).catch(
        error => error_handle(error)
    );

    // execute promise for sql query
    let p5 = db.execute(priv_fund_sql).then(
        result => priv_fund_list = result
    ).catch(
        error => error_handle(error)
    );

	// wait for all the promises and call next function
    Promise.all([p1, p2, p3, p4, p5]).then(
        result => res.render('privatehealth', {ejs_age_list: priv_age_list,
                                                ejs_care_list: priv_care_list,
                                                ejs_charge_list: priv_charge_list,
                                                ejs_cost_list: priv_cost_list,
                                                ejs_fund_list: priv_fund_list})
    ).catch(
        error => error_handle(error)
    );
    
    function error_handle(e){
        console.log(e.name + ": " + e.message);
    }

};