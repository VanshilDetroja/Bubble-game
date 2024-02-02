var timer = 60;
var score = 0;
var hit = 0;

function makeBubble(){
var clutter = "";

for(var i =1; i<=126; i++)
{
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer()
{
    var timerint = setInterval(function()
    {
        if (timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
        }
    },1000);
}

function newHit()
{
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hit ;
}

function incscore()
{
    score = score + 1;
    document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#pbtm")
.addEventListener("click",function (details)
{
    var clicknum = Number(details.target.textContent);
    if (clicknum == hit)
    {
        incscore();
        makeBubble();
        newHit();
    }
});

makeBubble();
runTimer();
newHit();