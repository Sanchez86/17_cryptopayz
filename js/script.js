/*----------end---browsers----------------*/
$(document).ready(function () {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isFirefox) $('body').addClass('isFirefox');
    if (isChrome) $('body').addClass('isChrome');
    if (isSafari) $('body').addClass('isSafari');
    if (isIE) { $('body').addClass('isIE'); }
    if (isEdge) $('body').addClass('isEdge');
});
function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}
/*----------end---browsers----------------*/

var timeouts = [];
var intspawn = -1;
var delay = 8000;
var steps = 4;
$(document).ready(function () {
    setAnim(true);
    clearInterval(intspawn);
    setInterval(function () {
        setAnim();
    }, steps * delay);
    
    var bit_icon1 = $('.bit_icon1');
    TweenMax.to(bit_icon1, 3, { bezier: [{ left: 100, top: 130 }, { left: 360, top: 160 }, { left: 560, top: 340 }], ease: Power1.easeInOut });

    var bit_icon2 = $('.bit_icon2');
    TweenMax.to(bit_icon2, 3, { delay: 1, bezier: [{ right: 300, top: 170 }, { right: 400, top: 85 }, { right: 600, top: 80 }], ease: Power1.easeInOut });

    var bit_icon3 = $('.bit_icon3');
    TweenMax.to(bit_icon3, 3, { delay: 2, bezier: [{ left: 290, top: 390 }, { left: 290, top: 280 }, { left: 394, top: 128 }], ease: Power1.easeInOut });
});
$('.wrapper').delay(500).fadeIn(900);

function slide(active) {
    $('#wrapper').removeClass('active1 active2 active3 active4');
    $('#wrapper').addClass(active);
};


var setAnim = function (firstStart) {
    for (var i in timeouts) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
    for (var i = 0; i < steps; i++) {
        (function (i) {
            timeouts.push(setTimeout(function () {
                var curr = 'active' + (i + 1);
                
                if (curr == "active1" && !firstStart) {
                    setTimeout(
                        function () { 
                            $('.bit_icon').css('opacity', '1')
                        }
                    , 4000);
                    
                    var bit_icon1 = $('.bit_icon1');
                    TweenMax.to(bit_icon1, 3, { delay: 2, bezier: [{ left: 100, top: 130 }, { left: 360, top: 160 }, { left: 560, top: 340 }], ease: Power1.easeInOut });

                    var bit_icon2 = $('.bit_icon2');
                    TweenMax.to(bit_icon2, 3, { delay: 2.5, bezier: [{ right: 300, top: 170 }, { right: 400, top: 85 }, { right: 600, top: 80 }], ease: Power1.easeInOut });

                    var bit_icon3 = $('.bit_icon3');
                    TweenMax.to(bit_icon3, 3, { delay: 3, bezier: [{ left: 290, top: 390 }, { left: 290, top: 280 }, { left: 394, top: 128 }], ease: Power1.easeInOut });
                } else if (curr != "active1") {
                    
                    $('.bit_icon').css('opacity', '0')
                       
                    var bit_icon1 = $('.bit_icon1');
                    TweenMax.to(bit_icon1, 3, { bezier: [{ left: 560, top: 340 }, { left: 360, top: 160 }, { left: 100, top: 130 }], ease: Power1.easeInOut });

                    var bit_icon2 = $('.bit_icon2');
                    TweenMax.to(bit_icon2, 3, { delay: 1, bezier: [{ right: 600, top: 80 }, { right: 400, top: 85 }, { right: 300, top: 170 }], ease: Power1.easeInOut });

                    var bit_icon3 = $('.bit_icon3');
                    TweenMax.to(bit_icon3, 3, { delay: 2, bezier: [{ left: 394, top: 128 }, { left: 290, top: 280 }, { left: 290, top: 390 }], ease: Power1.easeInOut });
                };
                firstStart = true;
                slide(curr);
            }, i * delay));
        })(i);
    }
}
/*
$('.slide1').on('click', function () {
    slide('active1');
    setTimeout(
        function() {
            var bit_icon1 = $('.bit_icon1');
            TweenMax.to(bit_icon1, 3, { bezier: [{ left: 100, top: 130 }, { left: 360, top: 160 }, { left: 560, top: 340 }], ease: Power1.easeInOut });

            var bit_icon2 = $('.bit_icon2');
            TweenMax.to(bit_icon2, 3, { delay: 1, bezier: [{ right: 300, top: 170 }, { right: 400, top: 85 }, { right: 600, top: 80 }], ease: Power1.easeInOut });

            var bit_icon3 = $('.bit_icon3');
            TweenMax.to(bit_icon3, 3, { delay: 2, bezier: [{ left: 290, top: 390 }, { left: 290, top: 280 }, { left: 394, top: 128 }], ease: Power1.easeInOut });
        }, 4000)
    
});
$('.slide2').on('click', function () {
    slide('active2');
    var bit_icon1 = $('.bit_icon1');
    TweenMax.to(bit_icon1, 3, { bezier: [{ left: 560, top: 340 }, { left: 360, top: 160 }, { left: 100, top: 130 }], ease: Power1.easeInOut });

    var bit_icon2 = $('.bit_icon2');
    TweenMax.to(bit_icon2, 3, { delay: 1, bezier: [{ right: 600, top: 80 }, { right: 400, top: 85 }, { right: 300, top: 170 }], ease: Power1.easeInOut });

    var bit_icon3 = $('.bit_icon3');
    TweenMax.to(bit_icon3, 3, { delay: 2, bezier: [{ left: 394, top: 128 }, { left: 290, top: 280 }, { left: 290, top: 390 }], ease: Power1.easeInOut });
});
$('.slide3').on('click', function () {
    slide('active3');
});
$('.slide4').on('click', function () {
    slide('active4');
});



$('.yourself').on('click', function () {
    setAnim();
    clearInterval(intspawn);
    setInterval(function () {
        setAnim();
    }, steps * delay);
});
*/
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var time = hours + ':' + minutes + ':';

$('.bit1').animate({ num: 20 }, {
    step: function (num) {
        this.innerHTML = time + 00 + '<span> A.M</span>'
    }
});

$('.bit2').animate({ num: 20 }, {
    duration: 3000,
    step: function (num) {
        this.innerHTML = time + num.toFixed(2) + '<span> A.M</span>'
    }
});
$('.bit3').animate({ num: 40 }, {
    duration: 4000,
    step: function (num) {
        this.innerHTML = time + num.toFixed(2) + '<span> A.M</span>'
    }
});
$('.bit4').animate({ num: 60 }, {
    duration: 5000,
    step: function (num) {
        this.innerHTML = time + num.toFixed(2) + '<span> A.M</span>'
    }
});


/*
$('.wrapper').delay(500).fadeIn(900);
(function () {
    var rotateY = 0;
    var rotateX = 0;
    document.onkeydown = function (e) {
        if (e.keyCode === 37) rotateY -= 4
        else if (e.keyCode === 38) rotateX += 4
        else if (e.keyCode === 39) rotateY += 4
        else if (e.keyCode === 40) rotateX -= 4

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
        'rotateX(' + rotateX + 'deg)' 
    }
})();
*/