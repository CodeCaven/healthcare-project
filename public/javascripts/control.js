function guides(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/healthguidelines";
    window.location.assign(new_path);
}

function private(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/privatehealth";
    window.location.assign(new_path);
}

function maps(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/maps";
    window.location.assign(new_path);
}

function met(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/met";
    window.location.assign(new_path);
}

function symptom(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/symptom";
    window.location.assign(new_path);
}

function tree(){
    var new_path = "http://" + window.location.hostname + ":" + window.location.port + "/tree";
    window.location.assign(new_path);
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function revealX() {
    var reveals = document.querySelectorAll(".revealX");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


const cities = [  {    
            city: "Sydney",    
            location: [151.2093, -33.8688]
        },
        {
            city: "Melbourne",
            location: [144.9631, -37.8136]
        },
        {
            city: "Brisbane",
            location: [153.0251, -27.4698]
        },
        {
            city: "Perth",
            location: [115.8570, -31.9535]
        },
        {
            city: "Adelaide",
            location: [138.6007, -34.9285]
        },
        {
            city: "Newcastle",
            location: [151.7500, -32.9167]
        },
        {
            city: "Canberra",
            location: [149.1300, -35.2809]
        },
        {
            city: "Sunshine Coast",
            location: [153.0667, -26.6500]
        },
        {
            city: "Townsville",
            location: [146.8169, -19.2580]
        },
        {
            city: "Cairns",
            location: [145.7781, -16.9186]
        },
        {
            city: "Darwin",
            location: [130.8456, -12.4634]
        },
        {
            city: "Alice Springs",
            location: [133.8807, -23.6980]
        },
        {
            city: "Hobart",
            location: [147.3250, -42.8806]
        },
        {
            city: "Launceston",
            location: [147.1447, -41.4419]
        },
        {
            city: "Bendigo",
            location: [144.2833, -36.7570]
        },
        {
            city: "Exmouth",
            location: [114.1667, -21.9333]
        }
        ];


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    // drag functions
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


