let tiFi = 0;
let tiFiday = 0;
let tiFiScale = 1;
let happy = 100;
let saturation = 40;
let sleep = 70;
let domTime = document.getElementById ("Zeit")
let domtag = document.getElementById ("Tag")
let domtz = document.getElementById ("tz")
let feed = document.getElementById("füttern")
let gosleep = document.getElementById("schlafen")
let play = document.getElementById("spielen")
let fröhlich = document.getElementById("fröhlich")
let sättigung = document.getElementById("sättigung")
let ausgeschlafen = document.getElementById("ausgeschlafen")
let x2 = document.getElementById("bar2").value
let x3 = document.getElementById("bar3").value
let x1 = document.getElementById("bar1").value


function updateCurrentTime () {
    domtag.innerText = tiFiday;
    domTime.innerText = tiFi; //  new Date ().toISOString ()
    if (tiFi <= 12){
        domtz.innerText = "morgens"
    } else if (tiFi >= 18){
        domtz.innerText = "abends"
    } else {
        domtz.innerText = "mittags"
        
    }
}
function render(){
    fröhlich.innerText = happy;
    sättigung.innerText = saturation;
    ausgeschlafen.innerText = sleep;

}

function mainloop () {
    updateCurrentTime ();
    tiFi += tiFiScale; 
    if (tiFi == 24){
        tiFi = 0
        tiFiday = tiFiday + 1
    } 
    setTimeout (
        mainloop,
        10000 //24 stunden sind 60min 24960
    )    
    if (saturation >= 100){
        saturation = 100
    } else if (saturation <= 0){
        saturation = 0
    }
    if (sleep >= 100){
        sleep = 100
    } else if (sleep <= 0){
        sleep = 0
    }
    if (happy >= 100){
        happy = 100
    } else if (happy <= 0){
        happy = 0
    }
    
    render();
    happy -= tiFiScale * 2;
    sleep -= tiFiScale * 2;
    saturation -= tiFiScale * 2;
  
}

mainloop();

function buttononclick(button){
    if (saturation <= 100 && sleep <= 100 && happy <= 100){
        if (button == 1){ 
            saturation = saturation + 50
            sleep = sleep - 20
            happy = happy + 20
        } else if (button == 2){
            if (tiFi >= 18){
                if (sleep <= 50){
                    sleep = 100
                    happy = happy - 20
                    saturation = saturation - 20
                } else {
                    alert("Du bist nicht müde!")
                }
            } else {
                alert ("Du kannst nur nachts schlafen!")
            }
        } else {
            happy = happy + 50
            sleep = sleep - 20
            saturation = saturation - 20
        }}
    render ()

}