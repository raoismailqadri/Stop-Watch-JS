var isStop = true;
var hrs = 0;
var min = 0;
var sec = 0; 

// global varuables>>>

const hours = document.getElementById('hrs');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

let startTimer = document.getElementById('start');
let stopTimer = document.getElementById('stop');
let resetTimer = document.getElementById('reset');

function start()
{
    if (isStop == true){
        isStop = false;
        timer();
    }
}
function timer()
{
    if (isStop == false){
        
        sec++;

        // HERE WE ARE APPLYING IF STATEMENT FOR INCREMENT IN EACH sec;min;hrs

        if (sec == 60){
            sec = 0;
            min++;
        }
        if (min == 60){
            min = 0;
            hrs++;
        }
            
        secs.innerText = sec; 
        mins.innerText = min; 
        hours.innerText = hrs;
        setTimeout("timer()",1000);
    }
}


function stop()
{
    isStop = true;
}

function reset()
{   
    sec = 0;
    min = 0;
    hrs = 0;
    secs.innerText = sec; 
    mins.innerText = min; 
    hours.innerText = hrs;
}

// IF STATEMENT IS APPLYING TO SET '00' ON SCREEN

if (sec < 10)
{
    sec = "0" + sec;
}
if ( min < 10)
{
    min = "0" + min;
}
if ( hrs < 10)
{
    hrs = "0" + hrs;
}