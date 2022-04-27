// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

function github(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
         window.open("https://www.github.com/"search);
    } else {
        window.open("https://www.github.com");
    }
}

function youtube(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
         window.open("https://www.youtube.com/"search);
    } else {
        window.open("https://www.youtube.com");
    }
}

function odysee(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
         window.open("https://odysee.com/@"search);
    } else {
        window.open("https://odysee.com");
    }
}

function reddit(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.reddit.com/r/"search + "/");
    } else {
        window.open("https://www.reddit.com");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}





