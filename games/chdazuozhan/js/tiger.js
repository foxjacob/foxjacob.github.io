/* jshintbrowser: true */
var fingerMatch = {
    tiger: 2,
    fly: 1
};
var fingers, score;
var nextSymbol, currentSymbol, running;
var startEvent, endEvent;
var timerStart, timerLength;
var shareDesc;

timerLength = 15000; // 15s

function g( id ) {
    return document.getElementById( id );
}

//g( 'start' ).onclick = start;

function start() {
    $("#layer2").hide();
    $("#layer3").show();
    g( 'teach' ).style.display = 'none';
    g( 'start' ).style.display = 'none';
    g( 'share' ).style.display = 'none';
    //g( 'more' ).style.display = 'none';
    g( 'game' ).style.display = 'block';
    g( 'timer' ).style.display = 'block';
    g('score').innerHTML = '战果：0';
    g( 'timer' ).innerHTML = '15,00';
    score = 0;
    fingers = 0;
    timerStart = 0;
    nextSymbol = generate();
    next();
    running = true;
    document.title = '感恩节到了，吃货大作战！';
}

function stop() {
    var shareDesc = '感恩大作战，我吃掉了'+score+'盘大餐，快来挑战我吧！';
    running = false;

    g( 'timer' ).innerHTML = "00,00";
   
    document.title = shareDesc;

    $(".layer4_result").html('吃货大作战，好厉害吃掉 <strong> ' + score + '</strong> 盘，牛叉~')
    $("#layer3").hide();
    $("#layer4").show();
}

function next() {
    currentSymbol = nextSymbol;
    nextSymbol = generate();
    update();
}

function generate() {
    return Math.random() > 0.5 ? 'red' : 'green';
}

function update() {
    g( 'current' ).src = 'img/'+currentSymbol + '.png';
    g('next').src = 'img/' + nextSymbol + '.png';
    
}

function slash( color, duration ) {
    duration = duration || 100;
    g( 'slash' ).style.background = color;
    g( 'slash' ).style.webkitAnimationDuration = duration + 'ms';
    g( 'slash' ).classList.add( 'play' );
    setTimeout( function () {
        g( 'slash' ).classList.remove( 'play' );
    }, duration );
}


function clock() {
    var ellapsed = +new Date() - timerStart;
    var left = ( timerLength - ellapsed ) / 1000;
    if ( left <= 0 ) {
        stop();
    } else if ( running ) {
        g( 'timer' ).innerHTML = left.toFixed( 2 );
        setTimeout( clock );
    }
}

if ( 'ontouchstart' in document.body ) {
    startEvent = 'touchstart';
    endEvent = 'touchend';
} else {
    startEvent = 'mousedown';
    endEvent = 'mouseup';
}

g( 'game' ).addEventListener( startEvent, function ( e ) {
    e.preventDefault();
    if ( !running ) return;
    fingers += e.touches ? e.touches.length : 1;
    //console.log(fingers);
    if ( !timerStart ) {
        timerStart = +new Date();
        clock();
    }
} );

g( 'game' ).addEventListener( endEvent, function ( e ) {
    e.preventDefault();
    if ( !running || !fingers ) return;
    if ( ( fingers > 1 && currentSymbol == 'red' ) ||
        ( fingers == 1 && currentSymbol == 'green' ) ) {
        fingers = 0;
        next();
        g( 'score' ).innerHTML = '战果：' + ( ++score );
        slash( 'red' );
        g( 'current' ).style.webkitTransform = ( score % 2 ) ? 'scale(-1, 1)' : '';
    } else {
        slash( 'red', 3000 );
        stop();
    }
    fingers = 0;
} );

//g( 'game' ).addEventListener( 'contextmenu', function ( e ) {
//    e.preventDefault();
//} );

//g( 'share' ).onclick = function () {
//    
//   g( 'share-mask' ).style.display = 'block';    
//    
//};

//if (endgame.env.ee) {
//    g( 'share' ).style.display = 'none';
//}
//g( 'share-mask' ).addEventListener( startEvent, function () {
//    g( 'share-mask' ).style.display = 'none';
//} );

function more() {
    window.location.href = v;
}