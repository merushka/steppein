const lofi = new Audio('sounds/lofi.mp3')
const thankyou = new Audio('sounds/thankyou.wav')

function lofiTog() {
    if (lofi.paused == true) {
        lofi.play();
    } else {
        lofi.pause();
    }
}
let starter = 1;
$('body').mouseover(function () {
    if (starter == 1) {
        lofi.play();
        if (lofi.paused == false) {
            starter = 0;
        }
    }
});

$(document).keypress(function (e) { 
    if (e.key == 'b') {
        lofiTog();
    }
});

// how to w3
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$('#thankyou').click(function () { 
    thankyou.play();
});
