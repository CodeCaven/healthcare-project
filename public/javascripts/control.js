function guides(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/healthguidelines";
    window.location.assign(new_path);
}

function private(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/privatehealth";
    window.location.assign(new_path);
}